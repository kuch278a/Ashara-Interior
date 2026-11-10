import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
import useTouchSwipe from '../hooks/useTouchSwipe';
import { handleImageError } from '../utils/imageFallback';

export default function HeroSlideshow({ works = [] }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const total = works.length;
  const activeSlide = total > 0 ? currentSlide % total : 0;

  const nextSlide = () => total > 0 && setCurrentSlide((p) => (p + 1) % total);
  const prevSlide = () => total > 0 && setCurrentSlide((p) => (p - 1 + total) % total);

  const swipe = useTouchSwipe((dir) => {
    if (total > 0) {
      setCurrentSlide((p) => (dir > 0 ? (p + 1) % total : (p - 1 + total) % total));
      setIsPaused(true);
      setTimeout(() => setIsPaused(false), 5000);
    }
  });

  useEffect(() => {
    if (total <= 1 || isPaused) return;
    const timer = setInterval(() => setCurrentSlide((p) => (p + 1) % total), 6000);
    return () => clearInterval(timer);
  }, [total, isPaused]);

  return (
    <section
      id="real-hero"
      aria-label="Featured Projects Carousel"
      className="relative w-full h-screen supports-[height:100svh]:h-[100svh] overflow-hidden touch-pan-y"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      {...swipe.handlers}
    >
      <div className="absolute inset-0 pointer-events-none">
        {works.map((work, index) => {
          const isActive = index === activeSlide;
          const isPrev = index === (activeSlide - 1 + total) % total;
          return (
            <div
              key={work.id || index}
              className="absolute inset-0 transition-transform duration-800 ease-out"
              aria-hidden={!isActive}
              style={{
                transform: `translateX(${(index - activeSlide) * 100}%)`,
                zIndex: isActive ? 10 : isPrev ? 5 : 0,
                pointerEvents: isActive ? 'auto' : 'none'
              }}
            >
              <img
                src={work.image}
                alt={work.title}
                loading={index === 0 ? 'eager' : 'lazy'}
                decoding="async"
                fetchpriority={index === 0 ? 'high' : 'auto'}
                onError={(e) => handleImageError(e, work.fallbackImage)}
                className="w-full h-full object-cover transition-transform duration-[6000ms] ease-out"
                style={{ transform: isActive ? 'scale(1.02)' : 'scale(1)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" aria-hidden="true" />
            </div>
          );
        })}
      </div>

      <div className="absolute bottom-[140px] sm:bottom-[110px] left-4 pr-4 sm:left-12 sm:pr-12 lg:left-20 lg:pr-20 z-10 max-w-3xl">
        {works[activeSlide] && (
          <h1 key={`title-${activeSlide}`} className="font-serif text-[20px] sm:text-[32px] md:text-[38px] lg:text-[42px] leading-snug font-light text-white drop-shadow-md animate-fade-in">
            {works[activeSlide].title}
          </h1>
        )}
      </div>

      <button
        type="button"
        aria-label="Previous Project"
        onClick={(e) => { e.stopPropagation(); prevSlide(); }}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-30 text-white/60 hover:text-white transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-ashara-gold rounded-full drop-shadow-xl p-1"
      >
        <ChevronLeft className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 stroke-[1]" />
      </button>

      <button
        type="button"
        aria-label="Next Project"
        onClick={(e) => { e.stopPropagation(); nextSlide(); }}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-30 text-white/60 hover:text-white transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-ashara-gold rounded-full drop-shadow-xl p-1"
      >
        <ChevronRight className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 stroke-[1]" />
      </button>

      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <div className="flex gap-1.5" role="tablist" aria-label="Hero project slides">
          {works.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={(e) => { e.stopPropagation(); setCurrentSlide(i); }}
              className={`h-2.5 sm:h-3 transition-all duration-500 ring-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-ashara-gold ${
                activeSlide === i ? 'bg-[#165A5B] ring-white/70 w-10 sm:w-12' : 'w-2.5 sm:w-3 bg-[#165A5B]/60 ring-white/40 hover:bg-[#165A5B]'
              }`}
              aria-label={`Go to slide ${i + 1} of ${total}: ${works[i]?.title}`}
              aria-current={activeSlide === i ? 'true' : 'false'}
            />
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
  );
}
