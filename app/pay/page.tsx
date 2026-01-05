import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { track } from "@/lib/track";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pay Invoice or Deposit — Polus LLC",
  description: "Guest checkout supported. No login required. Pay securely via Stripe."
};

export default function PayPage() {
  const depositUrl = process.env.NEXT_PUBLIC_STRIPE_DEPOSIT_URL;
  const invoiceUrl = process.env.NEXT_PUBLIC_STRIPE_INVOICE_URL;

  return (
    <Section title="Pay an invoice or deposit" className="pt-20 md:pt-24">
      <div className="max-w-4xl mx-auto">
        <p className="text-lg text-[rgba(254,255,255,0.78)] leading-relaxed mb-10 text-center">
          Guest checkout supported. No login required.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <Card>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-polus-emerald/20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-polus-mint" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Pay Deposit</h3>
              <p className="text-sm text-[rgba(254,255,255,0.78)] mb-5">
                Secure your project start date with a deposit payment.
              </p>
              {depositUrl ? (
                <Button
                  href={depositUrl}
                  variant="primary"
                  className="w-full"
                  onClick={() => track("pay_link_click", { type: "deposit" })}
                >
                  Pay Deposit
                </Button>
              ) : (
                <p className="text-sm text-[rgba(254,255,255,0.62)]">
                  Contact us for payment link
                </p>
              )}
            </div>
          </Card>

          <Card>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-polus-emerald/20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-polus-mint" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Pay Invoice</h3>
              <p className="text-sm text-[rgba(254,255,255,0.78)] mb-5">
                Pay your project invoice or statement balance.
              </p>
              {invoiceUrl ? (
                <Button
                  href={invoiceUrl}
                  variant="primary"
                  className="w-full"
                  onClick={() => track("pay_link_click", { type: "invoice" })}
                >
                  Pay Invoice
                </Button>
              ) : (
                <p className="text-sm text-[rgba(254,255,255,0.62)]">
                  Contact us for payment link
                </p>
              )}
            </div>
          </Card>
        </div>

        <div className="text-center">
          <p className="text-sm text-[rgba(254,255,255,0.62)] mb-4">
            All payments are processed securely through Stripe.
          </p>
          <p className="text-sm text-[rgba(254,255,255,0.62)]">
            Questions? <a href="/contact" className="text-polus-mint hover:text-polus-gold underline">Contact us</a>
          </p>
        </div>
      </div>
    </Section>
  );
}
