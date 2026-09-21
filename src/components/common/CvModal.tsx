import React from 'react';
import { X, Download, Printer, ExternalLink, BookOpen, Briefcase, Code2, FolderGit2, Award } from 'lucide-react';
import { PERSONAL_INFO, EDUCATION_DATA, PRE_UNIVERSITY_EDUCATION, EXPERIENCES, PROJECTS, CERTIFICATIONS } from '../../data/portfolioData';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-4xl bg-surface-base border border-white/10 rounded-xl shadow-2xl overflow-hidden my-6"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cv-modal-title"
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-3.5 border-b border-white/10 bg-surface-elevated/90 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
            <span className="text-xs font-mono text-text-muted ml-2 font-medium">Mohammed_Adil_Resume.pdf</span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="/Mohammed_Adil_Resume.pdf"
              download="Mohammed_Adil_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-accent-blue to-accent-violet text-white text-xs font-mono font-medium hover:brightness-110 shadow-[0_0_15px_rgba(59,130,246,0.35)] transition-all cursor-pointer"
              title="Download Authentic Resume PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
            <button
              onClick={handlePrint}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.05] border border-white/10 text-xs font-mono text-text-primary hover:bg-white/10 transition-colors cursor-pointer"
              title="Print Resume"
            >
              <Printer className="w-3.5 h-3.5 text-accent-blue" />
              <span>Print View</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-text-muted hover:text-white hover:bg-white/[0.08] transition-colors cursor-pointer"
              aria-label="Close CV Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Content */}
        <div className="p-6 sm:p-10 max-h-[82vh] overflow-y-auto font-sans text-text-primary space-y-7 bg-[#0b0f19] print:bg-white print:text-black print:p-8">
          {/* Header */}
          <div className="border-b border-white/10 pb-5 text-center sm:text-left">
            <h2 id="cv-modal-title" className="text-3xl font-display font-bold text-white tracking-tight uppercase print:text-black">
              {PERSONAL_INFO.name}
            </h2>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-3 gap-y-1 text-xs font-mono text-text-secondary mt-2 print:text-black">
              <span>{PERSONAL_INFO.location}</span>
              <span>|</span>
              <a href={`tel:${PERSONAL_INFO.phone}`} className="text-accent-blue hover:underline print:text-black">{PERSONAL_INFO.phone}</a>
              <span>|</span>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="text-accent-blue hover:underline print:text-black">{PERSONAL_INFO.email}</a>
              <span>|</span>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-accent-blue hover:underline inline-flex items-center gap-1 print:text-black">
                linkedin.com/in/mohammed-adil07 <ExternalLink className="w-3 h-3 print:hidden" />
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-accent-blue flex items-center gap-2 border-b border-white/10 pb-1 print:text-black print:border-black">
              <span>PROFESSIONAL SUMMARY</span>
            </h3>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed print:text-black">
              {PERSONAL_INFO.bioLong}
            </p>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-accent-blue flex items-center gap-2 border-b border-white/10 pb-1 print:text-black print:border-black">
              <Code2 className="w-3.5 h-3.5 print:hidden" />
              <span>TECHNICAL SKILLS</span>
            </h3>
            <div className="text-xs space-y-1.5 text-text-secondary print:text-black font-sans">
              <div>
                <strong className="text-text-primary font-mono print:text-black">Languages: </strong>
                <span>Python, Java, C, JavaScript (ES6+), TypeScript</span>
              </div>
              <div>
                <strong className="text-text-primary font-mono print:text-black">Web Technologies: </strong>
                <span>Node.js, Express.js, Flask, HTML5, CSS3, REST APIs</span>
              </div>
              <div>
                <strong className="text-text-primary font-mono print:text-black">Machine Learning &amp; Data: </strong>
                <span>Pandas, NumPy, Feature Extraction, Supervised Learning, Data Preprocessing, Scikit-Learn, OpenCV</span>
              </div>
              <div>
                <strong className="text-text-primary font-mono print:text-black">Databases: </strong>
                <span>PostgreSQL, MySQL, MS SQL Server, SQL Queries</span>
              </div>
              <div>
                <strong className="text-text-primary font-mono print:text-black">Core Concepts &amp; Tools: </strong>
                <span>Data Structures &amp; Algorithms (DSA), OOP, DBMS, GitHub, Postman, VS Code, SDLC, Software QA</span>
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-accent-blue flex items-center gap-2 border-b border-white/10 pb-1 print:text-black print:border-black">
              <Briefcase className="w-3.5 h-3.5 print:hidden" />
              <span>WORK EXPERIENCE</span>
            </h3>
            {EXPERIENCES.map((exp) => (
              <div key={exp.id} className="space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <div className="text-xs sm:text-sm font-semibold text-white print:text-black">
                    {exp.title}
                  </div>
                  <span className="text-xs font-mono text-text-muted print:text-black">{exp.period}</span>
                </div>
                <div className="text-xs font-mono text-accent-blue print:text-black font-medium">
                  {exp.organization}
                </div>
                <ul className="list-disc list-inside text-xs text-text-secondary space-y-1 pt-1 print:text-black">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="leading-relaxed">{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Technical Projects */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-accent-blue flex items-center gap-2 border-b border-white/10 pb-1 print:text-black print:border-black">
              <FolderGit2 className="w-3.5 h-3.5 print:hidden" />
              <span>TECHNICAL PROJECTS</span>
            </h3>
            <div className="space-y-4">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <div className="text-xs sm:text-sm font-semibold text-white print:text-black">
                      {proj.title}
                    </div>
                    <span className="text-[11px] font-mono text-accent-blue print:text-black">{proj.technologies.slice(0, 4).join(', ')}</span>
                  </div>
                  <p className="text-xs text-text-secondary leading-relaxed print:text-black">
                    {proj.detailedDescription}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-accent-blue flex items-center gap-2 border-b border-white/10 pb-1 print:text-black print:border-black">
              <BookOpen className="w-3.5 h-3.5 print:hidden" />
              <span>EDUCATION</span>
            </h3>
            
            <div className="space-y-2 text-xs">
              {/* College */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <span className="font-semibold text-white print:text-black">{EDUCATION_DATA.institution}</span>
                  <span className="font-mono text-text-muted print:text-black">{EDUCATION_DATA.period}</span>
                </div>
                <div className="text-text-secondary print:text-black flex items-center justify-between">
                  <span>{EDUCATION_DATA.degree}</span>
                  <strong className="text-accent-emerald print:text-black font-mono">{EDUCATION_DATA.gpa}</strong>
                </div>
              </div>

              {/* PU College */}
              <div className="pt-1.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <span className="font-semibold text-white print:text-black">{PRE_UNIVERSITY_EDUCATION.institution}</span>
                  <span className="font-mono text-text-muted print:text-black">{PRE_UNIVERSITY_EDUCATION.period}</span>
                </div>
                <div className="text-text-secondary print:text-black flex items-center justify-between">
                  <span>{PRE_UNIVERSITY_EDUCATION.course}</span>
                  <strong className="text-accent-emerald print:text-black font-mono">Score: {PRE_UNIVERSITY_EDUCATION.score}</strong>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications & Languages */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-accent-blue flex items-center gap-2 border-b border-white/10 pb-1 print:text-black print:border-black">
              <Award className="w-3.5 h-3.5 print:hidden" />
              <span>CERTIFICATIONS &amp; LANGUAGES</span>
            </h3>
            <ul className="text-xs text-text-secondary space-y-1 print:text-black">
              {CERTIFICATIONS.map((c) => (
                <li key={c.id} className="flex items-start gap-1.5">
                  <span className="text-accent-blue font-bold">•</span>
                  <span><strong className="text-text-primary print:text-black">{c.title.split(':')[0]}:</strong> {c.title.split(':')[1] || c.issuer}</span>
                </li>
              ))}
              <li className="flex items-start gap-1.5 pt-1">
                <span className="text-accent-blue font-bold">•</span>
                <span><strong className="text-text-primary print:text-black">Languages:</strong> {PERSONAL_INFO.languagesSpoken.join(', ')}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Modal Bottom Actions */}
        <div className="flex items-center justify-between px-6 py-3.5 border-t border-white/10 bg-surface-elevated/90">
          <span className="text-xs font-mono text-text-muted">Target: Systems Engineer @ Infosys &amp; Full-Stack Roles</span>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-accent-blue to-accent-violet text-white text-xs font-mono font-medium hover:brightness-110 shadow-md shadow-accent-blue/20 transition-all cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download / Print Resume</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
