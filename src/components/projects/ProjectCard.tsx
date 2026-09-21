import React from 'react';
import type { Project } from '../../types';
import { Badge } from '../common/Badge';
import { ExternalLink, BookOpen, Activity, Sparkles } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onOpenCaseStudy?: (id: string) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenCaseStudy }) => {
  return (
    <article className="aurora-card p-6 sm:p-7 flex flex-col justify-between group relative overflow-hidden">
      {/* Subtle top indicator highlight */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#a78bfa]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      <div>
        {/* Top Header Row */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2">
            <Badge variant="cyan">{project.category}</Badge>
            {project.featured && (
              <span className="inline-flex items-center gap-1 text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-accent-violet/15 text-accent-violet border border-accent-violet/30">
                <Sparkles className="w-3 h-3" />
                Flagship
              </span>
            )}
          </div>
          <span className="text-[11px] font-mono text-text-muted">
            ID: #{project.id.slice(0, 8)}
          </span>
        </div>

        {/* Project Title */}
        <h3 className="text-xl font-display font-semibold text-on-surface group-hover:text-[#a78bfa] transition-colors mb-3 leading-snug">
          {project.title}
        </h3>

        {/* Project Description */}
        <p className="text-text-secondary text-sm leading-relaxed mb-5">
          {project.shortDescription}
        </p>

        {/* Metrics Strip */}
        {project.metrics && (
          <div className="mb-5 px-3 py-2 rounded-lg border flex items-center gap-2.5 text-xs font-mono" style={{background:'rgba(52,211,153,0.08)', borderColor:'rgba(52,211,153,0.20)', color:'#6ee7b7'}}>
            <Activity className="w-3.5 h-3.5 flex-shrink-0" style={{color:'#34d399'}} />
            <span className="truncate font-medium">{project.metrics}</span>
          </div>
        )}

        {/* Technologies Pills */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-surface-elevated text-text-muted border border-border-subtle/80 hover:text-text-primary hover:border-border-muted transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Action Footer Buttons */}
      <div className="pt-4 border-t border-border-subtle/60 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} source code on GitHub`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-elevated/80 border border-border-subtle hover:border-border-muted text-xs font-mono text-text-secondary hover:text-text-primary transition-all hover:scale-[1.02]"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span>Source</span>
            </a>
          )}
          {project.liveDemoUrl && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} live demo`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-elevated/80 border border-border-subtle hover:border-accent-blue/40 hover:text-accent-blue text-xs font-mono text-text-secondary transition-all hover:scale-[1.02]"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Live Demo</span>
            </a>
          )}
        </div>

        {project.caseStudyId && onOpenCaseStudy && (
          <button
            onClick={() => onOpenCaseStudy(project.caseStudyId!)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-mono font-medium transition-all duration-200 hover:scale-[1.02]"
            style={{background:'rgba(124,58,237,0.12)', borderColor:'rgba(167,139,250,0.32)', color:'#c4b5fd', boxShadow:'0 0 12px rgba(124,58,237,0.20)'}}
            onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background='rgba(124,58,237,0.28)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background='rgba(124,58,237,0.12)'; }}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Case Study</span>
          </button>
        )}
      </div>
    </article>
  );
};
