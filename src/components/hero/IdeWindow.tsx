import React, { useState } from 'react';
import { Copy, Check, FileCode, GitBranch } from 'lucide-react';

export const IdeWindow: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const codeString = `interface SystemsEngineerProfile {
  name: string;
  college: string;
  degree: string;
  cgpa: number;
  coreLanguages: string[];
  targetRole: string;
  currentProjects: string[];
  internship: string;
  deliverRobustSolutions: () => Promise<void>;
}

const engineer: SystemsEngineerProfile = {
  name: "Mohammed Adil",
  college: "NMAM Institute of Technology, Nitte",
  degree: "B.Tech in Information Science & Engineering",
  cgpa: 7.56,
  targetRole: "Systems Engineer & Software Developer",
  coreLanguages: ["Python", "Java", "SQL", "JavaScript", "C"],
  currentProjects: [
    "Inventory & Order Management System (Flask, MS SQL)",
    "House Price Prediction (Scikit-Learn, Pandas)",
    "Petri Dish Culture Colony Analysis (OpenCV)"
  ],
  internship: "Software Intern @ Agnirva (AICTE NEAT 5.0)",
  deliverRobustSolutions: async () => {
    await engineerReliableSystems({
      normalizedDB: "3NF",
      testDrivenQA: true,
      accessibility: "WCAG"
    });
  }
};`;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full glass-panel-elevated rounded-xl overflow-hidden border border-white/10 font-mono text-xs shadow-2xl transition-all hover:border-primary/40">
      {/* Window Titlebar */}
      <div className="flex items-center justify-between px-4 py-2 bg-surface/95 border-b border-white/10">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444] inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B] inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] inline-block" />
          
          <div className="flex items-center gap-1.5 ml-3 px-3 py-1 bg-surface-container border-b-2 border-accent-blue text-on-surface">
            <FileCode className="w-3.5 h-3.5 text-accent-blue" />
            <span className="text-[11px] text-white font-medium">adil_engineer.ts</span>
          </div>
        </div>

        <button
          onClick={handleCopy}
          className="flex items-center gap-1 text-[11px] text-on-surface-variant hover:text-white transition-colors cursor-pointer px-2 py-0.5 rounded hover:bg-white/[0.06]"
          title="Copy Code"
        >
          {copied ? (
            <>
              <Check className="w-3 h-3 text-emerald-400" />
              <span className="text-emerald-400">Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3 h-3" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code Editor Body with Line Number Gutter */}
      <div className="p-4 sm:p-5 overflow-x-auto bg-[#07090E] leading-relaxed select-text flex">
        {/* Line Numbers Gutter */}
        <div className="pr-4 select-none text-right font-mono text-[11px] sm:text-xs text-[#475569] border-r border-white/5 space-y-0.5 shrink-0">
          <div>01</div>
          <div>02</div>
          <div>03</div>
          <div>04</div>
          <div>05</div>
          <div>06</div>
          <div>07</div>
          <div>08</div>
          <div>09</div>
          <div>10</div>
          <div>11</div>
          <div>12</div>
          <div>13</div>
          <div>14</div>
          <div>15</div>
        </div>

        {/* Code Content */}
        <div className="pl-4 overflow-x-auto">
          <pre className="text-[11px] sm:text-xs font-mono">
            <code>
              <span className="text-purple-400">interface</span> <span className="text-cyan-300 font-semibold">SystemsEngineerProfile</span> &#123;{'\n'}
              {'  '}<span className="text-slate-300">name</span>: <span className="text-emerald-300">string</span>;{'\n'}
              {'  '}<span className="text-slate-300">degree</span>: <span className="text-emerald-300">string</span>; <span className="text-slate-500">// NMAMIT Nitte (CGPA: 7.56)</span>{'\n'}
              {'  '}<span className="text-slate-300">targetRole</span>: <span className="text-emerald-300">string</span>;{'\n'}
              {'  '}<span className="text-slate-300">coreStack</span>: <span className="text-emerald-300">string[]</span>;{'\n'}
              &#125;{'\n\n'}
              <span className="text-purple-400">const</span> <span className="text-blue-400">engineer</span>: <span className="text-cyan-300">SystemsEngineerProfile</span> = &#123;{'\n'}
              {'  '}<span className="text-slate-300">name</span>: <span className="text-amber-200">"Mohammed Adil"</span>,{'\n'}
              {'  '}<span className="text-slate-300">degree</span>: <span className="text-amber-200">"B.Tech Information Science &amp; Engg"</span>,{'\n'}
              {'  '}<span className="text-slate-300">targetRole</span>: <span className="text-amber-200">"Systems Engineer &amp; Software Developer"</span>,{'\n'}
              {'  '}<span className="text-slate-300">coreStack</span>: [<span className="text-amber-200">"Python"</span>, <span className="text-amber-200">"Java"</span>, <span className="text-amber-200">"SQL"</span>, <span className="text-amber-200">"Flask"</span>, <span className="text-amber-200">"OpenCV"</span>],{'\n'}
              {'  '}<span className="text-slate-300">internship</span>: <span className="text-emerald-300">"Software Intern @ Agnirva (AICTE NEAT 5.0)"</span>,{'\n'}
              {'  '}<span className="text-slate-300">projects</span>: [<span className="text-amber-200">"3NF Inventory DB"</span>, <span className="text-amber-200">"ML Regression"</span>, <span className="text-amber-200">"CV Colony Segment"</span>]{'\n'}
              &#125;;
            </code>
          </pre>
        </div>
      </div>

      {/* Terminal Footer Status Bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-surface border-t border-white/5 text-[10px] text-on-surface-variant font-mono">
        <div className="flex items-center gap-2">
          <GitBranch className="w-3 h-3 text-accent-blue" />
          <span className="text-white">git:(main)</span>
          <span className="text-emerald-400">✔ 0 errors, 0 warnings</span>
        </div>
        <div className="flex items-center gap-3">
          <span>TypeScript 5.4</span>
          <span>UTF-8</span>
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Ready</span>
          </span>
        </div>
      </div>
    </div>
  );
};
