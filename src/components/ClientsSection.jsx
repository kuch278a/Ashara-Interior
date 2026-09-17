import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { getInitialTestimonials, subscribeToTestimonials } from '../services/firebaseService';

const ROW_1_CLIENTS = [
  {
    name: 'Prosperity Party',
    amharic: 'ብልጽግና ፓርቲ',
    image: './client_logos/prosperity_party.png',
  },
  {
    name: 'Customs Commission',
    amharic: 'ጉምሩክ ኮሚሽን',
    image: './client_logos/customs_commission.png',
  },
  {
    name: 'FBC Media',
    amharic: 'ፋና',
    image: './client_logos/fbc_media.png',
  },
  {
    name: 'Ethiopian Press Agency',
    amharic: 'ኢፕድ',
    image: './client_logos/Ethiopian_Press_Agency.png',
  },
  {
    name: 'Policy Studies Institute',
    amharic: 'የፖሊሲ ጥናት ኢንስቲትዩት',
    image: './client_logos/bw_policy_studies_institute.jpg',
    isCard: true
  }
];

const ROW_2_CLIENTS = [
  {
    name: "Oromia President's Office",
    amharic: 'የኦሮሚያ ፕሬዝዳንት ጽህፈት ቤት',
    image: './client_logos/bw_oromia_president_office.jpg',
    isCircle: true
  },
  {
    name: 'Ministry of Revenues',
    amharic: 'የገቢዎች ሚኒስቴር',
    image: './client_logos/ministry_of_revenues.png',
  },
  {
    name: 'Artificial Intelligence Institute',
    amharic: 'አርቲፊሻል ኢንተለጀንስ',
    image: './client_logos/eaii_institute.png',
  },
  {
    name: 'Addis Ababa Police',
    amharic: 'አዲስ አበባ ፖሊስ',
    image: './client_logos/addis_ababa_police.png',
  },
  {
    name: 'Oromia Police',
    amharic: 'Poolisii Oromiyaa',
    image: './client_logos/oromia_police.png',
  }
];

const ROW_3_CLIENTS = [
  {
    name: 'United Beverages',
    image: './client_logos/united_beverages.png',
  },
  {
    name: 'Amibara Properties',
    image: './client_logos/amibara_properties.png',
  },
  {
    name: 'Hill Bottom Recreation',
    image: './client_logos/bw_hill_bottom.jpg',
    isCard: true
  },
  {
    name: 'Mela Muziqa',
    image: './client_logos/bw_mela_muziqa.jpg',
    isCard: true
  }
];

