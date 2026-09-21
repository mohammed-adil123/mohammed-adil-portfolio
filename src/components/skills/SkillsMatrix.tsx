import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../../data/portfolioData';
import { Code, Layers, Database, Cloud, Cpu, Wrench, CheckCircle2, Terminal } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Code: <Code className="w-5 h-5 text-accent-blue" />,
  Layers: <Layers className="w-5 h-5 text-accent-violet" />,
  Database: <Database className="w-5 h-5 text-accent-cyan" />,
  Cloud: <Cloud className="w-5 h-5 text-accent-blue" />,
  Cpu: <Cpu className="w-5 h-5 text-accent-purple" />,
  Wrench: <Wrench className="w-5 h-5 text-accent-emerald" />
};

export const SkillsMatrix: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredCategories = activeCategory === 'All' 
    ? SKILL_CATEGORIES 
    : SKILL_CATEGORIES.filter(c => c.name === activeCategory);

  return (
    <section id="skills" className="py-24 relative border-t border-border-subtle/40">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-accent-blue text-xs font-mono mb-3">
              <Terminal className="w-3.5 h-3.5" />
              <span>// TECHNICAL ARSENAL</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-text-primary tracking-tight">
              Core Competencies &amp; Stack
            </h2>
            <p className="text-text-secondary text-sm md:text-base mt-2 max-w-xl">
              Strong foundations in Python, Java, SQL, Data Structures &amp; Algorithms, RESTful APIs, and Software Engineering methodologies.
            </p>
          </div>

          {/* Quick category switcher */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory('All')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                activeCategory === 'All'
                  ? 'bg-accent-blue text-white shadow-sm shadow-accent-blue/20'
                  : 'bg-surface-elevated/60 text-text-muted hover:text-text-primary border border-border-subtle'
              }`}
            >
              All ({SKILL_CATEGORIES.reduce((acc, cat) => acc + cat.skills.length, 0)})
            </button>
            {SKILL_CATEGORIES.map(cat => (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  activeCategory === cat.name
                    ? 'bg-accent-blue text-white shadow-sm shadow-accent-blue/20'
                    : 'bg-surface-elevated/60 text-text-muted hover:text-text-primary border border-border-subtle'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.name}
              className="glass-panel p-6 rounded-xl hover:border-accent-blue/30 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-border-subtle">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-surface-elevated border border-border-subtle group-hover:border-accent-blue/40 group-hover:bg-accent-blue/5 transition-all">
                      {iconMap[category.icon] || <Code className="w-5 h-5 text-accent-blue" />}
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-text-primary group-hover:text-accent-blue transition-colors">
                        {category.name}
                      </h3>
                      <span className="text-[11px] font-mono text-text-muted">
                        {category.skills.length} competencies
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="px-2.5 py-1.5 rounded-lg bg-surface-elevated/80 border border-border-subtle hover:border-border-muted transition-all flex items-center gap-2"
                    >
                      <span className="text-xs font-medium text-text-primary">{skill.name}</span>
                      {skill.tag && (
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-surface-base text-text-muted border border-border-subtle/60">
                          {skill.tag}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom indicator */}
              <div className="mt-6 pt-3 border-t border-border-subtle/50 flex items-center justify-between text-[11px] font-mono text-text-muted">
                <span className="flex items-center gap-1.5 text-accent-emerald">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Production Ready
                </span>
                <span className="text-text-muted/60">Verified via projects</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
