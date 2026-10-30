import React from 'react';

// Section heading flanked by horizontal rules ("Our Works", "Our Clients")
export default function SectionTitle({ children }) {
  return (
    <div className="flex items-center justify-center gap-6 mb-12 w-full">
      <div className="h-[5px] bg-gray-300 dark:bg-white/15 flex-1"></div>
      <h2 className="font-serif text-3xl sm:text-4xl text-ashara-teal dark:text-white font-normal w-[260px] h-[72px] flex items-center justify-center">
        {children}
      </h2>
      <div className="h-[5px] bg-gray-300 dark:bg-white/15 flex-1"></div>
    </div>
  );
}
