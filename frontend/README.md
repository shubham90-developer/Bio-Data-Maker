# विवाहपत्रिका (VivahPatrika) — Modern Online Marriage Biodata Generator

A luxury, culturally resonant, production-quality frontend web application for crafting authentic Indian and Maharashtrian marriage biodatas. Built with **Next.js 15+ (App Router)**, **TypeScript**, **Tailwind CSS**, **Zustand**, and **Framer Motion**.

---

## 1. Project Overview

In traditional and contemporary Indian matrimonial matchmaking, a biodata is the primary introduction between two families. **विवाहपत्रिका (VivahPatrika)** bridges cultural reverence and modern editorial design, eliminating poorly formatted cyber-cafe printouts and broken Marathi fonts in favor of 12+ luxury templates, high-precision Devanagari typography, browser-based autosave, and multi-format export capabilities.

---

## 2. Key Features

- **12 Original Dynamic Templates**:
  - *Royal Maroon* (शाही मरून): Royal burgundy double frame with gold accents
  - *Marathi Heritage* (मराठी परंपरा): Authentic Paithani border motif with Ganesh invocation
  - *Minimal Ivory* (मिनिमल आयव्हरी): Editorial modern layout for tech professionals
  - *Modern Burgundy* (मॉडर्न बरगंडी): Asymmetrical split-panel layout
  - *Floral Elegance* (फुलोरा एलिगन्स): Delicate botanical corner flourishes
  - *Classic Gold* (क्लासिक गोल्ड): Timeless golden geometric borders
  - *Lotus Grace* (पद्म ग्रेस): Sacred lotus mandala aesthetic in rose gold
  - *Contemporary Beige* (कंटेम्पररी बेज): Modular card-based grid layout
  - *Traditional Green* (पारंपरिक हिरवा): Paithani emerald green and antique brass
  - *Elegant Blue* (शाही निळा): Stately sapphire navy and silver
  - *Temple Heritage* (मंदिर हेरिटेज): Classical temple gopuram archway header
  - *Modern Rose* (मॉडर्न रोझ): Contemporary soft blush and rounded framing
- **Interactive 7-Step Builder**:
  1. Profile & Deity Invocation
  2. Personal & Horoscope Details
  3. Academic & Career Background
  4. Family Roots & Maternal Lineage
  5. Lifestyle & Partner Expectations
  6. Design Customization & Section Toggles
  7. A4 Live Preview & Zoom Engine
- **Browser-Side Photo Studio**:
  - Drag-and-drop or device browsing
  - Aspect framing: Circle, Rounded, Square
  - 90-degree rotation & replace controls
  - 100% private client-side processing
- **Multi-Lingual Excellence**:
  - First-class support for मराठी (Marathi), English, हिंदी (Hindi), ગુજરાતી (Gujarati), తెలుగు (Telugu), and বাংলা (Bengali)
- **Zero-Registration & Privacy Guarantee**:
  - No signup required
  - Instant local draft persistence (`localStorage`)
  - 1-Click Marathi & English sample data loading
- **Multi-Format Export & Mock Checkout**:
  - Ultra HD JPG/PNG optimized for WhatsApp sharing
  - Vector-sharp print-ready standard A4 PDF
  - Editable Microsoft Word (.docx) package
  - Realistic UPI / QR / Card checkout simulation with confetti celebration

---

## 3. Tech Stack

- **Framework**: Next.js 15.1.7 (React 19, App Router)
- **Language**: TypeScript 5.7 (Strict Mode)
- **Styling**: Tailwind CSS v3.4 + Custom Ivory/Burgundy/Gold Design System
- **State Management**: Zustand v5 with `persist` middleware
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Celebration**: Canvas Confetti
- **Typography**: Google Fonts (`Noto Sans Devanagari`, `Noto Serif Devanagari`, `Playfair Display`, `Inter`)

---

## 4. Folder Structure

