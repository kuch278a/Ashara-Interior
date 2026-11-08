import React from 'react';

// Section heading flanked by horizontal rules ("Our Works", "Our Clients")
export default function SectionTitle({ children, id, as: Component = 'h2', className = '' }) {
  return (
    <div className={`flex items-center justify-center gap-6 mb-12 w-full ${className}`}>
      <div className="section-hairline" aria-hidden="true" />
      <Component
        id={id}
        className="font-serif text-3xl sm:text-4xl text-ashara-teal dark:text-white font-normal min-w-[200px] px-4 h-[72px] flex items-center justify-center text-center whitespace-nowrap"
      >
        {children}
      </Component>
      <div className="section-hairline" aria-hidden="true" />
    </div>
  );
}
