import React from 'react';
import asharaEmblem from '../assets/Ashara logo/ashara_emblem.png';

/**
 * AsharaMorphingLoader Component
 * Luxury architectural Ashara Fingerprint Logo morphing loader.
 *
 * @param {'sm' | 'md' | 'lg' | 'xl'} [size='md'] - Scale of the loader
 * @param {'full' | 'mark-only' | 'minimal'} [variant='full'] - Display variant
 * @param {string} [label='Curating Luxury Spaces'] - Status text / tagline
 * @param {string} [className=''] - Additional wrapper classes
 */
export default function AsharaMorphingLoader({
  size = 'md',
  variant = 'full',
  label = 'Curating Luxury Spaces',
  className = '',
}) {
  const sizeMap = {
    sm: 'ashara-size-sm',
    md: 'ashara-size-md',
    lg: 'ashara-size-lg',
    xl: 'ashara-size-xl',
  };

  const sizeClass = sizeMap[size] || sizeMap.md;

  return (
    <div
      role="status"
      aria-live="polite"
      className={`ashara-morph-stage ${sizeClass} ${className}`}
    >
      {/* Morphing Visual Core */}
      <div className="ashara-morph-frame-box">
        {/* Ambient Halo Glow */}
        <div className="ashara-morph-halo" aria-hidden="true" />

        {/* Concentric Resonant Ripples */}
        <div className="ashara-morph-ripple ripple-1" aria-hidden="true" />
        <div className="ashara-morph-ripple ripple-2" aria-hidden="true" />

        {/* Morphing Architectural Squircle Frame */}
        <div className="ashara-morph-frame" aria-hidden="true">
          <span className="frame-corner corner-tl" />
          <span className="frame-corner corner-tr" />
          <span className="frame-corner corner-br" />
          <span className="frame-corner corner-bl" />
        </div>

        {/* Inner Ashara Fingerprint Emblem */}
        <div className="ashara-emblem-core">
          <img
            src={asharaEmblem}
            alt="Ashara Fingerprint Emblem"
            className="ashara-emblem-img"
            decoding="async"
            draggable={false}
          />
          {/* Biometric Ridge-Bound Light Sweep Sheen */}
          <div
            className="ashara-shimmer-sweep"
            aria-hidden="true"
            style={{
              WebkitMaskImage: `url("${asharaEmblem}")`,
              maskImage: `url("${asharaEmblem}")`,
            }}
          />
        </div>
      </div>

      {/* Typography Brand Lockup */}
      {variant === 'full' && (
        <div className="ashara-morph-brand">
          <span className="ashara-brand-name">Ashara</span>
          <span className="ashara-brand-sub">Interior Design and Building</span>
          {label && <p className="ashara-brand-status">{label}</p>}
        </div>
      )}

      {variant === 'minimal' && label && (
        <p className="ashara-brand-status mt-4">{label}</p>
      )}
    </div>
  );
}
