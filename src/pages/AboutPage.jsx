import React, { useState, useEffect } from 'react';
import { getInitialProjects, subscribeToProjects } from '../services/firebaseService';
import asset_1 from '../assets/p6_revenues.jpg';
import ceoImage from '../assets/michael_dessalegn.jpg';

export default function AboutPage({ onNavigate, onSelectProject, isSection = false }) {
  const [projects, setProjects] = useState(() => getInitialProjects());

  useEffect(() => {
    const unsubscribe = subscribeToProjects((data) => {
      if (data && data.length > 0) {
        const sorted = [...data].sort((a, b) => {
          if (a.updatedAt && b.updatedAt) {
            const dateA = new Date(a.updatedAt).getTime();
            const dateB = new Date(b.updatedAt).getTime();
            if (!Number.isNaN(dateA) && !Number.isNaN(dateB) && dateA !== dateB) {
              return dateB - dateA;
            }
          }
          const idA = Number(a.id);
          const idB = Number(b.id);
          if (!Number.isNaN(idA) && !Number.isNaN(idB) && idA !== idB) {
            return idA - idB;
          }
          return 0;
        });
        setProjects(sorted);
      }
    });
    return () => {
      if (typeof unsubscribe === 'function') unsubscribe();
    };
  }, []);

  const recentProjects = projects.slice(0, 2);

  const handleProjectClick = (project) => {
    if (onSelectProject) {
      onSelectProject(project);
    } else if (onNavigate) {
      onNavigate('projects');
    }
  };

  return (
    <div className="bg-white dark:bg-ashara-dark min-h-screen animate-fade-in transition-colors duration-300">
      
      {/* 1. HERO IMAGE WITH TEXT OVERLAY */}
      <section className="w-full">
        <div className="relative w-full h-screen supports-[height:100svh]:h-[100svh] min-h-[500px] bg-black flex flex-col items-center justify-center text-center">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-80"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=85')` }}
          />
          <div className="relative z-10 space-y-2 text-white px-4">
            <span className="text-[14px] sm:text-[20px] uppercase tracking-[0.3em] font-semibold">
              WE CREATE
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal">
              About Us
            </h1>
          </div>
        </div>
      </section>

      {/* 2. TWO COLUMN INTRO */}
      <section className="max-w-6xl mx-auto px-5 sm:px-10 lg:px-16 py-12 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 lg:gap-20 items-start">
          <div className="md:col-span-5">
            <h2 className="font-serif italic text-2xl sm:text-3xl lg:text-4xl text-ashara-teal dark:text-white font-light leading-tight">
              We create luxury interiors that stand the test of time.
            </h2>
          </div>
          <div className="md:col-span-7 space-y-5 text-[13px] leading-relaxed text-ashara-teal dark:text-white font-normal">
            <p>
             Ashara Interiors is a company based in Addis Ababa, Ethiopia since 2021, that
             specializes in customizing spaces to enhance both their functionality and aesthetic
             quality. Our approach involves utilizing cutting-edge technology and modern
             materials to elevate the innovative and creative aspects of a space and enhance the
             overall experience. We provide services in product and architectural space design,
             focusing on emphasizing the functional details of each project.
            </p>
            <p>
              At Ashara Workshop, we specialize in designing master plans, interior designs, and
              architectural designs for a wide range of buildings, including residential, commercial,
              mixed-use, governmental bureaus, and hotels. Our team of highly creative and
              experienced professionals delivers comprehensive services from project inception to
              completion, ensuring that we deliver exactly what our clients desire and more. We
              boast a professional and creative team with expertise in handling projects of varying
              scales
            </p>
          </div>
        </div>
      </section>

      {/* 3. FULL WIDTH IMAGE */}
      <section className="w-full px-8 sm:px-12 pt-8 pb-24">
        <div className="w-full h-[360px] sm:h-[480px] lg:h-[600px] overflow-hidden bg-gray-200">
          <img
            src={asset_1}
            alt="Interior View"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {!isSection && (
        <>
          {/* 4. CEO STATEMENT (Image Left, Text Right) */}
      <section className="max-w-[1700px] mx-auto px-6 sm:px-10 lg:px-16 pb-12">
        <div className="bg-[#EBF2F2] dark:bg-white/5 grid grid-cols-1 md:grid-cols-2">
          {/* Image & CEO Profile */}
          <div className="flex flex-col items-center justify-center p-8 sm:p-12 lg:p-14 order-last md:order-first">
            <div className="w-full">
              <img
                src={ceoImage}
                alt="Michael Dessalegn - Founder, CEO and Architect"
                className="w-full h-auto object-contain select-none"
              />
              <div className="mt-5 text-left space-y-3">
                <div>
                  <h4 className="text-base sm:text-lg font-bold tracking-wider text-ashara-teal dark:text-white uppercase font-sans">
                    Michael Dessalegn
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-light mt-0.5">
                    Founder, CEO and Architect
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="p-10 lg:p-16 flex flex-col justify-center">
            <div className="flex items-center gap-6 mb-4">
              <h3 className="font-serif text-2xl text-ashara-teal dark:text-white font-normal whitespace-nowrap">CEO Statement</h3>
              <div className="h-[1px] bg-gray-300 dark:bg-white/15 flex-1"></div>
            </div>

            <p className="text-[11px] uppercase tracking-[0.25em] text-ashara-teal/70 dark:text-ashara-gold font-medium mb-6">
              &lsquo;We Customise Your Identity&rsquo;
            </p>

            <div className="space-y-4 text-[15px] leading-relaxed text-ashara-teal dark:text-white font-normal">
              <p>
                Welcome to our world of design and construction magic! As the founder, CEO, and Architect of Ashara interior design and build firm, I am thrilled to share our passion for creating inspiring spaces that reflect your unique style and personality. With a commitment to authenticity and a positive attitude, we approach every project with enthusiasm and dedication.
              </p>
              <p>
                Our team of talented professionals works tirelessly to bring your vision to life, combining creativity and expertise to deliver exceptional results. From concept to completion, we are dedicated to exceeding your expectations and creating spaces that truly inspire.
              </p>
              <p className="italic text-ashara-teal/90 dark:text-white/90">
                Join us on this exciting journey of transformation and let&rsquo;s create something truly extraordinary together. Thank you for choosing us to be a part of your design adventure!
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* 5. OUR MISSION (Text Left, Image Right) */}
      <section className="max-w-[1700px] mx-auto px-6 sm:px-10 lg:px-16 pb-12">
        <div className="bg-[#EBF2F2] dark:bg-white/5 grid grid-cols-1 md:grid-cols-2">
          <div className="p-10 lg:p-16 flex flex-col justify-center">
            <div className="flex items-center gap-6 mb-6">
              <h3 className="font-serif text-2xl text-ashara-teal dark:text-white font-normal whitespace-nowrap">Our Mission</h3>
              <div className="h-[1px] bg-gray-300 dark:bg-white/15 flex-1"></div>
            </div>
            <div className="space-y-4 text-[15px] leading-relaxed text-ashara-teal dark:text-white font-normal">
              <p>
                Our mission is to design and create spaces that radiate positivity, evoke emotions of happiness and wellbeing, and reflect the individuality of our clients through customized solutions.
              </p>
              <p>
                We strive to inspire and uplift those who interact with our designs, transforming spaces into meaningful and transformative environments.
              </p>
            </div>
          </div>
          <div className="h-[300px] md:h-auto">
            <img  
              src={asset_1}
              alt="Our Mission"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 5. OUR VISION (Image Left, Text Right) */}
      <section className="max-w-[1700px] mx-auto px-6 sm:px-10 lg:px-16 pb-24">
        <div className="bg-[#EBF2F2] dark:bg-white/5 grid grid-cols-1 md:grid-cols-2">
          <div className="h-[300px] md:h-auto order-last md:order-first">
            <img
              src={asset_1}
              alt="Our Vision"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-10 lg:p-16 flex flex-col justify-center">
            <div className="flex items-center gap-6 mb-6">
              <div className="h-[1px] bg-gray-300 dark:bg-white/15 flex-1"></div>
              <h3 className="font-serif text-2xl text-ashara-teal dark:text-white font-normal whitespace-nowrap">Our Vision</h3>
            </div>
            <div className="space-y-4 text-[15px] leading-relaxed text-ashara-teal dark:text-white font-normal">
              <p>
                Our vision is to be a leading interior design firm known for our commitment to positivity, customization, and creativity. We aim to continue creating spaces that bring joy, fulfillment, and inspiration to our clients, setting new standards in the industry for personalized and innovative design solutions. 
              </p>
              <p>
                Through our work, we aspire to make a positive impact on the lives of those who experience our designs, fostering connections and enhancing well-being through the power of thoughtful and intentional spaces
              </p>
            </div>
          </div>
        </div>
      </section>
        </>
      )}

      {/* 6. RECENT PROJECTS SECTION */}
      {!isSection && recentProjects.length > 0 && (
        <section className="max-w-[1700px] mx-auto px-6 sm:px-10 lg:px-16 pt-8 pb-24 space-y-12 text-center">

          {/* Title with horizontal lines */}
          <div className="flex items-center justify-center gap-6 mb-12 w-full">
            <div className="h-[5px] bg-gray-300 dark:bg-white/15 flex-1"></div>
            <h2 className="font-serif text-3xl sm:text-4xl text-ashara-teal dark:text-white font-normal h-[72px] px-2 flex items-center justify-center whitespace-nowrap">Recent Projects</h2>
            <div className="h-[5px] bg-gray-300 dark:bg-white/15 flex-1"></div>
          </div>

          {/* 2 Project Cards Grid matching Figma (text below image) */}
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-16 text-left">
            {recentProjects.map((item) => (
              <article
                key={item.id}
                role="button"
                tabIndex={0}
                onClick={() => handleProjectClick(item)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    if (e.key === ' ') e.preventDefault();
                    handleProjectClick(item);
                  }
                }}
                className="group cursor-pointer block"
              >
                <div className="w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/9] overflow-hidden bg-gray-200 mb-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = item.fallbackImage;
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
                <div>
                  <h4 className="font-serif text-xl sm:text-2xl text-ashara-teal dark:text-white mb-1 group-hover:text-ashara-teal transition-colors">
                    {item.title}
                  </h4>
                </div>
              </article>
            ))}
          </div>

          {/* View All Projects Link */}
          <div className="pt-12 text-center">
            <button
              type="button"
              onClick={() => onNavigate && onNavigate('projects')}
              className="text-[16px] uppercase tracking-[0.2em] font-bold transition-colors duration-200 text-ashara-teal/60 dark:text-white/60 hover:text-ashara-teal dark:hover:text-white pb-1 border-b border-transparent hover:border-ashara-teal dark:hover:border-white focus:outline-none focus-visible:ring-2 focus-visible:ring-ashara-gold"
            >
              VIEW ALL PROJECTS
            </button>
          </div>

        </section>
      )}

    </div>
  );
}
