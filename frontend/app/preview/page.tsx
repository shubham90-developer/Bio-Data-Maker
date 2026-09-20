"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useBiodataStore } from "@/store/useBiodataStore";
import { BiodataRenderer } from "@/components/templates/BiodataRenderer";
import { MockCheckoutModal } from "@/components/preview/MockCheckoutModal";
import { PRICING_PLANS } from "@/data/pricing";
import { formatPriceINR } from "@/lib/utils";
import {
  Download,
  Edit3,
  Layout,
  Printer,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ZoomIn,
  ZoomOut,
  ArrowRight,
} from "lucide-react";

export default function PreviewPage() {
  const { data, setField } = useBiodataStore();
  const [zoomLevel, setZoomLevel] = useState(0.8);
  const [showWatermark, setShowWatermark] = useState(false);
  const [checkoutFormat, setCheckoutFormat] = useState<"image" | "pdf" | "word" | null>(null);

  const handlePrint = () => {
    window.print();
  };

  const paidPlans = PRICING_PLANS.filter((p) => p.price > 0);

  return (
    <div className="min-h-screen bg-[#FCFAF6] py-8 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Page Top Banner */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#E0D5C3]">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs font-semibold mb-2">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Document Generated Successfully</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold font-serifDevanagari text-wine-950">
              Your Biodata Is Ready • तुमचा बायोडाटा तयार आहे
            </h1>
            <p className="text-xs sm:text-sm text-charcoal-600 mt-1">
              Review your document below. Choose your preferred download format to export without watermark.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <Link
              href="/create-biodata"
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-charcoal-700 bg-white hover:bg-cream-surface border border-cream-border flex items-center gap-1.5 transition-colors"
            >
              <Edit3 className="w-4 h-4 text-wine-800" />
              <span>Edit Details</span>
            </Link>

            <Link
              href="/templates"
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-wine-900 bg-wine-50 hover:bg-wine-100 border border-wine-200 flex items-center gap-1.5 transition-colors"
            >
              <Layout className="w-4 h-4 text-wine-800" />
              <span>Change Template</span>
            </Link>

            <button
              type="button"
              onClick={handlePrint}
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-charcoal-700 bg-white hover:bg-cream-surface border border-cream-border flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Printer className="w-4 h-4 text-charcoal-600" />
              <span>Print A4</span>
            </button>
          </div>
        </div>

        {/* Main 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Live Document Preview with Controls */}
          <div className="lg:col-span-7 bg-[#EFE8DD] rounded-3xl p-4 sm:p-8 border border-[#D8CEBA] shadow-inner flex flex-col items-center">
            {/* Viewport Toolbar */}
            <div className="w-full flex items-center justify-between mb-4 px-2">
              {/* Watermark Toggle */}
              <label className="flex items-center gap-2 text-xs font-semibold text-charcoal-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={showWatermark}
                  onChange={(e) => setShowWatermark(e.target.checked)}
                  className="rounded text-wine-800 focus:ring-wine-700"
                />
                <span>Toggle Preview Watermark</span>
              </label>

              {/* Zoom Buttons */}
              <div className="flex items-center gap-1 bg-white rounded-xl p-1 border border-cream-border shadow-xs">
                <button
                  type="button"
                  onClick={() => setZoomLevel((prev) => Math.max(0.4, prev - 0.1))}
                  className="p-1.5 hover:bg-cream-surface rounded-lg text-charcoal-600"
                  title="Zoom Out"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <span className="text-xs font-semibold text-charcoal-600 px-2">
                  {Math.round(zoomLevel * 100)}%
                </span>
                <button
                  type="button"
                  onClick={() => setZoomLevel((prev) => Math.min(1.1, prev + 0.1))}
                  className="p-1.5 hover:bg-cream-surface rounded-lg text-charcoal-600"
                  title="Zoom In"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Document Scaled Container */}
            <div className="w-full overflow-x-auto flex justify-center pb-4">
              <div
                className="transition-transform duration-200 origin-top shadow-2xl rounded-sm"
                style={{ transform: `scale(${zoomLevel})` }}
              >
                <BiodataRenderer
                  data={data}
                  showWatermark={showWatermark}
                />
              </div>
            </div>
          </div>

          {/* Right Column: Download Formats & Checkout Options */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h2 className="text-xl font-bold text-wine-950 font-serif">
                Select Download Format
              </h2>
              <p className="text-xs text-charcoal-600 mt-1">
                Watermark-free, high-resolution formats designed for WhatsApp sharing and physical printing.
              </p>
            </div>

            {/* Format Cards */}
            <div className="space-y-4">
              {paidPlans.map((plan) => {
                const planKey = plan.id as "image" | "pdf" | "word";
                return (
                  <div
                    key={plan.id}
                    className={`bg-white rounded-2xl p-5 border transition-all relative ${
                      plan.isPopular
                        ? "border-wine-800 shadow-royal ring-1 ring-wine-800"
                        : "border-cream-border hover:border-gold-400 shadow-card-soft"
                    }`}
                  >
                    {plan.badge && (
                      <div className="absolute -top-3 right-5 px-3 py-0.5 rounded-full bg-wine-800 text-white text-[10px] font-bold tracking-wider uppercase shadow-xs">
                        {plan.badge}
                      </div>
                    )}

                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-bold text-wine-950 text-base font-serif">
                          {plan.name}
                        </h3>
                        <p className="text-xs text-charcoal-500 mt-0.5">
                          {plan.description}
                        </p>
                      </div>

                      <div className="text-right shrink-0 pl-3">
                        <div className="text-xl font-extrabold text-wine-900 font-serif">
                          {formatPriceINR(plan.price)}
                        </div>
                        <div className="text-[10px] text-charcoal-400 line-through">
                          {formatPriceINR(plan.originalPrice)}
                        </div>
                      </div>
                    </div>

                    <ul className="mt-4 pt-3 border-t border-cream-border/60 space-y-1 text-xs text-charcoal-700">
                      {plan.features.slice(0, 3).map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      type="button"
                      onClick={() => setCheckoutFormat(planKey)}
                      className={`w-full mt-4 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                        plan.isPopular
                          ? "bg-wine-800 hover:bg-wine-900 text-white shadow-royal"
                          : "bg-cream-surface hover:bg-cream-muted text-wine-950 border border-cream-border"
                      }`}
                    >
                      <Download className="w-4 h-4" />
                      <span>{plan.ctaText}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Trust Guarantee Box */}
            <div className="p-4 bg-white rounded-2xl border border-cream-border shadow-card-soft text-xs text-charcoal-600 space-y-2">
              <div className="flex items-center gap-2 font-bold text-wine-900">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>100% Satisfaction & Privacy Guarantee</span>
              </div>
              <p className="text-[11px] leading-relaxed">
                You can re-download your generated file at any time from this browser. Your matrimonial details remain confidential.
              </p>
            </div>
          </div>
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
