import React, { useEffect, useState } from 'react';
import { Menu, ArrowUpRight } from 'lucide-react';

interface TopNavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenMobileMenu: () => void;
}

export const TopNavbar: React.FC<TopNavbarProps> = ({
  activeSection,
  onNavigate,
  onOpenMobileMenu,
}) => {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Work' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#030308]/80 backdrop-blur-md border-b border-white/[0.08] py-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Left: Brand Monogram */}
        <button
          onClick={() => onNavigate('hero')}
          className="group flex items-center gap-2 focus:outline-none"
          data-cursor="LINK"
        >
          <span className="font-editorial text-xl font-bold tracking-tight text-white group-hover:text-[#ff2a55] transition-colors">
            ADIL
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#ff2a55] transition-transform group-hover:scale-150" />
        </button>

        {/* Center / Right: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className={`font-mono text-xs uppercase tracking-[0.18em] transition-all relative py-1 ${
                  isActive
                    ? 'text-white font-medium'
                    : 'text-white/60 hover:text-white'
                }`}
                data-cursor="LINK"
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#ff2a55] shadow-[0_0_8px_#ff2a55]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/[0.04] text-xs font-mono uppercase tracking-wider text-white hover:border-[#ff2a55]/60 hover:bg-[#ff2a55]/10 hover:text-white transition-all duration-300"
            data-cursor="LINK"
          >
            <span>Let&apos;s Work Together</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#ff2a55]" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={onOpenMobileMenu}
          className="md:hidden p-2 text-white/80 hover:text-white focus:outline-none"
          aria-label="Open Mobile Menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
};
