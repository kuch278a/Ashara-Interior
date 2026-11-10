import React, { useState, useEffect, useLayoutEffect, lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AsharaMorphingLoader from './components/AsharaMorphingLoader';
import { DEFAULT_PROJECTS_LIST } from './data/defaultData';
import { getInitialProjects } from './services/localCache';

const HomePage = lazy(() => import('./pages/HomePage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const ProjectDetailPage = lazy(() => import('./pages/ProjectDetailPage'));
const AdminPortal = lazy(() => import('./pages/AdminPortal'));

function PageLoadingFallback() {
  return (
    <div className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-[#FAF6EF] dark:bg-[#0A1525] animate-fade-in">
      <AsharaMorphingLoader size="lg" variant="full" label="Curating Luxury Spaces" />
    </div>
  );
}

const VALID_PAGES = ['home', 'projects', 'services', 'about', 'contact', 'project-detail'];
const ADMIN_SECRET_KEY = import.meta.env?.VITE_ADMIN_ACCESS_KEY || '';

function canAccessAdmin() {
  if (!ADMIN_SECRET_KEY) return false;
  return new URLSearchParams(window.location.search).get('key') === ADMIN_SECRET_KEY;
}

function getInitialPage() {
  const hash = window.location.hash.replace(/^#\/?/, '').toLowerCase();
  if (hash === 'admin') return canAccessAdmin() ? 'admin' : '404';
  if (/^project-detail(\/|$)/.test(hash)) return 'project-detail';
  if (VALID_PAGES.includes(hash)) return hash;

  const pageParam = new URLSearchParams(window.location.search).get('page');
  if (pageParam && VALID_PAGES.includes(pageParam.toLowerCase())) return pageParam.toLowerCase();

  const path = window.location.pathname.toLowerCase();
  if (path.endsWith('/admin') || path.endsWith('/admin/')) return canAccessAdmin() ? 'admin' : '404';
  return hash ? '404' : 'home';
}

function findProjectById(id) {
  if (id === null || id === undefined) return DEFAULT_PROJECTS_LIST[0];
  const list = getInitialProjects();
  return list.find((p) => String(p.id) === String(id)) || DEFAULT_PROJECTS_LIST[0];
}

function getInitialSelectedProject() {
  const match = window.location.hash.replace(/^#\/?/, '').match(/^project-detail\/(.+)$/i);
  if (match) {
    let id = match[1];
    try { id = decodeURIComponent(match[1]); } catch { /* raw */ }
    return findProjectById(id);
  }
  return DEFAULT_PROJECTS_LIST[0];
}

const PAGE_META = {
  projects: {
    title: 'Architectural Projects | Ashara Interior Design and Building',
    desc: "Explore Ashara Interiors' curated portfolio of governmental bureaus, corporate headquarters, and luxury residential spaces."
  },
  services: {
    title: 'Atelier Services & Architectural Process | Ashara Interiors',
    desc: "From bespoke interior architecture to turnkey building and spatial design, discover Ashara's atelier services."
  },
  about: {
    title: 'About Us & Studio Lineage | Ashara Interior Design and Building',
    desc: 'Founded by architect Michael Dessalegn, Ashara Interiors pairs monumental civic heritage with contemporary luxury craftsmanship.'
  },
  contact: {
    title: 'Contact & Consultation Enquiries | Ashara Interiors',
    desc: 'Discuss your upcoming interior, architectural, or commercial project with our Addis Ababa design atelier.'
  },
  admin: {
    title: 'Director Atelier Portal | Ashara Interiors CMS',
    desc: 'Studio director management portal for portfolio curation and client enquiries.'
  },
  404: {
    title: 'Page Not Found | Ashara Interiors',
    desc: 'The requested architectural page could not be located.'
  }
};

export default function App() {
  const [activePage, setActivePage] = useState(getInitialPage);
  const [selectedProject, setSelectedProject] = useState(getInitialSelectedProject);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const onHashChange = () => {
      const page = getInitialPage();
      setActivePage(page);
      if (page === 'project-detail') setSelectedProject(getInitialSelectedProject());
    };
    window.addEventListener('hashchange', onHashChange);
    window.addEventListener('popstate', onHashChange);
    return () => {
      window.removeEventListener('hashchange', onHashChange);
      window.removeEventListener('popstate', onHashChange);
    };
  }, []);

  useEffect(() => {
    const loader = document.getElementById('ashara-loader');
    if (loader) {
      const t = setTimeout(() => {
        loader.classList.add('fade-out');
        setTimeout(() => loader.remove(), 600);
      }, 800);
      return () => clearTimeout(t);
    }
  }, []);

  useEffect(() => {
    let {
      title = 'Ashara Interior Design and Building | Curated Luxury Spaces in Addis Ababa',
      desc = "Addis Ababa's premier luxury interior design firm crafting bespoke governmental, corporate, and residential spaces across Ethiopia."
    } = PAGE_META[activePage] || {};

    if (activePage === 'project-detail' && selectedProject?.title) {
      title = `${selectedProject.title} | Ashara Interiors Portfolio`;
      if (selectedProject.description) desc = selectedProject.description.slice(0, 155) + '...';
    }

    document.title = title;
    ['meta[name="description"]', 'meta[property="og:description"]'].forEach((sel) => {
      const el = document.querySelector(sel);
      if (el) el.setAttribute('content', desc);
    });
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);
  }, [activePage, selectedProject]);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
  }, [theme]);

  useLayoutEffect(() => { window.scrollTo(0, 0); }, [activePage, selectedProject]);

  const toggleTheme = () => setTheme((p) => (p === 'light' ? 'dark' : 'light'));

  const handleNavigate = (page) => {
    setActivePage(page);
    if (page === 'home') history.pushState(null, '', window.location.pathname);
    else window.location.hash = page;
  };

  const handleSelectProject = (project) => {
    setSelectedProject(project);
    setActivePage('project-detail');
    window.location.hash = 'project-detail/' + encodeURIComponent(project.id);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-ashara-teal dark:bg-ashara-dark dark:text-white font-sans antialiased transition-colors duration-300">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100000] focus:px-4 focus:py-2 focus:bg-ashara-teal focus:text-white focus:font-medium focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-ashara-gold rounded">
        Skip to main content
      </a>

      {activePage !== 'admin' && (
        <Navbar activePage={activePage} setActivePage={handleNavigate} theme={theme} toggleTheme={toggleTheme} />
      )}

      <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
        <Suspense fallback={<PageLoadingFallback />}>
          {activePage === 'home' && <HomePage onNavigate={handleNavigate} onSelectProject={handleSelectProject} />}
          {activePage === 'projects' && <ProjectsPage onNavigate={handleNavigate} onSelectProject={handleSelectProject} />}
          {activePage === 'services' && <ServicesPage onNavigate={handleNavigate} onSelectProject={handleSelectProject} />}
          {activePage === 'about' && <AboutPage onNavigate={handleNavigate} onSelectProject={handleSelectProject} />}
          {activePage === 'contact' && <ContactPage onNavigate={handleNavigate} />}
          {activePage === 'admin' && <AdminPortal onNavigate={handleNavigate} />}
          {activePage === 'project-detail' && <ProjectDetailPage project={selectedProject} onNavigate={handleNavigate} onSelectProject={handleSelectProject} />}
          {activePage === '404' && (
            <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 py-24 space-y-6 animate-fade-in">
              <p className="text-[11px] uppercase tracking-[0.35em] text-ashara-teal dark:text-white font-semibold">404 — Page Not Found</p>
              <h1 className="font-serif text-5xl sm:text-7xl text-ashara-teal dark:text-white font-light">Lost in Space</h1>
              <p className="text-sm text-ashara-teal dark:text-white max-w-md font-light leading-relaxed">
                The page you're looking for doesn't exist. It may have been moved, deleted, or you may have mistyped the URL.
              </p>
              <button onClick={() => handleNavigate('home')} className="mt-4 btn-ashara-primary rounded-full hover:scale-105">
                Back to Home
              </button>
            </div>
          )}
        </Suspense>
      </main>

      {activePage !== 'admin' && activePage !== 'home' && <Footer onNavigate={handleNavigate} />}
    </div>
  );
}
