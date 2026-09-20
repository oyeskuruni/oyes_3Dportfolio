import React from 'react';
import { personalInfo } from '../../data/portfolioData';
import { ArrowUp, Mail, Sparkles, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterXIcon } from '../ui/SocialIcons';
import { MagneticButton } from '../ui/MagneticButton';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-slate-800/80 bg-slate-950/90 dark:bg-slate-950/95 light:bg-slate-50 transition-colors duration-300 overflow-hidden text-left z-10">
      {/* Background glow gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-28 bg-cyan-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 p-[1.5px]">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center font-mono font-black text-cyan-400 text-sm">
                  OK
                </div>
              </div>
              <span className="font-heading font-extrabold text-2xl text-white dark:text-white light:text-slate-900">
                Oyes Kuruni
              </span>
            </div>

            <p className="text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-md leading-relaxed">
              Full-Stack Web Developer, Web Analyst, and Digital Marketer.
              Over 5 years of experience delivering 1,000+ high-precision web, tracking, and ad tech solutions worldwide.
            </p>

            {/* Live Operational Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>All 3D, Analytics & Tracking Systems Operational ⚡</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 dark:text-slate-300 light:text-slate-800 font-semibold mb-4">
              Portfolio Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li><button onClick={() => scrollTo('#about')} className="hover:text-cyan-400 transition-colors cursor-pointer">About Story</button></li>
              <li><button onClick={() => scrollTo('#skills')} className="hover:text-cyan-400 transition-colors cursor-pointer">3D Skills Constellation</button></li>
              <li><button onClick={() => scrollTo('#services')} className="hover:text-cyan-400 transition-colors cursor-pointer">12 Specialized Services</button></li>
              <li><button onClick={() => scrollTo('#projects')} className="hover:text-cyan-400 transition-colors cursor-pointer">Project Deep Dives</button></li>
              <li><button onClick={() => scrollTo('#process')} className="hover:text-cyan-400 transition-colors cursor-pointer">5-Phase Methodology</button></li>
              <li><button onClick={() => scrollTo('#certifications')} className="hover:text-cyan-400 transition-colors cursor-pointer">GA4 Certification</button></li>
            </ul>
          </div>

          {/* Connect & Social Channels */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 dark:text-slate-300 light:text-slate-800 font-semibold mb-4">
              Connect & Engage
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 text-xs sm:text-sm text-cyan-400 hover:text-cyan-300 transition-colors font-mono"
              >
                <Mail className="w-4 h-4" />
                <span className="truncate">{personalInfo.email}</span>
              </a>

              <div className="flex items-center gap-3 pt-2">
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/40 transition-all"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/40 transition-all"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/40 transition-all"
                  aria-label="Twitter / X"
                >
                  <TwitterXIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright & smooth back to top */}
        <div className="pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Oyes Kuruni. All rights reserved. Crafted with React, Three.js, GSAP & Lenis.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
