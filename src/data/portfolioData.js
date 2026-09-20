export const personalInfo = {
  name: "Oyes Kuruni",
  titles: [
    "Web Developer",
    "Web Analyst",
    "Digital Marketer",
    "Conversion Tracking Specialist"
  ],
  tagline: "Architecting high-converting web applications with server-grade tracking, advanced dataLayer engineering, and precision marketing attribution.",
  bio: "With over 5 years of multidisciplinary experience and 1,000+ successful global tracking & development projects, I bridge the critical gap between front-end engineering, first-party data infrastructure, and revenue-generating advertising campaigns.",
  location: "Available Worldwide (Remote / Strategic Consulting)",
  email: "oyeskuruni@gmail.com",
  status: "Available for Q3/Q4 Projects & Strategic Consulting",
  responseTime: "< 2 Hours",
  experienceYears: "5+",
  projectsCompleted: "1,000+",
  adSpendTracked: "$25M+",
  dataAccuracyRate: "99.8%",
  socials: {
    github: "https://github.com/oyeskuruni",
    linkedin: "https://linkedin.com/in/oyeskuruni",
    twitter: "https://x.com/oyeskuruni",
    calendly: "https://calendly.com",
  },
  stats: [
    { value: "5+", label: "Years Experience", description: "In Web Dev & Analytics" },
    { value: "1,000+", label: "Global Projects", description: "Successfully Delivered" },
    { value: "$25M+", label: "Ad Spend Tracked", description: "Across Meta, Google & TikTok" },
    { value: "99.8%", label: "Data Accuracy", description: "First-Party Signal Match" },
  ],
  floatingBadges: [
    { id: "ga4", name: "GA4", label: "Google Analytics 4", color: "#F59E0B", icon: "BarChart3", metric: "Custom Event Pipelines", desc: "Measurement Protocol & BigQuery Export" },
    { id: "gtm", name: "GTM", label: "Google Tag Manager", color: "#3B82F6", icon: "Tags", metric: "Client & Server-Side", desc: "Cloud Run & Custom Event Listeners" },
    { id: "ads", name: "Google Ads", label: "Google Ads Tracking", color: "#EF4444", icon: "Target", metric: "Enhanced Conversions", desc: "Value-based & Lead Smart Bidding" },
    { id: "meta", name: "Meta CAPI", label: "Meta Conversions API", color: "#06B6D4", icon: "Share2", metric: "9.7/10 Match Quality", desc: "Deduplication & First-Party Cookies" },
    { id: "shopify", name: "Shopify", label: "Shopify Tracking", color: "#10B981", icon: "ShoppingBag", metric: "Liquid & Web Pixels", desc: "Headless & Native Checkout Tracking" },
  ]
};

export const aboutData = {
  headline: "Where High-Performance Code Meets Zero-Loss Tracking Architecture",
  paragraphs: [
    "Most web developers build user interfaces without understanding how ad platforms attribute revenue or why iOS Safari ITP cuts tracking windows. Most marketers spend thousands on campaigns without knowing why standard client-side pixels lose 25-35% of conversion signals.",
    "I operate at the convergence of all three disciplines: writing lightning-fast modern code in React and headless architectures, engineering bulletproof Server-Side GTM infrastructures, and optimizing conversion pipelines that maximize ROAS across Google, Meta, and Shopify.",
    "Over the past 5+ years, I have engineered and deployed over 1,000 global projects—from serverless tracking containers on Google Cloud to custom e-commerce dataLayers and high-converting web applications."
  ],
  highlights: [
    { number: "1,000+", label: "Projects Completed", detail: "Serving clients in the US, UK, EU, and Australia" },
    { number: "5+", label: "Years Experience", detail: "Mastering web dev, analytics & digital advertising" },
    { number: "9.7/10", label: "Average EMQ", detail: "Meta Conversions API Event Match Quality score" },
    { number: "100%", label: "First-Party Data", detail: "Full ownership bypassing ad blockers & cookie decay" }
  ]
};

