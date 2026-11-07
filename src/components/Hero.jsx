import React, { useState, useEffect } from 'react';
import { ArrowRight, Briefcase, Github, Linkedin, Phone, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { TechIcon } from './TechIcons';
import { ResumeDropdown } from './ResumeDropdown';

export const Hero = ({ activeRole = 'fullstack' }) => {
  const { personal } = portfolioData;
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect for roles
  useEffect(() => {
    const currentRole = personal.roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText.length === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % personal.roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex, personal.roles]);

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[30rem] h-[30rem] bg-orange-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-amber-400/5 rounded-full blur-3xl pointer-events-none" />

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column - Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Intro Tag */}
            <div className="inline-flex items-center gap-2">
              <span className="text-amber-400 font-semibold text-xs tracking-widest uppercase">
                {personal.greeting}
              </span>
            </div>

            {/* Giant Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
              {personal.firstName}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500">
                {personal.lastName}
              </span>
            </h1>

            {/* Role with Typewriter & Blinking Cursor */}
            <div className="flex items-center text-xl sm:text-2xl lg:text-3xl font-medium text-slate-300 min-h-[40px]">
              <span>{displayText}</span>
              <span className="inline-block w-[3px] h-7 ml-1 bg-amber-400 animate-pulse" />
            </div>

            {/* Bio paragraph */}
            <p className="text-base sm:text-lg text-slate-400 max-w-xl leading-relaxed">
              {personal.bio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold uppercase tracking-wider text-black bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 hover:from-amber-300 hover:to-orange-400 transition-all duration-300 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>HIRE ME</span>
                <ArrowRight className="w-4 h-4 text-black transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold tracking-wide text-slate-200 bg-[#121A29]/90 hover:bg-[#162238] border border-white/10 hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
              >
                <Briefcase className="w-4 h-4 text-amber-400" />
                <span>VIEW MY WORK</span>
              </a>

              <ResumeDropdown
                activeRole={activeRole}
                variant="hero"
                buttonText="Download Resume"
                align="left"
              />
            </div>

            {/* Availability Status Badge */}
            <div className="pt-2">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold tracking-wider text-emerald-400">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>{personal.status}</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={personal.socialLinks.github}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-[#121A29] border border-white/10 hover:border-amber-500/50 flex items-center justify-center text-slate-400 hover:text-amber-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_15px_-3px_rgba(245,158,11,0.3)]"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personal.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-[#121A29] border border-white/10 hover:border-amber-500/50 flex items-center justify-center text-slate-400 hover:text-amber-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_15px_-3px_rgba(245,158,11,0.3)]"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={personal.socialLinks.phone || "tel:+919958653317"}
                className="w-10 h-10 rounded-xl bg-[#121A29] border border-white/10 hover:border-amber-500/50 flex items-center justify-center text-slate-400 hover:text-amber-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_15px_-3px_rgba(245,158,11,0.3)]"
                aria-label="Call Me"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href={personal.socialLinks.email}
                className="w-10 h-10 rounded-xl bg-[#121A29] border border-white/10 hover:border-amber-500/50 flex items-center justify-center text-slate-400 hover:text-amber-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_15px_-3px_rgba(245,158,11,0.3)]"
                aria-label="Email Me"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column - Hero Visual with Orbit Rings & Floating Badges */}
          <div className="lg:col-span-5 relative flex items-center justify-center pt-4 lg:pt-0">
            
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 md:w-[420px] md:h-[420px] flex items-center justify-center">
              
              {/* Outer Orbit Ring with dashed styling */}
              <div className="absolute inset-0 rounded-full border border-amber-500/20 border-dashed animate-spin-slow pointer-events-none" />

              {/* Inner Orbit Glow Ring */}
              <div className="absolute inset-4 sm:inset-6 rounded-full border border-amber-500/30 shadow-[0_0_30px_rgba(245,158,11,0.15)] pointer-events-none" />

              {/* Center Radial Glow backdrop */}
              <div className="absolute inset-8 sm:inset-10 rounded-full bg-gradient-to-tr from-amber-500/20 via-orange-600/15 to-transparent blur-2xl" />

              {/* Developer Portrait Image Container */}
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-amber-500/40 bg-[#0E1524] shadow-2xl shadow-black/80">
                <img
                  src="/profile.jpg"
                  alt={personal.firstName ? `${personal.firstName} ${personal.lastName}` : "Portfolio Owner"}
                  className="w-full h-full object-cover object-center filter brightness-[1.02] contrast-[1.05]"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/profile_cropped.jpg";
                  }}
                />
                {/* Vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#090D16]/70 via-transparent to-transparent opacity-60 pointer-events-none" />
              </div>

              {/* 1. Floating Badge: React.js (Top Right) */}
              <div className="absolute -top-3 right-0 sm:top-4 sm:-right-4 animate-float-slow z-20">
                <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 sm:px-3.5 sm:py-2 rounded-xl bg-[#121A29]/95 border border-white/10 shadow-xl shadow-black/60 backdrop-blur-md hover:border-cyan-400/50 transition-all hover:scale-105">
                  <TechIcon name="react" className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-[11px] sm:text-sm font-semibold text-slate-200">React.js</span>
                </div>
              </div>

              {/* 2. Floating Badge: Node.js (Center Left) */}
              <div className="absolute top-1/2 -translate-y-1/2 -left-3 sm:-left-8 animate-float-medium z-20 animation-delay-2000">
                <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 sm:px-3.5 sm:py-2 rounded-xl bg-[#121A29]/95 border border-white/10 shadow-xl shadow-black/60 backdrop-blur-md hover:border-emerald-400/50 transition-all hover:scale-105">
                  <TechIcon name="nodejs" className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-[11px] sm:text-sm font-semibold text-slate-200">Node.js</span>
                </div>
              </div>

              {/* 3. Floating Badge: SQL (Bottom Left) */}
              <div className="absolute bottom-4 -left-1 sm:bottom-10 sm:left-0 animate-float-slow z-20 animation-delay-4000">
                <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 sm:px-3.5 sm:py-2 rounded-xl bg-[#121A29]/95 border border-white/10 shadow-xl shadow-black/60 backdrop-blur-md hover:border-cyan-400/50 transition-all hover:scale-105">
                  <TechIcon name="sql" className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-[11px] sm:text-sm font-semibold text-slate-200">SQL</span>
                </div>
              </div>

              {/* 4. Floating Badge: Python (Bottom Right) */}
              <div className="absolute bottom-2 right-0 sm:bottom-8 sm:-right-4 animate-float-medium z-20">
                <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 sm:px-3.5 sm:py-2 rounded-xl bg-[#121A29]/95 border border-white/10 shadow-xl shadow-black/60 backdrop-blur-md hover:border-amber-400/50 transition-all hover:scale-105">
                  <TechIcon name="python" className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-[11px] sm:text-sm font-semibold text-slate-200">Python</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

