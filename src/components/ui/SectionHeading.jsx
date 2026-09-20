import React from 'react';

export const SectionHeading = ({
  badge,
  title,
  highlight,
  subtitle,
  center = true,
  className = ""
}) => {
  return (
    <div className={`max-w-3xl mb-14 ${center ? 'mx-auto text-center' : 'text-left'} ${className}`}>
      {badge && (
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-semibold tracking-wider uppercase mb-4 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          {badge}
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
        {title}{" "}
        {highlight && (
          <span className="text-gradient-cyan">
            {highlight}
          </span>
        )}
      </h2>

      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
};
