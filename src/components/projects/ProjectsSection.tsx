import React, { useState, useMemo } from 'react';
import { PROJECTS, FLAGSHIP_CASE_STUDY, CASE_STUDIES } from '../../data/portfolioData';
import type { CategoryType } from '../../types';
import { CategoryFilter } from './CategoryFilter';
import { ProjectCard } from './ProjectCard';
import { CaseStudyModal } from './CaseStudyModal';
import { Terminal, Sparkles, BookOpen, ExternalLink, ArrowUpRight } from 'lucide-react';

const CATEGORIES: CategoryType[] = ['All', 'Full-Stack', 'AI/ML', 'Web Development'];

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCaseStudyId, setSelectedCaseStudyId] = useState<string>('inventory-order-management');
  const [isCaseStudyOpen, setIsCaseStudyOpen] = useState<boolean>(false);

  // Filter logic
  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      const matchesCategory =
        selectedCategory === 'All' ||
        project.category === selectedCategory ||
        (project.categories && project.categories.includes(selectedCategory as any));
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        project.title.toLowerCase().includes(query) ||
        project.shortDescription.toLowerCase().includes(query) ||
        project.technologies.some((t) => t.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Project count per category
  const projectCounts = useMemo(() => {
    const counts: Record<CategoryType, number> = {
      All: PROJECTS.length,
      'Full-Stack': 0,
      'AI/ML': 0,
      'Web Development': 0,
      'DevOps': 0
    };
    PROJECTS.forEach((p) => {
      if (p.categories && p.categories.length > 0) {
        p.categories.forEach((cat) => {
          counts[cat] = (counts[cat] || 0) + 1;
        });
      } else {
        counts[p.category] = (counts[p.category] || 0) + 1;
      }
    });
    return counts;
  }, []);

  const handleOpenCaseStudy = (id: string) => {
    setSelectedCaseStudyId(id);
    setIsCaseStudyOpen(true);
  };

  const activeCaseStudy = CASE_STUDIES[selectedCaseStudyId] || FLAGSHIP_CASE_STUDY;

  return (
    <section id="projects" className="py-24 relative border-t border-border-subtle/40">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-accent-blue text-xs font-mono mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>// PRODUCTION DIRECTORY</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-text-primary tracking-tight">
            Engineering Projects & Systems
          </h2>
          <p className="text-text-secondary text-sm md:text-base mt-2 max-w-2xl">
            A curated index of end-to-end applications, machine learning pipelines, and computer vision systems—benchmarked for concurrency, strict typing, and reliability.
          </p>
        </div>

        {/* Flagship Highlight Banner */}
        <div className="glass-panel p-6 sm:p-8 rounded-xl mb-12 border-accent-blue/30 bg-gradient-to-br from-surface-elevated/80 via-surface-elevated/40 to-surface-base relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none hidden lg:block">
            <Sparkles className="w-48 h-48 text-accent-blue" />
          </div>

          <div className="relative z-10">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="px-2.5 py-0.5 rounded-full bg-accent-violet/20 text-accent-violet text-[11px] font-mono border border-accent-violet/30 font-semibold flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                FLAGSHIP CASE STUDY
              </span>
              <span className="text-xs font-mono text-text-muted">
                Academic Engineering Project • MS SQL Server &amp; Flask
              </span>
            </div>

            <div className="max-w-3xl">
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-text-primary mb-3 group-hover:text-accent-blue transition-colors">
                {FLAGSHIP_CASE_STUDY.title}
              </h3>
              <p className="text-text-secondary text-sm sm:text-base leading-relaxed mb-6">
                {FLAGSHIP_CASE_STUDY.summary}
              </p>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mb-6">
              {FLAGSHIP_CASE_STUDY.outcomes.map((out, i) => (
                <div key={i} className="p-2.5 rounded-lg bg-surface-base/80 border border-border-subtle">
                  <div className="text-lg font-bold font-display text-accent-blue">{out.metric}</div>
                  <div className="text-[11px] font-mono text-text-muted">{out.label}</div>
                </div>
              ))}
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => handleOpenCaseStudy(FLAGSHIP_CASE_STUDY.id)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-accent-blue to-accent-violet hover:brightness-110 shadow-[0_0_20px_rgba(59,130,246,0.35)] text-white text-xs font-mono font-medium transition-all"
              >
                <BookOpen className="w-4 h-4" />
                <span>Read Full Architectural Case Study</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
              <a
                href={FLAGSHIP_CASE_STUDY.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-elevated/80 border border-border-subtle hover:border-border-muted text-xs font-mono text-text-secondary hover:text-text-primary transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span>Repository</span>
              </a>
              <a
                href={FLAGSHIP_CASE_STUDY.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-elevated/80 border border-border-subtle hover:border-accent-cyan/40 text-xs font-mono text-text-secondary hover:text-accent-cyan transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            </div>
          </div>
        </div>

        {/* Directory Controls */}
        <CategoryFilter
          categories={CATEGORIES}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          projectCounts={projectCounts}
        />

        {/* Project Cards Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenCaseStudy={handleOpenCaseStudy}
              />
            ))}
          </div>
        ) : (
          <div className="glass-panel p-12 rounded-xl text-center border-dashed border-border-muted max-w-md mx-auto">
            <Terminal className="w-8 h-8 text-text-muted mx-auto mb-3" />
            <h3 className="text-base font-semibold text-text-primary mb-1">No matching projects</h3>
            <p className="text-xs text-text-secondary mb-4">
              No project found matching <code className="text-accent-blue">"{searchQuery}"</code> in category "{selectedCategory}".
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="px-4 py-1.5 rounded-lg bg-surface-elevated text-xs font-mono text-text-primary border border-border-subtle hover:border-accent-blue/40"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Case Study Modal (Supports all 3 projects) */}
      <CaseStudyModal
        isOpen={isCaseStudyOpen}
        onClose={() => setIsCaseStudyOpen(false)}
        caseStudy={activeCaseStudy}
      />
    </section>
  );
};
