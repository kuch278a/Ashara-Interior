import { initializeApp, getApps, getApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  setDoc,
  deleteDoc,
  onSnapshot
} from 'firebase/firestore';
import {
  getAuth,
  signInWithEmailAndPassword,
  signInAnonymously,
  signOut
} from 'firebase/auth';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { DEFAULT_CONSULTATION_LEADS, DEFAULT_PROJECTS_LIST, DEFAULT_TESTIMONIALS_LIST } from '../data/defaultData.js';
import { compressImage } from '../utils/imageOptimizer.js';
import {
  readLocalJson,
  writeLocalJson,
  getLocalTombstones,
  mergeWithDefaultProjects,
  mergeWithDefaultTestimonials,
  getInitialProjects,
  getInitialTestimonials
} from './localCache.js';

// Re-export the SDK-free cache reads under the historical names so every
// importer keeps working unchanged.
export { getInitialProjects, getInitialTestimonials };

// Firebase configuration from environment variables only.
// Never hardcode live keys here — .env is gitignored and CI injects
// the values from GitHub secrets at build time.
const firebaseConfig = {
  apiKey: import.meta.env?.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env?.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env?.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env?.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env?.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env?.VITE_FIREBASE_APP_ID
};

// Check if live Firebase credentials are provided
export const isFirebaseConfigured = Boolean(
  firebaseConfig.apiKey &&
  firebaseConfig.projectId &&
  !firebaseConfig.apiKey.includes('your_')
);

// Initialize Firebase App
let app;
let db = null;
let auth = null;
let storage = null;

if (isFirebaseConfigured) {
  try {
    app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
    db = getFirestore(app);
    auth = getAuth(app);
    storage = getStorage(app);
  } catch (error) {
    console.warn('Firebase initialization error, using local storage fallback:', error);
  }
}

const isCloudReady = () => Boolean(isFirebaseConfigured && db);

/**
 * Automatically ensure an active Firebase Auth session for Super Admin actions.
 * Guarantees that Firestore security rules (requiring request.auth != null) grant full access.
 */
async function ensureFirebaseAuth() {
  if (isFirebaseConfigured && auth) {
    if (auth.currentUser) return auth.currentUser;
    try {
      const credential = await signInAnonymously(auth);
      return credential.user;
    } catch (error) {
      console.warn('Anonymous Firebase auth failed:', error);
      return null;
    }
  }
  return null;
}

/**
 * Backup an item before it is deleted
 */
async function backupDeletedItem(collectionName, itemObj) {
  if (!itemObj) return;
  try {
    const backupData = {
      ...itemObj,
      originalCollection: collectionName,
      deletedAt: new Date().toISOString()
    };

    if (isCloudReady()) {
      await ensureFirebaseAuth();
      await addDoc(collection(db, 'deleted_items'), backupData);
    }

    const backups = readLocalJson('ashara_deleted_items', []);
    backups.push(backupData);
    writeLocalJson('ashara_deleted_items', backups.slice(-50));
  } catch (err) {
    console.warn('Backup of deleted item failed:', err);
  }
}

async function addTombstone(id) {
  const key = String(id);
  try {
    const tombstones = getLocalTombstones();
    tombstones.add(key);
    writeLocalJson('ashara_deleted_defaults', Array.from(tombstones));
  } catch (e) {
    console.warn('Failed to record deletion locally:', e);
  }
  if (isCloudReady()) {
    try {
      await ensureFirebaseAuth();
      await setDoc(doc(db, 'deleted_defaults', key), { deletedAt: new Date().toISOString() }, { merge: true });
    } catch (e) {
      console.warn('Failed to sync deletion marker to cloud:', e);
    }
  }
}

async function fetchRemoteTombstones() {
  const tombstones = getLocalTombstones();
  if (isCloudReady()) {
    try {
      await ensureFirebaseAuth();
      const snapshot = await getDocs(collection(db, 'deleted_defaults'));
      snapshot.forEach((d) => tombstones.add(String(d.id)));
    } catch (e) {
      console.warn('Remote deletion markers unavailable:', e);
    }
  }
  return tombstones;
}

