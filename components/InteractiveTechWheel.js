"use client";

import React, { useState, useEffect, useRef } from 'react';
import { 
  Globe, 
  Database, 
  Cpu, 
  Cloud, 
  Sparkles, 
  Play, 
  Pause, 
  RotateCw,
  CheckCircle2,
  Zap
} from 'lucide-react';
import {
  ReactLogo,
  NextjsLogo,
  TailwindLogo,
  ThreejsLogo,
  TypescriptLogo,
  HtmlCssLogo,
  NodejsLogo,
  PythonLogo,
  FastApiLogo,
  ExpressLogo,
  PostgresLogo,
  RestApiLogo,
  OpenAiLogo,
  ClaudeLogo,
  LangChainLogo,
  VectorDbLogo,
  PromptPipelineLogo,
  AutomationLogo,
  VercelLogo,
  AwsLogo,
  GithubLogo,
  DockerLogo,
  SentryLogo,
  CicdLogo
} from '@/components/TechLogos';

const techData = [
  // Frontend & Interfaces
  { id: 'nextjs', name: 'Next.js 14', category: 'frontend', catName: 'Frontend & Interfaces', desc: 'SSR, Server Components & App Router for lightning-fast web applications.', iconSrc: '/icons/tech/nextdotjs.svg', color: '#000000', architecture: 'Full-Stack Modular', deployment: 'Cloud / Edge Hosting', scalability: 'Edge-Ready', standard: 'SEO Optimized', badge1: 'Full-Stack', badge2: 'SEO Ready' },
  { id: 'react', name: 'React 18', category: 'frontend', catName: 'Frontend & Interfaces', desc: 'Concurrent rendering and component architecture for responsive UIs.', iconSrc: '/icons/tech/react.svg', color: '#0284C7', architecture: 'Component-Based', deployment: 'Static / Edge Hosting', scalability: 'High Performance', standard: 'Reusable UI', badge1: 'Component-Based', badge2: 'Fast UI' },
  { id: 'tailwind', name: 'Tailwind CSS', category: 'frontend', catName: 'Frontend & Interfaces', desc: 'Utility-first modern styling for bespoke, responsive design systems.', iconSrc: '/icons/tech/tailwindcss.svg', color: '#0284C7', architecture: 'Utility-First', deployment: 'Build-Time CSS', scalability: 'Design System Ready', standard: 'Responsive UI', badge1: 'Utility-First', badge2: 'Responsive' },
  { id: 'threejs', name: 'Three.js', category: 'frontend', catName: 'Frontend & Interfaces', desc: 'Interactive 3D WebGL graphics and hardware-accelerated animations.', iconSrc: '/icons/tech/threejs.svg', color: '#049EF4', architecture: '3D WebGL Graphics', deployment: 'Client Browser', scalability: 'GPU Hardware Accelerated', standard: '60 FPS Performance', badge1: '3D WebGL', badge2: 'Hardware Accelerated' },
  { id: 'typescript', name: 'TypeScript', category: 'frontend', catName: 'Frontend & Interfaces', desc: 'Type safety and enterprise robustness across all client and server code.', iconSrc: '/icons/tech/typescript.svg', color: '#3178C6', architecture: 'Typed Application Layer', deployment: 'Build Pipeline', scalability: 'Maintainable Codebase', standard: 'Type Safe', badge1: 'Type Safe', badge2: 'Maintainable' },
  { id: 'htmlcss', name: 'HTML5 / CSS3', category: 'frontend', catName: 'Frontend & Interfaces', desc: 'Semantic HTML5 structure and modern CSS3 animations.', iconSrc: '/icons/tech/html5.svg', color: '#E34F26', architecture: 'Semantic Layout', deployment: 'Static Web', scalability: 'Cross-Browser', standard: 'W3C Compliant', badge1: 'Semantic Markup', badge2: 'Web Standard' },

  // Backend & Systems
  { id: 'nodejs', name: 'Node.js', category: 'backend', catName: 'Backend & Systems', desc: 'High-throughput event-driven runtime for backend services & APIs.', iconSrc: '/icons/tech/nodedotjs.svg', color: '#5FA04E', architecture: 'Event-Driven', deployment: 'Cloud / Containers', scalability: 'High Concurrency', standard: 'Async Runtime', badge1: 'Event-Driven', badge2: 'High Concurrency' },
  { id: 'python', name: 'Python', category: 'backend', catName: 'Backend & Systems', desc: 'Robust data processing, automation scripts, and machine learning pipelines.', iconSrc: '/icons/tech/python.svg', color: '#3776AB', architecture: 'Service-Based', deployment: 'Containers / Cloud', scalability: 'Horizontal Scaling', standard: 'Secure APIs', badge1: 'Versatile', badge2: 'Scalable' },
  { id: 'fastapi', name: 'FastAPI', category: 'backend', catName: 'Backend & Systems', desc: 'Ultra-fast asynchronous Python REST API framework with OpenAPI documentation.', iconSrc: '/icons/tech/fastapi.svg', color: '#009688', architecture: 'API-First', deployment: 'Containers / Cloud', scalability: 'Async Ready', standard: 'OpenAPI Compatible', badge1: 'API-First', badge2: 'Async Ready' },
  { id: 'express', name: 'Express', category: 'backend', catName: 'Backend & Systems', desc: 'Fast, unopinionated, minimalist web framework for Node.js.', iconSrc: '/icons/tech/express.svg', color: '#18181B', architecture: 'Middleware Routing', deployment: 'Cloud Node Server', scalability: 'Microservice Ready', standard: 'RESTful Endpoints', badge1: 'Lightweight', badge2: 'API Friendly' },
  { id: 'postgres', name: 'PostgreSQL', category: 'backend', catName: 'Backend & Systems', desc: 'Enterprise-grade relational database with JSONB indexing and ACID compliance.', iconSrc: '/icons/tech/postgresql.svg', color: '#336791', architecture: 'Relational Data', deployment: 'Managed Database', scalability: 'Read Replicas', standard: 'ACID Compliant', badge1: 'ACID Compliant', badge2: 'Reliable Data' },
  { id: 'restapi', name: 'REST APIs', category: 'backend', catName: 'Backend & Systems', desc: 'Clean, secure, version-controlled endpoints connecting system components.', iconSrc: '/icons/tech/restapi.svg', color: '#0284C7', architecture: 'Resource-Based', deployment: 'Cloud API Service', scalability: 'Stateless Scaling', standard: 'HTTP Standards', badge1: 'Stateless', badge2: 'Integration Ready' },

  // AI & Automation
  { id: 'openai', name: 'OpenAI API', category: 'ai', catName: 'AI & Automation', desc: 'GPT-4o integrations for customer intelligence, summarization, and assistants.', iconSrc: '/icons/tech/openai.svg', color: '#10A37F', architecture: 'External AI Service', deployment: 'API Integration', scalability: 'Usage-Based', standard: 'Secure API Key Handling', badge1: 'AI-Powered', badge2: 'API Integration' },
  { id: 'claude', name: 'Claude API', category: 'ai', catName: 'AI & Automation', desc: 'Anthropic Claude for deep analytical reasoning and massive context parsing.', iconSrc: '/icons/tech/anthropic.svg', color: '#D97706', architecture: 'External AI Reasoning', deployment: 'API Integration', scalability: 'Usage-Based', standard: 'Secure API Key Handling', badge1: 'AI-Powered', badge2: 'API Integration' },
  { id: 'langchain', name: 'LangChain', category: 'ai', catName: 'AI & Automation', desc: 'Agentic workflows, prompt chaining, and memory orchestration.', iconSrc: '/icons/tech/langchain.svg', color: '#1C3C3C', architecture: 'Agentic AI Orchestration', deployment: 'AI Middleware', scalability: 'Pipeline Scaling', standard: 'Prompt Protocols', badge1: 'AI Workflows', badge2: 'Integration Ready' },
  { id: 'vectordb', name: 'Vector DBs', category: 'ai', catName: 'AI & Automation', desc: 'Embeddings storage (Pinecone / Qdrant) for RAG semantic knowledge search.', iconSrc: '/icons/tech/vectordb.svg', color: '#7C3AED', architecture: 'Semantic Vector Index', deployment: 'Managed Vector Store', scalability: 'High-Dimensional Search', standard: 'RAG Architecture', badge1: 'Vector Search', badge2: 'RAG Architecture' },
  { id: 'prompts', name: 'Prompt Pipelines', category: 'ai', catName: 'AI & Automation', desc: 'Deterministic output structuring and schema validation for production AI.', iconSrc: '/icons/tech/prompts.svg', color: '#9333EA', architecture: 'Deterministic AI Output', deployment: 'Serverless Worker', scalability: 'Schema Validation', standard: 'JSON Schema Validation', badge1: 'Deterministic Output', badge2: 'Schema Validation' },
  { id: 'automations', name: 'Automations', category: 'ai', catName: 'AI & Automation', desc: 'Event-driven webhooks and background workers connecting business tools.', iconSrc: '/icons/tech/automations.svg', color: '#8B5CF6', architecture: 'Event-Driven', deployment: 'Server / Serverless', scalability: 'Async Processing', standard: 'Signed Payloads', badge1: 'Event-Driven', badge2: 'Real-Time Ready' },

  // Cloud & Reliability
  { id: 'vercel', name: 'Vercel', category: 'cloud', catName: 'Cloud & Reliability', desc: 'Global edge network CDN, serverless functions, and zero-downtime deploys.', iconSrc: '/icons/tech/vercel.svg', color: '#000000', architecture: 'Serverless / Edge', deployment: 'Git-Based Deployment', scalability: 'Automatic Scaling', standard: 'Production Hosting', badge1: 'Edge Deployment', badge2: 'Auto Scaling' },
  { id: 'aws', name: 'AWS Cloud', category: 'cloud', catName: 'Cloud & Reliability', desc: 'Scalable cloud infrastructure including S3, Lambda, ECS, and RDS.', iconSrc: '/icons/tech/amazonaws.svg', color: '#FF9900', architecture: 'Cloud Infrastructure', deployment: 'Automated Deployment', scalability: 'Elastic Scaling', standard: 'Enterprise Cloud', badge1: 'Cloud Infrastructure', badge2: 'Elastic Scaling' },
  { id: 'git', name: 'Git / GitHub', category: 'cloud', catName: 'Cloud & Reliability', desc: 'Version control, automated pull request validation, and team collaboration.', iconSrc: '/icons/tech/git.svg', color: '#181717', architecture: 'Version-Controlled', deployment: 'CI/CD Workflow', scalability: 'Team Collaboration', standard: 'Review-Based Development', badge1: 'Version Control', badge2: 'Team Ready' },
  { id: 'docker', name: 'Docker', category: 'cloud', catName: 'Cloud & Reliability', desc: 'Containerized reproducible microservices for consistent deployments.', iconSrc: '/icons/tech/docker.svg', color: '#2496ED', architecture: 'Containerized', deployment: 'CI/CD Pipelines', scalability: 'Portable Services', standard: 'Reproducible Builds', badge1: 'Containerized', badge2: 'Portable' },
  { id: 'sentry', name: 'Sentry', category: 'cloud', catName: 'Cloud & Reliability', desc: 'Real-time application error monitoring, alerts, and performance metrics.', iconSrc: '/icons/tech/sentry.svg', color: '#362D59', architecture: 'Monitoring Layer', deployment: 'Production Monitoring', scalability: 'Error Tracking', standard: 'Observability', badge1: 'Error Monitoring', badge2: 'Observability' },
  { id: 'cicd', name: 'CI/CD Pipelines', category: 'cloud', catName: 'Cloud & Reliability', desc: 'Automated test suites, building, and deployment pipelines.', iconSrc: '/icons/tech/cicd.svg', color: '#0057D8', architecture: 'Automated Build Suite', deployment: 'Git Triggers', scalability: 'Parallel Workflows', standard: 'Zero-Downtime Releases', badge1: 'Automated Builds', badge2: 'Continuous Delivery' },
];

