import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowUp, ChevronDown, ArrowRight } from 'lucide-react';
import ClientsSection from '../components/ClientsSection';
import Footer from '../components/Footer';
import ProjectsPage from './ProjectsPage';
import ServicesPage from './ServicesPage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import { getInitialProjects, subscribeToProjects, getInitialTestimonials, subscribeToTestimonials } from '../services/firebaseService';

const isDesktopView = () => window.matchMedia('(min-width: 768px)').matches;

const FALLBACK_TESTIMONIALS = [
  {
    quote: "Ashara Interiors transformed our office space beyond our expectations. Their attention to detail and ability to deliver a luxurious, functional design within an incredibly tight deadline was remarkable.",
    author: "DEPUTY PRESIDENT'S OFFICE",
    company: "PROSPERITY PARTY HEADQUARTERS"
  },
  {
    quote: "The level of professionalism and artistic vision brought to our project was truly unmatched. They took our vague concepts and turned them into a breathtaking reality.",
    author: "DIRECTOR OF OPERATIONS",
    company: "AMIBARA PROPERTIES"
  },
  {
    quote: "Working with Ashara was a seamless experience. Their bespoke approach to interior architecture gave our headquarters a timeless elegance that perfectly represents our brand.",
    author: "HEAD OF INFRASTRUCTURE",
    company: "MINISTRY OF REVENUES"
  }
];

// Map CMS testimonials (quote/clientName/organization) to the carousel shape (quote/author/company)
const toCarouselTestimonials = (list) => {
  const mapped = (Array.isArray(list) ? list : [])
    .map((t) => ({
      quote: t.quote,
      author: t.clientName || t.author || '',
      company: t.organization || t.company || ''
    }))
    .filter((t) => t.quote);
  return mapped.length > 0 ? mapped : FALLBACK_TESTIMONIALS;
};

