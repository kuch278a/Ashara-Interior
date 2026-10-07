import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import AsharaLogo from './AsharaLogo';

// Configurable Company Social Links
const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/asharainteriors',
  instagram: 'https://www.instagram.com/ashara_interiors?stkn=MXBmc2RnMTZzdnV2Nw==',
  tiktok: 'https://www.tiktok.com/@ashara_interiors?_r=1&_t=ZS-9AAGSt2AZRE',
  linkedin: 'https://www.linkedin.com/company/ashara-interiors',
  whatsapp: 'https://wa.me/251911123892',
  phone: 'tel:+251911123892',
  email: 'mailto:info@ashara.com'
};

export default function Footer({ onNavigate }) {
  return (
    <footer className="bg-ashara-teal text-white pt-16 pb-8 px-6 sm:px-10 lg:px-16 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col space-y-16">
        
        {/* Main Footer Row matching Figma */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
          
          {/* 1. Left: Brand Logo in White */}
          <div className="flex-shrink-0">
            <button
              onClick={() => onNavigate('home')}
              className="focus:outline-none hover:opacity-90 transition"
              aria-label="Ashara Interior Design and Building Home"
            >
              <AsharaLogo size={80} light={true} hideText={true} />
            </button>
          </div>

          {/* 2. Contact Info */}
          <div className="space-y-2 text-xs text-white/90">
            <h4 className="font-bold text-sm text-white mb-4">Contact</h4>
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
            <p className="pt-1">
              <a href={SOCIAL_LINKS.email} className="hover:text-white hover:underline transition">
                info@ashara.com
              </a>
            </p>
          </div>

          {/* 3. Address */}
          <div className="space-y-2 text-xs text-white/90">
            <h4 className="font-bold text-sm text-white mb-4">Address</h4>
            <p>Megenagna</p>
            <p>Infront of Ethio Ceramics</p>
            <p>Bete Sahlite-Mihret Building, 4th Floor</p>
            <p>Addis Ababa, Ethiopia</p>
          </div>

          {/* 4. Navigation */}
          <nav className="flex flex-col space-y-3 text-xs uppercase tracking-widest text-white/90 font-medium">
            <button onClick={() => onNavigate('projects')} className="text-left hover:text-white transition">
              PROJECTS
            </button>
            <button onClick={() => onNavigate('services')} className="text-left hover:text-white transition">
              OUR SERVICES
            </button>
            <button onClick={() => onNavigate('about')} className="text-left hover:text-white transition">
              ABOUT US
            </button>
            <button onClick={() => onNavigate('contact')} className="text-left hover:text-white transition">
              CONTACT
            </button>
          </nav>

          {/* 5. Live Social Media Links */}
          <div className="flex items-center gap-4 text-white pt-2 lg:pt-0">
            <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <Facebook className="w-5 h-5" fill="currentColor" />
            </a>
            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <Instagram className="w-5 h-5" />
            </a>
            <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.19 1.15 2.15 2.34 2.39.75.16 1.55.05 2.22-.32.74-.41 1.25-1.11 1.42-1.92.1-1.04.05-2.09.05-3.14V.02h.07z" />
              </svg>
            </a>
            <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <Linkedin className="w-5 h-5" fill="currentColor" />
            </a>
          </div>

        </div>

        {/* Bottom Copyright Center */}
        <div className="flex justify-center text-xs text-white/60">
          <p>©Ashara Interior Design and Building 2026 | All rights reserved</p>
        </div>

      </div>
    </footer>
  );
}
