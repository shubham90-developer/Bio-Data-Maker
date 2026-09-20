"use client";

import React from "react";
import { BiodataData } from "@/types/biodata";

const SAFE_LEFT = 82;
const SAFE_RIGHT = 76;
const SAFE_TOP = 48;
const SAFE_BOTTOM = 44;

const FIT_PRIORITIES = [
  "skills",
  "languagesKnown",
  "hobbies",
  "interests",
  "otherInformation",
  "relativeSurnames",
] as const;

type FitPriority = (typeof FIT_PRIORITIES)[number];

const ASSET_BASE = "/templates/contemporary-sand";

export const ContemporarySandTemplate: React.FC<{
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
  const contentRef = React.useRef<HTMLDivElement>(null);

  const isEmpty = (value: unknown) => {
    if (value === undefined || value === null) return true;

    const normalized = String(value).trim();

    return normalized === "" || normalized === "0" || normalized === "०";
  };

  const clean = (value: unknown): string | undefined =>
    isEmpty(value) ? undefined : String(value).trim();

  const joinValues = (
    values: unknown[],
    separator = " • ",
  ): string | undefined => {
    const result = values
      .map((value) => clean(value))
      .filter((value): value is string => Boolean(value));

    return result.length ? result.join(separator) : undefined;
  };

  const bilingualSection = (marathi: string, english: string) =>
    isMarathi ? `${marathi} | ${english}` : english;

  const religionCaste = joinValues([
    personal.religion,
    personal.caste,
    personal.subCaste,
  ]);

  const occupation = joinValues([education.occupation, education.designation]);

  const preferredAge = (() => {
    const min = clean(expectations.preferredAgeMin);
    const max = clean(expectations.preferredAgeMax);

    if (min && max) return `${min} - ${max}`;
    return min || max;
  })();

  React.useLayoutEffect(() => {
    const container = contentRef.current;

    if (!container) return;

    let animationFrame = 0;
    let cancelled = false;

    const fits = () => container.scrollHeight <= container.clientHeight + 1;

    const reset = () => {
      container.style.setProperty("--u", "1");

      FIT_PRIORITIES.forEach((priority) => {
        container
          .querySelectorAll<HTMLElement>(`[data-fit-priority="${priority}"]`)
          .forEach((element) => {
            element.style.display = "";
          });
      });
    };

    const fitContent = () => {
      if (cancelled) return;

      reset();

      let unit = 1;

      while (!fits() && unit > 0.6) {
        unit = Math.max(0.6, Number((unit - 0.02).toFixed(2)));

        container.style.setProperty("--u", String(unit));
      }

      if (!fits()) {
        for (const priority of FIT_PRIORITIES) {
          const rows = Array.from(
            container.querySelectorAll<HTMLElement>(
              `[data-fit-priority="${priority}"]`,
            ),
          );

          rows.forEach((row) => {
            row.style.display = "none";
          });

          if (fits()) break;
        }
      }
    };

    const scheduleFit = () => {
      cancelAnimationFrame(animationFrame);

      animationFrame = requestAnimationFrame(fitContent);
    };

    const fontsReady =
      typeof document !== "undefined" && document.fonts
        ? document.fonts.ready
        : Promise.resolve();

    fontsReady.then(() => {
      if (!cancelled) scheduleFit();
    });

    window.addEventListener("beforeprint", fitContent);

    return () => {
      cancelled = true;

      cancelAnimationFrame(animationFrame);

      window.removeEventListener("beforeprint", fitContent);
    };
  }, [data]);

  const Row = ({
    label,
    value,
    className = "",
    priority,
  }: {
    label: string;
    value?: string | number | null;
    className?: string;
    priority?: FitPriority;
  }) => {
    if (isEmpty(value)) return null;

    return (
      <div data-fit-priority={priority} className={`min-w-0 ${className}`}>
        <div className="grid min-w-0 grid-cols-[calc(var(--u)*112px)_calc(var(--u)*8px)_minmax(0,1fr)] items-start">
          <span className="min-w-0 break-words font-serif text-[calc(var(--u)*10px)] font-semibold leading-[1.35] text-[#69452F]">
            {label}
          </span>

          <span className="text-center text-[calc(var(--u)*10px)] font-semibold leading-[1.35] text-[#B8894F]">
            :
          </span>

          <span className="min-w-0 break-words pl-[calc(var(--u)*3px)] text-[calc(var(--u)*10px)] font-medium leading-[1.35] text-[#30465A]">
            {value}
          </span>
        </div>
      </div>
    );
  };

  const Section = ({
    title,
    color,
    icon,
    children,
  }: {
    title: string;
    color: string;
    icon: string;
    children: React.ReactNode;
  }) => (
    <section className="relative min-w-0">
      {/* Ribbon + icon */}
      <div className="relative z-[3] h-[calc(var(--u)*33px)]">
        <div
          className="absolute left-[calc(var(--u)*17px)] top-0 h-[calc(var(--u)*27px)] w-[55%]"
          style={{
            background: "#C7A06A",
            clipPath:
              "polygon(0 0, calc(100% - 14px) 0, 100% 50%, calc(100% - 14px) 100%, 0 100%)",
          }}
        >
          <div
            className="absolute inset-[1.5px]"
            style={{
              background: `linear-gradient(90deg, ${color} 0%, ${color}E8 75%, ${color}CC 100%)`,
              clipPath:
                "polygon(0 0, calc(100% - 13px) 0, 100% 50%, calc(100% - 13px) 100%, 0 100%)",
            }}
          >
            <div className="flex h-full items-center pl-[calc(var(--u)*27px)] pr-[calc(var(--u)*20px)]">
              <h3 className="whitespace-nowrap font-serifDevanagari text-[calc(var(--u)*11.5px)] font-bold leading-[1.5] text-white">
                {title}
              </h3>
            </div>
          </div>
        </div>

        <img
          src={`${ASSET_BASE}/${icon}`}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-[calc(var(--u)*-3px)] z-[4] h-auto w-[calc(var(--u)*34px)] select-none"
        />
      </div>

      {/* Section body */}
      <div
        className="relative min-w-0 overflow-hidden rounded-[calc(var(--u)*8px)] border border-[#B8894F]/70 bg-[#FFFDF8]/80 px-[calc(var(--u)*14px)] pb-[calc(var(--u)*8px)] pt-[calc(var(--u)*13px)]"
        style={{
          marginTop: "calc(var(--u) * -7px)",
        }}
      >
        <img
          src={`${ASSET_BASE}/section-watermark-botanical.png`}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute bottom-[calc(var(--u)*2px)] right-[calc(var(--u)*4px)] h-auto w-[calc(var(--u)*70px)] select-none opacity-[0.14]"
        />

        <div className="relative z-[1] grid min-w-0 grid-cols-2 gap-x-[calc(var(--u)*18px)] gap-y-[calc(var(--u)*1px)]">
          {children}
        </div>
      </div>
    </section>
  );

  const Photo = () => {
    const [failed, setFailed] = React.useState(false);

    React.useEffect(() => {
      setFailed(false);
    }, [profile.photoUrl]);

    const hasPhoto = Boolean(clean(profile.photoUrl)) && !failed;

    return (
      <div className="flex shrink-0 flex-col items-center">
        <div className="rounded-[calc(var(--u)*8px)] border-2 border-[#B8894F] bg-white p-[calc(var(--u)*3px)] shadow-[0_3px_10px_rgba(90,55,30,0.15)]">
          <div className="relative h-[calc(var(--u)*135px)] w-[calc(var(--u)*105px)] overflow-hidden rounded-[calc(var(--u)*5px)] border border-[#C9A46A] bg-[#F2E9D8]">
            {hasPhoto ? (
              <img
                src={profile.photoUrl}
                alt=""
                className="h-full w-full object-cover"
                onError={() => setFailed(true)}
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-[#EFE5D3]">
                <div className="relative h-[calc(var(--u)*78px)] w-[calc(var(--u)*68px)]">
                  <div className="absolute left-1/2 top-0 h-[calc(var(--u)*27px)] w-[calc(var(--u)*27px)] -translate-x-1/2 rounded-full bg-[#B8894F]/35" />

                  <div className="absolute bottom-0 left-1/2 h-[calc(var(--u)*45px)] w-[calc(var(--u)*62px)] -translate-x-1/2 rounded-t-[calc(var(--u)*30px)] bg-[#B8894F]/35" />
                </div>
              </div>
            )}
          </div>
        </div>

        <p className="mt-[calc(var(--u)*3px)] text-center font-serif text-[calc(var(--u)*8px)] italic leading-[1.15] text-[#8C6544]">
          “Good Vibes
          <br />
          Better Future”
        </p>
      </div>
    );
  };

  return (
    <div
      className="relative mx-auto h-[1123px] w-[794px] overflow-hidden bg-[#F3EBDD] text-[#2E2620] shadow-2xl print:shadow-none"
      style={{
        WebkitPrintColorAdjust: "exact",
        printColorAdjust: "exact",
      }}
    >
      {/* Background artwork */}
      <img
        src={`${ASSET_BASE}/bg-ivory-botanical.png`}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 h-full w-full select-none"
      />

      {/* Content */}
      <div
        ref={contentRef}
        className="absolute z-10 flex flex-col justify-between gap-[calc(var(--u)*8px)]"
        style={
          {
            "--u": 1,
            left: SAFE_LEFT,
            right: SAFE_RIGHT,
            top: SAFE_TOP,
            bottom: SAFE_BOTTOM,
          } as React.CSSProperties
        }
      >
        {/* HEADER */}
        <header className="shrink-0">
          <p className="text-center font-serif text-[calc(var(--u)*12px)] font-semibold leading-[1.2] text-[#68422F]">
            {clean(profile.deityName) || "॥ श्री गणेशाय नमः ॥"}
          </p>

          <div className="mt-[calc(var(--u)*4px)] flex items-start justify-between gap-[calc(var(--u)*12px)]">
            {/* Ganesh */}
            <div className="flex w-[calc(var(--u)*88px)] shrink-0 flex-col items-center">
              <img
                src={`${ASSET_BASE}/ganesh-icon.png`}
                alt=""
                aria-hidden="true"
                className="h-auto w-[calc(var(--u)*72px)] select-none"
              />

              <div className="mt-[calc(var(--u)*1px)] text-center font-serif text-[calc(var(--u)*7px)] font-semibold leading-[1.3] text-[#6B4030]">
                <div>वक्रतुंड महाकाय</div>
                <div>सूर्यकोटि समप्रभ ।</div>
                <div>निर्विघ्नं कुरु मे देव</div>
                <div>सर्वकार्येषु सर्वदा ॥</div>
              </div>
            </div>

            {/* Name / title */}
            <div className="min-w-0 flex-1 pt-[calc(var(--u)*4px)] text-center">
              {!isEmpty(personal.fullName) && (
                <h1 className="break-words font-serif text-[calc(var(--u)*30px)] font-bold leading-[1.05] text-[#593020]">
                  {personal.fullName}
                </h1>
              )}

              {!isEmpty(education.designation || education.occupation) && (
                <p className="mt-[calc(var(--u)*4px)] break-words text-[calc(var(--u)*10px)] font-semibold uppercase leading-[1.2] tracking-[calc(var(--u)*2px)] text-[#704631]">
                  {education.designation || education.occupation}
                </p>
              )}

              <div className="mt-[calc(var(--u)*6px)] flex flex-col items-center">
                <div className="relative border border-[#B8894F] bg-[#F8F0E1]/90 px-[calc(var(--u)*22px)] py-[calc(var(--u)*3px)] font-serif text-[calc(var(--u)*14px)] font-bold tracking-[calc(var(--u)*2px)] text-[#68422F]">
                  {clean(profile.biodataTitle) || "BIODATA"}
                </div>

                <img
                  src={`${ASSET_BASE}/top-divider-ornament.png`}
                  alt=""
                  aria-hidden="true"
                  className="mt-[calc(var(--u)*2px)] h-auto w-[calc(var(--u)*140px)] select-none"
                />
              </div>
            </div>

            {/* Photo */}
            {design.showPhoto ? (
              <Photo />
            ) : (
              <div className="w-[calc(var(--u)*120px)] shrink-0" />
            )}
          </div>
        </header>

        {/* PERSONAL */}
        <Section
          title={bilingualSection("व्यक्तिगत जानकारी", "Personal Details")}
          color="#B88745"
          icon="icon-personal.png"
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
            label={isMarathi ? "जन्मसमय" : "Birth Time"}
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
            value={religionCaste}
          />

          <Row label={isMarathi ? "गोत्र" : "Gotra"} value={personal.gotra} />

          <Row
            label={isMarathi ? "वैवाहिक स्थिती" : "Marital Status"}
            value={personal.maritalStatus}
          />
        </Section>

        {/* HOROSCOPE */}
        {design.showAstrology && (
          <Section
            title={bilingualSection("ज्योतिष माहिती", "Horoscope & Astrology")}
            color="#53665A"
            icon="icon-astrology.png"
          >
            <Row label={isMarathi ? "राशी" : "Rashi"} value={personal.rashi} />

            <Row
              label={isMarathi ? "नक्षत्र" : "Nakshatra"}
              value={personal.nakshatra}
            />

            <Row label={isMarathi ? "चरण" : "Charan"} value={personal.charan} />

            <Row label={isMarathi ? "गण" : "Gan"} value={personal.gan} />

            <Row label={isMarathi ? "नाडी" : "Nadi"} value={personal.nadi} />

            <Row
              label={isMarathi ? "मंगळ" : "Manglik"}
              value={personal.manglik}
            />
          </Section>
        )}

        {/* EDUCATION */}
        <Section
          title={bilingualSection("शिक्षण व नोकरी", "Education & Career")}
          color="#A8834C"
          icon="icon-education.png"
        >
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
            label={isMarathi ? "व्यवसाय / पद" : "Occupation / Role"}
            value={occupation}
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
            className="col-span-2"
            priority="skills"
            label={isMarathi ? "कौशल्ये" : "Skills"}
            value={education.skills}
          />

          <Row
            className="col-span-2"
            priority="languagesKnown"
            label={isMarathi ? "ज्ञात भाषा" : "Languages Known"}
            value={education.languagesKnown}
          />
        </Section>

        {/* EXPECTATIONS */}
        {design.showExpectations && (
          <Section
            title={bilingualSection("अपेक्षा", "Expectations")}
            color="#755C68"
            icon="icon-expectations.png"
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
              label={isMarathi ? "अपेक्षित शिक्षण" : "Education"}
              value={expectations.preferredEducation}
            />

            <Row
              label={isMarathi ? "अपेक्षित व्यवसाय" : "Occupation"}
              value={expectations.preferredOccupation}
            />

            <Row
              label={isMarathi ? "अपेक्षित ठिकाण" : "Location"}
              value={expectations.preferredLocation}
            />

            <Row
              label={isMarathi ? "वैवाहिक स्थिती" : "Marital Status"}
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
              className="col-span-2"
              priority="otherInformation"
              label={isMarathi ? "इतर माहिती" : "Other Information"}
              value={expectations.otherInformation}
            />

            <Row
              className="col-span-2"
              label={isMarathi ? "जोडीदार अपेक्षा" : "Partner Expectations"}
              value={expectations.partnerExpectations}
            />
          </Section>
        )}

        {/* FAMILY */}
        <Section
          title={bilingualSection("कौटुंबिक माहिती", "Family Details")}
          color="#A87842"
          icon="icon-family.png"
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
            label={isMarathi ? "विवाहित भाऊ" : "Married Brothers"}
            value={family.marriedBrothers}
          />

          <Row
            label={isMarathi ? "बहिणी" : "Sisters"}
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
            className="col-span-2"
            priority="relativeSurnames"
            label={isMarathi ? "नातेसंबंधातील आडनावे" : "Relative Surnames"}
            value={family.relativeSurnames}
          />
        </Section>

        {/* CONTACT */}
        <Section
          title={bilingualSection("संपर्क माहिती", "Contact Details")}
          color="#9B604C"
          icon="icon-contact.png"
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

          <Row label={isMarathi ? "ईमेल" : "Email"} value={contact.email} />

          <Row
            className="col-span-2"
            label={isMarathi ? "पत्ता" : "Address"}
            value={contact.residentialAddress}
          />
        </Section>

        {/* FOOTER */}
        <footer className="flex shrink-0 flex-col items-center pt-[calc(var(--u)*2px)]">
          <img
            src={`${ASSET_BASE}/divider-ornament.png`}
            alt=""
            aria-hidden="true"
            className="h-auto w-[calc(var(--u)*125px)] select-none"
          />

          <p className="mt-[calc(var(--u)*1px)] text-center font-serif text-[calc(var(--u)*9px)] font-semibold leading-[1.2] text-[#68422F]">
            || सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः ||
          </p>
        </footer>
      </div>
    </div>
  );
};
