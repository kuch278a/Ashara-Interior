import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight, X } from 'lucide-react';

const BLOG_POSTS = [
  {
    id: 1,
    title: 'The Art of Bespoke Timber Craftsmanship in Addis Ababa',
    category: 'CRAFTSMANSHIP',
    date: 'August 24, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1519643381401-22c77e60520e?auto=format&fit=crop&w=1200&q=85',
    summary: 'Exploring Sophia Mesfin’s journey in collaborating with local master artisans to bring historic Ethiopian woodcarving heritage into contemporary corporate and residential spaces.',
    paragraphs: [
      'In an era dominated by flat modular surfaces and synthetic composites, Ashara Interiors is championing a return to the tactile soul of natural wood. Across East Africa, woodcarving holds a sacred place in cultural expression, historically reserved for cathedral confessionals, palace gates, and ceremonial chairs. Sophia Mesfin, founder of Ashara, believes this heritage holds the key to warm, grounded modern sanctuaries.',
      'Our studio recently collaborated with a collective of traditional woodworkers in Addis Ababa to design bespoke acoustic partition screens and structural panels. By utilizing seasoned local timber, the artisans hand-carve patterns inspired by classic Ethiopian geometry. These panels are not merely decorative; they serve essential acoustic purposes in grand boardrooms, softening echoes and creating a sensory-rich environment.',
      '“Wood is a living material that holds memory,” says Mesfin. “When a client touches a hand-planed walnut balustrade or a carved cedar portal, they connect with centuries of human touch. It establishes a sense of home and belonging that machine-cut elements simply cannot replicate.”'
    ]
  },
  {
    id: 2,
    title: 'Circadian Lighting in High-Performance Civic Architecture',
    category: 'LIGHTING DESIGN',
    date: 'August 12, 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85',
    summary: 'How intelligent circadian lighting automation is transforming employee well-being and visual comfort in federal headquarters and governmental bureaus.',
    paragraphs: [
      'Modern civic offices present unique architectural challenges. They are spaces of intense activity, long hours, and high security. To foster focus and reduce stress, Ashara Interiors has introduced smart circadian lighting systems inside federal headquarters, including the Customs Commission and Ministry of Revenues.',
      'Circadian lighting mimics the natural progression of sunlight throughout the day. In the early morning, the lights emit a crisp, blue-tinted cool white that stimulates alertness. As afternoon transitions into evening, the system automatically shifts toward a warm, golden glow, supporting the body’s natural release of melatonin.',
      'By integrating this automation with acoustic plasterwork and biophilic green walls, civic workspaces are transformed from cold, sterile environments into vibrant, healthy ecosystems that support human biology and elevate daily operations.'
    ]
  },
  {
    id: 3,
    title: 'Translating Cultural Heritage into Minimalist Sanctuaries',
    category: 'DESIGN PHILOSOPHY',
    date: 'July 28, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85',
    summary: 'A study on balancing classical design proportions and cultural identity with the clean, minimalist lines of contemporary luxury residential spaces.',
    paragraphs: [
      'How do we design a modern luxury home in Addis Ababa that feels globally sophisticated yet intrinsically Ethiopian? This question lies at the heart of Ashara’s design philosophy. The answer lies in classical proportions, authentic materiality, and spatial narrative.',
      'Rather than cluttering rooms with literal historical replicas, we translate cultural motifs into abstract design tokens. For example, a polished brass inlay on a terrazzo floor might subtly outline a classic weave pattern, or a custom light fixture might echo the shape of a traditional woven basket.',
      'By placing these elements against a backdrop of clean lines, double-height glazing, and natural stone, we create high-contrast spaces that feel both historic and futuristic—a sanctuary where heritage and modern luxury live in perfect equilibrium.'
    ]
  }
];

