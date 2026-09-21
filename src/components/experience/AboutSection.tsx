import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { ExperienceTimeline } from './ExperienceTimeline';
import { EducationCard } from './EducationCard';
import { Terminal, UserCheck, GraduationCap, Briefcase, Target, Compass, Sparkles } from 'lucide-react';

interface AboutSectionProps {
  activeSection?: string;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ activeSection }) => {
  const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience');

  useEffect(() => {
    if (activeSection === 'education') {
      setActiveTab('education');
    } else if (activeSection === 'experience') {
      setActiveTab('experience');
    }
  }, [activeSection]);

  return (
    <section id="about" className="py-24 relative border-t border-border-subtle/40">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-accent-violet/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-violet/10 border border-accent-violet/20 text-accent-violet text-xs font-mono mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>// PROFILE &amp; BACKGROUND</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-text-primary tracking-tight">
            Engineering Journey &amp; Foundations
          </h2>
          <p className="text-text-secondary text-sm md:text-base mt-2 max-w-2xl">
            Undergraduate in Information Science &amp; Engineering passionate about building reliable software, automated inventory pipelines, and applied machine learning tools.
          </p>
        </div>

        {/* Top Philosophy & Availability Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {/* Engineering Philosophy */}
          <div className="lg:col-span-2 glass-panel p-6 sm:p-8 rounded-xl border-border-subtle flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-accent-blue mb-3">
                <Compass className="w-4 h-4" />
                <span>ENGINEERING PHILOSOPHY</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-semibold text-text-primary mb-4 leading-snug">
                Core Computer Science Rigor + Practical Application
              </h3>
              <p className="text-text-secondary text-sm sm:text-base leading-relaxed mb-4">
                {PERSONAL_INFO.bioLong}
              </p>
              <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
                Dedicated to writing clean, maintainable code with strict relational database normalization (3NF), automated verification cycles, and user-centric accessibility guidelines (WCAG).
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-border-subtle/80 flex flex-wrap items-center gap-4 text-xs font-mono text-text-muted">
              <span className="flex items-center gap-1.5 text-text-secondary">
                <Target className="w-3.5 h-3.5 text-accent-cyan" />
                Focus: Systems Engineer &amp; Full-Stack
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 text-text-secondary">
                <Sparkles className="w-3.5 h-3.5 text-accent-emerald" />
                Target: Systems Engineer / Software Developer
              </span>
            </div>
          </div>

          {/* Recruiter Availability Card */}
          <div className="glass-panel p-6 sm:p-8 rounded-xl border-accent-blue/30 bg-gradient-to-br from-surface-elevated/70 to-surface-base flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-emerald/10 border border-accent-emerald/20 text-accent-emerald text-xs font-mono mb-4">
                <span className="w-2 h-2 rounded-full bg-accent-emerald animate-pulse" />
                <span>RECRUITER STATUS</span>
              </div>
              <h4 className="text-lg font-display font-bold text-text-primary mb-2">
                Systems Engineer Aspirant
              </h4>
              <p className="text-xs text-text-secondary leading-relaxed mb-4">
                {PERSONAL_INFO.status}
              </p>

              <div className="space-y-2 text-xs font-mono">
                <div className="p-2.5 rounded-lg bg-surface-base/80 border border-border-subtle flex justify-between items-center">
                  <span className="text-text-muted">Location</span>
                  <span className="text-text-primary font-medium">{PERSONAL_INFO.location}</span>
                </div>
                <div className="p-2.5 rounded-lg bg-surface-base/80 border border-border-subtle flex justify-between items-center">
                  <span className="text-text-muted">College</span>
                  <span className="text-text-primary font-medium">NMAMIT, Nitte</span>
                </div>
                <div className="p-2.5 rounded-lg bg-surface-base/80 border border-border-subtle flex justify-between items-center">
                  <span className="text-text-muted">Degree</span>
                  <span className="text-text-primary font-medium">B.Tech ISE (CGPA: {PERSONAL_INFO.cgpa})</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-border-subtle flex items-center gap-2 text-xs font-mono text-accent-blue">
              <UserCheck className="w-4 h-4" />
              <span>Full Work Authorization in India</span>
            </div>
          </div>
        </div>

        {/* Tabs switcher for Experience vs Education on Mobile/Tablet */}
        <div className="flex sm:hidden mb-6 p-1 rounded-lg bg-surface-elevated border border-border-subtle">
          <button
            onClick={() => setActiveTab('experience')}
            className={`flex-1 py-2 text-xs font-mono rounded-md transition-all ${
              activeTab === 'experience'
                ? 'bg-accent-blue text-white font-medium'
                : 'text-text-muted'
            }`}
          >
            Experience &amp; Leadership
          </button>
          <button
            onClick={() => setActiveTab('education')}
            className={`flex-1 py-2 text-xs font-mono rounded-md transition-all ${
              activeTab === 'education'
                ? 'bg-accent-blue text-white font-medium'
                : 'text-text-muted'
            }`}
          >
            Education &amp; Certs
          </button>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Experience Timeline */}
          <div id="experience" className={`lg:col-span-7 scroll-mt-24 ${activeTab === 'education' ? 'hidden sm:block' : 'block'}`}>
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-text-muted mb-6">
              <Briefcase className="w-4 h-4 text-accent-blue" />
              <span>Experience &amp; Technical Leadership</span>
            </div>
            <ExperienceTimeline />
          </div>

          {/* Right Column: Academic Degree & Certifications */}
          <div id="education" className={`lg:col-span-5 scroll-mt-24 ${activeTab === 'experience' ? 'hidden sm:block' : 'block'}`}>
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-text-muted mb-6">
              <GraduationCap className="w-4 h-4 text-accent-violet" />
              <span>Academic Track &amp; Certifications</span>
            </div>
            <EducationCard />
          </div>
        </div>
      </div>
    </section>
  );
};
