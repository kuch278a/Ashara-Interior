# Ashara Interiors — Fundamental

Foundational reference for the project: what it is, how it is built, and the
constraints that are not visible from the code alone.

Last verified: 2026-09-28

---

## 1. What this is

Marketing and lead-capture site for **Ashara Interiors**, a luxury interior
design and build studio based in Addis Ababa, Ethiopia.

Public site plus a password/pin-gated admin portal used to manage studio
content (projects, blog posts, testimonials) and to review consultation
enquiries.

| | |
|---|---|
| Repo | `github.com/kuch278a/Ashara-Interior` |
| Firebase project | `ashara-interiors` |
| Firebase plan | **Spark (free)** — see §6, this is load-bearing |
| Live site | `https://kuch278a.github.io/Ashara-Interior/` |
| Admin portal | `https://kuch278a.github.io/Ashara-Interior/admin` |
| Public contact shown on site | `Mikasadessalegn@gmail.com`, `info@ashara.com` |
| Enquiry inbox | `birukesayas911@gmail.com` (Web3Forms account) |
| Studio address | Megenagna, Infront of Ethio Ceramics, Bete Sahlite-Mihret Building, 4th Floor, Addis Ababa |

---

## 2. Stack

- **React 18** + **Vite 5** (`npm run dev` / `build` / `preview`)
- **Tailwind CSS 3.4** with a custom `ashara.*` palette
- **Firebase 12** — Firestore, Auth, and Storage
- **lucide-react** for icons
- Plain `.jsx`, no TypeScript, no test runner
- Deploy: GitHub Actions → **GitHub Pages** (Firebase Hosting is *not* used)

### Design tokens

Two Tailwind palettes are defined in `tailwind.config.js` and **both are in
active use**:

- `colors.ashara.*` — `teal #1E4E4E`, `gold #C5A880`, `charcoal #1A1816`,
  `terracotta #DF6D27`, `dark #0A1525`, plus tints
- `colors.terion.*` — a second, near-duplicate set (`charcoal`, `orange`,
  `bg`, `border`, `card-dark`, `muted`, `gray`) used heavily in
  `components/Navbar.jsx` and elsewhere

This is a genuine inconsistency, not dead code: components are mixed across
both scales, so `terion-orange` and `ashara-terracotta` describe the same
colour through different names. Standardise on `ashara.*` when touching a
file, and migrate deliberately rather than opportunistically.

Dark mode is driven by a `dark` class on `<html>`.

---

## 3. Structure

```
src/
  pages/         Home, About, Projects, ProjectDetail, Services, Blog, Contact, AdminPortal
  components/    Navbar, Footer, FullScreenHeroSlideshow,
                 AccordionPanelCarousel, CoverflowCarousel, ClientsSection
  services/
    firebaseService.js   <-- all Firestore/Auth/storage access lives here
    firebase.js
  data/defaultData.js    seed/fallback content
```

Routing is **hand-rolled on `window.location`** in `App.jsx` (path or
`?page=` query). There is no router library. Adding a page means editing the
route list in `App.jsx` in two places.

---

## 4. Data model

Every collection is read through `firebaseService.js` and **mirrored into
`localStorage`**. Firestore is the source of truth; localStorage is the
offline/fallback layer, so writes that fail are silent by design.

| Collection | Public read | Admin write | Mirror key |
|---|---|---|---|
| `projects` | yes | yes | `ashara_projects` |
| `blog_posts` | yes | yes | `ashara_blog_posts` |
| `testimonials` | yes | yes | `ashara_testimonials` |
| `consultations` | **no** (auth only) | yes | `ashara_consultations` |

`consultations` document shape — enforced by `firestore.rules`:

```js
{ fullName, email, telephone, enquiry, createdAt, status }
```

`createdAt` is an **ISO string from the visitor's own clock**, not a server
timestamp. So it is client-controlled and untrustworthy for anything that
depends on accurate ordering. `status` is `'new' | 'contacted' | 'completed'`.

> **Known gap:** `testimonials` has no rule in `firestore.rules`, so it falls
> through to the catch-all `allow read, write: if false`. Testimonial reads and
> writes are **denied in production** and silently degrade to localStorage. Add
> a rule if testimonials are meant to be managed in the portal.

---

## 5. Enquiry flow

```
ContactPage form
  └─ submitConsultation()                    firebaseService.js
       ├─ 1. addDoc to Firestore  ← durable, drives the admin portal
       └─ 2. POST api.web3forms.com  ← best-effort email, runs second
```

Order matters: the Firestore write happens **first**, and the email relay can
never throw or block it. A mail failure must not make a visitor think their
submission was rejected. The function returns `{ success, id, isLive, emailed }`.

The relay sets `replyto` to the visitor's address, so replying to an enquiry
reaches them directly, and carries a `botcheck` honeypot field.

**Trade-off:** visitors get an on-screen confirmation only. There is **no
client confirmation email** — see §6.

---

## 6. Platform constraint: no Cloud Functions

The project is on the **Spark (free) plan**, which **cannot deploy Cloud
Functions at all**. Both of these fail with *"must be on the Blaze
(pay-as-you-go) plan"*:

```bash
firebase deploy --only functions     # cloudbuild.googleapis.com
firebase functions:secrets:set ...   # secretmanager.googleapis.com
```

This is why a `functions/` package existed and was removed (commit `ad41a3b`,
recoverable from `eed3195`). A correct, tested trigger — HTML-escaped
templates, verified end-to-end against real Gmail — was deleted because it
could not be deployed. The GitHub Pages workflow also never built it, so CI
never surfaced the problem.

**Consequence:** email goes through Web3Forms, a third-party relay, rather
than the studio's own SMTP. Mail is routed through their infrastructure and
only the account inbox receives it.

