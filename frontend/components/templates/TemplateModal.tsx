"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { TemplateMeta } from "@/types/biodata";
import { useBiodataStore } from "@/store/useBiodataStore";
import { BiodataRenderer } from "./BiodataRenderer";
import { X, Check, ArrowRight, Sparkles } from "lucide-react";

interface TemplateModalProps {
  template: TemplateMeta | null;
  isOpen: boolean;
  onClose: () => void;
}

export const TemplateModal: React.FC<TemplateModalProps> = ({
  template,
  isOpen,
  onClose,
}) => {
  const router = useRouter();
  const { data, setTemplate } = useBiodataStore();
  const previewContainerRef = useRef<HTMLDivElement>(null);
  const [modalScale, setModalScale] = useState<number>(0.75);

  useEffect(() => {
    const el = previewContainerRef.current;
    if (!el) return;

    const computeScale = () => {
      const availableWidth = el.clientWidth - 32;
      const nextScale = Math.min(0.85, availableWidth / 794);
      setModalScale(nextScale > 0.3 ? nextScale : 0.75);
    };

    computeScale();
    const resizeObserver = new ResizeObserver(computeScale);
    resizeObserver.observe(el);

    return () => resizeObserver.disconnect();
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !template) return null;

  const handleUseTemplate = () => {
    setTemplate(template.id);
    onClose();
    router.push("/create-biodata");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-5xl max-h-[92vh] bg-[#FAF7F2] rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-[#E0D5C3]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-30 p-2 bg-white/90 hover:bg-white text-charcoal-700 hover:text-wine-700 rounded-full shadow-md transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left: Scrollable Document Preview */}
        <div
          ref={previewContainerRef}
          className="flex-1 bg-[#ECE5D8] overflow-y-auto p-3 sm:p-6 flex justify-center items-start min-h-[400px]"
        >
          <div
            style={{
              width: 794 * modalScale,
              height: 1123 * modalScale,
            }}
          >
            <div
              className="origin-top-left shadow-2xl transition-transform duration-200"
              style={{
                width: 794,
                height: 1123,
                transform: `scale(${modalScale})`,
              }}
            >
              <BiodataRenderer
                data={data}
                overrideTemplateId={template.id}
                showWatermark={false}
              />
            </div>
          </div>
        </div>

        {/* Right: Template Details & CTA */}
        <div className="w-full md:w-80 lg:w-96 p-6 sm:p-8 flex flex-col justify-between bg-white border-t md:border-t-0 md:border-l border-[#E0D5C3]">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-gold-100 text-gold-800 border border-gold-300">
                {template.category}
              </span>
              {template.isPopular && (
                <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-wine-100 text-wine-800 border border-wine-300 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> Popular
                </span>
              )}
            </div>

            <h2 className="text-2xl font-bold text-wine-900 font-serif">
              {template.name}
            </h2>
            <p className="text-base text-gold-700 font-serifDevanagari font-semibold mt-0.5">
              {template.marathiName}
            </p>

            <p className="text-sm text-charcoal-600 mt-4 leading-relaxed">
              {template.description}
            </p>

            {/* Tags */}
            <div className="mt-5">
              <span className="text-xs font-semibold text-charcoal-500 uppercase tracking-wider block mb-2">
                Features & Aesthetics
              </span>
              <div className="flex flex-wrap gap-1.5">
                {template.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 bg-cream-surface text-charcoal-700 rounded-md border border-cream-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Color Palette Indicators */}
            <div className="mt-5 pt-4 border-t border-[#EFE8DC]">
              <span className="text-xs font-semibold text-charcoal-500 uppercase tracking-wider block mb-2">
                Color Harmonization
              </span>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <div
                    className="w-5 h-5 rounded-full border border-black/10 shadow-xs"
                    style={{ backgroundColor: template.primaryColor }}
                  />
                  <span className="text-xs text-charcoal-600">Primary</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div
                    className="w-5 h-5 rounded-full border border-black/10 shadow-xs"
                    style={{ backgroundColor: template.secondaryColor }}
                  />
                  <span className="text-xs text-charcoal-600">Accent</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 pt-4 border-t border-[#EFE8DC] space-y-2.5">
            <button
              onClick={handleUseTemplate}
              className="w-full py-3 px-5 rounded-xl font-semibold text-white bg-gradient-to-r from-wine-700 to-wine-900 hover:from-wine-800 hover:to-wine-950 shadow-royal hover:shadow-royal-lg transition-all flex items-center justify-center gap-2 group cursor-pointer"
            >
              <Check className="w-5 h-5 text-gold-300" />
              <span>Use This Template</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={onClose}
              className="w-full py-2.5 px-4 text-xs font-medium text-charcoal-500 hover:text-charcoal-800 transition-colors text-center"
            >
              Cancel & Continue Browsing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
