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

// Placeholder testimonials — replace with real customer quotes and names
// when available. Avatars are illustrated placeholders, not real photos.
export const testimonials = {
  heading: "Built for individuals and businesses alike",
  items: [
    {
      quote:
        "Sending money home used to take days and I never knew the real fee until after. With CoBanq I see the rate upfront and it lands the next day.",
      name: "Amara Chen",
      role: "Personal customer, Singapore",
      initials: "AC",
    },
    {
      quote:
        "As a UK business paying overseas suppliers, switching to CoBanq's cross-border payment platform saved us real money on every settlement.",
      name: "Daniel Osei",
      role: "Founder, Ferro Trade Ltd",
      initials: "DO",
    },
    {
      quote:
        "We partnered with CoBanq to expand our payout corridors. Their correspondent banking network made last-mile delivery straightforward.",
      name: "Marisol Vega",
      role: "Operations Lead, partner fintech",
      initials: "MV",
    },
  ],
};

export const ctaBanner = {
  heading: "Ready to power the flow of your global capital?",
  subhead: "Join individuals and businesses already using CoBanq to send, collect, and pay out worldwide.",
  primaryCta: "Get started",
  secondaryCta: "Talk to our business team",
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
      linkTo: "/#how-it-works",
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

export const footer = {
  description:
    "CoBanq is a modern financial platform designed to make international money transfers and payments seamless, secure, and affordable.",
  regulatoryNote: "CoBanq is regulated by the Financial Conduct Authority (FCA) and holds an API license. CoBanq is not a bank.",
  columns: [
    {
      heading: "Solutions",
      links: [
        { label: "All Solutions", to: "/solutions" },
        { label: "Calculator", to: "/calculator" },
      ],
    },
    {
      heading: "Company",
      links: [
        { label: "About Us", to: "/about" },
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
  ],
  legalLinks: ["Terms of Service", "Privacy Policy"],
};
