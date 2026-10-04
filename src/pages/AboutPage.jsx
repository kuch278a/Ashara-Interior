import React from 'react';
import { DEFAULT_PROJECTS_LIST } from '../data/defaultData';
import asset_1 from '../assets/p6_revenues.png';

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
    <div className="bg-white min-h-screen animate-fade-in transition-colors duration-300">
      
      {/* 1. HERO IMAGE WITH TEXT OVERLAY */}
      <section className="w-full">
        <div className="relative w-full h-screen min-h-[500px] bg-black flex flex-col items-center justify-center text-center">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-80"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=85')` }}
          />
          <div className="relative z-10 space-y-2 text-white">
            <span className="text-[9px] uppercase tracking-[0.3em] font-semibold">
              WE CREATE
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-normal">
              About Us
            </h1>
          </div>
        </div>
      </section>

      {/* 2. TWO COLUMN INTRO */}
      <section className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="md:col-span-5">
            <h2 className="font-serif italic text-3xl sm:text-4xl text-gray-500 font-light leading-tight">
              We create luxury interiors that stand the test of time.
            </h2>
          </div>
          <div className="md:col-span-7 space-y-6 text-[13px] leading-relaxed text-gray-600 font-light">
            <p>
              Ashara Interiors is a premier interior architecture and design atelier rooted in Addis Ababa, Ethiopia. We specialize in high-end governmental complexes, prestigious corporate headquarters, luxury residential retreats, and bespoke commercial environments.
            </p>
            <p>
              Our philosophy bridges Ethiopian neoclassical grandeur with contemporary European minimalism. Every space we sculpt is meticulously tailored with custom timber craftsmanship, refined acoustic engineering, and timeless marble textures designed to inspire for generations.
            </p>
          </div>
        </div>
      </section>

      {/* 3. FULL WIDTH IMAGE */}
      <section className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 pb-20">
        <div className="w-full aspect-[21/9] overflow-hidden bg-gray-200">
          <img
            src={asset_1}
            alt="Interior View"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* 4. OUR MISSION (Text Left, Image Right) */}
      <section className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 pb-12">
        <div className="bg-[#EBF2F2] grid grid-cols-1 md:grid-cols-2">
          <div className="p-10 lg:p-16 flex flex-col justify-center">
            <div className="flex items-center gap-6 mb-6">
              <h3 className="font-serif text-2xl text-ashara-charcoal font-normal whitespace-nowrap">Our Mission</h3>
              <div className="h-[1px] bg-gray-300 flex-1"></div>
            </div>
            <div className="space-y-4 text-[13px] leading-relaxed text-gray-600 font-light">
              <p>
                At Ashara Interiors, our mission is to elevate the human experience through exceptional spatial design. We are dedicated to creating environments that not only reflect the unique identity and aspirations of our clients but also foster well-being, productivity, and inspiration. 
              </p>
              <p>
                By blending innovative architecture with timeless aesthetics, we strive to deliver sustainable and functional spaces that stand as a testament to unparalleled craftsmanship and visionary design.
              </p>
            </div>
          </div>
          <div className="h-[300px] md:h-auto">
            <img
              src={asset_1}
              alt="Our Mission"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 5. OUR VISION (Image Left, Text Right) */}
      <section className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 pb-24">
        <div className="bg-[#EBF2F2] grid grid-cols-1 md:grid-cols-2">
          <div className="h-[300px] md:h-auto order-last md:order-first">
            <img
              src={asset_1}
              alt="Our Vision"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-10 lg:p-16 flex flex-col justify-center">
            <div className="flex items-center gap-6 mb-6">
              <div className="h-[1px] bg-gray-300 flex-1"></div>
              <h3 className="font-serif text-2xl text-ashara-charcoal font-normal whitespace-nowrap">Our Vision</h3>
            </div>
            <div className="space-y-4 text-[13px] leading-relaxed text-gray-600 font-light">
              <p>
                Our vision is to be the leading force in luxury interior architecture across Africa and beyond. We envision a future where our designs set the global standard for elegance and innovation.
              </p>
              <p>
                We aim to continuously push the boundaries of design, integrating advanced technologies with traditional artistry. Ultimately, our goal is to leave a lasting legacy of beautiful, enduring spaces that enrich the lives of those who inhabit them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. RECENT PROJECTS SECTION */}
      {!isSection && (
        <section className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 pt-8 pb-24 space-y-12 text-center">
          
          {/* Title with horizontal lines */}
          <div className="flex items-center justify-center gap-6">
            <div className="h-[1px] bg-gray-300 flex-1 max-w-[120px]"></div>
            <h3 className="font-serif text-2xl sm:text-3xl text-ashara-charcoal font-normal">
              Recent Projects
            </h3>
            <div className="h-[1px] bg-gray-300 flex-1 max-w-[120px]"></div>
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
                <h4 className="font-serif text-xl sm:text-2xl text-ashara-charcoal mb-1 group-hover:text-ashara-teal transition-colors">
                  Amibara Properties
                </h4>
                <span className="text-[9px] uppercase tracking-[0.2em] text-gray-500 font-medium">
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
                  src={asset_1}
                  alt="Ministry of Revenues"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div>
                <h4 className="font-serif text-xl sm:text-2xl text-ashara-charcoal mb-1 group-hover:text-ashara-teal transition-colors">
                  Ministry of Revenues
                </h4>
                <span className="text-[9px] uppercase tracking-[0.2em] text-gray-500 font-medium">
                  GOVERNMENTAL
                </span>
              </div>
            </article>

          </div>

          {/* View All Projects Link */}
          <div className="pt-12 text-center">
            <button 
              onClick={() => onNavigate && onNavigate('projects')}
              className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] font-semibold text-gray-500 hover:text-ashara-teal transition-colors"
            >
              VIEW ALL PROJECTS <span className="text-[12px] leading-none mb-0.5">&gt;</span>
            </button>
          </div>

        </section>
      )}

    </div>
  );
}
