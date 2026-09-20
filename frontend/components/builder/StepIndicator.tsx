"use client";

import React from "react";
import { Check } from "lucide-react";

interface StepIndicatorProps {
  currentStep: number;
  onSelectStep: (step: number) => void;
}

export const StepIndicator: React.FC<StepIndicatorProps> = ({
  currentStep,
  onSelectStep,
}) => {
  const steps = [
    { num: 1, label: "Profile", marathi: "प्रोफाइल" },
    { num: 2, label: "Personal", marathi: "वैयक्तिक" },
    { num: 3, label: "Education", marathi: "शिक्षण/करिअर" },
    { num: 4, label: "Family", marathi: "कौटुंबिक" },
    { num: 5, label: "Preferences", marathi: "अपेक्षा" },
    { num: 6, label: "Design", marathi: "डिझाइन" },
    { num: 7, label: "Preview", marathi: "प्रिव्ह्यू" },
  ];

  return (
    <div className="w-full bg-white rounded-2xl border border-cream-border p-4 shadow-card-soft">
      {/* Mobile Compact Progress Bar */}
      <div className="md:hidden space-y-2">
        <div className="flex items-center justify-between text-xs font-semibold">
          <span className="text-wine-900 font-serifDevanagari">
            टप्पा {currentStep} पैकी {steps.length}: {steps[currentStep - 1].marathi} ({steps[currentStep - 1].label})
          </span>
          <span className="text-gold-700">
            {Math.round((currentStep / steps.length) * 100)}%
          </span>
        </div>
        <div className="w-full h-2 bg-cream-surface rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-wine-700 to-gold-500 transition-all duration-300 rounded-full"
            style={{ width: `${(currentStep / steps.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Desktop Stepper */}
      <div className="hidden md:flex items-center justify-between relative">
        {/* Background Connecting Line */}
        <div className="absolute top-1/2 left-6 right-6 h-0.5 bg-cream-border -translate-y-2 z-0" />

        {steps.map((step) => {
          const isCompleted = currentStep > step.num;
          const isActive = currentStep === step.num;

          return (
            <button
              key={step.num}
              onClick={() => onSelectStep(step.num)}
              className="relative z-10 flex flex-col items-center group cursor-pointer"
            >
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-200 border-2 ${
                  isActive
                    ? "bg-wine-800 text-white border-gold-400 shadow-royal scale-110"
                    : isCompleted
                    ? "bg-gold-500 text-white border-gold-500"
                    : "bg-white text-charcoal-400 border-cream-border group-hover:border-gold-300"
                }`}
              >
                {isCompleted ? <Check className="w-4 h-4" /> : step.num}
              </div>

              <div className="text-center mt-1.5">
                <span
                  className={`text-[11px] font-bold block transition-colors ${
                    isActive
                      ? "text-wine-900"
                      : isCompleted
                      ? "text-charcoal-800"
                      : "text-charcoal-400"
                  }`}
                >
                  {step.label}
                </span>
                <span className="text-[10px] text-charcoal-400 font-serifDevanagari block">
                  {step.marathi}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
