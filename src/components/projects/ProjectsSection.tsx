import React, { useState } from 'react';
import { PROJECTS, CASE_STUDIES } from '../../data/portfolioData';
import { CaseStudyModal } from './CaseStudyModal';
import { ArrowUpRight, Sparkles, Terminal, Code2, Layers, Cpu } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [selectedCaseStudyId, setSelectedCaseStudyId] = useState<string>('inventory-order-management');
  const [isCaseStudyOpen, setIsCaseStudyOpen] = useState<boolean>(false);

  const handleOpenCaseStudy = (id: string) => {
    setSelectedCaseStudyId(id);
    setIsCaseStudyOpen(true);
  };

  const activeCaseStudy = CASE_STUDIES[selectedCaseStudyId] || CASE_STUDIES['inventory-order-management'];

  const projectIcons = {
    'inventory-order-management': Layers,
    'house-price-prediction': Cpu,
    'petri-dish-image-analysis': Terminal,
  };

  return (
    <section id="projects" className="py-28 md:py-36 bg-[#030308] border-b border-white/[0.06] relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-[#ff2a55]/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff2a55]" />
              <span className="font-mono text-xs text-[#ff2a55] tracking-[0.25em] uppercase font-semibold">
                Section 03 // Portfolio
              </span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-none">
              SELECTED WORK.
            </h2>
          </div>
          <p className="font-mono text-xs sm:text-sm text-white/50 max-w-sm tracking-wide">
            Large-scale full-stack web applications, machine learning models, and computer vision systems.
          </p>
        </div>

        {/* Large Editorial Project Presentations (No tiny cards) */}
        <div className="space-y-16 lg:space-y-24">
          {PROJECTS.map((project, idx) => {
            const Icon = projectIcons[project.id as keyof typeof projectIcons] || Code2;
            const isEven = idx % 2 === 0;

            return (
              <div
                key={project.id}
                className="group editorial-card p-8 sm:p-12 transition-all duration-500 hover:border-[#ff2a55]/40"
                data-cursor="VIEW"
                onClick={() => handleOpenCaseStudy(project.caseStudyId || project.id)}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Left / Info Column */}
                  <div className={`lg:col-span-6 space-y-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold text-[#ff2a55] tracking-widest uppercase flex items-center gap-1.5">
                        <Icon className="w-3.5 h-3.5" />
                        <span>0{idx + 1} // {project.category}</span>
                      </span>
                      {project.featured && (
                        <span className="px-2.5 py-0.5 rounded-full bg-[#ff2a55]/15 border border-[#ff2a55]/30 text-[#ff2a55] font-mono text-[10px] uppercase font-semibold">
                          Flagship
                        </span>
                      )}
                    </div>

                    <h3 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-white group-hover:text-[#ff2a55] transition-colors duration-300 leading-tight">
                      {project.title}
                    </h3>

                    <p className="font-sans text-sm sm:text-base text-white/70 leading-relaxed">
                      {project.detailedDescription}
                    </p>

                    {/* Metrics Badge */}
                    {project.metrics && (
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/10 font-mono text-xs text-white/80">
                        <Sparkles className="w-3.5 h-3.5 text-[#ff2a55]" />
                        <span>{project.metrics}</span>
                      </div>
                    )}

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] font-mono text-xs text-white/80 hover:border-[#ff2a55]/40 hover:text-white transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* View CTA */}
                    <div className="pt-4">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleOpenCaseStudy(project.caseStudyId || project.id);
                        }}
                        className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#ff2a55] uppercase group-hover:translate-x-1.5 transition-transform"
                      >
                        <span>View Architecture &amp; Case Study</span>
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
                      </button>
                    </div>
                  </div>

                  {/* Right / Visual Presentation Stage */}
                  <div
                    className={`lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
                  >
                    <div className="relative rounded-xl overflow-hidden border border-white/10 bg-[#070712] p-6 lg:p-8 group-hover:border-[#ff2a55]/30 transition-all duration-500 shadow-2xl">
                      {/* Code / Visual UI Schematic Container */}
                      <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4 font-mono text-xs text-white/40">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                        </div>
                        <span className="tracking-widest uppercase">
                          {project.id}.system
                        </span>
                      </div>

                      {/* Schematic Visual */}
                      <div className="space-y-4 py-4 font-mono text-xs">
                        <div className="p-4 rounded-lg bg-black/50 border border-white/5 space-y-2">
                          <div className="text-white/40">// SYSTEM ARCHITECTURE PIPELINE</div>
                          <div className="flex items-center gap-2 text-white/90">
                            <span className="text-[#ff2a55]">&gt;</span>
                            <span>Client UI / REST Gateway</span>
                          </div>
                          <div className="flex items-center gap-2 text-white/90">
                            <span className="text-[#ff2a55]">&gt;</span>
                            <span>Controller &amp; Algorithmic Processing Engine</span>
                          </div>
                          <div className="flex items-center gap-2 text-white/90">
                            <span className="text-[#ff2a55]">&gt;</span>
                            <span>Relational 3NF Storage / Serialized Model Storage</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between text-[11px] text-white/50 pt-2 border-t border-white/5">
                          <span>LATENCY: &lt;50ms</span>
                          <span>STATUS: PRODUCTION_READY</span>
                        </div>
                      </div>

                      {/* Interactive Hover Pill */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#ff2a55]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                        <span className="px-4 py-2 rounded-full bg-[#ff2a55] text-white font-mono text-xs uppercase tracking-widest font-semibold shadow-lg shadow-[#ff2a55]/40 transform scale-95 group-hover:scale-100 transition-transform">
                          Open Deep-Dive Case Study
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Case Study Modal */}
      {activeCaseStudy && (
        <CaseStudyModal
          isOpen={isCaseStudyOpen}
          onClose={() => setIsCaseStudyOpen(false)}
          caseStudy={activeCaseStudy}
        />
      )}
    </section>
  );
};
