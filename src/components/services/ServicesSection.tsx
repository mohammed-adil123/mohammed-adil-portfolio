import React from 'react';
import { Layers, Cpu, Database, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

interface ServicesSectionProps {
  onNavigate: (sectionId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onNavigate }) => {
  const services = [
    {
      number: '01',
      title: 'Full-Stack Web Applications',
      description: 'End-to-end web software built with React, TypeScript, Node.js, and Flask. Engineered for modularity, clean component architecture, and high reliability.',
      tech: ['React', 'TypeScript', 'Flask', 'Node.js', 'REST APIs'],
      icon: Layers,
    },
    {
      number: '02',
      title: 'Machine Learning & Vision Systems',
      description: 'Custom predictive pipelines and image processing tools. From regression pricing models in Scikit-Learn to contour segmentation and colony counting in OpenCV.',
      tech: ['Python', 'Scikit-Learn', 'OpenCV', 'Pandas', 'NumPy'],
      icon: Cpu,
    },
    {
      number: '03',
      title: 'Relational Database & API Architecture',
      description: 'Designing normalized 3NF schemas with zero data duplication, strict ACID guarantees, and sub-50ms query latency across SQL Server and PostgreSQL.',
      tech: ['MS SQL Server', 'PostgreSQL', 'MySQL', '3NF Normalization'],
      icon: Database,
    },
    {
      number: '04',
      title: 'Luxury Editorial Portfolios & Landing Pages',
      description: 'Bespoke, cinematic web presences that stand out immediately. Seamless 360° product rotations, Lenis smooth scrolling, and GSAP micro-animations.',
      tech: ['GSAP', 'Lenis', 'Canvas 360', 'Framer Motion', 'Tailwind'],
      icon: Sparkles,
    },
  ];

  const whyWorkWithMe = [
    {
      title: 'Engineering + Design',
      desc: 'Merging algorithmic rigor and mathematical precision with high-craft editorial aesthetics.',
    },
    {
      title: 'Built Around Your Goals',
      desc: 'Focused on measurable business outcomes, zero-redundancy schemas, and maintainable codebases.',
    },
    {
      title: 'Responsive & Accessible',
      desc: 'Built to WCAG accessibility guidelines with pixel-perfect responsiveness across mobile and desktop.',
    },
    {
      title: 'Performance Focused',
      desc: 'Sub-second load times, lightweight bundle sizes, and fluid 60fps GPU-accelerated motion.',
    },
    {
      title: 'Interactive When It Matters',
      desc: 'Intentional micro-interactions and tactile feedback that captivate without feeling gimmicky.',
    },
    {
      title: 'Uncompromising First Impression',
      desc: 'Crafted to leave an unforgettable impact on recruiters, clients, and industry peers.',
    },
  ];

  return (
    <section id="services" className="py-28 md:py-36 bg-[#030308] border-b border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff2a55]" />
              <span className="font-mono text-xs text-[#ff2a55] tracking-[0.25em] uppercase font-semibold">
                Section 05 // Client Solutions
              </span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-none">
              LET&apos;S BUILD SOMETHING WORTH REMEMBERING.
            </h2>
          </div>
          <p className="font-mono text-xs sm:text-sm text-white/50 max-w-sm tracking-wide">
            Turnkey engineering, artificial intelligence systems, and creative digital product development.
          </p>
        </div>

        {/* Services Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-28">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.number}
                className="editorial-card p-8 md:p-10 flex flex-col justify-between group hover:border-[#ff2a55]/40 transition-all duration-300"
                data-cursor="EXPLORE"
              >
                <div>
                  <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/[0.06]">
                    <span className="font-mono text-sm font-bold text-[#ff2a55] tracking-widest">
                      {service.number}
                    </span>
                    <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white/80 group-hover:text-[#ff2a55] group-hover:border-[#ff2a55]/30 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-editorial text-2xl font-bold text-white mb-3 group-hover:text-[#ff2a55] transition-colors">
                    {service.title}
                  </h3>

                  <p className="font-sans text-sm text-white/70 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.06]">
                    {service.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.06] font-mono text-[11px] text-white/70"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => onNavigate('contact')}
                    className="mt-6 inline-flex items-center gap-2 font-mono text-xs text-[#ff2a55] uppercase tracking-wider font-semibold group-hover:translate-x-1.5 transition-transform"
                  >
                    <span>Commission this Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Why Work With Me Section */}
        <div className="pt-16 border-t border-white/[0.08]">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="font-mono text-xs text-[#ff2a55] tracking-[0.25em] uppercase font-semibold">
              Standards &amp; Principles
            </span>
            <h3 className="font-editorial text-3xl sm:text-4xl font-extrabold text-white">
              WHY WORK WITH ME
            </h3>
            <p className="font-sans text-sm text-white/60">
              A commitment to engineering clarity, aesthetic distinction, and reliable execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyWorkWithMe.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl border border-white/[0.06] bg-white/[0.015] hover:border-[#ff2a55]/30 transition-all space-y-2.5"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#ff2a55]" />
                  <h4 className="font-display text-base font-bold text-white">
                    {item.title}
                  </h4>
                </div>
                <p className="font-sans text-xs text-white/60 leading-relaxed pl-6">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
