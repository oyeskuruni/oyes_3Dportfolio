import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2, Sparkles, Layers, Cpu } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export const ProjectDetailModal = ({ project, isOpen, onClose }) => {
  // ESC listener & scroll lock
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/85 backdrop-blur-xl"
          />

          {/* 3D Modal Container */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.88,
              rotateX: 12,
              y: 40
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotateX: 0,
              y: 0,
              transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
              rotateX: -10,
              y: 20,
              transition: { duration: 0.25 }
            }}
            style={{ perspective: 1200, transformStyle: 'preserve-3d' }}
            className="relative w-full max-w-3xl rounded-3xl bg-slate-900 border border-slate-700/80 shadow-2xl overflow-hidden z-10 my-auto text-left"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-slate-950/70 border border-white/10 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image Header */}
            <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-950">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

              {/* Category & Results Badges */}
              <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-slate-950/85 backdrop-blur-md border border-cyan-500/30 text-cyan-400 font-mono text-xs font-semibold">
                  {project.category}
                </span>
                {project.results && (
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-500/30 text-emerald-300 font-mono text-xs font-semibold flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    {project.results}
                  </span>
                )}
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              {/* Title & Summary */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-300 mt-2 leading-relaxed">
                  {project.summary}
                </p>
              </div>

              {/* In-Depth Description */}
              <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.description}
              </div>

              {/* Services Provided & Results */}
              {project.servicesProvided && (
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-3 flex items-center gap-2">
                    <Layers className="w-4 h-4" />
                    <span>Key Engineering Deliverables:</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {project.servicesProvided.map((service, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-mono text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technologies Tag Array */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2.5 flex items-center gap-2">
                  <Cpu className="w-4 h-4" />
                  <span>Tech Stack & APIs:</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center gap-3">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-bold text-xs sm:text-sm font-mono shadow-lg shadow-cyan-500/20 transition-all hover:scale-[1.02]"
                  >
                    <span>View Live Experience</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-mono border border-slate-700 transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>View Repository</span>
                  </a>
                )}

                <button
                  onClick={onClose}
                  className="px-4 py-3 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-400 text-xs sm:text-sm font-mono transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
