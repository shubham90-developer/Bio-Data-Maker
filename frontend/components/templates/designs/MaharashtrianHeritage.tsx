import React from "react";
import { BiodataData } from "@/types/biodata";
import { TemplatePhoto } from "../TemplateHelpers";

export const MaharashtrianHeritageTemplate: React.FC<{ data: BiodataData }> = ({
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
      value === "0"
    ) {
      return null;
    }

    return (
      <div
        className={`grid grid-cols-[120px_1fr] gap-2 py-[2px] text-[10.5px] leading-[1.35] ${className}`}
      >
        <span className="flex min-w-0 items-start justify-between font-semibold text-[#7A211B]">
          <span>{label}</span>
          <span className="px-1 text-[#B17A26]">:</span>
        </span>

        <span className="min-w-0 whitespace-normal break-words text-[#3D3027]">
          {value}
        </span>
      </div>
    );
  };

  const SectionIcon = ({ type }: { type: string }) => {
    const iconClass = "h-[15px] w-[15px] stroke-current fill-none stroke-[1.8]";

    if (type === "person") {
      return (
        <svg viewBox="0 0 24 24" className={iconClass}>
          <circle cx="12" cy="8" r="3.1" />
          <path d="M5.5 20c.8-3.7 3-5.5 6.5-5.5s5.7 1.8 6.5 5.5" />
        </svg>
      );
    }

    if (type === "astrology") {
      return <span className="font-serif text-[17px] leading-none">ॐ</span>;
    }

    if (type === "education") {
      return (
        <svg viewBox="0 0 24 24" className={iconClass}>
          <path d="m3 9 9-5 9 5-9 5-9-5Z" />
          <path d="M6 11.2V16c3.4 2.6 8.6 2.6 12 0v-4.8" />
          <path d="M21 9v6" />
        </svg>
      );
    }

    if (type === "expectations") {
      return (
        <svg viewBox="0 0 24 24" className={iconClass}>
          <path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z" />
        </svg>
      );
    }

    if (type === "contact") {
      return (
        <svg viewBox="0 0 24 24" className={iconClass}>
          <path d="M7.2 4.5h3l1.4 4-2 1.7c1 2 2.5 3.4 4.5 4.3l1.7-2 4 1.4v3c0 1-.8 1.8-1.8 1.8C11.3 18.7 5.3 12.7 5.3 6.3c0-1 .8-1.8 1.9-1.8Z" />
        </svg>
      );
    }

    return (
      <svg viewBox="0 0 24 24" className={iconClass}>
        <circle cx="8" cy="8" r="2.7" />
        <circle cx="16" cy="8" r="2.7" />
        <circle cx="12" cy="15" r="2.7" />
        <path d="M3.8 20c.3-2.7 1.8-4.5 4.2-4.5 1.2 0 2.2.4 3 1.1M20.2 20c-.3-2.7-1.8-4.5-4.2-4.5-1.2 0-2.2.4-3 1.1" />
      </svg>
    );
  };

  const Section = ({
    title,
    children,
    icon,
  }: {
    title: string;
    children: React.ReactNode;
    icon: string;
  }) => (
    <section className="relative rounded-[12px] border border-[#B17A26]/70 bg-[#FFF9EA]/90 px-3 pb-2.5 pt-[35px] shadow-[0_3px_10px_rgba(104,55,20,0.09)]">
      <div className="absolute left-2 right-2 top-2">
        <div className="flex min-w-0 items-center rounded-full border border-[#B17A26] bg-gradient-to-r from-[#73191D] via-[#8D2025] to-[#70171D] px-2 py-[3px] shadow-[0_2px_5px_rgba(80,20,15,.18)]">
          <span className="mr-2 flex h-[23px] w-[23px] shrink-0 items-center justify-center rounded-full border border-[#E7C56E] bg-[#7A211B] text-[#FFF5D8]">
            <SectionIcon type={icon} />
          </span>

          <h3 className="min-w-0 truncate font-serifDevanagari text-xs font-bold tracking-wide text-[#FFF5D8]">
            {title}
          </h3>
        </div>
      </div>

      {children}
    </section>
  );

  return (
    <div
      className="relative mx-auto h-[1123px] w-[794px] overflow-hidden bg-[#F7EBD0] px-10 py-8 text-[#3D3027] shadow-2xl print:shadow-none"
      style={{
        WebkitPrintColorAdjust: "exact",
        printColorAdjust: "exact",
        backgroundImage:
          "radial-gradient(circle at 50% 10%, rgba(255,255,255,.72), transparent 28%), linear-gradient(135deg, rgba(122,33,27,.025), rgba(181,126,38,.06))",
      }}
    >
      {/* Premium double heritage frame */}
      <div className="pointer-events-none absolute inset-3 border-[2px] border-[#B17A26]" />
      <div className="pointer-events-none absolute inset-[9px] border border-[#7A211B]/45" />
      <div className="pointer-events-none absolute inset-[14px] border border-[#B17A26]/30" />

      {/* Exact four-corner mirroring */}
      {/* Floral corners — using the exact existing asset */}
      <img
        src="/templates/maharashtrian-heritage/corner-ornament.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 z-0 w-40 select-none"
      />

      <img
        src="/templates/maharashtrian-heritage/corner-ornament.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 z-0 w-40 -scale-x-100 select-none"
      />

      <img
        src="/templates/maharashtrian-heritage/corner-ornament.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 z-0 w-40 -scale-y-100 select-none"
      />

      <img
        src="/templates/maharashtrian-heritage/corner-ornament.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 z-0 w-40 -scale-x-100 -scale-y-100 select-none"
      />

      <div className="relative z-10">
        {/* Decorative top ornament — CSS/SVG only */}
        <header className="flex flex-col items-center pt-1">
          <div className="relative flex h-[62px] w-full items-center justify-center">
            <svg
              viewBox="0 0 300 70"
              className="absolute left-1/2 top-0 h-[62px] w-[270px] -translate-x-1/2"
              aria-hidden="true"
            >
              <g
                fill="none"
                stroke="#B17A26"
                strokeWidth="1.2"
                strokeLinecap="round"
              >
                <path d="M150 32C130 17 111 14 92 20" />
                <path d="M150 32C170 17 189 14 208 20" />
                <path d="M98 21C86 13 75 13 64 20" />
                <path d="M202 21C214 13 225 13 236 20" />
                <path d="M112 28C101 32 94 39 90 48" />
                <path d="M188 28C199 32 206 39 210 48" />
              </g>

              <g fill="#A92835">
                <circle cx="63" cy="20" r="4" />
                <circle cx="69" cy="15" r="4" />
                <circle cx="75" cy="20" r="4" />
                <circle cx="225" cy="20" r="4" />
                <circle cx="231" cy="15" r="4" />
                <circle cx="237" cy="20" r="4" />
              </g>

              <g fill="#D5A54A">
                <circle cx="69" cy="15" r="1.5" />
                <circle cx="231" cy="15" r="1.5" />
              </g>

              <path
                d="M150 8v45M139 30c4-7 8-10 11-10s7 3 11 10M142 30c-3 5-3 10 0 15M158 30c3 5 3 10 0 15"
                fill="none"
                stroke="#7A211B"
                strokeWidth="1.6"
                strokeLinecap="round"
              />

              <circle cx="150" cy="32" r="3.5" fill="#B17A26" />
            </svg>

            <div className="relative z-10 mt-1 flex h-12 w-12 items-center justify-center rounded-full bg-[#F7EBD0]/95">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#B17A26]">
                <span className="font-serif text-[21px] text-[#7A211B]">ॐ</span>
              </div>
            </div>
          </div>

          <p className="mt-0 font-serifDevanagari text-xs font-bold tracking-[0.16em] text-[#7A211B]">
            || श्री गणेशाय नमः ||
          </p>

          <div className="mt-1.5 flex w-52 items-center gap-2">
            <span className="h-px flex-1 bg-[#B17A26]" />
            <span className="text-[8px] text-[#8B211B]">◆</span>
            <span className="h-px flex-1 bg-[#B17A26]" />
          </div>
        </header>

        {/* Name + photo */}
        <div className="mt-2 grid grid-cols-[1fr_auto] items-center gap-4 border-b border-[#B17A26]/55 pb-4">
          <div className="min-w-0 pl-5 text-left">
            <h1 className="font-serifDevanagari text-4xl font-bold leading-tight text-[#7A211B]">
              {personal.fullName || (isMarathi ? "शुभम यादव" : "Shubham Yadav")}
            </h1>

            <p className="mt-1.5 text-base font-medium tracking-wide text-[#7B5A3C]">
              {education.designation ||
                education.occupation ||
                "Software Developer"}
            </p>

            <div className="mt-2.5 flex items-center justify-start gap-2">
              <span className="h-px w-10 bg-[#B17A26]" />
              <span className="font-serif text-[9px] tracking-[0.22em] text-[#8B211B]">
                BIODATA
              </span>
              <span className="h-px w-10 bg-[#B17A26]" />
            </div>
          </div>

          {design.showPhoto ? (
            <div className="relative shrink-0 rounded-[17px] border-[2px] border-[#B17A26] bg-[#FFF7E5] p-1 shadow-[0_4px_12px_rgba(94,46,19,.16)]">
              <div className="pointer-events-none absolute -inset-1.5 rounded-[20px] border border-[#B17A26]/40" />

              <TemplatePhoto
                url={profile.photoUrl}
                shape="square"
                borderColor="#8B211B"
                className="!h-28 !w-24 rounded-[12px]"
              />
            </div>
          ) : (
            <div className="relative shrink-0 rounded-[17px] border-[2px] border-[#B17A26] bg-[#7A211B] p-1 shadow-[0_4px_12px_rgba(94,46,19,.16)]">
              <div className="flex h-28 w-24 items-center justify-center rounded-[12px] border border-[#E7C56E] bg-[#8A2023]">
                <img
                  src="/templates/shared/ganesh-icon.png"
                  alt=""
                  aria-hidden="true"
                  className="h-20 w-20 object-contain"
                />
              </div>
            </div>
          )}
        </div>

        {/* Main two-column composition */}
        <div className="mt-5 grid grid-cols-2 items-start gap-x-5">
          {/* LEFT COLUMN */}
          <div className="space-y-5">
            <Section
              icon="person"
              title={
                isMarathi
                  ? "वैयक्तिक माहिती  |  Personal Details"
                  : "Personal Details"
              }
            >
              <Row
                className="mt-2"
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

            <Section
              icon="family"
              title={
                isMarathi
                  ? "कौटुंबिक माहिती  |  Family Details"
                  : "Family Details"
              }
            >
              <Row
                className="mt-2"
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
                label={isMarathi ? "कुटुंबाचे ठिकाण" : "Family Location"}
                value={family.familyLocation}
              />

              <Row
                label={isMarathi ? "मामांचे नाव" : "Maternal Uncle"}
                value={family.maternalUncleName}
              />

              <Row
                label={isMarathi ? "मामांचे गाव" : "Uncle's Place"}
                value={family.maternalUnclePlace}
              />

              <Row
                label={isMarathi ? "नातेवाईकांची आडनावे" : "Relative Surnames"}
                value={family.relativeSurnames}
              />
            </Section>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-5">
            {design.showAstrology && (
              <Section
                icon="astrology"
                title={
                  isMarathi
                    ? "ज्योतिष माहिती  |  Horoscope & Astrology"
                    : "Horoscope & Astrology"
                }
              >
                <Row
                  className="mt-2"
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

            <Section
              icon="education"
              title={
                isMarathi
                  ? "शिक्षण व नोकरी  |  Education & Career"
                  : "Education & Career"
              }
            >
              <Row
                className="mt-2"
                label={isMarathi ? "उच्च शिक्षण" : "Education"}
                value={education.highestEducation}
              />

              <Row
                label={isMarathi ? "महाविद्यालय" : "College / Institute"}
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

            {design.showExpectations && (
              <Section
                icon="expectations"
                title={isMarathi ? "अपेक्षा  |  Expectations" : "Expectations"}
              >
                <Row
                  className="mt-2"
                  label={isMarathi ? "अपेक्षित शिक्षण" : "Preferred Education"}
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
                  value={expectations.partnerExpectations}
                />
              </Section>
            )}

            <Section
              icon="contact"
              title={
                isMarathi
                  ? "संपर्क माहिती  |  Contact Details"
                  : "Contact Details"
              }
            >
              <Row
                className="mt-2"
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
                label={isMarathi ? "पत्ता" : "Address"}
                value={contact.residentialAddress}
              />
            </Section>
          </div>
        </div>

        {/* CSS-only footer */}
        <div className="relative mt-5 flex flex-col items-center justify-center pb-1">
          <div className="mb-1.5 flex w-[70%] items-center gap-2">
            <span className="h-px flex-1 bg-[#B17A26]" />
            <span className="text-[7px] text-[#8B211B]">◆</span>
            <span className="h-px flex-1 bg-[#B17A26]" />
          </div>

          <p className="font-serifDevanagari text-xs font-bold tracking-wide text-[#7A211B]">
            || सर्वे भवन्तु सुखिनः, सर्वे सन्तु निरामयाः ||
          </p>
        </div>
      </div>
    </div>
  );
};
