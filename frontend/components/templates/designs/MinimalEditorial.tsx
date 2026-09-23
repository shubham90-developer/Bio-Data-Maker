import React from "react";
import { BiodataData } from "@/types/biodata";
import { TemplatePhoto } from "../TemplateHelpers";

export const MinimalEditorialTemplate: React.FC<{ data: BiodataData }> = ({
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

  const colors = {
    ivory: "#F8F1E5",
    ivoryLight: "#FCF8F0",
    gold: "#B38A4A",
    goldLight: "#D8C09A",
    maroon: "#6B171A",
    maroonDark: "#4E1013",
    text: "#25211E",
    muted: "#6D6259",
  };

  const isEmpty = (value?: string | number | null) =>
    value === undefined ||
    value === null ||
    value === "" ||
    value === 0 ||
    value === "0" ||
    value === "०";

  const calculateAge = (dob?: string): string | undefined => {
    if (!dob) return undefined;
    const parsed = new Date(dob);

    if (Number.isNaN(parsed.getTime())) {
      const match = dob.match(/(\d{4})/);
      if (!match) return undefined;
      const birthYear = Number(match[1]);
      const currentYear = new Date().getFullYear();
      if (birthYear < 1900 || birthYear > currentYear) return undefined;
      return String(currentYear - birthYear);
    }

    const today = new Date();
    let age = today.getFullYear() - parsed.getFullYear();
    const monthDifference = today.getMonth() - parsed.getMonth();

    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < parsed.getDate())
    ) {
      age -= 1;
    }

    return age > 0 ? String(age) : undefined;
  };

  const dynamicAge =
    "age" in personal &&
    (typeof personal.age === "string" || typeof personal.age === "number")
      ? personal.age
      : calculateAge(personal.dob);

  const Row = ({
    label,
    value,
    className = "",
  }: {
    label: string;
    value?: string | number | null;
    className?: string;
  }) => {
    if (isEmpty(value)) return null;

    return (
      <div
        className={`flex items-start gap-2 py-[2px] text-[9px] leading-[1.5] sm:text-[10px] md:text-[10.5px] ${className}`}
      >
        <span className="flex w-[43%] min-w-0 shrink-0 items-center font-serif text-[#5F5147]">
          <span className="truncate">{label}</span>
          <span className="ml-auto px-1 text-[#B38A4A]">:</span>
        </span>
        <span className="min-w-0 flex-1 break-words font-sans font-medium text-[#25211E]">
          {value}
        </span>
      </div>
    );
  };

  /**
   * Section icons use real PNG assets sized down inside a maroon circle
   * (matching the original design), so text labels never overlap them.
   * "star" has no dedicated PNG asset, so it keeps an inline SVG fallback.
   */
  const SectionIcon = ({
    type,
  }: {
    type:
      | "person"
      | "family"
      | "phone"
      | "star"
      | "education"
      | "target"
      | "envelope";
  }) => {
    const iconMap: Record<string, string> = {
      person: "/templates/minimal-editorial/icon-person.png",
      family: "/templates/minimal-editorial/icon-family.png",
      phone: "/templates/minimal-editorial/icon-phone.png",
      education: "/templates/minimal-editorial/icon-education.png",
      target: "/templates/minimal-editorial/icon-expectations.png",
      envelope: "/templates/minimal-editorial/icon-envelope.png",
    };

    if (type === "star") {
      return (
        <svg
          width={13}
          height={13}
          viewBox="0 0 24 24"
          fill="none"
          stroke="#FFF9F1"
          strokeWidth={1.7}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2L3 9.6l6.2-.9L12 3Z" />
        </svg>
      );
    }

    return (
      <img
        src={iconMap[type]}
        alt=""
        aria-hidden="true"
        className="h-[13px] w-[13px] select-none object-contain"
      />
    );
  };

  const Section = ({
    title,
    marathiTitle,
    icon,
    children,
    className = "",
  }: {
    title: string;
    marathiTitle: string;
    icon:
      | "person"
      | "family"
      | "phone"
      | "star"
      | "education"
      | "target"
      | "envelope";
    children: React.ReactNode;
    className?: string;
  }) => (
    <section className={className}>
      <div className="mb-2 flex items-center gap-2">
        <span
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full shadow-sm sm:h-9 sm:w-9"
          style={{ backgroundColor: colors.maroon }}
        >
          <SectionIcon type={icon} />
        </span>

        <div className="min-w-0 flex-1">
          <h3
            className="font-serif text-[12px] font-bold uppercase tracking-[0.15em] sm:text-[13px] md:text-[14px]"
            style={{ color: colors.maroon }}
          >
            {isMarathi ? marathiTitle : title}
          </h3>
          <div
            className="mt-1 h-px w-full"
            style={{ backgroundColor: colors.goldLight }}
          />
        </div>
      </div>

      <div className="px-1 sm:px-2">{children}</div>
    </section>
  );

  const StatIcon = ({ type }: { type: "age" | "height" | "religion" }) => {
    const iconMap: Record<string, string> = {
      age: "/templates/minimal-editorial/icon-calendar.png",
      height: "/templates/minimal-editorial/icon-height.png",
      religion: "/templates/minimal-editorial/icon-religion.png",
    };

    return (
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#EFE1C9]">
        <img
          src={iconMap[type]}
          alt=""
          aria-hidden="true"
          className="h-4 w-4 select-none object-contain"
        />
      </span>
    );
  };

  return (
    <div className="mx-auto w-full max-w-[794px]">
      <div
        className="relative mx-auto aspect-[794/1123] w-full overflow-hidden bg-[#F8F1E5] px-[5.2%] py-[4.2%] text-[#25211E] shadow-2xl print:aspect-auto print:h-[1123px] print:w-[794px] print:px-[41px] print:py-[47px] print:shadow-none"
        style={{
          WebkitPrintColorAdjust: "exact",
          printColorAdjust: "exact",
        }}
      >
        {/* Outer frame — kept as CSS border, avoids stretching an unknown-shaped asset */}
        <div
          className="pointer-events-none absolute inset-[1.8%] border"
          style={{ borderColor: `${colors.gold}B0` }}
        />

        {/* Corner leaves */}
        <img
          src="/templates/minimal-editorial/corner-leaf-top-left.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute left-[1.7%] top-[1.6%] z-0 w-[15%] select-none"
        />
        <img
          src="/templates/minimal-editorial/corner-leaf-top-right.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute bottom-[1.6%] right-[1.7%] z-0 w-[15%] -scale-y-100 select-none"
        />
        <img
          src="/templates/minimal-editorial/mountain-illustration.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute bottom-[1.7%] left-[2.1%] z-0 w-[39%] opacity-75 select-none"
        />
        <img
          src="/templates/minimal-editorial/hanging-bell.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute bottom-[3.8%] right-[3.2%] z-0 w-[7%] opacity-80 select-none"
        />

        <div className="relative z-10 flex h-full flex-col">
          <header className="grid grid-cols-[27%_73%] items-start gap-5">
            {design.showPhoto ? (
              <div className="flex justify-center">
                {/* Photo frame — kept as CSS border, avoids stretching an unknown-shaped asset */}
                <div
                  className="rounded-[10%] border-[2px] p-[3px] shadow-[0_4px_16px_rgba(107,23,26,0.10)]"
                  style={{ borderColor: colors.gold }}
                >
                  <div className="rounded-[7%] bg-[#FCF8F0] p-[3px]">
                    <TemplatePhoto
                      url={profile.photoUrl}
                      shape="rounded"
                      borderColor={colors.gold}
                      className="!h-[112px] !w-[90px] sm:!h-[135px] sm:!w-[108px] md:!h-[154px] md:!w-[123px]"
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div />
            )}

            <div>
              <p
                className="font-sans text-[7px] font-medium uppercase tracking-[0.34em] sm:text-[8px] md:text-[9px]"
                style={{ color: colors.gold }}
              >
                {isMarathi ? "एक संक्षिप्त परिचय" : "A BRIEF INTRODUCTION"}
              </p>

              <h1
                className="mt-1 font-serif text-[28px] font-medium leading-none sm:text-[35px] md:text-[43px]"
                style={{ color: colors.maroon }}
              >
                {personal.fullName || (isMarathi ? "तुमचे नाव" : "Your Name")}
              </h1>

              <p
                className="mt-2 font-sans text-[8px] uppercase tracking-[0.27em] sm:text-[9px] md:text-[10px]"
                style={{ color: colors.text }}
              >
                {education.occupation ||
                  (isMarathi ? "व्यवसाय" : "PROFESSIONAL")}
              </p>

              <p
                className="mt-2 font-serif text-[9px] italic sm:text-[10px] md:text-[11px]"
                style={{ color: colors.muted }}
              >
                {isMarathi
                  ? "स्वप्नांना अर्थ देत, आयुष्यभराच्या साथीच्या शोधात"
                  : "Building a meaningful life, looking for a lifelong companion"}
              </p>

              <div
                className="mt-4 grid grid-cols-3 border-y py-2.5"
                style={{ borderColor: `${colors.gold}70` }}
              >
                {[
                  {
                    type: "age" as const,
                    label: isMarathi ? "वय" : "AGE",
                    value: dynamicAge,
                  },
                  {
                    type: "height" as const,
                    label: isMarathi ? "उंची" : "HEIGHT",
                    value: personal.height,
                  },
                  {
                    type: "religion" as const,
                    label: isMarathi ? "धर्म" : "RELIGION",
                    value: personal.religion,
                  },
                ].map((item, index) => (
                  <div
                    key={item.label}
                    className={`flex items-center gap-2 px-2 ${
                      index !== 0 ? "border-l" : ""
                    }`}
                    style={{
                      borderColor: `${colors.gold}60`,
                    }}
                  >
                    <StatIcon type={item.type} />
                    <div className="min-w-0">
                      <p
                        className="font-sans text-[6px] font-medium tracking-[0.17em] sm:text-[7px]"
                        style={{ color: colors.gold }}
                      >
                        {item.label}
                      </p>
                      <p className="truncate font-serif text-[9px] font-semibold text-[#302A25] sm:text-[10px]">
                        {isEmpty(item.value) ? "—" : item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </header>

          <div
            className="my-5 h-px w-full"
            style={{ backgroundColor: `${colors.gold}65` }}
          />

          <div className="grid flex-1 grid-cols-2 gap-x-6">
            <div className="space-y-6 pr-3">
              <Section
                title="Personal Details"
                marathiTitle="वैयक्तिक माहिती"
                icon="person"
              >
                <Row
                  label={isMarathi ? "पूर्ण नाव" : "Full Name"}
                  value={personal.fullName}
                />
                <Row
                  label={isMarathi ? "जन्मतारीख" : "Date of Birth"}
                  value={personal.dob}
                />
                <Row label={isMarathi ? "वय" : "Age"} value={dynamicAge} />
                <Row
                  label={isMarathi ? "जन्मस्थळ" : "Birth Place"}
                  value={personal.birthPlace}
                />
                <Row
                  label={isMarathi ? "वैवाहिक स्थिती" : "Marital Status"}
                  value={personal.maritalStatus}
                />
                <Row
                  label={isMarathi ? "जात" : "Caste"}
                  value={personal.caste}
                />
                <Row
                  label={isMarathi ? "गोत्र" : "Gotra"}
                  value={personal.gotra}
                />
              </Section>

              <Section
                title="Family Details"
                marathiTitle="कौटुंबिक माहिती"
                icon="family"
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
              </Section>

              <Section
                title="Contact Details"
                marathiTitle="संपर्क माहिती"
                icon="phone"
              >
                <Row
                  label={isMarathi ? "संपर्क व्यक्ती" : "Contact Person"}
                  value={contact.contactPerson}
                />
                <Row
                  label={isMarathi ? "मोबाईल" : "Mobile"}
                  value={contact.phone1}
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

            <div
              className="space-y-6 border-l pl-5"
              style={{ borderColor: `${colors.gold}70` }}
            >
              {design.showAstrology && (
                <Section
                  title="Horoscope & Astrology"
                  marathiTitle="कुंडली व ज्योतिष"
                  icon="star"
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
                    label={isMarathi ? "मंगळ" : "Manglik"}
                    value={personal.manglik}
                  />
                  <Row label={isMarathi ? "गण" : "Gan"} value={personal.gan} />
                  <Row
                    label={isMarathi ? "नाडी" : "Nadi"}
                    value={personal.nadi}
                  />
                  <Row
                    label={isMarathi ? "चरण" : "Charan"}
                    value={personal.charan}
                  />
                </Section>
              )}

              <Section
                title="Education & Career"
                marathiTitle="शिक्षण व करिअर"
                icon="education"
              >
                <Row
                  label={isMarathi ? "उच्च शिक्षण" : "Highest Qualification"}
                  value={education.highestEducation}
                />
                <Row
                  label={isMarathi ? "महाविद्यालय" : "College / University"}
                  value={education.college}
                />
                <Row
                  label={isMarathi ? "व्यवसाय" : "Current Occupation"}
                  value={education.occupation}
                />
                <Row
                  label={isMarathi ? "वार्षिक उत्पन्न" : "Annual Income"}
                  value={education.annualIncome}
                />
              </Section>

              {design.showExpectations && (
                <Section
                  title="Expectations"
                  marathiTitle="अपेक्षा"
                  icon="target"
                >
                  <Row
                    label={isMarathi ? "अपेक्षित जोडीदार" : "Looking For"}
                    value={expectations.partnerExpectations}
                  />
                  <Row
                    label={isMarathi ? "शिक्षण" : "Preferred Education"}
                    value={expectations.preferredEducation}
                  />
                  <Row
                    label={isMarathi ? "व्यवसाय" : "Preferred Occupation"}
                    value={expectations.preferredOccupation}
                  />
                  <Row
                    label={isMarathi ? "प्राधान्य ठिकाण" : "Preferred Location"}
                    value={expectations.preferredLocation}
                  />
                </Section>
              )}

              <Section
                title="Additional Note"
                marathiTitle="अतिरिक्त माहिती"
                icon="envelope"
              >
                <p className="px-1 font-serif text-[9px] leading-[1.65] text-[#4C433C] sm:text-[10px]">
                  {expectations.otherInformation ||
                    (isMarathi
                      ? "छंद, आवडी किंवा स्वतःबद्दल थोडक्यात माहिती येथे लिहा."
                      : "Add a short note about hobbies, interests or a personal message.")}
                </p>
              </Section>
            </div>
          </div>

          <div className="relative mt-3 min-h-[12%]">
            <div className="absolute bottom-0 left-[2%] w-[40%]">
              <img
                src="/templates/minimal-editorial/good-things-take-time.png"
                alt={
                  isMarathi
                    ? "चांगल्या गोष्टींना वेळ लागतो"
                    : "Good Things Take Time"
                }
                className="ml-[32%] h-auto w-[70%] select-none object-contain"
              />
            </div>

            <div className="absolute bottom-0 right-[7%] flex items-end gap-2">
              <span
                className="mb-1 h-px w-10"
                style={{ backgroundColor: `${colors.gold}70` }}
              />
              <span
                className="font-serif text-[12px]"
                style={{ color: colors.gold }}
              >
                ✦
              </span>
              <span
                className="mb-1 h-px w-10"
                style={{ backgroundColor: `${colors.gold}70` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
