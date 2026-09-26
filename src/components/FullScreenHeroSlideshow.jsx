import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';

const HERO_SLIDESHOW_SETTINGS = {
  crossFadeDuration: 2000,
  slideInterval: 6000,
  pauseOnHover: false,
};

const DEFAULT_HERO_SLIDES = [
  {
    id: 1,
    tag: 'GOVERNMENT SUB-OFFICE',
    title: 'Prosperity Party Office',
    image: './assets/p1_prosperity.png',
    subtitle: 'GOVERNMENT SUB-OFFICE',
    description: 'Ashara Interiors was commissioned to design a grand presidential state suite and governmental convention headquarters. Integrating monumental Ethiopian historical references with contemporary civic transparency, the project features bespoke coffered timber acoustic domes, structural cantilevered glass staircases, and executive ceremonial boardrooms.'
  },
  {
    id: 2,
    tag: 'GOVERNMENTAL',
    title: 'Ethiopia Federal Police',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=90',
    subtitle: 'GOVERNMENTAL HEADQUARTERS',
    description: 'A modern, high-security civic campus combining robust raw industrial concrete finishes with acoustic modular panels, advanced climate automation, and efficient spatial routing for federal operations.'
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
    title: 'Ministry of Revenues',
    image: './assets/p6_revenues.png',
    subtitle: 'MINISTRY CIVIC COMPLEX',
    description: 'A monumental civic dome auditorium incorporating geodesic timber space trusses, ambient indirect circadian lighting, and custom acoustical plasterwork designed for national assemblies.'
  }
];