// ----------------------------------------------------
// 0. IMAGE UPLOAD HELPER
// ----------------------------------------------------

/**
 * Upload an image file with automatic client-side compression,
 * real-time progress callbacks, and resilient timeout fallback.
 * @param {File} file - The image file to upload
 * @param {string} folder - Storage folder (e.g. 'projects')
 * @param {Function} [onProgress] - Optional progress callback ({ stage, percent })
 * @returns {{ success: boolean, url?: string, isCloud?: boolean, isFallback?: boolean, error?: string }}
 */
export async function uploadImage(file, folder = 'images', onProgress = null) {
  if (!file) return { success: false, error: 'No file provided' };

  // 1. Client-side compression to prevent uploading multi-megabyte raw photos
  if (onProgress) onProgress({ stage: 'compressing', percent: 15 });

  let fileToUpload = file;
  let fallbackDataUrl = '';

  try {
    const compression = await compressImage(file);
    if (compression.file) fileToUpload = compression.file;
    if (compression.dataUrl) fallbackDataUrl = compression.dataUrl;
  } catch (err) {
    console.warn('[Storage] Compression failed, proceeding with original:', err);
  }

  if (onProgress) onProgress({ stage: 'uploading', percent: 30 });

  // 2. Attempt Firebase Storage upload if configured
  if (isFirebaseConfigured && storage) {
    try {
      // Ensure user has auth context if Anonymous Auth is available
      await ensureFirebaseAuth();

      const timestamp = Date.now();
      const safeName = (fileToUpload.name || 'image.jpg').replace(/[^a-zA-Z0-9._-]/g, '_');
      const storageRef = ref(storage, `images/${folder}/${timestamp}_${safeName}`);

      const uploadTask = uploadBytesResumable(storageRef, fileToUpload, {
        contentType: fileToUpload.type || 'image/jpeg'
      });

      // Wrap in 12-second timeout so it NEVER hangs indefinitely
      const uploadPromise = new Promise((resolve, reject) => {
        uploadTask.on(
          'state_changed',
          (snapshot) => {
            if (snapshot.totalBytes > 0) {
              const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 70);
              if (onProgress) {
                onProgress({ stage: 'uploading', percent: 30 + progress });
              }
            }
          },
          (error) => {
            reject(error);
          },
          async () => {
            try {
              const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
              if (onProgress) onProgress({ stage: 'done', percent: 100 });
              resolve({ success: true, url: downloadURL, isCloud: true });
            } catch (err) {
              reject(err);
            }
          }
        );
      });

      const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => {
          try {
            uploadTask.cancel();
          } catch {
            // cancel is best-effort — the timeout rejection below still fires
          }
          reject(new Error('Storage upload timeout: exceeded 12 seconds'));
        }, 12000);
      });

      return await Promise.race([uploadPromise, timeoutPromise]);
    } catch (error) {
      console.warn('[Storage] Cloud storage failed or timed out. Using instant high-definition local fallback:', error);
      // Fall through to instant data URL fallback!
    }
  }

  // 3. Instant local data URL fallback: guaranteed to work offline or when cloud storage is blocked
  if (fallbackDataUrl) {
    if (onProgress) onProgress({ stage: 'done', percent: 100 });
    return { success: true, url: fallbackDataUrl, isFallback: true };
  }

  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (onProgress) onProgress({ stage: 'done', percent: 100 });
      resolve({ success: true, url: reader.result, isFallback: true });
    };
    reader.onerror = () => resolve({ success: false, error: 'Failed to read image file' });
    reader.readAsDataURL(file);
  });
}

// ----------------------------------------------------
// 1. LEAD & CONSULTATION INQUIRIES MANAGEMENT
// ----------------------------------------------------

