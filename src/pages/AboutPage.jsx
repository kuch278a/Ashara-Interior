import React from 'react';
import { DEFAULT_PROJECTS_LIST } from '../data/defaultData';

export default function AboutPage({ onNavigate, onSelectProject, isSection = false }) {
  const handleProjectClick = (projId) => {
    const proj = DEFAULT_PROJECTS_LIST.find((p) => p.id === projId) || DEFAULT_PROJECTS_LIST[0];
    if (onSelectProject) {
      onSelectProject(proj);
    } else if (onNavigate) {
      onNavigate('projects');
    }
  };

  return (
    <div className="bg-transparent animate-fade-in transition-colors duration-300">
      
      {/* 1. HERO: Glass Facade & Sky Banner matching Figma Image 4 */}
      <section className="relative w-full min-h-[420px] sm:min-h-[480px] flex items-center justify-center bg-gray-900 overflow-hidden px-6 py-20 text-center">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-85"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=90')`
          }}
        ></div>
        
        <div className="absolute inset-0 bg-sky-950/20 backdrop-blur-[0.5px]"></div>

        {/* Hero Title Overlay */}
        <div className="relative z-10 space-y-2 text-ashara-charcoal">
          <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.32em] text-ashara-teal dark:text-ashara-gold font-semibold">
            OUR COMPANY
          </p>
          <h1 className="font-serif text-4xl sm:text-6xl text-ashara-charcoal dark:text-white font-normal tracking-wide transition-colors duration-300">
            About Us
          </h1>
        </div>
      </section>

      {/* 2. 2-COLUMN INTRO SECTION matching Figma Screen 4 */}
      <section className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 pt-20 sm:pt-24 pb-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-14 items-start">
          
          {/* Left: Heading & Script Accent */}
          <div className="md:col-span-5 space-y-2">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ashara-charcoal dark:text-white font-normal leading-tight transition-colors duration-300">
              Transforming spaces into timeless, elegant environments.
            </h2>
            <p className="font-script text-2xl sm:text-3xl text-ashara-teal dark:text-ashara-gold pt-2 transition-colors duration-300">
              elevating human experiences
            </p>
          </div>

          {/* Right: Body Narrative */}
          <div className="md:col-span-7 space-y-5 text-gray-700 dark:text-gray-300 font-light text-xs sm:text-[13.5px] leading-relaxed transition-colors duration-300">
            <p>
              Ashara Interiors is a premier interior architecture and design atelier rooted in Addis Ababa, Ethiopia. We specialize in high-end governmental complexes, prestigious corporate headquarters, luxury residential retreats, and bespoke commercial environments.
            </p>
            <p>
              Our philosophy bridges Ethiopian neoclassical grandeur with contemporary European minimalism. Every space we sculpt is meticulously tailored with custom timber craftsmanship, refined acoustic engineering, and timeless marble textures designed to inspire for generations.
            </p>
          </div>

        </div>
      </section>

      {/* 3. FULL-WIDTH FEATURE BANNER: Concrete Atrium & Floating Stairs */}
      <section className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-8">
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/10] max-h-[560px] overflow-hidden bg-gray-100 dark:bg-ashara-charcoal shadow-sm">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=90"
            alt="Ashara Design Atelier Workspace"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* 4. CORE VALUES / THREE PILLARS matching Figma */}
      <section className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-8 text-center md:text-left">
          
          <div className="space-y-3">
            <span className="font-serif text-3xl sm:text-4xl text-ashara-teal dark:text-ashara-gold font-light">01</span>
            <h3 className="font-serif text-xl sm:text-2xl text-ashara-charcoal dark:text-white transition-colors duration-300">
              Authentic Heritage
            </h3>
            <p className="text-xs sm:text-[13px] leading-relaxed text-gray-600 dark:text-gray-300 font-light transition-colors duration-300">
              Integrating authentic local materials, bespoke indigenous timber craft, and cultural geometries into modern architectural contexts.
            </p>
          </div>

          <div className="space-y-3">
            <span className="font-serif text-3xl sm:text-4xl text-ashara-teal dark:text-ashara-gold font-light">02</span>
            <h3 className="font-serif text-xl sm:text-2xl text-ashara-charcoal dark:text-white transition-colors duration-300">
              Architectural Rigor
            </h3>
            <p className="text-xs sm:text-[13px] leading-relaxed text-gray-600 dark:text-gray-300 font-light transition-colors duration-300">
              Precision acoustic calculations, sustainable climate zoning, and seamless structural integration across large-scale civic projects.
            </p>
          </div>

          <div className="space-y-3">
            <span className="font-serif text-3xl sm:text-4xl text-ashara-teal dark:text-ashara-gold font-light">03</span>
            <h3 className="font-serif text-xl sm:text-2xl text-ashara-charcoal dark:text-white transition-colors duration-300">
              Bespoke Execution
            </h3>
            <p className="text-xs sm:text-[13px] leading-relaxed text-gray-600 dark:text-gray-300 font-light transition-colors duration-300">
              Turnkey delivery from schematic concept to master joinery installation, ensuring flawless luxury execution within tight timelines.
            </p>
          </div>

        </div>
      </section>

      {/* 5. QUOTE BANNER matching Figma Image 4 */}
      <section className="max-w-4xl mx-auto px-6 py-12 text-center">
        <blockquote className="font-serif italic text-2xl sm:text-3xl lg:text-4xl text-ashara-charcoal dark:text-white leading-relaxed font-light transition-colors duration-300">
          “Architecture should speak of its time and place, but yearn for timelessness.”
        </blockquote>
      </section>

      {/* 6. "Recent Projects" Section matching Figma Image 4 */}
      <section className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 pt-12 space-y-12">
        
        {/* Heading with Divider Lines */}
        <div className="flex items-center justify-center gap-6 sm:gap-10">
          <div className="h-[1px] bg-gray-300 dark:bg-white/10 flex-1 max-w-[240px]"></div>
          <h3 className="font-serif text-2xl sm:text-3xl text-ashara-charcoal dark:text-white tracking-wide transition-colors duration-300">
            Recent Projects
          </h3>
          <div className="h-[1px] bg-gray-300 dark:bg-white/10 flex-1 max-w-[240px]"></div>
        </div>

        {/* 2 Project Cards with Solid Teal Label Box */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Card 1: Amibara Properties */}
          <div 
            onClick={() => handleProjectClick(5)}
            className="group relative cursor-pointer aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-ashara-charcoal shadow-sm hover:shadow-md transition-all duration-500"
          >
            <img
              src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85"
              alt="Amibara Properties"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-x-0 bottom-0 bg-ashara-teal/95 dark:bg-ashara-teal/95 backdrop-blur-[2px] p-5 sm:p-6 text-white transition-all duration-300">
              <span className="text-[8.5px] sm:text-[9px] uppercase tracking-[0.28em] text-white/80 font-medium block">
                PRIVATE COMPANY
              </span>
              <h4 className="font-serif text-xl sm:text-2xl font-normal mt-0.5 text-white">
                Amibara Properties
              </h4>
            </div>
          </div>

          {/* Card 2: Ministry of Revenues */}
          <div 
            onClick={() => handleProjectClick(6)}
            className="group relative cursor-pointer aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-ashara-charcoal shadow-sm hover:shadow-md transition-all duration-500"
          >
            <img
              src="./assets/p6_revenues.png"
              alt="Ministry of Revenues"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-x-0 bottom-0 bg-ashara-teal/95 dark:bg-ashara-teal/95 backdrop-blur-[2px] p-5 sm:p-6 text-white transition-all duration-300">
              <span className="text-[8.5px] sm:text-[9px] uppercase tracking-[0.28em] text-white/80 font-medium block">
                GOVERNMENTAL
              </span>
              <h4 className="font-serif text-xl sm:text-2xl font-normal mt-0.5 text-white">
                Ministry of Revenues
              </h4>
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
