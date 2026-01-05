import Link from "next/link";

type Variant = "primary" | "secondary" | "link";

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  type,
  disabled
}: {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}) {
  const base =
    "inline-flex items-center justify-center px-4 py-2 text-sm font-medium transition focus:outline-none focus-visible:ring-4 disabled:opacity-50 disabled:cursor-not-allowed";
  const styles: Record<Variant, string> = {
    primary:
      "bg-polus-emerald text-polus-paper hover:bg-polus-gold hover:text-polus-forest focus-visible:ring-polus-mint/40 focus-visible:ring-4",
    secondary:
      "border-2 border-polus-gold text-polus-gold bg-transparent hover:bg-polus-gold/10 focus-visible:ring-polus-gold/40 focus-visible:ring-4",
    link: "text-polus-mint hover:text-polus-gold px-0 py-0"
  };

  const cls = `${base} ${styles[variant]} ${className}`.trim();

  if (href) return <Link className={cls} href={href}>{children}</Link>;
  return <button className={cls} type={type || "button"} onClick={onClick} disabled={disabled}>{children}</button>;
}