/**
 * Deliver the enquiry to the studio inbox via EmailJS.
 *
 * EmailJS sends directly from the browser using your connected Gmail/Outlook
 * account — no backend or Cloud Functions required. This is a best-effort
 * notification only: the lead is already durable in Firestore, so a
 * mail failure must never make the visitor's submission look rejected.
 *
 * Setup: https://www.emailjs.com/
 *   1. Create a free account and connect your Gmail/Outlook as a Service.
 *   2. Create an Email Template and note the Template ID.
 *   3. Copy your Service ID, Template ID, and Public Key into .env:
 *      VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY
 *
 * @returns {Promise<boolean>} whether EmailJS accepted the send request
 */
async function sendEnquiryEmail(payload) {
  const serviceId  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    console.warn('[Email] EmailJS env vars not set — enquiry saved to Firestore but no email sent.');
    console.warn('[Email] Add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY to your .env');
    return false;
  }

  // These variable names must match the ones defined in your EmailJS template.
  const templateParams = {
    client_name:   payload.fullName,
    client_email:  payload.email,
    client_phone:  payload.telephone || 'Not provided',
    enquiry:       payload.enquiry,
    submitted_at:  new Date(payload.createdAt).toLocaleString('en-GB', {
      dateStyle: 'full', timeStyle: 'short'
    }),
    reply_to:      payload.email,
  };

  try {
    // Loaded on demand so the EmailJS bundle stays off the public page chunks
    const { default: emailjs } = await import('@emailjs/browser');
    const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);
    if (response.status === 200) {
      return true;
    }
    console.warn('[Email] EmailJS returned non-200 status:', response.status, response.text);
    return false;
  } catch (error) {
    console.warn('[Email] EmailJS send failed:', error);
    return false;
  }
}

/**
 * Save a new consultation booking enquiry
 */
export async function submitConsultation(inquiryData) {
  const payload = {
    ...inquiryData,
    createdAt: new Date().toISOString(),
    status: 'new' // 'new' | 'contacted' | 'completed'
  };

  let firestoreId = null;
  if (isCloudReady()) {
    try {
      const docRef = await addDoc(collection(db, 'consultations'), {
        ...payload
      });
      firestoreId = docRef.id;
    } catch (error) {
      console.error('Firestore consultation error, saving locally:', error);
    }
  }

  // Notify the studio by email. Runs after the durable write so a slow
  // or failed relay never delays or blocks saving the lead.
  const emailed = await sendEnquiryEmail(payload);

  // Always keep local storage in sync as well
  const localList = [...readLocalJson('ashara_consultations', DEFAULT_CONSULTATION_LEADS)];

  const localId = firestoreId || ('lead_' + Date.now());
  const localLead = { ...payload, id: localId };
  localList.unshift(localLead);
  writeLocalJson('ashara_consultations', localList);

  return { success: true, id: localId, isLive: Boolean(firestoreId), emailed };
}

/**
 * Fetch all consultation inquiries for Admin Portal
 */
export async function getConsultations() {
  if (isCloudReady()) {
    try {
      // Ensure active auth session so Firestore security rules grant access
      await ensureFirebaseAuth();

      const snapshot = await getDocs(collection(db, 'consultations'));
      if (!snapshot.empty) {
        const firestoreLeads = snapshot.docs.map(d => {
          const data = d.data();
          return {
            id: d.id,
            ...data,
            fullName: data.fullName || data.name || 'Anonymous Client',
            email: data.email || '',
            telephone: data.telephone || data.phone || '',
            enquiry: data.enquiry || data.message || data.scope || 'Architectural Inquiry',
            createdAt: data.createdAt || (data.serverTimestamp?.toDate ? data.serverTimestamp.toDate().toISOString() : new Date().toISOString()),
            status: data.status || 'new'
          };
        });
        firestoreLeads.sort((a, b) => {
          const timeA = new Date(a.createdAt || 0).getTime();
          const timeB = new Date(b.createdAt || 0).getTime();
          return timeB - timeA;
        });
        return firestoreLeads;
      }
    } catch (error) {
      console.warn('Could not fetch from Firestore, reading local leads:', error);
    }
  }

  // Return stored local inquiries (even an empty list — deleting all leads must stick)
  const stored = readLocalJson('ashara_consultations', null);
  if (Array.isArray(stored)) {
    return stored;
  }

  // Seed default consultation leads (minus any the admin has deleted) so the matrix is never blank on first run
  const tombstones = getLocalTombstones();
  const seeded = DEFAULT_CONSULTATION_LEADS.filter(l => !tombstones.has(String(l.id)));
  writeLocalJson('ashara_consultations', seeded);
  return seeded;
}

