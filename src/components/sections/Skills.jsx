import React, { useState } from 'react';
import { coreSkills } from '../../data/portfolioData';
import { SectionHeading } from '../ui/SectionHeading';
import { SkillsGalaxy3D } from '../3d/SkillsGalaxy3D';
import { TiltCard3D } from '../ui/TiltCard3D';
import { BarChart3, Tags, Server, Target, Crosshair, ShoppingCart, Layers, Globe, ShoppingBag, Store, Code2, ArrowRight } from 'lucide-react';

const iconMap = {
  BarChart3: BarChart3,
  Tags: Tags,
  Server: Server,
  Target: Target,
  Crosshair: Crosshair,
  ShoppingCart: ShoppingCart,
  Layers: Layers,
  Globe: Globe,
  ShoppingBag: ShoppingBag,
  Store: Store,
  Code2: Code2
};

export const Skills = () => {
  const [selectedSkillId, setSelectedSkillId] = useState('ga4');
  const [categoryFilter, setCategoryFilter] = useState('all');

  const activeSkill = coreSkills.find(s => s.id === selectedSkillId) || coreSkills[0];

  const filteredSkills = categoryFilter === 'all'
    ? coreSkills
    : coreSkills.filter(s => s.category.toLowerCase() === categoryFilter.toLowerCase());

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-950/40 dark:bg-slate-950/40 light:bg-slate-50">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="3D Interactive Ecosystem"
          title="Connected Skills Constellation &"
          highlight="Technical Mastery"
          subtitle="Explore the 11 core technologies bridging front-end web engineering, server-grade measurement, and marketing attribution."
        />

        {/* 3D Skills Constellation Interactive Viewport */}
        <div className="mb-12 relative rounded-3xl overflow-hidden border border-white/10 dark:border-white/10 light:border-slate-200 bg-slate-950/60 backdrop-blur-md shadow-2xl">
          <div className="absolute top-4 left-4 z-20 pointer-events-none flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-950/80 backdrop-blur-md border border-white/10 text-xs font-mono text-cyan-400">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span>Interactive 3D Constellation • Click any node to inspect</span>
          </div>

          <SkillsGalaxy3D
            activeSkillId={selectedSkillId}
            onSelectSkill={(id) => setSelectedSkillId(id)}
          />

          <div className="absolute bottom-3 right-4 z-20 pointer-events-none text-[10px] font-mono text-slate-400 bg-slate-950/70 px-3 py-1 rounded-md border border-white/5">
            11 Skills • Dynamic Connecting Links
          </div>
        </div>

        {/* Active Skill Inspector Card */}
        <div className="mb-14">
          <TiltCard3D maxTilt={6} className="w-full">
            <div
              className="p-6 sm:p-8 rounded-3xl border transition-all duration-500 shadow-2xl relative overflow-hidden"
              style={{
                backgroundColor: 'rgba(15, 23, 42, 0.85)',
                borderColor: `${activeSkill.color}50`,
                boxShadow: `0 12px 35px -10px ${activeSkill.color}30`
              }}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex items-start gap-4">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 border"
                    style={{
                      backgroundColor: `${activeSkill.color}20`,
                      borderColor: `${activeSkill.color}60`,
                    }}
                  >
                    {React.createElement(iconMap[activeSkill.icon] || Code2, {
                      className: "w-7 h-7",
                      style: { color: activeSkill.color }
                    })}
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-semibold uppercase tracking-wider" style={{ color: activeSkill.color }}>
                        {activeSkill.category}
                      </span>
                      <span className="text-slate-500">•</span>
                      <span className="text-xs font-mono text-slate-400">
                        {activeSkill.level}% Proficiency Level
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading mt-0.5">
                      {activeSkill.name}
                    </h3>

                    <p className="text-sm text-slate-300 max-w-2xl mt-2 leading-relaxed">
                      {activeSkill.description}
                    </p>
                  </div>
                </div>

                {/* Sub-tags */}
                <div className="flex flex-wrap md:flex-col gap-2 shrink-0">
                  <span className="text-xs font-mono uppercase text-slate-400">Key Focus Areas:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeSkill.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-700 text-slate-300 text-xs font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </TiltCard3D>
        </div>

        {/* Category Filters for Quick Browsing */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {['all', 'Analytics', 'Marketing', 'Development'].map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoryFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all border cursor-pointer ${
                categoryFilter === cat
                  ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-md shadow-cyan-500/20'
                  : 'bg-slate-900/60 dark:bg-slate-900/60 light:bg-white text-slate-400 border-white/10 hover:border-cyan-500/40'
              }`}
            >
              {cat === 'all' ? 'All 11 Core Competencies' : cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredSkills.map((skill) => {
            const Icon = iconMap[skill.icon] || Code2;
            const isSelected = selectedSkillId === skill.id;

            return (
              <TiltCard3D
                key={skill.id}
                maxTilt={10}
                onClick={() => setSelectedSkillId(skill.id)}
                className="cursor-pointer"
              >
                <div
                  className={`p-5 rounded-2xl glass-card border transition-all duration-300 flex flex-col justify-between h-full ${
                    isSelected
                      ? 'border-cyan-400 bg-cyan-500/10 shadow-lg shadow-cyan-500/15'
                      : 'border-white/10 dark:border-white/10 light:border-slate-200 hover:border-cyan-500/40'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center border"
                        style={{
                          backgroundColor: `${skill.color}15`,
                          borderColor: `${skill.color}40`,
                        }}
                      >
                        <Icon className="w-5 h-5" style={{ color: skill.color }} />
                      </div>
                      <span className="text-xs font-mono font-bold" style={{ color: skill.color }}>
                        {skill.level}%
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-white dark:text-white light:text-slate-900 mb-1">
                      {skill.name}
                    </h4>

                    <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 line-clamp-2 leading-relaxed">
                      {skill.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono">
                    <span className="text-slate-500">{skill.category}</span>
                    <span className="text-cyan-400 font-semibold flex items-center gap-1">
                      Inspect &gt;
                    </span>
                  </div>
                </div>
              </TiltCard3D>
            );
          })}
        </div>
      </div>
    </section>
  );
};
