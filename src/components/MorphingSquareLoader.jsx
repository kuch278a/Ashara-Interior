import React from 'react';

/**
 * MorphingSquareLoader Component
 * Luxury architectural pure-CSS morphing square geometric loader.
 *
 * @param {'grid' | 'single' | 'concentric'} [variant='grid'] - Geometry variant
 * @param {'sm' | 'md' | 'lg'} [size='md'] - Scale of the loader
 * @param {'gold' | 'teal' | 'dual'} [color='dual'] - Brand color palette
 * @param {string} [label] - Optional status text below the loader
 * @param {string} [className=''] - Additional wrapper classes
 */
export default function MorphingSquareLoader({
  variant = 'grid',
  size = 'md',
  color = 'dual',
  label,
  className = '',
}) {
  const sizeClass = `morph-size-${size}`;
  const colorClass = `morph-color-${color}`;

  return (
    <div
      role="status"
      aria-live="polite"
      className={`morphing-square-container ${className}`}
    >
      {/* Variant 1: 4-Quadrant Folding Grid */}
      {variant === 'grid' && (
        <div className={`morph-square-grid ${sizeClass} ${colorClass}`}>
          <span className="morph-tile" style={{ '--sq-i': 0 }} />
          <span className="morph-tile" style={{ '--sq-i': 1 }} />
          <span className="morph-tile" style={{ '--sq-i': 2 }} />
          <span className="morph-tile" style={{ '--sq-i': 3 }} />
        </div>
      )}

      {/* Variant 2: Single 3D Morphing Squircle */}
      {variant === 'single' && (
        <div className={`morph-square-single ${sizeClass} ${colorClass}`} />
      )}

      {/* Variant 3: Concentric Dual Frames */}
      {variant === 'concentric' && (
        <div className={`morph-square-concentric ${sizeClass} ${colorClass}`}>
          <div className="concentric-outer" />
          <div className="concentric-inner" />
        </div>
      )}

      {/* Accessible Label */}
      {label && <p className="morph-label">{label}</p>}
    </div>
  );
}

