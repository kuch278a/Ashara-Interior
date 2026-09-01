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
  serverTimestamp 
} from 'firebase/firestore';
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged 
} from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { PROJECTS_LIST } from '../pages/ProjectsPage';
import { BLOG_POSTS } from '../pages/BlogPage';

// Firebase configuration from environment variables or live studio keys
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || 'AIzaSyAzwyBN57odWyljEAn-UPoRIzOraaQt1aE',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || 'ashara-interiors.firebaseapp.com',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || 'ashara-interiors',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || 'ashara-interiors.firebasestorage.app',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '901960368658',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || '1:901960368658:web:9cbbc190d6bde547324ecb'
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

  if (isFirebaseConfigured && db) {
    try {
      const docRef = await addDoc(collection(db, 'consultations'), {
        ...payload,
        serverTimestamp: serverTimestamp()
      });
      return { success: true, id: docRef.id, isLive: true };
    } catch (error) {
      console.error('Firestore consultation error, saving locally:', error);
    }
  }

  // Local fallback storage for offline/demo development
  const localList = JSON.parse(localStorage.getItem('ashara_consultations') || '[]');
  const localId = 'lead_' + Date.now();
  const localLead = { ...payload, id: localId };
  localList.unshift(localLead);
  localStorage.setItem('ashara_consultations', JSON.stringify(localList));

  return { success: true, id: localId, isLive: false };
}

/**
 * Fetch all consultation inquiries for Admin Portal
 */
export async function getConsultations() {
  if (isFirebaseConfigured && db) {
    try {
      const q = query(collection(db, 'consultations'), orderBy('serverTimestamp', 'desc'));
      const snapshot = await getDocs(q);
      return snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
    } catch (error) {
      console.warn('Could not fetch from Firestore, reading local leads:', error);
    }
  }

  return JSON.parse(localStorage.getItem('ashara_consultations') || '[]');
}

// ----------------------------------------------------
// 2. DYNAMIC PROJECTS CMS
// ----------------------------------------------------

/**
 * Get all studio projects (Firestore with fallback to PROJECTS_LIST)
 */
export async function getDynamicProjects() {
  if (isFirebaseConfigured && db) {
    try {
      const snapshot = await getDocs(collection(db, 'projects'));
      if (!snapshot.empty) {
        return snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
      }
    } catch (error) {
      console.warn('Firestore projects fetch failed, using default list:', error);
    }
  }

  // Return local storage or default project list
  const stored = localStorage.getItem('ashara_projects');
  return stored ? JSON.parse(stored) : PROJECTS_LIST;
}

/**
 * Save or update a project in CMS
 */
export async function saveProject(projectData) {
  const id = projectData.id ? String(projectData.id) : 'proj_' + Date.now();
  const payload = { ...projectData, id, updatedAt: new Date().toISOString() };

  if (isFirebaseConfigured && db) {
    try {
      await setDoc(doc(db, 'projects', id), payload, { merge: true });
      return { success: true, id, isLive: true };
    } catch (error) {
      console.error('Firestore save project error:', error);
    }
  }

  const projects = await getDynamicProjects();
  const existingIdx = projects.findIndex(p => String(p.id) === String(id));
  if (existingIdx >= 0) {
    projects[existingIdx] = payload;
  } else {
    projects.push(payload);
  }
  localStorage.setItem('ashara_projects', JSON.stringify(projects));
  return { success: true, id, isLive: false };
}

/**
 * Delete a project from CMS
 */
export async function deleteProject(projectId) {
  const id = String(projectId);
  if (isFirebaseConfigured && db) {
    try {
      await deleteDoc(doc(db, 'projects', id));
    } catch (error) {
      console.error('Firestore delete project error:', error);
    }
  }

  const projects = await getDynamicProjects();
  const filtered = projects.filter(p => String(p.id) !== id);
  localStorage.setItem('ashara_projects', JSON.stringify(filtered));
  return { success: true };
}

// ----------------------------------------------------
// 3. DYNAMIC BLOG / JOURNAL CMS
// ----------------------------------------------------

/**
 * Get all blog articles (Firestore with fallback to BLOG_POSTS)
 */
export async function getDynamicBlogPosts() {
  if (isFirebaseConfigured && db) {
    try {
      const snapshot = await getDocs(collection(db, 'blog_posts'));
      if (!snapshot.empty) {
        return snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
      }
    } catch (error) {
      console.warn('Firestore blog fetch failed, using default posts:', error);
    }
  }

  const stored = localStorage.getItem('ashara_blog_posts');
  return stored ? JSON.parse(stored) : BLOG_POSTS;
}

/**
 * Save or update a blog post in CMS
 */
export async function saveBlogPost(postData) {
  const id = postData.id ? String(postData.id) : 'post_' + Date.now();
  const payload = { ...postData, id, updatedAt: new Date().toISOString() };

  if (isFirebaseConfigured && db) {
    try {
      await setDoc(doc(db, 'blog_posts', id), payload, { merge: true });
      return { success: true, id, isLive: true };
    } catch (error) {
      console.error('Firestore save blog error:', error);
    }
  }

  const posts = await getDynamicBlogPosts();
  const existingIdx = posts.findIndex(p => String(p.id) === String(id));
  if (existingIdx >= 0) {
    posts[existingIdx] = payload;
  } else {
    posts.unshift(payload);
  }
  localStorage.setItem('ashara_blog_posts', JSON.stringify(posts));
  return { success: true, id, isLive: false };
}
