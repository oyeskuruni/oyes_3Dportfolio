import React, { useState } from 'react';
import { personalInfo } from '../../data/portfolioData';
import { SectionHeading } from '../ui/SectionHeading';
import { TiltCard3D } from '../ui/TiltCard3D';
import { MagneticButton } from '../ui/MagneticButton';
import { Mail, Copy, Check, Send, Calendar, Clock, Sparkles, MessageSquare, ArrowUpRight, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

export const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'GA4 Setup & Server-Side GTM',
    budget: '$3,000 - $7,000',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [submissionState, setSubmissionState] = useState('idle'); // 'idle' | 'submitting' | 'submitted'

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Please enter your name";
    if (!formData.email.trim()) {
      errs.email = "Please enter your email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address";
    }
    if (!formData.message.trim() || formData.message.trim().length < 15) {
      errs.message = "Please provide at least 15 characters describing your project";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmissionState('submitting');

    // Integration architecture:
    // If you use Formspree, replace endpoint with https://formspree.io/f/YOUR_ID
    // If you use EmailJS, call emailjs.send(...)
    // As a robust baseline, we generate the direct mailto dispatch and show real feedback:
    setTimeout(() => {
      const subject = encodeURIComponent(`Project Inquiry: ${formData.service} from ${formData.name}`);
      const body = encodeURIComponent(
        `Hi Oyes,\n\nName: ${formData.name}\nEmail: ${formData.email}\nService: ${formData.service}\nBudget: ${formData.budget}\n\nProject Details:\n${formData.message}\n`
      );

      // Open email client with prefilled brief
      window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;

      setSubmissionState('submitted');
      confetti({
        particleCount: 75,
        spread: 65,
        origin: { y: 0.7 },
        colors: ['#06B6D4', '#6366F1', '#10B981', '#F59E0B']
      });
    }, 800);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/3 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Initiate Collaboration"
          title="Ready to Engineer a High-Converting &"
          highlight="Accurately Measured Web Setup?"
          subtitle="Whether you need a full-stack web application, a Server-Side GTM deployment, or a complete forensic tracking audit."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Communication & Availability (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <TiltCard3D maxTilt={10}>
              <div className="p-6 sm:p-8 rounded-3xl glass-card border border-cyan-500/30 text-left">
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-semibold mb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                  <span>{personalInfo.status}</span>
                </div>

                <h3 className="text-2xl font-bold text-white dark:text-white light:text-slate-900 font-heading mb-3">
                  Direct Communication
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed mb-6">
                  I partner directly with ambitious founders, marketing leaders, and e-commerce brands worldwide. No account managers or outsourced handoffs—you work directly with me.
                </p>

                {/* Response Time Pill */}
                <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-slate-950/80 border border-slate-800 text-xs font-mono text-slate-300 mb-6">
                  <Clock className="w-4 h-4 text-cyan-400" />
                  <span>Average Response Time: <strong className="text-cyan-400">{personalInfo.responseTime}</strong></span>
                </div>

                {/* Copy Email Button */}
                <div className="space-y-2">
                  <label className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                    Direct Email Address:
                  </label>
                  <div className="flex items-center gap-2 p-2 rounded-2xl bg-slate-950 border border-slate-800">
                    <div className="flex-1 px-3 text-xs sm:text-sm font-mono text-cyan-400 truncate">
                      {personalInfo.email}
                    </div>
                    <button
                      onClick={handleCopyEmail}
                      className="px-3.5 py-1.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-mono font-bold flex items-center gap-1.5 transition-all cursor-pointer"
                    >
                      {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copied ? 'Copied!' : 'Copy'}</span>
                    </button>
                  </div>
                </div>
              </div>
            </TiltCard3D>

            {/* Schedule Discovery Call */}
            <TiltCard3D maxTilt={8}>
              <div className="p-6 rounded-3xl glass-card border border-white/10 dark:border-white/10 light:border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white dark:text-white light:text-slate-900">
                      Schedule 20-Min Discovery
                    </h4>
                    <p className="text-xs text-slate-400">
                      Discuss scope, timeline & pricing
                    </p>
                  </div>
                </div>

                <MagneticButton
                  href={personalInfo.socials.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-mono font-semibold transition-all gap-1.5 shadow-md cursor-pointer"
                >
                  <span>Book Call</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </MagneticButton>
              </div>
            </TiltCard3D>
          </div>

          {/* Right Column: Validated Interactive Form (7 cols) */}
          <div className="lg:col-span-7">
            <TiltCard3D maxTilt={6}>
              <div className="p-6 sm:p-10 rounded-3xl glass-card border border-white/10 dark:border-white/10 light:border-slate-200 text-left">
                {submissionState === 'submitted' ? (
                  <div className="py-10 flex flex-col items-center text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center">
                      <Check className="w-8 h-8 stroke-[3]" />
                    </div>
                    <h4 className="text-2xl font-bold text-white font-heading">
                      Inquiry Dispatched!
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 max-w-md leading-relaxed">
                      Thank you for reaching out, {formData.name}. Your email client was triggered with your prefilled project scope, and I will review and reply within {personalInfo.responseTime}.
                    </p>
                    <button
                      onClick={() => {
                        setSubmissionState('idle');
                        setFormData({ name: '', email: '', service: 'GA4 Setup & Server-Side GTM', budget: '$3,000 - $7,000', message: '' });
                      }}
                      className="mt-4 px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono transition-colors cursor-pointer"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <h3 className="text-xl font-bold text-white dark:text-white light:text-slate-900 font-heading">
                      Submit a Project Brief
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div>
                        <label className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => {
                            setFormData({ ...formData, name: e.target.value });
                            if (errors.name) setErrors({ ...errors, name: null });
                          }}
                          placeholder="Alex Morgan"
                          className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 dark:bg-slate-900/90 light:bg-white border text-white dark:text-white light:text-slate-900 text-sm focus:outline-none transition-colors ${
                            errors.name ? 'border-rose-500' : 'border-slate-700 focus:border-cyan-400'
                          }`}
                        />
                        {errors.name && (
                          <span className="text-[11px] text-rose-400 font-mono flex items-center gap-1 mt-1">
                            <AlertCircle className="w-3 h-3" /> {errors.name}
                          </span>
                        )}
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1">
                          Your Email *
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => {
                            setFormData({ ...formData, email: e.target.value });
                            if (errors.email) setErrors({ ...errors, email: null });
                          }}
                          placeholder="alex@company.com"
                          className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 dark:bg-slate-900/90 light:bg-white border text-white dark:text-white light:text-slate-900 text-sm focus:outline-none transition-colors ${
                            errors.email ? 'border-rose-500' : 'border-slate-700 focus:border-cyan-400'
                          }`}
                        />
                        {errors.email && (
                          <span className="text-[11px] text-rose-400 font-mono flex items-center gap-1 mt-1">
                            <AlertCircle className="w-3 h-3" /> {errors.email}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Service */}
                      <div>
                        <label className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1">
                          Primary Service Required
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-slate-900/90 dark:bg-slate-900/90 light:bg-white border border-slate-700 dark:border-slate-700 light:border-slate-300 text-white dark:text-white light:text-slate-900 text-sm focus:outline-none focus:border-cyan-400 transition-colors cursor-pointer"
                        >
                          <option value="GA4 Setup & Server-Side GTM">GA4 & Server-Side GTM</option>
                          <option value="Full-Stack Web Development">Full-Stack Web Development</option>
                          <option value="Conversion Tracking & Meta CAPI">Conversion Tracking & Meta CAPI</option>
                          <option value="Shopify / WooCommerce Tracking">Shopify / WooCommerce Tracking</option>
                          <option value="Complete Forensic Tracking Audit">Complete Forensic Tracking Audit</option>
                        </select>
                      </div>

                      {/* Budget */}
                      <div>
                        <label className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1">
                          Estimated Budget
                        </label>
                        <select
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-slate-900/90 dark:bg-slate-900/90 light:bg-white border border-slate-700 dark:border-slate-700 light:border-slate-300 text-white dark:text-white light:text-slate-900 text-sm focus:outline-none focus:border-cyan-400 transition-colors cursor-pointer"
                        >
                          <option value="< $3,000">&lt; $3,000</option>
                          <option value="$3,000 - $7,000">$3,000 - $7,000</option>
                          <option value="$7,000 - $15,000">$7,000 - $15,000</option>
                          <option value="$15,000+">$15,000+ (Enterprise)</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1">
                        Project Details & Objectives *
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => {
                          setFormData({ ...formData, message: e.target.value });
                          if (errors.message) setErrors({ ...errors, message: null });
                        }}
                        placeholder="Tell me about your current website or tracking setup, challenges, timeline, and goals..."
                        className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 dark:bg-slate-900/90 light:bg-white border text-white dark:text-white light:text-slate-900 text-sm focus:outline-none transition-colors resize-none ${
                          errors.message ? 'border-rose-500' : 'border-slate-700 focus:border-cyan-400'
                        }`}
                      />
                      {errors.message && (
                        <span className="text-[11px] text-rose-400 font-mono flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3 h-3" /> {errors.message}
                        </span>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={submissionState === 'submitting'}
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-extrabold text-sm font-mono shadow-xl shadow-cyan-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {submissionState === 'submitting' ? (
                        <div className="w-5 h-5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <span>Submit Project Brief</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </TiltCard3D>
          </div>
        </div>
      </div>
    </section>
  );
};
