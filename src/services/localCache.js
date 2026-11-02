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

/**
 * Merge custom/edited projects onto the default projects list by matching IDs.
 * Sanitizes image/gallery URLs so stale relative paths fall back to default art.
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
  // 2. Overlay custom or saved projects
  customList.forEach((p) => {
    if (p && p.id !== undefined) {
      const existing = map.get(String(p.id)) || {};
      const mergedItem = { ...existing, ...p };

      const isValidUrl = (url) => typeof url === 'string' && (
        url.startsWith('http://') ||
        url.startsWith('https://') ||
        url.startsWith('data:') ||
        url.startsWith('blob:') ||
        url.startsWith('/src/') ||
        url.startsWith('/assets/') ||
        url.includes('/assets/projects/')
      );

      if (p.image && (!isValidUrl(p.image) || (p.image.startsWith('/assets/') && existing.image))) {
        mergedItem.image = existing.image || p.image;
      }
      if (p.fallbackImage && (!isValidUrl(p.fallbackImage) || (p.fallbackImage.startsWith('/assets/') && existing.fallbackImage))) {
        mergedItem.fallbackImage = existing.fallbackImage || existing.image || p.fallbackImage;
      }

      if (Array.isArray(p.gallery)) {
        const sanitizedGallery = p.gallery.map((url, i) => {
          if (!isValidUrl(url) || (url.startsWith('/assets/') && existing.gallery && existing.gallery[i])) {
            return (existing.gallery && existing.gallery[i]) || existing.image || null;
          }
          return url;
        }).filter(Boolean);

        if (Array.isArray(existing.gallery) && existing.gallery.length > 0) {
          existing.gallery.forEach((defUrl) => {
            if (defUrl && !sanitizedGallery.includes(defUrl)) {
              sanitizedGallery.push(defUrl);
            }
          });
        }
        mergedItem.gallery = sanitizedGallery;
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
      if (localStorage.getItem('ashara_projects_v') !== '2024_cpr_v6') {
        localStorage.removeItem('ashara_projects');
        localStorage.setItem('ashara_projects_v', '2024_cpr_v6');
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
