import React, { useState } from 'react';
import { Mail, Phone, MapPin, Briefcase, ArrowRight, CheckCircle2, Copy, Check, ExternalLink, Github, Linkedin, AlertCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Contact = () => {
  const { personal } = portfolioData;
  const [copiedField, setCopiedField] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'Full Stack / MERN Developer',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');

    // Validation
    if (!formData.name.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }
    if (!formData.message.trim()) {
      setErrorMsg('Please provide a message or opportunity details.');
      return;
    }

    setSubmitted(true);

    const subject = encodeURIComponent(`Opportunity for Rohit Kumar - ${formData.role}`);
    const body = encodeURIComponent(
      `Hi Rohit,\n\nI came across your portfolio and would like to connect regarding an opportunity!\n\nCandidate Role: ${formData.role}\nFrom: ${formData.name} (${formData.email})\n\nOpportunity Details:\n${formData.message}\n\nLooking forward to speaking with you!`
    );
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        role: 'Full Stack / MERN Developer',
        message: ''
      });
    }, 4500);
  };

  return (
    <section id="contact" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-orange-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-3 mb-12">
          <div className="inline-flex items-center gap-2">
            <span className="text-amber-400 font-semibold text-xs tracking-widest uppercase">
              GET IN TOUCH
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Let's Connect
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed">
            I'm a final-year B.Tech IT student open to entry-level MERN Stack / Full Stack Developer and Data Analyst roles. If you have an opportunity or want to talk, I'd love to hear from you.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Recruiter Contact Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Row 1: Full Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-xl bg-[#121A29]/90 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500/40 transition-all"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    required
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-xl bg-[#121A29]/90 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500/40 transition-all"
                  />
                </div>
              </div>

              {/* Row 2: Role you're hiring for */}
              <div>
                <select
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="w-full px-5 py-3.5 rounded-xl bg-[#121A29]/90 border border-white/10 text-slate-200 text-sm focus:outline-none focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500/40 transition-all cursor-pointer"
                >
                  <option value="Full Stack / MERN Developer" className="bg-[#121A29]">Role: Full Stack / MERN Developer</option>
                  <option value="Data Analyst" className="bg-[#121A29]">Role: Data Analyst</option>
                  <option value="Internship" className="bg-[#121A29]">Role: Internship</option>
                  <option value="Other" className="bg-[#121A29]">Role: Other</option>
                </select>
              </div>

              {/* Row 3: Message Textarea */}
              <div>
                <textarea
                  rows={5}
                  required
                  placeholder="Tell me about the opportunity..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-5 py-3.5 rounded-xl bg-[#121A29]/90 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500/40 transition-all resize-none"
                />
              </div>

              {/* Error Message if any */}
              {errorMsg && (
                <div className="flex items-center gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-xs text-red-400">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Submit CTA Button */}
              <div>
                <button
                  type="submit"
                  disabled={submitted}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-black bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 hover:from-amber-300 hover:to-orange-400 transition-all duration-300 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer disabled:opacity-80"
                >
                  {submitted ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-black" />
                      <span>OPENING EMAIL CLIENT...</span>
                    </>
                  ) : (
                    <>
                      <span>SEND MESSAGE</span>
                      <ArrowRight className="w-4 h-4 text-black" />
                    </>
                  )}
                </button>
              </div>

              {submitted && (
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 p-3 rounded-xl">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Thank you! Your mail client has been opened with the opportunity details prefilled.</span>
                </div>
              )}

            </form>
          </div>

          {/* Right Column: Contact Info Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-[#121A29]/90 border border-white/[0.08] p-6 sm:p-7 shadow-xl shadow-black/40 space-y-5">
              
              {/* Header */}
              <h3 className="text-lg font-bold text-white border-b border-white/5 pb-4">
                Contact Information
              </h3>

              <div className="space-y-3.5">
                {/* Email */}
                <div className="flex items-center justify-between gap-3.5 pb-3 border-b border-white/5">
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold">Email</div>
                      <a href={`mailto:${personal.email}`} className="text-sm font-medium text-slate-200 hover:text-amber-400 transition-colors">
                        {personal.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(personal.email, 'email')}
                    className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-amber-400 transition-colors text-xs flex items-center gap-1 cursor-pointer"
                    title="Copy Email"
                  >
                    {copiedField === 'email' ? (
                      <span className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
                        <Check className="w-3.5 h-3.5" /> Copied
                      </span>
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                {/* Phone */}
                <div className="flex items-center justify-between gap-3.5 pb-3 border-b border-white/5">
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold">Phone</div>
                      <a href={`tel:${personal.phone}`} className="text-sm font-medium text-slate-200 hover:text-amber-400 transition-colors">
                        {personal.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(personal.phone, 'phone')}
                    className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-amber-400 transition-colors text-xs flex items-center gap-1 cursor-pointer"
                    title="Copy Phone"
                  >
                    {copiedField === 'phone' ? (
                      <span className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
                        <Check className="w-3.5 h-3.5" /> Copied
                      </span>
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3.5 pb-3 border-b border-white/5">
                  <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold">Location</div>
                    <div className="text-sm font-medium text-slate-200">
                      {personal.location}
                    </div>
                  </div>
                </div>

                {/* Availability */}
                <div className="flex items-start gap-3.5 pb-3 border-b border-white/5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold">Availability</div>
                    <div className="text-sm font-semibold text-emerald-400">
                      Open to entry-level roles
                    </div>
                  </div>
                </div>

                {/* LinkedIn Link Row */}
                <div className="flex items-center justify-between gap-3.5 pb-3 border-b border-white/5 group/link">
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0 mt-0.5 group-hover/link:border-amber-400 transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold">LinkedIn</div>
                      <a
                        href={personal.socialLinks.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-medium text-slate-200 hover:text-amber-400 transition-colors flex items-center gap-1.5"
                      >
                        <span>linkedin.com/in/rohit-kumar-665082299</span>
                        <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover/link:text-amber-400 transition-colors" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* GitHub Link Row */}
                <div className="flex items-center justify-between gap-3.5 group/link">
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0 mt-0.5 group-hover/link:border-amber-400 transition-colors">
                      <Github className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold">GitHub</div>
                      <a
                        href={personal.socialLinks.github}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-medium text-slate-200 hover:text-amber-400 transition-colors flex items-center gap-1.5"
                      >
                        <span>github.com/r0kumar</span>
                        <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover/link:text-amber-400 transition-colors" />
                      </a>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
