"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PRICING_PLANS, COMPARISON_FEATURES } from "@/data/pricing";
import { FAQS } from "@/data/faqs";
import { formatPriceINR } from "@/lib/utils";
import { MockCheckoutModal } from "@/components/preview/MockCheckoutModal";
import { useBiodataStore } from "@/store/useBiodataStore";
import {
  Check,
  X,
  Sparkles,
  ShieldCheck,
  ChevronDown,
  HelpCircle,
  Download,
  ArrowRight,
} from "lucide-react";

export default function PricingPage() {
  const { data } = useBiodataStore();
  const [checkoutFormat, setCheckoutFormat] = useState<"image" | "pdf" | "word" | null>(null);
  const [openFaq, setOpenFaq] = useState<Record<string, boolean>>({
    "faq-7": true,
    "faq-5": true,
  });

  const toggleFaq = (id: string) => {
    setOpenFaq((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="min-h-screen bg-[#FCFAF6] py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-100 border border-gold-300 text-gold-800 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Transparent & Affordable • पारदर्शक दर</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serifDevanagari text-wine-950">
            सोपे आणि किफायतशीर दर
          </h1>
          <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed">
            Preview everything 100% free. Pay only a modest one-time fee when you're ready to download watermark-free, high-resolution formats.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`bg-white rounded-3xl p-6 border transition-all duration-300 flex flex-col justify-between relative ${
                plan.isPopular
                  ? "border-wine-800 shadow-royal ring-2 ring-wine-800 -translate-y-1"
                  : "border-cream-border hover:border-gold-400 shadow-card-soft"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-0.5 rounded-full bg-wine-800 text-white text-[10px] font-bold tracking-wider uppercase shadow-sm whitespace-nowrap">
                  {plan.badge}
                </div>
              )}

              <div>
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-wine-950 font-serif">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-charcoal-500 mt-1 min-h-[32px]">
                    {plan.description}
                  </p>
                </div>

                <div className="py-4 border-y border-cream-border">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-extrabold text-wine-900 font-serif">
                      {plan.price === 0 ? "Free" : formatPriceINR(plan.price)}
                    </span>
                    {plan.originalPrice > 0 && (
                      <span className="text-xs text-charcoal-400 line-through">
                        {formatPriceINR(plan.originalPrice)}
                      </span>
                    )}
                  </div>
                  <span className="text-[11px] text-charcoal-500 block mt-1">
                    One-time payment • No subscription
                  </span>
                </div>

                {/* Features List */}
                <ul className="py-5 space-y-2.5 text-xs text-charcoal-700">
                  {plan.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2">
                {plan.id === "free" ? (
                  <Link
                    href="/create-biodata"
                    className="w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold text-charcoal-800 bg-cream-surface hover:bg-cream-muted border border-cream-border flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                ) : (
                  <button
                    type="button"
                    onClick={() => setCheckoutFormat(plan.id as any)}
                    className={`w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                      plan.isPopular
                        ? "bg-wine-800 hover:bg-wine-900 text-white shadow-royal"
                        : "bg-wine-50 hover:bg-wine-100 text-wine-900 border border-wine-200"
                    }`}
                  >
                    <Download className="w-4 h-4" />
                    <span>{plan.ctaText}</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Feature Comparison Table */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-cream-border shadow-card-soft">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-2xl font-bold text-wine-950 font-serif">
              Detailed Feature Comparison
            </h2>
            <p className="text-xs text-charcoal-500 mt-1">
              Compare capabilities across each download format
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-cream-border">
                  <th className="py-3 px-4 font-bold text-charcoal-800">Features</th>
                  <th className="py-3 px-4 font-bold text-charcoal-800 text-center">Free Preview</th>
                  <th className="py-3 px-4 font-bold text-charcoal-800 text-center">Image (₹49)</th>
                  <th className="py-3 px-4 font-bold text-wine-900 text-center bg-wine-50/50 rounded-t-lg">PDF (₹79)</th>
                  <th className="py-3 px-4 font-bold text-charcoal-800 text-center">Word (₹99)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-cream-border">
                {COMPARISON_FEATURES.map((row, idx) => (
                  <tr key={idx} className="hover:bg-cream-surface/40 transition-colors">
                    <td className="py-3 px-4 font-medium text-charcoal-700">{row.feature}</td>
                    <td className="py-3 px-4 text-center">
                      {typeof row.free === "boolean" ? (
                        row.free ? <Check className="w-4 h-4 text-emerald-600 mx-auto" /> : <X className="w-4 h-4 text-charcoal-300 mx-auto" />
                      ) : (
                        row.free
                      )}
                    </td>
                    <td className="py-3 px-4 text-center">
                      {typeof row.image === "boolean" ? (
                        row.image ? <Check className="w-4 h-4 text-emerald-600 mx-auto" /> : <X className="w-4 h-4 text-charcoal-300 mx-auto" />
                      ) : (
                        row.image
                      )}
                    </td>
                    <td className="py-3 px-4 text-center bg-wine-50/50 font-semibold text-wine-950">
                      {typeof row.pdf === "boolean" ? (
                        row.pdf ? <Check className="w-4 h-4 text-emerald-600 mx-auto" /> : <X className="w-4 h-4 text-charcoal-300 mx-auto" />
                      ) : (
                        row.pdf
                      )}
                    </td>
                    <td className="py-3 px-4 text-center">
                      {typeof row.word === "boolean" ? (
                        row.word ? <Check className="w-4 h-4 text-emerald-600 mx-auto" /> : <X className="w-4 h-4 text-charcoal-300 mx-auto" />
                      ) : (
                        row.word
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pricing FAQs */}
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-wine-950 font-serif">
              Pricing FAQs
            </h2>
            <p className="text-xs text-charcoal-500 mt-1">
              Common questions about payments and digital deliveries
            </p>
          </div>

          {FAQS.slice(4, 8).map((faq) => {
            const isOpen = !!openFaq[faq.id];
            return (
              <div
                key={faq.id}
                className="bg-white rounded-xl border border-cream-border overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-5 py-3.5 text-left flex items-center justify-between text-xs sm:text-sm font-bold text-wine-950 hover:bg-cream-surface cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-gold-700 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-4 pt-1 text-xs text-charcoal-600 leading-relaxed border-t border-cream-border bg-[#FCFAF6]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Mock Checkout Modal */}
      {checkoutFormat && (
        <MockCheckoutModal
          isOpen={!!checkoutFormat}
          onClose={() => setCheckoutFormat(null)}
          formatType={checkoutFormat}
          candidateName={data.personal.fullName}
        />
      )}
    </div>
  );
}
