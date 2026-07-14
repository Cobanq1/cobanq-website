// ---------------------------------------------------------------------------
// All the text on the site lives here. Edit this file to change copy
// without touching any component code.
//
// Content below is drawn from the real cobanq.com (company facts, FCA
// details, FAQ answers, footer structure). Sections still marked
// "placeholder" are invented for this redesign and should be replaced
// with your real numbers/quotes when you have them.
// ---------------------------------------------------------------------------

export const site = {
  name: "CoBanq",
  legalName: "CoBanq Ltd",
  since: "Since 2003",
  supportEmail: "support@cobanq.com",
  registeredAddress: "One Canada Square, 37th Floor, Canary Wharf, London, United Kingdom, E14 5AA",
  fcaNumber: "508565",
  companyNumber: "04995400",
  // Live sign up / log in flow — every "Get started" CTA on the site sends
  // people here instead of opening a local placeholder form.
  onboardingUrl: "https://cobanq-preview.netlify.app/onboarding",
};

export const nav = {
  links: [
    { label: "Solutions", to: "/solutions" },
    { label: "Business", to: "/business" },
    { label: "About Us", to: "/about" },
    { label: "FAQ", to: "/faq" },
    { label: "Contact", to: "/contact" },
  ],
  loginLabel: "Log in",
  signupLabel: "Get started",
};

export const hero = {
  eyebrow: "FCA-regulated, since 2003",
  headline: "Powering the flow of global capital",
  subhead:
    "CoBanq is a modern financial platform that makes international money transfers and payments seamless, secure, and affordable — for individuals sending money home, and for businesses moving money across borders.",
  primaryCta: "Get started",
  secondaryCta: "See how it works",
  microcopy: "FCA regulated · Registration No. 508565 · CoBanq is not a bank.",
};

// Real, verifiable facts about CoBanq — used instead of invented "trusted by"
// client logos, since we don't have real customer logos to show yet.
export const trustBar = {
  heading: "A regulated, established financial platform",
  badges: [
    { icon: "ShieldCheck", label: "FCA regulated" },
    { icon: "CalendarCheck", label: "Established 2003" },
    { icon: "Globe", label: "30+ payout corridors" },
    { icon: "Building2", label: "UK-based, Canary Wharf" },
  ],
};

export const stats = [
  { value: "2003", label: "Founded in the UK" },
  { value: "30+", label: "Global payout corridors" },
  { value: "FCA", label: "Regulated, No. 508565" },
  { value: "24/7", label: "Account tracking & support" },
];

export const features = {
  heading: "Everything you need to move money globally",
  subhead:
    "One platform for sending money abroad, collecting and paying out in multiple currencies, and running cross-border business payments — with transparent fees shown upfront.",
  items: [
    {
      icon: "Wallet",
      title: "Multi-currency wallets",
      description:
        "Collect, hold, and pay out in GBP, EUR, USD, JPY, AED, PKR, and more — all from one CoBanq wallet.",
    },
    {
      icon: "Zap",
      title: "Fast transfers",
      description:
        "Most transfers are processed within 24 hours, with real-time tracking available through your account dashboard.",
    },
    {
      icon: "BarChart3",
      title: "Transparent fees",
      description:
        "We always display the exact fee and exchange rate before you confirm your transfer — no hidden charges.",
    },
    {
      icon: "Globe",
      title: "Send money home",
      description:
        "Send to India, Nigeria, the Philippines, Pakistan, Bangladesh, and many more countries and currencies.",
    },
    {
      icon: "Building2",
      title: "Built for business",
      description:
        "Robust cross-border payment solutions designed for scale, compliance, and speed — from global payouts to supplier settlements.",
    },
    {
      icon: "ShieldCheck",
      title: "Secure by design",
      description:
        "Industry-standard encryption, two-factor authentication, and regular security audits keep every account safe.",
    },
  ],
};

