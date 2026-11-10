import React, { useState } from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import AsharaLogo from './AsharaLogo';

const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/asharainteriors',
  instagram: 'https://www.instagram.com/ashara_interiors?stkn=MXBmc2RnMTZzdnV2Nw==',
  tiktok: 'https://www.tiktok.com/@ashara_interiors?_r=1&_t=ZS-9AAGSt2AZRE',
  linkedin: 'https://www.linkedin.com/company/ashara-interiors',
  phone: 'tel:+251911123892',
  email: 'mailto:info@ashara.com',
};

const NAV_ITEMS = [
  { label: 'PROJECTS', page: 'projects' },
  { label: 'OUR SERVICES', page: 'services' },
  { label: 'ABOUT US', page: 'about' },
  { label: 'CONTACT', page: 'contact' },
];

function SocialTooltip({ label, dotColor, copied = false }) {
  return (
    <div role="tooltip" className={`social-tooltip-wrapper${copied ? ' is-copied' : ''}`}>
      <div
        className={`relative px-2.5 py-1 text-[11px] font-sans font-medium tracking-wide text-white backdrop-blur-md rounded-md shadow-2xl whitespace-nowrap flex items-center gap-1.5 border transition-all duration-200 ${
          copied ? 'bg-emerald-600 border-emerald-400 text-white shadow-emerald-600/40' : 'bg-gray-950/95 border-white/15'
        }`}
      >
        <span
          className={`w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors${copied ? ' bg-white animate-pulse' : dotColor ? '' : ' bg-ashara-gold'}`}
          style={!copied && dotColor ? { background: dotColor } : undefined}
        />
        <span className={copied ? 'font-semibold tracking-wider uppercase' : ''}>{label}</span>
        <span className={`absolute top-full left-1/2 -translate-x-1/2 -mt-[1px] border-4 border-transparent transition-colors${copied ? ' border-t-emerald-600' : ' border-t-gray-950/95'}`} />
      </div>
    </div>
  );
}

export default function Footer({ onNavigate }) {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = (e) => {
    e.preventDefault();
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
    const url = typeof window !== 'undefined' ? window.location.href : 'https://asharainteriors.com';
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(url).catch(() => {});
    }
  };

  const socials = [
    { id: 'facebook', name: 'Facebook', url: SOCIAL_LINKS.facebook, brandColor: '#1877F2', glow: 'rgba(24, 119, 242, 0.45)', icon: <Facebook className="w-4 h-4" fill="currentColor" /> },
    { id: 'instagram', name: 'Instagram', url: SOCIAL_LINKS.instagram, brandColor: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)', glow: 'rgba(225, 48, 108, 0.45)', icon: <Instagram className="w-4 h-4" /> },
    {
      id: 'tiktok',
      name: 'TikTok',
      url: SOCIAL_LINKS.tiktok,
      brandColor: '#000000',
      glow: 'rgba(0, 0, 0, 0.6)',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.19 1.15 2.15 2.34 2.39.75.16 1.55.05 2.22-.32.74-.41 1.25-1.11 1.42-1.92.1-1.04.05-2.09.05-3.14V.02h.07z" />
        </svg>
      ),
    },
    { id: 'linkedin', name: 'LinkedIn', url: SOCIAL_LINKS.linkedin, brandColor: '#0A66C2', glow: 'rgba(10, 102, 194, 0.45)', icon: <Linkedin className="w-4 h-4" fill="currentColor" /> },
  ];

  return (
    <footer className="bg-ashara-teal text-white pt-16 pb-8 px-6 sm:px-10 lg:px-16 mt-auto">
      <h2 className="sr-only">Footer Information</h2>
      <div className="max-w-7xl mx-auto flex flex-col space-y-16">
        <div className="grid grid-cols-2 lg:flex lg:flex-row justify-between items-start gap-8 lg:gap-10">
          <div className="flex-shrink-0 col-span-2 sm:col-span-1">
            <button
              onClick={() => onNavigate('home')}
              className="group focus:outline-none focus-visible:ring-2 focus-visible:ring-ashara-gold hover:opacity-90 transition rounded-sm"
              aria-label="Ashara Interior Design and Building Home"
            >
              <AsharaLogo size={80} light={true} hideText={true} />
            </button>
          </div>

          <div className="space-y-2 text-xs text-white/90">
            <h3 className="font-bold text-[16px] text-white mb-4">Contact</h3>
            <p><a href={SOCIAL_LINKS.phone} className="hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-ashara-gold">+251 911 123 892</a></p>
            <p className="pt-1"><a href={SOCIAL_LINKS.email} className="hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-ashara-gold">info@ashara.com</a></p>
          </div>

          <div className="space-y-2 text-xs text-white/90">
            <h3 className="font-bold text-[16px] text-white mb-4">Address</h3>
            <p>Megenagna</p>
            <p>Infront of Ethio Ceramics</p>
            <p>Bete Sahlite-Mihret Building, 4th Floor</p>
            <p>Addis Ababa, Ethiopia</p>
          </div>

          <nav aria-label="Footer navigation">
            <ul role="list" className="flex flex-col space-y-3 text-xs uppercase tracking-widest text-white/90 font-medium">
              {NAV_ITEMS.map(({ label, page }) => (
                <li key={page}>
                  <button
                    onClick={() => onNavigate(page)}
                    className="text-left hover:text-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-ashara-gold rounded-sm"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2.5 sm:gap-3 text-white col-span-2 sm:col-span-1 lg:self-end pt-2 lg:pt-0 flex-wrap">
            {socials.map((item) => (
              <div key={item.id} className="social-share-container">
                <SocialTooltip label={item.name} dotColor={item.brandColor} />
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  style={{ '--brand-color': item.brandColor, '--brand-glow': item.glow }}
                  className="social-share-btn w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/20 bg-white/10 text-white shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-ashara-gold"
                >
                  <span className="relative z-10 transition-colors duration-200">{item.icon}</span>
                </a>
              </div>
            ))}

            <div className="social-share-container">
              <SocialTooltip label={copied ? 'Copied!' : 'Copy Link'} copied={copied} />
              <button
                type="button"
                id="footer-copy-url-btn"
                onClick={handleCopyLink}
                aria-label={copied ? 'Link copied to clipboard' : 'Copy website URL'}
                style={{
                  '--brand-color': copied ? '#10B981' : '#C5A880',
                  '--brand-glow': copied ? 'rgba(16, 185, 129, 0.55)' : 'rgba(197, 168, 128, 0.5)',
                }}
                className={`social-share-btn w-9 h-9 sm:w-10 sm:h-10 rounded-full border shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-ashara-gold ${
                  copied ? 'copied border-emerald-400 bg-emerald-500 text-white ring-2 ring-emerald-300/40' : 'border-white/20 bg-white/10 text-white'
                }`}
              >
                <span className="relative z-10 transition-all duration-300 flex items-center justify-center">
                  {copied ? (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 animate-checkmark-pop text-white" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 transition-transform duration-300" aria-hidden="true">
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                    </svg>
                  )}
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-center text-xs text-white/60">
          <p>© Ashara Interior Design and Building | All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
