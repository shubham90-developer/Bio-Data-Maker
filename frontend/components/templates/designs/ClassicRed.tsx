import React from "react";
import { BiodataData } from "@/types/biodata";
import { FieldRow, DeityHeader, TemplatePhoto } from "../TemplateHelpers";
import { CornerOrnament } from "../../common/AuspiciousSymbols";

export const ClassicRedTemplate: React.FC<{ data: BiodataData }> = ({ data }) => {
  const { profile, personal, education, family, expectations, contact, design } = data;
  const isMarathi = profile.language === "mr";
  const weddingRed = "#991B1B";
  const goldAccent = "#D4AF37";

  return (
    <div className="relative w-full max-w-[794px] min-h-[1123px] bg-[#FFFDF8] text-[#2C1D1D] p-6 sm:p-10 shadow-2xl mx-auto border-[10px] border-[#991B1B] print:border-[8px] print:shadow-none font-devanagari select-none overflow-hidden">
      {/* Traditional Double Gold & Red Inset Borders */}
      <div className="absolute inset-2.5 border-2 border-[#D4AF37] pointer-events-none" />
      <div className="absolute inset-4 border border-[#991B1B]/40 pointer-events-none" />

      {/* Traditional Corner Ornaments */}
      <div className="absolute top-4 left-4 pointer-events-none">
        <CornerOrnament color={weddingRed} className="w-12 h-12" />
      </div>
      <div className="absolute top-4 right-4 pointer-events-none">
        <CornerOrnament color={weddingRed} flipX className="w-12 h-12" />
      </div>
      <div className="absolute bottom-4 left-4 pointer-events-none">
        <CornerOrnament color={weddingRed} flipY className="w-12 h-12" />
      </div>
      <div className="absolute bottom-4 right-4 pointer-events-none">
        <CornerOrnament color={weddingRed} flipX flipY className="w-12 h-12" />
      </div>

      {/* Top Deity & Invocation */}
      <div className="text-center pt-2 pb-2">
        <DeityHeader
          symbol={profile.deitySymbol || "ganesh"}
          title={profile.deityName || "॥ श्री गणेशाय नमः ॥"}
          color={weddingRed}
          className="my-1"
        />
      </div>

      {/* Candidate Name & Header with Photo */}
      <div className="flex flex-row items-center justify-between gap-4 pb-3 px-3 border-b-2 border-[#991B1B]/30 mt-1">
        <div className="flex-1 text-left">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-wide text-[#991B1B] font-serifDevanagari">
            {personal.fullName || (isMarathi ? "शुभम यादव" : "Shubham Yadav")}
          </h1>
          <p className="text-sm font-semibold tracking-wider text-[#8B6D2E] mt-1 font-serifDevanagari">
            {education.designation || education.occupation || (isMarathi ? "सॉफ्टवेअर अभियंता" : "Software Developer")}
          </p>
        </div>

        {design?.showPhoto && profile.photoUrl && (
          <div className="shrink-0">
            <TemplatePhoto
              url={profile.photoUrl}
              shape={profile.photoShape}
              borderColor={weddingRed}
              className="w-24 h-32 sm:w-28 sm:h-36 shadow-md border-[3px] rounded-md"
            />
          </div>
        )}
      </div>

      {/* 2-Column Main Details Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mt-5 px-3">
        {/* वैयक्तिक माहिती */}
        <div className="space-y-1">
          <div className="pb-1 mb-2 border-b-2 border-[#991B1B]/30 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#991B1B]" />
            <h3 className="text-sm sm:text-base font-bold tracking-wider text-[#991B1B] font-serifDevanagari">
              {isMarathi ? "वैयक्तिक माहिती" : "Personal Details"}
            </h3>
          </div>
          <div className="text-xs sm:text-sm space-y-1">
            <FieldRow label={isMarathi ? "जन्म तारीख" : "Date of Birth"} value={personal.dob} accentColor={weddingRed} className="py-0.5 text-xs text-[#2C1D1D]" />
            <FieldRow label={isMarathi ? "जन्म वेळ" : "Time of Birth"} value={personal.birthTime} accentColor={weddingRed} className="py-0.5 text-xs text-[#2C1D1D]" />
            <FieldRow label={isMarathi ? "जन्म स्थळ" : "Place of Birth"} value={personal.birthPlace} accentColor={weddingRed} className="py-0.5 text-xs text-[#2C1D1D]" />
            <FieldRow label={isMarathi ? "उंची" : "Height"} value={personal.height} accentColor={weddingRed} className="py-0.5 text-xs text-[#2C1D1D]" />
            <FieldRow label={isMarathi ? "वर्ण" : "Complexion"} value={personal.complexion} accentColor={weddingRed} className="py-0.5 text-xs text-[#2C1D1D]" />
            <FieldRow label={isMarathi ? "धर्म" : "Religion"} value={personal.religion} accentColor={weddingRed} className="py-0.5 text-xs text-[#2C1D1D]" />
            <FieldRow label={isMarathi ? "जात" : "Caste"} value={personal.caste} accentColor={weddingRed} className="py-0.5 text-xs text-[#2C1D1D]" />
            <FieldRow label={isMarathi ? "उपजात" : "Sub Caste"} value={personal.subCaste} accentColor={weddingRed} className="py-0.5 text-xs text-[#2C1D1D]" />
            <FieldRow label={isMarathi ? "गोत्र" : "Gotra"} value={personal.gotra} accentColor={weddingRed} className="py-0.5 text-xs text-[#2C1D1D]" />
            {design?.showAstrology && (
              <>
                <FieldRow label={isMarathi ? "राशी" : "Rashi"} value={personal.rashi} accentColor={weddingRed} className="py-0.5 text-xs text-[#2C1D1D]" />
                <FieldRow label={isMarathi ? "नक्षत्र" : "Nakshatra"} value={personal.nakshatra} accentColor={weddingRed} className="py-0.5 text-xs text-[#2C1D1D]" />
                <FieldRow label={isMarathi ? "मांगलिक" : "Manglik"} value={personal.manglik} accentColor={weddingRed} className="py-0.5 text-xs text-[#2C1D1D]" />
              </>
            )}
          </div>
        </div>

        {/* शिक्षण व व्यवसाय */}
        <div className="space-y-1">
          <div className="pb-1 mb-2 border-b-2 border-[#991B1B]/30 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#991B1B]" />
            <h3 className="text-sm sm:text-base font-bold tracking-wider text-[#991B1B] font-serifDevanagari">
              {isMarathi ? "शिक्षण व व्यवसाय" : "Education & Career"}
            </h3>
          </div>
          <div className="text-xs sm:text-sm space-y-1">
            <FieldRow label={isMarathi ? "शिक्षण" : "Highest Education"} value={education.highestEducation} accentColor={weddingRed} className="py-0.5 text-xs text-[#2C1D1D]" />
            <FieldRow label={isMarathi ? "व्यवसाय" : "Occupation"} value={education.occupation} accentColor={weddingRed} className="py-0.5 text-xs text-[#2C1D1D]" />
            <FieldRow label={isMarathi ? "पद" : "Designation"} value={education.designation} accentColor={weddingRed} className="py-0.5 text-xs text-[#2C1D1D]" />
            <FieldRow label={isMarathi ? "कंपनी" : "Company"} value={education.companyName} accentColor={weddingRed} className="py-0.5 text-xs text-[#2C1D1D]" />
            <FieldRow label={isMarathi ? "वार्षिक उत्पन्न" : "Annual Income"} value={education.annualIncome} accentColor={weddingRed} className="py-0.5 text-xs text-[#2C1D1D]" />
            <FieldRow label={isMarathi ? "कामाचे ठिकाण" : "Work Location"} value={education.workLocation} accentColor={weddingRed} className="py-0.5 text-xs text-[#2C1D1D]" />
          </div>
        </div>
      </div>

      {/* कौटुंबिक माहिती */}
      <div className="mt-5 px-3">
        <div className="pb-1 mb-2 border-b-2 border-[#991B1B]/30 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#991B1B]" />
          <h3 className="text-sm sm:text-base font-bold tracking-wider text-[#991B1B] font-serifDevanagari">
            {isMarathi ? "कौटुंबिक माहिती" : "Family Details"}
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1 text-xs sm:text-sm">
          <FieldRow label={isMarathi ? "वडिलांचे नाव" : "Father's Name"} value={family.fatherName} accentColor={weddingRed} className="py-0.5 text-xs text-[#2C1D1D]" />
          <FieldRow label={isMarathi ? "वडिलांचा व्यवसाय" : "Father's Work"} value={family.fatherOccupation} accentColor={weddingRed} className="py-0.5 text-xs text-[#2C1D1D]" />
          <FieldRow label={isMarathi ? "आईचे नाव" : "Mother's Name"} value={family.motherName} accentColor={weddingRed} className="py-0.5 text-xs text-[#2C1D1D]" />
          <FieldRow label={isMarathi ? "आईचा व्यवसाय" : "Mother's Work"} value={family.motherOccupation} accentColor={weddingRed} className="py-0.5 text-xs text-[#2C1D1D]" />
          <FieldRow label={isMarathi ? "भाऊ" : "Brothers"} value={family.brotherCount} accentColor={weddingRed} className="py-0.5 text-xs text-[#2C1D1D]" />
          <FieldRow label={isMarathi ? "बहीण" : "Sisters"} value={family.sisterCount} accentColor={weddingRed} className="py-0.5 text-xs text-[#2C1D1D]" />
          {family.nativePlace && (
            <FieldRow label={isMarathi ? "मूळ गाव" : "Native Place"} value={family.nativePlace} accentColor={weddingRed} className="py-0.5 text-xs text-[#2C1D1D]" />
          )}
        </div>
      </div>

      {/* अपेक्षा (if enabled) */}
      {design?.showExpectations && (
        <div className="mt-4 px-3">
          <div className="pb-1 mb-2 border-b-2 border-[#991B1B]/30 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#991B1B]" />
            <h3 className="text-sm sm:text-base font-bold tracking-wider text-[#991B1B] font-serifDevanagari">
              {isMarathi ? "अपेक्षा" : "Partner Expectations"}
            </h3>
          </div>
          <div className="text-xs sm:text-sm space-y-1">
            <FieldRow label={isMarathi ? "अपेक्षित वय / उंची" : "Preferred Age / Height"} value={`${expectations.preferredAgeMin || ""} ते ${expectations.preferredAgeMax || ""} वर्षे ${expectations.preferredHeightMin ? `• ${expectations.preferredHeightMin}` : ""}`} accentColor={weddingRed} className="py-0.5 text-xs text-[#2C1D1D]" />
            <FieldRow label={isMarathi ? "अपेक्षित शिक्षण" : "Preferred Education"} value={expectations.preferredEducation} accentColor={weddingRed} className="py-0.5 text-xs text-[#2C1D1D]" />
            <FieldRow label={isMarathi ? "इतर अपेक्षा" : "Other Expectations"} value={expectations.partnerExpectations} accentColor={weddingRed} className="py-0.5 text-xs text-[#2C1D1D]" />
          </div>
        </div>
      )}

      {/* संपर्क */}
      <div className="mt-5 px-3">
        <div className="pb-1 mb-2 border-b-2 border-[#991B1B]/30 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#991B1B]" />
          <h3 className="text-sm sm:text-base font-bold tracking-wider text-[#991B1B] font-serifDevanagari">
            {isMarathi ? "संपर्क माहिती" : "Contact Details"}
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1 text-xs sm:text-sm bg-[#FFF5F5] p-3 rounded-lg border border-[#991B1B]/25">
          <FieldRow label={isMarathi ? "फोन" : "Phone"} value={`${contact.phone1 || ""} ${contact.phone2 ? `/ ${contact.phone2}` : ""}`} accentColor={weddingRed} className="py-0.5 text-xs text-[#2C1D1D]" />
          <FieldRow label={isMarathi ? "ईमेल" : "Email"} value={contact.email} accentColor={weddingRed} className="py-0.5 text-xs text-[#2C1D1D]" />
          <div className="col-span-1 sm:col-span-2">
            <FieldRow label={isMarathi ? "पत्ता" : "Address"} value={contact.residentialAddress} accentColor={weddingRed} className="py-0.5 text-xs text-[#2C1D1D]" />
          </div>
        </div>
      </div>
    </div>
  );
};
