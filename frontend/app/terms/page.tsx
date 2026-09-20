import React from "react";
import { LegalLayout } from "@/components/common/LegalLayout";

export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms of Service"
      marathiTitle="सेवा अटी व शर्ती"
      lastUpdated="August 2026"
    >
      <section className="space-y-2">
        <h2 className="text-base font-bold text-wine-950">1. Acceptance of Terms</h2>
        <p>
          By accessing or utilizing विवाहपत्रिका (VivahPatrika), you confirm that you have read, understood, and agreed to adhere to these Terms of Service. If you do not agree, please discontinue use of the application.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-base font-bold text-wine-950">2. Intended Purpose</h2>
        <p>
          VivahPatrika provides digital document design templates and typesetting utilities for Indian and Maharashtrian matrimonial biodatas. It is a design tool and does not function as a matchmaking brokerage, matrimonial bureau, or background investigation agency.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-base font-bold text-wine-950">3. User Responsibility for Accuracy</h2>
        <p>
          Users are solely responsible for ensuring that all details entered into their biodatas (including educational credentials, marital status, income statements, and family information) are truthful and genuine. Misrepresentation of facts in matrimonial documents is strictly prohibited.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-base font-bold text-wine-950">4. Intellectual Property</h2>
        <p>
          The original template layouts, decorative SVG borders, styling, and design architectures provided on VivahPatrika are protected under copyright and intellectual property standards. Users are granted a personal license to download and distribute their generated biodatas for genuine matchmaking purposes.
        </p>
      </section>
    </LegalLayout>
  );
}