// 12 Specialized Services requested by the user
export const servicesList = [
  {
    id: "ga4-setup",
    title: "GA4 Setup & Migration",
    category: "Analytics",
    shortDesc: "Complete setup, custom event taxonomy, user-properties, and e-commerce measurement for Google Analytics 4.",
    deliverables: ["Custom event configuration", "Enhanced measurement tuning", "Ecommerce data collection", "Cross-domain tracking"],
    icon: "BarChart3",
    color: "#F59E0B"
  },
  {
    id: "gtm-setup",
    title: "GTM Web Setup",
    category: "Tag Management",
    shortDesc: "Advanced Google Tag Manager container architecture with modular triggers, regex variables, and custom HTML/JS.",
    deliverables: ["Custom JavaScript triggers", "Container audit & hygiene", "Tag sequencing & priority", "Debug mode validation"],
    icon: "Tags",
    color: "#3B82F6"
  },
  {
    id: "conversion-tracking",
    title: "Conversion Tracking",
    category: "Attribution",
    shortDesc: "Precision tracking of revenue, leads, phone clicks, and micro-conversions across marketing channels.",
    deliverables: ["Multi-platform conversion tags", "Deduplication logic", "Funnel milestone tracking", "Micro-conversion audits"],
    icon: "Crosshair",
    color: "#10B981"
  },
  {
    id: "ecommerce-tracking",
    title: "Ecommerce Tracking",
    category: "Ecommerce",
    shortDesc: "End-to-end standard & custom ecommerce event implementation across Shopify, WooCommerce, and custom React apps.",
    deliverables: ["View item & list telemetry", "Add to cart & checkout flow", "Purchase revenue matching", "Refund & coupon tracking"],
    icon: "ShoppingCart",
    color: "#8B5CF6"
  },
  {
    id: "google-ads-tracking",
    title: "Google Ads Tracking",
    category: "Paid Search",
    shortDesc: "Google Ads Enhanced Conversions for web and leads, offline conversion import, and dynamic remarketing setup.",
    deliverables: ["Enhanced Conversions with user data", "Offline conversion upload sync", "Value-based smart bidding setup", "Call extension tracking"],
    icon: "Target",
    color: "#EF4444"
  },
  {
    id: "server-side-gtm",
    title: "Server-Side GTM (sGTM)",
    category: "Server Infrastructure",
    shortDesc: "Deployment of Server GTM on Google Cloud Run or Stape with custom subdomains to bypass ad blockers and extend cookie life.",
    deliverables: ["Cloud Run container deployment", "First-party subdomain routing", "Cookie lifetime restoration", "Reduced client JS overhead"],
    icon: "Server",
    color: "#06B6D4"
  },
  {
    id: "data-layer-setup",
    title: "Data Layer Setup",
    category: "Architecture",
    shortDesc: "Clean, standardized JavaScript dataLayer architecture designed to handle complex dynamic e-commerce events.",
    deliverables: ["Custom window.dataLayer schemas", "Reactive state sync", "Single Page App (SPA) pageviews", "Currency & promo tagging"],
    icon: "Layers",
    color: "#F97316"
  },
  {
    id: "form-tracking",
    title: "Form & Lead Tracking",
    category: "Lead Gen",
    shortDesc: "Flawless tracking of AJAX forms, HubSpot, Typeform, Calendly, and multi-step forms without false triggers.",
    deliverables: ["AJAX listener implementation", "iFrame & embedded form sync", "HubSpot & Typeform webhooks", "Lead attribution source"],
    icon: "FileText",
    color: "#14B8A6"
  },
  {
    id: "event-tracking",
    title: "Custom Event Tracking",
    category: "UX Analytics",
    shortDesc: "In-depth user interaction measurement: video plays, scroll depth, file downloads, CTA clicks, and interactive widgets.",
    deliverables: ["Video player telemetry", "Scroll & engagement metrics", "Outbound link detection", "Custom interaction dimensions"],
    icon: "Activity",
    color: "#6366F1"
  },
  {
    id: "tracking-debugging",
    title: "Tracking Debugging & Audit",
    category: "Troubleshooting",
    shortDesc: "Forensic audit and debugging of broken tags, duplicated purchases, missing conversions, and dataLayer errors.",
    deliverables: ["Tag conflict diagnosis", "Purchase duplication removal", "Consent mode verification", "Comprehensive health report"],
    icon: "Bug",
    color: "#EC4899"
  },
  {
    id: "wordpress-dev",
    title: "WordPress Development",
    category: "Web Development",
    shortDesc: "High-performance WordPress, WooCommerce, and custom theme development optimized for speed, SEO, and tracking.",
    deliverables: ["WooCommerce custom dataLayer", "Core Web Vitals tuning", "Custom plugin hooks", "Security & speed hardening"],
    icon: "Globe",
    color: "#38BDF8"
  },
  {
    id: "shopify-tracking",
    title: "Shopify Tracking & Liquid",
    category: "E-commerce",
    shortDesc: "Shopify Web Pixels API, Customer Events, and Liquid theme tracking integration with 100% order reconciliation.",
    deliverables: ["Web Pixels API sandbox setup", "Checkout Extensibility sync", "Meta CAPI Shopify App bypass", "Klaviyo & TikTok CAPI sync"],
    icon: "ShoppingBag",
    color: "#22C55E"
  }
];