export default function ClientsSection() {
  const [testimonials, setTestimonials] = useState(() => getInitialTestimonials());
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(null);

  useEffect(() => {
    const unsub = subscribeToTestimonials((list) => {
      if (list && list.length > 0) setTestimonials(list);
    });
    return () => {
      if (typeof unsub === 'function') unsub();
    };
  }, []);

  // Auto-slide testimonials every 4.5 seconds (pauses on hover/touch)
  useEffect(() => {
    if (testimonials.length <= 1 || isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [testimonials.length, isPaused, currentIndex]);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (diff > 50) {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    } else if (diff < -50) {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }
    setTouchStart(null);
  };

  return (
    <div className="space-y-20 py-8">
      
      {/* 1. OUR CLIENTS SECTION: Monochrome in Light Mode (Color on Hover), Full Vibrant Color in Dark Mode */}
      <section className="max-w-6xl mx-auto px-6 sm:px-10 text-center space-y-14">
        <h3 className="font-serif text-3xl sm:text-4xl text-ashara-charcoal dark:text-white font-normal tracking-wide transition-colors duration-300">
          Our Clients
        </h3>

        {/* 3-Row Matrix */}
        <div className="space-y-12 sm:space-y-16 max-w-5xl mx-auto">
          
          {/* ================= ROW 1 (5 Governmental Emblems) ================= */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 sm:gap-10 items-center justify-items-center">
            {ROW_1_CLIENTS.map((item, idx) => (
              <div 
                key={idx} 
                className="flex flex-col items-center justify-center p-2 group cursor-default transition-all duration-400"
              >
                <div className={`h-20 sm:h-24 w-28 sm:w-36 flex items-center justify-center ${item.isCard ? 'bg-white/90 dark:bg-white rounded-2xl border border-black/5 dark:border-white/10 p-2 shadow-2xs' : ''}`}>
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    decoding="async"
                    className="max-h-20 sm:max-h-24 max-w-full object-contain grayscale contrast-125 opacity-80 group-hover:grayscale-0 group-hover:contrast-100 group-hover:opacity-100 group-hover:scale-110 transition-all duration-400 ease-out dark:grayscale-0 dark:opacity-100 dark:contrast-100 dark:group-hover:scale-110"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* ================= ROW 2 (5 Circular Medallion Seals) ================= */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 sm:gap-10 items-center justify-items-center">
            {ROW_2_CLIENTS.map((item, idx) => (
              <div 
                key={idx} 
                className="flex flex-col items-center justify-center p-2 group cursor-default transition-all duration-400"
              >
                <div className={`h-20 sm:h-24 w-24 sm:w-28 flex items-center justify-center ${item.isCircle ? 'rounded-full overflow-hidden bg-white shadow-2xs border border-black/5 dark:border-white/10' : ''}`}>
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    decoding="async"
                    className="max-h-20 sm:max-h-24 max-w-full object-contain grayscale contrast-125 opacity-80 group-hover:grayscale-0 group-hover:contrast-100 group-hover:opacity-100 group-hover:scale-110 transition-all duration-400 ease-out dark:grayscale-0 dark:opacity-100 dark:contrast-100 dark:group-hover:scale-110"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* ================= ROW 3 (4 Corporate Brand Logos) ================= */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12 items-center justify-items-center pt-2">
            {ROW_3_CLIENTS.map((item, idx) => (
              <div 
                key={idx} 
                className="flex items-center justify-center p-2 group cursor-default transition-all duration-400"
              >
                <div className={`h-16 sm:h-20 w-36 sm:w-44 flex items-center justify-center ${item.isCard ? 'bg-white/90 dark:bg-white rounded-2xl border border-black/5 dark:border-white/10 p-2 shadow-2xs' : ''}`}>
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    decoding="async"
                    className="max-h-16 sm:max-h-20 max-w-full object-contain grayscale contrast-125 opacity-80 group-hover:grayscale-0 group-hover:contrast-100 group-hover:opacity-100 group-hover:scale-110 transition-all duration-400 ease-out dark:grayscale-0 dark:opacity-100 dark:contrast-100 dark:group-hover:scale-110"
                  />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 2. TESTIMONIAL SECTION matching Figma Homepage (Sliding Carousel) */}
      {testimonials.length > 0 && (
        <section 
          className="max-w-3xl mx-auto px-4 sm:px-6 text-center space-y-4 sm:space-y-6 select-none"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          
          {/* Top Quotation Mark in Soft Teal */}
          <div className="text-ashara-teal/60 dark:text-ashara-gold/60 text-5xl sm:text-7xl font-serif leading-none select-none flex justify-center transition-colors duration-300">
            “
          </div>
          
          {/* Sliding Track for Testimonial Quotes */}
          <div className="overflow-hidden w-full relative">
            <div 
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translate3d(-${currentIndex * 100}%, 0, 0)` }}
            >
              {testimonials.map((item, idx) => (
                <div key={item.id || idx} className="w-full shrink-0 px-2 sm:px-6 space-y-4 sm:space-y-5">
                  <blockquote className="font-serif italic text-xl sm:text-3xl lg:text-[32px] text-gray-800 dark:text-gray-200 leading-relaxed font-light transition-colors duration-300">
                    “{item.quote}”
                  </blockquote>

                  {/* Attribution */}
                  <div className="space-y-0.5 pt-1 sm:pt-2">
                    <p className="text-[10.5px] sm:text-[11px] uppercase tracking-[0.26em] font-semibold text-ashara-charcoal dark:text-white transition-colors duration-300">
                      {item.clientName},
                    </p>
                    <p className="text-[10px] sm:text-[10.5px] uppercase tracking-[0.3em] font-normal text-gray-600 dark:text-gray-400 transition-colors duration-300">
                      {item.organization}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Quotation Mark in Soft Teal */}
          <div className="text-ashara-teal/60 dark:text-ashara-gold/60 text-5xl sm:text-7xl font-serif leading-none select-none flex justify-center pt-1 sm:pt-2 transition-colors duration-300">
            ”
          </div>

          {/* Carousel Navigation Indicators */}
          {testimonials.length > 1 && (
            <div className="flex items-center justify-center gap-3 pt-2 select-none">
              <button
                onClick={() => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                aria-label="Previous testimonial"
                className="p-1.5 text-gray-400 hover:text-ashara-teal dark:hover:text-ashara-gold transition rounded-full hover:bg-black/5 dark:hover:bg-white/5 focus:outline-none"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <div className="flex items-center gap-1.5">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Go to testimonial ${idx + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 focus:outline-none ${
                      idx === currentIndex
                        ? 'w-7 bg-ashara-teal dark:bg-ashara-gold'
                        : 'w-2 bg-gray-300 dark:bg-white/20 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={() => setCurrentIndex((prev) => (prev + 1) % testimonials.length)}
                aria-label="Next testimonial"
                className="p-1.5 text-gray-400 hover:text-ashara-teal dark:hover:text-ashara-gold transition rounded-full hover:bg-black/5 dark:hover:bg-white/5 focus:outline-none"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}

        </section>
      )}

    </div>
  );
}
