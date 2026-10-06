import React from 'react';
import { DEFAULT_PROJECTS_LIST } from '../data/defaultData';
import asset_1 from '../assets/p6_revenues.png';
import ceoImage from '../assets/ceo_photo_original.png';

export default function AboutPage({ onNavigate, onSelectProject, isSection = false }) {
  const handleProjectClick = (projId) => {
    const proj = DEFAULT_PROJECTS_LIST.find((p) => p.id === projId) || DEFAULT_PROJECTS_LIST[0];
    if (onSelectProject) {
      onSelectProject(proj);
    } else if (onNavigate) {
      onNavigate('projects');
    }
  };

  return (
    <div className="bg-white dark:bg-ashara-dark min-h-screen animate-fade-in transition-colors duration-300">
      
      {/* 1. HERO IMAGE WITH TEXT OVERLAY */}
      <section className="w-full">
        <div className="relative w-full h-screen min-h-[500px] bg-black flex flex-col items-center justify-center text-center">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-80"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=85')` }}
          />
          <div className="relative z-10 space-y-2 text-white">
            <span className="text-[9px] uppercase tracking-[0.3em] font-semibold">
              WE CREATE
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-normal">
              About Us
            </h1>
          </div>
        </div>
      </section>

      {/* 2. TWO COLUMN INTRO */}
      <section className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="md:col-span-5">
            <h2 className="font-serif italic text-3xl sm:text-4xl text-ashara-teal dark:text-white font-light leading-tight">
              We create luxury interiors that stand the test of time.
            </h2>
          </div>
          <div className="md:col-span-7 space-y-6 text-[13px] leading-relaxed text-ashara-teal dark:text-white font-normal">
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
              architectural designs for a wide range of buildings, including residential,commercial,
              mixed-use, governmental bureaus, and hotels. Our team of highly creative and 
              services from project inception to completion, ensuring that we deliver exactly
              what our clients desire and more. We boast a professional and creative team with
              expertise in handling projects of varying scales
            </p>
          </div>
        </div>
      </section>

      {/* 3. FULL WIDTH IMAGE */}
      <section className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 pb-20">
        <div className="w-full aspect-[21/9] overflow-hidden bg-gray-200">
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
      <section className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 pb-12">
        <div className="bg-[#EBF2F2] dark:bg-white/5 grid grid-cols-1 md:grid-cols-2">
          {/* Image & CEO Profile */}
          <div className="flex flex-col items-center justify-center p-8 sm:p-12 lg:p-14 order-last md:order-first">
            <div className="w-full max-w-[360px] sm:max-w-[400px]">
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

                <blockquote className="font-serif italic text-sm sm:text-base leading-snug text-ashara-teal dark:text-white font-normal pl-3 border-l-2 border-ashara-teal/40 dark:border-ashara-gold/50">
                  &ldquo;Design with passion, authenticity, and positivity to create spaces that inspire and uplift the soul.&rdquo;
                </blockquote>
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

            <div className="space-y-4 text-[13px] leading-relaxed text-ashara-teal dark:text-white font-normal">
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
      <section className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 pb-12">
        <div className="bg-[#EBF2F2] dark:bg-white/5 grid grid-cols-1 md:grid-cols-2">
          <div className="p-10 lg:p-16 flex flex-col justify-center">
            <div className="flex items-center gap-6 mb-6">
              <h3 className="font-serif text-2xl text-ashara-teal dark:text-white font-normal whitespace-nowrap">Our Mission</h3>
              <div className="h-[1px] bg-gray-300 dark:bg-white/15 flex-1"></div>
            </div>
            <div className="space-y-4 text-[13px] leading-relaxed text-ashara-teal dark:text-white font-normal">
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
      <section className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 pb-24">
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
            <div className="space-y-4 text-[13px] leading-relaxed text-ashara-teal dark:text-white font-normal">
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
      {!isSection && (
        <section className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 pt-8 pb-24 space-y-12 text-center">
          
          {/* Title with horizontal lines */}
          <div className="flex items-center justify-center gap-6">
            <div className="h-[1px] bg-gray-300 dark:bg-white/15 flex-1 max-w-[120px]"></div>
            <h3 className="font-serif text-2xl sm:text-3xl text-ashara-teal dark:text-white font-normal">
              Recent Projects
            </h3>
            <div className="h-[1px] bg-gray-300 dark:bg-white/15 flex-1 max-w-[120px]"></div>
          </div>

          {/* 2 Project Cards Grid matching Figma (text below image) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12 text-left">
            
            {/* Card 1: Amibara Properties */}
            <article 
              onClick={() => handleProjectClick(5)}
              className="group cursor-pointer block"
            >
              <div className="w-full aspect-[4/3] overflow-hidden bg-gray-200 mb-4">
                <img
                  src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85"
                  alt="Amibara Properties"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div>
                <h4 className="font-serif text-xl sm:text-2xl text-ashara-teal dark:text-white mb-1 group-hover:text-ashara-teal transition-colors">
                  Amibara Properties
                </h4>
              </div>
            </article>

            {/* Card 2: Ministry of Revenues */}
            <article 
              onClick={() => handleProjectClick(6)}
              className="group cursor-pointer block"
            >
              <div className="w-full aspect-[4/3] overflow-hidden bg-gray-200 mb-4">
                <img
                  src={asset_1}
                  alt="Ministry of Revenues"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div>
                <h4 className="font-serif text-xl sm:text-2xl text-ashara-teal dark:text-white mb-1 group-hover:text-ashara-teal transition-colors">
                  Ministry of Revenues
                </h4>
              </div>
            </article>

          </div>

          {/* View All Projects Link */}
          <div className="pt-12 text-center">
            <button 
              onClick={() => onNavigate && onNavigate('projects')}
              className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] font-semibold text-ashara-teal dark:text-white hover:text-ashara-teal transition-colors"
            >
              VIEW ALL PROJECTS <span className="text-[12px] leading-none mb-0.5">&gt;</span>
            </button>
          </div>

        </section>
      )}

    </div>
  );
}
