import React from "react";
import { LegalLayout } from "@/components/common/LegalLayout";

export default function RefundPolicyPage() {
  return (
    <LegalLayout
      title="Refund & Cancellation Policy"
      marathiTitle="परतावा आणि रद्द करण्याचे धोरण"
      lastUpdated="August 2026"
    >
      <section className="space-y-2">
        <h2 className="text-base font-bold text-wine-950">1. Digital Nature of Products</h2>
        <p>
          VivahPatrika offers non-tangible, irrevocable digital goods, specifically high-resolution image rendering (JPG/PNG), print-ready vector PDF generation, and editable Word documents (.docx). Because these files are delivered digitally immediately upon download confirmation, our refund policies are outlined below.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-base font-bold text-wine-950">2. Free Preview Guarantee</h2>
        <p>
          We provide an unrestricted, full-screen live preview of every template prior to any download decision. Users are strongly encouraged to inspect typography, Marathi spellings, and image cropping thoroughly before completing any checkout.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-base font-bold text-wine-950">3. Eligible Refund Scenarios</h2>
        <p>
          Refund requests are honored under the following circumstances:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Duplicate payment caused by a temporary payment gateway or browser network error.</li>
          <li>System defect preventing the download of the purchased file despite successful payment verification.</li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="text-base font-bold text-wine-950">4. How to Request Assistance</h2>
        <p>
          If you encounter any difficulty with your download, contact our support desk at <strong>support@vivahpatrika.online</strong> with your transaction reference number. We resolve digital delivery inquiries promptly.
        </p>
      </section>
    </LegalLayout>
  );
}
