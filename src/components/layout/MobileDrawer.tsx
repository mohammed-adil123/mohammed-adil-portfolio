import React from 'react';
import { X, ArrowRight, Mail, Phone } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/SocialIcons';
import { PERSONAL_INFO } from '../../data/portfolioData';

interface MobileDrawerProps {
  isOpen: boolean;
  activeSection: string;
  onClose: () => void;
  onNavigate: (sectionId: string) => void;
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({
  isOpen,
  activeSection,
  onClose,
  onNavigate,
}) => {
  if (!isOpen) return null;

  const links = [
    { id: 'hero', label: 'Home', number: '01' },
    { id: 'about', label: 'About Adil', number: '02' },
    { id: 'projects', label: 'Selected Work', number: '03' },
    { id: 'skills', label: 'Skills & Stack', number: '04' },
    { id: 'experience', label: 'Experience & Certs', number: '05' },
    { id: 'contact', label: 'Contact & Hire', number: '06' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#030308]/95 backdrop-blur-2xl flex flex-col justify-between p-8 md:hidden animate-in fade-in duration-300">
      {/* Header bar */}
      <div className="flex items-center justify-between border-b border-white/10 pb-6">
        <div className="font-editorial text-2xl font-bold tracking-tight text-white flex items-center gap-1.5">
          <span>ADIL</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#ff2a55]" />
        </div>
        <button
          onClick={onClose}
          className="p-2 rounded-full border border-white/10 text-white/70 hover:text-white"
          aria-label="Close menu"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Nav List */}
      <nav className="flex flex-col gap-5 my-auto">
        {links.map((link) => {
          const isActive = activeSection === link.id;
          return (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className="flex items-baseline justify-between text-left group py-1"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-xs text-[#ff2a55]">
                  {link.number}
                </span>
                <span
                  className={`font-editorial text-2xl sm:text-3xl font-bold tracking-tight transition-colors ${
                    isActive ? 'text-[#ff2a55]' : 'text-white/80 group-hover:text-white'
                  }`}
                >
                  {link.label}
                </span>
              </div>
              <ArrowRight className="w-5 h-5 text-white/30 group-hover:text-[#ff2a55] transition-all group-hover:translate-x-1" />
            </button>
          );
        })}
      </nav>

      {/* Footer / Socials */}
      <div className="pt-6 border-t border-white/10 space-y-4">
        <div className="flex items-center gap-4 text-white/60">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#ff2a55] transition-colors p-2 rounded-full bg-white/[0.04]"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#ff2a55] transition-colors p-2 rounded-full bg-white/[0.04]"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="hover:text-[#ff2a55] transition-colors p-2 rounded-full bg-white/[0.04]"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href={`tel:${PERSONAL_INFO.phone}`}
            className="hover:text-[#ff2a55] transition-colors p-2 rounded-full bg-white/[0.04]"
          >
            <Phone className="w-5 h-5" />
          </a>
        </div>
        <p className="font-mono text-[11px] text-white/40">
          © 2026 Mohammed Adil. All rights reserved.
        </p>
      </div>
    </div>
  );
};
