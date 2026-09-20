import React from "react";
import { BiodataData } from "@/types/biodata";

export const RoyalMaroonIllustratedTemplate: React.FC<{
  data: BiodataData;
}> = ({ data }) => {
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
        className={`grid grid-cols-[130px_1fr] gap-2 py-[2.5px] text-[11px] leading-[1.4] ${className}`}
      >
        <span className="flex min-w-0 items-start justify-between font-semibold text-[#6B1420]">
          <span>{label}</span>
          <span className="px-1 text-[#8B5E3C]">:</span>
        </span>

        <span className="min-w-0 whitespace-normal break-words font-medium text-[#2C2420]">
          {value}
        </span>
      </div>
    );
  };

  const SectionDivider = () => (
    <div className="my-1.5 flex justify-center">
      <img
        src="/templates/royal-maroon-illustrated/divider-ornament.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none h-[14px] w-auto max-w-[220px] select-none opacity-90"
      />
    </div>
  );

  const Section = ({
    title,
    iconSrc,
    children,
    className = "",
    showDivider = true,
  }: {
    title: string;
    iconSrc: string;
    children: React.ReactNode;
    className?: string;
    showDivider?: boolean;
  }) => (
    <section className={`flex flex-col ${className}`}>
      <div className="mb-1.5 flex items-center gap-2 border-b border-[#B8860B]/40 pb-1">
        <img
          src={iconSrc}
          alt=""
          aria-hidden="true"
          className="pointer-events-none h-[26px] w-[26px] shrink-0 select-none"
        />
        <h3 className="font-serifDevanagari text-[12.5px] font-bold tracking-wide text-[#6B1420]">
          {title}
        </h3>
      </div>
      <div className="px-0.5">{children}</div>
      {showDivider && <SectionDivider />}
    </section>
  );

  const candidateName =
    personal.fullName || (isMarathi ? "शुभम यादव" : "Shubham Yadav");
  const candidateProfession =
    education.designation ||
    education.occupation ||
    (isMarathi ? "सॉफ्टवेअर इंजिनिअर" : "SOFTWARE DEVELOPER");

  return (
    <div
      className="relative mx-auto h-[1123px] w-[794px] overflow-hidden bg-[#FAF6EC] px-10 py-7 text-[#2C2420] shadow-2xl print:shadow-none"
      style={{
        WebkitPrintColorAdjust: "exact",
        printColorAdjust: "exact",
        backgroundColor: "#FAF6EC",
      }}
    >
      {/* Decorative double borders */}
      <div className="pointer-events-none absolute inset-3 border-[2px] border-[#B8860B]/80" />
      <div className="pointer-events-none absolute inset-[16px] border border-[#6B1420]/30" />

      {/* 4 Corner Ornaments mirrored via CSS transforms */}
      <img
        src="/templates/royal-maroon-illustrated/corner-ornament.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 z-0 w-[110px] select-none"
      />
      <img
        src="/templates/royal-maroon-illustrated/corner-ornament.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 z-0 w-[110px] -scale-x-100 select-none"
      />
      <img
        src="/templates/royal-maroon-illustrated/corner-ornament.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 z-0 w-[110px] -scale-y-100 select-none"
      />
      <img
        src="/templates/royal-maroon-illustrated/corner-ornament.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 z-0 w-[110px] -scale-x-100 -scale-y-100 select-none"
      />

      {/* Main Content Layer */}
      <div className="relative z-10 flex h-full flex-col justify-between">
        <div>
          {/* Top Deity Line */}
          <div className="flex flex-col items-center pt-0.5">
            <p className="font-serifDevanagari text-[13px] font-semibold tracking-[0.18em] text-[#6B1420]">
              {profile.deityName || "|| श्री गणेशाय नमः ||"}
            </p>
            <div className="mt-1 flex justify-center">
              <img
                src="/templates/royal-maroon-illustrated/divider-ornament.png"
                alt=""
                aria-hidden="true"
                className="pointer-events-none h-[18px] w-auto max-w-[280px] select-none opacity-95"
              />
            </div>
          </div>

          {/* Header Row: Ganesh Icon + Candidate Info + Photo Frame */}
          <div className="mt-2 flex items-center justify-between gap-4 border-b border-[#B8860B]/35 pb-3">
            {/* Prominent Ganesh Icon */}
            <div className="flex shrink-0 items-center justify-center pl-2">
              <img
                src="/templates/royal-maroon-illustrated/ganesh-icon.png"
                alt=""
                aria-hidden="true"
                className="pointer-events-none h-auto w-[105px] select-none"
              />
            </div>

            {/* Candidate Title & Subtitle */}
            <div className="min-w-0 flex-1 text-center">
              <h1 className="font-serifDevanagari text-[30px] font-bold leading-tight tracking-wide text-[#6B1420]">
                {candidateName}
              </h1>

              <p className="mt-1 text-[12.5px] font-semibold uppercase tracking-[0.22em] text-[#554035]">
                {candidateProfession}
              </p>

              {/* Biodata Banner Tag */}
              <div className="mt-1.5 flex items-center justify-center gap-2">
                <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#B8860B]" />
                <span className="text-[10px] font-bold tracking-[0.3em] text-[#B8860B]">
                  ◇ {profile.biodataTitle || "BIODATA"} ◇
                </span>
                <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#B8860B]" />
              </div>
            </div>

            {/* Profile Photo Frame with Opposite Corner Flourishes */}
            {design.showPhoto ? (
              <div className="relative mr-2 shrink-0 rounded-[4px] border-[2px] border-[#B8860B] bg-white p-[3px] shadow-[0_2px_8px_rgba(107,20,32,0.12)]">
                {/* Gold flourish at top-left corner */}
                <img
                  src="/templates/royal-maroon-illustrated/photo-frame-flourish.png"
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none absolute -left-2.5 -top-2.5 z-10 h-7 w-7 select-none"
                />

                {/* Gold flourish at opposite bottom-right corner (mirrored) */}
                <img
                  src="/templates/royal-maroon-illustrated/photo-frame-flourish.png"
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-2.5 -bottom-2.5 z-10 h-7 w-7 -scale-x-100 -scale-y-100 select-none"
                />

                <div className="h-[136px] w-[110px] overflow-hidden rounded-[2px]">
                  {profile.photoUrl ? (
                    <img
                      src={profile.photoUrl}
                      alt="Profile"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center bg-[#F4EFE6] text-[#7A1E28]/60">
                      <span className="text-2xl">👤</span>
                      <span className="mt-1 text-[10px] font-semibold text-[#6B1420]">
                        {isMarathi ? "फोटो" : "Photo"}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="w-6 shrink-0" />
            )}
          </div>

          {/* Two-Column Section Layout */}
          <div className="mt-3 grid grid-cols-2 gap-x-6">
            {/* Left Column: Personal Details & Family Details */}
            <div className="flex flex-col">
              {/* Personal Details */}
              <Section
                title={
                  isMarathi
                    ? "वैयक्तिक माहिती  |  Personal Details"
                    : "Personal Details"
                }
                iconSrc="/templates/royal-maroon-illustrated/icon-personal.png"
              >
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
              </Section>

              {/* Family Details */}
              <Section
                title={
                  isMarathi
                    ? "कौटुंबिक माहिती  |  Family Details"
                    : "Family Details"
                }
                iconSrc="/templates/royal-maroon-illustrated/icon-family.png"
                showDivider={false}
              >
                <Row
                  label={isMarathi ? "वडिलांचे नाव" : "Father's Name"}
                  value={family.fatherName}
                />
                <Row
                  label={isMarathi ? "वडिलांचा व्यवसाय" : "Father's Occupation"}
                  value={family.fatherOccupation}
                />
                <Row
                  label={isMarathi ? "आईचे नाव" : "Mother's Name"}
                  value={family.motherName}
                />
                <Row
                  label={isMarathi ? "आईचा व्यवसाय" : "Mother's Occupation"}
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
                  label={isMarathi ? "कुटुंबाचे ठिकाण" : "Current Location"}
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
                  label={
                    isMarathi ? "नातेवाईकांची आडनावे" : "Relative Surnames"
                  }
                  value={family.relativeSurnames}
                />
              </Section>
            </div>

            {/* Right Column: Horoscope, Education, Expectations, Contact */}
            <div className="flex flex-col">
              {/* Horoscope & Astrology (Conditional) */}
              {design.showAstrology && (
                <Section
                  title={
                    isMarathi
                      ? "ज्योतिष माहिती  |  Horoscope & Astrology"
                      : "Horoscope & Astrology"
                  }
                  iconSrc="/templates/royal-maroon-illustrated/icon-astrology.png"
                >
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
                </Section>
              )}

              {/* Education & Career */}
              <Section
                title={
                  isMarathi
                    ? "शिक्षण व नोकरी  |  Education & Career"
                    : "Education & Career"
                }
                iconSrc="/templates/royal-maroon-illustrated/icon-education.png"
              >
                <Row
                  label={isMarathi ? "उच्च शिक्षण" : "Highest Education"}
                  value={education.highestEducation}
                />
                <Row
                  label={isMarathi ? "महाविद्यालय" : "College"}
                  value={education.college}
                />
                <Row
                  label={isMarathi ? "व्यवसाय" : "Occupation"}
                  value={education.occupation}
                />
                <Row
                  label={isMarathi ? "पद" : "Designation"}
                  value={education.designation}
                />
                <Row
                  label={isMarathi ? "कंपनी" : "Company"}
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
              </Section>

              {/* Expectations (Conditional) */}
              {design.showExpectations && (
                <Section
                  title={
                    isMarathi ? "अपेक्षा  |  Expectations" : "Expectations"
                  }
                  iconSrc="/templates/royal-maroon-illustrated/icon-expectations.png"
                >
                  <Row
                    label={
                      isMarathi ? "अपेक्षित शिक्षण" : "Preferred Education"
                    }
                    value={expectations.preferredEducation}
                  />
                  <Row
                    label={isMarathi ? "व्यवसाय" : "Preferred Occupation"}
                    value={expectations.preferredOccupation}
                  />
                  <Row
                    label={isMarathi ? "ठिकाण" : "Preferred Location"}
                    value={expectations.preferredLocation}
                  />
                  <Row
                    label={isMarathi ? "इतर अपेक्षा" : "Other Expectations"}
                    value={
                      expectations.partnerExpectations ||
                      expectations.otherInformation
                    }
                  />
                </Section>
              )}

              {/* Contact Details */}
              <Section
                title={
                  isMarathi
                    ? "संपर्क माहिती  |  Contact Details"
                    : "Contact Details"
                }
                iconSrc="/templates/royal-maroon-illustrated/icon-contact.png"
                showDivider={false}
              >
                <Row
                  label={isMarathi ? "संपर्क व्यक्ती" : "Contact Person"}
                  value={contact.contactPerson}
                />
                <Row
                  label={isMarathi ? "मोबाईल १" : "Mobile 1"}
                  value={contact.phone1}
                />
                <Row
                  label={isMarathi ? "मोबाईल २" : "Mobile 2"}
                  value={contact.phone2}
                />
                <Row
                  label={isMarathi ? "ईमेल" : "Email"}
                  value={contact.email}
                />
                <Row
                  label={isMarathi ? "पत्ता" : "Address"}
                  value={contact.residentialAddress}
                />
              </Section>
            </div>
          </div>
        </div>

        {/* Auspicious Bottom Blessing */}
        <div className="pb-1 pt-2 text-center">
          <p className="font-serifDevanagari text-[12px] font-semibold tracking-[0.15em] text-[#6B1420]">
            || सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः ||
          </p>
        </div>
      </div>
    </div>
  );
};
