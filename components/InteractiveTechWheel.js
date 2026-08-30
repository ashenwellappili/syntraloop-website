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
  { id: 'nextjs', name: 'Next.js 14', category: 'frontend', catName: 'Frontend & Interfaces', desc: 'SSR, Server Components & App Router for lightning-fast web applications.', logo: NextjsLogo, color: '#000000' },
  { id: 'react', name: 'React 18', category: 'frontend', catName: 'Frontend & Interfaces', desc: 'Concurrent rendering and component architecture for responsive UIs.', logo: ReactLogo, color: '#0284C7' },
  { id: 'tailwind', name: 'Tailwind CSS', category: 'frontend', catName: 'Frontend & Interfaces', desc: 'Utility-first modern styling for bespoke, responsive design systems.', logo: TailwindLogo, color: '#0284C7' },
  { id: 'threejs', name: 'Three.js', category: 'frontend', catName: 'Frontend & Interfaces', desc: 'Interactive 3D WebGL graphics and hardware-accelerated animations.', logo: ThreejsLogo, color: '#049EF4' },
  { id: 'typescript', name: 'TypeScript', category: 'frontend', catName: 'Frontend & Interfaces', desc: 'Type safety and enterprise robustness across all client and server code.', logo: TypescriptLogo, color: '#3178C6' },
  { id: 'htmlcss', name: 'HTML5 / CSS3', category: 'frontend', catName: 'Frontend & Interfaces', desc: 'Semantic HTML5 structure and modern CSS3 animations.', logo: HtmlCssLogo, color: '#E34F26' },

  // Backend & Systems
  { id: 'nodejs', name: 'Node.js', category: 'backend', catName: 'Backend & Systems', desc: 'High-throughput event-driven runtime for backend services & APIs.', logo: NodejsLogo, color: '#5FA04E' },
  { id: 'python', name: 'Python', category: 'backend', catName: 'Backend & Systems', desc: 'Robust data processing, automation scripts, and machine learning pipelines.', logo: PythonLogo, color: '#3776AB' },
  { id: 'fastapi', name: 'FastAPI', category: 'backend', catName: 'Backend & Systems', desc: 'Ultra-fast asynchronous Python REST API framework with OpenAPI documentation.', logo: FastApiLogo, color: '#009688' },
  { id: 'express', name: 'Express', category: 'backend', catName: 'Backend & Systems', desc: 'Fast, unopinionated, minimalist web framework for Node.js.', logo: ExpressLogo, color: '#18181B' },
  { id: 'postgres', name: 'PostgreSQL', category: 'backend', catName: 'Backend & Systems', desc: 'Enterprise-grade relational database with JSONB indexing and ACID compliance.', logo: PostgresLogo, color: '#336791' },
  { id: 'restapi', name: 'REST APIs', category: 'backend', catName: 'Backend & Systems', desc: 'Clean, secure, version-controlled endpoints connecting system components.', logo: RestApiLogo, color: '#0284C7' },

  // AI & Automation
  { id: 'openai', name: 'OpenAI API', category: 'ai', catName: 'AI & Automation', desc: 'GPT-4o integrations for customer intelligence, summarization, and assistants.', logo: OpenAiLogo, color: '#10A37F' },
  { id: 'claude', name: 'Claude API', category: 'ai', catName: 'AI & Automation', desc: 'Anthropic Claude for deep analytical reasoning and massive context parsing.', logo: ClaudeLogo, color: '#D97706' },
  { id: 'langchain', name: 'LangChain', category: 'ai', catName: 'AI & Automation', desc: 'Agentic workflows, prompt chaining, and memory orchestration.', logo: LangChainLogo, color: '#1C3C3C' },
  { id: 'vectordb', name: 'Vector DBs', category: 'ai', catName: 'AI & Automation', desc: 'Embeddings storage (Pinecone / Qdrant) for RAG semantic knowledge search.', logo: VectorDbLogo, color: '#7C3AED' },
  { id: 'prompts', name: 'Prompt Pipelines', category: 'ai', catName: 'AI & Automation', desc: 'Deterministic output structuring and schema validation for production AI.', logo: PromptPipelineLogo, color: '#9333EA' },
  { id: 'automations', name: 'Automations', category: 'ai', catName: 'AI & Automation', desc: 'Event-driven webhooks and background workers connecting business tools.', logo: AutomationLogo, color: '#8B5CF6' },

  // Cloud & Reliability
  { id: 'vercel', name: 'Vercel', category: 'cloud', catName: 'Cloud & Reliability', desc: 'Global edge network CDN, serverless functions, and zero-downtime deploys.', logo: VercelLogo, color: '#000000' },
  { id: 'aws', name: 'AWS Cloud', category: 'cloud', catName: 'Cloud & Reliability', desc: 'Scalable cloud infrastructure including S3, Lambda, ECS, and RDS.', logo: AwsLogo, color: '#FF9900' },
  { id: 'git', name: 'Git / GitHub', category: 'cloud', catName: 'Cloud & Reliability', desc: 'Version control, automated pull request validation, and team collaboration.', logo: GithubLogo, color: '#181717' },
  { id: 'docker', name: 'Docker', category: 'cloud', catName: 'Cloud & Reliability', desc: 'Containerized reproducible microservices for consistent deployments.', logo: DockerLogo, color: '#2496ED' },
  { id: 'sentry', name: 'Sentry', category: 'cloud', catName: 'Cloud & Reliability', desc: 'Real-time application error monitoring, alerts, and performance metrics.', logo: SentryLogo, color: '#362D59' },
  { id: 'cicd', name: 'CI/CD Pipelines', category: 'cloud', catName: 'Cloud & Reliability', desc: 'Automated test suites, building, and deployment pipelines.', logo: CicdLogo, color: '#0057D8' },
];

