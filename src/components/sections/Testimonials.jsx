import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonialsList } from '../../data/portfolioData';
import { SectionHeading } from '../ui/SectionHeading';
import { ChevronLeft, ChevronRight, Star, Quote, Sparkles } from 'lucide-react';

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto rotation every 6 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialsList.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsList.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsList.length) % testimonialsList.length);
  };

  const currentItem = testimonialsList[currentIndex];

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-slate-950/40 dark:bg-slate-950/40 light:bg-slate-50">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/3 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Verified Client Impact"
          title="Client Collaborations &"
          highlight="Performance Outcomes"
          subtitle="Measurable feedback across international e-commerce stores, B2B SaaS platforms, and enterprise growth teams."
        />

        {/* 3D Stacked Carousel Container */}
        <div
          className="relative max-w-3xl mx-auto min-h-[380px] flex items-center justify-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentItem.id}
              initial={{ opacity: 0, scale: 0.9, y: 30, rotateY: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -30, rotateY: -8 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              style={{ perspective: 1000 }}
              className="w-full p-8 sm:p-10 rounded-3xl glass-card border border-cyan-500/30 shadow-2xl relative overflow-hidden text-left"
            >
              {/* Top Watermark & Rating */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(currentItem.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-[10px] font-mono text-cyan-400">
                  {currentItem.tag}
                </span>
              </div>

              {/* Quote text */}
              <div className="relative mb-8">
                <Quote className="absolute -top-3 -left-4 w-10 h-10 text-cyan-500/15 pointer-events-none" />
                <p className="text-base sm:text-lg text-slate-200 dark:text-slate-200 light:text-slate-800 leading-relaxed font-normal italic relative z-10">
                  "{currentItem.quote}"
                </p>
              </div>

              {/* Client Profile & Quantified Metric */}
              <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <img
                    src={currentItem.avatar}
                    alt={currentItem.clientName}
                    className="w-12 h-12 rounded-full object-cover border-2 border-cyan-400"
                  />
                  <div>
                    <h4 className="text-base font-bold text-white dark:text-white light:text-slate-900">
                      {currentItem.clientName}
                    </h4>
                    <p className="text-xs font-mono text-slate-400">
                      {currentItem.role} • <span className="text-cyan-400">{currentItem.company}</span>
                    </p>
                  </div>
                </div>

                <div className="px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-semibold flex items-center gap-1.5 w-fit">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{currentItem.metric}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Controls */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="p-3 rounded-full bg-slate-900/80 border border-slate-700/80 text-slate-300 hover:text-cyan-400 hover:border-cyan-400 transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Pagination Indicators */}
          <div className="flex items-center gap-2">
            {testimonialsList.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === idx ? 'w-8 bg-cyan-400' : 'w-2 bg-slate-700'
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            aria-label="Next testimonial"
            className="p-3 rounded-full bg-slate-900/80 border border-slate-700/80 text-slate-300 hover:text-cyan-400 hover:border-cyan-400 transition-colors cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