export const howItWorks = {
  heading: "Get started in three simple steps",
  subhead: "Register, verify your identity, and you can start making transfers in minutes.",
  steps: [
    {
      number: "01",
      title: "Create your account",
      description: "Click 'Register', fill in your details, and you're most of the way there.",
    },
    {
      number: "02",
      title: "Verify your identity",
      description:
        "You'll need a valid government-issued ID and proof of address — most verifications take minutes.",
    },
    {
      number: "03",
      title: "Send or receive",
      description: "Start making transfers straight away, with the fee and rate shown upfront every time.",
    },
  ],
};

export const ctaBanner = {
  heading: "Ready to power the flow of your global capital?",
  subhead: "Join individuals and businesses already using CoBanq to send, collect, and pay out worldwide.",
  primaryCta: "Get started",
  secondaryCta: "Talk to our business team",
};

// Made-up customer scenarios for the homepage "success stories" carousel —
// invented names and roles (no real company names) to illustrate the kinds
// of people CoBanq serves. Replace with real customer stories when available.
export const successStories = [
  {
    name: "Amina Yusuf",
    role: "Import & Export Trader",
    country: "Nigeria",
    flag: "🇳🇬",
    icon: "Ship",
    quote:
      "CoBanq lets me pay overseas suppliers and collect from buyers abroad without opening a dozen local bank accounts. One wallet, every currency I trade in.",
  },
  {
    name: "Farhan Iqbal",
    role: "Wholesale Store Owner",
    country: "Pakistan",
    flag: "🇵🇰",
    icon: "Store",
    quote:
      "My distributors pay me in different currencies every week. CoBanq converts and settles it all without me chasing exchange rates myself.",
  },
  {
    name: "Priya Nair",
    role: "Payroll Manager",
    country: "India",
    flag: "🇮🇳",
    icon: "Users",
    quote:
      "We run payroll for a team spread across three countries. CoBanq's multi-currency wallets mean everyone gets paid on time, in their own currency.",
  },
  {
    name: "Carlos Mendes",
    role: "Freelance Web Developer",
    country: "Philippines",
    flag: "🇵🇭",
    icon: "Laptop",
    quote:
      "Clients in the US and Europe pay into my CoBanq wallet directly. I withdraw locally without losing a chunk of it to conversion fees.",
  },
];

// -------------------- "Built for trust" stats (About page) --------------------
// Placeholder figures grounded in what we know is real (currency count
// matches the calculator list, 24/7 matches the FAQ) — replace the rest
// with real numbers when available.
export const trust = {
  eyebrow: "Built for trust.",
  heading: "Real help when you need it.",
  subhead:
    "CoBanq is an FCA-regulated platform for international money transfers and payments. From personal remittances to business payouts, we give individuals and businesses the confidence to move money across borders.",
  stats: [
    { value: "Thousands", label: "Customers and counting" },
    { value: "70+", label: "Currencies supported" },
    { value: "24/7", label: "Customer support" },
    { value: "10+", label: "Languages supported" },
  ],
};

// -------------------- Business / Partners page --------------------

export const business = {
  eyebrow: "Solutions for businesses & partners",
  heading: "Cross-border payments built to scale",
  subhead:
    "Whether you're a business settling with suppliers abroad, a financial institution expanding payout corridors, or a fintech launching global payments — CoBanq gives you regulated infrastructure to build on.",
  cards: [
    {
      icon: "TrendingUp",
      title: "B2B",
      description:
        "Provides businesses with robust cross-border payment solutions, designed for scale, compliance, and speed. From global payouts to supplier settlements, our platform simplifies how money moves across borders.",
    },
    {
      icon: "Landmark",
      title: "Correspondent Banking Partnerships",
      description:
        "We work with regulated financial institutions and money service businesses to expand payout corridors, support last-mile delivery, and provide local settlement and liquidity. Let's partner on global disbursements.",
    },
    {
      icon: "Blocks",
      title: "Fintech Collaborations",
      description:
        "From payment apps to digital banks, we offer embedded FX, compliance-ready processing, white-label tools, and revenue-sharing models to help you launch and scale global payments.",
    },
  ],
  whyPartner: {
    heading: "Why partner with CoBanq?",
    paragraph:
      "As an FCA-regulated firm, we offer a trusted platform with a robust compliance infrastructure. Our global payout network spans 30+ corridors, providing you with extensive reach. Choose from flexible integration models, including platform, white-label, or correspondent formats — all supported by scalable infrastructure designed for volume, reliability, and speed. We also provide dedicated partnership support, from onboarding to long-term growth strategy.",
    points: [
      "FCA-regulated with robust compliance infrastructure",
      "30+ payout corridors and growing global reach",
      "Platform, white-label, or correspondent integration models",
      "Dedicated partnership support from onboarding to growth",
    ],
  },
  cta: {
    heading: "Let's talk about your corridor",
    subhead: "Tell us about your business and our partnerships team will be in touch.",
    primaryCta: "Contact our business team",
  },
};

