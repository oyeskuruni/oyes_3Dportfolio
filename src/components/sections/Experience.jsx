import React, { useRef, useEffect } from 'react';
import { experienceTimeline } from '../../data/portfolioData';
import { SectionHeading } from '../ui/SectionHeading';
import { TiltCard3D } from '../ui/TiltCard3D';
import { Calendar, MapPin, CheckCircle2, Briefcase, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Experience = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".timeline-card-wrapper", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={containerRef} className="py-24 relative overflow-hidden bg-slate-950/40 dark:bg-slate-950/40 light:bg-slate-50">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Track Record"
          title="5+ Years of Proven"
          highlight="Career Milestones"
          subtitle="A progression of driving technical development, server-side data infrastructure, and measurable advertising revenue."
        />

        {/* 3D Interactive Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Glowing central connecting track */}
          <div className="hidden sm:block absolute left-1/2 top-6 bottom-6 w-0.5 bg-gradient-to-b from-cyan-500 via-indigo-500 to-emerald-500 -translate-x-1/2 z-0 opacity-60" />

          <div className="space-y-12 sm:space-y-16">
            {experienceTimeline.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.id}
                  className={`timeline-card-wrapper relative flex flex-col sm:flex-row items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Glowing 3D Node Beacon in Center */}
                  <div className="hidden sm:flex absolute left-1/2 top-8 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-950 border-2 border-cyan-400 items-center justify-center z-20 shadow-lg shadow-cyan-500/40">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                  </div>

                  {/* Spacer Column */}
                  <div className="hidden sm:block sm:w-1/2" />

                  {/* Card Column */}
                  <div className={`w-full sm:w-1/2 ${isEven ? 'sm:pr-12' : 'sm:pl-12'}`}>
                    <TiltCard3D maxTilt={10}>
                      <div className="p-6 sm:p-8 rounded-3xl glass-card border border-white/10 dark:border-white/10 light:border-slate-200 hover:border-cyan-500/40 transition-all duration-300 group">
                        {/* Period & Role Header */}
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                          <span className="px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 font-mono text-xs font-semibold flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5" />
                            <span>{item.duration}</span>
                          </span>

                          <span className="text-[11px] font-mono text-slate-400">
                            {item.period}
                          </span>
                        </div>

                        <h3 className="text-xl font-bold text-white dark:text-white light:text-slate-900 group-hover:text-cyan-400 transition-colors">
                          {item.role}
                        </h3>
                        <p className="text-sm font-mono text-indigo-400 mb-4">
                          {item.company}
                        </p>

                        <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed mb-5">
                          {item.description}
                        </p>

                        {/* Measurable Achievements */}
                        <div className="space-y-2 mb-6">
                          {item.achievements.map((ach, aIdx) => (
                            <div key={aIdx} className="flex items-start gap-2 text-xs text-slate-300 dark:text-slate-300 light:text-slate-700">
                              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                              <span>{ach}</span>
                            </div>
                          ))}
                        </div>

                        {/* Tech tags */}
                        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/80">
                          {item.tech.map((t, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-[10px] font-mono text-slate-400"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </TiltCard3D>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
