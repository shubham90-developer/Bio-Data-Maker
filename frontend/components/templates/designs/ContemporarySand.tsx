import React from "react";
import { BiodataData } from "@/types/biodata";
import { FieldRow, TemplatePhoto } from "../TemplateHelpers";
import { BotanicalSprig } from "../../common/AuspiciousSymbols";

export const ContemporarySandTemplate: React.FC<{ data: BiodataData }> = ({ data }) => {
  const { profile, personal, education, family, expectations, contact, design } = data;
  const isMarathi = profile.language === "mr";
  const primaryEspresso = "#33241C";
  const terracottaAccent = "#C27D56";
  const sandBg = "#F7F2EB";

  return (
    <div className="relative w-full max-w-[794px] min-h-[1123px] bg-[#F7F2EB] text-[#33241C] p-8 sm:p-12 shadow-2xl mx-auto border border-[#E0D5C3] print:shadow-none font-serif select-none overflow-hidden">
      {/* Top Left Organic Terracotta/Sand Arch Shape */}
      <div className="absolute top-0 left-0 w-80 h-72 pointer-events-none opacity-80">
        <svg viewBox="0 0 300 250" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M0 0 L260 0 C240 120 180 220 60 230 C20 233 0 220 0 200 Z" fill="#E8D5C4" />
          <path d="M0 0 L180 0 C160 80 120 150 40 160 C10 162 0 150 0 140 Z" fill="#DFCAA7" opacity="0.6" />
        </svg>
      </div>

      {/* Bottom Right Botanical Sprig */}
      <div className="absolute bottom-2 right-2 pointer-events-none opacity-40">
        <BotanicalSprig color={terracottaAccent} flipX className="w-28 h-28" />
      </div>

      {/* Candidate Name & Header with Photo */}
      <div className="relative z-10 flex flex-row items-center justify-between gap-4 pb-4 px-2 border-b border-[#C27D56]/30 mt-4">
        <div className="flex-1 text-left">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-wide text-[#33241C] font-serif">
            {personal.fullName || (isMarathi ? "शुभम यादव" : "Shubham Yadav")}
          </h1>
          <p className="text-sm font-semibold tracking-wider text-[#C27D56] mt-1 font-sans">
            {education.designation || education.occupation || "Software Developer"}
          </p>
        </div>

        {design?.showPhoto && profile.photoUrl && (
          <div className="shrink-0">
            <TemplatePhoto
              url={profile.photoUrl}
              shape={profile.photoShape}
              borderColor={terracottaAccent}
              className="w-24 h-32 sm:w-28 sm:h-36 shadow-md border-[2.5px] rounded-full aspect-square"
            />
          </div>
        )}
      </div>

      {/* 2-Column Main Details Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mt-6 px-2">
        {/* Personal Details */}
        <div className="space-y-1">
          <div className="pb-1 mb-2 border-b-2 border-[#C27D56]/40 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C27D56]" />
            <h3 className="text-sm sm:text-base font-bold tracking-wider text-[#33241C] uppercase">
              {isMarathi ? "वैयक्तिक माहिती" : "Personal Details"}
            </h3>
          </div>
          <div className="text-xs sm:text-sm space-y-1">
            <FieldRow label={isMarathi ? "जन्मतारीख" : "Date of Birth"} value={personal.dob} accentColor={terracottaAccent} className="py-0.5 text-xs text-[#33241C]" />
            <FieldRow label={isMarathi ? "जन्मवेळ" : "Time of Birth"} value={personal.birthTime} accentColor={terracottaAccent} className="py-0.5 text-xs text-[#33241C]" />
            <FieldRow label={isMarathi ? "जन्मस्थान" : "Place of Birth"} value={personal.birthPlace} accentColor={terracottaAccent} className="py-0.5 text-xs text-[#33241C]" />
            <FieldRow label={isMarathi ? "उंची" : "Height"} value={personal.height} accentColor={terracottaAccent} className="py-0.5 text-xs text-[#33241C]" />
            <FieldRow label={isMarathi ? "वर्ण" : "Complexion"} value={personal.complexion} accentColor={terracottaAccent} className="py-0.5 text-xs text-[#33241C]" />
            <FieldRow label={isMarathi ? "धर्म" : "Religion"} value={personal.religion} accentColor={terracottaAccent} className="py-0.5 text-xs text-[#33241C]" />
            <FieldRow label={isMarathi ? "जात / उपजात" : "Caste / Sub Caste"} value={`${personal.caste || ""} ${personal.subCaste ? `(${personal.subCaste})` : ""}`} accentColor={terracottaAccent} className="py-0.5 text-xs text-[#33241C]" />
            <FieldRow label={isMarathi ? "गोत्र" : "Gotra"} value={personal.gotra} accentColor={terracottaAccent} className="py-0.5 text-xs text-[#33241C]" />
            {design?.showAstrology && (
              <>
                <FieldRow label={isMarathi ? "राशी" : "Rashi"} value={personal.rashi} accentColor={terracottaAccent} className="py-0.5 text-xs text-[#33241C]" />
                <FieldRow label={isMarathi ? "नक्षत्र" : "Nakshatra"} value={personal.nakshatra} accentColor={terracottaAccent} className="py-0.5 text-xs text-[#33241C]" />
                <FieldRow label={isMarathi ? "मांगलिक" : "Manglik"} value={personal.manglik} accentColor={terracottaAccent} className="py-0.5 text-xs text-[#33241C]" />
              </>
            )}
          </div>
        </div>

        {/* Education & Career */}
        <div className="space-y-1">
          <div className="pb-1 mb-2 border-b-2 border-[#C27D56]/40 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C27D56]" />
            <h3 className="text-sm sm:text-base font-bold tracking-wider text-[#33241C] uppercase">
              {isMarathi ? "शिक्षण व करिअर" : "Education & Career"}
            </h3>
          </div>
          <div className="text-xs sm:text-sm space-y-1">
            <FieldRow label={isMarathi ? "उच्च शिक्षण" : "Highest Education"} value={education.highestEducation} accentColor={terracottaAccent} className="py-0.5 text-xs text-[#33241C]" />
            <FieldRow label={isMarathi ? "व्यवसाय" : "Occupation"} value={education.occupation} accentColor={terracottaAccent} className="py-0.5 text-xs text-[#33241C]" />
            <FieldRow label={isMarathi ? "पद" : "Designation"} value={education.designation} accentColor={terracottaAccent} className="py-0.5 text-xs text-[#33241C]" />
            <FieldRow label={isMarathi ? "कंपनी" : "Company"} value={education.companyName} accentColor={terracottaAccent} className="py-0.5 text-xs text-[#33241C]" />
            <FieldRow label={isMarathi ? "वार्षिक उत्पन्न" : "Annual Income"} value={education.annualIncome} accentColor={terracottaAccent} className="py-0.5 text-xs text-[#33241C]" />
            <FieldRow label={isMarathi ? "कामाचे ठिकाण" : "Work Location"} value={education.workLocation} accentColor={terracottaAccent} className="py-0.5 text-xs text-[#33241C]" />
          </div>
        </div>
      </div>

      {/* Family Details */}
      <div className="relative z-10 mt-6 px-2">
        <div className="pb-1 mb-2 border-b-2 border-[#C27D56]/40 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#C27D56]" />
          <h3 className="text-sm sm:text-base font-bold tracking-wider text-[#33241C] uppercase">
            {isMarathi ? "कौटुंबिक माहिती" : "Family Details"}
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1 text-xs sm:text-sm">
          <FieldRow label={isMarathi ? "वडिलांचे नाव" : "Father's Name"} value={family.fatherName} accentColor={terracottaAccent} className="py-0.5 text-xs text-[#33241C]" />
          <FieldRow label={isMarathi ? "वडिलांचा व्यवसाय" : "Father's Work"} value={family.fatherOccupation} accentColor={terracottaAccent} className="py-0.5 text-xs text-[#33241C]" />
          <FieldRow label={isMarathi ? "आईचे नाव" : "Mother's Name"} value={family.motherName} accentColor={terracottaAccent} className="py-0.5 text-xs text-[#33241C]" />
          <FieldRow label={isMarathi ? "आईचा व्यवसाय" : "Mother's Work"} value={family.motherOccupation} accentColor={terracottaAccent} className="py-0.5 text-xs text-[#33241C]" />
          <FieldRow label={isMarathi ? "भाऊ" : "Brothers"} value={family.brotherCount} accentColor={terracottaAccent} className="py-0.5 text-xs text-[#33241C]" />
          <FieldRow label={isMarathi ? "बहीण" : "Sisters"} value={family.sisterCount} accentColor={terracottaAccent} className="py-0.5 text-xs text-[#33241C]" />
          {family.nativePlace && (
            <FieldRow label={isMarathi ? "मूळ गाव" : "Native Place"} value={family.nativePlace} accentColor={terracottaAccent} className="py-0.5 text-xs text-[#33241C]" />
          )}
        </div>
      </div>

      {/* Expectations (if enabled) */}
      {design?.showExpectations && (
        <div className="relative z-10 mt-5 px-2">
          <div className="pb-1 mb-2 border-b-2 border-[#C27D56]/40 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C27D56]" />
            <h3 className="text-sm sm:text-base font-bold tracking-wider text-[#33241C] uppercase">
              {isMarathi ? "अपेक्षा" : "Partner Expectations"}
            </h3>
          </div>
          <div className="text-xs sm:text-sm space-y-1">
            <FieldRow label={isMarathi ? "अपेक्षित वय / उंची" : "Preferred Age / Height"} value={`${expectations.preferredAgeMin || ""} - ${expectations.preferredAgeMax || ""} वर्षे ${expectations.preferredHeightMin ? `• ${expectations.preferredHeightMin}` : ""}`} accentColor={terracottaAccent} className="py-0.5 text-xs text-[#33241C]" />
            <FieldRow label={isMarathi ? "अपेक्षित शिक्षण" : "Preferred Education"} value={expectations.preferredEducation} accentColor={terracottaAccent} className="py-0.5 text-xs text-[#33241C]" />
            <FieldRow label={isMarathi ? "इतर माहिती" : "Partner Expectations"} value={expectations.partnerExpectations} accentColor={terracottaAccent} className="py-0.5 text-xs text-[#33241C]" />
          </div>
        </div>
      )}

      {/* Contact Details */}
      <div className="relative z-10 mt-6 px-2">
        <div className="pb-1 mb-2 border-b-2 border-[#C27D56]/40 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#C27D56]" />
          <h3 className="text-sm sm:text-base font-bold tracking-wider text-[#33241C] uppercase">
            {isMarathi ? "संपर्क माहिती" : "Contact Details"}
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1 text-xs sm:text-sm bg-[#EFE7DC] p-3 rounded-lg border border-[#C27D56]/30">
          <FieldRow label={isMarathi ? "फोन" : "Phone"} value={`${contact.phone1 || ""} ${contact.phone2 ? `/ ${contact.phone2}` : ""}`} accentColor={terracottaAccent} className="py-0.5 text-xs text-[#33241C]" />
          <FieldRow label={isMarathi ? "ईमेल" : "Email"} value={contact.email} accentColor={terracottaAccent} className="py-0.5 text-xs text-[#33241C]" />
          <div className="col-span-1 sm:col-span-2">
            <FieldRow label={isMarathi ? "पत्ता" : "Address"} value={contact.residentialAddress} accentColor={terracottaAccent} className="py-0.5 text-xs text-[#33241C]" />
          </div>
        </div>
      </div>
    </div>
  );
};
