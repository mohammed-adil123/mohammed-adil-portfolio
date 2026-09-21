import { useState, useEffect } from 'react';
import { TopNavbar } from './components/layout/TopNavbar';
import { MobileDrawer } from './components/layout/MobileDrawer';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/hero/HeroSection';
import { SkillsMatrix } from './components/skills/SkillsMatrix';
import { ProjectsSection } from './components/projects/ProjectsSection';
import { AboutSection } from './components/experience/AboutSection';
import { BlogSection } from './components/blog/BlogSection';
import { ContactSection } from './components/contact/ContactSection';
import { CvModal } from './components/common/CvModal';
import { FloatingCTA } from './components/common/FloatingCTA';

export function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isCvModalOpen, setIsCvModalOpen] = useState<boolean>(false);

  // Smooth scroll to section
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const navOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  // IntersectionObserver to track active section while scrolling
  useEffect(() => {
    const sections = ['hero', 'skills', 'projects', 'about', 'experience', 'education', 'blog', 'contact'];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
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
    <div className="min-h-screen text-on-surface selection:bg-[rgba(124,58,237,0.30)] selection:text-white flex flex-col font-sans relative" style={{ background: '#05050f' }}>

      {/* ── ANIMATED AURORA BLOBS (fixed, behind everything) ── */}
      <div className="aurora-blob-1" />
      <div className="aurora-blob-2" />
      <div className="aurora-blob-3" />
      <div className="aurora-blob-4" />

      {/* Top sticky navigation */}
      <TopNavbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
        onOpenCvModal={() => setIsCvModalOpen(true)}
      />

      {/* Mobile drawer menu */}
      <MobileDrawer
        isOpen={isMobileMenuOpen}
        activeSection={activeSection}
        onClose={() => setIsMobileMenuOpen(false)}
        onNavigate={handleNavigate}
        onOpenCvModal={() => setIsCvModalOpen(true)}
      />

      {/* Main page content sections */}
      <main className="flex-1 relative z-10">
        <HeroSection
          onNavigate={handleNavigate}
          onOpenCvModal={() => setIsCvModalOpen(true)}
        />
        <SkillsMatrix />
        <ProjectsSection />
        <AboutSection activeSection={activeSection} />
        <BlogSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Floating animated CTA + Scroll-to-top */}
      <FloatingCTA onContactClick={() => handleNavigate('contact')} />

      {/* Curriculum Vitae Modal */}
      <CvModal
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
      />
    </div>
  );
}

export default App;
