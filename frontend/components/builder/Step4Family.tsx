"use client";

import React from "react";
import { useBiodataStore } from "@/store/useBiodataStore";

export const Step4Family: React.FC = () => {
  const { data, setField } = useBiodataStore();
  const { family } = data;

  return (
    <div className="space-y-6">
      {/* 1. Parents Background */}
      <div className="bg-white p-6 rounded-2xl border border-cream-border shadow-card-soft space-y-4">
        <h3 className="text-base font-bold text-wine-950 font-serif">
          1. Parents Details (आई-वडिलांची माहिती)
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-charcoal-700 mb-1">
              Father's Name / वडिलांचे नाव *
            </label>
            <input
              type="text"
              value={family.fatherName}
              onChange={(e) => setField("family", "fatherName", e.target.value)}
              placeholder="उदा. श्री. सुरेश विष्णू कुलकर्णी"
              className="w-full p-2.5 text-xs sm:text-sm rounded-xl border border-cream-border bg-cream-surface/40 focus:border-wine-700 focus:outline-hidden"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-charcoal-700 mb-1">
              Father's Occupation / वडिलांचा व्यवसाय
            </label>
            <input
              type="text"
              value={family.fatherOccupation}
              onChange={(e) => setField("family", "fatherOccupation", e.target.value)}
              placeholder="उदा. निवृत्त क्लास १ अधिकारी / व्यवसाय / शेती"
              className="w-full p-2.5 text-xs sm:text-sm rounded-xl border border-cream-border bg-cream-surface/40 focus:border-wine-700 focus:outline-hidden"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-charcoal-700 mb-1">
              Mother's Name / आईचे नाव
            </label>
            <input
              type="text"
              value={family.motherName}
              onChange={(e) => setField("family", "motherName", e.target.value)}
              placeholder="उदा. सौ. सुचित्रा सुरेश कुलकर्णी"
              className="w-full p-2.5 text-xs sm:text-sm rounded-xl border border-cream-border bg-cream-surface/40 focus:border-wine-700 focus:outline-hidden"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-charcoal-700 mb-1">
              Mother's Occupation / आईचा व्यवसाय
            </label>
            <input
              type="text"
              value={family.motherOccupation}
              onChange={(e) => setField("family", "motherOccupation", e.target.value)}
              placeholder="उदा. गृहिणी (Homemaker) / शिक्षिका"
              className="w-full p-2.5 text-xs sm:text-sm rounded-xl border border-cream-border bg-cream-surface/40 focus:border-wine-700 focus:outline-hidden"
            />
          </div>
        </div>
      </div>

      {/* 2. Siblings & Ancestry */}
      <div className="bg-white p-6 rounded-2xl border border-cream-border shadow-card-soft space-y-4">
        <h3 className="text-base font-bold text-wine-950 font-serif">
          2. Siblings & Ancestral Roots (भावंडे व मूळ गाव)
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-charcoal-700 mb-1">
              Brothers Details / भाऊ
            </label>
            <input
              type="text"
              value={family.brotherCount}
              onChange={(e) => setField("family", "brotherCount", e.target.value)}
              placeholder="उदा. १ लहान भाऊ (M.S. in USA, अविवाहित)"
              className="w-full p-2.5 text-xs sm:text-sm rounded-xl border border-cream-border bg-cream-surface/40 focus:border-wine-700 focus:outline-hidden"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-charcoal-700 mb-1">
              Sisters Details / बहीण
            </label>
            <input
              type="text"
              value={family.sisterCount}
              onChange={(e) => setField("family", "sisterCount", e.target.value)}
              placeholder="उदा. ० किंवा १ मोठी बहीण (विवाहित)"
              className="w-full p-2.5 text-xs sm:text-sm rounded-xl border border-cream-border bg-cream-surface/40 focus:border-wine-700 focus:outline-hidden"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-charcoal-700 mb-1">
              Native Place / मूळ गाव
            </label>
            <input
              type="text"
              value={family.nativePlace}
              onChange={(e) => setField("family", "nativePlace", e.target.value)}
              placeholder="उदा. कराड, जि. सातारा"
              className="w-full p-2.5 text-xs sm:text-sm rounded-xl border border-cream-border bg-cream-surface/40 focus:border-wine-700 focus:outline-hidden"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-charcoal-700 mb-1">
              Current Residence / सध्याचे वास्तव्य
            </label>
            <input
              type="text"
              value={family.familyLocation}
              onChange={(e) => setField("family", "familyLocation", e.target.value)}
              placeholder="उदा. कर्वे नगर, पुणे"
              className="w-full p-2.5 text-xs sm:text-sm rounded-xl border border-cream-border bg-cream-surface/40 focus:border-wine-700 focus:outline-hidden"
            />
          </div>
        </div>
      </div>

      {/* 3. Maternal Relatives & Surnames */}
      <div className="bg-white p-6 rounded-2xl border border-cream-border shadow-card-soft space-y-4">
        <h3 className="text-base font-bold text-wine-950 font-serif">
          3. Maternal Relatives & Surnames (मामांचे कुल व नातेसंबंध)
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-charcoal-700 mb-1">
              Maternal Uncle Name / मामांचे नाव
            </label>
            <input
              type="text"
              value={family.maternalUncleName}
              onChange={(e) => setField("family", "maternalUncleName", e.target.value)}
              placeholder="उदा. श्री. रवींद्र माधव दांडेकर"
              className="w-full p-2.5 text-xs sm:text-sm rounded-xl border border-cream-border bg-cream-surface/40 focus:border-wine-700 focus:outline-hidden"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-charcoal-700 mb-1">
              Uncle's Place / मामांचे गाव/शहर
            </label>
            <input
              type="text"
              value={family.maternalUnclePlace}
              onChange={(e) => setField("family", "maternalUnclePlace", e.target.value)}
              placeholder="उदा. कोथरूड, पुणे"
              className="w-full p-2.5 text-xs sm:text-sm rounded-xl border border-cream-border bg-cream-surface/40 focus:border-wine-700 focus:outline-hidden"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-xs font-semibold text-charcoal-700 mb-1">
              Relative Surnames / नातेसंबंधातील आडनावे
            </label>
            <input
              type="text"
              value={family.relativeSurnames}
              onChange={(e) => setField("family", "relativeSurnames", e.target.value)}
              placeholder="उदा. जोशी, कुलकर्णी, पटवर्धन, बापट, दांडेकर, देशपांडे"
              className="w-full p-2.5 text-xs sm:text-sm rounded-xl border border-cream-border bg-cream-surface/40 focus:border-wine-700 focus:outline-hidden"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
