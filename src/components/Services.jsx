import React from 'react';
import { Code, Monitor, Server, BarChart3, Database, Bot, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const iconMap = {
  Code,
  Monitor,
  Server,
  BarChart3,
  Database,
  Bot
};

export const Services = ({ activeRole = 'fullstack', onSelectFilter }) => {
  const { services } = portfolioData;

  // Base list of 6 factual cards from portfolioData
  const devCards = services.map((service) => ({
    ...service,
    IconComponent: iconMap[service.icon] || Code,
    actionText: "SEE RELATED PROJECTS"
  }));

  // Reorder based on role toggle:
  // In Data Analyst View: Data Analytics & BI, Databases & SQL first
  // In Developer View: Full-Stack, Frontend, Backend first
  const dataAnalystOrder = [
    'data-analytics',
    'databases-sql',
    'fullstack-dev',
    'frontend-dev',
    'backend-apis'
  ];

  const cards = activeRole === 'dataAnalyst'
    ? [...devCards].sort((a, b) => dataAnalystOrder.indexOf(a.id) - dataAnalystOrder.indexOf(b.id))
    : devCards;

  const handleActionClick = (e, card) => {
    e.preventDefault();
    
    if (card.target === '#experience') {
      const expEl = document.getElementById('experience');
      if (expEl) {
        expEl.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    // Projects target
    if (card.filter) {
      if (onSelectFilter) {
        onSelectFilter(card.filter);
      }
      window.dispatchEvent(new CustomEvent('set-project-filter', { detail: card.filter }));
    }

    const projectsEl = document.getElementById('projects');
    if (projectsEl) {
      projectsEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" data-section="expertise" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header: WHAT I DO / Areas of Expertise */}
        <div className="text-center space-y-3 mb-14">
          <div className="inline-flex items-center justify-center">
            <span className="text-amber-400 font-semibold text-xs tracking-widest uppercase">
              WHAT I DO
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Areas of Expertise
          </h2>
        </div>

        {/* 5 Cards Grid: 3 in Row 1, 2 centered in Row 2 on Desktop; 2-col on Tablet; 1-col on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-7">
          {cards.map((card, idx) => {
            const { IconComponent } = card;
            
            // Symmetrical centering: on desktop (6 cols), cards 0,1,2 take 2 cols each (3 cards total 6 cols).
            // Card 3 starts at col 2 and takes 2 cols; Card 4 takes 2 cols (centered underneath).
            // On tablet (2 cols), card 4 is centered.
            const colSpanClass = idx === 3
              ? "lg:col-span-2 lg:col-start-2 md:col-span-1"
              : idx === 4
              ? "lg:col-span-2 md:col-span-2 md:max-w-md md:mx-auto w-full lg:max-w-none"
              : "lg:col-span-2 md:col-span-1";

            return (
              <div
                key={card.id}
                className={`${colSpanClass} group relative rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 border border-white/[0.08] hover:border-amber-500/40 shadow-xl shadow-black/40 hover:shadow-amber-500/10 overflow-hidden h-full`}
                style={{
                  background: 'radial-gradient(130% 100% at 50% 0%, rgba(245, 158, 11, 0.10) 0%, rgba(18, 26, 42, 0.85) 45%, rgba(11, 16, 26, 0.95) 100%)',
                }}
              >
                {/* Top edge glowing highlight */}
                <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-amber-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Compact square/rounded icon badge */}
                  <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-400 mb-5 group-hover:scale-105 group-hover:border-amber-400/50 group-hover:bg-amber-500/15 group-hover:shadow-[0_0_15px_-3px_rgba(245,158,11,0.4)] transition-all duration-300">
                    <IconComponent className="w-5 h-5 text-amber-400" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-amber-300 transition-colors">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                    {card.description}
                  </p>
                </div>

                {/* SEE RELATED PROJECTS action button with focus state */}
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={(e) => handleActionClick(e, card)}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 hover:text-amber-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070A10] rounded-md py-1 cursor-pointer"
                    aria-label={`${card.actionText} for ${card.title}`}
                  >
                    <span>{card.actionText}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
