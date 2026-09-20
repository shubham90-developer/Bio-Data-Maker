"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShieldCheck, FileText, RefreshCw, AlertCircle, Truck, MapPin } from "lucide-react";

interface LegalLayoutProps {
  title: string;
  marathiTitle: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export const LegalLayout: React.FC<LegalLayoutProps> = ({
  title,
  marathiTitle,
  lastUpdated,
  children,
}) => {
  const pathname = usePathname();

  const legalLinks = [
    { href: "/privacy-policy", label: "Privacy Policy", icon: ShieldCheck },
    { href: "/terms", label: "Terms of Service", icon: FileText },
    { href: "/refund-policy", label: "Refund Policy", icon: RefreshCw },
    { href: "/disclaimer", label: "Disclaimer", icon: AlertCircle },
    { href: "/shipping-policy", label: "Digital Delivery Policy", icon: Truck },
    { href: "/sitemap", label: "Sitemap", icon: MapPin },
  ];

  return (
    <div className="min-h-screen bg-[#FCFAF6] py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Desktop Sticky Sidebar */}
          <div className="lg:col-span-3 sticky top-28 bg-white p-4 sm:p-6 rounded-2xl border border-cream-border shadow-card-soft">
            <h3 className="text-xs font-bold text-wine-900 uppercase tracking-widest mb-4 font-sans">
              Legal & Compliance
            </h3>

            <nav className="space-y-1">
              {legalLinks.map((link) => {
                const isActive = pathname === link.href;
                const Icon = link.icon;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                      isActive
                        ? "bg-wine-800 text-white font-bold shadow-xs"
                        : "text-charcoal-700 hover:bg-cream-surface hover:text-wine-900"
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? "text-gold-300" : "text-charcoal-400"}`} />
                    <span>{link.label}</span>
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Main Legal Content */}
          <div className="lg:col-span-9 bg-white p-6 sm:p-10 rounded-3xl border border-cream-border shadow-card-soft space-y-6">
            <div className="pb-6 border-b border-cream-border">
              <h1 className="text-2xl sm:text-3xl font-bold font-serif text-wine-950">
                {title}
              </h1>
              <p className="text-sm font-semibold text-gold-700 font-serifDevanagari mt-1">
                {marathiTitle}
              </p>
              <p className="text-xs text-charcoal-400 mt-2">
                Last Updated: {lastUpdated}
              </p>
            </div>

            <div className="text-charcoal-700 leading-relaxed text-xs sm:text-sm space-y-4">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
