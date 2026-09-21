import React from 'react';
import { X, FileText, ArrowRight, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

interface MobileDrawerProps {
  isOpen: boolean;
  activeSection: string;
  onClose: () => void;
  onNavigate: (sectionId: string) => void;
  onOpenCvModal: () => void;
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({
  isOpen,
  activeSection,
  onClose,
  onNavigate,
  onOpenCvModal,
}) => {
  if (!isOpen) return null;

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About & Background' },
    { id: 'skills', label: 'Technical Arsenal' },
    { id: 'projects', label: 'Projects Showcase' },
    { id: 'experience', label: 'Experience & Leadership' },
    { id: 'education', label: 'Education & Honors' },
    { id: 'blog', label: 'Technical Articles' },
    { id: 'contact', label: 'Contact & Opportunities' },
  ];

  const handleItemClick = (id: string) => {
    onNavigate(id);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 lg:hidden flex justify-end bg-black/80 backdrop-blur-sm animate-fade-in">
      <div 
        className="w-full max-w-xs h-full bg-surface-container border-l border-white/10 p-6 flex flex-col justify-between shadow-2xl overflow-y-auto"
        role="dialog"
        aria-modal="true"
      >
        <div>
          {/* Top Bar */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-surface-variant text-tertiary border border-outline-variant/30 text-xs font-mono">
                &lt;dev/&gt;
              </span>
              <span className="font-semibold text-white text-sm">Mohammed Adil</span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-on-surface-variant hover:text-white hover:bg-white/[0.08] transition-colors"
              aria-label="Close navigation"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="py-6 space-y-1.5 font-mono text-sm">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={`w-full text-left px-3.5 py-2.5 rounded-lg transition-all flex items-center justify-between ${
                    isActive
                      ? 'bg-primary-container/20 text-white border border-primary-container/40'
                      : 'text-on-surface-variant hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-primary shadow-glow-primary" />}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Bottom Drawer Actions */}
        <div className="pt-6 border-t border-white/10 space-y-3 font-mono">
          <button
            onClick={() => {
              onClose();
              onOpenCvModal();
            }}
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-white/10 bg-white/[0.04] text-white text-xs hover:bg-white/10 transition-colors"
          >
            <FileText className="w-4 h-4 text-primary" />
            <span>Preview Resume / CV</span>
          </button>

          <button
            onClick={() => {
              handleItemClick('contact');
            }}
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-accent-blue to-accent-violet text-white text-xs font-medium shadow-glow-primary hover:brightness-110 transition-all"
          >
            <span>Get in Touch</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <div className="flex items-center justify-center gap-4 pt-2 text-xs text-on-surface-variant">
            <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="hover:text-white flex items-center gap-1">
              GitHub <ExternalLink className="w-3 h-3" />
            </a>
            <span>•</span>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:text-white flex items-center gap-1">
              LinkedIn <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
