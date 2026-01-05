"use client";
import { useState } from "react";
import { Button } from "./Button";
import { track } from "@/lib/track";

type LeadMagnetFormProps = {
  leadMagnetLabel?: string;
};

export function LeadMagnetForm({ leadMagnetLabel = "Operations Checklist" }: LeadMagnetFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/lead-magnet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, leadMagnetLabel })
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setMessage(data.message || "Check your email for the download link!");
        setEmail("");
        track("lead_magnet_download", { email, leadMagnetLabel });
        
        // If download URL provided, open it
        if (data.downloadUrl) {
          window.open(data.downloadUrl, "_blank");
        }
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setMessage("Network error. Please check your connection and try again.");
    }
  }

  return (
    <div className="rounded-lg border border-[rgba(177,227,199,0.16)] bg-polus-surface1 shadow-card p-6">
      <h3 className="font-semibold text-lg">Get the {leadMagnetLabel}</h3>
      <p className="mt-2 text-sm text-[rgba(254,255,255,0.78)]">One page. Practical. Straight to the point.</p>
      
      <form onSubmit={handleSubmit} className="mt-4 space-y-3">
        <input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={status === "loading"}
          className="w-full rounded-md border border-[rgba(177,227,199,0.28)] bg-polus-surface2 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[rgba(17,98,56,0.55)] disabled:opacity-50"
        />
        <Button type="submit" variant="primary" className="w-full" disabled={status === "loading"}>
          {status === "loading" ? "Sending..." : "Send me the checklist"}
        </Button>
      </form>

      {message && (
        <div
          className={[
            "mt-3 text-sm p-3 rounded-md",
            status === "success" ? "bg-polus-emerald/20 text-polus-mint" : "bg-red-900/20 text-red-300"
          ].join(" ")}
        >
          {message}
        </div>
      )}
    </div>
  );
}
