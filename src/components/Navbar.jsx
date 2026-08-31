import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import AsharaLogo from './AsharaLogo';

export default function Navbar({ activePage, setActivePage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'projects', label: 'PROJECTS' },
    { id: 'services', label: 'OUR SERVICES' },
    { id: 'about', label: 'ABOUT US' },
    { id: 'contact', label: 'CONTACT' },
  ];

  const handleNavClick = (id) => {
    setActivePage(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md transition-all duration-300 border-b border-gray-100/80">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 h-20 flex items-center justify-between">
        
        {/* Brand Logo: Clicking Logo goes to Home */}
        <button
          onClick={() => handleNavClick('home')}
          className="group text-left focus:outline-none transition-transform hover:opacity-90"
          aria-label="Ashara Interiors Home"
        >
          <AsharaLogo size={48} className="text-ashara-teal" textClassName="text-ashara-teal" />
        </button>

        {/* Desktop Navigation Links matching Figma */}
        <nav className="hidden md:flex items-center space-x-10 text-[11.5px] uppercase tracking-[0.24em] font-medium text-gray-800">
          {navLinks.map((link) => {
            const isActive = activePage === link.id || (activePage === 'project-detail' && link.id === 'projects');
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`relative py-1 transition-colors duration-200 ${
                  isActive
                    ? 'text-ashara-charcoal font-semibold'
                    : 'text-gray-600 hover:text-ashara-teal'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute inset-x-0 -bottom-1.5 h-[1.5px] bg-ashara-charcoal/80" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-gray-700 hover:text-ashara-teal focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-6 py-6 space-y-4 animate-fade-in shadow-lg">
          <button
            onClick={() => handleNavClick('home')}
            className={`block w-full text-left py-2.5 text-xs uppercase tracking-[0.2em] font-medium transition ${
              activePage === 'home' ? 'text-ashara-teal font-bold' : 'text-gray-600'
            }`}
          >
            HOME
          </button>
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`block w-full text-left py-2.5 text-xs uppercase tracking-[0.2em] font-medium transition ${
                activePage === link.id ? 'text-ashara-teal font-bold' : 'text-gray-600'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
