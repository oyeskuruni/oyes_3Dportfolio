import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsList } from '../../data/portfolioData';
import { SectionHeading } from '../ui/SectionHeading';
import { TiltCard3D } from '../ui/TiltCard3D';
import { ProjectDetailModal } from '../ui/ProjectDetailModal';
import { MagneticButton } from '../ui/MagneticButton';
import { ExternalLink, Sparkles, Layers, ArrowUpRight, Eye } from 'lucide-react';
import { GithubIcon } from '../ui/SocialIcons';

const categories = [
  "All",
  "Analytics",
  "Tracking",
  "Web Development",
  "Ecommerce",
  "Digital Marketing"
];

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === "All"
    ? projectsList
    : projectsList.filter(p => p.categories?.includes(activeCategory) || p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-950/40 dark:bg-slate-950/40 light:bg-slate-50">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Cinematic Portfolio"
          title="Engineered Web Applications &"
          highlight="Measurement Case Studies"
          subtitle="Click any project card to open an interactive 3D technical deep dive with deliverables, results, and architecture details."
        />

        {/* Category Filters Bar */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-mono font-semibold transition-all border cursor-pointer ${
                activeCategory === cat
                  ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-md shadow-cyan-500/20 scale-105'
                  : 'bg-slate-900/70 dark:bg-slate-900/70 light:bg-white text-slate-400 dark:text-slate-400 light:text-slate-600 border-white/10 dark:border-white/10 light:border-slate-300 hover:border-cyan-500/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid with Framer Motion Layout Transitions */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
              >
                <TiltCard3D
                  maxTilt={12}
                  className="h-full cursor-pointer"
                  cursorText="VIEW"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="h-full rounded-3xl overflow-hidden glass-card border border-white/10 dark:border-white/10 light:border-slate-200 hover:border-cyan-500/50 transition-all flex flex-col justify-between group">
                    <div>
                      {/* Image Header with Hover Zoom */}
                      <div className="relative h-52 w-full overflow-hidden bg-slate-950">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out opacity-85 group-hover:opacity-100"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                        {/* Category Badge */}
                        <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2">
                          <span className="px-3 py-1 rounded-full bg-slate-950/85 backdrop-blur-md border border-cyan-500/30 text-cyan-400 font-mono text-xs font-semibold">
                            {project.category}
                          </span>
                        </div>

                        {/* Results Pill */}
                        {project.results && (
                          <div className="absolute bottom-3 left-4 px-3 py-1 rounded-lg bg-slate-950/85 backdrop-blur-md border border-emerald-500/30 text-emerald-400 font-mono text-xs font-semibold flex items-center gap-1.5">
                            <Sparkles className="w-3 h-3" />
                            <span>{project.results}</span>
                          </div>
                        )}
                      </div>

                      {/* Card Content */}
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-white dark:text-white light:text-slate-900 group-hover:text-cyan-400 transition-colors line-clamp-1">
                          {project.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 mt-2.5 line-clamp-2 leading-relaxed">
                          {project.summary}
                        </p>

                        {/* Tech stack badges */}
                        <div className="flex flex-wrap gap-1.5 mt-4">
                          {project.technologies.slice(0, 4).map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-0.5 rounded-md bg-slate-900 dark:bg-slate-900 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-300 text-[10px] font-mono text-slate-400"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 4 && (
                            <span className="px-1.5 py-0.5 text-[10px] font-mono text-cyan-400">
                              +{project.technologies.length - 4}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Action Bar */}
                    <div className="px-6 pb-6 pt-2 border-t border-slate-800/80 flex items-center justify-between">
                      <span className="text-xs font-mono text-cyan-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        <Eye className="w-3.5 h-3.5" />
                        <span>Inspect Deep Dive</span>
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                    </div>
                  </div>
                </TiltCard3D>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Interactive 3D Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
