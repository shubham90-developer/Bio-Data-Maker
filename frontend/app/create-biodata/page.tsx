"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useBiodataStore } from "@/store/useBiodataStore";
import { StepIndicator } from "@/components/builder/StepIndicator";
import { DraftControls } from "@/components/builder/DraftControls";
import { Step1Profile } from "@/components/builder/Step1Profile";
import { Step2Personal } from "@/components/builder/Step2Personal";
import { Step3Education } from "@/components/builder/Step3Education";
import { Step4Family } from "@/components/builder/Step4Family";
import { Step5Expectations } from "@/components/builder/Step5Expectations";
import { Step6Design } from "@/components/builder/Step6Design";
import { Step7Preview } from "@/components/builder/Step7Preview";
import { ArrowLeft, ArrowRight, Check, Eye, Sparkles } from "lucide-react";

export default function CreateBiodataPage() {
  const router = useRouter();
  const { currentStep, setCurrentStep, nextStep, previousStep, data } = useBiodataStore();

  const handleNext = () => {
    if (currentStep < 7) {
      nextStep();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push("/preview");
    }
  };

  const handlePrev = () => {
    previousStep();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1Profile />;
      case 2:
        return <Step2Personal />;
      case 3:
        return <Step3Education />;
      case 4:
        return <Step4Family />;
      case 5:
        return <Step5Expectations />;
      case 6:
        return <Step6Design />;
      case 7:
        return <Step7Preview />;
      default:
        return <Step1Profile />;
    }
  };

  return (
    <div className="min-h-screen bg-[#FCFAF6] py-8 lg:py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Page Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-100 border border-gold-300 text-gold-800 text-xs font-semibold mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Interactive Biodata Builder</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold font-serifDevanagari text-wine-950">
              नवीन बायोडाटा तयार करा
            </h1>
          </div>

          <DraftControls />
        </div>

        {/* Stepper Navigation */}
        <StepIndicator
          currentStep={currentStep}
          onSelectStep={(s) => setCurrentStep(s)}
        />

        {/* Active Step Content */}
        <div className="mt-6">{renderCurrentStep()}</div>

        {/* Bottom Form Navigation Bar */}
        <div className="bg-white p-4 rounded-2xl border border-cream-border shadow-card-soft flex items-center justify-between gap-4">
          {currentStep > 1 ? (
            <button
              type="button"
              onClick={handlePrev}
              className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-charcoal-700 bg-cream-surface hover:bg-cream-muted border border-cream-border flex items-center gap-2 transition-all cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back / मागे</span>
            </button>
          ) : (
            <div />
          )}

          <div className="flex items-center gap-3">
            {currentStep < 7 && (
              <button
                type="button"
                onClick={() => setCurrentStep(7)}
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2.5 text-xs sm:text-sm font-semibold text-wine-900 hover:text-wine-700 bg-wine-50 rounded-xl border border-wine-200 transition-colors cursor-pointer"
              >
                <Eye className="w-4 h-4" />
                <span>Jump to Preview</span>
              </button>
            )}

            <button
              type="button"
              onClick={handleNext}
              className="px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-wine-700 to-wine-900 hover:from-wine-800 hover:to-wine-950 shadow-royal hover:shadow-royal-lg transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>
                {currentStep === 6
                  ? "View Full Preview"
                  : currentStep === 7
                  ? "Proceed to Download"
                  : "Next Step / पुढे"}
              </span>
              <ArrowRight className="w-4 h-4 text-gold-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
