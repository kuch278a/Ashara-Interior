import React from 'react';
import { handleImageError } from '../utils/imageFallback';

export default function ProjectCard({ work, onSelect, variant = 'desktop' }) {
  const isMobile = variant === 'mobile';
  const isDetail = variant === 'detail';

  const handleClick = () => onSelect && onSelect(work);

  return (
    <article
      onClick={handleClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          if (e.key === ' ') e.preventDefault();
          handleClick();
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`View project details for ${work?.title}`}
      className={`group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-ashara-gold rounded-sm ${
        isDetail ? 'block' : `relative overflow-hidden bg-gray-100 ${isMobile ? 'aspect-[4/3]' : 'aspect-[7/5] lg:aspect-[16/10]'}`
      }`}
    >
      <div className={`overflow-hidden bg-gray-100 dark:bg-gray-800 ${isDetail ? 'w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/9]' : 'absolute inset-0'}`}>
        <img
          src={work?.image}
          loading="lazy"
          decoding="async"
          onError={(e) => handleImageError(e, work?.fallbackImage)}
          alt={work?.title}
          className={`w-full h-full object-cover transition-transform duration-700 ease-out ${
            isMobile ? 'group-hover:scale-110 group-active:scale-110' : 'group-hover:scale-105'
          }`}
        />
      </div>

      {isDetail ? (
        <div className="mt-4">
          <h3 className="font-serif text-xl sm:text-2xl text-ashara-teal dark:text-white font-normal group-hover:text-ashara-teal-light dark:group-hover:text-ashara-gold transition-colors">
            {work?.title}
          </h3>
        </div>
      ) : isMobile ? (
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent px-3 pb-2.5 pt-10">
          <h3 className="font-serif text-sm sm:text-base text-white font-light leading-snug">{work?.title}</h3>
        </div>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
          <h3 className="font-serif text-xl sm:text-2xl text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
            {work?.title}
          </h3>
        </div>
      )}
    </article>
  );
}
