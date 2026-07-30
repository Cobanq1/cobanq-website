import { roles } from "./site";

/**
 * Form definitions live here so the React forms and the hidden Netlify
 * detection copies in index.html can be kept in step from one place.
 * If you add a field here, add an input with the same `name` to the matching
 * hidden form in index.html.
 */

export const CLIENT_FORM = "client-enquiry";
export const OFFICER_FORM = "officer-application";

export const clientFields = [
  { name: "name", label: "Your name", required: true, placeholder: "Jane Smith" },
  { name: "company", label: "Company", placeholder: "Company name" },
  { name: "email", label: "Email", type: "email", required: true, placeholder: "you@company.co.uk" },
  { name: "phone", label: "Phone", type: "tel", required: true, placeholder: "07000 000000" },
  {
    name: "services",
    label: "What cover do you need?",
    type: "checkboxes",
    full: true,
    options: [
      "SIA security officers",
      "Key holding & alarm response",
      "CCTV operators",
      "Dog handling security",
      "Fire marshals",
      "Not sure — advise me",
    ],
  },
  { name: "location", label: "Site location", placeholder: "Town or postcode" },
  {
    name: "arrangement",
    label: "Type of work",
    type: "select",
    options: [
      "Ongoing contract",
      "Short-term / temporary cover",
      "One-off (single shift or event)",
      "Subcontract — I'm a security company",
    ],
  },
  { name: "hours", label: "Hours / shift pattern", placeholder: "e.g. nights, 7pm–7am, 7 days" },
  { name: "start", label: "Start date", placeholder: "e.g. ASAP, or 12 March" },
  {
    name: "message",
    label: "Anything else we should know?",
    type: "textarea",
    full: true,
    placeholder: "Tell us about the site, the risks, and what you need covering.",
  },
];

export const officerFields = [
  { name: "name", label: "Full name", required: true, placeholder: "As it appears on your SIA licence" },
  { name: "phone", label: "Mobile", type: "tel", required: true, placeholder: "07000 000000" },
  { name: "email", label: "Email", type: "email", required: true, placeholder: "you@email.com" },
  { name: "location", label: "Where are you based?", required: true, placeholder: "Town or postcode" },
  {
    name: "roles",
    label: "Which roles can you work?",
    type: "checkboxes",
    full: true,
    options: roles,
  },
  {
    name: "sia",
    label: "SIA licence number",
    placeholder: "16 digits",
    help: "Leave blank if your licence is still being processed — tell us in the notes.",
  },
  {
    name: "licence_expiry",
    label: "Licence expiry",
    placeholder: "e.g. 08/2027",
  },
  {
    name: "experience",
    label: "Experience",
    type: "select",
    options: ["No experience yet — newly licensed", "Under 1 year", "1–3 years", "3–5 years", "5+ years"],
  },
  {
    name: "availability",
    label: "Availability",
    type: "select",
    options: ["Full time", "Part time", "Weekends only", "Nights only", "Ad-hoc / cover shifts"],
  },
  {
    name: "transport",
    label: "Own transport?",
    type: "select",
    options: ["Yes — car", "Yes — van", "No, but I can travel", "No"],
  },
  {
    name: "travel",
    label: "How far can you travel?",
    type: "select",
    options: ["Up to 5 miles", "Up to 15 miles", "Up to 30 miles", "Anywhere in the UK"],
  },
  {
    name: "message",
    label: "Anything else? (tickets, dogs, first aid, references)",
    type: "textarea",
    full: true,
    placeholder:
      "e.g. CSCS card, first aid at work, own certified security dog, previous sites worked.",
  },
];
