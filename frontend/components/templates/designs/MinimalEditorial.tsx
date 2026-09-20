import React from "react";
import { BiodataData } from "@/types/biodata";
import { FieldRow, TemplatePhoto } from "../TemplateHelpers";
import { BotanicalSprig } from "../../common/AuspiciousSymbols";

export const MinimalEditorialTemplate: React.FC<{ data: BiodataData }> = ({ data }) => {
  const { profile, personal, education, family, expectations, contact, design } = data;
  const isMarathi = profile.language === "mr";
  const charcoalBlack = "#1A1A1A";
  const botanicalOlive = "#4A6B5B";

  return (
    <div className="relative w-full max-w-[794px] min-h-[1123px] bg-[#FFFFFF] text-[#1A1A1A] p-8 sm:p-12 shadow-2xl mx-auto border border-[#EAEAEA] print:shadow-none font-serif select-none overflow-hidden">
      {/* Delicate Botanical Sprigs in Top Right and Bottom Left */}
      <div className="absolute top-2 right-2 pointer-events-none opacity-40">
        <BotanicalSprig color={botanicalOlive} className="w-28 h-28" />
      </div>
      <div className="absolute bottom-2 left-2 pointer-events-none opacity-40">
        <BotanicalSprig color={botanicalOlive} flipX flipY className="w-28 h-28" />
      </div>

      {/* Candidate Name & Minimal Header */}
      <div className="flex flex-row items-start justify-between gap-4 pb-6 px-2 border-b border-[#1A1A1A]/20 mt-4">
        <div className="flex-1 text-left">
          <h1 className="text-3xl sm:text-4xl font-normal tracking-tight text-[#1A1A1A] font-serif">
            {personal.fullName || (isMarathi ? "शुभम यादव" : "Shubham Yadav")}
          </h1>
          <p className="text-xs font-medium tracking-[0.25em] uppercase text-[#666666] mt-2 font-sans">
            {education.designation || education.occupation || "Software Developer"}
          </p>
        </div>

        {design?.showPhoto && profile.photoUrl && (
          <div className="shrink-0">
            <TemplatePhoto
              url={profile.photoUrl}
              shape={profile.photoShape}
              borderColor="#333333"
              className="w-24 h-32 sm:w-28 sm:h-36 shadow-sm border-[1.5px] rounded-sm"
            />
          </div>
        )}
      </div>

      {/* 2-Column Editorial Details Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6 mt-6 px-2">
        {/* Column 1: Personal Details */}
        <div className="space-y-1">
          <div className="pb-1 mb-2 border-b border-[#1A1A1A]/15">
            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-[#1A1A1A] font-sans">
              {isMarathi ? "वैयक्तिक माहिती" : "Personal Details"}
            </h3>
          </div>
          <div className="text-xs sm:text-sm space-y-1 font-sans">
            <FieldRow label={isMarathi ? "जन्मतारीख" : "Date of Birth"} value={personal.dob} accentColor={botanicalOlive} className="py-0.5 text-xs text-[#1A1A1A]" />
            <FieldRow label={isMarathi ? "जन्मवेळ" : "Time of Birth"} value={personal.birthTime} accentColor={botanicalOlive} className="py-0.5 text-xs text-[#1A1A1A]" />
            <FieldRow label={isMarathi ? "जन्मस्थान" : "Place of Birth"} value={personal.birthPlace} accentColor={botanicalOlive} className="py-0.5 text-xs text-[#1A1A1A]" />
            <FieldRow label={isMarathi ? "उंची" : "Height"} value={personal.height} accentColor={botanicalOlive} className="py-0.5 text-xs text-[#1A1A1A]" />
            <FieldRow label={isMarathi ? "वर्ण" : "Complexion"} value={personal.complexion} accentColor={botanicalOlive} className="py-0.5 text-xs text-[#1A1A1A]" />
            <FieldRow label={isMarathi ? "धर्म" : "Religion"} value={personal.religion} accentColor={botanicalOlive} className="py-0.5 text-xs text-[#1A1A1A]" />
            <FieldRow label={isMarathi ? "जात / उपजात" : "Caste / Sub Caste"} value={`${personal.caste || ""} ${personal.subCaste ? `(${personal.subCaste})` : ""}`} accentColor={botanicalOlive} className="py-0.5 text-xs text-[#1A1A1A]" />
            <FieldRow label={isMarathi ? "गोत्र" : "Gotra"} value={personal.gotra} accentColor={botanicalOlive} className="py-0.5 text-xs text-[#1A1A1A]" />
            {design?.showAstrology && (
              <>
                <FieldRow label={isMarathi ? "राशी" : "Rashi"} value={personal.rashi} accentColor={botanicalOlive} className="py-0.5 text-xs text-[#1A1A1A]" />
                <FieldRow label={isMarathi ? "नक्षत्र" : "Nakshatra"} value={personal.nakshatra} accentColor={botanicalOlive} className="py-0.5 text-xs text-[#1A1A1A]" />
                <FieldRow label={isMarathi ? "मांगलिक" : "Manglik"} value={personal.manglik} accentColor={botanicalOlive} className="py-0.5 text-xs text-[#1A1A1A]" />
              </>
            )}
          </div>
        </div>

        {/* Column 2: Education & Career */}
        <div className="space-y-1">
          <div className="pb-1 mb-2 border-b border-[#1A1A1A]/15">
            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-[#1A1A1A] font-sans">
              {isMarathi ? "शिक्षण व करिअर" : "Education & Career"}
            </h3>
          </div>
          <div className="text-xs sm:text-sm space-y-1 font-sans">
            <FieldRow label={isMarathi ? "उच्च शिक्षण" : "Highest Education"} value={education.highestEducation} accentColor={botanicalOlive} className="py-0.5 text-xs text-[#1A1A1A]" />
            <FieldRow label={isMarathi ? "व्यवसाय" : "Occupation"} value={education.occupation} accentColor={botanicalOlive} className="py-0.5 text-xs text-[#1A1A1A]" />
            <FieldRow label={isMarathi ? "पद" : "Designation"} value={education.designation} accentColor={botanicalOlive} className="py-0.5 text-xs text-[#1A1A1A]" />
            <FieldRow label={isMarathi ? "कंपनी" : "Company"} value={education.companyName} accentColor={botanicalOlive} className="py-0.5 text-xs text-[#1A1A1A]" />
            <FieldRow label={isMarathi ? "वार्षिक उत्पन्न" : "Annual Income"} value={education.annualIncome} accentColor={botanicalOlive} className="py-0.5 text-xs text-[#1A1A1A]" />
            <FieldRow label={isMarathi ? "कामाचे ठिकाण" : "Work Location"} value={education.workLocation} accentColor={botanicalOlive} className="py-0.5 text-xs text-[#1A1A1A]" />
          </div>
        </div>
      </div>

      {/* Family Details & Expectations */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6 mt-6 px-2">
        {/* Family Details */}
        <div className="space-y-1">
          <div className="pb-1 mb-2 border-b border-[#1A1A1A]/15">
            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-[#1A1A1A] font-sans">
              {isMarathi ? "कौटुंबिक माहिती" : "Family Details"}
            </h3>
          </div>
          <div className="text-xs sm:text-sm space-y-1 font-sans">
            <FieldRow label={isMarathi ? "वडिलांचे नाव" : "Father's Name"} value={family.fatherName} accentColor={botanicalOlive} className="py-0.5 text-xs text-[#1A1A1A]" />
            <FieldRow label={isMarathi ? "आईचे नाव" : "Mother's Name"} value={family.motherName} accentColor={botanicalOlive} className="py-0.5 text-xs text-[#1A1A1A]" />
            <FieldRow label={isMarathi ? "भाऊ" : "Brothers"} value={family.brotherCount} accentColor={botanicalOlive} className="py-0.5 text-xs text-[#1A1A1A]" />
            <FieldRow label={isMarathi ? "बहीण" : "Sisters"} value={family.sisterCount} accentColor={botanicalOlive} className="py-0.5 text-xs text-[#1A1A1A]" />
            {family.nativePlace && (
              <FieldRow label={isMarathi ? "मूळ गाव" : "Native Place"} value={family.nativePlace} accentColor={botanicalOlive} className="py-0.5 text-xs text-[#1A1A1A]" />
            )}
          </div>
        </div>

        {/* Expectations */}
        {design?.showExpectations && (
          <div className="space-y-1">
            <div className="pb-1 mb-2 border-b border-[#1A1A1A]/15">
              <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-[#1A1A1A] font-sans">
                {isMarathi ? "अपेक्षा" : "Expectations"}
              </h3>
            </div>
            <div className="text-xs sm:text-sm space-y-1 font-sans">
              <FieldRow label={isMarathi ? "अपेक्षित वय / उंची" : "Preferred Age"} value={`${expectations.preferredAgeMin || ""} - ${expectations.preferredAgeMax || ""} वर्षे`} accentColor={botanicalOlive} className="py-0.5 text-xs text-[#1A1A1A]" />
              <FieldRow label={isMarathi ? "अपेक्षित शिक्षण" : "Education"} value={expectations.preferredEducation} accentColor={botanicalOlive} className="py-0.5 text-xs text-[#1A1A1A]" />
              <FieldRow label={isMarathi ? "इतर माहिती" : "Partner Note"} value={expectations.partnerExpectations} accentColor={botanicalOlive} className="py-0.5 text-xs text-[#1A1A1A]" />
            </div>
          </div>
        )}
      </div>

      {/* Contact Details */}
      <div className="mt-8 px-2">
        <div className="pb-1 mb-2 border-b border-[#1A1A1A]/15">
          <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-[#1A1A1A] font-sans">
            {isMarathi ? "संपर्क माहिती" : "Contact Details"}
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-1 text-xs sm:text-sm font-sans">
          <FieldRow label={isMarathi ? "फोन" : "Phone"} value={`${contact.phone1 || ""} ${contact.phone2 ? `/ ${contact.phone2}` : ""}`} accentColor={botanicalOlive} className="py-0.5 text-xs text-[#1A1A1A]" />
          <FieldRow label={isMarathi ? "ईमेल" : "Email"} value={contact.email} accentColor={botanicalOlive} className="py-0.5 text-xs text-[#1A1A1A]" />
          <div className="col-span-1 sm:col-span-2">
            <FieldRow label={isMarathi ? "पत्ता" : "Address"} value={contact.residentialAddress} accentColor={botanicalOlive} className="py-0.5 text-xs text-[#1A1A1A]" />
          </div>
        </div>
      </div>
    </div>
  );
};
