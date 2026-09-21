import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t bg-[#030308] text-on-surface py-12 px-6" style={{borderColor:'rgba(124,58,237,0.22)'}}>
      <div className="max-w-[1240px] mx-auto space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-white/[0.06]">
          {/* Brand & Academic Identity */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-surface-variant text-tertiary border border-outline-variant/30 text-xs font-mono">
                &lt;dev/&gt;
              </span>
              <span className="font-display font-bold text-lg text-white">Mohammed Adil</span>
            </div>
            <p className="text-xs font-mono text-on-surface-variant max-w-md">
              Information Science &amp; Engineering Undergraduate • NMAM Institute of Technology, Nitte
            </p>
            <p className="text-xs text-on-surface-variant/80">
              Aspiring Systems Engineer • Full-Stack Development, RESTful APIs &amp; Machine Learning.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs font-mono text-on-surface-variant">
            <button onClick={() => onNavigate('hero')} className="hover:text-primary transition-colors cursor-pointer">Home</button>
            <button onClick={() => onNavigate('about')} className="hover:text-primary transition-colors cursor-pointer">About</button>
            <button onClick={() => onNavigate('projects')} className="hover:text-primary transition-colors cursor-pointer">Projects</button>
            <button onClick={() => onNavigate('experience')} className="hover:text-primary transition-colors cursor-pointer">Experience</button>
            <button onClick={() => onNavigate('blog')} className="hover:text-primary transition-colors cursor-pointer">Articles</button>
            <button onClick={() => onNavigate('contact')} className="hover:text-primary transition-colors cursor-pointer">Contact</button>
          </div>

          {/* Social Profiles & Scroll to Top */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-white/[0.03] border border-[rgba(167,139,250,0.14)] hover:border-[rgba(167,139,250,0.50)] text-on-surface-variant hover:text-white transition-all"
              title="GitHub"
            >
              <span className="text-xs font-mono">GitHub</span>
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-white/[0.03] border border-[rgba(167,139,250,0.14)] hover:border-[rgba(167,139,250,0.50)] text-on-surface-variant hover:text-white transition-all"
              title="LinkedIn"
            >
              <span className="text-xs font-mono">LinkedIn</span>
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/[0.03] border border-white/10 hover:bg-white/[0.08] text-on-surface-variant hover:text-white transition-all cursor-pointer"
              title="Scroll to Top"
              aria-label="Scroll to top of page"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Telemetry & Copyright Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-on-surface-variant">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Telemetry: SYSTEM ONLINE • 0 ERRORS • P99 LATENCY &lt;80MS</span>
          </div>
          <div>
            <span>© {new Date().getFullYear()} Mohammed Adil. Crafted with precision &amp; modern web standards.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
