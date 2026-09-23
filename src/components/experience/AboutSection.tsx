import React from 'react';
import { ArrowUpRight, Code, Brain, Sparkles, Award } from 'lucide-react';

interface AboutSectionProps {
  onNavigate: (sectionId: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onNavigate }) => {
  const telemetryStats = [
    { label: 'B.Tech CGPA', value: '7.56', context: 'NMAMIT Nitte (ISE)' },
    { label: 'Pre-University', value: '87.25%', context: 'PCMC Science Honors' },
    { label: 'DSA & Problems', value: '400+', context: 'LeetCode & Algorithmic Rigor' },
    { label: 'Production Work', value: 'Agnirva', context: 'Software Intern (AICTE NEAT)' },
  ];

  const pillars = [
    {
      icon: Code,
      title: 'Full-Stack Systems',
      description: 'Architecting robust web applications with Flask, Node.js, React, and RESTful APIs with 3NF normalized databases and transactional data integrity.',
    },
    {
      icon: Brain,
      title: 'Machine Learning & Vision',
      description: 'Building end-to-end predictive pipelines with Scikit-Learn and automated biomedical image processing using OpenCV adaptive thresholding.',
    },
    {
      icon: Sparkles,
      title: 'Interactive Web Craft',
      description: 'Creating memorable digital experiences that combine performance, smooth 60fps animations (GSAP, Lenis), and tactile micro-interactions.',
    },
    {
      icon: Award,
      title: 'Quality & Specifications',
      description: 'Authoring Product Requirements Documents (PRDs), BRDs, and integrating WCAG accessibility standards to eliminate release defects.',
    },
  ];

  return (
    <section id="about" className="relative py-28 md:py-36 bg-[#030308] border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff2a55]" />
              <span className="font-mono text-xs text-[#ff2a55] tracking-[0.25em] uppercase font-semibold">
                Section 02 // Philosophy
              </span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-none">
              MORE THAN A DEVELOPER.
            </h2>
          </div>
          <p className="font-mono text-xs sm:text-sm text-white/50 max-w-sm tracking-wide">
            Combining software engineering, machine learning pipelines, and luxury interactive design.
          </p>
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Editorial Statement */}
          <div className="lg:col-span-7 space-y-6">
            <p className="font-display text-xl sm:text-2xl text-white/90 font-medium leading-relaxed">
              I build digital experiences that combine <span className="text-[#ff2a55] font-semibold">engineering rigor</span>, intuitive design, and purposeful interaction.
            </p>

            <p className="font-sans text-sm sm:text-base text-white/70 leading-relaxed">
              Currently an Information Science &amp; Engineering undergraduate at{' '}
              <span className="text-white font-medium">NMAM Institute of Technology, Nitte</span>. My work spans full-stack development, machine learning algorithms, and software quality assurance. During my software engineering internship at{' '}
              <span className="text-white font-medium">Agnirva (onboarded via AICTE NEAT 5.0)</span>, I authored enterprise Product Requirements Documents (PRD/BRD) and structured QA validation frameworks adhering to WCAG standards.
            </p>

            <p className="font-sans text-sm sm:text-base text-white/70 leading-relaxed">
              Whether architecting a 3NF normalized inventory system with sub-50ms query latency, training regression models to minimize real estate pricing error, or developing computer vision tools for bacterial colony counting on Petri dish cultures, my focus is always on engineering precision and user-first clarity.
            </p>

            {/* Quick CTA cluster */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('projects')}
                className="btn-editorial-primary"
                data-cursor="VIEW"
              >
                <span>Explore Projects</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <a
                href="/Mohammed_Adil_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn-editorial-outline"
                data-cursor="LINK"
              >
                <span>Download Resume</span>
              </a>
            </div>
          </div>

          {/* Right Column: Key Pillars */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="editorial-card p-6 group hover:border-[#ff2a55]/40 transition-all"
                  data-cursor="EXPLORE"
                >
                  <div className="flex items-center gap-3 mb-2.5">
                    <div className="p-2 rounded-lg bg-[#ff2a55]/10 text-[#ff2a55] group-hover:bg-[#ff2a55] group-hover:text-white transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-display text-base font-bold text-white tracking-tight">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="font-sans text-xs text-white/60 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dynamic Telemetry Metrics Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-12 border-t border-white/[0.08]">
          {telemetryStats.map((stat, idx) => (
            <div
              key={idx}
              className="editorial-card p-6 text-center space-y-1.5 hover:border-[#ff2a55]/40"
            >
              <div className="font-editorial text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                {stat.value}
              </div>
              <div className="font-mono text-xs font-semibold text-[#ff2a55] uppercase tracking-wider">
                {stat.label}
              </div>
              <div className="font-sans text-[11px] text-white/40">
                {stat.context}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
