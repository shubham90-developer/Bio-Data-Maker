"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useBiodataStore } from "@/store/useBiodataStore";
import { BiodataRenderer } from "../templates/BiodataRenderer";
import { ZoomIn, ZoomOut, Printer, Download, ArrowRight } from "lucide-react";

// Fixed A4 design dimensions used by every template (must match BiodataRenderer)
const A4_WIDTH = 794;
const A4_HEIGHT = 1123;

export const Step7Preview: React.FC = () => {
  const { data } = useBiodataStore();

  // zoomMultiplier is the user-controlled +/- zoom (1 = 100% of the auto-fit size)
  const [zoomMultiplier, setZoomMultiplier] = useState<number>(1);

  // autoFitScale is computed from the actual available container width,
  // so the full A4 page always fits the screen without horizontal scroll/cropping.
  const [autoFitScale, setAutoFitScale] = useState<number>(1);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const computeScale = () => {
      // Leave a little horizontal breathing room (padding) inside the viewport box
      const availableWidth = el.clientWidth - 16;
      const nextScale = Math.min(1, availableWidth / A4_WIDTH);
      setAutoFitScale(nextScale > 0 ? nextScale : 1);
    };

    computeScale();

    const resizeObserver = new ResizeObserver(computeScale);
    resizeObserver.observe(el);

    return () => resizeObserver.disconnect();
  }, []);

  const finalScale = autoFitScale * zoomMultiplier;
  const scaledWidth = A4_WIDTH * finalScale;
  const scaledHeight = A4_HEIGHT * finalScale;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6">
      {/* Action Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-white rounded-2xl border border-cream-border shadow-card-soft">
        <div>
          <h3 className="text-base font-bold text-wine-950 font-serif">
            A4 Document Live Preview
          </h3>
          <p className="text-xs text-charcoal-500">
            Verify every detail on the document before downloading.
          </p>
        </div>

        <div className="flex items-center gap-2">
          {/* Zoom Controls — these multiply on top of the auto-fit scale */}
          <div className="flex items-center gap-1 bg-cream-surface rounded-xl p-1 border border-cream-border">
            <button
              type="button"
              onClick={() =>
                setZoomMultiplier((prev) =>
                  Math.max(0.5, +(prev - 0.1).toFixed(2)),
                )
              }
              className="p-1.5 hover:bg-white rounded-lg text-charcoal-700 transition-colors"
              title="Zoom Out"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <span className="text-xs font-semibold text-charcoal-600 px-2">
              {Math.round(finalScale * 100)}%
            </span>
            <button
              type="button"
              onClick={() =>
                setZoomMultiplier((prev) =>
                  Math.min(1.6, +(prev + 0.1).toFixed(2)),
                )
              }
              className="p-1.5 hover:bg-white rounded-lg text-charcoal-700 transition-colors"
              title="Zoom In"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
          </div>

          <button
            type="button"
            onClick={handlePrint}
            className="px-3.5 py-2 text-xs font-semibold text-charcoal-700 bg-cream-surface hover:bg-cream-muted rounded-xl border border-cream-border transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <Printer className="w-4 h-4 text-wine-800" />
            <span>Print A4</span>
          </button>

          <Link
            href="/preview"
            className="px-4 py-2 text-xs font-bold text-white bg-wine-800 hover:bg-wine-900 rounded-xl shadow-royal transition-all flex items-center gap-1.5"
          >
            <Download className="w-4 h-4 text-gold-300" />
            <span>Download Formats</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Document Viewport */}
      <div
        ref={containerRef}
        className="w-full bg-[#EBE4D5] rounded-2xl p-4 sm:p-8 overflow-x-auto flex justify-center border border-[#D8CEBA] min-h-[600px]"
      >
        {/*
          This wrapper's actual box size (width/height) is shrunk to match the
          scaled-down page, not just visually transformed — this is what stops
          the browser from reserving the full 794px A4 width on narrow phones.
        */}
        <div
          style={{
            width: scaledWidth,
            height: scaledHeight,
          }}
        >
          <div
            className="origin-top-left shadow-2xl transition-transform duration-200"
            style={{
              width: A4_WIDTH,
              height: A4_HEIGHT,
              transform: `scale(${finalScale})`,
            }}
          >
            <BiodataRenderer data={data} showWatermark={false} />
          </div>
        </div>
      </div>
    </div>
  );
};
