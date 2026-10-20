import React, { useState, useEffect } from 'react';
import { DEFAULT_PROJECTS_LIST } from '../data/defaultData';
import { getInitialProjects, subscribeToProjects } from '../services/firebaseService';

// Curated luxury architectural and interior photography fallbacks ensuring every project
// displays the full, magazine-grade 8-image architectural layout in both desktop and mobile viewports.
const EDITORIAL_FALLBACK_IMAGES = [
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=90',
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1800&q=85',
  'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1800&q=85',
  'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=85',
  'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1800&q=85',
];

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

  // 1. Gather all unique valid project images starting with the main hero image
  const projectImages = Array.from(new Set([
    activeProject.image || activeProject.fallbackImage,
    ...(Array.isArray(activeProject.gallery) ? activeProject.gallery : [])
  ].filter(Boolean)));

  // 2. Pad up to at least 9 images so all editorial slots (Hero + 8 layout images) are fully populated
  const fullGallery = [...projectImages];
  let fallbackIdx = 0;
  while (fullGallery.length < 9) {
    fullGallery.push(EDITORIAL_FALLBACK_IMAGES[fallbackIdx % EDITORIAL_FALLBACK_IMAGES.length]);
    fallbackIdx++;
  }

  // 3. Map into the exact 8 editorial slots
  const heroImage = fullGallery[0];
  const featuredWide1 = fullGallery[1];
  const pair1 = [fullGallery[2], fullGallery[3]];
  const pair2 = [fullGallery[4], fullGallery[5]];
  const featuredWide2 = fullGallery[6];
  const pair3 = [fullGallery[7], fullGallery[8]];
  const remainingImages = fullGallery.slice(9);

  // Dynamic recommendations: Other live projects from the list
  const recommendations = allProjects.filter((p) => String(p.id) !== String(activeProject.id)).slice(0, 2);

  const handleRecommendationClick = (recProject) => {
    if (onSelectProject) {
      onSelectProject(recProject);
    }
  };

  const handleImageError = (e) => {
    e.target.onerror = null;
    const fallback = activeProject.fallbackImage || activeProject.image || DEFAULT_PROJECTS_LIST[0].image;
    if (fallback && e.target.src !== fallback) {
      e.target.src = fallback;
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
      <div className="w-full px-6 sm:px-10 lg:px-16">

        {/* 2. PROJECT TITLE & ARCHITECTURAL NARRATIVE (2-Column Layout matching Figma) */}
        <section className="py-14 sm:py-20 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 lg:gap-20 items-start">
            
            {/* Left: Title */}
            <div className="md:col-span-5">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[52px] leading-tight text-ashara-teal dark:text-white font-normal">
                {activeProject.title}
              </h1>
            </div>

            {/* Right: Architectural Narrative */}
            <div className="md:col-span-7">
              <p className="text-lg sm:text-xl leading-relaxed text-gray-700 dark:text-gray-300 font-light">
                {activeProject.description}
              </p>
            </div>

          </div>
        </section>

        {/* 3. EDITORIAL GALLERY FLOW */}
        <section className="space-y-6 lg:space-y-8 -mx-6 sm:-mx-10 lg:-mx-16">
          
          {/* Featured Wide Image 1 */}
          <div className="w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-[16/10] max-h-[360px] sm:max-h-[520px] lg:max-h-[640px] overflow-hidden bg-gray-100 dark:bg-gray-800 rounded-none shadow-sm">
            <img
              src={featuredWide1}
              alt={`${activeProject.title} View 1`}
              loading="lazy"
              decoding="async"
              onError={handleImageError}
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Horizontal Pair 1 (2 columns) */}
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {pair1.map((imgUrl, idx) => (
              <div key={idx} className="w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/9] overflow-hidden bg-gray-100 dark:bg-gray-800 rounded-none shadow-sm">
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

          {/* Editorial Philosophy Quote */}
          <div className="py-20 sm:py-28 text-center max-w-4xl mx-auto px-4">
            <blockquote className="font-serif italic font-normal text-2xl sm:text-3xl lg:text-[34px] leading-relaxed text-ashara-teal dark:text-white">
              “Design with passion, authenticity, and positivity to create spaces that inspire and uplift the soul.”
            </blockquote>
          </div>

          {/* Portrait Pair 2 (2 columns, vertical aspect ratio matching Figma) */}
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {pair2.map((imgUrl, idx) => (
              <div key={idx} className="w-full h-[60vh] sm:h-[75vh] overflow-hidden bg-gray-100 dark:bg-gray-800 rounded-none shadow-sm">
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

          {/* Featured Wide Image 2 */}
          <div className="w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-[16/10] max-h-[360px] sm:max-h-[520px] lg:max-h-[640px] overflow-hidden bg-gray-100 dark:bg-gray-800 rounded-none shadow-sm">
            <img
              src={featuredWide2}
              alt={`${activeProject.title} Panoramic`}
              loading="lazy"
              decoding="async"
              onError={handleImageError}
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Additional Pair 3 (2 columns) */}
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 pt-2">
            {pair3.map((imgUrl, idx) => (
              <div key={idx} className="w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/9] overflow-hidden bg-gray-100 dark:bg-gray-800 rounded-none shadow-sm">
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

          {/* Any remaining images beyond 9 */}
          {remainingImages.length > 0 && (
            <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 pt-2">
              {remainingImages.map((imgUrl, idx) => (
                <div key={idx} className="w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/9] overflow-hidden bg-gray-100 dark:bg-gray-800 rounded-none shadow-sm">
                  <img
                    src={imgUrl}
                    alt={`${activeProject.title} Extra ${idx + 9}`}
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

        {/* 4. INQUIRE NOW BUTTON */}
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
          <div className="max-w-[1700px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12 text-left">
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
                <div className="w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/9] overflow-hidden bg-gray-100 dark:bg-gray-800 rounded-none shadow-sm">
                  <img
                    src={rec.image}
                    loading="lazy"
                    decoding="async"
                    onError={handleImageError}
                    alt={rec.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
                
                {/* Title Below the Image */}
                <div className="mt-4">
                  <h4 className="font-serif text-xl sm:text-2xl text-ashara-teal dark:text-white font-normal group-hover:text-ashara-teal-light dark:group-hover:text-ashara-gold transition-colors">
                    {rec.title}
                  </h4>
                </div>
              </article>
            ))}
          </div>

        </section>

      </div>

    </div>
  );
}
