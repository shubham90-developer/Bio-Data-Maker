"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useBiodataStore } from "@/store/useBiodataStore";
import { LanguageCode } from "@/types/biodata";
import {
  Menu,
  X,
  Sparkles,
  Eye,
  Globe,
  ChevronDown,
  FileText,
} from "lucide-react";

const LANGUAGES: { code: LanguageCode; label: string; native: string }[] = [
  { code: "mr", label: "Marathi", native: "मराठी" },
  { code: "en", label: "English", native: "English" },
  { code: "hi", label: "Hindi", native: "हिंदी" },
  { code: "gu", label: "Gujarati", native: "ગુજરાતી" },
  { code: "te", label: "Telugu", native: "తెలుగు" },
  { code: "bn", label: "Bengali", native: "বাংলা" },
];

export const Header: React.FC = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const { data, setLanguage } = useBiodataStore();
  const currentLang = data.profile.language || "mr";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setLangDropdownOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/templates", label: "Templates" },
    { href: "/create-biodata", label: "Create Biodata" },
    { href: "/pricing", label: "Pricing" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#FCFAF6]/90 backdrop-blur-md shadow-sm border-b border-[#E0D5C3]"
          : "bg-[#FCFAF6] border-b border-[#EFE8DC]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group transition-transform active:scale-98"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-wine-700 to-wine-900 flex items-center justify-center text-gold-300 font-bold text-xl shadow-royal group-hover:shadow-gold-glow transition-all">
              वि
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl sm:text-2xl font-bold font-serifDevanagari tracking-tight text-wine-950">
                  विवाहपत्रिका
                </span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold-500" />
              </div>
              <p className="text-[10px] sm:text-[11px] font-medium text-gold-700 tracking-wider uppercase font-sans">
                Modern Marriage Biodata
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? "text-wine-800 bg-wine-50 font-semibold"
                      : "text-charcoal-700 hover:text-wine-800 hover:bg-cream-surface"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Bar */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Language Selector Dropdown */}
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-lg border border-cream-border bg-white hover:bg-cream-surface text-charcoal-700 transition-colors"
                aria-expanded={langDropdownOpen}
                aria-label="Select Language"
              >
                <Globe className="w-3.5 h-3.5 text-gold-600" />
                <span>
                  {LANGUAGES.find((l) => l.code === currentLang)?.native || "मराठी"}
                </span>
                <ChevronDown className="w-3 h-3 text-charcoal-400" />
              </button>

              {langDropdownOpen && (
                <div className="absolute right-0 mt-2 w-36 bg-white rounded-xl shadow-xl border border-cream-border py-1.5 z-50 animate-in fade-in zoom-in-95 duration-150">
                  {LANGUAGES.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setLanguage(l.code);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3.5 py-1.5 text-xs flex items-center justify-between hover:bg-cream-surface transition-colors ${
                        currentLang === l.code
                          ? "font-bold text-wine-800 bg-wine-50"
                          : "text-charcoal-700"
                      }`}
                    >
                      <span>{l.native}</span>
                      <span className="text-[10px] text-charcoal-400">{l.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Preview Button */}
            <Link
              href="/preview"
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs sm:text-sm font-semibold text-wine-900 hover:text-wine-700 hover:bg-cream-surface rounded-lg transition-colors border border-transparent hover:border-cream-border"
            >
              <Eye className="w-4 h-4 text-wine-700" />
              <span>Preview</span>
            </Link>

            {/* Create Biodata Button */}
            <Link
              href="/create-biodata"
              className="flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl text-white bg-gradient-to-r from-wine-700 to-wine-900 hover:from-wine-800 hover:to-wine-950 shadow-royal hover:shadow-royal-lg transition-all active:scale-98"
            >
              <FileText className="w-4 h-4 text-gold-300" />
              <span>Create Biodata</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <Link
              href="/create-biodata"
              className="p-2 rounded-lg bg-wine-700 text-white shadow-xs"
              aria-label="Create Biodata"
            >
              <FileText className="w-4 h-4" />
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-charcoal-700 hover:bg-cream-surface border border-cream-border"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-[#E0D5C3] bg-[#FCFAF6] px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top duration-200 shadow-xl">
          <div className="space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-4 py-2.5 rounded-lg text-sm font-medium ${
                    isActive
                      ? "text-wine-900 bg-wine-100/60 font-semibold"
                      : "text-charcoal-700 hover:bg-cream-surface"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="pt-3 border-t border-[#E0D5C3]">
            <span className="text-xs font-semibold text-charcoal-500 uppercase tracking-wider block mb-2 px-1">
              Language / भाषा
            </span>
            <div className="grid grid-cols-3 gap-1.5">
              {LANGUAGES.map((l) => (
                <button
                  key={l.code}
                  onClick={() => {
                    setLanguage(l.code);
                    setMobileMenuOpen(false);
                  }}
                  className={`py-1.5 px-2 text-xs rounded border text-center transition-all ${
                    currentLang === l.code
                      ? "bg-wine-800 text-white border-wine-800 font-semibold"
                      : "bg-white text-charcoal-700 border-cream-border hover:bg-cream-surface"
                  }`}
                >
                  {l.native}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <Link
              href="/preview"
              className="w-full py-2.5 px-4 text-center text-sm font-semibold text-wine-900 border border-wine-200 rounded-xl bg-wine-50/50"
            >
              Preview Live Biodata
            </Link>
            <Link
              href="/create-biodata"
              className="w-full py-2.5 px-4 text-center text-sm font-semibold text-white bg-wine-800 rounded-xl shadow-royal"
            >
              Start Creating Free
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
