"use client";

import React, { useState } from "react";
import { FAQS } from "@/data/faqs";
import { ChevronDown, HelpCircle } from "lucide-react";

export const FAQSection: React.FC = () => {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    "faq-1": true, // First one open by default
    "faq-2": true,
  });

  const toggleFAQ = (id: string) => {
    setOpenIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="py-16 lg:py-24 bg-[#FAF7F2] border-t border-[#E0D5C3]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-100 border border-gold-300 text-gold-800 text-xs font-semibold mb-2">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions? • वारंवार विचारले जाणारे प्रश्न</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serifDevanagari text-wine-950">
            नेहमी विचारले जाणारे प्रश्न (FAQ)
          </h2>
          <p className="text-charcoal-600 text-sm sm:text-base mt-3">
            Find immediate answers about biodata formats, Marathi language typing, photo upload, and instant downloads.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = !!openIds[faq.id];
            return (
              <div
                key={faq.id}
                className="bg-white rounded-xl border border-cream-border overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-cream-surface/50 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div>
                    <h3 className="text-base font-bold text-wine-950">
                      {faq.question}
                    </h3>
                    {faq.marathiQuestion && (
                      <p className="text-xs text-wine-800 font-serifDevanagari font-semibold mt-0.5">
                        {faq.marathiQuestion}
                      </p>
                    )}
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-gold-700 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-4 pt-1 text-sm text-charcoal-600 leading-relaxed border-t border-cream-border/50 bg-[#FCFAF6]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
