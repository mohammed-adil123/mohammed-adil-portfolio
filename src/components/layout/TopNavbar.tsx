import React from 'react';
import { Menu, FileText, ArrowRight } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

interface TopNavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenMobileMenu: () => void;
  onOpenCvModal: () => void;
}

export const TopNavbar: React.FC<TopNavbarProps> = ({
  activeSection,
  onNavigate,
  onOpenMobileMenu,
  onOpenCvModal,
}) => {
  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'blog', label: 'Articles' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 w-full z-40 backdrop-blur-xl border-b transition-all" style={{background:'rgba(5,5,15,0.82)', borderColor:'rgba(124,58,237,0.18)'}}>
      <div className="flex justify-between items-center max-w-[1240px] mx-auto px-4 sm:px-6 h-16">
        {/* Brand Logo */}
        <button
          onClick={() => onNavigate('hero')}
          className="font-mono font-bold tracking-tight text-on-surface flex items-center gap-2 group transition-all duration-200 cursor-pointer text-left"
          title="Mohammed Adil - Portfolio"
        >
          <span className="px-2 py-0.5 rounded bg-surface-variant text-tertiary border border-outline-variant/30 text-xs font-mono">
            &lt;dev/&gt;
          </span>
          <span className="tracking-tight text-sm sm:text-base font-semibold text-white group-hover:text-primary transition-colors">
            {PERSONAL_INFO.name}
          </span>
        </button>

        {/* Center Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 text-xs font-mono" aria-label="Main Navigation">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-3 py-1.5 rounded-md transition-all duration-150 cursor-pointer ${
                  isActive
                    ? 'text-white bg-[rgba(124,58,237,0.18)] border border-[rgba(167,139,250,0.40)] shadow-glow-primary'
                    : 'text-on-surface-variant hover:text-white hover:bg-[rgba(167,139,250,0.06)]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Trailing Action Cluster */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* GitHub / Terminal Icon Links */}
          <div className="hidden sm:flex items-center gap-1 text-on-surface-variant">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg hover:text-white hover:bg-white/[0.06] transition-all"
              title="GitHub Profile"
              aria-label="GitHub Profile"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg hover:text-white hover:bg-white/[0.06] transition-all"
              title="LinkedIn Profile"
              aria-label="LinkedIn Profile"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>

          {/* Resume Modal Trigger */}
          <button
            onClick={onOpenCvModal}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-outline-variant/40 bg-surface-container-low text-on-surface hover:border-primary/50 text-xs font-mono transition-all duration-200 active:scale-95 cursor-pointer"
            title="Preview Curriculum Vitae"
          >
            <FileText className="w-3.5 h-3.5 text-primary" />
            <span>Resume / CV</span>
          </button>

          {/* Get in Touch Button */}
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-[#7c3aed] to-[#0891b2] text-white text-xs font-mono font-medium shadow-glow-primary hover:brightness-110 transition-all duration-200 active:scale-95 cursor-pointer"
          >
            <span>Get in Touch</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={onOpenMobileMenu}
            className="lg:hidden p-2 rounded-lg text-on-surface-variant hover:text-white hover:bg-white/[0.08] transition-colors cursor-pointer"
            aria-label="Open Mobile Menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
};
