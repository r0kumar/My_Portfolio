import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, ArrowRight, CheckCircle2, Copy, Check } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Contact = () => {
  const { personal } = portfolioData;
  const [copiedField, setCopiedField] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Frontend Development',
    budget: '₹5,000 - ₹10,000',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    
    // Open prefilled email in default client
    const subject = encodeURIComponent(`Project Inquiry: ${formData.projectType} from ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Rohit,\n\nI came across your portfolio and would like to connect!\n\nName: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\nBudget Range: ${formData.budget}\n\nProject Details:\n${formData.message}\n\nLooking forward to hearing from you!`
    );
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        projectType: 'Frontend Development',
        budget: '₹5,000 - ₹10,000',
        message: ''
      });
    }, 4000);
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
            Let's Build Something Amazing Together
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed">
            Have a project in mind? Let's discuss how we can bring your ideas to life. I'm always excited to work on new challenges and innovative projects.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <input
                    type="text"
                    required
                    placeholder="First Name"
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

              {/* Row 2: Project Type & Budget Range */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-xl bg-[#121A29]/90 border border-white/10 text-slate-200 text-sm focus:outline-none focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500/40 transition-all cursor-pointer"
                  >
                    <option value="Frontend Development" className="bg-[#121A29]">Project: Frontend Development</option>
                    <option value="Full Stack Development" className="bg-[#121A29]">Project: Full Stack Development</option>
                    <option value="Data Analytics" className="bg-[#121A29]">Project: Data Analytics</option>
                  </select>
                </div>
                <div>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-xl bg-[#121A29]/90 border border-white/10 text-slate-200 text-sm focus:outline-none focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500/40 transition-all cursor-pointer"
                  >
                    <option value="₹5,000 - ₹10,000" className="bg-[#121A29]">Budget: ₹5,000 – ₹10,000</option>
                    <option value="₹10,000 - ₹20,000" className="bg-[#121A29]">Budget: ₹10,000 – ₹20,000</option>
                    <option value="₹20,000 - ₹30,000" className="bg-[#121A29]">Budget: ₹20,000 – ₹30,000</option>
                    <option value="₹30,000+" className="bg-[#121A29]">Budget: ₹30,000+</option>
                  </select>
                </div>
              </div>

              {/* Row 3: Message Textarea */}
              <div>
                <textarea
                  rows={5}
                  required
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-5 py-3.5 rounded-xl bg-[#121A29]/90 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500/40 transition-all resize-none"
                />
              </div>

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
                      <span>MESSAGE SENT SUCCESSFULLY!</span>
                    </>
                  ) : (
                    <>
                      <span>SEND MESSAGE</span>
                      <ArrowRight className="w-4 h-4 text-black" />
                    </>
                  )}
                </button>
              </div>

            </form>
          </div>

          {/* Right Column: Contact Info Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-[#121A29]/90 border border-white/[0.08] p-6 sm:p-7 shadow-xl shadow-black/40 space-y-6">
              
              {/* Header */}
              <h3 className="text-lg font-bold text-white border-b border-white/5 pb-4">
                Contact Information
              </h3>

              <div className="space-y-4">
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
                <div className="flex items-start gap-3.5">
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

                {/* Response Time */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold">Response Time</div>
                    <div className="text-sm font-medium text-slate-200">
                      {personal.responseTime}
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

