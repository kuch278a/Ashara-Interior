import React from 'react';

// Project card shared by both Our Works grids: variant="mobile" is the 2x2
// grid card (4/3 aspect, always-visible bottom caption); variant="desktop"
// is the 2-column grid card (7/5 → 16/10 aspect, hover-reveal caption).
export default function ProjectCard({ work, onSelect, variant }) {
  const isMobile = variant === 'mobile';

  return (
    <article
      onClick={() => onSelect(work)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(work);
        }
      }}
      role="button"
      tabIndex={0}
      className={`group relative cursor-pointer overflow-hidden bg-gray-100 ${isMobile ? 'aspect-[4/3]' : 'aspect-[7/5] lg:aspect-[16/10]'}`}
    >
      <img
        src={work.image}
        loading="lazy"
        decoding="async"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = work.fallbackImage;
        }}
        alt={work.title}
        className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out ${isMobile ? 'group-hover:scale-110 group-active:scale-110' : 'group-hover:scale-105'}`}
      />
      {isMobile ? (
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent px-3 pb-2.5 pt-10">
          <h3 className="font-serif text-sm sm:text-base text-white font-light leading-snug">{work.title}</h3>
        </div>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
          <h4 className="font-serif text-xl sm:text-2xl text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">{work.title}</h4>
        </div>
      )}
    </article>
  );
}
