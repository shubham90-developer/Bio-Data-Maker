"use client";

import React from "react";
import { useBiodataStore } from "@/store/useBiodataStore";

export const Step5Expectations: React.FC = () => {
  const { data, setField } = useBiodataStore();
  const { expectations, contact } = data;

  return (
    <div className="space-y-6">
      {/* 1. Partner Expectations */}
      <div className="bg-white p-6 rounded-2xl border border-cream-border shadow-card-soft space-y-4">
        <h3 className="text-base font-bold text-wine-950 font-serif">
          1. Partner Preferences & Expectations (अपेक्षित जोडीदार)
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-charcoal-700 mb-1">
              Preferred Age Range / अपेक्षित वय
            </label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={expectations.preferredAgeMin}
                onChange={(e) => setField("expectations", "preferredAgeMin", e.target.value)}
                placeholder="२४"
                className="w-1/2 p-2.5 text-xs sm:text-sm rounded-xl border border-cream-border bg-cream-surface/40 focus:border-wine-700 focus:outline-hidden text-center"
              />
              <span className="text-xs text-charcoal-400">ते</span>
              <input
                type="text"
                value={expectations.preferredAgeMax}
                onChange={(e) => setField("expectations", "preferredAgeMax", e.target.value)}
                placeholder="२८ वर्षे"
                className="w-1/2 p-2.5 text-xs sm:text-sm rounded-xl border border-cream-border bg-cream-surface/40 focus:border-wine-700 focus:outline-hidden text-center"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-charcoal-700 mb-1">
              Preferred Height / अपेक्षित उंची
            </label>
            <input
              type="text"
              value={expectations.preferredHeightMin}
              onChange={(e) => setField("expectations", "preferredHeightMin", e.target.value)}
              placeholder="उदा. ५' २&quot; ते ५' ६&quot;"
              className="w-full p-2.5 text-xs sm:text-sm rounded-xl border border-cream-border bg-cream-surface/40 focus:border-wine-700 focus:outline-hidden"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-charcoal-700 mb-1">
              Preferred Education / अपेक्षित शिक्षण
            </label>
            <input
              type="text"
              value={expectations.preferredEducation}
              onChange={(e) => setField("expectations", "preferredEducation", e.target.value)}
              placeholder="उदा. Graduate / Engineer / Doctor / Post Graduate"
              className="w-full p-2.5 text-xs sm:text-sm rounded-xl border border-cream-border bg-cream-surface/40 focus:border-wine-700 focus:outline-hidden"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-charcoal-700 mb-1">
              Preferred Occupation / अपेक्षित नोकरी किंवा व्यवसाय
            </label>
            <input
              type="text"
              value={expectations.preferredOccupation}
              onChange={(e) => setField("expectations", "preferredOccupation", e.target.value)}
              placeholder="उदा. Working Professional / Service / Any"
              className="w-full p-2.5 text-xs sm:text-sm rounded-xl border border-cream-border bg-cream-surface/40 focus:border-wine-700 focus:outline-hidden"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-xs font-semibold text-charcoal-700 mb-1">
              Detailed Expectations / इतर सविस्तर अपेक्षा
            </label>
            <textarea
              rows={3}
              value={expectations.partnerExpectations}
              onChange={(e) => setField("expectations", "partnerExpectations", e.target.value)}
              placeholder="उदा. सुविद्य, समजूतदार, कौटुंबिक मूल्यांचा आदर करणारी आणि मोकळ्या विचारांची सुसंस्कृत मुलगी."
              className="w-full p-2.5 text-xs sm:text-sm rounded-xl border border-cream-border bg-cream-surface/40 focus:border-wine-700 focus:outline-hidden"
            />
          </div>
        </div>
      </div>

      {/* 2. Contact Information */}
      <div className="bg-white p-6 rounded-2xl border border-cream-border shadow-card-soft space-y-4">
        <h3 className="text-base font-bold text-wine-950 font-serif">
          2. Contact Details (संपर्क माहिती)
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-charcoal-700 mb-1">
              Contact Person / संपर्क व्यक्ती *
            </label>
            <input
              type="text"
              value={contact.contactPerson}
              onChange={(e) => setField("contact", "contactPerson", e.target.value)}
              placeholder="उदा. श्री. सुरेश विष्णू कुलकर्णी (वडील)"
              className="w-full p-2.5 text-xs sm:text-sm rounded-xl border border-cream-border bg-cream-surface/40 focus:border-wine-700 focus:outline-hidden"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-charcoal-700 mb-1">
              Primary Mobile Number / मोबाईल क्र. १ *
            </label>
            <input
              type="tel"
              value={contact.phone1}
              onChange={(e) => setField("contact", "phone1", e.target.value)}
              placeholder="+91 98220 12345"
              className="w-full p-2.5 text-xs sm:text-sm rounded-xl border border-cream-border bg-cream-surface/40 focus:border-wine-700 focus:outline-hidden"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-charcoal-700 mb-1">
              Alternate Mobile / दुसरा मोबाईल क्र.
            </label>
            <input
              type="tel"
              value={contact.phone2}
              onChange={(e) => setField("contact", "phone2", e.target.value)}
              placeholder="+91 98500 54321"
              className="w-full p-2.5 text-xs sm:text-sm rounded-xl border border-cream-border bg-cream-surface/40 focus:border-wine-700 focus:outline-hidden"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-charcoal-700 mb-1">
              Email Address / ईमेल आयडी
            </label>
            <input
              type="email"
              value={contact.email}
              onChange={(e) => setField("contact", "email", e.target.value)}
              placeholder="example@gmail.com"
              className="w-full p-2.5 text-xs sm:text-sm rounded-xl border border-cream-border bg-cream-surface/40 focus:border-wine-700 focus:outline-hidden"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-xs font-semibold text-charcoal-700 mb-1">
              Residential Address / पत्रव्यवहाराचा पत्ता
            </label>
            <textarea
              rows={2}
              value={contact.residentialAddress}
              onChange={(e) => setField("contact", "residentialAddress", e.target.value)}
              placeholder="उदा. फ्लॅट क्र. ४०२, आनंद रेसिडेन्सी, कर्वे नगर, पुणे - ४११०५२"
              className="w-full p-2.5 text-xs sm:text-sm rounded-xl border border-cream-border bg-cream-surface/40 focus:border-wine-700 focus:outline-hidden"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
