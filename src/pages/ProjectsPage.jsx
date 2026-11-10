import React, { useState, useEffect } from 'react';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import { getInitialProjects, subscribeToProjects } from '../services/firebaseService';
import sortProjects from '../utils/sortProjects';

export default function ProjectsPage({ onSelectProject }) {
  const [projects, setProjects] = useState(() => getInitialProjects());

  useEffect(() => {
    const unsub = subscribeToProjects((data) => Array.isArray(data) && setProjects(sortProjects(data)));
    return () => typeof unsub === 'function' && unsub();
  }, []);

  return (
    <div className="bg-[#FAF8F5] dark:bg-ashara-dark min-h-screen animate-fade-in transition-colors duration-300">
      <section className="bg-[#DF6D27] text-white min-h-[100svh] px-6 lg:px-12 flex flex-col items-center justify-center text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-6 relative z-10 w-full">
          <blockquote className="font-serif italic text-3xl sm:text-4xl lg:text-[56px] font-light leading-snug">
            “Design with passion, authenticity, and positivity to create spaces that inspire and uplift the soul.”
          </blockquote>
          <div className="space-y-2 pt-6">
            <p className="text-[12px] sm:text-sm uppercase tracking-[0.28em] font-bold text-white">Michael Dessalegn</p>
            <p className="text-[11px] sm:text-xs uppercase tracking-[0.32em] font-bold text-white/90">Founder, CEO and Architect</p>
          </div>
        </div>
      </section>

      <section aria-labelledby="projects-page-heading" className="max-w-[1700px] mx-auto px-6 sm:px-10 lg:px-16 pt-16 pb-24">
        <SectionTitle as="h1" id="projects-page-heading">Projects</SectionTitle>
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-x-6 sm:gap-x-10 gap-y-12 sm:gap-y-16">
          {projects.map((item) => (
            <ProjectCard key={item.id} work={item} onSelect={onSelectProject} variant="detail" />
          ))}
        </div>
      </section>
    </div>
  );
}
