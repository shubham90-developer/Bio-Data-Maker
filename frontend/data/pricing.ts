import { PricingPlan } from "@/types/biodata";

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "free",
    name: "Free Preview",
    price: 0,
    originalPrice: 0,
    description: "Preview your full biodata in your browser with watermark to test and finalize all information.",
    format: "Free",
    features: [
      "Access to all 12+ templates",
      "Full live screen preview",
      "Photo upload & crop preview",
      "Multi-language Marathi/English support",
      "Browser local draft autosave",
      "Watermarked preview mode"
    ],
    ctaText: "Start Creating Free"
  },
  {
    id: "image",
    name: "HD Image Format",
    badge: "Popular on WhatsApp",
    price: 49,
    originalPrice: 99,
    description: "Crisp, lightweight JPG/PNG image optimized for sending directly on WhatsApp and matrimonial portals.",
    format: "JPG / PNG",
    features: [
      "Watermark removed instantly",
      "Ultra HD 300 DPI image rendering",
      "Instant WhatsApp sharing ready",
      "Perfect mobile resolution",
      "Photo enhancing filter applied",
      "Lifetime re-download of draft"
    ],
    ctaText: "Download HD Image"
  },
  {
    id: "pdf",
    name: "Print-Ready PDF",
    badge: "Most Recommended",
    price: 79,
    originalPrice: 149,
    isPopular: true,
    description: "Standard A4 vector PDF format ready for flawless high-quality printing on bond paper or glossy sheets.",
    format: "High-Res PDF",
    features: [
      "Standard A4 exact print dimensions",
      "Vector-sharp typography and borders",
      "No blur on physical printing",
      "Includes HD WhatsApp image free",
      "Watermark removed completely",
      "Fast 1-click download"
    ],
    ctaText: "Download Vector PDF"
  },
  {
    id: "word",
    name: "Editable Word Doc",
    badge: "Maximum Flexibility",
    price: 99,
    originalPrice: 199,
    description: "Editable Word format (.docx) so you can make manual edits anytime in Microsoft Word or Google Docs.",
    format: "Editable DOCX",
    features: [
      "Fully editable Microsoft Word (.docx)",
      "Includes high-res PDF + HD Image",
      "Custom font & spacing formatting",
      "Edit details anytime offline",
      "Watermark removed completely",
      "Priority customer assistance"
    ],
    ctaText: "Download Word Package"
  }
];

export const COMPARISON_FEATURES = [
  { feature: "Access to 12+ Templates", free: true, image: true, pdf: true, word: true },
  { feature: "Instant Online Live Preview", free: true, image: true, pdf: true, word: true },
  { feature: "Watermark Removed", free: false, image: true, pdf: true, word: true },
  { feature: "WhatsApp Optimized Resolution", free: false, image: true, pdf: true, word: true },
  { feature: "Vector Print-Ready A4 Document", free: false, image: false, pdf: true, word: true },
  { feature: "Editable Microsoft Word (.docx)", free: false, image: false, pdf: false, word: true },
  { feature: "Offline Editing Capability", free: false, image: false, pdf: false, word: true },
  { feature: "Bundled Multi-format Export", free: false, image: false, pdf: "Includes Image", word: "Includes All" },
  { feature: "Priority Support", free: false, image: "Standard", pdf: "Fast", word: "VIP Priority" },
];
