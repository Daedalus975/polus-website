import { Section } from "@/components/Section";
import { AdminLeads } from "@/components/AdminLeads";
import { AdminChats } from "@/components/AdminChats";
import { AdminAnalytics } from "@/components/AdminAnalytics";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard — Polus LLC",
  description: "View leads, chat conversations, and analytics",
  robots: "noindex,nofollow" // Don't index admin pages
};

export default function AdminPage() {
  return (
    <>
      <Section title="Admin Dashboard" eyebrow="Polus" className="pt-20 md:pt-24">
        <p className="text-sm text-[rgba(254,255,255,0.62)] mb-8 text-center">
          View leads, chat conversations, and analytics
        </p>
        
        <div className="space-y-8">
          <AdminAnalytics />
          <AdminLeads />
          <AdminChats />
        </div>
      </Section>
    </>
  );
}
