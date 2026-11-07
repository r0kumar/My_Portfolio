import React from 'react';
import { Code2, Monitor, Server, Database, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const iconMap = {
  Code2: Code2,
  Monitor: Monitor,
  Server: Server,
  Database: Database,
};

export const Services = () => {
  const { services } = portfolioData;

  const handleServiceClick = (e, title) => {
    e.preventDefault();
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-14">
          <div className="inline-flex items-center justify-center">
            <span className="text-amber-400 font-semibold text-xs tracking-widest uppercase">
              WHAT I DO
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            My Services
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon] || Code2;
            return (
              <div
                key={service.id}
                className="group relative rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 border border-white/[0.08] hover:border-amber-500/40 shadow-xl shadow-black/40 hover:shadow-amber-500/10 overflow-hidden"
                style={{
                  background: 'radial-gradient(130% 100% at 50% 0%, rgba(245, 158, 11, 0.12) 0%, rgba(18, 26, 42, 0.85) 45%, rgba(11, 16, 26, 0.95) 100%)',
                }}
              >
                {/* Top edge glowing highlight */}
                <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-amber-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Icon Box */}
                  <div className="w-13 h-13 rounded-2xl bg-[#1C273E] border border-amber-500/25 flex items-center justify-center text-amber-400 mb-6 group-hover:scale-105 group-hover:border-amber-400 group-hover:shadow-[0_0_20px_-3px_rgba(245,158,11,0.4)] transition-all duration-300 p-3.5">
                    <IconComponent className="w-6 h-6 text-amber-400" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-300 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Learn More link */}
                <div>
                  <a
                    href="#contact"
                    onClick={(e) => handleServiceClick(e, service.title)}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 group-hover:text-amber-300 transition-colors"
                  >
                    <span>LEARN MORE</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

