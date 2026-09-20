import React, { useState, useEffect, useRef } from 'react';
import { personalInfo } from '../../data/portfolioData';
import { HeroScene3D } from '../3d/HeroScene3D';
import { MagneticButton } from '../ui/MagneticButton';
import { GithubIcon, LinkedinIcon, TwitterXIcon } from '../ui/SocialIcons';
import { ArrowDown, ArrowUpRight, Sparkles, Terminal, Mail } from 'lucide-react';
import gsap from 'gsap';

export const Hero = () => {
  const [titleIdx, setTitleIdx] = useState(0);
  const containerRef = useRef(null);
  const titles = personalInfo.titles;

  // Staggered text rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIdx((prev) => (prev + 1) % titles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [titles.length]);

  // Staggered entrance animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-stagger", {
        opacity: 0,
        y: 35,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full" ref={containerRef}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          {/* Left Column: Typography & Functional CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left pt-6 lg:pt-0">
            {/* Status Pill */}
            <div className="hero-stagger inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/85 dark:bg-slate-900/85 light:bg-white border border-cyan-500/30 text-cyan-400 text-xs font-mono font-semibold mb-5 shadow-lg shadow-cyan-500/10 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>{personalInfo.status}</span>
            </div>

            {/* Main Greeting & Name */}
            <div className="hero-stagger space-y-1">
              <span className="text-sm sm:text-base font-mono font-medium text-slate-400 dark:text-slate-400 light:text-slate-600 tracking-wide uppercase">
                Hello, I am
              </span>
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-950 font-heading leading-tight">
                {personalInfo.name}
              </h1>
            </div>

            {/* Cycling Dynamic Title */}
            <div className="hero-stagger h-14 sm:h-16 flex items-center mt-2">
              <span className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-gradient-cyan font-heading transition-all duration-500">
                {titles[titleIdx]}
              </span>
            </div>

            {/* Tagline Description */}
            <p className="hero-stagger mt-4 text-base sm:text-lg text-slate-300 dark:text-slate-300 light:text-slate-700 max-w-xl leading-relaxed">
              {personalInfo.tagline}
            </p>

            {/* Key Expertise Badges (GA4, GTM, Conversion Tracking, Web Dev) */}
            <div className="hero-stagger flex flex-wrap items-center gap-2 mt-6">
              {["GA4", "GTM Server-Side", "Conversion Tracking", "Data Layer", "Shopify", "React"].map((item, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-100 border border-slate-700/60 dark:border-slate-700/60 light:border-slate-300 text-[11px] font-mono text-cyan-300 dark:text-cyan-300 light:text-cyan-700"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Action Buttons: Functional Smooth Scroll Actions */}
            <div className="hero-stagger flex flex-wrap items-center gap-4 mt-8 w-full sm:w-auto">
              <MagneticButton
                onClick={() => scrollToSection('projects')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-extrabold text-sm shadow-xl shadow-cyan-500/25 transition-all gap-2 cursor-pointer"
              >
                <span>View My Work</span>
                <ArrowUpRight className="w-4 h-4" />
              </MagneticButton>

              <MagneticButton
                onClick={() => scrollToSection('contact')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl glass-panel hover:border-cyan-500/50 text-white dark:text-white light:text-slate-900 font-bold text-sm transition-all gap-2 cursor-pointer"
              >
                <span>Let's Work Together</span>
              </MagneticButton>
            </div>

            {/* Social Icons Strip with Magnetic Hover */}
            <div className="hero-stagger flex items-center gap-3 mt-8 pt-4 border-t border-slate-800/80 w-full">
              <span className="text-xs font-mono text-slate-400">Connect:</span>
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/40 transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/40 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/40 transition-colors"
                aria-label="Twitter Profile"
              >
                <TwitterXIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                aria-label="Direct Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: 3D Centerpiece Viewport (5 cols) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="w-full relative rounded-3xl overflow-hidden border border-white/10 dark:border-white/10 light:border-slate-200 bg-slate-950/40 backdrop-blur-sm shadow-2xl">
              <div className="absolute top-4 left-4 z-20 pointer-events-none flex items-center gap-2 px-3 py-1 rounded-lg bg-slate-950/80 backdrop-blur-md border border-white/10 text-[10px] font-mono text-cyan-400">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                <span>3D Analytics & Tech Nucleus</span>
              </div>

              <HeroScene3D />

              <div className="absolute bottom-3 right-4 z-20 pointer-events-none text-[10px] font-mono text-slate-400 bg-slate-950/70 px-2.5 py-1 rounded-md border border-white/5">
                Orbit Nodes: GA4 • GTM • Ads • Shopify
              </div>
            </div>
          </div>
        </div>

        {/* Quantified Metrics Ticker Strip */}
        <div className="hero-stagger mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 p-4 sm:p-6 rounded-2xl glass-panel border border-white/10 dark:border-white/10 light:border-slate-200">
          {personalInfo.stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center sm:items-start text-center sm:text-left px-2">
              <span className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white light:text-slate-900 font-heading">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm font-mono text-cyan-400 mt-1 font-semibold">
                {stat.label}
              </span>
              <span className="text-[11px] text-slate-400 dark:text-slate-400 light:text-slate-600">
                {stat.description}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Down Arrow Prompt */}
      <div className="mt-8 flex justify-center">
        <button
          onClick={() => scrollToSection('about')}
          aria-label="Scroll to About section"
          className="p-2 rounded-full border border-slate-700/60 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all animate-bounce cursor-pointer"
        >
          <ArrowDown className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
