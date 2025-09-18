// Election Information
export const ELECTION_INFO = {
  date: "2026-03-05",
  time: "07:00:00",
  timezone: "+05:45", // Kathmandu timezone (UTC+5:45)
  fullDateTime: "2026-03-05T07:00:00+05:45",
  endTime: "2026-03-05T17:00:00+05:45", // Polls close at 5 PM
  name: "Nepal General Election 2026",
  description:
    "General elections in Nepal scheduled for March 5, 2026. Citizens will vote for their representatives in a democratic process.",
} as const;

// Organization Information
export const ORGANIZATION_INFO = {
  name: "Nirnaya",
  description:
    "Empowering Nepali citizens to make informed voting decisions through candidate education and election awareness",
  taglineNepali: "निर्णय - आफ्नो मतको सदुपयोग गर्नुहोस्",
  url: "https://nirnaya.app",
  logo: "https://nirnaya.app/logo.png",
  email: "feedback@nirnaya.app",
  address: {
    country: "Nepal",
    region: "Bagmati Province",
    city: "Kathmandu",
    countryCode: "NP",
  },
} as const;

// External Links
export const EXTERNAL_LINKS = {
  electionCommission: "https://www.election.gov.np",
  googleForms: {
    feedback: "", // TODO: Add actual Google Forms link when created
  },
} as const;

// Social Media Links (for future use)
export const SOCIAL_LINKS = {
  facebook: "",
  twitter: "",
  instagram: "",
  youtube: "",
} as const;

// Feature Flags
export const FEATURES = {
  googleFormsIntegration: false, // Enable when Google Forms link is available
  multiLanguage: false, // Enable when i18n is implemented
  candidateProfiles: false, // Enable when candidate data is available
  userAuthentication: false, // Enable when auth is implemented
} as const;

// Development Status
export const DEVELOPMENT_STATUS = {
  phase1Complete: true,
  phase2InProgress: true,
  currentVersion: "0.2.0",
  lastUpdated: "2025-01-15",
} as const;