export default function BlogPage({ isSection = false }) {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <div className="bg-transparent transition-colors duration-300 animate-fade-in">
      
      {/* 1. HERO BANNER: Neoclassical Editorial Title */}
      <section className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 pt-12 sm:pt-16 pb-10 text-center space-y-3">
        <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.32em] text-ashara-teal dark:text-ashara-gold font-semibold">
          THE ASHARA JOURNAL
        </p>
        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-ashara-charcoal dark:text-white font-normal tracking-wide transition-colors duration-300">
          Insights & Monograph
        </h2>
        <div className="w-16 h-[2px] bg-ashara-teal dark:bg-ashara-gold mx-auto mt-4"></div>
      </section>

      {/* 2. FEATURED ARTICLES (2-Column Grid) */}
      <section className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {BLOG_POSTS.slice(0, 2).map((post) => (
            <div 
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="group cursor-pointer space-y-4"
            >
              <div className="aspect-[16/10] overflow-hidden bg-gray-100 dark:bg-ashara-charcoal shadow-xs relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700 ease-out"
                />
                <span className="absolute top-4 left-4 bg-ashara-teal dark:bg-ashara-gold text-white dark:text-ashara-dark text-[9px] uppercase tracking-[0.2em] font-semibold px-3 py-1 shadow-xs">
                  Featured
                </span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-4 text-[10.5px] text-gray-500 dark:text-gray-400 font-medium">
                  <span className="uppercase tracking-wider text-ashara-teal dark:text-ashara-gold">{post.category}</span>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{post.date}</span>
                  </div>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl text-ashara-charcoal dark:text-white group-hover:text-ashara-teal dark:group-hover:text-ashara-gold transition duration-300">
                  {post.title}
                </h2>
                <p className="text-xs sm:text-[13px] leading-relaxed text-gray-600 dark:text-gray-300 font-light line-clamp-2">
                  {post.summary}
                </p>
                <button className="flex items-center gap-1.5 text-[10.5px] uppercase tracking-[0.2em] font-semibold text-gray-800 dark:text-gray-200 group-hover:text-ashara-teal dark:group-hover:text-ashara-gold transition duration-200">
                  Read Article <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. MORE STORIES */}
      {BLOG_POSTS.length > 2 && (
        <section className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 pt-10 border-t border-gray-200 dark:border-white/10">
          <h3 className="font-serif text-2xl sm:text-3xl text-ashara-charcoal dark:text-white mb-8 tracking-wide transition-colors duration-300">
            More Stories
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {BLOG_POSTS.slice(2).map((post) => (
              <div 
                key={post.id}
                onClick={() => setSelectedPost(post)}
                className="group cursor-pointer space-y-3"
              >
                <div className="aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-ashara-charcoal shadow-xs">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700 ease-out"
                  />
                </div>
                <div className="space-y-1.5">
                  <div className="text-[10px] text-gray-500 dark:text-gray-400 font-medium">
                    <span className="uppercase tracking-wider text-ashara-teal dark:text-ashara-gold mr-3">{post.category}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h4 className="font-serif text-xl text-ashara-charcoal dark:text-white group-hover:text-ashara-teal dark:group-hover:text-ashara-gold transition duration-300 leading-snug">
                    {post.title}
                  </h4>
                  <p className="text-[11px] leading-relaxed text-gray-600 dark:text-gray-300 font-light line-clamp-2">
                    {post.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 3. FULL READ OVERLAY MODAL */}
      {selectedPost && (
        <div 
          onClick={() => setSelectedPost(null)}
          className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fade-in"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-ashara-dark w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl relative border border-gray-100 dark:border-white/5 transition-colors duration-300"
          >
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-4 right-4 z-10 bg-white/90 dark:bg-ashara-charcoal/90 text-gray-700 dark:text-gray-200 hover:text-ashara-teal dark:hover:text-ashara-gold p-2 rounded-full shadow-sm hover:scale-105 transition"
              aria-label="Close Article"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Article Image Header */}
            <div className="w-full aspect-[21/9] overflow-hidden bg-gray-100 dark:bg-ashara-charcoal">
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Article Content */}
            <div className="p-6 sm:p-10 space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-4 text-[11px] text-gray-500 dark:text-gray-400 font-medium">
                  <span className="uppercase tracking-[0.15em] text-ashara-teal dark:text-ashara-gold font-semibold">{selectedPost.category}</span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{selectedPost.readTime}</span>
                  </div>
                  <span>{selectedPost.date}</span>
                </div>
                
                <h2 className="font-serif text-3xl sm:text-4xl text-ashara-charcoal dark:text-white leading-tight">
                  {selectedPost.title}
                </h2>
              </div>

              {/* Clean Horizontal Divider */}
              <div className="h-[1px] bg-gray-200 dark:bg-white/10 w-full"></div>

              {/* Body Paragraphs */}
              <div className="font-serif text-[15px] sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300 space-y-6 font-light">
                {selectedPost.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {/* Footer CTA in Modal */}
              <div className="pt-6 flex justify-end">
                <button
                  onClick={() => setSelectedPost(null)}
                  className="px-6 py-2.5 bg-ashara-teal dark:bg-ashara-gold text-white dark:text-ashara-dark text-[10.5px] uppercase tracking-wider font-semibold hover:bg-ashara-teal-hover dark:hover:bg-ashara-gold/80 transition"
                >
                  Close Article
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
}
