"use client";

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { 
  MessageSquare, 
  X, 
  Send, 
  Bot, 
  User, 
  Sparkles, 
  ArrowRight, 
  ExternalLink, 
  Phone, 
  Mail, 
  FileText,
  RotateCcw,
  Minimize2,
  ChevronDown,
  CheckCircle2,
  ListFilter,
  PhoneCall,
  Loader2
} from 'lucide-react';
import { getContactEmail, getWhatsAppNumber, getWhatsAppUrl } from '@/utils/contactInfo';

const KNOWLEDGE_BASE = [
  {
    keywords: ["service", "services", "offer", "build", "what do you do", "capabilities", "solution"],
    answer: "SyntraLoop delivers end-to-end digital engineering across 4 core tracks:\n\n1. **Web Applications & Scalable Sites** (Next.js, React, modern UI/UX)\n2. **Business Systems & Custom APIs** (PostgreSQL, Node, Python, Workflow ERPs)\n3. **AI Integration & Automation** (LLM assistants, OpenAI, Claude, smart background pipelines)\n4. **Website Maintenance & Cloud CI/CD** (Performance tuning, monitoring, edge deployments)",
    action: { text: "Explore Services", href: "/services" }
  },
  {
    keywords: ["out of scope", "not offer", "what do you not do", "dont do", "don't do", "hardware repair", "physical repair", "social media ads", "facebook ads", "guaranteed rank 1", "guaranteed rank", "rank first on google", "marketing agency", "scope boundary", "boundaries"],
    answer: "🚫 **What We Do NOT Offer (Clear Scope Boundaries):**\n\nTo ensure top-tier engineering craft, we focus strictly on high-performance software development and digital architecture. We do NOT provide:\n• **Physical Hardware Repairs:** We build online repair tracking software & portals, but do not physically repair phones, computers, or devices.\n• **Guaranteed #1 Google Rankings:** We build world-class technical SEO (90+ Core Web Vitals, SSR, structured schema, sitemaps), but avoid scammy claims of 'guaranteed #1 rankings' which no legitimate engineering studio can promise.\n• **Standalone Social Media Marketing / Daily Posting:** We engineer high-converting web apps and analytics tracking, but do not manage daily social media ad spends without an active software project.\n• **Domain/Trademark Legal Disputes:** Clients are responsible for acquiring and legally owning their business domain names.",
    action: { text: "Review Our Core Services", href: "/services" }
  },
  {
    keywords: ["revision", "revisions", "changes", "how many revisions", "change requests", "unlimited revisions", "edit design", "modify project", "scope creep", "change scope"],
    answer: "🔄 **Structured Revision Policy & Iteration Process:**\n\nTo prevent delivery delays and maintain clear timelines, we follow structured milestone revision rounds:\n• **Design & Prototype Phase:** Up to **2 structured rounds of revisions** on Figma UI/UX layouts and interactive wireframes before full code implementation.\n• **Staging Validation Phase:** Up to **2 review cycles** during bi-weekly live staging demos for functional tweaks, responsive styling, and copy adjustments.\n• **Post-Launch Warranty:** **30 days of complimentary bug fixes** and technical support included with every build.\n• *Major architectural pivots or newly introduced feature modules outside the agreed sprint scope are billed transparently under an add-on sprint.*",
    action: { text: "How We Work", href: "/about" }
  },
  {
    keywords: ["content", "copywriting", "images", "photos", "who provides text", "privacy policy", "terms and conditions", "assets", "logo supply", "who gives content", "pictures"],
    answer: "📝 **Content, Image & Legal Policy Responsibility:**\n\n• **Text & Copywriting:** The client is responsible for supplying final product descriptions, team bios, and business copy. *(We provide professional layout structuring and AI-assisted copywriting polish upon request).* \n• **Brand Assets & Photography:** The client supplies official logos, brand photos, and high-res product imagery. We optimize and format all assets for web speed.\n• **Legal Documents (Privacy & Terms):** Clients must provide or legally approve their business's Privacy Policy, Terms of Service, and Refund Policies. *(We provide standard technical templates as starter baselines).* ",
    action: { text: "Request Assessment", href: "/contact#assessment-form" }
  },
  {
    keywords: ["repair", "service center", "job card", "serial number", "job tracking", "repair status", "phone repair", "laptop repair", "garage", "vehicle service", "warranty tracking", "device repair"],
    answer: "🔧 **Repair Shops & Service Center Management Systems:**\n\nWe build real-time job card and repair tracking portals for phone, laptop, electronics, and vehicle service centers:\n• **Live Status Tracking by Serial Number / Job ID:** Customers can enter their serial number, IMEI, or job ID on your website to check live repair progress (e.g. *Diagnosing, Waiting for Parts, Repaired, Ready for Pickup*).\n• **Automated SMS & WhatsApp Alerts:** Automatic notifications sent when diagnosis is complete, quote approved, or device is ready.\n• **Technician Workload & Spare Parts Inventory:** Track parts used per repair, warranty periods, and labor charges.\n• **Printable Invoices & Thermal Receipts:** Instant receipt generation with barcode lookup.",
    action: { text: "Request Repair System", href: "/contact#assessment-form" }
  },
  {
    keywords: ["retail", "wholesale", "inventory", "stock management", "low stock alert", "pos", "billing system", "supplier", "stock count", "distributor", "credit book", "naya potha", "shop system"],
    answer: "📦 **Retail, Wholesale & Inventory Management Systems:**\n\nWe build fast, cloud-based stock control and billing systems tailored for Sri Lankan retail and wholesale businesses:\n• **Real-Time Stock & Low-Stock Alerts:** Automated SMS/Email warnings before popular items run out of stock.\n• **Multi-Tier Pricing:** Switch between Retail and Wholesale bulk price tiers automatically at checkout.\n• **Customer Credit Ledger (Naya Potha):** Digital tracking of customer credit balances, payment history, and overdue payment WhatsApp reminders.\n• **Fast Barcode POS Billing:** Multi-terminal support with thermal receipt printing and end-of-day Z-Report sales summaries.",
    action: { text: "Request Retail & POS System", href: "/contact#assessment-form" }
  },
  {
    keywords: ["cafe", "restaurant", "qr menu", "online menu", "food ordering", "table ordering", "kot", "digital menu", "table booking", "table reservation", "takeaway"],
    answer: "☕ **Cafe & Restaurant QR Digital Menus & Table Booking:**\n\nModern contactless dining and ordering solutions:\n• **Interactive QR Digital Menus:** Fast, interactive mobile menus with dietary filters and mouth-watering images\n• **Direct WhatsApp & Online Ordering:** Customers can order for dine-in, takeaway, or home delivery\n• **Table Booking & Reservations:** Easy online table reservations with time-slot management\n• **Instant KOT Printing:** Direct order routing to kitchen screen or thermal printers with zero monthly platform commissions!",
    action: { text: "Request Cafe Solution", href: "/contact#assessment-form" }
  },
  {
    keywords: ["tuition", "class", "tuition class", "lms", "student portal", "video classes", "exam system", "mcq", "institute", "teacher", "recorded classes", "batch attendance"],
    answer: "🎓 **Tuition Master & Institute LMS Portals:**\n\nSecure, high-speed educational portals:\n• **Screen-Record Protected DRM Video Player:** Encrypted streaming with dynamic student watermarking\n• **Monthly Class Fee Collection:** Direct PayHere, WebXPay, or Bank Slip upload with automatic portal unlocking\n• **Live Zoom / YouTube Live Integration:** Organized timetable links and automated attendance\n• **Online MCQ Paper Exams:** Timed online exams with automated grading and rank leaderboards.",
    action: { text: "Request Tuition LMS", href: "/contact#assessment-form" }
  },
  {
    keywords: ["salon", "spa", "parlour", "salon booking", "appointment booking", "stylist", "salon web", "clinic", "doctor", "dental", "doctor channelling", "channelling", "patient booking"],
    answer: "💇‍♀️ **Salons, Spas & Clinics Booking Platforms:**\n\nWe build custom appointment management web apps:\n• **Online Slot & Staff Booking:** Select preferred stylist, doctor, or treatment slot\n• **Advance Deposit Collection:** Instant online deposits via PayHere, Koko, or Mintpay\n• **Automated WhatsApp / SMS Reminders:** Automated reminders sent 24h & 2h before the appointment (cuts no-shows by 80%)\n• **Client History & Revenue Tracking:** Treatment history logs, staff commission rosters, and daily sales reports.",
    action: { text: "Request Booking System", href: "/contact#assessment-form" }
  },
  {
    keywords: ["payhere", "webxpay", "koko", "mintpay", "bank transfer", "slip upload", "frimi", "genie", "lkr payment", "sri lanka payment", "local payment", "commercial bank", "sampath", "hnb", "ez cash", "mcash", "bnpl"],
    answer: "🇱🇰 **Sri Lankan Payment Gateways & BNPL Integration:**\n\nWe integrate all leading local payment solutions:\n• **Local Gateways:** PayHere, WebXPay, Genie, FriMi, and Bank IPGs (Commercial Bank, Sampath Vishwa, HNB CyberSource)\n• **Buy Now Pay Later (BNPL):** Koko & Mintpay 3-month installment integrations\n• **Direct Bank Transfer with Slip Upload:** Automated slip attachment with instant WhatsApp & email payment notifications\n• **Global & Local Checkout:** Accept LKR locally and USD/GBP/EUR via Stripe/PayPal for international clients.",
    action: { text: "Discuss Payment Setup", href: "/contact#assessment-form" }
  },
  {
    keywords: ["koombiyo", "domex", "promptx", "pronto", "fardar", "certis", "courier", "delivery tracking", "cod", "cash on delivery", "waybill", "tracking api", "delivery in sri lanka"],
    answer: "📦 **Sri Lankan Courier APIs & COD Automation:**\n\nWe integrate automated delivery tracking pipelines for local e-commerce:\n• **Supported Courier APIs:** Koombiyo Delivery, Domex, PromptX, Pronto, and Fardar\n• **Automated Waybills:** 1-click dispatch booking and barcode waybill generation\n• **Live Order Tracking:** Automated SMS / WhatsApp status updates sent to customers\n• **COD Settlements:** Multi-district delivery charge calculation (Colombo vs Outstation) and Cash on Delivery tracking.",
    action: { text: "E-Commerce Solutions", href: "/services" }
  },
  {
    keywords: ["ai", "artificial intelligence", "llm", "openai", "claude", "gpt", "chatbot", "langchain", "automation", "rag", "vector", "agent"],
    answer: "We build practical, production-grade AI integrations! This includes:\n\n• **Custom AI Assistants & Conversational UI** tailored to your business knowledge\n• **RAG & Vector Search Pipelines** (Pinecone, pgvector, LangChain)\n• **Automated Workflow Orchestrations** with OpenAI, Claude, and background queues\n• **Intelligent Document & Data Processing** pipelines",
    action: { text: "Learn About AI Solutions", href: "/services" }
  },
  {
    keywords: ["timeline", "how long", "turnaround", "delivery time", "duration", "weeks", "how fast", "deadline", "fast"],
    answer: "Most MVP and full-stack web applications take between **2 to 6 weeks**, depending on scope and feature complexity.\n\nWe work in transparent 2-week agile sprints with bi-weekly live staging demos so you see real progress continuously.",
    action: { text: "Request Timeline Estimate", href: "/contact#assessment-form" }
  },
  {
    keywords: ["own the code", "code ownership", "intellectual property", "ip", "github repo", "copyright", "source code", "proprietary", "who owns"],
    answer: "🔒 **You own 100% of the source code, design assets, and intellectual property from day one.**\n\nUpon project completion, we hand over full GitHub repository ownership, deployment environments, and documentation with zero platform lock-in.",
    action: { text: "Read Our Guarantees", href: "/about" }
  },
  {
    keywords: ["cost", "price", "pricing", "rate", "budget", "quote", "how much", "estimate", "fee", "free assessment"],
    answer: "Our **Project Feasibility Assessment is 100% free** with zero obligation.\n\nWe offer transparent, milestone-based pricing tailored to your exact scope with clear sprint deliverables and zero surprise fees.",
    action: { text: "Get a Free Assessment", href: "/contact#assessment-form" }
  },
  {
    keywords: ["payment", "payment terms", "invoice", "deposit", "milestone", "installments", "upfront", "how to pay", "billing"],
    answer: "We offer client-friendly **milestone-based payment terms**:\n\n• **30% Kickoff Deposit** (after scope alignment & sprint plan)\n• **30% Prototype & Architecture Validation** (working staging build)\n• **40% Final Launch & Handover** (full testing & production release)\n\nZero hidden fees, transparent invoicing in LKR or USD.",
    action: { text: "Discuss Project Budget", href: "/contact#assessment-form" }
  },
  {
    keywords: ["progress", "track", "demo", "milestone progress", "staging", "sprint review", "see progress", "status"],
    answer: "You'll always know exactly where your project stands:\n\n• **Live Staging URL:** Access a private staging deployment updated after every sprint.\n• **Bi-Weekly Video Demos:** We walk through working code together before milestone sign-offs.\n• **Direct Slack / WhatsApp Access:** Direct communication with the engineers building your product.",
    action: { text: "How We Work", href: "/about" }
  },
  {
    keywords: ["team", "dedicated developer", "who works", "engineers", "freelancers", "lead architect", "developer"],
    answer: "Your project is led by **senior full-stack engineers and a dedicated technical architect**.\n\nWe don't outsource to random subcontractors or pass projects to junior teams—you work directly with engineering specialists.",
    action: { text: "About SyntraLoop Team", href: "/about" }
  },
  {
    keywords: ["seo", "search engine", "google rank", "ranking", "speed", "performance", "core web vitals", "lighthouse"],
    answer: "Every website and web application we engineer is built with **modern SEO & sub-second Core Web Vitals**:\n\n• Server-Side Rendering (SSR) & Static Generation via Next.js\n• Automated XML sitemaps, OpenGraph meta tags & structured schema\n• High Lighthouse scores (90+), image compression, and edge CDN delivery",
    action: { text: "Explore Web Engineering", href: "/services" }
  },
  {
    keywords: ["hosting", "cloud", "server", "aws", "vercel", "cloudflare", "deployment", "infrastructure", "where hosted"],
    answer: "We deploy to modern edge cloud infrastructure including **Vercel, AWS, Cloudflare, Supabase, and Docker**.\n\nWe can manage the deployment for you or deploy directly into your organization's cloud account with complete CI/CD automation.",
    action: { text: "Learn About Cloud DevOps", href: "/services" }
  },
  {
    keywords: ["integration", "integrations", "third party", "api", "stripe", "payment gateway", "twilio", "paypal", "hubspot", "zapier"],
    answer: "We integrate any third-party API or service seamlessly:\n\n• **Payments:** PayHere, WebXPay, Stripe, PayPal, Lemon Squeezy, Koko, Mintpay\n• **Messaging & Email:** Twilio, SendGrid, Resend, WhatsApp Business API\n• **Couriers:** Koombiyo, Domex, PromptX, Pronto\n• **CRMs & Tools:** HubSpot, Salesforce, Notion, Zapier, Google Workspace",
    action: { text: "Custom API Solutions", href: "/services" }
  },
  {
    keywords: ["security", "auth", "authentication", "login", "oauth", "2fa", "encryption", "gdpr", "safe", "zero trust", "privacy"],
    answer: "Security is foundational to our engineering ethos:\n\n• Zero-Trust architecture & protected environment secrets\n• Modern Auth (NextAuth, Supabase Auth, OAuth for Google/GitHub/Apple, 2FA)\n• Role-Based Access Control (RBAC), SQL injection prevention & SSL/TLS encryption",
    action: { text: "Our Security Standards", href: "/about" }
  },
  {
    keywords: ["database", "sql", "nosql", "postgres", "mongodb", "supabase", "migration", "migrate data"],
    answer: "We specialize in **PostgreSQL and Supabase** for enterprise relational integrity, **Redis** for sub-millisecond caching, and **Pinecone/pgvector** for AI embeddings. We also handle complex database migrations with zero downtime.",
    action: { text: "Backend Architecture", href: "/services" }
  },
  {
    keywords: ["ai token cost", "token price", "openai cost", "api cost", "llm expenses", "expensive ai", "token budget"],
    answer: "We architect AI systems specifically to **minimize monthly token costs**:\n\n• Semantic caching to avoid repeating identical LLM queries\n• Smart model routing (using fast/inexpensive models like GPT-4o-mini for routine tasks and flagship models only for complex reasoning)\n• Optimized prompt structures and local vector indexing",
    action: { text: "Explore AI Integration", href: "/services" }
  },
  {
    keywords: ["subscription", "saas billing", "checkout", "ecommerce", "custom shop", "stripe billing", "recurring"],
    answer: "We build complete **SaaS subscription & e-commerce billing engines**:\n\n• Tiered pricing plans with automatic proration and trial periods\n• Stripe Customer Portal integration for self-serve card updates & cancellations\n• Multi-currency global checkouts with tax calculation & webhook invoicing",
    action: { text: "Business Systems Solutions", href: "/services" }
  },
  {
    keywords: ["language", "languages", "i18n", "multilingual", "translation", "localize", "internationalization", "sinhala", "tamil"],
    answer: "Yes! We build **multi-language internationalization (i18n)** into Next.js applications, supporting English, Sinhala (සිංහල), Tamil (தமிழ்), localized currencies (LKR, USD), and locale-specific metadata for international and local SEO.",
    action: { text: "Explore Capabilities", href: "/services" }
  },
  {
    keywords: ["accessibility", "wcag", "ada", "screen reader", "a11y", "contrast", "accessible"],
    answer: "All our user interfaces follow **WCAG 2.1 AA accessibility standards**, ensuring clean semantic HTML, full keyboard navigation, high-contrast color modes, and screen-reader compatibility.",
    action: { text: "Our Guarantees", href: "/about" }
  },
  {
    keywords: ["testing", "tests", "unit test", "qa", "quality assurance", "e2e", "playwright", "cypress", "jest"],
    answer: "We prioritize code reliability with comprehensive QA:\n\n• Automated end-to-end testing with Playwright & Cypress\n• Unit and integration testing with Jest\n• Automated GitHub Actions CI/CD test runners before every deployment",
    action: { text: "Engineering Ethos", href: "/about" }
  },
  {
    keywords: ["dark mode", "theme", "light mode", "color palette", "custom theme"],
    answer: "Yes! We engineer sleek, **zero-flash Dark & Light mode toggle systems** with custom CSS design tokens that synchronize seamlessly across user preferences and device settings.",
    action: { text: "View Design Samples", href: "/work" }
  },
  {
    keywords: ["handoff", "handover", "documentation", "docs", "readme", "architecture diagram", "take over code"],
    answer: "When your project is ready for launch, we provide **comprehensive documentation**:\n\n• Clean README & local development setup instructions\n• Interactive API documentation & database schema diagrams (ERDs)\n• Cloud deployment runbooks and environment configuration keys",
    action: { text: "Code Ownership Guarantee", href: "/about" }
  },
  {
    keywords: ["retainer", "monthly hours", "ongoing partnership", "fractional cto", "long term support"],
    answer: "Yes! After launch, many clients retain SyntraLoop on a **flexible monthly sprint or hourly retainer** for continuous feature iteration, database maintenance, cloud monitoring, and fractional technical leadership.",
    action: { text: "Maintenance Retainers", href: "/services" }
  },
  {
    keywords: ["design", "figma", "ui", "ux", "wireframe", "prototype", "convert figma", "mockup"],
    answer: "We provide complete **UI/UX design & Figma-to-code conversion**:\n\n• High-fidelity responsive interfaces crafted in Figma\n• Pixel-perfect translation into React/Next.js components\n• Sleek micro-interactions, dark mode, and smooth modern animations",
    action: { text: "View Portfolio Designs", href: "/work" }
  },
  {
    keywords: ["dashboard", "admin", "internal tool", "portal", "crm", "erp", "backoffice", "management system"],
    answer: "We build custom **internal management systems, admin portals, and ERPs** with real-time data visualization, CSV/PDF exports, role permissions, automated workflows, and audit logging.",
    action: { text: "Business Systems Track", href: "/services" }
  },
  {
    keywords: ["tech", "stack", "technology", "technologies", "tools", "react", "next", "python", "node", "database"],
    answer: "Our modern engineering stack is focused on performance and reliability:\n\n• **Frontend:** Next.js 14, React, Tailwind CSS, Three.js, TypeScript\n• **Backend & APIs:** Node.js, Python, FastAPI, Express, REST & GraphQL\n• **Databases:** PostgreSQL, Supabase, Redis, Pinecone Vector DB\n• **Cloud & DevOps:** Vercel, AWS, Docker, GitHub Actions, Sentry",
    action: { text: "View Tech Wheel", href: "/about" }
  },
  {
    keywords: ["start", "hire", "process", "work with", "begin", "get started", "onboard", "steps"],
    answer: "Getting started with SyntraLoop is straightforward:\n\n1. **Project Assessment:** Submit your project scope & requirements.\n2. **Discovery Call:** We review technical feasibility and establish sprint milestones.\n3. **Agile Development:** Bi-weekly demos, transparent sprints, and direct communication.\n4. **Launch & Handover:** 100% code ownership, clean documentation, and post-launch support.",
    action: { text: "Request Assessment", href: "/contact#assessment-form" }
  },
  {
    keywords: ["call", "discovery call", "book a call", "consultation", "zoom", "schedule", "talk to founder", "meeting"],
    answer: "You can book a **free 20-minute Discovery Call** with our engineering team! Submit your project details through our assessment form or message us directly on WhatsApp at **+94 74 226 6041**.",
    action: { text: "Book Discovery Call", href: "/contact#assessment-form" }
  },
  {
    keywords: ["scale", "scaling", "high traffic", "thousands of users", "millions", "concurrency", "load", "capacity"],
    answer: "Our systems are built for scale:\n\n• Serverless edge functions with auto-scaling compute\n• Connection-pooled PostgreSQL & Redis in-memory caching\n• Global CDN edge delivery for static assets & cached queries\n• Sub-second response times under concurrent user spikes",
    action: { text: "Architecture Standards", href: "/about" }
  },
  {
    keywords: ["wordpress", "shopify", "wix", "squarespace", "custom vs wordpress", "why custom"],
    answer: "Unlike template-heavy platforms like WordPress or Wix, custom Next.js/React engineering provides **10x faster load speeds, complete UI freedom, zero plugin vulnerability risks, enterprise security, and 100% code ownership**.",
    action: { text: "Custom Web Solutions", href: "/services" }
  },
  {
    keywords: ["nda", "confidential", "confidentiality", "non-disclosure", "privacy", "protect idea", "secret", "safe"],
    answer: "Yes, absolutely! We frequently sign standard mutual **Non-Disclosure Agreements (NDAs)** before reviewing proprietary specifications, business models, or technical requirements.",
    action: { text: "Contact for NDA", href: "/contact" }
  },
  {
    keywords: ["maintenance", "support", "after launch", "post launch", "bug fix", "updates", "monitoring", "warranty", "sla", "what if it breaks", "after 3 months", "emergency fix", "response time", "security patch", "database backup", "domain renewal", "hosting renewal", "service level agreement"],
    answer: "🛡️ **Post-Launch Maintenance, SLAs & Cloud Care:**\n\nWe ensure your software remains secure, fast, and 100% operational long after launch:\n\n• **🚨 Emergency Bug Fix Response (24h SLA):**\n  Under our monthly maintenance retainers, critical production issues (e.g. checkout failures, server downtime) receive an **immediate response within 2–4 hours and guaranteed resolution within 24 hours**.\n\n• **🔄 Routine Maintenance & Backups:**\n  Automated daily/weekly PostgreSQL database backups, monthly dependency security patches, and zero-downtime framework upgrades.\n\n• **🌐 Domain & Hosting Renewals:**\n  We manage SSL certificates, monitor cloud server uptime (Vercel/AWS), and provide proactive 30-day advance renewal alerts so your domain never expires.\n\n• **✨ 30-Day Post-Launch Warranty:**\n  Every new project includes a **complimentary 30-day warranty** covering all bug fixes and technical guidance.",
    action: { text: "Explore Maintenance Plans", href: "/services" }
  },
  {
    keywords: ["existing code", "refactor", "upgrade existing", "fix my app", "takeover", "legacy", "improve app", "audit"],
    answer: "Yes! We regularly help founders audit, refactor, and modernize existing codebases, transition from legacy setups to modern Next.js/React, fix performance bottlenecks, and integrate smart AI capabilities.",
    action: { text: "Submit Project for Audit", href: "/contact#assessment-form" }
  },
  {
    keywords: ["mobile", "mobile app", "ios", "android", "responsive", "pwa", "cross-platform", "phone"],
    answer: "All our web applications are built **mobile-first and fully responsive**. We create Progressive Web Apps (PWAs) that run seamlessly on iOS and Android, as well as robust backend APIs ready for native mobile integrations.",
    action: { text: "Explore Capabilities", href: "/services" }
  },
  {
    keywords: ["communication", "slack", "updates", "meeting", "zoom", "whatsapp", "email", "report", "transparent"],
    answer: "We ensure transparent, direct collaboration via:\n\n• Dedicated Slack / WhatsApp channel with direct engineering access\n• Weekly or bi-weekly video sprint demos (Google Meet / Zoom)\n• Live staging links updated on every git push\n• Clear project boards (Notion / Jira)",
    action: { text: "Connect With Us", href: "/contact" }
  },
  {
    keywords: ["industry", "industries", "niche", "ecommerce", "saas", "fintech", "healthcare", "real estate", "startup", "clients"],
    answer: "We partner with high-growth startups, founders, and SMBs across:\n\n• **SaaS & B2B Software**\n• **E-commerce & Custom Marketplaces**\n• **Internal Operations & ERP Systems**\n• **AI Productivity & Workflow Automation**",
    action: { text: "View Case Studies", href: "/work" }
  },
  {
    keywords: ["who we are", "who is syntraloop", "company structure", "team structure", "legal structure", "agency or freelancer", "what is syntraloop", "business model", "collective", "studio", "about syntraloop", "about"],
    answer: "🏢 **Who We Are (Transparent Studio & Engineering Team):**\n\n**SyntraLoop is a specialized, agile digital engineering studio & software development team.**\n\n• **Agile Technical Collective:** We operate as a dedicated team of senior full-stack developers, UI/UX designers, and cloud architects.\n• **Direct Engineer Collaboration:** You collaborate directly with the specialists architecting and coding your application—no account manager telephone games or subcontracted junior teams.\n• **Focused Client Capacity:** We intentionally take on a limited number of high-impact client projects per quarter to guarantee uncompromised craftsmanship.",
    action: { text: "About SyntraLoop Studio", href: "/about" }
  },
  {
    keywords: ["portfolio", "work", "projects", "case study", "demos", "examples", "live projects", "flagship prototypes", "academic demo", "are these real clients", "client solutions", "demo disclosure"],
    answer: "🎯 **Portfolio Transparency (Client Solutions vs. Flagship Prototypes):**\n\nWe maintain complete transparency regarding our showcase projects on our [Work](/work) page:\n• **Live Client Solutions:** Enterprise internal tools, booking systems, educational LMS platforms, and custom e-commerce stores engineered for active businesses (with strict respect for client NDAs and proprietary data).\n• **Flagship Architecture Prototypes & Research Demos:** Dedicated interactive prototypes (such as 3D WebGL dashboards, semantic AI vector search engines, and lightning-fast Next.js headless checkouts) developed in-house to validate cutting-edge tech stacks and provide production-ready accelerators for our clients.",
    action: { text: "View Portfolio & Demos", href: "/work" }
  },
  {
    keywords: ["analytics", "tracking", "pixel", "meta pixel", "facebook pixel", "ga4", "google analytics", "whatsapp tracking", "conversion tracking", "tiktok pixel", "tag manager", "gtm", "ads tracking"],
    answer: "📈 **Analytics, Marketing Pixels & Conversion Tracking:**\n\nWe set up comprehensive, zero-speed-penalty tracking pipelines:\n• **Meta (Facebook/Instagram) Pixel & CAPI:** Track page views, lead submissions, and e-commerce purchases for high-ROI ad retargeting.\n• **Google Analytics 4 (GA4) & GTM:** Track traffic sources, user funnels, bounce rates, and high-converting pages.\n• **WhatsApp Conversion Tracking:** Track every user click on your WhatsApp chat or direct call button to measure ad campaign effectiveness.\n• **TikTok & Google Ads Conversion Tags:** Full custom event tracking for paid search and video ads.",
    action: { text: "Explore Marketing Integrations", href: "/services" }
  },
  {
    keywords: ["google search console", "search console", "google maps", "google business profile", "google my business", "sitemap", "xml sitemap", "robots.txt", "get found on google", "google index", "how to get found", "local search"],
    answer: "🔍 **Search Discovery, Google Maps & Rapid Indexing:**\n\nEvery site we engineer is pre-configured for search engines:\n• **Google Search Console Setup:** We submit and verify your dynamic XML sitemap (`/sitemap.xml`) and `robots.txt` for rapid Google indexing.\n• **Google Business Profile (Google Maps) Linking:** Direct embedding and location schema to boost local Colombo and island-wide visibility.\n• **Structured JSON-LD Schema:** Rich search snippets (Product, LocalBusiness, FAQ, and Organization schema) for enhanced Google search rankings.",
    action: { text: "Explore Web Engineering", href: "/services" }
  },
  {
    keywords: ["opengraph", "og preview", "whatsapp preview", "link preview", "social share", "facebook preview", "linkedin preview", "rich preview", "link banner", "share on whatsapp"],
    answer: "🖼️ **Social Media OpenGraph (OG) Link Previews:**\n\nNever send plain text links again! Every page includes rich **OpenGraph & Twitter Card metadata**:\n• **WhatsApp & Facebook Rich Cards:** Automatically displays a sleek branded banner preview, title, and description when shared in chats or social feeds.\n• **Dynamic Page-Specific Previews:** Each blog post, e-commerce product, or portfolio case study generates its own high-res preview image.\n• **LinkedIn & X (Twitter) Optimization:** Crisp, high-contrast link formatting optimized for professional executive networks.",
    action: { text: "View Design & Web Work", href: "/work" }
  },
  {
    keywords: ["data migration", "spreadsheet", "excel", "csv", "import products", "migrate data", "google sheets", "old system", "database migration", "import data", "export data", "migrate database", "import excel", "export excel", "export pdf", "pdf report", "download excel"],
    answer: "📊 **Data Migration & Spreadsheet Modernization:**\n\nMany businesses track their operations in Excel, notebooks, or Google Sheets. We make modernizing completely seamless:\n\n• **Can you import existing Excel / Google Sheets data?**\n  👉 **Yes!** We build automated bulk CSV/Excel import pipelines and database seeders. You can import hundreds or thousands of products, SKU codes, pricing tiers, customer contacts, and inventory balances into your new dashboard on Day 1.\n\n• **Can we still export reports back to Excel and PDF?**\n  👉 **Yes!** Your custom admin dashboard includes **one-click CSV / Excel exports and formatted PDF report downloads** for daily sales, revenue statements, stock audits, and customer credit summaries.",
    action: { text: "Discuss Data Migration", href: "/contact#assessment-form" }
  },
  {
    keywords: ["contact", "email", "phone", "whatsapp", "call", "reach", "number", "talk", "support"],
    answer: `You can reach the SyntraLoop engineering team directly through:\n\n• **Email:** ${getContactEmail()}\n• **WhatsApp:** ${getWhatsAppNumber()}\n• **Assessment Form:** Submit directly on our contact page\n\nWe respond to all inquiries within 24–48 hours!`,
    action: { text: "Open Contact Page", href: "/contact" }
  },
  {
    keywords: ["location", "where", "office", "remote", "hours", "timezone"],
    answer: "We operate remotely and collaborate with founders, startups, and SMBs worldwide. Our core engineering hours are UTC+5:30 with proactive international client coverage.",
    action: { text: "Connect With Us", href: "/contact" }
  }
];

