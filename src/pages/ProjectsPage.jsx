import React, { useState } from 'react';

export const PROJECTS_LIST = [
  {
    id: 1,
    title: 'Prosperity Party Office',
    category: 'GOVERNMENTAL',
    subtitle: 'GOVERNMENT SUB-OFFICE',
    image: './assets/p1_prosperity.png',
    fallbackImage: './client_logos/prosperity_party_hero.png',
    description: 'Ashara Interiors was commissioned to design a grand presidential state suite and governmental convention headquarters. Integrating monumental Ethiopian historical references with contemporary civic transparency, the project features bespoke coffered timber acoustic domes, structural cantilevered glass staircases, and executive ceremonial boardrooms.',
    gallery: [
      './client_logos/prosperity_party_hero.png',
      './client_logos/prosperity_party_main.jpg',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=90',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85'
    ]
  },
  {
    id: 2,
    title: 'Ethiopia Federal Police',
    category: 'GOVERNMENTAL',
    subtitle: 'GOVERNMENTAL HEADQUARTERS',
    image: './assets/p2_police.png',
    fallbackImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=90',
    description: 'A modern, high-security civic campus combining robust raw industrial concrete finishes with acoustic modular panels, advanced climate automation, and efficient spatial routing for federal operations.',
    gallery: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1800&q=90',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1800&q=90'
    ]
  },
  {
    id: 3,
    title: 'Fana Broadcasting Corporation',
    category: 'PRIVATE ORGANIZATION',
    subtitle: 'BROADCASTING & MEDIA ATELIER',
    image: './assets/p3_fana.png',
    fallbackImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85',
    description: 'A cutting-edge television and multimedia broadcast hub featuring circular parametric acoustic galleries, sound-isolated live recording suites, and sunlit collaborative editing studios.',
    gallery: [
      'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1800&q=90',
      'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1519643381401-22c77e60520e?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1800&q=90'
    ]
  },
  {
    id: 4,
    title: 'United Beverages',
    category: 'PRIVATE CORPORATION',
    subtitle: 'CORPORATE HEAD OFFICE',
    image: './assets/p4_beverages.png',
    fallbackImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=85',
    description: 'A grand neoclassical corporate palace featuring double-height marble entrance colonnades, gilded brass details, and private executive lounges that embody prestige and longevity.',
    gallery: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=90',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1548625361-16a9a7a67926?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1800&q=90'
    ]
  },
  {
    id: 5,
    title: 'Amibara Properties',
    category: 'PRIVATE COMPANY',
    subtitle: 'COMMERCIAL REAL ESTATE HQ',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85',
    fallbackImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85',
    description: 'A dual-level contemporary commercial showpiece with dramatic glass-cantilevered staircase architecture, polished Italian terrazzo flooring, and floor-to-ceiling panoramic facade glazing.',
    gallery: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1800&q=90',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1519643381401-22c77e60520e?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1548625361-16a9a7a67926?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1800&q=90'
    ]
  },
  {
    id: 6,
    title: 'Ministry of Revenues',
    category: 'GOVERNMENTAL',
    subtitle: 'MINISTRY CIVIC COMPLEX',
    image: './assets/p6_revenues.png',
    fallbackImage: './client_logos/ministry_of_revenues_hero.jpg',
    description: 'A monumental civic dome auditorium incorporating geodesic timber space trusses, ambient indirect circadian lighting, and custom acoustical plasterwork designed for national assemblies.',
    gallery: [
      './client_logos/ministry_of_revenues_hero.jpg',
      './client_logos/ministry_of_revenues_auditorium.jpg',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=90',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85'
    ]
  }
];