```text
marriage-biodata-frontend/
├── app/
│   ├── page.tsx                    # High-converting landing page (12 sections)
│   ├── templates/
│   │   └── page.tsx                # Filterable template marketplace + preview modal
│   ├── create-biodata/
│   │   └── page.tsx                # 7-Step interactive builder
│   ├── preview/
│   │   └── page.tsx                # Live A4 document view + download tiers
│   ├── pricing/
│   │   └── page.tsx                # Transparent pricing tiers & comparison table
│   ├── blog/
│   │   ├── page.tsx                # Matrimonial guides catalog (8 articles)
│   │   └── [slug]/
│   │       └── page.tsx            # Dynamic blog reader with related articles
│   ├── about/
│   │   └── page.tsx                # Brand mission & design philosophy
│   ├── contact/
│   │   └── page.tsx                # Contact form with validation & success state
│   ├── privacy-policy/
│   │   └── page.tsx                # Privacy guarantees & local storage terms
│   ├── terms/
│   │   └── page.tsx                # Terms of service
│   ├── refund-policy/
│   │   └── page.tsx                # Digital delivery & refund terms
│   ├── disclaimer/
│   │   └── page.tsx                # Matrimonial verification disclaimer
│   ├── shipping-policy/
│   │   └── page.tsx                # Electronic delivery policy
│   ├── sitemap/
│   │   └── page.tsx                # Visual index of all routes
│   ├── not-found.tsx               # Custom 404 page
│   ├── layout.tsx                  # Global fonts, metadata, Header & Footer
│   └── globals.css                 # A4 print styles, watermarks, custom scrollbar
├── components/
│   ├── builder/                    # Multi-step form steps & photo uploader
│   ├── common/                     # Auspicious vector SVGs & legal wrapper
│   ├── home/                       # All 12 homepage marketing sections
│   ├── layout/                     # Sticky Header & Multi-column Footer
│   ├── preview/                    # Checkout simulation modal
│   └── templates/                  # Universal BiodataRenderer + 12 template designs
├── data/                           # Typed mock data (templates, blogs, FAQs, pricing, samples)
├── lib/                            # Utility functions (cn, formatPriceINR, formatDate)
├── store/                          # Zustand store (useBiodataStore) with persistence
├── types/                          # Complete TypeScript interface declarations
├── package.json
├── tsconfig.json
├── next.config.ts
└── tailwind.config.ts
```

---

## 5. Getting Started & Installation

### Prerequisites
- Node.js 18.17+ or 20+ (tested on Node v22.14.0)
- npm 9+ or pnpm or yarn

### Installation Steps
```bash
# 1. Clone or extract the repository
cd marriage-biodata-frontend

# 2. Install dependencies
npm install

# 3. Launch local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 6. Available Scripts

| Command | Purpose |
| :--- | :--- |
| `npm run dev` | Starts Next.js development server at `localhost:3000` |
| `npm run build` | Builds optimized production bundle |
| `npm run start` | Runs the production build locally |
| `npm run lint` | Runs ESLint analysis across the project |

---

## 7. How Biodata State Works

The biodata state is centrally managed via Zustand in `store/useBiodataStore.ts`:
- **State Schema**: Divided into typed sections (`profile`, `personal`, `education`, `family`, `expectations`, `contact`, `design`).
- **Autosave Engine**: Utilizes Zustand's `persist` middleware storing changes under the localStorage key `vivah_biodata_storage_v1`.
- **Hydration Safety**: Includes an `isHydrated` listener flag to prevent React 19 hydration mismatches on client mounts.
- **1-Click Demo Loader**: Call `loadSampleData('mr')` or `loadSampleData('en')` to populate all sections instantly with culturally authentic data.

---

## 8. How Templates Work

- Each of the 12 templates under `components/templates/designs/` is an independent React component accepting `data: BiodataData`.
- The parent `BiodataRenderer.tsx` dynamically switches between templates based on `design.templateId`.
- When printing via the browser, the `@media print` rules defined in `app/globals.css` hide headers, toolbars, and background elements, cleanly rendering only `.print-page` on exact A4 portrait dimensions.

---

## 9. How to Connect Backend APIs & Real Payments

### Replacing Mock Checkout with Razorpay
1. Install Razorpay SDK: `npm install razorpay`
2. In `components/preview/MockCheckoutModal.tsx`, replace `handleSimulatePayment` with Razorpay checkout script:
```typescript
const options = {
  key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
  amount: planDetails.price * 100, // amount in paise
  currency: "INR",
  name: "VivahPatrika",
  description: planDetails.name,
  handler: function (response: any) {
    // Verify payment signature on backend API: /api/verify-payment
    triggerOfficialDownload(response.razorpay_payment_id);
  },
  prefill: {
    name: candidateName,
    email: contact.email,
    contact: contact.phone1,
  },
};
const rzp = new (window as any).Razorpay(options);
rzp.open();
```

### Connecting PDF Generator
For server-side vector PDF generation, you can hook the `/api/generate-pdf` route using **Puppeteer** or **react-pdf**:
```typescript
// app/api/generate-pdf/route.ts
import puppeteer from "puppeteer";

export async function POST(req: Request) {
  const { biodataData } = await req.json();
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(`${process.env.APP_URL}/print-view`, { waitUntil: "networkidle0" });
  const pdfBuffer = await page.pdf({ format: "A4", printBackground: true });
  await browser.close();
  return new Response(pdfBuffer, { headers: { "Content-Type": "application/pdf" } });
}
```

---

## 10. Deployment on Vercel

The project is pre-configured for zero-config deployment on Vercel:
1. Push your repository to GitHub / GitLab.
2. Import the project in the [Vercel Dashboard](https://vercel.com).
3. Framework Preset will be automatically detected as **Next.js**.
4. Click **Deploy**.

---

## License

MIT © VivahPatrika Studio. Original templates and layouts designed with reverence for Indian matrimonial traditions.
