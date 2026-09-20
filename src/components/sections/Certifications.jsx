import React, { useState } from 'react';
import { ga4Certification } from '../../data/portfolioData';
import { SectionHeading } from '../ui/SectionHeading';
import { Certificate3D } from '../3d/Certificate3D';
import { CertificationModal } from '../ui/CertificationModal';
import { Award, ShieldCheck, CheckCircle2, Sparkles, ExternalLink, Calendar, Hash } from 'lucide-react';
import { MagneticButton } from '../ui/MagneticButton';

export const Certifications = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Adapter for CertificationModal
  const modalCertData = {
    name: ga4Certification.name,
    issuer: ga4Certification.issuer,
    issueDate: ga4Certification.issueDate,
    credentialId: ga4Certification.credentialId,
    verifyUrl: ga4Certification.verifyUrl,
    highlight: ga4Certification.highlight,
    skillsCovered: ga4Certification.skillsCovered,
    color: "#F59E0B"
  };

  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Verified Qualification"
          title="Official Google Analytics 4"
          highlight="Certification"
          subtitle="Accredited mastery in Google Analytics 4, measurement protocol, BigQuery export, custom dataLayer architecture, and conversion modeling."
        />

        {/* 3D Certificate Floating Showcase */}
        <div className="max-w-4xl mx-auto glass-card rounded-3xl p-6 sm:p-10 border-2 border-amber-500/30 relative overflow-hidden shadow-2xl bg-gradient-to-br from-amber-950/20 via-slate-900 to-slate-950">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* 3D Interactive Floating Certificate (7 cols) */}
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl overflow-hidden bg-slate-950/60 border border-amber-500/30">
                <Certificate3D onInspect={() => setIsModalOpen(true)} />
                <div className="absolute bottom-2 left-4 text-[10px] font-mono text-amber-300 pointer-events-none">
                  Hover to tilt • Click to inspect credential
                </div>
              </div>
            </div>

            {/* Credential Details & Verification CTA (5 cols) */}
            <div className="lg:col-span-5 space-y-4 text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 font-mono text-xs font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Officially Verified Credential</span>
              </div>

              <h3 className="text-2xl font-bold text-white font-heading leading-snug">
                {ga4Certification.name}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {ga4Certification.highlight}
              </p>

              <div className="space-y-1.5 pt-2 border-t border-slate-800 text-xs font-mono text-slate-400">
                <div className="flex items-center justify-between">
                  <span>Accreditation Issuer:</span>
                  <strong className="text-white">{ga4Certification.issuer}</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span>Validity Window:</span>
                  <strong className="text-white">{ga4Certification.issueDate}</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span>Credential ID:</span>
                  <strong className="text-amber-400">{ga4Certification.credentialId}</strong>
                </div>
              </div>

              <div className="pt-3">
                <MagneticButton
                  onClick={() => setIsModalOpen(true)}
                  className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs font-mono shadow-lg shadow-amber-500/25 transition-all gap-2 cursor-pointer"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Inspect Official Certificate</span>
                </MagneticButton>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Modal */}
      <CertificationModal
        cert={modalCertData}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};