/**
 * Update consultation inquiry status ('new' | 'contacted' | 'completed')
 */
export async function updateConsultationStatus(leadId, newStatus) {
  const isLocalOnlyId = String(leadId).startsWith('lead_');
  if (isCloudReady() && !isLocalOnlyId) {
    try {
      await ensureFirebaseAuth();
      await setDoc(doc(db, 'consultations', String(leadId)), { status: newStatus }, { merge: true });
    } catch (error) {
      console.error('Firestore update consultation status error:', error);
    }
  }

  const localList = readLocalJson('ashara_consultations', []);
  const updated = localList.map(item => String(item.id) === String(leadId) ? { ...item, status: newStatus } : item);
  writeLocalJson('ashara_consultations', updated);
  return { success: true };
}

/**
 * Delete a consultation inquiry
 */
export async function deleteConsultation(leadId) {
  const localList = readLocalJson('ashara_consultations', []);
  const itemToBackup = localList.find(i => String(i.id) === String(leadId));
  if (itemToBackup) {
    await backupDeletedItem('consultations', itemToBackup);
  }
  if (DEFAULT_CONSULTATION_LEADS.some(i => String(i.id) === String(leadId))) {
    await addTombstone(leadId);
  }

  const isLocalOnlyId = String(leadId).startsWith('lead_');
  if (isCloudReady() && !isLocalOnlyId) {
    try {
      await ensureFirebaseAuth();
      await deleteDoc(doc(db, 'consultations', String(leadId)));
    } catch (error) {
      console.error('Firestore delete consultation error:', error);
      return { success: true, isLive: false, error: error?.message || 'Cloud delete failed.' };
    }
  }

  const updated = localList.filter(item => String(item.id) !== String(leadId));
  writeLocalJson('ashara_consultations', updated);
  return { success: true, isLive: isCloudReady() && !isLocalOnlyId };
}

// ----------------------------------------------------
// 2. DYNAMIC CONTENT CMS (Instant Local Cache + Real-Time Sync)
// ----------------------------------------------------

/**
 * Shared collection service powering both the projects and testimonials CMS.
 * Contract: synchronous instant cache (getInitial), real-time subscriptions
 * (in-window events + cross-tab storage + Firestore onSnapshot), and writes
 * that broadcast locally first, then persist to the cloud with fallback.
 * All writes return { success, id?, isLive, error? }.
 */
