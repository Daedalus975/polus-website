"use client";
import { useState } from "react";
import { Button } from "./Button";
import { Card } from "./Card";
import { trackQuoteFormSubmit } from "@/lib/analytics";
import { track } from "@/lib/track";
import { getCheckboxLabels, mapServiceSlugToCheckboxLabel } from "@/lib/serviceData";

type Step1Data = {
  primary_need: string[];
  urgency: string;
  team_size: string;
  industry: string;
};

type Step2Data = {
  name: string;
  email: string;
  phone: string;
  message: string;
  privacyConsent: boolean;
  honeypot: string;
};

type FormData = Step1Data & Step2Data;

type PrefillData = {
  service?: string;
  service_title?: string;
  confidence?: string;
  top_services?: string;
  service_scores?: string;
  industry?: string;
  team_size?: string;
  urgency?: string;
  budget?: string;
  primary_pain?: string;
  m365_status?: string;
  it_support?: string;
  documentation_state?: string;
  backup_confidence?: string;
  outcome?: string;
};

function buildPrefilledMessage(data: PrefillData): string {
  if (!data.service_title) return "";
  
  const lines: string[] = [
    `I completed the Polus assessment and received a recommendation for: ${data.service_title}`,
    ""
  ];
  
  if (data.confidence) {
    lines.push(`Match confidence: ${data.confidence}%`);
    lines.push("");
  }
  
  lines.push("MY SITUATION:");
  
  if (data.primary_pain) {
    const painLabels: Record<string, string> = {
      no_docs: "Nothing is documented—everything lives in people's heads",
      scattered: "Can't find files, emails get lost, info is scattered",
      data_risk: "Worried about losing critical data or having major downtime",
      onboarding_slow: "Onboarding new people takes too long and is inconsistent",
      it_fires: "IT problems constantly interrupt work",
      build_something: "Need to build a new product or website",
      unclear: "Not sure what the problem is—things just aren't working"
    };
    lines.push(`Primary challenge: ${painLabels[data.primary_pain] || data.primary_pain}`);
  }
  
  if (data.outcome) {
    const outcomeLabels: Record<string, string> = {
      clarity: "Everyone knows where to find documents and how to do their job",
      fast_onboarding: "New hires ramp up quickly",
      data_safe: "Data is safe and we can recover from disasters",
      stable_it: "IT problems don't interrupt work",
      roadmap: "Clear roadmap for what to fix",
      launch: "Launch product/website and get customers"
    };
    lines.push(`Desired outcome: ${outcomeLabels[data.outcome] || data.outcome}`);
  }
  
  if (data.budget) {
    const budgetLabels: Record<string, string> = {
      low: "Under $1,500",
      mid: "$1,500 - $3,000",
      mid_high: "$3,000 - $7,000",
      high: "$7,000 - $15,000",
      enterprise: "$15,000+",
      unsure: "Not sure yet"
    };
    lines.push(`Budget: ${budgetLabels[data.budget] || data.budget}`);
  }
  
  if (data.m365_status) {
    const m365Labels: Record<string, string> = {
      messy: "Using M365 but it's a mess",
      organized: "Using M365 and it's mostly organized",
      underutilized: "Have M365 but barely use it",
      google: "Using Google Workspace/AWS/Other",
      none: "Not using any web service"
    };
    lines.push(`Current tools: ${m365Labels[data.m365_status] || data.m365_status}`);
  }
  
  if (data.it_support) {
    const supportLabels: Record<string, string> = {
      none: "No IT support currently",
      bad_support: "Have IT support but overwhelmed/not responsive",
      good_support: "Have good IT support"
    };
    lines.push(`IT support: ${supportLabels[data.it_support] || data.it_support}`);
  }
  
  if (data.documentation_state) {
    const docLabels: Record<string, string> = {
      none: "Almost nothing documented",
      partial: "Some docs but outdated/incomplete",
      exists_messy: "Docs exist but need organization"
    };
    lines.push(`Documentation: ${docLabels[data.documentation_state] || data.documentation_state}`);
  }
  
  if (data.backup_confidence) {
    const backupLabels: Record<string, string> = {
      no: "Cannot confidently recover from data loss",
      maybe: "Probably could recover but not confident",
      yes: "Have tested backups and can recover"
    };
    lines.push(`Backup status: ${backupLabels[data.backup_confidence] || data.backup_confidence}`);
  }
  
  lines.push("");
  lines.push("Please send me a detailed quote for this service.");
  
  return lines.join("\n");
}

