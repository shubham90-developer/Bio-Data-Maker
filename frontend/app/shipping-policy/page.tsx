import React from "react";
import { LegalLayout } from "@/components/common/LegalLayout";

export default function ShippingPolicyPage() {
  return (
    <LegalLayout
      title="Digital Delivery & Shipping Policy"
      marathiTitle="डिजिटल वितरण आणि डिलिव्हरी धोरण"
      lastUpdated="August 2026"
    >
      <section className="space-y-2">
        <h2 className="text-base font-bold text-wine-950">1. Instant Electronic Delivery</h2>
        <p>
          VivahPatrika provides purely digital services. <strong>No physical paper goods, envelopes, or printed postal cards are dispatched to residential addresses.</strong>
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-base font-bold text-wine-950">2. Delivery Timeframe</h2>
        <p>
          All generated files—including HD Images (JPG/PNG), print-ready PDFs, and Word documents (.docx)—are rendered and delivered immediately in your web browser via instant direct download upon purchase completion. Delivery time is instantaneous (under 5 seconds).
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-base font-bold text-wine-950">3. Re-download Access</h2>
        <p>
          Your session draft is preserved in your device's local browser memory, enabling you to re-download or review your created biodata without delay.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-base font-bold text-wine-950">4. Physical Printing Recommendations</h2>
        <p>
          To print your downloaded vector PDF, you can use any home color printer or visit a local digital print studio. We recommend standard <strong>A4 size (210 x 297 mm)</strong> paper on 120–180 GSM natural white or ivory bond paper for optimal elegance.
        </p>
      </section>
    </LegalLayout>
  );
}
