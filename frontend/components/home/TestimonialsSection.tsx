"use client";

import React from "react";
import { TESTIMONIALS } from "@/data/testimonials";
import { Star, Quote, CheckCircle2 } from "lucide-react";

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-[#FCFAF6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-gold-700 uppercase tracking-widest block mb-2 font-sans">
            User Testimonials • ग्राहकांचे मनोगत
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-serifDevanagari text-wine-950">
            हजारो समाधानी कुटुंबांचा विश्वास
          </h2>
          <p className="text-charcoal-600 text-sm sm:text-base mt-3">
            Read how families across Pune, Mumbai, Nashik, and overseas created their perfect matrimonial biodatas.
          </p>
        </div>

        {/* Testimonials Grid / Mobile Carousel */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl p-6 border border-cream-border hover:border-gold-400 shadow-card-soft hover:shadow-royal transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-charcoal-400">
                    {t.date}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed italic mb-6">
                  "{t.review}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-cream-border flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-wine-100 text-wine-900 flex items-center justify-center font-bold text-sm">
                    {t.avatarText}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-wine-950 font-serifDevanagari">
                      {t.name}
                    </h3>
                    <p className="text-[11px] text-charcoal-500">
                      {t.city} • {t.role}
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] font-semibold text-gold-700 bg-gold-50 px-2 py-0.5 rounded border border-gold-200">
                    {t.templateUsed}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
