import React, { useState } from 'react';
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
    <div className="min-h-screen flex flex-col bg-white text-ashara-charcoal font-sans antialiased selection:bg-ashara-teal selection:text-white">
      
      {/* 1. Figma Header Navigation Bar */}
      <Navbar activePage={activePage} setActivePage={handleNavigate} />

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
