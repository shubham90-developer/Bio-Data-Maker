"use client";

import React, { useState, useRef, useLayoutEffect, useEffect } from "react";
import { BiodataData } from "@/types/biodata";

// SSR-safe layout effect
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export const SAFE_TOP = 74;
export const SAFE_BOTTOM = 1050;
export const SAFE_LEFT = 100;
export const SAFE_RIGHT = 90;
export const SAFE_WIDTH = 794 - SAFE_LEFT - SAFE_RIGHT; // 604px
export const SAFE_HEIGHT = SAFE_BOTTOM - SAFE_TOP; // 976px

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

  const isMarathi = profile?.language === "mr";
  const [imgError, setImgError] = useState(false);
  const [scaleU, setScaleU] = useState<number>(1);
  const [hiddenFieldKeys, setHiddenFieldKeys] = useState<string[]>([]);
  const contentRef = useRef<HTMLDivElement>(null);

  // Helper to test if a value is non-empty
  const hasValue = (val: unknown): boolean => {
    if (val === undefined || val === null) return false;
    if (typeof val === "string") return val.trim().length > 0;
    if (typeof val === "number") return true;
    return false;
  };

  // Field row component (2-column layout with 92px label)
  const Row = ({
    fieldKey,
    label,
    value,
    className = "",
  }: {
    fieldKey?: string;
    label: string;
    value?: string | number;
    className?: string;
  }) => {
    if (!hasValue(value)) return null;
    if (fieldKey && hiddenFieldKeys.includes(fieldKey)) return null;

    return (
      <div
        data-field-key={fieldKey}
        className={`flex items-start leading-[1.3] py-[calc(var(--u)*1px)] text-[calc(var(--u)*10.5px)] ${className}`}
      >
        <span
          style={{ width: "calc(var(--u) * 92px)" }}
          className="shrink-0 font-semibold text-[#66161D] flex items-center justify-between"
        >
          <span className="truncate">{label}</span>
          <span className="px-1 text-[#A07028] font-normal">:</span>
        </span>
        <span className="flex-1 pl-1 font-medium text-[#2E2620] break-words">
          {value}
        </span>
      </div>
    );
  };

  // Pure CSS Ribbon with double clip-path for 1px gold border and right pointed arrow
  const RibbonHeader = ({
    title,
    gradient,
    iconSrc,
  }: {
    title: string;
    gradient: string;
    iconSrc: string;
  }) => {
    return (
      <div
        className="relative z-10 flex items-center"
        style={{ height: "calc(var(--u) * 28px)" }}
      >
        {/* Native Square Icon Badge Overlapping on Left */}
        <div
          className="relative z-20 -ml-0.5 flex shrink-0 items-center justify-center"
          style={{
            width: "calc(var(--u) * 32px)",
            height: "calc(var(--u) * 32px)",
          }}
        >
          <img
            src={iconSrc}
            alt=""
            aria-hidden="true"
            className="pointer-events-none h-full w-full select-none object-contain"
          />
        </div>

        {/* Arrow Ribbon Bar with 1px Gold Border via Double Clip-Path */}
        <div
          className="relative z-10 -ml-1 flex items-center pl-3 pr-6 select-none"
          style={{
            height: "calc(var(--u) * 24px)",
            filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.18))",
          }}
        >
          {/* Outer Layer: Gold Border */}
          <div
            className="absolute inset-0 bg-[#C5A059]"
            style={{
              clipPath:
                "polygon(0 0, calc(100% - 9px) 0%, 100% 50%, calc(100% - 9px) 100%, 0 100%)",
            }}
          />
          {/* Inner Layer: Gradient Fill (inset 1px) */}
          <div
            className="absolute inset-[1px] right-[1.5px]"
            style={{
              background: gradient,
              clipPath:
                "polygon(0 0, calc(100% - 9px) 0%, 100% 50%, calc(100% - 9px) 100%, 0 100%)",
            }}
          />
          {/* Ribbon Title */}
          <span
            className="relative z-10 font-serifDevanagari font-bold tracking-wide text-white drop-shadow-xs whitespace-nowrap pr-1"
            style={{ fontSize: "calc(var(--u) * 11px)" }}
          >
            {title}
          </span>
        </div>
      </div>
    );
  };

  // Section Box with cream background, 1px gold border, and subtle watermark
  const Section = ({
    title,
    gradient,
    iconSrc,
    children,
    className = "",
  }: {
    title: string;
    gradient: string;
    iconSrc: string;
    children: React.ReactNode;
    className?: string;
  }) => (
    <div className={`relative ${className}`}>
      <RibbonHeader title={title} gradient={gradient} iconSrc={iconSrc} />

      <div
        className="relative overflow-hidden rounded-[7px] border border-[#C5A059]/50 bg-[#FFFDF9]/95 shadow-xs"
        style={{
          marginTop: "calc(var(--u) * -5px)",
          paddingTop: "calc(var(--u) * 6px)",
          paddingBottom: "calc(var(--u) * 6px)",
          paddingLeft: "calc(var(--u) * 10px)",
          paddingRight: "calc(var(--u) * 10px)",
        }}
      >
        <img
          src="/templates/peacock-royal/section-watermark.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute right-2 bottom-1 select-none opacity-15"
          style={{ width: "calc(var(--u) * 56px)", height: "auto" }}
        />
        <div className="relative z-10">{children}</div>
      </div>
    </div>
  );

  // Count filled rows to determine if data is sparse
  const filledCount = [
    personal.fullName,
    personal.dob,
    personal.birthTime,
    personal.birthPlace,
    personal.height,
    personal.weight,
    personal.bloodGroup,
    personal.religion || personal.caste,
    personal.gotra,
    personal.maritalStatus,
    education.highestEducation,
    education.college,
    education.occupation,
    education.designation,
    education.companyName,
    education.annualIncome,
    family.fatherName,
    family.fatherOccupation,
    family.motherName,
    family.brotherCount,
    family.sisterCount,
    family.nativePlace,
    contact.contactPerson,
    contact.phone1,
    contact.residentialAddress,
  ].filter(hasValue).length;

  const isSparse = filledCount < 16;

  // STEP 4: Auto-Fit Algorithm
  useIsomorphicLayoutEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    const runAutoFit = () => {
      const lowPriorityList = [
        "skills",
        "languagesKnown",
        "hobbies",
        "interests",
        "otherInformation",
        "relativeSurnames",
      ];

      // 1. Reset all low-priority fields to visible
      lowPriorityList.forEach((key) => {
        const domNode = el.querySelector(
          `[data-field-key="${key}"]`,
        ) as HTMLElement | null;
        if (domNode) domNode.style.display = "";
      });

      // 2. Start at --u = 1.0
      let u = 1.0;
      el.style.setProperty("--u", "1");

      // 3. Loop reducing --u by 0.02 down to 0.72 while overflowing SAFE_HEIGHT
      let iterations = 0;
      while (el.scrollHeight > SAFE_HEIGHT + 1 && u > 0.72 && iterations < 20) {
        u = Math.max(0.72, +(u - 0.02).toFixed(3));
        el.style.setProperty("--u", u.toString());
        iterations++;
      }

      // 4. If it still overflows at --u = 0.72, hide low priority rows in order
      const newlyHidden: string[] = [];
      if (el.scrollHeight > SAFE_HEIGHT + 1) {
        for (const key of lowPriorityList) {
          if (el.scrollHeight <= SAFE_HEIGHT + 1) break;
          const domNode = el.querySelector(
            `[data-field-key="${key}"]`,
          ) as HTMLElement | null;
          if (domNode && domNode.style.display !== "none") {
            domNode.style.display = "none";
            newlyHidden.push(key);
            if (process.env.NODE_ENV !== "production") {
              console.warn(
                `[ClassicIvory AutoFit] Hid row '${key}' to prevent page overflow.`,
              );
            }
          }
        }
      }

      // 5. Synchronize state without unnecessary renders
      setScaleU((prev) => (Math.abs(prev - u) > 0.001 ? u : prev));
      setHiddenFieldKeys((prev) => {
        if (
          prev.length === newlyHidden.length &&
          prev.every((k, i) => k === newlyHidden[i])
        ) {
          return prev;
        }
        return newlyHidden;
      });
    };

    if (
      typeof document !== "undefined" &&
      document.fonts &&
      document.fonts.ready
    ) {
      document.fonts.ready.then(runAutoFit);
    } else {
      runAutoFit();
    }
  }, [data]);

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
      {/* 1. Full-page A4 Frame Border with Transparent Center (on top with pointer-events-none) */}
      <img
        src="/templates/peacock-royal/page-frame.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-20 h-full w-full select-none"
      />

      {/* 2. ONE Absolutely Positioned Content Wrapper at the Measured SAFE RECT */}
      <div
        ref={contentRef}
        style={
          {
            position: "absolute",
            top: `${SAFE_TOP}px`,
            left: `${SAFE_LEFT}px`,
            width: `${SAFE_WIDTH}px`,
            height: `${SAFE_HEIGHT}px`,
            "--u": scaleU.toString(),
          } as React.CSSProperties
        }
        className="z-10 flex flex-col justify-between overflow-hidden"
      >
        {/* TOP HEADER: Deity Line + 3-Column Profile Row (max ~150px total) */}
        <div>
          {/* Deity Line: at the very top of SAFE RECT (strictly below top lotus ornament at y=64px) */}
          <div className="text-center">
            <p
              className="font-serifDevanagari font-bold tracking-[0.2em] text-[#66161D]"
              style={{ fontSize: "calc(var(--u) * 12px)" }}
            >
              {profile?.deityName || "॥ श्री गणेशाय नमः ॥"}
            </p>
          </div>

          {/* 3-Column Header Row */}
          <div
            className="flex items-center justify-between gap-2 border-b border-[#BFA26A]/35"
            style={{
              marginTop: "calc(var(--u) * 1px)",
              paddingBottom: "calc(var(--u) * 5px)",
            }}
          >
            {/* Left: Ganesh icon 80px wide with 4-line Sanskrit shloka (9px text) */}
            <div
              className="shrink-0 text-center flex flex-col items-center"
              style={{ width: "calc(var(--u) * 88px)" }}
            >
              <img
                src="/templates/peacock-royal/ganesh-icon.png"
                alt=""
                aria-hidden="true"
                className="pointer-events-none select-none object-contain"
                style={{
                  width: "calc(var(--u) * 80px)",
                  height: "auto",
                  maxHeight: "calc(var(--u) * 74px)",
                }}
              />
              <div
                className="font-serifDevanagari font-semibold leading-[1.3] text-[#66161D]"
                style={{
                  fontSize: "calc(var(--u) * 9px)",
                  marginTop: "calc(var(--u) * 1.5px)",
                }}
              >
                <p>वक्रतुंड महाकाय</p>
                <p>सूर्यकोटि समप्रभ ।</p>
                <p>निर्विघ्नं कुरु मे देव</p>
                <p>सर्वकार्येषु सर्वदा ॥</p>
              </div>
            </div>

            {/* Center: Candidate Name (30px), Profession, BIODATA */}
            <div className="min-w-0 flex-1 text-center px-1">
              <h1
                className="font-serifDevanagari font-bold leading-tight tracking-wide text-[#0D4B55]"
                style={{ fontSize: "calc(var(--u) * 30px)" }}
              >
                {candidateName}
              </h1>

              <p
                className="font-bold uppercase text-[#A07028]"
                style={{
                  fontSize: "calc(var(--u) * 11px)",
                  letterSpacing: "0.22em",
                  marginTop: "calc(var(--u) * 2px)",
                }}
              >
                {candidateProfession}
              </p>

              <div
                className="flex items-center justify-center gap-2"
                style={{ marginTop: "calc(var(--u) * 3px)" }}
              >
                <span
                  className="h-px bg-gradient-to-r from-transparent to-[#B87A2B]"
                  style={{ width: "calc(var(--u) * 28px)" }}
                />
                <span
                  className="font-bold text-[#66161D]"
                  style={{
                    fontSize: "calc(var(--u) * 10px)",
                    letterSpacing: "0.25em",
                  }}
                >
                  {profile?.biodataTitle || "BIODATA"}
                </span>
                <span
                  className="h-px bg-gradient-to-l from-transparent to-[#B87A2B]"
                  style={{ width: "calc(var(--u) * 28px)" }}
                />
              </div>

              {/* Divider ornament */}
              <div
                className="flex justify-center"
                style={{ marginTop: "calc(var(--u) * 2px)" }}
              >
                <img
                  src="/templates/peacock-royal/divider-ornament.png"
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none select-none opacity-85"
                  style={{
                    height: "calc(var(--u) * 9px)",
                    width: "auto",
                    maxWidth: "calc(var(--u) * 175px)",
                  }}
                />
              </div>
            </div>

            {/* Right: Photo Frame 92x118 & Tagline */}
            {design?.showPhoto !== false ? (
              <div
                className="shrink-0 flex flex-col items-center"
                style={{ width: "calc(var(--u) * 96px)" }}
              >
                <div
                  className="relative rounded-[6px] border-[2px] border-[#C5A059] bg-white shadow-[0_3px_10px_rgba(102,22,29,0.18)]"
                  style={{ padding: "calc(var(--u) * 2.5px)" }}
                >
                  <div
                    className="overflow-hidden rounded-[3px] bg-[#F4EFE6]"
                    style={{
                      width: "calc(var(--u) * 92px)",
                      height: "calc(var(--u) * 118px)",
                    }}
                  >
                    {profile?.photoUrl && !imgError ? (
                      <img
                        src={profile.photoUrl}
                        alt="Candidate"
                        onError={() => setImgError(true)}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full w-full flex-col items-center justify-center text-[#66161D]/60">
                        <span className="text-xl">👤</span>
                        <span
                          className="font-semibold text-[#66161D]"
                          style={{
                            fontSize: "calc(var(--u) * 9px)",
                            marginTop: "calc(var(--u) * 2px)",
                          }}
                        >
                          {isMarathi ? "फोटो" : "Photo"}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                <div
                  className="text-center font-serif italic text-[#8C6226]"
                  style={{
                    fontSize: "calc(var(--u) * 9.5px)",
                    lineHeight: "1.2",
                    marginTop: "calc(var(--u) * 2px)",
                  }}
                >
                  <p>&ldquo;Good Vibes</p>
                  <p>Better Future&rdquo;</p>
                </div>
              </div>
            ) : (
              <div
                className="shrink-0"
                style={{ width: "calc(var(--u) * 96px)" }}
              />
            )}
          </div>
        </div>

        {/* SECTIONS CONTAINER: 2-column grid inside every section, with 5px gap */}
        <div
          className={`flex flex-col ${
            isSparse ? "justify-around flex-1 py-1" : ""
          }`}
          style={!isSparse ? { gap: "calc(var(--u) * 5px)" } : undefined}
        >
          {/* 1. Personal Details (Maroon Ribbon #7A1622) */}
          <Section
            title={
              isMarathi
                ? "व्यक्तिगत जानकारी  |  Personal Details"
                : "Personal Details"
            }
            gradient="linear-gradient(90deg, #60101B 0%, #7A1622 50%, #8E1B29 100%)"
            iconSrc="/templates/peacock-royal/icon-personal.png"
          >
            <div className="grid grid-cols-2 gap-x-3">
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

          {/* 2. Horoscope & Astrology (Teal Ribbon #0F5C55) */}
          {design?.showAstrology && (
            <Section
              title={
                isMarathi
                  ? "ज्योतिष माहिती  |  Horoscope & Astrology"
                  : "Horoscope & Astrology"
              }
              gradient="linear-gradient(90deg, #093D38 0%, #0F5C55 50%, #15736B 100%)"
              iconSrc="/templates/peacock-royal/icon-astrology.png"
            >
              <div className="grid grid-cols-2 gap-x-3">
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

          {/* 3. Education & Career (Blue Ribbon #143F8C) */}
          <Section
            title={
              isMarathi
                ? "शिक्षण व नोकरी  |  Education & Career"
                : "Education & Career"
            }
            gradient="linear-gradient(90deg, #0D2C63 0%, #143F8C 50%, #1D54B8 100%)"
            iconSrc="/templates/peacock-royal/icon-education.png"
          >
            <div className="grid grid-cols-2 gap-x-3">
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
                fieldKey="languagesKnown"
                label={isMarathi ? "अवगत भाषा" : "Languages Known"}
                value={education.languagesKnown}
              />
              <Row
                fieldKey="skills"
                className="col-span-2"
                label={isMarathi ? "कौशल्ये" : "Skills"}
                value={education.skills}
              />
            </div>
          </Section>

          {/* 4. Expectations (Purple Ribbon #5A1F73) */}
          {design?.showExpectations && (
            <Section
              title={isMarathi ? "अपेक्षा  |  Expectations" : "Expectations"}
              gradient="linear-gradient(90deg, #3D134E 0%, #5A1F73 50%, #752796 100%)"
              iconSrc="/templates/peacock-royal/icon-expectations.png"
            >
              <div className="grid grid-cols-2 gap-x-3">
                <Row
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
                  label={
                    isMarathi
                      ? "अपेक्षित वैवाहिक स्थिती"
                      : "Marital Status Expected"
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
                  fieldKey="hobbies"
                  label={isMarathi ? "छंद" : "Hobbies"}
                  value={expectations.hobbies}
                />
                <Row
                  fieldKey="interests"
                  label={isMarathi ? "आवड" : "Interests"}
                  value={expectations.interests}
                />
                <Row
                  className="col-span-2"
                  label={isMarathi ? "इतर अपेक्षा" : "Partner Expectations"}
                  value={expectations.partnerExpectations}
                />
                <Row
                  fieldKey="otherInformation"
                  className="col-span-2"
                  label={isMarathi ? "इतर माहिती" : "Other Info"}
                  value={expectations.otherInformation}
                />
              </div>
            </Section>
          )}

          {/* 5. Family Details (Orange-Brown Ribbon #A64A12) */}
          {/* Extra left margin (ml-2) so it stays clear of the peacock crest/body */}
          <Section
            title={
              isMarathi
                ? "कौटुंबिक माहिती  |  Family Details"
                : "Family Details"
            }
            gradient="linear-gradient(90deg, #7A330A 0%, #A64A12 50%, #C45716 100%)"
            iconSrc="/templates/peacock-royal/icon-family.png"
            className="ml-[calc(var(--u)*8px)]"
          >
            <div className="grid grid-cols-2 gap-x-3">
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
                fieldKey="relativeSurnames"
                className="col-span-2"
                label={isMarathi ? "नातेसंबंधांची आडनावे" : "Relative Surnames"}
                value={family.relativeSurnames}
              />
            </div>
          </Section>

          {/* 6. Contact Details (Red Ribbon #8F1A24) */}
          {/* Extra left margin (ml-3) and right margin (mr-3) to steer clear of peacock & lotus */}
          <Section
            title={
              isMarathi
                ? "संपर्क माहिती  |  Contact Details"
                : "Contact Details"
            }
            gradient="linear-gradient(90deg, #6B1119 0%, #8F1A24 50%, #AB1E2C 100%)"
            iconSrc="/templates/peacock-royal/icon-contact.png"
            className="ml-[calc(var(--u)*12px)] mr-[calc(var(--u)*12px)]"
          >
            <div className="grid grid-cols-2 gap-x-3">
              <Row
                label={isMarathi ? "संपर्क व्यक्ती" : "Contact Person"}
                value={contact.contactPerson}
              />
              <Row
                label={isMarathi ? "मोबाईल 1" : "Mobile 1"}
                value={contact.phone1}
              />
              <Row
                label={isMarathi ? "मोबाईल 2" : "Mobile 2"}
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

        {/* FOOTER: Auspicious Blessing Shloka at the bottom of SAFE RECT (above bottom ornament) */}
        <div className="mt-auto text-center pt-1 pb-0.5">
          <p
            className="font-serifDevanagari font-bold text-[#66161D]"
            style={{
              fontSize: "calc(var(--u) * 11px)",
              letterSpacing: "0.16em",
            }}
          >
            || सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः ||
          </p>
        </div>
      </div>
    </div>
  );
};
