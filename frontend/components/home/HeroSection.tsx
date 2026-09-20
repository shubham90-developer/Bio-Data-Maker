"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { BiodataRenderer } from "../templates/BiodataRenderer";
import { SAMPLE_MARATHI_BIODATA } from "@/data/sampleBiodata";
import { CheckCircle2, Sparkles, ArrowRight, Shield, Download, Eye } from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF6EE] via-[#FCFAF6] to-[#FAF6EE] py-16 lg:py-24 border-b border-[#E0D5C3]">
      {/* Decorative Subtle Background Ornaments */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-wine-700/5 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Auspicious Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-wine-100/80 border border-wine-200 text-wine-900 text-xs font-semibold shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-gold-600 animate-pulse" />
              <span>महाराष्ट्रातील #1 ऑनलाइन विवाह बायोडाटा मेकर</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-serifDevanagari text-wine-950 leading-[1.25] tracking-tight">
              तुमच्या नात्याची सुंदर सुरुवात, <br />
              <span className="text-wine-700 underline decoration-gold-400 decoration-wavy decoration-2 underline-offset-8">
                एक सुंदर बायोडाट्यापासून.
              </span>
            </h1>

            {/* English Supporting Text */}
            <p className="text-base sm:text-lg text-charcoal-700 font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Create a breathtaking, culturally authentic marriage biodata in minutes. Choose from 15 royal templates, customize in Marathi or English, and download in HD Image, PDF, or Word format.
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/create-biodata"
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-wine-700 to-wine-900 hover:from-wine-800 hover:to-wine-950 shadow-royal hover:shadow-royal-lg hover:-translate-y-0.5 transition-all flex items-center justify-center gap-3 group"
              >
                <span>Create My Biodata</span>
                <ArrowRight className="w-5 h-5 text-gold-300 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/templates"
                className="w-full sm:w-auto px-7 py-4 rounded-xl text-base font-semibold text-wine-900 bg-white hover:bg-cream-surface border-2 border-wine-200 hover:border-wine-300 shadow-sm transition-all flex items-center justify-center gap-2"
              >
                <Eye className="w-4 h-4 text-wine-700" />
                <span>Explore 15 Templates</span>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 border-t border-[#E8DFC8]/60 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-charcoal-700 font-medium">
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-wine-700 shrink-0" />
                <span>No Registration</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-wine-700 shrink-0" />
                <span>15 Luxury Designs</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-wine-700 shrink-0" />
                <span>Instant Live Preview</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-wine-700 shrink-0" />
                <span>WhatsApp / PDF Ready</span>
              </div>
            </div>
          </div>

          {/* Right Hero Visual: Framer Motion Animated Live Document */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-full max-w-[420px]">
              {/* Background Glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-gold-400 to-wine-600 rounded-2xl blur-lg opacity-25" />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="relative bg-white rounded-2xl shadow-2xl border-4 border-gold-300/60 overflow-hidden transform perspective-1000"
              >
                {/* Simulated Window Bar */}
                <div className="bg-[#FAF4E6] px-4 py-2 border-b border-[#E7D6A7] flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <span className="text-[11px] font-semibold text-wine-900 font-serifDevanagari">
                    विवाहपत्रिका • शाही मरून (Royal Maroon)
                  </span>
                  <span className="text-[10px] text-gold-700 font-bold bg-gold-100 px-2 py-0.5 rounded">
                    A4
                  </span>
                </div>

                {/* Scaled Preview Document */}
                <div className="h-[490px] overflow-hidden bg-[#FDFBF7] flex justify-center items-start pt-2">
                  <div className="transform scale-[0.45] origin-top">
                    <BiodataRenderer
                      data={SAMPLE_MARATHI_BIODATA}
                      overrideTemplateId="royal-maroon"
                      showWatermark={false}
                    />
                  </div>
                </div>

                {/* Floating Interactive Tag */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3 rounded-xl border border-gold-300 shadow-lg flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-wine-100 text-wine-800 flex items-center justify-center font-bold">
                      ✓
                    </div>
                    <div>
                      <p className="font-bold text-wine-950">पूर्णपणे सानुकूलित (Customizable)</p>
                      <p className="text-[11px] text-charcoal-500">फोटो, पत्रिका, आणि कौटुंबिक तपशील</p>
                    </div>
                  </div>
                  <Link
                    href="/preview"
                    className="px-3 py-1.5 bg-wine-800 text-white rounded-lg text-[11px] font-semibold hover:bg-wine-900 transition-colors"
                  >
                    View
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
