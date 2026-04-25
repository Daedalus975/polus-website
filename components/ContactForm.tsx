"use client";
import { useState } from "react";
import { Button } from "./Button";
import { trackContactFormSubmit } from "@/lib/analytics";
import { getCheckboxLabels } from "@/lib/serviceData";

type FormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  industry: string;
  team_size: string;
  primary_need: string[];
  urgency: string;
  message: string;
  privacyConsent: boolean;
  honeypot: string;
};

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
    team_size: "",
    primary_need: [],
    urgency: "",
    message: "",
    privacyConsent: false,
    honeypot: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleCheckboxChange(value: string) {
    setFormData((prev) => ({
      ...prev,
      primary_need: prev.primary_need.includes(value)
        ? prev.primary_need.filter((v) => v !== value)
        : [...prev.primary_need, value]
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    
    // Honeypot check
    if (formData.honeypot) {
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setMessage(data.message || "Thanks! We'll reply within 1 business day.");
        
        // Track successful contact form submission
        trackContactFormSubmit({
          services: formData.primary_need,
          formLocation: 'contact_page',
          hasPhone: !!formData.phone
        });
        
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          industry: "",
          team_size: "",
          primary_need: [],
          urgency: "",
          message: "",
          privacyConsent: false,
          honeypot: ""
        });
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setMessage("Network error. Please check your connection and try again.");
    }
  }

  const needOptions = getCheckboxLabels();

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1.5">
            Name <span className="text-polus-gold">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={status === "loading"}
            className="w-full rounded-md border border-[rgba(177,227,199,0.28)] bg-polus-surface2 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[rgba(17,98,56,0.55)] disabled:opacity-50"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1.5">
            Email <span className="text-polus-gold">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={status === "loading"}
            className="w-full rounded-md border border-[rgba(177,227,199,0.28)] bg-polus-surface2 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[rgba(17,98,56,0.55)] disabled:opacity-50"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-1.5">
            Phone <span className="text-[rgba(254,255,255,0.65)] text-xs">(optional)</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            disabled={status === "loading"}
            placeholder="(555) 123-4567"
            className="w-full rounded-md border border-[rgba(177,227,199,0.28)] bg-polus-surface2 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[rgba(17,98,56,0.55)] disabled:opacity-50"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium mb-1.5">
            Company <span className="text-polus-gold">*</span>
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
            disabled={status === "loading"}
            className="w-full rounded-md border border-[rgba(177,227,199,0.28)] bg-polus-surface2 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[rgba(17,98,56,0.55)] disabled:opacity-50"
          />
        </div>

        <div>
          <label htmlFor="industry" className="block text-sm font-medium mb-1.5">
            Industry
          </label>
          <select
            id="industry"
            name="industry"
            value={formData.industry}
            onChange={handleChange}
            disabled={status === "loading"}
            className="w-full rounded-md border border-[rgba(177,227,199,0.28)] bg-polus-surface2 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[rgba(17,98,56,0.55)] disabled:opacity-50"
          >
            <option value="">Select one...</option>
            <option value="construction">Construction</option>
            <option value="nonprofit">Nonprofit</option>
            <option value="startup">Startup / Tech</option>
            <option value="professional_services">Professional Services</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="team_size" className="block text-sm font-medium mb-1.5">
            Team Size
          </label>
          <select
            id="team_size"
            name="team_size"
            value={formData.team_size}
            onChange={handleChange}
            disabled={status === "loading"}
            className="w-full rounded-md border border-[rgba(177,227,199,0.28)] bg-polus-surface2 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[rgba(17,98,56,0.55)] disabled:opacity-50"
          >
            <option value="">Select one...</option>
            <option value="1-10">1-10 people</option>
            <option value="11-50">11-50 people</option>
            <option value="51-200">51-200 people</option>
            <option value="200+">200+ people</option>
          </select>
        </div>

        <div>
          <label htmlFor="urgency" className="block text-sm font-medium mb-1.5">
            Timeline
          </label>
          <select
            id="urgency"
            name="urgency"
            value={formData.urgency}
            onChange={handleChange}
            disabled={status === "loading"}
            className="w-full rounded-md border border-[rgba(177,227,199,0.28)] bg-polus-surface2 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[rgba(17,98,56,0.55)] disabled:opacity-50"
          >
            <option value="">Select one...</option>
            <option value="urgent">Urgent (within 2 weeks)</option>
            <option value="soon">Soon (1-2 months)</option>
            <option value="planning">Planning (exploring options)</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Primary Needs (select all that apply)</label>
        <div className="grid md:grid-cols-2 gap-2">
          {needOptions.map((option) => (
            <label key={option} className="flex items-center gap-3 text-sm cursor-pointer p-3 rounded-lg hover:bg-polus-surface2/50 transition">
              <input
                type="checkbox"
                checked={formData.primary_need.includes(option)}
                onChange={() => handleCheckboxChange(option)}
                disabled={status === "loading"}
                className="w-5 h-5 rounded border-[rgba(177,227,199,0.28)] bg-polus-surface2 text-polus-emerald focus:ring-2 focus:ring-[rgba(17,98,56,0.55)] disabled:opacity-50"
              />
              <span className="text-[rgba(254,255,255,0.78)] leading-relaxed">{option}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1.5">
          Message <span className="text-polus-gold">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          minLength={20}
          rows={5}
          disabled={status === "loading"}
          placeholder="Tell us what you need help with..."
          className="w-full rounded-md border border-[rgba(177,227,199,0.28)] bg-polus-surface2 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[rgba(17,98,56,0.55)] disabled:opacity-50 resize-none"
        />
        <p className="mt-1 text-xs text-[rgba(254,255,255,0.62)]">Minimum 20 characters</p>
      </div>

      {/* Privacy Consent */}
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="privacyConsent"
          checked={formData.privacyConsent}
          onChange={(e) => setFormData(prev => ({ ...prev, privacyConsent: e.target.checked }))}
          required
          className="mt-1 w-4 h-4 rounded border-polus-mint/30 bg-polus-surface2 text-polus-gold focus:ring-2 focus:ring-polus-emerald/55"
        />
        <label htmlFor="privacyConsent" className="text-sm text-[rgba(254,255,255,0.78)] leading-relaxed">
          I agree to the{" "}
          <a href="/privacy" target="_blank" className="text-polus-mint hover:text-polus-gold underline">
            Privacy Policy
          </a>{" "}
          and understand my information will be used to respond to my inquiry. <span className="text-polus-gold">*</span>
        </label>
      </div>

      {/* Honeypot field - hidden from real users */}
      <input
        type="text"
        name="honeypot"
        value={formData.honeypot}
        onChange={handleChange}
        tabIndex={-1}
        autoComplete="off"
        className="absolute opacity-0 pointer-events-none"
        aria-hidden="true"
      />

      <Button type="submit" variant="primary" disabled={status === "loading" || !formData.privacyConsent} className="w-full md:w-auto">
        {status === "loading" ? "Sending..." : "Send Message"}
      </Button>

      {message && (
        <div
          className={[
            "text-sm p-4 rounded-md",
            status === "success" ? "bg-polus-emerald/20 text-polus-mint" : "bg-red-900/20 text-red-300"
          ].join(" ")}
        >
          {message}
        </div>
      )}
    </form>
  );
}
