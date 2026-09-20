import React from "react";
import { LegalLayout } from "@/components/common/LegalLayout";

export default function DisclaimerPage() {
  return (
    <LegalLayout
      title="Matrimonial Disclaimer"
      marathiTitle="माहिती अस्वीकरण (Disclaimer)"
      lastUpdated="August 2026"
    >
      <section className="space-y-2">
        <h2 className="text-base font-bold text-wine-950">1. Verification of Matrimonial Credentials</h2>
        <p>
          VivahPatrika provides self-service document design software. We do not authenticate, independently verify, or certify the accuracy, legitimacy, or truthfulness of any user-entered details, including educational degrees, income claims, employment titles, astrological details, or criminal backgrounds.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-base font-bold text-wine-950">2. Due Diligence by Prospective Families</h2>
        <p>
          Recipients of marriage biodatas created on this platform are strongly advised to perform independent due diligence, family background verification, and formal reference checks before finalizing any marital alliance.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-base font-bold text-wine-950">3. Astrological Computations</h2>
        <p>
          Astrological and horoscope parameters (such as Rashi, Nakshatra, Charan, Gan, Nadi, and Manglik status) displayed on biodatas are purely based on user inputs. Users seeking traditional Kundali matching should consult certified astrologers or verified horoscopic ephemeris charts.
        </p>
      </section>
    </LegalLayout>
  );
}
