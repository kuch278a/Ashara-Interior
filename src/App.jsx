import React, { useState, useEffect, lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { DEFAULT_PROJECTS_LIST } from './data/defaultData';

// Lazy-loaded Pages for instant initial load and optimal code-splitting
const HomePage = lazy(() => import('./pages/HomePage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const ProjectDetailPage = lazy(() => import('./pages/ProjectDetailPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const AdminPortal = lazy(() => import('./pages/AdminPortal'));

// Minimal elegant fallback for route transitions
function PageLoadingFallback() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-4 py-20">
      <div className="w-8 h-8 border-2 border-ashara-teal/30 dark:border-ashara-gold/30 border-t-ashara-teal dark:border-t-ashara-gold rounded-full animate-spin"></div>
      <span className="text-[10px] tracking-[0.3em] uppercase text-gray-500 dark:text-gray-400 font-sans">
        Loading...
      </span>
    </div>
  );
}

// Public pages — 'admin' is intentionally excluded
const VALID_PAGES = ['home', 'projects', 'services', 'about', 'contact', 'blog', 'project-detail'];

// Secret key required to access the admin portal
// Access via: yoursite.com/?key=ashara-studio-2026#admin
const ADMIN_SECRET_KEY = 'ashara-studio-2026';

function canAccessAdmin() {
  const params = new URLSearchParams(window.location.search);
  return params.get('key') === ADMIN_SECRET_KEY;
}

function getInitialPage() {
  const hash = window.location.hash.replace(/^#\/?/, '').toLowerCase();

  // Admin is only accessible with the secret key
  if (hash === 'admin') {
    return canAccessAdmin() ? 'admin' : '404';
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

export default function App() {
  const [activePage, setActivePage] = useState(getInitialPage); // 'home' | 'projects' | 'services' | 'about' | 'contact' | 'blog' | 'admin' | 'project-detail'
  const [selectedProject, setSelectedProject] = useState(DEFAULT_PROJECTS_LIST[0]);
  const [projectSource, setProjectSource] = useState('projects');
  const [theme, setTheme] = useState(() => {
    return sessionStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    const handleHashChange = () => {
      const page = getInitialPage();
      setActivePage(page);
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
    sessionStorage.setItem('theme', theme);
  }, [theme]);

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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProject = (project, source = 'projects') => {
    setSelectedProject(project);
    if (source) setProjectSource(source);
    setActivePage('project-detail');
    window.location.hash = 'project-detail';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-ashara-charcoal dark:bg-ashara-dark dark:text-ashara-sand font-sans antialiased transition-colors duration-300">
      
      {/* 1. Figma Header Navigation Bar */}
      <Navbar 
        activePage={activePage} 
        setActivePage={handleNavigate} 
        theme={theme} 
        toggleTheme={toggleTheme} 
      />

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

          {activePage === 'blog' && (
            <BlogPage />
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
              <p className="text-[10px] uppercase tracking-[0.35em] text-ashara-teal dark:text-ashara-gold font-semibold">404 — Page Not Found</p>
              <h1 className="font-serif text-5xl sm:text-7xl text-ashara-charcoal dark:text-ashara-sand font-light">Lost in Space</h1>
              <p className="text-sm text-gray-500 dark:text-gray-400 max-w-md font-light leading-relaxed">
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

      {/* 3. Figma Solid Deep Forest Teal Footer (hidden on admin portal) */}
      {activePage !== 'admin' && <Footer onNavigate={handleNavigate} />}

    </div>
  );
}
