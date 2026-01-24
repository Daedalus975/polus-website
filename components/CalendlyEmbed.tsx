"use client";

import { useEffect } from "react";

type CalendlyEmbedProps = {
  url: string;
  minHeight?: string;
};

export function CalendlyEmbed({ url, minHeight = "1000px" }: CalendlyEmbedProps) {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div
      className="calendly-inline-widget"
      data-url={url}
      style={{ minWidth: "320px", height: minHeight }}
    />
  );
}
