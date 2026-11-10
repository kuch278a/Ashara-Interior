import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import useTouchSwipe from '../hooks/useTouchSwipe';

export default function TestimonialsCarousel({ testimonials = [] }) {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const total = testimonials.length;
  const activeIdx = total > 0 ? current % total : 0;

  const next = () => total > 0 && setCurrent((p) => (p + 1) % total);
  const prev = () => total > 0 && setCurrent((p) => (p - 1 + total) % total);

  const pauseBriefly = () => {
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 5000);
  };

  const swipe = useTouchSwipe((dir) => {
    if (total > 0) {
      setCurrent((p) => (dir > 0 ? (p + 1) % total : (p - 1 + total) % total));
      pauseBriefly();
    }
  }, { followDrag: true });

  useEffect(() => {
    if (total <= 1 || isPaused || swipe.isDragging) return;
    const timer = setInterval(() => setCurrent((p) => (p + 1) % total), 6000);
    return () => clearInterval(timer);
  }, [total, isPaused, swipe.isDragging]);

  if (total === 0) return null;

  return (
    <section
      aria-labelledby="testimonials-heading"
      className="max-w-4xl mx-auto px-6 text-center pt-12 sm:pt-24 pb-20 sm:pb-40 relative touch-pan-y"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      {...swipe.handlers}
    >
      <h2 id="testimonials-heading" className="sr-only">Client Testimonials</h2>

      <button
        type="button"
        aria-label="Previous testimonial"
        onClick={() => { prev(); pauseBriefly(); }}
        className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-300 hover:text-ashara-teal transition-colors z-10 p-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-ashara-gold rounded-full"
      >
        <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 stroke-1" />
      </button>

      <div className="overflow-hidden w-full">
        <div
          className={`flex items-center ${swipe.isDragging ? '' : 'transition-transform duration-700 ease-in-out'}`}
          style={{ transform: `translateX(calc(-${activeIdx * 100}% + ${swipe.dragOffset}px))` }}
        >
          {testimonials.map((t, idx) => (
            <div key={idx} className="w-full shrink-0 px-8 sm:px-12 md:px-16">
              <blockquote className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-ashara-teal dark:text-white font-light leading-relaxed max-w-4xl mx-auto mb-8">
                {t.quote}
              </blockquote>
              <div className="space-y-1">
                <p className="text-[12px] sm:text-[13px] md:text-[14px] uppercase tracking-[0.2em] font-bold text-ashara-teal dark:text-white">
                  {t.author},<br />
                  {t.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        aria-label="Next testimonial"
        onClick={() => { next(); pauseBriefly(); }}
        className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-300 hover:text-ashara-teal transition-colors z-10 p-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-ashara-gold rounded-full"
      >
        <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 stroke-1" />
      </button>

      <div className="flex justify-center items-center gap-2 mt-8" role="tablist" aria-label="Testimonial slides">
        {testimonials.map((t, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => { setCurrent(idx); pauseBriefly(); }}
            className={`h-1.5 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-ashara-gold ${
              activeIdx === idx ? 'w-8 bg-ashara-teal dark:bg-ashara-gold' : 'w-2 bg-gray-300 dark:bg-white/20 hover:bg-gray-400'
            }`}
            aria-label={`Go to testimonial ${idx + 1} of ${total}: ${t.author}`}
            aria-current={activeIdx === idx ? 'true' : 'false'}
          />
        ))}
      </div>
    </section>
  );
}
