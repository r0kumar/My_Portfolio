import React, { useState } from 'react';
import { ArrowUp, Github, Linkedin, Mail, Phone, MapPin, Copy, Check } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { ResumeDropdown } from './ResumeDropdown';

export const Footer = ({ activeRole = 'fullstack' }) => {
  const { brand, personal } = portfolioData;
  const [copied, setCopied] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" }
  ];

  const whatIDoItems = [
    "Full-Stack Development (MERN)",
    "Frontend Engineering",
    "Backend & RESTful APIs",
    "Data Analytics & BI"
  ];

  return (
    <footer className="relative bg-[#070A10] border-t border-white/[0.08] pt-16 pb-12 overflow-hidden">
      {/* Background ambient glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-amber-500/40 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer 4-Column Grid on Desktop, Stacked on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-14">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-2.5 group cursor-pointer w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-lg p-1 -m-1"
              aria-label="Rohit.dev home"
            >
              <div className="relative w-7 h-7 flex items-center justify-center">
                <svg viewBox="0 0 40 40" className="w-7 h-7 transition-transform duration-300 group-hover:scale-105">
                  <polygon
                    points="20,2 36,11 36,29 20,38 4,29 4,11"
                    fill="none"
                    stroke="#F59E0B"
                    strokeWidth="3.5"
                  />
                  <path
                    d="M15,14 L26,20 L15,26"
                    fill="none"
                    stroke="#F97316"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-xl font-extrabold tracking-wider text-white">
                ROHIT<span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">.DEV</span>
              </span>
            </a>

            {/* Tagline */}
            <p className="text-slate-300 text-sm leading-relaxed max-w-xs">
              Final-year B.Tech IT student building full-stack apps and data dashboards.
            </p>

            {/* Status Badge with green pulsing dot */}
            <div className="pt-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>Open to entry-level IT roles</span>
              </div>
            </div>

            {/* Location Line */}
            <div className="flex items-center gap-2 text-xs font-medium text-slate-300 pt-1">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Noida, India</span>
            </div>
          </div>

          {/* Column 2: Quick Links (WCAG AA Contrast, Underline Animation, 44px tap targets) */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              QUICK LINKS
            </h4>
            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-1">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="group relative inline-flex items-center min-h-[44px] text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-md px-1 -mx-1"
                  >
                    <span>{link.name}</span>
                    <span className="absolute bottom-2 left-1 w-0 h-[2px] bg-gradient-to-r from-amber-400 to-orange-500 transition-all duration-300 group-hover:w-[calc(100%-8px)]" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: What I Do (Renamed from Services, Plain Text / Tags) */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              WHAT I DO
            </h4>
            <div className="space-y-2.5">
              {whatIDoItems.map((item, idx) => (
                <div
                  key={idx}
                  className="px-3.5 py-2.5 rounded-xl bg-[#121A29] border border-white/[0.07] text-xs sm:text-sm font-medium text-slate-200 flex items-center gap-2.5 shadow-sm"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_8px_#F59E0B] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 4: Connect */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              CONNECT
            </h4>

            {/* Social Icon Buttons (Min 44x44px tap target, aria-labels, tooltips) */}
            <div className="flex items-center gap-2.5">
              <a
                href={personal.socialLinks.github}
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-xl bg-[#121A29] border border-white/10 hover:border-amber-500/50 flex items-center justify-center text-slate-300 hover:text-amber-400 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_-3px_rgba(245,158,11,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 cursor-pointer"
                aria-label="GitHub: r0kumar"
                title="GitHub: r0kumar"
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                href={personal.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-xl bg-[#121A29] border border-white/10 hover:border-amber-500/50 flex items-center justify-center text-slate-300 hover:text-amber-400 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_-3px_rgba(245,158,11,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 cursor-pointer"
                aria-label="LinkedIn: Rohit Kumar"
                title="LinkedIn: Rohit Kumar"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a
                href={personal.socialLinks.email}
                className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-xl bg-[#121A29] border border-white/10 hover:border-amber-500/50 flex items-center justify-center text-slate-300 hover:text-amber-400 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_-3px_rgba(245,158,11,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 cursor-pointer"
                aria-label={`Email: ${personal.email}`}
                title={`Email: ${personal.email}`}
              >
                <Mail className="w-5 h-5" />
              </a>

              <a
                href={personal.socialLinks.phone}
                className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-xl bg-[#121A29] border border-white/10 hover:border-amber-500/50 flex items-center justify-center text-slate-300 hover:text-amber-400 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_-3px_rgba(245,158,11,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 cursor-pointer"
                aria-label={`Phone: ${personal.phone}`}
                title={`Phone: ${personal.phone}`}
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>

            {/* Copyable Email Text Row */}
            <div className="flex items-center justify-between gap-2 p-2.5 rounded-xl bg-[#121A29] border border-white/10">
              <a
                href={`mailto:${personal.email}`}
                className="text-xs font-medium text-slate-200 hover:text-amber-400 transition-colors truncate focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded px-1"
                title={personal.email}
              >
                {personal.email}
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-amber-400 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 shrink-0"
                aria-label="Copy email address"
                title="Copy email"
              >
                {copied ? (
                  <span className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" /> Copied
                  </span>
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            </div>

            {/* ONE "Download Resume" button with dropdown */}
            <div className="pt-1">
              <ResumeDropdown
                activeRole={activeRole}
                variant="card"
                buttonText="Download Resume"
                align="left"
                dropDirection="up"
                className="w-full text-xs"
              />
            </div>

          </div>

        </div>

        {/* Bottom Bar: Copyright & Tech Attribution */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2026 {personal.firstName} {personal.lastName}. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span>Built with React, Vite & Tailwind CSS</span>
            
            <button
              onClick={scrollToTop}
              className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-xl bg-[#121A29] border border-white/10 hover:border-amber-500/50 flex items-center justify-center text-slate-300 hover:text-amber-400 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
