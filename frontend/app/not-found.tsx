import React from "react";
import Link from "next/link";
import { Home, Layout, FileText, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[#FCFAF6] px-4 py-16">
      <div className="max-w-md w-full text-center space-y-6 bg-white p-8 sm:p-10 rounded-3xl border border-cream-border shadow-card-soft">
        <div className="w-16 h-16 rounded-2xl bg-wine-50 text-wine-900 flex items-center justify-center font-serif font-bold text-3xl mx-auto border border-wine-200 shadow-xs">
          ४०४
        </div>

        <div>
          <h1 className="text-2xl font-bold font-serif text-wine-950">
            Page Not Found
          </h1>
          <p className="text-base font-semibold text-gold-700 font-serifDevanagari mt-1">
            हे पृष्ठ सापडले नाही
          </p>
          <p className="text-xs text-charcoal-500 mt-2 leading-relaxed">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
        </div>

        <div className="space-y-2 pt-2">
          <Link
            href="/"
            className="w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-wine-800 hover:bg-wine-900 shadow-royal transition-all flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage (मुख्यपृष्ठ)</span>
          </Link>

          <Link
            href="/create-biodata"
            className="w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold text-wine-900 bg-cream-surface hover:bg-cream-muted border border-cream-border transition-colors flex items-center justify-center gap-2"
          >
            <FileText className="w-4 h-4" />
            <span>Create Biodata (बायोडाटा बनवा)</span>
          </Link>

          <Link
            href="/templates"
            className="w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold text-charcoal-600 hover:text-charcoal-900 transition-colors flex items-center justify-center gap-2"
          >
            <Layout className="w-4 h-4" />
            <span>Browse Templates</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
