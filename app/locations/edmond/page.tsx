import { LocationTemplate, type LocationData } from "@/components/LocationTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edmond IT Consulting — Polus LLC",
  description: "IT consulting for Edmond small businesses. Microsoft 365, cloud identity, backup/DR, and process optimization. Serving Edmond and north OKC metro.",
  openGraph: {
    title: "Edmond IT Consulting — Polus LLC",
    description: "Expert IT consulting for Edmond small businesses. M365, security, backup, and operations help.",
  }
};

const locationData: LocationData = {
  cityName: "Edmond",
  heroTitle: "IT Consulting for Edmond Small Businesses",
  heroDescription: "Serving small businesses in Edmond and the surrounding north Oklahoma City metro area. Get expert IT help tailored for growing Edmond companies—without the enterprise price tag.",
  sectionTitle: "North Metro Areas We Serve",
  metroAreas: [
    {
      title: "Edmond",
      description: "Downtown Edmond, UCO area, Deer Creek, Coffee Creek, and all Edmond neighborhoods"
    },
    {
      title: "North OKC",
      description: "The Village, Nichols Hills, Quail Creek, and northern Oklahoma City communities"
    },
    {
      title: "Surrounding Areas",
      description: "Arcadia, Guthrie, and other nearby communities in the north metro"
    }
  ],
  whyChooseTitle: "Why Edmond Businesses Choose Polus",
  benefits: [
    {
      title: "Edmond-Friendly Service",
      description: "We understand Edmond's business landscape—from professional services downtown to growing companies near UCO."
    },
    {
      title: "Transparent pricing",
      description: "Fixed-scope project pricing without hourly billing. IT services start at $799 for comprehensive systems assessments."
    },
    {
      title: "Microsoft 365 Experts",
      description: "Deep expertise in the Microsoft tools your Edmond business uses: M365, Entra ID, Teams, SharePoint, and Intune."
    }
  ]
};

export default function EdmondPage() {
  return <LocationTemplate data={locationData} />;
}
