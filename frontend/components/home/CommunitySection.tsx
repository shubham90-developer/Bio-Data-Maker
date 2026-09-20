import React from "react";
import Link from "next/link";
import { ArrowRight, Heart } from "lucide-react";

export const CommunitySection: React.FC = () => {
  const communities = [
    { name: "Hindu", marathi: "हिंदू", symbol: "ॐ", desc: "Maratha, Brahmin, Kunbi, Dhangar, Mali, CKP, Vanjari, Agri, etc." },
    { name: "Buddhist", marathi: "बौद्ध", symbol: "☸", desc: "Navayana, Ambedkarite, and diverse Buddhist traditions." },
    { name: "Jain", marathi: "जैन", symbol: "卐", desc: "Digambar, Shwetambar, Marwari, Gujarati Jain communities." },
    { name: "Sikh", marathi: "शीख", symbol: "ੴ", desc: "Khatri, Ramgharia, Jat Sikh, and Arora communities." },
    { name: "Christian", marathi: "ख्रिश्चन", symbol: "✝", desc: "Catholic, Protestant, Methodist, and regional traditions." },
    { name: "Muslim", marathi: "मुस्लिम", symbol: "☪", desc: "Sunni, Shia, Bohra, Memon, and community traditions." },
    { name: "Universal / Inter-faith", marathi: "सर्वसमावेशक", symbol: "🕊️", desc: "Neutral and modern secular formats tailored for progressive families." },
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#FCFAF6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-wine-800 uppercase tracking-widest block mb-2 font-sans">
            Inclusive Community Formats • सर्व धर्म व समाज
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-serifDevanagari text-wine-950">
            प्रत्येक समाज आणि संस्कृतीसाठी अनुकूल
          </h2>
          <p className="text-charcoal-600 text-sm sm:text-base mt-3 leading-relaxed">
            आम्ही कोणत्याही भेदभावाशिवाय प्रत्येक कुटुंबाच्या परंपरेचा आदर करतो. तुम्ही हवे असलेले कुलदैवत, चिन्ह किंवा फील्ड्स सहज कस्टमाइझ करू शकता.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {communities.map((c, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-cream-border hover:border-gold-400 shadow-card-soft hover:shadow-royal transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl">{c.symbol}</span>
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-cream-surface text-wine-900 border border-cream-border">
                    {c.marathi}
                  </span>
                </div>
                <h3 className="text-base font-bold text-wine-950 font-serif">
                  {c.name} Marriage Biodata
                </h3>
                <p className="text-xs text-charcoal-600 mt-2 leading-relaxed">
                  {c.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#F5EFEB]">
                <Link
                  href="/create-biodata"
                  className="text-xs font-semibold text-wine-800 hover:text-wine-950 inline-flex items-center gap-1 group"
                >
                  <span>Select & Create</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