const QUICK_PROMPTS = [
  "🛠️ View Live Repair Shop Demo",
  "☕ View Café QR Menu Demo",
  "💰 Estimate My Project Cost",
  "💬 Talk on WhatsApp",
  "⚡ Scope My Project (Instant Estimator)",
  "📞 Request an Immediate Callback",
  "Emergency SLA & Maintenance Plans?",
  "Meta Pixel, GA4 & WhatsApp Tracking?",
  "Google Search Console & Maps Setup?",
  "Excel & Product Data Migration?",
  "WhatsApp & Social OpenGraph Previews?",
  "Who are you (Team & Studio Structure)?",
  "Portfolio & Demo Prototype Disclosure",
  "What is your revision policy?",
  "What do you NOT offer (Out-of-Scope)?",
  "Who provides content & images?",
  "Repair Shop Job Card & Tracking?",
  "Retail & Wholesale POS Inventory?",
  "Cafe & Restaurant QR Digital Menus?",
  "Tuition Class & LMS Portals?",
  "Salon, Spa & Clinic Booking?",
  "PayHere & Local Payment Gateways?",
  "Koombiyo & Domex Courier Tracking?",
  "Who owns the code?",
  "What are your payment terms?",
  "How do you integrate AI?",
  "What is your tech stack?",
  "Do you sign an NDA?"
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: "Hello! 👋 I'm the **SyntraLoop AI Assistant**.\n\nLooking to build a website, e-commerce shop, or custom software? Choose an option below or ask me any question!",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      options: [
        "🛠️ View Live Repair Shop Demo",
        "☕ View Café QR Menu Demo",
        "💰 Estimate My Project Cost",
        "💬 Talk on WhatsApp"
      ]
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);

  // In-Chat Scope Intake Wizard State
  const [scopeFlow, setScopeFlow] = useState(null); // 'ecom' | 'web' | 'system'
  const [scopeStep, setScopeStep] = useState(0);
  const [scopeData, setScopeData] = useState({});

  // In-Chat Callback Request State
  const [callbackFlow, setCallbackFlow] = useState(false);
  const [callbackStep, setCallbackStep] = useState(0);
  const [callbackData, setCallbackData] = useState({});

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setHasUnread(false);
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen, messages, isTyping]);

  const handleResetChat = () => {
    setScopeFlow(null);
    setScopeStep(0);
    setScopeData({});
    setCallbackFlow(false);
    setCallbackStep(0);
    setCallbackData({});
    setMessages([
      {
        id: Date.now(),
        sender: 'bot',
        text: "Conversation reset! How can I help you build or scale your digital solution today?",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        options: [
          "🛠️ View Live Repair Shop Demo",
          "☕ View Café QR Menu Demo",
          "💰 Estimate My Project Cost",
          "💬 Talk on WhatsApp"
        ]
      }
    ]);
  };

  // ====================================================
  // CALLBACK REQUEST INTAKE WIZARD
  // ====================================================
  const handleCallbackOption = (userInput) => {
    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: userInput,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      const currentStep = callbackStep;
      const updatedData = { ...callbackData };

      // Step 1: User just requested callback -> Ask Phone Number
      if (!callbackFlow || currentStep === 0) {
        setCallbackFlow(true);
        setCallbackStep(1);
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now() + 1,
            sender: 'bot',
            text: "We'd be glad to call you! 📞\n\n**Please type your Phone Number (or WhatsApp number):**",
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          }
        ]);
      }
      // Step 2: User provided Phone -> Ask Preferred Time
      else if (currentStep === 1) {
        updatedData.phone = userInput;
        setCallbackStep(2);
        setCallbackData(updatedData);
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now() + 1,
            sender: 'bot',
            text: `Got it (${userInput})! **When is the best time for our engineering lead to call you?**`,
            options: [
              "Morning (9 AM – 12 PM)",
              "Afternoon (1 PM – 4 PM)",
              "Evening (5 PM – 8 PM)",
              "Call ASAP Today"
            ],
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          }
        ]);
      }
      // Step 3: User selected Time -> Ask Short Business Summary
      else if (currentStep === 2) {
        updatedData.time = userInput;
        setCallbackStep(3);
        setCallbackData(updatedData);
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now() + 1,
            sender: 'bot',
            text: "Perfect! **What is a short 1-line summary of your project or business requirement?**",
            options: [
              "New Business Website",
              "E-Commerce Online Shop",
              "Custom Web App / Portal",
              "General Technical Consultation"
            ],
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          }
        ]);
      }
      // Step 4: User provided Summary -> Final Confirmation Ticket
      else if (currentStep === 3) {
        updatedData.summary = userInput;
        setCallbackData(updatedData);

        const waText = `Hi SyntraLoop! I requested an immediate callback:%0A• Phone: ${encodeURIComponent(updatedData.phone || 'Not specified')}%0A• Preferred Time: ${encodeURIComponent(updatedData.time || 'Not specified')}%0A• Requirement: ${encodeURIComponent(userInput)}`;

        setMessages((prev) => [
          ...prev,
          {
            id: Date.now() + 1,
            sender: 'bot',
            text: `✅ **Callback Request Confirmed!**\n\n• **Phone:** ${updatedData.phone}\n• **Preferred Window:** ${updatedData.time}\n• **Requirement:** ${userInput}\n\nOur engineering lead will call you within your requested window. You can also message us directly on WhatsApp right away:`,
            action: { text: `Connect on WhatsApp (${getWhatsAppNumber()})`, href: getWhatsAppUrl(`Hi SyntraLoop! I requested an immediate callback:\n• Phone: ${updatedData.phone || 'Not specified'}\n• Preferred Time: ${updatedData.time || 'Not specified'}\n• Requirement: ${userInput}`) },
            options: [
              "⚡ Scope My Project (Instant Estimator)",
              "Submit Full Assessment Form",
              "Ask Another Question"
            ],
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          }
        ]);
        setCallbackFlow(false);
        setCallbackStep(0);
      }

      setIsTyping(false);
    }, 550);
  };

  // ====================================================
  // SCOPE INTAKE QUALIFICATION WIZARD
  // ====================================================
  const handleScopeIntakeOption = (selectedOption) => {
    // Add user message
    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: selectedOption,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      let nextFlow = scopeFlow;
      let nextStep = scopeStep + 1;
      const updatedData = { ...scopeData };

      // Flow Initiation
      if (!scopeFlow || selectedOption.includes("Scope My Project") || selectedOption.includes("Instant Estimator")) {
        if (selectedOption.includes("E-Commerce") || selectedOption.toLowerCase().includes("e-commerce")) {
          nextFlow = 'ecom';
        } else if (selectedOption.includes("Business Website") || selectedOption.toLowerCase().includes("business website")) {
          nextFlow = 'web';
        } else {
          // Ask project category
          setScopeFlow('select_type');
          setScopeStep(1);
          setMessages((prev) => [
            ...prev,
            {
              id: Date.now() + 1,
              sender: 'bot',
              text: "Let's qualify and estimate your project scope! 🚀\n\n**What type of solution are you looking to build?**",
              options: [
                "E-Commerce & Online Shop",
                "Custom Business Website",
                "Web App / Internal Portal / LMS",
                "Repair / Service Center Tracking"
              ],
              timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            }
          ]);
          setIsTyping(false);
          return;
        }
      }

      // Step 1: Type Selection Handlers
      if (scopeFlow === 'select_type') {
        if (selectedOption.includes("E-Commerce")) nextFlow = 'ecom';
        else if (selectedOption.includes("Business Website")) nextFlow = 'web';
        else nextFlow = 'system';
        nextStep = 1;
      }

      // ==========================================
      // FLOW A: E-COMMERCE SCOPE INTAKE
      // ==========================================
      if (nextFlow === 'ecom') {
        if (nextStep === 1) {
          updatedData.type = "E-Commerce Website";
          setScopeFlow('ecom');
          setScopeStep(1);
          setScopeData(updatedData);
          setMessages((prev) => [
            ...prev,
            {
              id: Date.now() + 1,
              sender: 'bot',
              text: "Great! Let's estimate your e-commerce project scope. 🛍️\n\n**How many products are you planning to list initially?**",
              options: [
                "1–20 Products (Starter)",
                "20–100 Products (Growth)",
                "100+ Products (Large Catalog)"
              ],
              timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            }
          ]);
        } else if (nextStep === 2) {
          updatedData.products = selectedOption;
          setScopeStep(2);
          setScopeData(updatedData);
          setMessages((prev) => [
            ...prev,
            {
              id: Date.now() + 1,
              sender: 'bot',
              text: "Got it! **What payment gateways & methods do you plan to accept?**",
              options: [
                "PayHere + Koko/Mintpay BNPL (Sri Lanka)",
                "Direct Bank Transfer with Slip Upload",
                "Stripe / PayPal (International)",
                "All Local & Global Gateways + COD"
              ],
              timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            }
          ]);
        } else if (nextStep === 3) {
          updatedData.payments = selectedOption;
          setScopeStep(3);
          setScopeData(updatedData);
          setMessages((prev) => [
            ...prev,
            {
              id: Date.now() + 1,
              sender: 'bot',
              text: "Awesome. **Do you need automated courier dispatch & tracking APIs?**",
              options: [
                "Yes, Koombiyo / Domex / PromptX API",
                "Standard Cash on Delivery (COD) Only",
                "In-Store Pickup Only"
              ],
              timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            }
          ]);
        } else if (nextStep === 4) {
          updatedData.delivery = selectedOption;
          setScopeStep(4);
          setScopeData(updatedData);
          setMessages((prev) => [
            ...prev,
            {
              id: Date.now() + 1,
              sender: 'bot',
              text: "Almost done! **What is your target launch date?**",
              options: [
                "Within 2 Weeks (Rush)",
                "3–4 Weeks (Standard)",
                "Flexible Timeline"
              ],
              timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            }
          ]);
        } else if (nextStep === 5) {
          updatedData.timeline = selectedOption;
          setScopeStep(5);
          setScopeData(updatedData);

          const waSummary = `Hi SyntraLoop! I'd like a project assessment for an E-Commerce Website:%0A• Products: ${encodeURIComponent(updatedData.products || 'Not specified')}%0A• Payments: ${encodeURIComponent(updatedData.payments || 'Not specified')}%0A• Delivery: ${encodeURIComponent(updatedData.delivery || 'Not specified')}%0A• Timeline: ${encodeURIComponent(selectedOption)}`;

          setMessages((prev) => [
            ...prev,
            {
              id: Date.now() + 1,
              sender: 'bot',
              text: `📋 **E-Commerce Scope Intake Complete!**\n\n• **Project Type:** E-Commerce Online Store\n• **Product Volume:** ${updatedData.products}\n• **Payments:** ${updatedData.payments}\n• **Delivery:** ${updatedData.delivery}\n• **Target Timeline:** ${selectedOption}\n\nOur engineering lead can review your scope immediately. Send this brief via WhatsApp or submit our formal assessment:`,
              action: { text: `Send Scope on WhatsApp (${getWhatsAppNumber()})`, href: getWhatsAppUrl(`Hi SyntraLoop! I'd like a project assessment for an E-Commerce Website:\n• Products: ${updatedData.products || 'Not specified'}\n• Payments: ${updatedData.payments || 'Not specified'}\n• Delivery: ${updatedData.delivery || 'Not specified'}\n• Timeline: ${selectedOption}`) },
              options: ["Submit Full Assessment Form", "What is your revision policy?", "Ask Another Question"],
              timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            }
          ]);
          setScopeFlow(null);
        }
      }

      // ==========================================
      // FLOW B: BUSINESS WEBSITE SCOPE INTAKE
      // ==========================================
      else if (nextFlow === 'web') {
        if (nextStep === 1) {
          updatedData.type = "Business Website";
          setScopeFlow('web');
          setScopeStep(1);
          setScopeData(updatedData);
          setMessages((prev) => [
            ...prev,
            {
              id: Date.now() + 1,
              sender: 'bot',
              text: "Let's qualify your website project! 🚀\n\n**Do you already have a domain/hosting, or do you need us to set that up from scratch?**",
              options: [
                "I already have domain & hosting",
                "Need SyntraLoop to set up from scratch",
                "Not sure yet (Need guidance)"
              ],
              timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            }
          ]);
        } else if (nextStep === 2) {
          updatedData.hosting = selectedOption;
          setScopeStep(2);
          setScopeData(updatedData);
          setMessages((prev) => [
            ...prev,
            {
              id: Date.now() + 1,
              sender: 'bot',
              text: "Got it! **Do you already have content and logo ready, or will you need design support?**",
              options: [
                "Logo & content are 100% ready",
                "Have Figma designs ready for code conversion",
                "Need full UI/UX design & copywriting support"
              ],
              timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            }
          ]);
        } else if (nextStep === 3) {
          updatedData.design = selectedOption;
          setScopeStep(3);
          setScopeData(updatedData);
          setMessages((prev) => [
            ...prev,
            {
              id: Date.now() + 1,
              sender: 'bot',
              text: "Perfect. **What is your target launch date?**",
              options: [
                "Within 2 Weeks (Rush)",
                "3–4 Weeks (Standard)",
                "Flexible Timeline"
              ],
              timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            }
          ]);
        } else if (nextStep === 4) {
          updatedData.timeline = selectedOption;
          setScopeStep(4);
          setScopeData(updatedData);

          const waSummary = `Hi SyntraLoop! I'd like a project assessment for a Business Website:%0A• Domain/Hosting: ${encodeURIComponent(updatedData.hosting || 'Not specified')}%0A• Design/Content: ${encodeURIComponent(updatedData.design || 'Not specified')}%0A• Target Timeline: ${encodeURIComponent(selectedOption)}`;

          setMessages((prev) => [
            ...prev,
            {
              id: Date.now() + 1,
              sender: 'bot',
              text: `📋 **Website Scope Intake Complete!**\n\n• **Project Type:** Business Website\n• **Hosting/Domain:** ${updatedData.hosting}\n• **Design/Content:** ${updatedData.design}\n• **Target Timeline:** ${selectedOption}\n\nOur engineering lead will review this scope and send milestone pricing. Send via WhatsApp or submit our assessment form:`,
              action: { text: `Send Scope on WhatsApp (${getWhatsAppNumber()})`, href: getWhatsAppUrl(`Hi SyntraLoop! I'd like a project assessment for a Business Website:\n• Hosting/Domain: ${updatedData.hosting}\n• Design/Content: ${updatedData.design}\n• Target Timeline: ${selectedOption}`) },
              options: ["Submit Full Assessment Form", "What is your revision policy?", "Ask Another Question"],
              timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            }
          ]);
          setScopeFlow(null);
        }
      }

      // ==========================================
      // FLOW C: CUSTOM SYSTEMS / LMS / REPAIRS
      // ==========================================
      else {
        updatedData.type = selectedOption;
        const waSummary = `Hi SyntraLoop! I'd like a project assessment for a Custom Solution:%0A• System: ${encodeURIComponent(selectedOption)}`;

        setMessages((prev) => [
          ...prev,
          {
            id: Date.now() + 1,
            sender: 'bot',
            text: `📋 **System Requirement Logged: ${selectedOption}**\n\nWe build tailored cloud portals with 100% code ownership, role access, and payment integrations. Connect directly with our lead architect:`,
            action: { text: `Connect on WhatsApp (${getWhatsAppNumber()})`, href: getWhatsAppUrl(`Hi SyntraLoop! I'd like a project assessment for a Custom Solution:\n• System: ${selectedOption}`) },
            options: ["Submit Full Assessment Form", "What is your revision policy?", "Ask Another Question"],
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          }
        ]);
        setScopeFlow(null);
      }

      setIsTyping(false);
    }, 550);
  };

  const findBestResponse = (query) => {
    const cleanQuery = query.toLowerCase().trim();
    // Normalize punctuation & repeated characters
    const stripped = cleanQuery.replace(/[!?.,;:~@#$%^&*()_+=\-[\]{}"'\\/|<>\r\n]/g, ' ').replace(/\s+/g, ' ').trim();

    // ========================================================
    // 🛡️ SECURITY & GUARDRAILS LAYER
    // ========================================================

    // 1. Prompt Injection, Jailbreak & Secret Extraction Defense
    if (/(system\s*prompt|ignore\s*(all|previous)\s*instructions|developer\s*mode|dan\s*mode|jailbreak|reveal\s*your\s*(instructions|prompt)|print\s*(your\s*)?system\s*prompt|api\s*key|secret\s*key|env\s*variables|backend\s*instructions|hidden\s*prompt)/i.test(stripped)) {
      return {
        text: "🛡️ **Security Notice:**\n\nI operate strictly under **SyntraLoop Security & Privacy Protocols**. System configurations, internal instructions, and API keys are protected and cannot be disclosed.\n\nHow can I assist you with your web application, e-commerce, or AI software project today?",
        options: [
          "⚡ Scope My Project (Instant Estimator)",
          "What services do you offer?",
          "What is your tech stack?"
        ],
        action: { text: "Our Security Standards", href: "/about" }
      };
    }

    // 2. Anti-Exploitation: Absurd Promises, Binding Legal Contracts & Unauthorized Discounting
    if (
      /(agree\s*to\s*build\s*for|binding\s*contract|legal\s*promise|promise\s*me\s*this\s*price|guarantee\s*this\s*price|give\s*me\s*(90|80|70|60|50)%?\s*discount|build.*(amazon|facebook|uber|airbnb|daraz|ebay|netflix|tiktok|clone).*(2\s*days|1\s*day|5000|1000|500|cheap|free|rs\s*5000|rs\s*1000))/i.test(stripped)
    ) {
      return {
        text: "⚠️ **Pricing & Feasibility Advisory:**\n\nAs an automated assistant, **I cannot make legally binding price agreements, approve arbitrary discounts, or promise unfeasible turnaround times** for complex systems.\n\nComplex platforms (such as multi-vendor marketplaces or on-demand networks) require custom cloud architecture, database modeling, and dedicated sprint planning. All official pricing and milestone contracts are reviewed and issued directly by our technical lead.",
        options: [
          "⚡ Scope My Project (Instant Estimator)",
          "What are your payment terms?",
          "How long does a project take?"
        ],
        action: { text: "Request Formal Feasibility Assessment", href: "/contact#assessment-form" }
      };
    }

    // 3. Non-Advisory Guardrail: Legal, Tax (VAT/SVAT/IRD) & Formal Accounting Disclaimer
    if (/(tax\s*advice|vat\s*advice|svat\s*advice|legal\s*advice|register\s*my\s*company|tax\s*filing|accounting\s*advice|sri\s*lanka\s*tax|inland\s*revenue|ird\s*tax|company\s*registration\s*law)/i.test(stripped)) {
      return {
        text: "⚖️ **Non-Advisory Disclaimer:**\n\nSyntraLoop specializes strictly in **software engineering and digital architecture**. We do **not** provide formal legal, tax (VAT/SVAT/IRD), or accounting advice.\n\nFor business registration, tax compliance, or legal documentation in Sri Lanka, please consult a certified chartered accountant, legal counsel, or the Department of the Registrar of Companies (ROC).\n\nWe can, however, implement automated tax calculation formulas (such as VAT or checkout surcharges) into your software based on your authorized business rules!",
        options: [
          "⚡ Scope My Project (Instant Estimator)",
          "PayHere & Local Payment Gateways?",
          "Explore Services"
        ],
        action: { text: "Explore E-Commerce Solutions", href: "/services" }
      };
    }

    // ========================================================
    // 🚀 QUICK ACTION PILL BUTTON TRIGGERS
    // ========================================================

    // 1. Repair Shop Demo
    if (/(view live repair shop demo|repair shop demo|repair demo)/i.test(stripped)) {
      return {
        text: "🛠️ **Live Repair Shop & Service Center Tracking Demo:**\n\nExplore how our automated repair tracking architecture works:\n• **Serial / Job Card Lookup:** Customers track live diagnosis, repair milestones, and quote approvals online.\n• **Technician & Parts Log:** Auto-assign tasks, log replaced components, and update status in real-time.\n• **Automated SMS & WhatsApp Alerts:** Automatic notifications triggered at each milestone (Inspection -> Parts Ordered -> Ready for Pickup).",
        options: [
          "💰 Estimate My Project Cost",
          "☕ View Café QR Menu Demo",
          "💬 Talk on WhatsApp"
        ],
        action: { text: "View Case Studies & Solutions", href: "/work" }
      };
    }

    // 2. Cafe QR Menu Demo
    if (/(view caf(e|é) qr menu demo|caf(e|é) qr menu demo|caf(e|é) demo|qr menu demo)/i.test(stripped)) {
      return {
        text: "☕ **Live Café & Restaurant QR Digital Menu Demo:**\n\nExperience our high-speed mobile hospitality ordering system:\n• **Instant Contactless Ordering:** Interactive mobile menu with dietary filters, high-res photos, and modifier options.\n• **Direct Takeaway & WhatsApp Checkout:** Orders routed straight to the counter or kitchen thermal printer.\n• **Table Booking & Advance Slots:** Reserve tables with automated confirmation SMS.\n• **Zero Commissions:** 100% direct revenue with no platform fees.",
        options: [
          "💰 Estimate My Project Cost",
          "🛠️ View Live Repair Shop Demo",
          "💬 Talk on WhatsApp"
        ],
        action: { text: "Explore Hospitality Solutions", href: "/work" }
      };
    }

    // 3. Project Cost Estimator
    if (/(estimate my project cost|estimate project cost|project cost estimator|scope estimator)/i.test(stripped)) {
      setTimeout(() => handleScopeIntakeOption("select_type"), 50);
      return {
        text: "Starting your Interactive Project Scope & Cost Estimator...",
        options: []
      };
    }

    // 4. WhatsApp Direct Chat
    if (/(talk on whatsapp|chat on whatsapp|open whatsapp)/i.test(stripped)) {
      return {
        text: `💬 **Talk Directly with Our Engineering Lead on WhatsApp:**\n\nSkip the email back-and-forth! Connect directly with our technical lead at **${getWhatsAppNumber()}** for instant project consultations, feasibility reviews, and technical scoping.`,
        options: [
          "💰 Estimate My Project Cost",
          "📞 Request an Immediate Callback",
          "🛠️ View Live Repair Shop Demo"
        ],
        action: { text: `Open WhatsApp (${getWhatsAppNumber()})`, href: getWhatsAppUrl("Hi SyntraLoop, I would like to discuss a project!") }
      };
    }

    // 0. Immediate Callback Intent Trigger
    if (/(can someone call me|call me|phone me|call back|callback|speak on phone|voice call|call karanna|mata call ekak|call ganna|request a call)/i.test(stripped)) {
      setTimeout(() => handleCallbackOption(query), 50);
      return {
        text: "Initiating Callback Request...",
        options: []
      };
    }

    // Trigger Scope Intake Qualifier when user expresses build intent
    if (/(scope my project|instant estimator|i want an e-commerce|i want an ecommerce|i want an online shop|i need an e-commerce|build me an ecommerce)/i.test(stripped)) {
      setTimeout(() => handleScopeIntakeOption("E-Commerce & Online Shop"), 50);
      return {
        text: "Starting your E-Commerce Scope Intake...",
        options: []
      };
    }
    if (/(i want a website|i need a website|build me a website|i want a site|business website)/i.test(stripped)) {
      setTimeout(() => handleScopeIntakeOption("Custom Business Website"), 50);
      return {
        text: "Starting your Business Website Scope Intake...",
        options: []
      };
    }

    // 0. Singlish & Sinhala Inquiries (Sri Lankan Local Business Context)
    // 0A. Web development pricing in Singlish / Sinhala
    if (/(web\s*ekak|website\s*ekak|app\s*ekak|system\s*ekak|site\s*ekak).*(hadaganna|hadanna|hadala|ona|kiyada|kiyak|ganan|mulinma)/i.test(stripped) || 
        /(kiyada|kiyak\s*yaida|ganan\s*kohomada|ganan|kiyada\s*wenne|gana\s*kiyada|web\s*ekak\s*hadanna\s*kiyak\s*yaida)/i.test(stripped)) {
      return {
        text: "ආයුබෝවන්! 🙏 SyntraLoop වෙතින් ඔබගේ ව්‍යාපාරයට ගැළපෙන Website, Online Shop හෝ Web Application එකක් සාදාගත හැක:\n\n• **Basic Business / Portfolio Site:** රු. 35,000 – 65,000 පමණ සිට\n• **E-Commerce & Online Shop (PayHere / Koko / Koombiyo):** රු. 75,000 – 150,000 පමණ සිට\n• **Custom Web Apps & AI Business Systems:** Scope එක අනුව සාකච්ඡා කර තීරණය කෙරේ\n\nඔබේ requirements වලට නිවැරදිම මිල ගණන් ලබා ගැනීමට Scope Estimator එක ආරම්භ කරන්න:",
        options: [
          "⚡ Scope My Project (Instant Estimator)",
          "📞 Request an Immediate Callback",
          "I want an E-Commerce website",
          "I want a Business Website"
        ],
        action: { text: `Chat on WhatsApp (${getWhatsAppNumber()})`, href: getWhatsAppUrl() }
      };
    }

    // 0B. Repair Shop / Service Center in Singlish
    if (/(repair|job\s*card|phone\s*repair|laptop\s*repair|garage|service\s*center|warranty).*(system|web|check|hadanna|ona)/i.test(stripped)) {
      return {
        text: "ඔව්! Repair Shop, Service Center හෝ Garage එකක් සඳහා Job Card & Serial Number Repair Tracking System එකක් සාදා දිය හැක 🔧:\n\n• Customers ලාට Serial / IMEI හෝ Job Card Number එකෙන් repair status එක බැලිය හැක.\n• Repair එක අවසන් වූ විට Instant SMS / WhatsApp Alerts.\n• Spare parts inventory සහ technician workload tracking.",
        action: { text: "Request Repair System", href: "/contact#assessment-form" }
      };
    }

    // 0C. Retail, Shop, POS & Stock Management in Singlish
    if (/(kadekata|shop\s*ekakata|inventory|stock|pos\s*ekak|wholesale|naya\s*potha|billing).*(hadanna|ona|system)/i.test(stripped)) {
      return {
        text: "ඔව්! කඩ සාප්පු, Retail Stores සහ Wholesale ව්‍යාපාර සඳහා Cloud POS, Inventory & Stock Management Systems සකස් කර දෙනු ලැබේ 📦:\n\n• බඩු ඉවර වෙන්න කලින් Low-Stock SMS/Email Alerts.\n• Retail සහ Wholesale වෙන වෙනම මිල ගණන් (Price Tiers).\n• ණය පොත (Customer Credit Ledger & WhatsApp Reminders).\n• Fast Barcode POS Billing සහ Thermal Receipt Printing.",
        action: { text: "Request Retail & POS System", href: "/contact#assessment-form" }
      };
    }

    // 0D. Cafe / Restaurant Menu in Singlish
    if (/(online\s*menu|qr\s*menu|cafe\s*ekak|restaurant\s*ekak|kama\s*order|food\s*order|table\s*book)/i.test(stripped)) {
      return {
        text: "ඔව්! ඔබේ Cafe හෝ Restaurant එක සඳහා modern **Interactive QR Digital Menu** එකක් හෝ Direct WhatsApp Food Ordering Platform එකක් සකස් කර දිය හැක! 🍕\n\n• පාරිභෝගිකයින්ට QR කෝඩ් එක Scan කර Menu එක බලා instant order කළ හැක.\n• Table booking සහ Kitchen එකට සෘජුව KOT Print වීමේ හැකියාව.\n• කිසිදු Monthly Platform Commissions නැත (100% Code Ownership).",
        action: { text: "Request Cafe Solution", href: "/contact#assessment-form" }
      };
    }

    // 0E. Tuition / LMS in Singlish
    if (/(tuition|class\s*ekak|clz\s*ekak|lms\s*ekak|panthi|video\s*class|student\s*portal)/i.test(stripped)) {
      return {
        text: "ඔව්! Tuition ගුරුවරුන් සහ ආයතන සඳහා Screen Record කළ නොහැකි **Secure Video Player**, PayHere/Bank Slip මාසික පන්ති ගාස්තු අය කිරීම් සහ Online MCQ Paper Exam Systems සහිත LMS පද්ධති අප සකස් කර දෙනු ලැබේ. 📚",
        action: { text: "Request Tuition LMS", href: "/contact#assessment-form" }
      };
    }

    // 0F. Salon & Clinic Booking in Singlish
    if (/(salon\s*ekak|spa\s*ekak|clinic\s*ekak|doctor\s*channelling|appointment\s*booking|stylist).*(hadanna|ona|system)/i.test(stripped)) {
      return {
        text: "ඔව්! Salon, Spa හෝ Clinic සඳහා WhatsApp & Web Appointment Booking System එකක් සාදා දිය හැක 💇‍♀️:\n\n• Stylist / Doctor සහ Time Slot තෝරාගෙන online book කිරීමේ හැකියාව.\n• PayHere, Koko හෝ Mintpay මගින් Advance Deposit අය කිරීම.\n• No-shows අවම කරන Automated WhatsApp / SMS Reminders.",
        action: { text: "Request Booking System", href: "/contact#assessment-form" }
      };
    }

    // 0G. Revisions & Content supply in Singlish
    if (/(revisions|changes|wenas\s*karanna|content\s*kauda\s*denne|photos\s*kauda|legal\s*policy).*(puluwanda|kiyada|denawada)/i.test(stripped)) {
      return {
        text: "අපගේ **Revisions Policy** අනුව Prototype අදියරේදී Revision Rounds 2ක් සහ Live Staging අදියරේදී Revision Rounds 2ක් හිමිවේ. Launch කිරීමෙන් පසු දින 30ක Bug Fix Warranty එකක් ලැබේ. Copywriting සහ Photos client විසින් සැපයිය යුතු අතර අවශ්‍ය නම් AI-assisted formatting අප විසින් කර දෙනු ලැබේ.",
        options: [
          "What is your revision policy?",
          "Who provides content & images?",
          "⚡ Scope My Project (Instant Estimator)"
        ],
        action: { text: "Read Guarantees", href: "/about" }
      };
    }

    // 0H. Excel / Google Sheets Data Import & Export in Singlish
    if (/(excel|google\s*sheets|sheets|csv|poth\s*wala|data\s*import|data\s*export|pdf\s*report).*(danna|ganna|import|export|puluwanda)/i.test(stripped)) {
      return {
        text: "ඔව්! ඔබ දැනට Excel, Google Sheets හෝ පොත් වල සටහන් කරගෙන සිටින ඕනෑම Product Lists, Customer Records හෝ Stock Counts අපගේ Bulk Import Pipelines මගින් අලුත් System එකට Data Loss වීමකින් තොරව Import කර දිය හැක. 📊\n\nඑසේම අලුත් Admin Dashboard එකෙන් Daily Sales, Stock, සහ Customer ණය වාර්තා 1-Click මගින් නැවත Excel (CSV) හෝ PDF format වලින් Download කරගත හැක!",
        options: [
          "⚡ Scope My Project (Instant Estimator)",
          "Excel & Product Data Migration?",
          "Chat on WhatsApp (+94 74 226 6041)"
        ],
        action: { text: "Discuss Data Migration", href: "/contact#assessment-form" }
      };
    }

    // 0I. Maintenance, SLA & Breakages in Singlish / Sinhala
    if (/(kadunoth|bug\s*ekak|awulak|wada\s*karannathuwath|3\s*months|passe\s*awulak|maintenance|domain\s*renewal|hosting\s*renewal).*(wenne|monada|puluwanda|kohomada)/i.test(stripped)) {
      return {
        text: "අපගේ Maintenance Retainers මගින් Critical Bugs සඳහා **පැය 24ක් ඇතුළත Emergency Fixes (SLA)** සහතික කෙරේ. 🛡️\n\n• දිනපතා/සතිපතා Cloud Database Backups සහ Security Patches සිදු කෙරේ.\n• Domain හා Hosting Renewals සඳහා දින 30කට පෙර Advance Reminders ලැබෙන බැවින් ඔබගේ Site එක කිසිවිටෙකත් Offline නොවේ.\n• සෑම Project එකකටම දින 30ක Free Post-Launch Warranty එකක් හිමිවේ.",
        options: [
          "⚡ Scope My Project (Instant Estimator)",
          "Emergency SLA & Maintenance Plans?",
          "Chat on WhatsApp (+94 74 226 6041)"
        ],
        action: { text: "Explore Maintenance Plans", href: "/services" }
      };
    }

    // 0J. Common Sinhala & Singlish Greetings
    if (/^(ayubowan|kohomada|subha\s*udasanak|subha\s*sandhyawak|vanakkam|elakiri|ela|sthuthi|bohoma\s*sthuthi|hari|ow|na)\b/i.test(stripped)) {
      return {
        text: "ආයුබෝවන්! 🙏 SyntraLoop වෙත සාදරයෙන් පිළිගනිමු. ඔබගේ Business Website, Online Payment (PayHere/Koko), Delivery Tracking, POS හෝ AI Systems පිළිබඳව ඕනෑම ප්‍රශ්නයක් අසන්න. අප සහය වීමට සූදානම්!",
        options: [
          "⚡ Scope My Project (Instant Estimator)",
          "📞 Request an Immediate Callback",
          "PayHere & Local Payment Gateways?",
          "Koombiyo & Domex Courier Tracking?"
        ],
        action: { text: "Contact on WhatsApp", href: getWhatsAppUrl() }
      };
    }

    // 1. Morning greetings (gm, good morning, morning, mrng, gud mrng, ☀️)
    if (/^(gm|gud\s*mrng|gud\s*morning|good\s*morning|morning|mornin|mrng|top\s*of\s*the\s*morning)\b/i.test(stripped) || stripped === 'gm' || cleanQuery.includes('☀️') || cleanQuery.includes('🌅')) {
      return {
        text: "Good morning! ☀️ Hope you're having a productive start to your day. How can SyntraLoop assist you with your web application, business system, or AI project today?",
        options: [
          "⚡ Scope My Project (Instant Estimator)",
          "📞 Request an Immediate Callback",
          "What services do you offer?",
          "How long does a project take?"
        ],
        action: { text: "Explore Our Capabilities", href: "/services" }
      };
    }

    // 2. Afternoon / Evening greetings (ga, ge, good afternoon, good evening)
    if (/^(ga|gud\s*afternoon|good\s*afternoon|afternoon|gud\s*aftrnoon|aftrnoon)\b/i.test(stripped) || stripped === 'ga') {
      return {
        text: "Good afternoon! 🌤️ Hope your day is going well. Are you planning a new software build or exploring AI automations for your business?",
        options: [
          "⚡ Scope My Project (Instant Estimator)",
          "📞 Request an Immediate Callback",
          "I want an E-Commerce website",
          "View Portfolio"
        ],
        action: { text: "View Portfolio", href: "/work" }
      };
    }
    if (/^(ge|gud\s*evening|good\s*evening|evening|gud\s*evng|evng)\b/i.test(stripped) || stripped === 'ge') {
      return {
        text: "Good evening! 🌇 Ready to turn your digital ideas into reliable solutions. What can I help answer for you tonight?",
        options: [
          "⚡ Scope My Project (Instant Estimator)",
          "📞 Request an Immediate Callback",
          "Request Project Assessment",
          "What is your tech stack?"
        ],
        action: { text: "Request Assessment", href: "/contact#assessment-form" }
      };
    }

    // 3. Night / Farewell greetings (gn, good night, bye, goodbye, cya, see ya, tc)
    if (/^(gn|gud\s*night|good\s*night|goodnight|night|nite|gud\s*nite|gud\s*nyt|nyt)\b/i.test(stripped) || stripped === 'gn' || cleanQuery.includes('🌙') || cleanQuery.includes('😴')) {
      return {
        text: "Good night! 🌙 Rest well! If you need anything for your project tomorrow, you can submit an assessment or leave a message anytime.",
        action: { text: "Leave a Project Note", href: "/contact#assessment-form" }
      };
    }
    if (/^(bye|goodbye|cya|see\s*you|see\s*ya|ttyl|later|peace\s*out|take\s*care|tc|catch\s*you\s*later)\b/i.test(stripped)) {
      return {
        text: "Have a wonderful day! 👋 Feel free to reach back out anytime you want to build or scale your software solutions with SyntraLoop.",
        action: { text: "Contact Team", href: "/contact" }
      };
    }

    // 4. Standard / Casual greetings (hi, hello, hey, yo, sup, howdy, hola, 👋)
    if (/^(hi|hii|hiii|hello|helo|hey|heyy|heyyy|heya|hiya|hie|hoi|yo|yoo|sup|what'?s\s*up|whats\s*up|wassup|wazzup|howdy|hola|bonjour|namaste|vanakkam|ayubowan)\b/i.test(stripped) || cleanQuery.includes('👋')) {
      return {
        text: "Hello! 👋 Great to have you here. I'm the **SyntraLoop AI Assistant**. Are you interested in custom web apps, business workflow systems, AI integration, local payment setups, or getting a quick estimate?",
        options: [
          "⚡ Scope My Project (Instant Estimator)",
          "📞 Request an Immediate Callback",
          "I want an E-Commerce website",
          "I want a Business Website"
        ],
        action: { text: "Explore Services", href: "/services" }
      };
    }

    // 5. How are you / Check-in queries
    if (/^(how\s*are\s*you|how\s*r\s*u|how\s*you\s*doing|hows\s*it\s*going|how'?s\s*it\s*going|how\s*are\s*things|how\s*do\s*you\s*do|what'?s\s*good|hbu|what\s*are\s*you\s*doing)\b/i.test(stripped)) {
      return {
        text: "I'm doing great, thank you for asking! 🚀 Ready to help you architect, plan, and estimate your digital solutions. What's on your mind today?",
        options: [
          "⚡ Scope My Project (Instant Estimator)",
          "📞 Request an Immediate Callback",
          "What are your payment terms?",
          "How long does a project take?"
        ],
        action: { text: "Get an Assessment", href: "/contact#assessment-form" }
      };
    }

    // 6. Identity & Capability queries (who are you, what can you do)
    if (/(who are you|what is your name|what are you|what can you do|are you ai|are you real|are you a bot)/i.test(stripped)) {
      return {
        text: "I'm the **SyntraLoop AI Assistant** 🤖! I can qualify project requirements, provide instant scope estimates, review our tech stack, and connect you directly with our engineering team.",
        options: [
          "⚡ Scope My Project (Instant Estimator)",
          "📞 Request an Immediate Callback",
          "What services do you offer?",
          "Who are you (Team & Studio Structure)?"
        ],
        action: { text: "About SyntraLoop", href: "/about" }
      };
    }

    // 7. Polite acknowledgements (ok, cool, great, nice, got it, awesome)
    if (/^(ok|okay|k|alright|cool|great|awesome|nice|got it|roger that|sure|sweet|perfect|understood)\b/i.test(stripped)) {
      return {
        text: "Glad to hear that! 👍 Ready to kick off your project estimation?",
        options: [
          "⚡ Scope My Project (Instant Estimator)",
          "📞 Request an Immediate Callback",
          "Who owns the code?",
          "Schedule Consultation"
        ],
        action: { text: "Schedule Consultation", href: "/contact#assessment-form" }
      };
    }

    // 8. Thank you queries
    if (/^(thanks|thank you|thx|ty|thank you so much|appreciate it|much appreciated|cheers)\b/i.test(stripped)) {
      return {
        text: "You're very welcome! 😊 We take pride in craftsmanship and transparent communication. Whenever you're ready to build, we're here to help.",
        options: [
          "⚡ Scope My Project (Instant Estimator)",
          "📞 Request an Immediate Callback",
          "Start a Project With Us"
        ],
        action: { text: "Start a Project With Us", href: "/contact" }
      };
    }

    // 9. Direct Human / Live Contact intent
    if (/(talk to human|speak to human|real person|call me|zoom|meeting|schedule call|consultation|talk to team)/i.test(stripped)) {
      return {
        text: `You can talk directly with our engineering leadership! Connect via WhatsApp at **${getWhatsAppNumber()}**, email **${getContactEmail()}**, or request an immediate phone callback right here:`,
        options: [
          "📞 Request an Immediate Callback",
          `Chat on WhatsApp (${getWhatsAppNumber()})`,
          "Submit Assessment Form"
        ],
        action: { text: `Chat on WhatsApp (${getWhatsAppNumber()})`, href: getWhatsAppUrl() }
      };
    }

    // 10. Keyword Match Scoring against SyntraLoop Knowledge Base
    let bestMatch = null;
    let highestScore = 0;

    for (const item of KNOWLEDGE_BASE) {
      let score = 0;
      for (const kw of item.keywords) {
        if (cleanQuery.includes(kw)) {
          score += kw.length; // weight longer keyword matches higher
        }
      }
      if (score > highestScore) {
        highestScore = score;
        bestMatch = item;
      }
    }

    if (bestMatch && highestScore > 0) {
      return {
        text: bestMatch.answer,
        action: bestMatch.action,
        options: [
          "⚡ Scope My Project (Instant Estimator)",
          "📞 Request an Immediate Callback",
          "What is your revision policy?"
        ]
      };
    }

    // 11. Smart Contextual Fallback & Human Escalation for complex/out-of-domain queries
    return {
      text: "That requires a custom architecture review with our technical lead. 🛠️\n\nWould you like me to connect you directly to WhatsApp at **+94 74 226 6041**, schedule an immediate callback, or pass your requirements to the team?",
      options: [
        "📞 Request an Immediate Callback",
        "⚡ Scope My Project (Instant Estimator)",
        "What services do you offer?",
        "Request Assessment"
      ],
      action: { text: `Connect on WhatsApp (${getWhatsAppNumber()})`, href: getWhatsAppUrl() }
    };
  };

  const handleSendMessage = (textToSend) => {
    const query = (textToSend || inputValue).trim().slice(0, 500);
    if (!query) return;

    // Check if in Callback Flow
    if (callbackFlow || query.includes("Request an Immediate Callback") || query.includes("Request a Callback")) {
      handleCallbackOption(query);
      setInputValue('');
      return;
    }

    // Check if user clicked a Scope intake option
    if (
      scopeFlow || 
      query.includes("Scope My Project") || 
      query.includes("Instant Estimator") || 
      query.includes("E-Commerce website") || 
      query.includes("Business Website")
    ) {
      handleScopeIntakeOption(query);
      setInputValue('');
      return;
    }

    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    // Simulate natural AI typing latency
    setTimeout(() => {
      const response = findBestResponse(query);
      const botMsg = {
        id: Date.now() + 1,
        sender: 'bot',
        text: response.text,
        action: response.action,
        options: response.options,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 600);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="syntraloop-chatbot-wrapper">
      {/* Floating Toggle Button */}
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="chatbot-floating-toggle"
          aria-label="Open SyntraLoop AI Chatbot"
          title="Chat with SyntraLoop Assistant"
        >
          <div className="chatbot-toggle-inner">
            <Bot size={24} className="chatbot-bot-icon" />
            <Sparkles size={14} className="chatbot-sparkle-icon" />
            {hasUnread && <span className="chatbot-unread-dot" />}
          </div>
          <span className="chatbot-floating-tooltip">Ask SyntraLoop AI</span>
        </button>
      )}

      {/* Chatbot Window */}
      {isOpen && (
        <div className="chatbot-window animate-scale-up" role="dialog" aria-label="SyntraLoop Assistant">
          {/* Header */}
          <div className="chatbot-header">
            <div className="chatbot-header-left">
              <div className="chatbot-avatar-box">
                <Bot size={20} className="text-white" />
                <span className="chatbot-online-dot" />
              </div>
              <div>
                <h3 className="chatbot-title">SyntraLoop Assistant</h3>
                <p className="chatbot-status">
                  <span className="status-indicator" /> Online &bull; Instant Scope Estimator
                </p>
              </div>
            </div>

            <div className="chatbot-header-actions">
              <button
                type="button"
                onClick={handleResetChat}
                className="chatbot-ctrl-btn"
                title="Reset conversation"
                aria-label="Reset chat"
              >
                <RotateCcw size={15} />
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="chatbot-ctrl-btn"
                title="Close chat"
                aria-label="Close chat"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Quick Prompts Bar */}
          <div className="chatbot-quick-bar">
            {QUICK_PROMPTS.map((prompt, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSendMessage(prompt)}
                className={`chatbot-quick-btn ${prompt.includes("Scope My Project") ? "highlight-btn" : ""}`}
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Messages Area */}
          <div className="chatbot-messages-body">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`chatbot-msg-row ${msg.sender === 'user' ? 'is-user' : 'is-bot'}`}
              >
                {msg.sender === 'bot' && (
                  <div className="chatbot-msg-avatar">
                    <Bot size={14} />
                  </div>
                )}

                <div className="chatbot-msg-bubble">
                  <div className="chatbot-msg-text">
                    {msg.text.split('\n').map((line, lIdx) => {
                      if (!line) return <br key={lIdx} />;
                      
                      // Simple bold renderer
                      const parts = line.split(/(\*\*.*?\*\*)/g);
                      return (
                        <p key={lIdx} className="mb-1 last:mb-0">
                          {parts.map((p, pIdx) => {
                            if (p.startsWith('**') && p.endsWith('**')) {
                              return <strong key={pIdx}>{p.slice(2, -2)}</strong>;
                            }
                            return p;
                          })}
                        </p>
                      );
                    })}
                  </div>

                  {/* Interactive Option Chips inside message */}
                  {msg.options && msg.options.length > 0 && (
                    <div className="chatbot-bubble-options">
                      {msg.options.map((opt, oIdx) => (
                        <button
                          key={oIdx}
                          type="button"
                          onClick={() => handleSendMessage(opt)}
                          className="chatbot-bubble-opt-btn"
                        >
                          <span>{opt}</span>
                          <ArrowRight size={12} className="opt-arrow" />
                        </button>
                      ))}
                    </div>
                  )}

                  {msg.action && (
                    <div className="chatbot-action-box">
                      {msg.action.href.startsWith("http") ? (
                        <a
                          href={msg.action.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="chatbot-action-link"
                        >
                          <span>{msg.action.text}</span>
                          <ExternalLink size={13} />
                        </a>
                      ) : (
                        <Link
                          href={msg.action.href}
                          onClick={() => setIsOpen(false)}
                          className="chatbot-action-link"
                        >
                          <span>{msg.action.text}</span>
                          <ArrowRight size={13} />
                        </Link>
                      )}
                    </div>
                  )}

                  <span className="chatbot-msg-time">{msg.timestamp}</span>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="chatbot-msg-row is-bot">
                <div className="chatbot-msg-avatar">
                  <Bot size={14} />
                </div>
                <div className="chatbot-typing-bubble">
                  <span className="typing-dot" />
                  <span className="typing-dot" />
                  <span className="typing-dot" />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="chatbot-footer">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="chatbot-input-form"
            >
              <input
                ref={inputRef}
                type="text"
                maxLength={500}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={callbackFlow ? "Enter your phone number..." : "Type a message or select an option above..."}
                className="chatbot-input-field"
                aria-label="Type message"
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || isTyping}
                className="chatbot-send-btn"
                aria-label="Send message"
              >
                {isTyping ? (
                  <Loader2 size={16} className="animate-spin text-blue-600" />
                ) : (
                  <Send size={16} />
                )}
              </button>
            </form>

            <div className="chatbot-disclaimer">
              Powered by SyntraLoop Intelligence &bull; Instant Scope Estimations
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
