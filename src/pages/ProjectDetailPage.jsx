import React from 'react';
import { ArrowLeft } from 'lucide-react';

export default function ProjectDetailPage({ onNavigate, project }) {
  // Fallback project details
  const activeProject = project || {
    id: 1,
    title: 'Prosperity Party Office',
    subtitle: 'GOVERNMENT SUB-OFFICE',
    description: 'Ashara Interiors was commissioned to design a grand presidential state suite and governmental convention headquarters. Integrating monumental Ethiopian historical references with contemporary civic transparency, the project features bespoke coffered timber acoustic domes, structural cantilevered glass staircases, and executive ceremonial boardrooms.'
  };

  return (
    <div className="bg-white animate-fade-in pb-24">
      
      {/* Back button */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-8 pb-4">
        <button
          onClick={() => onNavigate('projects')}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-gray-600 hover:text-ashara-teal transition"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Projects</span>
        </button>
      </div>

      {/* 1. HERO: Historic Manor / Palace Facade matching Figma Image 5 */}
      <section className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/10] max-h-[640px] overflow-hidden bg-gray-100 shadow-sm">
          <img
            src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1800&q=90"
            alt={activeProject.title}
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* 2. PROJECT TITLE & NARRATIVE (2-Column Layout matching Figma) */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-12 sm:pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Left: Title & Subtitle */}
          <div className="md:col-span-5 space-y-1">
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ashara-charcoal font-normal">
              {activeProject.title}
            </h1>
            <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-semibold">
              {activeProject.subtitle || 'GOVERNMENT SUB-OFFICE'}
            </p>
          </div>

          {/* Right: Architectural Narrative */}
          <div className="md:col-span-7">
            <p className="text-xs sm:text-[13.5px] leading-relaxed sm:leading-loose text-gray-700 font-light">
              {activeProject.description}
            </p>
          </div>

        </div>
      </section>

      {/* 3. FULL-WIDTH FEATURE: Golden Fluted Acoustic Dome Ceiling */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-6">
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/10] max-h-[580px] overflow-hidden bg-black shadow-md">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=90"
            alt="Golden Fluted Dome Ceiling"
            className="w-full h-full object-cover hover:scale-102 transition-transform duration-700"
          />
        </div>
      </section>

      {/* 4. 2-COLUMN IMAGE GRID: Modern Stairs + Executive Boardroom */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          <div className="aspect-[4/3] overflow-hidden bg-gray-100 shadow-xs">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85"
              alt="Floating Glass Balcony Stairs"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="aspect-[4/3] overflow-hidden bg-gray-100 shadow-xs">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85"
              alt="Executive Conference Boardroom"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </section>

      {/* 5. QUOTE BANNER: Daniel Mesfin Quote matching Figma Image 5 */}
      <section className="max-w-4xl mx-auto px-6 py-12 text-center">
        <blockquote className="font-serif italic text-2xl sm:text-3xl lg:text-4xl text-ashara-charcoal leading-relaxed font-light">
          “Design with passion, authenticity, and positivity to create spaces that inspire and uplift the soul.”
        </blockquote>
      </section>

      {/* 6. 2-COLUMN IMAGE GRID: Textured Concrete Hall + Baroque Nave */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          <div className="aspect-[4/3] overflow-hidden bg-gray-100 shadow-xs">
            <img
              src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85"
              alt="Monumental Concrete Hall"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="aspect-[4/3] overflow-hidden bg-gray-100 shadow-xs">
            <img
              src="https://images.unsplash.com/photo-1548625361-16a9a7a67926?auto=format&fit=crop&w=1200&q=85"
              alt="Cathedral Baroque Nave"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </section>

      {/* 7. FULL-WIDTH IMAGE: Modern Cafeteria / Canteen */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-6">
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/10] max-h-[580px] overflow-hidden bg-gray-100 shadow-sm">
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1800&q=90"
            alt="Atelier Canteen & Collaborative Dining"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* 8. ENQUIRE NOW Button (Outlined) */}
      <div className="text-center pt-10 pb-16">
        <button
          onClick={() => onNavigate('contact')}
          className="inline-block px-10 py-3 border border-gray-900 text-ashara-charcoal text-[11px] uppercase tracking-[0.2em] font-medium hover:bg-ashara-teal hover:text-white hover:border-ashara-teal transition duration-300 shadow-2xs"
        >
          ENQUIRE NOW
        </button>
      </div>

      {/* 9. "You May Like" Section matching Figma Image 5 */}
      <section className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 pt-12 space-y-12">
        
        {/* Heading with Divider Lines */}
        <div className="flex items-center justify-center gap-6 sm:gap-10">
          <div className="h-[1px] bg-gray-300 flex-1 max-w-[240px]"></div>
          <h3 className="font-serif text-2xl sm:text-3xl text-ashara-charcoal tracking-wide">
            You May Like
          </h3>
          <div className="h-[1px] bg-gray-300 flex-1 max-w-[240px]"></div>
        </div>

        {/* 2 Project Recommendation Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Card 1: Amibara Properties */}
          <div 
            onClick={() => onNavigate('projects')}
            className="group cursor-pointer space-y-3"
          >
            <div className="aspect-[4/3] overflow-hidden bg-gray-100 shadow-xs">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85"
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
                src="https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1200&q=85"
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

      </section>

    </div>
  );
}
