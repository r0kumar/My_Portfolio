import React, { useState } from 'react';
import { Code2, BarChart3, Sparkles, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const iconMap = {
  Code2: Code2,
  BarChart3: BarChart3,
  Sparkles: Sparkles,
};

export const WhyHireMe = () => {
  const { whyHireMe } = portfolioData;
  const [activeIndex, setActiveIndex] = useState(1);

  if (!whyHireMe || whyHireMe.length === 0) return null;

  return (
    <section id="why-hire-me" className="relative py-20 lg:py-28 overflow-hidden bg-[#0A0E17]/60">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 right-1/3 w-96 h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-14">
          <div className="inline-flex items-center justify-center">
            <span className="text-amber-400 font-semibold text-xs tracking-widest uppercase">
              CORE VALUE
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Why Hire Me
          </h2>
        </div>

        {/* 3 Why Hire Me Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
          {whyHireMe.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || Code2;
            const isActive = activeIndex === idx;

            return (
              <div
                key={item.id}
                onClick={() => setActiveIndex(idx)}
                className={`rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 cursor-pointer border relative overflow-hidden group ${
                  isActive
                    ? 'bg-[#141E32] border-amber-500/40 shadow-xl shadow-amber-500/5'
                    : 'bg-[#121A29]/80 border-white/[0.07] hover:border-amber-500/30'
                }`}
              >
                {/* Top ambient highlight line */}
                <div
                  className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400/60 to-transparent transition-opacity duration-300 ${
                    isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`}
                />

                <div>
                  {/* Header: Icon + Tag */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-400 group-hover:scale-105 group-hover:border-amber-400 transition-all">
                      <IconComponent className="w-6 h-6 text-amber-400" />
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-400/90 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full">
                      {item.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>

                  {/* Factual Description from portfolio.js */}
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Verified Fact Badge */}
                <div className="flex items-center gap-2 pt-4 border-t border-white/5 text-xs font-semibold text-emerald-400">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Verified Project & Internship Experience</span>
                </div>

              </div>
            );
          })}
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-10">
          {whyHireMe.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                activeIndex === idx
                  ? 'w-6 bg-gradient-to-r from-amber-400 to-orange-500'
                  : 'w-2 bg-slate-700 hover:bg-slate-500'
              }`}
              aria-label={`Go to item ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

