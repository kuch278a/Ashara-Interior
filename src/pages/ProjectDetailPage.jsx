import React, { useState, useEffect } from 'react';
import { ArrowLeft, Star, Quote } from 'lucide-react';
import { DEFAULT_PROJECTS_LIST } from '../data/defaultData';
import { getInitialProjects, subscribeToProjects, getInitialTestimonials, subscribeToTestimonials } from '../services/firebaseService';

export default function ProjectDetailPage({ onNavigate, onSelectProject, project, source = 'projects' }) {
  // Live project resolution: fallback to first project or live project in storage
  const [allProjects, setAllProjects] = useState(() => getInitialProjects());
  const [testimonials, setTestimonials] = useState(() => getInitialTestimonials());
  
  useEffect(() => {
    const unsubProjects = subscribeToProjects((list) => {
      if (list && list.length > 0) setAllProjects(list);
    });
    const unsubTestimonials = subscribeToTestimonials((list) => {
      if (list && list.length > 0) setTestimonials(list);
    });
    return () => {
      if (typeof unsubProjects === 'function') unsubProjects();
      if (typeof unsubTestimonials === 'function') unsubTestimonials();
    };
  }, []);

  // Find latest active project from live data if project prop has matching id
  const activeProject = (project && allProjects.find((p) => String(p.id) === String(project.id))) || project || allProjects[0] || DEFAULT_PROJECTS_LIST[0];

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

  // Dynamic recommendations: Other live projects from the list
  const recommendations = allProjects.filter((p) => String(p.id) !== String(activeProject.id)).slice(0, 2);

  // Match testimonial linked specifically to this project, or fallback to general featured review
  const projectTestimonial = testimonials.find((t) => String(t.projectId) === String(activeProject.id)) ||
    testimonials.find((t) => !t.projectId && t.isFeatured);

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

      {/* 2. PROJECT TITLE & NARRATIVE (2-Column Layout matching Figma) */}
      <section className={`max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 ${source === 'home' ? 'pt-8 sm:pt-10' : 'pt-12 sm:pt-16'} pb-12`}>
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

      {/* 3. FULL-WIDTH FEATURE IMAGE */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-8">
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/10] max-h-[640px] overflow-hidden rounded-2xl sm:rounded-3xl bg-black shadow-md border border-black/5 dark:border-white/10">
          <img
            src={gallery[0] || activeProject.fallbackImage}
            alt={`${activeProject.title} Feature`}
            loading="eager"
            decoding="async"
            fetchPriority="high"
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

      {/* 8. CLIENT WORDS / TESTIMONIAL (Option 3) */}
      {projectTestimonial && (
        <section className="max-w-4xl mx-auto px-6 py-12 sm:py-16 animate-fade-in">
          <div className="relative p-8 sm:p-12 rounded-2xl sm:rounded-3xl bg-[#FAF9F5] dark:bg-white/[0.03] border border-ashara-teal/20 dark:border-ashara-gold/20 shadow-sm text-center space-y-6 backdrop-blur-xs">
            
            {/* Top Eyebrow Header */}
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-ashara-teal/40 dark:bg-ashara-gold/40" />
              <span className="text-[10px] uppercase tracking-[0.32em] font-semibold text-ashara-teal dark:text-ashara-gold">
                Client Perspective
              </span>
              <span className="h-px w-8 bg-ashara-teal/40 dark:bg-ashara-gold/40" />
            </div>

            {/* Star Rating */}
            <div className="flex items-center justify-center gap-1.5 text-amber-500">
              {[...Array(projectTestimonial.rating || 5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>

            {/* Testimonial Quote in Italic Serif */}
            <blockquote className="font-serif italic text-xl sm:text-2xl lg:text-[26px] text-ashara-charcoal dark:text-gray-100 leading-relaxed font-light px-2 sm:px-8">
              “{projectTestimonial.quote}”
            </blockquote>

            {/* Client Attribution & Verification */}
            <div className="pt-2 space-y-1">
              <p className="text-xs uppercase tracking-[0.22em] font-semibold text-ashara-charcoal dark:text-white">
                {projectTestimonial.clientName}
              </p>
              <p className="text-[11px] uppercase tracking-[0.2em] font-light text-gray-500 dark:text-gray-400">
                {projectTestimonial.role && `${projectTestimonial.role} • `}
                <span className="font-medium text-ashara-teal dark:text-ashara-gold">
                  {projectTestimonial.organization}
                </span>
              </p>
              <div className="pt-1">
                <span className="inline-block text-[9px] uppercase tracking-[0.25em] font-medium px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
                  Verified Project Client
                </span>
              </div>
            </div>

          </div>
        </section>
      )}

      {/* 9. ENQUIRE NOW Button (Outlined) */}
      <div className="text-center pt-8 pb-16">
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
