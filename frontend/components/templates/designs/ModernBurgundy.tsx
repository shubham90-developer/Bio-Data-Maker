import React from "react";
import { BiodataData } from "@/types/biodata";
import { FieldRow, DeityHeader, TemplatePhoto } from "../TemplateHelpers";

export const ModernBurgundyTemplate: React.FC<{ data: BiodataData }> = ({ data }) => {
  const { profile, personal, education, family, expectations, contact, design } = data;
  const isMarathi = profile.language === "mr";
  const primaryBurgundy = "#721124";
  const accentGold = "#C5A059";

  return (
    <div className="relative w-full max-w-[794px] min-h-[1123px] bg-[#FCFAF7] text-[#261E1F] p-8 sm:p-12 shadow-2xl mx-auto border border-[#E5DDD0] print:shadow-none font-serif select-none overflow-hidden">
      {/* Modern Architectural Corner Blocks */}
      {/* Top Left Burgundy Geometric Flourish */}
      <div className="absolute top-0 left-0 w-24 h-24 pointer-events-none">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M0 0 L100 0 C70 0 50 20 50 50 C50 80 30 100 0 100 Z" fill="#721124" />
          <path d="M0 0 L90 0 C65 0 45 18 45 45 C45 72 27 90 0 90 Z" fill="#580C19" />
          <circle cx="25" cy="25" r="4" fill="#C5A059" />
        </svg>
      </div>

      {/* Bottom Right Burgundy Geometric Flourish */}
      <div className="absolute bottom-0 right-0 w-24 h-24 pointer-events-none transform rotate-180">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M0 0 L100 0 C70 0 50 20 50 50 C50 80 30 100 0 100 Z" fill="#721124" />
          <path d="M0 0 L90 0 C65 0 45 18 45 45 C45 72 27 90 0 90 Z" fill="#580C19" />
          <circle cx="25" cy="25" r="4" fill="#C5A059" />
        </svg>
      </div>

      {/* Thin Gold Hairline Framing Rule */}
      <div className="absolute inset-4 border border-[#721124]/20 pointer-events-none" />

      {/* Top Deity Invocation */}
      <div className="text-center pt-2 pb-2">
        <DeityHeader
          symbol={profile.deitySymbol || "ganesh"}
          title={profile.deityName || (isMarathi ? "॥ श्री गणेशाय नमः ॥" : "|| Shree Ganeshaya Namaha ||")}
          color={primaryBurgundy}
          className="my-1"
        />
      </div>

      {/* Candidate Name & Header with Photo */}
      <div className="flex flex-row items-center justify-between gap-4 pb-4 px-3 border-b-2 border-[#721124]/30 mt-1">
        <div className="flex-1 text-left">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-wide text-[#721124] font-serif">
            {personal.fullName || (isMarathi ? "शुभम यादव" : "Shubham Yadav")}
          </h1>
          <p className="text-sm font-semibold tracking-wider text-[#9E3447] mt-1 font-sans">
            {education.designation || education.occupation || "Software Developer"}
          </p>
        </div>

        {design?.showPhoto && profile.photoUrl && (
          <div className="shrink-0">
            <TemplatePhoto
              url={profile.photoUrl}
              shape={profile.photoShape}
              borderColor={primaryBurgundy}
              className="w-24 h-32 sm:w-28 sm:h-36 shadow-md border-[2.5px] rounded-xl"
            />
          </div>
        )}
      </div>

      {/* 2-Column Main Details Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mt-5 px-3">
        {/* Personal Details */}
        <div className="space-y-1">
          <div className="pb-1 mb-2 border-b-2 border-[#721124]/30">
            <h3 className="text-sm sm:text-base font-bold tracking-wider text-[#721124] uppercase">
              {isMarathi ? "वैयक्तिक माहिती" : "Personal Details"}
            </h3>
          </div>
          <div className="text-xs sm:text-sm space-y-1">
            <FieldRow label={isMarathi ? "जन्मतारीख" : "Date of Birth"} value={personal.dob} accentColor={primaryBurgundy} className="py-0.5 text-xs text-[#261E1F]" />
            <FieldRow label={isMarathi ? "जन्मवेळ" : "Time of Birth"} value={personal.birthTime} accentColor={primaryBurgundy} className="py-0.5 text-xs text-[#261E1F]" />
            <FieldRow label={isMarathi ? "जन्मस्थान" : "Place of Birth"} value={personal.birthPlace} accentColor={primaryBurgundy} className="py-0.5 text-xs text-[#261E1F]" />
            <FieldRow label={isMarathi ? "उंची" : "Height"} value={personal.height} accentColor={primaryBurgundy} className="py-0.5 text-xs text-[#261E1F]" />
            <FieldRow label={isMarathi ? "वर्ण" : "Complexion"} value={personal.complexion} accentColor={primaryBurgundy} className="py-0.5 text-xs text-[#261E1F]" />
            <FieldRow label={isMarathi ? "धर्म" : "Religion"} value={personal.religion} accentColor={primaryBurgundy} className="py-0.5 text-xs text-[#261E1F]" />
            <FieldRow label={isMarathi ? "जात / उपजात" : "Caste / Sub Caste"} value={`${personal.caste || ""} ${personal.subCaste ? `(${personal.subCaste})` : ""}`} accentColor={primaryBurgundy} className="py-0.5 text-xs text-[#261E1F]" />
            <FieldRow label={isMarathi ? "गोत्र" : "Gotra"} value={personal.gotra} accentColor={primaryBurgundy} className="py-0.5 text-xs text-[#261E1F]" />
            {design?.showAstrology && (
              <>
                <FieldRow label={isMarathi ? "राशी" : "Rashi"} value={personal.rashi} accentColor={primaryBurgundy} className="py-0.5 text-xs text-[#261E1F]" />
                <FieldRow label={isMarathi ? "नक्षत्र" : "Nakshatra"} value={personal.nakshatra} accentColor={primaryBurgundy} className="py-0.5 text-xs text-[#261E1F]" />
                <FieldRow label={isMarathi ? "मांगलिक" : "Manglik"} value={personal.manglik} accentColor={primaryBurgundy} className="py-0.5 text-xs text-[#261E1F]" />
              </>
            )}
          </div>
        </div>

        {/* Education & Career */}
        <div className="space-y-1">
          <div className="pb-1 mb-2 border-b-2 border-[#721124]/30">
            <h3 className="text-sm sm:text-base font-bold tracking-wider text-[#721124] uppercase">
              {isMarathi ? "शिक्षण व करिअर" : "Education & Career"}
            </h3>
          </div>
          <div className="text-xs sm:text-sm space-y-1">
            <FieldRow label={isMarathi ? "उच्च शिक्षण" : "Highest Education"} value={education.highestEducation} accentColor={primaryBurgundy} className="py-0.5 text-xs text-[#261E1F]" />
            <FieldRow label={isMarathi ? "व्यवसाय" : "Occupation"} value={education.occupation} accentColor={primaryBurgundy} className="py-0.5 text-xs text-[#261E1F]" />
            <FieldRow label={isMarathi ? "पद" : "Designation"} value={education.designation} accentColor={primaryBurgundy} className="py-0.5 text-xs text-[#261E1F]" />
            <FieldRow label={isMarathi ? "कंपनी" : "Company"} value={education.companyName} accentColor={primaryBurgundy} className="py-0.5 text-xs text-[#261E1F]" />
            <FieldRow label={isMarathi ? "वार्षिक उत्पन्न" : "Annual Income"} value={education.annualIncome} accentColor={primaryBurgundy} className="py-0.5 text-xs text-[#261E1F]" />
            <FieldRow label={isMarathi ? "कामाचे ठिकाण" : "Work Location"} value={education.workLocation} accentColor={primaryBurgundy} className="py-0.5 text-xs text-[#261E1F]" />
          </div>
        </div>
      </div>

      {/* Family Details */}
      <div className="mt-5 px-3">
        <div className="pb-1 mb-2 border-b-2 border-[#721124]/30">
          <h3 className="text-sm sm:text-base font-bold tracking-wider text-[#721124] uppercase">
            {isMarathi ? "कौटुंबिक माहिती" : "Family Details"}
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1 text-xs sm:text-sm">
          <FieldRow label={isMarathi ? "वडिलांचे नाव" : "Father's Name"} value={family.fatherName} accentColor={primaryBurgundy} className="py-0.5 text-xs text-[#261E1F]" />
          <FieldRow label={isMarathi ? "वडिलांचा व्यवसाय" : "Father's Work"} value={family.fatherOccupation} accentColor={primaryBurgundy} className="py-0.5 text-xs text-[#261E1F]" />
          <FieldRow label={isMarathi ? "आईचे नाव" : "Mother's Name"} value={family.motherName} accentColor={primaryBurgundy} className="py-0.5 text-xs text-[#261E1F]" />
          <FieldRow label={isMarathi ? "आईचा व्यवसाय" : "Mother's Work"} value={family.motherOccupation} accentColor={primaryBurgundy} className="py-0.5 text-xs text-[#261E1F]" />
          <FieldRow label={isMarathi ? "भाऊ" : "Brothers"} value={family.brotherCount} accentColor={primaryBurgundy} className="py-0.5 text-xs text-[#261E1F]" />
          <FieldRow label={isMarathi ? "बहीण" : "Sisters"} value={family.sisterCount} accentColor={primaryBurgundy} className="py-0.5 text-xs text-[#261E1F]" />
          {family.nativePlace && (
            <FieldRow label={isMarathi ? "मूळ गाव" : "Native Place"} value={family.nativePlace} accentColor={primaryBurgundy} className="py-0.5 text-xs text-[#261E1F]" />
          )}
        </div>
      </div>

      {/* Expectations (if enabled) */}
      {design?.showExpectations && (
        <div className="mt-4 px-3">
          <div className="pb-1 mb-2 border-b-2 border-[#721124]/30">
            <h3 className="text-sm sm:text-base font-bold tracking-wider text-[#721124] uppercase">
              {isMarathi ? "अपेक्षा" : "Partner Expectations"}
            </h3>
          </div>
          <div className="text-xs sm:text-sm space-y-1">
            <FieldRow label={isMarathi ? "अपेक्षित वय / उंची" : "Preferred Age / Height"} value={`${expectations.preferredAgeMin || ""} - ${expectations.preferredAgeMax || ""} वर्षे ${expectations.preferredHeightMin ? `• ${expectations.preferredHeightMin}` : ""}`} accentColor={primaryBurgundy} className="py-0.5 text-xs text-[#261E1F]" />
            <FieldRow label={isMarathi ? "अपेक्षित शिक्षण" : "Preferred Education"} value={expectations.preferredEducation} accentColor={primaryBurgundy} className="py-0.5 text-xs text-[#261E1F]" />
            <FieldRow label={isMarathi ? "इतर माहिती" : "Partner Expectations"} value={expectations.partnerExpectations} accentColor={primaryBurgundy} className="py-0.5 text-xs text-[#261E1F]" />
          </div>
        </div>
      )}

      {/* Contact Details */}
      <div className="mt-5 px-3">
        <div className="pb-1 mb-2 border-b-2 border-[#721124]/30">
          <h3 className="text-sm sm:text-base font-bold tracking-wider text-[#721124] uppercase">
            {isMarathi ? "संपर्क माहिती" : "Contact Details"}
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1 text-xs sm:text-sm bg-[#F8F1F2] p-3 rounded-lg border border-[#721124]/20">
          <FieldRow label={isMarathi ? "फोन" : "Phone"} value={`${contact.phone1 || ""} ${contact.phone2 ? `/ ${contact.phone2}` : ""}`} accentColor={primaryBurgundy} className="py-0.5 text-xs text-[#261E1F]" />
          <FieldRow label={isMarathi ? "ईमेल" : "Email"} value={contact.email} accentColor={primaryBurgundy} className="py-0.5 text-xs text-[#261E1F]" />
          <div className="col-span-1 sm:col-span-2">
            <FieldRow label={isMarathi ? "पत्ता" : "Address"} value={contact.residentialAddress} accentColor={primaryBurgundy} className="py-0.5 text-xs text-[#261E1F]" />
          </div>
        </div>
      </div>
    </div>
  );
};
