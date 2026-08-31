import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import ProjectsPage, { PROJECTS_LIST } from './pages/ProjectsPage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProjectDetailPage from './pages/ProjectDetailPage';

export default function App() {
  const [activePage, setActivePage] = useState('home'); // 'home' | 'projects' | 'services' | 'about' | 'contact' | 'project-detail'
  const [selectedProject, setSelectedProject] = useState(PROJECTS_LIST[0]);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const handleNavigate = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProject = (project) => {
    setSelectedProject(project);
    setActivePage('project-detail');
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
          <ServicesPage onNavigate={handleNavigate} />
        )}

        {activePage === 'about' && (
          <AboutPage onNavigate={handleNavigate} />
        )}

        {activePage === 'contact' && (
          <ContactPage onNavigate={handleNavigate} />
        )}

        {activePage === 'project-detail' && (
          <ProjectDetailPage 
            project={selectedProject} 
            onNavigate={handleNavigate} 
          />
        )}
      </main>

      {/* 3. Figma Solid Deep Forest Teal Footer */}
      <Footer onNavigate={handleNavigate} />

    </div>
  );
}
