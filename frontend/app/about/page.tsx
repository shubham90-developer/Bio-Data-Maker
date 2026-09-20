import React from "react";
import Link from "next/link";
import { Sparkles, Heart, ShieldCheck, Palette, Languages, Users, ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FCFAF6] py-12 lg:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Story Intro */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-wine-100 border border-wine-200 text-wine-900 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            <span>Our Story & Mission • आमची भूमिका</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serifDevanagari text-wine-950 leading-tight">
            संस्कार, सौंदर्य आणि तंत्रज्ञानाचा सुरेख संगम
          </h1>

          <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed">
            VivahPatrika was founded with a singular purpose: to elevate Indian and Maharashtrian marriage biodatas from disorganized Word documents and cluttered printouts into works of genuine typographic dignity and aesthetic grace.
          </p>
        </div>

        {/* Why We Built This */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white p-8 sm:p-12 rounded-3xl border border-cream-border shadow-card-soft">
          <div className="space-y-4">
            <span className="text-xs font-bold text-gold-700 uppercase tracking-widest block font-sans">
              The Genesis • सुरुवात कशी झाली
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serifDevanagari text-wine-950">
              बायोडाटा म्हणजे केवळ कागद नाही, तर नव्या नात्याची पहिली ओळख
            </h2>
            <p className="text-sm text-charcoal-600 leading-relaxed">
              When families begin the matrimonial matchmaking process, the first physical or digital touchpoint is the biodata. In conventional setups, people often struggle with chaotic cyber-cafe printouts, poor Marathi font rendering, and mismatched photos.
            </p>
            <p className="text-sm text-charcoal-600 leading-relaxed">
              We asked ourselves: <em>Why shouldn't a marriage biodata feel as refined as a luxury wedding invitation?</em> That conviction birthed विवाहपत्रिका.
            </p>
          </div>

          <div className="bg-[#FAF4E6] p-6 rounded-2xl border border-[#E7D6A7] space-y-4 text-xs sm:text-sm text-charcoal-800">
            <h3 className="font-bold text-wine-900 text-base font-serif">
              Our Core Pillars
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-wine-800 text-white flex items-center justify-center text-xs shrink-0 font-bold">
                  १
                </span>
                <span><strong>Devanagari Typographic Perfection:</strong> Native support for Marathi and regional Indian scripts with proportional kerning.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-wine-800 text-white flex items-center justify-center text-xs shrink-0 font-bold">
                  २
                </span>
                <span><strong>Cultural Reverence:</strong> Respectful integration of auspicious deity symbols, horoscope details, and maternal ancestry.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-wine-800 text-white flex items-center justify-center text-xs shrink-0 font-bold">
                  ३
                </span>
                <span><strong>Zero Complexity:</strong> 5-minute intuitive workflow that works flawlessly on any mobile browser.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Philosophy Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-cream-border shadow-card-soft space-y-3">
            <div className="w-12 h-12 rounded-xl bg-gold-100 text-gold-800 flex items-center justify-center">
              <Palette className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-wine-950 font-serif">
              Design Philosophy
            </h3>
            <p className="text-xs text-charcoal-600 leading-relaxed">
              Warm ivory canvases, deep burgundy borders, muted antique gold accents, and balanced whitespace. We avoid garish clutter in favor of timeless editorial grace.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-cream-border shadow-card-soft space-y-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-wine-950 font-serif">
              Privacy Promise
            </h3>
            <p className="text-xs text-charcoal-600 leading-relaxed">
              We never commoditize matrimonial profiles. Your information is stored privately in your browser's local cache and never sold to spam databases.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-cream-border shadow-card-soft space-y-3">
            <div className="w-12 h-12 rounded-xl bg-wine-100 text-wine-800 flex items-center justify-center">
              <Languages className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-wine-950 font-serif">
              Cultural Inclusivity
            </h3>
            <p className="text-xs text-charcoal-600 leading-relaxed">
              Whether you are looking for traditional Maharashtrian, South Indian, Jain, Sikh, or modern secular formats, VivahPatrika accommodates every tradition without assumptions.
            </p>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="text-center pt-8">
          <Link
            href="/create-biodata"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-wine-700 to-wine-900 hover:from-wine-800 hover:to-wine-950 shadow-royal hover:shadow-royal-lg transition-all"
          >
            <span>Start Creating Your Biodata</span>
            <ArrowRight className="w-5 h-5 text-gold-300" />
          </Link>
        </div>
      </div>
    </div>
  );
}
