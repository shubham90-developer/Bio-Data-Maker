import React from "react";
import { BiodataData } from "@/types/biodata";
import { TemplatePhoto } from "../TemplateHelpers";

export const LotusEleganceTemplate: React.FC<{ data: BiodataData }> = ({
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
    ivory: "#FDF8F0",
    blush: "#F2CFE0",
    blushDark: "#EAB8C7",
    gold: "#B8874A",
    brown: "#7A4B2E",
    text: "#3B2A22",
    muted: "#765D4D",
  };

  const isEmpty = (value?: string | number | null) =>
    value === undefined ||
    value === null ||
    value === "" ||
    value === "0" ||
    value === "०";

  const formatList = (value?: string | number | null): string[] => {
    if (isEmpty(value)) return [];

    return String(value)
      .split(/[,;\n•]+/)
      .map((item) => item.trim())
      .filter(Boolean);
  };

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

  const location =
    family.familyLocation || contact.residentialAddress || family.nativePlace;

  const aboutMe =
    expectations.otherInformation ||
    [education.highestEducation, education.occupation, family.familyLocation]
      .filter(Boolean)
      .join(" • ") ||
    (isMarathi
      ? "साधा, समजूतदार आणि कुटुंबाला महत्त्व देणारा/देणारी व्यक्ती."
      : "A simple, sincere and family-oriented person who values relationships, respect and mutual understanding.");

  const interests = [
    ...formatList(expectations.hobbies),
    ...formatList(expectations.interests),
  ];

  const expectationItems = [
    ...formatList(expectations.partnerExpectations),
    ...formatList(expectations.preferredEducation),
    ...formatList(expectations.preferredOccupation),
    ...formatList(expectations.preferredLocation),
  ];

  /**
   * Field row.
   * Uses a FIXED-percentage flex label (not a per-container grid %),
   * so the colon lands in the same visual column everywhere on the
   * page — inside the 2-col top block AND inside each Section's
   * narrower column. The label never wraps (truncate) so a long
   * label can't push the colon/value down onto a second line and
   * throw off vertical alignment with the row above/below it.
   */
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
        className={`flex items-start gap-1 py-0.5 text-[10px] leading-[1.45] sm:text-[11px] md:text-[11.5px] ${className}`}
      >
        <span className="flex w-[42%] min-w-[86px] max-w-[168px] shrink-0 items-center gap-1 font-serif font-medium text-[#76533F]">
          <span className="truncate">{label}</span>
          <span className="ml-auto font-serif text-[#B8874A]">:</span>
        </span>

        <span className="min-w-0 flex-1 break-words font-medium text-[#3B2A22]">
          {value}
        </span>
      </div>
    );
  };

  const LotusGlyph = ({ className = "" }: { className?: string }) => (
    <svg
      viewBox="0 0 48 32"
      aria-hidden="true"
      className={className}
      fill="none"
    >
      <path
        d="M24 29C18 23 17 15 24 5C31 15 30 23 24 29Z"
        stroke={colors.gold}
        strokeWidth="1.5"
      />
      <path
        d="M24 29C14 26 9 19 10 12C17 13 22 19 24 29Z"
        stroke={colors.gold}
        strokeWidth="1.5"
      />
      <path
        d="M24 29C34 26 39 19 38 12C31 13 26 19 24 29Z"
        stroke={colors.gold}
        strokeWidth="1.5"
      />
      <path
        d="M24 29C20 21 20 13 24 5"
        stroke={colors.gold}
        strokeWidth="1.5"
      />
      <path
        d="M24 29C28 21 28 13 24 5"
        stroke={colors.gold}
        strokeWidth="1.5"
      />
      <path d="M6 29H42" stroke={colors.gold} strokeWidth="1" opacity="0.55" />
    </svg>
  );

  const SectionIcon = ({
    type,
  }: {
    type: "person" | "education" | "family" | "document" | "heart" | "target";
  }) => {
    const common = {
      width: 22,
      height: 22,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "#FFF9F1",
      strokeWidth: 1.7,
      strokeLinecap: "round" as const,
      strokeLinejoin: "round" as const,
    };

    if (type === "person") {
      return (
        <svg {...common} aria-hidden="true">
          <circle cx="12" cy="7.5" r="3" />
          <path d="M5.5 19c.7-3.2 3-5 6.5-5s5.8 1.8 6.5 5" />
        </svg>
      );
    }

    if (type === "education") {
      return (
        <svg {...common} aria-hidden="true">
          <path d="M3 8.5 12 4l9 4.5-9 4.5-9-4.5Z" />
          <path d="M7 11v4.2c2.9 2 7.1 2 10 0V11" />
          <path d="M21 9v5" />
        </svg>
      );
    }

    if (type === "family") {
      return (
        <svg {...common} aria-hidden="true">
          <circle cx="12" cy="7" r="2.5" />
          <circle cx="5.5" cy="10" r="2" />
          <circle cx="18.5" cy="10" r="2" />
          <path d="M7 19c.5-3.2 2.2-5 5-5s4.5 1.8 5 5" />
          <path d="M1.5 18c.3-2.2 1.7-3.5 4-3.5" />
          <path d="M22.5 18c-.3-2.2-1.7-3.5-4-3.5" />
        </svg>
      );
    }

    if (type === "document") {
      return (
        <svg {...common} aria-hidden="true">
          <path d="M7 3.5h7l3 3V20.5H7z" />
          <path d="M14 3.5v4h3" />
          <path d="M9.5 11h5" />
          <path d="M9.5 14h5" />
          <path d="M9.5 17h3.5" />
        </svg>
      );
    }

    if (type === "heart") {
      return (
        <svg {...common} aria-hidden="true">
          <path d="M20 8.8c0 5.1-8 9.7-8 9.7S4 13.9 4 8.8A4.1 4.1 0 0 1 12 7a4.1 4.1 0 0 1 8 1.8Z" />
        </svg>
      );
    }

    return (
      <svg {...common} aria-hidden="true">
        <circle cx="12" cy="12" r="7.5" />
        <circle cx="12" cy="12" r="3" />
        <path d="M12 4V2.5M12 21.5V20M4 12H2.5M21.5 12H20" />
      </svg>
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
    icon: "person" | "education" | "family" | "document" | "heart" | "target";
    children: React.ReactNode;
    className?: string;
  }) => (
    <section className={className}>
      <div className="mb-2 flex items-center gap-2">
        <span
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full shadow-sm sm:h-10 sm:w-10"
          style={{ backgroundColor: colors.brown }}
        >
          <SectionIcon type={icon} />
        </span>

        <div
          className="flex min-h-8 flex-1 items-center rounded-r-full rounded-l-md px-3 py-1.5 sm:min-h-9 sm:px-4"
          style={{ backgroundColor: colors.blush }}
        >
          <h3
            className="font-serif text-[15px] font-bold tracking-wide sm:text-base md:text-[17px]"
            style={{ color: colors.brown }}
          >
            {isMarathi ? marathiTitle : title}
          </h3>
        </div>
      </div>

      <div className="px-1 sm:px-2">{children}</div>
    </section>
  );

  const ListItems = ({ items }: { items: string[] }) => {
    if (!items.length) return null;

    return (
      <ul className="space-y-1.5 pt-0.5">
        {items.map((item, index) => (
          <li
            key={`${item}-${index}`}
            className="flex items-start gap-2 text-[10px] leading-[1.45] text-[#3B2A22] sm:text-[11px] md:text-[11.5px]"
          >
            <span className="mt-1 shrink-0">
              <svg
                width="13"
                height="10"
                viewBox="0 0 48 32"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M24 29C18 23 17 15 24 5C31 15 30 23 24 29Z"
                  stroke={colors.gold}
                  strokeWidth="4"
                />
                <path
                  d="M24 29C14 26 9 19 10 12C17 13 22 19 24 29Z"
                  stroke={colors.gold}
                  strokeWidth="4"
                />
                <path
                  d="M24 29C34 26 39 19 38 12C31 13 26 19 24 29Z"
                  stroke={colors.gold}
                  strokeWidth="4"
                />
              </svg>
            </span>

            <span className="min-w-0">{item}</span>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="mx-auto w-full max-w-[794px]">
      <div
        className="relative mx-auto aspect-[794/1123] w-full overflow-hidden bg-[#FDF8F0] px-[4.4%] py-[3.3%] text-[#3B2A22] shadow-2xl print:aspect-auto print:h-[1123px] print:w-[794px] print:px-11 print:py-10 print:shadow-none"
        style={{
          WebkitPrintColorAdjust: "exact",
          printColorAdjust: "exact",
        }}
      >
        {/* Light frame */}
        <div
          className="pointer-events-none absolute inset-3 border sm:inset-4"
          style={{ borderColor: `${colors.gold}99` }}
        />

        {/* Corner lotus artwork */}
        <img
          src="/templates/lotus-elegance/lotus-corner.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 z-0 w-[19%] max-w-[195px] select-none"
        />

        <img
          src="/templates/lotus-elegance/lotus-corner.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 right-0 z-0 w-[22%] max-w-[230px] rotate-180 select-none"
        />

        {/* Subtle watermark */}
        <img
          src="/templates/lotus-elegance/lotus-watermark.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute right-[3%] top-[21%] z-0 w-[16%] max-w-[155px] opacity-[0.055] select-none"
        />

        <div className="relative z-10 flex h-full flex-col">
          {/* Header */}
          <header className="pt-1 text-center">
            <h1
              className="font-serif leading-none tracking-tight"
              style={{ color: colors.brown }}
            >
              <span className="font-serif text-[30px] font-normal italic sm:text-[38px] md:text-[46px] lg:text-[52px]">
                My
              </span>{" "}
              <span className="text-[34px] font-bold sm:text-[42px] md:text-[50px] lg:text-[56px]">
                Biodata
              </span>
            </h1>

            <div className="mx-auto mt-2 flex max-w-[390px] items-center justify-center gap-2">
              <span
                className="h-px flex-1"
                style={{ backgroundColor: `${colors.gold}99` }}
              />

              <LotusGlyph className="h-5 w-7 shrink-0" />

              <span
                className="h-px flex-1"
                style={{ backgroundColor: `${colors.gold}99` }}
              />
            </div>

            <p
              className="mt-1 font-sans text-[8px] font-medium tracking-[0.24em] sm:text-[9px] md:text-[10px] lg:text-[11px]"
              style={{ color: colors.gold }}
            >
              {isMarathi ? "माझ्याबद्दल थोडक्यात" : "A LITTLE ABOUT ME"}
            </p>

            <p
              className="mt-2 font-serif text-[9px] italic sm:text-[11px] md:text-[12px] lg:text-[13px]"
              style={{ color: colors.muted }}
            >
              {isMarathi
                ? "साधे • प्रामाणिक • आयुष्यभराच्या साथीच्या शोधात"
                : "Simple • Sincere • Looking for a lifelong partner"}
            </p>
          </header>

          {/* Top profile information */}
          <div className="mt-5 grid grid-cols-[38%_62%] items-center gap-3 sm:mt-6 sm:gap-5 md:gap-7">
            {design.showPhoto ? (
              <div className="flex justify-center">
                <div
                  className="relative rounded-full p-[3px] shadow-[0_2px_12px_rgba(122,75,46,0.12)]"
                  style={{ backgroundColor: colors.gold }}
                >
                  <div className="rounded-full bg-[#FDF8F0] p-[3px]">
                    <TemplatePhoto
                      url={profile.photoUrl}
                      shape="circle"
                      borderColor={colors.gold}
                      className="!h-[120px] !w-[120px] sm:!h-[150px] sm:!w-[150px] md:!h-[175px] md:!w-[175px] lg:!h-[190px] lg:!w-[190px]"
                    />
                  </div>

                  <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-[#FDF8F0] px-1">
                    <LotusGlyph className="h-7 w-10" />
                  </span>
                </div>
              </div>
            ) : (
              <div />
            )}

            <div className="space-y-0.5 sm:space-y-1">
              <Row
                label={isMarathi ? "नाव" : "Name"}
                value={personal.fullName}
              />
              <Row
                label={isMarathi ? "जन्मतारीख" : "Date of Birth"}
                value={personal.dob}
              />
              <Row label={isMarathi ? "वय" : "Age"} value={dynamicAge} />
              <Row
                label={isMarathi ? "उंची" : "Height"}
                value={personal.height}
              />
              <Row
                label={isMarathi ? "धर्म" : "Religion"}
                value={personal.religion}
              />
              <Row label={isMarathi ? "जात" : "Caste"} value={personal.caste} />
              <Row
                label={isMarathi ? "शिक्षण" : "Education"}
                value={education.highestEducation}
              />
              <Row
                label={isMarathi ? "व्यवसाय" : "Occupation"}
                value={education.occupation}
              />
              <Row label={isMarathi ? "ठिकाण" : "Location"} value={location} />
            </div>
          </div>

          {/* Divider */}
          <div className="my-5 flex items-center gap-3 sm:my-6">
            <span
              className="h-px flex-1"
              style={{ backgroundColor: `${colors.gold}66` }}
            />
            <LotusGlyph className="h-6 w-9 shrink-0" />
            <span
              className="h-px flex-1"
              style={{ backgroundColor: `${colors.gold}66` }}
            />
          </div>

          {/* Main two-column body */}
          <div className="grid flex-1 grid-cols-2 gap-4 sm:gap-5 md:gap-6">
            {/* LEFT COLUMN */}
            <div className="space-y-5 sm:space-y-6">
              <Section
                title="About Me"
                marathiTitle="माझ्याबद्दल"
                icon="person"
              >
                <p className="text-[10px] leading-[1.55] text-[#3B2A22] sm:text-[11px] md:text-[11.5px]">
                  {aboutMe}
                </p>
              </Section>

              <Section
                title="Career & Education"
                marathiTitle="शिक्षण व करिअर"
                icon="education"
              >
                <Row
                  label={isMarathi ? "शिक्षण" : "Education"}
                  value={education.highestEducation}
                />
                <Row
                  label={isMarathi ? "व्यवसाय" : "Occupation"}
                  value={
                    education.designation
                      ? `${education.occupation || ""} (${education.designation})`
                      : education.occupation
                  }
                />
                <Row
                  label={isMarathi ? "कंपनी" : "Company"}
                  value={education.companyName}
                />
                <Row
                  label={isMarathi ? "वार्षिक उत्पन्न" : "Annual Income"}
                  value={education.annualIncome}
                />
              </Section>

              <Section
                title="Family Background"
                marathiTitle="कौटुंबिक माहिती"
                icon="family"
              >
                <Row
                  label={isMarathi ? "वडिलांचे नाव" : "Father's Name"}
                  value={family.fatherName}
                />
                <Row
                  label={isMarathi ? "आईचे नाव" : "Mother's Name"}
                  value={family.motherName}
                />
                <Row
                  label={isMarathi ? "भावंडे" : "Siblings"}
                  value={
                    family.brotherCount !== undefined ||
                    family.sisterCount !== undefined
                      ? [
                          family.brotherCount !== undefined
                            ? `${family.brotherCount} ${
                                isMarathi ? "भाऊ" : "Brother"
                              }`
                            : "",
                          family.sisterCount !== undefined
                            ? `${family.sisterCount} ${
                                isMarathi ? "बहीण" : "Sister"
                              }`
                            : "",
                        ]
                          .filter(Boolean)
                          .join(" • ")
                      : undefined
                  }
                />
                <Row
                  label={isMarathi ? "कुटुंब प्रकार" : "Family Type"}
                  value={family.familyType}
                />
                <Row
                  label={isMarathi ? "कुटुंब मूल्ये" : "Family Values"}
                  value={family.familyValues}
                />
              </Section>

              <div className="flex flex-col items-center pt-1 text-center">
                <LotusGlyph className="mb-1 h-6 w-9" />

                <p
                  className="font-serif text-[15px] italic leading-tight sm:text-[18px] md:text-[20px] lg:text-[22px]"
                  style={{ color: colors.gold }}
                >
                  {isMarathi ? (
                    <>
                      एकत्र येणे
                      <br />
                      हीच सुंदर सुरुवात…
                    </>
                  ) : (
                    <>
                      Together
                      <br />
                      is a Beautiful Place
                      <br />
                      to Be…
                    </>
                  )}
                </p>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="space-y-5 sm:space-y-6">
              <Section
                title="Personal Details"
                marathiTitle="वैयक्तिक माहिती"
                icon="document"
              >
                <Row
                  label={isMarathi ? "वैवाहिक स्थिती" : "Marital Status"}
                  value={personal.maritalStatus}
                />
                <Row
                  label={isMarathi ? "मंगळ" : "Manglik"}
                  value={personal.manglik}
                />

                <Row
                  label={isMarathi ? "रक्तगट" : "Blood Group"}
                  value={personal.bloodGroup}
                />
                <Row
                  label={isMarathi ? "भाषा" : "Languages Known"}
                  value={education.languagesKnown}
                />
              </Section>

              <Section
                title="Likes & Interests"
                marathiTitle="आवडी व छंद"
                icon="heart"
              >
                {interests.length > 0 ? (
                  <ListItems items={interests} />
                ) : (
                  <ListItems
                    items={
                      isMarathi
                        ? ["कुटुंबासोबत वेळ घालवणे", "प्रवास", "वाचन"]
                        : ["Spending time with family", "Traveling", "Reading"]
                    }
                  />
                )}
              </Section>

              {design.showExpectations && expectationItems.length > 0 && (
                <Section
                  title="Expectations"
                  marathiTitle="अपेक्षा"
                  icon="target"
                >
                  <ListItems items={expectationItems} />
                </Section>
              )}
            </div>
          </div>

          {/* Bottom contact strip */}
          {(contact.contactPerson ||
            contact.phone1 ||
            contact.phone2 ||
            contact.email) && (
            <div
              className="mt-5 border-t pt-3 sm:mt-6"
              style={{ borderColor: `${colors.gold}55` }}
            >
              <div className="grid grid-cols-2 gap-x-5 gap-y-1">
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
                  label={isMarathi ? "दुसरा मोबाईल" : "Mobile 2"}
                  value={contact.phone2}
                />
              </div>
            </div>
          )}

          {/* Bottom decorative line */}
          <div
            className="mt-4 border-t pt-1 sm:mt-5"
            style={{ borderColor: `${colors.gold}66` }}
          />
        </div>
      </div>
    </div>
  );
};