export function QuoteForm({ prefillData }: { prefillData?: PrefillData }) {
  const topServiceSlugs = prefillData?.top_services?.split(',').filter(Boolean) || [];
  const primaryNeedCheckboxes = topServiceSlugs.map(slug => mapServiceSlugToCheckboxLabel(slug));
  
  const [step, setStep] = useState<1 | 2>(1);
  const [formData, setFormData] = useState<FormData>({
    primary_need: primaryNeedCheckboxes,
    urgency: prefillData?.urgency || "",
    team_size: prefillData?.team_size || "",
    industry: prefillData?.industry || "",
    name: "",
    email: "",
    phone: "",
    message: buildPrefilledMessage(prefillData || {}),
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

  function handleStep1Next(e: React.FormEvent) {
    e.preventDefault();
    
    // Validate step 1
    if (formData.primary_need.length === 0 || !formData.urgency || !formData.team_size || !formData.industry) {
      setMessage("Please complete all fields before continuing.");
      return;
    }
    
    track("quote_step1_complete", {
      primary_need: formData.primary_need.join(", "),
      urgency: formData.urgency,
      team_size: formData.team_size,
      industry: formData.industry
    });
    
    setStep(2);
    setMessage("");
  }

  async function handleStep2Submit(e: React.FormEvent) {
    e.preventDefault();
    
    // Honeypot check
    if (formData.honeypot) {
      return;
    }

    // Validate step 2
    if (!formData.name || !formData.email) {
      setMessage("Please enter your name and email.");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          form_type: "quote"
        })
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setMessage(data.message || "Thanks! We'll send you a quote within 1 business day.");
        
        // Track successful quote form submission
        trackQuoteFormSubmit({
          services: formData.primary_need,
          budget: formData.team_size, // team_size used as proxy for budget range
          timeline: formData.urgency
        });
        
        // Reset form
        setFormData({
          primary_need: [],
          urgency: "",
          team_size: "",
          industry: "",
          name: "",
          email: "",
          phone: "",
          message: "",
          privacyConsent: false,
          honeypot: ""
        });
        setStep(1);
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

  if (status === "success") {
    return (
      <Card className="p-8 text-center">
        <div className="w-16 h-16 rounded-full bg-polus-emerald/20 flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-polus-mint" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-semibold mb-4">Quote Request Received</h3>
        <p className="text-[rgba(254,255,255,0.78)] mb-6">
          {message}
        </p>
        <Button onClick={() => { setStatus("idle"); setStep(1); }} variant="primary">
          Submit Another Quote Request
        </Button>
      </Card>
    );
  }

  return (
    <div>
      {/* Progress Indicator */}
      <div className="flex items-center justify-center mb-8">
        <div className="flex items-center gap-2">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
            step === 1 ? "bg-polus-gold text-polus-forest" : "bg-polus-emerald/20 text-polus-mint"
          }`}>
            1
          </div>
          <div className="w-12 h-0.5 bg-polus-emerald/20" />
          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
            step === 2 ? "bg-polus-gold text-polus-forest" : "bg-polus-emerald/20 text-polus-mint/50"
          }`}>
            2
          </div>
        </div>
      </div>

      {step === 1 && (
        <form onSubmit={handleStep1Next}>
          <Card className="p-6 md:p-8">
            <h3 className="text-xl font-semibold mb-6">Step 1: Tell us about your needs</h3>
            
            {/* Primary Need - Checkboxes */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-3">
                What do you need help with? <span className="text-polus-mint">(select all that apply)</span>
              </label>
              <div className="grid md:grid-cols-2 gap-3">
                {needOptions.map((option) => (
                  <label key={option} className="flex items-start gap-3 cursor-pointer group p-3 rounded-lg hover:bg-polus-surface2/50 transition">
                    <input
                      type="checkbox"
                      checked={formData.primary_need.includes(option)}
                      onChange={() => handleCheckboxChange(option)}
                      className="mt-0.5 w-5 h-5 rounded border-polus-mint/30 bg-polus-surface2 text-polus-emerald focus:ring-polus-emerald/55 focus:ring-offset-0"
                    />
                    <span className="text-sm text-[rgba(254,255,255,0.78)] group-hover:text-polus-paper leading-relaxed">
                      {option}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Urgency */}
            <div className="mb-6">
              <label htmlFor="urgency" className="block text-sm font-medium mb-2">
                Timeline <span className="text-polus-mint">*</span>
              </label>
              <select
                id="urgency"
                name="urgency"
                value={formData.urgency}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-polus-surface2 border border-polus-mint/30 text-polus-paper focus:outline-none focus:border-polus-mint focus:ring-2 focus:ring-polus-emerald/55"
              >
                <option value="">Select timeline</option>
                <option value="urgent">Urgent (need to start within 2 weeks)</option>
                <option value="soon">Soon (within 1 month)</option>
                <option value="planning">Planning (1-3 months out)</option>
                <option value="exploring">Just exploring options</option>
              </select>
            </div>

            {/* Team Size */}
            <div className="mb-6">
              <label htmlFor="team_size" className="block text-sm font-medium mb-2">
                Team Size <span className="text-polus-mint">*</span>
              </label>
              <select
                id="team_size"
                name="team_size"
                value={formData.team_size}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-polus-surface2 border border-polus-mint/30 text-polus-paper focus:outline-none focus:border-polus-mint focus:ring-2 focus:ring-polus-emerald/55"
              >
                <option value="">Select team size</option>
                <option value="1-5">1-5 employees</option>
                <option value="6-15">6-15 employees</option>
                <option value="16-30">16-30 employees</option>
                <option value="31-50">31-50 employees</option>
                <option value="51+">51+ employees</option>
              </select>
            </div>

            {/* Industry */}
            <div className="mb-6">
              <label htmlFor="industry" className="block text-sm font-medium mb-2">
                Industry <span className="text-polus-mint">*</span>
              </label>
              <select
                id="industry"
                name="industry"
                value={formData.industry}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-polus-surface2 border border-polus-mint/30 text-polus-paper focus:outline-none focus:border-polus-mint focus:ring-2 focus:ring-polus-emerald/55"
              >
                <option value="">Select industry</option>
                <option value="construction">Construction / Trades</option>
                <option value="nonprofit">Nonprofit / Association</option>
                <option value="startup">Startup / Technology</option>
                <option value="professional-services">Professional Services</option>
                <option value="healthcare">Healthcare</option>
                <option value="retail">Retail / E-commerce</option>
                <option value="manufacturing">Manufacturing</option>
                <option value="other">Other</option>
              </select>
            </div>

            {message && (
              <div className="mb-6 p-4 rounded-lg bg-polus-mint/10 border border-polus-mint/30 text-sm text-polus-paper">
                {message}
              </div>
            )}

            <div className="flex justify-center">
              <Button type="submit" variant="secondary" className="w-1/3 min-w-fit">
                Continue to Step 2 →
              </Button>
            </div>
          </Card>
        </form>
      )}

      {step === 2 && (
        <form onSubmit={handleStep2Submit}>
          <Card className="p-6 md:p-8">
            <h3 className="text-xl font-semibold mb-6">Step 2: Your contact information</h3>
            
            {/* Name */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name <span className="text-polus-mint">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-polus-surface2 border border-polus-mint/30 text-polus-paper placeholder:text-[rgba(254,255,255,0.45)] focus:outline-none focus:border-polus-mint focus:ring-2 focus:ring-polus-emerald/55"
                placeholder="Your name"
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email <span className="text-polus-mint">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-polus-surface2 border border-polus-mint/30 text-polus-paper placeholder:text-[rgba(254,255,255,0.45)] focus:outline-none focus:border-polus-mint focus:ring-2 focus:ring-polus-emerald/55"
                placeholder="you@company.com"
              />
            </div>

            {/* Phone */}
            <div className="mb-4">
              <label htmlFor="phone" className="block text-sm font-medium mb-2">
                Phone <span className="text-[rgba(254,255,255,0.45)] text-xs">(optional)</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-polus-surface2 border border-polus-mint/30 text-polus-paper placeholder:text-[rgba(254,255,255,0.45)] focus:outline-none focus:border-polus-mint focus:ring-2 focus:ring-polus-emerald/55"
                placeholder="(555) 123-4567"
              />
            </div>

            {/* Message */}
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Additional details <span className="text-[rgba(254,255,255,0.55)]">(optional)</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-polus-surface2 border border-polus-mint/30 text-polus-paper placeholder:text-[rgba(254,255,255,0.45)] focus:outline-none focus:border-polus-mint focus:ring-2 focus:ring-polus-emerald/55"
                placeholder="Anything else we should know?"
              />
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
                and understand my information will be used to provide a quote. <span className="text-polus-gold">*</span>
              </label>
            </div>

            {/* Honeypot */}
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

            {message && (
              <div className={`mb-6 p-4 rounded-lg border text-sm ${
                status === "error"
                  ? "bg-red-900/20 border-red-500/30 text-red-200"
                  : "bg-polus-mint/10 border-polus-mint/30 text-polus-paper"
              }`}>
                {message}
              </div>
            )}

            <div className="flex gap-3 justify-center">
              <Button
                type="button"
                onClick={() => { setStep(1); setMessage(""); }}
                variant="primary"
                className="w-1/3 min-w-fit"
              >
                ← Back
              </Button>
              <Button
                type="submit"
                variant="secondary"
                className="w-1/3 min-w-fit"
                disabled={status === "loading" || !formData.privacyConsent}
              >
                {status === "loading" ? "Submitting..." : "Submit Quote Request"}
              </Button>
            </div>
          </Card>
        </form>
      )}
    </div>
  );
}
