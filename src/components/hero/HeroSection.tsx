import React from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { IdeWindow } from './IdeWindow';

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void;
  onOpenCvModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate, onOpenCvModal }) => {
  return (
    <section id="hero" className="relative pt-12 pb-20 md:py-24 max-w-[1240px] mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Column: Recruiter Headline & CTAs */}
        <div className="lg:col-span-7 space-y-6">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-mono" style={{background:'rgba(124,58,237,0.15)', borderColor:'rgba(167,139,250,0.32)', color:'#c4b5fd'}}>
            <span className="w-2 h-2 rounded-full bg-[#a78bfa] animate-pulse shadow-glow-primary" />
            <span>{PERSONAL_INFO.status}</span>
          </div>

          {/* Name & Headline */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight leading-[1.1]">
              {PERSONAL_INFO.name}
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-display font-semibold text-slate-300">
              Information Science &amp; Engineering Student |{' '}
              <span className="text-gradient font-bold">Software Developer</span>
            </h2>
          </div>

          {/* Supporting Bio */}
          <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed max-w-xl font-sans">
            Motivated Information Science and Engineering undergraduate seeking to begin a career as a Systems Engineer at Infosys. Strong foundations in Python, Java, SQL, Data Structures, RESTful APIs, Machine Learning, and Software QA.
          </p>

          {/* 3-Tier Call to Action Cluster */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => onNavigate('projects')}
              className="btn-aurora"
            >
              View Projects
              <span className="btn-arrow">→</span>
            </button>

            <button
              onClick={onOpenCvModal}
              className="btn-aurora-outline"
            >
              ⬇ Download CV
            </button>

            <button
              onClick={() => onNavigate('contact')}
              className="btn-aurora-outline"
            >
              ✉ Get in Touch
            </button>
          </div>

          {/* Social Proof & Developer Channels */}
          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/[0.08] text-xs font-mono text-on-surface-variant">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <span className="text-primary">&gt;</span> github.com/mohammed-adil
            </a>
            <span className="text-white/20 hidden sm:inline">•</span>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <span className="text-primary">&gt;</span> linkedin.com/in/mohammed-adil07
            </a>
            <span className="text-white/20 hidden sm:inline">•</span>
            <span className="text-accent-cyan flex items-center gap-1">
              <span>NMAMIT Nitte</span>
            </span>
          </div>
        </div>

        {/* Right Column: Interactive IDE Code Window */}
        <div className="lg:col-span-5">
          <IdeWindow />
        </div>
      </div>

      {/* Developer Metrics Telemetry Strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-8 border-t border-white/[0.08]">
        {PERSONAL_INFO.stats.map((stat, idx) => (
          <div key={idx} className="aurora-card p-4 text-center space-y-1">
            <div className="text-2xl sm:text-3xl font-display font-bold text-gradient">
              {stat.value}
            </div>
            <div className="text-xs font-mono text-on-surface-variant">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
