import React from 'react';

export default function AboutPage({ onNavigate }) {
  return (
    <div className="bg-white animate-fade-in pb-24">
      
      {/* 1. HERO: Glass Facade & Sky Banner matching Figma Image 4 */}
      <section className="relative w-full min-h-[460px] sm:min-h-[540px] flex items-center justify-center bg-gray-900 overflow-hidden px-6 py-20 text-center">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-85"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=90')`
          }}
        ></div>
        
        <div className="absolute inset-0 bg-sky-950/20 backdrop-blur-[0.5px]"></div>

        {/* Hero Title Overlay */}
        <div className="relative z-10 space-y-2 text-ashara-charcoal">
          <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.32em] text-ashara-teal font-semibold">
            OUR COMPANY
          </p>
          <h1 className="font-serif text-4xl sm:text-6xl text-ashara-charcoal font-normal tracking-wide">
            About Us
          </h1>
        </div>
      </section>

      {/* 2. 2-COLUMN INTRO SECTION matching Figma Screen 4 */}
      <section className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 pt-20 sm:pt-24 pb-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-14 items-start">
          
          {/* Left Column: Italic Serif Callout */}
          <div className="md:col-span-5">
            <h2 className="font-serif italic text-3xl sm:text-4xl text-ashara-charcoal leading-snug font-light">
              We create luxury interiors that stand the test of time
            </h2>
          </div>

          {/* Right Column: Narrative */}
          <div className="md:col-span-7">
            <p className="text-xs sm:text-[13.5px] leading-relaxed sm:leading-loose text-gray-700 font-light">
              Our interiors encompass residential and commercial projects and great pride is taken in bespoke tailored creations to a high level, bespoke designs made exclusively for you. Based in Addis Ababa and specialized in luxury interior design, architecture, and turnkey delivery, we are deeply passionate about translating cultural heritage into inspiring modern sanctuaries.
            </p>
          </div>

        </div>
      </section>

      {/* 3. FULL-WIDTH FEATURE IMAGE: Heritage Woodcraft Stalls */}
      <section className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-6">
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/10] max-h-[580px] overflow-hidden bg-gray-100 shadow-xs">
          <img
            src="https://images.unsplash.com/photo-1519643381401-22c77e60520e?auto=format&fit=crop&w=1800&q=90"
            alt="Handcrafted Woodwork Confessionals"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* 4. ZIG-ZAG MISSION & VISION SECTION matching Figma Image 4 */}
      <section className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 pt-16 space-y-12 sm:space-y-16">
        
        {/* Row 1: "Our Mission" (Left) + Cathedral Photo (Right) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Mission Card */}
          <div className="bg-[#EBF2F2] p-8 sm:p-10 border-t-2 border-ashara-teal/60 space-y-4 shadow-2xs">
            <h3 className="font-serif text-2xl sm:text-3xl text-ashara-charcoal font-normal">
              Our Mission
            </h3>
            <p className="text-xs sm:text-[12.5px] leading-relaxed text-gray-700 font-light">
              Established in 2018 by founder Sophia Mesfin, Ashara Interiors has evolved into a premier luxury atelier. We create spaces that celebrate classical proportions, tactile materiality, and contemporary clarity, offering our clients an end-to-end bespoke journey rooted in mutual trust and enduring quality.
            </p>
          </div>

          {/* Cathedral Photo 1 */}
          <div className="aspect-[4/3] sm:aspect-[5/4] overflow-hidden bg-gray-100 shadow-xs">
            <img
              src="https://images.unsplash.com/photo-1548625361-16a9a7a67926?auto=format&fit=crop&w=1200&q=85"
              alt="Cathedral Architecture Detail"
              className="w-full h-full object-cover hover:scale-103 transition-transform duration-700"
            />
          </div>

        </div>

        {/* Row 2: Cathedral Photo (Left) + "Our Vision" (Right) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Cathedral Photo 2 */}
          <div className="order-2 md:order-1 aspect-[4/3] sm:aspect-[5/4] overflow-hidden bg-gray-100 shadow-xs">
            <img
              src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85"
              alt="Sacred Interior Space"
              className="w-full h-full object-cover hover:scale-103 transition-transform duration-700"
            />
          </div>

          {/* Vision Card */}
          <div className="order-1 md:order-2 bg-[#EBF2F2] p-8 sm:p-10 border-t-2 border-ashara-teal/60 space-y-4 shadow-2xs">
            <h3 className="font-serif text-2xl sm:text-3xl text-ashara-charcoal font-normal">
              Our Vision
            </h3>
            <p className="text-xs sm:text-[12.5px] leading-relaxed text-gray-700 font-light">
              To shape the architectural landscape of East Africa and beyond through timeless craftsmanship, sustainable innovation, and spaces that uplift human connection. We strive to be the benchmark for transformative civic, commercial, and residential environments.
            </p>
          </div>

        </div>

      </section>

      {/* 5. "Recent Projects" Section matching Figma */}
      <section className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 pt-24 sm:pt-32 space-y-12">
        
        {/* Heading with Divider Lines */}
        <div className="flex items-center justify-center gap-6 sm:gap-10">
          <div className="h-[1px] bg-gray-300 flex-1 max-w-[240px]"></div>
          <h3 className="font-serif text-2xl sm:text-3xl text-ashara-charcoal tracking-wide">
            Recent Projects
          </h3>
          <div className="h-[1px] bg-gray-300 flex-1 max-w-[240px]"></div>
        </div>

        {/* 2 Project Cards */}
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
