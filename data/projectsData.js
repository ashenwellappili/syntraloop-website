export const projectsData = [
  {
    id: "luxury-villa-platform",
    title: "Luxury Villa Stay",
    category: "Web Application",
    badgeText: "Featured Build",
    description: "A luxury villa booking website for a peaceful stay in Nuwara Eliya, Sri Lanka, designed with a premium hospitality-focused interface.",
    overview: "A luxury villa booking website for a peaceful stay in Nuwara Eliya, Sri Lanka, designed with a premium hospitality-focused interface. Built using React.js, Tailwind CSS, and Vite, featuring date & guest reservation engines, interactive villa galleries with room categories, live weather & surroundings guides, and direct WhatsApp concierge booking.",
    hasLiveDemo: true,
    features: [
      "Interactive check-in and check-out reservation calendar with guest selector",
      "Dynamic villa gallery showcase with Living Areas, Bedrooms, Dining, Garden & Evening filters",
      "Comprehensive amenities list (Fireplace, Mountain Views, Butler Service, Tea Garden)",
      "Nearby attractions explorer covering Gregory Lake, Victoria Park, and Lovers Leap Waterfall",
      "Direct WhatsApp concierge and fast reservation inquiry dispatch",
      "Ultra-responsive luxury dark theme with gold accents and elegant typography"
    ],
    highlights: [
      "Crafted with modern React.js and Vite for sub-second page transitions",
      "Styled using Tailwind CSS with bespoke dark luxury palette and gold accents",
      "Full mobile-first responsive architecture supporting all viewport sizes",
      "Zero-friction booking funnel with direct booking confirmation triggers"
    ],
    clientType: "Luxury Villa & Holiday Home (Nuwara Eliya, Sri Lanka)",
    technologies: ["React.js", "Tailwind CSS", "Vite"],
    image: "/villa-showcase.jpg",
    gallery: [
      {
        url: "/villa-showcase.jpg",
        title: "Villa Exterior & Living Pavilion",
        caption: "Peaceful mountain retreat in Nuwara Eliya with ambient evening lighting."
      },
      {
        url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
        title: "Master Suite & Wooden Accents",
        caption: "Warm timber interiors, king bedding, and mountain mist views."
      },
      {
        url: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
        title: "Lounge & Dining Hall",
        caption: "Spacious private dining area with artisanal teak craftsmanship."
      },
      {
        url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
        title: "Tea Garden & Terrace",
        caption: "Private terrace overlooking lush Nuwara Eliya tea hills and mist."
      }
    ],
    liveUrl: "YOUR_VILLA_WEBSITE_URL",
    githubUrl: "#",
    isDemoProject: true
  },
  {
    id: "demo-project-two",
    title: "Operational Intelligence Dashboard",
    category: "Python & Data Analytics",
    badgeText: "Analytics Prototype",
    description: "An enterprise operational dashboard powered by a high-throughput Python data engine, real-time telemetry streaming, and reactive data visualizations.",
    overview: "An enterprise operational analytics and monitoring platform engineered with a high-performance Python (FastAPI/Pandas) analytics backend and a responsive TypeScript/React data visualization layer. Designed for sub-second telemetry ingestion, multi-dimensional cohort slicing, live WebSocket KPI broadcasting, and automated executive reporting.",
    hasLiveDemo: true,
    features: [
      "Python-driven real-time analytics aggregation and statistical KPI calculations",
      "Dynamic telemetry charting and time-series analytics using Plotly & Recharts",
      "High-performance virtualized data grid with multi-column filtering and instant search",
      "Live sub-second data streaming over asynchronous WebSockets and Redis Pub/Sub",
      "Automated scheduled executive digest generation with PDF and CSV export pipelines",
      "Role-based permission controls (RBAC) with secure JWT and OAuth2 integration"
    ],
    highlights: [
      "Python & Pandas Analytical Pipeline: Ingests and aggregates high-frequency operational telemetry into memory-efficient data frames for sub-second analytics.",
      "Asynchronous FastAPI & WebSockets: Provides non-blocking bidirectional socket streams to dispatch live status alerts and telemetry to connected clients.",
      "Reactive TypeScript & Next.js Frontend: Utilizes virtualized table rendering and TanStack Query caching to eliminate UI latency and frame drops.",
      "Hybrid Relational & Cache Layer: Couples PostgreSQL for ACID transactional persistence with Redis for in-memory KPI caching and rate limiting."
    ],
    clientType: "Enterprise Operations, Supply Chain & Logistics",
    technologies: ["Python", "FastAPI", "Pandas", "TypeScript", "React.js", "PostgreSQL", "Redis", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
        title: "Executive Analytics Overview",
        caption: "Real-time metric telemetry, KPI cards, and operational throughput tracking."
      },
      {
        url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
        title: "Data Grid & Filtering",
        caption: "Fast multi-column sorting, row aggregation, and instant CSV exports."
      }
    ],
    liveUrl: null,
    githubUrl: null,
    isDemoProject: true
  },
  {
    id: "demo-project-three",
    title: "Workflow Automation Pipeline",
    category: "AI Integration",
    badgeText: "Demo Project",
    description: "An automation pipeline prototype demonstrating API data transformations, event triggers, and structured execution tracking.",
    overview: "A modern backend data transformation and AI pipeline designed to automate repetitive business processing, customer data enrichment, and multi-channel notification dispatch.",
    features: [
      "Multi-service API data pipeline with webhook event triggers",
      "Automated event notification triggers and alert formatting",
      "Structured log & execution tracker with retry mechanisms",
      "AI-assisted text extraction and auto-categorization"
    ],
    highlights: [
      "High-throughput asynchronous processing with Python & FastAPI",
      "Resilient fault-tolerant error boundaries and automated retry queues",
      "Structured telemetry and execution latency metrics"
    ],
    clientType: "FinTech & Data Services",
    technologies: ["Python", "FastAPI", "REST APIs", "OpenAI"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
        title: "Event Processing Engine",
        caption: "Distributed asynchronous queue handlers with retry mechanisms."
      }
    ],
    liveUrl: null,
    githubUrl: null,
    isDemoProject: true
  }
];
