import React, { useRef, useEffect } from 'react';
import { servicesList } from '../../data/portfolioData';
import { SectionHeading } from '../ui/SectionHeading';
import { TiltCard3D } from '../ui/TiltCard3D';
import { MagneticButton } from '../ui/MagneticButton';
import {
  BarChart3, Tags, Crosshair, ShoppingCart, Target, Server,
  Layers, FileText, Activity, Bug, Globe, ShoppingBag, ArrowRight, Check
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const iconMap = {
  BarChart3: BarChart3,
  Tags: Tags,
  Crosshair: Crosshair,
  ShoppingCart: ShoppingCart,
  Target: Target,
  Server: Server,
  Layers: Layers,
  FileText: FileText,
  Activity: Activity,
  Bug: Bug,
  Globe: Globe,
  ShoppingBag: ShoppingBag
};

export const Services = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax staggered reveal on scroll
      gsap.from(".service-card-item", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 40,
        duration: 0.7,
        stagger: 0.08,
        ease: "power3.out"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleInquireService = (serviceTitle) => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" ref={containerRef} className="py-24 relative overflow-hidden">
      {/* Background ambient gradient */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="12 Core Capabilities"
          title="Specialized Services in"
          highlight="Code, Analytics & Tracking"
          subtitle="Precision engineered solutions designed to eliminate tracking signal loss, increase return on ad spend, and deploy blazing-fast web applications."
        />

        {/* 12 Services Grid with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((service, index) => {
            const Icon = iconMap[service.icon] || BarChart3;

            return (
              <div key={service.id} className="service-card-item">
                <TiltCard3D
                  maxTilt={12}
                  className="h-full"
                  cursorText="EXPLORE"
                >
                  <div className="h-full p-6 sm:p-8 rounded-3xl glass-card border border-white/10 dark:border-white/10 light:border-slate-200 hover:border-cyan-500/40 transition-all flex flex-col justify-between group">
                    <div>
                      {/* Card Header: Icon & Category */}
                      <div className="flex items-center justify-between mb-5">
                        <div
                          className="w-13 h-13 rounded-2xl flex items-center justify-center border transition-transform duration-300 group-hover:scale-110"
                          style={{
                            backgroundColor: `${service.color}15`,
                            borderColor: `${service.color}40`,
                          }}
                        >
                          <Icon className="w-6 h-6" style={{ color: service.color }} />
                        </div>

                        <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400">
                          {service.category}
                        </span>
                      </div>

                      {/* Service Title */}
                      <h3 className="text-xl font-bold text-white dark:text-white light:text-slate-900 group-hover:text-cyan-400 transition-colors mb-2">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed mb-5">
                        {service.shortDesc}
                      </p>

                      {/* Deliverables checklist */}
                      <div className="space-y-1.5 pt-2 border-t border-slate-800/80 mb-6">
                        {service.deliverables.map((d, dIdx) => (
                          <div key={dIdx} className="flex items-center gap-2 text-xs text-slate-300 dark:text-slate-300 light:text-slate-700">
                            <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                            <span className="truncate">{d}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Button */}
                    <MagneticButton
                      onClick={() => handleInquireService(service.title)}
                      className="w-full py-2.5 rounded-xl bg-slate-900/90 hover:bg-cyan-500 hover:text-slate-950 text-slate-300 text-xs font-mono font-bold border border-slate-800 hover:border-cyan-400 transition-all gap-2 cursor-pointer"
                    >
                      <span>Inquire This Service</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </MagneticButton>
                  </div>
                </TiltCard3D>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
