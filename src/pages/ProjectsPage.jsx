import React from 'react';

export const PROJECTS_LIST = [
  {
    id: 1,
    title: 'Prosperity Party Office',
    category: 'GOVERNMENTAL',
    subtitle: 'GOVERNMENT SUB-OFFICE',
    image: '/assets/p1_prosperity.png',
    fallbackImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
    description: 'Ashara Interiors was commissioned to design a grand presidential state suite and governmental convention headquarters. Integrating monumental Ethiopian historical references with contemporary civic transparency, the project features bespoke coffered timber acoustic domes, structural cantilevered glass staircases, and executive ceremonial boardrooms.'
  },
  {
    id: 2,
    title: 'Ethiopia Federal Police',
    category: 'GOVERNMENTAL',
    subtitle: 'GOVERNMENTAL HEADQUARTERS',
    image: '/assets/p2_police.png',
    fallbackImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85',
    description: 'A modern, high-security civic campus combining robust raw industrial concrete finishes with acoustic modular panels, advanced climate automation, and efficient spatial routing for federal operations.'
  },
  {
    id: 3,
    title: 'Fana Broadcasting Corporation',
    category: 'PRIVATE ORGANIZATION',
    subtitle: 'BROADCASTING & MEDIA ATELIER',
    image: '/assets/p3_fana.png',
    fallbackImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85',
    description: 'A cutting-edge television and multimedia broadcast hub featuring circular parametric acoustic galleries, sound-isolated live recording suites, and sunlit collaborative editing studios.'
  },
  {
    id: 4,
    title: 'United Beverages',
    category: 'PRIVATE CORPORATION',
    subtitle: 'CORPORATE HEAD OFFICE',
    image: '/assets/p4_beverages.png',
    fallbackImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85',
    description: 'A grand neoclassical corporate palace featuring double-height marble entrance colonnades, gilded brass details, and private executive lounges that embody prestige and longevity.'
  },
  {
    id: 5,
    title: 'Amibara Properties',
    category: 'PRIVATE COMPANY',
    subtitle: 'COMMERCIAL REAL ESTATE HQ',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85',
    fallbackImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85',
    description: 'A dual-level contemporary commercial showpiece with dramatic glass-cantilevered staircase architecture, polished Italian terrazzo flooring, and floor-to-ceiling panoramic facade glazing.'
  },
  {
    id: 6,
    title: 'Minstry of Revenues',
    category: 'GOVERNMENTAL',
    subtitle: 'MINISTRY CIVIC COMPLEX',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85',
    fallbackImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85',
    description: 'A monumental civic dome auditorium incorporating geodesic timber space trusses, ambient indirect circadian lighting, and custom acoustical plasterwork designed for national assemblies.'
  }
];

export default function ProjectsPage({ onNavigate, onSelectProject }) {
  const handleProjectClick = (project) => {
    if (onSelectProject) {
      onSelectProject(project);
    }
    onNavigate('project-detail');
  };

  return (
    <div className="bg-white animate-fade-in pb-24">
      
      {/* 1. TERRACOTTA HERO BANNER matching Figma Image 3 */}
      <section className="relative bg-ashara-terracotta text-white overflow-hidden py-24 sm:py-32 px-6 lg:px-12 text-center">
        {/* Soft shadow texture simulation */}
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

      {/* 2. PROJECTS 2x3 GRID SECTION matching Figma Image 3 */}
      <section className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 pt-20 sm:pt-28 space-y-14">
        
        {/* Header with Divider Lines */}
        <div className="flex items-center justify-center gap-6 sm:gap-10">
          <div className="h-[1px] bg-gray-300 flex-1 max-w-[240px]"></div>
          <h2 className="font-serif text-3xl sm:text-4xl text-ashara-charcoal tracking-wide">
            Projects
          </h2>
          <div className="h-[1px] bg-gray-300 flex-1 max-w-[240px]"></div>
        </div>

        {/* 2x3 Project Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 lg:gap-14">
          {PROJECTS_LIST.map((item) => (
            <div
              key={item.id}
              onClick={() => handleProjectClick(item)}
              className="group cursor-pointer space-y-3.5"
            >
              {/* Project Image Container */}
              <div className="aspect-[4/3] overflow-hidden bg-gray-100 shadow-xs relative">
                <img
                  src={item.image}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = item.fallbackImage;
                  }}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Title & Category Subtitle */}
              <div>
                <h3 className="font-serif text-2xl sm:text-[26px] text-ashara-charcoal group-hover:text-ashara-teal transition">
                  {item.title}
                </h3>
                <p className="text-[9.5px] sm:text-[10px] uppercase tracking-[0.28em] text-gray-500 font-semibold mt-1">
                  {item.category}
                </p>
              </div>
            </div>
          ))}
        </div>

      </section>

    </div>
  );
}
