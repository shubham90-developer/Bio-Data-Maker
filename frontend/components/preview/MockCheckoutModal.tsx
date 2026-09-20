"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { formatPriceINR } from "@/lib/utils";
import {
  X,
  CheckCircle2,
  ShieldCheck,
  CreditCard,
  QrCode,
  Smartphone,
  Download,
  Loader2,
  Sparkles,
} from "lucide-react";

interface MockCheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  formatType: "image" | "pdf" | "word";
  candidateName: string;
}

export const MockCheckoutModal: React.FC<MockCheckoutModalProps> = ({
  isOpen,
  onClose,
  formatType,
  candidateName,
}) => {
  const [paymentMethod, setPaymentMethod] = useState<"upi" | "card" | "qr">("upi");
  const [upiId, setUpiId] = useState("9822012345@upi");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const planDetails = {
    image: { name: "HD WhatsApp Image", price: 49, extension: "jpg", mime: "image/jpeg" },
    pdf: { name: "Print-Ready Vector PDF", price: 79, extension: "pdf", mime: "application/pdf" },
    word: { name: "Editable Word Doc (.docx)", price: 99, extension: "docx", mime: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" },
  }[formatType];

  const handleSimulatePayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
      });
    }, 1800);
  };

  const handleDownloadSimulatedFile = () => {
    // Generate a mock file download in browser
    const content = `VivahPatrika Marriage Biodata Export\nCandidate: ${candidateName || "Candidate"}\nFormat: ${planDetails.name}\nGenerated on: ${new Date().toLocaleString()}\n\nStatus: Official Watermark-Free Export Ready.`;
    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `VivahPatrika_${candidateName.replace(/\s+/g, "_") || "Biodata"}.${planDetails.extension}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-cream-border"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#FAF4E6] p-6 border-b border-[#E7D6A7] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-wine-800 text-gold-300 flex items-center justify-center font-bold">
              वि
            </div>
            <div>
              <h3 className="text-lg font-bold text-wine-950 font-serif">
                Secure Checkout • सुरक्षित पेमेंट
              </h3>
              <p className="text-xs text-charcoal-500">
                Demo Payment Simulation (Razorpay Sandbox Style)
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close"
            className="p-2 text-charcoal-400 hover:text-wine-800 rounded-full hover:bg-cream-surface transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          {!isSuccess ? (
            <>
              {/* Order Summary Pill */}
              <div className="p-4 bg-[#FCFAF6] rounded-2xl border border-cream-border flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-charcoal-500 uppercase tracking-wider">
                    Selected Package
                  </p>
                  <p className="text-sm font-bold text-wine-950">
                    {planDetails.name}
                  </p>
                  <p className="text-xs text-emerald-700 font-medium mt-0.5">
                    ✓ Watermark Removed • Instant Download
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-extrabold text-wine-900 font-serif">
                    {formatPriceINR(planDetails.price)}
                  </span>
                  <span className="text-[10px] text-charcoal-400 block">incl. all taxes</span>
                </div>
              </div>

              {/* Payment Method Selector */}
              <div>
                <label className="block text-xs font-semibold text-charcoal-700 mb-2">
                  Select Payment Method / देयक पद्धत
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("upi")}
                    className={`p-3 rounded-xl border text-center transition-all flex flex-col items-center gap-1 cursor-pointer ${
                      paymentMethod === "upi"
                        ? "border-wine-800 bg-wine-50 text-wine-900 font-bold ring-1 ring-wine-800"
                        : "border-cream-border bg-cream-surface/40 text-charcoal-600 hover:bg-cream-surface"
                    }`}
                  >
                    <Smartphone className="w-5 h-5 text-wine-700" />
                    <span className="text-xs">UPI App</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod("qr")}
                    className={`p-3 rounded-xl border text-center transition-all flex flex-col items-center gap-1 cursor-pointer ${
                      paymentMethod === "qr"
                        ? "border-wine-800 bg-wine-50 text-wine-900 font-bold ring-1 ring-wine-800"
                        : "border-cream-border bg-cream-surface/40 text-charcoal-600 hover:bg-cream-surface"
                    }`}
                  >
                    <QrCode className="w-5 h-5 text-wine-700" />
                    <span className="text-xs">UPI QR Code</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod("card")}
                    className={`p-3 rounded-xl border text-center transition-all flex flex-col items-center gap-1 cursor-pointer ${
                      paymentMethod === "card"
                        ? "border-wine-800 bg-wine-50 text-wine-900 font-bold ring-1 ring-wine-800"
                        : "border-cream-border bg-cream-surface/40 text-charcoal-600 hover:bg-cream-surface"
                    }`}
                  >
                    <CreditCard className="w-5 h-5 text-wine-700" />
                    <span className="text-xs">Card / NetBanking</span>
                  </button>
                </div>
              </div>

              {/* Method Details */}
              {paymentMethod === "upi" && (
                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-charcoal-700">
                    Enter Virtual Payment Address (VPA / UPI ID)
                  </label>
                  <input
                    type="text"
                    value={upiId}
                    onChange={(e) => setUpiId(e.target.value)}
                    placeholder="yourname@okaxis / yourname@paytm"
                    className="w-full p-2.5 text-xs sm:text-sm rounded-xl border border-cream-border bg-cream-surface/40 focus:border-wine-700 focus:outline-hidden"
                  />
                  <div className="flex items-center gap-3 pt-1 text-[11px] text-charcoal-500">
                    <span>Google Pay</span> • <span>PhonePe</span> • <span>Paytm</span> • <span>BHIM</span>
                  </div>
                </div>
              )}

              {paymentMethod === "qr" && (
                <div className="text-center p-4 bg-[#FAF7F2] rounded-xl border border-cream-border space-y-2">
                  <div className="w-32 h-32 mx-auto bg-white p-2 rounded-lg border border-charcoal-200 flex items-center justify-center shadow-xs">
                    <QrCode className="w-24 h-24 text-wine-900" />
                  </div>
                  <p className="text-xs text-charcoal-600 font-medium">
                    Scan with any UPI App on your phone
                  </p>
                </div>
              )}

              {paymentMethod === "card" && (
                <div className="space-y-2 text-xs">
                  <input
                    type="text"
                    placeholder="Card Number (XXXX XXXX XXXX 4242)"
                    defaultValue="4111 2222 3333 4242"
                    className="w-full p-2.5 rounded-xl border border-cream-border bg-cream-surface/40"
                  />
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      placeholder="MM / YY"
                      defaultValue="12/28"
                      className="p-2.5 rounded-xl border border-cream-border bg-cream-surface/40"
                    />
                    <input
                      type="password"
                      placeholder="CVV"
                      defaultValue="123"
                      className="p-2.5 rounded-xl border border-cream-border bg-cream-surface/40"
                    />
                  </div>
                </div>
              )}

              {/* Pay Button */}
              <button
                type="button"
                disabled={isProcessing}
                onClick={handleSimulatePayment}
                className="w-full py-3.5 px-6 rounded-xl font-bold text-white bg-gradient-to-r from-wine-700 to-wine-900 hover:from-wine-800 hover:to-wine-950 shadow-royal hover:shadow-royal-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Processing Secure Demo Payment...</span>
                  </>
                ) : (
                  <>
                    <ShieldCheck className="w-5 h-5 text-gold-300" />
                    <span>Pay {formatPriceINR(planDetails.price)} & Download</span>
                  </>
                )}
              </button>

              <p className="text-[11px] text-center text-charcoal-400">
                🔒 Mock Payment Simulation • No actual money is debited.
              </p>
            </>
          ) : (
            /* Success & Download State */
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm animate-bounce">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <h4 className="text-2xl font-bold text-wine-950 font-serif">
                  Payment Successful!
                </h4>
                <p className="text-xs text-charcoal-500 mt-1">
                  Transaction ID: VIVAH-{Math.floor(100000 + Math.random() * 900000)}
                </p>
              </div>

              <div className="p-4 bg-emerald-50/70 border border-emerald-200 rounded-2xl text-xs text-emerald-900 space-y-1">
                <p className="font-bold">
                  Your clean watermark-free biodata is ready.
                </p>
                <p className="text-[11px] text-emerald-700">
                  Format: {planDetails.name} (. {planDetails.extension.toUpperCase()})
                </p>
              </div>

              <div className="pt-2 space-y-2">
                <button
                  type="button"
                  onClick={handleDownloadSimulatedFile}
                  className="w-full py-3.5 px-6 rounded-xl font-bold text-white bg-emerald-700 hover:bg-emerald-800 shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Download className="w-5 h-5" />
                  <span>Download {planDetails.extension.toUpperCase()} File Now</span>
                </button>

                <button
                  type="button"
                  onClick={onClose}
                  className="w-full py-2.5 text-xs font-semibold text-charcoal-500 hover:text-charcoal-800"
                >
                  Close Window
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
