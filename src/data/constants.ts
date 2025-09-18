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

// Platform Information
export const PLATFORM_INFO = {
  name: "Nirnaya",
  description:
    "A community initiative empowering Nepali citizens to make informed voting decisions through candidate education and election awareness",
  taglineNepali: "निर्णय - आफ्नो मतको सदुपयोग गर्नुहोस्",
  url: "https://nirnaya.app",
  logo: "https://nirnaya.app/logo.png",
} as const;

// External Links
export const EXTERNAL_LINKS = {
  electionCommission: "https://www.election.gov.np",
  googleForms: {
    feedback: "https://forms.gle/oAGbypNqUgCgDdkH8",
  },
} as const;

// Feature Flags
export const FEATURES = {
  multiLanguage: false, // Enable when i18n is implemented
  candidateProfiles: false, // Enable when candidate data is available
  userAuthentication: false, // Enable when auth is implemented
} as const;

// App Information
export const APP_INFO = {
  version: "0.2.0",
  lastUpdated: "2025-01-15",
} as const;
