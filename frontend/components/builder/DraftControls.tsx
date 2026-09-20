"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useBiodataStore } from "@/store/useBiodataStore";
import { CheckCircle2, RotateCcw, FileText, Eye, AlertTriangle } from "lucide-react";

export const DraftControls: React.FC = () => {
  const { loadSampleData, reset } = useBiodataStore();
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 p-3 bg-white rounded-xl border border-cream-border text-xs">
      {/* Autosave Status */}
      <div className="flex items-center gap-2 text-emerald-700 font-medium">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span className="hidden sm:inline">डेटा आपोआप सेव्ह होत आहे</span>
        <span className="text-charcoal-400 sm:inline hidden">•</span>
        <span>Autosaved to browser</span>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => loadSampleData("mr")}
          className="px-2.5 py-1.5 bg-cream-surface hover:bg-cream-muted text-charcoal-800 rounded-lg border border-cream-border font-medium transition-colors flex items-center gap-1.5 cursor-pointer"
          title="मराठी नमुना डेटा लोड करा"
        >
          <FileText className="w-3.5 h-3.5 text-gold-700" />
          <span>मराठी नमुना (Demo Data)</span>
        </button>

        <button
          type="button"
          onClick={() => setShowResetConfirm(true)}
          className="px-2.5 py-1.5 bg-red-50 hover:bg-red-100 text-red-700 rounded-lg border border-red-200 font-medium transition-colors flex items-center gap-1 cursor-pointer"
          title="सर्व माहिती रीसेट करा"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Reset</span>
        </button>

        <Link
          href="/preview"
          className="px-3 py-1.5 bg-wine-50 hover:bg-wine-100 text-wine-900 rounded-lg border border-wine-200 font-semibold transition-colors flex items-center gap-1"
        >
          <Eye className="w-3.5 h-3.5 text-wine-700" />
          <span>Quick Preview</span>
        </Link>
      </div>

      {/* Reset Confirmation Dialog */}
      {showResetConfirm && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full border border-cream-border shadow-2xl space-y-4">
            <div className="w-12 h-12 rounded-full bg-red-50 text-red-600 flex items-center justify-center mx-auto">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div className="text-center">
              <h4 className="text-base font-bold text-charcoal-900">
                सर्व माहिती रीसेट करायची आहे का?
              </h4>
              <p className="text-xs text-charcoal-500 mt-1">
                Are you sure? This will clear all entered information and start a blank biodata.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2 pt-2">
              <button
                type="button"
                onClick={() => setShowResetConfirm(false)}
                className="py-2 px-3 text-xs font-semibold text-charcoal-700 bg-cream-surface hover:bg-cream-muted rounded-xl transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => {
                  reset();
                  setShowResetConfirm(false);
                }}
                className="py-2 px-3 text-xs font-semibold text-white bg-red-600 hover:bg-red-700 rounded-xl transition-colors cursor-pointer"
              >
                Yes, Clear All
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
