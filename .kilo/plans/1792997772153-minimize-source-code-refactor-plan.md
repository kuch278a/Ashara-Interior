# Minimize Source Code — Deduplication Refactor Plan

## Goal
Shrink the duplicated/verbose source code with **zero behavior or visual change**. The production build already minifies bundles, so this targets the human-readable source only.

## Ground rules (all phases)
- Keep every exported name in `src/services/firebaseService.js` identical — 8 files import from it (App, HomePage, AboutPage, ProjectsPage, ProjectDetailPage, ServicesPage, ContactPage, AdminPortal); none of them should need import changes.
- Keep all persistence/compat contracts unchanged: localStorage keys (`ashara_projects`, `ashara_testimonials`, `ashara_consultations`, `ashara_deleted_defaults`, `ashara_deleted_items`), sessionStorage key (`ashara_admin_auth`), Firestore collection names, custom event names (`ashara_projects_updated`, `ashara_testimonials_updated`), and CSS class names.
- No feature removal, no styling changes, no new dependencies.
- Run `npm run build` after each phase (repo has no lint/test scripts — build is the only automated check).

## Phase 1 — `src/services/firebaseService.js` (972 → ~650 lines, biggest win)
1. Extract a shared collection-service factory used by both the projects and testimonials sections:
   - `createCollectionService({ collectionName, storageKey, eventName, defaults, mergeFn, idPrefix })` returning `{ getInitial, subscribeTo, getDynamic, save, remove }`.
   - Projects keeps its custom `mergeWithDefaultProjects` (image/gallery URL sanitization) passed as `mergeFn`; testimonials uses the simple merge.
   - Delete the twin implementations of `subscribeToX` / `getDynamicX` / `saveX` / `deleteX` / `mergeWithDefaultX` (~300 duplicated lines) and re-export the existing names (`subscribeToProjects`, `saveProject`, `deleteTestimonial`, etc.) so all imports keep working.
   - Keep the projects-only cache-version check (`ashara_projects_v`) inside the projects `getInitial`.
2. Replace the inline `signInAnonymously` block in `uploadImage` (lines 191–197) with a call to the existing `ensureFirebaseAuth()`.
3. Add tiny local-storage helpers (`readLocalJson(key, fallback)`, `writeLocalJson(key, value)`) to replace the repeated try/parse/stringify blocks throughout the file.

## Phase 2 — `src/pages/HomePage.jsx` (543 → ~380 lines)
1. New hook `src/hooks/useTouchSwipe.js`: shared by the hero slideshow and testimonial carousel (touch start/move/end/cancel, 50px swipe threshold, drag-follow offset, drag state). Preserves current pause/resume behavior (5s resume via `scheduleResume`).
2. New component `src/components/SectionTitle.jsx`: the "title + horizontal lines" block currently duplicated for "Our Works" and "Our Clients".
3. New component `src/components/ProjectCard.jsx`: used by both the mobile 2×2 grid and the desktop 2-column grid (variant prop for aspect ratio + hover caption behavior; identical markup/classes).

## Phase 3 — `src/components/Footer.jsx` (310 → ~250 lines)
1. Extract `SocialTooltip` (bubble + colored dot + caret) used by both the social links and the copy-link button (props for label, dot color, and the copied/emerald variant).
2. Keep class names `social-share-container`, `social-tooltip-wrapper`, `is-copied`, `social-share-btn` exactly as-is (the tooltip hover/focus fix in `index.css` depends on them).

## Phase 4 — `src/pages/AdminPortal.jsx` (446 → ~400 lines)
1. Extract a small `FilterSelect` component for the three near-identical filter dropdowns (project category, testimonial project link, lead status) — options passed as props, markup/classes unchanged.
2. Leave stat cards, sidebar, and modals as-is (already data-driven).

## Phase 5 — Documentation touch-up
- Update the file-tree section in `README.md` (and only the tree) to list the new files (`hooks/`, `SectionTitle.jsx`, `ProjectCard.jsx`).

## Out of scope
- `src/data/defaultData.js` — content data, not logic.
- `src/index.css` — no dead-rule audit (high visual-regression risk, low value).
- Image/bundle weight optimization — separate effort (user selected source refactor).
- `ClientsSection.jsx` import list — explicit imports are clear; glob-import saves little.

## Validation
1. `npm run build` passes after each phase.
2. Manual smoke test (`npm run dev`):
   - Home: hero autoplay + arrows + touch swipe, Our Works cards at mobile and desktop widths, clients grid, testimonial carousel (arrows, dots, swipe), scroll-to-top button.
   - Theme toggle (light default on load, toggle works); footer social tooltips show on hover only; copy-link shows "Copied!" for ~2.4s.
   - Admin portal (`?key=<VITE_ADMIN_ACCESS_KEY>#admin`): login, all three tabs, search, each filter dropdown, add/edit/delete for projects and testimonials, lead status update.
   - Fallback path: with Firebase env vars absent, projects/testimonials/leads still load from localStorage/defaults.
3. Confirm localStorage keys unchanged (DevTools → Application) before/after a save in the admin portal.

## Risks
- Phase 1 touches persistence and real-time sync. Mitigation: identical exported signatures, identical storage keys/events, and testing both the live-Firebase and offline-fallback paths.
- Phase 2 touch handling: keep the 50px threshold and 5s pause-resume semantics exactly.
