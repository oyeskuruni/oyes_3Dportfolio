import React from 'react';
import { devProjects } from '../../data/portfolioData';
import { SectionHeading } from '../ui/SectionHeading';
import { ExternalLink, Sparkles, Layers, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from '../ui/SocialIcons';
import { MagneticButton } from '../ui/MagneticButton';

export const DevProjects = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-950/40 dark:bg-slate-950/40 light:bg-slate-50">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Engineering Showcase"
          title="Full-Stack Web Applications &"
          highlight="Headless Architectures"
          subtitle="Engineered with clean React components, modern build pipelines, and sub-second Core Web Vitals performance."
        />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {devProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-3xl overflow-hidden border border-white/10 dark:border-white/10 light:border-slate-200 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image / Mockup preview banner */}
                <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out opacity-80 group-hover:opacity-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-cyan-500/30 text-cyan-400 font-mono text-xs font-semibold">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[10px] font-mono font-bold uppercase tracking-wider flex items-center gap-1">
                        <Sparkles className="w-3 h-3" /> Featured
                      </span>
                    )}
                  </div>

                  {/* Impact pill bottom left */}
                  <div className="absolute bottom-3 left-4 px-3 py-1 rounded-lg bg-slate-950/80 backdrop-blur-md border border-white/10 text-xs font-mono font-medium text-emerald-400">
                    {project.impact}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-white dark:text-white light:text-slate-900 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 mt-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Metrics preview row */}
                  <div className="grid grid-cols-3 gap-2 py-4 my-4 border-y border-slate-800 dark:border-slate-800 light:border-slate-200">
                    {project.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="text-center">
                        <div className="text-xs font-mono font-bold text-cyan-400">
                          {m.value}
                        </div>
                        <div className="text-[10px] text-slate-500 uppercase tracking-wider">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-100 text-slate-400 dark:text-slate-300 light:text-slate-700 text-[11px] font-mono border border-slate-800 dark:border-slate-800 light:border-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action links */}
              <div className="px-6 sm:px-8 pb-6 pt-2 flex items-center gap-3">
                <MagneticButton
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs font-mono transition-all gap-1.5 shadow-md shadow-cyan-500/20"
                >
                  <span>Live Experience</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </MagneticButton>

                <MagneticButton
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 text-xs font-mono transition-colors gap-1.5"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>Code</span>
                </MagneticButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
