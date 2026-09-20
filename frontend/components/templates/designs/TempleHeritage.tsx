import React from "react";
import { BiodataData } from "@/types/biodata";
import { FieldRow, DeityHeader, TemplatePhoto } from "../TemplateHelpers";
import { TempleHeaderArt } from "../../common/AuspiciousSymbols";

export const TempleHeritageTemplate: React.FC<{ data: BiodataData }> = ({ data }) => {
  const { profile, personal, education, family, expectations, contact, design } = data;
  const isMarathi = profile.language === "mr";
  const primaryTerracotta = "#84301D";
  const brassGold = "#B38728";

  return (
    <div className="relative w-full max-w-[794px] min-h-[1123px] bg-[#F7EFE1] text-[#2F211C] p-6 sm:p-10 shadow-2xl mx-auto border-[10px] border-[#84301D] print:border-[8px] print:shadow-none font-serif select-none overflow-hidden">
      {/* Sacred Ochre & Brass Inset Border */}
      <div className="absolute inset-2 border-2 border-[#B38728] pointer-events-none" />
      <div className="absolute inset-3.5 border border-[#84301D]/40 pointer-events-none" />

      {/* Background Etched Temple Gopuram & Bells Header Art */}
      <div className="w-full -mt-2 mb-1">
        <TempleHeaderArt className="w-full h-24" color={primaryTerracotta} />
      </div>

      {/* Top Deity & Title */}
      <div className="text-center pb-2">
        <DeityHeader
          symbol={profile.deitySymbol || "kalash"}
          title={profile.deityName || (isMarathi ? "॥ श्री गणेशाय नमः ॥" : "|| Shree Ganeshaya Namaha ||")}
          color={primaryTerracotta}
          className="my-0.5"
        />
      </div>

      {/* Candidate Name & Header with Photo */}
      <div className="flex flex-row items-center justify-between gap-4 pb-3 px-2 border-b-2 border-[#84301D]/30 mt-1">
        <div className="flex-1 text-left">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-wide text-[#84301D] font-serifDevanagari">
            {personal.fullName || (isMarathi ? "शुभम यादव" : "Shubham Yadav")}
          </h1>
          <p className="text-sm font-semibold tracking-wider text-[#B38728] mt-1 font-serifDevanagari">
            {education.designation || education.occupation || (isMarathi ? "सॉफ्टवेअर अभियंता" : "Software Developer")}
          </p>
        </div>

        {design?.showPhoto && profile.photoUrl && (
          <div className="shrink-0">
            <TemplatePhoto
              url={profile.photoUrl}
              shape={profile.photoShape}
              borderColor="#84301D"
              className="w-24 h-32 sm:w-28 sm:h-36 shadow-md border-[3px] rounded-lg"
            />
          </div>
        )}
      </div>

      {/* 2-Column Main Details Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mt-4 px-2">
        {/* Personal Details */}
        <div className="space-y-1">
          <div className="pb-1 mb-2 border-b-2 border-[#84301D]/30 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#84301D]" />
            <h3 className="text-sm sm:text-base font-bold tracking-wider text-[#84301D] font-serifDevanagari">
              {isMarathi ? "वैयक्तिक माहिती" : "Personal Details"}
            </h3>
          </div>
          <div className="text-xs sm:text-sm space-y-1">
            <FieldRow label={isMarathi ? "जन्मतारीख" : "Date of Birth"} value={personal.dob} accentColor={primaryTerracotta} className="py-0.5 text-xs text-[#2F211C]" />
            <FieldRow label={isMarathi ? "जन्मवेळ" : "Time of Birth"} value={personal.birthTime} accentColor={primaryTerracotta} className="py-0.5 text-xs text-[#2F211C]" />
            <FieldRow label={isMarathi ? "जन्मस्थान" : "Place of Birth"} value={personal.birthPlace} accentColor={primaryTerracotta} className="py-0.5 text-xs text-[#2F211C]" />
            <FieldRow label={isMarathi ? "उंची" : "Height"} value={personal.height} accentColor={primaryTerracotta} className="py-0.5 text-xs text-[#2F211C]" />
            <FieldRow label={isMarathi ? "वर्ण" : "Complexion"} value={personal.complexion} accentColor={primaryTerracotta} className="py-0.5 text-xs text-[#2F211C]" />
            <FieldRow label={isMarathi ? "धर्म" : "Religion"} value={personal.religion} accentColor={primaryTerracotta} className="py-0.5 text-xs text-[#2F211C]" />
            <FieldRow label={isMarathi ? "जात" : "Caste"} value={personal.caste} accentColor={primaryTerracotta} className="py-0.5 text-xs text-[#2F211C]" />
            <FieldRow label={isMarathi ? "उपजात" : "Sub Caste"} value={personal.subCaste} accentColor={primaryTerracotta} className="py-0.5 text-xs text-[#2F211C]" />
            <FieldRow label={isMarathi ? "गोत्र" : "Gotra"} value={personal.gotra} accentColor={primaryTerracotta} className="py-0.5 text-xs text-[#2F211C]" />
            {design?.showAstrology && (
              <>
                <FieldRow label={isMarathi ? "राशी" : "Rashi"} value={personal.rashi} accentColor={primaryTerracotta} className="py-0.5 text-xs text-[#2F211C]" />
                <FieldRow label={isMarathi ? "नक्षत्र" : "Nakshatra"} value={personal.nakshatra} accentColor={primaryTerracotta} className="py-0.5 text-xs text-[#2F211C]" />
                <FieldRow label={isMarathi ? "मांगलिक" : "Manglik"} value={personal.manglik} accentColor={primaryTerracotta} className="py-0.5 text-xs text-[#2F211C]" />
              </>
            )}
          </div>
        </div>

        {/* Education & Career */}
        <div className="space-y-1">
          <div className="pb-1 mb-2 border-b-2 border-[#84301D]/30 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#84301D]" />
            <h3 className="text-sm sm:text-base font-bold tracking-wider text-[#84301D] font-serifDevanagari">
              {isMarathi ? "शिक्षण व करिअर" : "Education & Career"}
            </h3>
          </div>
          <div className="text-xs sm:text-sm space-y-1">
            <FieldRow label={isMarathi ? "उच्च शिक्षण" : "Highest Education"} value={education.highestEducation} accentColor={primaryTerracotta} className="py-0.5 text-xs text-[#2F211C]" />
            <FieldRow label={isMarathi ? "व्यवसाय" : "Occupation"} value={education.occupation} accentColor={primaryTerracotta} className="py-0.5 text-xs text-[#2F211C]" />
            <FieldRow label={isMarathi ? "पद" : "Designation"} value={education.designation} accentColor={primaryTerracotta} className="py-0.5 text-xs text-[#2F211C]" />
            <FieldRow label={isMarathi ? "कंपनी" : "Company"} value={education.companyName} accentColor={primaryTerracotta} className="py-0.5 text-xs text-[#2F211C]" />
            <FieldRow label={isMarathi ? "वार्षिक उत्पन्न" : "Annual Income"} value={education.annualIncome} accentColor={primaryTerracotta} className="py-0.5 text-xs text-[#2F211C]" />
            <FieldRow label={isMarathi ? "कामाचे ठिकाण" : "Work Location"} value={education.workLocation} accentColor={primaryTerracotta} className="py-0.5 text-xs text-[#2F211C]" />
          </div>
        </div>
      </div>

      {/* Family Details */}
      <div className="mt-4 px-2">
        <div className="pb-1 mb-2 border-b-2 border-[#84301D]/30 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#84301D]" />
          <h3 className="text-sm sm:text-base font-bold tracking-wider text-[#84301D] font-serifDevanagari">
            {isMarathi ? "कौटुंबिक माहिती" : "Family Details"}
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1 text-xs sm:text-sm">
          <FieldRow label={isMarathi ? "वडिलांचे नाव" : "Father's Name"} value={family.fatherName} accentColor={primaryTerracotta} className="py-0.5 text-xs text-[#2F211C]" />
          <FieldRow label={isMarathi ? "वडिलांचा व्यवसाय" : "Father's Work"} value={family.fatherOccupation} accentColor={primaryTerracotta} className="py-0.5 text-xs text-[#2F211C]" />
          <FieldRow label={isMarathi ? "आईचे नाव" : "Mother's Name"} value={family.motherName} accentColor={primaryTerracotta} className="py-0.5 text-xs text-[#2F211C]" />
          <FieldRow label={isMarathi ? "आईचा व्यवसाय" : "Mother's Work"} value={family.motherOccupation} accentColor={primaryTerracotta} className="py-0.5 text-xs text-[#2F211C]" />
          <FieldRow label={isMarathi ? "भाऊ" : "Brothers"} value={family.brotherCount} accentColor={primaryTerracotta} className="py-0.5 text-xs text-[#2F211C]" />
          <FieldRow label={isMarathi ? "बहीण" : "Sisters"} value={family.sisterCount} accentColor={primaryTerracotta} className="py-0.5 text-xs text-[#2F211C]" />
          {family.nativePlace && (
            <FieldRow label={isMarathi ? "मूळ गाव" : "Native Place"} value={family.nativePlace} accentColor={primaryTerracotta} className="py-0.5 text-xs text-[#2F211C]" />
          )}
        </div>
      </div>

      {/* Expectations (if enabled) */}
      {design?.showExpectations && (
        <div className="mt-4 px-2">
          <div className="pb-1 mb-2 border-b-2 border-[#84301D]/30 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#84301D]" />
            <h3 className="text-sm sm:text-base font-bold tracking-wider text-[#84301D] font-serifDevanagari">
              {isMarathi ? "अपेक्षा" : "Partner Expectations"}
            </h3>
          </div>
          <div className="text-xs sm:text-sm space-y-1">
            <FieldRow label={isMarathi ? "अपेक्षित वय / उंची" : "Preferred Age / Height"} value={`${expectations.preferredAgeMin || ""} - ${expectations.preferredAgeMax || ""} वर्षे ${expectations.preferredHeightMin ? `• ${expectations.preferredHeightMin}` : ""}`} accentColor={primaryTerracotta} className="py-0.5 text-xs text-[#2F211C]" />
            <FieldRow label={isMarathi ? "अपेक्षित शिक्षण" : "Preferred Education"} value={expectations.preferredEducation} accentColor={primaryTerracotta} className="py-0.5 text-xs text-[#2F211C]" />
            <FieldRow label={isMarathi ? "इतर अपेक्षा" : "Other Expectations"} value={expectations.partnerExpectations} accentColor={primaryTerracotta} className="py-0.5 text-xs text-[#2F211C]" />
          </div>
        </div>
      )}

      {/* Contact Details */}
      <div className="mt-4 px-2">
        <div className="pb-1 mb-2 border-b-2 border-[#84301D]/30 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#84301D]" />
          <h3 className="text-sm sm:text-base font-bold tracking-wider text-[#84301D] font-serifDevanagari">
            {isMarathi ? "संपर्क माहिती" : "Contact Details"}
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1 text-xs sm:text-sm bg-[#EFE3CF] p-3 rounded-lg border border-[#B38728]/40">
          <FieldRow label={isMarathi ? "फोन" : "Phone"} value={`${contact.phone1 || ""} ${contact.phone2 ? `/ ${contact.phone2}` : ""}`} accentColor={primaryTerracotta} className="py-0.5 text-xs text-[#2F211C]" />
          <FieldRow label={isMarathi ? "ईमेल" : "Email"} value={contact.email} accentColor={primaryTerracotta} className="py-0.5 text-xs text-[#2F211C]" />
          <div className="col-span-1 sm:col-span-2">
            <FieldRow label={isMarathi ? "पत्ता" : "Address"} value={contact.residentialAddress} accentColor={primaryTerracotta} className="py-0.5 text-xs text-[#2F211C]" />
          </div>
        </div>
      </div>
    </div>
  );
};
