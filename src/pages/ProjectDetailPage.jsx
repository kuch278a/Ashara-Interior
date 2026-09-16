import React, { useState, useEffect } from 'react';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { DEFAULT_PROJECTS_LIST } from '../data/defaultData';
import { getInitialProjects, subscribeToProjects } from '../services/firebaseService';

export default function ProjectDetailPage({ onNavigate, onSelectProject, project, source = 'projects' }) {
  // Live project resolution: fallback to first project or live project in storage
  const [allProjects, setAllProjects] = useState(() => getInitialProjects());
  
  useEffect(() => {
    const unsub = subscribeToProjects((list) => {
      if (list && list.length > 0) setAllProjects(list);
    });
    return () => {
      if (typeof unsub === 'function') unsub();
    };
  }, []);

  // Find latest active project from live data if project prop has matching id
  const activeProject = (project && allProjects.find((p) => String(p.id) === String(project.id))) || project || allProjects[0] || DEFAULT_PROJECTS_LIST[0];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Always put the main project image first, followed by any additional gallery views
  const gallery = [
    activeProject.image || activeProject.fallbackImage,
    ...(Array.isArray(activeProject.gallery) && activeProject.gallery.length > 0
      ? activeProject.gallery.filter((img) => img && img !== activeProject.image)
      : [
          'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=90',
          'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
          'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85',
          'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85'
        ])
  ].filter(Boolean);

  // Reset to first slide whenever the project or main image changes
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [activeProject.id, activeProject.image]);

  // Auto-switch gallery hero images every 3.2s for a dynamic presentation
  useEffect(() => {
    if (gallery.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % gallery.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [gallery.length]);

  const prevImage = (e) => {
    if (e) e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  const nextImage = (e) => {
    if (e) e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % gallery.length);
  };

  // Dynamic recommendations: Other live projects from the list
  const recommendations = allProjects.filter((p) => String(p.id) !== String(activeProject.id)).slice(0, 2);

  const handleRecommendationClick = (recProject) => {
    if (onSelectProject) {
      onSelectProject(recProject);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-white dark:bg-ashara-dark animate-fade-in pb-24 transition-colors duration-300">
      
      {/* Back button */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-8 pb-4">
        <button
          onClick={() => onNavigate(source === 'home' ? 'home' : 'projects')}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-gray-600 dark:text-gray-400 hover:text-ashara-teal dark:hover:text-ashara-gold transition duration-200"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{source === 'home' ? 'Back to Home' : 'Back to Projects'}</span>
        </button>
      </div>

      {/* 1. HERO: Main Project Showcase Image with Interactive Gallery Slider (Hidden when selected from Home) */}
      {source !== 'home' && (
        <section className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="group relative w-full aspect-[16/9] sm:aspect-[21/10] max-h-[640px] overflow-hidden rounded-2xl sm:rounded-3xl bg-gray-100 dark:bg-ashara-charcoal shadow-sm border border-black/5 dark:border-white/10 select-none">
            
            {/* Sliding Track for Gallery Photos */}
            <div
              className="flex w-full h-full transition-transform duration-500 ease-out"
              style={{ transform: `translate3d(-${currentImageIndex * 100}%, 0, 0)` }}
            >
              {gallery.map((imgUrl, idx) => (
                <div key={idx} className="w-full h-full shrink-0 relative">
                  <img
                    src={imgUrl}
                    fetchPriority={idx === 0 ? 'high' : 'auto'}
                    loading={idx === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = activeProject.fallbackImage || 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1800&q=90';
                    }}
                    alt={`${activeProject.title} View ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Left Arrow Button */}
            {gallery.length > 1 && (
              <button
                onClick={prevImage}
                aria-label="Previous Photo"
                className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3 rounded-full bg-black/50 hover:bg-ashara-teal text-white backdrop-blur-md transition-all duration-300 opacity-0 group-hover:opacity-100 focus:opacity-100 hover:scale-110 active:scale-95"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            )}

            {/* Right Arrow Button */}
            {gallery.length > 1 && (
              <button
                onClick={nextImage}
                aria-label="Next Photo"
                className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3 rounded-full bg-black/50 hover:bg-ashara-teal text-white backdrop-blur-md transition-all duration-300 opacity-0 group-hover:opacity-100 focus:opacity-100 hover:scale-110 active:scale-95"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            )}

            {/* Gallery Indicator Dots */}
            {gallery.length > 1 && (
              <div className="absolute bottom-4 sm:bottom-6 inset-x-0 mx-auto w-fit z-20 flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                {gallery.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`h-1.5 transition-all duration-300 rounded-full ${
                      idx === currentImageIndex ? 'w-6 bg-ashara-gold' : 'w-1.5 bg-white/50 hover:bg-white'
                    }`}
                    aria-label={`View photo ${idx + 1}`}
                  />
                ))}
              </div>
            )}

          </div>
        </section>
      )}

      {/* 2. PROJECT TITLE & NARRATIVE (2-Column Layout matching Figma) */}
      <section className={`max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 ${source === 'home' ? 'pt-4 sm:pt-6' : 'pt-12 sm:pt-16'} pb-12`}>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Left: Title & Subtitle */}
          <div className="md:col-span-5 space-y-1">
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ashara-charcoal dark:text-white font-normal transition-colors duration-300">
              {activeProject.title}
            </h1>
            <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400 font-semibold transition-colors duration-300">
              {activeProject.subtitle || activeProject.category || 'GOVERNMENT SUB-OFFICE'}
            </p>
          </div>

          {/* Right: Architectural Narrative */}
          <div className="md:col-span-7">
            <p className="text-xs sm:text-[13.5px] leading-relaxed sm:leading-loose text-gray-700 dark:text-gray-300 font-light transition-colors duration-300">
              {activeProject.description}
            </p>
          </div>

        </div>
      </section>

      {/* 3. FULL-WIDTH FEATURE: Feature Gallery Image 1 */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-6">
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/10] max-h-[580px] overflow-hidden rounded-2xl sm:rounded-3xl bg-black shadow-md border border-black/5 dark:border-white/10">
          <img
            src={gallery[0] || activeProject.fallbackImage}
            alt={`${activeProject.title} Detail 1`}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover hover:scale-102 transition-transform duration-700"
          />
        </div>
      </section>

      {/* 4. 2-COLUMN IMAGE GRID: Gallery Images 2 & 3 */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          <div className="aspect-[4/3] overflow-hidden rounded-2xl sm:rounded-3xl bg-gray-100 dark:bg-ashara-charcoal shadow-xs border border-black/5 dark:border-white/10">
            <img
              src={gallery[1] || activeProject.fallbackImage}
              alt={`${activeProject.title} Detail 2`}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="aspect-[4/3] overflow-hidden rounded-2xl sm:rounded-3xl bg-gray-100 dark:bg-ashara-charcoal shadow-xs border border-black/5 dark:border-white/10">
            <img
              src={gallery[2] || activeProject.fallbackImage}
              alt={`${activeProject.title} Detail 3`}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </section>

      {/* 5. QUOTE BANNER: Sophia / Daniel Mesfin Quote matching Figma Image 5 */}
      <section className="max-w-4xl mx-auto px-6 py-12 text-center">
        <blockquote className="font-serif italic text-2xl sm:text-3xl lg:text-4xl text-ashara-charcoal dark:text-white leading-relaxed font-light transition-colors duration-300">
          “Design with passion, authenticity, and positivity to create spaces that inspire and uplift the soul.”
        </blockquote>
      </section>

      {/* 6. 2-COLUMN IMAGE GRID: Gallery Images 4 & 5 */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          <div className="aspect-[4/3] overflow-hidden rounded-2xl sm:rounded-3xl bg-gray-100 dark:bg-ashara-charcoal shadow-xs border border-black/5 dark:border-white/10">
            <img
              src={gallery[3] || activeProject.fallbackImage}
              alt={`${activeProject.title} Detail 4`}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="aspect-[4/3] overflow-hidden rounded-2xl sm:rounded-3xl bg-gray-100 dark:bg-ashara-charcoal shadow-xs border border-black/5 dark:border-white/10">
            <img
              src={gallery[4] || activeProject.fallbackImage}
              alt={`${activeProject.title} Detail 5`}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </section>

      {/* 7. FULL-WIDTH IMAGE: Gallery Image 6 */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-6">
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/10] max-h-[580px] overflow-hidden rounded-2xl sm:rounded-3xl bg-gray-100 dark:bg-ashara-charcoal shadow-sm border border-black/5 dark:border-white/10">
          <img
            src={gallery[5] || gallery[0]}
            alt={`${activeProject.title} Detail 6`}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* 8. ENQUIRE NOW Button (Outlined) */}
      <div className="text-center pt-10 pb-16">
        <button
          onClick={() => onNavigate('contact')}
          className="inline-block px-10 py-3 border border-gray-900 dark:border-white/20 text-ashara-charcoal dark:text-white text-[11px] uppercase tracking-[0.2em] font-medium hover:bg-ashara-teal dark:hover:bg-ashara-gold hover:text-white dark:hover:text-ashara-dark hover:border-ashara-teal dark:hover:border-ashara-gold transition duration-300 shadow-2xs"
        >
          ENQUIRE NOW
        </button>
      </div>

      {/* 9. "You May Like" Section matching Figma Image 5 */}
      <section className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 pt-12 space-y-12">
        
        {/* Heading with Divider Lines */}
        <div className="flex items-center justify-center gap-6 sm:gap-10">
          <div className="h-[1px] bg-gray-300 dark:bg-white/10 flex-1 max-w-[240px]"></div>
          <h3 className="font-serif text-2xl sm:text-3xl text-ashara-charcoal dark:text-white tracking-wide transition-colors duration-300">
            You May Like
          </h3>
          <div className="h-[1px] bg-gray-300 dark:bg-white/10 flex-1 max-w-[240px]"></div>
        </div>

        {/* 2 Project Recommendation Cards with Solid Teal Label Box */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {recommendations.map((rec) => (
            <div 
              key={rec.id}
              onClick={() => handleRecommendationClick(rec)}
              className="group relative cursor-pointer aspect-[4/3] overflow-hidden rounded-2xl sm:rounded-3xl bg-gray-100 dark:bg-ashara-charcoal shadow-sm hover:shadow-md transition-all duration-500 border border-black/5 dark:border-white/10"
            >
              <img
                src={rec.image}
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = rec.fallbackImage;
                }}
                alt={rec.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-x-0 bottom-0 bg-ashara-teal/95 dark:bg-ashara-teal/95 backdrop-blur-[2px] p-5 sm:p-6 text-white transition-all duration-300">
                <span className="text-[8.5px] sm:text-[9px] uppercase tracking-[0.28em] text-white/80 font-medium block">
                  {rec.category || rec.subtitle}
                </span>
                <h4 className="font-serif text-xl sm:text-2xl font-normal mt-0.5 text-white">
                  {rec.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

      </section>

    </div>
  );
}
