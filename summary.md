# Ashara Interiors — Project Architecture & Scan Summary 🏛️✨

> **Generated on:** September 2, 2026  
> **Repository:** `Ashara-Interior`  
> **Status:** Production-Ready / Passing Build

---

## 📋 Executive Overview

**Ashara Interiors** is a high-performance, responsive luxury web application and Content Management System (CMS) designed for an Ethiopian interior architecture and design firm. It showcases presidential suites, civic institutions, corporate headquarters, and bespoke luxury interiors. The platform features an integrated administrative backend with real-time Firebase syncing, offline fallbacks, dynamic client matrix, and interactive portfolio galleries.

---

## 🛠️ Technology Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend Framework** | **React 18.3** (`react`, `react-dom`) | Component-based UI architecture |
| **Build & Dev Tooling** | **Vite 5.4** (`@vitejs/plugin-react`) | Fast bundling, HMR, and optimized production builds |
| **Styling & Design System** | **Tailwind CSS 3.4**, PostCSS, Autoprefixer | Custom design tokens, utilities, responsive layouts |
| **Icons & Micro-UI** | **lucide-react**, `clsx`, `tailwind-merge` | Consistent iconography and conditional class management |
| **Backend & Cloud** | **Firebase 12.18** (Firestore, Auth, Storage) | Real-time database, authentication, asset hosting |
| **Data Fallback** | **Web Storage API** (`localStorage`, `sessionStorage`) | Seamless offline development and demo mode |
| **Hosting & CI/CD** | **GitHub Pages** & GitHub Actions Workflow | Automated deployment pipeline |

---

## 📁 Project Structure & File Map

```text
Ashara-Interior/
├── index.html                     # Entry point with SEO meta, Google Fonts, and custom preloader
├── vite.config.js                 # Vite configuration
├── tailwind.config.js             # Custom luxury theme tokens (Teal, Gold, Sand, Charcoal, Dark)
├── postcss.config.js              # PostCSS plugins configuration
├── firestore.rules                # Cloud Firestore security rules
├── storage.rules                  # Firebase Storage bucket access rules
├── package.json                   # Dependencies and npm scripts
│
├── public/
│   ├── 404.html                   # SPA redirect handling for GitHub Pages
│   ├── bg_pattern.svg             # Subtle architectural lattice pattern (light)
│   ├── bg_pattern_dark.svg        # Subtle geometric pattern (dark mode)
│   ├── our_service.jpg            # High-resolution service showcase banner
│   ├── client_logos/              # 40+ official client emblems and governmental seals
│   └── assets/                    # Project hero renders and portfolio media
│
└── src/
    ├── main.jsx                   # React root mount
    ├── App.jsx                    # SPA routing controller, theme state, and preloader dismissal
    ├── index.css                  # Global Tailwind directives, custom scrollbars & keyframes
    │
    ├── components/
    │   ├── AsharaLogo.jsx         # Signature fingerprint mark & dual-typography logo
    │   ├── Navbar.jsx             # Fixed header, theme switcher, desktop & mobile nav
    │   ├── Footer.jsx             # Deep Forest Teal brand footer with navigation & contacts
    │   └── ClientsSection.jsx     # Dynamic 3-tier governmental & corporate client matrix
    │
    ├── pages/
    │   ├── HomePage.jsx           # Continuous luxury showcase & interactive hero carousel
    │   ├── ProjectsPage.jsx       # Categorized portfolio grid with live filtering
    │   ├── ProjectDetailPage.jsx  # Detailed case study view with metrics & gallery
    │   ├── ServicesPage.jsx       # Service offerings, architectural process, and FAQs
    │   ├── AboutPage.jsx          # Studio philosophy, 3 Core Value Pillars, and team
    │   ├── ContactPage.jsx        # Consultation booking form & direct communication links
    │   ├── BlogPage.jsx           # Architectural journal with instant modal reader
    │   └── AdminPortal.jsx        # Password-protected CMS (Projects, Blog, Leads Manager)
    │
    ├── services/
    │   ├── firebase.js            # Export gateway for Firebase services
    │   └── firebaseService.js     # Firestore CRUD, Firebase Auth, and Storage upload APIs
    │
    └── data/
        └── defaultData.js         # Fallback data for projects, articles, clients, and services
```

---

## 🎨 Design System & Palette

The application uses an editorial luxury palette tailored for high-end interior architecture:

