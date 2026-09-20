"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { Upload, Camera, Trash2, RotateCw, RefreshCw, Check, AlertCircle } from "lucide-react";

interface PhotoUploaderProps {
  photoUrl: string;
  photoShape: "rounded" | "circle" | "square";
  onPhotoChange: (url: string) => void;
  onShapeChange: (shape: "rounded" | "circle" | "square") => void;
}

export const PhotoUploader: React.FC<PhotoUploaderProps> = ({
  photoUrl,
  photoShape,
  onPhotoChange,
  onShapeChange,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [rotation, setRotation] = useState(0);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileProcess = (file: File) => {
    setErrorMessage(null);
    if (!file.type.startsWith("image/")) {
      setErrorMessage("Please upload a valid image file (JPG, PNG, WEBP).");
      return;
    }
    if (file.size > 8 * 1024 * 1024) {
      setErrorMessage("Image file size exceeds 8MB. Please select a smaller photo.");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      if (result) {
        onPhotoChange(result);
        setRotation(0);
      }
    };
    reader.onerror = () => {
      setErrorMessage("Error reading image file. Please try another photo.");
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileProcess(e.dataTransfer.files[0]);
    }
  };

  const handleRotate = () => {
    setRotation((prev) => (prev + 90) % 360);
  };

  const handleRemove = () => {
    onPhotoChange("");
    setRotation(0);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <div className="space-y-4">
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          if (e.target.files && e.target.files[0]) {
            handleFileProcess(e.target.files[0]);
          }
        }}
      />

      {errorMessage && (
        <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {photoUrl ? (
        <div className="flex flex-col sm:flex-row items-center gap-6 p-4 bg-white rounded-2xl border border-cream-border">
          {/* Photo Preview Container */}
          <div className="relative">
            <div
              className={`w-32 h-40 overflow-hidden border-2 border-gold-400 shadow-md relative bg-cream-surface ${
                photoShape === "circle"
                  ? "rounded-full aspect-square w-32 h-32"
                  : photoShape === "rounded"
                  ? "rounded-xl"
                  : "rounded-none"
              }`}
            >
              <Image
                src={photoUrl}
                alt="Profile Preview"
                fill
                className="object-cover transition-transform duration-200"
                style={{ transform: `rotate(${rotation}deg)` }}
                unoptimized
              />
            </div>
          </div>

          {/* Editing Controls */}
          <div className="flex-1 space-y-3 text-center sm:text-left">
            <div>
              <p className="text-xs font-semibold text-charcoal-500 uppercase tracking-wider">
                Photo Frame Shape
              </p>
              <div className="flex items-center justify-center sm:justify-start gap-2 mt-1.5">
                {(["rounded", "circle", "square"] as const).map((shape) => (
                  <button
                    key={shape}
                    type="button"
                    onClick={() => onShapeChange(shape)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium capitalize transition-all ${
                      photoShape === shape
                        ? "bg-wine-800 text-white font-bold shadow-xs"
                        : "bg-cream-surface text-charcoal-700 hover:bg-cream-muted border border-cream-border"
                    }`}
                  >
                    {shape}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-2 border-t border-cream-border">
              <button
                type="button"
                onClick={handleRotate}
                className="px-3 py-1.5 text-xs font-medium text-charcoal-700 bg-cream-surface hover:bg-cream-muted rounded-lg border border-cream-border flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <RotateCw className="w-3.5 h-3.5 text-gold-700" />
                <span>Rotate 90°</span>
              </button>

              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="px-3 py-1.5 text-xs font-medium text-wine-900 bg-wine-50 hover:bg-wine-100 rounded-lg border border-wine-200 flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5 text-wine-700" />
                <span>Replace</span>
              </button>

              <button
                type="button"
                onClick={handleRemove}
                className="px-3 py-1.5 text-xs font-medium text-red-700 bg-red-50 hover:bg-red-100 rounded-lg border border-red-200 flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Remove</span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* Drag and drop upload box */
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragging(true);
          }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          className={`border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer transition-all duration-200 ${
            isDragging
              ? "border-wine-700 bg-wine-50/50"
              : "border-gold-300/80 bg-white hover:bg-cream-surface/60 hover:border-gold-500"
          }`}
        >
          <div className="w-14 h-14 mx-auto rounded-full bg-wine-50 text-wine-800 flex items-center justify-center border border-wine-200 mb-3 shadow-xs">
            <Camera className="w-6 h-6" />
          </div>
          <h4 className="text-sm font-bold text-wine-950 font-serifDevanagari">
            बायोडाटासाठी फोटो निवडा (Upload Photo)
          </h4>
          <p className="text-xs text-charcoal-500 mt-1">
            Drag & drop an image here or click to browse from device
          </p>
          <span className="inline-block mt-3 px-3 py-1 rounded-full bg-cream-surface text-charcoal-600 text-[11px] border border-cream-border">
            JPG, PNG, WEBP up to 8MB • Browser processed only
          </span>
        </div>
      )}
    </div>
  );
};