const categories = [
  { id: 'all', label: 'All Ecosystem', icon: Sparkles },
  { id: 'frontend', label: 'Frontend & Interfaces', icon: Globe },
  { id: 'backend', label: 'Backend & Systems', icon: Database },
  { id: 'ai', label: 'AI & Automation', icon: Cpu },
  { id: 'cloud', label: 'Cloud & Reliability', icon: Cloud },
];

export default function InteractiveTechWheel() {
  const [selectedTech, setSelectedTech] = useState(techData[0]);
  const [rotationAngle, setRotationAngle] = useState(0);
  const animFrameRef = useRef(null);

  const filteredTech = techData;

  // Smooth continuous rotation loop
  useEffect(() => {
    let lastTime = performance.now();
    const rotate = (now) => {
      const delta = (now - lastTime) / 1000;
      lastTime = now;
      setRotationAngle(prev => (prev + delta * 12) % 360);
      animFrameRef.current = requestAnimationFrame(rotate);
    };

    animFrameRef.current = requestAnimationFrame(rotate);
    return () => cancelAnimationFrame(animFrameRef.current);
  }, []);

  const totalNodes = filteredTech.length;
  const radius = 190;

  return (
    <div className="tech-wheel-container">
      {/* Main Interactive Stage Grid */}
      <div className="tech-wheel-stage-grid">
        {/* Left / Center: Interactive Rotating Orbital Wheel */}
        <div className="tech-wheel-canvas-area">
          <div className="tech-wheel-orbit-wrapper">
            {/* Background Ambient Glow */}
            <div className="tech-wheel-ambient-glow" aria-hidden="true" />

            {/* Concentric Orbital Rings */}
            <div className="orbit-ring orbit-ring-outer" />
            <div className="orbit-ring orbit-ring-middle" />
            <div className="orbit-ring orbit-ring-inner" />

            {/* Center SyntraLoop Core Hub */}
            <div className="tech-wheel-center-hub">
              <div className="hub-pulse-glow" />
              <div className="hub-inner-core">
                <span className="hub-label">SYNTRALOOP</span>
                <span className="hub-sub">CORE STACK</span>
                <div className="hub-indicator">
                  <span className="hub-dot" />
                  <span>{filteredTech.length} Technologies</span>
                </div>
              </div>
            </div>

            {/* Orbiting Tech Nodes */}
            <div className="tech-orbit-plane">
              {filteredTech.map((tech, idx) => {
                const itemAngle = (idx * (360 / totalNodes) + rotationAngle) * (Math.PI / 180);
                const x = Math.cos(itemAngle) * radius;
                const y = Math.sin(itemAngle) * radius;
                const isSelected = selectedTech?.id === tech.id;

                return (
                  <button
                    key={tech.id}
                    onClick={() => setSelectedTech(tech)}
                    onMouseEnter={() => setSelectedTech(tech)}
                    className={`tech-orbit-node ${isSelected ? 'selected' : ''}`}
                    style={{
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                    }}
                    title={tech.name}
                    aria-label={`Inspect ${tech.name}`}
                  >
                    <div 
                      className="node-icon-bubble"
                      style={{ 
                        borderColor: isSelected ? tech.color : undefined,
                        boxShadow: isSelected ? `0 0 20px ${tech.color}66` : undefined
                      }}
                    >
                      <img 
                        src={tech.iconSrc} 
                        alt={`${tech.name} logo`}
                        width={20} 
                        height={20}
                        className="tech-icon-img"
                        style={{ objectFit: 'contain' }}
                      />
                    </div>
                    <span className="node-label-tag">{tech.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right: Active Tech Card Details & Live Capabilities Matrix */}
        <div className="tech-wheel-inspector">
          {selectedTech && (
            <div className="tech-inspector-card animate-fade-in-up">
              <div className="inspector-header">
                <div 
                  className="inspector-icon-box"
                  style={{ 
                    backgroundColor: `${selectedTech.color}12`,
                    borderColor: `${selectedTech.color}35`,
                  }}
                >
                  <img 
                    src={selectedTech.iconSrc} 
                    alt={`${selectedTech.name} logo`}
                    width={32} 
                    height={32}
                    className="inspector-icon-img"
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                <div>
                  <span className="inspector-kicker">{selectedTech.catName}</span>
                  <h3 className="inspector-title">{selectedTech.name}</h3>
                </div>
              </div>

              <p className="inspector-desc">{selectedTech.desc}</p>

              <div className="inspector-badges-strip">
                <div className="inspector-badge">
                  <CheckCircle2 size={14} className="text-emerald-500" />
                  <span>{selectedTech.badge1 || 'Production Ready'}</span>
                </div>
                <div className="inspector-badge">
                  <Zap size={14} className="text-blue-500" />
                  <span>{selectedTech.badge2 || 'High Performance'}</span>
                </div>
              </div>

              <div className="inspector-matrix-block">
                <p className="matrix-block-heading">SyntraLoop Integration Standard</p>
                <div className="matrix-grid">
                  <div className="matrix-item">
                    <span className="matrix-label">Architecture</span>
                    <span className="matrix-val">{selectedTech.architecture || 'Modern & Modular'}</span>
                  </div>
                  <div className="matrix-item">
                    <span className="matrix-label">Deployment</span>
                    <span className="matrix-val">{selectedTech.deployment || 'Automated CI/CD'}</span>
                  </div>
                  <div className="matrix-item">
                    <span className="matrix-label">Scalability</span>
                    <span className="matrix-val">{selectedTech.scalability || 'High Performance'}</span>
                  </div>
                  <div className="matrix-item">
                    <span className="matrix-label">Standard</span>
                    <span className="matrix-val">{selectedTech.standard || 'Production Ready'}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
