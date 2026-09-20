import React from "react";
import Link from "next/link";
import { TEMPLATES } from "@/data/templates";
import { BLOG_POSTS } from "@/data/blogs";
import { MapPin, ArrowRight, Sparkles } from "lucide-react";

export default function SitemapPage() {
  return (
    <div className="min-h-screen bg-[#FCFAF6] py-12 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-100 text-gold-800 text-xs font-semibold">
            <MapPin className="w-3.5 h-3.5" />
            <span>Site Navigation Directory • साइटमॅप</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold font-serifDevanagari text-wine-950">
            विवाहपत्रिका साइटमॅप (HTML Sitemap)
          </h1>
          <p className="text-xs sm:text-sm text-charcoal-600">
            Easily navigate every section, template, article, and policy available on VivahPatrika.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Core Navigation */}
          <div className="bg-white p-6 rounded-2xl border border-cream-border shadow-card-soft space-y-4">
            <h2 className="text-sm font-bold text-wine-950 uppercase tracking-wider font-serif pb-2 border-b border-cream-border">
              Core Pages
            </h2>
            <ul className="space-y-2 text-xs sm:text-sm text-charcoal-700">
              <li>
                <Link href="/" className="hover:text-wine-800 hover:underline">
                  Home (मुखपृष्ठ)
                </Link>
              </li>
              <li>
                <Link href="/templates" className="hover:text-wine-800 hover:underline">
                  Templates Showcase (सर्व टेम्पलेट्स)
                </Link>
              </li>
              <li>
                <Link href="/create-biodata" className="hover:text-wine-800 hover:underline">
                  Create Biodata Builder (बायोडाटा बनवा)
                </Link>
              </li>
              <li>
                <Link href="/preview" className="hover:text-wine-800 hover:underline">
                  Live Document Preview (प्रिव्ह्यू)
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-wine-800 hover:underline">
                  Pricing & Formats (दर आणि फॉरमॅट्स)
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-wine-800 hover:underline">
                  About Us (आमच्याबद्दल)
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-wine-800 hover:underline">
                  Contact Support (संपर्क)
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: 12 Templates Direct Links */}
          <div className="bg-white p-6 rounded-2xl border border-cream-border shadow-card-soft space-y-4">
            <h2 className="text-sm font-bold text-wine-950 uppercase tracking-wider font-serif pb-2 border-b border-cream-border">
              All 12 Templates
            </h2>
            <ul className="space-y-1.5 text-xs text-charcoal-700 max-h-72 overflow-y-auto pr-1">
              {TEMPLATES.map((t) => (
                <li key={t.id}>
                  <Link href="/templates" className="hover:text-wine-800 hover:underline block">
                    {t.name} ({t.marathiName})
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: 8 Blog Articles */}
          <div className="bg-white p-6 rounded-2xl border border-cream-border shadow-card-soft space-y-4">
            <h2 className="text-sm font-bold text-wine-950 uppercase tracking-wider font-serif pb-2 border-b border-cream-border">
              Matrimony Blog (८ लेख)
            </h2>
            <ul className="space-y-2 text-xs text-charcoal-700 max-h-72 overflow-y-auto pr-1">
              {BLOG_POSTS.map((b) => (
                <li key={b.slug}>
                  <Link href={`/blog/${b.slug}`} className="hover:text-wine-800 hover:underline line-clamp-2">
                    {b.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Legal & Policies */}
          <div className="bg-white p-6 rounded-2xl border border-cream-border shadow-card-soft space-y-4">
            <h2 className="text-sm font-bold text-wine-950 uppercase tracking-wider font-serif pb-2 border-b border-cream-border">
              Legal & Compliance
            </h2>
            <ul className="space-y-2 text-xs sm:text-sm text-charcoal-700">
              <li>
                <Link href="/privacy-policy" className="hover:text-wine-800 hover:underline">
                  Privacy Policy (गोपनीयता धोरण)
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-wine-800 hover:underline">
                  Terms of Service (अटी व शर्ती)
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="hover:text-wine-800 hover:underline">
                  Refund Policy (परतावा धोरण)
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-wine-800 hover:underline">
                  Disclaimer (माहिती अस्वीकरण)
                </Link>
              </li>
              <li>
                <Link href="/shipping-policy" className="hover:text-wine-800 hover:underline">
                  Digital Delivery Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
