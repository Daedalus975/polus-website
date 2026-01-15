export type OrganizationSchema = {
  "@context": "https://schema.org";
  "@type": "Organization";
  name: string;
  url: string;
  logo?: string;
  description: string;
  contactPoint?: {
    "@type": "ContactPoint";
    email?: string;
    contactType: string;
    areaServed: string;
  };
  areaServed: {
    "@type": "State";
    name: string;
  };
};

export type LocalBusinessSchema = {
  "@context": "https://schema.org";
  "@type": "ProfessionalService";
  name: string;
  image?: string;
  url: string;
  telephone?: string;
  email?: string;
  priceRange: string;
  areaServed: {
    "@type": "City" | "State";
    name: string;
  }[];
  description: string;
  openingHours?: string;
};

export type ServiceSchema = {
  "@context": "https://schema.org";
  "@type": "Service";
  serviceType: string;
  provider: {
    "@type": "Organization";
    name: string;
    url: string;
  };
  areaServed: {
    "@type": "State";
    name: string;
  };
  description: string;
  offers?: {
    "@type": "Offer";
    price?: string;
    priceCurrency: string;
    availability: string;
  };
};

export type BreadcrumbSchema = {
  "@context": "https://schema.org";
  "@type": "BreadcrumbList";
  itemListElement: {
    "@type": "ListItem";
    position: number;
    name: string;
    item?: string;
  }[];
};

export type WebSiteSchema = {
  "@context": "https://schema.org";
  "@type": "WebSite";
  name: string;
  url: string;
  description: string;
  potentialAction?: {
    "@type": "SearchAction";
    target: {
      "@type": "EntryPoint";
      urlTemplate: string;
    };
    "query-input": string;
  };
};

export type FAQPageSchema = {
  "@context": "https://schema.org";
  "@type": "FAQPage";
  mainEntity: {
    "@type": "Question";
    name: string;
    acceptedAnswer: {
      "@type": "Answer";
      text: string;
    };
  }[];
};

type StructuredDataProps = {
  data: OrganizationSchema | LocalBusinessSchema | ServiceSchema | BreadcrumbSchema | WebSiteSchema | FAQPageSchema;
};

export function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function getOrganizationSchema(): OrganizationSchema {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const businessEmail = process.env.BUSINESS_INBOX_EMAIL || "jack.washmon@polus-cs.com";

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Polus LLC",
    url: baseUrl,
    description: "Oklahoma IT and operations consulting for small businesses. Process mapping, Microsoft 365 governance, backup/DR, and more.",
    contactPoint: {
      "@type": "ContactPoint",
      email: businessEmail,
      contactType: "Customer Service",
      areaServed: "Oklahoma"
    },
    areaServed: {
      "@type": "State",
      name: "Oklahoma"
    }
  };
}

export function getLocalBusinessSchema(): LocalBusinessSchema {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const businessEmail = process.env.BUSINESS_INBOX_EMAIL || "jack.washmon@polus-cs.com";

  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Polus LLC",
    url: baseUrl,
    email: businessEmail,
    priceRange: "$$",
    areaServed: [
      {
        "@type": "State",
        name: "Oklahoma"
      }
    ],
    description: "IT and operations consulting for Oklahoma small businesses. Services include process mapping, SOPs, Microsoft 365 governance, backup/disaster recovery, managed IT, and more."
  };
}

export function getWebSiteSchema(): WebSiteSchema {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Polus LLC",
    url: baseUrl,
    description: "Oklahoma IT and operations consulting. Fix your processes. Strengthen your IT. Get more time back."
  };
}

export function getServiceSchema(serviceType: string, description: string, price?: string): ServiceSchema {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const schema: ServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType,
    provider: {
      "@type": "Organization",
      name: "Polus LLC",
      url: baseUrl
    },
    areaServed: {
      "@type": "State",
      name: "Oklahoma"
    },
    description
  };

  if (price) {
    schema.offers = {
      "@type": "Offer",
      price: price.replace(/[^0-9]/g, ""),
      priceCurrency: "USD",
      availability: "https://schema.org/InStock"
    };
  }

  return schema;
}

export function getBreadcrumbSchema(items: { name: string; url?: string }[]): BreadcrumbSchema {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.url && { item: item.url })
    }))
  };
}

export function getFAQSchema(faqs: { question: string; answer: string }[]): FAQPageSchema {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
}
