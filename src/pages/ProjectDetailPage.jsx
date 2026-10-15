import React, { useState, useEffect } from 'react';
import { DEFAULT_PROJECTS_LIST } from '../data/defaultData';
import { getInitialProjects, subscribeToProjects } from '../services/firebaseService';

export default function ProjectDetailPage({ onNavigate, onSelectProject, project, source = 'projects' }) {
  // Live project resolution: fallback to first project or live project in storage
  const [allProjects, setAllProjects] = useState(() => getInitialProjects());

  useEffect(() => {
    const unsubProjects = subscribeToProjects((list) => {
      if (list && list.length > 0) setAllProjects(list);
    });
    return () => {
      if (typeof unsubProjects === 'function') unsubProjects();
    };
  }, []);

  // Find latest active project from live data if project prop has matching id
  const activeProject = (project && allProjects.find((p) => String(p.id) === String(project.id))) || project || allProjects[0] || DEFAULT_PROJECTS_LIST[0];

  // Guaranteed unique, valid list of gallery images starting with the main hero image
  const gallery = Array.from(new Set([
    activeProject.image || activeProject.fallbackImage,
    ...(Array.isArray(activeProject.gallery) ? activeProject.gallery : [])
  ].filter(Boolean)));

  const heroImage = gallery[0] || activeProject.fallbackImage;
  const extraImages = gallery.slice(1);

  // Group images according to the architectural editorial layout from Figma:
  // 1. Featured wide shot (extra[0])
  const featuredWide1 = extraImages[0] || null;
  // 2. Horizontal pair (extra[1], extra[2])
  const pair1 = extraImages.slice(1, 3);
  // 3. Vertical / portrait pair (extra[3], extra[4])
  const pair2 = extraImages.slice(3, 5);
  // 4. Featured wide shot 2 (extra[5])
  const featuredWide2 = extraImages[5] || null;
  // 5. Any remaining images (extra[6] and beyond)
  const remainingImages = extraImages.slice(6);

  // Dynamic recommendations: Other live projects from the list
  const recommendations = allProjects.filter((p) => String(p.id) !== String(activeProject.id)).slice(0, 2);

  const handleRecommendationClick = (recProject) => {
    if (onSelectProject) {
      onSelectProject(recProject);
    }
  };

  const formatCategory = (cat) => {
    if (!cat) return 'INTERIOR DESIGN';
    const upper = cat.trim().toUpperCase();
    if (upper.includes('DESIGN')) return upper;
    return `${upper} DESIGN`;
  };

  const categoryLabel = formatCategory(activeProject.category);

  const handleImageError = (e) => {
    e.target.onerror = null;
    const fallback = activeProject.fallbackImage || activeProject.image || DEFAULT_PROJECTS_LIST[0].image;
    if (fallback && e.target.src !== fallback) {
      e.target.src = fallback;
    } else {
      const container = e.target.closest('.overflow-hidden');
      if (container) {
        container.style.display = 'none';
      }
    }
  };

  return (
    <div className="bg-white dark:bg-ashara-dark min-h-screen animate-fade-in transition-colors duration-300">
      
      {/* 1. FULL SCREEN HERO IMAGE */}
      <section className="relative w-full h-screen supports-[height:100svh]:h-[100svh] overflow-hidden bg-gray-100 dark:bg-gray-800">
        <img
          src={heroImage}
          alt={`${activeProject.title} Hero`}
          loading="eager"
          decoding="async"
          fetchPriority="high"
          onError={handleImageError}
          className="w-full h-full object-cover object-center"
        />
      </section>

      {/* Page Container matching Navbar and Footer alignment */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* 2. PROJECT TITLE & ARCHITECTURAL NARRATIVE (2-Column Layout matching Figma) */}
        <section className="py-14 sm:py-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 lg:gap-20 items-start">
            
            {/* Left: Title & Subtitle */}
            <div className="md:col-span-5 space-y-2.5">
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-[42px] leading-tight text-ashara-teal dark:text-white font-normal">
                {activeProject.title}
              </h1>
              <p className="text-[11px] sm:text-[12px] uppercase tracking-[0.2em] font-sans font-medium text-gray-500 dark:text-gray-400">
                {categoryLabel}
              </p>
            </div>

            {/* Right: Architectural Narrative */}
            <div className="md:col-span-7">
              <p className="text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300 font-light">
                {activeProject.description}
              </p>
            </div>

          </div>
        </section>

        {/* 3. EDITORIAL GALLERY FLOW */}
        <section className="space-y-6 lg:space-y-8">
          
          {/* Featured Wide Image 1 */}
          {featuredWide1 && (
            <div className="w-full aspect-[16/9] sm:aspect-[16/10] max-h-[640px] overflow-hidden bg-gray-100 dark:bg-gray-800 rounded-none shadow-sm">
              <img
                src={featuredWide1}
                alt={`${activeProject.title} View 1`}
                loading="lazy"
                decoding="async"
                onError={handleImageError}
                className="w-full h-full object-cover object-center"
              />
            </div>
          )}

          {/* Horizontal Pair (2 columns) */}
          {pair1.length > 0 && (
            <div className={`grid grid-cols-1 ${pair1.length > 1 ? 'sm:grid-cols-2' : ''} gap-6 lg:gap-8`}>
              {pair1.map((imgUrl, idx) => (
                <div key={idx} className="w-full aspect-[4/3] sm:aspect-[16/10] overflow-hidden bg-gray-100 dark:bg-gray-800 rounded-none shadow-sm">
                  <img
                    src={imgUrl}
                    alt={`${activeProject.title} Detail ${idx + 2}`}
                    loading="lazy"
                    decoding="async"
                    onError={handleImageError}
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
              ))}
            </div>
          )}

          {/* Editorial Philosophy Quote */}
          <div className="py-20 sm:py-28 text-center max-w-4xl mx-auto px-4">
            <blockquote className="font-serif italic font-normal text-2xl sm:text-3xl lg:text-[34px] leading-relaxed text-ashara-teal dark:text-white">
              “Design with passion, authenticity, and positivity to create spaces that inspire and uplift the soul.”
            </blockquote>
          </div>

          {/* Portrait Pair (2 columns, taller aspect ratio matching Figma) */}
          {pair2.length > 0 && (
            <div className={`grid grid-cols-1 ${pair2.length > 1 ? 'sm:grid-cols-2' : ''} gap-6 lg:gap-8`}>
              {pair2.map((imgUrl, idx) => (
                <div key={idx} className="w-full aspect-[3/4] sm:aspect-[4/5] overflow-hidden bg-gray-100 dark:bg-gray-800 rounded-none shadow-sm">
                  <img
                    src={imgUrl}
                    alt={`${activeProject.title} Vertical ${idx + 4}`}
                    loading="lazy"
                    decoding="async"
                    onError={handleImageError}
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
              ))}
            </div>
          )}

          {/* Featured Wide Image 2 */}
          {featuredWide2 && (
            <div className="w-full aspect-[16/9] sm:aspect-[16/10] max-h-[640px] overflow-hidden bg-gray-100 dark:bg-gray-800 rounded-none shadow-sm">
              <img
                src={featuredWide2}
                alt={`${activeProject.title} Panoramic`}
                loading="lazy"
                decoding="async"
                onError={handleImageError}
                className="w-full h-full object-cover object-center"
              />
            </div>
          )}

          {/* Additional Gallery Images (if any) */}
          {remainingImages.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 pt-2">
              {remainingImages.map((imgUrl, idx) => (
                <div key={idx} className="w-full aspect-[4/3] sm:aspect-[16/10] overflow-hidden bg-gray-100 dark:bg-gray-800 rounded-none shadow-sm">
                  <img
                    src={imgUrl}
                    alt={`${activeProject.title} Extra ${idx + 7}`}
                    loading="lazy"
                    decoding="async"
                    onError={handleImageError}
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
              ))}
            </div>
          )}

        </section>

        {/* 4. INQUIRE NOW BUTTON (Outlined, uppercase, tracked) */}
        <div className="text-center pt-16 sm:pt-20 pb-20 sm:pb-24">
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center justify-center px-10 py-3.5 border border-gray-400 dark:border-white/30 text-ashara-teal dark:text-white text-xs sm:text-[13px] uppercase tracking-[0.25em] font-sans font-medium transition-all duration-300 hover:bg-ashara-teal hover:text-white hover:border-ashara-teal dark:hover:bg-white dark:hover:text-ashara-dark"
          >
            INQUIRE NOW
          </button>
        </div>

        {/* 5. "YOU MAY LIKE" SECTION */}
        <section className="pb-28 sm:pb-36 text-center">
          
          {/* Hairline Divider Title */}
          <div className="flex items-center justify-center gap-6 sm:gap-10 mb-12 sm:mb-16 w-full">
            <div className="h-px bg-gray-300 dark:bg-white/20 flex-1"></div>
            <h3 className="font-serif text-2xl sm:text-3xl text-ashara-teal dark:text-white font-normal whitespace-nowrap px-4">
              You May Like
            </h3>
            <div className="h-px bg-gray-300 dark:bg-white/20 flex-1"></div>
          </div>

          {/* 2 Project Cards Grid matching Figma */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12 text-left">
            {recommendations.map((rec) => (
              <article 
                key={rec.id}
                role="button"
                tabIndex={0}
                onClick={() => handleRecommendationClick(rec)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    if (e.key === ' ') e.preventDefault();
                    handleRecommendationClick(rec);
                  }
                }}
                className="group cursor-pointer block"
              >
                <div className="w-full aspect-[4/3] sm:aspect-[16/10] overflow-hidden bg-gray-100 dark:bg-gray-800 rounded-none shadow-sm">
                  <img
                    src={rec.image}
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = rec.fallbackImage;
                    }}
                    alt={rec.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
                
                {/* Title & Subtitle Below the Image */}
                <div className="mt-4 space-y-1">
                  <h4 className="font-serif text-xl sm:text-2xl text-ashara-teal dark:text-white font-normal group-hover:text-ashara-teal-light dark:group-hover:text-ashara-gold transition-colors">
                    {rec.title}
                  </h4>
                  <p className="text-[11px] sm:text-[12px] uppercase tracking-[0.2em] font-sans font-medium text-gray-500 dark:text-gray-400">
                    {formatCategory(rec.category)}
                  </p>
                </div>
              </article>
            ))}
          </div>

        </section>

      </div>

    </div>
  );
}
