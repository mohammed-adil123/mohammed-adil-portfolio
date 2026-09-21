import React, { useState } from 'react';
import { Send, CheckCircle2, Terminal, Copy, Check } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [copiedCurl, setCopiedCurl] = useState(false);

  const curlCommand = `curl -X POST https://api.adil.dev/contact \\
  -H "Content-Type: application/json" \\
  -d '{"name":"Recruiter","email":"recruiter@company.com","message":"Interview invitation"}'`;

  const handleCopyCurl = () => {
    navigator.clipboard.writeText(curlCommand);
    setCopiedCurl(true);
    setTimeout(() => setCopiedCurl(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate network submission
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 800);
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="aurora-card p-6 sm:p-8 space-y-4" style={{borderRadius:'16px'}}>
        <div className="flex items-center justify-between pb-3 border-b border-border-subtle">
          <span className="text-xs font-mono text-accent-blue font-medium flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5" />
            <span>DIRECT MESSAGE PIPELINE</span>
          </span>
          <span className="text-[11px] font-mono text-text-muted">
            P99 Delivery: &lt;100ms
          </span>
        </div>

        {/* Name & Email Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="contact-name" className="block text-xs font-mono text-text-secondary mb-1.5">
              Your Name <span className="text-accent-rose">*</span>
            </label>
            <input
              id="contact-name"
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Sarah Jenkins"
              className="w-full px-4 py-2.5 rounded-lg text-xs sm:text-sm text-on-surface placeholder:text-on-surface-variant/40 transition-all font-mono aurora-input"
            />
          </div>

          <div>
            <label htmlFor="contact-email" className="block text-xs font-mono text-text-secondary mb-1.5">
              Work Email <span className="text-accent-rose">*</span>
            </label>
            <input
              id="contact-email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="e.g. s.jenkins@company.com"
              className="w-full px-4 py-2.5 rounded-lg text-xs sm:text-sm text-on-surface placeholder:text-on-surface-variant/40 transition-all font-mono aurora-input"
            />
          </div>
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="contact-subject" className="block text-xs font-mono text-text-secondary mb-1.5">
            Subject / Opportunity Focus <span className="text-accent-rose">*</span>
          </label>
          <input
            id="contact-subject"
            type="text"
            required
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            placeholder="e.g. Systems Engineer / Full-Stack Opportunities"
            className="w-full px-4 py-2.5 rounded-lg bg-surface-elevated/70 border border-border-subtle text-xs sm:text-sm text-text-primary placeholder:text-text-muted/50 focus:outline-none focus:border-accent-blue/60 focus:ring-1 focus:ring-accent-blue/60 transition-all font-mono"
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="contact-message" className="block text-xs font-mono text-text-secondary mb-1.5">
            Message <span className="text-accent-rose">*</span>
          </label>
          <textarea
            id="contact-message"
            required
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Tell me about the role, team, or project requirements..."
            className="w-full px-4 py-2.5 rounded-lg bg-surface-elevated/70 border border-border-subtle text-xs sm:text-sm text-text-primary placeholder:text-text-muted/50 focus:outline-none focus:border-accent-blue/60 focus:ring-1 focus:ring-accent-blue/60 transition-all font-mono resize-y"
          />
        </div>

        {/* Submission Feedback Toast */}
        {status === 'success' && (
          <div className="p-3.5 rounded-lg bg-accent-emerald/15 border border-accent-emerald/30 text-accent-emerald flex items-center gap-2.5 text-xs font-mono animate-fadeIn">
            <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
            <span>Message sent successfully! Mohammed Adil will review and respond promptly.</span>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-[#7c3aed] to-[#0891b2] hover:brightness-110 shadow-glow-primary text-white font-mono font-medium text-xs sm:text-sm transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 disabled:opacity-50"
        >
          {status === 'submitting' ? (
            <span className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
              Dispatching Message...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <Send className="w-4 h-4" />
              Send Message
            </span>
          )}
        </button>
      </form>

      {/* Terminal Curl Option */}
      <div className="rounded-xl border border-border-subtle bg-[#0a0d14] overflow-hidden">
        <div className="px-4 py-2 bg-surface-elevated/80 border-b border-border-subtle flex items-center justify-between text-xs font-mono text-text-muted">
          <div className="flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5 text-accent-emerald" />
            <span>CLI Quick Outreach</span>
          </div>
          <button
            onClick={handleCopyCurl}
            className="flex items-center gap-1 text-[11px] text-text-muted hover:text-text-primary px-2 py-0.5 rounded bg-surface-base border border-border-subtle transition-all"
            aria-label="Copy curl command to clipboard"
          >
            {copiedCurl ? (
              <>
                <Check className="w-3 h-3 text-accent-emerald" />
                <span className="text-accent-emerald">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3 h-3" />
                <span>Copy cURL</span>
              </>
            )}
          </button>
        </div>
        <pre className="p-4 text-[11px] font-mono text-text-secondary overflow-x-auto">
          <code>{curlCommand}</code>
        </pre>
      </div>
    </div>
  );
};
