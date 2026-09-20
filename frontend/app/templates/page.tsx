"use client";

import React, { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { TEMPLATES } from "@/data/templates";
import { TemplateMeta, TemplateCategory } from "@/types/biodata";
import { useBiodataStore } from "@/store/useBiodataStore";
import { TemplateModal } from "@/components/templates/TemplateModal";
import {
  Search,
  Filter,
  ArrowUpDown,
  Heart,
  Eye,
  Check,
  Sparkles,
  RotateCcw,
} from "lucide-react";

export default function TemplatesPage() {
  const router = useRouter();
  const { setTemplate } = useBiodataStore();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<TemplateCategory>("All");
  const [sortBy, setSortBy] = useState<"popular" | "newest" | "name">("popular");
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
    "Modern",
    "Minimal",
    "Floral",
    "Traditional",
  ];

  const filteredTemplates = useMemo(() => {
    let list = TEMPLATES.filter((tpl) => {
      const matchesCat =
        selectedCategory === "All" || tpl.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        tpl.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tpl.marathiName.includes(searchQuery) ||
        tpl.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCat && matchesSearch;
    });

    if (sortBy === "popular") {
      list.sort((a, b) => (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0));
    } else if (sortBy === "newest") {
      list.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    } else if (sortBy === "name") {
      list.sort((a, b) => a.name.localeCompare(b.name));
    }

    return list;
  }, [selectedCategory, searchQuery, sortBy]);

  const toggleFavorite = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleUseTemplate = (id: any) => {
    setTemplate(id);
    router.push("/create-biodata");
  };

  return (
    <div className="min-h-screen bg-[#FCFAF6] py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-wine-100 border border-wine-200 text-wine-900 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            <span>15 Original Designs • सर्व टेम्पलेट्स</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serifDevanagari text-wine-950">
            Choose Your Perfect Biodata Design
          </h1>
          <p className="text-base text-gold-700 font-semibold font-serifDevanagari mt-1">
            तुमच्या आवडीचे सुंदर बायोडाटा टेम्पलेट निवडा
          </p>
          <p className="text-sm text-charcoal-600 mt-3 leading-relaxed">
            All designs seamlessly support Marathi and English, with customizable colors, photo frames, and astrology sections. Click preview to see full live A4 layout.
          </p>
        </div>

        {/* Filter, Search & Sort Bar */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl border border-cream-border shadow-card-soft mb-10 space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-charcoal-400" />
              <input
                type="text"
                placeholder="Search templates, styles, tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm rounded-xl border border-cream-border focus:border-wine-700 focus:outline-hidden bg-cream-surface/50"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-charcoal-400 hover:text-charcoal-700"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 self-end md:self-auto">
              <span className="text-xs font-medium text-charcoal-500 flex items-center gap-1">
                <ArrowUpDown className="w-3.5 h-3.5" /> Sort:
              </span>
              <select
                value={sortBy}
                onChange={(e: any) => setSortBy(e.target.value)}
                className="text-xs sm:text-sm py-2 px-3 rounded-xl border border-cream-border bg-white text-charcoal-700 focus:border-wine-700 focus:outline-hidden"
              >
                <option value="popular">Most Popular</option>
                <option value="newest">Newest Designs</option>
                <option value="name">Alphabetical</option>
              </select>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-cream-border">
            <span className="text-xs font-semibold text-charcoal-500 mr-2 flex items-center gap-1">
              <Filter className="w-3 h-3" /> Category:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? "bg-wine-800 text-white font-bold shadow-xs"
                    : "bg-cream-surface text-charcoal-700 hover:bg-cream-muted border border-cream-border"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results Counter & Empty State */}
        {filteredTemplates.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-cream-border p-8">
            <p className="text-lg font-bold text-wine-950">No templates found</p>
            <p className="text-xs text-charcoal-500 mt-1">
              Try adjusting your search terms or clearing the selected category.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="mt-4 px-4 py-2 bg-wine-800 text-white text-xs font-semibold rounded-lg inline-flex items-center gap-2"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {filteredTemplates.map((tpl) => {
              const isFav = !!favorites[tpl.id];
              return (
                <div
                  key={tpl.id}
                  className="group bg-white rounded-2xl border border-cream-border hover:border-gold-400 shadow-card-soft hover:shadow-royal transition-all duration-300 overflow-hidden flex flex-col justify-between"
                >
                  {/* Template Visual Thumbnail */}
                  <div
                    className="relative h-64 w-full p-4 flex items-center justify-center overflow-hidden cursor-pointer"
                    style={{ background: tpl.thumbnailPlaceholder }}
                    onClick={() => setPreviewTemplate(tpl)}
                  >
                    {/* Simulated A4 Mini Page */}
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

                    {/* Favorite Button */}
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

                    {/* Category / Badges */}
                    <div className="absolute top-3 left-3 flex flex-col gap-1">
                      <span className="px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-xs text-white text-[10px] font-semibold tracking-wider uppercase">
                        {tpl.category}
                      </span>
                      {tpl.isNew && (
                        <span className="px-2 py-0.5 rounded-full bg-emerald-600 text-white text-[9px] font-bold uppercase">
                          New
                        </span>
                      )}
                    </div>

                    {/* Hover Prompt */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-4 py-2 bg-white text-wine-900 rounded-lg text-xs font-bold shadow-md flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                        <Eye className="w-3.5 h-3.5" /> Full Screen Preview
                      </span>
                    </div>
                  </div>

                  {/* Card Footer Details & Buttons */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
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

                      <p className="text-xs text-charcoal-500 line-clamp-2 mt-2 leading-relaxed">
                        {tpl.description}
                      </p>

                      <div className="flex flex-wrap gap-1 mt-3">
                        {tpl.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] px-2 py-0.5 bg-cream-surface rounded text-charcoal-600 border border-cream-border"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-2 gap-2 mt-5 pt-3 border-t border-cream-border">
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
                        <span>Use Design</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Interactive Modal */}
      <TemplateModal
        template={previewTemplate}
        isOpen={!!previewTemplate}
        onClose={() => setPreviewTemplate(null)}
      />
    </div>
  );
}
