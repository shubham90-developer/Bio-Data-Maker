import React from "react";
import { BiodataData } from "@/types/biodata";
import { DeityHeader, TemplatePhoto } from "../TemplateHelpers";

export const RoyalMaroonTemplate: React.FC<{ data: BiodataData }> = ({
  data,
}) => {
  const {
    profile,
    personal,
    education,
    family,
    expectations,
    contact,
    design,
  } = data;

  const isMarathi = profile.language === "mr";

  const gold = "#D4AF37";
  const mutedGold = "#DABE75";
  const cream = "#FAF7F2";
  const maroon = "#4A0E14";

  /**
   * Field row for dark backgrounds.
   * FieldRow is intentionally not used here because its value text
   * is fixed to a dark charcoal color.
   */
  const Row = ({
    label,
    value,
    className = "",
  }: {
    label: string;
    value?: string | number;
    className?: string;
  }) => {
    if (
      value === undefined ||
      value === null ||
      value === "" ||
      value === "0" ||
      value === "०"
    ) {
      return null;
    }

    return (
      <div
        className={`flex items-start text-sm leading-relaxed py-0.5 ${className}`}
      >
        <span className="w-40 shrink-0 font-semibold text-[#DABE75] flex items-center justify-between">
          <span>{label}</span>
          <span className="mx-1 text-[#B08A41]">:</span>
        </span>

        <span className="flex-1 pl-1 break-words font-medium text-[#FAF7F2]">
          {value}
        </span>
      </div>
    );
  };

  const Section = ({
    title,
    children,
    className = "",
  }: {
    title: string;
    children: React.ReactNode;
    className?: string;
  }) => (
    <section className={className}>
      <div className="mb-2 flex items-center gap-3 border-b border-[#D4AF37]/45 pb-1.5">
        <span className="h-4 w-1 rounded-full bg-[#D4AF37]" />
        <h3 className="font-serif text-base font-bold tracking-wide text-[#D4AF37]">
          {title}
        </h3>
      </div>

      {children}
    </section>
  );

  const educationCareer = (
    <>
      <Row
        label={isMarathi ? "उच्च शिक्षण" : "Education"}
        value={education.highestEducation}
      />
      <Row
        label={isMarathi ? "महाविद्यालय" : "College/Institute"}
        value={education.college}
      />
      <Row
        label={isMarathi ? "व्यवसाय / पद" : "Occupation / Role"}
        value={`${education.occupation || ""}${
          education.designation ? ` (${education.designation})` : ""
        }`}
      />
      <Row
        label={isMarathi ? "कंपनीचे नाव" : "Company"}
        value={education.companyName}
      />
      <Row
        label={isMarathi ? "नोकरीचे ठिकाण" : "Work Location"}
        value={education.workLocation}
      />
      <Row
        label={isMarathi ? "वार्षिक उत्पन्न" : "Annual Income"}
        value={education.annualIncome}
      />
    </>
  );

  return (
    <div
      className="relative mx-auto h-[1123px] w-[794px] overflow-hidden bg-gradient-to-br from-[#4A0E14] via-[#571019] to-[#6B1420] px-11 py-9 text-[#FAF7F2] shadow-2xl print:shadow-none"
      style={{
        WebkitPrintColorAdjust: "exact",
        printColorAdjust: "exact",
      }}
    >
      {/* Subtle inner frame */}
      <div className="pointer-events-none absolute inset-4 border border-[#D4AF37]/55" />
      <div className="pointer-events-none absolute inset-6 border border-[#D4AF37]/20" />

      {/* Corner ornaments — exact supplied asset */}
      <img
        src="/templates/royal-maroon/corner-ornament.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 z-0 w-32 select-none"
      />

      <img
        src="/templates/royal-maroon/corner-ornament.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 z-0 w-32 -scale-x-100 select-none"
      />

      <img
        src="/templates/royal-maroon/corner-ornament.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 z-0 w-32 -scale-y-100 select-none"
      />

      <img
        src="/templates/royal-maroon/corner-ornament.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 z-0 w-32 -scale-x-100 -scale-y-100 select-none"
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Deity header */}
        <div className="flex flex-col items-center pt-1">
          <div className="flex w-full max-w-[370px] items-center justify-center gap-3">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#D4AF37]" />
            <span className="h-1.5 w-1.5 rotate-45 border border-[#D4AF37] bg-[#4A0E14]" />
            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#D4AF37]" />
          </div>

          <img
            src="/templates/shared/ganesh-icon.png"
            alt=""
            aria-hidden="true"
            className="mt-1 h-16 w-16 select-none"
          />

          <p className="mt-0.5 text-center font-serifDevanagari text-sm font-semibold tracking-[0.18em] text-[#DABE75]">
            || श्री गणेशाय नमः ||
          </p>

          <div className="mt-2 flex w-full max-w-[370px] items-center justify-center gap-3">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#D4AF37]/70" />
            <span className="h-1 w-1 rotate-45 bg-[#D4AF37]" />
            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#D4AF37]/70" />
          </div>
        </div>

        {/* Profile header */}
        <div className="mt-5 flex items-start justify-between gap-5 border-b border-[#D4AF37]/45 pb-5">
          <div className="min-w-0 flex-1 pt-2">
            <h1 className="font-serifDevanagari text-3xl font-bold leading-tight text-[#FAF7F2]">
              {personal.fullName || (isMarathi ? "शुभम यादव" : "Shubham Yadav")}
            </h1>

            <p className="mt-1 text-base font-medium tracking-wide text-[#DABE75]">
              {education.designation ||
                education.occupation ||
                "Software Developer"}
            </p>

            {education.designation &&
              education.occupation &&
              education.designation !== education.occupation && (
                <p className="mt-0.5 text-xs text-[#BFA66B]">
                  {education.occupation}
                </p>
              )}
          </div>

          {design.showPhoto && (
            <div className="shrink-0 rounded-lg border-2 border-[#D4AF37] p-1 shadow-[0_0_18px_rgba(212,175,55,0.2)]">
              <TemplatePhoto
                url={profile.photoUrl}
                shape="rounded"
                borderColor={gold}
                className="!h-32 !w-28"
              />
            </div>
          )}
        </div>

        {/* Personal + Education side by side */}
        <div className="mt-4 grid grid-cols-2 gap-5">
          {/* Personal Details */}
          <Section title={isMarathi ? "वैयक्तिक माहिती" : "Personal Details"}>
            <div>
              <Row
                label={isMarathi ? "पूर्ण नाव" : "Full Name"}
                value={personal.fullName}
              />
              <Row
                label={isMarathi ? "जन्मतारीख" : "Date of Birth"}
                value={personal.dob}
              />
              <Row
                label={isMarathi ? "जन्मवेळ" : "Birth Time"}
                value={personal.birthTime}
              />
              <Row
                label={isMarathi ? "जन्मस्थान" : "Birth Place"}
                value={personal.birthPlace}
              />
              <Row
                label={isMarathi ? "उंची" : "Height"}
                value={personal.height}
              />
              <Row
                label={isMarathi ? "वजन" : "Weight"}
                value={personal.weight}
              />
              <Row
                label={isMarathi ? "रक्तगट" : "Blood Group"}
                value={personal.bloodGroup}
              />
              <Row
                label={isMarathi ? "वर्ण" : "Complexion"}
                value={personal.complexion}
              />
              <Row
                label={isMarathi ? "धर्म / जात" : "Religion / Caste"}
                value={`${personal.religion || ""}${
                  personal.caste ? ` (${personal.caste})` : ""
                }`}
              />
              <Row
                label={isMarathi ? "पोटजात" : "Sub-Caste"}
                value={personal.subCaste}
              />
              <Row
                label={isMarathi ? "गोत्र" : "Gotra"}
                value={personal.gotra}
              />
              <Row
                label={isMarathi ? "वैवाहिक स्थिती" : "Marital Status"}
                value={personal.maritalStatus}
              />
            </div>
          </Section>

          {/* Education & Career */}
          <Section title={isMarathi ? "शिक्षण व नोकरी" : "Education & Career"}>
            <div>{educationCareer}</div>
          </Section>
        </div>

        {/* Astrology */}
        {design.showAstrology && (
          <div className="mt-4">
            <Section
              title={
                isMarathi ? "पत्रिका / ज्योतिष माहिती" : "Horoscope & Astrology"
              }
            >
              <div className="grid grid-cols-2 gap-x-5">
                <Row
                  label={isMarathi ? "राशी" : "Rashi"}
                  value={personal.rashi}
                />
                <Row
                  label={isMarathi ? "नक्षत्र" : "Nakshatra"}
                  value={personal.nakshatra}
                />
                <Row
                  label={isMarathi ? "चरण" : "Charan"}
                  value={personal.charan}
                />
                <Row
                  label={isMarathi ? "नाडी" : "Nadi"}
                  value={personal.nadi}
                />
                <Row label={isMarathi ? "गण" : "Gan"} value={personal.gan} />
                <Row
                  label={isMarathi ? "मंगळ" : "Manglik"}
                  value={personal.manglik}
                />
              </div>
            </Section>
          </div>
        )}

        {/* Family Details — full width */}
        <div className="mt-4">
          <Section title={isMarathi ? "कौटुंबिक माहिती" : "Family Details"}>
            <div className="grid grid-cols-2 gap-x-6">
              <Row
                label={isMarathi ? "वडिलांचे नाव" : "Father's Name"}
                value={family.fatherName}
              />
              <Row
                label={isMarathi ? "वडिलांचा व्यवसाय" : "Father's Work"}
                value={family.fatherOccupation}
              />
              <Row
                label={isMarathi ? "आईचे नाव" : "Mother's Name"}
                value={family.motherName}
              />
              <Row
                label={isMarathi ? "आईचा व्यवसाय" : "Mother's Work"}
                value={family.motherOccupation}
              />
              <Row
                label={isMarathi ? "भाऊ" : "Brothers"}
                value={family.brotherCount}
              />
              <Row
                label={isMarathi ? "बहीण" : "Sisters"}
                value={family.sisterCount}
              />
              <Row
                label={isMarathi ? "मूळ गाव" : "Native Place"}
                value={family.nativePlace}
              />
              <Row
                label={isMarathi ? "सध्याचे ठिकाण" : "Current City"}
                value={family.familyLocation}
              />
              <Row
                label={isMarathi ? "मामांचे नाव" : "Maternal Uncle"}
                value={family.maternalUncleName}
              />
              <Row
                label={isMarathi ? "मामांचे गाव" : "Uncle's City"}
                value={family.maternalUnclePlace}
              />

              <Row
                className="col-span-2"
                label={isMarathi ? "नातेसंबंधातील आडनावे" : "Relative Surnames"}
                value={family.relativeSurnames}
              />
            </div>
          </Section>
        </div>

        {/* Expectations */}
        {design.showExpectations && (
          <div className="mt-4">
            <Section title={isMarathi ? "अपेक्षा" : "Partner Expectations"}>
              <Row
                label={
                  isMarathi ? "अपेक्षित वय / उंची" : "Preferred Age / Height"
                }
                value={`${expectations.preferredAgeMin || ""}${
                  expectations.preferredAgeMax
                    ? ` - ${expectations.preferredAgeMax}`
                    : ""
                }${
                  expectations.preferredHeightMin
                    ? ` वर्षे • ${expectations.preferredHeightMin}`
                    : ""
                }`}
              />
              <Row
                label={isMarathi ? "अपेक्षित शिक्षण" : "Preferred Education"}
                value={expectations.preferredEducation}
              />
              <Row
                label={
                  isMarathi
                    ? "अपेक्षित नोकरी / ठिकाण"
                    : "Preferred Career / City"
                }
                value={`${expectations.preferredOccupation || ""}${
                  expectations.preferredLocation
                    ? ` • ${expectations.preferredLocation}`
                    : ""
                }`}
              />
              <Row
                label={isMarathi ? "इतर अपेक्षा" : "Other Expectations"}
                value={expectations.partnerExpectations}
              />
            </Section>
          </div>
        )}

        {/* Gold divider flourish */}
        <div className="relative my-4 flex justify-center">
          <img
            src="/templates/shared/divider-flourish.png"
            alt=""
            aria-hidden="true"
            className="pointer-events-none h-auto w-28 select-none opacity-90"
          />
        </div>

        {/* Contact Details — full width */}
        <Section title={isMarathi ? "संपर्क माहिती" : "Contact Details"}>
          <div className="grid grid-cols-2 gap-x-6 rounded-md border border-[#D4AF37]/30 bg-black/10 px-3 py-2">
            <Row
              label={isMarathi ? "संपर्क व्यक्ती" : "Contact Person"}
              value={contact.contactPerson}
            />
            <Row
              label={isMarathi ? "मोबाईल क्र. १" : "Mobile 1"}
              value={contact.phone1}
            />
            <Row
              label={isMarathi ? "मोबाईल क्र. २" : "Mobile 2"}
              value={contact.phone2}
            />
            <Row label={isMarathi ? "ईमेल" : "Email"} value={contact.email} />
            <Row
              className="col-span-2"
              label={isMarathi ? "पत्ता" : "Address"}
              value={contact.residentialAddress}
            />
          </div>
        </Section>

        {/* Bottom gold line */}
        <div className="mt-5 border-t border-[#D4AF37]/45 pt-1" />
      </div>
    </div>
  );
};
