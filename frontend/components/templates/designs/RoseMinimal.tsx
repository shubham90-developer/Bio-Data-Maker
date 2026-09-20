import React from "react";
import { BiodataData } from "@/types/biodata";
import { FieldRow, DeityHeader, TemplatePhoto } from "../TemplateHelpers";
import { RoseVineCorner } from "../../common/AuspiciousSymbols";

export const RoseMinimalTemplate: React.FC<{ data: BiodataData }> = ({ data }) => {
  const { profile, personal, education, family, expectations, contact, design } = data;
  const isMarathi = profile.language === "mr";
  const primaryRose = "#75293B";
  const vineColor = "#B87282";

  return (
    <div className="relative w-full max-w-[794px] min-h-[1123px] bg-[#FFF9F9] text-[#2C1D21] p-8 sm:p-12 shadow-2xl mx-auto border-[6px] border-[#F2D6DC] print:border-[6px] print:shadow-none font-serif select-none overflow-hidden">
      {/* Delicate Inner Rose Hairline Border */}
      <div className="absolute inset-3 border border-[#B87282]/40 pointer-events-none" />

      {/* Hand-Drawn Botanical Rose Vine Corners */}
      <div className="absolute top-3 left-3 pointer-events-none">
        <RoseVineCorner color={vineColor} className="w-16 h-16" />
      </div>
      <div className="absolute top-3 right-3 pointer-events-none">
        <RoseVineCorner color={vineColor} flipX className="w-16 h-16" />
      </div>
      <div className="absolute bottom-3 left-3 pointer-events-none">
        <RoseVineCorner color={vineColor} flipY className="w-16 h-16" />
      </div>
      <div className="absolute bottom-3 right-3 pointer-events-none">
        <RoseVineCorner color={vineColor} flipX flipY className="w-16 h-16" />
      </div>

      {/* Top Auspicious Deity Invocation */}
      <div className="text-center pt-2 pb-2">
        <DeityHeader
          symbol={profile.deitySymbol || "om"}
          title={profile.deityName || (isMarathi ? "॥ श्री गणेशाय नमः ॥" : "|| Shree Ganeshaya Namaha ||")}
          color={primaryRose}
          className="my-1"
        />
      </div>

      {/* Candidate Name & Header with Photo */}
      <div className="flex flex-row items-center justify-between gap-4 pb-4 px-3 border-b border-[#B87282]/30 mt-1">
        <div className="flex-1 text-left">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-wide text-[#75293B] font-serif">
            {personal.fullName || (isMarathi ? "शुभम यादव" : "Shubham Yadav")}
          </h1>
          <p className="text-sm font-semibold tracking-wider text-[#A2485F] mt-1 font-sans">
            {education.designation || education.occupation || "Software Developer"}
          </p>
        </div>

        {design?.showPhoto && profile.photoUrl && (
          <div className="shrink-0">
            <TemplatePhoto
              url={profile.photoUrl}
              shape={profile.photoShape}
              borderColor={vineColor}
              className="w-24 h-32 sm:w-28 sm:h-36 shadow-sm border-[2px] rounded-lg"
            />
          </div>
        )}
      </div>

      {/* 2-Column Main Details Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mt-5 px-3">
        {/* Personal Details */}
        <div className="space-y-1">
          <div className="pb-1 mb-2 border-b border-[#B87282]/30">
            <h3 className="text-sm sm:text-base font-bold tracking-wider text-[#75293B] uppercase">
              {isMarathi ? "वैयक्तिक माहिती" : "Personal Details"}
            </h3>
          </div>
          <div className="text-xs sm:text-sm space-y-1">
            <FieldRow label={isMarathi ? "जन्मतारीख" : "Date of Birth"} value={personal.dob} accentColor={vineColor} className="py-0.5 text-xs text-[#2C1D21]" />
            <FieldRow label={isMarathi ? "जन्मवेळ" : "Time of Birth"} value={personal.birthTime} accentColor={vineColor} className="py-0.5 text-xs text-[#2C1D21]" />
            <FieldRow label={isMarathi ? "जन्मस्थान" : "Place of Birth"} value={personal.birthPlace} accentColor={vineColor} className="py-0.5 text-xs text-[#2C1D21]" />
            <FieldRow label={isMarathi ? "उंची" : "Height"} value={personal.height} accentColor={vineColor} className="py-0.5 text-xs text-[#2C1D21]" />
            <FieldRow label={isMarathi ? "वर्ण" : "Complexion"} value={personal.complexion} accentColor={vineColor} className="py-0.5 text-xs text-[#2C1D21]" />
            <FieldRow label={isMarathi ? "धर्म" : "Religion"} value={personal.religion} accentColor={vineColor} className="py-0.5 text-xs text-[#2C1D21]" />
            <FieldRow label={isMarathi ? "जात / उपजात" : "Caste / Sub Caste"} value={`${personal.caste || ""} ${personal.subCaste ? `(${personal.subCaste})` : ""}`} accentColor={vineColor} className="py-0.5 text-xs text-[#2C1D21]" />
            <FieldRow label={isMarathi ? "गोत्र" : "Gotra"} value={personal.gotra} accentColor={vineColor} className="py-0.5 text-xs text-[#2C1D21]" />
            {design?.showAstrology && (
              <>
                <FieldRow label={isMarathi ? "राशी" : "Rashi"} value={personal.rashi} accentColor={vineColor} className="py-0.5 text-xs text-[#2C1D21]" />
                <FieldRow label={isMarathi ? "नक्षत्र" : "Nakshatra"} value={personal.nakshatra} accentColor={vineColor} className="py-0.5 text-xs text-[#2C1D21]" />
                <FieldRow label={isMarathi ? "मांगलिक" : "Manglik"} value={personal.manglik} accentColor={vineColor} className="py-0.5 text-xs text-[#2C1D21]" />
              </>
            )}
          </div>
        </div>

        {/* Education & Career */}
        <div className="space-y-1">
          <div className="pb-1 mb-2 border-b border-[#B87282]/30">
            <h3 className="text-sm sm:text-base font-bold tracking-wider text-[#75293B] uppercase">
              {isMarathi ? "शिक्षण व करिअर" : "Education & Career"}
            </h3>
          </div>
          <div className="text-xs sm:text-sm space-y-1">
            <FieldRow label={isMarathi ? "उच्च शिक्षण" : "Highest Education"} value={education.highestEducation} accentColor={vineColor} className="py-0.5 text-xs text-[#2C1D21]" />
            <FieldRow label={isMarathi ? "व्यवसाय" : "Occupation"} value={education.occupation} accentColor={vineColor} className="py-0.5 text-xs text-[#2C1D21]" />
            <FieldRow label={isMarathi ? "पद" : "Designation"} value={education.designation} accentColor={vineColor} className="py-0.5 text-xs text-[#2C1D21]" />
            <FieldRow label={isMarathi ? "कंपनी" : "Company"} value={education.companyName} accentColor={vineColor} className="py-0.5 text-xs text-[#2C1D21]" />
            <FieldRow label={isMarathi ? "वार्षिक उत्पन्न" : "Annual Income"} value={education.annualIncome} accentColor={vineColor} className="py-0.5 text-xs text-[#2C1D21]" />
            <FieldRow label={isMarathi ? "कामाचे ठिकाण" : "Work Location"} value={education.workLocation} accentColor={vineColor} className="py-0.5 text-xs text-[#2C1D21]" />
          </div>
        </div>
      </div>

      {/* Family Details */}
      <div className="mt-5 px-3">
        <div className="pb-1 mb-2 border-b border-[#B87282]/30">
          <h3 className="text-sm sm:text-base font-bold tracking-wider text-[#75293B] uppercase">
            {isMarathi ? "कौटुंबिक माहिती" : "Family Details"}
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1 text-xs sm:text-sm">
          <FieldRow label={isMarathi ? "वडिलांचे नाव" : "Father's Name"} value={family.fatherName} accentColor={vineColor} className="py-0.5 text-xs text-[#2C1D21]" />
          <FieldRow label={isMarathi ? "वडिलांचा व्यवसाय" : "Father's Work"} value={family.fatherOccupation} accentColor={vineColor} className="py-0.5 text-xs text-[#2C1D21]" />
          <FieldRow label={isMarathi ? "आईचे नाव" : "Mother's Name"} value={family.motherName} accentColor={vineColor} className="py-0.5 text-xs text-[#2C1D21]" />
          <FieldRow label={isMarathi ? "आईचा व्यवसाय" : "Mother's Work"} value={family.motherOccupation} accentColor={vineColor} className="py-0.5 text-xs text-[#2C1D21]" />
          <FieldRow label={isMarathi ? "भाऊ" : "Brothers"} value={family.brotherCount} accentColor={vineColor} className="py-0.5 text-xs text-[#2C1D21]" />
          <FieldRow label={isMarathi ? "बहीण" : "Sisters"} value={family.sisterCount} accentColor={vineColor} className="py-0.5 text-xs text-[#2C1D21]" />
          {family.nativePlace && (
            <FieldRow label={isMarathi ? "मूळ गाव" : "Native Place"} value={family.nativePlace} accentColor={vineColor} className="py-0.5 text-xs text-[#2C1D21]" />
          )}
        </div>
      </div>

      {/* Expectations (if enabled) */}
      {design?.showExpectations && (
        <div className="mt-4 px-3">
          <div className="pb-1 mb-2 border-b border-[#B87282]/30">
            <h3 className="text-sm sm:text-base font-bold tracking-wider text-[#75293B] uppercase">
              {isMarathi ? "अपेक्षा" : "Partner Expectations"}
            </h3>
          </div>
          <div className="text-xs sm:text-sm space-y-1">
            <FieldRow label={isMarathi ? "अपेक्षित वय / उंची" : "Preferred Age / Height"} value={`${expectations.preferredAgeMin || ""} - ${expectations.preferredAgeMax || ""} वर्षे ${expectations.preferredHeightMin ? `• ${expectations.preferredHeightMin}` : ""}`} accentColor={vineColor} className="py-0.5 text-xs text-[#2C1D21]" />
            <FieldRow label={isMarathi ? "अपेक्षित शिक्षण" : "Preferred Education"} value={expectations.preferredEducation} accentColor={vineColor} className="py-0.5 text-xs text-[#2C1D21]" />
            <FieldRow label={isMarathi ? "इतर माहिती" : "Partner Expectations"} value={expectations.partnerExpectations} accentColor={vineColor} className="py-0.5 text-xs text-[#2C1D21]" />
          </div>
        </div>
      )}

      {/* Contact Details */}
      <div className="mt-5 px-3">
        <div className="pb-1 mb-2 border-b border-[#B87282]/30">
          <h3 className="text-sm sm:text-base font-bold tracking-wider text-[#75293B] uppercase">
            {isMarathi ? "संपर्क माहिती" : "Contact Details"}
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1 text-xs sm:text-sm bg-[#FFF2F5] p-3 rounded-lg border border-[#F2D6DC]">
          <FieldRow label={isMarathi ? "फोन" : "Phone"} value={`${contact.phone1 || ""} ${contact.phone2 ? `/ ${contact.phone2}` : ""}`} accentColor={vineColor} className="py-0.5 text-xs text-[#2C1D21]" />
          <FieldRow label={isMarathi ? "ईमेल" : "Email"} value={contact.email} accentColor={vineColor} className="py-0.5 text-xs text-[#2C1D21]" />
          <div className="col-span-1 sm:col-span-2">
            <FieldRow label={isMarathi ? "पत्ता" : "Address"} value={contact.residentialAddress} accentColor={vineColor} className="py-0.5 text-xs text-[#2C1D21]" />
          </div>
        </div>
      </div>
    </div>
  );
};
