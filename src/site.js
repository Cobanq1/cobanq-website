/**
 * ─────────────────────────────────────────────────────────────────────────
 *  EDIT THIS FILE TO CHANGE YOUR BUSINESS DETAILS.
 *  Nothing else needs touching — every page reads from here.
 *  Anything left as an empty string ("") is simply hidden on the website.
 * ─────────────────────────────────────────────────────────────────────────
 */

export const site = {
  name: "Alliance Security Group",
  legalName: "Alliance Security Group Limited",
  tagline: "Licensed security, delivered properly.",

  // Main contact
  contactName: "Walid Shah",
  contactRole: "Director",
  phone: "07539 559947", // shown on the site
  phoneLink: "+447539559947", // used by the "call" and WhatsApp buttons
  whatsapp: true, // set to false to hide the WhatsApp buttons

  // ── FILL THESE IN WHEN YOU HAVE THEM ─────────────────────────────────
  // Leave as "" and the website will simply not show them.
  email: "", // e.g. "info@alliancesecuritygroup.co.uk"
  companyNumber: "", // Companies House number, e.g. "12345678"
  registeredAddress: "", // e.g. "12 Example Street, London, E1 1AA"
  siaLicenceNumber: "", // optional, if you want to display one
  // ─────────────────────────────────────────────────────────────────────

  coverage: "London & the South East, with UK-wide cover on request",

  // Social links — leave "" to hide the icon
  social: {
    linkedin: "",
    facebook: "",
    instagram: "",
  },
};

/** Accreditation wording. Kept in one place so it stays accurate everywhere. */
export const accreditation = {
  acsStatus:
    "Alliance Security Group is not currently ACS (Approved Contractor Scheme) approved. " +
    "We operate as a subcontract security provider and our application to the SIA Approved " +
    "Contractor Scheme is planned as the next step in the company's development.",
  short: "Subcontract provider · ACS application planned",
};

export const services = [
  {
    slug: "security-officers",
    icon: "ShieldCheck",
    title: "SIA Licensed Security Officers",
    short: "Front-line static and mobile guarding, staffed by badged officers.",
    blurb:
      "Static guarding, gatehouse and reception cover, mobile patrols and lock/unlock duties. " +
      "Every officer holds a valid SIA licence for the role they are deployed in, and is briefed " +
      "on your site's assignment instructions before their first shift.",
    points: [
      "Static site guarding, day and night",
      "Gatehouse, reception and concierge cover",
      "Mobile patrols, lock-up and unlock",
      "Construction, retail, industrial and corporate sites",
      "Short-notice and holiday cover",
    ],
  },
  {
    slug: "key-holding",
    icon: "KeyRound",
    title: "Key Holding & Alarm Response",
    short: "We hold the keys so your staff never attend an alarm alone at 3am.",
    blurb:
      "Your keys are held securely and logged. When an alarm activates we attend, check the " +
      "premises, deal with the cause, liaise with the police or your alarm receiving centre, " +
      "and secure the building again — then send you a written report.",
    points: [
      "Secure, logged key storage",
      "Rapid alarm response, 24/7",
      "Full internal and external premises check",
      "Liaison with police and alarm receiving centres",
      "Written incident report after every attendance",
    ],
  },
  {
    slug: "cctv-operators",
    icon: "Cctv",
    title: "CCTV Operators",
    short: "SIA Public Space Surveillance licensed operators for your control room.",
    blurb:
      "Trained CCTV operators to staff your control room or monitoring suite, working to your " +
      "procedures and to the requirements of the Surveillance Camera Code of Practice. Proactive " +
      "monitoring, incident logging and evidence handling done to a standard that stands up later.",
    points: [
      "SIA PSS (CCTV) licensed operators",
      "Proactive monitoring and incident detection",
      "Accurate, timed incident logging",
      "Evidence retrieval and handover",
      "Day, night and rotating shift patterns",
    ],
  },
  {
    slug: "dog-handling",
    icon: "Dog",
    title: "Dog Handling Security",
    short: "Licensed handlers with certified general-purpose security dogs.",
    blurb:
      "A dog unit is the strongest visible deterrent available on a difficult site. Our handlers " +
      "are SIA licensed and work with assessed, insured general-purpose security dogs — ideal for " +
      "construction sites, yards, plant and scrap, empty premises and high-risk night cover.",
    points: [
      "SIA licensed handlers with certified dogs",
      "Construction sites, yards and plant compounds",
      "Vacant property and high-risk night cover",
      "Powerful visible deterrent",
      "Welfare, insurance and certification records held on file",
    ],
  },
  {
    slug: "fire-marshals",
    icon: "Flame",
    title: "Fire Marshals",
    short: "Trained fire marshals for events, sites and building cover.",
    blurb:
      "Trained fire marshals to cover evacuation duties, fire point and extinguisher checks, " +
      "sweeps and roll calls — whether that is permanent cover for a building, a hot works watch, " +
      "or additional cover for an event or a period when your own marshals are unavailable.",
    points: [
      "Evacuation and assembly point duties",
      "Fire point, route and extinguisher checks",
      "Hot works and fire watch cover",
      "Events, offices, construction and warehousing",
      "Sweeps, roll calls and incident reporting",
    ],
  },
];

export const roles = [
  "SIA Door Supervisor",
  "SIA Security Guard",
  "CCTV Operator (PSS)",
  "Dog Handler",
  "Fire Marshal",
  "Key Holding / Alarm Response",
];

export const sectors = [
  "Construction & development",
  "Retail & distribution",
  "Corporate & commercial",
  "Vacant & void property",
  "Logistics & warehousing",
  "Events & hospitality",
  "Industrial & manufacturing",
  "Education & healthcare",
];
