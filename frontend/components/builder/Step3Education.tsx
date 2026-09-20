"use client";

import React from "react";
import { useBiodataStore } from "@/store/useBiodataStore";

export const Step3Education: React.FC = () => {
  const { data, setField } = useBiodataStore();
  const { education } = data;

  return (
    <div className="space-y-6">
      {/* 1. Academic Credentials */}
      <div className="bg-white p-6 rounded-2xl border border-cream-border shadow-card-soft space-y-4">
        <h3 className="text-base font-bold text-wine-950 font-serif">
          1. Academic Qualifications (शैक्षणिक पात्रता)
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-charcoal-700 mb-1">
              Highest Qualification / उच्च शिक्षण *
            </label>
            <input
              type="text"
              value={education.highestEducation}
              onChange={(e) => setField("education", "highestEducation", e.target.value)}
              placeholder="उदा. B.Tech / MBA / MBBS / M.Com"
              className="w-full p-2.5 text-xs sm:text-sm rounded-xl border border-cream-border bg-cream-surface/40 focus:border-wine-700 focus:outline-hidden"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-charcoal-700 mb-1">
              Degree & Branch / सविस्तर पदवी
            </label>
            <input
              type="text"
              value={education.degreeDetails}
              onChange={(e) => setField("education", "degreeDetails", e.target.value)}
              placeholder="उदा. B.Tech in Computer Engineering (Distinction)"
              className="w-full p-2.5 text-xs sm:text-sm rounded-xl border border-cream-border bg-cream-surface/40 focus:border-wine-700 focus:outline-hidden"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-xs font-semibold text-charcoal-700 mb-1">
              College or Institute / महाविद्यालय किंवा विद्यापीठ
            </label>
            <input
              type="text"
              value={education.college}
              onChange={(e) => setField("education", "college", e.target.value)}
              placeholder="उदा. COEP Technological University, Pune"
              className="w-full p-2.5 text-xs sm:text-sm rounded-xl border border-cream-border bg-cream-surface/40 focus:border-wine-700 focus:outline-hidden"
            />
          </div>
        </div>
      </div>

      {/* 2. Professional Details */}
      <div className="bg-white p-6 rounded-2xl border border-cream-border shadow-card-soft space-y-4">
        <h3 className="text-base font-bold text-wine-950 font-serif">
          2. Career & Professional Employment (नोकरी / व्यवसाय)
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-charcoal-700 mb-1">
              Occupation Sector / व्यवसाय प्रकार
            </label>
            <input
              type="text"
              value={education.occupation}
              onChange={(e) => setField("education", "occupation", e.target.value)}
              placeholder="उदा. IT Professional / Business / Govt. Job"
              className="w-full p-2.5 text-xs sm:text-sm rounded-xl border border-cream-border bg-cream-surface/40 focus:border-wine-700 focus:outline-hidden"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-charcoal-700 mb-1">
              Designation / सध्याचे पद
            </label>
            <input
              type="text"
              value={education.designation}
              onChange={(e) => setField("education", "designation", e.target.value)}
              placeholder="उदा. Senior Software Engineer / Manager"
              className="w-full p-2.5 text-xs sm:text-sm rounded-xl border border-cream-border bg-cream-surface/40 focus:border-wine-700 focus:outline-hidden"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-charcoal-700 mb-1">
              Company or Organization / कंपनीचे नाव
            </label>
            <input
              type="text"
              value={education.companyName}
              onChange={(e) => setField("education", "companyName", e.target.value)}
              placeholder="उदा. TCS / Infosys / Private Ltd. / Self-Employed"
              className="w-full p-2.5 text-xs sm:text-sm rounded-xl border border-cream-border bg-cream-surface/40 focus:border-wine-700 focus:outline-hidden"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-charcoal-700 mb-1">
              Work Location / नोकरीचे शहर
            </label>
            <input
              type="text"
              value={education.workLocation}
              onChange={(e) => setField("education", "workLocation", e.target.value)}
              placeholder="उदा. पुणे / मुंबई / बंगळुरू / Hybrid"
              className="w-full p-2.5 text-xs sm:text-sm rounded-xl border border-cream-border bg-cream-surface/40 focus:border-wine-700 focus:outline-hidden"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-charcoal-700 mb-1">
              Annual Income (CTC) / वार्षिक उत्पन्न
            </label>
            <input
              type="text"
              value={education.annualIncome}
              onChange={(e) => setField("education", "annualIncome", e.target.value)}
              placeholder="उदा. ₹ २४,००,००० /- (24 LPA)"
              className="w-full p-2.5 text-xs sm:text-sm rounded-xl border border-cream-border bg-cream-surface/40 focus:border-wine-700 focus:outline-hidden"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-charcoal-700 mb-1">
              Languages Known / अवगत भाषा
            </label>
            <input
              type="text"
              value={education.languagesKnown}
              onChange={(e) => setField("education", "languagesKnown", e.target.value)}
              placeholder="उदा. मराठी, English, हिंदी"
              className="w-full p-2.5 text-xs sm:text-sm rounded-xl border border-cream-border bg-cream-surface/40 focus:border-wine-700 focus:outline-hidden"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
