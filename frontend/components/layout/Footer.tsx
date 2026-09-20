import React from "react";
import Link from "next/link";
import { Heart, Sparkles, ShieldCheck, Mail, Phone, MapPin } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1C1315] text-[#D8CEBA] border-t-2 border-[#C5A059]/40 no-print">
      {/* Top Banner */}
      <div className="border-b border-white/10 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-full bg-gold-500/20 text-gold-400 flex items-center justify-center font-bold">
              ॐ
            </span>
            <div>
              <p className="text-sm font-semibold text-white font-serifDevanagari">
                पवित्र नात्यांची सन्माननीय सुरुवात • विवाहपत्रिका
              </p>
              <p className="text-xs text-[#A89C86]">
                Crafting dignified, culturally resonant marriage biodatas for families worldwide.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs text-gold-400 font-medium bg-white/5 px-4 py-2 rounded-full border border-gold-500/20">
            <ShieldCheck className="w-4 h-4 text-gold-400" />
            <span>100% Privacy Focused • Browser Local Processing</span>
          </div>
        </div>
      </div>

      {/* Main Multi-Column Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Column 1: Brand & Bio (2 cols wide on desktop) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-wine-600 to-wine-900 flex items-center justify-center text-gold-300 font-bold text-xl border border-gold-500/40">
                वि
              </div>
              <div>
                <span className="text-2xl font-bold font-serifDevanagari text-white">
                  विवाहपत्रिका
                </span>
                <p className="text-[10px] text-gold-400 tracking-wider uppercase font-sans">
                  Modern Marriage Biodata
                </p>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-[#B4A790] leading-relaxed max-w-sm">
              An elegant, privacy-first web application designed to help Maharashtrian and Indian families create breathtaking marriage biodatas in minutes, blending deep cultural tradition with modern typography.
            </p>

            <div className="space-y-1 text-xs text-[#9B8F79] pt-2">
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-gold-500 shrink-0" />
                <span>Maharashtra, India (Serving Globally)</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-gold-500 shrink-0" />
                <span>support@vivahpatrika.online</span>
              </p>
            </div>
          </div>

          {/* Column 2: Product */}
          <div>
            <h3 className="text-xs font-bold text-gold-400 uppercase tracking-widest mb-4 font-sans">
              Product
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/create-biodata" className="hover:text-white transition-colors">
                  Create Biodata
                </Link>
              </li>
              <li>
                <Link href="/templates" className="hover:text-white transition-colors">
                  Template Marketplace
                </Link>
              </li>
              <li>
                <Link href="/preview" className="hover:text-white transition-colors">
                  Live A4 Preview
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">
                  Pricing & Formats
                </Link>
              </li>
              <li>
                <span className="text-xs text-gold-500/70 inline-flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> 12+ Original Designs
                </span>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h3 className="text-xs font-bold text-gold-400 uppercase tracking-widest mb-4 font-sans">
              Resources & Guide
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Matrimony Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  Our Story & Philosophy
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Support
                </Link>
              </li>
              <li>
                <Link href="/sitemap" className="hover:text-white transition-colors">
                  HTML Sitemap
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div>
            <h3 className="text-xs font-bold text-gold-400 uppercase tracking-widest mb-4 font-sans">
              Legal & Policies
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/privacy-policy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="hover:text-white transition-colors">
                  Refund & Cancellation
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-white transition-colors">
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/shipping-policy" className="hover:text-white transition-colors">
                  Digital Delivery Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Legal & Copyright */}
      <div className="border-t border-white/10 py-6 px-4 sm:px-6 lg:px-8 bg-black/30">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8F836E]">
          <p>
            © {new Date().getFullYear()} विवाहपत्रिका (VivahPatrika). All rights reserved. Made with reverence for cultural tradition.
          </p>

          <div className="flex items-center gap-4 text-[11px]">
            <span>मराठी</span>
            <span>•</span>
            <span>English</span>
            <span>•</span>
            <span>हिंदी</span>
            <span>•</span>
            <span>ગુજરાતી</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