// 11 Core Skills for the 3D Interactive Ecosystem requested by the user
export const coreSkills = [
  {
    id: "ga4",
    name: "Google Analytics 4",
    category: "Analytics",
    level: 98,
    icon: "BarChart3",
    color: "#F59E0B",
    description: "Expertise in GA4 property hierarchy, data streams, custom dimensions/metrics, Explorations, BigQuery streaming export, and Measurement Protocol.",
    tags: ["BigQuery", "Explorations", "Measurement Protocol", "Audiences"],
    connections: ["gtm", "sgtm", "data-layer", "ecommerce-tracking"]
  },
  {
    id: "gtm",
    name: "Google Tag Manager",
    category: "Analytics",
    level: 99,
    icon: "Tags",
    color: "#3B82F6",
    description: "Deep mastery of client-side GTM: custom JavaScript variables, regex lookups, DOM listeners, tag sequencing, and consent initialization.",
    tags: ["Custom JS", "DOM scraping", "Triggers", "Regex Variables"],
    connections: ["ga4", "sgtm", "google-ads", "data-layer"]
  },
  {
    id: "sgtm",
    name: "Server-Side GTM",
    category: "Analytics",
    level: 95,
    icon: "Server",
    color: "#06B6D4",
    description: "Architecture and deployment of Server GTM on Google Cloud Run and Stape with first-party custom routing to overcome iOS ITP and ad-blockers.",
    tags: ["Cloud Run", "Docker", "Stape", "First-Party Cookies"],
    connections: ["gtm", "ga4", "google-ads", "conversion-tracking"]
  },
  {
    id: "google-ads",
    name: "Google Ads Tracking",
    category: "Marketing",
    level: 96,
    icon: "Target",
    color: "#EF4444",
    description: "Enhanced Conversions for Web & Leads using SHA-256 hashed customer parameters, offline conversion sync, and cross-device smart bidding.",
    tags: ["Enhanced Conversions", "Smart Bidding", "Offline Sync", "Dynamic Remarketing"],
    connections: ["gtm", "conversion-tracking", "ecommerce-tracking"]
  },
  {
    id: "conversion-tracking",
    name: "Conversion Tracking",
    category: "Marketing",
    level: 98,
    icon: "Crosshair",
    color: "#10B981",
    description: "Multi-platform conversion architectures across Google Ads, Meta CAPI, TikTok Events API, and Pinterest with server-to-server deduplication.",
    tags: ["Event Deduplication", "EMQ 9.5+", "Multi-Touch", "Offline Sync"],
    connections: ["google-ads", "sgtm", "data-layer"]
  },
  {
    id: "ecommerce-tracking",
    name: "Ecommerce Tracking",
    category: "Analytics",
    level: 97,
    icon: "ShoppingCart",
    color: "#8B5CF6",
    description: "Complete implementation of the Google Analytics 4 standard e-commerce specification with refund, promo, and cart interaction tracking.",
    tags: ["Item Lists", "Cart Events", "Purchase Match", "Checkout Steps"],
    connections: ["ga4", "shopify", "woocommerce", "data-layer"]
  },
  {
    id: "data-layer",
    name: "Data Layer",
    category: "Development",
    level: 99,
    icon: "Layers",
    color: "#F97316",
    description: "Engineering clean, predictable, reactive dataLayer pipelines for Single Page Apps, headless front-ends, and monolithic CMS platforms.",
    tags: ["window.dataLayer", "Reactive Pushes", "SPA Listeners", "Data Hygiene"],
    connections: ["gtm", "ga4", "react", "shopify", "woocommerce"]
  },
  {
    id: "wordpress",
    name: "WordPress",
    category: "Development",
    level: 94,
    icon: "Globe",
    color: "#38BDF8",
    description: "Custom WordPress theme development, child theme code snippets, functions.php dataLayer injectors, and plugin performance optimization.",
    tags: ["PHP", "Hooks & Filters", "Custom Post Types", "Core Web Vitals"],
    connections: ["woocommerce", "data-layer", "gtm"]
  },
  {
    id: "shopify",
    name: "Shopify",
    category: "Development",
    level: 95,
    icon: "ShoppingBag",
    color: "#22C55E",
    description: "Liquid theme code architecture, Web Pixels API, Customer Events sandbox scripting, and headless Storefront API implementations.",
    tags: ["Liquid", "Web Pixels API", "Checkout Extensibility", "Storefront API"],
    connections: ["ecommerce-tracking", "data-layer", "react"]
  },
  {
    id: "woocommerce",
    name: "WooCommerce",
    category: "Development",
    level: 93,
    icon: "Store",
    color: "#A855F7",
    description: "WooCommerce store development, custom thank-you page tracking scripts, AJAX cart event listeners, and payment gateway webhooks.",
    tags: ["WooCommerce Hooks", "AJAX Cart", "Payment Webhooks", "Order API"],
    connections: ["wordpress", "ecommerce-tracking", "data-layer"]
  },
  {
    id: "react",
    name: "React & Modern Web",
    category: "Development",
    level: 96,
    icon: "Code2",
    color: "#61DAFB",
    description: "Building modern high-speed Single Page Applications using React 19, Next.js, Vite, Tailwind CSS, Three.js, and GSAP animations.",
    tags: ["React 19", "Next.js", "Vite", "Tailwind CSS", "Three.js", "GSAP"],
    connections: ["data-layer", "shopify"]
  }
];

