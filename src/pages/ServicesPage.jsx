import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { PROJECTS_LIST } from './ProjectsPage';

const ACCORDION_ITEMS = [
  {
    id: 1,
    number: '1.',
    title: 'Interior Design',
    content: 'Comprehensive spatial planning, luxury material curation, tailored color palettes, and end-to-end styling for executive bureaus, high-end residences, and cultural venues.'
  },
  {
    id: 2,
    number: '2.',
    title: 'Architectural Design',
    content: 'Master planning, spatial articulation, facade development, and structural coordination blending classical proportions with modern sustainable engineering.'
  },
  {
    id: 3,
    number: '3.',
    title: 'House Redesign',
    content: 'Transforming existing residential architecture through structural re-modelling, spatial flow optimization, bespoke joinery, and harmonized lighting schemas.'
  },
  {
    id: 4,
    number: '4.',
    title: 'Design Consultancy',
    content: 'Strategic acoustic appraisals, luxury FF&E procurement advisory, lighting design consultations, and spatial branding for institutions and corporations.'
  }
];

export default function ServicesPage({ onNavigate, onSelectProject }) {
  // In Figma, item 3 is expanded by default
  const [openIndex, setOpenIndex] = useState(3);

  const toggleAccordion = (id) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  const handleProjectClick = (projId) => {
    const proj = PROJECTS_LIST.find((p) => p.id === projId) || PROJECTS_LIST[0];
    if (onSelectProject) {
      onSelectProject(proj);
    } else {
      onNavigate('projects');
    }
  };

  return (
    <div className="bg-white dark:bg-ashara-dark animate-fade-in pb-24 transition-colors duration-300">
      
      {/* 1. HERO: "How We Work" Dark Cathedral Arch Banner matching Figma Image 2 */}
      <section className="relative w-full min-h-[540px] sm:min-h-[620px] flex items-center justify-center bg-black overflow-hidden px-6 py-20 text-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-70 scale-100"
          style={{
            backgroundImage: `url('/our_service.jpg')`
          }}
        ></div>
        
        {/* Dark Vignette Overlay */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[0.5px]"></div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-3xl mx-auto space-y-6 text-white px-4">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-wide text-white">
            How We Work
          </h1>
          
          <p className="text-xs sm:text-[13.5px] leading-relaxed sm:leading-loose text-white/90 font-light tracking-wide max-w-2xl mx-auto">
            Ashara Interiors is an interior design, architecture, and build company passionate about creating inspiring spaces that radiate positivity and reflect our clients' unique identities. Specializing in governmental bureaus, commercial spaces, hotels, residential projects, and cultural landmarks, we offer comprehensive services ranging from stand-alone interior design to complete turnkey solutions. On larger projects, we seamlessly integrate with your existing team of architects and contractors, or provide end-to-end project management from concept to completion.
          </p>
        </div>
      </section>

      {/* 2. "How We Can Help" Section with Numbered Accordion */}
      <section className="max-w-3xl mx-auto px-6 sm:px-10 pt-20 sm:pt-28 space-y-12">
        <h2 className="font-serif text-3xl sm:text-4xl text-center text-ashara-charcoal dark:text-white font-normal tracking-wide transition-colors duration-300">
          How We Can Help
        </h2>

        {/* Accordion List */}
        <div className="divide-y divide-gray-200 dark:divide-white/10">
          {ACCORDION_ITEMS.map((item) => {
            const isOpen = openIndex === item.id;
            return (
              <div key={item.id} className="py-6 transition duration-200">
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full flex items-center justify-between text-left group"
                >
                  <div className="flex items-baseline gap-4 sm:gap-6">
                    <span className="font-serif text-xl sm:text-2xl text-ashara-charcoal dark:text-white font-light transition-colors duration-300">
                      {item.number}
                    </span>
                    <span className="font-serif text-xl sm:text-2xl text-ashara-charcoal dark:text-white font-normal group-hover:text-ashara-teal dark:group-hover:text-ashara-gold transition-colors duration-300">
                      {item.title}
                    </span>
                  </div>
                  <span className="text-gray-400 group-hover:text-ashara-teal dark:group-hover:text-ashara-gold transition-colors duration-200">
                    {isOpen ? (
                      <Minus className="w-5 h-5 transition-transform duration-300" />
                    ) : (
                      <Plus className="w-5 h-5 transition-transform duration-300" />
                    )}
                  </span>
                </button>

                {/* Animated Body Content */}
                {isOpen && (
                  <div className="pt-4 pl-8 sm:pl-11 pr-4 animate-fade-in">
                    <p className="text-xs sm:text-[13px] leading-relaxed text-gray-600 dark:text-gray-300 font-light transition-colors duration-300">
                      {item.content}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ENQUIRE NOW Button (Outlined Box) */}
        <div className="text-center pt-4">
          <button
            onClick={() => onNavigate('contact')}
            className="inline-block px-10 py-3 border border-gray-900 dark:border-white/20 text-ashara-charcoal dark:text-white text-[11px] uppercase tracking-[0.2em] font-medium hover:bg-ashara-teal dark:hover:bg-ashara-gold hover:text-white dark:hover:text-ashara-dark hover:border-ashara-teal dark:hover:border-ashara-gold transition duration-300 shadow-2xs"
          >
            ENQUIRE NOW
          </button>
        </div>
      </section>

      {/* 3. Quote Banner matching Figma Image 2 */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <blockquote className="font-serif italic text-2xl sm:text-3xl lg:text-4xl text-ashara-charcoal dark:text-white leading-relaxed font-light transition-colors duration-300">
          “Simplicity is the ultimate sophistication.”
        </blockquote>
      </section>

      {/* 4. "Recent Projects" Section matching Figma Image 2 */}
      <section className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 pt-8 space-y-12">
        
        {/* Heading with Divider Lines */}
        <div className="flex items-center justify-center gap-6 sm:gap-10">
          <div className="h-[1px] bg-gray-300 dark:bg-white/10 flex-1 max-w-[240px]"></div>
          <h3 className="font-serif text-2xl sm:text-3xl text-ashara-charcoal dark:text-white tracking-wide transition-colors duration-300">
            Recent Projects
          </h3>
          <div className="h-[1px] bg-gray-300 dark:bg-white/10 flex-1 max-w-[240px]"></div>
        </div>

        {/* 2 Project Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Card 1: Amibara Properties */}
          <div 
            onClick={() => handleProjectClick(5)}
            className="group cursor-pointer space-y-3"
          >
            <div className="aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-ashara-charcoal shadow-xs">
              <img
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85"
                alt="Amibara Properties"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div>
              <h4 className="font-serif text-xl sm:text-2xl text-ashara-charcoal dark:text-white group-hover:text-ashara-teal dark:group-hover:text-ashara-gold transition duration-300">
                Amibara Properties
              </h4>
              <p className="text-[10px] uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400 font-medium mt-0.5">
                PRIVATE COMPANY
              </p>
            </div>
          </div>

          {/* Card 2: Minstry of Revenues */}
          <div 
            onClick={() => handleProjectClick(6)}
            className="group cursor-pointer space-y-3"
          >
            <div className="aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-ashara-charcoal shadow-xs">
              <img
                src="https://images.unsplash.com/photo-1519643381401-22c77e60520e?auto=format&fit=crop&w=1200&q=85"
                alt="Ministry of Revenues"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div>
              <h4 className="font-serif text-xl sm:text-2xl text-ashara-charcoal dark:text-white group-hover:text-ashara-teal dark:group-hover:text-ashara-gold transition duration-300">
                Minstry of Revenues
              </h4>
              <p className="text-[10px] uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400 font-medium mt-0.5">
                GOVERNMENTAL
              </p>
            </div>
          </div>

        </div>

        {/* View All Projects Link */}
        <div className="text-center pt-6">
          <button
            onClick={() => onNavigate('projects')}
            className="text-[10.5px] uppercase tracking-[0.28em] font-semibold text-gray-800 dark:text-gray-200 hover:text-ashara-teal dark:hover:text-ashara-gold transition border-b border-gray-400 dark:border-white/20 pb-0.5"
          >
            VIEW ALL PROJECTS
          </button>
        </div>

      </section>

    </div>
  );
}
