import React from 'react';

const ROW_1_CLIENTS = [
  {
    name: 'Prosperity Party',
    amharic: 'ብልጽግና ፓርቲ',
    image: '/client_logos/prosperity_party.png',
  },
  {
    name: 'Customs Commission',
    amharic: 'ጉምሩክ ኮሚሽን',
    image: '/client_logos/customs_commission.png',
  },
  {
    name: 'FBC Media',
    amharic: 'ፋና',
    image: '/client_logos/fbc_media.png',
  },
  {
    name: 'Ethiopian Press Agency',
    amharic: 'ኢፕድ',
    image: '/client_logos/ethiopian_press_agency.png',
  },
  {
    name: 'Education Assoc',
    amharic: 'ደራስያን ማህበር',
    isSvg: true
  }
];

const ROW_2_CLIENTS = [
  {
    name: 'Industrial Dev',
    isSvg: true
  },
  {
    name: 'Ministry of Revenues',
    amharic: 'የገቢዎች ሚኒስቴር',
    image: '/client_logos/ministry_of_revenues.png',
  },
  {
    name: 'Artificial Intelligence Institute',
    amharic: 'አርቲፊሻል ኢንተለጀንስ',
    image: '/client_logos/eaii_institute.png',
  },
  {
    name: 'Addis Ababa Police',
    amharic: 'አዲስ አበባ ፖሊስ',
    image: '/client_logos/addis_ababa_police.png',
  },
  {
    name: 'Oromia Police',
    amharic: 'Poolisii Oromiyaa',
    image: '/client_logos/oromia_police.png',
  }
];

const ROW_3_CLIENTS = [
  {
    name: 'United Beverages',
    image: '/client_logos/united_beverages.png',
  },
  {
    name: 'Amibara Properties',
    image: '/client_logos/amibara_properties.png',
  },
  {
    name: 'Hill Bottom Recreation',
    image: '/client_logos/hill_bottom.png',
  },
  {
    name: 'Mela Muziqa',
    image: '/client_logos/mela_muziqa.png',
  }
];

export default function ClientsSection() {
  return (
    <div className="space-y-20 py-8">
      
      {/* 1. OUR CLIENTS SECTION: Monochrome Black by default, Vibrant Color on Hover */}
      <section className="max-w-6xl mx-auto px-6 sm:px-10 text-center space-y-14">
        <h3 className="font-serif text-3xl sm:text-4xl text-ashara-charcoal font-normal tracking-wide">
          Our Clients
        </h3>

        {/* 3-Row Matrix */}
        <div className="space-y-12 sm:space-y-16 max-w-5xl mx-auto">
          
          {/* ================= ROW 1 (5 Governmental Emblems) ================= */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 sm:gap-10 items-center justify-items-center">
            {ROW_1_CLIENTS.map((item, idx) => (
              <div 
                key={idx} 
                className="flex flex-col items-center justify-center p-2 group cursor-default transition-transform duration-400"
              >
                {item.isSvg ? (
                  <svg className="w-20 h-20 text-gray-900 group-hover:text-ashara-teal group-hover:scale-110 transition-all duration-400" viewBox="0 0 100 100" fill="currentColor">
                    <path d="M50 48 L22 36 V68 L50 80 L78 68 V36 Z" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
                    <line x1="50" y1="48" x2="50" y2="80" stroke="currentColor" strokeWidth="3" />
                    <circle cx="50" cy="24" r="5" />
                    <path d="M42 34 C46 30 54 30 58 34 L50 42 Z" />
                  </svg>
                ) : (
                  <div className="h-20 sm:h-24 w-28 sm:w-36 flex items-center justify-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="max-h-20 sm:max-h-24 max-w-full object-contain grayscale contrast-125 opacity-80 group-hover:grayscale-0 group-hover:contrast-100 group-hover:opacity-100 group-hover:scale-110 transition-all duration-400 ease-out"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* ================= ROW 2 (5 Circular Medallion Seals) ================= */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 sm:gap-10 items-center justify-items-center">
            {ROW_2_CLIENTS.map((item, idx) => (
              <div 
                key={idx} 
                className="flex flex-col items-center justify-center p-2 group cursor-default transition-transform duration-400"
              >
                {item.isSvg ? (
                  <svg className="w-20 h-20 text-gray-900 group-hover:text-ashara-teal group-hover:scale-110 transition-all duration-400" viewBox="0 0 100 100" fill="currentColor">
                    <circle cx="50" cy="50" r="44" stroke="currentColor" strokeWidth="3" fill="none" />
                    <circle cx="50" cy="50" r="36" stroke="currentColor" strokeWidth="2" strokeDasharray="6 3" fill="none" />
                    <path d="M48 68 V52 C44 48 34 46 30 42 C30 36 42 34 50 34 C58 34 70 36 70 42 C66 46 56 48 52 52 V68 Z" />
                    <line x1="28" y1="68" x2="72" y2="68" stroke="currentColor" strokeWidth="3" />
                  </svg>
                ) : (
                  <div className="h-20 sm:h-24 w-24 sm:w-28 flex items-center justify-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="max-h-20 sm:max-h-24 max-w-full object-contain grayscale contrast-125 opacity-80 group-hover:grayscale-0 group-hover:contrast-100 group-hover:opacity-100 group-hover:scale-110 transition-all duration-400 ease-out"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* ================= ROW 3 (4 Corporate Brand Logos) ================= */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12 items-center justify-items-center pt-2">
            {ROW_3_CLIENTS.map((item, idx) => (
              <div 
                key={idx} 
                className="flex items-center justify-center p-2 group cursor-default transition-transform duration-400"
              >
                <div className="h-16 sm:h-20 w-36 sm:w-44 flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="max-h-16 sm:max-h-20 max-w-full object-contain grayscale contrast-125 opacity-80 group-hover:grayscale-0 group-hover:contrast-100 group-hover:opacity-100 group-hover:scale-110 transition-all duration-400 ease-out"
                  />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 2. TESTIMONIAL SECTION matching Figma Homepage */}
      <section className="max-w-3xl mx-auto px-6 text-center space-y-6">
        
        {/* Top Quotation Mark in Soft Teal */}
        <div className="text-ashara-teal/60 text-6xl sm:text-7xl font-serif leading-none select-none flex justify-center">
          “
        </div>
        
        {/* Testimonial Body in Italic Serif / Cursive Script */}
        <blockquote className="font-serif italic text-2xl sm:text-3xl lg:text-[32px] text-gray-800 leading-relaxed font-light px-2 sm:px-6">
          “Ashara Interiors transformed our office space beyond our expectations. Their attention to detail and ability to deliver a luxurious, functional design within an incredibly tight deadline was remarkable.”
        </blockquote>

        {/* Attribution matching Figma */}
        <div className="space-y-0.5 pt-2">
          <p className="text-[10.5px] sm:text-[11px] uppercase tracking-[0.26em] font-semibold text-ashara-charcoal">
            DEPUTY PRESIDENT'S OFFICE,
          </p>
          <p className="text-[10px] sm:text-[10.5px] uppercase tracking-[0.3em] font-normal text-gray-600">
            PROSPERITY PARTY HEADQUARTERS
          </p>
        </div>

        {/* Bottom Quotation Mark in Soft Teal */}
        <div className="text-ashara-teal/60 text-6xl sm:text-7xl font-serif leading-none select-none flex justify-center pt-2">
          ”
        </div>

      </section>

    </div>
  );
}
