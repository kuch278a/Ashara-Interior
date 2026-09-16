import { initializeApp, getApps, getApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  setDoc,
  deleteDoc,
  query,
  orderBy,
  serverTimestamp,
  onSnapshot
} from 'firebase/firestore';
import {
  getAuth,
  signInWithEmailAndPassword,
  signInAnonymously,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';
import { getStorage, ref, uploadBytes, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { DEFAULT_PROJECTS_LIST, DEFAULT_BLOG_POSTS, DEFAULT_CONSULTATION_LEADS } from '../data/defaultData.js';
import { compressImage } from '../utils/imageOptimizer.js';

// Firebase configuration from environment variables or live studio keys
const firebaseConfig = {
  apiKey: import.meta.env?.VITE_FIREBASE_API_KEY || 'AIzaSyAzwyBN57odWyljEAn-UPoRIzOraaQt1aE',
  authDomain: import.meta.env?.VITE_FIREBASE_AUTH_DOMAIN || 'ashara-interiors.firebaseapp.com',
  projectId: import.meta.env?.VITE_FIREBASE_PROJECT_ID || 'ashara-interiors',
  storageBucket: import.meta.env?.VITE_FIREBASE_STORAGE_BUCKET || 'ashara-interiors.firebasestorage.app',
  messagingSenderId: import.meta.env?.VITE_FIREBASE_MESSAGING_SENDER_ID || '901960368658',
  appId: import.meta.env?.VITE_FIREBASE_APP_ID || '1:901960368658:web:9cbbc190d6bde547324ecb'
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

export { db, auth, storage };

/**
 * Automatically ensure an active Firebase Auth session for Super Admin actions.
 * Guarantees that Firestore security rules (requiring request.auth != null) grant full access.
 */
export async function ensureFirebaseAuth() {
  if (isFirebaseConfigured && auth) {
    if (auth.currentUser) return auth.currentUser;
    try {
      const cred = await signInWithEmailAndPassword(auth, 'mikasadessalegn@gmail.com', 'ashara2025');
      return cred.user;
    } catch (e) {
      console.warn('[FirebaseAuth] Auto-session connection note:', e.message);
    }
  }
  return null;
}

// ----------------------------------------------------
// 0. IMAGE UPLOAD HELPER
// ----------------------------------------------------

/**
 * Upload an image file with automatic client-side compression,
 * real-time progress callbacks, and resilient timeout fallback.
 * @param {File} file - The image file to upload
 * @param {string} folder - Storage folder (e.g. 'projects', 'blog')
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
      if (auth && !auth.currentUser) {
        try {
          await signInAnonymously(auth);
        } catch (authErr) {
          // Silent catch — Firebase project might have Anonymous Auth disabled
        }
      }

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
          } catch (e) { }
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
 * Save a new consultation booking enquiry
 */
export async function submitConsultation(inquiryData) {
  const payload = {
    ...inquiryData,
    createdAt: new Date().toISOString(),
    status: 'new' // 'new' | 'contacted' | 'completed'
  };

  let firestoreId = null;
  if (isFirebaseConfigured && db) {
    try {
      const docRef = await addDoc(collection(db, 'consultations'), {
        ...payload,
        serverTimestamp: serverTimestamp()
      });
      firestoreId = docRef.id;
    } catch (error) {
      console.error('Firestore consultation error, saving locally:', error);
    }
  }

  // Always keep local storage in sync as well
  let localList = [];
  try {
    localList = JSON.parse(localStorage.getItem('ashara_consultations') || JSON.stringify(DEFAULT_CONSULTATION_LEADS));
  } catch (e) {
    localList = [...DEFAULT_CONSULTATION_LEADS];
  }

  const localId = firestoreId || ('lead_' + Date.now());
  const localLead = { ...payload, id: localId };
  localList.unshift(localLead);
  localStorage.setItem('ashara_consultations', JSON.stringify(localList));

  return { success: true, id: localId, isLive: Boolean(firestoreId) };
}

/**
 * Fetch all consultation inquiries for Admin Portal
 */
export async function getConsultations() {
  if (isFirebaseConfigured && db) {
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

  // Return stored local inquiries or initial curated leads
  const localList = localStorage.getItem('ashara_consultations');
  if (localList) {
    try {
      const parsed = JSON.parse(localList);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    } catch (e) {}
  }

  // Seed default consultation leads so inquiries matrix is never blank
  localStorage.setItem('ashara_consultations', JSON.stringify(DEFAULT_CONSULTATION_LEADS));
  return DEFAULT_CONSULTATION_LEADS;
}

// ----------------------------------------------------
// 2. DYNAMIC PROJECTS CMS (Instant Local Cache + Real-Time Sync)
// ----------------------------------------------------

/**
 * Merge custom/edited projects onto the default projects list by matching IDs
 */
export function mergeWithDefaultProjects(customList = []) {
  if (!Array.isArray(customList) || customList.length === 0) {
    return DEFAULT_PROJECTS_LIST;
  }
  const map = new Map();
  // 1. Seed base default projects
  DEFAULT_PROJECTS_LIST.forEach((p) => {
    map.set(String(p.id), { ...p });
  });
  // 2. Overlay custom or saved projects
  customList.forEach((p) => {
    if (p && p.id !== undefined) {
      const existing = map.get(String(p.id)) || {};
      map.set(String(p.id), { ...existing, ...p });
    }
  });
  return Array.from(map.values());
}

/**
 * Synchronously read cached projects for instant 0ms initial render
 */
export function getInitialProjects() {
  if (typeof window !== 'undefined') {
    try {
      const stored = localStorage.getItem('ashara_projects');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return mergeWithDefaultProjects(parsed);
        }
      }
    } catch (e) {}
  }
  return DEFAULT_PROJECTS_LIST;
}

/**
 * Real-time subscription to project updates:
 * Fires callback INSTANTLY with cached data, listens to local updates (0ms),
 * and syncs with Cloud Firestore in real time.
 */
export function subscribeToProjects(callback) {
  if (typeof callback !== 'function') return () => {};

  // 1. Immediate initial callback with 0ms cached data
  callback(getInitialProjects());

  // 2. In-window real-time event listener (0ms response when Admin saves)
  const handleCustomEvent = (e) => {
    if (e.detail && Array.isArray(e.detail)) {
      callback(e.detail);
    }
  };

  // 3. Cross-tab storage listener
  const handleStorageEvent = (e) => {
    if (e.key === 'ashara_projects' && e.newValue) {
      try {
        const parsed = JSON.parse(e.newValue);
        if (Array.isArray(parsed)) {
          callback(mergeWithDefaultProjects(parsed));
        }
      } catch (err) {}
    }
  };

  if (typeof window !== 'undefined') {
    window.addEventListener('ashara_projects_updated', handleCustomEvent);
    window.addEventListener('storage', handleStorageEvent);
  }

  // 4. Cloud Firestore live onSnapshot listener
  let firestoreUnsub = null;
  if (isFirebaseConfigured && db) {
    ensureFirebaseAuth().then(() => {
      try {
        firestoreUnsub = onSnapshot(collection(db, 'projects'), (snapshot) => {
          if (!snapshot.empty) {
            const remoteDocs = snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
            const merged = mergeWithDefaultProjects(remoteDocs);
            try {
              localStorage.setItem('ashara_projects', JSON.stringify(merged));
            } catch (e) {}
            callback(merged);
          }
        }, (err) => {
          console.warn('Firestore projects real-time listener error:', err);
        });
      } catch (err) {
        console.warn('Could not establish Firestore projects listener:', err);
      }
    });
  }

  return () => {
    if (typeof window !== 'undefined') {
      window.removeEventListener('ashara_projects_updated', handleCustomEvent);
      window.removeEventListener('storage', handleStorageEvent);
    }
    if (typeof firestoreUnsub === 'function') {
      firestoreUnsub();
    }
  };
}

/**
 * Get all studio projects (Firestore with fallback to cached/default list)
 */
export async function getDynamicProjects() {
  const localProjects = getInitialProjects();

  if (isFirebaseConfigured && db) {
    try {
      await ensureFirebaseAuth();
      const snapshot = await getDocs(collection(db, 'projects'));
      if (!snapshot.empty) {
        const remoteDocs = snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
        const merged = mergeWithDefaultProjects(remoteDocs);
        try {
          localStorage.setItem('ashara_projects', JSON.stringify(merged));
        } catch (e) {}
        return merged;
      }
    } catch (error) {
      console.warn('Firestore projects fetch failed, using cached list:', error);
    }
  }

  return localProjects;
}

/**
 * Save or update a project in CMS with INSTANT local broadcast and cloud persistence
 */
export async function saveProject(projectData) {
  const id = projectData.id ? String(projectData.id) : 'proj_' + Date.now();
  const payload = { ...projectData, id, updatedAt: new Date().toISOString() };

  // 1. INSTANT LOCAL CACHE & BROADCAST (0ms lag on client UI)
  const currentList = getInitialProjects();
  const existingIdx = currentList.findIndex(p => String(p.id) === String(id));
  if (existingIdx >= 0) {
    currentList[existingIdx] = { ...currentList[existingIdx], ...payload };
  } else {
    currentList.push(payload);
  }
  const merged = mergeWithDefaultProjects(currentList);
  try {
    localStorage.setItem('ashara_projects', JSON.stringify(merged));
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('ashara_projects_updated', { detail: merged }));
    }
  } catch (e) {}

  // 2. PERSIST TO CLOUD FIRESTORE
  if (isFirebaseConfigured && db) {
    try {
      await ensureFirebaseAuth();
      await setDoc(doc(db, 'projects', id), payload, { merge: true });
      return { success: true, id, isLive: true };
    } catch (error) {
      console.error('Firestore save project error:', error);
    }
  }

  return { success: true, id, isLive: false };
}

