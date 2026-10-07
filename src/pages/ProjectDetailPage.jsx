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
  };

  return (
    <div className="bg-white dark:bg-ashara-dark min-h-screen animate-fade-in pb-24 transition-colors duration-300">
      
      {/* 1. FULL-WIDTH HERO IMAGE */}
      <section className="w-full h-[400px] sm:h-[500px] lg:h-[600px] bg-gray-100 dark:bg-ashara-dark">
        <img
          src={gallery[0] || activeProject.fallbackImage}
          alt={`${activeProject.title} Hero`}
          loading="eager"
          decoding="async"
          fetchPriority="high"
          className="w-full h-full object-cover object-center"
        />
      </section>

      {/* 2. PROJECT TITLE & NARRATIVE (2-Column Layout matching Figma) */}
      <section className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          
          {/* Left: Title & Subtitle */}
          <div className="md:col-span-5 space-y-2">
            <h1 className="font-serif text-3xl sm:text-4xl text-ashara-teal dark:text-white font-normal">
              {activeProject.title}
            </h1>
            <p className="text-[11px] uppercase tracking-[0.2em] text-ashara-teal dark:text-white font-medium">
              {activeProject.category && `${activeProject.category} | `}{activeProject.subtitle}
            </p>
          </div>

          {/* Right: Architectural Narrative */}
          <div className="md:col-span-7">
            <p className="text-[13px] leading-relaxed text-ashara-teal dark:text-white font-light">
              {activeProject.description}
            </p>
          </div>

        </div>
      </section>

      {/* 3. DYNAMIC PROJECT GALLERY: All designated images from the PDF */}
      {gallery.length > 1 && (
        <section className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 pb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {gallery.slice(1).map((imgUrl, idx) => {
              // Give panoramic view to first secondary image and every 5th image
              const isBanner = idx === 0 || idx % 5 === 0;
              return (
                <div
                  key={idx}
                  className={`${
                    isBanner ? 'sm:col-span-2 aspect-[21/9]' : 'aspect-[4/3]'
                  } w-full overflow-hidden bg-gray-200 dark:bg-gray-800 rounded-sm shadow-sm`}
                >
                  <img
                    src={imgUrl}
                    alt={`${activeProject.title} View ${idx + 2}`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* 4. QUOTE BANNER: Sophia / Daniel Mesfin Quote matching Figma */}
      <section className="max-w-4xl mx-auto px-6 py-8 text-center">
        <blockquote className="font-serif italic text-2xl sm:text-3xl text-ashara-teal dark:text-white leading-relaxed font-light">
          “Design with passion, authenticity, and positivity to create spaces that inspire and uplift the soul.”
        </blockquote>
      </section>

      {/* 8. ENQUIRE NOW Button (Outlined) */}
      <div className="text-center pt-8 pb-20">
        <button
          onClick={() => onNavigate('contact')}
          className="inline-flex items-center justify-center w-[210px] h-[60px] border border-gray-300 text-ashara-teal dark:text-white text-xs sm:text-sm uppercase tracking-[0.2em] font-bold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:bg-ashara-teal hover:text-white dark:hover:bg-ashara-gold dark:hover:text-ashara-dark hover:border-transparent"
        >
          ENQUIRE NOW
        </button>
      </div>

      {/* 9. "You May Like" Section matching Figma */}
      <section className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 space-y-12 text-center">
        
        {/* Title with horizontal lines */}
        <div className="flex items-center justify-center gap-6">
          <div className="h-[1px] bg-gray-300 dark:bg-white/15 flex-1 max-w-[120px]"></div>
          <h3 className="font-serif text-2xl sm:text-3xl text-ashara-teal dark:text-white font-normal">
            You May Like
          </h3>
          <div className="h-[1px] bg-gray-300 dark:bg-white/15 flex-1 max-w-[120px]"></div>
        </div>

        {/* 2 Project Cards Grid matching the new Masonry style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 text-left">
          {recommendations.map((rec) => (
            <article 
              key={rec.id}
              onClick={() => handleRecommendationClick(rec)}
              className="group cursor-pointer break-inside-avoid relative overflow-hidden rounded-sm"
            >
              <div className="w-full relative overflow-hidden bg-gray-100 dark:bg-gray-800">
                <img
                  src={rec.image}
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = rec.fallbackImage;
                  }}
                  alt={rec.title}
                  className="w-full h-auto object-cover object-center transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                
                {/* Elegant Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <h4 className="font-serif text-xl sm:text-2xl text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    {rec.title}
                  </h4>
                </div>
              </div>
            </article>
          ))}
        </div>

      </section>

    </div>
  );
}
