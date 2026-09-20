// components/templates/designs/ClassicRed.tsx
"use client";

import React, { useCallback, useLayoutEffect, useRef } from "react";
import { BiodataData } from "@/types/biodata";
import { TemplatePhoto } from "../TemplateHelpers";

const SAFE_LEFT = 64;
const SAFE_RIGHT = 64;
const SAFE_TOP = 64;
const SAFE_BOTTOM = 64;

const MIN_SCALE = 0.7;
const SCALE_STEP = 0.02;
const MAX_FIT_ITERATIONS = 25;

type LowPriorityKey =
  | "skills"
  | "languagesKnown"
  | "hobbies"
  | "interests"
  | "otherInformation"
  | "relativeSurnames";

const LOW_PRIORITY_ORDER: LowPriorityKey[] = [
  "skills",
  "languagesKnown",
  "hobbies",
  "interests",
  "otherInformation",
  "relativeSurnames",
];

type FitStyle = React.CSSProperties & {
  "--u": number | string;
};

export const ClassicRedTemplate: React.FC<{ data: BiodataData }> = ({
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

  const contentRef = useRef<HTMLDivElement>(null);

  const isMarathi = profile.language === "mr";

  const gold = "#D4AF6A";
  const mutedGold = "#DABE75";
  const cream = "#FAF7F2";
  const maroon = "#4A0E14";

  const isEmpty = (value?: string | number | null) => {
    if (value === undefined || value === null) return true;

    const normalized = String(value).trim();

    return normalized === "" || normalized === "0" || normalized === "०";
  };

  const joinValues = (
    values: Array<string | number | null | undefined>,
    separator = " • ",
  ) =>
    values
      .filter((value) => !isEmpty(value))
      .map((value) => String(value).trim())
      .join(separator);

  const rangeValue = (
    min?: string | number | null,
    max?: string | number | null,
  ) => {
    const hasMin = !isEmpty(min);
    const hasMax = !isEmpty(max);

    if (hasMin && hasMax) return `${min} - ${max}`;
    if (hasMin) return String(min);
    if (hasMax) return String(max);

    return "";
  };

  const profession = education.designation || education.occupation || "";

  const deityText =
    profile.deityName?.trim() ||
    (isMarathi ? "॥ श्री गणेशाय नमः ॥" : "॥ श्री गणेशाय नमः ॥");

  const fitContent = useCallback(() => {
    const container = contentRef.current;
    if (!container) return;

    const priorityRows = Array.from(
      container.querySelectorAll<HTMLElement>("[data-fit-priority]"),
    );

    priorityRows.forEach((row) => {
      row.style.removeProperty("display");
    });

    const setScale = (scale: number) => {
      container.style.setProperty("--u", scale.toFixed(2));
    };

    const isOverflowing = () =>
      container.scrollHeight > container.clientHeight + 1;

    setScale(1);

    // Force layout before measurements.
    void container.offsetHeight;

    let scale = 1;
    let iterations = 0;

    while (
      isOverflowing() &&
      scale > MIN_SCALE &&
      iterations < MAX_FIT_ITERATIONS
    ) {
      scale = Math.max(MIN_SCALE, Number((scale - SCALE_STEP).toFixed(2)));
      setScale(scale);

      void container.offsetHeight;
      iterations += 1;
    }

    if (!isOverflowing()) return;

    for (const priority of LOW_PRIORITY_ORDER) {
      const rows = priorityRows.filter(
        (row) => row.dataset.fitPriority === priority,
      );

      rows.forEach((row) => {
        row.style.display = "none";
      });

      void container.offsetHeight;

      if (!isOverflowing()) {
        break;
      }
    }
  }, []);

  useLayoutEffect(() => {
    fitContent();

    let cancelled = false;

    const fitAfterFonts = async () => {
      if (typeof document !== "undefined" && document.fonts?.ready) {
        await document.fonts.ready;
      }

      if (!cancelled) {
        fitContent();
      }
    };

    void fitAfterFonts();

    const frame = window.requestAnimationFrame(() => {
      if (!cancelled) fitContent();
    });

    const beforePrint = () => {
      fitContent();
    };

    window.addEventListener("beforeprint", beforePrint);

    return () => {
      cancelled = true;
      window.cancelAnimationFrame(frame);
      window.removeEventListener("beforeprint", beforePrint);
    };
  }, [data, fitContent]);

  const Row = ({
    label,
    value,
    className = "",
    priority,
    wide = false,
  }: {
    label: string;
    value?: string | number | null;
    className?: string;
    priority?: LowPriorityKey;
    wide?: boolean;
  }) => {
    if (isEmpty(value)) return null;

    return (
      <div
        data-fit-priority={priority}
        className={[
          "flex min-w-0 items-start",
          "text-[calc(var(--u)*11px)]",
          "leading-[calc(var(--u)*15px)]",
          "py-[calc(var(--u)*1px)]",
          wide ? "col-span-2" : "",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <div
          className={[
            "flex shrink-0 items-start justify-between",
            "w-[calc(var(--u)*110px)]",
            "pr-[calc(var(--u)*4px)]",
            "font-semibold",
            "text-[#DABE75]",
          ].join(" ")}
        >
          <span className="min-w-0 break-words">{label}</span>

          <span
            aria-hidden="true"
            className="shrink-0 pl-[calc(var(--u)*3px)] text-[#D4AF6A]"
          >
            :
          </span>
        </div>

        <div
          className={[
            "min-w-0 flex-1 break-words",
            "pl-[calc(var(--u)*4px)]",
            "font-medium text-[#FAF7F2]",
          ].join(" ")}
        >
          {value}
        </div>
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
    <section className={`min-w-0 ${className}`}>
      <div className="mb-[calc(var(--u)*5px)]">
        <h2
          className={[
            "font-serif font-bold",
            "text-[calc(var(--u)*14px)]",
            "leading-[calc(var(--u)*17px)]",
            "tracking-[calc(var(--u)*0.25px)]",
            "text-[#D4AF6A]",
          ].join(" ")}
        >
          {title}
        </h2>

        <img
          src="/templates/classic-red/section-heading-underline.png"
          alt=""
          aria-hidden="true"
          className={[
            "mt-[calc(var(--u)*2px)]",
            "h-auto",
            "w-[calc(var(--u)*175px)]",
            "max-w-full",
            "select-none",
          ].join(" ")}
        />
      </div>

      {children}
    </section>
  );

  const PhotoBlock = () => {
    if (!design.showPhoto) return null;

    return (
      <div
        className={[
          "shrink-0",
          "border-2 border-[#D4AF6A]",
          "p-[calc(var(--u)*3px)]",
          "bg-[#4A0E14]",
          "shadow-[0_0_14px_rgba(212,175,106,0.3)]",
        ].join(" ")}
      >
        <div
          className={[
            "h-[calc(var(--u)*126px)]",
            "w-[calc(var(--u)*96px)]",
            "overflow-hidden",
            "border border-[#D4AF6A]/70",
            "bg-[#2F0B10]",
          ].join(" ")}
        >
          {!isEmpty(profile.photoUrl) ? (
            <TemplatePhoto
              url={profile.photoUrl}
              shape="rounded"
              borderColor={gold}
              className="!h-full !w-full !rounded-none !border-0 !p-0 object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-[#3A0A14]" />
          )}
        </div>
      </div>
    );
  };

  const preferredAge = rangeValue(
    expectations.preferredAgeMin,
    expectations.preferredAgeMax,
  );

  return (
    <div
      className={[
        "relative mx-auto",
        "h-[1123px] w-[794px]",
        "overflow-hidden",
        "bg-[#4A0E14]",
        "text-[#FAF7F2]",
        "shadow-2xl print:shadow-none",
      ].join(" ")}
      style={{
        WebkitPrintColorAdjust: "exact",
        printColorAdjust: "exact",
      }}
    >
      {/* Layer 1: maroon textured background */}
      <img
        src="/templates/classic-red/bg-maroon-texture.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 h-full w-full select-none object-cover"
      />

      {/* Layer 2: faint Ganesh watermark */}
      <img
        src="/templates/shared/ganesh-icon.png"
        alt=""
        aria-hidden="true"
        className={[
          "pointer-events-none absolute",
          "bottom-[42px] right-[34px]",
          "z-[1]",
          "h-auto w-[350px]",
          "select-none opacity-[0.13]",
        ].join(" ")}
      />

      {/* Layer 3: all content inside one safe rectangle */}
      <div
        ref={contentRef}
        className={["absolute z-10", "flex flex-col", "overflow-visible"].join(
          " ",
        )}
        style={
          {
            "--u": 1,
            left: SAFE_LEFT,
            right: SAFE_RIGHT,
            top: SAFE_TOP,
            bottom: SAFE_BOTTOM,
          } as FitStyle
        }
      >
        {/* Header */}
        <header className="shrink-0">
          <div className="flex flex-col items-center">
            <img
              src="/templates/shared/ganesh-icon.png"
              alt=""
              aria-hidden="true"
              className={[
                "h-auto",
                "w-[calc(var(--u)*46px)]",
                "select-none",
              ].join(" ")}
            />

            <p
              className={[
                "mt-[calc(var(--u)*2px)]",
                "text-center",
                "font-serifDevanagari font-semibold",
                "text-[calc(var(--u)*11px)]",
                "leading-[calc(var(--u)*14px)]",
                "tracking-[calc(var(--u)*0.65px)]",
                "text-[#DABE75]",
              ].join(" ")}
            >
              {deityText}
            </p>
          </div>

          <div
            className={[
              "mt-[calc(var(--u)*7px)]",
              "flex items-start justify-between",
              "gap-[calc(var(--u)*16px)]",
            ].join(" ")}
          >
            <div
              className={["min-w-0 flex-1", "pt-[calc(var(--u)*5px)]"].join(
                " ",
              )}
            >
              {!isEmpty(profile.biodataTitle) && (
                <p
                  className={[
                    "mb-[calc(var(--u)*2px)]",
                    "font-serifDevanagari font-medium uppercase",
                    "text-[calc(var(--u)*9px)]",
                    "leading-[calc(var(--u)*12px)]",
                    "tracking-[calc(var(--u)*1.1px)]",
                    "text-[#DABE75]",
                  ].join(" ")}
                >
                  {profile.biodataTitle}
                </p>
              )}

              {!isEmpty(personal.fullName) && (
                <h1
                  className={[
                    "max-w-[calc(var(--u)*430px)]",
                    "break-words",
                    "font-serifDevanagari font-bold",
                    "text-[calc(var(--u)*28px)]",
                    "leading-[calc(var(--u)*32px)]",
                    "tracking-[calc(var(--u)*0.2px)]",
                    "text-[#D4AF6A]",
                  ].join(" ")}
                >
                  {personal.fullName}
                </h1>
              )}

              {!isEmpty(profession) && (
                <p
                  className={[
                    "mt-[calc(var(--u)*3px)]",
                    "font-medium",
                    "text-[calc(var(--u)*12px)]",
                    "leading-[calc(var(--u)*15px)]",
                    "tracking-[calc(var(--u)*0.25px)]",
                    "text-[#FAF7F2]",
                  ].join(" ")}
                >
                  {profession}
                </p>
              )}

              {!isEmpty(education.companyName) && (
                <p
                  className={[
                    "mt-[calc(var(--u)*1px)]",
                    "text-[calc(var(--u)*10px)]",
                    "leading-[calc(var(--u)*13px)]",
                    "text-[#DABE75]",
                  ].join(" ")}
                >
                  {education.companyName}
                </p>
              )}
            </div>

            <PhotoBlock />
          </div>
        </header>

        {/* Main content. justify-between distributes spare height on short biodatas. */}
        <main
          className={[
            "mt-[calc(var(--u)*8px)]",
            "flex min-h-0 flex-1 flex-col justify-between",
            "gap-[calc(var(--u)*7px)]",
          ].join(" ")}
        >
          {/* Personal + Education */}
          <div
            className={["grid grid-cols-2", "gap-[calc(var(--u)*18px)]"].join(
              " ",
            )}
          >
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
                  label={isMarathi ? "धर्म" : "Religion"}
                  value={personal.religion}
                />
                <Row
                  label={isMarathi ? "जात" : "Caste"}
                  value={personal.caste}
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

            <Section
              title={isMarathi ? "शिक्षण व नोकरी" : "Education & Career"}
            >
              <div>
                <Row
                  label={isMarathi ? "उच्च शिक्षण" : "Education"}
                  value={education.highestEducation}
                />
                <Row
                  label={isMarathi ? "पदवी तपशील" : "Degree Details"}
                  value={education.degreeDetails}
                />
                <Row
                  label={isMarathi ? "महाविद्यालय" : "College/Institute"}
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
                <Row
                  label={isMarathi ? "अनुभव" : "Experience"}
                  value={education.experienceYears}
                />
                <Row
                  priority="skills"
                  label={isMarathi ? "कौशल्ये" : "Skills"}
                  value={education.skills}
                />
                <Row
                  priority="languagesKnown"
                  label={isMarathi ? "भाषा" : "Languages"}
                  value={education.languagesKnown}
                />
              </div>
            </Section>
          </div>

          {/* Horoscope */}
          {design.showAstrology && (
            <Section
              title={
                isMarathi ? "पत्रिका / ज्योतिष माहिती" : "Horoscope & Astrology"
              }
            >
              <div
                className={[
                  "grid grid-cols-2",
                  "gap-x-[calc(var(--u)*20px)]",
                ].join(" ")}
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
              </div>
            </Section>
          )}

          {/* Family */}
          <Section title={isMarathi ? "कौटुंबिक माहिती" : "Family Details"}>
            <div
              className={[
                "grid grid-cols-2",
                "gap-x-[calc(var(--u)*20px)]",
              ].join(" ")}
            >
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
                label={isMarathi ? "कुटुंब प्रकार" : "Family Type"}
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
                wide
                priority="relativeSurnames"
                label={isMarathi ? "नातेसंबंधातील आडनावे" : "Relative Surnames"}
                value={family.relativeSurnames}
              />
            </div>
          </Section>

          {/* Expectations */}
          {design.showExpectations && (
            <Section title={isMarathi ? "अपेक्षा" : "Partner Expectations"}>
              <div
                className={[
                  "grid grid-cols-2",
                  "gap-x-[calc(var(--u)*20px)]",
                ].join(" ")}
              >
                <Row
                  label={isMarathi ? "अपेक्षित वय" : "Preferred Age"}
                  value={preferredAge}
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
                  label={isMarathi ? "अपेक्षित व्यवसाय" : "Preferred Career"}
                  value={expectations.preferredOccupation}
                />
                <Row
                  label={isMarathi ? "अपेक्षित ठिकाण" : "Preferred Location"}
                  value={expectations.preferredLocation}
                />
                <Row
                  label={
                    isMarathi ? "वैवाहिक स्थिती" : "Expected Marital Status"
                  }
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
                  priority="hobbies"
                  label={isMarathi ? "छंद" : "Hobbies"}
                  value={expectations.hobbies}
                />
                <Row
                  priority="interests"
                  label={isMarathi ? "आवडी" : "Interests"}
                  value={expectations.interests}
                />
                <Row
                  wide
                  priority="otherInformation"
                  label={isMarathi ? "इतर माहिती" : "Other Information"}
                  value={expectations.otherInformation}
                />
                <Row
                  wide
                  label={isMarathi ? "जोडीदार अपेक्षा" : "Partner Expectations"}
                  value={expectations.partnerExpectations}
                />
              </div>
            </Section>
          )}

          {/* Contact */}
          <Section title={isMarathi ? "संपर्क माहिती" : "Contact Details"}>
            <div
              className={[
                "grid grid-cols-2",
                "gap-x-[calc(var(--u)*20px)]",
              ].join(" ")}
            >
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
                wide
                label={isMarathi ? "पत्ता" : "Address"}
                value={contact.residentialAddress}
              />
            </div>
          </Section>
        </main>

        {/* Footer — always the final child in the safe rectangle */}
        <footer
          className={[
            "flex shrink-0 justify-center",
            "pt-[calc(var(--u)*6px)]",
          ].join(" ")}
        >
          <img
            src="/templates/classic-red/footer-ornament.png"
            alt=""
            aria-hidden="true"
            className={[
              "h-auto",
              "w-[calc(var(--u)*270px)]",
              "max-w-full",
              "select-none",
            ].join(" ")}
          />
        </footer>
      </div>
    </div>
  );
};

export default ClassicRedTemplate;
