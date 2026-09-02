import React, { useState, useEffect } from 'react';
import { Menu, X, Lightbulb, Moon } from 'lucide-react';
import AsharaLogo from './AsharaLogo';

export default function Navbar({ activePage, setActivePage, theme, toggleTheme }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { id: 'home', label: 'HOME' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'services', label: 'OUR SERVICES' },
    { id: 'about', label: 'ABOUT US' },
    { id: 'blog', label: 'BLOG' },
    { id: 'contact', label: 'CONTACT' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      if (totalScroll > 0) {
        setScrollProgress((currentScroll / totalScroll) * 100);
      }
      setIsScrolled(currentScroll > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setActivePage(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 dark:bg-ashara-dark/95 backdrop-blur-md shadow-xs border-b border-gray-200/70 dark:border-white/10' 
        : 'bg-white/90 dark:bg-ashara-dark/90 backdrop-blur-sm border-b border-gray-100/80 dark:border-white/5'
    }`}>
      {/* Real-time Scroll Progress Indicator Bar */}
      <div 
        className="absolute top-0 left-0 h-[2.5px] bg-gradient-to-r from-ashara-teal via-ashara-gold to-ashara-terracotta z-50 transition-all duration-150 ease-out pointer-events-none"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 h-28 flex items-center justify-between">
        
        {/* Brand Logo: Clicking Logo goes to Home */}
        <button
          onClick={() => handleNavClick('home')}
          className="group text-left focus:outline-none transition-transform hover:opacity-90"
          aria-label="Ashara Interiors Home"
        >
          <AsharaLogo 
            size={80} 
            light={theme === 'dark'} 
            className={theme === 'dark' ? "text-white" : "text-ashara-teal"} 
            textClassName={theme === 'dark' ? "text-ashara-gold" : "text-ashara-teal"} 
          />
        </button>

        {/* Right Nav Container */}
        <div className="flex items-center space-x-6 sm:space-x-8">
          {/* Desktop Navigation Links matching Figma */}
          <nav className="hidden md:flex items-center space-x-10 text-[11.5px] uppercase tracking-[0.24em] font-medium text-gray-800 dark:text-gray-200">
            {navLinks.map((link) => {
              const isActive = activePage === link.id || (activePage === 'project-detail' && link.id === 'projects');
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative py-1 transition-colors duration-200 ${
                    isActive
                      ? 'text-ashara-charcoal dark:text-white font-semibold'
                      : 'text-gray-600 dark:text-gray-400 hover:text-ashara-teal dark:hover:text-ashara-gold'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute inset-x-0 -bottom-1.5 h-[1.5px] bg-ashara-charcoal/80 dark:bg-ashara-gold" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Luxury Light/Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5 hover:text-ashara-teal dark:hover:text-ashara-gold transition duration-300 focus:outline-none"
            aria-label={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {theme === 'dark' ? (
              <Lightbulb className="w-[18px] h-[18px]" />
            ) : (
              <Moon className="w-[18px] h-[18px]" />
            )}
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 dark:text-gray-300 hover:text-ashara-teal dark:hover:text-ashara-gold focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-ashara-charcoal border-b border-gray-200 dark:border-white/5 px-6 py-6 space-y-4 animate-fade-in shadow-lg">
          {navLinks.map((link) => {
            const isActive = activePage === link.id || (activePage === 'project-detail' && link.id === 'projects');
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`block w-full text-left py-2.5 text-xs uppercase tracking-[0.2em] font-medium transition ${
                  isActive ? 'text-ashara-teal dark:text-ashara-gold font-bold' : 'text-gray-600 dark:text-gray-300'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
}