export default function FullScreenHeroSlideshow({ onNavigate, onSelectProject }) {
  const [slides, setSlides] = useState(() => {
    try {
      const stored = localStorage.getItem('ashara-projects');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed.slice(0, 6);
        }
      }
    } catch (e) {}
    return DEFAULT_HERO_SLIDES;
  });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [mounted, setMounted] = useState(false);
  const slideIntervalRef = useRef(null);
  const transitionTimeoutRef = useRef(null);

  const totalSlides = slides.length;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (totalSlides === 0) return;
      if (e.key === 'ArrowRight') nextSlide(true);
      else if (e.key === 'ArrowLeft') prevSlide(true);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [totalSlides, nextSlide, prevSlide]);

  const clearTimers = useCallback(() => {
    if (slideIntervalRef.current) clearInterval(slideIntervalRef.current);
    if (transitionTimeoutRef.current) clearTimeout(transitionTimeoutRef.current);
  }, []);

  const [isManualNav, setIsManualNav] = useState(false);

  const nextSlide = useCallback((manual = true) => {
    console.log('nextSlide called', { totalSlides, isTransitioning, currentIndex, manual });
    if (totalSlides <= 1 || isTransitioning) return;
    setIsTransitioning(true);
    setIsManualNav(manual);
    setCurrentIndex((prev) => {
      const next = (prev + 1) % totalSlides;
      console.log('nextSlide index change', { prev, next });
      return next;
    });
    const duration = manual ? 0 : HERO_SLIDESHOW_SETTINGS.crossFadeDuration;
    transitionTimeoutRef.current = setTimeout(() => {
      setIsTransitioning(false);
      setIsManualNav(false);
    }, duration);
  }, [totalSlides, isTransitioning]);

  const prevSlide = useCallback((manual = true) => {
    console.log('prevSlide called', { totalSlides, isTransitioning, currentIndex, manual });
    if (totalSlides <= 1 || isTransitioning) return;
    setIsTransitioning(true);
    setIsManualNav(manual);
    setCurrentIndex((prev) => {
      const next = (prev - 1 + totalSlides) % totalSlides;
      console.log('prevSlide index change', { prev, next });
      return next;
    });
    const duration = manual ? 0 : HERO_SLIDESHOW_SETTINGS.crossFadeDuration;
    transitionTimeoutRef.current = setTimeout(() => {
      setIsTransitioning(false);
      setIsManualNav(false);
    }, duration);
  }, [totalSlides, isTransitioning]);

  const goToSlide = useCallback((index) => {
    if (index === currentIndex || isTransitioning) return;
    setIsTransitioning(true);
    setIsManualNav(true);
    setCurrentIndex(index);
    transitionTimeoutRef.current = setTimeout(() => {
      setIsTransitioning(false);
      setIsManualNav(false);
    }, 0);
  }, [currentIndex, isTransitioning]);

  useEffect(() => {
    if (totalSlides <= 1) return;
    if (HERO_SLIDESHOW_SETTINGS.pauseOnHover && isPaused) return;
    
    slideIntervalRef.current = setInterval(() => {
      nextSlide(false); // Auto-slide uses smooth transition
    }, HERO_SLIDESHOW_SETTINGS.slideInterval);
    
    return () => {
      if (slideIntervalRef.current) clearInterval(slideIntervalRef.current);
    };
  }, [isPaused, totalSlides, nextSlide]);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (!touchStart) return;
    const touchEnd = e.changedTouches[0].clientX;
    const distance = touchStart - touchEnd;
    if (distance > 50) nextSlide(true);
    else if (distance < -50) prevSlide(true);
    setTouchStart(null);
  };

  const activeSlide = slides[currentIndex] || DEFAULT_HERO_SLIDES[0];
  const prevSlideData = slides[(currentIndex - 1 + totalSlides) % totalSlides];
  const nextSlideData = slides[(currentIndex + 1) % totalSlides];

  if (!mounted) {
    return (
      <section className="relative w-full h-screen min-h-[600px] max-h-[900px] overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-ashara-gold/30 border-t-ashara-gold rounded-full animate-spin" />
        </div>
      </section>
    );
  }

  return (
    <>
      <section
        className="relative w-full h-screen min-h-[600px] max-h-[900px] overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            transition: `opacity ${isManualNav ? 0 : HERO_SLIDESHOW_SETTINGS.crossFadeDuration}ms ease-in-out`,
          }}
        >
          {slides.map((slide, idx) => {
            const isActive = idx === currentIndex;
            const isPrev = idx === (currentIndex - 1 + totalSlides) % totalSlides;
            const isNext = idx === (currentIndex + 1) % totalSlides;
            const isVisible = isActive || isPrev || isNext;

            return (
              <div
                key={slide.id}
                className="absolute inset-0"
                style={{
                  opacity: isActive ? 1 : 0,
                  zIndex: isActive ? 10 : isPrev || isNext ? 5 : 0,
                  transition: `opacity ${isManualNav ? 0 : HERO_SLIDESHOW_SETTINGS.crossFadeDuration}ms ease-in-out, z-index 0ms ${isManualNav ? 0 : HERO_SLIDESHOW_SETTINGS.crossFadeDuration}ms`,
                  pointerEvents: isActive ? 'auto' : 'none',
                }}
                aria-hidden={!isActive}
                aria-current={isActive ? 'true' : 'false'}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  loading={idx === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                  fetchPriority={idx === 0 ? 'high' : 'auto'}
                  className="w-full h-full object-cover"
                  style={{
                    transform: isActive ? 'scale(1.02)' : 'scale(1)',
                    transition: `transform ${HERO_SLIDESHOW_SETTINGS.slideInterval}ms ease-out`,
                  }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />
              </div>
            );
          })}
        </div>

        <div className="absolute bottom-10 left-10 right-10 sm:bottom-16 sm:left-16 sm:right-16 lg:bottom-20 lg:left-24 lg:right-24 z-10">
          <div className="max-w-4xl mx-auto">
            <div className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <span className="inline-block text-[10px] sm:text-[11px] uppercase tracking-[0.35em] text-ashara-gold/90 font-medium mb-3 block">
                {activeSlide.tag}
              </span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-white leading-tight tracking-tight animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              {activeSlide.title}
            </h1>
            <div className="mt-8 flex items-center gap-4 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <button
                onClick={() => onSelectProject && onSelectProject(activeSlide)}
                className="px-8 py-3.5 bg-ashara-gold/10 hover:bg-ashara-gold/20 border border-ashara-gold/50 hover:border-ashara-gold text-white text-[11px] uppercase tracking-[0.25em] font-semibold rounded-full transition-all duration-500 backdrop-blur-sm hover:scale-105 focus:outline-none focus:ring-2 focus:ring-ashara-gold focus:ring-offset-2 focus:ring-offset-black"
              >
                Explore Project
              </button>
            </div>
          </div>
        </div>

        <button
          onClick={(e) => { console.log('prev arrow clicked', e); prevSlide(); }}
          aria-label="Previous Project"
          className="absolute left-6 top-1/2 -translate-y-1/2 z-30 p-3 sm:p-4 rounded-full bg-black/30 hover:bg-black/50 backdrop-blur-md text-white transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-ashara-gold flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 cursor-pointer"
        >
          <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
        </button>

        <button
          onClick={(e) => { console.log('next arrow clicked', e); nextSlide(); }}
          aria-label="Next Project"
          className="absolute right-6 top-1/2 -translate-y-1/2 z-30 p-3 sm:p-4 rounded-full bg-black/30 hover:bg-black/50 backdrop-blur-md text-white transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-ashara-gold flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 cursor-pointer"
        >
          <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
        </button>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
          <div className="flex gap-1.5">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-500 cursor-pointer ${
                  idx === currentIndex
                    ? 'bg-ashara-gold w-10 sm:w-12'
                    : 'bg-white/40 hover:bg-white'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
                aria-current={idx === currentIndex ? 'true' : 'false'}
              />
            ))}
          </div>
          <div
            onClick={() => {
              const el = document.getElementById('home-works');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="cursor-pointer"
          >
            <ChevronDown className="w-5 h-5 text-ashara-gold animate-bounce" />
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          opacity: 0;
        }
      `}</style>
    </>
  );
}