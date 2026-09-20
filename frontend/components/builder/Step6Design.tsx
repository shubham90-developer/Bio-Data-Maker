"use client";

import React from "react";
import { useBiodataStore } from "@/store/useBiodataStore";
import { TEMPLATES } from "@/data/templates";
import { TemplateId } from "@/types/biodata";
import { Check, Sparkles, Sliders } from "lucide-react";

export const Step6Design: React.FC = () => {
  const { data, setTemplate, setField } = useBiodataStore();
  const { design } = data;

  const accentColors = [
    { name: "Royal Maroon", hex: "#722F37" },
    { name: "Saffron Gold", hex: "#9A2617" },
    { name: "Classic Burgundy", hex: "#800020" },
    { name: "Paithani Green", hex: "#1B4D3E" },
    { name: "Sapphire Blue", hex: "#1B2A4A" },
    { name: "Rose Blush", hex: "#8C3B52" },
    { name: "Antique Gold", hex: "#B08A41" },
    { name: "Charcoal Minimal", hex: "#2B313D" },
  ];

  return (
    <div className="space-y-6">
      {/* 1. Template Selector */}
      <div className="bg-white p-6 rounded-2xl border border-cream-border shadow-card-soft space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold text-wine-950 font-serif">
              1. Choose Biodata Template (१५ डिझाइन्स)
            </h3>
            <p className="text-xs text-charcoal-500">
              Select your design theme. You can change this anytime without losing entered data.
            </p>
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 bg-gold-100 text-gold-800 rounded-full border border-gold-300">
            {TEMPLATES.length} Available
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 max-h-96 overflow-y-auto pr-1">
          {TEMPLATES.map((tpl) => {
            const isSelected = design.templateId === tpl.id;
            return (
              <button
                key={tpl.id}
                type="button"
                onClick={() => setTemplate(tpl.id as TemplateId)}
                className={`p-3 rounded-xl border text-left transition-all relative flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? "border-wine-800 bg-wine-50/50 shadow-md ring-2 ring-wine-800"
                    : "border-cream-border bg-white hover:bg-cream-surface hover:border-gold-300"
                }`}
              >
                {/* Mini Color Strip */}
                <div
                  className="h-12 w-full rounded-lg mb-2 flex items-center justify-center text-white text-[10px] font-bold"
                  style={{ background: tpl.thumbnailPlaceholder }}
                >
                  {isSelected && (
                    <span className="w-5 h-5 rounded-full bg-white text-wine-900 flex items-center justify-center shadow-xs">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                  )}
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-bold text-wine-950 truncate">
                      {tpl.name}
                    </p>
                  </div>
                  <p className="text-[10px] font-semibold text-gold-700 font-serifDevanagari">
                    {tpl.marathiName}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Color Accent Palette */}
      <div className="bg-white p-6 rounded-2xl border border-cream-border shadow-card-soft space-y-4">
        <h3 className="text-base font-bold text-wine-950 font-serif">
          2. Primary Accent Color (रंग संगती)
        </h3>
        <p className="text-xs text-charcoal-500">
          Personalize the header, border accents, and section separators.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          {accentColors.map((col) => {
            const isSelected = design.primaryAccent === col.hex;
            return (
              <button
                key={col.hex}
                type="button"
                onClick={() => setField("design", "primaryAccent", col.hex)}
                className={`px-3 py-1.5 rounded-xl border text-xs font-medium flex items-center gap-2 transition-all cursor-pointer ${
                  isSelected
                    ? "border-wine-800 bg-wine-50 text-wine-900 font-bold ring-1 ring-wine-800"
                    : "border-cream-border bg-cream-surface/40 text-charcoal-700 hover:bg-cream-surface"
                }`}
              >
                <div
                  className="w-4 h-4 rounded-full border border-black/10 shadow-xs"
                  style={{ backgroundColor: col.hex }}
                />
                <span>{col.name}</span>
                {isSelected && <Check className="w-3.5 h-3.5 text-wine-700" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Section Visibility & Customization Toggles */}
      <div className="bg-white p-6 rounded-2xl border border-cream-border shadow-card-soft space-y-4">
        <h3 className="text-base font-bold text-wine-950 font-serif">
          3. Section Visibility & Layout Options (विभाग नियंत्रण)
        </h3>
        <p className="text-xs text-charcoal-500">
          Turn specific sections on or off to match your family's preferences.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <label className="flex items-center justify-between p-3.5 rounded-xl border border-cream-border bg-cream-surface/30 cursor-pointer hover:bg-cream-surface">
            <div>
              <span className="text-xs font-bold text-charcoal-900 block">
                Show Astrology / Horoscope (पत्रिका)
              </span>
              <span className="text-[11px] text-charcoal-500">
                Display Rashi, Nakshatra, Charan, Gan, Nadi, Manglik
              </span>
            </div>
            <input
              type="checkbox"
              checked={design.showAstrology}
              onChange={(e) => setField("design", "showAstrology", e.target.checked)}
              className="w-4 h-4 text-wine-800 rounded focus:ring-wine-700 cursor-pointer"
            />
          </label>

          <label className="flex items-center justify-between p-3.5 rounded-xl border border-cream-border bg-cream-surface/30 cursor-pointer hover:bg-cream-surface">
            <div>
              <span className="text-xs font-bold text-charcoal-900 block">
                Show Partner Expectations (अपेक्षा)
              </span>
              <span className="text-[11px] text-charcoal-500">
                Display partner criteria & age/height preferences
              </span>
            </div>
            <input
              type="checkbox"
              checked={design.showExpectations}
              onChange={(e) => setField("design", "showExpectations", e.target.checked)}
              className="w-4 h-4 text-wine-800 rounded focus:ring-wine-700 cursor-pointer"
            />
          </label>

          <label className="flex items-center justify-between p-3.5 rounded-xl border border-cream-border bg-cream-surface/30 cursor-pointer hover:bg-cream-surface">
            <div>
              <span className="text-xs font-bold text-charcoal-900 block">
                Show Photograph (फोटो)
              </span>
              <span className="text-[11px] text-charcoal-500">
                Display candidate portrait on the biodata
              </span>
            </div>
            <input
              type="checkbox"
              checked={design.showPhoto}
              onChange={(e) => setField("design", "showPhoto", e.target.checked)}
              className="w-4 h-4 text-wine-800 rounded focus:ring-wine-700 cursor-pointer"
            />
          </label>

          <label className="flex items-center justify-between p-3.5 rounded-xl border border-cream-border bg-cream-surface/30 cursor-pointer hover:bg-cream-surface">
            <div>
              <span className="text-xs font-bold text-charcoal-900 block">
                Watermark in Preview
              </span>
              <span className="text-[11px] text-charcoal-500">
                Subtle protection mark (removed during checkout download)
              </span>
            </div>
            <input
              type="checkbox"
              checked={design.showWatermark}
              onChange={(e) => setField("design", "showWatermark", e.target.checked)}
              className="w-4 h-4 text-wine-800 rounded focus:ring-wine-700 cursor-pointer"
            />
          </label>
        </div>
      </div>
    </div>
  );
};
