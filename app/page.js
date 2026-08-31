"use client";

import React, { useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import SectionHeader from '@/components/SectionHeader';
import { 
  Target, 
  ShieldCheck, 
  MessageSquare, 
  TrendingUp, 
  ArrowRight,
  Code2,
  Database,
  Cpu,
  Workflow,
  Sparkles,
  ExternalLink,
  ChevronRight,
  Clock,
  Key,
  Sliders,
  LifeBuoy
} from 'lucide-react';

const Interactive3DLogo = dynamic(() => import('@/components/Interactive3DLogo'), {
  ssr: false,
  loading: () => (
    <div className="interactive-3d-logo-canvas flex items-center justify-center">
      <div className="hero-3d-glow" />
    </div>
  )
});

function NeuralNetworkCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;

    const resizeCanvas = () => {
      if (canvas.parentElement) {
        canvas.width = canvas.parentElement.clientWidth || window.innerWidth || 1400;
        canvas.height = canvas.parentElement.clientHeight || 600;
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Organic neural network nodes setup (fluid, full-width)
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
    const nodeCount = isMobile ? 18 : 32;
    const maxDist = isMobile ? 130 : 180;

    const nodes = [];
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * (canvas.width || 1200),
        y: Math.random() * (canvas.height || 500),
        vx: (Math.random() - 0.5) * 0.38,
        vy: (Math.random() - 0.5) * 0.38,
        radius: Math.random() * 1.8 + 2.0,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Seamless fluid drift without hard box boundaries
      if (!prefersReducedMotion) {
        for (let i = 0; i < nodes.length; i++) {
          const n = nodes[i];
          n.x += n.vx;
          n.y += n.vy;

          if (n.x < -30) n.x = canvas.width + 30;
          else if (n.x > canvas.width + 30) n.x = -30;
          if (n.y < -30) n.y = canvas.height + 30;
          else if (n.y > canvas.height + 30) n.y = -30;
        }
      }

      // Draw dynamic glowing cyan connecting lines
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const n1 = nodes[i];
          const n2 = nodes[j];
          const dx = n1.x - n2.x;
          const dy = n1.y - n2.y;
          const dist = Math.hypot(dx, dy);

          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.28;
            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
            ctx.lineWidth = 1.1;
            ctx.stroke();
          }
        }
      }

      // Draw glowing cyan particles
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius * 2.2, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(56, 189, 248, 0.22)';
        ctx.fill();

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#38BDF8';
        ctx.fill();
      }

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ width: '100%', height: '100%', display: 'block' }} />;
}

