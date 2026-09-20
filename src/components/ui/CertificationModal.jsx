import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Award, CheckCircle2, ExternalLink, X, ShieldCheck, Calendar, Hash } from 'lucide-react';

export const CertificationModal = ({ cert, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen && cert) {
      // Fire confetti burst
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#06B6D4', '#6366F1', '#10B981', '#F59E0B']
      });
    }
  }, [isOpen, cert]);

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

  if (!isOpen || !cert) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-lg rounded-2xl bg-slate-900 border border-slate-700/80 shadow-2xl p-6 sm:p-8 text-left z-10 animate-in fade-in zoom-in-95 duration-200">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Verification Status Header */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold w-fit mb-4">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
          Officially Verified Credential
        </div>

        {/* Certificate Title & Issuer */}
        <div className="flex items-start gap-4 mb-5">
          <div
            className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 border"
            style={{
              backgroundColor: `${cert.color}15`,
              borderColor: `${cert.color}40`,
            }}
          >
            <Award className="w-7 h-7" style={{ color: cert.color }} />
          </div>

          <div>
            <h3 className="text-xl font-bold text-white leading-snug">
              {cert.name}
            </h3>
            <p className="text-sm text-cyan-400 font-mono mt-0.5">
              Issued by {cert.issuer}
            </p>
          </div>
        </div>

        {/* Meta details grid */}
        <div className="grid grid-cols-2 gap-3 py-4 border-y border-slate-800/80 my-4 text-xs font-mono">
          <div className="flex items-center gap-2 text-slate-300">
            <Calendar className="w-4 h-4 text-slate-400" />
            <span>Validity: {cert.issueDate}</span>
          </div>
          <div className="flex items-center gap-2 text-slate-300">
            <Hash className="w-4 h-4 text-slate-400" />
            <span className="truncate">ID: {cert.credentialId}</span>
          </div>
        </div>

        {/* Highlight description */}
        <p className="text-sm text-slate-300 leading-relaxed mb-5">
          {cert.highlight}
        </p>

        {/* Verified Competencies */}
        <div className="mb-6">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
            Verified Competencies & Protocols:
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {cert.skillsCovered.map((skill, index) => (
              <span
                key={index}
                className="px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700 text-slate-200 text-xs font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-3 pt-2">
          <a
            href={cert.verifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/20 transition-all hover:scale-[1.02]"
          >
            <span>Verify on Credential Registry</span>
            <ExternalLink className="w-4 h-4" />
          </a>

          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm font-medium transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
