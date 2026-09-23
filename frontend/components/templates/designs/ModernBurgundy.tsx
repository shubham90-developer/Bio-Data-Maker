import React from "react";
import { BiodataData } from "@/types/biodata";
import { TemplatePhoto } from "../TemplateHelpers";

/**
 * ModernBurgundyTemplate
 * Mirrors the structural pattern of RoyalMaroonTemplate (Row / Section
 * helpers, same data destructuring, same design.show* flags) but is
 * styled after the cream-background / maroon-icon-badge / gold-leaf
 * design shown in the reference screenshot, using the asset paths
 * from your `modern-burgundy-2` and `minimal-editorial` folders.
 *
 * ASSUMPTIONS (please adjust to your actual BiodataData shape):
 * - personal.age and personal.motherTongue exist. If not, either add
 *   them to your BiodataData type, or replace/remove the corresponding
 *   <StatPill> / <Row> lines below.
 * - There's no dedicated "star" icon for Horoscope & Astrology in your
 *   minimal-editorial folder, so it reuses icon-religion.png — swap in
 *   a dedicated icon if you add one later.
 * - "Additional Note" (icon-envelope.png) is left out since it's not
 *   part of the current BiodataData interface used by RoyalMaroonTemplate;
 *   add a `personal.additionalNote` field (or similar) and uncomment
 *   the block near the bottom if you want that section.
 */
