import { DEFAULT_PROJECTS_LIST, DEFAULT_TESTIMONIALS_LIST } from '../data/defaultData.js';

// SDK-free local cache layer: synchronous initial reads, default-list merges,
// and deletion-tombstone bookkeeping. Kept separate from firebaseService so
// the entry bundle (and first paint) never needs the Firebase SDK.

// Tiny localStorage JSON helpers shared across the services.
// readLocalJson returns the fallback when the key is missing or its JSON is
// corrupt, so a damaged cache self-heals on the next write instead of throwing.
export function readLocalJson(key, fallback) {
  try {
    const stored = localStorage.getItem(key);
    return stored === null ? fallback : JSON.parse(stored);
  } catch {
    return fallback;
  }
}

export function writeLocalJson(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

const DELETED_DEFAULTS_KEY = 'ashara_deleted_defaults';

export function getLocalTombstones() {
  const stored = readLocalJson(DELETED_DEFAULTS_KEY, []);
  return new Set(Array.isArray(stored) ? stored.map(String) : []);
}

function unionTombstones(extraTombstones) {
  const tombstones = getLocalTombstones();
  if (extraTombstones) {
    extraTombstones.forEach((id) => tombstones.add(String(id)));
  }
  return tombstones;
}

export const CURRENT_PROJECTS_CACHE_VERSION = '2024_cpr_v7';

/**
 * Merge custom/edited projects onto the default projects list by matching IDs.
 * Sanitizes image/gallery URLs so stale relative paths or outdated build hashes fall back to default art.
 */
export function mergeWithDefaultProjects(customList = [], extraTombstones = null) {
  const tombstones = unionTombstones(extraTombstones);
  const map = new Map();
  // 1. Seed base default projects (skipping defaults the admin has deleted)
  DEFAULT_PROJECTS_LIST.forEach((p) => {
    if (!tombstones.has(String(p.id))) {
      map.set(String(p.id), { ...p });
    }
  });

  const isCustomCloudUrl = (url) => typeof url === 'string' && (
    url.startsWith('data:') ||
    url.startsWith('blob:') ||
    url.includes('firebasestorage.googleapis.com') ||
    url.includes('images.unsplash.com') ||
    (!url.includes('/assets/') && !url.includes('localhost') && !url.includes('127.0.0.1') && (url.startsWith('http://') || url.startsWith('https://')))
  );

  const isValidUrl = (url) => typeof url === 'string' && (
    url.startsWith('http://') ||
    url.startsWith('https://') ||
    url.startsWith('data:') ||
    url.startsWith('blob:') ||
    url.startsWith('/src/') ||
    url.startsWith('/assets/') ||
    url.includes('/assets/projects/')
  );

  // 2. Overlay custom or saved projects
  customList.forEach((p) => {
    if (p && p.id !== undefined) {
      const existing = map.get(String(p.id)) || {};
      const mergedItem = { ...existing, ...p };

      // If this is a built-in default project with fresh bundled photography
      if (existing.image) {
        // Only override if the custom project has an actual cloud upload or custom external URL
        if (!p.image || !isCustomCloudUrl(p.image)) {
          mergedItem.image = existing.image;
        }
        if (!p.fallbackImage || !isCustomCloudUrl(p.fallbackImage)) {
          mergedItem.fallbackImage = existing.fallbackImage || existing.image;
        }
      } else {
        if (p.image && (!isValidUrl(p.image) || p.image.startsWith('/assets/'))) {
          mergedItem.image = existing.image || p.image;
        }
        if (p.fallbackImage && (!isValidUrl(p.fallbackImage) || p.fallbackImage.startsWith('/assets/'))) {
          mergedItem.fallbackImage = existing.fallbackImage || existing.image || p.fallbackImage;
        }
      }

      if (Array.isArray(p.gallery)) {
        if (existing.gallery && existing.gallery.length > 0) {
          // If built-in default project, preserve fresh bundled gallery and append genuine cloud uploads
          const customCloudGallery = p.gallery.filter(isCustomCloudUrl);
          mergedItem.gallery = Array.from(new Set([...existing.gallery, ...customCloudGallery]));
        } else {
          mergedItem.gallery = p.gallery.filter(isValidUrl);
        }
      }

      map.set(String(p.id), mergedItem);
    }
  });
  return Array.from(map.values());
}

/**
 * Merge custom/edited testimonials onto the default list by matching IDs
 */
export function mergeWithDefaultTestimonials(customList = [], extraTombstones = null) {
  const tombstones = unionTombstones(extraTombstones);
  const map = new Map();
  DEFAULT_TESTIMONIALS_LIST.forEach((t) => {
    if (!tombstones.has(String(t.id))) {
      map.set(String(t.id), { ...t });
    }
  });
  customList.forEach((t) => {
    if (t && t.id !== undefined) {
      const existing = map.get(String(t.id)) || {};
      map.set(String(t.id), { ...existing, ...t });
    }
  });
  return Array.from(map.values());
}

/**
 * Synchronously read cached projects for instant 0ms initial render.
 * The cache-version check resets caches written by older data shapes.
 */
export function getInitialProjects() {
  if (typeof window !== 'undefined') {
    try {
      if (localStorage.getItem('ashara_projects_v') !== CURRENT_PROJECTS_CACHE_VERSION) {
        localStorage.removeItem('ashara_projects');
        localStorage.setItem('ashara_projects_v', CURRENT_PROJECTS_CACHE_VERSION);
        return DEFAULT_PROJECTS_LIST;
      }
      const stored = readLocalJson('ashara_projects', null);
      if (Array.isArray(stored)) {
        return mergeWithDefaultProjects(stored);
      }
    } catch {
      // fall back to defaults below
    }
  }
  return DEFAULT_PROJECTS_LIST;
}

/**
 * Synchronously read cached testimonials for instant 0ms initial render
 */
export function getInitialTestimonials() {
  if (typeof window !== 'undefined') {
    try {
      const stored = readLocalJson('ashara_testimonials', null);
      if (Array.isArray(stored)) {
        return mergeWithDefaultTestimonials(stored);
      }
    } catch {
      // fall back to defaults below
    }
  }
  return mergeWithDefaultTestimonials([]);
}
