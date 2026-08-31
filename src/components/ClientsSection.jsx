import React, { useState } from 'react';

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
    image: '/client_logos/Ethiopian_Press_Agency.png',
  },
  {
    name: 'Policy Studies Institute',
    amharic: 'የፖሊሲ ጥናት ኢንስቲትዩት',
    image: '/client_logos/bw_policy_studies_institute.jpg',
    isCard: true
  }
];

const ROW_2_CLIENTS = [
  {
    name: "Oromia President's Office",
    amharic: 'የኦሮሚያ ፕሬዝዳንት ጽህፈት ቤት',
    image: '/client_logos/bw_oromia_president_office.jpg',
    isCircle: true
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
    image: '/client_logos/bw_hill_bottom.jpg',
    isCard: true
  },
  {
    name: 'Mela Muziqa',
    image: '/client_logos/bw_mela_muziqa.jpg',
    isCard: true
  }
];

export default function ClientsSection() {
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
                <div className={`h-20 sm:h-24 w-28 sm:w-36 flex items-center justify-center ${item.isCard ? 'bg-white/90 dark:bg-white rounded-lg p-2 shadow-2xs' : ''}`}>
                  <img
                    src={item.image}
                    alt={item.name}
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
                <div className={`h-20 sm:h-24 w-24 sm:w-28 flex items-center justify-center ${item.isCircle ? 'rounded-full overflow-hidden bg-white shadow-2xs' : ''}`}>
                  <img
                    src={item.image}
                    alt={item.name}
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
                <div className={`h-16 sm:h-20 w-36 sm:w-44 flex items-center justify-center ${item.isCard ? 'bg-white/90 dark:bg-white rounded-lg p-2 shadow-2xs' : ''}`}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="max-h-16 sm:max-h-20 max-w-full object-contain grayscale contrast-125 opacity-80 group-hover:grayscale-0 group-hover:contrast-100 group-hover:opacity-100 group-hover:scale-110 transition-all duration-400 ease-out dark:grayscale-0 dark:opacity-100 dark:contrast-100 dark:group-hover:scale-110"
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
        <div className="text-ashara-teal/60 dark:text-ashara-gold/60 text-6xl sm:text-7xl font-serif leading-none select-none flex justify-center transition-colors duration-300">
          “
        </div>
        
        {/* Testimonial Body in Italic Serif / Cursive Script */}
        <blockquote className="font-serif italic text-2xl sm:text-3xl lg:text-[32px] text-gray-800 dark:text-gray-200 leading-relaxed font-light px-2 sm:px-6 transition-colors duration-300">
          “Ashara Interiors transformed our office space beyond our expectations. Their attention to detail and ability to deliver a luxurious, functional design within an incredibly tight deadline was remarkable.”
        </blockquote>

        {/* Attribution matching Figma */}
        <div className="space-y-0.5 pt-2">
          <p className="text-[10.5px] sm:text-[11px] uppercase tracking-[0.26em] font-semibold text-ashara-charcoal dark:text-white transition-colors duration-300">
            DEPUTY PRESIDENT'S OFFICE,
          </p>
          <p className="text-[10px] sm:text-[10.5px] uppercase tracking-[0.3em] font-normal text-gray-600 dark:text-gray-400 transition-colors duration-300">
            PROSPERITY PARTY HEADQUARTERS
          </p>
        </div>

        {/* Bottom Quotation Mark in Soft Teal */}
        <div className="text-ashara-teal/60 dark:text-ashara-gold/60 text-6xl sm:text-7xl font-serif leading-none select-none flex justify-center pt-2 transition-colors duration-300">
          ”
        </div>

      </section>

    </div>
  );
}