/**
 * Delete a project from CMS with INSTANT local broadcast and cloud deletion
 */
export async function deleteProject(projectId) {
  const id = String(projectId);

  // 1. INSTANT LOCAL CACHE & BROADCAST
  const currentList = getInitialProjects().filter(p => String(p.id) !== id);
  try {
    localStorage.setItem('ashara_projects', JSON.stringify(currentList));
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('ashara_projects_updated', { detail: currentList }));
    }
  } catch (e) {}

  // 2. DELETE FROM CLOUD FIRESTORE
  if (isFirebaseConfigured && db) {
    try {
      await ensureFirebaseAuth();
      await deleteDoc(doc(db, 'projects', id));
    } catch (error) {
      console.error('Firestore delete project error:', error);
    }
  }

  return { success: true };
}

// ----------------------------------------------------
// 3. DYNAMIC BLOG / JOURNAL CMS (Instant Local Cache + Real-Time Sync)
// ----------------------------------------------------

export function mergeWithDefaultBlogPosts(customList = []) {
  if (!Array.isArray(customList) || customList.length === 0) {
    return DEFAULT_BLOG_POSTS;
  }
  const map = new Map();
  DEFAULT_BLOG_POSTS.forEach((p) => {
    map.set(String(p.id), { ...p });
  });
  customList.forEach((p) => {
    if (p && p.id !== undefined) {
      const existing = map.get(String(p.id)) || {};
      map.set(String(p.id), { ...existing, ...p });
    }
  });
  return Array.from(map.values());
}

