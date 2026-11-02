# AGENTS.md

Guidance for AI coding agents working in this repository.

## Commands

- `npm run dev` — start the Vite dev server (http://localhost:5173)
- `npm run build` — production build to `dist/`
- `npm run preview` — serve the built bundle locally
- `npm run lint` — ESLint (flat config in `eslint.config.js`; correctness-focused: react-hooks rules, no-undef, unused vars)
- `npm run test:e2e` — Playwright e2e suite (`tests/e2e/`, boots the dev server automatically; first run needs `npx playwright install chromium`)

Quality gates: `npm run lint`, `npm run build`, and `npm run test:e2e` must all pass. CI runs all three on every push/PR to `main` (`.github/workflows/tests.yml`); deploys run separately via `deploy.yml`.

## Admin portal (local testing)

The CMS is gated by a URL key: `http://localhost:5173/?key=<VITE_ADMIN_ACCESS_KEY>#admin` (see `.env.example`). Real cloud writes additionally require signing in with the Firebase admin account; anonymous auth (used by the public site for reads) intentionally does not satisfy the `isAdmin()` checks in `firestore.rules`/`storage.rules`.

## Architecture essentials

- Hash-based routing lives in `src/App.jsx` (`#home`, `#projects`, `#services`, `#about`, `#contact`, `#project-detail/<id>`, `#admin`). Pages are lazy-loaded.
- `src/services/localCache.js` is the SDK-free localStorage cache layer (initial reads, default-list merges, tombstones). `src/services/firebaseService.js` wraps it with Firestore/Auth/Storage and re-exports the cache functions — importers must not import the Firebase SDK directly.
- All CMS writes return `{ success, id?, isLive, error? }`; `isLive === false` means "saved locally only — cloud unavailable".
- Persistence contracts (do not rename casually): localStorage keys `ashara_projects`, `ashara_projects_v`, `ashara_testimonials`, `ashara_consultations`, `ashara_deleted_defaults`, `ashara_deleted_items`; sessionStorage `ashara_admin_auth`; window events `ashara_projects_updated`, `ashara_testimonials_updated`; Firestore collections `projects`, `testimonials`, `consultations`, `deleted_items`, `deleted_defaults`.
- Shared helpers: `src/utils/sortProjects.js` (project ordering), `src/utils/imageFallback.js` (`<img>` onError fallback), `src/hooks/useTouchSwipe.js` (hero + testimonial carousels).

## Conventions

- Tailwind utility classes with custom `ashara-*` color tokens from `tailwind.config.js`; dark mode via the `dark:` class strategy.
- Keep Firebase credentials in `.env` / GitHub secrets only — never commit keys.
- `src/index.css` contains hand-written loader/animation/tooltip rules that JSX depends on by class name (`social-tooltip-wrapper`, `social-share-btn`, `is-copied`, `dna-*`, `#ashara-loader`); renaming any of them breaks the UI.
- Deployment is GitHub Pages via `.github/workflows/deploy.yml` on push to `main`; `vite.config.js` uses `base: './'` for the subpath.
