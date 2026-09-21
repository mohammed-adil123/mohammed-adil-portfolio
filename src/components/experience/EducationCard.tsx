import React from 'react';
import { EDUCATION_DATA, PRE_UNIVERSITY_EDUCATION, CERTIFICATIONS, PERSONAL_INFO } from '../../data/portfolioData';
import { GraduationCap, Award, BookOpen, ExternalLink, CheckCircle2, Globe } from 'lucide-react';

export const EducationCard: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Primary Engineering Degree Card */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border-border-subtle relative overflow-hidden group">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-2xl bg-accent-blue/10 border border-accent-blue/30 text-accent-blue flex-shrink-0">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
              <span className="text-xs font-mono text-accent-blue font-semibold uppercase">
                Bachelor of Technology (B.Tech)
              </span>
              <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-surface-elevated text-text-muted border border-border-subtle">
                {EDUCATION_DATA.period}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-display font-bold text-text-primary mb-1">
              {EDUCATION_DATA.institution}
            </h3>
            <p className="text-text-secondary text-sm mb-3">
              {EDUCATION_DATA.degree}
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-surface-elevated/70 border border-border-subtle text-xs font-mono text-text-muted mb-6">
              <CheckCircle2 className="w-3.5 h-3.5 text-accent-emerald" />
              <span>Undergraduate (ISE)</span>
              <span className="text-border-subtle">|</span>
              <span className="text-accent-blue font-bold">{EDUCATION_DATA.gpa}</span>
            </div>

            {/* Core Coursework */}
            <div>
              <h4 className="text-xs font-mono uppercase text-text-muted mb-2.5 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-accent-blue" />
                <span>Foundational &amp; Advanced Coursework</span>
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {EDUCATION_DATA.coursework.map((course) => (
                  <span
                    key={course}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-surface-elevated text-text-secondary border border-border-subtle/80"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pre-University College Card */}
      <div className="glass-panel p-6 sm:p-7 rounded-3xl border-border-subtle">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-2xl bg-accent-violet/10 border border-accent-violet/30 text-accent-violet flex-shrink-0">
            <GraduationCap className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
              <span className="text-xs font-mono text-accent-violet font-semibold uppercase">
                Pre-University Board Examination
              </span>
              <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-surface-elevated text-text-muted border border-border-subtle">
                {PRE_UNIVERSITY_EDUCATION.period}
              </span>
            </div>
            <h4 className="text-lg font-display font-bold text-text-primary mb-1">
              {PRE_UNIVERSITY_EDUCATION.institution}
            </h4>
            <p className="text-xs sm:text-sm text-text-secondary mb-3">
              {PRE_UNIVERSITY_EDUCATION.course}
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-accent-emerald/10 border border-accent-emerald/20 text-xs font-mono text-accent-emerald">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Final Academic Score: <strong>{PRE_UNIVERSITY_EDUCATION.score}</strong></span>
            </div>
          </div>
        </div>
      </div>

      {/* Certifications & Spoken Languages */}
      <div>
        <h4 className="text-sm font-mono uppercase text-text-muted tracking-wider mb-4 flex items-center gap-2">
          <Award className="w-4 h-4 text-accent-violet" />
          <span>Verified Certifications &amp; Technical Competencies</span>
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              className="p-4 rounded-2xl glass-panel hover:border-accent-violet/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface-elevated text-accent-blue border border-border-subtle">
                    {cert.issuer}
                  </span>
                  <span className="text-xs font-mono text-text-muted">{cert.year}</span>
                </div>
                <h5 className="text-xs sm:text-sm font-semibold text-text-primary mb-1">{cert.title}</h5>
                {cert.credentialId && (
                  <span className="text-[10px] font-mono text-text-muted block">
                    Credential ID: {cert.credentialId}
                  </span>
                )}
              </div>
              <div className="mt-3 pt-2 border-t border-border-subtle/60 flex justify-end">
                <a
                  href={cert.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-mono text-accent-violet hover:underline"
                >
                  <span>Verified</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Spoken Languages Pill Cluster */}
        <div className="mt-4 p-4 rounded-2xl glass-panel border border-border-subtle flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs font-mono text-text-secondary">
            <Globe className="w-4 h-4 text-accent-cyan" />
            <span>Spoken Languages:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {PERSONAL_INFO.languagesSpoken.map((lang) => (
              <span key={lang} className="text-xs font-mono px-2.5 py-1 rounded-lg bg-surface-elevated text-text-primary border border-border-subtle">
                {lang}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
