import React from "react";
import { BiodataData } from "@/types/biodata";
import { FieldRow, DeityHeader, TemplatePhoto } from "../TemplateHelpers";

export const ClassicIvoryTemplate: React.FC<{ data: BiodataData }> = ({
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
      (typeof value === "string" && value.trim() === "")
    ) {
      return null;
    }

    return (
      <div
        className={`grid grid-cols-[115px_1fr] gap-2 py-[1.5px] text-[10.5px] leading-[1.35] ${className}`}
      >
        <span className="flex min-w-0 items-start justify-between font-semibold text-[#66161D]">
          <span>{label}</span>
          <span className="px-1 text-[#B87A2B]">:</span>
        </span>

        <span className="min-w-0 whitespace-normal break-words font-medium text-[#2E2620]">
          {value}
        </span>
      </div>
    );
  };

  const Section = ({
    title,
    ribbonSrc,
    iconSrc,
    children,
  }: {
    title: string;
    ribbonSrc: string;
    iconSrc: string;
    children: React.ReactNode;
  }) => (
    <div className="relative mb-2">
      {/* Ribbon Header with Overlaid Badge — guaranteed non-overlapping flex layout */}
      <div className="relative z-10 flex h-[34px] items-center">
        {/* Ribbon Graphic Background */}
        <img
          src={ribbonSrc}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 z-10 h-[34px] w-[340px] select-none object-fill"
        />
        {/* Circular Icon Badge */}
        <div className="relative z-20 -ml-0.5 flex h-[36px] w-[36px] shrink-0 items-center justify-center">
          <img
            src={iconSrc}
            alt=""
            aria-hidden="true"
            className="pointer-events-none h-[36px] w-[36px] select-none"
          />
        </div>
        {/* Title Text placed clearly after the icon badge */}
        <h3 className="font-serifDevanagari relative z-20 pl-2.5 text-[12px] font-bold tracking-wide text-white drop-shadow-xs">
          {title}
        </h3>
      </div>

      {/* Content Box with Faint Watermark Layer */}
      <div className="relative -mt-[8px] overflow-hidden rounded-[8px] border border-[#BFA26A]/55 bg-[#FFFDF9]/90 px-3.5 pb-2 pt-3 shadow-xs">
        <img
          src="/templates/peacock-royal/section-watermark.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute right-2 top-1/2 h-16 w-16 -translate-y-1/2 select-none opacity-15"
        />
        <div className="relative z-10">{children}</div>
      </div>
    </div>
  );

  const candidateName =
    personal.fullName || (isMarathi ? "शुभम यादव" : "Shubham Yadav");
  const candidateProfession =
    education.designation ||
    education.occupation ||
    (isMarathi ? "सॉफ्टवेअर इंजिनिअर" : "SOFTWARE DEVELOPER");

  return (
    <div
      className="relative mx-auto h-[1123px] w-[794px] overflow-hidden bg-[#FBF8EF] text-[#2E2620] shadow-2xl print:shadow-none"
      style={{
        WebkitPrintColorAdjust: "exact",
        printColorAdjust: "exact",
        backgroundColor: "#FBF8EF",
      }}
    >
      {/* 1. Full Top Arch Border — fixed height so it sits above content */}
      <img
        src="/templates/peacock-royal/top-arch-border.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 z-20 h-[70px] w-full select-none object-fill"
      />

      {/* 2. Full-Height Left Vertical Side Panel */}
      <img
        src="/templates/peacock-royal/side-panel-left.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 top-0 z-20 h-full w-[64px] select-none object-fill"
      />

      {/* 3. Full-Height Right Vertical Side Panel */}
      <img
        src="/templates/peacock-royal/side-panel-right.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 top-0 z-20 h-full w-[50px] select-none object-fill"
      />

      {/* Main Content Area — pushed down to sit clearly below the top arch */}
      <div className="relative z-10 flex h-full flex-col justify-between pb-3 pl-[72px] pr-[58px] pt-[74px]">
        <div>
          {/* Top Deity Line */}
          <div className="text-center">
            <p className="font-serifDevanagari text-[12.5px] font-semibold tracking-[0.2em] text-[#66161D]">
              {profile.deityName || "॥ श्री गणेशाय नमः ॥"}
            </p>
          </div>

          {/* Header Row: Ganesh Shloka + Candidate Title/BIODATA + Photo Frame */}
          <div className="mt-1 flex items-center justify-between gap-3 border-b border-[#BFA26A]/35 pb-2.5">
            {/* Left Column: Shloka */}
            <div className="w-[135px] shrink-0 text-center font-serifDevanagari text-[9.5px] font-medium leading-[1.35] text-[#66161D]">
              <p>वक्रतुंड महाकाय</p>
              <p>सूर्यकोटि समप्रभ ।</p>
              <p>निर्विघ्नं कुरु मे देव</p>
              <p>सर्वकार्येषु सर्वदा ॥</p>
            </div>

            {/* Middle Column: Candidate Name & BIODATA with Divider */}
            <div className="min-w-0 flex-1 text-center">
              <h1 className="font-serifDevanagari text-[28px] font-bold leading-tight tracking-wide text-[#0D4B55]">
                {candidateName}
              </h1>

              <p className="mt-0.5 text-[12px] font-bold uppercase tracking-[0.25em] text-[#B87A2B]">
                {candidateProfession}
              </p>

              <div className="mt-1 flex items-center justify-center gap-2">
                <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#B87A2B]" />
                <span className="text-[10px] font-bold tracking-[0.3em] text-[#66161D]">
                  {profile.biodataTitle || "BIODATA"}
                </span>
                <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#B87A2B]" />
              </div>

              {/* Divider ornament under BIODATA */}
              <div className="mt-0.5 flex justify-center">
                <img
                  src="/templates/peacock-royal/divider-ornament.png"
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none h-[11px] w-auto max-w-[220px] select-none opacity-90"
                />
              </div>
            </div>

            {/* Right Column: Photo Frame with Properly Proportioned Dimensions */}
            {design?.showPhoto ? (
              <div className="flex w-[135px] shrink-0 flex-col items-center">
                <div className="relative rounded-[7px] border-[2px] border-[#BFA26A] bg-white p-[3px] shadow-[0_3px_10px_rgba(102,22,29,0.18)]">
                  <div className="h-[135px] w-[105px] overflow-hidden rounded-[4px]">
                    {profile.photoUrl ? (
                      <img
                        src={profile.photoUrl}
                        alt="Candidate"
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full w-full flex-col items-center justify-center bg-[#F4EFE6] text-[#66161D]/60">
                        <span className="text-2xl">👤</span>
                        <span className="mt-1 text-[9.5px] font-semibold text-[#66161D]">
                          {isMarathi ? "फोटो" : "Photo"}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                <span className="mt-0.5 font-serif text-[9px] italic text-[#B87A2B]">
                  Good Vibes, Better Future
                </span>
              </div>
            ) : (
              <div className="w-[135px] shrink-0" />
            )}
          </div>

          {/* 1. Personal Details (Maroon Ribbon) */}
          <Section
            title={
              isMarathi
                ? "व्यक्तिगत जानकारी  |  Personal Details"
                : "Personal Details"
            }
            ribbonSrc="/templates/peacock-royal/section-ribbon-maroon.png"
            iconSrc="/templates/peacock-royal/icon-personal.png"
          >
            <div className="grid grid-cols-2 gap-x-5">
              <Row
                label={isMarathi ? "पूरा नाम" : "Full Name"}
                value={personal.fullName}
              />
              <Row
                label={isMarathi ? "जन्मतारीख" : "Date of Birth"}
                value={personal.dob}
              />
              <Row
                label={isMarathi ? "जन्मसमय" : "Time of Birth"}
                value={personal.birthTime}
              />
              <Row
                label={isMarathi ? "जन्मस्थान" : "Place of Birth"}
                value={personal.birthPlace}
              />
              <Row
                label={isMarathi ? "उंचाई" : "Height"}
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
                label={isMarathi ? "धर्म / जाति" : "Religion / Caste"}
                value={`${personal.religion || ""}${
                  personal.caste ? ` (${personal.caste})` : ""
                }`}
              />
              <Row
                label={isMarathi ? "गोत्र" : "Gotra"}
                value={personal.gotra}
              />
              <Row
                label={isMarathi ? "उपजात" : "Sub Caste"}
                value={personal.subCaste}
              />
              <Row
                label={isMarathi ? "वैवाहिक स्थिति" : "Marital Status"}
                value={personal.maritalStatus}
              />
            </div>
          </Section>

          {/* 2. Horoscope & Astrology (Teal Ribbon) */}
          {design?.showAstrology && (
            <Section
              title={
                isMarathi
                  ? "ज्योतिष माहिती  |  Horoscope & Astrology"
                  : "Horoscope & Astrology"
              }
              ribbonSrc="/templates/peacock-royal/section-ribbon-teal.png"
              iconSrc="/templates/peacock-royal/icon-astrology.png"
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
                  label={isMarathi ? "मांगळ" : "Manglik"}
                  value={personal.manglik}
                />
              </div>
            </Section>
          )}

          {/* 3. Education & Career (Blue Ribbon) */}
          <Section
            title={
              isMarathi
                ? "शिक्षण व नोकरी  |  Education & Career"
                : "Education & Career"
            }
            ribbonSrc="/templates/peacock-royal/section-ribbon-blue.png"
            iconSrc="/templates/peacock-royal/icon-education.png"
          >
            <div className="grid grid-cols-2 gap-x-5">
              <Row
                label={isMarathi ? "उच्च शिक्षण" : "Highest Education"}
                value={education.highestEducation}
              />
              <Row
                label={isMarathi ? "पदवी तपशील" : "Degree Details"}
                value={education.degreeDetails}
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
                label={isMarathi ? "कामाचे ठिकाण" : "Work Location"}
                value={education.workLocation}
              />
              <Row
                label={isMarathi ? "वार्षिक उत्पन्न" : "Annual Income"}
                value={education.annualIncome}
              />
              <Row
                label={isMarathi ? "अनुभव" : "Experience"}
                value={education.experienceYears}
              />
              <Row
                label={isMarathi ? "कौशल्ये" : "Skills"}
                value={education.skills}
              />
              <Row
                label={isMarathi ? "अवगत भाषा" : "Languages Known"}
                value={education.languagesKnown}
              />
            </div>
          </Section>

          {/* 4. Expectations (Purple Ribbon) */}
          {design?.showExpectations && (
            <Section
              title={
                isMarathi ? "अपेक्षा  |  Expectations" : "Expectations"
              }
              ribbonSrc="/templates/peacock-royal/section-ribbon-purple.png"
              iconSrc="/templates/peacock-royal/icon-expectations.png"
            >
              <div className="grid grid-cols-2 gap-x-5">
                <Row
                  label={isMarathi ? "अपेक्षित वय" : "Preferred Age"}
                  value={
                    expectations.preferredAgeMin || expectations.preferredAgeMax
                      ? `${expectations.preferredAgeMin || ""}${
                          expectations.preferredAgeMax
                            ? ` - ${expectations.preferredAgeMax}`
                            : ""
                        }${isMarathi ? " वर्षे" : " Years"}`
                      : undefined
                  }
                />
                <Row
                  label={isMarathi ? "अपेक्षित उंची" : "Preferred Height"}
                  value={expectations.preferredHeightMin}
                />
                <Row
                  label={isMarathi ? "अपेक्षित शिक्षण" : "Preferred Education"}
                  value={expectations.preferredEducation}
                />
                <Row
                  label={isMarathi ? "अपेक्षित व्यवसाय" : "Preferred Occupation"}
                  value={expectations.preferredOccupation}
                />
                <Row
                  label={isMarathi ? "अपेक्षित ठिकाण" : "Preferred Location"}
                  value={expectations.preferredLocation}
                />
                <Row
                  label={isMarathi ? "अपेक्षित वैवाहिक स्थिती" : "Marital Status Expected"}
                  value={expectations.maritalStatusExpected}
                />
                <Row
                  label={isMarathi ? "आहार" : "Diet"}
                  value={expectations.diet}
                />
                <Row
                  label={isMarathi ? "धूम्रपान" : "Smoking"}
                  value={expectations.smoking}
                />
                <Row
                  label={isMarathi ? "मद्यपान" : "Drinking"}
                  value={expectations.drinking}
                />
                <Row
                  label={isMarathi ? "छंद" : "Hobbies"}
                  value={expectations.hobbies}
                />
                <Row
                  label={isMarathi ? "आवड" : "Interests"}
                  value={expectations.interests}
                />
                <Row
                  label={isMarathi ? "इतर माहिती" : "Other Info"}
                  value={expectations.otherInformation}
                />
                <Row
                  className="col-span-2"
                  label={isMarathi ? "इतर अपेक्षा" : "Partner Expectations"}
                  value={expectations.partnerExpectations}
                />
              </div>
            </Section>
          )}

          {/* 5. Family Details (Orange Ribbon) */}
          <Section
            title={
              isMarathi
                ? "कौटुंबिक माहिती  |  Family Details"
                : "Family Details"
            }
            ribbonSrc="/templates/peacock-royal/section-ribbon-orange.png"
            iconSrc="/templates/peacock-royal/icon-family.png"
          >
            <div className="grid grid-cols-2 gap-x-5">
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
                label={isMarathi ? "विवाहित भाऊ" : "Married Brothers"}
                value={family.marriedBrothers}
              />
              <Row
                label={isMarathi ? "बहीण" : "Sisters"}
                value={family.sisterCount}
              />
              <Row
                label={isMarathi ? "विवाहित बहिणी" : "Married Sisters"}
                value={family.marriedSisters}
              />
              <Row
                label={isMarathi ? "कुटुंब पद्धती" : "Family Type"}
                value={family.familyType}
              />
              <Row
                label={isMarathi ? "कौटुंबिक मूल्ये" : "Family Values"}
                value={family.familyValues}
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
                className="col-span-2"
                label={isMarathi ? "नातेसंबंधांची आडनावे" : "Relative Surnames"}
                value={family.relativeSurnames}
              />
            </div>
          </Section>

          {/* 6. Contact Details (Red Ribbon) */}
          <Section
            title={
              isMarathi
                ? "संपर्क माहिती  |  Contact Details"
                : "Contact Details"
            }
            ribbonSrc="/templates/peacock-royal/section-ribbon-red.png"
            iconSrc="/templates/peacock-royal/icon-contact.png"
          >
            <div className="grid grid-cols-2 gap-x-5">
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
              <Row label={isMarathi ? "ईमेल" : "Email"} value={contact.email} />
              <Row
                className="col-span-2"
                label={isMarathi ? "पत्ता" : "Address"}
                value={contact.residentialAddress}
              />
            </div>
          </Section>
        </div>

        {/* Footer Area: Divider Ornament + Auspicious Blessing */}
        <div className="pb-1 text-center">
          <div className="mb-1 flex justify-center">
            <img
              src="/templates/peacock-royal/divider-ornament.png"
              alt=""
              aria-hidden="true"
              className="pointer-events-none h-[13px] w-auto max-w-[280px] select-none opacity-90"
            />
          </div>
          <p className="font-serifDevanagari text-[11.5px] font-semibold tracking-[0.16em] text-[#66161D]">
            || सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः ||
          </p>
        </div>
      </div>
    </div>
  );
};
