import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

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
    content: 'We have a deep understanding of heritage buildings and a fascination for new spaces that embody classical elements. New or old, we always follow traditional principles giving them an eclectic edge. We work with some great architects and have access to some outstanding creatives.'
  },
  {
    id: 4,
    number: '4.',
    title: 'Furniture Design',
    content: 'Custom artisanal millwork, bespoke woodwork, architectural lighting, and curated collectible furnishings fabricated with master craftsmen.'
  }
];

export default function ServicesPage({ onNavigate }) {
  // In Figma, item 3 is expanded by default
  const [openIndex, setOpenIndex] = useState(3);

  const toggleAccordion = (id) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <div className="bg-white animate-fade-in pb-24">
      
      {/* 1. HERO: "How We Work" Dark Cathedral Arch Banner matching Figma Image 2 */}
      <section className="relative w-full min-h-[540px] sm:min-h-[620px] flex items-center justify-center bg-black overflow-hidden px-6 py-20 text-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-70 scale-100"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1548625361-16a9a7a67926?auto=format&fit=crop&w=1800&q=90')`
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
        <h2 className="font-serif text-3xl sm:text-4xl text-center text-ashara-charcoal font-normal tracking-wide">
          How We Can Help
        </h2>

        {/* Accordion List matching Figma Screen 2 */}
        <div className="border-t border-gray-300 divide-y divide-gray-300">
          {ACCORDION_ITEMS.map((item) => {
            const isOpen = openIndex === item.id;
            return (
              <div key={item.id} className="py-4">
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full flex items-center justify-between text-left py-2 group focus:outline-none"
                >
                  <div className="flex items-baseline gap-2">
                    <span className="font-serif text-xl sm:text-2xl text-ashara-charcoal font-medium">
                      {item.number}
                    </span>
                    <span className="font-serif text-xl sm:text-2xl text-ashara-charcoal font-medium group-hover:text-ashara-teal transition">
                      {item.title}
                    </span>
                  </div>
                  
                  <span className="text-gray-600 group-hover:text-ashara-charcoal transition p-1">
                    {isOpen ? <Minus className="w-4 h-4 stroke-[1.5]" /> : <Plus className="w-4 h-4 stroke-[1.5]" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="pt-2 pb-4 text-xs sm:text-[13px] text-gray-700 font-light leading-relaxed max-w-2xl animate-fade-in pl-6 sm:pl-7">
                    <p>{item.content}</p>
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
            className="inline-block px-10 py-3 border border-gray-900 text-ashara-charcoal text-[11px] uppercase tracking-[0.2em] font-medium hover:bg-ashara-teal hover:text-white hover:border-ashara-teal transition duration-300 shadow-2xs"
          >
            ENQUIRE NOW
          </button>
        </div>
      </section>

      {/* 3. "Recent Projects" Section matching Figma */}
      <section className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 pt-24 sm:pt-32 space-y-12">
        
        {/* Heading with Divider Lines */}
        <div className="flex items-center justify-center gap-6 sm:gap-10">
          <div className="h-[1px] bg-gray-300 flex-1 max-w-[240px]"></div>
          <h3 className="font-serif text-2xl sm:text-3xl text-ashara-charcoal tracking-wide">
            Recent Projects
          </h3>
          <div className="h-[1px] bg-gray-300 flex-1 max-w-[240px]"></div>
        </div>

        {/* 2 Project Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Card 1: Amibara Properties */}
          <div 
            onClick={() => onNavigate('projects')}
            className="group cursor-pointer space-y-3"
          >
            <div className="aspect-[4/3] overflow-hidden bg-gray-100 shadow-xs">
              <img
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85"
                alt="Amibara Properties"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div>
              <h4 className="font-serif text-xl sm:text-2xl text-ashara-charcoal group-hover:text-ashara-teal transition">
                Amibara Properties
              </h4>
              <p className="text-[10px] uppercase tracking-[0.25em] text-gray-500 font-medium mt-0.5">
                PRIVATE COMPANY
              </p>
            </div>
          </div>

          {/* Card 2: Minstry of Revenues */}
          <div 
            onClick={() => onNavigate('projects')}
            className="group cursor-pointer space-y-3"
          >
            <div className="aspect-[4/3] overflow-hidden bg-gray-100 shadow-xs">
              <img
                src="https://images.unsplash.com/photo-1519643381401-22c77e60520e?auto=format&fit=crop&w=1200&q=85"
                alt="Ministry of Revenues"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div>
              <h4 className="font-serif text-xl sm:text-2xl text-ashara-charcoal group-hover:text-ashara-teal transition">
                Minstry of Revenues
              </h4>
              <p className="text-[10px] uppercase tracking-[0.25em] text-gray-500 font-medium mt-0.5">
                GOVERNMENTAL
              </p>
            </div>
          </div>

        </div>

        {/* View All Projects Link */}
        <div className="text-center pt-6">
          <button
            onClick={() => onNavigate('projects')}
            className="text-[10.5px] uppercase tracking-[0.28em] font-semibold text-gray-800 hover:text-ashara-teal transition border-b border-gray-400 pb-0.5"
          >
            VIEW ALL PROJECTS
          </button>
        </div>

      </section>

    </div>
  );
}