// Unified Projects Showcase with categories
export const projectsList = [
  {
    id: "metricpulse-saas",
    title: "MetricPulse - Real-Time Analytics & CRO Platform",
    category: "Web Development",
    categories: ["Web Development", "Analytics", "Tracking"],
    summary: "High-performance web analytics and conversion monitoring SaaS dashboard featuring live WebSocket telemetry and automated CAPI event health checks.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop",
    demoUrl: "https://example.com/metricpulse",
    githubUrl: "https://github.com/oyeskuruni/metricpulse-dashboard",
    featured: true,
    results: "+42% Faster Anomaly Detection",
    technologies: ["React 19", "Vite", "Tailwind CSS", "GSAP", "WebSockets", "Recharts"],
    servicesProvided: ["Full-Stack UI/UX Engineering", "Real-Time Telemetry API", "Core Web Vitals Tuning"],
    description: "MetricPulse is an enterprise-grade analytics dashboard designed to monitor first-party dataLayer health, trigger instant alerts when tracking discrepancies occur, and visualize multi-touch user journeys in real-time."
  },
  {
    id: "cloud-run-sgtm",
    title: "Server-Side GTM & Cloud Run Enterprise Pipeline",
    category: "Analytics",
    categories: ["Analytics", "Tracking"],
    summary: "Server-side tag management infrastructure on Google Cloud Run under custom subdomains with client-side deduplication and Meta CAPI dispatch.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    demoUrl: "https://example.com/sgtm-architecture",
    githubUrl: "https://github.com/oyeskuruni/server-side-gtm-gcp",
    featured: true,
    results: "+38% Recovered Attributed Revenue",
    technologies: ["Server-Side GTM", "Google Cloud Run", "Docker", "Meta CAPI", "Google Ads", "GA4"],
    servicesProvided: ["Server-Side Architecture", "Meta CAPI Integration", "ITP Cookie Rescue", "PII Hashing"],
    description: "Deployed an autoscaling Google Cloud Run container running Server GTM for an international apparel brand. Achieved 9.7/10 Meta Event Match Quality, extended first-party cookie longevity to 400 days, and eliminated client-side tracking latency."
  },
  {
    id: "luxepure-headless",
    title: "LuxePure - Headless Shopify Storefront & DataLayer",
    category: "Ecommerce",
    categories: ["Ecommerce", "Web Development", "Tracking"],
    summary: "Sub-second loading headless e-commerce storefront built with React and Shopify Storefront API with custom reactive dataLayer.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop",
    demoUrl: "https://example.com/luxepure",
    githubUrl: "https://github.com/oyeskuruni/luxepure-storefront",
    featured: true,
    results: "99.9% Order Reconciliation to Stripe",
    technologies: ["React", "Shopify API", "Three.js", "Tailwind CSS", "DataLayer", "GA4 Ecommerce"],
    servicesProvided: ["Headless Front-End Dev", "Custom DataLayer Emitter", "Checkout Webhook Reconciliation"],
    description: "A luxury lifestyle storefront combining a 3D product visualizer with an automated dataLayer emitter. Every micro-interaction is tracked and reconciled against Shopify Admin webhooks with zero revenue leakage."
  },
  {
    id: "ga4-bigquery-bi",
    title: "GA4 to BigQuery Data Pipeline & Looker Studio Suite",
    category: "Analytics",
    categories: ["Analytics", "Digital Marketing"],
    summary: "Automated streaming export from GA4 into BigQuery with partitioned SQL modeling and custom multi-touch attribution dashboards.",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=800&auto=format&fit=crop",
    demoUrl: "https://example.com/bigquery-pipeline",
    githubUrl: "https://github.com/oyeskuruni/ga4-bigquery-attribution",
    featured: false,
    results: "Uncovered $380K Misattributed Pipeline",
    technologies: ["Google BigQuery", "GA4", "SQL", "Looker Studio", "GCP", "dbt"],
    servicesProvided: ["BigQuery Streaming Setup", "SQL Session Stitching", "Looker Studio Executive BI"],
    description: "Bypassed standard GA4 14-month data limits and aggressive UI thresholding by creating an automated BigQuery warehouse that blends marketing spend with lifetime customer purchase cohorts."
  },
  {
    id: "consent-mode-governance",
    title: "Global Consent Mode v2 & Multi-Region Tag Governance",
    category: "Tracking",
    categories: ["Tracking", "Analytics"],
    summary: "Enterprise OneTrust and Google Consent Mode v2 deployment across 14 European markets recovering modeled conversions under GDPR/DMA.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop",
    demoUrl: "https://example.com/consent-mode",
    githubUrl: "https://github.com/oyeskuruni/consent-mode-v2-gtm",
    featured: false,
    results: "+24% Modeled Conversion Uplift",
    technologies: ["Google Consent Mode v2", "OneTrust CMP", "GTM", "Google Ads", "GDPR"],
    servicesProvided: ["Consent Architecture", "CMP Integration", "Tag Firing Governance"],
    description: "Implemented Advanced Google Consent Mode v2 to satisfy EU Digital Markets Act requirements. Enabled Google Ads and GA4 to model unconsented user conversions securely via cookieless pings."
  },
  {
    id: "nexora-agency-3d",
    title: "Nexora - 3D Interactive Creative Digital Experience",
    category: "Web Development",
    categories: ["Web Development"],
    summary: "Interactive 3D web experience with procedural geometry, custom GLSL lighting shaders, and locked 60 FPS performance on all viewports.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    demoUrl: "https://example.com/nexora",
    githubUrl: "https://github.com/oyeskuruni/nexora-3d-experience",
    featured: false,
    results: "60 FPS Locked on Mobile & Desktop",
    technologies: ["Three.js", "React Three Fiber", "GSAP ScrollTrigger", "GLSL Shaders", "Vite"],
    servicesProvided: ["3D Creative Development", "Shader Optimization", "Scroll Choreography"],
    description: "Showcases procedural GLSL shaders, magnetic interaction buttons, and fluid responsive camera controls designed to inspire high brand engagement without battery drain."
  }
];

