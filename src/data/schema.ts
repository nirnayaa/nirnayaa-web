import { ELECTION_INFO, EXTERNAL_LINKS, ORGANIZATION_INFO } from "./constants";

// Organization Schema
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: ORGANIZATION_INFO.name,
  description: ORGANIZATION_INFO.description,
  url: ORGANIZATION_INFO.url,
  logo: ORGANIZATION_INFO.logo,
  sameAs: [], // Will be populated when social media links are added
  address: {
    "@type": "PostalAddress",
    addressCountry: ORGANIZATION_INFO.address.countryCode,
    addressRegion: ORGANIZATION_INFO.address.region,
    addressLocality: ORGANIZATION_INFO.address.city,
  },
  areaServed: {
    "@type": "Country",
    name: ORGANIZATION_INFO.address.country,
  },
} as const;

// Election Event Schema
export const electionEventSchema = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: ELECTION_INFO.name,
  description: ELECTION_INFO.description,
  startDate: ELECTION_INFO.fullDateTime,
  endDate: ELECTION_INFO.endTime,
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  location: {
    "@type": "Country",
    name: ORGANIZATION_INFO.address.country,
    address: {
      "@type": "PostalAddress",
      addressCountry: ORGANIZATION_INFO.address.countryCode,
    },
  },
  organizer: {
    "@type": "Organization",
    name: "Election Commission of Nepal",
    url: EXTERNAL_LINKS.electionCommission,
  },
} as const;

// Website Schema
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: ORGANIZATION_INFO.name,
  url: ORGANIZATION_INFO.url,
  description: ORGANIZATION_INFO.description,
  inLanguage: ["en", "ne"],
  about: {
    "@type": "Thing",
    name: "Voter Education Nepal",
    description: "Democratic participation and voter awareness in Nepal",
  },
} as const;
