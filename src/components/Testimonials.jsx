import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Testimonials = () => {
  const { testimonials } = portfolioData;
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section id="testimonials" className="relative py-20 lg:py-28 overflow-hidden bg-[#0A0E17]/60">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 right-1/3 w-96 h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-14">
          <div className="inline-flex items-center justify-center">
            <span className="text-amber-400 font-semibold text-xs tracking-widest uppercase">
              TESTIMONIALS
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            What Clients Say
          </h2>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
          {testimonials.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setActiveIndex(idx)}
              className={`rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 cursor-pointer border ${
                activeIndex === idx
                  ? 'bg-[#141E32] border-amber-500/40 shadow-xl shadow-amber-500/5'
                  : 'bg-[#121A29]/80 border-white/[0.07] hover:border-amber-500/30'
              }`}
            >
              {/* Quote text */}
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 italic">
                "{item.quote}"
              </p>

              {/* Author Info & Star Rating */}
              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                
                {/* Author Avatar + Name */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-amber-500/30 bg-[#0E1524]">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white leading-snug">
                      {item.name}
                    </h4>
                    <p className="text-xs text-slate-400">
                      {item.role}
                    </p>
                  </div>
                </div>

                {/* 5 Gold Stars */}
                <div className="flex items-center gap-0.5 text-amber-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-10">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === idx
                  ? 'w-6 bg-gradient-to-r from-amber-400 to-orange-500'
                  : 'w-2 bg-slate-700 hover:bg-slate-500'
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

