# Ashara Interiors 🏛️✨

> **Curated Luxury Interior Architecture & Design**  
> A premier, responsive web application showcasing Ethiopian governmental headquarters, executive presidential suites, broadcasting hubs, corporate palaces, and bespoke interior architecture.

🔗 **Live Website**: [https://kuch278a.github.io/Ashara-Interior](https://kuch278a.github.io/Ashara-Interior)

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Key Features & User Experience](#-key-features--user-experience)
- [Reactivity & Micro-Interactions](#-reactivity--micro-interactions)
- [Tech Stack](#-tech-stack)
- [Design System & Palette](#-design-system--palette)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Pages & Architecture](#-pages--architecture)
- [CI/CD & Live Deployment](#-cicd--live-deployment)
- [License](#-license)

---

## 🌟 Overview

**Ashara Interiors** is a high-performance luxury web platform built with **React**, **Vite**, and **Tailwind CSS**. It bridges Ethiopian monumental civic heritage with contemporary architectural rigor.

### Visual & Architectural Highlights
- **Default Luxury Dark Mode**: Always initializes in Dark Mode with deep sapphire backgrounds (`#0A1525`), subtle geometric lattice patterns, and gold typography.
- **Editorial Typography**: Cormorant Garamond serif headings, Plus Jakarta Sans interface typography, and Pinyon Script flourishes.
- **Signature Teal Project Cards**: Solid deep forest teal (`#1E4E4E`) bottom label boxes featuring uppercase category tags and serif typography.
- **Real-Time Scroll Progress**: A gradient progress bar fixed to the top of the viewport tracking reading depth.

---

## ✨ Key Features & User Experience

- 📜 **Continuous Multi-Section Home Page**:
  - Scrolling on the **Home page** takes visitors on a seamless journey through the entire studio showcase: Hero Carousel $\rightarrow$ Philosophy Quote $\rightarrow$ "Our Works" 2x2 Grid $\rightarrow$ Services (with interactive accordion) $\rightarrow$ About Us (with 3 Core Value Pillars) $\rightarrow$ The Ashara Journal $\rightarrow$ Clients & Testimonials $\rightarrow$ Contact Form $\rightarrow$ Footer.
- 🎯 **Dedicated Single-Page View Isolation**:
  - Clicking any navigation item (**`HOME`**, **`PROJECTS`**, **`OUR SERVICES`**, **`ABOUT US`**, **`BLOG`**, **`CONTACT`**) switches to and renders **ONLY that selected page**.
- 🏛️ **Real Governmental & Corporate Portfolio**:
  - **Prosperity Party Office** (Executive presidential suite & convention hall)
  - **Ethiopia Federal Police** (High-security civic campus)
  - **Fana Broadcasting Corporation** (Broadcasting & media atelier)
  - **United Beverages** (Neoclassical corporate head office)
  - **Amibara Properties** (Commercial real estate HQ)
  - **Ministry of Revenues** (Monumental civic complex & dome auditorium)
- 🤝 **Client & Partner Matrix**:
  - Interactive 3-row grid featuring 15+ official client emblems and governmental seals.
- 📖 **The Ashara Journal (Blog)**:
  - Architectural essays with an interactive reading modal.
- 📩 **Consultation & Booking Form**:
  - Interactive consultation booking form with validation states and direct WhatsApp / Phone / Email contacts.

---

## ⚡ Reactivity & Micro-Interactions

| Feature | Description |
| :--- | :--- |
| **Top Scroll Progress Bar** | Fixed gradient indicator (`bg-gradient-to-r from-ashara-teal via-ashara-gold to-ashara-terracotta`) tracking scroll percentage in real time. |
| **Hero Slide Progress Timer** | The active slide pill fills with an animated gold progress bar showing the 5.5s countdown before transitioning. |
| **Keyboard Navigation** | Navigate the hero carousel using **Left Arrow (←)** and **Right Arrow (→)** keys. |
| **Mobile Touch Swiping** | Fluid touch swipe gestures for mobile and tablet carousel navigation. |
| **Kinetic Card Physics** | Smooth hover elevation (`hover:-translate-y-2 hover:shadow-2xl`) and image zoom (`group-hover:scale-108`). |
| **Dynamic Navbar Elevation** | Dynamic backdrop blur and border shadow that adjusts when scrolled past 20px. |

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **[React 18](https://react.dev/)** | Component-based UI architecture |
| **[Vite 5](https://vitejs.dev/)** | Next-generation fast frontend tooling and dev server |
| **[Tailwind CSS 3](https://tailwindcss.com/)** | Utility-first styling with custom design tokens |
| **[Lucide React](https://lucide.dev/)** | Modern, lightweight UI icon system |
| **[Google Fonts](https://fonts.google.com/)** | Cormorant Garamond, Plus Jakarta Sans, Pinyon Script, Alex Brush |
| **[GitHub Actions](https://github.com/features/actions)** | Automated CI/CD deployment to GitHub Pages |

---

## 🎨 Design System & Palette

### Brand Colors

| Token | Hex Code | Preview | Usage |
| :--- | :--- | :---: | :--- |
| `ashara-teal` | `#1E4E4E` | `■` | Primary brand color, headers, footers, project cards |
| `ashara-teal-hover` | `#163B3B` | `■` | Button hover and darker accent states |
| `ashara-terracotta` | `#DF6D27` | `■` | Warm accents, badges, call-to-actions |
| `ashara-gold` | `#C5A880` | `■` | Luxury accents, active indicators, borders |
| `ashara-charcoal` | `#1A1816` | `■` | Primary readable typography (Light mode) |
| `ashara-dark` | `#0A1525` | `■` | Luxury dark mode body background |
| `ashara-sand` | `#D5CDC4` | `■` | Light readable typography (Dark mode) |

---

## 📁 Project Structure

```text
Ashara-Interior/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automated GitHub Pages CI/CD workflow
├── index.html                  # HTML entry point with default dark theme & fonts
├── package.json                # Project dependencies and scripts
├── postcss.config.js           # PostCSS configuration
├── tailwind.config.js          # Custom theme tokens, fonts, and luxury shadows
├── vite.config.js              # Vite bundler configuration
├── public/                     # Static production assets
│   ├── assets/                 # Project showcase photography (p1–p6)
│   ├── client_logos/           # 15+ governmental seals & client logos
│   ├── bg_pattern.svg          # Light mode geometric pattern
│   ├── bg_pattern_dark.svg     # Dark mode geometric pattern
│   └── our_service.jpg         # Services hero banner background
└── src/
    ├── App.jsx                 # Main layout, dark mode state, and dedicated view router
    ├── index.css               # Global styles, scrollbar, and keyframe animations
    ├── main.jsx                # React root mount entry point
    ├── components/
    │   ├── AsharaLogo.jsx      # Vector SVG brand emblem & typography
    │   ├── ClientsSection.jsx  # Client logos matrix & presidential quote
    │   ├── Footer.jsx          # Solid teal footer with quick links & social links
    │   └── Navbar.jsx          # Header navigation, scroll progress, & theme toggle
    └── pages/
        ├── AboutPage.jsx       # Studio story, workspace banner, & 3 Core Pillars
        ├── BlogPage.jsx        # The Ashara Journal & interactive reading modal
        ├── ContactPage.jsx     # Consultation booking form & studio locations
        ├── HomePage.jsx        # Full multi-section continuous scroll experience
        ├── ProjectDetailPage.jsx # Individual project case study with gallery
        ├── ProjectsPage.jsx    # Complete portfolio gallery with category filters
        └── ServicesPage.jsx    # "How We Work" hero & 4-tier interactive accordion
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18.0.0 or higher)
- **npm** (v9.0.0 or higher)

### Installation & Local Run

1. **Clone the repository**:
   ```bash
   git clone https://github.com/kuch278a/Ashara-Interior.git
   cd Ashara-Interior
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

4. **Build for production**:
   ```bash
   npm run build
   ```

---

## 🌐 CI/CD & Live Deployment

The project is configured for **Continuous Automated Deployment** with GitHub Actions:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:
```

### Live Production URL:
👉 **[https://kuch278a.github.io/Ashara-Interior](https://kuch278a.github.io/Ashara-Interior)**

### How to Deploy Updates:
Whenever you make changes, commit and push to `main`:
```bash
git add .
git commit -m "Update website features"
git push origin main
```
GitHub Actions will automatically run the build and publish the updated site to GitHub Pages in 1–2 minutes!

---

## 📄 License

This project is licensed under the [MIT License](LICENSE) — curated for **Ashara Interiors**.