export default function Home() {
  const coreSolutions = [
    {
      icon: Code2,
      badge: "Frontend & Web",
      title: "Web Applications & Scalable Sites",
      desc: "Fast, responsive web applications built with Next.js, React, and modern CSS architecture.",
      link: "/services"
    },
    {
      icon: Database,
      badge: "Backend & Systems",
      title: "Business Systems & Custom APIs",
      desc: "Custom database workflows, automated backends, and secure integrations built to streamline operations.",
      link: "/services"
    },
    {
      icon: Cpu,
      badge: "Intelligence",
      title: "AI Integration & Automation",
      desc: "Practical LLM pipelines, OpenAI/Claude assistants, and smart background automation workflows.",
      link: "/services"
    },
    {
      icon: Workflow,
      badge: "Architecture",
      title: "Cloud Infrastructure & CI/CD",
      desc: "Secure deployments, edge CDN performance, monitoring, and automated reliability standard.",
      link: "/services"
    }
  ];

  const differentCards = [
    {
      icon: Target,
      title: "Practical Solutions",
      description: "We focus on solving real business challenges with useful, high-impact technology."
    },
    {
      icon: ShieldCheck,
      title: "Reliable Engineering",
      description: "We build clean, scalable, and maintainable digital products engineered to perform."
    },
    {
      icon: MessageSquare,
      title: "Transparent Communication",
      description: "We keep every stage of the project simple, proactive, and clear with regular sprint updates."
    },
    {
      icon: TrendingUp,
      title: "Built for Growth",
      description: "Flexible modular architectures designed to evolve effortlessly as your business expands."
    },
    {
      icon: Clock,
      title: "Predictable Milestones",
      description: "Structured sprint planning, clear delivery estimates, and zero unexpected scope surprises."
    },
    {
      icon: Key,
      title: "100% Code Ownership",
      description: "Full repository ownership, clean documentation, and zero vendor lock-in upon project handover."
    },
    {
      icon: Sliders,
      title: "Tailored Architecture",
      description: "We shape every system specifically around your unique workflow, operations, and team needs."
    },
    {
      icon: LifeBuoy,
      title: "Support & Availability",
      description: "Dedicated post-launch maintenance, monitoring, security updates, and ongoing improvements."
    }
  ];

  return (
    <div className="page-home">
      {/* 1. HERO SECTION WITH 3D INTERACTIVE LOGO & SIGNATURE DEEP NAVY THEME */}
      <section className="curved-page-hero relative overflow-hidden" style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        {/* Deep Atmosphere Glow */}
        <div className="curved-hero-glow" aria-hidden="true" />

        {/* Blueprint Grid Pattern */}
        <div className="curved-hero-grid-pattern" aria-hidden="true" />

        {/* Neural Network Animated Data-Flow Layer */}
        <div className="hero-nodes-layer" aria-hidden="true">
          <NeuralNetworkCanvas />
        </div>

        <div className="container relative z-10" style={{ paddingBottom: '2.5rem' }}>
          <div className="hero-layout-grid">
            {/* Left Hero Content */}
            <div className="hero-content text-center lg:text-left">
              <div className="curved-hero-badge animate-fade-in-up">
                <span className="badge-pulse-dot" />
                <span>Modern Digital Systems & Engineering</span>
              </div>

              <h1 className="curved-hero-title animate-fade-in-up delay-1">
                From Ideas to <br className="hidden-mobile" />
                <span className="text-cyan-gradient">Intelligent Solutions.</span>
              </h1>

              <p className="curved-hero-subtitle animate-fade-in-up delay-2" style={{ marginLeft: 0, marginRight: 0 }}>
                We build modern websites, business applications, AI integrations, and data-driven digital solutions for businesses ready to move forward.
              </p>

              <div className="curved-hero-cta-group animate-fade-in-up delay-3" style={{ justifyContent: 'flex-start' }}>
                <Link href="/contact" className="btn-cyan-pill">
                  Contact Us
                  <ArrowRight size={18} />
                </Link>

                <Link href="/work" className="btn-dark-glass">
                  View Our Work
                </Link>
              </div>
            </div>

            {/* Right Hero 3D Interactive SyntraLoop Emblem */}
            <div className="hero-3d-wrapper animate-fade-in-up delay-2">
              <div className="hero-3d-glow" aria-hidden="true" />
              <Interactive3DLogo />
            </div>
          </div>
        </div>

        {/* Signature Curved Bottom Wave */}
        <div className="curved-hero-wave" aria-hidden="true">
          <svg
            viewBox="0 0 1440 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="wave-svg"
          >
            <path
              d="M0,10 C320,65 600,70 720,70 C840,70 1120,65 1440,10 L1440,70 L0,70 Z"
              className="hero-wave-fill"
            />
          </svg>
        </div>
      </section>

      {/* 2. VALUE STRIP SECTION (Horizontal Moving Marquee) */}
      <section className="value-strip-section" aria-label="Key Capabilities Ticker">
        <div className="value-strip-marquee">
          <div className="value-strip-track">
            {[1, 2, 3, 4].map((groupIndex) => (
              <div
                key={groupIndex}
                className="value-strip-group"
                aria-hidden={groupIndex > 1 ? "true" : undefined}
              >
                <div className="value-item">
                  <span className="value-dot" />
                  <span>Web Development</span>
                </div>
                <div className="value-item">
                  <span className="value-dot" />
                  <span>Business Systems</span>
                </div>
                <div className="value-item">
                  <span className="value-dot" />
                  <span>AI Integrations</span>
                </div>
                <div className="value-item">
                  <span className="value-dot" />
                  <span>Data-Driven Solutions</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CORE SOLUTIONS OVERVIEW */}
      <section className="section bg-primary">
        <div className="container">
          <ScrollReveal delay={0}>
            <SectionHeader
              badge="Our Solutions"
              title="End-to-End Digital Capabilities"
              subtitle="From modern user interfaces to intelligent backend automation, we deliver complete solutions tailored to your operational goals."
              centered={true}
            />
          </ScrollReveal>

          <div className="services-solutions-grid">
            {coreSolutions.map((sol, idx) => {
              const IconComp = sol.icon;
              return (
                <ScrollReveal key={idx} delay={100 + idx * 80}>
                  <div className="path-card path-card-lg path-card-centered">
                    <div>
                      <div className="path-icon-box">
                        <IconComp size={24} />
                      </div>
                      <span className="path-card-kicker">{sol.badge}</span>
                      <h3 className="path-card-title text-xl mb-2">{sol.title}</h3>
                      <p className="path-card-desc mb-6">{sol.desc}</p>
                    </div>

                    <Link href={sol.link} className="contact-channel-action mt-auto">
                      <span>Explore Capability</span>
                      <ChevronRight size={16} />
                    </Link>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. WHAT MAKES SYNTRALOOP DIFFERENT */}
      <section className="different-section section bg-secondary-section border-t border-slate-200">
        <div className="container">
          <ScrollReveal delay={0}>
            <SectionHeader
              badge="Core Differentiators"
              title="What Makes SyntraLoop Different"
              subtitle="We combine practical thinking, reliable engineering, and clear communication to create digital solutions that help businesses work better and grow with confidence."
              centered={true}
            />
          </ScrollReveal>

          <div className="different-cards-grid">
            {differentCards.map((card, idx) => {
              const IconComp = card.icon;
              return (
                <ScrollReveal key={idx} delay={100 + idx * 80}>
                  <div className="studio-card different-card">
                    <div className="different-icon-box">
                      <IconComp size={24} />
                    </div>
                    <h3 className="different-card-title">{card.title}</h3>
                    <p className="different-card-desc">{card.description}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
