import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { TopNavbar } from './components/layout/TopNavbar';
import { MobileDrawer } from './components/layout/MobileDrawer';
import { HeroSpydyySection } from './components/hero/HeroSpydyySection';
import { CrissCrossMarquee } from './components/common/CrissCrossMarquee';
import { AboutSection } from './components/experience/AboutSection';
import { ProjectsSection } from './components/projects/ProjectsSection';
import { SkillsMatrix } from './components/skills/SkillsMatrix';
import { ExperienceSection } from './components/experience/ExperienceSection';
import { ContactSection } from './components/contact/ContactSection';
import { Footer } from './components/layout/Footer';
import { CustomCursor } from './components/common/CustomCursor';
import { Preloader } from './components/common/Preloader';

gsap.registerPlugin(ScrollTrigger);

export function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Initialize Lenis smooth scroll and synchronize with GSAP ScrollTrigger
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const updateTicker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  // Smooth section navigation
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const navOffset = sectionId === 'hero' ? 0 : 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  // Section observer to track active section while scrolling
  useEffect(() => {
    const sections = ['hero', 'about', 'projects', 'skills', 'experience', 'contact'];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 250;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#030308] text-[#f5f5f7] flex flex-col font-sans relative selection:bg-[#ff2a55]/30 selection:text-white">
      {/* Subtle film grain noise overlay */}
      <div className="noise-overlay" />

      {/* Luxury minimal preloader */}
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}

      {/* Custom magnetic spring cursor */}
      <CustomCursor />

      {/* Top sticky navigation */}
      <TopNavbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
      />

      {/* Fullscreen mobile drawer */}
      <MobileDrawer
        isOpen={isMobileMenuOpen}
        activeSection={activeSection}
        onClose={() => setIsMobileMenuOpen(false)}
        onNavigate={handleNavigate}
      />

      {/* Main page content sections */}
      <main className="flex-1 relative z-10">
        {/* Section 01: Spydyy-Inspired Superhero Mask Spotlight Reveal Hero */}
        <HeroSpydyySection onNavigate={handleNavigate} />

        {/* Dual Criss-Crossing 3D Angled Marquees (+4deg / -4deg) */}
        <CrissCrossMarquee />

        {/* Section 02: About Mohammed Adil */}
        <AboutSection onNavigate={handleNavigate} />

        {/* Section 03: Selected Work Editorial Showcase */}
        <ProjectsSection />

        {/* Section 04: Skills Matrix (Interactive Typography) */}
        <SkillsMatrix />

        {/* Section 05: Experience, Education & Certifications */}
        <ExperienceSection />

        {/* Section 06: Have an Idea? Contact Section & Final CTA */}
        <ContactSection />
      </main>

      {/* Minimal Editorial Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
