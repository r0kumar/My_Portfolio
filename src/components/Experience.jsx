import React from 'react';
import { Briefcase, GraduationCap, Award, Calendar, CheckCircle2, Trophy, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Experience = () => {
  const { experience, education, certifications, achievements } = portfolioData;

  return (
    <section id="experience" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center justify-center">
            <span className="text-amber-400 font-semibold text-xs tracking-widest uppercase">
              CAREER & BACKGROUND
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Experience & Education
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Left Column: Work Experience & Education Timeline */}
          <div className="lg:col-span-7 space-y-10">
            
            {/* 1. Work Experience */}
            <div className="space-y-6">
              <div className="flex items-center gap-2.5 pb-2 border-b border-white/5">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  <Briefcase className="w-4 h-4" />
                </div>
                <h3 className="text-xl font-bold text-white">Work Experience & Internship</h3>
              </div>

              {experience.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl p-6 sm:p-7 bg-[#121A29]/90 border border-white/[0.08] hover:border-amber-500/40 shadow-xl shadow-black/40 transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-amber-500/40 via-orange-500/40 to-transparent" />

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <h4 className="text-lg font-bold text-white text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-200">
                        {item.role}
                      </h4>
                      <p className="text-amber-400 font-semibold text-sm">
                        {item.company} <span className="text-slate-500">•</span> <span className="text-slate-400 font-normal">{item.mode}</span>
                      </p>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 text-xs font-medium text-slate-300 w-fit">
                      <Calendar className="w-3.5 h-3.5 text-amber-400" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  {/* Bullet points */}
                  <ul className="space-y-2.5 mt-4">
                    {item.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* 2. Education Timeline */}
            <div id="education" className="space-y-6 pt-4">
              <div className="flex items-center gap-2.5 pb-2 border-b border-white/5">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <h3 className="text-xl font-bold text-white">Education History</h3>
              </div>

              <div className="space-y-4">
                {education.map((edu, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl p-5 sm:p-6 bg-[#121A29]/75 border border-white/[0.07] hover:border-amber-500/30 transition-all duration-300"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 mb-2">
                      <div>
                        <h4 className="text-base font-bold text-white">{edu.degree}</h4>
                        <p className="text-xs sm:text-sm text-amber-400/90">{edu.institution}</p>
                      </div>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded bg-[#1A253A] text-slate-300 w-fit">
                        {edu.period}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 mt-2">
                      {edu.score && (
                        <span className="font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                          {edu.score}
                        </span>
                      )}
                      {edu.details && <span>{edu.details}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Certifications & Achievements */}
          <div className="lg:col-span-5 space-y-10">
            
            {/* Certifications Card List */}
            <div id="certifications" className="space-y-6">
              <div className="flex items-center gap-2.5 pb-2 border-b border-white/5">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  <Award className="w-4 h-4" />
                </div>
                <h3 className="text-xl font-bold text-white">Certifications</h3>
              </div>

              <div className="space-y-3.5">
                {certifications.map((cert, idx) => {
                  const CardWrapper = cert.link ? 'a' : 'div';
                  const wrapperProps = cert.link
                    ? {
                        href: cert.link,
                        target: '_blank',
                        rel: 'noreferrer',
                      }
                    : {};

                  return (
                    <CardWrapper
                      key={idx}
                      {...wrapperProps}
                      className="p-4 sm:p-5 rounded-2xl bg-[#121A29]/80 border border-white/[0.07] hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-1 group block cursor-pointer"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="space-y-1">
                          <h4 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors flex items-center gap-1.5">
                            <span>{cert.title}</span>
                            {cert.link && (
                              <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-amber-400 shrink-0 transition-colors" />
                            )}
                          </h4>
                          <p className="text-xs text-slate-400">
                            {cert.issuer} <span className="text-slate-600">•</span> <span className="text-amber-400/80">{cert.date}</span>
                          </p>
                        </div>
                        <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0 group-hover:border-amber-400 transition-colors">
                          <Award className="w-4 h-4" />
                        </div>
                      </div>

                      {cert.link && (
                        <div className="mt-2.5 pt-2 border-t border-white/5 text-[11px] font-semibold text-amber-400/90 group-hover:text-amber-300 flex items-center gap-1">
                          <span>View Verified Credential</span>
                          <ExternalLink className="w-3 h-3" />
                        </div>
                      )}
                    </CardWrapper>
                  );
                })}
              </div>
            </div>

            {/* Achievements Card List */}
            <div className="space-y-6 pt-4">
              <div className="flex items-center gap-2.5 pb-2 border-b border-white/5">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  <Trophy className="w-4 h-4" />
                </div>
                <h3 className="text-xl font-bold text-white">Honors & Achievements</h3>
              </div>

              <div className="space-y-3.5">
                {achievements.map((ach, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-[#121A29]/90 border border-white/[0.08] hover:border-amber-500/40 transition-all duration-300 relative overflow-hidden"
                  >
                    <div className="inline-block px-2.5 py-1 rounded-md text-[11px] font-bold bg-amber-500/15 text-amber-400 border border-amber-500/30 mb-2">
                      {ach.badge}
                    </div>
                    <h4 className="text-sm font-bold text-white mb-1.5">{ach.title}</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">{ach.description}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

