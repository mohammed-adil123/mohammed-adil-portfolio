import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../../data/portfolioData';
import { Code, Layers, Cpu, Database, ShieldCheck, Sparkles } from 'lucide-react';

const categoryIcons = {
  'Programming Languages': Code,
  'Web Technologies & Frameworks': Layers,
  'Machine Learning & Data': Cpu,
  'Databases & Storage': Database,
  'Core Computer Science Concepts': ShieldCheck,
  'Development Tools & Practices': Sparkles,
};

export const SkillsMatrix: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeSkillHover, setActiveSkillHover] = useState<string | null>(null);

  const categories = ['All', ...SKILL_CATEGORIES.map((c) => c.name)];

  const displayedCategories = activeCategory === 'All'
    ? SKILL_CATEGORIES
    : SKILL_CATEGORIES.filter((c) => c.name === activeCategory);

  return (
    <section id="skills" className="py-28 md:py-36 bg-[#030308] border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff2a55]" />
              <span className="font-mono text-xs text-[#ff2a55] tracking-[0.25em] uppercase font-semibold">
                Section 04 // Capabilities
              </span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-none">
              SKILLS &amp; STACK.
            </h2>
          </div>
          <p className="font-mono text-xs sm:text-sm text-white/50 max-w-sm tracking-wide">
            Interactive typography showcase across algorithmic foundations, full-stack systems, and machine learning.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full font-mono text-xs tracking-wider uppercase transition-all duration-300 ${
                  isActive
                    ? 'bg-[#ff2a55] text-white shadow-[0_0_16px_rgba(255,42,85,0.4)]'
                    : 'bg-white/[0.03] text-white/60 hover:text-white hover:bg-white/[0.08] border border-white/[0.06]'
                }`}
                data-cursor="LINK"
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Interactive Typography Grid (No generic percentage bars) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCategories.map((cat) => {
            const Icon = categoryIcons[cat.name as keyof typeof categoryIcons] || Code;
            return (
              <div
                key={cat.name}
                className="editorial-card p-6 md:p-8 flex flex-col justify-between hover:border-[#ff2a55]/40 transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/[0.06]">
                    <div className="p-2 rounded-lg bg-[#ff2a55]/10 text-[#ff2a55] group-hover:bg-[#ff2a55] group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-editorial text-base font-bold text-white tracking-wide">
                      {cat.name}
                    </h3>
                  </div>

                  {/* Skills Typography Cluster */}
                  <div className="flex flex-wrap gap-2.5">
                    {cat.skills.map((skill) => {
                      const isHovered = activeSkillHover === skill.name;
                      return (
                        <div
                          key={skill.name}
                          onMouseEnter={() => setActiveSkillHover(skill.name)}
                          onMouseLeave={() => setActiveSkillHover(null)}
                          className={`px-3 py-1.5 rounded-lg border font-mono text-xs transition-all duration-200 cursor-default ${
                            isHovered
                              ? 'border-[#ff2a55] bg-[#ff2a55]/15 text-white shadow-[0_0_12px_rgba(255,42,85,0.3)] scale-105'
                              : 'border-white/[0.08] bg-white/[0.02] text-white/80 hover:border-white/20'
                          }`}
                        >
                          <span className="font-semibold text-white">{skill.name}</span>
                          {skill.tag && (
                            <span className="ml-1.5 text-[10px] text-white/40">
                              • {skill.tag}
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-white/40">
                  <span>{cat.skills.length} TECHNOLOGIES</span>
                  <span className="text-[#ff2a55]">BENCHMARKED</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