export function getInitialBlogPosts() {
  if (typeof window !== 'undefined') {
    try {
      const stored = localStorage.getItem('ashara_blog_posts');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return mergeWithDefaultBlogPosts(parsed);
        }
      }
    } catch (e) {}
  }
  return DEFAULT_BLOG_POSTS;
}

export async function getDynamicBlogPosts() {
  const localPosts = getInitialBlogPosts();

  if (isFirebaseConfigured && db) {
    try {
      await ensureFirebaseAuth();
      const snapshot = await getDocs(collection(db, 'blog_posts'));
      if (!snapshot.empty) {
        const remoteDocs = snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
        const merged = mergeWithDefaultBlogPosts(remoteDocs);
        try {
          localStorage.setItem('ashara_blog_posts', JSON.stringify(merged));
        } catch (e) {}
        return merged;
      }
    } catch (error) {
      console.warn('Firestore blog fetch failed, using cached posts:', error);
    }
  }

  return localPosts;
}

export async function saveBlogPost(postData) {
  const id = postData.id ? String(postData.id) : 'post_' + Date.now();
  const payload = { ...postData, id, updatedAt: new Date().toISOString() };

  const currentList = getInitialBlogPosts();
  const existingIdx = currentList.findIndex(p => String(p.id) === String(id));
  if (existingIdx >= 0) {
    currentList[existingIdx] = { ...currentList[existingIdx], ...payload };
  } else {
    currentList.unshift(payload);
  }
  const merged = mergeWithDefaultBlogPosts(currentList);
  try {
    localStorage.setItem('ashara_blog_posts', JSON.stringify(merged));
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('ashara_blog_updated', { detail: merged }));
    }
  } catch (e) {}

  if (isFirebaseConfigured && db) {
    try {
      await ensureFirebaseAuth();
      await setDoc(doc(db, 'blog_posts', id), payload, { merge: true });
      return { success: true, id, isLive: true };
    } catch (error) {
      console.error('Firestore save blog error:', error);
    }
  }

  return { success: true, id, isLive: false };
}