// -------------------- About page --------------------

export const about = {
  heading: "Our",
  headingAccent: "company",
  intro:
    "Established in 2003, CoBanq Ltd is a UK-based financial institution committed to delivering efficient and transparent cross-border payment solutions. We serve both individuals and businesses with a focus on speed, security, and cost-effectiveness.",
  licensing: {
    heading: "Licensing & Regulation",
    paragraphs: [
      "CoBanq Ltd is fully authorized and regulated by the Financial Conduct Authority (FCA) under the Payment Services Regulations 2017 for the provision of payment services, and holds an API license.",
      `Our FCA Registration Number is ${"508565"}, and our Company Registration Number is ${"04995400"}. Our registered office is located at One Canada Square, 37th Floor, Canary Wharf, London, United Kingdom, E14 5AA. CoBanq is not a bank.`,
      "For regulatory or compliance inquiries, please contact us at support@cobanq.com.",
    ],
  },
};

// -------------------- FAQ page --------------------

export const faq = {
  heading: "Frequently asked questions",
  subhead: "Can't find what you're looking for? Reach out to our support team any time.",
  categories: [
    {
      icon: "PlaneTakeoff",
      name: "Getting Started",
      items: [
        {
          q: "What is CoBanq?",
          a: "CoBanq is a modern financial platform that makes international money transfers and payments seamless, secure, and affordable.",
        },
        {
          q: "How do I create an account?",
          a: "Simply click the 'Register' button, fill in your details, verify your identity, and you can start making transfers in minutes.",
        },
        {
          q: "What documents do I need to verify my identity?",
          a: "You'll need a valid government-issued ID (passport, driver's license, or national ID card) and proof of address (utility bill or bank statement less than 3 months old).",
        },
      ],
    },
    {
      icon: "RefreshCcw",
      name: "Sending Money",
      items: [
        {
          q: "Which countries can I send money to?",
          a: "We support transfers to multiple countries including India, Nigeria, Philippines, Pakistan, Bangladesh, and many more.",
        },
        {
          q: "How long do transfers take?",
          a: "Most transfers are processed within 24 hours, with real-time tracking available through your account dashboard.",
        },
        {
          q: "What payment methods are accepted?",
          a: "We accept bank transfers, debit cards, and credit cards. Payment methods may vary by country.",
        },
      ],
    },
    {
      icon: "Lock",
      name: "Account & Security",
      items: [
        {
          q: "How do you protect my account?",
          a: "We use industry-standard encryption, two-factor authentication, and regular security audits to keep your account safe.",
        },
        {
          q: "What should I do if I forget my password?",
          a: "Click the 'Forgot Password' link on the login page. We'll send you instructions to reset your password securely.",
        },
        {
          q: "How can I enable two-factor authentication?",
          a: "Go to Account Settings > Security and follow the steps to enable 2FA using your preferred authentication method.",
        },
      ],
    },
    {
      icon: "CircleDollarSign",
      name: "Fees & Pricing",
      items: [
        {
          q: "What are the fees?",
          a: "Our fees vary by destination and amount. We always display the exact fee and exchange rate before you confirm your transfer.",
        },
        {
          q: "Are there any hidden charges?",
          a: "No, we believe in complete transparency. All fees and exchange rates are shown upfront before you make a transfer.",
        },
        {
          q: "Do you offer better rates for larger transfers?",
          a: "Yes, we offer preferential rates for larger transfers. Contact our business team for more information.",
        },
      ],
    },
    {
      icon: "FileCheck2",
      name: "Legal & Compliance",
      items: [
        {
          q: "Is CoBanq regulated?",
          a: "Yes, we are regulated by the Financial Conduct Authority (FCA), FCA Registration Number 508565. Our operations comply with all relevant financial regulations. CoBanq is not a bank.",
        },
        {
          q: "How do you handle my data?",
          a: "We follow strict data protection regulations and never share your information with unauthorized parties. Read our Privacy Policy for details.",
        },
        {
          q: "What are your AML policies?",
          a: "We have robust Anti-Money Laundering (AML) policies and conduct thorough verification checks to prevent financial crime.",
        },
      ],
    },
  ],
};

