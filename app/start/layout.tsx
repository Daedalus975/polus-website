import type { Metadata } from "next";
import { StructuredData, getBreadcrumbSchema } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Find Your Starting Point — Polus Quiz",
  description: "Answer 8 quick questions and we'll recommend the best service to start with based on your specific challenges, timeline, and budget.",
  openGraph: {
    title: "Find Your Starting Point — Polus Quiz",
    description: "Answer 8 quick questions and get a personalized service recommendation.",
    type: "website"
  },
  twitter: {
    card: "summary",
    title: "Find Your Starting Point — Polus Quiz",
    description: "Answer 8 quick questions and get a personalized service recommendation."
  }
};

// Export page component from existing file
export { default } from "./page";
