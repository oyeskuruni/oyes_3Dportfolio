import React, { useRef, useEffect } from 'react';
import { aboutData, personalInfo } from '../../data/portfolioData';
import { SectionHeading } from '../ui/SectionHeading';
import { TiltCard3D } from '../ui/TiltCard3D';
import { MagneticButton } from '../ui/MagneticButton';
import { CheckCircle2, Award, Globe, ShieldCheck, Zap, ArrowRight, Code2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-fade", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="About Oyes Kuruni"
          title="The Rare Intersection of"
          highlight="Code, Analytics & AdTech"
          subtitle="Delivering 1,000+ global setups with 5+ years of verified expertise across modern web development and server-grade measurement."
        />

        {/* Main Profile & Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          {/* Profile Visual & Floating 3D Cards (5 cols) */}
          <div className="lg:col-span-5 relative flex flex-col items-center">
            {/* Center Profile Visual */}
            <TiltCard3D maxTilt={14} className="w-full max-w-sm">
              <div className="relative rounded-3xl p-6 bg-slate-900/80 dark:bg-slate-900/80 light:bg-white border border-cyan-500/30 shadow-2xl overflow-hidden text-center">
                {/* Avatar with cyber glowing borders */}
                <div className="relative w-36 h-36 mx-auto mb-5">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400 via-indigo-500 to-emerald-400 p-[2px] animate-spin" style={{ animationDuration: '8s' }} />
                  <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center overflow-hidden">
                    {/* Modern stylized geometric avatar representing Oyes Kuruni */}
                    <div className="w-full h-full bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 flex flex-col items-center justify-center">
                      <span className="font-mono font-black text-4xl text-cyan-400">OK</span>
                      <span className="text-[10px] font-mono text-slate-400 mt-1">ENGINEER</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white dark:text-white light:text-slate-900 font-heading">
                  Oyes Kuruni
                </h3>
                <p className="text-xs font-mono text-cyan-400 mt-0.5">
                  Web Developer • Web Analyst • Marketer
                </p>

                <div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-around text-center">
                  <div>
                    <div className="text-lg font-bold font-mono text-white">5+</div>
                    <div className="text-[10px] text-slate-400 uppercase">Years Exp</div>
                  </div>
                  <div className="w-[1px] h-8 bg-slate-800" />
                  <div>
                    <div className="text-lg font-bold font-mono text-cyan-400">1,000+</div>
                    <div className="text-[10px] text-slate-400 uppercase">Projects</div>
                  </div>
                  <div className="w-[1px] h-8 bg-slate-800" />
                  <div>
                    <div className="text-lg font-bold font-mono text-emerald-400">Global</div>
                    <div className="text-[10px] text-slate-400 uppercase">Clients</div>
                  </div>
                </div>
              </div>
            </TiltCard3D>
          </div>

          {/* Narrative & Philosophy (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed text-base sm:text-lg">
            <h3 className="about-fade text-2xl sm:text-3xl font-extrabold text-white dark:text-white light:text-slate-900 font-heading">
              {aboutData.headline}
            </h3>

            {aboutData.paragraphs.map((p, idx) => (
              <p key={idx} className="about-fade text-sm sm:text-base">
                {p}
              </p>
            ))}

            <div className="about-fade pt-2 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-mono text-cyan-400">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Zero Signal Loss Across Marketing Channels</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-mono text-cyan-400">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Modern React / Next.js & Sub-Second LCP</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Floating 3D Stat Highlight Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {aboutData.highlights.map((item, idx) => (
            <TiltCard3D key={idx} className="h-full">
              <div className="h-full p-6 rounded-2xl glass-card border border-white/10 dark:border-white/10 light:border-slate-200 hover:border-cyan-500/40 transition-all flex flex-col justify-between">
                <div>
                  <span className="text-3xl sm:text-4xl font-extrabold text-gradient-cyan font-mono block mb-2">
                    {item.number}
                  </span>
                  <h4 className="text-base font-bold text-white dark:text-white light:text-slate-900 mb-1">
                    {item.label}
                  </h4>
                  <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </div>
            </TiltCard3D>
          ))}
        </div>
      </div>
    </section>
  );
};