| Token Name | Hex Code | Usage |
| :--- | :--- | :--- |
| **`ashara-teal`** | `#1E4E4E` | Primary brand color, footer, signature project cards |
| **`ashara-dark`** | `#0A1525` | Deep luxury dark mode background |
| **`ashara-gold`** | `#D4AF37` | Accents, badges, active indicators, highlights |
| **`ashara-sand`** | `#F5F2EB` | Neutral light backgrounds, contrast text |
| **`ashara-charcoal`**| `#1A1A1A` | High-contrast typography for light mode |
| **`ashara-terracotta`**| `#C85A32` | Accent gradients and call-to-action highlights |

### Typography
- **Headings:** *Cormorant Garamond* (Serif elegance)
- **Body / Interface:** *Plus Jakarta Sans* (Contemporary clarity)
- **Flourishes:** *Pinyon Script* (Subtle signature styling)

---

## ⚡ Core Functional Features

### 1. Multi-Page Isolated Routing with Continuous Home
- **Isolated Views:** Navigating to `Projects`, `Services`, `About`, `Blog`, `Contact`, or `Admin` renders dedicated, focused single-page views.
- **Continuous Home Flow:** The `Home` view offers a complete narrative journey (Hero Carousel → Studio Philosophy → 2×2 Featured Works → Services Accordion → Core Pillars → Journal → Client Matrix → Consultation Form).
- **Direct Hash Linking:** Deep links supported (`#home`, `#projects`, `#services`, `#about`, `#contact`, `#blog`, `#admin`, `#project-detail`).

### 2. Password-Protected Admin Portal & CMS
- Accessible via `/ #admin` or `?admin`.
- **Projects Manager:** Create, update, and remove portfolio projects with real-time sync.
- **Journal Editor:** Publish and edit architectural articles.
- **Consultation Leads:** View inbound inquiries with status management (`new`, `contacted`, `completed`).
- **Hybrid Storage:** Works with live **Firebase Firestore/Storage** or automatically falls back to **LocalStorage** when offline.

### 3. Responsive & Interactive Micro-Animations
- **Scroll Depth Progress Bar:** Gradient bar fixed to the top tracking scroll percentage.
- **Hero Slider Timer:** Animated progress indicator displaying the 5.5s slide countdown.
- **Touch & Keyboard Gestures:** Full touch-swipe support on mobile and arrow key navigation on desktop.
- **Theme Switcher:** Seamless Dark / Light mode toggle with `sessionStorage` persistence.

---

---

## ⚡ Performance Optimizations Implemented

1. **Route-Level Code-Splitting (`React.lazy` + `Suspense`)**:
   - `AdminPortal` (CMS) is isolated into its own chunk, preventing overhead on public-facing page loads.
   - All sub-pages (`ProjectsPage`, `ServicesPage`, `AboutPage`, `ContactPage`, `BlogPage`, `ProjectDetailPage`) load asynchronously on demand with a minimal luxury loading fallback.
   - **Initial App Bundle (`index.js`) reduced from 267.78 kB to 25.39 kB** (90.5% reduction).

2. **Rollup Multi-Chunk Architecture**:
   - Deconstructed monolithic 712 kB Firebase bundle into granular chunks:
     - `vendor-react` (~152 kB)
     - `vendor-firebase-core` (~139 kB)
     - `vendor-firebase-db` (~346 kB)
     - `vendor-misc` (~227 kB)
   - Eliminates build bundle-size warnings and enables parallel HTTP/2 download multiplexing.

3. **Smart Asset Loading & Resource Hints**:
   - `fetchPriority="high"` on critical above-the-fold hero image.
   - `loading="lazy"` and `decoding="async"` applied across all portfolio galleries, blog cards, and client logo matrices.
   - Added `<link rel="preconnect">` and `<link rel="dns-prefetch">` for Unsplash CDN in `index.html`.
   - Preloaded primary logo `./client_logos/ashara_logo_white.png` to eliminate preloader flicker.

---

## 🔍 Build Verification & Health Report

- **Vite Production Build:** ✅ **PASSED** (`npm run build` completed in **3.79s** with 0 errors and 0 chunk warnings).
- **Initial App JS Chunk:** **25.39 kB** (gzip: 8.16 kB)
- **Git Working Tree:** ✅ **Clean** on branch `main`.
- **Security Rules:** `firestore.rules` and `storage.rules` configured for Firestore and Storage access control.
