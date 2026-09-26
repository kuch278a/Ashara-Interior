import{r as o,j as t}from"./vendor-react-BvRb4Lds.js";import{g as f,s as b}from"./firebaseService-OvlsFaAM.js";import"./index-C-zMjXT0.js";import"./vendor-misc-6FZmOMZM.js";import"./vendor-firebase-core-Div3D1E4.js";import"./vendor-firebase-db-BEfpwyKh.js";const w=["ALL","GOVERNMENTAL","PRIVATE ORGANIZATION","PRIVATE CORPORATION","PRIVATE COMPANY"],j=l=>{const s=["span-h-2","span-h-1","span-h-1","span-h-2","span-h-1","span-h-1","span-h-2","span-h-1"];return s[l%s.length]};function R({onNavigate:l,onSelectProject:s,isSection:c=!1}){const[d,h]=o.useState(()=>f()),[i,x]=o.useState("ALL");o.useEffect(()=>{const e=b(a=>{if(a&&a.length>0){const n=[...a].sort((r,p)=>{const u=new Date(r.updatedAt||r.createdAt||0).getTime();return new Date(p.updatedAt||p.createdAt||0).getTime()-u});h(n)}});return()=>{typeof e=="function"&&e()}},[]);const m=i==="ALL"?d:d.filter(e=>(e.category||e.tag)===i),g=e=>{s&&s(e)};return t.jsxs("div",{className:"bg-transparent animate-fade-in transition-colors duration-300",children:[!c&&t.jsxs("section",{className:"relative bg-ashara-terracotta text-white overflow-hidden py-24 sm:py-32 px-6 lg:px-12 text-center",children:[t.jsx("div",{className:"absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-black/10 pointer-events-none"}),t.jsxs("div",{className:"max-w-3xl mx-auto space-y-6 relative z-10",children:[t.jsx("blockquote",{className:"font-serif italic text-3xl sm:text-4xl lg:text-5xl font-light leading-snug sm:leading-tight",children:'"Design with passion, authenticity, and positivity to create spaces that inspire and uplift the soul."'}),t.jsxs("div",{className:"space-y-1 pt-3",children:[t.jsx("p",{className:"text-[11px] sm:text-xs uppercase tracking-[0.28em] font-semibold text-white",children:"Biruk Esayas"}),t.jsx("p",{className:"text-[9.5px] sm:text-[10px] uppercase tracking-[0.32em] font-light text-white/90",children:"CREATIVE DIRECTOR"})]})]})]}),t.jsxs("section",{className:"max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 pt-12 sm:pt-16 pb-12 space-y-10",children:[t.jsxs("div",{className:"flex items-center justify-center gap-6 sm:gap-10",children:[t.jsx("div",{className:"h-[1px] bg-gray-300 dark:bg-white/10 flex-1 max-w-[240px]"}),t.jsx("h2",{className:"font-serif text-3xl sm:text-4xl text-ashara-charcoal dark:text-white tracking-wide transition-colors duration-300 text-center",children:"Featured Projects"}),t.jsx("div",{className:"h-[1px] bg-gray-300 dark:bg-white/10 flex-1 max-w-[240px]"})]}),t.jsx("div",{className:"flex items-center justify-center flex-wrap gap-2 sm:gap-3 pt-2",children:w.map(e=>{const a=i===e;return t.jsx("button",{onClick:()=>x(e),className:`px-5 py-2 text-[9.5px] sm:text-[10px] uppercase tracking-[0.2em] font-medium transition-all duration-300 border rounded-full ${a?"bg-ashara-teal text-white border-ashara-teal dark:bg-ashara-gold dark:text-ashara-dark dark:border-ashara-gold shadow-xs":"bg-transparent text-gray-600 dark:text-gray-400 border-gray-200 dark:border-white/10 hover:border-ashara-teal dark:hover:border-ashara-gold hover:text-ashara-teal dark:hover:text-ashara-gold"}`,children:e==="ALL"?"All Works":e},e)})}),t.jsx("div",{className:"masonry-grid animate-fade-in",children:m.map((e,a)=>{const n=j(a);return t.jsxs("article",{onClick:()=>g(e),className:`masonry-item group relative cursor-pointer overflow-hidden rounded-2xl sm:rounded-3xl bg-gray-100 dark:bg-ashara-charcoal shadow-sm hover:shadow-2xl hover:-translate-y-2 active:scale-[0.98] transition-all duration-500 ease-out border border-black/5 dark:border-white/10 ${n}`,children:[t.jsx("img",{src:e.image,loading:"lazy",decoding:"async",onError:r=>{r.target.onerror=null,r.target.src=e.fallbackImage},alt:e.title,className:"w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"}),t.jsxs("div",{className:"absolute inset-x-0 bottom-0 bg-ashara-teal/95 dark:bg-ashara-teal/95 backdrop-blur-[2px] p-5 sm:p-6 text-white transition-all duration-300 group-hover:bg-ashara-teal",children:[t.jsx("span",{className:"text-[8.5px] sm:text-[9px] uppercase tracking-[0.28em] text-white/80 font-medium block",children:e.category||e.tag}),t.jsx("h3",{className:"font-serif text-xl sm:text-2xl font-normal mt-0.5 text-white",children:e.title})]})]},e.id)})},i)]}),t.jsx("style",{jsx:!0,children:`
        .masonry-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 1.5rem;
          grid-auto-flow: dense;
        }
        
        @media (min-width: 640px) {
          .masonry-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }
        }
        
        @media (min-width: 1024px) {
          .masonry-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;
          }
        }
        
        @media (min-width: 1280px) {
          .masonry-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 2rem;
          }
        }
        
        /* Height variations for masonry effect */
        .span-h-1 {
          grid-row: span 3;
        }
        
        .span-h-2 {
          grid-row: span 5;
        }
        
        /* Aspect ratio fallback for items without explicit span */
        .masonry-item {
          min-height: 280px;
        }
        
        .span-h-1 {
          min-height: 320px;
        }
        
        .span-h-2 {
          min-height: 480px;
        }
        
        @media (min-width: 640px) {
          .span-h-1 { min-height: 360px; }
          .span-h-2 { min-height: 540px; }
        }
        
        @media (min-width: 1024px) {
          .span-h-1 { min-height: 340px; }
          .span-h-2 { min-height: 500px; }
        }
        
        @media (min-width: 1280px) {
          .span-h-1 { min-height: 300px; }
          .span-h-2 { min-height: 440px; }
        }
      `})]})}export{R as default};
