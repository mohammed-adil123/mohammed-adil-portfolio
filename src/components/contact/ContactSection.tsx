import React from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { ContactForm } from './ContactForm';
import { Terminal, Mail, Phone, MapPin, Clock, ArrowUpRight } from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative border-t border-border-subtle/40">
      {/* Background ambient lighting */}
      <div className="absolute bottom-10 left-1/3 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-accent-blue text-xs font-mono mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>// OPPORTUNITIES &amp; OUTREACH</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-text-primary tracking-tight">
            Let's Connect &amp; Build Together
          </h2>
          <p className="text-text-secondary text-sm md:text-base mt-2 max-w-2xl">
            Information Science &amp; Engineering undergraduate targeting Systems Engineer roles and Full-Stack development positions. Reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Direct Channels & Coordinates */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-xl border-border-subtle space-y-4">
              <h3 className="text-lg font-display font-bold text-text-primary">
                Direct Channels &amp; Coordinates
              </h3>

              {/* Email Card */}
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-3.5 rounded-xl bg-surface-elevated/70 border border-border-subtle hover:border-accent-blue/40 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-accent-blue/10 text-accent-blue">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-text-muted uppercase block">
                      Direct Email
                    </span>
                    <span className="text-xs sm:text-sm font-mono text-text-primary group-hover:text-accent-blue transition-colors">
                      {PERSONAL_INFO.email}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-text-muted group-hover:text-accent-blue group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              {/* Phone Card */}
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="p-3.5 rounded-xl bg-surface-elevated/70 border border-border-subtle hover:border-accent-emerald/40 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-accent-emerald/10 text-accent-emerald">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-text-muted uppercase block">
                      Direct Phone
                    </span>
                    <span className="text-xs sm:text-sm font-mono text-text-primary group-hover:text-accent-emerald transition-colors">
                      {PERSONAL_INFO.phone}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-text-muted group-hover:text-accent-emerald group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              {/* LinkedIn Card */}
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-surface-elevated/70 border border-border-subtle hover:border-accent-blue/40 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-accent-blue/10 text-accent-blue">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-text-muted uppercase block">
                      LinkedIn Profile
                    </span>
                    <span className="text-xs sm:text-sm font-mono text-text-primary group-hover:text-accent-blue transition-colors">
                      mohammed-adil07
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-text-muted group-hover:text-accent-blue group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              {/* GitHub Card */}
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-surface-elevated/70 border border-border-subtle hover:border-border-muted transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-surface-base text-text-secondary">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-text-muted uppercase block">
                      GitHub Repositories
                    </span>
                    <span className="text-xs sm:text-sm font-mono text-text-primary group-hover:text-accent-blue transition-colors">
                      @mohammed-adil
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-text-muted group-hover:text-accent-blue group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              {/* Availability & Location metadata */}
              <div className="pt-3 border-t border-border-subtle/80 space-y-2 text-xs font-mono text-text-secondary">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-accent-cyan flex-shrink-0" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-accent-emerald flex-shrink-0" />
                  <span>Replies promptly to recruiter inquiries</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};
