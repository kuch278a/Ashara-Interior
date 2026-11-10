import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import ClientsSection from '../components/ClientsSection';
import Footer from '../components/Footer';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import HeroSlideshow from '../components/HeroSlideshow';
import TestimonialsCarousel from '../components/TestimonialsCarousel';
import sortProjects from '../utils/sortProjects';
import { DEFAULT_TESTIMONIALS_LIST } from '../data/defaultData';
import { getInitialProjects, subscribeToProjects, getInitialTestimonials, subscribeToTestimonials } from '../services/firebaseService';

const toCarouselTestimonials = (list) => {
  const mapItem = (t) => ({ quote: t.quote, author: t.clientName || t.author || '', company: t.organization || t.company || '' });
  const pick = (source) => {
    const items = Array.isArray(source) ? source : [];
    const featured = items.filter((t) => t.isFeatured);
    return (featured.length > 0 ? featured : items).map(mapItem).filter((t) => t.quote);
  };
  const res = pick(list);
  return res.length > 0 ? res : pick(DEFAULT_TESTIMONIALS_LIST);
};

export default function HomePage({ onNavigate, onSelectProject }) {
  const [works, setWorks] = useState(() => getInitialProjects());
  const [testimonials, setTestimonials] = useState(() => toCarouselTestimonials(getInitialTestimonials()));
  const [showScrollTop, setShowScrollTop] = useState(false);

  const heroWorks = works.filter((w) => w.isHero).length > 0 ? works.filter((w) => w.isHero) : works.slice(0, 10);
  const explicitAccordion = works.filter((w) => w.isOurWorks);
  const baseAccordion = explicitAccordion.length > 0 ? explicitAccordion : (works.length > 10 ? works.slice(10, 16) : works.slice(0, 6));
  const accordionWorks = baseAccordion.length >= 6
    ? baseAccordion.slice(0, 6)
    : [...baseAccordion, ...works.filter((w) => !baseAccordion.some((b) => String(b.id) === String(w.id)))].slice(0, 6);

  useEffect(() => {
    const unsubProjects = subscribeToProjects((data) => Array.isArray(data) && setWorks(sortProjects(data)));
    const unsubTestimonials = subscribeToTestimonials((data) => setTestimonials(toCarouselTestimonials(data)));
    const handleScroll = () => setShowScrollTop(window.scrollY > 450);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      if (typeof unsubProjects === 'function') unsubProjects();
      if (typeof unsubTestimonials === 'function') unsubTestimonials();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleCardClick = (work) => {
    if (!onSelectProject) return;
    if (work?.id === 'all' && onNavigate) onNavigate('projects');
    else onSelectProject(work);
  };

  return (
    <div className="bg-white dark:bg-ashara-dark animate-fade-in pb-0 transition-colors duration-300 relative">
      {/* 1. HERO SLIDESHOW */}
      <HeroSlideshow works={heroWorks} />

      {/* 2. PHILOSOPHY QUOTE */}
      <section aria-label="Studio Philosophy" className="max-w-6xl mx-auto px-5 sm:px-6 text-center pt-16 pb-16 sm:pt-28 sm:pb-28 lg:pt-44 lg:pb-48">
        <span className="block text-[14px] sm:text-[20px] uppercase tracking-[0.3em] font-semibold text-ashara-teal dark:text-white mb-4 sm:mb-6">
          WELCOME
        </span>
        <blockquote className="font-serif italic text-2xl sm:text-4xl lg:text-5xl text-ashara-teal dark:text-white leading-snug font-normal transition-colors duration-300 max-w-6xl mx-auto">
          “Design with passion, authenticity, and positivity<br />to create spaces that inspire and uplift the soul.”
        </blockquote>
      </section>

      {/* 3. OUR WORKS */}
      <section aria-labelledby="our-works-heading" className="max-w-[1400px] mx-auto px-3 sm:px-6 lg:px-8 text-center pt-8 sm:pt-12 pb-14 sm:pb-24">
        <SectionTitle id="our-works-heading">Our Works</SectionTitle>
        <div className="md:hidden grid grid-cols-2 gap-2">
          {accordionWorks.map((work) => (
            <ProjectCard key={work.id} work={work} onSelect={handleCardClick} variant="mobile" />
          ))}
        </div>
        <div className="hidden md:grid grid-cols-2 gap-4 max-w-6xl mx-auto">
          {accordionWorks.map((work) => (
            <ProjectCard key={work.id} work={work} onSelect={handleCardClick} variant="desktop" />
          ))}
        </div>
        <div className="mt-12">
          <button
            type="button"
            onClick={() => onNavigate && onNavigate('projects')}
            className="text-[16px] uppercase tracking-[0.2em] font-bold transition-colors duration-200 text-ashara-teal/60 dark:text-white/60 hover:text-ashara-teal dark:hover:text-white pb-1 border-b border-transparent hover:border-ashara-teal dark:hover:border-white focus:outline-none focus-visible:ring-2 focus-visible:ring-ashara-gold"
          >
            VIEW ALL PROJECTS
          </button>
        </div>
      </section>

      {/* 4. OUR CLIENTS */}
      <section aria-labelledby="our-clients-heading" className="max-w-[1400px] mx-auto px-3 sm:px-6 lg:px-8 text-center pt-8 sm:pt-16 pb-12 sm:pb-24">
        <SectionTitle id="our-clients-heading">Our Clients</SectionTitle>
        <ClientsSection />
      </section>

      {/* 5. TESTIMONIAL CAROUSEL */}
      <TestimonialsCarousel testimonials={testimonials} />

      {/* Floating Back to Top */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-40 p-3 bg-ashara-teal/90 hover:bg-ashara-teal text-white rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-ashara-gold animate-fade-in"
          aria-label="Scroll back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
