"use client";

import React from "react";
import { Users, Layout, Globe2, Star } from "lucide-react";

export const StatsSection: React.FC = () => {
  const stats = [
    {
      icon: Users,
      value: "10,000+",
      marathiValue: "१०,०००+",
      label: "Biodatas Created",
      subLabel: "यशस्वी विवाह बायोडाटा",
      color: "text-wine-800",
      bgColor: "bg-wine-100",
    },
    {
      icon: Layout,
      value: "12+",
      marathiValue: "१२+",
      label: "Original Luxury Designs",
      subLabel: "शाही व आधुनिक डिझाइन्स",
      color: "text-gold-700",
      bgColor: "bg-gold-100",
    },
    {
      icon: Globe2,
      value: "6",
      marathiValue: "६",
      label: "Indian Languages",
      subLabel: "मराठी, हिंदी व इतर भाषा",
      color: "text-emerald-800",
      bgColor: "bg-emerald-100",
    },
    {
      icon: Star,
      value: "4.9 / 5",
      marathiValue: "४.९ / ५",
      label: "User Satisfaction Rating",
      subLabel: "कुटुंबांचा विश्वास व पसंती",
      color: "text-amber-700",
      bgColor: "bg-amber-100",
    },
  ];

  return (
    <section className="bg-white py-12 border-b border-[#E0D5C3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3 p-4 rounded-xl bg-[#FCFAF6] border border-[#EFE8DC] hover:border-gold-300 transition-all hover:shadow-card-soft"
              >
                <div
                  className={`w-12 h-12 rounded-xl ${stat.bgColor} flex items-center justify-center shrink-0 shadow-xs`}
                >
                  <Icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-extrabold text-wine-950 font-serif">
                    {stat.value}
                  </p>
                  <p className="text-xs sm:text-sm font-bold text-charcoal-800 mt-0.5 font-serifDevanagari">
                    {stat.subLabel}
                  </p>
                  <p className="text-[11px] text-charcoal-500">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
