import React, { useRef, useEffect } from 'react';
import { processWorkflow } from '../../data/portfolioData';
import { SectionHeading } from '../ui/SectionHeading';
import { TiltCard3D } from '../ui/TiltCard3D';
import { Search, Compass, Code, CheckCircle2, TrendingUp, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const iconMap = {
  Search: Search,
  Compass: Compass,
  Code: Code,
  CheckCircle2: CheckCircle2,
  TrendingUp: TrendingUp
};

export const Process = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".process-step-item", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="process" ref={containerRef} className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Engineering Methodology"
          title="The 5-Phase Workflow to"
          highlight="Zero-Loss Architecture"
          subtitle="From initial forensic tag discovery to serverless deployment, deep reconciliation, and real-time BI reporting."
        />

        {/* 5-Step Process Connected Grid */}
        <div className="relative">
          {/* Horizontal connecting track line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-10 right-10 h-0.5 bg-gradient-to-r from-cyan-500/30 via-indigo-500/40 to-emerald-500/30 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {processWorkflow.map((step) => {
              const Icon = iconMap[step.icon] || Search;

              return (
                <div key={step.step} className="process-step-item">
                  <TiltCard3D maxTilt={14} className="h-full">
                    <div className="h-full p-6 rounded-3xl glass-card border border-white/10 dark:border-white/10 light:border-slate-200 hover:border-cyan-500/40 transition-all flex flex-col justify-between group">
                      <div>
                        {/* Step Number & Icon Header */}
                        <div className="flex items-center justify-between mb-4">
                          <span className="font-mono text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
                            {step.step}
                          </span>
                          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Icon className="w-5 h-5" />
                          </div>
                        </div>

                        {/* Title & Subtitle */}
                        <h3 className="text-xl font-bold text-white dark:text-white light:text-slate-900 group-hover:text-cyan-400 transition-colors">
                          {step.title}
                        </h3>
                        <p className="text-[11px] font-mono text-cyan-400 mt-0.5 mb-3 font-semibold uppercase tracking-wider">
                          {step.subtitle}
                        </p>

                        {/* Description */}
                        <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed mb-4">
                          {step.description}
                        </p>
                      </div>

                      {/* Deliverable Badge */}
                      <div className="pt-3 border-t border-slate-800/80">
                        <span className="text-[10px] font-mono uppercase text-slate-500 block mb-1">
                          Phase Deliverable:
                        </span>
                        <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                          <span className="truncate">{step.deliverable}</span>
                        </div>
                      </div>
                    </div>
                  </TiltCard3D>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
