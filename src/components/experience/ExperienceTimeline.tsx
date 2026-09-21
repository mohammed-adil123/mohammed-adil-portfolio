import React from 'react';
import { EXPERIENCES } from '../../data/portfolioData';
import { Briefcase, GitPullRequest, Users, Calendar, CheckCircle2 } from 'lucide-react';

const typeIconMap = {
  Internship: <Briefcase className="w-4 h-4 text-accent-blue" />,
  'Open Source': <GitPullRequest className="w-4 h-4 text-accent-violet" />,
  Leadership: <Users className="w-4 h-4 text-accent-emerald" />
};

export const ExperienceTimeline: React.FC = () => {
  return (
    <div className="relative pl-6 sm:pl-8 border-l border-border-subtle/80 space-y-10">
      {EXPERIENCES.map((exp) => (
        <div key={exp.id} className="relative group">
          {/* Glowing node on timeline */}
          <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-5 h-5 rounded-full bg-surface-base border-2 border-accent-blue flex items-center justify-center group-hover:scale-125 transition-transform duration-200">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-blue animate-ping" />
          </div>

          <div className="glass-panel p-6 sm:p-7 rounded-2xl hover:border-accent-blue/30 transition-all duration-200">
            {/* Header meta */}
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <div className="flex items-center gap-2">
                <span className="p-1 rounded-md bg-surface-elevated border border-border-subtle">
                  {typeIconMap[exp.type]}
                </span>
                <span className="text-xs font-mono text-accent-blue font-semibold uppercase">
                  {exp.type}
                </span>
              </div>
              <span className="text-xs font-mono text-text-muted flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {exp.period}
              </span>
            </div>

            {/* Title & Organization */}
            <h3 className="text-lg sm:text-xl font-display font-bold text-text-primary mb-1">
              {exp.title}
            </h3>
            <div className="text-sm font-mono text-text-secondary mb-4">
              @{exp.organization}
            </div>

            {/* Responsibilities */}
            <ul className="space-y-2 mb-5">
              {exp.responsibilities.map((resp, i) => (
                <li key={i} className="text-xs sm:text-sm text-text-secondary flex items-start gap-2">
                  <span className="text-accent-blue font-mono mt-1 text-xs">›</span>
                  <span>{resp}</span>
                </li>
              ))}
            </ul>

            {/* Measurable Achievements */}
            {exp.achievements.length > 0 && (
              <div className="mb-5 p-3 rounded-xl bg-surface-base/60 border border-border-subtle/80 space-y-1.5">
                <span className="text-[11px] font-mono uppercase text-accent-emerald font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  Key Impact
                </span>
                {exp.achievements.map((ach, i) => (
                  <p key={i} className="text-xs text-text-secondary pl-3 border-l border-accent-emerald/40">
                    {ach}
                  </p>
                ))}
              </div>
            )}

            {/* Technologies */}
            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border-subtle/60">
              {exp.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-surface-elevated text-text-muted border border-border-subtle"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
