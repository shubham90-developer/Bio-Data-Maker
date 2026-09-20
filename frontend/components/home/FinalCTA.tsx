import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

export const FinalCTA: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-16 lg:py-24 bg-gradient-to-r from-wine-900 via-wine-850 to-wine-950 text-white">
      {/* Decorative Gold Rings */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-400/20 border border-gold-400/30 text-gold-300 text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>सुरुवात करा • Start Now</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serifDevanagari text-white leading-tight">
          तुमचा बायोडाटा आजच तयार करा.
        </h2>

        <p className="text-base sm:text-lg text-cream-muted max-w-2xl mx-auto leading-relaxed">
          Create a dignified, beautiful matrimonial presentation for yourself or your family members in less than 5 minutes.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/create-biodata"
            className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold text-wine-950 bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 hover:from-gold-400 hover:to-gold-600 shadow-gold-glow hover:shadow-royal-lg hover:scale-102 transition-all flex items-center justify-center gap-2 group"
          >
            <span>Create My Biodata Now</span>
            <ArrowRight className="w-5 h-5 text-wine-950 transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            href="/templates"
            className="w-full sm:w-auto px-7 py-4 rounded-xl text-base font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-colors"
          >
            Browse All 12+ Templates
          </Link>
        </div>

        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-gold-200">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-gold-400" /> No signup required
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-gold-400" /> 100% Free live preview
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-gold-400" /> Instant PDF & Image downloads
          </span>
        </div>
      </div>
    </section>
  );
};
