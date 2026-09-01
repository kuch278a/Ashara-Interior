import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { DEFAULT_PROJECTS_LIST } from '../data/defaultData';

export default function ProjectDetailPage({ onNavigate, onSelectProject, project }) {
  // Fallback to the first project if none is active
  const activeProject = project || DEFAULT_PROJECTS_LIST[0];

  const gallery = activeProject.gallery || [
    activeProject.image || activeProject.fallbackImage,
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=90',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
    'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85',
    'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85',
    'https://images.unsplash.com/photo-1548625361-16a9a7a67926?auto=format&fit=crop&w=1200&q=85',
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1800&q=90'
  ];

  // Dynamic recommendations: Other projects from the list
  const recommendations = DEFAULT_PROJECTS_LIST.filter((p) => p.id !== activeProject.id).slice(0, 2);

  const handleRecommendationClick = (recProject) => {
    if (onSelectProject) {
      onSelectProject(recProject);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-white dark:bg-ashara-dark animate-fade-in pb-24 transition-colors duration-300">
      
      {/* Back button */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-8 pb-4">
        <button
          onClick={() => onNavigate('projects')}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-gray-600 dark:text-gray-400 hover:text-ashara-teal dark:hover:text-ashara-gold transition duration-200"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Projects</span>
        </button>
      </div>

      {/* 1. HERO: Main Project Showcase Image */}
      <section className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/10] max-h-[640px] overflow-hidden bg-gray-100 dark:bg-ashara-charcoal shadow-sm">
          <img
            src={activeProject.image || activeProject.fallbackImage}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = activeProject.fallbackImage || 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1800&q=90';
            }}
            alt={activeProject.title}
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* 2. PROJECT TITLE & NARRATIVE (2-Column Layout matching Figma) */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-12 sm:pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Left: Title & Subtitle */}
          <div className="md:col-span-5 space-y-1">
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ashara-charcoal dark:text-white font-normal transition-colors duration-300">
              {activeProject.title}
            </h1>
            <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400 font-semibold transition-colors duration-300">
              {activeProject.subtitle || activeProject.category || 'GOVERNMENT SUB-OFFICE'}
            </p>
          </div>

          {/* Right: Architectural Narrative */}
          <div className="md:col-span-7">
            <p className="text-xs sm:text-[13.5px] leading-relaxed sm:leading-loose text-gray-700 dark:text-gray-300 font-light transition-colors duration-300">
              {activeProject.description}
            </p>
          </div>

        </div>
      </section>

      {/* 3. FULL-WIDTH FEATURE: Feature Gallery Image 1 */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-6">
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/10] max-h-[580px] overflow-hidden bg-black shadow-md">
          <img
            src={gallery[0] || activeProject.fallbackImage}
            alt={`${activeProject.title} Detail 1`}
            className="w-full h-full object-cover hover:scale-102 transition-transform duration-700"
          />
        </div>
      </section>

      {/* 4. 2-COLUMN IMAGE GRID: Gallery Images 2 & 3 */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          <div className="aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-ashara-charcoal shadow-xs">
            <img
              src={gallery[1] || activeProject.fallbackImage}
              alt={`${activeProject.title} Detail 2`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-ashara-charcoal shadow-xs">
            <img
              src={gallery[2] || activeProject.fallbackImage}
              alt={`${activeProject.title} Detail 3`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </section>

      {/* 5. QUOTE BANNER: Sophia / Daniel Mesfin Quote matching Figma Image 5 */}
      <section className="max-w-4xl mx-auto px-6 py-12 text-center">
        <blockquote className="font-serif italic text-2xl sm:text-3xl lg:text-4xl text-ashara-charcoal dark:text-white leading-relaxed font-light transition-colors duration-300">
          “Design with passion, authenticity, and positivity to create spaces that inspire and uplift the soul.”
        </blockquote>
      </section>

      {/* 6. 2-COLUMN IMAGE GRID: Gallery Images 4 & 5 */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          <div className="aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-ashara-charcoal shadow-xs">
            <img
              src={gallery[3] || activeProject.fallbackImage}
              alt={`${activeProject.title} Detail 4`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-ashara-charcoal shadow-xs">
            <img
              src={gallery[4] || activeProject.fallbackImage}
              alt={`${activeProject.title} Detail 5`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </section>

      {/* 7. FULL-WIDTH IMAGE: Gallery Image 6 */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-6">
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/10] max-h-[580px] overflow-hidden bg-gray-100 dark:bg-ashara-charcoal shadow-sm">
          <img
            src={gallery[5] || gallery[0]}
            alt={`${activeProject.title} Detail 6`}
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* 8. ENQUIRE NOW Button (Outlined) */}
      <div className="text-center pt-10 pb-16">
        <button
          onClick={() => onNavigate('contact')}
          className="inline-block px-10 py-3 border border-gray-900 dark:border-white/20 text-ashara-charcoal dark:text-white text-[11px] uppercase tracking-[0.2em] font-medium hover:bg-ashara-teal dark:hover:bg-ashara-gold hover:text-white dark:hover:text-ashara-dark hover:border-ashara-teal dark:hover:border-ashara-gold transition duration-300 shadow-2xs"
        >
          ENQUIRE NOW
        </button>
      </div>

      {/* 9. "You May Like" Section matching Figma Image 5 */}
      <section className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 pt-12 space-y-12">
        
        {/* Heading with Divider Lines */}
        <div className="flex items-center justify-center gap-6 sm:gap-10">
          <div className="h-[1px] bg-gray-300 dark:bg-white/10 flex-1 max-w-[240px]"></div>
          <h3 className="font-serif text-2xl sm:text-3xl text-ashara-charcoal dark:text-white tracking-wide transition-colors duration-300">
            You May Like
          </h3>
          <div className="h-[1px] bg-gray-300 dark:bg-white/10 flex-1 max-w-[240px]"></div>
        </div>

        {/* 2 Project Recommendation Cards with Solid Teal Label Box */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {recommendations.map((rec) => (
            <div 
              key={rec.id}
              onClick={() => handleRecommendationClick(rec)}
              className="group relative cursor-pointer aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-ashara-charcoal shadow-sm hover:shadow-md transition-all duration-500"
            >
              <img
                src={rec.image}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = rec.fallbackImage;
                }}
                alt={rec.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-x-0 bottom-0 bg-ashara-teal/95 dark:bg-ashara-teal/95 backdrop-blur-[2px] p-5 sm:p-6 text-white transition-all duration-300">
                <span className="text-[8.5px] sm:text-[9px] uppercase tracking-[0.28em] text-white/80 font-medium block">
                  {rec.category || rec.subtitle}
                </span>
                <h4 className="font-serif text-xl sm:text-2xl font-normal mt-0.5 text-white">
                  {rec.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

      </section>

    </div>
  );
}
