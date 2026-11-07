import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { TechIcon } from './TechIcons';
import { Layers, Sparkles, Bot, Code2, Cpu, Zap, ArrowUpRight } from 'lucide-react';

const aiIconMap = {
  Bot: Bot,
  Code2: Code2,
  Cpu: Cpu,
  Zap: Zap,
};

export const Skills = () => {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="relative py-20 lg:py-28 overflow-hidden bg-[#0A0E17]/60">
      {/* Background ambient glow */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-orange-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        
        {/* Top Grid: Progress Bars & Tech Icons */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Progress Bars */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Section Tag */}
            <div className="inline-flex items-center gap-2">
              <span className="text-amber-400 font-semibold text-xs tracking-widest uppercase">
                {skills.tag}
              </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {skills.title}
            </h2>

            {/* Progress Bars List */}
            <div className="space-y-5 pt-3">
              {skills.bars.map((bar, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-semibold text-slate-200">{bar.name}</span>
                    <span className="font-bold text-amber-400">{bar.percentage}%</span>
                  </div>
                  
                  {/* Progress Bar Track */}
                  <div className="h-2 w-full rounded-full bg-[#121A29] border border-white/5 overflow-hidden relative">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-orange-500 relative transition-all duration-1000 ease-out shadow-[0_0_12px_rgba(245,158,11,0.5)]"
                      style={{ width: `${bar.percentage}%` }}
                    >
                      {/* Glow tip */}
                      <span className="absolute right-0 top-0 bottom-0 w-2 bg-white rounded-full opacity-80" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: 15 Tech Stack Cards Grid (5 x 3) */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-3.5 sm:gap-4">
              {skills.techStack.map((tech, idx) => (
                <div
                  key={idx}
                  className="group relative rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-1.5 bg-[#121A29]/80 border border-white/[0.07] hover:border-amber-500/40 shadow-lg shadow-black/30 hover:shadow-[0_0_20px_-5px_rgba(245,158,11,0.25)]"
                >
                  {/* Subtle hover gradient background */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-amber-500/[0.06] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  {/* Icon */}
                  <div className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center mb-2.5 transition-transform duration-300 group-hover:scale-110">
                    <TechIcon name={tech.icon} className="w-8 h-8 sm:w-9 sm:h-9" color={tech.color} />
                  </div>

                  {/* Tech Name */}
                  <span className="text-xs font-semibold text-slate-300 group-hover:text-white transition-colors truncate w-full">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Middle Section: Dedicated AI Tools & Technologies Category */}
        {skills.aiTools && (
          <div className="pt-10 border-t border-white/5 space-y-8">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                AI Tools & Technologies
              </h3>
            </div>

            {/* 4 AI Categories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {skills.aiTools.map((aiGroup, idx) => {
                const IconComponent = aiIconMap[aiGroup.icon] || Sparkles;
                return (
                  <div
                    key={idx}
                    className="group rounded-2xl p-6 bg-[#121A29]/90 border border-white/[0.08] hover:border-amber-500/40 shadow-xl shadow-black/40 hover:shadow-amber-500/10 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between relative overflow-hidden"
                  >
                    {/* Top ambient highlight line */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div>
                      {/* Category Header */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-400 group-hover:border-amber-400 group-hover:scale-105 transition-all">
                          <IconComponent className="w-5 h-5 text-amber-400" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                            {aiGroup.category}
                          </h4>
                        </div>
                      </div>

                      <p className="text-[11px] text-slate-400 leading-relaxed mb-4">
                        {aiGroup.description}
                      </p>

                      {/* Items Pill Badges */}
                      <div className="space-y-2">
                        {aiGroup.items.map((item, iIdx) => (
                          <div
                            key={iIdx}
                            className="flex items-center justify-between px-3 py-2 rounded-xl bg-[#1A253A]/80 border border-white/5 hover:border-amber-500/30 transition-colors group/item"
                          >
                            <span className="text-xs font-semibold text-slate-200 group-hover/item:text-white">
                              {item}
                            </span>
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400/80 group-hover/item:bg-amber-400 shadow-[0_0_6px_#F59E0B]" />
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Bottom Section: Comprehensive Categorized Skill Badges */}
        {skills.skillCategories && (
          <div className="pt-10 border-t border-white/5 space-y-6">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-amber-400" />
              <h3 className="text-base font-bold text-white uppercase tracking-wider text-xs">
                All Categorized Technical Competencies
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {Object.entries(skills.skillCategories).map(([category, items]) => (
                <div
                  key={category}
                  className="rounded-2xl p-5 bg-[#121A29]/70 border border-white/[0.06] hover:border-amber-500/30 transition-all space-y-3"
                >
                  <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400/90">
                    {category}
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {items.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-[#1A253A] text-slate-300 border border-white/5"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
