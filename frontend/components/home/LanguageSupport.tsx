"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useBiodataStore } from "@/store/useBiodataStore";
import { LanguageCode } from "@/types/biodata";
import { Globe, Check, ArrowRight } from "lucide-react";

export const LanguageSupport: React.FC = () => {
  const { data, setLanguage } = useBiodataStore();
  const currentLang = data.profile.language || "mr";

  const languages: {
    code: LanguageCode;
    name: string;
    native: string;
    deitySample: string;
    sampleFields: { label: string; val: string }[];
  }[] = [
    {
      code: "mr",
      name: "Marathi",
      native: "मराठी",
      deitySample: "॥ श्री गणेशाय नमः ॥",
      sampleFields: [
        { label: "पूर्ण नाव", val: "अनिकेत सुरेश कुलकर्णी" },
        { label: "शिक्षण", val: "B.Tech (Computer Engineering)" },
        { label: "व्यवसाय", val: "Senior Software Engineer" },
        { label: "मूळ गाव", val: "कराड, जि. सातारा" },
      ],
    },
    {
      code: "en",
      name: "English",
      native: "English",
      deitySample: "|| Shree Ganeshaya Namaha ||",
      sampleFields: [
        { label: "Full Name", val: "Aniket Suresh Kulkarni" },
        { label: "Education", val: "B.Tech (Computer Engineering)" },
        { label: "Occupation", val: "Senior Software Engineer" },
        { label: "Native Place", val: "Karad, Dist. Satara" },
      ],
    },
    {
      code: "hi",
      name: "Hindi",
      native: "हिंदी",
      deitySample: "॥ श्री गणेशाय नमः ॥",
      sampleFields: [
        { label: "पूरा नाम", val: "अनिकेत सुरेश कुलकर्णी" },
        { label: "शिक्षा", val: "बी.टेक (कंप्यूटर साइंस)" },
        { label: "व्यवसाय", val: "सीनियर सॉफ्टवेयर इंजीनियर" },
        { label: "मूल निवास", val: "सतारा, महाराष्ट्र" },
      ],
    },
    {
      code: "gu",
      name: "Gujarati",
      native: "ગુજરાતી",
      deitySample: "॥ શ્રી ગણેશાય નમઃ ॥",
      sampleFields: [
        { label: "પૂરું નામ", val: "અનિકેત સુરેશ કુલકર્ણી" },
        { label: "શિક્ષણ", val: "બી.ટેક (કોમ્પ્યુટર સાયન્સ)" },
        { label: "વ્યવસાય", val: "સીનિયર સોફ્ટવેર એન્જિનિયર" },
        { label: "મૂળ વતન", val: "સતારા, મહારાષ્ટ્ર" },
      ],
    },
    {
      code: "te",
      name: "Telugu",
      native: "తెలుగు",
      deitySample: "|| శ్రీ విఘ్నేశ్వరాయ నమః ||",
      sampleFields: [
        { label: "పూర్తి పేరు", val: "అనికేత్ సురేష్ కులకర్ణి" },
        { label: "చదువు", val: "బి.టెక్ (కంప్యూటర్ సైన్స్)" },
        { label: "ఉద్యోగం", val: "సీనియర్ సాఫ్ట్‌వేర్ ఇంజనీర్" },
        { label: "స్వగ్రామం", val: "సతారా, మహారాష్ట్ర" },
      ],
    },
    {
      code: "bn",
      name: "Bengali",
      native: "বাংলা",
      deitySample: "|| শ্রী শ্রী গণেশায় নমঃ ||",
      sampleFields: [
        { label: "পুরো নাম", val: "অনিকেত সুরেশ কুলকার্নি" },
        { label: "শিক্ষাগত যোগ্যতা", val: "বি.টেক (কম্পিউটার সায়েন্স)" },
        { label: "পেশা", val: "সিনিয়র সফটওয়্যার ইঞ্জিনিয়ার" },
        { label: "আদি নিবাস", val: "সাতারা, মহারাষ্ট্র" },
      ],
    },
  ];

  const activeLangData = languages.find((l) => l.code === currentLang) || languages[0];

  return (
    <section className="py-16 lg:py-24 bg-[#FAF7F2] border-b border-[#E0D5C3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Intro & Selector */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-100 border border-gold-300 text-gold-800 text-xs font-semibold">
              <Globe className="w-3.5 h-3.5" />
              <span>Multi-Lingual Excellence</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold font-serifDevanagari text-wine-950">
              तुमच्या मातृभाषेत अभिमानाने बायोडाटा बनवा
            </h2>

            <p className="text-charcoal-600 text-sm sm:text-base leading-relaxed">
              VivahPatrika provides dedicated typography fine-tuning for regional Indian languages. Choose your preferred language to preview how your details look instantaneously.
            </p>

            {/* Language Selection Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              {languages.map((l) => {
                const isSelected = currentLang === l.code;
                return (
                  <button
                    key={l.code}
                    onClick={() => setLanguage(l.code)}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      isSelected
                        ? "bg-wine-800 text-white border-wine-800 shadow-royal font-semibold"
                        : "bg-white text-charcoal-800 border-cream-border hover:bg-cream-surface"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-base font-bold">{l.native}</span>
                      {isSelected && <Check className="w-4 h-4 text-gold-300" />}
                    </div>
                    <span
                      className={`text-xs block mt-0.5 ${
                        isSelected ? "text-white/80" : "text-charcoal-500"
                      }`}
                    >
                      {l.name}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="pt-2">
              <Link
                href="/create-biodata"
                className="inline-flex items-center gap-2 text-sm font-semibold text-wine-800 hover:text-wine-950 underline underline-offset-4"
              >
                <span>Continue with {activeLangData.native} Biodata</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Live Interactive Card Preview */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-[#D4AF37]/50 shadow-royal relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-200/30 rounded-full blur-2xl pointer-events-none" />

              <div className="text-center pb-4 border-b border-[#E7D6A7]">
                <p className="text-sm font-bold text-wine-800 font-serifDevanagari tracking-wider">
                  {activeLangData.deitySample}
                </p>
                <h3 className="text-lg font-bold text-gold-700 uppercase tracking-widest mt-1">
                  {activeLangData.native} SAMPLE PREVIEW
                </h3>
              </div>

              <div className="mt-6 space-y-3">
                {activeLangData.sampleFields.map((field, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between py-2 border-b border-[#F5EFEB] text-sm"
                  >
                    <span className="font-semibold text-charcoal-600">
                      {field.label}
                    </span>
                    <span className="font-medium text-wine-950">
                      {field.val}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-[#E7D6A7] flex items-center justify-between text-xs text-charcoal-500">
                <span>✓ Verified regional spellings</span>
                <span>✓ Clean unicode font rendering</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