export default function HomePage({ onNavigate, onSelectProject }) {
  const [works, setWorks] = useState(() => getInitialProjects());
  const [testimonials, setTestimonials] = useState(() => toCarouselTestimonials(getInitialTestimonials()));
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeAccordionIndex, setActiveAccordionIndex] = useState(0);
  const [isAccordionPaused, setIsAccordionPaused] = useState(false);
  const [isHeroPaused, setIsHeroPaused] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isTestimonialPaused, setIsTestimonialPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [testimonialDrag, setTestimonialDrag] = useState(0);
  const [isTestimonialDragging, setIsTestimonialDragging] = useState(false);

  const explicitHeroWorks = works.filter(w => w.isHero);
  const heroWorks = explicitHeroWorks.length > 0 ? explicitHeroWorks : works.slice(0, 10);

  const explicitAccordionWorks = works.filter(w => w.isOurWorks);
  const accordionWorks = explicitAccordionWorks.length > 0 
    ? explicitAccordionWorks 
    : (works.length > 10 ? works.slice(10, 16) : works.slice(0, 6));

  // Keep the slide index valid when the testimonial list changes from the CMS
  const activeTestimonial = testimonials.length > 0 ? currentTestimonial % testimonials.length : 0;
  // Keep the hero slide index valid when the project list changes from the CMS
  const activeHeroSlide = heroWorks.length > 0 ? currentSlide % heroWorks.length : 0;

  // Pause auto-advance and resume after a delay (mirrors the accordion indicator pattern)
  const pauseAndResumeTestimonials = () => {
    setIsTestimonialPaused(true);
    setTimeout(() => setIsTestimonialPaused(false), 5000);
  };

  const handleTestimonialTouchStart = (e) => {
    setTouchStart({ x: e.touches[0].clientX, y: e.touches[0].clientY });
    setIsTestimonialDragging(true);
  };

  const handleTestimonialTouchMove = (e) => {
    if (touchStart === null) return;
    const deltaX = e.touches[0].clientX - touchStart.x;
    const deltaY = e.touches[0].clientY - touchStart.y;
    // Follow the finger only on horizontal-dominant drags; let vertical page scroll win otherwise
    setTestimonialDrag(Math.abs(deltaX) > Math.abs(deltaY) ? deltaX : 0);
  };

  const handleTestimonialTouchEnd = () => {
    if (touchStart !== null && Math.abs(testimonialDrag) > 50) {
      setCurrentTestimonial((prev) =>
        testimonialDrag < 0
          ? (prev + 1) % testimonials.length
          : (prev - 1 + testimonials.length) % testimonials.length
      );
      pauseAndResumeTestimonials();
    }
    setTouchStart(null);
    setTestimonialDrag(0);
    setIsTestimonialDragging(false);
  };

  const handleTestimonialTouchCancel = () => {
    setTouchStart(null);
    setTestimonialDrag(0);
    setIsTestimonialDragging(false);
  };

  useEffect(() => {
    if (isTestimonialPaused || isTestimonialDragging) return;
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isTestimonialPaused, isTestimonialDragging, testimonials.length]);

  // Auto-advance accordion every 6 seconds (desktop showcase only)
  useEffect(() => {
    const accLen = accordionWorks.length;
    if (accLen === 0 || isAccordionPaused || !isDesktopView()) return;
    const accordionTimer = setInterval(() => {
      setActiveAccordionIndex((prev) => (prev + 1) % accLen);
    }, 6000);
    return () => clearInterval(accordionTimer);
  }, [works, isAccordionPaused]);

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
      if (data && data.length > 0) {
        const sorted = [...data].sort((a, b) => {
          if (a.updatedAt && b.updatedAt) {
            const dateA = new Date(a.updatedAt).getTime();
            const dateB = new Date(b.updatedAt).getTime();
            if (dateA !== dateB) return dateB - dateA;
          }
          return Number(a.id) - Number(b.id);
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
        className="relative w-full h-screen supports-[height:100svh]:h-[100svh] overflow-hidden"
        onMouseEnter={() => setIsHeroPaused(true)}
        onMouseLeave={() => setIsHeroPaused(false)}
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
                aria-current={isActive}
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
                  loading={index === 0 ? "eager" : "lazy"}
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
        
        <div className="absolute bottom-20 left-6 pr-6 sm:bottom-16 sm:left-16 sm:pr-16 lg:bottom-20 lg:left-24 lg:pr-24 z-10">
          {heroWorks[activeHeroSlide] && (
            <h1 className="font-serif text-3xl sm:text-[40px] leading-tight sm:leading-[50px] font-light text-white tracking-tight max-w-4xl animate-fade-in" key={`title-${activeHeroSlide}`} style={{ animationDelay: '150ms' }}>
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

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
          <div className="flex gap-1.5">
            {heroWorks.map((_, i) => (
              <button 
                key={i}
                type="button" 
                onClick={(e) => { e.stopPropagation(); setCurrentSlide(i); }}
                className={`h-2.5 sm:h-3 transition-colors duration-500 ${activeHeroSlide === i ? 'bg-ashara-teal w-10 sm:w-12' : 'w-2.5 sm:w-3 bg-white/40 hover:bg-white'}`}
                aria-label={`Go to slide ${i + 1}`} 
                aria-current={currentSlide === i}
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
      <section className="max-w-4xl mx-auto px-6 text-center pt-32 pb-24">
        <span className="block text-[11px] uppercase tracking-[0.3em] font-semibold text-ashara-teal dark:text-white mb-6">
          WELCOME
        </span>
        <blockquote className="font-serif italic text-3xl sm:text-4xl text-ashara-teal dark:text-white leading-snug font-light transition-colors duration-300 max-w-3xl mx-auto">
          “Design with passion, authenticity, and positivity to create spaces that inspire and uplift the soul.”
        </blockquote>
      </section>

      {/* 3. OUR WORKS - Title with lines & Accordion */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center pt-12 pb-24">
        
        {/* Title with horizontal lines */}
        <div className="flex items-center justify-center gap-6 mb-12 max-w-5xl mx-auto px-6">
          <div className="h-[1px] bg-gray-300 dark:bg-white/15 flex-1"></div>
          <h2 className="font-serif text-2xl sm:text-3xl text-ashara-teal dark:text-white font-normal w-[210px] h-[60px] flex items-center justify-center">
            Our Works
          </h2>
          <div className="h-[1px] bg-gray-300 dark:bg-white/15 flex-1"></div>
        </div>
        
        {/* Mobile: Two-by-Two Card Grid with Slide-Up Caption on Hover */}
        <div className="md:hidden grid grid-cols-2 gap-2">
          {accordionWorks.map((work) => (
            <article
              key={work.id}
              onClick={() => handleCardClick(work)}
              className="group relative cursor-pointer overflow-hidden bg-gray-100 aspect-[4/3]"
            >
              <img
                src={work.image}
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = work.fallbackImage;
                }}
                alt={work.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-active:scale-110"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent px-3 pb-2.5 pt-10">
                <h3 className="font-serif text-sm sm:text-base text-white font-light leading-snug">{work.title}</h3>
              </div>
            </article>
          ))}
        </div>

        {/* Desktop: Accordion Expanding Carousel with Floating Arrows */}
        <div 
          className="hidden md:flex relative flex-row h-[60svh] min-h-[500px] max-h-[700px] w-full gap-2 overflow-hidden rounded-none group"
          onMouseEnter={() => setIsAccordionPaused(true)}
          onMouseLeave={() => setIsAccordionPaused(false)}
        >
          {accordionWorks.map((work, index) => {
            const isActive = activeAccordionIndex === index;
            return (
              <article
                key={work.id}
                onClick={() => handleCardClick(work)}
                onMouseEnter={() => setActiveAccordionIndex(index)}
                className={`relative cursor-pointer overflow-hidden transition-all duration-700 ease-in-out bg-gray-100 shrink-0 ${isActive ? 'flex-[4]' : 'flex-1'}`}
              >
                <img
                  src={work.image}
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = work.fallbackImage;
                  }}
                  alt={work.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out ${isActive ? 'scale-105' : 'scale-100'}`}
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10 transition-opacity duration-300 ${isActive ? 'opacity-90' : 'opacity-70'}`}></div>
                
                <div className={`absolute inset-0 p-8 flex flex-col justify-end z-10 transition-opacity duration-500 delay-100 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                  <div className={`transform transition-transform duration-500 ease-out ${isActive ? 'translate-y-0' : 'translate-y-4'}`}>
                    <h3 className={`font-serif text-2xl lg:text-3xl text-white font-light transition-all duration-500 overflow-hidden overflow-ellipsis ${isActive ? 'whitespace-normal' : 'whitespace-nowrap max-w-[80%]'}`}>
                      {work.title}
                    </h3>
                  </div>
                </div>
              </article>
            );
          })}

          {/* Floating Large Arrows on the Left and Right Edges */}
          <button 
            type="button" 
            aria-label="Previous Project" 
            onClick={(e) => {
              e.stopPropagation();
              const accLen = accordionWorks.length;
              if (accLen > 0) setActiveAccordionIndex((activeAccordionIndex - 1 + accLen) % accLen);
            }}
            className="hidden md:block absolute left-4 md:left-10 top-1/2 -translate-y-1/2 z-30 text-white/60 hover:text-white transition-all duration-500 hover:-translate-x-2 hover:scale-110 focus:outline-none drop-shadow-xl"
          >
            <ChevronLeft className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 stroke-[1]" />
          </button>
          
          <button 
            type="button" 
            aria-label="Next Project" 
            onClick={(e) => {
              e.stopPropagation();
              const accLen = accordionWorks.length;
              if (accLen > 0) setActiveAccordionIndex((activeAccordionIndex + 1) % accLen);
            }}
            className="hidden md:block absolute right-4 md:right-10 top-1/2 -translate-y-1/2 z-30 text-white/60 hover:text-white transition-all duration-500 hover:translate-x-2 hover:scale-110 focus:outline-none drop-shadow-xl"
          >
            <ChevronRight className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 stroke-[1]" />
          </button>
        </div>

        {/* Carousel Indicators (Desktop only) */}
        <div className="mt-6 hidden md:flex justify-center flex-wrap gap-1.5">
          {accordionWorks.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => {
                setActiveAccordionIndex(index);
                setIsAccordionPaused(true);
                setTimeout(() => setIsAccordionPaused(false), 5000); // Resume after 5 seconds
              }}
              className={`h-2.5 sm:h-3 transition-colors duration-500 ${
                activeAccordionIndex === index 
                  ? 'bg-ashara-teal w-10 sm:w-12' 
                  : 'w-2.5 sm:w-3 bg-gray-300 dark:bg-white/15 hover:bg-ashara-teal/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={activeAccordionIndex === index}
            ></button>
          ))}
        </div>

        {/* View All Projects Link */}
        <div className="mt-12">
          <button 
            onClick={() => onNavigate && onNavigate('projects')}
            className="group relative inline-flex items-center justify-center overflow-hidden h-8 text-[12px] uppercase tracking-[0.25em] font-bold text-ashara-teal dark:text-white hover:text-ashara-teal transition-colors"
          >
            {/* Mobile: always-visible label (no hover on touch devices) */}
            <span className="md:hidden whitespace-nowrap">
              VIEW ALL PROJECTS
            </span>

            {/* Desktop: invisible placeholder to maintain the button's size */}
            <span className="hidden md:inline invisible whitespace-nowrap">
              VIEW ALL PROJECTS
            </span>

            {/* Desktop Default State: Only Arrow */}
            <span className="hidden md:flex absolute inset-0 items-center justify-center transition-transform duration-500 group-hover:translate-y-[150%]">
              <ChevronRight className="w-6 h-6" />
            </span>

            {/* Desktop Hover State: Only Text */}
            <span className="hidden md:flex absolute inset-0 items-center justify-center transition-transform duration-500 -translate-y-[150%] group-hover:translate-y-0">
              VIEW ALL PROJECTS
            </span>
          </button>
        </div>
      </section>

      {/* 4. OUR CLIENTS */}
      <section className="text-center pt-16 pb-24">
        <div className="flex items-center justify-center gap-6 mb-12 max-w-6xl mx-auto px-6">
          <div className="h-[1px] bg-gray-300 dark:bg-white/15 flex-1 max-w-[120px]"></div>
          <h2 className="font-serif text-2xl sm:text-3xl text-ashara-teal dark:text-white font-normal">
            Our Clients
          </h2>
          <div className="h-[1px] bg-gray-300 dark:bg-white/15 flex-1 max-w-[120px]"></div>
        </div>
        <ClientsSection />
      </section>

      {/* 5. TESTIMONIAL CAROUSEL */}
      <section 
        className="max-w-4xl mx-auto px-6 text-center pt-24 pb-40 relative touch-pan-y"
        onMouseEnter={() => setIsTestimonialPaused(true)}
        onMouseLeave={() => setIsTestimonialPaused(false)}
        onTouchStart={handleTestimonialTouchStart}
        onTouchMove={handleTestimonialTouchMove}
        onTouchEnd={handleTestimonialTouchEnd}
        onTouchCancel={handleTestimonialTouchCancel}
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
            className={`flex items-center ${isTestimonialDragging ? '' : 'transition-transform duration-700 ease-in-out'}`}
            style={{ transform: `translateX(calc(-${activeTestimonial * 100}% + ${testimonialDrag}px))` }}
          >
            {testimonials.map((testimonial, idx) => (
              <div 
                key={idx}
                className="w-full flex-shrink-0 px-8 sm:px-12 md:px-16"
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
              onClick={() => {
                setCurrentTestimonial(idx);
                pauseAndResumeTestimonials();
              }}
              className={`w-2 h-2 rounded-none transition-colors ${
                activeTestimonial === idx 
                  ? 'bg-ashara-teal' 
                  : 'bg-gray-300 dark:bg-white/15 hover:bg-gray-400'
              }`}
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
      {/* FULL PAGE SECTIONS (Single Page App Layout) */}
      <div id="projects-section">
        <ProjectsPage onNavigate={onNavigate} onSelectProject={onSelectProject} isSection={true} />
      </div>
      <div id="services-section">
        <ServicesPage onNavigate={onNavigate} onSelectProject={onSelectProject} isSection={true} />
      </div>
      <div id="about-section">
        <AboutPage onNavigate={onNavigate} onSelectProject={onSelectProject} isSection={true} />
      </div>

      {/* Footer rendered inline at the very bottom */}
      <Footer onNavigate={onNavigate} />

    </div>
  );
}