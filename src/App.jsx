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

function getInitialPage() {
  const hash = window.location.hash.replace(/^#\/?/, '').toLowerCase();
  if (['admin', 'projects', 'services', 'about', 'contact', 'blog', 'project-detail'].includes(hash)) {
    return hash;
  }
  const searchParams = new URLSearchParams(window.location.search);
  const pageParam = searchParams.get('page') || (searchParams.has('admin') ? 'admin' : null);
  if (pageParam && ['admin', 'projects', 'services', 'about', 'contact', 'blog', 'project-detail'].includes(pageParam.toLowerCase())) {
    return pageParam.toLowerCase();
  }
  const path = window.location.pathname.toLowerCase();
  if (path.endsWith('/admin') || path.endsWith('/admin/')) {
    return 'admin';
  }
  return 'home';
}

export default function App() {
  const [activePage, setActivePage] = useState(getInitialPage); // 'home' | 'projects' | 'services' | 'about' | 'contact' | 'blog' | 'admin' | 'project-detail'
  const [selectedProject, setSelectedProject] = useState(DEFAULT_PROJECTS_LIST[0]);
  const [theme, setTheme] = useState(() => {
    return sessionStorage.getItem('theme') || 'dark';
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

  const handleSelectProject = (project) => {
    setSelectedProject(project);
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
            <HomePage onNavigate={handleNavigate} onSelectProject={handleSelectProject} />
          )}

          {activePage === 'projects' && (
            <ProjectsPage onNavigate={handleNavigate} onSelectProject={handleSelectProject} />
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
              onNavigate={handleNavigate} 
              onSelectProject={handleSelectProject}
            />
          )}
        </Suspense>
      </main>

      {/* 3. Figma Solid Deep Forest Teal Footer */}
      <Footer onNavigate={handleNavigate} />

    </div>
  );
}