function createCollectionService({
  collectionName,          // Firestore collection name
  storageKey,              // localStorage cache key
  eventName,               // in-window broadcast event name
  defaults,                // built-in default list
  mergeFn,                 // (customList, extraTombstones) => merged list
  getInitial,              // () => synchronously cached list (localCache)
  idPrefix,                // prefix for newly generated ids
  label,                   // human-readable name for log messages
  prependNew = false,      // insert new items at the front instead of the end
  findBackupItem           // (id, currentAll) => item to back up before delete
}) {
  /**
   * Real-time subscription: fires the callback INSTANTLY with cached data,
   * listens to local updates (0ms), and syncs with Cloud Firestore.
   */
  const subscribeTo = (callback) => {
    if (typeof callback !== 'function') return () => {};

    // 1. Immediate initial callback with 0ms cached data
    callback(getInitial());

    // 2. In-window real-time event listener (0ms response when Admin saves)
    const handleCustomEvent = (e) => {
      if (e.detail && Array.isArray(e.detail)) {
        callback(e.detail);
      }
    };

    // 3. Cross-tab storage listener
    const handleStorageEvent = (e) => {
      if (e.key === storageKey && e.newValue) {
        try {
          const parsed = JSON.parse(e.newValue);
          if (Array.isArray(parsed)) {
            callback(mergeFn(parsed));
          }
        } catch {
          // ignore cross-tab parse races
        }
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener(eventName, handleCustomEvent);
      window.addEventListener('storage', handleStorageEvent);
    }

    // 4. Cloud Firestore live onSnapshot listener
    let firestoreUnsub = null;
    let cancelled = false;
    if (isCloudReady()) {
      ensureFirebaseAuth().then(async () => {
        if (cancelled) return;
        try {
          const tombstones = await fetchRemoteTombstones();
          if (cancelled) return;
          firestoreUnsub = onSnapshot(collection(db, collectionName), (snapshot) => {
            const remoteDocs = snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
            const merged = mergeFn(remoteDocs, tombstones);
            try {
              writeLocalJson(storageKey, merged);
            } catch (e) {
              console.warn(`Local ${label} cache write failed:`, e);
            }
            callback(merged);
          }, (err) => {
            console.warn(`Firestore ${label} real-time listener error:`, err);
          });
        } catch (err) {
          console.warn(`Could not establish Firestore ${label} listener:`, err);
        }
      });
    }

    return () => {
      cancelled = true;
      if (typeof window !== 'undefined') {
        window.removeEventListener(eventName, handleCustomEvent);
        window.removeEventListener('storage', handleStorageEvent);
      }
      if (typeof firestoreUnsub === 'function') {
        firestoreUnsub();
      }
    };
  };

  /**
   * Get all items (Firestore with fallback to cached/default list)
   */
  const getDynamic = async () => {
    const localList = getInitial();

    if (isCloudReady()) {
      try {
        await ensureFirebaseAuth();
        const tombstones = await fetchRemoteTombstones();
        const snapshot = await getDocs(collection(db, collectionName));
        if (!snapshot.empty) {
          const remoteDocs = snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
          const merged = mergeFn(remoteDocs, tombstones);
          try {
            writeLocalJson(storageKey, merged);
          } catch (e) {
            console.warn(`Local ${label} cache write failed:`, e);
          }
          return merged;
        }
      } catch (error) {
        console.warn(`Firestore ${label} fetch failed, using cached list:`, error);
      }
    }

    return localList;
  };

  /**
   * Save or update an item with INSTANT local broadcast and cloud persistence
   */
  const save = async (itemData) => {
    const id = itemData.id ? String(itemData.id) : idPrefix + Date.now();
    const payload = { ...itemData, id, updatedAt: new Date().toISOString() };

    // 1. INSTANT LOCAL CACHE & BROADCAST (0ms lag on client UI)
    const currentList = getInitial();
    const existingIdx = currentList.findIndex(item => String(item.id) === String(id));
    if (existingIdx >= 0) {
      currentList[existingIdx] = { ...currentList[existingIdx], ...payload };
    } else if (prependNew) {
      currentList.unshift(payload);
    } else {
      currentList.push(payload);
    }
    const merged = mergeFn(currentList);
    try {
      writeLocalJson(storageKey, merged);
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent(eventName, { detail: merged }));
      }
    } catch (e) {
      console.error(`Local ${label} cache write failed:`, e);
      return { success: false, id, isLive: false, error: 'Could not save locally: browser storage is full or unavailable.' };
    }

    // 2. PERSIST TO CLOUD FIRESTORE
    if (isCloudReady()) {
      try {
        await ensureFirebaseAuth();
        await setDoc(doc(db, collectionName, id), payload, { merge: true });
        return { success: true, id, isLive: true };
      } catch (error) {
        console.error(`Firestore save ${label} error:`, error);
        return { success: true, id, isLive: false, error: error?.message || 'Cloud sync failed.' };
      }
    }

    return { success: true, id, isLive: false };
  };

  /**
   * Delete an item with INSTANT local broadcast and cloud deletion
   */
  const remove = async (itemId) => {
    const id = String(itemId);

    const currentAll = getInitial();
    const itemToBackup = findBackupItem(id, currentAll);
    if (itemToBackup) {
      await backupDeletedItem(collectionName, itemToBackup);
    }
    if (defaults.some(item => String(item.id) === id)) {
      await addTombstone(id);
    }

    // 1. INSTANT LOCAL CACHE & BROADCAST
    const currentList = currentAll.filter(item => String(item.id) !== id);
    try {
      writeLocalJson(storageKey, currentList);
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent(eventName, { detail: currentList }));
      }
    } catch (e) {
      console.error(`Local ${label} cache write failed:`, e);
      return { success: false, isLive: false, error: 'Could not delete locally: browser storage is full or unavailable.' };
    }

    // 2. DELETE FROM CLOUD FIRESTORE
    if (isCloudReady()) {
      try {
        await ensureFirebaseAuth();
        await deleteDoc(doc(db, collectionName, id));
      } catch (error) {
        console.error(`Firestore delete ${label} error:`, error);
        return { success: true, isLive: false, error: error?.message || 'Cloud delete failed.' };
      }
    }

    return { success: true, isLive: isCloudReady() };
  };

  return { getInitial, subscribeTo, getDynamic, save, remove };
}

