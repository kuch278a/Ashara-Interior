import React from 'react';

export default function AsharaLogo({ className = 'text-ashara-teal', textClassName = 'text-ashara-charcoal', size = 50, light = false }) {
  return (
    <div className="flex items-center gap-3.5 select-none">
      {/* Official Ashara Fingerprint Mark */}
      <img
        src={light ? '/client_logos/ashara_logo_white.png' : '/client_logos/ashara_logo_teal.png'}
        alt="Ashara Interiors"
        style={{ height: size, width: 'auto' }}
        className="object-contain transition-transform duration-300 group-hover:scale-105"
        onError={(e) => {
          e.target.style.display = 'none';
        }}
      />
      
      <div className="flex flex-col justify-center">
        <span className={`font-sans font-bold tracking-[0.24em] text-[17px] sm:text-[18px] uppercase leading-none ${textClassName}`}>
          Ashara
        </span>
        <span className={`font-sans tracking-[0.36em] text-[10px] sm:text-[10.5px] uppercase font-light leading-none mt-1 opacity-85 ${textClassName}`}>
          Interiors
        </span>
      </div>
    </div>
  );
}
