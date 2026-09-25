import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const COVERFLOW_SETTINGS = {
  visibleItems: 5,
  perspective: 1000,
  rotateY: 45,
  scaleStep: 0.15,
  translateZStep: 80,
  translateXStep: 140,
  transitionDuration: 600,
  autoPlayInterval: 4000,
};

export default function CoverflowCarousel({ works, onSelectProject }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const containerRef = useRef(null);

  const totalItems = works.length;
  const halfVisible = Math.floor(COVERFLOW_SETTINGS.visibleItems / 2);

  const getItemTransform = (index) => {
    const diff = index - currentIndex;
    const absDiff = Math.abs(diff);
    
    if (absDiff > halfVisible) {
      return {
        transform: 'translateX(0) scale(0.5) rotateY(0deg)',
        opacity: 0,
        zIndex: 0,
        pointerEvents: 'none',
      };
    }

    const sign = Math.sign(diff) || 1;
    const rotateY = diff === 0 ? 0 : sign * COVERFLOW_SETTINGS.rotateY;
    const scale = 1 - absDiff * COVERFLOW_SETTINGS.scaleStep;
    const translateX = diff * COVERFLOW_SETTINGS.translateXStep;
    const translateZ = -absDiff * COVERFLOW_SETTINGS.translateZStep;
    const zIndex = totalItems - absDiff;
    const opacity = diff === 0 ? 1 : 0.7;

    return {
      transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
      opacity,
      zIndex,
      pointerEvents: diff === 0 ? 'auto' : 'none',
    };
  };

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  }, [totalItems]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  }, [totalItems]);

  const goToSlide = useCallback((index) => {
    setCurrentIndex(index);
  }, []);

  useEffect(() => {
    if (totalItems <= 1) return;
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, COVERFLOW_SETTINGS.autoPlayInterval);
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

  const handleWheel = (e) => {
    if (e.deltaY > 0) nextSlide();
    else if (e.deltaY < 0) prevSlide();
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
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onWheel={handleWheel}
      >
        <div
          className="relative h-[500px] sm:h-[550px] lg:h-[600px]"
          style={{
            perspective: `${COVERFLOW_SETTINGS.perspective}px`,
            transformStyle: 'preserve-3d',
          }}
        >
          {works.map((item, index) => {
            const transform = getItemTransform(index);
            const isActive = index === currentIndex;

            return (
              <button
                key={item.id}
                onClick={() => {
                  if (isActive && onSelectProject) onSelectProject(item);
                  else goToSlide(index);
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[360px] lg:w-[400px] aspect-[3/4] cursor-pointer transition-all duration-[600ms] ease-out"
                style={{
                  ...transform,
                  transition: `transform ${COVERFLOW_SETTINGS.transitionDuration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity ${COVERFLOW_SETTINGS.transitionDuration}ms ease-out`,
                  willChange: 'transform, opacity',
                }}
                aria-label={isActive ? `View ${item.title}` : `Go to ${item.title}`}
                aria-current={isActive ? 'true' : 'false'}
              >
                <div className="relative w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading={isActive ? 'eager' : 'lazy'}
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 text-white">
                    <span className="text-[8.5px] sm:text-[9px] uppercase tracking-[0.28em] text-white/80 font-medium block">
                      {item.tag}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-normal mt-0.5 text-white">
                      {item.title}
                    </h3>
                  </div>
                  {isActive && (
                    <div className="absolute inset-0 border-2 border-ashara-gold/50 rounded-2xl sm:rounded-3xl pointer-events-none animate-pulse-subtle" />
                  )}
                </div>
              </button>
            );
          })}
        </div>

        <button
          onClick={prevSlide}
          aria-label="Previous Project"
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-8 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-ashara-gold"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextSlide}
          aria-label="Next Project"
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-8 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-ashara-gold"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div className="flex justify-center gap-2 mt-8">
          {works.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
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