export default function ProjectsPage({ onNavigate, onSelectProject, isSection = false }) {
  const [selectedFilter, setSelectedFilter] = useState('ALL');

  const categories = ['ALL', 'GOVERNMENTAL', 'PRIVATE ORGANIZATION', 'PRIVATE CORPORATION', 'PRIVATE COMPANY'];

  const filteredProjects = selectedFilter === 'ALL'
    ? PROJECTS_LIST
    : PROJECTS_LIST.filter((p) => p.category === selectedFilter);

  const handleProjectClick = (project) => {
    if (onSelectProject) {
      onSelectProject(project);
    }
    if (onNavigate) {
      onNavigate('project-detail');
    }
  };

  return (
    <div className="bg-transparent animate-fade-in transition-colors duration-300">
      
      {/* Optional Terracotta Banner if rendered standalone */}
      {!isSection && (
        <section className="relative bg-ashara-terracotta text-white overflow-hidden py-24 sm:py-32 px-6 lg:px-12 text-center">
          <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-black/10 pointer-events-none"></div>
          <div className="max-w-3xl mx-auto space-y-6 relative z-10">
            <blockquote className="font-serif italic text-3xl sm:text-4xl lg:text-5xl font-light leading-snug sm:leading-tight">
              “Design with passion, authenticity, and positivity to create spaces that inspire and uplift the soul.”
            </blockquote>
            <div className="space-y-1 pt-3">
              <p className="text-[11px] sm:text-xs uppercase tracking-[0.28em] font-semibold text-white">
                DANIEL MESFIN
              </p>
              <p className="text-[9.5px] sm:text-[10px] uppercase tracking-[0.32em] font-light text-white/90">
                CREATIVE DIRECTOR
              </p>
            </div>
          </div>
        </section>
      )}

      {/* PROJECTS 2x3 GRID SECTION */}
      <section className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 pt-12 sm:pt-16 pb-12 space-y-10">
        
        {/* Header with Divider Lines */}
        <div className="flex items-center justify-center gap-6 sm:gap-10">
          <div className="h-[1px] bg-gray-300 dark:bg-white/10 flex-1 max-w-[240px]"></div>
          <h2 className="font-serif text-3xl sm:text-4xl text-ashara-charcoal dark:text-white tracking-wide transition-colors duration-300 text-center">
            Featured Projects
          </h2>
          <div className="h-[1px] bg-gray-300 dark:bg-white/10 flex-1 max-w-[240px]"></div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 pt-2">
          {categories.map((cat) => {
            const isActive = selectedFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`px-4 py-1.5 text-[9.5px] sm:text-[10px] uppercase tracking-[0.2em] font-medium transition-all duration-300 border ${
                  isActive
                    ? 'bg-ashara-teal text-white border-ashara-teal dark:bg-ashara-gold dark:text-ashara-dark dark:border-ashara-gold shadow-xs'
                    : 'bg-transparent text-gray-600 dark:text-gray-400 border-gray-200 dark:border-white/10 hover:border-ashara-teal dark:hover:border-ashara-gold hover:text-ashara-teal dark:hover:text-ashara-gold'
                }`}
              >
                {cat === 'ALL' ? 'All Works' : cat}
              </button>
            );
          })}
        </div>

        {/* 2x3 Project Cards Grid with Figma Teal/Green Bottom Label Cards */}
        <div key={selectedFilter} className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 pt-4 animate-fade-in">
          {filteredProjects.map((item) => (
            <div
              key={item.id}
              onClick={() => handleProjectClick(item)}
              className="group relative cursor-pointer aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-ashara-charcoal shadow-sm hover:shadow-2xl hover:-translate-y-2 active:scale-[0.98] transition-all duration-500 ease-out"
            >
              {/* Photo */}
              <img
                src={item.image}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = item.fallbackImage;
                }}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
              />

              {/* Signature Solid Forest Teal/Green Bottom Label Box matching Figma */}
              <div className="absolute inset-x-0 bottom-0 bg-ashara-teal/95 dark:bg-ashara-teal/95 backdrop-blur-[2px] p-5 sm:p-6 text-white transition-all duration-300 group-hover:bg-ashara-teal">
                <span className="text-[8.5px] sm:text-[9px] uppercase tracking-[0.28em] text-white/80 font-medium block">
                  {item.category || item.tag}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-normal mt-0.5 text-white">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </section>

    </div>
  );
}
