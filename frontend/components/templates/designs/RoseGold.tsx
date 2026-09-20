import React from "react";
import { BiodataData } from "@/types/biodata";
import { FieldRow, DeityHeader, TemplatePhoto } from "../TemplateHelpers";
import { FiligreeCorner } from "../../common/AuspiciousSymbols";

export const RoseGoldTemplate: React.FC<{ data: BiodataData }> = ({ data }) => {
  const { profile, personal, education, family, expectations, contact, design } = data;
  const isMarathi = profile.language === "mr";
  const primaryRoseGold = "#B76E79";
  const metallicRose = "#C9897E";
  const darkWine = "#4A1521";

  return (
    <div className="relative w-full max-w-[794px] min-h-[1123px] bg-[#FCF8F4] text-[#2F2124] p-8 sm:p-12 shadow-2xl mx-auto border-[10px] border-[#F2DDD9] print:border-[8px] print:shadow-none font-serif select-none overflow-hidden">
      {/* Radiant Double Rose-Gold Inset Borders */}
      <div className="absolute inset-3 border-2 border-[#B76E79]/80 pointer-events-none" />
      <div className="absolute inset-4.5 border border-[#C9897E]/40 pointer-events-none" />

      {/* Ornate Rose-Gold Baroque Filigree Corners */}
      <div className="absolute top-4 left-4 pointer-events-none">
        <FiligreeCorner color={primaryRoseGold} className="w-16 h-16" />
      </div>
      <div className="absolute top-4 right-4 pointer-events-none">
        <FiligreeCorner color={primaryRoseGold} flipX className="w-16 h-16" />
      </div>
      <div className="absolute bottom-4 left-4 pointer-events-none">
        <FiligreeCorner color={primaryRoseGold} flipY className="w-16 h-16" />
      </div>
      <div className="absolute bottom-4 right-4 pointer-events-none">
        <FiligreeCorner color={primaryRoseGold} flipX flipY className="w-16 h-16" />
      </div>

      {/* Top Deity Invocation */}
      <div className="text-center pt-2 pb-2">
        <DeityHeader
          symbol={profile.deitySymbol || "ganesh"}
          title={profile.deityName || (isMarathi ? "॥ श्री गणेशाय नमः ॥" : "|| Shree Ganeshaya Namaha ||")}
          color={primaryRoseGold}
          className="my-1"
        />
      </div>

      {/* Candidate Name & Header with Photo */}
      <div className="flex flex-row items-center justify-between gap-4 pb-4 px-3 border-b-2 border-[#B76E79]/40 mt-1">
        <div className="flex-1 text-left">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-wide text-[#4A1521] font-serif">
            {personal.fullName || (isMarathi ? "शुभम यादव" : "Shubham Yadav")}
          </h1>
          <p className="text-sm font-semibold tracking-wider text-[#B76E79] mt-1 font-sans">
            {education.designation || education.occupation || "Software Developer"}
          </p>
        </div>

        {design?.showPhoto && profile.photoUrl && (
          <div className="shrink-0">
            <TemplatePhoto
              url={profile.photoUrl}
              shape={profile.photoShape}
              borderColor={primaryRoseGold}
              className="w-24 h-32 sm:w-28 sm:h-36 shadow-lg border-[3px] rounded-lg"
            />
          </div>
        )}
      </div>

      {/* 2-Column Main Details Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mt-5 px-3">
        {/* Personal Details */}
        <div className="space-y-1">
          <div className="pb-1 mb-2 border-b-2 border-[#B76E79]/30 flex items-center gap-2">
            <span className="text-[#B76E79]">❖</span>
            <h3 className="text-sm sm:text-base font-bold tracking-wider text-[#4A1521] uppercase">
              {isMarathi ? "वैयक्तिक माहिती" : "Personal Details"}
            </h3>
          </div>
          <div className="text-xs sm:text-sm space-y-1">
            <FieldRow label={isMarathi ? "जन्मतारीख" : "Date of Birth"} value={personal.dob} accentColor={primaryRoseGold} className="py-0.5 text-xs text-[#2F2124]" />
            <FieldRow label={isMarathi ? "जन्मवेळ" : "Time of Birth"} value={personal.birthTime} accentColor={primaryRoseGold} className="py-0.5 text-xs text-[#2F2124]" />
            <FieldRow label={isMarathi ? "जन्मस्थान" : "Place of Birth"} value={personal.birthPlace} accentColor={primaryRoseGold} className="py-0.5 text-xs text-[#2F2124]" />
            <FieldRow label={isMarathi ? "उंची" : "Height"} value={personal.height} accentColor={primaryRoseGold} className="py-0.5 text-xs text-[#2F2124]" />
            <FieldRow label={isMarathi ? "वर्ण" : "Complexion"} value={personal.complexion} accentColor={primaryRoseGold} className="py-0.5 text-xs text-[#2F2124]" />
            <FieldRow label={isMarathi ? "धर्म" : "Religion"} value={personal.religion} accentColor={primaryRoseGold} className="py-0.5 text-xs text-[#2F2124]" />
            <FieldRow label={isMarathi ? "जात / उपजात" : "Caste / Sub Caste"} value={`${personal.caste || ""} ${personal.subCaste ? `(${personal.subCaste})` : ""}`} accentColor={primaryRoseGold} className="py-0.5 text-xs text-[#2F2124]" />
            <FieldRow label={isMarathi ? "गोत्र" : "Gotra"} value={personal.gotra} accentColor={primaryRoseGold} className="py-0.5 text-xs text-[#2F2124]" />
            {design?.showAstrology && (
              <>
                <FieldRow label={isMarathi ? "राशी" : "Rashi"} value={personal.rashi} accentColor={primaryRoseGold} className="py-0.5 text-xs text-[#2F2124]" />
                <FieldRow label={isMarathi ? "नक्षत्र" : "Nakshatra"} value={personal.nakshatra} accentColor={primaryRoseGold} className="py-0.5 text-xs text-[#2F2124]" />
                <FieldRow label={isMarathi ? "मांगलिक" : "Manglik"} value={personal.manglik} accentColor={primaryRoseGold} className="py-0.5 text-xs text-[#2F2124]" />
              </>
            )}
          </div>
        </div>

        {/* Education & Career */}
        <div className="space-y-1">
          <div className="pb-1 mb-2 border-b-2 border-[#B76E79]/30 flex items-center gap-2">
            <span className="text-[#B76E79]">❖</span>
            <h3 className="text-sm sm:text-base font-bold tracking-wider text-[#4A1521] uppercase">
              {isMarathi ? "शिक्षण व करिअर" : "Education & Career"}
            </h3>
          </div>
          <div className="text-xs sm:text-sm space-y-1">
            <FieldRow label={isMarathi ? "उच्च शिक्षण" : "Highest Education"} value={education.highestEducation} accentColor={primaryRoseGold} className="py-0.5 text-xs text-[#2F2124]" />
            <FieldRow label={isMarathi ? "व्यवसाय" : "Occupation"} value={education.occupation} accentColor={primaryRoseGold} className="py-0.5 text-xs text-[#2F2124]" />
            <FieldRow label={isMarathi ? "पद" : "Designation"} value={education.designation} accentColor={primaryRoseGold} className="py-0.5 text-xs text-[#2F2124]" />
            <FieldRow label={isMarathi ? "कंपनी" : "Company"} value={education.companyName} accentColor={primaryRoseGold} className="py-0.5 text-xs text-[#2F2124]" />
            <FieldRow label={isMarathi ? "वार्षिक उत्पन्न" : "Annual Income"} value={education.annualIncome} accentColor={primaryRoseGold} className="py-0.5 text-xs text-[#2F2124]" />
            <FieldRow label={isMarathi ? "कामाचे ठिकाण" : "Work Location"} value={education.workLocation} accentColor={primaryRoseGold} className="py-0.5 text-xs text-[#2F2124]" />
          </div>
        </div>
      </div>

      {/* Family Details */}
      <div className="mt-5 px-3">
        <div className="pb-1 mb-2 border-b-2 border-[#B76E79]/30 flex items-center gap-2">
          <span className="text-[#B76E79]">❖</span>
          <h3 className="text-sm sm:text-base font-bold tracking-wider text-[#4A1521] uppercase">
            {isMarathi ? "कौटुंबिक माहिती" : "Family Details"}
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1 text-xs sm:text-sm">
          <FieldRow label={isMarathi ? "वडिलांचे नाव" : "Father's Name"} value={family.fatherName} accentColor={primaryRoseGold} className="py-0.5 text-xs text-[#2F2124]" />
          <FieldRow label={isMarathi ? "वडिलांचा व्यवसाय" : "Father's Work"} value={family.fatherOccupation} accentColor={primaryRoseGold} className="py-0.5 text-xs text-[#2F2124]" />
          <FieldRow label={isMarathi ? "आईचे नाव" : "Mother's Name"} value={family.motherName} accentColor={primaryRoseGold} className="py-0.5 text-xs text-[#2F2124]" />
          <FieldRow label={isMarathi ? "आईचा व्यवसाय" : "Mother's Work"} value={family.motherOccupation} accentColor={primaryRoseGold} className="py-0.5 text-xs text-[#2F2124]" />
          <FieldRow label={isMarathi ? "भाऊ" : "Brothers"} value={family.brotherCount} accentColor={primaryRoseGold} className="py-0.5 text-xs text-[#2F2124]" />
          <FieldRow label={isMarathi ? "बहीण" : "Sisters"} value={family.sisterCount} accentColor={primaryRoseGold} className="py-0.5 text-xs text-[#2F2124]" />
          {family.nativePlace && (
            <FieldRow label={isMarathi ? "मूळ गाव" : "Native Place"} value={family.nativePlace} accentColor={primaryRoseGold} className="py-0.5 text-xs text-[#2F2124]" />
          )}
        </div>
      </div>

      {/* Expectations (if enabled) */}
      {design?.showExpectations && (
        <div className="mt-4 px-3">
          <div className="pb-1 mb-2 border-b-2 border-[#B76E79]/30 flex items-center gap-2">
            <span className="text-[#B76E79]">❖</span>
            <h3 className="text-sm sm:text-base font-bold tracking-wider text-[#4A1521] uppercase">
              {isMarathi ? "अपेक्षा" : "Partner Expectations"}
            </h3>
          </div>
          <div className="text-xs sm:text-sm space-y-1">
            <FieldRow label={isMarathi ? "अपेक्षित वय / उंची" : "Preferred Age / Height"} value={`${expectations.preferredAgeMin || ""} - ${expectations.preferredAgeMax || ""} वर्षे ${expectations.preferredHeightMin ? `• ${expectations.preferredHeightMin}` : ""}`} accentColor={primaryRoseGold} className="py-0.5 text-xs text-[#2F2124]" />
            <FieldRow label={isMarathi ? "अपेक्षित शिक्षण" : "Preferred Education"} value={expectations.preferredEducation} accentColor={primaryRoseGold} className="py-0.5 text-xs text-[#2F2124]" />
            <FieldRow label={isMarathi ? "इतर माहिती" : "Partner Expectations"} value={expectations.partnerExpectations} accentColor={primaryRoseGold} className="py-0.5 text-xs text-[#2F2124]" />
          </div>
        </div>
      )}

      {/* Contact Details */}
      <div className="mt-5 px-3">
        <div className="pb-1 mb-2 border-b-2 border-[#B76E79]/30 flex items-center gap-2">
          <span className="text-[#B76E79]">❖</span>
          <h3 className="text-sm sm:text-base font-bold tracking-wider text-[#4A1521] uppercase">
            {isMarathi ? "संपर्क माहिती" : "Contact Details"}
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1 text-xs sm:text-sm bg-[#FDF0EE] p-3 rounded-lg border border-[#B76E79]/30">
          <FieldRow label={isMarathi ? "फोन" : "Phone"} value={`${contact.phone1 || ""} ${contact.phone2 ? `/ ${contact.phone2}` : ""}`} accentColor={primaryRoseGold} className="py-0.5 text-xs text-[#2F2124]" />
          <FieldRow label={isMarathi ? "ईमेल" : "Email"} value={contact.email} accentColor={primaryRoseGold} className="py-0.5 text-xs text-[#2F2124]" />
          <div className="col-span-1 sm:col-span-2">
            <FieldRow label={isMarathi ? "पत्ता" : "Address"} value={contact.residentialAddress} accentColor={primaryRoseGold} className="py-0.5 text-xs text-[#2F2124]" />
          </div>
        </div>
      </div>
    </div>
  );
};
