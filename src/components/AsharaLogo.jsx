import React from 'react';

import logoImage from '../assets/Ashara logo/Ashara Logo.png';

export default function AsharaLogo({ className = 'text-ashara-teal', textClassName = 'text-ashara-teal', size = 70, light = false, hideText = false }) {
  return (
    <div className={`flex items-center gap-5 select-none ${className}`}>
      {/* Official Ashara Fingerprint Mark */}
      <img
        src={logoImage}
        alt="Ashara Interior Design and Building"
        decoding="async"
        style={{ height: size, width: 'auto' }}
        className={`object-contain transition-transform duration-300 group-hover:scale-105 ${light ? 'brightness-0 invert' : ''}`}
        onError={(e) => {
          e.target.style.display = 'none';
        }}
      />

      {!hideText && (
        <div className="flex flex-col justify-center">
          <span className={`font-sans font-bold tracking-[0.24em] text-[25px] sm:text-[28px] uppercase leading-none ${textClassName}`}>
            Ashara
          </span>
          <span className={`font-sans tracking-[0.36em] text-[14px] sm:text-[15.5px] uppercase font-light leading-none mt-2 opacity-85 ${textClassName}`}>
            Interior Design and Building
          </span>
        </div>
      )}
    </div>
  );
}
