import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';

export default function Navbar({ activePage, setActivePage, theme, toggleTheme }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About' },
    { id: 'blog', label: 'Blog' },
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
    <header className="sticky top-0 z-50 pt-3 sm:pt-4 px-4 sm:px-6 pointer-events-none transition-all duration-300">
      {/* Real-time Scroll Progress Indicator Bar */}
      <div 
        className="fixed top-0 left-0 h-[2.5px] bg-gradient-to-r from-ashara-teal via-ashara-gold to-ashara-terracotta z-50 transition-all duration-150 ease-out pointer-events-none"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Floating Pill Navigation Bar */}
      <div className={`pointer-events-auto max-w-6xl mx-auto rounded-full transition-all duration-300 px-5 sm:px-7 py-2.5 sm:py-3 flex items-center justify-between border bg-white/70 dark:bg-terion-card-dark/70 backdrop-blur-sm border-terion-border/50 dark:border-white/5 ${
        isScrolled ? 'shadow-lg shadow-black/5 dark:shadow-black/20 bg-white/90 dark:bg-terion-card-dark/90' : 'shadow-xs'
      }`}>
        
        {/* Brand Logo & Title */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 text-left focus:outline-none group"
          aria-label="Ashara Interior Home"
        >
          <div className="flex items-center select-none group">
            <img
              src={theme === 'dark' ? './client_logos/ashara_logo_white.png' : './client_logos/ashara_logo_teal.png'}
              alt="Ashara — Interior & Architecture"
              decoding="async"
              className="object-contain transition-transform duration-300 group-hover:scale-105"
              style={{ height: '54px', width: 'auto' }}
              onError={(e) => {
                e.target.src = './assets/adobek_logo_transparent.png';
              }}
            />
          </div>
          <div className="hidden sm:flex flex-col text-left">
            <span className="font-serif tracking-widest font-semibold text-sm text-terion-charcoal dark:text-white uppercase">
              Ashara
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-terion-muted dark:text-terion-gray font-light">
              Interior &amp; Architecture
            </span>
          </div>
        </button>

        {/* Center Pill Nav */}
        <nav className="hidden md:flex items-center gap-1 bg-terion-bg/60 dark:bg-white/5 p-1 rounded-full border border-terion-border/40 dark:border-white/5">
          {navLinks.map((link) => {
            const isActive = activePage === link.id || (activePage === 'project-detail' && link.id === 'projects');
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`px-4 py-1.5 rounded-full text-[12px] font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-terion-charcoal text-white dark:bg-white dark:text-terion-charcoal shadow-sm'
                    : 'text-terion-stone dark:text-terion-gray hover:text-terion-charcoal dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Light / Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-full flex items-center justify-center text-terion-stone dark:text-terion-gray hover:text-terion-charcoal dark:hover:text-white hover:bg-terion-bg dark:hover:bg-white/10 transition duration-200 border border-transparent hover:border-terion-border dark:hover:border-white/10 focus:outline-none"
            aria-label={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-terion-stone dark:text-terion-gray" />
            ) : (
              <Moon className="w-4 h-4 text-terion-stone" />
            )}
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-9 h-9 rounded-full flex items-center justify-center text-terion-stone dark:text-terion-gray hover:text-terion-charcoal dark:hover:text-white hover:bg-terion-bg dark:hover:bg-white/10 transition focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu Card */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto md:hidden max-w-6xl mx-auto mt-2 p-3 rounded-2xl bg-white/95 dark:bg-terion-card-dark/95 backdrop-blur-md border border-terion-border/50 dark:border-white/10 shadow-xl space-y-1 animate-fade-in">
          {navLinks.map((link) => {
            const isActive = activePage === link.id || (activePage === 'project-detail' && link.id === 'projects');
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`block w-full text-left px-4 py-2.5 rounded-xl text-[12px] font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-terion-charcoal text-white dark:bg-white dark:text-terion-charcoal shadow-sm font-semibold'
                    : 'text-terion-stone dark:text-terion-gray hover:text-terion-charcoal dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10'
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
