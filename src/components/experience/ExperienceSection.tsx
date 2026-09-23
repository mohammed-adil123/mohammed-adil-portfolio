import React from 'react';
import { EXPERIENCES, CERTIFICATIONS, EDUCATION_DATA, PRE_UNIVERSITY_EDUCATION } from '../../data/portfolioData';
import { Briefcase, Award, GraduationCap, ArrowUpRight, CheckCircle2, FileText } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-28 md:py-36 bg-[#030308] border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff2a55]" />
              <span className="font-mono text-xs text-[#ff2a55] tracking-[0.25em] uppercase font-semibold">
                Section 06 // Track Record
              </span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-none">
              EXPERIENCE &amp; HONORS.
            </h2>
          </div>
          <p className="font-mono text-xs sm:text-sm text-white/50 max-w-sm tracking-wide">
            Industry internship, validated certifications, and academic foundations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Work Experience & Education */}
          <div className="lg:col-span-7 space-y-12">
            {/* Experience */}
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#ff2a55] tracking-widest uppercase mb-6">
                <Briefcase className="w-4 h-4" />
                <span>Industry Experience</span>
              </div>

              {EXPERIENCES.map((exp) => (
                <div
                  key={exp.id}
                  className="editorial-card p-8 group hover:border-[#ff2a55]/40 transition-all mb-6"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
                    <h3 className="font-editorial text-2xl font-bold text-white group-hover:text-[#ff2a55] transition-colors">
                      {exp.title}
                    </h3>
                    <span className="font-mono text-xs text-[#ff2a55]">
                      {exp.period}
                    </span>
                  </div>

                  <p className="font-mono text-xs text-white/60 mb-6">
                    {exp.organization}
                  </p>

                  <ul className="space-y-3 mb-6">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/70 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-[#ff2a55] shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.06]">
                    {exp.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.08] font-mono text-[11px] text-white/60"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Academic Education */}
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#ff2a55] tracking-widest uppercase mb-6">
                <GraduationCap className="w-4 h-4" />
                <span>Academic Education</span>
              </div>

              <div className="space-y-4">
                {/* Degree */}
                <div className="editorial-card p-6 hover:border-[#ff2a55]/40 transition-all">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                    <h4 className="font-editorial text-lg font-bold text-white">
                      {EDUCATION_DATA.degree}
                    </h4>
                    <span className="font-mono text-xs text-[#ff2a55]">
                      {EDUCATION_DATA.period}
                    </span>
                  </div>
                  <p className="font-mono text-xs text-white/60 mb-3">
                    {EDUCATION_DATA.institution} • <span className="text-white font-semibold">{EDUCATION_DATA.gpa}</span>
                  </p>
                  <p className="font-sans text-xs text-white/70 leading-relaxed">
                    Core coursework: Data Structures &amp; Algorithms, Object-Oriented Programming (Java/Python/C), Database Management Systems (SQL), Operating Systems, Software Engineering &amp; Testing.
                  </p>
                </div>

                {/* Pre-University */}
                <div className="editorial-card p-6 hover:border-[#ff2a55]/40 transition-all">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                    <h4 className="font-editorial text-lg font-bold text-white">
                      {PRE_UNIVERSITY_EDUCATION.course}
                    </h4>
                    <span className="font-mono text-xs text-[#ff2a55]">
                      {PRE_UNIVERSITY_EDUCATION.period}
                    </span>
                  </div>
                  <p className="font-mono text-xs text-white/60 mb-1">
                    {PRE_UNIVERSITY_EDUCATION.institution} • Score: <span className="text-white font-semibold">{PRE_UNIVERSITY_EDUCATION.score}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Verified Certifications */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono text-[#ff2a55] tracking-widest uppercase mb-6">
              <Award className="w-4 h-4" />
              <span>Verified Certifications</span>
            </div>

            <div className="space-y-4">
              {CERTIFICATIONS.map((cert) => (
                <div
                  key={cert.id}
                  className="editorial-card p-6 hover:border-[#ff2a55]/40 transition-all group"
                  data-cursor="LINK"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="font-mono text-[10px] text-[#ff2a55] tracking-wider uppercase font-semibold">
                          {cert.issuer} • {cert.year}
                        </span>
                      </div>
                      <h4 className="font-editorial text-base font-bold text-white group-hover:text-[#ff2a55] transition-colors leading-snug">
                        {cert.title}
                      </h4>
                      <p className="font-mono text-[11px] text-white/40 mt-2">
                        ID: {cert.credentialId}
                      </p>
                    </div>

                    <a
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.08] text-white/40 group-hover:text-[#ff2a55] group-hover:border-[#ff2a55]/30 transition-colors"
                      aria-label="Verify credential"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Resume Download Callout */}
            <div className="editorial-card p-6 border-dashed border-white/20 text-center space-y-4">
              <FileText className="w-8 h-8 text-[#ff2a55] mx-auto" />
              <div>
                <h4 className="font-editorial text-lg font-bold text-white">
                  Curriculum Vitae
                </h4>
                <p className="font-sans text-xs text-white/60 mt-1">
                  Full academic, technical project, and internship dossier.
                </p>
              </div>
              <a
                href="/Mohammed_Adil_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn-editorial-primary w-full justify-center"
                data-cursor="LINK"
              >
                <span>Download Resume (PDF)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
