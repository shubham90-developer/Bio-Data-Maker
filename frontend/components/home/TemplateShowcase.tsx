"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { TEMPLATES } from "@/data/templates";
import { TemplateMeta, TemplateCategory } from "@/types/biodata";
import { useBiodataStore } from "@/store/useBiodataStore";
import { TemplateModal } from "../templates/TemplateModal";
import { Heart, Eye, ArrowRight, Sparkles, Check } from "lucide-react";

export const TemplateShowcase: React.FC = () => {
  const router = useRouter();
  const { setTemplate } = useBiodataStore();
  const [selectedCategory, setSelectedCategory] = useState<TemplateCategory>("All");
  const [favorites, setFavorites] = useState<Record<string, boolean>>({
    "royal-maroon": true,
    "maharashtrian-heritage": true,
  });
  const [previewTemplate, setPreviewTemplate] = useState<TemplateMeta | null>(null);

  const categories: TemplateCategory[] = [
    "All",
    "Royal",
    "Marathi",
    "Classic",
    "Traditional",
    "Modern",
    "Minimal",
    "Floral",
  ];

  const filteredTemplates = TEMPLATES.filter((t) =>
    selectedCategory === "All" ? true : t.category === selectedCategory
  ).slice(0, 8); // Showcase first 8 on the homepage

  const toggleFavorite = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleUseTemplate = (id: any) => {
    setTemplate(id);
    router.push("/create-biodata");
  };

  return (
    <section className="py-16 lg:py-24 bg-[#FCFAF6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-100/80 border border-gold-300 text-gold-800 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>१५ मनमोहक डिझाइन्स • 15 Original Templates</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serifDevanagari text-wine-950">
            तुमच्या आवडीनुसार सर्वोत्तम डिझाइन निवडा
          </h2>
          <p className="text-charcoal-600 text-sm sm:text-base mt-3 leading-relaxed">
            प्रत्येक टेम्पलेट पारंपरिक संस्कृती आणि आधुनिकतेचा समतोल साधून विशेष तयार करण्यात आले आहे. एका क्लिकवर टेम्पलेट बदला आणि थेट डाऊनलोड करा.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  selectedCategory === cat
                    ? "bg-wine-800 text-white shadow-md font-semibold"
                    : "bg-white text-charcoal-700 hover:bg-cream-surface border border-cream-border"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Template Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredTemplates.map((tpl) => {
            const isFav = !!favorites[tpl.id];
            return (
              <div
                key={tpl.id}
                className="group relative bg-white rounded-2xl border border-cream-border hover:border-gold-400/80 shadow-sm hover:shadow-royal-lg transition-all duration-300 overflow-hidden flex flex-col"
              >
                {/* Template Mockup Card Graphic */}
                <div
                  className="relative h-64 w-full p-4 flex items-center justify-center overflow-hidden cursor-pointer"
                  style={{ background: tpl.thumbnailPlaceholder }}
                  onClick={() => setPreviewTemplate(tpl)}
                >
                  {/* Subtle Inner Document Simulator */}
                  <div className="w-40 h-52 bg-[#FCFAF6] rounded-md shadow-lg p-2.5 flex flex-col justify-between border border-black/10 group-hover:scale-105 transition-transform duration-300">
                    <div className="text-center">
                      <div
                        className="w-4 h-4 mx-auto rounded-full mb-1"
                        style={{ backgroundColor: tpl.primaryColor }}
                      />
                      <div
                        className="h-1.5 w-16 mx-auto rounded"
                        style={{ backgroundColor: tpl.primaryColor }}
                      />
                      <div className="h-1 w-24 bg-charcoal-200 mx-auto mt-1 rounded" />
                    </div>

                    <div className="space-y-1 my-auto">
                      <div className="h-1 w-full bg-charcoal-200 rounded" />
                      <div className="h-1 w-5/6 bg-charcoal-200 rounded" />
                      <div className="h-1 w-4/6 bg-charcoal-200 rounded" />
                    </div>

                    <div
                      className="h-2 w-full rounded text-[6px] text-center text-white font-bold flex items-center justify-center"
                      style={{ backgroundColor: tpl.primaryColor }}
                    >
                      {tpl.name}
                    </div>
                  </div>

                  {/* Favorite Toggle Button */}
                  <button
                    onClick={(e) => toggleFavorite(tpl.id, e)}
                    aria-label={`Favorite ${tpl.name}`}
                    className="absolute top-3 right-3 p-2 rounded-full bg-white/90 hover:bg-white text-charcoal-600 hover:text-wine-700 shadow-sm transition-all"
                  >
                    <Heart
                      className={`w-4 h-4 ${
                        isFav ? "fill-wine-600 text-wine-600" : ""
                      }`}
                    />
                  </button>

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-xs text-white text-[10px] font-semibold tracking-wider uppercase">
                    {tpl.category}
                  </div>

                  {/* Hover Overlay with Preview Icon */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <span className="px-4 py-2 bg-white text-wine-900 rounded-lg text-xs font-bold shadow-md flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <Eye className="w-3.5 h-3.5" /> Quick Preview
                    </span>
                  </div>
                </div>

                {/* Card Info & Actions */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-wine-950 text-base font-serif">
                        {tpl.name}
                      </h3>
                      {tpl.isPopular && (
                        <span className="text-[10px] font-bold text-wine-700 bg-wine-50 px-2 py-0.5 rounded border border-wine-200">
                          Popular
                        </span>
                      )}
                    </div>
                    <p className="text-xs font-semibold text-gold-700 font-serifDevanagari mt-0.5">
                      {tpl.marathiName}
                    </p>
                    <p className="text-xs text-charcoal-500 line-clamp-2 mt-1.5">
                      {tpl.description}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-cream-border">
                    <button
                      onClick={() => setPreviewTemplate(tpl)}
                      className="w-full py-2 px-3 text-xs font-semibold text-wine-900 bg-cream-surface hover:bg-cream-muted rounded-lg transition-colors flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Preview</span>
                    </button>
                    <button
                      onClick={() => handleUseTemplate(tpl.id)}
                      className="w-full py-2 px-3 text-xs font-semibold text-white bg-wine-800 hover:bg-wine-900 rounded-lg transition-colors flex items-center justify-center gap-1 shadow-xs cursor-pointer"
                    >
                      <Check className="w-3.5 h-3.5 text-gold-300" />
                      <span>Use</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/templates"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-wine-900 bg-white hover:bg-cream-surface border-2 border-wine-300 shadow-sm transition-all hover:scale-102"
          >
            <span>View All 15 Templates & Categories</span>
            <ArrowRight className="w-4 h-4 text-wine-700" />
          </Link>
        </div>
      </div>

      {/* Full Preview Modal */}
      <TemplateModal
        template={previewTemplate}
        isOpen={!!previewTemplate}
        onClose={() => setPreviewTemplate(null)}
      />
    </section>
  );
};
