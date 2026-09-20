"use client";

import React from "react";
import { Layout, Edit3, Palette, DownloadCloud } from "lucide-react";

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: "01",
      icon: Layout,
      title: "Choose Template",
      marathiTitle: "मनपसंत टेम्पलेट निवडा",
      description:
        "Select from 12+ royal, modern, and traditional Marathi styles suited for your family values.",
    },
    {
      number: "02",
      icon: Edit3,
      title: "Add Your Details",
      marathiTitle: "माहिती व फोटो भरा",
      description:
        "Easily enter personal, educational, astrological, and family background with smart autosave.",
    },
    {
      number: "03",
      icon: Palette,
      title: "Customize Design",
      marathiTitle: "रंग व फॉन्ट सानुकूल करा",
      description:
        "Adjust colors, borders, font pairings, and toggle optional sections like horoscope with 1-click.",
    },
    {
      number: "04",
      icon: DownloadCloud,
      title: "Download Instantly",
      marathiTitle: "एचडी फॉरमॅटमध्ये डाऊनलोड",
      description:
        "Export in high-resolution JPG for WhatsApp sharing or vector-crisp A4 printable PDF.",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#FAF7F2] border-y border-[#E0D5C3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-gold-700 uppercase tracking-widest block mb-2 font-sans">
            Simple 4-Step Process • सुलभ कार्यपद्धती
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-serifDevanagari text-wine-950">
            फक्त ४ सोप्या टप्प्यांत तुमचा परिपूर्ण बायोडाटा तयार करा
          </h2>
          <p className="text-charcoal-600 text-sm sm:text-base mt-3">
            No technical knowledge needed. Quick, seamless, and completely accessible on mobile phones.
          </p>
        </div>

        {/* Steps Grid with Connecting Line */}
        <div className="relative">
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-0.5 bg-gradient-to-r from-gold-300 via-wine-300 to-gold-300 -translate-y-8 z-0 pointer-events-none" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  className="relative bg-white rounded-2xl p-6 border border-[#E7D6A7] shadow-card-soft hover:shadow-royal transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                >
                  <div>
                    {/* Step Number Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-wine-50 text-wine-800 flex items-center justify-center border border-wine-200 group-hover:bg-wine-800 group-hover:text-white transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-3xl font-extrabold text-gold-600 font-serif">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-wine-950 font-serif">
                      {step.title}
                    </h3>
                    <p className="text-sm font-semibold text-wine-700 font-serifDevanagari mt-0.5">
                      {step.marathiTitle}
                    </p>

                    <p className="text-xs text-charcoal-600 mt-2.5 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#F5EFEB] flex items-center gap-1.5 text-[11px] font-semibold text-gold-700">
                    <span>Step {idx + 1} of 4</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