// Interactive 5-Step Process Workflow requested by the user
export const processWorkflow = [
  {
    step: "01",
    title: "Discover",
    subtitle: "Architecture & Needs Analysis",
    description: "Deep audit of current website code, CMS setup, tag architecture, ad accounts, and tracking discrepancies.",
    deliverable: "Technical Audit & Roadmap",
    icon: "Search"
  },
  {
    step: "02",
    title: "Plan",
    subtitle: "Data Schema & Technology Blueprint",
    description: "Designing the custom event taxonomy, dataLayer specification, Server-Side container infrastructure, and front-end stack.",
    deliverable: "DataLayer & Wireframe Blueprint",
    icon: "Compass"
  },
  {
    step: "03",
    title: "Implement",
    subtitle: "Clean Code & Server Deployment",
    description: "Writing performant React / Liquid code, provisioning Cloud Run containers, configuring GTM tags, and activating Meta CAPI.",
    deliverable: "Production Code & Cloud Containers",
    icon: "Code"
  },
  {
    step: "04",
    title: "Test",
    subtitle: "Forensic Debugging & Reconciliation",
    description: "End-to-end verification via GTM Preview, Meta Test Events, GA4 DebugView, and Stripe/CRM transaction reconciliation.",
    deliverable: "100% Verified Match Quality Report",
    icon: "CheckCircle2"
  },
  {
    step: "05",
    title: "Optimize",
    subtitle: "Attribution & Scalable Growth",
    description: "Connecting Looker Studio executive dashboards, monitoring server uptime, and fine-tuning ad algorithm conversion signals.",
    deliverable: "Real-Time BI Dashboard & Monitoring",
    icon: "TrendingUp"
  }
];

