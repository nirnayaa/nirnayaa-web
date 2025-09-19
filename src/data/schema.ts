import { ELECTION_INFO, EXTERNAL_LINKS, PLATFORM_INFO } from "./constants";

// Website/Platform Schema (not an organization since it's a community initiative)
export const websitePlatformSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: PLATFORM_INFO.name,
  description: PLATFORM_INFO.description,
  url: PLATFORM_INFO.url,
  inLanguage: ["en", "ne"],
  about: {
    "@type": "Thing",
    name: "Voter Education Nepal",
    description:
      "Community-driven democratic participation and voter awareness in Nepal",
  },
  areaServed: {
    "@type": "Country",
    name: "Nepal",
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
    name: "Nepal",
    address: {
      "@type": "PostalAddress",
      addressCountry: "NP",
    },
  },
  organizer: {
    "@type": "Organization",
    name: "Election Commission of Nepal",
    url: EXTERNAL_LINKS.electionCommission,
  },
} as const;
