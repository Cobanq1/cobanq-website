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
    {
      label: "Solutions",
      to: "/solutions",
      dropdown: [
        {
          icon: "Send",
          label: "Personal Money Transfers",
          description: "Bhejo — send money home to family and friends",
          to: "/send-money",
        },
        {
          icon: "Laptop",
          label: "Freelancers",
          description: "Get paid from clients and platforms worldwide",
          to: "/freelancers",
        },
        {
          icon: "Building2",
          label: "Business Payments",
          description: "Cross-border payments built to scale",
          to: "/business",
        },
        {
          icon: "Users",
          label: "Payroll",
          description: "Pay distributed teams in their own currency",
          to: "/payroll",
        },
        {
          icon: "Wallet",
          label: "Multi-Currency Wallets",
          description: "Hold and manage GBP, EUR, USD, and more",
          to: "/wallets",
        },
        {
          icon: "Landmark",
          label: "Correspondent Banking & Partnerships",
          description: "Expand payout corridors with us",
          to: "/business",
        },
      ],
    },
    { label: "Business", to: "/business" },
    { label: "Pricing", to: "/pricing" },
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
    "CoBanq is a modern financial platform that makes international money transfers and payments seamless, secure, and affordable — for individuals sending money home with Bhejo, and for businesses moving money across borders.",
  primaryCta: "Get started",
  secondaryCta: "See how it works",
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

// Text mentions only — not logos. Showing a platform's actual brand mark
// here would imply a formal partnership CoBanq doesn't have; this is just
// naming platforms freelancers/sellers commonly get paid from, in plain
// text, the same way a payments site might say "works with PayPal."
// Platform marks load from the Simple Icons CDN at the visitor's browser
// (nominative use — naming where payouts come from, not claiming any
// partnership). Daraz isn't on Simple Icons, so it stays text-only until
// a mark is supplied.
export const platformsMarquee = {
  caption: "Popular with freelancers and sellers who get paid from",
  platforms: [
    { name: "Upwork", slug: "upwork" },
    { name: "Fiverr", slug: "fiverr" },
    { name: "Amazon", slug: "amazon" },
    { name: "eBay", slug: "ebay" },
    { name: "Daraz", slug: null },
    { name: "Airbnb", slug: "airbnb" },
    { name: "Freelancer.com", slug: "freelancer" },
    { name: "Etsy", slug: "etsy" },
  ],
};

// Illustrative "live activity" popups shown briefly on the homepage —
// there's no live backend behind this site, so these are a cycling demo
// of the kind of activity the product implies, not real transaction
// data. Each popup carries a small "Demo activity" tag for honesty.
export const liveActivity = [
  { name: "Amina Y.", countryCode: "ng", amount: "+₦210,000", direction: "received" },
  { name: "Farhan I.", countryCode: "pk", amount: "-₨45,000", direction: "sent" },
  { name: "Priya N.", countryCode: "in", amount: "+₹64,200", direction: "received" },
  { name: "Carlos M.", countryCode: "ph", amount: "-₱18,500", direction: "sent" },
  { name: "Grace O.", countryCode: "gb", amount: "-£78.00", direction: "sent" },
  { name: "David K.", countryCode: "ae", amount: "+AED 3,200", direction: "received" },
  { name: "Maria S.", countryCode: "us", amount: "+$1,200.00", direction: "received" },
  { name: "Yusuf B.", countryCode: "bd", amount: "-৳12,400", direction: "sent" },
  // Major currencies
  { name: "Sofia M.", countryCode: "de", amount: "+€2,150.00", direction: "received" },
  { name: "Émile D.", countryCode: "fr", amount: "-€430.00", direction: "sent" },
  { name: "Kenji T.", countryCode: "jp", amount: "+¥85,000", direction: "received" },
  { name: "Liam O.", countryCode: "ca", amount: "-CA$320.00", direction: "sent" },
  { name: "Chloe W.", countryCode: "au", amount: "+AU$1,050.00", direction: "received" },
  { name: "Elena R.", countryCode: "ch", amount: "-CHF 210.00", direction: "sent" },
  { name: "Daniel B.", countryCode: "us", amount: "-$640.00", direction: "sent" },
  { name: "Hannah P.", countryCode: "gb", amount: "+£920.00", direction: "received" },
];

export const stats = [
  { value: "2003", label: "Founded in the UK" },
  { value: "30+", label: "Global payout corridors" },
  { value: "FCA", label: "Regulated, No. 508565" },
  { value: "24/7", label: "Account tracking & support" },
];

