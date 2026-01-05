import { Button } from "./Button";
import { track } from "@/lib/track";

type PricingCardProps = {
  title: string;
  description: string;
  price: string;
  features?: string[];
  cta?: string;
  ctaHref?: string;
  highlighted?: boolean;
};

export function PricingCard({
  title,
  description,
  price,
  features,
  cta = "Get Started",
  ctaHref = "/contact",
  highlighted = false
}: PricingCardProps) {
  return (
    <div
      className={[
        "rounded-lg border p-6 transition hover:-translate-y-1",
        highlighted
          ? "border-polus-gold bg-gradient-to-b from-polus-surface2 to-polus-surface1 shadow-cardHover"
          : "border-[rgba(177,227,199,0.16)] bg-polus-surface1 shadow-card"
      ].join(" ")}
    >
      <div className="font-semibold text-lg">{title}</div>
      <div className="mt-2 text-sm text-[rgba(254,255,255,0.78)] leading-relaxed">{description}</div>
      <div className="mt-6">
        <span className="text-3xl font-semibold">{price}</span>
        {price.includes("$") && <span className="text-[rgba(254,255,255,0.62)] text-sm ml-1">starting at</span>}
      </div>
      {features && features.length > 0 && (
        <ul className="mt-6 space-y-2 text-sm">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <svg className="w-5 h-5 text-polus-mint flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-[rgba(254,255,255,0.78)]">{feature}</span>
            </li>
          ))}
        </ul>
      )}
      <div className="mt-6">
        <Button
          href={ctaHref}
          variant={highlighted ? "primary" : "secondary"}
          className="w-full"
          onClick={() => track("cta_pricing_click", { package: title })}
        >
          {cta}
        </Button>
      </div>
    </div>
  );
}
