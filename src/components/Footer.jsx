import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import AsharaLogo from './AsharaLogo';

// Configurable Company Social Links
const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/asharainteriors',
  instagram: 'https://www.instagram.com/asharainteriors',
  tiktok: 'https://www.tiktok.com/@asharainteriors',
  linkedin: 'https://www.linkedin.com/company/ashara-interiors',
  phone: 'tel:+251911123892',
  email: 'mailto:info@ashara.com'
};

export default function Footer({ onNavigate }) {
  return (
    <footer className="bg-ashara-teal text-white pt-10 pb-6 px-6 sm:px-10 lg:px-16 mt-auto">
      <div className="max-w-7xl mx-auto space-y-10">

        {/* Main Footer Row matching Figma */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 items-start">

          {/* 1. Left: Brand Logo in White */}
          <div className="md:col-span-3">
            <button
              onClick={() => onNavigate('home')}
              className="text-left focus:outline-none hover:opacity-90 transition"
              aria-label="Ashara Interiors Home"
            >
              <AsharaLogo size={96} light={true} className="text-white" textClassName="text-white" />
            </button>
          </div>

          {/* 2. Middle-Left: Contact Info */}
          <div className="md:col-span-3 space-y-1.5 text-xs text-white/90 font-light">
            <h4 className="font-semibold text-xs tracking-wider text-white mb-2">Contact</h4>
            <p>
              <a href={SOCIAL_LINKS.phone} className="hover:text-white hover:underline transition">
                +251 911 123 892
              </a>
            </p>
            <p>
              <a href={SOCIAL_LINKS.phone} className="hover:text-white hover:underline transition">
                +251 911 123 892
              </a>
            </p>
            <p className="pt-0.5">
              <a href={SOCIAL_LINKS.email} className="hover:text-white hover:underline transition">
                info@ashara.com
              </a>
            </p>
          </div>

          {/* 3. Middle-Right: Address */}
          <div className="md:col-span-3 space-y-1.5 text-xs text-white/90 font-light">
            <h4 className="font-semibold text-xs tracking-wider text-white mb-2">Address</h4>
            <p>Bole Medhanialem,</p>
            <p>Addis Ababa, Ethiopia</p>
          </div>

          {/* 4. Right: Navigation & Live Social Media Accounts */}
          <div className="md:col-span-3 flex flex-col justify-between space-y-6">
            <nav className="flex flex-col space-y-2 text-[11px] uppercase tracking-[0.2em] font-medium text-white/90">
              <button
                onClick={() => onNavigate('home')}
                className="text-left hover:text-white transition"
              >
                HOME
              </button>
              <button
                onClick={() => onNavigate('projects')}
                className="text-left hover:text-white transition"
              >
                PROJECTS
              </button>
              <button
                onClick={() => onNavigate('services')}
                className="text-left hover:text-white transition"
              >
                OUR SERVICES
              </button>
              <button
                onClick={() => onNavigate('about')}
                className="text-left hover:text-white transition"
              >
                ABOUT US
              </button>
              <button
                onClick={() => onNavigate('blog')}
                className="text-left hover:text-white transition"
              >
                BLOG
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="text-left hover:text-white transition"
              >
                CONTACT
              </button>
            </nav>

            {/* Live Social Media Links with new tab behavior */}
            <div className="flex items-center gap-4 text-white/90">
              {/* Facebook */}
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ashara Interiors on Facebook"
                className="p-1 hover:text-white hover:scale-115 transition-all duration-200"
              >
                <Facebook className="w-4 h-4" />
              </a>

              {/* Instagram */}
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ashara Interiors on Instagram"
                className="p-1 hover:text-white hover:scale-115 transition-all duration-200"
              >
                <Instagram className="w-4 h-4" />
              </a>

              {/* TikTok */}
              <a
                href={SOCIAL_LINKS.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ashara Interiors on TikTok"
                className="p-1 hover:text-white hover:scale-115 transition-all duration-200"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.19 1.15 2.15 2.34 2.39.75.16 1.55.05 2.22-.32.74-.41 1.25-1.11 1.42-1.92.1-1.04.05-2.09.05-3.14V.02h.07z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ashara Interiors on LinkedIn"
                className="p-1 hover:text-white hover:scale-115 transition-all duration-200"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Center matching Figma with Admin Portal entry */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] sm:text-[11px] text-white/70 font-light">
          <p>©Ashara Interiors 2025</p>
          <button
            onClick={() => onNavigate('admin')}
            className="text-white/50 hover:text-white transition uppercase tracking-widest text-[9.5px] font-mono"
          >
            STUDIO ADMIN PORTAL →
          </button>
        </div>

      </div>
    </footer>
  );
}
