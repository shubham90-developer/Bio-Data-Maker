"use client";

import React from "react";
import { useBiodataStore } from "@/store/useBiodataStore";
import { PhotoUploader } from "./PhotoUploader";
import { GaneshIcon, OmIcon, SwastikIcon, KalashIcon, LotusIcon } from "../common/AuspiciousSymbols";
import { LanguageCode } from "@/types/biodata";

export const Step1Profile: React.FC = () => {
  const { data, setField, setPhoto, setLanguage } = useBiodataStore();
  const { profile } = data;

  const deitySymbols = [
    { id: "ganesh", label: "Shri Ganesh", icon: GaneshIcon },
    { id: "om", label: "Omkar", icon: OmIcon },
    { id: "swastik", label: "Swastik", icon: SwastikIcon },
    { id: "kalash", label: "Kalash", icon: KalashIcon },
    { id: "lotus", label: "Lotus", icon: LotusIcon },
    { id: "none", label: "No Symbol", icon: null },
  ];

  return (
    <div className="space-y-6">
      {/* 1. Language & Document Title */}
      <div className="bg-white p-6 rounded-2xl border border-cream-border shadow-card-soft space-y-4">
        <h3 className="text-base font-bold text-wine-950 font-serif">
          1. Document Language & Header Title
        </h3>
        <p className="text-xs text-charcoal-500">
          Select the primary language for your biodata. Field headers will adapt accordingly.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-charcoal-700 mb-1">
              Language / भाषा
            </label>
            <select
              value={profile.language}
              onChange={(e) => setLanguage(e.target.value as LanguageCode)}
              className="w-full p-2.5 text-xs sm:text-sm rounded-xl border border-cream-border bg-cream-surface/40 focus:border-wine-700 focus:outline-hidden"
            >
              <option value="mr">मराठी (Marathi)</option>
              <option value="en">English</option>
              <option value="hi">हिंदी (Hindi)</option>
              <option value="gu">ગુજરાતી (Gujarati)</option>
              <option value="te">తెలుగు (Telugu)</option>
              <option value="bn">বাংলা (Bengali)</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-charcoal-700 mb-1">
              Biodata Title / शीर्षक
            </label>
            <input
              type="text"
              value={profile.biodataTitle}
              onChange={(e) => setField("profile", "biodataTitle", e.target.value)}
              placeholder="उदा. बायोडाटा / MARRIAGE BIODATA / परिचय पत्र"
              className="w-full p-2.5 text-xs sm:text-sm rounded-xl border border-cream-border bg-cream-surface/40 focus:border-wine-700 focus:outline-hidden"
            />
          </div>
        </div>
      </div>

      {/* 2. Photo Upload */}
      <div className="bg-white p-6 rounded-2xl border border-cream-border shadow-card-soft space-y-4">
        <h3 className="text-base font-bold text-wine-950 font-serif">
          2. Candidate Photograph
        </h3>
        <p className="text-xs text-charcoal-500">
          Upload a high-resolution portrait. You can frame it as circular, rounded, or square.
        </p>

        <PhotoUploader
          photoUrl={profile.photoUrl}
          photoShape={profile.photoShape}
          onPhotoChange={(url) => setPhoto(url)}
          onShapeChange={(shape) => setField("profile", "photoShape", shape)}
        />
      </div>

      {/* 3. Auspicious Deity Header */}
      <div className="bg-white p-6 rounded-2xl border border-cream-border shadow-card-soft space-y-4">
        <h3 className="text-base font-bold text-wine-950 font-serif">
          3. Auspicious Deity & Religious Invocation (कुलदैवत / स्मरण)
        </h3>
        <p className="text-xs text-charcoal-500">
          Choose an auspicious header symbol and deity salutation (optional).
        </p>

        {/* Symbol Selector */}
        <div>
          <label className="block text-xs font-semibold text-charcoal-700 mb-2">
            Select Symbol / धार्मिक चिन्ह
          </label>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2.5">
            {deitySymbols.map((item) => {
              const isSelected = profile.deitySymbol === item.id;
              const IconComp = item.icon;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setField("profile", "deitySymbol", item.id as any)}
                  className={`p-3 rounded-xl border text-center transition-all flex flex-col items-center justify-center gap-1.5 cursor-pointer ${
                    isSelected
                      ? "bg-wine-50 text-wine-900 border-wine-700 shadow-xs font-bold"
                      : "bg-cream-surface/30 text-charcoal-600 border-cream-border hover:bg-cream-surface"
                  }`}
                >
                  {IconComp ? (
                    <IconComp size={24} color={isSelected ? "#722F37" : "#8A735C"} />
                  ) : (
                    <span className="text-xs text-charcoal-400 font-medium">None</span>
                  )}
                  <span className="text-[10px] leading-tight block">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Deity Inscription Text */}
        <div>
          <label className="block text-xs font-semibold text-charcoal-700 mb-1">
            Deity Name Inscription / देवतेचे नाव
          </label>
          <input
            type="text"
            value={profile.deityName}
            onChange={(e) => setField("profile", "deityName", e.target.value)}
            placeholder="उदा. ॥ श्री गणेशाय नमः ॥ किंवा ॥ श्री कुलस्वामिनी प्रसन्न ॥"
            className="w-full p-2.5 text-xs sm:text-sm rounded-xl border border-cream-border bg-cream-surface/40 focus:border-wine-700 focus:outline-hidden"
          />
        </div>
      </div>
    </div>
  );
};
