import React, { useEffect, useRef, useState } from "react";
import { BiodataData } from "@/types/biodata";
import { TemplatePhoto } from "../TemplateHelpers";

/**
 * A4 pixel dimensions at 96dpi — the "true" size used for on-screen
 * layout math AND for PDF/print export. These never change; we only
 * ever scale the whole card down to fit smaller viewports
 * (ResponsiveA4Frame below), never clip it.
 */
const A4_WIDTH = 794;
const A4_MIN_HEIGHT = 1123;

/**
 * Wraps a fixed-width (794px) A4 card and scales it responsively to
 * fit its parent's width on screen, using CSS transform: scale().
 * The card itself is never given a hard height/overflow-hidden, so
 * long content simply makes the card taller — it just gets scaled
 * proportionally along with everything else, and print/PDF export
 * (which should target the unscaled 794px-wide DOM) is unaffected.
 */
const ResponsiveA4Frame: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [innerHeight, setInnerHeight] = useState(A4_MIN_HEIGHT);

  useEffect(() => {
    if (!outerRef.current || !innerRef.current) return;

    const recalc = () => {
      if (!outerRef.current || !innerRef.current) return;
      const containerWidth = outerRef.current.clientWidth;
      const nextScale = Math.min(containerWidth / A4_WIDTH, 1);
      setScale(nextScale);
      setInnerHeight(innerRef.current.scrollHeight);
    };

    recalc();

    const resizeObserver = new ResizeObserver(recalc);
    resizeObserver.observe(outerRef.current);
    resizeObserver.observe(innerRef.current);

    return () => resizeObserver.disconnect();
  }, [children]);

  return (
    <div
      ref={outerRef}
      className="mx-auto w-full"
      style={{
        maxWidth: A4_WIDTH,
        // Reserve the correct scaled height so surrounding layout
        // (e.g. a scroll container) doesn't collapse/jump.
        height: innerHeight * scale,
      }}
    >
      <div
        ref={innerRef}
        style={{
          width: A4_WIDTH,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export const GoldFiligreeTemplate: React.FC<{ data: BiodataData }> = ({
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

  // Palette sampled/approximated from the supplied reference image.
  const gold = "#C49A45";

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
        className={`flex items-start gap-1 py-[1px] text-[11px] leading-[1.3] ${className}`}
      >
        <span className="w-[112px] shrink-0 font-medium text-[#5B4324]">
          {label}
        </span>
        <span className="shrink-0 text-[#9A762F]">:</span>
        <span className="min-w-0 flex-1 break-words pl-1 font-medium text-[#4B3922]">
          {value}
        </span>
      </div>
    );
  };

  /**
   * FIX: used for the two-column paired sections (Family Details,
   * Astrology). Previously these wrapped a full <Row/> (fixed
   * 112px label + value) as a single grid item inside grid-cols-2,
   * which only left ~40-50px for the value — causing text to wrap
   * character-by-character. RowCell instead emits the label and
   * value as separate grid cells so the parent's
   * grid-cols-[max-content_1fr_max-content_1fr] can size the label
   * to its content and give the value the rest of the space.
   * Empty values render as blank cells (instead of Row's `null`)
   * so column pairing never shifts out of alignment.
   */
  const RowCell = ({
    label,
    value,
  }: {
    label: string;
    value?: string | number;
  }) => {
    if (
      value === undefined ||
      value === null ||
      value === "" ||
      value === "0" ||
      value === "०"
    ) {
      return (
        <>
          <span />
          <span />
        </>
      );
    }

    return (
      <>
        <span className="flex items-start gap-1 whitespace-nowrap py-[1px] text-[11px] font-medium leading-[1.3] text-[#5B4324]">
          {label}
          <span className="text-[#9A762F]">:</span>
        </span>
        <span className="min-w-0 break-words py-[1px] pl-1 text-[11px] font-medium leading-[1.3] text-[#4B3922]">
          {value}
        </span>
      </>
    );
  };

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
      <div className="mb-1.5 flex items-center gap-2 border-b border-[#C49A45]/55 pb-1">
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#C49A45] bg-[#E7D3A1] shadow-[0_1px_4px_rgba(127,90,31,0.18)]">
          <img
            src={icon}
            alt=""
            aria-hidden="true"
            className="h-3.5 w-3.5 object-contain"
          />
        </span>
        <h3 className="min-w-0 flex-1 rounded-r-full bg-[#F0E2BE]/75 px-2 py-0.5 font-serif text-[14px] font-bold leading-none text-[#513B20]">
          {title}
        </h3>
      </div>

      {children}
    </section>
  );

  const SectionIcon = (name: string) => `/templates/gold-filigree/${name}.png`;

  const educationCareer = (
    <>
      <Row
        label={isMarathi ? "उच्च शिक्षण" : "Education"}
        value={education.highestEducation}
      />
      <Row
        label={isMarathi ? "महाविद्यालय" : "College / Institute"}
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

  const personalDetails = (
    <>
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
      <Row label={isMarathi ? "उंची" : "Height"} value={personal.height} />
      <Row label={isMarathi ? "वजन" : "Weight"} value={personal.weight} />
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
      <Row label={isMarathi ? "गोत्र" : "Gotra"} value={personal.gotra} />
      <Row
        label={isMarathi ? "वैवाहिक स्थिती" : "Marital Status"}
        value={personal.maritalStatus}
      />
    </>
  );

  // FIX: was `grid grid-cols-2 gap-x-5` wrapping full <Row/> items —
  // each column only had ~160px, leaving the value almost no room
  // and causing character-by-character wrapping. Now uses RowCell
  // in a grid-cols-[max-content_1fr_max-content_1fr] track so labels
  // size to content and values share the remaining width.
  const familyDetails = (
    <div className="grid grid-cols-[max-content_1fr_max-content_1fr] items-start gap-x-3 gap-y-[2px]">
      <RowCell
        label={isMarathi ? "वडिलांचे नाव" : "Father's Name"}
        value={family.fatherName}
      />
      <RowCell
        label={isMarathi ? "वडिलांचा व्यवसाय" : "Father's Work"}
        value={family.fatherOccupation}
      />
      <RowCell
        label={isMarathi ? "आईचे नाव" : "Mother's Name"}
        value={family.motherName}
      />
      <RowCell
        label={isMarathi ? "आईचा व्यवसाय" : "Mother's Work"}
        value={family.motherOccupation}
      />
      <RowCell
        label={isMarathi ? "भाऊ" : "Brothers"}
        value={family.brotherCount}
      />
      <RowCell
        label={isMarathi ? "बहीण" : "Sisters"}
        value={family.sisterCount}
      />
      <RowCell
        label={isMarathi ? "मूळ गाव" : "Native Place"}
        value={family.nativePlace}
      />
      <RowCell
        label={isMarathi ? "सध्याचे ठिकाण" : "Current City"}
        value={family.familyLocation}
      />
      <RowCell
        label={isMarathi ? "मामांचे नाव" : "Maternal Uncle"}
        value={family.maternalUncleName}
      />
      <RowCell
        label={isMarathi ? "मामांचे गाव" : "Uncle's City"}
        value={family.maternalUnclePlace}
      />
      {family.relativeSurnames ? (
        <div className="col-span-4">
          <Row
            label={isMarathi ? "नातेवाईकांची आडनावे" : "Relative Surnames"}
            value={family.relativeSurnames}
          />
        </div>
      ) : null}
    </div>
  );

  const expectationsDetails = (
    <>
      <Row
        label={isMarathi ? "अपेक्षित वय / उंची" : "Preferred Age / Height"}
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
        label={isMarathi ? "अपेक्षित नोकरी / ठिकाण" : "Preferred Career / City"}
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
    </>
  );

  return (
    <ResponsiveA4Frame>
      <div
        className="relative mx-auto w-[794px] overflow-visible bg-[#FAF4E1] px-11 py-7 text-[#4B3922] shadow-2xl print:shadow-none"
        style={{
          minHeight: A4_MIN_HEIGHT,
          WebkitPrintColorAdjust: "exact",
          printColorAdjust: "exact",
          backgroundImage:
            "radial-gradient(circle at 18% 15%, rgba(196,154,69,.07), transparent 25%), radial-gradient(circle at 82% 70%, rgba(127,90,31,.045), transparent 28%), linear-gradient(135deg, #FAF4E1 0%, #F7EFD8 48%, #FBF5E4 100%)",
        }}
      >
        {/* Double inset frame — inset % keeps it anchored to the true
            edges of the card no matter how tall it grows. */}
        <div className="pointer-events-none absolute inset-4 border border-[#B98935]/75" />
        <div className="pointer-events-none absolute inset-6 border border-[#C49A45]/45" />

        {/* Corner ornaments — pinned to the card's real corners. With
            min-height instead of a hard height, bottom-0 always
            tracks the actual bottom of the content, so these never
            separate from the footer even when data is long. */}
        <img
          src="/templates/gold-filigree/corner-ornament.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 z-0 w-32 select-none"
        />
        <img
          src="/templates/gold-filigree/corner-ornament.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 z-0 w-32 -scale-x-100 select-none"
        />
        <img
          src="/templates/gold-filigree/corner-ornament.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 z-0 w-32 -scale-y-100 select-none"
        />
        <img
          src="/templates/gold-filigree/corner-ornament.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 right-0 z-0 w-32 -scale-x-100 -scale-y-100 select-none"
        />

        <div className="relative z-10">
          {/* Reference-style title header. */}
          <header className="pt-1 text-center">
            <div className="mx-auto flex w-[420px] items-center justify-center gap-3">
              <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#C49A45]" />
              <span className="h-2 w-2 rotate-45 border border-[#B98935] bg-[#FAF4E1]" />
              <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#C49A45]" />
            </div>

            <h1 className="mt-1 font-serif text-[34px] font-bold leading-none tracking-tight text-[#7F5A1F]">
              Biodata
            </h1>

            <p className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.32em] text-[#6E5228]">
              TWO HEARTS&nbsp; • &nbsp;ONE JOURNEY
            </p>

            <div className="mx-auto mt-1.5 flex w-[270px] items-center justify-center gap-2">
              <span className="h-px flex-1 bg-[#C49A45]/65" />
              <img
                src="/templates/shared/divider-flourish.png"
                alt=""
                aria-hidden="true"
                className="h-4 w-14 object-contain opacity-90"
              />
              <span className="h-px flex-1 bg-[#C49A45]/65" />
            </div>
          </header>

          {/* Top profile area: photo on the left, personal details on the right. */}
          <div className="mt-3 grid grid-cols-[190px_1fr] gap-6">
            {design.showPhoto ? (
              <div className="flex justify-center pt-1">
                <div className="relative w-[160px] rounded-sm border-2 border-[#B98935] bg-[#F3E6C5] p-2 shadow-[0_2px_10px_rgba(127,90,31,0.12)]">
                  <div className="border border-[#C49A45]/65 p-1">
                    <TemplatePhoto
                      url={profile.photoUrl}
                      shape="rounded"
                      borderColor={gold}
                      className="!h-[190px] !w-[136px]"
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div />
            )}

            <Section
              title={isMarathi ? "वैयक्तिक माहिती" : "Personal Details"}
              icon={SectionIcon("personal-badge")}
              className="pt-1"
            >
              <div className="grid grid-cols-1 gap-y-0">{personalDetails}</div>
            </Section>
          </div>

          <div className="my-2.5 border-t border-[#C49A45]/55" />

          {/* Main two-column body mirrors the reference image. */}
          <div className="grid grid-cols-2 gap-x-7">
            <div className="space-y-3">
              <Section
                title={
                  isMarathi ? "शैक्षणिक पात्रता" : "Educational Qualification"
                }
                icon={SectionIcon("education-badge")}
              >
                {educationCareer}
              </Section>

              <Section
                title={isMarathi ? "व्यवसाय व करिअर" : "Occupation & Career"}
                icon={SectionIcon("career-badge")}
              >
                <Row
                  label={isMarathi ? "व्यवसाय" : "Profession"}
                  value={education.occupation}
                />
                <Row
                  label={isMarathi ? "पद" : "Designation"}
                  value={education.designation}
                />
                <Row
                  label={
                    isMarathi ? "कंपनी / संस्था" : "Company / Organization"
                  }
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
              </Section>

              <Section
                title={isMarathi ? "कौटुंबिक माहिती" : "Family Details"}
                icon={SectionIcon("family-badge")}
              >
                {familyDetails}
              </Section>
            </div>

            <div className="space-y-3">
              <Section
                title={isMarathi ? "संपर्क माहिती" : "Contact Details"}
                icon={SectionIcon("contact-badge")}
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
                <Row
                  label={isMarathi ? "ईमेल" : "Email"}
                  value={contact.email}
                />
                <Row
                  label={isMarathi ? "पत्ता" : "Address"}
                  value={contact.residentialAddress}
                />
              </Section>

              <Section
                title={isMarathi ? "मूळ ठिकाण" : "Native Place"}
                icon={SectionIcon("location-badge")}
              >
                <Row
                  label={isMarathi ? "मूळ गाव" : "City / Village"}
                  value={family.nativePlace}
                />
                <Row
                  label={isMarathi ? "सध्याचे ठिकाण" : "Current City"}
                  value={family.familyLocation}
                />
              </Section>

              {design.showExpectations && (
                <Section
                  title={isMarathi ? "अपेक्षा" : "Expectations"}
                  icon={SectionIcon("expectations-badge")}
                >
                  {expectationsDetails}
                </Section>
              )}

              {design.showAstrology && (
                <Section
                  title={
                    isMarathi
                      ? "पत्रिका / ज्योतिष माहिती"
                      : "Horoscope & Astrology"
                  }
                  icon={SectionIcon("astrology-badge")}
                >
                  {/* FIX: same grid-cols-2-wrapping-Row bug as Family
                      Details above — replaced with RowCell in a
                      max-content/1fr track. */}
                  <div className="grid grid-cols-[max-content_1fr_max-content_1fr] items-start gap-x-3 gap-y-[2px]">
                    <RowCell
                      label={isMarathi ? "राशी" : "Rashi"}
                      value={personal.rashi}
                    />
                    <RowCell
                      label={isMarathi ? "नक्षत्र" : "Nakshatra"}
                      value={personal.nakshatra}
                    />
                    <RowCell
                      label={isMarathi ? "चरण" : "Charan"}
                      value={personal.charan}
                    />
                    <RowCell
                      label={isMarathi ? "नाडी" : "Nadi"}
                      value={personal.nadi}
                    />
                    <RowCell
                      label={isMarathi ? "गण" : "Gan"}
                      value={personal.gan}
                    />
                    <RowCell
                      label={isMarathi ? "मंगळ" : "Manglik"}
                      value={personal.manglik}
                    />
                  </div>
                </Section>
              )}
            </div>
          </div>

          {/* Footer flourish — always the true last elements, so they
              never get clipped regardless of how tall the card grew. */}
          <div className="mt-4 flex justify-center">
            <img
              src="/templates/shared/divider-flourish.png"
              alt=""
              aria-hidden="true"
              className="h-auto w-24 select-none opacity-90"
            />
          </div>

          <p className="mt-1 text-center font-serif italic text-[14px] text-[#76551F]">
            Let&apos;s build a beautiful future together...
          </p>

          <div className="mx-auto mt-2 flex w-[260px] items-center justify-center gap-2">
            <span className="h-px flex-1 bg-[#C49A45]/50" />
            <span className="h-1.5 w-1.5 rotate-45 bg-[#C49A45]" />
            <span className="h-px flex-1 bg-[#C49A45]/50" />
          </div>
        </div>
      </div>
    </ResponsiveA4Frame>
  );
};