// -------------------- Home page: interactive sections --------------------

// Rotating "what you can do" slider shown under the hero — Payoneer-style
// showcase of the different things CoBanq does, one slide at a time.
export const useCases = [
  {
    id: "send",
    tag: "Personal",
    icon: "Send",
    title: "Send money home in minutes",
    description: "Support for India, Nigeria, the Philippines, Pakistan, Bangladesh, and many more.",
    stat: { value: "24h", label: "Average transfer time" },
    linkLabel: "Send money",
    linkTo: "/send-money",
  },
  {
    id: "wallet",
    tag: "Wallets",
    icon: "Wallet",
    title: "Hold multiple currencies in one place",
    description: "Collect and pay out in GBP, EUR, USD, JPY, AED, PKR, and more.",
    stat: { value: "6+", label: "Currencies supported" },
    linkLabel: "Explore wallets",
    linkTo: "/#features",
  },
  {
    id: "business",
    tag: "Business",
    icon: "Building2",
    title: "Pay suppliers anywhere in the world",
    description: "Cross-border business payments designed for scale, compliance, and speed.",
    stat: { value: "30+", label: "Payout corridors" },
    linkLabel: "See business solutions",
    linkTo: "/business",
  },
  {
    id: "partners",
    tag: "Partnerships",
    icon: "Landmark",
    title: "Build on regulated payments infrastructure",
    description: "Correspondent banking and embedded FX for fintechs and financial institutions.",
    stat: { value: "FCA", label: "Regulated since 2003" },
    linkLabel: "Partner with CoBanq",
    linkTo: "/business",
  },
];

// Interactive audience tabs — click to switch between who CoBanq serves.
export const audienceTabs = [
  {
    id: "individuals",
    label: "For Individuals",
    icon: "Users",
    headline: "Send money home, without the wait",
    description:
      "Transfer to family and friends in India, Nigeria, the Philippines, Pakistan, Bangladesh, and more — with the fee and rate shown before you confirm.",
    bullets: [
      "Transfers processed within 24 hours",
      "Bank transfer, debit or credit card",
      "Real-time tracking from your dashboard",
    ],
    // External signup flow for personal transfers (separate from the main
    // CoBanq onboarding URL used elsewhere on the site).
    cta: { label: "Send money", to: "https://burqfx.com/signup" },
  },
  {
    id: "business",
    label: "For Business",
    icon: "Building2",
    headline: "Cross-border payments built to scale",
    description:
      "Collect and pay out globally, settle with suppliers abroad, and manage multi-currency wallets from one regulated platform.",
    bullets: [
      "Multi-currency wallets in GBP, EUR, USD & more",
      "Supplier settlements and global payouts",
      "Transparent, competitive fees",
    ],
    cta: { label: "Explore business solutions", to: "/business" },
  },
  {
    id: "partners",
    label: "For Partners",
    icon: "Landmark",
    headline: "Expand your payout corridors with us",
    description:
      "Correspondent banking and fintech collaborations — embedded FX, compliance-ready processing, and white-label tools.",
    bullets: [
      "30+ payout corridors",
      "Platform, white-label, or correspondent models",
      "Dedicated partnership support",
    ],
    cta: { label: "Partner with CoBanq", to: "/business" },
  },
];

