import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ServicesPage from './pages/ServicesPage';
import { DEFAULT_PROJECTS_LIST } from './data/defaultData';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import BlogPage from './pages/BlogPage';
import AdminPortal from './pages/AdminPortal';

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

      {/* 2. Main Page View Router */}
      <main className="flex-1">
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
      </main>

      {/* 3. Figma Solid Deep Forest Teal Footer */}
      <Footer onNavigate={handleNavigate} />

    </div>
  );
}
