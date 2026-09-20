import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        ivory: {
          50: "#FCFAF6",
          100: "#F9F5EC",
          200: "#F4ECDD",
          300: "#EFE2CC",
          400: "#E5D2B4",
          500: "#D8BE96",
        },
        cream: {
          DEFAULT: "#FAF7F2",
          surface: "#F5F0E8",
          muted: "#EBE3D5",
          border: "#E0D5C3",
        },
        wine: {
          50: "#FDF2F4",
          100: "#FBE4E8",
          200: "#F6CCD5",
          300: "#EEA6B6",
          400: "#E36C87",
          500: "#800020", // Classic Burgundy
          600: "#722F37", // Deep Wine
          700: "#5D1E26",
          800: "#49151D",
          900: "#360C13",
          950: "#22050B",
        },
        gold: {
          50: "#FAF7EE",
          100: "#F4ECD5",
          200: "#E7D6A7",
          300: "#DABE75",
          400: "#D4AF37", // Metallic gold
          500: "#C5A059", // Muted royal gold
          600: "#B08A41",
          700: "#8E6D2E",
          800: "#6B5123",
          900: "#4D391A",
        },
        charcoal: {
          50: "#F6F7F9",
          100: "#EDEFF2",
          200: "#D7DBE2",
          300: "#B6BDCB",
          400: "#8F9AAF",
          500: "#6B778F",
          600: "#515C71",
          700: "#3E4656",
          800: "#2B313D",
          900: "#1A1D24",
          950: "#0F1116",
        },
      },
      fontFamily: {
        devanagari: ["var(--font-noto-devanagari)", "sans-serif"],
        serifDevanagari: ["var(--font-noto-serif-devanagari)", "serif"],
        serif: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        "royal": "0 10px 30px -5px rgba(114, 47, 55, 0.08), 0 4px 12px -2px rgba(197, 160, 89, 0.06)",
        "royal-lg": "0 20px 40px -10px rgba(114, 47, 55, 0.12), 0 8px 16px -4px rgba(197, 160, 89, 0.1)",
        "gold-glow": "0 0 20px -2px rgba(197, 160, 89, 0.35)",
        "card-soft": "0 2px 12px -1px rgba(0, 0, 0, 0.04), 0 1px 4px 0 rgba(0, 0, 0, 0.02)",
      },
    },
  },
  plugins: [],
};

export default config;
