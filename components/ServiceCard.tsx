import Link from "next/link";
import { track } from "@/lib/track";

type ServiceCardProps = {
  title: string;
  description: string;
  slug: string;
  icon?: React.ReactNode;
  tag?: string;
};

export function ServiceCard({ title, description, slug, icon, tag }: ServiceCardProps) {
  return (
    <Link
      href={`/services/${slug}`}
      onClick={() => track("service_card_clicked", { service: title, slug, tag })}
      className="group rounded-lg border border-[rgba(177,227,199,0.16)] bg-polus-surface1 shadow-card p-6 transition hover:-translate-y-1 hover:border-[rgba(177,227,199,0.28)] hover:shadow-cardHover"
    >
      {tag && (
        <div className="inline-block mb-3 px-3 py-1 text-xs font-semibold rounded-full bg-polus-gold/20 text-polus-gold border border-polus-gold/30">
          {tag}
        </div>
      )}
      {icon && <div className="text-polus-mint mb-4">{icon}</div>}
      <h3 className="font-semibold text-lg group-hover:text-polus-mint transition">{title}</h3>
      <p className="mt-2 text-sm text-[rgba(254,255,255,0.78)] leading-relaxed">{description}</p>
      <div className="mt-4 text-sm text-polus-mint flex items-center gap-1 group-hover:gap-2 transition-all">
        Learn more
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  );
}