export async function deleteBlogPost(postId) {
  const id = String(postId);

  const currentList = getInitialBlogPosts().filter(p => String(p.id) !== id);
  try {
    localStorage.setItem('ashara_blog_posts', JSON.stringify(currentList));
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('ashara_blog_updated', { detail: currentList }));
    }
  } catch (e) {}

  if (isFirebaseConfigured && db) {
    try {
      await ensureFirebaseAuth();
      await deleteDoc(doc(db, 'blog_posts', id));
    } catch (error) {
      console.error('Firestore delete blog post error:', error);
    }
  }

  return { success: true };
}

/**
 * Update consultation inquiry status ('new' | 'contacted' | 'completed')
 */
export async function updateConsultationStatus(leadId, newStatus) {
  if (isFirebaseConfigured && db) {
    try {
      await ensureFirebaseAuth();
      await setDoc(doc(db, 'consultations', String(leadId)), { status: newStatus }, { merge: true });
    } catch (error) {
      console.error('Firestore update consultation status error:', error);
    }
  }

  const localList = JSON.parse(localStorage.getItem('ashara_consultations') || '[]');
  const updated = localList.map(item => String(item.id) === String(leadId) ? { ...item, status: newStatus } : item);
  localStorage.setItem('ashara_consultations', JSON.stringify(updated));
  return { success: true };
}

// ----------------------------------------------------
// 4. AUTHENTICATION HELPERS
// ----------------------------------------------------

export async function loginAdminUser(email, password) {
  const cleanEmail = email.trim().toLowerCase();
  const cleanPass = password.trim();

  // Strictly allowed Super Admin credentials ONLY
  const isSuperAdminEmail = (cleanEmail === 'mikasadessalegn@gmail.com' || cleanEmail === 'admin');
  const isSuperAdminPass = (cleanPass === 'ashara2026' || cleanPass === 'ashara2025');

  if (!isSuperAdminEmail || !isSuperAdminPass) {
    return { success: false, error: 'Access denied. Invalid Super Admin email or passcode.' };
  }

  // 1. Try Firebase Auth if live Firebase is active
  if (isFirebaseConfigured && auth) {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, cleanEmail, cleanPass);
      const user = {
        email: userCredential.user.email || cleanEmail,
        name: cleanEmail === 'mikasadessalegn@gmail.com' ? 'Mika Dessalegn' : 'Studio Director'
      };
      sessionStorage.setItem('ashara_admin_auth', JSON.stringify(user));
      return { success: true, user };
    } catch (error) {
      // Firebase Auth user not registered in Firebase console — fallback to master session
    }
  }

  // 2. Super Admin Authorization Fallback
  const adminUser = {
    email: cleanEmail,
    name: cleanEmail === 'mikasadessalegn@gmail.com' ? 'Mika Dessalegn' : 'Studio Director'
  };
  sessionStorage.setItem('ashara_admin_auth', JSON.stringify(adminUser));
  return { success: true, user: adminUser };
}

export async function logoutAdminUser() {
  if (isFirebaseConfigured && auth) {
    try {
      await signOut(auth);
    } catch (e) { }
  }
  sessionStorage.removeItem('ashara_admin_auth');
  return { success: true };
}