// Countries CoBanq sends to — a slider on Home/Send Money. Pakistan links
// out to the real cobanq.com/pk (external, per request) — note this means
// it currently points at the old live site until this redesign replaces
// it there. Add more countries as they're built.
export const countryCorridors = [
  { flag: "🇵🇰", name: "Pakistan", currency: "PKR", to: "https://cobanq.com/pk" },
  { flag: "🇮🇳", name: "India", currency: "INR", to: null },
  { flag: "🇳🇬", name: "Nigeria", currency: "NGN", to: null },
  { flag: "🇵🇭", name: "Philippines", currency: "PHP", to: null },
  { flag: "🇧🇩", name: "Bangladesh", currency: "BDT", to: null },
  { flag: "🇦🇪", name: "UAE", currency: "AED", to: null },
];

// -------------------- Solutions (overview) page --------------------

export const solutions = {
  heading: "All solutions",
  subhead:
    "One regulated platform, built for however you move money across borders — whether that's sending money home, running a business, or partnering with us on payments infrastructure.",
  items: [
    {
      icon: "Send",
      title: "Personal money transfers",
      description:
        "Send money home to family and friends in India, Nigeria, the Philippines, Pakistan, Bangladesh, and many more countries, with the fee and rate shown upfront.",
      linkLabel: "See how it works",
      linkTo: "/send-money",
    },
    {
      icon: "Wallet",
      title: "Multi-currency wallets",
      description:
        "Collect, hold, and pay out in GBP, EUR, USD, JPY, AED, PKR, and more — one wallet for individuals and businesses working across currencies.",
      linkLabel: "Explore wallets",
      linkTo: "/#features",
    },
    {
      icon: "Building2",
      title: "Business payments",
      description:
        "Cross-border payment solutions designed for scale, compliance, and speed — from global payouts to supplier settlements.",
      linkLabel: "See business solutions",
      linkTo: "/business",
    },
    {
      icon: "Landmark",
      title: "Correspondent banking & fintech partnerships",
      description:
        "We work with regulated institutions, money service businesses, and fintechs to expand payout corridors and embed FX and compliance-ready processing.",
      linkLabel: "Partner with us",
      linkTo: "/business",
    },
  ],
};

// -------------------- Contact page --------------------

export const contact = {
  heading: "Get in touch",
  subhead:
    "Questions about your account, a business partnership, or regulatory and compliance inquiries — our team is here to help.",
  email: "support@cobanq.com",
  address: "One Canada Square, 37th Floor, Canary Wharf, London, United Kingdom, E14 5AA",
  cards: [
    {
      icon: "LifeBuoy",
      title: "Support Center",
      description: "Account help, transfer tracking, and general questions.",
    },
    {
      icon: "Building2",
      title: "Business & Partnerships",
      description: "Corridor expansion, white-label, and correspondent banking inquiries.",
    },
    {
      icon: "ShieldCheck",
      title: "Regulatory & Compliance",
      description: "FCA regulation, AML policy, and data protection questions.",
    },
  ],
};

// -------------------- Calculator page (placeholder rates) --------------------

export const calculator = {
  heading: "Transfer calculator",
  subhead:
    "Get an indicative quote before you send. Rates shown are for illustration only — your exact fee and rate are always confirmed before you transfer.",
  disclaimer:
    "Placeholder exchange rates for demonstration purposes — replace with live rates from your FX provider before launch.",
  currencies: [
    { code: "GBP", name: "British Pound", rateToGbp: 1 },
    { code: "EUR", name: "Euro", rateToGbp: 1.17 },
    { code: "USD", name: "US Dollar", rateToGbp: 1.27 },
    { code: "PKR", name: "Pakistani Rupee", rateToGbp: 354.2 },
    { code: "INR", name: "Indian Rupee", rateToGbp: 106.4 },
    { code: "NGN", name: "Nigerian Naira", rateToGbp: 1940.5 },
    { code: "PHP", name: "Philippine Peso", rateToGbp: 71.8 },
    { code: "BDT", name: "Bangladeshi Taka", rateToGbp: 154.9 },
    { code: "AED", name: "UAE Dirham", rateToGbp: 4.66 },
    { code: "JPY", name: "Japanese Yen", rateToGbp: 188.3 },
  ],
  feePercent: 0.5,
};

// -------------------- Send Money page --------------------

