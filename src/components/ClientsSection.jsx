import React, { useEffect, useRef } from 'react';

const CLIENTS = [
  { name: 'Artificial Intelligence Institute', image: './client_logos/eaii_institute.png', alt: 'Artificial Intelligence Institute' },
  { name: 'Prosperity Party', image: './client_logos/prosperity_party.png', alt: 'Prosperity Party' },
  { name: 'Customs Commission', image: './client_logos/customs_commission.png', alt: 'Customs Commission' },
  { name: 'FBC Media', image: './client_logos/fbc_media.png', alt: 'FBC Media' },
  { name: 'Ethiopian Press Agency', image: './client_logos/Ethiopian_Press_Agency.png', alt: 'Ethiopian Press Agency' },
  { name: 'Policy Studies Institute', image: './client_logos/bw_policy_studies_institute.jpg', alt: 'Policy Studies Institute' },
  { name: "Oromia President's Office", image: './client_logos/bw_oromia_president_office.jpg', alt: "Oromia President's Office" },
  { name: 'Ministry of Revenues', image: './client_logos/ministry_of_revenues.png', alt: 'Ministry of Revenues' },
  { name: 'Addis Ababa Police', image: './client_logos/addis_ababa_police.png', alt: 'Addis Ababa Police' },
  { name: 'Oromia Police', image: './client_logos/oromia_police.png', alt: 'Oromia Police' },
  { name: 'United Beverages', image: './client_logos/united_beverages.png', alt: 'United Beverages' },
  { name: 'Amibara Properties', image: './client_logos/amibara_properties.png', alt: 'Amibara Properties' },
  { name: 'Hill Bottom Recreation', image: './client_logos/bw_hill_bottom.jpg', alt: 'Hill Bottom Recreation' },
  { name: 'Mela Muziqa', image: './client_logos/bw_mela_muziqa.jpg', alt: 'Mela Muziqa' },
];

const ALL_CLIENTS = [...CLIENTS];

function AutoScrollTrack({ items, direction = 'left', speed = 0.5 }) {
  const scrollRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const exactScrollLeft = useRef(0);
  const hoverRef = useRef(false);

  useEffect(() => {
    let animationId;
    const el = scrollRef.current;
    if (!el) return;

    if (direction === 'right') {
      el.scrollLeft = el.scrollWidth / 2;
    }
    exactScrollLeft.current = el.scrollLeft;

    const animate = () => {
      if (!isDragging.current && !hoverRef.current) {
        if (direction === 'left') {
          exactScrollLeft.current += speed;
          if (exactScrollLeft.current >= el.scrollWidth / 2) {
            exactScrollLeft.current -= (el.scrollWidth / 2);
          }
        } else {
          exactScrollLeft.current -= speed;
          if (exactScrollLeft.current <= 0) {
            exactScrollLeft.current += (el.scrollWidth / 2);
          }
        }
        el.scrollLeft = exactScrollLeft.current;
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [direction, speed]);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
  };
  const handleMouseUp = () => { 
    isDragging.current = false; 
    exactScrollLeft.current = scrollRef.current.scrollLeft;
  };
  const handleMouseLeave = () => { 
    isDragging.current = false; 
    hoverRef.current = false; 
    exactScrollLeft.current = scrollRef.current.scrollLeft;
  };
  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
    exactScrollLeft.current = scrollRef.current.scrollLeft;
  };

  return (
    <div 
      ref={scrollRef}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => { hoverRef.current = true; exactScrollLeft.current = scrollRef.current.scrollLeft; }}
      onTouchStart={() => { isDragging.current = true; hoverRef.current = true; }}
      onTouchEnd={() => { isDragging.current = false; hoverRef.current = false; exactScrollLeft.current = scrollRef.current.scrollLeft; }}
      className="flex overflow-x-auto hide-scrollbar cursor-grab active:cursor-grabbing w-full"
    >
      <div className="flex whitespace-nowrap min-w-max">
        {items.map((client, i) => (
          <div key={`${client.name}-1-${i}`} className="flex-shrink-0 px-8 sm:px-12 py-5">
            <img
              src={client.image}
              alt={client.alt}
              loading="lazy"
              decoding="async"
              className="h-20 sm:h-24 max-w-[220px] object-contain grayscale opacity-60 transition-all duration-500 hover:grayscale-0 hover:opacity-100 hover:scale-110 dark:grayscale-0 dark:opacity-80 dark:brightness-125 dark:hover:opacity-100 dark:hover:brightness-150 cursor-pointer"
            />
          </div>
        ))}
        {items.map((client, i) => (
          <div key={`${client.name}-2-${i}`} className="flex-shrink-0 px-8 sm:px-12 py-5">
            <img
              src={client.image}
              alt={client.alt}
              loading="lazy"
              decoding="async"
              className="h-20 sm:h-24 max-w-[220px] object-contain grayscale opacity-60 transition-all duration-500 hover:grayscale-0 hover:opacity-100 hover:scale-110 dark:grayscale-0 dark:opacity-80 dark:brightness-125 dark:hover:opacity-100 dark:hover:brightness-150 cursor-pointer"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ClientsSection() {
  return (
    <div className="space-y-16 py-8">
      <section className="w-full text-center space-y-12">
        <h3 className="font-serif text-3xl sm:text-4xl text-ashara-charcoal dark:text-white font-normal tracking-wide transition-colors duration-300">
          Our Clients
        </h3>

        <div className="relative group overflow-hidden py-4">
          {/* Single Row - Left to Right */}
          <AutoScrollTrack items={ALL_CLIENTS} direction="left" speed={0.4} />

          {/* Gradient Fade Masks to blur the edges */}
          <div className="absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-[#FAF9F5] dark:from-[#070E18] to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-[#FAF9F5] dark:from-[#070E18] to-transparent pointer-events-none" />
        </div>
      </section>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
