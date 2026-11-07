import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Footer = () => {
  const { brand, personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#070A10] border-t border-white/[0.08] pt-16 pb-12 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Brand Info (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="relative w-7 h-7 flex items-center justify-center">
                <svg viewBox="0 0 40 40" className="w-7 h-7">
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
            </div>

            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              {brand.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              QUICK LINKS
            </h4>
            <ul className="space-y-2.5 text-sm">
              {portfolioData.navLinks.slice(0, 5).map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-amber-400 transition-colors"
                  >
                    {link.name.charAt(0) + link.name.slice(1).toLowerCase()}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              SERVICES
            </h4>
            <ul className="space-y-2.5 text-sm">
              {portfolioData.services.map((service) => (
                <li key={service.id}>
                  <a
                    href="#services"
                    className="text-slate-400 hover:text-amber-400 transition-colors"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Me */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              CONNECT WITH ME
            </h4>
            <div className="flex items-center gap-2.5">
              <a
                href={personal.socialLinks.github}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-[#121A29] border border-white/10 hover:border-amber-500/50 flex items-center justify-center text-slate-400 hover:text-amber-400 transition-all hover:-translate-y-1"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personal.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-[#121A29] border border-white/10 hover:border-amber-500/50 flex items-center justify-center text-slate-400 hover:text-amber-400 transition-all hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={personal.socialLinks.email}
                className="w-9 h-9 rounded-xl bg-[#121A29] border border-white/10 hover:border-amber-500/50 flex items-center justify-center text-slate-400 hover:text-amber-400 transition-all hover:-translate-y-1"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={personal.socialLinks.phone}
                className="w-9 h-9 rounded-xl bg-[#121A29] border border-white/10 hover:border-amber-500/50 flex items-center justify-center text-slate-400 hover:text-amber-400 transition-all hover:-translate-y-1"
                aria-label="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 {personal.firstName} {personal.lastName}. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span>Built with passion <span className="text-orange-400">🧡</span> and lots of coffee <span className="text-amber-400">☕</span></span>
            
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-lg bg-[#121A29] border border-white/10 hover:border-amber-500/50 flex items-center justify-center text-slate-400 hover:text-amber-400 transition-all cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