// A mocked-up screenshot of the account dashboard for the homepage.
// Every name, address, account number, and figure below is invented —
// none of it is a real customer's data.
export const dashboardPreview = {
  heading: "See your CoBanq dashboard",
  subhead: "One place to track balances, send payments, and manage your account.",
  disclaimer: "Demo dashboard — illustrative account and figures, not a real customer's data.",
  version: "Version 1.12.6",
  lastLogin: "Last login: Today",
  userName: "Jordan Lee",
  userInitials: "JL",
  navItems: ["Dashboard", "Payments", "Beneficiaries", "Foreign Exchange", "Transactions"],
  quickActions: [
    { icon: "Send", label: "Send Money" },
    { icon: "RefreshCcw", label: "Exchange" },
  ],
  activeCurrency: "USD",
  balances: [
    { code: "USD", countryCode: "us", amount: "$18,655.11", active: true },
    { code: "GBP", countryCode: "gb", amount: "£15,658.34", active: false },
    { code: "EUR", countryCode: "eu", amount: "€2,586.03", active: false },
  ],
  account: {
    name: "Vertex Trading Ltd",
    address: "42 Market Street, London, United Kingdom, EC1A 1BB",
    accountNo: "10293847",
    sortCode: "04-00-72",
    swift: "COBAGB2L",
    iban: "GB29 COBA 0400 7212 3456 78",
    indexLabel: "Account 1 of 2",
  },
  needHelp: {
    heading: "Need Help?",
    body: "If you need help, please reach out to our support team.",
    cta: "Contact",
  },
  payments: [
    {
      name: "TXN-58217-CQ",
      avatarType: "person",
      date: "",
      countryCode: "us",
      amount: "$3,240.50",
      fee: "0",
      status: "Completed",
    },
    {
      name: "TXN-58204-KL",
      avatarType: "person",
      date: "",
      countryCode: "gb",
      amount: "£1,120.00",
      fee: "0",
      status: "Completed",
    },
    {
      name: "Northwind Supplies Ltd",
      avatarType: "company",
      date: "2026-07-10",
      countryCode: "de",
      amount: "€2,480.00",
      fee: "0",
      status: "Approved",
    },
    {
      name: "TXN-58177-ZX",
      avatarType: "person",
      date: "",
      countryCode: "us",
      amount: "$980.00",
      fee: "0",
      status: "Completed",
    },
    {
      name: "Ferro Trade Ltd",
      avatarType: "company",
      date: "2026-07-09",
      countryCode: "gb",
      amount: "$15,000.00",
      fee: "0",
      status: "Approved",
    },
  ],
};

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
    countryCode: "ng",
    icon: "Ship",
    quote:
      "CoBanq lets me pay overseas suppliers and collect from buyers abroad without opening a dozen local bank accounts. One wallet, every currency I trade in.",
  },
  {
    name: "Farhan Iqbal",
    role: "Wholesale Store Owner",
    country: "Pakistan",
    countryCode: "pk",
    icon: "Store",
    quote:
      "My distributors pay me in different currencies every week. CoBanq converts and settles it all without me chasing exchange rates myself.",
  },
  {
    name: "Priya Nair",
    role: "Payroll Manager",
    country: "India",
    countryCode: "in",
    icon: "Users",
    quote:
      "We run payroll for a team spread across three countries. CoBanq's multi-currency wallets mean everyone gets paid on time, in their own currency.",
  },
  {
    name: "Carlos Mendes",
    role: "Freelance Web Developer",
    country: "Philippines",
    countryCode: "ph",
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
    tag: "Business",
    icon: "Wallet",
    title: "Business wallets for every currency you trade in",
    description:
      "Businesses collect and pay out in GBP, EUR, USD, JPY, AED, PKR, and more — from one wallet.",
    stat: { value: "6+", label: "Currencies supported" },
    linkLabel: "Explore business wallets",
    linkTo: "/wallets",
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
    headline: "Send money home with Bhejo",
    description:
      "For individuals, CoBanq offers one thing done well: Bhejo, our personal remittance service. Transfer to family and friends in India, Nigeria, the Philippines, Pakistan, Bangladesh, and more — with the fee and rate shown before you confirm.",
    bullets: [
      "Transfers processed within 24 hours",
      "Bank transfer, debit or credit card",
      "Real-time tracking from your dashboard",
    ],
    cta: { label: "Send money with Bhejo", to: "/send-money" },
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
  { countryCode: "pk", name: "Pakistan", currency: "PKR", to: "https://cobanq.com/pk" },
  { countryCode: "in", name: "India", currency: "INR", to: null },
  { countryCode: "ng", name: "Nigeria", currency: "NGN", to: null },
  { countryCode: "ph", name: "Philippines", currency: "PHP", to: null },
  { countryCode: "bd", name: "Bangladesh", currency: "BDT", to: null },
  { countryCode: "ae", name: "UAE", currency: "AED", to: null },
];

