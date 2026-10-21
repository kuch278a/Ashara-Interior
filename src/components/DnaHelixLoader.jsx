import React from 'react';

/**
 * DnaHelixLoader Component
 * A luxury pure-CSS 3D DNA Double-Helix Loader with staggered base-pair rungs,
 * smooth orbital rotation, luminous particle depth, and Ashara brand palette.
 *
 * @param {'vertical' | 'horizontal'} [orientation='vertical'] - Orientation of the helix
 * @param {'sm' | 'md' | 'lg'} [size='md'] - Scale of the loader
 * @param {string} [className=''] - Additional container classes
 * @param {string} [label] - Optional loading text below the loader
 */
export default function DnaHelixLoader({
  orientation = 'vertical',
  size = 'md',
  className = '',
  label = 'Loading...',
  showBrand = false,
}) {
  // 14 rungs form a complete, elegant double-helix pitch
  const rungs = Array.from({ length: 14 }, (_, i) => i);

  const sizeClasses = {
    sm: orientation === 'vertical' ? 'dna-helix-sm' : 'dna-helix-h-sm',
    md: orientation === 'vertical' ? 'dna-helix-md' : 'dna-helix-h-md',
    lg: orientation === 'vertical' ? 'dna-helix-lg' : 'dna-helix-h-lg',
  }[size] || (orientation === 'vertical' ? 'dna-helix-md' : 'dna-helix-h-md');

  return (
    <div
      role="status"
      aria-live="polite"
      className={`dna-helix-wrapper flex flex-col items-center justify-center ${className}`}
    >
      {/* 3D DNA Helix Structure */}
      <div className={`dna-helix ${sizeClasses} ${orientation === 'horizontal' ? 'dna-horizontal' : 'dna-vertical'}`}>
        {rungs.map((i) => (
          <div key={i} className="dna-rung" style={{ '--i': i }}>
            <span className="dna-dot strand-a" />
            <span className="dna-bar" />
            <span className="dna-dot strand-b" />
          </div>
        ))}
      </div>

      {/* Optional Brand Typography Lockup */}
      {showBrand && (
        <div className="dna-brand-lockup flex flex-col items-center mt-5 text-center">
          <span className="font-serif font-bold text-2xl tracking-[0.24em] uppercase text-ashara-gold dark:text-ashara-gold">
            Ashara
          </span>
          <span className="font-serif font-light text-xs tracking-[0.32em] uppercase text-ashara-gold/80 dark:text-ashara-gold/80 mt-1">
            Interior Design and Building
          </span>
        </div>
      )}

      {/* Optional Text Label */}
      {label && (
        <p className="dna-label mt-4 text-[11px] uppercase tracking-[0.3em] font-sans font-medium text-ashara-teal/80 dark:text-ashara-gold/80 animate-pulse">
          {label}
        </p>
      )}
    </div>
  );
}
