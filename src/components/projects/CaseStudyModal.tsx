import React, { useEffect } from 'react';
import type { CaseStudy } from '../../types';
import { 
  X, ExternalLink, ArrowLeft, CheckCircle2, 
  Server, ShieldAlert, Cpu, Layers, GitBranch, Terminal
} from 'lucide-react';

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
  caseStudy: CaseStudy;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ isOpen, onClose, caseStudy }) => {
  // ESC key listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-surface-base/80 backdrop-blur-md p-4 sm:p-6 lg:p-8 flex justify-center animate-fadeIn"
    >
      <div className="relative w-full max-w-5xl bg-surface-base border border-border-subtle rounded-xl shadow-2xl overflow-hidden my-auto flex flex-col max-h-[92vh]">
        {/* Sticky Header */}
        <div className="sticky top-0 z-30 px-6 py-4 bg-surface-base/90 backdrop-blur-md border-b border-border-subtle flex items-center justify-between">
          <button
            onClick={onClose}
            className="inline-flex items-center gap-2 text-xs font-mono text-text-muted hover:text-text-primary px-3 py-1.5 rounded-lg bg-surface-elevated/70 border border-border-subtle transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Projects</span>
          </button>

          <div className="flex items-center gap-2">
            <span className="hidden sm:inline-block text-xs font-mono text-text-muted">
              RFC // ARCHITECTURE-01
            </span>
            <button
              onClick={onClose}
              aria-label="Close case study dialog"
              className="p-1.5 rounded-lg text-text-muted hover:text-text-primary hover:bg-surface-elevated transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 sm:p-8 md:p-10 space-y-10">
          {/* Title & Metadata */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/30 text-accent-blue text-xs font-mono mb-3">
              <Terminal className="w-3.5 h-3.5" />
              <span>CASE STUDY // FULL-STACK ARCHITECTURE</span>
            </div>
            <h1 id="case-study-title" className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-text-primary tracking-tight mb-4">
              {caseStudy.title}
            </h1>
            <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
              {caseStudy.summary}
            </p>

            {/* Quick Specs Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 pt-6 border-t border-border-subtle">
              <div className="p-3 rounded-xl bg-surface-elevated/60 border border-border-subtle">
                <span className="text-[11px] font-mono text-text-muted uppercase block mb-1">Role</span>
                <span className="text-xs font-semibold text-text-primary">{caseStudy.role}</span>
              </div>
              <div className="p-3 rounded-xl bg-surface-elevated/60 border border-border-subtle">
                <span className="text-[11px] font-mono text-text-muted uppercase block mb-1">Timeline</span>
                <span className="text-xs font-semibold text-text-primary">{caseStudy.timeline}</span>
              </div>
              <div className="p-3 rounded-xl bg-surface-elevated/60 border border-border-subtle">
                <span className="text-[11px] font-mono text-text-muted uppercase block mb-1">Status</span>
                <span className="text-xs font-semibold text-accent-emerald flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-emerald animate-pulse" />
                  {caseStudy.status}
                </span>
              </div>
              <div className="p-3 rounded-xl bg-surface-elevated/60 border border-border-subtle">
                <span className="text-[11px] font-mono text-text-muted uppercase block mb-1">Artifacts</span>
                <div className="flex items-center gap-2">
                  <a
                    href={caseStudy.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-accent-blue hover:underline flex items-center gap-1"
                  >
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg> Code
                  </a>
                  <span className="text-text-muted">|</span>
                  <a
                    href={caseStudy.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-accent-cyan hover:underline flex items-center gap-1"
                  >
                    <ExternalLink className="w-3 h-3" /> Demo
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Technology Arsenal Matrix */}
          <div className="space-y-3">
            <h2 className="text-sm font-mono uppercase tracking-wider text-text-muted flex items-center gap-2">
              <Layers className="w-4 h-4 text-accent-blue" />
              <span>Technology Matrix</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <div className="p-3.5 rounded-xl bg-surface-elevated/70 border border-border-subtle">
                <span className="text-xs font-mono text-accent-blue font-medium block mb-2">Frontend</span>
                <div className="flex flex-wrap gap-1">
                  {caseStudy.technologies.frontend.map(t => (
                    <span key={t} className="text-[11px] font-mono px-2 py-0.5 rounded bg-surface-base text-text-secondary border border-border-subtle">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-surface-elevated/70 border border-border-subtle">
                <span className="text-xs font-mono text-accent-violet font-medium block mb-2">Backend</span>
                <div className="flex flex-wrap gap-1">
                  {caseStudy.technologies.backend.map(t => (
                    <span key={t} className="text-[11px] font-mono px-2 py-0.5 rounded bg-surface-base text-text-secondary border border-border-subtle">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-surface-elevated/70 border border-border-subtle">
                <span className="text-xs font-mono text-accent-cyan font-medium block mb-2">Data & Storage</span>
                <div className="flex flex-wrap gap-1">
                  {caseStudy.technologies.database.map(t => (
                    <span key={t} className="text-[11px] font-mono px-2 py-0.5 rounded bg-surface-base text-text-secondary border border-border-subtle">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-surface-elevated/70 border border-border-subtle">
                <span className="text-xs font-mono text-accent-emerald font-medium block mb-2">DevOps & Cloud</span>
                <div className="flex flex-wrap gap-1">
                  {caseStudy.technologies.devops.map(t => (
                    <span key={t} className="text-[11px] font-mono px-2 py-0.5 rounded bg-surface-base text-text-secondary border border-border-subtle">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Problem & Objectives */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-panel p-6 rounded-2xl border-l-4 border-l-accent-rose">
              <h2 className="text-base font-semibold text-text-primary mb-3 flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-accent-rose" />
                The Core Problem
              </h2>
              <p className="text-text-secondary text-sm leading-relaxed">
                {caseStudy.problemStatement}
              </p>
            </div>

            <div className="glass-panel p-6 rounded-2xl border-l-4 border-l-accent-emerald">
              <h2 className="text-base font-semibold text-text-primary mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent-emerald" />
                Architectural Objectives
              </h2>
              <ul className="space-y-2 text-sm text-text-secondary">
                {caseStudy.objectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-accent-emerald font-mono font-bold text-xs mt-0.5">0{i+1}.</span>
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* System Architecture Diagram */}
          <div className="space-y-3">
            <h2 className="text-sm font-mono uppercase tracking-wider text-text-muted flex items-center gap-2">
              <Server className="w-4 h-4 text-accent-blue" />
              <span>System Topology & Data Flow</span>
            </h2>
            <div className="glass-panel p-6 rounded-2xl bg-surface-elevated/40">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {caseStudy.architectureNodes.map((node, i) => (
                  <div
                    key={node.name}
                    className="p-4 rounded-xl bg-surface-base border border-border-subtle hover:border-accent-blue/40 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface-elevated text-accent-blue border border-accent-blue/20 uppercase">
                          Node 0{i + 1}
                        </span>
                        <span className="text-[11px] font-mono text-text-muted capitalize">
                          {node.type}
                        </span>
                      </div>
                      <h3 className="text-sm font-semibold text-text-primary mb-1">{node.name}</h3>
                      <p className="text-xs text-text-secondary">{node.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Code Implementation Snippet */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-mono uppercase tracking-wider text-text-muted flex items-center gap-2">
                <Cpu className="w-4 h-4 text-accent-violet" />
                <span>Key Implementation // Distributed Idempotency Lock</span>
              </h2>
              <span className="text-xs font-mono text-text-muted">
                {caseStudy.codeSnippet.filename}
              </span>
            </div>
            
            <div className="rounded-2xl border border-border-subtle overflow-hidden bg-[#0a0d14]">
              {/* Code window chrome */}
              <div className="px-4 py-2.5 bg-surface-elevated/60 border-b border-border-subtle flex items-center justify-between text-xs font-mono text-text-muted">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  <span className="ml-2 text-text-secondary">{caseStudy.codeSnippet.filename}</span>
                </div>
                <span className="text-accent-blue">TypeScript</span>
              </div>
              <pre className="p-4 sm:p-6 text-xs sm:text-sm font-mono text-text-secondary overflow-x-auto leading-relaxed">
                <code>{caseStudy.codeSnippet.code}</code>
              </pre>
            </div>
            <p className="text-xs text-text-muted italic pt-1">
              Rationale: {caseStudy.codeSnippet.explanation}
            </p>
          </div>

          {/* Challenges & Solutions */}
          <div className="space-y-3">
            <h2 className="text-sm font-mono uppercase tracking-wider text-text-muted flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-accent-amber" />
              <span>Challenges Faced & Engineering Solutions</span>
            </h2>
            <div className="space-y-3">
              {caseStudy.challenges.map((item, i) => (
                <div key={i} className="p-4 rounded-xl bg-surface-elevated/60 border border-border-subtle space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-xs font-mono font-bold text-accent-rose mt-0.5">CHALLENGE:</span>
                    <p className="text-xs sm:text-sm text-text-primary font-medium">{item.challenge}</p>
                  </div>
                  <div className="flex items-start gap-2 pl-4 border-l-2 border-accent-emerald">
                    <span className="text-xs font-mono font-bold text-accent-emerald mt-0.5">SOLUTION:</span>
                    <p className="text-xs sm:text-sm text-text-secondary">{item.solution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Design Decisions & Trade-Offs */}
          <div className="space-y-3">
            <h2 className="text-sm font-mono uppercase tracking-wider text-text-muted flex items-center gap-2">
              <GitBranch className="w-4 h-4 text-accent-cyan" />
              <span>Architectural Trade-Offs</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {caseStudy.tradeOffs.map((to, i) => (
                <div key={i} className="p-4 rounded-xl bg-surface-elevated/60 border border-border-subtle flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-text-muted uppercase block mb-1">Decision</span>
                    <h3 className="text-xs font-semibold text-text-primary mb-2">{to.decision}</h3>
                    <div className="mb-3 px-2 py-1 rounded bg-accent-blue/10 border border-accent-blue/20 text-xs font-mono text-accent-blue font-medium">
                      Selected: {to.chosen}
                    </div>
                  </div>
                  <p className="text-xs text-text-secondary leading-relaxed border-t border-border-subtle pt-2">
                    {to.tradeOff}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Measurable Outcomes */}
          <div className="space-y-3">
            <h2 className="text-sm font-mono uppercase tracking-wider text-text-muted flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-accent-emerald" />
              <span>Measurable Outcomes</span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {caseStudy.outcomes.map((item, i) => (
                <div key={i} className="p-4 rounded-xl glass-panel text-center border-accent-emerald/20">
                  <div className="text-2xl sm:text-3xl font-display font-bold text-accent-emerald mb-1">
                    {item.metric}
                  </div>
                  <div className="text-xs font-semibold text-text-primary mb-1">{item.label}</div>
                  <div className="text-[11px] text-text-muted">{item.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-surface-base/90 backdrop-blur-md border-t border-border-subtle flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="text-xs font-mono text-text-muted hover:text-text-primary px-4 py-2 rounded-lg bg-surface-elevated border border-border-subtle transition-all"
          >
            Close Document
          </button>
          
          <div className="flex items-center gap-3">
            <a
              href={caseStudy.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-elevated border border-border-subtle hover:border-border-muted text-xs font-mono text-text-primary transition-all"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span>View Source Code</span>
            </a>
            <a
              href={caseStudy.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-accent-blue to-accent-violet hover:brightness-110 shadow-[0_0_20px_rgba(59,130,246,0.35)] text-white text-xs font-mono font-medium transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Launch Live Demo</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
