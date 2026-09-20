"use client";

import React from "react";
import { useBiodataStore } from "@/store/useBiodataStore";

export const Step2Personal: React.FC = () => {
  const { data, setField } = useBiodataStore();
  const { personal, design } = data;

  return (
    <div className="space-y-6">
      {/* 1. Basic Identity */}
      <div className="bg-white p-6 rounded-2xl border border-cream-border shadow-card-soft space-y-4">
        <h3 className="text-base font-bold text-wine-950 font-serif">
          1. Basic Identity & Birth Details (मूलभूत माहिती)
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="sm:col-span-2">
            <label className="block text-xs font-semibold text-charcoal-700 mb-1">
              Candidate Full Name / पूर्ण नाव *
            </label>
            <input
              type="text"
              value={personal.fullName}
              onChange={(e) => setField("personal", "fullName", e.target.value)}
              placeholder="उदा. अनिकेत सुरेश कुलकर्णी"
              className="w-full p-2.5 text-xs sm:text-sm rounded-xl border border-cream-border bg-cream-surface/40 focus:border-wine-700 focus:outline-hidden"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-charcoal-700 mb-1">
              Gender / लिंग
            </label>
            <select
              value={personal.gender}
              onChange={(e) => setField("personal", "gender", e.target.value as any)}
              className="w-full p-2.5 text-xs sm:text-sm rounded-xl border border-cream-border bg-cream-surface/40 focus:border-wine-700 focus:outline-hidden"
            >
              <option value="male">Male (वर / मुलगा)</option>
              <option value="female">Female (वधू / मुलगी)</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-charcoal-700 mb-1">
              Date of Birth / जन्मतारीख *
            </label>
            <input
              type="date"
              value={personal.dob}
              onChange={(e) => setField("personal", "dob", e.target.value)}
              className="w-full p-2.5 text-xs sm:text-sm rounded-xl border border-cream-border bg-cream-surface/40 focus:border-wine-700 focus:outline-hidden"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-charcoal-700 mb-1">
              Birth Time / जन्मवेळ
            </label>
            <input
              type="text"
              value={personal.birthTime}
              onChange={(e) => setField("personal", "birthTime", e.target.value)}
              placeholder="उदा. सकाळी ०८:४५ वा. / 08:45 AM"
              className="w-full p-2.5 text-xs sm:text-sm rounded-xl border border-cream-border bg-cream-surface/40 focus:border-wine-700 focus:outline-hidden"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-charcoal-700 mb-1">
              Birth Place / जन्मस्थान
            </label>
            <input
              type="text"
              value={personal.birthPlace}
              onChange={(e) => setField("personal", "birthPlace", e.target.value)}
              placeholder="उदा. पुणे, महाराष्ट्र"
              className="w-full p-2.5 text-xs sm:text-sm rounded-xl border border-cream-border bg-cream-surface/40 focus:border-wine-700 focus:outline-hidden"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-charcoal-700 mb-1">
              Height / उंची
            </label>
            <input
              type="text"
              value={personal.height}
              onChange={(e) => setField("personal", "height", e.target.value)}
              placeholder="उदा. ५ फूट ९ इंच (5' 9&quot;)"
              className="w-full p-2.5 text-xs sm:text-sm rounded-xl border border-cream-border bg-cream-surface/40 focus:border-wine-700 focus:outline-hidden"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-charcoal-700 mb-1">
              Weight / वजन
            </label>
            <input
              type="text"
              value={personal.weight}
              onChange={(e) => setField("personal", "weight", e.target.value)}
              placeholder="उदा. ७० किलो / 70 kg"
              className="w-full p-2.5 text-xs sm:text-sm rounded-xl border border-cream-border bg-cream-surface/40 focus:border-wine-700 focus:outline-hidden"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-charcoal-700 mb-1">
              Blood Group / रक्तगट
            </label>
            <input
              type="text"
              value={personal.bloodGroup}
              onChange={(e) => setField("personal", "bloodGroup", e.target.value)}
              placeholder="उदा. O +ve / B +ve / A +ve"
              className="w-full p-2.5 text-xs sm:text-sm rounded-xl border border-cream-border bg-cream-surface/40 focus:border-wine-700 focus:outline-hidden"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-charcoal-700 mb-1">
              Complexion / वर्ण
            </label>
            <input
              type="text"
              value={personal.complexion}
              onChange={(e) => setField("personal", "complexion", e.target.value)}
              placeholder="उदा. गोरा (Fair) / निमगोरा (Wheatish)"
              className="w-full p-2.5 text-xs sm:text-sm rounded-xl border border-cream-border bg-cream-surface/40 focus:border-wine-700 focus:outline-hidden"
            />
          </div>
        </div>
      </div>

      {/* 2. Religion, Caste & Social Details */}
      <div className="bg-white p-6 rounded-2xl border border-cream-border shadow-card-soft space-y-4">
        <h3 className="text-base font-bold text-wine-950 font-serif">
          2. Community, Religion & Caste (धर्म, जात व कुल)
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-charcoal-700 mb-1">
              Religion / धर्म
            </label>
            <input
              type="text"
              value={personal.religion}
              onChange={(e) => setField("personal", "religion", e.target.value)}
              placeholder="उदा. हिंदू / Buddhist / Jain"
              className="w-full p-2.5 text-xs sm:text-sm rounded-xl border border-cream-border bg-cream-surface/40 focus:border-wine-700 focus:outline-hidden"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-charcoal-700 mb-1">
              Caste / जात (Optional)
            </label>
            <input
              type="text"
              value={personal.caste}
              onChange={(e) => setField("personal", "caste", e.target.value)}
              placeholder="उदा. मराठा / ब्राह्मण / कुणबी"
              className="w-full p-2.5 text-xs sm:text-sm rounded-xl border border-cream-border bg-cream-surface/40 focus:border-wine-700 focus:outline-hidden"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-charcoal-700 mb-1">
              Sub-Caste / पोटजात (Optional)
            </label>
            <input
              type="text"
              value={personal.subCaste}
              onChange={(e) => setField("personal", "subCaste", e.target.value)}
              placeholder="उदा. ९६ कुळी / देशस्थ ऋग्वेदी"
              className="w-full p-2.5 text-xs sm:text-sm rounded-xl border border-cream-border bg-cream-surface/40 focus:border-wine-700 focus:outline-hidden"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-charcoal-700 mb-1">
              Gotra / Devak / गोत्र (Optional)
            </label>
            <input
              type="text"
              value={personal.gotra}
              onChange={(e) => setField("personal", "gotra", e.target.value)}
              placeholder="उदा. कश्यप / भारद्वाज / सूर्यवंशी"
              className="w-full p-2.5 text-xs sm:text-sm rounded-xl border border-cream-border bg-cream-surface/40 focus:border-wine-700 focus:outline-hidden"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-xs font-semibold text-charcoal-700 mb-1">
              Marital Status / वैवाहिक स्थिती
            </label>
            <select
              value={personal.maritalStatus}
              onChange={(e) => setField("personal", "maritalStatus", e.target.value as any)}
              className="w-full p-2.5 text-xs sm:text-sm rounded-xl border border-cream-border bg-cream-surface/40 focus:border-wine-700 focus:outline-hidden"
            >
              <option value="Never Married">Never Married (अविवाहित)</option>
              <option value="Divorced">Divorced (घटस्फोटित)</option>
              <option value="Widowed">Widowed (विधुर / विधवा)</option>
              <option value="Awaiting Divorce">Awaiting Divorce</option>
            </select>
          </div>
        </div>
      </div>

      {/* 3. Astrology & Horoscope Details */}
      <div className="bg-white p-6 rounded-2xl border border-cream-border shadow-card-soft space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-bold text-wine-950 font-serif">
            3. Horoscope & Astrological Details (पत्रिका व कुंडली)
          </h3>
          <span className="text-[11px] text-charcoal-400">Optional</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-semibold text-charcoal-700 mb-1">
              Rashi / राशी
            </label>
            <input
              type="text"
              value={personal.rashi}
              onChange={(e) => setField("personal", "rashi", e.target.value)}
              placeholder="उदा. वृषभ / मेष / सिंह"
              className="w-full p-2.5 text-xs sm:text-sm rounded-xl border border-cream-border bg-cream-surface/40 focus:border-wine-700 focus:outline-hidden"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-charcoal-700 mb-1">
              Nakshatra / नक्षत्र
            </label>
            <input
              type="text"
              value={personal.nakshatra}
              onChange={(e) => setField("personal", "nakshatra", e.target.value)}
              placeholder="उदा. रोहिणी / अश्विनी"
              className="w-full p-2.5 text-xs sm:text-sm rounded-xl border border-cream-border bg-cream-surface/40 focus:border-wine-700 focus:outline-hidden"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-charcoal-700 mb-1">
              Charan / चरण
            </label>
            <input
              type="text"
              value={personal.charan}
              onChange={(e) => setField("personal", "charan", e.target.value)}
              placeholder="उदा. २ / ३ / ४"
              className="w-full p-2.5 text-xs sm:text-sm rounded-xl border border-cream-border bg-cream-surface/40 focus:border-wine-700 focus:outline-hidden"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-charcoal-700 mb-1">
              Nadi / नाडी
            </label>
            <input
              type="text"
              value={personal.nadi}
              onChange={(e) => setField("personal", "nadi", e.target.value)}
              placeholder="उदा. आद्य / मध्य / अंत्य"
              className="w-full p-2.5 text-xs sm:text-sm rounded-xl border border-cream-border bg-cream-surface/40 focus:border-wine-700 focus:outline-hidden"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-charcoal-700 mb-1">
              Gan / गण
            </label>
            <input
              type="text"
              value={personal.gan}
              onChange={(e) => setField("personal", "gan", e.target.value)}
              placeholder="उदा. मनुष्य / देव / राक्षस"
              className="w-full p-2.5 text-xs sm:text-sm rounded-xl border border-cream-border bg-cream-surface/40 focus:border-wine-700 focus:outline-hidden"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-charcoal-700 mb-1">
              Manglik / मंगळ
            </label>
            <select
              value={personal.manglik}
              onChange={(e) => setField("personal", "manglik", e.target.value as any)}
              className="w-full p-2.5 text-xs sm:text-sm rounded-xl border border-cream-border bg-cream-surface/40 focus:border-wine-700 focus:outline-hidden"
            >
              <option value="No">No (नाही)</option>
              <option value="Yes">Yes (आहे)</option>
              <option value="Anshik">Anshik (सौम्य / आंशिक)</option>
              <option value="Don't Know">Don't Know (माहित नाही)</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};
