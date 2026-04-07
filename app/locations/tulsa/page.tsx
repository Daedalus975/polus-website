import { LocationTemplate, type LocationData } from "@/components/LocationTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tulsa IT Consulting — Polus LLC",
  description: "IT consulting for Tulsa small businesses. Microsoft 365, cloud identity, backup/DR, and process optimization. Serving Tulsa metro: Broken Arrow, Owasso, Bixby, Jenks, Sand Springs.",
  openGraph: {
    title: "Tulsa IT Consulting — Polus LLC",
    description: "Expert IT consulting for Tulsa small businesses. M365, security, backup, and operations help.",
  }
};

const locationData: LocationData = {
  cityName: "Tulsa",
  heroTitle: "IT Consulting for Tulsa Small Businesses",
  heroDescription: "Serving small businesses across the Tulsa metro area—from downtown Tulsa to Broken Arrow, Owasso, Bixby, Jenks, Sand Springs, and beyond. Get expert IT help without the enterprise price tag.",
  sectionTitle: "Tulsa Metro Areas We Serve",
  metroAreas: [
    {
      title: "Tulsa Proper",
      description: "Downtown, Cherry Street, Brookside, Blue Dome District, and all Tulsa neighborhoods"
    },
    {
      title: "South Metro",
      description: "Broken Arrow, Bixby, Jenks, Glenpool, and southern suburbs"
    },
    {
      title: "North & West Metro",
      description: "Owasso, Collinsville, Sand Springs, Sapulpa, and surrounding communities"
    }
  ],
  whyChooseTitle: "Why Tulsa Businesses Choose Polus",
  benefits: [
    {
      title: "Tulsa-Based Expertise",
      description: "We understand Tulsa businesses and the unique challenges facing Green Country companies. Local knowledge, expert execution."
    },
    {
      title: "Transparent pricing",
      description: "Fixed-scope projects with clear pricing structure. Services start at $799 for comprehensive IT assessments."
    },
    {
      title: "Microsoft 365 Depth",
      description: "Specialists in M365, Entra ID, Intune, Teams, SharePoint—the Microsoft tools Tulsa businesses rely on daily."
    }
  ]
};

export default function TulsaPage() {
  return <LocationTemplate data={locationData} />;
}
