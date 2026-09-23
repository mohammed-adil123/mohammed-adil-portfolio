import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ArrowRight, Download, Sparkles, Shield, Eye } from 'lucide-react';
import heroMaskImg from '../../assets/hero_mask.jpg';
import frame0Img from '../../assets/turntable/frame_0.jpg';

interface HeroSpydyySectionProps {
  onNavigate: (sectionId: string) => void;
}

export const HeroSpydyySection: React.FC<HeroSpydyySectionProps> = ({ onNavigate }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const maskLayerRef = useRef<HTMLImageElement>(null);

  // Spotlight reveal state
  const mouseCoords = useRef({
    x: typeof window !== 'undefined' ? window.innerWidth / 2 : 500,
    y: typeof window !== 'undefined' ? window.innerHeight / 2 : 400,
    alpha: 0, // 0 = reveal bottom unmasked layer at cursor center
    size: 160, // spotlight radius in px
  });

  const quickX = useRef<((val: number) => void) | null>(null);
  const quickY = useRef<((val: number) => void) | null>(null);

  // Manual identity reveal toggle for mobile or quick inspection
  const [manualMode, setManualMode] = useState<'interactive' | 'unmasked' | 'masked'>('interactive');

  useEffect(() => {
    // QuickTo smoothing for fluid mouse following
    quickX.current = gsap.quickTo(mouseCoords.current, 'x', { duration: 0.25, ease: 'power3.out' });
    quickY.current = gsap.quickTo(mouseCoords.current, 'y', { duration: 0.25, ease: 'power3.out' });

    const updateMask = () => {
      if (!maskLayerRef.current) return;

      if (manualMode === 'unmasked') {
        maskLayerRef.current.style.opacity = '0';
        return;
      }
      if (manualMode === 'masked') {
        maskLayerRef.current.style.opacity = '1';
        maskLayerRef.current.style.webkitMaskImage = 'none';
        maskLayerRef.current.style.maskImage = 'none';
        return;
      }

      maskLayerRef.current.style.opacity = '1';
      const { x, y, alpha, size } = mouseCoords.current;
      // Transparent at cursor (alpha 0) revealing Mohammed Adil's real face, opaque (1) outside revealing the mask!
      const maskGradient = `radial-gradient(circle ${size}px at ${x}px ${y}px, rgba(0,0,0,${alpha}) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,1) 100%)`;
      maskLayerRef.current.style.webkitMaskImage = maskGradient;
      maskLayerRef.current.style.maskImage = maskGradient;
    };

    gsap.ticker.add(updateMask);
    return () => {
      gsap.ticker.remove(updateMask);
    };
  }, [manualMode]);

  const handleMouseEnter = () => {
    if (manualMode !== 'interactive') return;
    gsap.to(mouseCoords.current, {
      size: 190,
      alpha: 0,
      duration: 0.6,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = () => {
    if (manualMode !== 'interactive') return;
    gsap.to(mouseCoords.current, {
      size: 80,
      alpha: 1, // blends back to full mask
      duration: 0.8,
      ease: 'power3.inOut',
    });
  };

  // Touch support for mobile dragging
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (manualMode !== 'interactive' || !maskLayerRef.current || e.touches.length === 0) return;
    const touch = e.touches[0];
    const rect = maskLayerRef.current.getBoundingClientRect();
    const relX = touch.clientX - rect.left;
    const relY = touch.clientY - rect.top;

    mouseCoords.current.x = relX;
    mouseCoords.current.y = relY;
    mouseCoords.current.alpha = 0;
    mouseCoords.current.size = 160;
  };

  const handleMouseMoveWithMask = (e: React.MouseEvent<HTMLDivElement>) => {
    if (manualMode !== 'interactive' || !maskLayerRef.current) return;
    const rect = maskLayerRef.current.getBoundingClientRect();
    const relX = e.clientX - rect.left;
    const relY = e.clientY - rect.top;

    quickX.current?.(relX);
    quickY.current?.(relY);
  };

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative w-full min-h-screen bg-[#030308] overflow-hidden flex items-center justify-center pt-24 pb-16 md:py-24 select-none cursor-crosshair"
      onMouseMove={handleMouseMoveWithMask}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchMove={handleTouchMove}
      data-cursor="EXPLORE"
    >
      {/* ── AMBIENT HERO LIGHTING & SPIDERWEB ATMOSPHERE ── */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#a31515]/20 blur-[160px] pointer-events-none -z-10" />
      <div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] rounded-full bg-[#ff2a55]/12 blur-[130px] pointer-events-none -z-10" />

      {/* Decorative spiderweb grid lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035] bg-[radial-gradient(#ff2a55_1px,transparent_1px)] [background-size:32px_32px]" />

      {/* ── CENTER STAGE: TWO-LAYER SPOTLIGHT HERO ── */}
      <div className="relative w-full max-w-7xl mx-auto min-h-[82vh] md:h-[88vh] flex items-center justify-between px-6 sm:px-10 lg:px-16">
        {/* Portrait Presentation Layer (Right / Center-Right zone on desktop) */}
        <div className="absolute inset-0 flex items-center justify-center lg:justify-end pointer-events-none z-10 overflow-hidden">
          <div className="relative w-full lg:w-[62%] h-[75vh] md:h-[88vh] flex items-center justify-center lg:translate-x-12 xl:translate-x-20">
            {/* Layer 1 (Bottom): Mohammed Adil Unmasked Real Identity */}
            <img
              src={frame0Img}
              alt="Mohammed Adil Real Identity"
              className="absolute inset-0 w-full h-full object-contain object-center pointer-events-none z-10 drop-shadow-[0_20px_50px_rgba(0,0,0,0.9)]"
            />

            {/* Layer 2 (Top): Mohammed Adil Masked Superhero Layer */}
            <img
              ref={maskLayerRef}
              src={heroMaskImg}
              alt="Superhero Mask Layer"
              className="absolute inset-0 w-full h-full object-contain object-center pointer-events-none z-20 transition-opacity duration-300 drop-shadow-[0_20px_50px_rgba(0,0,0,0.9)]"
              style={{
                WebkitMaskRepeat: 'no-repeat',
                maskRepeat: 'no-repeat',
              }}
            />
          </div>
        </div>

        {/* ── TYPOGRAPHY & HEADLINE OVERLAY (Never covers face) ── */}
        <div className="relative z-30 flex items-center justify-between w-full pointer-events-none">
          {/* Left Column: Bold Hero Branding & Actions */}
          <div className="flex flex-col gap-4 max-w-md lg:max-w-[460px] xl:max-w-[500px] drop-shadow-2xl">
            {/* Kicker badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#ff2a55]/10 border border-[#ff2a55]/30 text-[#ff2a55] font-mono text-xs uppercase tracking-widest font-semibold w-fit">
              <span className="w-2 h-2 rounded-full bg-[#ff2a55] shadow-[0_0_10px_#ff2a55] animate-pulse" />
              <span>Your Friendly Neighborhood Engineer</span>
            </div>

            {/* Hero Headline: Sized & bounded with generous clearance from portrait */}
            <h1
              className="font-editorial text-4xl sm:text-5xl lg:text-[54px] xl:text-[64px] font-black tracking-tight leading-[0.94] text-white uppercase italic"
              style={{
                textShadow: '3px 3px 0px #ef4444, 6px 6px 0px #a31515, 12px 12px 24px rgba(0,0,0,0.95)',
              }}
            >
              MOHAMMED
              <br />
              <span className="text-[#f5f5f7]">ADIL.</span>
            </h1>

            {/* Sub-headline with subtle dark blur card */}
            <p className="font-sans text-xs sm:text-sm text-white/80 font-medium leading-relaxed bg-[#030308]/75 backdrop-blur-md p-3.5 rounded-xl border border-white/10 shadow-lg">
              Information Science &amp; Engineering undergrad at <strong className="text-white font-bold">NMAMIT Nitte</strong>. Building high-performance full-stack web platforms and machine learning diagnostic systems.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1 pointer-events-auto">
              <button
                onClick={() => onNavigate('projects')}
                className="inline-flex items-center gap-2.5 bg-[#a31515] hover:bg-[#c51c1c] text-white px-6 py-3.5 rounded-xl font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-[0_8px_25px_rgba(163,21,21,0.45)] hover:shadow-[0_12px_35px_rgba(163,21,21,0.65)] hover:-translate-y-0.5 border border-red-500/40"
                data-cursor="VIEW"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="/Mohammed_Adil_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#0e0e1a]/90 hover:bg-black text-white px-5 py-3.5 rounded-xl font-mono text-xs font-bold uppercase tracking-wider border border-white/15 hover:border-[#ff2a55]/60 transition-all duration-300 hover:-translate-y-0.5 backdrop-blur-sm"
                data-cursor="LINK"
              >
                <Download className="w-4 h-4 text-[#ff2a55]" />
                <span>Resume (PDF)</span>
              </a>
            </div>

            {/* ── SPOTLIGHT IDENTITY CONTROLS (MOVED TO SIDE: NEVER COVERS FACE) ── */}
            <div className="pointer-events-auto p-3.5 rounded-2xl bg-[#030308]/85 backdrop-blur-md border border-white/10 space-y-2.5 shadow-2xl mt-1">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 text-xs font-mono text-[#ff2a55] font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Spotlight Identity Layer</span>
                </div>
                {/* Mode switch pills */}
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setManualMode('interactive')}
                    className={`px-2.5 py-1 rounded text-[10px] font-mono uppercase tracking-wider transition-all ${
                      manualMode === 'interactive'
                        ? 'bg-[#a31515] text-white font-bold shadow-[0_0_10px_rgba(163,21,21,0.6)]'
                        : 'bg-white/5 text-white/50 hover:text-white'
                    }`}
                  >
                    Spotlight
                  </button>
                  <button
                    onClick={() => setManualMode('masked')}
                    className={`px-2.5 py-1 rounded text-[10px] font-mono uppercase tracking-wider transition-all ${
                      manualMode === 'masked'
                        ? 'bg-[#a31515] text-white font-bold shadow-[0_0_10px_rgba(163,21,21,0.6)]'
                        : 'bg-white/5 text-white/50 hover:text-white'
                    }`}
                  >
                    <Shield className="w-3 h-3 inline mr-1" />
                    Mask
                  </button>
                  <button
                    onClick={() => setManualMode('unmasked')}
                    className={`px-2.5 py-1 rounded text-[10px] font-mono uppercase tracking-wider transition-all ${
                      manualMode === 'unmasked'
                        ? 'bg-[#a31515] text-white font-bold shadow-[0_0_10px_rgba(163,21,21,0.6)]'
                        : 'bg-white/5 text-white/50 hover:text-white'
                    }`}
                  >
                    <Eye className="w-3 h-3 inline mr-1" />
                    Real
                  </button>
                </div>
              </div>
              <p className="font-sans text-[11px] text-white/60 leading-relaxed">
                Hover over the portrait to reveal Mohammed Adil beneath the superhero mask.
              </p>
            </div>

            {/* Academic Specs Bar (To the side) */}
            <div className="inline-flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] text-white/50 tracking-wider bg-black/40 backdrop-blur-sm px-3.5 py-2 rounded-xl border border-white/5">
              <span>NMAMIT NITTE // ISE &apos;27</span>
              <span className="text-white/20">•</span>
              <span>CGPA: 7.56</span>
              <span className="text-white/20">•</span>
              <span className="text-[#ff2a55] font-semibold">AICTE NEAT 5.0 INTERN</span>
            </div>
          </div>
        </div>

        {/* Bottom Hint Banner */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-30 pointer-events-none text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/70 border border-white/10 backdrop-blur-md font-mono text-[10px] text-white/70 uppercase tracking-widest shadow-lg">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff2a55] animate-ping" />
            <span>Move cursor over portrait to reveal identity</span>
          </div>
        </div>
      </div>
    </section>
  );
};
