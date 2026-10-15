import React, { useState, useEffect } from 'react';
import { Plus, Minus } from 'lucide-react';
import { getInitialProjects, subscribeToProjects } from '../services/firebaseService';
import asset_1 from '../assets/our_service.jpg';

const ACCORDION_ITEMS = [
  {
    id: 1,
    number: '1.',
    title: 'Interior Design',
    content: 'Comprehensive spatial planning, luxury material curation, tailored color palettes, and end-to-end styling.'
  },
  {
    id: 2,
    number: '2.',
    title: 'Architecture Design',
    content: 'Master planning, spatial articulation, facade development, and structural coordination blending classical proportions with modern sustainable engineering.'
  },
  {
    id: 3,
    number: '3.',
    title: 'Office Layouts',
    content: 'Transforming existing office architecture through structural re-modelling, spatial flow optimization, and harmonized lighting schemas.'
  },
  {
    id: 4,
    number: '4.',
    title: 'Retail Space',
    content: 'Strategic acoustic appraisals, luxury FF&E procurement advisory, lighting design consultations, and spatial branding.'
  }
];

export default function ServicesPage({ onNavigate, onSelectProject, isSection = false }) {
  const [openIndex, setOpenIndex] = useState(3);
  const [projects, setProjects] = useState(() => getInitialProjects());

  useEffect(() => {
    const unsubscribe = subscribeToProjects((data) => {
      if (data && data.length > 0) {
        const sorted = [...data].sort((a, b) => {
          if (a.updatedAt && b.updatedAt) {
            const dateA = new Date(a.updatedAt).getTime();
            const dateB = new Date(b.updatedAt).getTime();
            if (!Number.isNaN(dateA) && !Number.isNaN(dateB) && dateA !== dateB) {
              return dateB - dateA;
            }
          }
          const idA = Number(a.id);
          const idB = Number(b.id);
          if (!Number.isNaN(idA) && !Number.isNaN(idB) && idA !== idB) {
            return idA - idB;
          }
          return 0;
        });
        setProjects(sorted);
      }
    });
    return () => {
      if (typeof unsubscribe === 'function') unsubscribe();
    };
  }, []);

  const recentProjects = projects.slice(0, 2);

  const toggleAccordion = (id) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  const handleProjectClick = (project) => {
    if (onSelectProject) {
      onSelectProject(project);
    } else if (onNavigate) {
      onNavigate('projects');
    }
  };

  return (
    <div className="bg-[#FAF8F5] dark:bg-ashara-dark min-h-screen animate-fade-in transition-colors duration-300">
      
      {/* 1. HERO with 'How We Work' Text */}
      {!isSection && (
        <section className="w-full">
          <div className="relative w-full h-screen supports-[height:100svh]:h-[100svh] min-h-[500px] bg-black flex flex-col items-center justify-center text-center px-6">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-40"
              style={{ backgroundImage: `url(${asset_1})` }}
            />
            <div className="relative z-10 max-w-4xl mx-auto space-y-6">
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-normal">
                How We Work
              </h1>
              <p className="text-lg sm:text-base leading-relaxed text-white font-light max-w-3xl mx-auto">
                Ashara Interiors is an interior design, architecture, and build company passionate about creating inspiring spaces that radiate positivity and reflect our clients' unique identities. 
                Specializing in governmental bureaus, commercial spaces, hotels, residential projects, and cultural landmarks, we offer comprehensive services ranging from stand-alone interior design to complete turnkey solutions. On larger projects, we seamlessly integrate with your existing team of architects and contractors, or provide end-to-end project management from concept to completion.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* 2. "How We Can Help" Section with Numbered Accordion */}
      <section className="max-w-4xl mx-auto px-6 sm:px-10 pt-16 sm:pt-24 pb-16 space-y-12">
        <h3 className="font-serif text-3xl sm:text-4xl text-center text-ashara-teal dark:text-white font-normal tracking-wide transition-colors duration-300">
          How We Can Help
        </h3>

        {/* Accordion List */}
        <div className="divide-y divide-gray-200 max-w-2xl mx-auto border-t border-b border-gray-200">
          {ACCORDION_ITEMS.map((item) => {
            const isOpen = openIndex === item.id;
            return (
              <div key={item.id} className="py-6 transition duration-200">
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full flex items-center justify-between text-left group"
                >
                  <div className="flex items-baseline gap-4 sm:gap-6">
                    <span className="font-serif text-xl sm:text-2xl text-ashara-teal dark:text-white font-light">
                      {item.number}
                    </span>
                    <span className="font-serif text-xl sm:text-2xl text-ashara-teal dark:text-white font-normal group-hover:text-ashara-teal transition-colors duration-300">
                      {item.title}
                    </span>
                  </div>
                  <span className="text-ashara-teal dark:text-white group-hover:text-ashara-teal transition-colors duration-200">
                    {isOpen ? (
                      <Minus className="w-4 h-4 transition-transform duration-300" />
                    ) : (
                      <Plus className="w-4 h-4 transition-transform duration-300" />
                    )}
                  </span>
                </button>

                {/* Animated Body Content */}
                {isOpen && (
                  <div className="pt-4 pl-8 sm:pl-12 pr-4 animate-fade-in">
                    <p className="text-base leading-relaxed text-ashara-teal dark:text-white font-light transition-colors duration-300">
                      {item.content}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Enquire Now Button */}
        <div className="text-center pt-4">
          <button
            onClick={() => onNavigate && onNavigate('contact')}
            className="inline-flex items-center justify-center w-[210px] h-[60px] border border-gray-300 text-ashara-teal dark:text-white text-xs sm:text-sm uppercase tracking-[0.2em] font-bold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:bg-ashara-teal hover:text-white dark:hover:bg-ashara-gold dark:hover:text-ashara-dark hover:border-transparent"
          >
            ENQUIRE NOW
          </button>
        </div>
      </section>

      {/* 4. "Recent Projects" Section matching Figma */}
      {!isSection && recentProjects.length > 0 && (
        <section className="max-w-[1700px] mx-auto px-6 sm:px-10 lg:px-16 pt-8 pb-24 space-y-12 text-center">

          {/* Title with horizontal lines */}
          <div className="flex items-center justify-center gap-6 mb-12 w-full">
            <div className="h-[5px] bg-gray-300 dark:bg-white/15 flex-1"></div>
            <h3 className="font-serif text-3xl sm:text-4xl text-ashara-teal dark:text-white font-normal h-[72px] px-2 flex items-center justify-center whitespace-nowrap">
              Recent Projects
            </h3>
            <div className="h-[5px] bg-gray-300 dark:bg-white/15 flex-1"></div>
          </div>

          {/* 2 Project Cards Grid matching Figma (text below image) */}
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-16 text-left">
            {recentProjects.map((item) => (
              <article
                key={item.id}
                role="button"
                tabIndex={0}
                onClick={() => handleProjectClick(item)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    if (e.key === ' ') e.preventDefault();
                    handleProjectClick(item);
                  }
                }}
                className="group cursor-pointer block"
              >
                <div className="w-full aspect-[4/3] overflow-hidden bg-gray-200 mb-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = item.fallbackImage;
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
                <div>
                  <h4 className="font-serif text-xl sm:text-2xl text-ashara-teal dark:text-white mb-1 group-hover:text-ashara-teal transition-colors">
                    {item.title}
                  </h4>
                </div>
              </article>
            ))}
          </div>

          {/* View All Projects Link */}
          <div className="pt-12 text-center">
            <button
              type="button"
              onClick={() => onNavigate && onNavigate('projects')}
              className="text-[16px] uppercase tracking-[0.2em] font-bold transition-colors duration-200 text-ashara-teal/60 dark:text-white/60 hover:text-ashara-teal dark:hover:text-white pb-1 border-b border-transparent hover:border-ashara-teal dark:hover:border-white focus:outline-none focus-visible:ring-2 focus-visible:ring-ashara-gold"
            >
              VIEW ALL PROJECTS
            </button>
          </div>

        </section>
      )}

    </div>
  );
}
