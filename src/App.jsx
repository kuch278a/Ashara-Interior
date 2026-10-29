import React, { useState, useEffect, useLayoutEffect, lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { DEFAULT_PROJECTS_LIST } from './data/defaultData';
import { getInitialProjects } from './services/firebaseService';

// Lazy-loaded Pages for instant initial load and optimal code-splitting
const HomePage = lazy(() => import('./pages/HomePage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const ProjectDetailPage = lazy(() => import('./pages/ProjectDetailPage'));
const AdminPortal = lazy(() => import('./pages/AdminPortal'));

import DnaHelixLoader from './components/DnaHelixLoader';

// Luxury DNA Double-Helix fallback for route transitions
function PageLoadingFallback() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center py-24 animate-fade-in">
      <DnaHelixLoader size="md" orientation="horizontal" label="Loading Ashara..." />
    </div>
  );
}

// Public pages — 'admin' is intentionally excluded
const VALID_PAGES = ['home', 'projects', 'services', 'about', 'contact', 'project-detail'];

// Access key required to reach the admin portal (an obscurity layer only —
// the real protection is Firebase Auth + Firestore/Storage rules).
// Set VITE_ADMIN_ACCESS_KEY in .env (local) and GitHub secrets (CI).
// Access via: yoursite.com/?key=<VITE_ADMIN_ACCESS_KEY>#admin
const ADMIN_SECRET_KEY = import.meta.env?.VITE_ADMIN_ACCESS_KEY || '';

function canAccessAdmin() {
  if (!ADMIN_SECRET_KEY) return false;
  const params = new URLSearchParams(window.location.search);
  return params.get('key') === ADMIN_SECRET_KEY;
}

function getInitialPage() {
  const rawHash = window.location.hash.replace(/^#\/?/, '');
  const hash = rawHash.toLowerCase();

  // Admin is only accessible with the secret key
  if (hash === 'admin') {
    return canAccessAdmin() ? 'admin' : '404';
  }

  // Project detail accepts an id in the hash: #project-detail/<id>
  if (/^project-detail(\/|$)/.test(hash)) {
    return 'project-detail';
  }

  if (VALID_PAGES.includes(hash)) {
    return hash;
  }
  const searchParams = new URLSearchParams(window.location.search);
  const pageParam = searchParams.get('page');
  if (pageParam && VALID_PAGES.includes(pageParam.toLowerCase())) {
    return pageParam.toLowerCase();
  }
  const path = window.location.pathname.toLowerCase();
  if (path.endsWith('/admin') || path.endsWith('/admin/')) {
    return canAccessAdmin() ? 'admin' : '404';
  }
  // Unknown hash — treat as 404
  if (hash && !VALID_PAGES.includes(hash)) {
    return '404';
  }
  return 'home';
}

function findProjectById(id) {
  if (id === null || id === undefined) return DEFAULT_PROJECTS_LIST[0];
  const list = getInitialProjects();
  const found = list.find((p) => String(p.id) === String(id));
  return found || DEFAULT_PROJECTS_LIST[0];
}

function getInitialSelectedProject() {
  const rawHash = window.location.hash.replace(/^#\/?/, '');
  const match = rawHash.match(/^project-detail\/(.+)$/i);
  if (match) {
    return findProjectById(decodeURIComponent(match[1]));
  }
  return DEFAULT_PROJECTS_LIST[0];
}

export default function App() {
  const [activePage, setActivePage] = useState(getInitialPage); // 'home' | 'projects' | 'services' | 'about' | 'contact' | 'admin' | 'project-detail'
  const [selectedProject, setSelectedProject] = useState(getInitialSelectedProject);
  const [projectSource, setProjectSource] = useState('projects');
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const handleHashChange = () => {
      const page = getInitialPage();
      setActivePage(page);
      if (page === 'project-detail') {
        setSelectedProject(getInitialSelectedProject());
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handleHashChange);
    };
  }, []);

  // Dismiss the HTML loading screen once React has mounted
  useEffect(() => {
    const loader = document.getElementById('ashara-loader');
    if (loader) {
      // Small delay so the loading animation is visible briefly
      const timer = setTimeout(() => {
        loader.classList.add('fade-out');
        setTimeout(() => loader.remove(), 600);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  // Every view or project change must start from the top of the page
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage, selectedProject]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const handleNavigate = (page) => {
    setActivePage(page);
    if (page === 'home') {
      history.pushState(null, '', window.location.pathname);
    } else {
      window.location.hash = page;
    }
  };

  const handleSelectProject = (project, source = 'projects') => {
    setSelectedProject(project);
    if (source) setProjectSource(source);
    setActivePage('project-detail');
    window.location.hash = 'project-detail/' + encodeURIComponent(project.id);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-ashara-teal dark:bg-ashara-dark dark:text-white font-sans antialiased transition-colors duration-300">
      
      {/* 1. Figma Header Navigation Bar (hidden on admin portal) */}
      {activePage !== 'admin' && (
        <Navbar 
          activePage={activePage} 
          setActivePage={handleNavigate} 
          theme={theme} 
          toggleTheme={toggleTheme} 
        />
      )}

      {/* 2. Main Page View Router with Suspense */}
      <main className="flex-1">
        <Suspense fallback={<PageLoadingFallback />}>
          {activePage === 'home' && (
            <HomePage onNavigate={handleNavigate} onSelectProject={(p) => handleSelectProject(p, 'home')} />
          )}

          {activePage === 'projects' && (
            <ProjectsPage onNavigate={handleNavigate} onSelectProject={(p) => handleSelectProject(p, 'projects')} />
          )}
          
          {activePage === 'services' && (
            <ServicesPage onNavigate={handleNavigate} onSelectProject={handleSelectProject} />
          )}

          {activePage === 'about' && (
            <AboutPage onNavigate={handleNavigate} onSelectProject={handleSelectProject} />
          )}

          {activePage === 'contact' && (
            <ContactPage onNavigate={handleNavigate} />
          )}

          {activePage === 'admin' && (
            <AdminPortal onNavigate={handleNavigate} />
          )}

          {activePage === 'project-detail' && (
            <ProjectDetailPage 
              project={selectedProject} 
              source={projectSource}
              onNavigate={handleNavigate} 
              onSelectProject={handleSelectProject}
            />
          )}

          {activePage === '404' && (
            <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 py-24 space-y-6 animate-fade-in">
              <p className="text-[11px] uppercase tracking-[0.35em] text-ashara-teal dark:text-white font-semibold">404 — Page Not Found</p>
              <h1 className="font-serif text-5xl sm:text-7xl text-ashara-teal dark:text-white font-light">Lost in Space</h1>
              <p className="text-sm text-ashara-teal dark:text-white max-w-md font-light leading-relaxed">
                The page you're looking for doesn't exist. It may have been moved, deleted, or you may have mistyped the URL.
              </p>
              <button
                onClick={() => handleNavigate('home')}
                className="mt-4 px-8 py-3 bg-ashara-teal hover:bg-ashara-teal/90 text-white text-xs tracking-[0.2em] uppercase font-medium rounded-full transition-all duration-200 hover:scale-105"
              >
                Back to Home
              </button>
            </div>
          )}
        </Suspense>
      </main>

      {/* 3. Figma Solid Deep Forest Teal Footer (hidden on admin portal and home) */}
      {activePage !== 'admin' && activePage !== 'home' && <Footer onNavigate={handleNavigate} />}

    </div>
  );
}
