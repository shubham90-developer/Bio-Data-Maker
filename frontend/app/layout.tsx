import type { Metadata } from "next";
import {
  Noto_Sans_Devanagari,
  Noto_Serif_Devanagari,
  Playfair_Display,
  Inter,
} from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const notoDevanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-devanagari",
  display: "swap",
});

const notoSerifDevanagari = Noto_Serif_Devanagari({
  subsets: ["devanagari", "latin"],
  weight: ["400", "600", "700"],
  variable: "--font-noto-serif-devanagari",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "विवाहपत्रिका (VivahPatrika) | Modern Online Marriage Biodata Generator",
    template: "%s | विवाहपत्रिका",
  },
  description:
    "तुमच्या नात्याची सुंदर सुरुवात, एक सुंदर बायोडाट्यापासून. Create high-resolution Marathi & Indian marriage biodatas online in minutes. 12+ luxury templates, horoscope details, instant preview & PDF export.",
  keywords: [
    "marriage biodata",
    "मराठी विवाह बायोडाटा",
    "marathi biodata format",
    "lagna patrika maker",
    "matrimonial biodata creator",
    "biodata maker online free",
    "marriage biodata for maharashtrian",
    "online marriage biodata generator",
  ],
  authors: [{ name: "VivahPatrika Studio" }],
  creator: "VivahPatrika",
  openGraph: {
    type: "website",
    locale: "en_IN",
    alternateLocale: "mr_IN",
    url: "https://vivahpatrika.online",
    siteName: "विवाहपत्रिका (VivahPatrika)",
    title: "विवाहपत्रिका | Modern Online Marriage Biodata Generator",
    description:
      "Create beautiful, culturally resonant marriage biodatas in Marathi & English with 12+ luxury templates, photo crop, and instant PDF downloads.",
  },
  twitter: {
    card: "summary_large_image",
    title: "विवाहपत्रिका | Modern Online Marriage Biodata Generator",
    description:
      "Design dignified marriage biodatas in minutes. 12+ original templates with full Marathi & horoscope support.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="mr"
      className={`${notoDevanagari.variable} ${notoSerifDevanagari.variable} ${playfair.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col bg-[#FCFAF6] text-[#1F2937] antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
