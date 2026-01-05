export function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={[
        "border border-polus-mint/20 bg-[#1A1F1E] shadow-card p-5 transition",
        "hover:-translate-y-[2px] hover:border-polus-mint/35",
        className
      ].join(" ")}
    >
      {children}
    </div>
  );
}
