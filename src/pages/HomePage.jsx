import React, { useState, useEffect } from 'react';
import { ChevronDown, ArrowUp } from 'lucide-react';
import ClientsSection from '../components/ClientsSection';
import FullScreenHeroSlideshow from '../components/FullScreenHeroSlideshow';
import AccordionPanelCarousel from '../components/AccordionPanelCarousel';
import { DEFAULT_PROJECTS_LIST } from '../data/defaultData';
import ServicesPage from './ServicesPage';
import AboutPage from './AboutPage';
import BlogPage from './BlogPage';
import ContactPage from './ContactPage';
import { getInitialProjects, subscribeToProjects } from '../services/firebaseService';

export default function HomePage({ onNavigate, onSelectProject }) {
  const [slides, setSlides] = useState(() => getInitialProjects());
  const [featuredWorks, setFeaturedWorks] = useState(() => getInitialProjects());
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Real-time project subscription (instant cache + live updates)
  useEffect(() => {
    const unsubscribe = subscribeToProjects((data) => {
      if (data && data.length > 0) {
        // Sort by updatedAt/createdAt descending (newest first)
        const sorted = [...data].sort((a, b) => {
          const dateA = new Date(a.updatedAt || a.createdAt || 0).getTime();
          const dateB = new Date(b.updatedAt || b.createdAt || 0).getTime();
          return dateB - dateA;
        });
        setSlides(sorted);
        setFeaturedWorks(sorted);
      }
    });
    return () => {
      if (typeof unsubscribe === 'function') unsubscribe();
    };
  }, []);

  // Show "Back to Top" button on scroll down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 450) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCardClick = (work) => {
    if (onSelectProject) {
      if (work?.id === 'all' && onNavigate) {
        onNavigate('projects');
      } else {
        onSelectProject(work);
      }
    }
  };

  return (
    <div className="bg-transparent animate-fade-in space-y-20 sm:space-y-32 pb-24 transition-colors duration-300 relative">

      {/* 1. FULL-SCREEN HERO SLIDESHOW WITH AUTO CROSS-FADE */}
      <FullScreenHeroSlideshow
        onNavigate={onNavigate}
        onSelectProject={onSelectProject}
      />

      {/* 2. PHILOSOPHY QUOTE SECTION matching Figma */}
      <section className="max-w-4xl mx-auto px-6 text-center space-y-3 pt-4 sm:pt-8">
        <p className="text-[9.5px] sm:text-[10px] uppercase tracking-[0.32em] text-ashara-teal dark:text-ashara-gold font-semibold transition-colors duration-300">
          PHILOSOPHY
        </p>

        <blockquote className="font-serif italic text-2xl sm:text-4xl lg:text-[40px] text-ashara-charcoal dark:text-ashara-sand leading-relaxed font-light py-2 transition-colors duration-300">
          "Design with passion, authenticity, and positivity to create spaces that inspire and uplift the soul."
        </blockquote>
      </section>

      {/* 3. "OUR WORKS" ACCORDION EXPANDING IMAGE PANEL CAROUSEL */}
      <AccordionPanelCarousel
        works={featuredWorks}
        onSelectProject={handleCardClick}
      />

      {/* 4. SERVICES SECTION (How We Work & Interactive Accordion) */}
      <section className="border-t border-gray-100 dark:border-white/5 pt-10">
        <ServicesPage
          onNavigate={onNavigate}
          onSelectProject={onSelectProject}
          isSection={true}
        />
      </section>

      {/* 5. ABOUT US SECTION (Studio story, atelier, & 3 Core Value Pillars) */}
      <section className="border-t border-gray-100 dark:border-white/5 pt-10">
        <AboutPage
          onNavigate={onNavigate}
          onSelectProject={onSelectProject}
          isSection={true}
        />
      </section>

      {/* 6. THE ASHARA JOURNAL / BLOG SECTION */}
      <section className="border-t border-gray-100 dark:border-white/5 pt-10">
        <BlogPage isSection={true} />
      </section>

      {/* 7. OUR CLIENTS & TESTIMONIAL SECTION */}
      <ClientsSection />

      {/* 8. CONTACT & CONSULTATION ENQUIRY FORM */}
      <section className="border-t border-gray-100 dark:border-white/5 pt-10">
        <ContactPage isSection={true} />
      </section>

      {/* Floating "Back to Top" Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3 bg-ashara-teal/90 hover:bg-ashara-teal dark:bg-ashara-gold/90 dark:hover:bg-ashara-gold text-white dark:text-ashara-dark rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 focus:outline-none animate-fade-in"
          aria-label="Scroll back to top"
          title="Back to Top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

    </div>
  );
}