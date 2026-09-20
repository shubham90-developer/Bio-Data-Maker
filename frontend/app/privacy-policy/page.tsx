import React from "react";
import { LegalLayout } from "@/components/common/LegalLayout";

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      marathiTitle="गोपनीयता धोरण"
      lastUpdated="August 2026"
    >
      <section className="space-y-2">
        <h2 className="text-base font-bold text-wine-950">1. Commitment to User Privacy</h2>
        <p>
          At विवाहपत्रिका (VivahPatrika), we recognize that marriage biodatas contain sensitive personal, astrological, and family information. We are committed to safeguarding this information through strict data segregation and client-side processing policies.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-base font-bold text-wine-950">2. Information Handled</h2>
        <p>
          The information you provide while constructing your matrimonial biodata—including full names, dates of birth, astrological data, photograph, educational qualifications, employment metrics, and family surnames—is processed locally within your browser's private storage (localStorage).
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-base font-bold text-wine-950">3. Non-Sale of Matrimonial Data</h2>
        <p>
          We uphold an unambiguous policy: <strong>We do not sell, rent, trade, or distribute your biodata details to third-party telemarketers, dating agencies, or matrimonial brokers.</strong> Your draft belongs exclusively to you and remains on your device.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-base font-bold text-wine-950">4. Photographs and Image Data</h2>
        <p>
          Candidate photographs uploaded via our photo cropping tool are processed strictly on the client-side utilizing HTML5 FileReader APIs. Images are never submitted to public facial recognition databases.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-base font-bold text-wine-950">5. Cookies and Local Storage</h2>
        <p>
          We use browser localStorage solely to ensure that you do not lose your draft if you accidentally close your tab or navigate across our template gallery. You can purge this data at any moment using the "Reset" button inside the builder.
        </p>
      </section>
    </LegalLayout>
  );
}
