"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Variant = "primary" | "secondary" | "link";

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  type,
  disabled,
  trackEvent
}: {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  trackEvent?: { name: string; params?: Record<string, any> };
}) {
  const router = useRouter();
  
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
  
  // For links with tracking or onClick: use a button that navigates
  if (href && (trackEvent || onClick)) {
    const handleClick = (e: React.MouseEvent) => {
      e.preventDefault();
      
      if (trackEvent && typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', trackEvent.name, trackEvent.params);
        console.log('[GA4 Event]', trackEvent.name, trackEvent.params);
      }
      
      if (onClick) {
        onClick();
      }
      
      // Navigate after tracking
      router.push(href);
    };

    return (
      <a 
        href={href}
        className={cls}
        onClick={handleClick}
      >
        {children}
      </a>
    );
  }
  
  // For simple links without tracking: use Next.js Link
  if (href) {
    return (
      <Link className={cls} href={href}>
        {children}
      </Link>
    );
  }
  
  // For buttons: create handler only if needed
  const handleClick = (trackEvent || onClick) ? () => {
    if (trackEvent && typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', trackEvent.name, trackEvent.params);
      console.log('[GA4 Event]', trackEvent.name, trackEvent.params);
    }
    if (onClick) {
      onClick();
    }
  } : undefined;

  return (
    <button 
      className={cls} 
      type={type || "button"} 
      onClick={handleClick} 
      disabled={disabled}
    >
      {children}
    </button>
  );
}
