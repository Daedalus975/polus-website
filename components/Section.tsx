export function Section({
  title,
  eyebrow,
  children,
  className = ""
}: {
  title?: string;
  eyebrow?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={["mx-auto max-w-6xl px-4 md:px-6 py-14 md:py-20", className].join(" ")}>
      {(eyebrow || title) && (
        <header className="mb-8">
          {eyebrow && <p className="text-sm text-polus-gold uppercase tracking-wider font-semibold">{eyebrow}</p>}
          {title && <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-polus-paper">{title}</h2>}
        </header>
      )}
      {children}
    </section>
  );
}