**If the studio later upgrades to Blaze**, the two paths to restore are to
redeploy the old function, or switch to `defineSecret` and
`firebase functions:secrets:set` — but note `.env` values are **not** injected
into deployed functions the way they are into the Vite build.

---

## 7. Environment variables

`.env` is **gitignored**. Vite inlines `VITE_*` at **build time**, so anything
the live bundle needs must exist in the environment where `npm run build`
runs.

| Variable | Where | Purpose |
|---|---|---|
| `VITE_FIREBASE_*` | `.env` **and** hardcoded fallbacks | Firebase config |
| `VITE_EMAILJS_*` | `.env` (service ID, template ID, public key) | enquiry email relay |

**The enquiry relay is EmailJS**, configured via `VITE_EMAILJS_SERVICE_ID`,
`VITE_EMAILJS_TEMPLATE_ID`, and `VITE_EMAILJS_PUBLIC_KEY` in `.env`
(see `.env.example`). The submission is Firestore-first: the email is
best-effort, and a missing EmailJS config never blocks the lead from saving.

> The Firebase config is **duplicated as literal fallbacks** in
> `firebaseService.js` (~line 28). That is why CI builds work without any
> secrets. Anyone can read the project ID, API key and bucket from the
> published bundle. Harmless for the API key, but it means rotating config
> means editing the source, not just `.env`.

---

## 8. Auth and security

**The admin portal is gated by a Firebase Auth credential hardcoded in client
source** (`firebaseService.js`, `ensureFirebaseAuth`):

```js
signInWithEmailAndPassword(auth, '<admin email>', '<password>')
```

Because it is in the bundle, **anyone can sign in as that admin.** They can
then satisfy `request.auth != null` everywhere, which means:

- read every consultation (names, emails, phone numbers)
- write `projects`, `blog_posts`, and any other collection guarded only by
  `!= null`

This was demonstrated during development by reading production leads with no
exploit. **The password has not been rotated.** Treat the site as having
public write access until it is.

A real fix means either an auth-backed role claim checked in
`firestore.rules`, or moving admin writes behind a function. The client-side
"master passcode" in `AdminPortal.jsx` is UI gating and is not access control.

### `firestore.rules` posture

- `projects`, `blog_posts` — public read, auth-only write
- `consultations` — public **create** (anonymous contact form) but strictly
  validated: `hasOnly` the six expected fields, length caps, email shape
  check, and `status` must be `'new'`. Read and update require auth.
- catch-all deny

The `consultations` create rule exists specifically to stop the collection
being used as an open mail relay or spam dump. Verified against the emulator:

```
ALLOW  valid submission
DENY   extra/unknown field      DENY   status self-set to 'completed'
DENY   malformed email          DENY   oversized enquiry
DENY   empty enquiry            DENY   anonymous read
```

---

## 9. Build and deploy

```bash
npm install
npm run dev                 # vite dev server
npm run build               # -> dist/
```

Push to `main` → `.github/workflows/deploy.yml` builds and publishes `dist/` to
GitHub Pages via `peaceiris/actions-gh-pages@v4`. `base: './'` in
`vite.config.js`, so the site works from a subpath.

CI has **no tests, no lint, and no typecheck** — the build is the only gate.
Runner warnings on every run: Node 20 deprecation on the actions, and
`ubuntu-latest` migrating to Ubuntu 26.

`firebase.json` exists solely for `firestore.rules` and the emulator. Rules are
deployed manually with `firebase deploy --only firestore:rules`; nothing in CI
does it.

> **Firebase Storage is not provisioned on this project.** `storage.rules` is
> committed and reasonable (auth-only write, 10MB cap, images only), and is now
> referenced from `firebase.json` — but the project has never had a Storage
> bucket, so `firebase deploy --only storage` fails with *"Firebase Storage has
> not been set up"*. **Every `uploadImage()` call in the admin portal has
> therefore been failing** and falling back to its non-Cloud path. Image
> uploads are not currently working in production.

---

## 10. Open items

Ranked by how much they matter.

1. **Rotate the hardcoded admin credential** and replace
   `request.auth != null` with a role claim. Until then the site's content and
   all enquiries are effectively public.
2. **Provision Firebase Storage** (§9) — needs a one-time click in the console
   and almost certainly the Blaze plan. Until then, admin image uploads fail.
3. **Switch off client clock for `consultations.createdAt`** — use a real
   server timestamp, and make the read paths and email templates handle a
   Firestore `Timestamp` rather than a string.
4. **No tests.** A single test for `submitConsultation` and the rules would
   have caught most of this session's problems. No runner is configured.
5. **Client confirmation email is missing** — visitors get no email at all.
6. **Decide on Blaze.** Either upgrade and restore proper backend email, or
   accept the Web3Forms dependency permanently.
7. **Revoke the unused Gmail App Password** created during the Cloud Functions
   attempt. It is no longer read by anything.
8. **Consolidate the `ashara` / `terion` palettes** (§2).

---

## 11. Conventions

- Service/DB access stays in `src/services/firebaseService.js`; pages do not
  touch the Firebase SDK directly.
- All Firestore writes are mirrored to localStorage with an `ashara_*` key.
  Preserve that, or offline behaviour regresses.
- Icons come from `lucide-react`.
- Brand colours come from `ashara.*` Tailwind tokens, not hex literals.
- Carousel components are duplicated with near-identical markup
  (`FullScreenHeroSlideshow`, `AccordionPanelCarousel`, `CoverflowCarousel`).
  Divergences have caused real bugs — an inverted pair of prev/next handlers
  shipped in the hero. Extract a shared control when touching them.
