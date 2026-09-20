import React from "react";
import { BiodataData } from "@/types/biodata";
import { FieldRow, DeityHeader, TemplatePhoto } from "../TemplateHelpers";
import { FiligreeCorner } from "../../common/AuspiciousSymbols";

export const RoyalBurgundyTemplate: React.FC<{ data: BiodataData }> = ({ data }) => {
  const { profile, personal, education, family, expectations, contact, design } = data;
  const isMarathi = profile.language === "mr";
  const primaryGold = "#E6CA65";
  const labelGold = "#D4AF37";

  return (
    <div className="relative w-full max-w-[794px] min-h-[1123px] bg-gradient-to-b from-[#380812] via-[#2A050D] to-[#1E0308] text-[#FFFDF9] p-8 sm:p-12 shadow-2xl mx-auto border-[10px] border-[#4E0A18] print:border-[8px] print:shadow-none font-serif select-none overflow-hidden">
      {/* Outer Ornate Lace Gold Border */}
      <div className="absolute inset-3 border-2 border-[#E6CA65]/80 pointer-events-none" />
      <div className="absolute inset-4.5 border border-[#E6CA65]/40 pointer-events-none" />

      {/* Ornate Gold Filigree Corners */}
      <div className="absolute top-4 left-4 pointer-events-none">
        <FiligreeCorner color={primaryGold} className="w-14 h-14" />
      </div>
      <div className="absolute top-4 right-4 pointer-events-none">
        <FiligreeCorner color={primaryGold} flipX className="w-14 h-14" />
      </div>
      <div className="absolute bottom-4 left-4 pointer-events-none">
        <FiligreeCorner color={primaryGold} flipY className="w-14 h-14" />
      </div>
      <div className="absolute bottom-4 right-4 pointer-events-none">
        <FiligreeCorner color={primaryGold} flipX flipY className="w-14 h-14" />
      </div>

      {/* Top Deity Invocation */}
      <div className="text-center pt-2 pb-2">
        <DeityHeader
          symbol={profile.deitySymbol || "ganesh"}
          title={profile.deityName || (isMarathi ? "॥ श्री गणेशाय नमः ॥" : "|| Shree Ganeshaya Namaha ||")}
          color={primaryGold}
          className="my-1"
        />
      </div>

      {/* Candidate Name & Header */}
      <div className="flex flex-row items-center justify-between gap-4 pb-4 px-3 border-b border-[#E6CA65]/40 mt-1">
        <div className="flex-1 text-left">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-wide text-[#FFFFFF] font-serif">
            {personal.fullName || (isMarathi ? "शुभम यादव" : "Shubham Yadav")}
          </h1>
          <p className="text-sm font-semibold tracking-wider text-[#E6CA65] mt-1 font-sans">
            {education.designation || education.occupation || "Software Developer"}
          </p>
        </div>

        {design?.showPhoto && profile.photoUrl && (
          <div className="shrink-0">
            <TemplatePhoto
              url={profile.photoUrl}
              shape={profile.photoShape}
              borderColor={primaryGold}
              className="w-24 h-32 sm:w-28 sm:h-36 shadow-xl border-[3px] rounded-lg"
            />
          </div>
        )}
      </div>

      {/* 2-Column Main Details Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mt-5 px-3">
        {/* Personal Details */}
        <div className="space-y-1">
          <div className="pb-1 mb-2 border-b border-[#E6CA65]/30">
            <h3 className="text-sm sm:text-base font-bold tracking-wider text-[#E6CA65] uppercase">
              {isMarathi ? "वैयक्तिक माहिती" : "Personal Details"}
            </h3>
          </div>
          <div className="text-xs sm:text-sm space-y-1">
            <FieldRow label={isMarathi ? "जन्मतारीख" : "Date of Birth"} value={personal.dob} accentColor={labelGold} className="py-0.5 text-xs text-white" />
            <FieldRow label={isMarathi ? "जन्मवेळ" : "Time of Birth"} value={personal.birthTime} accentColor={labelGold} className="py-0.5 text-xs text-white" />
            <FieldRow label={isMarathi ? "जन्मस्थान" : "Place of Birth"} value={personal.birthPlace} accentColor={labelGold} className="py-0.5 text-xs text-white" />
            <FieldRow label={isMarathi ? "उंची" : "Height"} value={personal.height} accentColor={labelGold} className="py-0.5 text-xs text-white" />
            <FieldRow label={isMarathi ? "वर्ण" : "Complexion"} value={personal.complexion} accentColor={labelGold} className="py-0.5 text-xs text-white" />
            <FieldRow label={isMarathi ? "धर्म" : "Religion"} value={personal.religion} accentColor={labelGold} className="py-0.5 text-xs text-white" />
            <FieldRow label={isMarathi ? "जात / उपजात" : "Caste / Sub Caste"} value={`${personal.caste || ""} ${personal.subCaste ? `(${personal.subCaste})` : ""}`} accentColor={labelGold} className="py-0.5 text-xs text-white" />
            <FieldRow label={isMarathi ? "गोत्र" : "Gotra"} value={personal.gotra} accentColor={labelGold} className="py-0.5 text-xs text-white" />
            {design?.showAstrology && (
              <>
                <FieldRow label={isMarathi ? "राशी" : "Rashi"} value={personal.rashi} accentColor={labelGold} className="py-0.5 text-xs text-white" />
                <FieldRow label={isMarathi ? "नक्षत्र" : "Nakshatra"} value={personal.nakshatra} accentColor={labelGold} className="py-0.5 text-xs text-white" />
                <FieldRow label={isMarathi ? "मांगलिक" : "Manglik"} value={personal.manglik} accentColor={labelGold} className="py-0.5 text-xs text-white" />
              </>
            )}
          </div>
        </div>

        {/* Education & Career */}
        <div className="space-y-1">
          <div className="pb-1 mb-2 border-b border-[#E6CA65]/30">
            <h3 className="text-sm sm:text-base font-bold tracking-wider text-[#E6CA65] uppercase">
              {isMarathi ? "शिक्षण व करिअर" : "Education & Career"}
            </h3>
          </div>
          <div className="text-xs sm:text-sm space-y-1">
            <FieldRow label={isMarathi ? "उच्च शिक्षण" : "Highest Education"} value={education.highestEducation} accentColor={labelGold} className="py-0.5 text-xs text-white" />
            <FieldRow label={isMarathi ? "व्यवसाय" : "Occupation"} value={education.occupation} accentColor={labelGold} className="py-0.5 text-xs text-white" />
            <FieldRow label={isMarathi ? "पद" : "Designation"} value={education.designation} accentColor={labelGold} className="py-0.5 text-xs text-white" />
            <FieldRow label={isMarathi ? "कंपनी" : "Company"} value={education.companyName} accentColor={labelGold} className="py-0.5 text-xs text-white" />
            <FieldRow label={isMarathi ? "वार्षिक उत्पन्न" : "Annual Income"} value={education.annualIncome} accentColor={labelGold} className="py-0.5 text-xs text-white" />
            <FieldRow label={isMarathi ? "कामाचे ठिकाण" : "Work Location"} value={education.workLocation} accentColor={labelGold} className="py-0.5 text-xs text-white" />
          </div>
        </div>
      </div>

      {/* Family Details */}
      <div className="mt-5 px-3">
        <div className="pb-1 mb-2 border-b border-[#E6CA65]/30">
          <h3 className="text-sm sm:text-base font-bold tracking-wider text-[#E6CA65] uppercase">
            {isMarathi ? "कौटुंबिक माहिती" : "Family Details"}
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1 text-xs sm:text-sm">
          <FieldRow label={isMarathi ? "वडिलांचे नाव" : "Father's Name"} value={family.fatherName} accentColor={labelGold} className="py-0.5 text-xs text-white" />
          <FieldRow label={isMarathi ? "वडिलांचा व्यवसाय" : "Father's Work"} value={family.fatherOccupation} accentColor={labelGold} className="py-0.5 text-xs text-white" />
          <FieldRow label={isMarathi ? "आईचे नाव" : "Mother's Name"} value={family.motherName} accentColor={labelGold} className="py-0.5 text-xs text-white" />
          <FieldRow label={isMarathi ? "आईचा व्यवसाय" : "Mother's Work"} value={family.motherOccupation} accentColor={labelGold} className="py-0.5 text-xs text-white" />
          <FieldRow label={isMarathi ? "भाऊ" : "Brothers"} value={family.brotherCount} accentColor={labelGold} className="py-0.5 text-xs text-white" />
          <FieldRow label={isMarathi ? "बहीण" : "Sisters"} value={family.sisterCount} accentColor={labelGold} className="py-0.5 text-xs text-white" />
          {family.nativePlace && (
            <FieldRow label={isMarathi ? "मूळ गाव" : "Native Place"} value={family.nativePlace} accentColor={labelGold} className="py-0.5 text-xs text-white" />
          )}
        </div>
      </div>

      {/* Expectations (if enabled) */}
      {design?.showExpectations && (
        <div className="mt-4 px-3">
          <div className="pb-1 mb-2 border-b border-[#E6CA65]/30">
            <h3 className="text-sm sm:text-base font-bold tracking-wider text-[#E6CA65] uppercase">
              {isMarathi ? "अपेक्षा" : "Partner Expectations"}
            </h3>
          </div>
          <div className="text-xs sm:text-sm space-y-1">
            <FieldRow label={isMarathi ? "अपेक्षित वय / उंची" : "Preferred Age / Height"} value={`${expectations.preferredAgeMin || ""} - ${expectations.preferredAgeMax || ""} वर्षे ${expectations.preferredHeightMin ? `• ${expectations.preferredHeightMin}` : ""}`} accentColor={labelGold} className="py-0.5 text-xs text-white" />
            <FieldRow label={isMarathi ? "अपेक्षित शिक्षण" : "Preferred Education"} value={expectations.preferredEducation} accentColor={labelGold} className="py-0.5 text-xs text-white" />
            <FieldRow label={isMarathi ? "इतर माहिती" : "Partner Expectations"} value={expectations.partnerExpectations} accentColor={labelGold} className="py-0.5 text-xs text-white" />
          </div>
        </div>
      )}

      {/* Contact Details */}
      <div className="mt-5 px-3">
        <div className="pb-1 mb-2 border-b border-[#E6CA65]/30">
          <h3 className="text-sm sm:text-base font-bold tracking-wider text-[#E6CA65] uppercase">
            {isMarathi ? "संपर्क माहिती" : "Contact Details"}
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1 text-xs sm:text-sm">
          <FieldRow label={isMarathi ? "फोन" : "Phone"} value={`${contact.phone1 || ""} ${contact.phone2 ? `/ ${contact.phone2}` : ""}`} accentColor={labelGold} className="py-0.5 text-xs text-white" />
          <FieldRow label={isMarathi ? "ईमेल" : "Email"} value={contact.email} accentColor={labelGold} className="py-0.5 text-xs text-white" />
          <div className="col-span-1 sm:col-span-2">
            <FieldRow label={isMarathi ? "पत्ता" : "Address"} value={contact.residentialAddress} accentColor={labelGold} className="py-0.5 text-xs text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};
