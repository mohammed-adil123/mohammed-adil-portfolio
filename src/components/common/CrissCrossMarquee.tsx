import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const MARQUEE_ITEMS_1 = [
  'FULL-STACK DEVELOPMENT',
  'MACHINE LEARNING & AI',
  'COMPUTER VISION (OpenCV)',
  'RESTful API ARCHITECTURE',
  'RELATIONAL DATABASES (3NF)',
  'SYSTEMS ENGINEERING',
];

const MARQUEE_ITEMS_2 = [
  'PYTHON & SCIKIT-LEARN',
  'FLASK & NODE.JS',
  'MS SQL SERVER & POSTGRESQL',
  'GSAP & LENIS SMOOTH MOTION',
  'SOFTWARE QA & WCAG STANDARDS',
  'ALGORITHMS & DATA STRUCTURES',
];

export const CrissCrossMarquee: React.FC = () => {
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);
  const tween1 = useRef<gsap.core.Tween | null>(null);
  const tween2 = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    if (row1Ref.current && row2Ref.current) {
      // Row 1 moves left
      tween1.current = gsap.to(row1Ref.current, {
        x: '-50%',
        repeat: -1,
        duration: 20,
        ease: 'none',
      });

      // Row 2 starts at -50% and moves right to 0%
      gsap.set(row2Ref.current, { x: '-50%' });
      tween2.current = gsap.to(row2Ref.current, {
        x: '0%',
        repeat: -1,
        duration: 25,
        ease: 'none',
      });
    }

    return () => {
      tween1.current?.kill();
      tween2.current?.kill();
    };
  }, []);

  const handleMouseEnter = () => {
    if (tween1.current && tween2.current) {
      gsap.to([tween1.current, tween2.current], { timeScale: 0.25, duration: 0.5 });
    }
  };

  const handleMouseLeave = () => {
    if (tween1.current && tween2.current) {
      gsap.to([tween1.current, tween2.current], { timeScale: 1.0, duration: 0.5 });
    }
  };

  const renderRibbon = (items: string[], isPrimary: boolean) => (
    <div className="flex items-center h-full whitespace-nowrap">
      {[...items, ...items, ...items, ...items].map((text, i) => (
        <div key={i} className="flex items-center">
          <span className="font-editorial text-sm sm:text-base lg:text-lg font-black tracking-widest uppercase italic px-4 drop-shadow-sm">
            {text}
          </span>
          <span
            className={`w-2 h-2 rounded-full mx-3 ${
              isPrimary ? 'bg-white' : 'bg-[#ff2a55]'
            }`}
          />
        </div>
      ))}
    </div>
  );

  return (
    <div
      className="relative w-full h-32 md:h-44 bg-[#030308] overflow-hidden flex items-center justify-center z-30 select-none -mt-4 mb-12"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* ── Ribbon 1: Angled +4 degrees (Crimson Spider Red) ── */}
      <div className="absolute w-[120vw] h-12 md:h-14 lg:h-16 bg-[#a31515] text-white border-y-[3px] border-black rotate-[3.5deg] -translate-y-3 md:-translate-y-4 shadow-[0_12px_30px_rgba(0,0,0,0.85)] z-20 flex items-center overflow-hidden scale-105">
        <div ref={row1Ref} className="flex items-center h-full w-max">
          {renderRibbon(MARQUEE_ITEMS_1, true)}
        </div>
      </div>

      {/* ── Ribbon 2: Angled -4 degrees (Dark Stealth Ribbon) ── */}
      <div className="absolute w-[120vw] h-12 md:h-14 lg:h-16 bg-[#0a0a14] text-[#ff2a55] border-y-[3px] border-[#a31515]/70 rotate-[-3.5deg] translate-y-3 md:translate-y-4 shadow-[0_8px_25px_rgba(0,0,0,0.9)] z-10 flex items-center overflow-hidden scale-105">
        <div ref={row2Ref} className="flex items-center h-full w-max">
          {renderRibbon(MARQUEE_ITEMS_2, false)}
        </div>
      </div>
    </div>
  );
};
