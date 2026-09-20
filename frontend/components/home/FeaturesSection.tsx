import React from "react";
import {
  Sparkles,
  Smartphone,
  ShieldCheck,
  FileCheck,
  Languages,
  Eye,
  Sliders,
  Zap,
} from "lucide-react";

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: "Easy & Fast to Create",
      marathiTitle: "५ मिनिटांत तयार करा",
      description:
        "Intuitive step-by-step form with intelligent autosave so you never lose entered details.",
    },
    {
      icon: Sparkles,
      title: "12+ Original Luxury Designs",
      marathiTitle: "शाही व आधुनिक टेम्पलेट्स",
      description:
        "Bespoke designs crafted specifically for Indian & Maharashtrian families with authentic borders.",
    },
    {
      icon: Languages,
      title: "Native Marathi Support",
      marathiTitle: "अस्सल मराठी फॉन्ट सपोर्ट",
      description:
        "High-fidelity Devanagari typography that renders crisp and legible on every screen and printout.",
    },
    {
      icon: Smartphone,
      title: "100% Mobile Friendly",
      marathiTitle: "मोबाईलवर सहज हाताळणी",
      description:
        "Designed ground-up for smartphones. Create, edit, and download directly from your mobile browser.",
    },
    {
      icon: Eye,
      title: "Real-Time Live Preview",
      marathiTitle: "प्रत्येक बदलाचा लाइव्ह प्रिव्ह्यू",
      description:
        "View exact A4 proportions as you type. Zoom in, switch templates, and verify before downloading.",
    },
    {
      icon: ShieldCheck,
      title: "Privacy-First Architecture",
      marathiTitle: "१००% डेटा सुरक्षितता",
      description:
        "Your private matrimonial data remains in your browser. We never sell your contacts to third parties.",
    },
    {
      icon: FileCheck,
      title: "Multi-Format Export",
      marathiTitle: "Image, PDF आणि Word",
      description:
        "Ultra HD JPG for instant WhatsApp sharing, vector-sharp PDF for A4 printing, and editable Word.",
    },
    {
      icon: Sliders,
      title: "Granular Field Control",
      marathiTitle: "संपूर्ण स्वातंत्र्य व नियंत्रण",
      description:
        "Toggle astrology, partner expectations, or photo visibility according to your family preferences.",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#FCFAF6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-wine-800 uppercase tracking-widest block mb-2 font-sans">
            Why Choose VivahPatrika • वैशिष्ट्ये
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-serifDevanagari text-wine-950">
            विवाहपत्रिका का निवडावी?
          </h2>
          <p className="text-charcoal-600 text-sm sm:text-base mt-3 leading-relaxed">
            आधुनिक तंत्रज्ञान आणि पारंपारिक संस्कारांचा सुरेख मिलाफ, ज्यामुळे तुमचा बायोडाटा ठरतो इतरांपेक्षा वेगळा.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-cream-border hover:border-gold-400 shadow-card-soft hover:shadow-royal transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-gold-50 text-gold-700 flex items-center justify-center border border-gold-200 mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-wine-950 font-serif">
                    {feat.title}
                  </h3>
                  <p className="text-xs font-semibold text-wine-800 font-serifDevanagari mt-0.5">
                    {feat.marathiTitle}
                  </p>
                  <p className="text-xs text-charcoal-600 mt-2 leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
