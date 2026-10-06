import React, { useState, useEffect } from 'react';
import { getInitialProjects, subscribeToProjects } from '../services/firebaseService';

import bannerImage from '../assets/projects_hero_banner.png';

export default function ProjectsPage({ onNavigate, onSelectProject, isSection = false }) {
  const [projects, setProjects] = useState(() => getInitialProjects());
  const [selectedFilter, setSelectedFilter] = useState('ALL');

  useEffect(() => {
    const unsubscribe = subscribeToProjects((data) => {
      if (data && data.length > 0) {
        const sorted = [...data].sort((a, b) => {
          const dateA = new Date(a.updatedAt || a.createdAt || 0).getTime();
          const dateB = new Date(b.updatedAt || b.createdAt || 0).getTime();
          return dateB - dateA;
        });
        setProjects(sorted);
      }
    });
    return () => {
      if (typeof unsubscribe === 'function') unsubscribe();
    };
  }, []);

  const filteredProjects = selectedFilter === 'ALL'
    ? projects
    : projects.filter((p) => (p.category || p.tag) === selectedFilter);

  const handleProjectClick = (project) => {
    if (onSelectProject) {
      onSelectProject(project);
    }
  };

  return (
    <div className="bg-[#FAF8F5] dark:bg-ashara-dark min-h-screen animate-fade-in transition-colors duration-300">
      
      {/* Terracotta Banner matching Figma */}
      {!isSection && (
        <section 
          className="bg-[#DF6D27] text-white min-h-[100svh] px-6 lg:px-12 flex flex-col items-center justify-center text-center relative overflow-hidden"
        >
          <div className="max-w-4xl mx-auto space-y-6 relative z-10 w-full">
            <blockquote className="font-serif italic text-4xl sm:text-5xl lg:text-[56px] font-light leading-snug">
              “Design with passion, authenticity, and positivity to create spaces that inspire and uplift the soul.”
            </blockquote>
            <div className="space-y-2 pt-6">
              <p className="text-[12px] sm:text-sm uppercase tracking-[0.28em] font-bold text-white">
                Daniel Mesfin
              </p>
              <p className="text-[11px] sm:text-xs uppercase tracking-[0.32em] font-bold text-white/90">
                CREATIVE DIRECTOR
              </p>
            </div>
          </div>
        </section>
      )}

      {/* PROJECTS SECTION */}
      <section className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 pt-16 pb-24">
        
        {/* Title with horizontal lines */}
        <div className="flex items-center justify-center gap-6 mb-12 max-w-5xl mx-auto">
          <div className="h-[1px] bg-gray-300 dark:bg-white/15 flex-1"></div>
          <h2 className="font-serif text-2xl sm:text-3xl text-ashara-teal dark:text-white font-bold w-[210px] h-[60px] flex items-center justify-center whitespace-nowrap">
            Projects
          </h2>
          <div className="h-[1px] bg-gray-300 dark:bg-white/15 flex-1"></div>
        </div>

        {/* 2-Column Grid matching Figma */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {(isSection ? filteredProjects.slice(0, 4) : filteredProjects).map((item) => (
            <article
              key={item.id}
              onClick={() => handleProjectClick(item)}
              className="group cursor-pointer block"
            >
              {/* Photo */}
              <div className="w-full aspect-[4/3] overflow-hidden bg-gray-200 dark:bg-gray-800 mb-4">
                <img
                  src={item.image}
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = item.fallbackImage;
                  }}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Text Below Image */}
              <div>
                <h3 className="font-serif text-2xl text-ashara-teal dark:text-white group-hover:text-ashara-teal dark:group-hover:text-ashara-teal transition-colors">
                  {item.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}