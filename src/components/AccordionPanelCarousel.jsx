import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ACCORDION_SETTINGS = {
  expandedWidth: '70%',
  collapsedWidth: 'calc(30% / (count - 1))',
  transitionDuration: 2000,
  autoPlayInterval: 5000,
  minItems: 2,
  maxItems: 12,
  visibleOnMobile: 3,
  visibleOnTablet: 4,
  visibleOnDesktop: 5,
};

export default function AccordionPanelCarousel({ works, onSelectProject }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef(null);
  const panelsRef = useRef([]);

  const totalItems = works.length;

  // Responsive visible count
  const getVisibleCount = () => {
    if (typeof window === 'undefined') return ACCORDION_SETTINGS.visibleOnDesktop;
    if (window.innerWidth < 640) return ACCORDION_SETTINGS.visibleOnMobile;
    if (window.innerWidth < 1024) return ACCORDION_SETTINGS.visibleOnTablet;
    return ACCORDION_SETTINGS.visibleOnDesktop;
  };

  const [visibleCount, setVisibleCount] = useState(() => getVisibleCount());

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
      setVisibleCount(getVisibleCount());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate which projects to show - sliding window around activeIndex
  const getVisibleWorks = () => {
    const vc = visibleCount;
    if (totalItems <= vc) return works;
    
    const halfVisible = Math.floor(vc / 2);
    let start = activeIndex - halfVisible;
    let end = start + vc;
    
    // Adjust if we're at the beginning
    if (start < 0) {
      start = 0;
      end = vc;
    }
    // Adjust if we're at the end
    if (end > totalItems) {
      end = totalItems;
      start = totalItems - vc;
    }
    
    return works.slice(start, end);
  };
  
  const visibleWorks = getVisibleWorks();
  const startIndex = totalItems <= visibleCount ? 0 : Math.max(0, Math.min(activeIndex - Math.floor(visibleCount / 2), totalItems - visibleCount));

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % totalItems);
  }, [totalItems]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + totalItems) % totalItems);
  }, [totalItems]);

  const goToSlide = useCallback((index) => {
    setActiveIndex(index);
  }, []);

  useEffect(() => {
    if (totalItems <= 1) return;
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, ACCORDION_SETTINGS.autoPlayInterval);
    return () => clearInterval(interval);
  }, [isPaused, totalItems, nextSlide]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextSlide();
      else if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (!touchStart) return;
    const touchEnd = e.changedTouches[0].clientX;
    const distance = touchStart - touchEnd;
    if (distance > 50) nextSlide();
    else if (distance < -50) prevSlide();
    setTouchStart(null);
  };

  const handleMouseEnter = (index) => () => {
    setActiveIndex(index + startIndex);
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  const getPanelStyle = (index) => {
    const isActive = index === activeIndex - startIndex;
    const expandedWidthPercent = 65;
    const collapsedWidthPercent = (100 - expandedWidthPercent) / (visibleCount - 1);

    return {
      flex: `0 0 ${isActive ? expandedWidthPercent : collapsedWidthPercent}%`,
      maxWidth: isActive ? `${expandedWidthPercent}%` : `${collapsedWidthPercent}%`,
      minWidth: isActive ? '0' : '100px',
      transition: `flex ${ACCORDION_SETTINGS.transitionDuration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94), max-width ${ACCORDION_SETTINGS.transitionDuration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
    };
  };

  return (
    <section id="home-works" className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 space-y-12">
      <div className="flex items-center justify-center gap-6 sm:gap-10">
        <div className="h-[1px] bg-gray-300 dark:bg-white/10 flex-1 max-w-[240px]"></div>
        <h2 className="font-serif text-3xl sm:text-4xl text-ashara-charcoal dark:text-white tracking-wide transition-colors duration-300">
          Our Works
        </h2>
        <div className="h-[1px] bg-gray-300 dark:bg-white/10 flex-1 max-w-[240px]"></div>
      </div>

      <div
        ref={containerRef}
        className="relative"
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="flex h-[450px] sm:h-[500px] lg:h-[550px] rounded-2xl sm:rounded-3xl overflow-hidden bg-gray-100 dark:bg-ashara-charcoal shadow-xl">
          {visibleWorks.map((item, index) => {
            const isActive = index === activeIndex - startIndex;
            const panelStyle = getPanelStyle(index);

            return (
              <button
                key={item.id}
                ref={(el) => { panelsRef.current[index] = el; }}
                onClick={() => {
                  if (isActive && onSelectProject) onSelectProject(item);
                  else goToSlide(index + startIndex);
                }}
                onMouseEnter={handleMouseEnter(index)}
                className="relative group flex flex-col overflow-hidden cursor-pointer focus:outline-none focus:ring-2 focus:ring-ashara-gold focus:ring-offset-2 focus:ring-offset-ashara-dark dark:focus:ring-offset-ashara-dark"
                style={panelStyle}
                aria-label={isActive ? `View ${item.title}` : `Expand ${item.title}`}
                aria-expanded={isActive}
                aria-controls={`panel-${item.id}`}
              >
                <div className="relative flex-1 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading={isActive ? 'eager' : 'lazy'}
                    decoding="async"
                    className={`w-full h-full object-cover transition-all duration-[700ms] ease-out ${
                      isActive ? 'scale-100' : 'scale-110 grayscale'
                    } group-hover:scale-105`}
                    style={{
                      transition: `transform ${ACCORDION_SETTINGS.transitionDuration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94), filter ${ACCORDION_SETTINGS.transitionDuration}ms ease-out`,
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent pointer-events-none transition-opacity duration-2000">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  </div>
                </div>

                <div
                  id={`panel-${item.id}`}
                  className={`absolute bottom-0 left-0 right-0 p-5 sm:p-6 text-white transform transition-all duration-2000 ease-out ${
                    isActive ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'
                  }`}
                >
                  <span className="text-[8.5px] sm:text-[9px] uppercase tracking-[0.28em] text-white/80 font-medium block">
                    {item.tag}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-normal mt-0.5 text-white leading-tight">
                    {item.title}
                  </h3>
                </div>

                {!isActive && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="text-white/50 text-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-2000">
                      <ChevronRight className="w-8 h-8 mx-auto mb-2" />
                      <span className="text-[10px] uppercase tracking-[0.3em] font-medium">Click to expand</span>
                    </div>
                  </div>
                )}

                {isActive && (
                  <div className="absolute inset-0 border-2 border-ashara-gold/50 pointer-events-none animate-pulse-subtle" />
                )}
              </button>
            );
          })}
        </div>

        <button
          onClick={prevSlide}
          aria-label="Previous Project"
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-8 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-ashara-gold flex"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextSlide}
          aria-label="Next Project"
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-8 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-ashara-gold flex"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: Math.min(totalItems, 10) }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? 'bg-ashara-gold w-8'
                  : 'bg-white/40 hover:bg-white'
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="text-center pt-4">
        <button
          onClick={() => onSelectProject && onSelectProject({ id: 'all' })}
          className="text-[10.5px] uppercase tracking-[0.28em] font-semibold text-gray-800 dark:text-gray-200 hover:text-ashara-teal dark:hover:text-ashara-gold transition border-b border-gray-400 dark:border-white/20 pb-0.5"
        >
          VIEW ALL PROJECTS
        </button>
      </div>

      <style jsx>{`
        @keyframes pulse-subtle {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        .animate-pulse-subtle {
          animation: pulse-subtle 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}