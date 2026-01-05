type ImagePlaceholderProps = {
  className?: string;
  aspectRatio?: "square" | "video" | "portrait" | "wide";
  children?: React.ReactNode;
};

export function ImagePlaceholder({ 
  className = "", 
  aspectRatio = "video",
  children 
}: ImagePlaceholderProps) {
  const ratios = {
    square: "aspect-square",
    video: "aspect-video",
    portrait: "aspect-[3/4]",
    wide: "aspect-[21/9]"
  };

  return (
    <div 
      className={`relative ${ratios[aspectRatio]} bg-gradient-to-br from-polus-emerald/10 to-polus-forest/40 rounded-lg border border-[rgba(177,227,199,0.12)] overflow-hidden ${className}`}
      role="img"
      aria-label="Image placeholder"
    >
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        aria-hidden="true"
        style={{
          backgroundImage: `linear-gradient(rgba(177, 227, 199, 0.2) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(177, 227, 199, 0.2) 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }}
      />
      
      {/* Center icon or content */}
      <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
        {children || (
          <svg className="w-16 h-16 text-polus-mint/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        )}
      </div>
    </div>
  );
}
