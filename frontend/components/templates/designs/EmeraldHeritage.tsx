"use client";

import React, { useLayoutEffect, useRef, useState } from "react";
import { BiodataData } from "@/types/biodata";
import { TemplatePhoto } from "../TemplateHelpers";

// ============================================================
// EMERALD HERITAGE — PREMIUM A4 BIODATA TEMPLATE
// Auto-fits all content into a fixed 794x1123 (A4) page.
// ============================================================

const ASSET = "/templates/emerald-heritage";

const GOLD = "#C99A2E";
const GOLD_LIGHT = "#E0BD62";
const EMERALD = "#073F32";
const EMERALD_DARK = "#032D24";
const CREAM = "#F8F1DF";
const CREAM_DARK = "#EEE2C7";
const TEXT = "#183E35";

const PAGE_WIDTH = 794;
const PAGE_HEIGHT = 1123;

// ============================================================
// HELPERS
// ============================================================

const valueExists = (value?: string | number | null) =>
  value !== undefined &&
  value !== null &&
  value !== "" &&
  value !== "0" &&
  value !== "०";

const SectionBanner = ({ title, icon }: { title: string; icon: string }) => {
  return (
    <div className="relative mb-2.5 flex items-center">
      <div
        className="
          relative flex min-h-[30px] items-center
          rounded-full border border-[#D8AD45]
          bg-[#073F32]
          px-3.5 py-1
          shadow-[0_2px_5px_rgba(3,45,36,0.18)]
        "
      >
        <span
          className="
            mr-2 flex h-5 w-5 shrink-0 items-center justify-center
            rounded-full border border-[#D8AD45]
            bg-[#0A4D3D]
            text-[10px]
            text-[#E0BD62]
          "
        >
          {icon}
        </span>

        <span className="font-serif text-[12px] font-bold uppercase tracking-[0.12em] text-[#F2D27B]">
          {title}
        </span>
      </div>

      <span className="ml-2 h-px flex-1 bg-gradient-to-r from-[#C99A2E]/60 to-transparent" />
    </div>
  );
};

const FieldRow = ({
  label,
  value,
  className = "",
}: {
  label: string;
  value?: string | number | null;
  className?: string;
}) => {
  if (!valueExists(value)) return null;

  return (
    <div
      className={`grid grid-cols-[145px_14px_minmax(0,1fr)] items-start py-[2px] font-serif text-[10.5px] leading-[1.35] text-[#183E35] ${className}`}
    >
      <span className="font-semibold">{label}</span>

      <span className="text-center text-[#A77A20]">:</span>

      <span className="min-w-0 break-words font-medium">{value}</span>
    </div>
  );
};

const GoldIconBadge = ({ src, alt = "" }: { src: string; alt?: string }) => (
  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#D8AD45] bg-[#073F32]">
    <img
      src={`${ASSET}/${src}`}
      alt={alt}
      aria-hidden={alt === ""}
      className="h-[17px] w-[17px] object-contain"
    />
  </div>
);

const SidebarRow = ({
  icon,
  label,
  value,
}: {
  icon: string;
  label: string;
  value?: string | number | null;
}) => {
  if (!valueExists(value)) return null;

  return (
    <div className="flex items-center gap-2.5">
      <GoldIconBadge src={icon} />

      <div className="min-w-0">
        <div className="font-serif text-[8.5px] font-bold uppercase tracking-[0.12em] text-[#E0BD62]">
          {label}
        </div>

        <div className="break-words font-serif text-[10px] leading-tight text-[#FAF7F2]">
          {value}
        </div>
      </div>
    </div>
  );
};

// ============================================================
// COMPONENT
// ============================================================

export const EmeraldHeritageTemplate: React.FC<{
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

  const occupation =
    education.designation ||
    education.occupation ||
    (isMarathi ? "व्यावसायिक" : "Professional");

  const aboutText = isMarathi
    ? "साधा, मनमिळावू आणि ध्येयवादी व्यक्ती. कुटुंबातील मूल्यांना महत्त्व देत आनंदी आणि अर्थपूर्ण जीवन जगण्यावर विश्वास."
    : "A simple, kind-hearted and ambitious individual who believes in building a happy and meaningful life together.";

  const preferredAgeHeight = `${expectations.preferredAgeMin || ""}${
    expectations.preferredAgeMax ? ` - ${expectations.preferredAgeMax}` : ""
  }${
    expectations.preferredHeightMin
      ? ` • ${expectations.preferredHeightMin}`
      : ""
  }`;

  const preferredCareerLocation = `${expectations.preferredOccupation || ""}${
    expectations.preferredLocation ? ` • ${expectations.preferredLocation}` : ""
  }`;

  // ============================================================
  // AUTO-FIT-TO-A4 LOGIC
  // Measures natural content height, then shrinks it (fonts,
  // spacing, everything uniformly) so it always fits inside the
  // fixed 1123px page height — nothing gets cut off.
  // ============================================================

  const pageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentScale, setContentScale] = useState(1);

  useLayoutEffect(() => {
    const pageEl = pageRef.current;
    const contentEl = contentRef.current;
    if (!pageEl || !contentEl) return;

    const measure = () => {
      // scrollHeight reflects natural layout height regardless of
      // any transform: scale already applied, so this stays accurate.
      const naturalHeight = contentEl.scrollHeight;
      const availableHeight = pageEl.clientHeight;

      if (naturalHeight <= 0 || availableHeight <= 0) return;

      const nextScale = Math.min(1, availableHeight / naturalHeight);
      setContentScale((prev) =>
        Math.abs(prev - nextScale) > 0.002 ? nextScale : prev,
      );
    };

    measure();

    const resizeObserver = new ResizeObserver(() => measure());
    resizeObserver.observe(pageEl);
    resizeObserver.observe(contentEl);

    return () => resizeObserver.disconnect();
  }, [data, isMarathi]);

  return (
    <div
      ref={pageRef}
      className="
        relative mx-auto
        w-full max-w-[794px]
        overflow-hidden
        bg-[#F8F1DF]
        text-[#183E35]
        shadow-2xl
        print:shadow-none
        sm:rounded-sm
      "
      style={{
        aspectRatio: `${PAGE_WIDTH} / ${PAGE_HEIGHT}`,
        WebkitPrintColorAdjust: "exact",
        printColorAdjust: "exact",
      }}
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(201,154,46,0.08),transparent_35%),linear-gradient(135deg,#fbf5e7,#f3ead4)]" />

      {/* subtle heritage texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: "radial-gradient(#073F32 0.6px, transparent 0.6px)",
          backgroundSize: "8px 8px",
        }}
      />

      {/* =====================================================
          OUTER + INNER GOLD FRAME
      ====================================================== */}

      <div className="pointer-events-none absolute inset-1 border border-[#B98A28]" />
      <div className="pointer-events-none absolute inset-[7px] border border-[#D8AD45]/70" />
      <div className="pointer-events-none absolute inset-4 border border-[#B98A28]/45" />

      {/* =====================================================
          CORNER ORNAMENTS
      ====================================================== */}

      <img
        src={`${ASSET}/corner-ornament.png`}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-1 top-1 z-20 w-[72px] select-none"
      />

      <img
        src={`${ASSET}/corner-ornament.png`}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-1 top-1 z-20 w-[72px] -scale-x-100 select-none"
      />

      <img
        src={`${ASSET}/corner-ornament.png`}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-1 left-1 z-20 w-[72px] -scale-y-100 select-none"
      />

      <img
        src={`${ASSET}/corner-ornament.png`}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-1 right-1 z-20 w-[72px] -scale-x-100 -scale-y-100 select-none"
      />

      {/* =====================================================
          RIGHT DECORATIVE LANTERN
      ====================================================== */}

      <img
        src={`${ASSET}/hanging-lantern.png`}
        alt=""
        aria-hidden="true"
        className="
          pointer-events-none absolute
          right-[20px] top-[165px]
          z-10 w-[68px]
          opacity-90
          select-none
        "
      />

      {/* =====================================================
          PEACOCK FEATHER
      ====================================================== */}

      <img
        src={`${ASSET}/peacock-feather.png`}
        alt=""
        aria-hidden="true"
        className="
          pointer-events-none absolute
          bottom-[-15px] right-[-8px]
          z-10 w-[145px]
          opacity-90
          select-none
        "
      />

      {/* =====================================================
          SCALE WRAPPER — pins content to top, shrinks it
          uniformly (fonts + spacing together) so everything
          always lands inside the fixed A4 page height.
      ====================================================== */}

      <div
        ref={contentRef}
        className="absolute left-0 top-0 z-30 flex flex-col px-[24px] py-[22px] sm:px-[25px]"
        style={{
          width: `${100 / contentScale}%`,
          transform: `scale(${contentScale})`,
          transformOrigin: "top left",
        }}
      >
        <div className="flex gap-[18px]">
          {/* =================================================
              LEFT SIDEBAR
          ================================================== */}

          <aside
            className="
              relative w-[29%]
              shrink-0
              overflow-hidden
              rounded-[42px_42px_14px_14px]
              border border-[#D5A83E]
              bg-gradient-to-b from-[#0A4D3D] via-[#063E31] to-[#032D24]
              px-[15px] pb-5 pt-[30px]
              shadow-[4px_5px_15px_rgba(3,45,36,0.25)]
            "
          >
            {/* sidebar inner gold frame */}
            <div className="pointer-events-none absolute inset-[5px] rounded-[37px_37px_10px_10px] border border-[#D8AD45]/60" />

            {/* sidebar pattern */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage:
                  "radial-gradient(#E0BD62 0.5px, transparent 0.5px)",
                backgroundSize: "7px 7px",
              }}
            />

            {/* finial */}
            <img
              src={`${ASSET}/sidebar-finial.png`}
              alt=""
              aria-hidden="true"
              className="relative mx-auto mb-1 h-[31px] w-[55px] object-contain"
            />

            {/* photo */}
            {design.showPhoto && (
              <div className="relative mx-auto mt-0 w-[104px]">
                <div className="absolute inset-[-5px] rounded-full border border-[#D8AD45]" />
                <div className="absolute inset-[-9px] rounded-full border border-[#D8AD45]/60" />

                <TemplatePhoto
                  url={profile.photoUrl}
                  shape="circle"
                  borderColor={GOLD}
                  className="!h-[104px] !w-[104px] !border-0"
                />
              </div>
            )}

            {/* ABOUT */}
            <div className="relative mt-7 text-center">
              <h2 className="font-serif text-[15px] font-bold uppercase tracking-[0.14em] text-[#E0BD62]">
                {isMarathi ? "माझ्याबद्दल" : "ABOUT ME"}
              </h2>

              <div className="mx-auto mt-2 flex w-[88%] items-center gap-1.5">
                <span className="h-px flex-1 bg-[#D8AD45]/70" />
                <span className="h-[5px] w-[5px] rotate-45 bg-[#D8AD45]" />
                <span className="h-px flex-1 bg-[#D8AD45]/70" />
              </div>

              <p className="mt-3 px-1 font-serif text-[9.5px] leading-[1.55] text-[#F7EEDB]">
                {aboutText}
              </p>
            </div>

            {/* sidebar divider */}
            <div className="my-5 flex items-center gap-2">
              <span className="h-px flex-1 bg-[#D8AD45]/50" />
              <span className="h-1.5 w-1.5 rotate-45 border border-[#D8AD45]" />
              <span className="h-px flex-1 bg-[#D8AD45]/50" />
            </div>

            {/* SIDEBAR DETAILS */}
            <div className="relative space-y-3.5">
              <SidebarRow
                icon="dob-icon.png"
                label={isMarathi ? "जन्मतारीख" : "DOB"}
                value={personal.dob}
              />

              <SidebarRow
                icon="height-icon.png"
                label={isMarathi ? "उंची" : "HEIGHT"}
                value={personal.height}
              />

              <SidebarRow
                icon="education-icon.png"
                label={isMarathi ? "शिक्षण" : "EDUCATION"}
                value={education.highestEducation}
              />

              <SidebarRow
                icon="occupation-icon.png"
                label={isMarathi ? "व्यवसाय" : "OCCUPATION"}
                value={occupation}
              />

              <SidebarRow
                icon="income-icon.png"
                label={isMarathi ? "उत्पन्न" : "INCOME"}
                value={education.annualIncome}
              />

              <SidebarRow
                icon="family-icon.png"
                label={isMarathi ? "कुटुंब" : "FAMILY"}
                value={family.familyType}
              />

              <SidebarRow
                icon="location-icon.png"
                label={isMarathi ? "ठिकाण" : "LOCATION"}
                value={family.familyLocation}
              />
            </div>

            {/* bottom lotus */}
            <div className="mt-5 flex flex-col items-center">
              <div className="mb-2 h-px w-[65%] bg-[#D8AD45]/50" />

              <img
                src={`${ASSET}/lotus-divider.png`}
                alt=""
                aria-hidden="true"
                className="h-[25px] w-[40px] object-contain"
              />
            </div>
          </aside>

          {/* =================================================
              RIGHT CONTENT
          ================================================== */}

          <main className="relative min-w-0 flex-1 pl-1 pr-[8px]">
            {/* HEADER */}
            <header className="relative pt-[7px] text-center">
              <img
                src={`${ASSET}/lotus-icon.png`}
                alt=""
                aria-hidden="true"
                className="mx-auto h-[34px] w-[45px] object-contain"
              />

              <h1 className="mt-0 font-serif text-[38px] font-bold leading-none tracking-[0.08em] text-[#073F32]">
                BIODATA
              </h1>

              <p className="mt-2 font-serif text-[7.5px] font-semibold uppercase tracking-[0.25em] text-[#A77A20]">
                TRADITION • VALUES • TOGETHER FOREVER
              </p>

              <div className="mx-auto mt-3 flex max-w-[360px] items-center gap-2">
                <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#B98A28]" />
                <span className="h-[6px] w-[6px] rotate-45 border border-[#B98A28] bg-[#F8F1DF]" />
                <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#B98A28]" />
              </div>
            </header>

            {/* ===============================================
                PERSONAL DETAILS
            ================================================ */}

            <section className="mt-5">
              <SectionBanner
                icon="●"
                title={isMarathi ? "वैयक्तिक माहिती" : "Personal Details"}
              />

              <div className="pl-1">
                <FieldRow
                  label={isMarathi ? "पूर्ण नाव" : "Full Name"}
                  value={personal.fullName}
                />

                <FieldRow
                  label={isMarathi ? "जन्मतारीख" : "Date of Birth"}
                  value={personal.dob}
                />

                <FieldRow
                  label={isMarathi ? "जन्मवेळ" : "Birth Time"}
                  value={personal.birthTime}
                />

                <FieldRow
                  label={isMarathi ? "जन्मस्थान" : "Birth Place"}
                  value={personal.birthPlace}
                />

                <FieldRow
                  label={isMarathi ? "लिंग" : "Gender"}
                  value={personal.gender}
                />

                <FieldRow
                  label={isMarathi ? "वैवाहिक स्थिती" : "Marital Status"}
                  value={personal.maritalStatus}
                />

                <FieldRow
                  label={isMarathi ? "धर्म / जात" : "Religion / Caste"}
                  value={`${personal.religion || ""}${
                    personal.caste ? ` (${personal.caste})` : ""
                  }`}
                />

                <FieldRow
                  label={isMarathi ? "मंगळ" : "Manglik"}
                  value={personal.manglik}
                />

                {design.showAstrology && (
                  <>
                    <FieldRow
                      label={isMarathi ? "राशी" : "Rashi"}
                      value={personal.rashi}
                    />

                    <FieldRow
                      label={isMarathi ? "नक्षत्र" : "Nakshatra"}
                      value={personal.nakshatra}
                    />
                  </>
                )}
              </div>
            </section>

            {/* ===============================================
                FAMILY
            ================================================ */}

            <section className="mt-4">
              <SectionBanner
                icon="♛"
                title={isMarathi ? "कौटुंबिक माहिती" : "Family Background"}
              />

              <div className="pl-1">
                <FieldRow
                  label={isMarathi ? "वडिलांचे नाव" : "Father's Name"}
                  value={family.fatherName}
                />

                <FieldRow
                  label={isMarathi ? "आईचे नाव" : "Mother's Name"}
                  value={family.motherName}
                />

                <FieldRow
                  label={isMarathi ? "वडिलांचा व्यवसाय" : "Father's Occupation"}
                  value={family.fatherOccupation}
                />

                <FieldRow
                  label={isMarathi ? "आईचा व्यवसाय" : "Mother's Occupation"}
                  value={family.motherOccupation}
                />

                <FieldRow
                  label={isMarathi ? "भाऊ" : "Brothers"}
                  value={family.brotherCount}
                />

                <FieldRow
                  label={isMarathi ? "बहिणी" : "Sisters"}
                  value={family.sisterCount}
                />

                <FieldRow
                  label={isMarathi ? "कुटुंब प्रकार" : "Family Type"}
                  value={family.familyType}
                />

                <FieldRow
                  label={isMarathi ? "मूळ गाव" : "Native Place"}
                  value={family.nativePlace}
                />

                <FieldRow
                  label={isMarathi ? "सध्याचे ठिकाण" : "Family Location"}
                  value={family.familyLocation}
                />
              </div>
            </section>

            {/* ===============================================
                EDUCATION
            ================================================ */}

            <section className="mt-4">
              <SectionBanner
                icon="◆"
                title={isMarathi ? "शिक्षण व नोकरी" : "Education & Career"}
              />

              <div className="pl-1">
                <FieldRow
                  label={isMarathi ? "उच्च शिक्षण" : "Highest Education"}
                  value={education.highestEducation}
                />

                <FieldRow
                  label={isMarathi ? "महाविद्यालय" : "College / Institute"}
                  value={education.college}
                />

                <FieldRow
                  label={isMarathi ? "व्यवसाय" : "Profession"}
                  value={education.occupation}
                />

                <FieldRow
                  label={isMarathi ? "पद" : "Designation"}
                  value={education.designation}
                />

                <FieldRow
                  label={isMarathi ? "कंपनी" : "Company"}
                  value={education.companyName}
                />

                <FieldRow
                  label={isMarathi ? "नोकरीचे ठिकाण" : "Work Location"}
                  value={education.workLocation}
                />

                <FieldRow
                  label={isMarathi ? "वार्षिक उत्पन्न" : "Annual Income"}
                  value={education.annualIncome}
                />
              </div>
            </section>

            {/* ===============================================
                ASTROLOGY
            ================================================ */}

            {design.showAstrology && (
              <section className="mt-4">
                <SectionBanner
                  icon="✦"
                  title={
                    isMarathi
                      ? "पत्रिका / ज्योतिष माहिती"
                      : "Horoscope & Astrology"
                  }
                />

                <div className="grid grid-cols-2 gap-x-5 pl-1">
                  <FieldRow
                    label={isMarathi ? "राशी" : "Rashi"}
                    value={personal.rashi}
                  />

                  <FieldRow
                    label={isMarathi ? "नक्षत्र" : "Nakshatra"}
                    value={personal.nakshatra}
                  />

                  <FieldRow
                    label={isMarathi ? "चरण" : "Charan"}
                    value={personal.charan}
                  />

                  <FieldRow
                    label={isMarathi ? "नाडी" : "Nadi"}
                    value={personal.nadi}
                  />

                  <FieldRow
                    label={isMarathi ? "गण" : "Gan"}
                    value={personal.gan}
                  />

                  <FieldRow
                    label={isMarathi ? "मंगळ" : "Manglik"}
                    value={personal.manglik}
                  />
                </div>
              </section>
            )}

            {/* ===============================================
                LIFESTYLE
            ================================================ */}

            <section className="mt-4">
              <SectionBanner
                icon="♥"
                title={isMarathi ? "जीवनशैली व आवडी" : "Lifestyle & Interests"}
              />

              <div className="pl-1">
                <FieldRow
                  label={isMarathi ? "वजन" : "Weight"}
                  value={personal.weight}
                />

                <FieldRow
                  label={isMarathi ? "रक्तगट" : "Blood Group"}
                  value={personal.bloodGroup}
                />

                <FieldRow
                  label={isMarathi ? "वर्ण" : "Complexion"}
                  value={personal.complexion}
                />
              </div>
            </section>

            {/* ===============================================
                LOTUS DIVIDER
            ================================================ */}

            <div className="my-3 flex items-center justify-center gap-3">
              <span className="h-px w-[75px] bg-[#B98A28]/55" />

              <img
                src={`${ASSET}/lotus-divider.png`}
                alt=""
                aria-hidden="true"
                className="h-[25px] w-[38px] object-contain"
              />

              <span className="h-px w-[75px] bg-[#B98A28]/55" />
            </div>

            {/* ===============================================
                EXPECTATIONS
            ================================================ */}

            {design.showExpectations && (
              <section className="mt-1">
                <SectionBanner
                  icon="♣"
                  title={isMarathi ? "अपेक्षा" : "Expectations"}
                />

                <div className="pl-1">
                  <FieldRow
                    label={
                      isMarathi
                        ? "अपेक्षित वय / उंची"
                        : "Preferred Age / Height"
                    }
                    value={preferredAgeHeight}
                  />

                  <FieldRow
                    label={
                      isMarathi ? "अपेक्षित शिक्षण" : "Preferred Education"
                    }
                    value={expectations.preferredEducation}
                  />

                  <FieldRow
                    label={
                      isMarathi
                        ? "अपेक्षित नोकरी / ठिकाण"
                        : "Preferred Career / City"
                    }
                    value={preferredCareerLocation}
                  />

                  <FieldRow
                    label={isMarathi ? "इतर अपेक्षा" : "Other Expectations"}
                    value={expectations.partnerExpectations}
                  />
                </div>
              </section>
            )}

            {/* ===============================================
                CONTACT
            ================================================ */}

            <section className="mt-4 pb-2">
              <SectionBanner
                icon="◆"
                title={isMarathi ? "संपर्क माहिती" : "Contact Details"}
              />

              <div className="rounded-md border border-[#C99A2E]/30 bg-[#EFE3C9]/40 px-2 py-1.5">
                <FieldRow
                  label={isMarathi ? "संपर्क व्यक्ती" : "Contact Person"}
                  value={contact.contactPerson}
                />

                <FieldRow
                  label={isMarathi ? "मोबाईल क्र. १" : "Mobile 1"}
                  value={contact.phone1}
                />

                <FieldRow
                  label={isMarathi ? "मोबाईल क्र. २" : "Mobile 2"}
                  value={contact.phone2}
                />

                <FieldRow
                  label={isMarathi ? "ईमेल" : "Email"}
                  value={contact.email}
                />

                <FieldRow
                  label={isMarathi ? "पत्ता" : "Address"}
                  value={contact.residentialAddress}
                />
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default EmeraldHeritageTemplate;
