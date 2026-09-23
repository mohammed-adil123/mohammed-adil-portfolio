import React from 'react';

const ITEMS = [
  'FULL-STACK DEVELOPMENT',
  'MACHINE LEARNING & AI',
  'COMPUTER VISION',
  'RELATIONAL DATABASES',
  'CREATIVE WEB SYSTEMS',
  'RESTful API ARCHITECTURE',
  'INTERACTIVE EXPERIENCES',
  'QUALITY ASSURANCE & PRD',
];

export const MarqueeTicker: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden border-y border-white/[0.08] bg-[#070710] py-4 select-none">
      {/* Edge gradient masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#030308] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#030308] to-transparent z-10 pointer-events-none" />

      <div className="animate-marquee flex items-center gap-12 whitespace-nowrap">
        {/* Render repeated list to guarantee infinite looping */}
        {[...ITEMS, ...ITEMS, ...ITEMS].map((item, index) => (
          <div key={index} className="flex items-center gap-12">
            <span className="font-editorial text-sm sm:text-base tracking-[0.22em] text-white/70 font-semibold uppercase hover:text-[#ff2a55] transition-colors">
              {item}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff2a55]/60" />
          </div>
        ))}
      </div>
    </div>
  );
};