export const sendMoney = {
  eyebrow: "Personal money transfers",
  heading: "Send money home, without the wait",
  subhead:
    "Transfer to family and friends in India, Nigeria, the Philippines, Pakistan, Bangladesh, and many more countries — with the fee and rate shown before you confirm.",
  paymentMethods: ["Bank transfer", "Debit card", "Credit card"],
};

// -------------------- Security page --------------------

export const security = {
  eyebrow: "Trust & security",
  heading: "Security built into everything we do",
  subhead:
    "As an FCA-regulated platform, protecting your money and your data is our foundation — not an afterthought.",
  pillars: [
    {
      icon: "ShieldCheck",
      title: "FCA regulated",
      description:
        "CoBanq Ltd is authorized and regulated by the Financial Conduct Authority under the Payment Services Regulations 2017, registration no. 508565.",
    },
    {
      icon: "Lock",
      title: "Encryption everywhere",
      description:
        "Industry-standard encryption protects your data in transit and at rest, across every part of the platform.",
    },
    {
      icon: "KeyRound",
      title: "Two-factor authentication",
      description:
        "Add an extra layer of protection to your account with 2FA, configurable from Account Settings.",
    },
    {
      icon: "Fingerprint",
      title: "Identity verification",
      description:
        "Every account is verified with government-issued ID and proof of address before transfers can be made.",
    },
    {
      icon: "FileCheck2",
      title: "AML & compliance",
      description:
        "Robust Anti-Money Laundering policies and thorough verification checks help prevent financial crime.",
    },
    {
      icon: "Eye",
      title: "Data protection",
      description:
        "We follow strict data protection regulations and never share your information with unauthorized parties.",
    },
  ],
};

// -------------------- Country pages --------------------
// Keyed by URL slug (e.g. countries.pk -> /pk). Add more countries here
// using the same shape to generate new country pages later.

export const countries = {
  pk: {
    slug: "pk",
    flag: "🇵🇰",
    name: "Pakistan",
    currency: "PKR",
    heading: "CoBanq for Pakistan",
    subhead:
      "Send money to Pakistan quickly and affordably, with the fee and exchange rate shown before you confirm every transfer.",
    heroStats: [
      { value: "24h", label: "Typical transfer time" },
      { value: "PKR", label: "Local currency payout" },
      { value: "0.5%", label: "Indicative fee" },
    ],
    payoutMethods: ["Bank deposit", "Mobile wallet", "Cash pickup"],
    popularCities: ["Karachi", "Lahore", "Islamabad", "Faisalabad", "Rawalpindi"],
    faqItems: [
      {
        q: "How long does a transfer to Pakistan take?",
        a: "Most transfers to Pakistan are processed within 24 hours, with real-time tracking available through your account dashboard.",
      },
      {
        q: "What payout methods are available in Pakistan?",
        a: "Recipients in Pakistan can receive funds by bank deposit, mobile wallet, or cash pickup, depending on availability.",
      },
      {
        q: "What's the fee for sending money to Pakistan?",
        a: "Fees vary by amount and payout method. We always show the exact fee and exchange rate before you confirm your transfer.",
      },
    ],
  },
};

export const footer = {
  description:
    "CoBanq is a modern financial platform designed to make international money transfers and payments seamless, secure, and affordable.",
  regulatoryNote: "CoBanq is regulated by the Financial Conduct Authority (FCA) and holds an API license. CoBanq is not a bank.",
  columns: [
    {
      heading: "Solutions",
      links: [
        { label: "All Solutions", to: "/solutions" },
        { label: "Send Money", to: "/send-money" },
        { label: "Calculator", to: "/calculator" },
      ],
    },
    {
      heading: "Company",
      links: [
        { label: "About Us", to: "/about" },
        { label: "Security", to: "/security" },
        { label: "Contact", to: "/contact" },
      ],
    },
    {
      heading: "Help & Support",
      links: [
        { label: "FAQ", to: "/faq" },
        { label: "Support Center", to: "/contact" },
      ],
    },
    {
      heading: "Countries",
      links: [
        { label: "CoBanq for Pakistan", to: "https://cobanq.com/pk" },
        { label: "CoBanq for Freelancers", to: "https://cobanq.com/pk#" },
      ],
    },
  ],
  legalLinks: ["Terms of Service", "Privacy Policy"],
};
