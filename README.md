# Ashara Interiors 🏛️✨

> **Curated Luxury Interior Design & Architecture**  
> A bespoke, responsive web application showcasing high-end residential, commercial, and hospitality interior design projects, architectural blueprints, and curated client experiences.

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Design System & Palette](#-design-system--palette)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Available Scripts](#available-scripts)
- [Pages & Architecture](#-pages--architecture)
- [Deployment](#-deployment)
- [License](#-license)

---

## 🌟 Overview

**Ashara Interiors** is a modern, high-performance web platform built with **React**, **Vite**, and **Tailwind CSS**. It delivers an editorial luxury aesthetic inspired by high-end architectural monographs and design studios.

### Design Highlights
- **Editorial Typography**: Pairing classical serif headings (*Cormorant Garamond*) with crisp geometric sans (*Plus Jakarta Sans*) and elegant script flourishes (*Pinyon Script* / *Alex Brush*).
- **Harmonious Color Harmony**: Deep Forest Teal (`#1E4E4E`), warm Terracotta (`#DF6D27`), warm creams, and subtle gold accents.
- **Fluid Micro-interactions**: Hover elevations, image zoom transitions, and smooth scrolling for a refined feel.

---

## ✨ Key Features

- 🏛️ **Multi-View Seamless Navigation**: Client-side page routing across Home, Projects, Services, About Us, Contact, and Project Detail views.
- 🖼️ **Interactive Project Showcase**: Filterable and selectable project gallery featuring interior photography, design scopes, client briefs, and material specs.
- 📐 **Comprehensive Services Breakdown**: Detailed design service offerings including space planning, luxury residential styling, commercial staging, and bespoke furniture curation.
- 🤝 **Client & Partner Marquee**: Interactive logo and testimonial showcase highlighting past architectural collaborations and corporate partners.
- 📩 **Inquiry & Consultation Form**: Interactive contact experience for scheduling design consultations with responsive form validation states.
- 📱 **Fully Responsive Layout**: Pixel-perfect presentation across mobile, tablet, laptop, and ultra-wide displays.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **[React 18](https://react.dev/)** | Component-based UI library |
| **[Vite 5](https://vitejs.dev/)** | Next-generation fast frontend tooling and dev server |
| **[Tailwind CSS 3](https://tailwindcss.com/)** | Utility-first CSS framework for custom styling & tokens |
| **[Lucide React](https://lucide.dev/)** | Clean, modern UI icon system |
| **[Google Fonts](https://fonts.google.com/)** | Cormorant Garamond, Plus Jakarta Sans, Pinyon Script |
| **[PostCSS](https://postcss.org/) & [Autoprefixer](https://github.com/postcss/autoprefixer)** | Automated CSS processing and vendor prefixing |

---

## 🎨 Design System & Palette

### Brand Colors

| Token | Hex Code | Preview | Usage |
| :--- | :--- | :---: | :--- |
| `ashara-teal` | `#1E4E4E` | `■` | Primary brand color, headers, footers, active states |
| `ashara-teal-hover` | `#163B3B` | `■` | Button hover and darker accent states |
| `ashara-terracotta` | `#DF6D27` | `■` | Call-to-action badges, highlights, warm accents |
| `ashara-mint` | `#EAF2F2` | `■` | Subtle card backgrounds and tinted sections |
| `ashara-cream` | `#FAF8F5` | `■` | Warm neutral body background alternate |
| `ashara-charcoal` | `#1A1816` | `■` | Primary readable typography |
| `ashara-gold` | `#C5A880` | `■` | Luxury accents, borders, and decorative lines |

### Typography

- **Headings & Display**: `Cormorant Garamond` (Serif)
- **Body & Interface**: `Plus Jakarta Sans` (Sans-serif)
- **Signature / Accent**: `Pinyon Script` / `Alex Brush` (Script)

---

## 📁 Project Structure

```text
Ashara-Interior/
├── index.html                  # HTML entry point with Google Fonts & metadata
├── package.json                # Project dependencies and npm scripts
├── postcss.config.js           # PostCSS configuration
├── tailwind.config.js          # Custom theme tokens, fonts, and luxury shadows
├── vite.config.js              # Vite bundler configuration
├── public/                     # Static assets
└── src/
    ├── App.jsx                 # Main application layout and view state router
    ├── index.css               # Global styles & Tailwind base directives
    ├── main.jsx                # React root mount entry
    ├── components/             # Reusable UI components
    │   ├── AsharaLogo.jsx      # SVG vector brand emblem & logo
    │   ├── ClientsSection.jsx  # Client logos & corporate partner showcase
    │   ├── Footer.jsx          # Deep forest teal footer with quick links & info
    │   └── Navbar.jsx          # Header navigation bar with mobile drawer
    └── pages/                  # Page-level view components
        ├── AboutPage.jsx       # Studio story, philosophy, and team intro
        ├── ContactPage.jsx     # Consultation booking form & studio locations
        ├── HomePage.jsx        # Hero showcase, featured work, & testimonials
        ├── ProjectDetailPage.jsx # Individual project case study with gallery
        ├── ProjectsPage.jsx    # Complete portfolio gallery & project dataset
        └── ServicesPage.jsx    # Detailed architectural & interior service tiers
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- **Node.js** (v18.0.0 or higher recommended)
- **npm** (v9.0.0 or higher) or **yarn** / **pnpm**

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/ashara-interiors.git
   cd ashara-interiors
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to `http://localhost:5173` to view the application.

---

## 📜 Available Scripts

In the project directory, you can run:

| Command | Action |
| :--- | :--- |
| `npm run dev` | Runs the app in development mode with HMR at `http://localhost:5173` |
| `npm run build` | Bundles and optimizes the app for production in the `dist/` directory |
| `npm run preview` | Locally serves and previews the production build |

---

## 📄 Pages & Architecture

1. **Home (`/`)**:
   - Full-bleed hero banner with bold typography and CTA.
   - Curated highlights, design philosophy teasers, and client logos.
   - Featured projects grid with interactive hover reveals.

2. **Projects & Project Detail**:
   - Filterable portfolio categories (Residential, Commercial, Hospitality, Bespoke).
   - Dedicated Project Detail view featuring high-res imagery, room-by-room breakdown, materials palette, and client testimonial.

3. **Services**:
   - Comprehensive service cards detailing deliverables, architectural consulting, interior styling, and full turnkey execution.

4. **About Studio**:
   - Brand manifesto, leadership background, and design ethos.

5. **Contact**:
   - Direct design consultation inquiry form, studio location details, phone, and email information.

---

## 🌐 Deployment

### Build for Production

```bash
npm run build
```

This generates an optimized static bundle in the `dist/` directory.

### Deploying to Hosting Providers

- **Vercel**: Connect your Git repository to Vercel and it will automatically detect Vite and run `npm run build`.
- **Netlify**: Set the build command to `npm run build` and publish directory to `dist`.
- **GitHub Pages**: Build the project and deploy the `dist/` directory using `gh-pages`.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE) — feel free to customize and use it for your design studio or portfolio projects.
