import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import asset_1 from '../assets/Ashara logo/Ashara Logo.png';
import asset_2 from '../assets/client_logos/ashara_logo_teal.png';

export default function Navbar({ activePage, setActivePage, theme, toggleTheme }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
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
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 pointer-events-auto bg-white dark:bg-ashara-dark ${
      isScrolled ? 'shadow-md border-transparent' : 'border-b border-gray-200 dark:border-white/10'
    }`}>
      {/* Real-time Scroll Progress Indicator Bar */}
      <div 
        className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-ashara-teal via-ashara-gold to-ashara-terracotta z-50 transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-4 sm:py-5 flex items-center justify-between">
        
        {/* Brand Logo & Title */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-4 text-left focus:outline-none group"
          aria-label="Ashara Interior Design and Building"
        >
          <div className="flex items-center select-none group">
            <div className="overflow-hidden h-[44px] w-[44px] relative flex-shrink-0 rounded-full">
              <img
                src={asset_1}
                alt="Ashara Interior Design and Building"
                decoding="async"
                className="absolute top-[0%] left-1/2 -translate-x-1/2 w-[56px] max-w-none h-auto transition-transform duration-300 group-hover:scale-105 dark:brightness-0 dark:invert"
                onError={(e) => {
                  e.target.src = {asset_2};
                }}
              />
            </div>
          </div>
          <div className="hidden sm:flex flex-col text-left">
            <span className="font-sans uppercase tracking-[0.2em] text-ashara-teal dark:text-white font-bold text-[18px]">
              Ashara
            </span>
            <span className="text-[9px] uppercase tracking-[0.3em] text-ashara-teal dark:text-white mt-0.5">
              Interior Design & Building
            </span>
          </div>
        </button>

        {/* Right Side Nav Links */}
        <div className="flex items-center gap-6 lg:gap-10">
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => {
              const isActive = activePage === link.id || (activePage === 'project-detail' && link.id === 'projects');
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-[12px] uppercase tracking-[0.2em] font-bold transition-colors duration-200 ${
                    isActive
                      ? 'text-ashara-teal dark:text-white border-b border-ashara-teal dark:border-white pb-1'
                      : 'text-ashara-teal/60 dark:text-white/60 hover:text-ashara-teal dark:hover:text-white pb-1'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            {/* Light / Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-full flex items-center justify-center text-ashara-teal dark:text-white hover:text-ashara-teal dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition duration-200 focus:outline-none"
              aria-label={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-ashara-teal dark:text-white" />
              ) : (
                <Moon className="w-4 h-4 text-ashara-teal dark:text-white" />
              )}
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-9 h-9 rounded-full flex items-center justify-center text-ashara-teal dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto md:hidden w-full absolute top-full left-0 bg-white dark:bg-ashara-dark border-b border-gray-200 dark:border-white/10 shadow-lg animate-fade-in">
          <div className="px-6 py-4 space-y-2">
            {navLinks.map((link) => {
              const isActive = activePage === link.id || (activePage === 'project-detail' && link.id === 'projects');
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`block w-full text-left px-4 py-3 rounded-lg text-[12px] uppercase tracking-[0.2em] font-bold transition-colors duration-200 ${
                    isActive
                      ? 'bg-ashara-teal/10 dark:bg-white/10 text-ashara-teal dark:text-white'
                      : 'text-ashara-teal/60 dark:text-white/60 hover:bg-ashara-teal/5 dark:hover:bg-white/5 hover:text-ashara-teal dark:hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
