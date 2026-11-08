import React, { useState, useEffect } from 'react';
import SectionTitle from '../components/SectionTitle';
import { getInitialProjects, subscribeToProjects } from '../services/firebaseService';
import sortProjects from '../utils/sortProjects';
import { handleImageError } from '../utils/imageFallback';

export default function ProjectsPage({ onSelectProject }) {
  const [projects, setProjects] = useState(() => getInitialProjects());

  useEffect(() => {
    const unsubscribe = subscribeToProjects((data) => {
      if (Array.isArray(data)) {
        setProjects(sortProjects(data));
      }
    });
    return () => {
      if (typeof unsubscribe === 'function') unsubscribe();
    };
  }, []);

  const handleProjectClick = (project) => {
    if (onSelectProject) {
      onSelectProject(project);
    }
  };

  return (
    <div className="bg-[#FAF8F5] dark:bg-ashara-dark min-h-screen animate-fade-in transition-colors duration-300">

      {/* Terracotta Banner matching Figma */}
      <section
        className="bg-[#DF6D27] text-white min-h-[100svh] px-6 lg:px-12 flex flex-col items-center justify-center text-center relative overflow-hidden"
      >
        <div className="max-w-4xl mx-auto space-y-6 relative z-10 w-full">
          <blockquote className="font-serif italic text-3xl sm:text-4xl lg:text-[56px] font-light leading-snug">
            “Design with passion, authenticity, and positivity to create spaces that inspire and uplift the soul.”
          </blockquote>
          <div className="space-y-2 pt-6">
            <p className="text-[12px] sm:text-sm uppercase tracking-[0.28em] font-bold text-white">
              Michael Dessalegn
            </p>
            <p className="text-[11px] sm:text-xs uppercase tracking-[0.32em] font-bold text-white/90">
              Founder, CEO and Architect
            </p>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section aria-labelledby="projects-page-heading" className="max-w-[1700px] mx-auto px-6 sm:px-10 lg:px-16 pt-16 pb-24">

        {/* Title with horizontal lines */}
        <SectionTitle as="h1" id="projects-page-heading">
          Projects
        </SectionTitle>

        {/* 2-Column Grid matching Figma */}
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-x-6 sm:gap-x-10 gap-y-12 sm:gap-y-16">
            {projects.map((item) => (
              <article
                key={item.id}
                role="button"
                tabIndex={0}
                aria-label={`View project details for ${item.title}`}
                onClick={() => handleProjectClick(item)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    if (e.key === ' ') e.preventDefault();
                    handleProjectClick(item);
                  }
                }}
                className="group cursor-pointer block active:scale-[0.99] transition-transform duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-ashara-gold rounded-sm"
              >
                {/* Photo */}
                <div className="w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/9] overflow-hidden bg-gray-200 dark:bg-gray-800 mb-4 rounded-sm relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    onError={(e) => handleImageError(e, item.fallbackImage)}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Text Below Image */}
                <div>
                  <h2 className="font-serif text-xl sm:text-2xl text-ashara-teal dark:text-white group-hover:text-ashara-teal dark:group-hover:text-ashara-teal transition-colors">
                    {item.title}
                  </h2>
                </div>
              </article>
            ))}
          </div>
      </section>
    </div>
  );
}