export const ModernBurgundyTemplate: React.FC<{ data: BiodataData }> = ({
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

  const maroon = "#7A1B2B";
  const gold = "#C9A24B";

  /**
   * Field row for the light/cream background.
   * Mirrors RoyalMaroonTemplate's Row but with a dark-on-cream palette
   * instead of gold-on-maroon.
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
        className={`flex items-start text-[13px] leading-snug py-[1px] ${className}`}
      >
        <span className="w-40 shrink-0 font-medium text-[#7A1B2B]">
          {label}
        </span>
        <span className="mx-1 text-[#C9A24B]">:</span>
        <span className="flex-1 pl-1 break-words font-medium text-[#2E2A26]">
          {value}
        </span>
      </div>
    );
  };

  // NOTE: the icon-*.png assets in minimal-editorial are already complete
  // circle badges (maroon circle + white glyph baked in). Render them as-is —
  // do NOT wrap in another circle or apply an invert filter.
  const SectionIcon = ({ src }: { src: string }) => (
    <img
      src={src}
      alt=""
      aria-hidden="true"
      className="h-7 w-7 shrink-0 select-none object-contain"
    />
  );

  const Section = ({
    title,
    icon,
    children,
    className = "",
  }: {
    title: string;
    icon: string;
    children: React.ReactNode;
    className?: string;
  }) => (
    <section className={className}>
      <div className="mb-1.5 flex items-center gap-2.5 border-b border-[#C9A24B]/40 pb-1.5">
        <SectionIcon src={icon} />
        <h3 className="font-serif text-sm font-bold uppercase tracking-[0.12em] text-[#7A1B2B]">
          {title}
        </h3>
      </div>
      {children}
    </section>
  );

  const StatPill = ({
    icon,
    label,
    value,
  }: {
    icon: string;
    label: string;
    value?: string | number;
  }) => {
    if (value === undefined || value === null || value === "") return null;
    return (
      <div className="flex items-center gap-2">
        <img
          src={icon}
          alt=""
          aria-hidden="true"
          className="h-6 w-6 shrink-0 select-none object-contain"
        />
        <div className="leading-tight">
          <p className="text-[10px] uppercase tracking-wide text-[#8A7F6B]">
            {label}
          </p>
          <p className="text-sm font-semibold text-[#2E2A26]">{value}</p>
        </div>
      </div>
    );
  };

  return (
    <div
      className="relative mx-auto min-h-[1123px] w-[794px] bg-[#FAF6EE] px-10 py-8 text-[#2E2A26] shadow-2xl print:shadow-none"
      style={{
        backgroundImage: "url(/templates/modern-burgundy-2/bg-image.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        WebkitPrintColorAdjust: "exact",
        printColorAdjust: "exact",
      }}
    >
      {/*
        Only ONE frame source: bg-image.png already carries the maroon
        corner flourishes (see its thumbnail — cream page with dark
        corner accents baked in). Layering outer-border.png on top of
        it at full-bleed size is what caused the clashing/odd corners
        you saw. Re-add outer-border.png only if you drop bg-image's
        corner art, not alongside it.
      */}

      {/* Corner leaf ornaments — top corners only, matching the reference */}
      <img
        src="/templates/minimal-editorial/corner-leaf-top-left.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 z-0 w-16 select-none"
      />
      <img
        src="/templates/minimal-editorial/corner-leaf-top-right.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 z-0 w-16 select-none"
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Header: eyebrow + name + title + quick stats, photo alongside */}
        <div className="flex items-start gap-5 border-b border-[#C9A24B]/40 pb-3">
          {design.showPhoto && (
            <div className="h-28 w-24 shrink-0 overflow-hidden rounded-md border-2 border-[#C9A24B] p-1">
              {/*
                overflow-hidden + a fixed-size parent is what keeps
                TemplatePhoto from stretching/squishing regardless of
                its own internal aspect-ratio behavior. If it still
                looks off, TemplatePhoto's inner <img> likely needs
                `object-cover h-full w-full` — check that component.
              */}
              <TemplatePhoto
                url={profile.photoUrl}
                shape="rounded"
                borderColor={gold}
                className="h-full w-full object-cover"
              />
            </div>
          )}

          <div className="min-w-0 flex-1 pt-1">
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#8A7F6B]">
              {isMarathi ? "एक संक्षिप्त ओळख" : "A Brief Introduction"}
            </p>

            <h1 className="mt-1 font-serif text-4xl font-bold leading-tight text-[#7A1B2B]">
              {personal.fullName || (isMarathi ? "शुभम यादव" : "Shubham Yadav")}
            </h1>

            <p className="mt-1 text-sm font-medium uppercase tracking-[0.2em] text-[#8A7F6B]">
              {education.designation ||
                education.occupation ||
                "Software Developer"}
            </p>

            {/* Quick stats row */}
            <div className="mt-2 flex items-center gap-5">
              <StatPill
                icon="/templates/minimal-editorial/icon-calendar.png"
                label={isMarathi ? "वय" : "Age"}
                value={(personal as any).age}
              />
              <StatPill
                icon="/templates/minimal-editorial/icon-height.png"
                label={isMarathi ? "उंची" : "Height"}
                value={personal.height}
              />
              <StatPill
                icon="/templates/minimal-editorial/icon-religion.png"
                label={isMarathi ? "धर्म" : "Religion"}
                value={personal.religion}
              />
            </div>
          </div>
        </div>

        {/* Personal Details */}
        <Section
          title={isMarathi ? "वैयक्तिक माहिती" : "Personal Details"}
          icon="/templates/minimal-editorial/icon-person.png"
          className="mt-3"
        >
          <div className="grid grid-cols-2 gap-x-6">
            <Row
              label={isMarathi ? "पूर्ण नाव" : "Full Name"}
              value={personal.fullName}
            />
            <Row
              label={isMarathi ? "जन्मतारीख" : "Date of Birth"}
              value={personal.dob}
            />
            <Row
              label={isMarathi ? "जन्मवेळ" : "Time of Birth"}
              value={personal.birthTime}
            />
            <Row
              label={isMarathi ? "जन्मस्थान" : "Birth Place"}
              value={personal.birthPlace}
            />
            <Row
              label={isMarathi ? "वैवाहिक स्थिती" : "Marital Status"}
              value={personal.maritalStatus}
            />
            <Row
              label={isMarathi ? "मातृभाषा" : "Mother Tongue"}
              value={(personal as any).motherTongue}
            />
            <Row label={isMarathi ? "जात" : "Caste"} value={personal.caste} />
            <Row label={isMarathi ? "गोत्र" : "Gotra"} value={personal.gotra} />
          </div>
        </Section>

        {/* Family Details */}
        <Section
          title={isMarathi ? "कौटुंबिक माहिती" : "Family Details"}
          icon="/templates/minimal-editorial/icon-family.png"
          className="mt-3"
        >
          <div className="grid grid-cols-2 gap-x-6">
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
              label={isMarathi ? "सध्याचे ठिकाण" : "Current City"}
              value={family.familyLocation}
            />
          </div>
        </Section>

        {/* Horoscope & Astrology */}
        {design.showAstrology && (
          <Section
            title={
              isMarathi ? "पत्रिका व ज्योतिष माहिती" : "Horoscope & Astrology"
            }
            icon="/templates/minimal-editorial/icon-religion.png"
            className="mt-3"
          >
            <div className="grid grid-cols-2 gap-x-6">
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
              <Row label={isMarathi ? "गण" : "Gan"} value={personal.gan} />
              <Row label={isMarathi ? "नाडी" : "Nadi"} value={personal.nadi} />
              <Row
                label={isMarathi ? "मंगळ" : "Manglik"}
                value={personal.manglik}
              />
            </div>
          </Section>
        )}

        {/* Education & Career */}
        <Section
          title={isMarathi ? "शिक्षण व नोकरी" : "Education & Career"}
          icon="/templates/minimal-editorial/icon-education.png"
          className="mt-3"
        >
          <div className="grid grid-cols-2 gap-x-6">
            <Row
              label={isMarathi ? "उच्च शिक्षण" : "Highest Qualification"}
              value={education.highestEducation}
            />
            <Row
              label={isMarathi ? "महाविद्यालय" : "College/University"}
              value={education.college}
            />
            <Row
              label={isMarathi ? "व्यवसाय / पद" : "Occupation / Role"}
              value={`${education.occupation || ""}${
                education.designation ? ` (${education.designation})` : ""
              }`}
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
          </div>
        </Section>

        {/* Expectations */}
        {design.showExpectations && (
          <Section
            title={isMarathi ? "अपेक्षा" : "Expectations"}
            icon="/templates/minimal-editorial/icon-expectations.png"
            className="mt-3"
          >
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
                  ? ` yrs • ${expectations.preferredHeightMin}`
                  : ""
              }`}
            />
            <Row
              label={isMarathi ? "अपेक्षित शिक्षण" : "Preferred Education"}
              value={expectations.preferredEducation}
            />
            <Row
              label={
                isMarathi ? "अपेक्षित नोकरी / ठिकाण" : "Preferred Career / City"
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
        )}

        {/* Contact Details */}
        <Section
          title={isMarathi ? "संपर्क माहिती" : "Contact Details"}
          icon="/templates/minimal-editorial/icon-phone.png"
          className="mt-3"
        >
          <div className="grid grid-cols-2 gap-x-6">
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

        {/*
          Optional "Additional Note" section — uncomment once you add a
          matching field (e.g. personal.additionalNote) to BiodataData.

          {personal.additionalNote && (
            <Section
              title={isMarathi ? "टीप" : "Additional Note"}
              icon="/templates/minimal-editorial/icon-envelope.png"
              className="mt-3"
            >
              <p className="text-sm leading-relaxed text-[#2E2A26]">
                {personal.additionalNote}
              </p>
            </Section>
          )}
        */}

        {/* Bottom divider flourish */}
        <div className="mt-3 flex justify-center">
          <img
            src="/templates/minimal-editorial/divider-center.png"
            alt=""
            aria-hidden="true"
            className="pointer-events-none h-auto w-24 select-none"
          />
        </div>
      </div>
    </div>
  );
};
