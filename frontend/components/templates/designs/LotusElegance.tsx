import React from "react";
import { BiodataData } from "@/types/biodata";
import { FieldRow, DeityHeader, TemplatePhoto } from "../TemplateHelpers";
import { BloomingLotus, RoseVineCorner } from "../../common/AuspiciousSymbols";

export const LotusEleganceTemplate: React.FC<{ data: BiodataData }> = ({ data }) => {
  const { profile, personal, education, family, expectations, contact, design } = data;
  const isMarathi = profile.language === "mr";
  const primaryRose = "#8B263E";
  const softPinkBorder = "#E8B4C0";

  return (
    <div className="relative w-full max-w-[794px] min-h-[1123px] bg-[#FFF8F8] text-[#2F2124] p-8 sm:p-12 shadow-2xl mx-auto border-[10px] border-[#F2CAD4] print:border-[8px] print:shadow-none font-serif select-none overflow-hidden">
      {/* Delicate Double Rose Inset Borders */}
      <div className="absolute inset-3 border-2 border-[#8B263E]/40 pointer-events-none" />
      <div className="absolute inset-4.5 border border-[#8B263E]/20 pointer-events-none" />

      {/* Soft Corner Vines */}
      <div className="absolute top-4 left-4 pointer-events-none">
        <RoseVineCorner color="#D48A9C" className="w-12 h-12" />
      </div>
      <div className="absolute top-4 right-4 pointer-events-none">
        <RoseVineCorner color="#D48A9C" flipX className="w-12 h-12" />
      </div>

      {/* Top Auspicious Invocation with Blooming Lotus */}
      <div className="text-center pt-1 pb-1">
        <DeityHeader
          symbol={profile.deitySymbol || "lotus"}
          title={profile.deityName || (isMarathi ? "॥ श्री गणेशाय नमः ॥" : "|| Shree Ganeshaya Namaha ||")}
          color={primaryRose}
          className="my-0.5"
        />
        <div className="flex justify-center -mt-1 mb-1">
          <BloomingLotus className="w-16 h-12" />
        </div>
      </div>

      {/* Candidate Profile Header with Photo */}
      <div className="flex flex-row items-center justify-between gap-4 pb-3 px-3 border-b-2 border-[#8B263E]/30 mt-1">
        <div className="flex-1 text-left">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-wide text-[#8B263E] font-serif">
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
              borderColor={primaryRose}
              className="w-24 h-32 sm:w-28 sm:h-36 shadow-md border-[2.5px] rounded-lg"
            />
          </div>
        )}
      </div>

      {/* 2-Column Main Details Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mt-5 px-3">
        {/* Personal Details */}
        <div className="space-y-1">
          <div className="pb-1 mb-2 border-b border-[#8B263E]/30">
            <h3 className="text-sm sm:text-base font-bold tracking-wider text-[#8B263E] uppercase">
              {isMarathi ? "वैयक्तिक माहिती" : "Personal Details"}
            </h3>
          </div>
          <div className="text-xs sm:text-sm space-y-1">
            <FieldRow label={isMarathi ? "जन्मतारीख" : "Date of Birth"} value={personal.dob} accentColor={primaryRose} className="py-0.5 text-xs text-[#2F2124]" />
            <FieldRow label={isMarathi ? "जन्मवेळ" : "Time of Birth"} value={personal.birthTime} accentColor={primaryRose} className="py-0.5 text-xs text-[#2F2124]" />
            <FieldRow label={isMarathi ? "जन्मस्थान" : "Place of Birth"} value={personal.birthPlace} accentColor={primaryRose} className="py-0.5 text-xs text-[#2F2124]" />
            <FieldRow label={isMarathi ? "उंची" : "Height"} value={personal.height} accentColor={primaryRose} className="py-0.5 text-xs text-[#2F2124]" />
            <FieldRow label={isMarathi ? "वर्ण" : "Complexion"} value={personal.complexion} accentColor={primaryRose} className="py-0.5 text-xs text-[#2F2124]" />
            <FieldRow label={isMarathi ? "धर्म" : "Religion"} value={personal.religion} accentColor={primaryRose} className="py-0.5 text-xs text-[#2F2124]" />
            <FieldRow label={isMarathi ? "जात / उपजात" : "Caste / Sub Caste"} value={`${personal.caste || ""} ${personal.subCaste ? `(${personal.subCaste})` : ""}`} accentColor={primaryRose} className="py-0.5 text-xs text-[#2F2124]" />
            <FieldRow label={isMarathi ? "गोत्र" : "Gotra"} value={personal.gotra} accentColor={primaryRose} className="py-0.5 text-xs text-[#2F2124]" />
            {design?.showAstrology && (
              <>
                <FieldRow label={isMarathi ? "राशी" : "Rashi"} value={personal.rashi} accentColor={primaryRose} className="py-0.5 text-xs text-[#2F2124]" />
                <FieldRow label={isMarathi ? "नक्षत्र" : "Nakshatra"} value={personal.nakshatra} accentColor={primaryRose} className="py-0.5 text-xs text-[#2F2124]" />
                <FieldRow label={isMarathi ? "मांगलिक" : "Manglik"} value={personal.manglik} accentColor={primaryRose} className="py-0.5 text-xs text-[#2F2124]" />
              </>
            )}
          </div>
        </div>

        {/* Education & Career */}
        <div className="space-y-1">
          <div className="pb-1 mb-2 border-b border-[#8B263E]/30">
            <h3 className="text-sm sm:text-base font-bold tracking-wider text-[#8B263E] uppercase">
              {isMarathi ? "शिक्षण व करिअर" : "Education & Career"}
            </h3>
          </div>
          <div className="text-xs sm:text-sm space-y-1">
            <FieldRow label={isMarathi ? "उच्च शिक्षण" : "Highest Education"} value={education.highestEducation} accentColor={primaryRose} className="py-0.5 text-xs text-[#2F2124]" />
            <FieldRow label={isMarathi ? "व्यवसाय" : "Occupation"} value={education.occupation} accentColor={primaryRose} className="py-0.5 text-xs text-[#2F2124]" />
            <FieldRow label={isMarathi ? "पद" : "Designation"} value={education.designation} accentColor={primaryRose} className="py-0.5 text-xs text-[#2F2124]" />
            <FieldRow label={isMarathi ? "कंपनी" : "Company"} value={education.companyName} accentColor={primaryRose} className="py-0.5 text-xs text-[#2F2124]" />
            <FieldRow label={isMarathi ? "वार्षिक उत्पन्न" : "Annual Income"} value={education.annualIncome} accentColor={primaryRose} className="py-0.5 text-xs text-[#2F2124]" />
            <FieldRow label={isMarathi ? "कामाचे ठिकाण" : "Work Location"} value={education.workLocation} accentColor={primaryRose} className="py-0.5 text-xs text-[#2F2124]" />
          </div>
        </div>
      </div>

      {/* Family Details */}
      <div className="mt-5 px-3">
        <div className="pb-1 mb-2 border-b border-[#8B263E]/30">
          <h3 className="text-sm sm:text-base font-bold tracking-wider text-[#8B263E] uppercase">
            {isMarathi ? "कौटुंबिक माहिती" : "Family Details"}
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1 text-xs sm:text-sm">
          <FieldRow label={isMarathi ? "वडिलांचे नाव" : "Father's Name"} value={family.fatherName} accentColor={primaryRose} className="py-0.5 text-xs text-[#2F2124]" />
          <FieldRow label={isMarathi ? "वडिलांचा व्यवसाय" : "Father's Work"} value={family.fatherOccupation} accentColor={primaryRose} className="py-0.5 text-xs text-[#2F2124]" />
          <FieldRow label={isMarathi ? "आईचे नाव" : "Mother's Name"} value={family.motherName} accentColor={primaryRose} className="py-0.5 text-xs text-[#2F2124]" />
          <FieldRow label={isMarathi ? "आईचा व्यवसाय" : "Mother's Work"} value={family.motherOccupation} accentColor={primaryRose} className="py-0.5 text-xs text-[#2F2124]" />
          <FieldRow label={isMarathi ? "भाऊ" : "Brothers"} value={family.brotherCount} accentColor={primaryRose} className="py-0.5 text-xs text-[#2F2124]" />
          <FieldRow label={isMarathi ? "बहीण" : "Sisters"} value={family.sisterCount} accentColor={primaryRose} className="py-0.5 text-xs text-[#2F2124]" />
          {family.nativePlace && (
            <FieldRow label={isMarathi ? "मूळ गाव" : "Native Place"} value={family.nativePlace} accentColor={primaryRose} className="py-0.5 text-xs text-[#2F2124]" />
          )}
        </div>
      </div>

      {/* Expectations (if enabled) */}
      {design?.showExpectations && (
        <div className="mt-4 px-3">
          <div className="pb-1 mb-2 border-b border-[#8B263E]/30">
            <h3 className="text-sm sm:text-base font-bold tracking-wider text-[#8B263E] uppercase">
              {isMarathi ? "अपेक्षा" : "Partner Expectations"}
            </h3>
          </div>
          <div className="text-xs sm:text-sm space-y-1">
            <FieldRow label={isMarathi ? "अपेक्षित वय / उंची" : "Preferred Age / Height"} value={`${expectations.preferredAgeMin || ""} - ${expectations.preferredAgeMax || ""} वर्षे ${expectations.preferredHeightMin ? `• ${expectations.preferredHeightMin}` : ""}`} accentColor={primaryRose} className="py-0.5 text-xs text-[#2F2124]" />
            <FieldRow label={isMarathi ? "अपेक्षित शिक्षण" : "Preferred Education"} value={expectations.preferredEducation} accentColor={primaryRose} className="py-0.5 text-xs text-[#2F2124]" />
            <FieldRow label={isMarathi ? "इतर माहिती" : "Partner Expectations"} value={expectations.partnerExpectations} accentColor={primaryRose} className="py-0.5 text-xs text-[#2F2124]" />
          </div>
        </div>
      )}

      {/* Contact Details */}
      <div className="mt-5 px-3">
        <div className="pb-1 mb-2 border-b border-[#8B263E]/30">
          <h3 className="text-sm sm:text-base font-bold tracking-wider text-[#8B263E] uppercase">
            {isMarathi ? "संपर्क माहिती" : "Contact Details"}
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1 text-xs sm:text-sm bg-[#FFF0F3] p-3 rounded-lg border border-[#E8B4C0]">
          <FieldRow label={isMarathi ? "फोन" : "Phone"} value={`${contact.phone1 || ""} ${contact.phone2 ? `/ ${contact.phone2}` : ""}`} accentColor={primaryRose} className="py-0.5 text-xs text-[#2F2124]" />
          <FieldRow label={isMarathi ? "ईमेल" : "Email"} value={contact.email} accentColor={primaryRose} className="py-0.5 text-xs text-[#2F2124]" />
          <div className="col-span-1 sm:col-span-2">
            <FieldRow label={isMarathi ? "पत्ता" : "Address"} value={contact.residentialAddress} accentColor={primaryRose} className="py-0.5 text-xs text-[#2F2124]" />
          </div>
        </div>
      </div>

      {/* Blooming Lotus Motif at Bottom Center */}
      <div className="flex justify-center mt-6">
        <BloomingLotus className="w-16 h-12" />
      </div>
    </div>
  );
};