const categories = [
  { id: 'all', label: 'All Ecosystem', icon: Sparkles },
  { id: 'frontend', label: 'Frontend & Interfaces', icon: Globe },
  { id: 'backend', label: 'Backend & Systems', icon: Database },
  { id: 'ai', label: 'AI & Automation', icon: Cpu },
  { id: 'cloud', label: 'Cloud & Reliability', icon: Cloud },
];

export default function InteractiveTechWheel() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedTech, setSelectedTech] = useState(techData[0]);
  const [isPlaying, setIsPlaying] = useState(true);
  const [rotationAngle, setRotationAngle] = useState(0);
  const animFrameRef = useRef(null);

  // Filter items based on active category
  const filteredTech = activeCategory === 'all' 
    ? techData 
    : techData.filter(item => item.category === activeCategory);

  // Smooth continuous rotation loop
  useEffect(() => {
    let lastTime = performance.now();
    const rotate = (now) => {
      const delta = (now - lastTime) / 1000;
      lastTime = now;
      if (isPlaying) {
        setRotationAngle(prev => (prev + delta * 12) % 360);
      }
      animFrameRef.current = requestAnimationFrame(rotate);
    };

    animFrameRef.current = requestAnimationFrame(rotate);
    return () => cancelAnimationFrame(animFrameRef.current);
  }, [isPlaying]);

  const isFiltered = activeCategory !== 'all';
  const totalNodes = filteredTech.length;
  const radius = isFiltered ? 185 : 190;

  const SelectedLogo = selectedTech?.logo || ReactLogo;

  return (
    <div className="tech-wheel-container">
      {/* Category Filter Pills */}
      <div className="tech-wheel-tabs" role="tablist">
        {categories.map((cat) => {
          const IconComp = cat.icon;
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                const first = cat.id === 'all' ? techData[0] : techData.find(t => t.category === cat.id);
                if (first) setSelectedTech(first);
              }}
              className={`tech-wheel-tab ${isActive ? 'active' : ''}`}
              role="tab"
              aria-selected={isActive}
            >
              <IconComp size={15} />
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

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
                <span className="hub-sub">{isFiltered ? activeCategory.toUpperCase() : 'CORE STACK'}</span>
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
                const LogoComp = tech.logo;

                return (
                  <button
                    key={tech.id}
                    onClick={() => setSelectedTech(tech)}
                    onMouseEnter={() => setSelectedTech(tech)}
                    className={`tech-orbit-node ${isSelected ? 'selected' : ''} ${isFiltered ? 'is-filtered' : ''}`}
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
                      <LogoComp size={isFiltered ? 26 : 20} />
                    </div>
                    <span className="node-label-tag">{tech.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Wheel Control Controls (Play/Pause & Reset) */}
          <div className="tech-wheel-controls">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="wheel-control-btn"
              aria-label={isPlaying ? 'Pause wheel rotation' : 'Start wheel rotation'}
            >
              {isPlaying ? <Pause size={14} /> : <Play size={14} />}
              <span>{isPlaying ? 'Pause Rotation' : 'Spin Wheel'}</span>
            </button>

            <button
              onClick={() => setRotationAngle(0)}
              className="wheel-control-btn"
              title="Reset angle"
            >
              <RotateCw size={14} />
              <span>Reset</span>
            </button>
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
                  <SelectedLogo size={32} />
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
                  <span>Production Ready</span>
                </div>
                <div className="inspector-badge">
                  <Zap size={14} className="text-blue-500" />
                  <span>High Performance</span>
                </div>
              </div>

              <div className="inspector-matrix-block">
                <p className="matrix-block-heading">SyntraLoop Integration Standard</p>
                <div className="matrix-grid">
                  <div className="matrix-item">
                    <span className="matrix-label">Architecture</span>
                    <span className="matrix-val">Modern & Modular</span>
                  </div>
                  <div className="matrix-item">
                    <span className="matrix-label">Deployment</span>
                    <span className="matrix-val">Automated CI/CD</span>
                  </div>
                  <div className="matrix-item">
                    <span className="matrix-label">Scalability</span>
                    <span className="matrix-val">Enterprise Grade</span>
                  </div>
                  <div className="matrix-item">
                    <span className="matrix-label">Maintenance</span>
                    <span className="matrix-val">Continuous SLA</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Quick List of Category Items */}
          <div className="tech-quick-list">
            <p className="quick-list-title">Category Stack ({filteredTech.length})</p>
            <div className="quick-list-chips">
              {filteredTech.map((item) => {
                const isSelected = selectedTech?.id === item.id;
                const ItemLogo = item.logo;
                return (
                  <button
                    key={item.id}
                    onClick={() => setSelectedTech(item)}
                    className={`quick-chip ${isSelected ? 'active' : ''}`}
                  >
                    <ItemLogo size={14} />
                    <span>{item.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
