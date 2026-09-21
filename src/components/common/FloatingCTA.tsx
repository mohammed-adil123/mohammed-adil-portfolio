import React, { useState, useEffect } from 'react';
import { ArrowUp, MessageCircle } from 'lucide-react';

interface FloatingCTAProps {
  onContactClick: () => void;
}

export const FloatingCTA: React.FC<FloatingCTAProps> = ({ onContactClick }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating Contact FAB — bottom right */}
      <div className="fixed bottom-8 right-6 z-50 flex flex-col items-end gap-3">
        {/* Tooltip */}
        {showTooltip && (
          <div
            className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-white pointer-events-none"
            style={{
              background: 'rgba(10,8,30,0.90)',
              border: '1px solid rgba(167,139,250,0.35)',
              backdropFilter: 'blur(12px)',
              boxShadow: '0 4px 20px rgba(124,58,237,0.30)',
              whiteSpace: 'nowrap',
            }}
          >
            💬 Let's build something!
          </div>
        )}

        {/* FAB button */}
        <button
          onClick={onContactClick}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          aria-label="Contact Mohammed Adil"
          className="fab-aurora"
          title="Get in Touch"
        >
          <MessageCircle className="w-6 h-6 text-white" style={{ position: 'relative', zIndex: 1 }} />
        </button>
      </div>

      {/* Scroll-to-top — bottom left, only visible after scrolling */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="scroll-top-btn"
        style={{
          opacity: showScrollTop ? 1 : 0,
          transform: showScrollTop ? 'translateY(0) scale(1)' : 'translateY(12px) scale(0.85)',
          transition: 'all 0.35s cubic-bezier(0.4,0,0.2,1)',
          pointerEvents: showScrollTop ? 'auto' : 'none',
        }}
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </>
  );
};
