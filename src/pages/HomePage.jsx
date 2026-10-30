import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowUp, ChevronDown } from 'lucide-react';
import ClientsSection from '../components/ClientsSection';
import Footer from '../components/Footer';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import useTouchSwipe from '../hooks/useTouchSwipe';
import { DEFAULT_TESTIMONIALS_LIST } from '../data/defaultData';
import { getInitialProjects, subscribeToProjects, getInitialTestimonials, subscribeToTestimonials } from '../services/firebaseService';

// Map CMS testimonials (quote/clientName/organization) to the carousel shape (quote/author/company).
// Featured testimonials take priority; falls back to all, then to the CMS defaults.
const toCarouselTestimonials = (list) => {
  const mapItem = (t) => ({
    quote: t.quote,
    author: t.clientName || t.author || '',
    company: t.organization || t.company || ''
  });
  const pick = (source) => {
    const items = Array.isArray(source) ? source : [];
    const featured = items.filter((t) => t.isFeatured);
    const chosen = featured.length > 0 ? featured : items;
    return chosen.map(mapItem).filter((t) => t.quote);
  };
  const mapped = pick(list);
  return mapped.length > 0 ? mapped : pick(DEFAULT_TESTIMONIALS_LIST);
};

export default function HomePage({ onNavigate, onSelectProject }) {
  const [works, setWorks] = useState(() => getInitialProjects());
  const [testimonials, setTestimonials] = useState(() => toCarouselTestimonials(getInitialTestimonials()));
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHeroPaused, setIsHeroPaused] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isTestimonialPaused, setIsTestimonialPaused] = useState(false);
  const resumeTimersRef = useRef([]);

  useEffect(() => {
    const timers = resumeTimersRef.current;
    return () => {
      timers.forEach((t) => clearTimeout(t));
    };
  }, []);

  const explicitHeroWorks = works.filter(w => w.isHero);
  const heroWorks = explicitHeroWorks.length > 0 ? explicitHeroWorks : works.slice(0, 10);

  const explicitAccordionWorks = works.filter(w => w.isOurWorks);
  const fallbackAccordionWorks = works.length > 10 ? works.slice(10, 16) : works.slice(0, 6);
  const baseAccordionWorks = explicitAccordionWorks.length > 0 ? explicitAccordionWorks : fallbackAccordionWorks;
  // Our Works always shows exactly 6 images: cap longer lists, top up shorter ones from the rest
  const accordionWorks = baseAccordionWorks.length >= 6
    ? baseAccordionWorks.slice(0, 6)
    : [...baseAccordionWorks, ...works.filter(w => !baseAccordionWorks.some(b => String(b.id) === String(w.id)))].slice(0, 6);

  // Keep the slide index valid when the testimonial list changes from the CMS
  const activeTestimonial = testimonials.length > 0 ? currentTestimonial % testimonials.length : 0;
  // Keep the hero slide index valid when the project list changes from the CMS
  const activeHeroSlide = heroWorks.length > 0 ? currentSlide % heroWorks.length : 0;

  // Pause auto-advance and resume after a delay (mirrors the accordion indicator pattern)
  const scheduleResume = (setter) => {
    setter(true);
    const timer = setTimeout(() => setter(false), 5000);
    resumeTimersRef.current.push(timer);
  };

  const pauseAndResumeTestimonials = () => scheduleResume(setIsTestimonialPaused);
  const pauseAndResumeHero = () => scheduleResume(setIsHeroPaused);

  const heroSwipe = useTouchSwipe((direction) => {
    const heroLen = heroWorks.length;
    if (heroLen > 0) {
      setCurrentSlide((prev) =>
        direction > 0 ? (prev + 1) % heroLen : (prev - 1 + heroLen) % heroLen
      );
      pauseAndResumeHero();
    }
  });

  const testimonialSwipe = useTouchSwipe((direction) => {
    setCurrentTestimonial((prev) =>
      direction > 0
        ? (prev + 1) % testimonials.length
        : (prev - 1 + testimonials.length) % testimonials.length
    );
    pauseAndResumeTestimonials();
  }, { followDrag: true });

  useEffect(() => {
    if (isTestimonialPaused || testimonialSwipe.isDragging) return;
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isTestimonialPaused, testimonialSwipe.isDragging, testimonials.length]);

  const nextSlide = () => {
    const heroLen = heroWorks.length;
    if (heroLen > 0) setCurrentSlide((prev) => (prev + 1) % heroLen);
  };

  const prevSlide = () => {
    const heroLen = heroWorks.length;
    if (heroLen > 0) setCurrentSlide((prev) => (prev - 1 + heroLen) % heroLen);
  };

  // Optional: Auto-advance slides every 6 seconds
  useEffect(() => {
    const heroLen = heroWorks.length;
    if (heroLen <= 1 || isHeroPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroLen);
    }, 6000);
    return () => clearInterval(timer);
  }, [works, isHeroPaused]);

  useEffect(() => {
    const unsubscribe = subscribeToProjects((data) => {
      if (Array.isArray(data)) {
        const sorted = [...data].sort((a, b) => {
          if (a.updatedAt && b.updatedAt) {
            const dateA = new Date(a.updatedAt).getTime();
            const dateB = new Date(b.updatedAt).getTime();
            if (dateA !== dateB) return dateB - dateA;
          }
          const numericA = Number(a.id);
          const numericB = Number(b.id);
          if (!Number.isNaN(numericA) && !Number.isNaN(numericB)) {
            return numericA - numericB;
          }
          return String(a.id).localeCompare(String(b.id));
        });
        setWorks(sorted);
      }
    });
    return () => {
      if (typeof unsubscribe === 'function') unsubscribe();
    };
  }, []);

  useEffect(() => {
    const unsubscribe = subscribeToTestimonials((data) => {
      setTestimonials(toCarouselTestimonials(data));
    });
    return () => {
      if (typeof unsubscribe === 'function') unsubscribe();
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 450) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCardClick = (work) => {
    if (onSelectProject) {
      if (work?.id === 'all' && onNavigate) {
        onNavigate('projects');
      } else {
        onSelectProject(work);
      }
    }
  };

  return (
    <div className="bg-white dark:bg-ashara-dark animate-fade-in pb-0 transition-colors duration-300 relative">

      {/* 1. HERO SLIDESHOW */}
      <section
        id="real-hero"
        className="relative w-full h-screen supports-[height:100svh]:h-[100svh] overflow-hidden touch-pan-y"
        onMouseEnter={() => setIsHeroPaused(true)}
        onMouseLeave={() => setIsHeroPaused(false)}
        {...heroSwipe.handlers}
      >
        <div className="absolute inset-0 pointer-events-none" style={{ transition: 'opacity 2000ms ease-in-out' }}>
          {heroWorks.map((work, index) => {
            const heroLen = heroWorks.length;
            const isActive = index === activeHeroSlide;
            const isPrev = index === (activeHeroSlide - 1 + heroLen) % heroLen;
            let zIndex = 0;
            if (isActive) zIndex = 10;
            else if (isPrev) zIndex = 5;

            return (
              <div
                key={work.id}
                className="absolute inset-0"
                aria-hidden={!isActive}
                aria-current={isActive ? 'true' : undefined}
                style={{
                  transform: `translateX(${(index - activeHeroSlide) * 100}%)`,
                  zIndex,
                  transition: 'transform 800ms cubic-bezier(0.25, 1, 0.5, 1)',
                  pointerEvents: isActive ? 'auto' : 'none'
                }}
              >
                <img
                  src={work.image}
                  alt={work.title}
                  loading="eager"
                  decoding="async"
                  fetchPriority={index === 0 ? "high" : "auto"}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = work.fallbackImage;
                  }}
                  className="w-full h-full object-cover"
                  style={{
                    transform: isActive ? 'scale(1.02)' : 'scale(1)',
                    transition: 'transform 6000ms ease-out'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        <div className="absolute bottom-[160px] sm:bottom-[128px] left-4 pr-4 sm:left-16 sm:pr-16 lg:left-24 lg:pr-24 z-10">
          {heroWorks[activeHeroSlide] && (
            <h1 className="font-serif text-[28px] sm:text-[56px] leading-tight sm:leading-[64px] font-light text-white tracking-tight max-w-4xl" key={`title-${activeHeroSlide}`}>
              {heroWorks[activeHeroSlide].title}
            </h1>
          )}
        </div>

        <button
          type="button"
          aria-label="Previous Project"
          onClick={(e) => { e.stopPropagation(); prevSlide(); }}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-30 text-white/60 hover:text-white transition-colors duration-300 focus:outline-none drop-shadow-xl"
        >
          <ChevronLeft className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 stroke-[1]" />
        </button>
        <button
          type="button"
          aria-label="Next Project"
          onClick={(e) => { e.stopPropagation(); nextSlide(); }}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-30 text-white/60 hover:text-white transition-colors duration-300 focus:outline-none drop-shadow-xl"
        >
          <ChevronRight className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 stroke-[1]" />
        </button>

        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
          <div className="flex gap-1.5">
            {heroWorks.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={(e) => { e.stopPropagation(); setCurrentSlide(i); }}
                className={`h-2.5 sm:h-3 transition-colors duration-500 ring-1 ${activeHeroSlide === i ? 'bg-[#165A5B] ring-white/70 w-10 sm:w-12' : 'w-2.5 sm:w-3 bg-[#165A5B]/60 ring-white/40 hover:bg-[#165A5B]'}`}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={activeHeroSlide === i ? 'true' : 'false'}
              ></button>
            ))}
          </div>
          <button
            type="button"
            aria-label="Scroll to featured work"
            onClick={(e) => {
              e.stopPropagation();
              const hero = document.getElementById('real-hero');
              if (hero) window.scrollTo({ top: hero.offsetTop + hero.offsetHeight, behavior: 'smooth' });
            }}
            className="focus:outline-none focus-visible:ring-2 focus-visible:ring-ashara-gold rounded-full"
          >
            <ChevronDown className="w-5 h-5 text-ashara-gold animate-bounce" />
          </button>
        </div>
      </section>

      {/* 2. PHILOSOPHY QUOTE (White background) */}
      <section className="max-w-6xl mx-auto px-5 sm:px-6 text-center pt-16 pb-16 sm:pt-28 sm:pb-28 lg:pt-44 lg:pb-48">
        <span className="block text-[14px] sm:text-[20px] uppercase tracking-[0.3em] font-semibold text-ashara-teal dark:text-white mb-4 sm:mb-6">
          WELCOME
        </span>
        <blockquote className="font-serif italic text-2xl sm:text-4xl lg:text-5xl text-ashara-teal dark:text-white leading-snug font-normal transition-colors duration-300 max-w-6xl mx-auto">
          “Design with passion, authenticity, and positivity
          <br />
          to create spaces that inspire and uplift the soul.”
        </blockquote>
      </section>

      {/* 3. OUR WORKS - Title with lines & Accordion */}
      <section className="max-w-[1400px] mx-auto px-3 sm:px-6 lg:px-8 text-center pt-8 sm:pt-12 pb-14 sm:pb-24">

        <SectionTitle>Our Works</SectionTitle>

        {/* Mobile: Two-by-Two Card Grid with Slide-Up Caption on Hover */}
        <div className="md:hidden grid grid-cols-2 gap-2">
          {accordionWorks.map((work) => (
            <ProjectCard key={work.id} work={work} onSelect={handleCardClick} variant="mobile" />
          ))}
        </div>

        {/* Desktop: Two-Column Project Grid with Hover Reveal Captions */}
        <div className="hidden md:grid grid-cols-2 gap-4 max-w-6xl mx-auto">
          {accordionWorks.map((work) => (
            <ProjectCard key={work.id} work={work} onSelect={handleCardClick} variant="desktop" />
          ))}
        </div>

        {/* View All Projects Link */}
        <div className="mt-12">
          <button
            type="button"
            onClick={() => onNavigate && onNavigate('projects')}
            className="text-[16px] uppercase tracking-[0.2em] font-bold transition-colors duration-200 text-ashara-teal/60 dark:text-white/60 hover:text-ashara-teal dark:hover:text-white pb-1 border-b border-transparent hover:border-ashara-teal dark:hover:border-white focus:outline-none focus-visible:ring-2 focus-visible:ring-ashara-gold"
          >
            VIEW ALL PROJECTS
          </button>
        </div>
      </section>

      {/* 4. OUR CLIENTS */}
      <section className="max-w-[1400px] mx-auto px-3 sm:px-6 lg:px-8 text-center pt-8 sm:pt-16 pb-12 sm:pb-24">
        <SectionTitle>Our Clients</SectionTitle>
        <ClientsSection />
      </section>

      {/* 5. TESTIMONIAL CAROUSEL */}
      <section
        className="max-w-4xl mx-auto px-6 text-center pt-12 sm:pt-24 pb-20 sm:pb-40 relative touch-pan-y"
        onMouseEnter={() => setIsTestimonialPaused(true)}
        onMouseLeave={() => setIsTestimonialPaused(false)}
        {...testimonialSwipe.handlers}
      >
        {/* Left Arrow */}
        <button
          type="button"
          aria-label="Previous testimonial"
          onClick={() => {
            setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
            pauseAndResumeTestimonials();
          }}
          className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-300 hover:text-ashara-teal transition-colors z-10 p-1"
        >
          <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 stroke-1" />
        </button>

        <div className="overflow-hidden w-full">
          <div
            className={`flex items-center ${testimonialSwipe.isDragging ? '' : 'transition-transform duration-700 ease-in-out'}`}
            style={{ transform: `translateX(calc(-${activeTestimonial * 100}% + ${testimonialSwipe.dragOffset}px))` }}
          >
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="w-full shrink-0 px-8 sm:px-12 md:px-16"
              >
                <blockquote className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-ashara-teal dark:text-white font-light leading-relaxed max-w-4xl mx-auto mb-8">
                  {testimonial.quote}
                </blockquote>

                <div className="space-y-1">
                  <p className="text-[12px] sm:text-[13px] md:text-[14px] uppercase tracking-[0.2em] font-bold text-ashara-teal dark:text-white">
                    {testimonial.author},<br/>
                    {testimonial.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          type="button"
          aria-label="Next testimonial"
          onClick={() => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
            pauseAndResumeTestimonials();
          }}
          className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-300 hover:text-ashara-teal transition-colors z-10 p-1"
        >
          <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 stroke-1" />
        </button>

        {/* Pagination Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => {
                setCurrentTestimonial(idx);
                pauseAndResumeTestimonials();
              }}
              className={`w-2 h-2 rounded-none transition-colors ${
                activeTestimonial === idx
                  ? 'bg-ashara-teal'
                  : 'bg-gray-300 dark:bg-white/15 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
              aria-current={activeTestimonial === idx ? 'true' : 'false'}
            ></button>
          ))}
        </div>
      </section>

      {/* Floating Back to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3 bg-ashara-teal/90 hover:bg-ashara-teal text-white rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 focus:outline-none animate-fade-in"
          aria-label="Scroll back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
      {/* Footer rendered inline at the very bottom */}
      <Footer onNavigate={onNavigate} />

    </div>
  );
}
