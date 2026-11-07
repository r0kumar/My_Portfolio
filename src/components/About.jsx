import React, { useState } from 'react';
import { Mail, MapPin, CheckCircle2, Award, Briefcase, GraduationCap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { ResumeDropdown } from './ResumeDropdown';

export const About = ({ activeRole = 'fullstack', setActiveRole }) => {
  const { about, personal, summaries } = portfolioData;
  const [localRole, setLocalRole] = useState('fullstack');
  const currentRole = setActiveRole ? activeRole : localRole;
  const handleRoleChange = (role) => {
    if (setActiveRole) setActiveRole(role);
    setLocalRole(role);
  };

  return (
    <section id="about" className="relative py-20 lg:py-28 overflow-hidden bg-[#0A0E17]/60">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Story, Stats & Resume CTA */}
          <div className="lg:col-span-7 space-y-7">
            
            {/* Section Tag */}
            <div className="inline-flex items-center gap-2">
              <span className="text-amber-400 font-semibold text-xs tracking-widest uppercase">
                {about.tag}
              </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {about.title}
            </h2>

            {/* Role Toggle Switcher */}
            <div className="inline-flex p-1 rounded-xl bg-[#121A29] border border-white/10 gap-1">
              <button
                onClick={() => handleRoleChange('fullstack')}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  currentRole === 'fullstack'
                    ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-black shadow-md shadow-orange-500/20'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Full Stack (MERN) View
              </button>
              <button
                onClick={() => handleRoleChange('dataAnalyst')}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  currentRole === 'dataAnalyst'
                    ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-black shadow-md shadow-orange-500/20'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Data Analyst View
              </button>
            </div>

            {/* Dynamic Summary based on active role */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              {currentRole === 'fullstack' ? summaries.fullstack : summaries.dataAnalyst}
            </p>

            {/* Stat Counters Grid (2x2 on sm, 4-col on lg) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
              {about.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:p-5 rounded-2xl bg-[#121A29]/80 border border-white/[0.07] hover:border-amber-500/30 transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 group-hover:scale-105 transition-transform duration-200">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-400 font-medium mt-1 leading-snug">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Download Resume Button with Dropdown */}
            <div className="pt-2">
              <ResumeDropdown
                activeRole={currentRole}
                variant="hero"
                buttonText="Download Resume"
                align="left"
              />
            </div>

          </div>

          {/* Right Column: Info Card, Dotted World Map & Signature */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end space-y-6">
            
            {/* Info Card */}
            <div className="w-full max-w-md rounded-2xl bg-[#121A29]/90 border border-white/[0.08] p-6 sm:p-7 shadow-xl shadow-black/40 backdrop-blur-md relative overflow-hidden">
              
              {/* Top ambient orange line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-amber-500/20 via-amber-400 to-orange-500/20" />

              <div className="space-y-4">
                {/* Name & Profile Avatar */}
                <div className="flex items-center gap-3.5 pb-3 border-b border-white/5">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-amber-500/30 bg-[#0E1524] shrink-0 shadow-md">
                    <img
                      src="/profile.jpg"
                      alt={personal.firstName}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold">Name</div>
                    <div className="text-sm font-bold text-white">{personal.firstName} {personal.lastName}</div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3.5 pb-3 border-b border-white/5">
                  <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold">Email</div>
                    <a href={`mailto:${personal.email}`} className="text-sm font-medium text-slate-200 hover:text-amber-400 transition-colors">
                      {personal.email}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3.5 pb-3 border-b border-white/5">
                  <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold">Location</div>
                    <div className="text-sm font-medium text-slate-200">{personal.location}</div>
                  </div>
                </div>

                {/* Availability */}
                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold">Availability</div>
                    <div className="text-sm font-semibold text-emerald-400">{personal.availability}</div>
                  </div>
                </div>
              </div>

              {/* Dotted World Map Graphic with glowing node point on India */}
              <div className="mt-6 pt-5 border-t border-white/5 relative">
                <div className="h-32 w-full rounded-xl bg-[#090D16]/60 border border-white/5 overflow-hidden relative flex items-center justify-center">
                  
                  {/* Dotted SVG Map Representation */}
                  <svg className="w-full h-full opacity-35" viewBox="0 0 500 250" fill="none">
                    <defs>
                      <pattern id="dot-pattern" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                        <circle cx="2" cy="2" r="1" fill="#94A3B8" />
                      </pattern>
                    </defs>
                    <path
                      d="M70,50 Q110,30 160,50 Q140,110 110,130 Q70,90 70,50 Z M120,140 Q150,150 140,210 Q110,230 100,160 Z M220,40 Q290,30 320,70 Q270,110 230,80 Z M230,110 Q280,110 270,180 Q220,190 220,120 Z M330,40 Q450,30 460,90 Q400,140 340,100 Z M380,160 Q440,160 430,210 Q370,210 380,160 Z"
                      fill="url(#dot-pattern)"
                    />
                    
                    {/* Glowing connection lines */}
                    <path
                      d="M100,70 Q200,30 330,95"
                      stroke="#F59E0B"
                      strokeWidth="1.5"
                      strokeDasharray="4 4"
                      opacity="0.6"
                    />

                    {/* India / Noida Node */}
                    <circle cx="330" cy="95" r="5" fill="#F59E0B" className="animate-ping opacity-75" />
                    <circle cx="330" cy="95" r="3.5" fill="#F59E0B" />

                    {/* US Node */}
                    <circle cx="100" cy="70" r="3" fill="#F97316" />
                  </svg>

                  {/* Overlay text */}
                  <div className="absolute bottom-2 left-3 text-[10px] uppercase tracking-wider text-slate-500 font-semibold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    Based in Noida, India • Open Globally
                  </div>
                </div>
              </div>

            </div>

            {/* Handwritten Signature */}
            <div className="w-full max-w-md flex justify-end pr-2 pt-2">
              <div className="flex flex-col items-end">
                <span className="text-3xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-orange-400 font-signature select-none tracking-wide drop-shadow-[0_0_12px_rgba(245,158,11,0.3)]">
                  Rohit Kumar
                </span>
                <span className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold mr-1">
                  Signature
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
