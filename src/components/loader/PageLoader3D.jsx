import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const PageLoader3D = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Increment progress cleanly
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsFinished(true);
            if (onComplete) onComplete();
          }, 350);
          return 100;
        }
        // Accelerate near the end
        const step = Math.floor(Math.random() * 8) + 4;
        return Math.min(prev + step, 100);
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            y: '-100%',
            opacity: 0.95,
            transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] }
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950 text-white select-none overflow-hidden"
        >
          {/* Subtle Cyberpunk grid pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
          
          {/* Central 3D Spinning Holographic Gyro */}
          <div className="relative w-44 h-44 flex items-center justify-center mb-8">
            {/* Outer Ring */}
            <div
              className="absolute inset-0 rounded-full border-2 border-cyan-500/30 border-t-cyan-400 animate-spin"
              style={{ animationDuration: '3s' }}
            />
            {/* Mid Gyro Ring */}
            <div
              className="absolute inset-3 rounded-full border border-indigo-500/40 border-b-indigo-400 animate-spin"
              style={{ animationDirection: 'reverse', animationDuration: '2.2s' }}
            />
            {/* Inner Ring */}
            <div
              className="absolute inset-7 rounded-full border border-emerald-500/40 border-r-emerald-400 animate-spin"
              style={{ animationDuration: '1.5s' }}
            />
            {/* Center Glowing Core */}
            <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-cyan-400/50 flex items-center justify-center shadow-lg shadow-cyan-500/30 transform rotate-45 animate-pulse">
              <span className="font-mono font-black text-cyan-400 text-sm -rotate-45">
                OK
              </span>
            </div>
          </div>

          {/* Brand Name & Identity */}
          <div className="text-center space-y-1 z-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-heading text-white">
              OYES KURUNI
            </h2>
            <p className="text-xs font-mono text-cyan-400 tracking-widest uppercase">
              Web Developer • Web Analyst • Digital Marketer
            </p>
          </div>

          {/* Progress Bar & Telemetry */}
          <div className="w-64 sm:w-80 mt-8 space-y-2 z-10">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-cyan-400">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                Loading 3D Ecosystem
              </span>
              <span className="font-bold text-white">{progress}%</span>
            </div>

            {/* Glowing progress rail */}
            <div className="w-full h-1.5 rounded-full bg-slate-900 border border-slate-800 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-emerald-400 rounded-full shadow-sm shadow-cyan-400"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut', duration: 0.1 }}
              />
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 pt-1">
              <span>GA4 • GTM • CAPI • 3D ENGINE</span>
              <span>EST 2024 - 2026</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