// --- Projects CMS: versioned cache; new items appended; backups from the merged list ---
const projectsService = createCollectionService({
  collectionName: 'projects',
  storageKey: 'ashara_projects',
  eventName: 'ashara_projects_updated',
  defaults: DEFAULT_PROJECTS_LIST,
  mergeFn: mergeWithDefaultProjects,
  getInitial: getInitialProjects,
  idPrefix: 'proj_',
  label: 'project',
  findBackupItem: (id, currentAll) => currentAll.find(p => String(p.id) === id)
});

// --- Testimonials CMS: new items prepended; backups from the raw cache or defaults ---
const testimonialsService = createCollectionService({
  collectionName: 'testimonials',
  storageKey: 'ashara_testimonials',
  eventName: 'ashara_testimonials_updated',
  defaults: DEFAULT_TESTIMONIALS_LIST,
  mergeFn: mergeWithDefaultTestimonials,
  getInitial: getInitialTestimonials,
  idPrefix: 'test_',
  label: 'testimonial',
  prependNew: true,
  findBackupItem: (id) =>
    readLocalJson('ashara_testimonials', []).find(t => String(t.id) === id) ||
    DEFAULT_TESTIMONIALS_LIST.find(t => String(t.id) === id)
});

// Re-export under the original names so every importer keeps working
export const subscribeToProjects = projectsService.subscribeTo;
export const getDynamicProjects = projectsService.getDynamic;
export const saveProject = projectsService.save;
export const deleteProject = projectsService.remove;

export const subscribeToTestimonials = testimonialsService.subscribeTo;
export const getDynamicTestimonials = testimonialsService.getDynamic;
export const saveTestimonial = testimonialsService.save;
export const deleteTestimonial = testimonialsService.remove;

// ----------------------------------------------------
// 3. AUTHENTICATION HELPERS
// ----------------------------------------------------

export async function loginAdminUser(email, password) {
  const cleanEmail = email.trim().toLowerCase();
  const cleanPass = password.trim();

  if (isFirebaseConfigured && auth) {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, cleanEmail, cleanPass);
      const user = {
        email: userCredential.user.email,
        name: 'Studio Director'
      };
      sessionStorage.setItem('ashara_admin_auth', JSON.stringify(user));
      return { success: true, user };
    } catch (error) {
      console.error('Firebase Auth failed:', error);
      return { success: false, error: 'Access denied. Invalid email or passcode.' };
    }
  }

  return { success: false, error: 'Admin login requires Firebase Authentication to be configured.' };
}

export async function logoutAdminUser() {
  if (isFirebaseConfigured && auth) {
    try {
      await signOut(auth);
    } catch {
      // sign-out is best-effort; local session is always cleared below
    }
  }
  sessionStorage.removeItem('ashara_admin_auth');
  return { success: true };
}
