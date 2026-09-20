import React from "react";
import {
  User,
  GraduationCap,
  Briefcase,
  Users,
  Compass,
  HeartHandshake,
  Heart,
  PhoneCall,
} from "lucide-react";

export const BiodataSections: React.FC = () => {
  const sections = [
    {
      icon: User,
      title: "Personal Information",
      marathiTitle: "वैयक्तिक माहिती",
      fields: ["Full Name", "Date of Birth", "Birth Time & Place", "Height & Weight", "Blood Group & Complexion"],
    },
    {
      icon: GraduationCap,
      title: "Education",
      marathiTitle: "शैक्षणिक पात्रता",
      fields: ["Highest Degree", "Specialization Details", "College / University", "Additional Certifications"],
    },
    {
      icon: Briefcase,
      title: "Career & Profession",
      marathiTitle: "व्यवसाय व नोकरी",
      fields: ["Current Designation", "Organization / Company", "Work Location / City", "Annual Package (CTC)"],
    },
    {
      icon: Users,
      title: "Family Background",
      marathiTitle: "कौटुंबिक पार्श्वभूमी",
      fields: ["Father & Mother Occupation", "Brothers & Sisters Details", "Native Place (मूळ गाव)", "Maternal Uncle (मामांचे कुल)"],
    },
    {
      icon: Compass,
      title: "Astrology & Horoscope",
      marathiTitle: "पत्रिका व जन्मकुंडली",
      fields: ["Rashi & Nakshatra", "Charan & Nadi", "Gan & Devak", "Manglik Status (मंगळ दोष)"],
    },
    {
      icon: HeartHandshake,
      title: "Lifestyle & Interests",
      marathiTitle: "जीवनशैली व छंद",
      fields: ["Dietary Habits", "Hobbies & Activities", "Sports & Passions", "Language Proficiencies"],
    },
    {
      icon: Heart,
      title: "Partner Expectations",
      marathiTitle: "अपेक्षित जोडीदार",
      fields: ["Preferred Age & Height", "Education Preference", "Working / Non-Working", "Location Flexibility"],
    },
    {
      icon: PhoneCall,
      title: "Contact & Address",
      marathiTitle: "संपर्क व पत्ता",
      fields: ["Primary Contact Person", "WhatsApp Numbers", "Email Address", "Current Residence Address"],
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#FAF7F2] border-y border-[#E0D5C3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-gold-700 uppercase tracking-widest block mb-2 font-sans">
            Comprehensive Architecture • सर्वसमावेशक माहिती
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-serifDevanagari text-wine-950">
            बायोडाटामध्ये समाविष्ट असणारे प्रमुख विभाग
          </h2>
          <p className="text-charcoal-600 text-sm sm:text-base mt-3">
            Every section is fully modular—fill in what matters to your family, and hide or re-order fields with ease.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sections.map((sec, idx) => {
            const Icon = sec.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 border border-[#E7D6A7] shadow-card-soft hover:shadow-royal transition-all duration-200"
              >
                <div className="flex items-center gap-3 pb-3 border-b border-[#F0E8DC] mb-3">
                  <div className="w-10 h-10 rounded-xl bg-wine-50 text-wine-800 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-wine-950 text-sm font-serif">
                      {sec.title}
                    </h3>
                    <p className="text-xs font-semibold text-gold-700 font-serifDevanagari">
                      {sec.marathiTitle}
                    </p>
                  </div>
                </div>

                <ul className="space-y-1.5 text-xs text-charcoal-600">
                  {sec.fields.map((f, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
