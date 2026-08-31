import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ClientsSection from '../components/ClientsSection';
import { PROJECTS_LIST } from './ProjectsPage';

const HERO_SLIDES = [
  {
    id: 2,
    tag: 'GOVERNMENTAL',
    title: 'Ethiopia Federal Police',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=90',
    subtitle: 'GOVERNMENTAL HEADQUARTERS',
    description: 'A modern, high-security civic campus combining robust raw industrial concrete finishes with acoustic modular panels, advanced climate automation, and efficient spatial routing for federal operations.'
  },
  {
    id: 1,
    tag: 'GOVERNMENT SUB-OFFICE',
    title: 'Prosperity Party Office',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1800&q=90',
    subtitle: 'GOVERNMENT SUB-OFFICE',
    description: 'Ashara Interiors was commissioned to design a grand presidential state suite and governmental convention headquarters. Integrating monumental Ethiopian historical references with contemporary civic transparency, the project features bespoke coffered timber acoustic domes, structural cantilevered glass staircases, and executive ceremonial boardrooms.'
  },
  {
    id: 3,
    tag: 'PRIVATE ORGANIZATION',
    title: 'Fana Broadcasting Corporation',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85',
    subtitle: 'BROADCASTING & MEDIA ATELIER',
    description: 'A cutting-edge television and multimedia broadcast hub featuring circular parametric acoustic galleries, sound-isolated live recording suites, and sunlit collaborative editing studios.'
  },
  {
    id: 4,
    tag: 'PRIVATE CORPORATION',
    title: 'United Beverages',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=85',
    subtitle: 'CORPORATE HEAD OFFICE',
    description: 'A grand neoclassical corporate palace featuring double-height marble entrance colonnades, gilded brass details, and private executive lounges that embody prestige and longevity.'
  },
  {
    id: 5,
    tag: 'PRIVATE COMPANY',
    title: 'Amibara Properties',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1800&q=85',
    subtitle: 'COMMERCIAL REAL ESTATE HQ',
    description: 'A dual-level contemporary commercial showpiece with dramatic glass-cantilevered staircase architecture, polished Italian terrazzo flooring, and floor-to-ceiling panoramic facade glazing.'
  },
  {
    id: 6,
    tag: 'GOVERNMENTAL',
    title: 'Minstry of Revenues',
    image: 'https://images.unsplash.com/photo-1548625361-16a9a7a67926?auto=format&fit=crop&w=1800&q=90',
    subtitle: 'MINISTRY CIVIC COMPLEX',
    description: 'A monumental civic dome auditorium incorporating geodesic timber space trusses, ambient indirect circadian lighting, and custom acoustical plasterwork designed for national assemblies.'
  }
];

