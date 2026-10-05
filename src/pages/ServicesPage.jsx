import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { DEFAULT_PROJECTS_LIST } from '../data/defaultData';
import asset_1 from '../assets/our_service.jpg';
import asset_2 from '../assets/p6_revenues.png';

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

  const toggleAccordion = (id) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  const handleProjectClick = (projId) => {
    const proj = DEFAULT_PROJECTS_LIST.find((p) => p.id === projId) || DEFAULT_PROJECTS_LIST[0];
    if (onSelectProject) {
      onSelectProject(proj);
    } else if (onNavigate) {
      onNavigate('projects');
    }
  };

  return (
    <div className="bg-[#FAF8F5] dark:bg-ashara-dark min-h-screen animate-fade-in transition-colors duration-300">
      
      {/* 1. HERO with 'How We Work' Text */}
      {!isSection && (
        <section className="w-full">
          <div className="relative w-full h-screen min-h-[500px] bg-black flex flex-col items-center justify-center text-center px-6">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-40"
              style={{ backgroundImage: `url(${asset_1})` }}
            />
            <div className="relative z-10 max-w-4xl mx-auto space-y-6">
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-normal">
                How We Work
              </h1>
              <p className="text-sm sm:text-base leading-relaxed text-white/90 font-light max-w-3xl mx-auto">
                Ashara Interiors is an interior design, architecture, and build company passionate about creating inspiring spaces that radiate positivity and reflect our clients' unique identities. Specializing in governmental bureaus, commercial spaces, hotels, residential projects, and cultural landmarks, we offer comprehensive services ranging from stand-alone interior design to complete turnkey solutions. On larger projects, we seamlessly integrate with your existing team of architects and contractors, or provide end-to-end project management from concept to completion.
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
                    <p className="text-sm leading-relaxed text-ashara-teal dark:text-white font-light transition-colors duration-300">
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
            className="inline-block px-8 py-3 border border-gray-300 text-ashara-teal dark:text-white text-[10px] uppercase tracking-[0.2em] font-semibold hover:border-ashara-teal hover:text-ashara-teal transition duration-300"
          >
            ENQUIRE NOW
          </button>
        </div>
      </section>

      {/* 4. "Recent Projects" Section matching Figma */}
      {!isSection && (
        <section className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 pt-8 pb-24 space-y-12 text-center">
          
          {/* Title with horizontal lines */}
          <div className="flex items-center justify-center gap-6 max-w-5xl mx-auto">
            <div className="h-[1px] bg-gray-300 dark:bg-white/15 flex-1"></div>
            <h3 className="font-serif text-lg sm:text-xl text-ashara-teal dark:text-white font-normal whitespace-nowrap">
              Recent Projects
            </h3>
            <div className="h-[1px] bg-gray-300 dark:bg-white/15 flex-1"></div>
          </div>

          {/* 2 Project Cards Grid matching Figma (text below image) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12 text-left">
            
            {/* Card 1: Amibara Properties */}
            <article 
              onClick={() => handleProjectClick(5)}
              className="group cursor-pointer block"
            >
              <div className="w-full aspect-[4/3] overflow-hidden bg-gray-200 mb-4">
                <img
                  src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85"
                  alt="Amibara Properties"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div>
                <h4 className="font-serif text-xl sm:text-2xl text-ashara-teal dark:text-white mb-1 group-hover:text-ashara-teal transition-colors">
                  Amibara Properties
                </h4>
                <span className="text-[9px] uppercase tracking-[0.2em] text-ashara-teal dark:text-white font-medium">
                  PRIVATE COMPANY
                </span>
              </div>
            </article>

            {/* Card 2: Ministry of Revenues */}
            <article 
              onClick={() => handleProjectClick(6)}
              className="group cursor-pointer block"
            >
              <div className="w-full aspect-[4/3] overflow-hidden bg-gray-200 mb-4">
                <img
                  src={asset_2}
                  alt="Ministry of Revenues"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div>
                <h4 className="font-serif text-xl sm:text-2xl text-ashara-teal dark:text-white mb-1 group-hover:text-ashara-teal transition-colors">
                  Ministry of Revenues
                </h4>
                <span className="text-[9px] uppercase tracking-[0.2em] text-ashara-teal dark:text-white font-medium">
                  GOVERNMENTAL
                </span>
              </div>
            </article>

          </div>

          {/* View All Projects Link */}
          <div className="pt-12 text-center">
            <button 
              onClick={() => onNavigate && onNavigate('projects')}
              className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] font-semibold text-ashara-teal dark:text-white hover:text-ashara-teal transition-colors"
            >
              VIEW ALL PROJECTS <span className="text-[12px] leading-none mb-0.5">&gt;</span>
            </button>
          </div>

        </section>
      )}

    </div>
  );
}
