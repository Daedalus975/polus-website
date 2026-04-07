import { LocationTemplate, type LocationData } from "@/components/LocationTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oklahoma City IT Consulting — Polus LLC",
  description: "IT consulting for Oklahoma City small businesses. Microsoft 365, cloud identity, backup/DR, and process optimization. Serving OKC metro: Edmond, Norman, Moore, Yukon.",
  openGraph: {
    title: "Oklahoma City IT Consulting — Polus LLC",
    description: "Expert IT consulting for OKC small businesses. M365, security, backup, and operations help.",
  }
};

const locationData: LocationData = {
  cityName: "Oklahoma City",
  heroTitle: "IT Consulting for Oklahoma City Small Businesses",
  heroDescription: "Serving small businesses across the Oklahoma City metro area—from downtown OKC to Edmond, Norman, Moore, Yukon, and beyond. Get expert IT help without the enterprise price tag.",
  sectionTitle: "Oklahoma City Metro Areas We Serve",
  metroAreas: [
    {
      title: "Downtown OKC",
      description: "Bricktown, Midtown, Deep Deuce, Arts District, and surrounding business districts"
    },
    {
      title: "North Metro",
      description: "Edmond, The Village, Nichols Hills, Arcadia, and northern suburbs"
    },
    {
      title: "South Metro",
      description: "Norman, Moore, Newcastle, Mustang, Yukon, and southern communities"
    }
  ],
  whyChooseTitle: "Why Oklahoma City Businesses Choose Polus",
  benefits: [
    {
      title: "Local Understanding, Remote Flexibility",
      description: "We understand Oklahoma City businesses and work the way you do—in-person meetings when needed, remote work when it's more efficient."
    },
    {
      title: "Fixed-scope pricing",
      description: "Transparent project pricing with no hourly billing surprises. Services range from $799 IT assessments to comprehensive infrastructure projects."
    },
    {
      title: "Microsoft 365 Specialists",
      description: "Deep expertise in M365, Entra ID (Azure AD), Intune, Teams, SharePoint—the tools most Oklahoma City businesses already use."
    }
  ]
};

export default function OklahomaCityPage() {
  return <LocationTemplate data={locationData} />;
}
