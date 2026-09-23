import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Sparkles } from 'lucide-react';
import { TurntableCanvas } from './TurntableCanvas';

gsap.registerPlugin(ScrollTrigger);

interface Hero360SectionProps {
  onNavigate: (sectionId: string) => void;
}

export const Hero360Section: React.FC<Hero360SectionProps> = ({ onNavigate }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [manualScrubActive, setManualScrubActive] = useState<boolean>(false);

  useEffect(() => {
    const container = containerRef.current;
    const sticky = stickyRef.current;
    if (!container || !sticky) return;

    // Pin hero section across 240vh scroll height
    const st = ScrollTrigger.create({
      trigger: container,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.5, // subtle linear smoothing
      onUpdate: (self) => {
        if (!manualScrubActive) {
          setScrollProgress(self.progress);
        }
      },
    });

    return () => {
      st.kill();
    };
  }, [manualScrubActive]);

  const handleInteractiveScrub = (newProg: number) => {
    setManualScrubActive(true);
    setScrollProgress(newProg);
  };

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative w-full h-[260vh] bg-[#030308]"
    >
      {/* Sticky Fullscreen Turntable Stage */}
      <div
        ref={stickyRef}
        className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center pointer-events-auto"
      >
        {/* Subtle Ambient Red Rim Glow behind the subject */}
        <div className="absolute w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full bg-[#ff2a55]/15 blur-[140px] pointer-events-none -z-10 transform -translate-y-10" />

        {/* 360° Turntable Canvas (subject occupies 75-85% height, centered) */}
        <div className="relative w-full h-full max-w-7xl mx-auto flex items-center justify-center">
          <TurntableCanvas
            progress={scrollProgress}
            onInteractiveScrub={handleInteractiveScrub}
            className="w-full h-full"
          />
        </div>

        {/* ── MINIMAL EDITORIAL OVERLAYS (No text over face) ── */}

        {/* Top Left: Creator Identity & Kicker */}
        <div className="absolute top-20 md:top-24 left-6 md:left-12 pointer-events-none z-20 max-w-xs sm:max-w-sm">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff2a55] shadow-[0_0_8px_#ff2a55]" />
            <span className="font-mono text-[11px] tracking-[0.25em] text-[#ff2a55] uppercase font-semibold">
              Creative Developer
            </span>
          </div>
          <h2 className="font-editorial text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white leading-none">
            MOHAMMED ADIL
          </h2>
          <p className="font-mono text-xs text-white/50 tracking-wider mt-1">
            FULL-STACK &amp; AI SYSTEMS
          </p>
        </div>

        {/* Top Right: Status & Academic Origin */}
        <div className="absolute top-20 md:top-24 right-6 md:right-12 pointer-events-none z-20 text-right hidden sm:block">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-[11px] tracking-wider text-white/80">
              AVAILABLE FOR OPPORTUNITIES
            </span>
          </div>
          <p className="font-mono text-[11px] text-white/40 tracking-wider mt-2">
            NMAMIT NITTE • UDUPI, KA
          </p>
        </div>

        {/* Bottom Left: Main Headline & Pitch */}
        <div className="absolute bottom-16 md:bottom-20 left-6 md:left-12 pointer-events-none z-20 max-w-md lg:max-w-lg">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono text-white/50 tracking-widest uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#ff2a55]" />
            <span>Interactive 360° Portfolio</span>
          </div>
          <h1 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.08] mb-3">
            Building digital experiences that people remember.
          </h1>
          <p className="font-sans text-xs sm:text-sm text-white/70 leading-relaxed max-w-md hidden sm:block">
            Information Science &amp; Engineering undergraduate focused on scalable full-stack systems, machine learning architectures, and modern interactive craft.
          </p>
        </div>

        {/* Bottom Right: Quick Action CTAs */}
        <div className="absolute bottom-16 md:bottom-20 right-6 md:right-12 z-20 flex flex-col sm:flex-row items-end sm:items-center gap-3">
          <button
            onClick={() => onNavigate('projects')}
            className="btn-editorial-primary group"
            data-cursor="VIEW"
          >
            <span>View Selected Work</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className="btn-editorial-outline group"
            data-cursor="LINK"
          >
            <span>Let&apos;s Work Together</span>
          </button>
        </div>

        {/* Center Bottom: Scroll to Explore Indicator */}
        <div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none transition-opacity duration-300"
          style={{
            opacity: Math.max(0, 1 - scrollProgress * 6),
          }}
        >
          <span className="font-mono text-[10px] tracking-[0.3em] text-white/60 uppercase">
            Scroll to rotate 360°
          </span>
          <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-[#ff2a55] rounded-full animate-bounce" />
          </div>
        </div>

        {/* Editorial Corner Coordinate Markers */}
        <div className="absolute top-4 left-6 font-mono text-[9px] text-white/20 tracking-widest hidden md:block">
          SEC.01 // 360_TURNTABLE_HERO
        </div>
        <div className="absolute top-4 right-6 font-mono text-[9px] text-white/20 tracking-widest hidden md:block">
          [ ROTATION: {Math.round(scrollProgress * 360)}° ]
        </div>
        <div className="absolute bottom-4 left-6 font-mono text-[9px] text-white/20 tracking-widest hidden md:block">
          SYS.FRAME_BUFFER: 9_ANGLES_SYNCED
        </div>
        <div className="absolute bottom-4 right-6 font-mono text-[9px] text-white/20 tracking-widest hidden md:block">
          DRAG OR SCROLL TO ROTATE
        </div>
      </div>
    </section>
  );
};
