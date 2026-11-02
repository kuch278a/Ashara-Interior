# Ashara Interiors 🏛️✨

> **Curated Luxury Interior Architecture & Design**  
> A premier, responsive web application showcasing Ethiopian governmental headquarters, executive presidential suites, broadcasting hubs, corporate palaces, and bespoke interior architecture — powered by a real-time Firebase CMS and a password-protected Admin Portal.

[![Live Site](https://img.shields.io/badge/Live_Site-GitHub_Pages-005F56?style=for-the-badge&logo=github)](https://kuch278a.github.io/Ashara-Interior)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Firebase](https://img.shields.io/badge/Firebase-Firestore_%26_Auth-FFCA28?style=for-the-badge&logo=firebase)](https://firebase.google.com/)

🔗 **Live Website**: [https://kuch278a.github.io/Ashara-Interior](https://kuch278a.github.io/Ashara-Interior)

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Key Features & User Experience](#-key-features--user-experience)
- [Client Showcase & Portfolio](#-client-showcase--portfolio)
- [Admin Portal & CMS](#-admin-portal--cms)
- [Micro-Interactions & Loaders](#-micro-interactions--loaders)
- [Tech Stack](#-tech-stack)
- [Design System & Palette](#-design-system--palette)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [CI/CD & Live Deployment](#-cicd--live-deployment)
- [License](#-license)

---

## 🌟 Overview

**Ashara Interiors** is a high-performance luxury web platform engineered with **React 18**, **Vite 8**, and **Tailwind CSS 3**, backed by **Google Firebase** (Firestore, Authentication, Storage). It celebrates Ethiopian monumental civic heritage and contemporary architectural rigor — seamlessly pairing public storytelling with a bespoke content management system for studio projects, client testimonials, and consultation inquiries.

### Visual & Architectural Highlights
- **Harmonious Dual Themes**: Initializes in an airy, warm Light Mode (`#E8EDF2` / `#FAF8F5`) with custom geometric tile background patterns (`bg_pattern.svg`), alongside a one-click toggle to a luxury Dark Mode (`#0A1525` sapphire night with `bg_pattern_dark.svg`).
- **Editorial Typography**: *Source Serif 4* variable font — serif display headings and interface typography in one family.
- **Pure CSS 3D DNA Helix Preloader**: A horizontal double-helix loader with rotating strand nodes and smooth fade-out state.
- **Social Interaction Row**: Brand-colored reveals on hover, floating tooltip labels, and an interactive "Copy Link" button with an animated confirmation pill badge.
- **Distortion-Free Logo Rendering**: Clean vector & transparent PNG client emblems with dedicated optical outline exclusions.

---

## ✨ Key Features & User Experience

### 🏠 Home Page — Continuous Multi-Section Experience
- **Full-Screen Hero Slideshow**: Auto-advancing cross-fade (6s interval) with slide indicators, prev/next arrows, and touch swipe gestures.
- **Philosophy Narrative**: Editorial quote section with balanced serif typography and warm terracotta quotation accents.
- **Our Works**: Responsive project card grid — 2×2 on mobile with slide-up captions, 2-column hover-reveal grid on desktop.
- **Services Showcase**: "How We Work" atelier philosophy coupled with a multi-tier service suite (Residential, Commercial, Civic, Turnkey Construction).
- **About Us Snapshot**: Studio lineage, atelier values, and 3 Core Architectural Pillars.
- **Client Emblems Showcase**: Responsive 5-column grid featuring prestigious Ethiopian governmental, broadcasting, and corporate partner logos.
- **Testimonial Carousel**: Featured client testimonials with quotes and client attribution, swipeable with drag-follow.
- **Direct Consultation Section**: Integrated contact inquiry form with validation, WhatsApp click-to-chat, direct phone dial, and email dispatch.

### 🎯 Dedicated Page Isolation & Routing
- Clicking any header navigation link (**`HOME`**, **`PROJECTS`**, **`SERVICES`**, **`ABOUT`**, **`CONTACT`**) isolates and renders **ONLY that selected page** with dedicated scroll preservation and clean URL hash navigation.

### 🖼️ Projects Page — Editorial Portfolio Grid
- Responsive CSS Grid layout (1 column on mobile → 2 columns from `sm` up).
- Card hover physics: subtle elevation, image zoom, and keyboard-accessible cards (Enter/Space).
- Broken-image fallback chain keeps cards presentable even when a CMS image URL fails.

### 📄 Project Detail Page — Immersive Architectural Case Study
- Full-bleed hero photography with high-resolution details.
- Two-column architectural narrative pairing project specs with scope and philosophy.
- Full-width feature images and dual-column gallery grids.
- Contextual "Recommended Projects" showcase and direct consultation booking trigger.


## 🔐 Admin Portal & CMS

The studio CMS is hidden from the public navigation and protected via a secret URL access key and Firebase Authentication:

- **Live URL**: `https://kuch278a.github.io/Ashara-Interior/?key=ashara-studio-2026#admin`
- **Local Dev URL**: `http://localhost:5173/?key=ashara-studio-2026#admin`

### Key Capabilities
| Module | Functionality |
| :--- | :--- |
| **Projects Manager** | Create, update, and delete projects. Upload hero images + up to 8 gallery photos. Changes reflect instantly on live public pages without rebuilding. |
| **Consultation Leads** | View incoming consultation inquiries in real time. Manage statuses (`New`, `Contacted`, `Completed`). One-click actions to contact via WhatsApp or Email. |
| **Testimonials Manager** | Manage client reviews with client names, organizations, and project associations. |
| **Live Database State** | Real-time Firebase connection health indicator with automatic local cache fallbacks. |

---

## 🧬 Micro-Interactions & Loaders

- **DNA Helix Preloader** (`DnaHelixLoader.jsx`): Pure CSS 3D rotating double helix with horizontal strand nodes, dynamic perspective, and clean white-mode aesthetic.
- **Top Scroll Progress Indicator**: Real-time fixed gradient bar (`ashara-teal` → `ashara-gold` → `ashara-terracotta`) tracking viewport scroll depth.
- **Social Media Share Buttons**:
  - Brand-colored hover reveals: Instagram (`#E1306C`), Facebook (`#1877F2`), LinkedIn (`#0A66C2`), TikTok (`#000000`), WhatsApp (`#25D366`).
  - Floating label tooltips on hover.
  - Interactive **Copy Link** button with a click animation that triggers a green **"Copied!"** confirmation pill badge.
- **Optical Outline Management**: Photography features a 1px soft optical border to ground images, while client emblems and brand marks use `.no-outline` rules to ensure transparent, crisp logos.

---

## 🛠️ Tech Stack

- **Frontend**: [React 18](https://react.dev/) + [Vite 8](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/) + Custom CSS3 3D animations
- **Backend / Database**: [Firebase v12](https://firebase.google.com/) (Firestore, Auth, Storage)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: Source Serif 4 (Google Fonts, variable)
- **Hosting & CI/CD**: GitHub Pages + GitHub Actions

---

## 📁 Project Structure

```text
Ashara-Interior/
├── .github/
│   └── workflows/
│       ├── deploy.yml              # Automated GitHub Pages CI/CD workflow
│       └── tests.yml               # Lint + build + Playwright e2e on every push/PR
├── public/
│   ├── 404.html                    # SPA hash router fallback for GitHub Pages
│   ├── favicon.png                 # Browser tab and app icon
│   ├── og-image.png                # Social share preview image
│   └── robots.txt                  # Search engine directives (allow all)
├── src/
│   ├── assets/
│   │   ├── Ashara logo/            # High-res official brand marks
│   │   ├── client_logos/           # Institutional client emblems + dark variants (PNG)
│   │   ├── projects/               # Portfolio photography served by the site (145 images)
│   │   ├── bg_pattern.svg          # Light mode geometric background pattern
│   │   └── bg_pattern_dark.svg     # Dark mode geometric background pattern
│   ├── components/
│   │   ├── AsharaLogo.jsx          # Vector/PNG responsive brand emblem
│   │   ├── ClientsSection.jsx      # Clean 5-column responsive client logo grid
│   │   ├── DnaHelixLoader.jsx      # 3D Horizontal DNA double helix loader
│   │   ├── Footer.jsx              # Footer with social share reveals & copy link
│   │   ├── Navbar.jsx              # Header, scroll progress bar, theme switcher
│   │   ├── ProjectCard.jsx         # Shared Our Works project card (mobile & desktop grids)
│   │   └── SectionTitle.jsx        # Section heading flanked by horizontal rules
│   ├── data/
│   │   └── defaultData.js          # Built-in projects, testimonials & mock data
│   ├── hooks/
│   │   └── useTouchSwipe.js        # Shared touch-swipe handling (hero & testimonial carousel)
│   ├── pages/
│   │   ├── admin/                  # Modular CMS tabs and modal dialogs
│   │   ├── AboutPage.jsx           # Studio narrative, atelier workspace & pillars
│   │   ├── AdminPortal.jsx         # Password-authenticated studio CMS
│   │   ├── ContactPage.jsx         # Booking form, map details & direct contact actions
│   │   ├── HomePage.jsx            # Multi-section continuous studio scroll
│   │   ├── ProjectDetailPage.jsx   # Architectural case study & gallery
│   │   ├── ProjectsPage.jsx        # Two-column editorial portfolio grid
│   │   └── ServicesPage.jsx        # 4-tier service showcase & workflow accordion
│   ├── services/
│   │   ├── firebaseService.js      # Firestore CRUD, Auth, Storage & real-time sync
│   │   └── localCache.js           # SDK-free localStorage cache & default-list merges
│   ├── utils/
│   │   ├── imageFallback.js        # Shared <img> onError fallback handler
│   │   ├── imageOptimizer.js       # Client-side image compression
│   │   └── sortProjects.js         # Shared project ordering (updatedAt → id)
│   ├── App.jsx                     # Top-level routing, dark mode & layout shell
│   ├── index.css                   # Global styles, 3D keyframes & outline rules
│   └── main.jsx                    # Application entry mount + root error boundary
├── tests/
│   └── e2e/                        # Playwright e2e suite (routing, admin gate, regressions)
├── AGENTS.md                        # Conventions & contracts for AI coding agents
├── eslint.config.js                 # ESLint flat config (correctness-focused rules)
├── playwright.config.js             # Playwright config (boots dev server, Chromium)
├── index.html                       # HTML5 template, DNA preloader & SEO metadata
├── firestore.rules                 # Firestore security rules (admin allowlist, public reads)
├── storage.rules                   # Cloud Storage security rules (admin-only image uploads)
├── firebase.json                   # Rules deployment wiring for the Firebase CLI
├── tailwind.config.js              # Custom color tokens, fonts & luxury shadows
└── vite.config.js                  # Vite configuration with relative base URL
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v18.0.0 or higher)
- **npm** (v9.0.0 or higher)

### Setup & Local Development
```bash
# 1. Clone repository
git clone https://github.com/kuch278a/Ashara-Interior.git
cd Ashara-Interior

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev
```
Open `http://localhost:5173` in your browser.

### Building for Production
```bash
npm run build
```
The compiled, optimized distribution bundle will be output to `/dist`.

### Linting & Tests
```bash
npm run lint        # ESLint (react-hooks, no-undef, unused vars)
npm run test:e2e    # Playwright e2e suite (first run: npx playwright install chromium)
```
The e2e suite boots the dev server automatically and covers hash routing, the
admin gate, contact-form validation, and regression tests for past defects.

---

## 🔑 Environment Variables

All credentials come from environment variables (never hardcoded) — `.env` is gitignored and CI injects the values from GitHub secrets. Create a `.env` file in the root directory (see `.env.example`):

```env
# Firebase (CMS backend)
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id

# EmailJS (enquiry notification emails)
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key

# Admin portal access key (URL gate: ?key=<value>#admin)
VITE_ADMIN_ACCESS_KEY=your_admin_access_key
```

---

## 🌐 CI/CD & Live Deployment

The repository uses GitHub Actions. A **Tests** workflow (`.github/workflows/tests.yml`) runs lint, build, and the Playwright e2e suite on every push and pull request to `main`; deployment to GitHub Pages runs separately via `deploy.yml` on pushes to `main`.

### Automated GitHub Pages Workflow
Whenever changes are pushed to `main`:
1. GitHub Actions checks out the repository.
2. Sets up Node.js and installs dependencies via `npm install`.
3. Runs `npm run build` with a relative base path (`./`), which is what makes the subpath deployment work.
4. Deploys the static bundle to the `gh-pages` deployment branch.

To push an update:
```bash
git add .
git commit -m "Update features and documentation"
git push origin main
```

**Live Deployment URL**: [https://kuch278a.github.io/Ashara-Interior/](https://kuch278a.github.io/Ashara-Interior/)

---

## 📄 License

This project is proprietary and curated for **Ashara Interior Design & Building** © 2026. All rights reserved.