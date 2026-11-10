import React, { useState, useEffect } from 'react';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import { DEFAULT_PROJECTS_LIST } from '../data/defaultData';
import { getInitialProjects, subscribeToProjects } from '../services/firebaseService';

const EDITORIAL_FALLBACKS = [
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=90',
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1800&q=85',
  'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1800&q=85',
  'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=85',
  'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1800&q=85',
];

export default function ProjectDetailPage({ onNavigate, onSelectProject, project }) {
  const [allProjects, setAllProjects] = useState(() => getInitialProjects());

  useEffect(() => {
    const unsub = subscribeToProjects((list) => Array.isArray(list) && setAllProjects(list));
    return () => typeof unsub === 'function' && unsub();
  }, []);

  const activeProject = (project && allProjects.find((p) => String(p.id) === String(project.id))) || project || allProjects[0] || DEFAULT_PROJECTS_LIST[0];

  const projectImages = Array.from(new Set([
    activeProject.image || activeProject.fallbackImage,
    ...(Array.isArray(activeProject.gallery) ? activeProject.gallery : [])
  ].filter(Boolean)));

  const fullGallery = [...projectImages];
  let fallbackIdx = 0;
  while (fullGallery.length < 9) {
    fullGallery.push(EDITORIAL_FALLBACKS[fallbackIdx % EDITORIAL_FALLBACKS.length]);
    fallbackIdx++;
  }

  const [heroImage, featuredWide1, p1a, p1b, p2a, p2b, featuredWide2, p3a, p3b, ...remainingImages] = fullGallery;
  const recommendations = allProjects.filter((p) => String(p.id) !== String(activeProject.id)).slice(0, 2);

  const handleImageError = (e) => {
    e.target.onerror = null;
    const fallback = activeProject.fallbackImage || activeProject.image || DEFAULT_PROJECTS_LIST[0].image;
    if (fallback && e.target.src !== fallback) e.target.src = fallback;
  };

  const renderWide = (src, alt) => (
    <div className="w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-[16/10] max-h-[360px] sm:max-h-[520px] lg:max-h-[640px] overflow-hidden bg-gray-100 dark:bg-gray-800 shadow-sm">
      <img src={src} alt={alt} loading="lazy" decoding="async" onError={handleImageError} className="w-full h-full object-cover object-center" />
    </div>
  );

  const renderPair = (imgs, isVertical = false) => (
    <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
      {imgs.map((imgUrl, idx) => (
        <div key={idx} className={`w-full overflow-hidden bg-gray-100 dark:bg-gray-800 shadow-sm ${isVertical ? 'h-[60vh] sm:h-[75vh]' : 'aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/9]'}`}>
          <img src={imgUrl} alt={`${activeProject.title} Detail ${idx + 1}`} loading="lazy" decoding="async" onError={handleImageError} className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700 ease-out" />
        </div>
      ))}
    </div>
  );

  return (
    <div className="bg-white dark:bg-ashara-dark min-h-screen animate-fade-in transition-colors duration-300">
      <section className="relative w-full h-screen supports-[height:100svh]:h-[100svh] overflow-hidden bg-gray-100 dark:bg-gray-800">
        <img src={heroImage} alt={`${activeProject.title} Hero`} loading="eager" decoding="async" fetchpriority="high" onError={handleImageError} className="w-full h-full object-cover object-center" />
      </section>

      <div className="w-full px-6 sm:px-10 lg:px-16">
        <section className="py-14 sm:py-20 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 lg:gap-20 items-start">
            <div className="md:col-span-5">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[52px] leading-tight text-ashara-teal dark:text-white font-normal">{activeProject.title}</h1>
            </div>
            <div className="md:col-span-7">
              <p className="text-lg sm:text-xl leading-relaxed text-gray-700 dark:text-gray-300 font-light">{activeProject.description}</p>
            </div>
          </div>
        </section>

        <section className="space-y-6 lg:space-y-8 -mx-6 sm:-mx-10 lg:-mx-16">
          {renderWide(featuredWide1, `${activeProject.title} View 1`)}
          {renderPair([p1a, p1b])}
          <div className="py-20 sm:py-28 text-center max-w-4xl mx-auto px-4">
            <blockquote className="font-serif italic font-normal text-2xl sm:text-3xl lg:text-[34px] leading-relaxed text-ashara-teal dark:text-white">
              “Design with passion, authenticity, and positivity to create spaces that inspire and uplift the soul.”
            </blockquote>
          </div>
          {renderPair([p2a, p2b], true)}
          {renderWide(featuredWide2, `${activeProject.title} Panoramic`)}
          {renderPair([p3a, p3b])}
          {remainingImages.length > 0 && renderPair(remainingImages)}
        </section>

        <div className="text-center pt-16 sm:pt-20 pb-20 sm:pb-24">
          <button onClick={() => onNavigate && onNavigate('contact')} className="btn-ashara-outline">INQUIRE NOW</button>
        </div>

        <section aria-labelledby="you-may-like-heading" className="pb-28 sm:pb-36 text-center">
          <SectionTitle id="you-may-like-heading">You May Like</SectionTitle>
          <div className="max-w-[1700px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12 text-left">
            {recommendations.map((rec) => (
              <ProjectCard key={rec.id} work={rec} onSelect={onSelectProject} variant="detail" />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
