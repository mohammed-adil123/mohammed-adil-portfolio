import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, ArrowRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/SocialIcons';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Full-Stack Web Application',
    message: '',
  });

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate instantaneous feedback toast
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
      setFormData({
        name: '',
        email: '',
        projectType: 'Full-Stack Web Application',
        message: '',
      });
    }, 600);
  };

  return (
    <section id="contact" className="py-28 md:py-36 bg-[#030308] border-b border-white/[0.06] relative">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/3 w-[600px] h-[600px] rounded-full bg-[#ff2a55]/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Final Dramatic CTA Banner */}
        <div className="editorial-card p-10 md:p-16 text-center space-y-6 mb-28 border-[#ff2a55]/20 bg-gradient-to-b from-[#0a0a18] to-[#030308]">
          <span className="font-mono text-xs text-[#ff2a55] tracking-[0.3em] uppercase font-semibold">
            Next Generation Web
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-3xl mx-auto">
            YOUR NEXT DIGITAL EXPERIENCE COULD LOOK LIKE THIS.
          </h2>
          <p className="font-sans text-sm sm:text-base text-white/60 max-w-xl mx-auto">
            Let&apos;s build an unforgettable web platform, scalable full-stack system, or machine learning solution together.
          </p>
          <div className="pt-4">
            <a
              href={`mailto:${PERSONAL_INFO.email}?subject=Project%20Inquiry%20from%20Portfolio`}
              className="btn-editorial-primary inline-flex text-sm"
              data-cursor="LINK"
            >
              <span>Start a Project Today</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff2a55]" />
              <span className="font-mono text-xs text-[#ff2a55] tracking-[0.25em] uppercase font-semibold">
                Section 07 // Direct Dispatch
              </span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-none">
              HAVE AN IDEA? LET&apos;S BUILD IT.
            </h2>
          </div>
          <p className="font-mono text-xs sm:text-sm text-white/50 max-w-sm tracking-wide">
            Whether you&apos;re looking for a full-stack system, ML model, or luxury website, let&apos;s create something people remember.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Contacts */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h3 className="font-editorial text-2xl font-bold text-white">
                Get in Touch
              </h3>
              <p className="font-sans text-sm text-white/70 leading-relaxed">
                Available for software engineer positions, systems roles, full-stack commissions, and collaborative technical projects.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-4 p-4 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-[#ff2a55]/40 hover:bg-[#ff2a55]/5 transition-all group"
                data-cursor="LINK"
              >
                <div className="p-3 rounded-lg bg-white/[0.04] text-[#ff2a55] group-hover:bg-[#ff2a55] group-hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-mono text-[10px] text-white/40 uppercase">Email</div>
                  <div className="font-mono text-xs sm:text-sm text-white font-medium">{PERSONAL_INFO.email}</div>
                </div>
              </a>

              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="flex items-center gap-4 p-4 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-[#ff2a55]/40 hover:bg-[#ff2a55]/5 transition-all group"
                data-cursor="LINK"
              >
                <div className="p-3 rounded-lg bg-white/[0.04] text-[#ff2a55] group-hover:bg-[#ff2a55] group-hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-mono text-[10px] text-white/40 uppercase">Phone / WhatsApp</div>
                  <div className="font-mono text-xs sm:text-sm text-white font-medium">{PERSONAL_INFO.phone}</div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl border border-white/[0.06] bg-white/[0.02]">
                <div className="p-3 rounded-lg bg-white/[0.04] text-[#ff2a55]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-mono text-[10px] text-white/40 uppercase">Location</div>
                  <div className="font-mono text-xs sm:text-sm text-white font-medium">{PERSONAL_INFO.location}</div>
                </div>
              </div>
            </div>

            {/* Social channels */}
            <div className="pt-4 border-t border-white/[0.06]">
              <div className="font-mono text-xs text-white/40 uppercase tracking-widest mb-3">
                Professional Channels
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-lg border border-white/[0.08] bg-white/[0.02] font-mono text-xs text-white/70 hover:text-white hover:border-[#ff2a55]/40 transition-colors flex items-center gap-2"
                  data-cursor="LINK"
                >
                  <LinkedinIcon className="w-4 h-4 text-[#ff2a55]" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-lg border border-white/[0.08] bg-white/[0.02] font-mono text-xs text-white/70 hover:text-white hover:border-[#ff2a55]/40 transition-colors flex items-center gap-2"
                  data-cursor="LINK"
                >
                  <GithubIcon className="w-4 h-4 text-[#ff2a55]" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="editorial-card p-8 sm:p-10">
              <h3 className="font-editorial text-2xl font-bold text-white mb-6">
                Send a Message
              </h3>

              {submitted ? (
                <div className="p-8 rounded-xl bg-[#ff2a55]/10 border border-[#ff2a55]/30 text-center space-y-3 animate-in fade-in">
                  <CheckCircle2 className="w-10 h-10 text-[#ff2a55] mx-auto" />
                  <h4 className="font-editorial text-xl font-bold text-white">
                    Transmission Received!
                  </h4>
                  <p className="font-sans text-xs text-white/70">
                    Thank you for reaching out. Mohammed Adil will reply to your inquiry shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-mono text-xs text-white/60 uppercase tracking-wider mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white font-sans text-sm focus:outline-none focus:border-[#ff2a55] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-xs text-white/60 uppercase tracking-wider mb-2">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. alex@company.com"
                        className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white font-sans text-sm focus:outline-none focus:border-[#ff2a55] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-xs text-white/60 uppercase tracking-wider mb-2">
                      Project Type
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-[#070712] border border-white/10 text-white font-sans text-sm focus:outline-none focus:border-[#ff2a55] transition-colors"
                    >
                      <option value="Full-Stack Web Application">Full-Stack Web Application</option>
                      <option value="Machine Learning / Computer Vision">Machine Learning / Computer Vision</option>
                      <option value="Relational Database Architecture">Relational Database Architecture</option>
                      <option value="Premium 360° Portfolio Website">Premium 360° Portfolio Website</option>
                      <option value="Full-Time Engineering Role">Full-Time Engineering Role</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-mono text-xs text-white/60 uppercase tracking-wider mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your project, timeline, or engineering opportunity..."
                      className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white font-sans text-sm focus:outline-none focus:border-[#ff2a55] transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-editorial-primary w-full justify-center group"
                    data-cursor="LINK"
                  >
                    <span>{isSubmitting ? 'Transmitting...' : "Let's Build"}</span>
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
