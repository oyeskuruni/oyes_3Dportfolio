import React, { useState } from 'react';
import { analyticsProjects } from '../../data/portfolioData';
import { SectionHeading } from '../ui/SectionHeading';
import { Database, ShieldCheck, ArrowUpRight, Cpu, CheckCircle2, ChevronRight, Activity } from 'lucide-react';
import { MagneticButton } from '../ui/MagneticButton';

export const AnalyticsProjects = () => {
  const [selectedProjectId, setSelectedProjectId] = useState(analyticsProjects[0].id);
  const currentProject = analyticsProjects.find(p => p.id === selectedProjectId) || analyticsProjects[0];

  return (
    <section id="analytics" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Web Analytics Case Studies"
          title="Server-Side Infrastructures &"
          highlight="Data Attribution Pipelines"
          subtitle="Real-world case studies in zero-loss tracking, Meta CAPI signal boosting, BigQuery data warehousing, and GDPR compliance."
        />

        {/* Project Selector Tab Bar */}
        <div className="flex flex-wrap gap-2 sm:gap-3 justify-center mb-12">
          {analyticsProjects.map((project) => {
            const isSelected = project.id === selectedProjectId;
            return (
              <button
                key={project.id}
                onClick={() => setSelectedProjectId(project.id)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-mono font-semibold transition-all duration-200 flex items-center gap-2 border ${
                  isSelected
                    ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-lg shadow-cyan-500/20 scale-105'
                    : 'bg-slate-900/60 dark:bg-slate-900/60 light:bg-white text-slate-400 dark:text-slate-300 light:text-slate-600 border-white/10 dark:border-white/10 light:border-slate-300 hover:border-cyan-500/40'
                }`}
              >
                <Activity className="w-3.5 h-3.5" />
                <span className="truncate max-w-[200px] sm:max-w-none">{project.title.split(' ')[0]} {project.title.split(' ')[1]}</span>
              </button>
            );
          })}
        </div>

        {/* Active Project Deep Dive Card */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 border border-cyan-500/30 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Project Overview & Challenge (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Category & Client Badge */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs font-semibold">
                  {currentProject.category}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  Client: {currentProject.client}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white dark:text-white light:text-slate-900 font-heading leading-snug">
                {currentProject.title}
              </h3>

              {/* Executive Summary */}
              <p className="text-base text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
                {currentProject.summary}
              </p>

              {/* Challenge & Solution Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800">
                  <span className="text-xs font-mono uppercase tracking-wider text-rose-400 font-semibold">
                    The Challenge:
                  </span>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    {currentProject.challenge}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800">
                  <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold">
                    The Engineering Solution:
                  </span>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    {currentProject.solution}
                  </p>
                </div>
              </div>

              {/* Architecture Data Flow List */}
              <div className="pt-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-3 flex items-center gap-2">
                  <Cpu className="w-4 h-4" />
                  <span>Architecture & Data Flow:</span>
                </h4>
                <div className="space-y-2">
                  {currentProject.architecture.map((step, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs font-mono text-slate-300"
                    >
                      <ChevronRight className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {currentProject.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-3 py-1 rounded-md bg-slate-900 border border-slate-700/80 text-slate-300 text-xs font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Column: Key Outcomes & Metrics (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* Impact Banner Card */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-950/40 via-slate-900 to-indigo-950/40 border border-cyan-500/40 shadow-xl">
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                  Verified Business Impact
                </span>
                <div className="text-2xl sm:text-3xl font-extrabold text-white mt-1 mb-2 font-heading">
                  {currentProject.impact}
                </div>
                <p className="text-xs text-slate-400">
                  Continuous first-party signals preventing campaign misattribution and ad fatigue.
                </p>

                {/* 4 Metric scorecards */}
                <div className="grid grid-cols-2 gap-3 mt-6">
                  {currentProject.metrics.map((m, mIdx) => (
                    <div
                      key={mIdx}
                      className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-center"
                    >
                      <div className="text-xl font-mono font-bold text-cyan-400">
                        {m.value}
                      </div>
                      <div className="text-[11px] text-slate-400 font-medium mt-0.5">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Inquiry CTA card */}
              <div className="p-6 rounded-2xl glass-panel border border-white/10 flex flex-col justify-between gap-4">
                <div>
                  <h4 className="text-base font-bold text-white mb-1">
                    Need Similar Tracking for Your Business?
                  </h4>
                  <p className="text-xs text-slate-400">
                    I audit existing GTM containers and build custom Server-Side pipelines in under 10 days.
                  </p>
                </div>
                <MagneticButton
                  href="#contact"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-bold text-xs font-mono transition-all gap-2"
                >
                  <span>Book Architecture Consultation</span>
                  <ArrowUpRight className="w-4 h-4" />
                </MagneticButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