// -------------------- Solutions (overview) page --------------------

export const solutions = {
  heading: "All solutions",
  subhead:
    "One regulated platform, built for however you move money across borders — whether that's sending money home, running a business, or partnering with us on payments infrastructure.",
  items: [
    {
      icon: "Send",
      title: "Personal money transfers — Bhejo",
      description:
        "Bhejo, powered by CoBanq, is our remittance service for individuals: send money home to family and friends in India, Nigeria, the Philippines, Pakistan, Bangladesh, and many more countries, with the fee and rate shown upfront.",
      linkLabel: "Send with Bhejo",
      linkTo: "/send-money",
    },
    {
      icon: "Wallet",
      title: "Multi-currency wallets",
      description:
        "Collect, hold, and pay out in GBP, EUR, USD, JPY, AED, PKR, and more — one wallet for businesses working across currencies.",
      linkLabel: "Explore wallets",
      linkTo: "/wallets",
    },
    {
      icon: "Building2",
      title: "Business payments",
      description:
        "Cross-border payment solutions designed for scale, compliance, and speed — from global payouts to supplier settlements.",
      industries: ["Import & Export", "Software Houses", "Wholesale & Retail", "Manufacturing", "Logistics"],
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

// -------------------- Pricing page --------------------

export const pricing = {
  eyebrow: "CoBanq / Pricing",
  heading: "Simple fees that scale with how you get paid.",
  subhead:
    "Three ways to price, built around who you are — freelancers and IT contractors pay nothing monthly, while businesses and payroll companies pick the package that matches their volume.",
  categories: [
    {
      id: "freelancers",
      label: "Freelancers & IT",
      blurb: "One simple plan — no monthly fee. You only pay when money moves.",
      plans: [
        {
          tier: "free",
          tag: "Freelancers & IT",
          name: "Freelancer & IT",
          description:
            "For freelancers, IT contractors, and software professionals getting paid by clients anywhere.",
          monthlyFee: "Free",
          monthlyFeeNote: "No monthly account fee",
          featured: true,
          sections: [
            {
              title: "Receive payments",
              rows: [
                { label: "From another CoBanq balance", value: "Free" },
                { label: "Via a local-currency receiving account", value: "Free" },
                { label: "Via a non-local currency account", value: "1%" },
                { label: "From a payer using a credit card", value: "3.5% + $0.30" },
                { label: "From a payer using ACH / UK / EU bank", value: "1%" },
                { label: "From a payer using PayPal", value: "3.5% + $0.30" },
              ],
            },
            {
              title: "Send payments",
              rows: [{ label: "To another CoBanq account, same country", value: "Free" }],
            },
            {
              title: "Withdraw & transfer",
              rows: [
                { label: "To a UK bank account, GBP → GBP", value: "£0.005" },
                { label: "To a bank account, same country & currency (non-GBP)", value: "Free" },
                { label: "To a bank account, different currency", value: "Free transfer*" },
              ],
            },
            {
              title: "Currency exchange",
              rows: [{ label: "Move funds between your CoBanq balances", value: "Free transfer*" }],
            },
          ],
        },
      ],
      salesCta: {
        threshold: "Processing $50,000+ / month",
        description: "High-volume freelancers and IT contractors get custom rates. Let's talk.",
      },
    },
    {
      id: "business",
      label: "Business Enterprise",
      blurb:
        "Bronze, Gold, and Platinum packages — your transaction fees drop as you move up.",
      plans: [
        {
          tier: "bronze",
          tag: "Business Enterprise",
          name: "Bronze",
          description: "Getting started with cross-border business payments.",
          monthlyFee: "£49",
          monthlyFeeNote: "Flat monthly account fee",
          featured: false,
          headlineFee: { label: "Transaction fee", value: "1%" },
          sections: [
            {
              title: "Receive payments",
              rows: [
                { label: "From another CoBanq balance", value: "Free" },
                { label: "From clients via card, ACH, or bank", value: "1%" },
              ],
            },
            {
              title: "Send payments",
              rows: [
                { label: "To another CoBanq account, same country", value: "Free" },
                { label: "International supplier payments", value: "1%" },
              ],
            },
            {
              title: "Withdraw & transfer",
              rows: [
                { label: "To a UK bank account, GBP → GBP", value: "£0.005" },
                { label: "To a bank account, same country & currency (non-GBP)", value: "Free" },
                { label: "To a bank account, different currency", value: "Free transfer*" },
              ],
            },
            {
              title: "Currency exchange",
              rows: [{ label: "Move funds between your CoBanq balances", value: "Free transfer*" }],
            },
          ],
        },
        {
          tier: "gold",
          tag: "Business Enterprise",
          name: "Gold",
          description: "For growing companies moving money every week.",
          monthlyFee: "£99",
          monthlyFeeNote: "Flat monthly account fee",
          featured: true,
          headlineFee: { label: "Transaction fee", value: "0.75%" },
          sections: [
            {
              title: "Receive payments",
              rows: [
                { label: "From another CoBanq balance", value: "Free" },
                { label: "From clients via card, ACH, or bank", value: "0.75%" },
              ],
            },
            {
              title: "Send payments",
              rows: [
                { label: "To another CoBanq account, same country", value: "Free" },
                { label: "International supplier payments", value: "0.75%" },
              ],
            },
            {
              title: "Withdraw & transfer",
              rows: [
                { label: "To a UK bank account, GBP → GBP", value: "£0.005" },
                { label: "To a bank account, same country & currency (non-GBP)", value: "Free" },
                { label: "To a bank account, different currency", value: "Free transfer*" },
              ],
            },
            {
              title: "Currency exchange",
              rows: [{ label: "Move funds between your CoBanq balances", value: "Free transfer*" }],
            },
          ],
        },
        {
          tier: "platinum",
          tag: "Business Enterprise",
          name: "Platinum",
          description: "Our best rates, for high-volume operations.",
          monthlyFee: "£199",
          monthlyFeeNote: "Flat monthly account fee",
          featured: false,
          headlineFee: { label: "Transaction fee", value: "0.5%" },
          sections: [
            {
              title: "Receive payments",
              rows: [
                { label: "From another CoBanq balance", value: "Free" },
                { label: "From clients via card, ACH, or bank", value: "0.5%" },
              ],
            },
            {
              title: "Send payments",
              rows: [
                { label: "To another CoBanq account, same country", value: "Free" },
                { label: "International supplier payments", value: "0.5%" },
              ],
            },
            {
              title: "Withdraw & transfer",
              rows: [
                { label: "To a UK bank account, GBP → GBP", value: "£0.005" },
                { label: "To a bank account, same country & currency (non-GBP)", value: "Free" },
                { label: "To a bank account, different currency", value: "Free transfer*" },
              ],
            },
            {
              title: "Currency exchange",
              rows: [{ label: "Move funds between your CoBanq balances", value: "Free transfer*" }],
            },
          ],
        },
      ],
      salesCta: {
        threshold: "Enterprise volume?",
        description: "Custom pricing built around your flows — talk to our business team.",
      },
    },
    {
      id: "payroll",
      label: "Payroll Companies",
      blurb:
        "Per-payout pricing that gets cheaper at scale — pay a flat fee for every employee payout.",
      plans: [
        {
          tier: "bronze",
          tag: "Payroll Companies",
          name: "Bronze",
          description: "For payroll providers running their first global batches.",
          monthlyFee: "£49",
          monthlyFeeNote: "Flat monthly account fee",
          featured: false,
          headlineFee: { label: "Per employee payout", value: "£1.00" },
          sections: [
            {
              title: "Payroll payouts",
              rows: [
                { label: "Per employee payout", value: "£1.00" },
                { label: "Batch upload (any team size)", value: "Free" },
                { label: "Payout to another CoBanq account", value: "Free" },
              ],
            },
            {
              title: "Fund your account",
              rows: [
                { label: "From your business bank account", value: "Free" },
                { label: "Fund in one currency, pay out in another", value: "Free transfer*" },
              ],
            },
            {
              title: "Withdraw & transfer",
              rows: [
                { label: "To a UK bank account, GBP → GBP", value: "£0.005" },
                { label: "To a bank account, same country & currency (non-GBP)", value: "Free" },
              ],
            },
            {
              title: "Currency exchange",
              rows: [{ label: "Move funds between your CoBanq balances", value: "Free transfer*" }],
            },
          ],
        },
        {
          tier: "gold",
          tag: "Payroll Companies",
          name: "Gold",
          description: "For payroll companies paying teams across several countries.",
          monthlyFee: "£99",
          monthlyFeeNote: "Flat monthly account fee",
          featured: true,
          headlineFee: { label: "Per employee payout", value: "£0.75" },
          sections: [
            {
              title: "Payroll payouts",
              rows: [
                { label: "Per employee payout", value: "£0.75" },
                { label: "Batch upload (any team size)", value: "Free" },
                { label: "Payout to another CoBanq account", value: "Free" },
              ],
            },
            {
              title: "Fund your account",
              rows: [
                { label: "From your business bank account", value: "Free" },
                { label: "Fund in one currency, pay out in another", value: "Free transfer*" },
              ],
            },
            {
              title: "Withdraw & transfer",
              rows: [
                { label: "To a UK bank account, GBP → GBP", value: "£0.005" },
                { label: "To a bank account, same country & currency (non-GBP)", value: "Free" },
              ],
            },
            {
              title: "Currency exchange",
              rows: [{ label: "Move funds between your CoBanq balances", value: "Free transfer*" }],
            },
          ],
        },
        {
          tier: "platinum",
          tag: "Payroll Companies",
          name: "Platinum",
          description: "Our lowest per-payout rate, for high-volume payroll runs.",
          monthlyFee: "£199",
          monthlyFeeNote: "Flat monthly account fee",
          featured: false,
          headlineFee: { label: "Per employee payout", value: "£0.50" },
          sections: [
            {
              title: "Payroll payouts",
              rows: [
                { label: "Per employee payout", value: "£0.50" },
                { label: "Batch upload (any team size)", value: "Free" },
                { label: "Payout to another CoBanq account", value: "Free" },
              ],
            },
            {
              title: "Fund your account",
              rows: [
                { label: "From your business bank account", value: "Free" },
                { label: "Fund in one currency, pay out in another", value: "Free transfer*" },
              ],
            },
            {
              title: "Withdraw & transfer",
              rows: [
                { label: "To a UK bank account, GBP → GBP", value: "£0.005" },
                { label: "To a bank account, same country & currency (non-GBP)", value: "Free" },
              ],
            },
            {
              title: "Currency exchange",
              rows: [{ label: "Move funds between your CoBanq balances", value: "Free transfer*" }],
            },
          ],
        },
      ],
      salesCta: {
        threshold: "Paying thousands of employees a month?",
        description: "Volume payroll pricing is negotiable — talk to our payroll team.",
      },
    },
  ],
  footnote:
    "Fees shown are standard rates and may vary by sender/recipient location, payment method, and currency corridor. Percentage-based fees apply per transaction unless noted otherwise. Businesses processing significant monthly volume should contact Sales for custom pricing.\n\n*No transfer fee on currency exchange or cross-currency withdrawals — a small margin is built into the exchange rate instead of a separate charge.",
  faq: [
    {
      q: "How are CoBanq's fees structured?",
      a: "Freelancers & IT professionals pay no monthly fee — just small per-transaction fees like 1% on receiving via bank transfer. Business Enterprise and Payroll Companies choose a Bronze, Gold, or Platinum package: a flat monthly fee, with transaction fees that drop as you move up the tiers. The exact rate is always shown before you confirm a transfer.",
    },
    {
      q: "Are there any hidden charges?",
      a: "No. Every fee is listed on this page by category — receiving, sending, withdrawing, currency exchange, and payroll payouts. If a transaction type isn't listed, it's free.",
    },
    {
      q: "What's the difference between Bronze, Gold, and Platinum?",
      a: "The monthly fee rises and your transaction fees fall. For Business Enterprise, the transaction fee drops from 1% (Bronze) to 0.75% (Gold) to 0.5% (Platinum). For Payroll Companies, the per-employee payout fee drops from £1.00 to £0.75 to £0.50. If you move enough volume, a higher tier quickly pays for itself.",
    },
    {
      q: "What withdrawal fees apply for bank transfers?",
      a: "Withdrawing to a UK bank account in GBP carries a small fixed fee (£0.005). Withdrawing to a bank account in the same country and currency outside the UK is free. Withdrawing to a different currency has no separate transfer fee — the cost is built into the exchange rate, shown upfront before you confirm.",
    },
    {
      q: "Which plan is right for me?",
      a: "Freelancers & IT is for individuals and contractors invoicing clients directly — it's free monthly, so you can start today. Business Enterprise suits companies collecting from customers and paying suppliers across borders. Payroll Companies is for payroll providers and employers paying staff in multiple countries.",
    },
    {
      q: "Can I switch tiers later?",
      a: "Yes — you can move between Bronze, Gold, and Platinum as your volume changes. Upgrades take effect immediately; your new transaction rates apply from your next transfer.",
    },
    {
      q: "Is CoBanq regulated?",
      a: "Yes — CoBanq Ltd is authorized and regulated by the Financial Conduct Authority (FCA) under the Payment Services Regulations 2017, registration no. 508565. CoBanq is not a bank.",
    },
  ],
};

// -------------------- Send Money page --------------------

// CoBanq's remittance service runs under its own consumer brand, Bhejo —
// the personal money transfers page carries the Bhejo identity with a
// "Powered by CoBanq" lockup. Reviews are illustrative (invented names),
// flagged as such on the page — no fabricated ratings or review counts.
export const sendMoney = {
  brand: "Bhejo",
  poweredBy: "Powered by CoBanq",
  eyebrow: "Personal money transfers",
  heading: "Send international money transfers from the United Kingdom",
  subhead:
    "Transfer money online with clear pricing, simple ways to pay, and fast delivery. Bhejo is CoBanq's personal remittance service, built on 20+ years of FCA-regulated payments experience.",
  sendCard: {
    heading: "Where would you like to send money?",
    fromLabel: "Sending from:",
    from: { countryCode: "gb", name: "United Kingdom" },
    toLabel: "Sending to:",
    toPlaceholder: "Select a country",
    cta: "Start sending",
  },
  flagStrip: "Send to these countries and more",
  reviews: {
    heading: "See what our customers are saying",
    disclaimer:
      "Illustrative reviews — names and details are invented for this redesign, not real customer testimonials.",
    items: [
      {
        title: "Arrived the same day",
        body: "Sent money to my family in Lahore and it arrived the same day. The rate was exactly what I was shown before I confirmed.",
        name: "Hamza R.",
        detail: "Sends to Pakistan",
      },
      {
        title: "No surprises on fees",
        body: "I send money to my parents in Manila every month. The fee is clear before I press send — no surprises at the other end.",
        name: "Grace D.",
        detail: "Sends to the Philippines",
      },
      {
        title: "Better than my bank",
        body: "Switched from my bank after seeing how much I was losing on exchange rates. Should have done it years ago.",
        name: "Chidi O.",
        detail: "Sends to Nigeria",
      },
      {
        title: "Quick and simple",
        body: "Simple, quick, and my brother in Dhaka got the money within hours. The app-free web flow works fine on my phone.",
        name: "Rafiq A.",
        detail: "Sends to Bangladesh",
      },
    ],
  },
  countriesGrid: {
    heading: "Where can you send money with Bhejo?",
    subhead: "Select a country to get started with international money transfers.",
    note: "More corridors are supported beyond this list — check the transfer flow for the full set.",
  },
  paymentMethods: ["Bank transfer", "Debit card", "Credit card"],
};

// -------------------- Freelancers page --------------------

export const freelancers = {
  eyebrow: "For Freelancers",
  heading: "Get paid by every client, on every platform",
  subhead:
    "Whether you invoice clients directly or get paid through freelance platforms, CoBanq gives you one place to receive, hold, and withdraw your earnings — in the currency your clients already pay in.",
  features: [
    {
      icon: "Globe",
      title: "Receive in multiple currencies",
      description: "Collect USD, GBP, EUR, and more without opening a bank account in each country.",
    },
    {
      icon: "Zap",
      title: "Fast withdrawals",
      description: "Move funds to your local bank account in as little as 24 hours.",
    },
    {
      icon: "BarChart3",
      title: "Low conversion fees",
      description: "Keep more of what you earn with transparent, competitive exchange rates.",
    },
    {
      icon: "Laptop",
      title: "Works with how you already get paid",
      description:
        "Receive direct client invoices or payouts from freelance platforms like Upwork and Fiverr into the same wallet.",
    },
  ],
  mockup: {
    label: "Payment received",
    from: "Client payment — New York",
    amount: "+$1,240.00",
    note: "Available to withdraw instantly",
  },
  cta: "Start receiving payments",
};

// -------------------- Payroll page --------------------

export const payroll = {
  eyebrow: "For Business",
  heading: "Pay your global team, in their own currency",
  subhead:
    "Running payroll across borders shouldn't mean juggling multiple bank accounts and exchange rates. CoBanq lets you pay every team member in the currency they actually use.",
  features: [
    {
      icon: "Users",
      title: "Pay in local currency",
      description: "Each team member receives payroll in their own currency, converted at the rate shown upfront.",
    },
    {
      icon: "Repeat",
      title: "Batch payouts",
      description: "Send an entire team's payroll in one batch instead of individual transfers.",
    },
    {
      icon: "BarChart3",
      title: "Transparent fees",
      description: "See the exact cost of every payroll run before you confirm it.",
    },
    {
      icon: "ShieldCheck",
      title: "Compliance-ready",
      description: "Built on FCA-regulated infrastructure, with the audit trail a growing team needs.",
    },
  ],
  mockup: {
    label: "Payroll batch",
    rows: [
      { name: "Priya N.", countryCode: "in", amount: "₹64,200" },
      { name: "Carlos M.", countryCode: "ph", amount: "₱18,500" },
      { name: "Amina Y.", countryCode: "ng", amount: "₦210,000" },
    ],
  },
  cta: "Talk to our business team",
};

// -------------------- Multi-Currency Wallets page --------------------

export const wallets = {
  eyebrow: "Multi-Currency Wallets for Business",
  heading: "One wallet, every currency your business works in",
  subhead:
    "A business account that holds balances in GBP, EUR, USD, JPY, AED, PKR, and more — collect, convert, and pay out without juggling separate bank accounts for every currency. Sending money home as an individual? That's Bhejo, our personal remittance service.",
  features: [
    {
      icon: "Wallet",
      title: "Hold multiple balances",
      description: "Keep funds in the currencies you actually use, instead of converting on every transaction.",
    },
    {
      icon: "Repeat",
      title: "Convert when it suits you",
      description: "Choose when to convert between currencies, at a rate shown before you confirm.",
    },
    {
      icon: "CreditCard",
      title: "Spend or withdraw locally",
      description: "Move funds to your local bank account, or spend directly from your wallet balance.",
    },
    {
      icon: "ShieldCheck",
      title: "Safeguarded and regulated",
      description: "Built on FCA-regulated infrastructure, with your funds held to regulatory safeguarding standards.",
    },
  ],
  mockup: {
    label: "Your balances",
    balances: [
      { code: "GBP", amount: "1,240.00" },
      { code: "USD", amount: "850.00" },
      { code: "EUR", amount: "300.00" },
    ],
  },
  cta: "Explore multi-currency wallets",
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
    countryCode: "pk",
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
  regulatoryNote:
    "Cobanq Ltd is a company registered in England and Wales with company number 04995400 and ICO registration number Z3153690. Cobanq Ltd is authorised and regulated by the Financial Conduct Authority as an Authorised Payment Institution under the Payment Services Regulations 2017, with Firm Reference Number 508565. Cobanq is not a Bank.",
  columns: [
    {
      // Mirrors the navbar Solutions dropdown, plus the overview/tool pages.
      heading: "Solutions",
      links: [
        { label: "All Solutions", to: "/solutions" },
        { label: "Personal Money Transfers", to: "/send-money" },
        { label: "Freelancers", to: "/freelancers" },
        { label: "Business Payments", to: "/business" },
        { label: "Payroll", to: "/payroll" },
        { label: "Multi-Currency Wallets", to: "/wallets" },
        { label: "Correspondent Banking & Partnerships", to: "/business" },
        { label: "Calculator", to: "/calculator" },
      ],
    },
    {
      heading: "Company",
      links: [
        { label: "About Us", to: "/about" },
        { label: "Security", to: "/security" },
        { label: "Careers", to: "/careers" },
        { label: "Press", to: "/press" },
        { label: "Contact", to: "/contact" },
      ],
    },
    {
      heading: "Help & Support",
      links: [
        { label: "FAQ", to: "/faq" },
        { label: "Support Center", to: "/contact" },
        { label: "Complaints Procedure", to: "/complaints" },
        { label: "Accessibility", to: "/accessibility" },
      ],
    },
    {
      heading: "Countries",
      links: [{ label: "CoBanq for Freelancers", to: "https://cobanq.com/pk#" }],
    },
  ],
  legalLinks: [
    { label: "Terms of Service", to: "/terms" },
    { label: "Privacy Policy", to: "/privacy" },
    { label: "Cookie Policy", to: "/cookies" },
  ],
  copyrightRange: "2003–2026",
};

// -------------------- Careers, Press, Accessibility, Complaints --------------------
// Honest, minimal pages — no fabricated job listings or press releases.
// Replace with real content whenever you have it.

export const careers = {
  heading: "Careers at CoBanq",
  intro:
    "We're a small, FCA-regulated team building cross-border payments infrastructure. We don't have specific open roles listed here yet — but we're always glad to hear from people interested in fintech, compliance, and payments.",
  cta: "Get in touch",
  ctaTo: "/contact",
};

export const press = {
  heading: "Press & Media",
  intro:
    "For press inquiries, interview requests, or media assets, please contact our team directly. We don't have published press releases listed here yet.",
  cta: "Contact us",
  ctaTo: "/contact",
};

export const accessibility = {
  heading: "Accessibility Statement",
  intro:
    "CoBanq is committed to making our website usable by as many people as possible, regardless of ability or technology.",
  commitments: [
    "Designing with sufficient color contrast and readable text sizing",
    "Supporting keyboard navigation across the site",
    "Using semantic HTML and labelling for screen reader compatibility",
    "Continuing to test and improve accessibility as the site evolves",
  ],
  contactNote:
    "If you experience any difficulty accessing content on this site, please contact us at support@cobanq.com and we'll do our best to help.",
};

export const complaints = {
  heading: "Complaints Procedure",
  intro:
    "CoBanq Ltd is committed to resolving customer complaints fairly and promptly, in line with our obligations as an FCA-regulated firm under the Payment Services Regulations 2017.",
  steps: [
    {
      title: "1. Contact us",
      description:
        "Email support@cobanq.com with details of your complaint. We aim to acknowledge all complaints promptly.",
    },
    {
      title: "2. We investigate",
      description:
        "Our team will review your complaint and aim to provide a final response as soon as possible, and within the timeframes required by FCA rules.",
    },
    {
      title: "3. Financial Ombudsman Service",
      description:
        "If you're not satisfied with our response, you may be entitled to refer your complaint to the Financial Ombudsman Service, free of charge.",
    },
  ],
  placeholderNote:
    "This is placeholder complaints-procedure copy for the redesign — replace with your reviewed, compliant text before launch.",
};

// -------------------- Legal pages (Terms / Privacy / Cookies) --------------------
// Placeholder legal text — this is NOT real legal copy. Replace every
// section with text reviewed by your legal/compliance team before launch.

export const legalPages = {
  terms: {
    heading: "Terms of Service",
    updated: "Last updated: placeholder — add real date on publish",
    sections: [
      {
        title: "1. Introduction",
        body: "These Terms of Service govern your use of CoBanq's website and services. This is placeholder text for the redesign — replace with your reviewed legal terms before launch.",
      },
      {
        title: "2. Using our services",
        body: "Placeholder section describing eligibility, account registration, and acceptable use.",
      },
      {
        title: "3. Fees and payments",
        body: "Placeholder section describing how fees are calculated and disclosed before a transfer is confirmed.",
      },
      {
        title: "4. Liability and disclaimers",
        body: "Placeholder section — to be drafted with your legal team.",
      },
    ],
  },
  privacy: {
    heading: "Privacy Policy",
    updated: "Last updated: placeholder — add real date on publish",
    sections: [
      {
        title: "1. Information we collect",
        body: "Placeholder section describing the categories of personal data CoBanq collects (e.g. identity, contact, and transaction data for regulatory verification).",
      },
      {
        title: "2. How we use your information",
        body: "Placeholder section describing use for service delivery, fraud prevention, and compliance with AML/KYC obligations.",
      },
      {
        title: "3. Your rights",
        body: "Placeholder section describing data subject rights under UK GDPR.",
      },
      {
        title: "4. Contact",
        body: "For data protection inquiries, contact support@cobanq.com.",
      },
    ],
  },
  cookies: {
    heading: "Cookie Policy",
    updated: "Last updated: placeholder — add real date on publish",
    sections: [
      {
        title: "1. What are cookies",
        body: "Placeholder section explaining cookies and similar technologies used on this site.",
      },
      {
        title: "2. How we use cookies",
        body: "Placeholder section describing essential, analytics, and preference cookies.",
      },
      {
        title: "3. Managing cookies",
        body: "Placeholder section describing how visitors can manage or disable cookies in their browser.",
      },
    ],
  },
};
