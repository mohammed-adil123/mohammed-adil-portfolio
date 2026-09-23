import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/SocialIcons';
import { PERSONAL_INFO } from '../../data/portfolioData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-[#020205] border-t border-white/[0.08] relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Brand Monogram */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigate('hero')}
            className="font-editorial text-xl font-bold tracking-tight text-white hover:text-[#ff2a55] transition-colors"
          >
            ADIL
          </button>
          <span className="font-mono text-xs text-white/40">
            • Creative Developer
          </span>
        </div>

        {/* Center: Philosophy */}
        <div className="font-mono text-xs text-white/50 tracking-wider text-center">
          Built with curiosity + code.
        </div>

        {/* Right: Copyright & Socials */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4 text-white/60">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#ff2a55] transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#ff2a55] transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hover:text-[#ff2a55] transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          <span className="font-mono text-xs text-white/40">
            © 2026. All rights reserved.
          </span>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-full border border-white/10 bg-white/[0.03] text-white/60 hover:text-white hover:border-[#ff2a55]/40 transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