// Clearly marked placeholder testimonials as requested
export const testimonialsList = [
  {
    id: "test-1",
    clientName: "David Sterling",
    role: "VP of Growth & E-commerce",
    company: "Apex Footwear Co. (Global D2C)",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    quote: "Oyes completely revamped our tracking architecture. We were losing over 30% of our Meta and Google conversions due to iOS updates. After he deployed Server-Side GTM on Cloud Run, our Event Match Quality jumped to 9.8 and our attributed ROAS increased by 35%.",
    metric: "+35% Attributed ROAS",
    tag: "Placeholder Data - Ready for Client Replacement",
    rating: 5
  },
  {
    id: "test-2",
    clientName: "Elena Vance",
    role: "Chief Technology Officer",
    company: "SaaSflow Analytics (B2B SaaS)",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    quote: "Finding an engineer who can write pristine React code AND understand GA4 BigQuery SQL export pipelines is practically impossible. Oyes delivered our entire front-end redesign and custom dataLayer in record time. Sub-second load times and 100% data fidelity.",
    metric: "Sub-Second LCP & 100% Data Fidelity",
    tag: "Placeholder Data - Ready for Client Replacement",
    rating: 5
  },
  {
    id: "test-3",
    clientName: "Marcus Thorne",
    role: "Founder & Managing Director",
    company: "Thorne Media Agency",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    quote: "We partner with Oyes for all our high-tier client tracking audits. Whenever a client has broken WooCommerce dataLayers, Shopify pixel conflicts, or Consent Mode issues, Oyes diagnoses and fixes it within days. Easily the most reliable technical tracking specialist we've worked with.",
    metric: "100% Client Satisfaction Across 40+ Stores",
    tag: "Placeholder Data - Ready for Client Replacement",
    rating: 5
  }
];