export default function HomePage({ onNavigate, onSelectProject }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-switch slides every 5.5s unless hovered
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const nextSlide = (e) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = (e) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const handleHeroClick = () => {
    const slide = HERO_SLIDES[currentSlide];
    const project = PROJECTS_LIST.find((p) => p.id === slide.id) || slide;
    if (onSelectProject) {
      onSelectProject(project);
    }
    onNavigate('project-detail');
  };

  const works = [
    {
      id: 1,
      tag: 'GOVERNMENTAL',
      title: 'Prosperity Party Office',
      image: 'https://images.unsplash.com/photo-1548625361-16a9a7a67926?auto=format&fit=crop&w=1200&q=85',
      subtitle: 'GOVERNMENT SUB-OFFICE',
      description: 'Ashara Interiors was commissioned to design a grand presidential state suite and governmental convention headquarters. Integrating monumental Ethiopian historical references with contemporary civic transparency, the project features bespoke coffered timber acoustic domes, structural cantilevered glass staircases, and executive ceremonial boardrooms.'
    },
    {
      id: 2,
      tag: 'GOVERNMENTAL',
      title: 'Ethiopia Federal Police',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85',
      subtitle: 'GOVERNMENTAL HEADQUARTERS',
      description: 'A modern, high-security civic campus combining robust raw industrial concrete finishes with acoustic modular panels, advanced climate automation, and efficient spatial routing for federal operations.'
    },
    {
      id: 3,
      tag: 'PRIVATE',
      title: 'Fana Broadcasting Corporation',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
      subtitle: 'BROADCASTING & MEDIA ATELIER',
      description: 'A cutting-edge television and multimedia broadcast hub featuring circular parametric acoustic galleries, sound-isolated live recording suites, and sunlit collaborative editing studios.'
    },
    {
      id: 4,
      tag: 'COMMERCIAL',
      title: 'United Beverages',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85',
      subtitle: 'CORPORATE HEAD OFFICE',
      description: 'A grand neoclassical corporate palace featuring double-height marble entrance colonnades, gilded brass details, and private executive lounges that embody prestige and longevity.'
    }
  ];

  const handleCardClick = (work) => {
    const project = PROJECTS_LIST.find((p) => p.id === work.id) || work;
    if (onSelectProject) {
      onSelectProject(project);
    }
    onNavigate('project-detail');
  };

  const activeProject = HERO_SLIDES[currentSlide];

  return (
    <div className="bg-white dark:bg-ashara-dark animate-fade-in space-y-16 sm:space-y-24 pb-24 transition-colors duration-300">
      
      {/* 1. HERO BANNER: Clean luxury carousel with subtle on-hover arrows only */}
      <section className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-4">
        <div 
          onClick={handleHeroClick}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="group relative cursor-pointer w-full aspect-[16/10] sm:aspect-[21/11] max-h-[700px] overflow-hidden bg-black shadow-md select-none"
        >
          {/* Sliding Track (Rolling Carousel) */}
          <div 
            className="flex w-full h-full transition-transform duration-700 ease-out"
            style={{ transform: `translate3d(-${currentSlide * 100}%, 0, 0)` }}
          >
            {HERO_SLIDES.map((slide) => (
              <div
                key={slide.id}
                className="w-full h-full shrink-0 relative"
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Luxury Gradient Overlay matching Figma */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none z-10"></div>

          {/* Bottom-Left Overlay Text matching Figma exactly */}
          <div 
            key={currentSlide}
            className="absolute bottom-8 left-8 sm:bottom-12 sm:left-12 text-white space-y-1.5 z-20 animate-fade-in"
          >
            <span className="text-[9.5px] sm:text-[10px] uppercase tracking-[0.3em] text-white/80 font-medium block">
              {activeProject.tag}
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-white tracking-normal leading-tight">
              {activeProject.title}
            </h1>
          </div>

          {/* Rolling Slide Indicators (Dots/Pills) */}
          <div className="absolute bottom-8 right-8 sm:bottom-12 sm:right-12 z-20 flex items-center gap-2 select-none">
            {HERO_SLIDES.map((_, idx) => {
              const isActive = idx === currentSlide;
              return (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentSlide(idx);
                  }}
                  className={`h-1.5 transition-all duration-300 rounded-full focus:outline-none ${
                    isActive 
                      ? 'w-7 bg-ashara-gold' 
                      : 'w-2 bg-white/50 hover:bg-white'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              );
            })}
          </div>

          {/* Left Arrow Navigation Button (Visible on Hover Only) */}
          <button
            onClick={prevSlide}
            aria-label="Previous Project"
            className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3 rounded-full bg-black/30 hover:bg-ashara-teal/80 text-white backdrop-blur-md transition-all duration-300 opacity-0 group-hover:opacity-100 focus:opacity-100"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Right Arrow Navigation Button (Visible on Hover Only) */}
          <button
            onClick={nextSlide}
            aria-label="Next Project"
            className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3 rounded-full bg-black/30 hover:bg-ashara-teal/80 text-white backdrop-blur-md transition-all duration-300 opacity-0 group-hover:opacity-100 focus:opacity-100"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
      </section>

      {/* 2. PHILOSOPHY QUOTE SECTION matching Figma */}
      <section className="max-w-4xl mx-auto px-6 text-center space-y-3 pt-4 sm:pt-8">
        <p className="text-[9.5px] sm:text-[10px] uppercase tracking-[0.32em] text-ashara-teal dark:text-ashara-gold font-semibold transition-colors duration-300">
          PHILOSOPHY
        </p>
        
        <blockquote className="font-serif italic text-2xl sm:text-4xl lg:text-[40px] text-ashara-charcoal dark:text-ashara-sand leading-relaxed font-light py-2 transition-colors duration-300">
          “Design with passion, authenticity, and positivity to create spaces that inspire and uplift the soul.”
        </blockquote>
      </section>

      {/* 3. "OUR WORKS" 2x2 GRID SECTION matching Figma Image */}
      <section className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 space-y-12">
        
        {/* Header with Divider Lines */}
        <div className="flex items-center justify-center gap-6 sm:gap-10">
          <div className="h-[1px] bg-gray-300 dark:bg-white/10 flex-1 max-w-[240px]"></div>
          <h2 className="font-serif text-3xl sm:text-4xl text-ashara-charcoal dark:text-white tracking-wide transition-colors duration-300">
            Our Works
          </h2>
          <div className="h-[1px] bg-gray-300 dark:bg-white/10 flex-1 max-w-[240px]"></div>
        </div>

        {/* 2x2 Grid with Solid Teal Bottom Label Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {works.map((item) => (
            <div
              key={item.id}
              onClick={() => handleCardClick(item)}
              className="group relative cursor-pointer aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-ashara-charcoal shadow-sm hover:shadow-md transition-all duration-500"
            >
              {/* Photo */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Bottom Teal Label Box matching Figma */}
              <div className="absolute inset-x-0 bottom-0 bg-ashara-teal/90 dark:bg-ashara-teal/95 backdrop-blur-[2px] p-5 sm:p-6 text-white transition-all duration-300">
                <span className="text-[8.5px] sm:text-[9px] uppercase tracking-[0.28em] text-white/80 font-medium block">
                  {item.tag}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-normal mt-0.5 text-white">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Link */}
        <div className="text-center pt-4">
          <button
            onClick={() => onNavigate('projects')}
            className="text-[10.5px] uppercase tracking-[0.28em] font-semibold text-gray-800 dark:text-gray-200 hover:text-ashara-teal dark:hover:text-ashara-gold transition border-b border-gray-400 dark:border-white/20 pb-0.5"
          >
            VIEW ALL PROJECTS
          </button>
        </div>

      </section>

      {/* 4. OUR CLIENTS & TESTIMONIAL SECTION */}
      <ClientsSection />

    </div>
  );
}
