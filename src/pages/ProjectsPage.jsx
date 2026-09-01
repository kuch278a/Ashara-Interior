import React, { useState, useEffect } from 'react';
import { getDynamicProjects } from '../services/firebaseService';
import { DEFAULT_PROJECTS_LIST } from '../data/defaultData';

export default function ProjectsPage({ onNavigate, onSelectProject, isSection = false }) {
  const [projects, setProjects] = useState(DEFAULT_PROJECTS_LIST);
  const [selectedFilter, setSelectedFilter] = useState('ALL');

  useEffect(() => {
    getDynamicProjects().then((data) => {
      if (data && data.length > 0) {
        setProjects(data);
      }
    });
  }, []);

  const categories = ['ALL', 'GOVERNMENTAL', 'PRIVATE ORGANIZATION', 'PRIVATE CORPORATION', 'PRIVATE COMPANY'];

  const filteredProjects = selectedFilter === 'ALL'
    ? projects
    : projects.filter((p) => (p.category || p.tag) === selectedFilter);

  const handleProjectClick = (project) => {
    if (onSelectProject) {
      onSelectProject(project);
    }
    if (onNavigate) {
      onNavigate('project-detail');
    }
  };

  return (
    <div className="bg-transparent animate-fade-in transition-colors duration-300">
      
      {/* Optional Terracotta Banner if rendered standalone */}
      {!isSection && (
        <section className="relative bg-ashara-terracotta text-white overflow-hidden py-24 sm:py-32 px-6 lg:px-12 text-center">
          <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-black/10 pointer-events-none"></div>
          <div className="max-w-3xl mx-auto space-y-6 relative z-10">
            <blockquote className="font-serif italic text-3xl sm:text-4xl lg:text-5xl font-light leading-snug sm:leading-tight">
              “Design with passion, authenticity, and positivity to create spaces that inspire and uplift the soul.”
            </blockquote>
            <div className="space-y-1 pt-3">
              <p className="text-[11px] sm:text-xs uppercase tracking-[0.28em] font-semibold text-white">
                DANIEL MESFIN
              </p>
              <p className="text-[9.5px] sm:text-[10px] uppercase tracking-[0.32em] font-light text-white/90">
                CREATIVE DIRECTOR
              </p>
            </div>
          </div>
        </section>
      )}

      {/* PROJECTS 2x3 GRID SECTION */}
      <section className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 pt-12 sm:pt-16 pb-12 space-y-10">
        
        {/* Header with Divider Lines */}
        <div className="flex items-center justify-center gap-6 sm:gap-10">
          <div className="h-[1px] bg-gray-300 dark:bg-white/10 flex-1 max-w-[240px]"></div>
          <h2 className="font-serif text-3xl sm:text-4xl text-ashara-charcoal dark:text-white tracking-wide transition-colors duration-300 text-center">
            Featured Projects
          </h2>
          <div className="h-[1px] bg-gray-300 dark:bg-white/10 flex-1 max-w-[240px]"></div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 pt-2">
          {categories.map((cat) => {
            const isActive = selectedFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`px-4 py-1.5 text-[9.5px] sm:text-[10px] uppercase tracking-[0.2em] font-medium transition-all duration-300 border ${
                  isActive
                    ? 'bg-ashara-teal text-white border-ashara-teal dark:bg-ashara-gold dark:text-ashara-dark dark:border-ashara-gold shadow-xs'
                    : 'bg-transparent text-gray-600 dark:text-gray-400 border-gray-200 dark:border-white/10 hover:border-ashara-teal dark:hover:border-ashara-gold hover:text-ashara-teal dark:hover:text-ashara-gold'
                }`}
              >
                {cat === 'ALL' ? 'All Works' : cat}
              </button>
            );
          })}
        </div>

        {/* 2x3 Project Cards Grid with Figma Teal/Green Bottom Label Cards */}
        <div key={selectedFilter} className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 pt-4 animate-fade-in">
          {filteredProjects.map((item) => (
            <div
              key={item.id}
              onClick={() => handleProjectClick(item)}
              className="group relative cursor-pointer aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-ashara-charcoal shadow-sm hover:shadow-2xl hover:-translate-y-2 active:scale-[0.98] transition-all duration-500 ease-out"
            >
              {/* Photo */}
              <img
                src={item.image}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = item.fallbackImage;
                }}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
              />

              {/* Signature Solid Forest Teal/Green Bottom Label Box matching Figma */}
              <div className="absolute inset-x-0 bottom-0 bg-ashara-teal/95 dark:bg-ashara-teal/95 backdrop-blur-[2px] p-5 sm:p-6 text-white transition-all duration-300 group-hover:bg-ashara-teal">
                <span className="text-[8.5px] sm:text-[9px] uppercase tracking-[0.28em] text-white/80 font-medium block">
                  {item.category || item.tag}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-normal mt-0.5 text-white">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </section>

    </div>
  );
}