// Experience Timeline
export const experienceTimeline = [
  {
    id: "exp-1",
    role: "Lead Web Analyst & Technical Architect",
    company: "OmniGrowth Media (Global Remote)",
    duration: "2023 - Present",
    period: "Ongoing",
    description: "Directing technical measurement and tracking architecture for 50+ high-growth e-commerce and SaaS brands. Designing custom Server GTM on Cloud Run, Meta CAPI, and BigQuery data pipelines.",
    achievements: [
      "Engineered over 400+ Server-Side GTM and Meta CAPI setups with an average 9.6/10 Event Match Quality score.",
      "Recovered an estimated $4.2M in previously untracked conversions for clients across global paid media channels.",
      "Automated real-time client performance dashboards in Looker Studio powered by BigQuery scheduled queries."
    ],
    tech: ["Server-Side GTM", "GA4", "Cloud Run", "Meta CAPI", "BigQuery", "React"]
  },
  {
    id: "exp-2",
    role: "Full-Stack Web Developer & DataLayer Specialist",
    company: "PulseMetrics Digital Studio",
    duration: "2021 - 2023",
    period: "2 Years",
    description: "Built custom React, WordPress, and Headless Shopify web applications with native, reactive dataLayer pipelines and sub-second performance.",
    achievements: [
      "Developed 25+ responsive e-commerce storefronts achieving 98+ Google PageSpeed scores.",
      "Authored custom JavaScript dataLayer event emitters handling multi-currency and cross-domain tracking.",
      "Configured Google Consent Mode v2 and CMP integrations ensuring 100% GDPR and ePrivacy compliance."
    ],
    tech: ["React.js", "Shopify Liquid", "WordPress", "JavaScript", "Tailwind CSS", "Google Ads"]
  },
  {
    id: "exp-3",
    role: "Frontend Developer & Digital Marketing Specialist",
    company: "Nexus Creative Tech",
    duration: "2019 - 2021",
    period: "2 Years",
    description: "Created high-converting landing pages, interactive web components, and managed technical marketing tags across client portfolios.",
    achievements: [
      "Developed 80+ landing pages with modern HTML5, CSS3, and JavaScript generating over 200k qualified leads.",
      "Audited and cleaned legacy Universal Analytics tags during the global migration to Google Analytics 4.",
      "Integrated automated marketing webhooks with CRM platforms including HubSpot, Salesforce, and Klaviyo."
    ],
    tech: ["JavaScript", "HTML5/CSS3", "GA4", "GTM", "HubSpot", "Zapier"]
  }
];

// Official Certification details
export const ga4Certification = {
  name: "Google Analytics 4 Individual Qualification",
  issuer: "Google Skillshop",
  issueDate: "2024 - 2026",
  badge: "Official GA4 Certified",
  credentialId: "GA4-SKILLSHOP-884920",
  verifyUrl: "https://skillshop.credential.net",
  highlight: "Officially certified in GA4 architecture, data streams, custom dimensions, BigQuery raw event export, measurement protocol, and cross-channel attribution modeling.",
  skillsCovered: [
    "Google Analytics 4 Architecture",
    "Measurement Protocol & Data Streams",
    "BigQuery Raw Event Ingestion",
    "Custom Dimensions & Metrics",
    "Conversion Modeling & Attribution"
  ]
};
