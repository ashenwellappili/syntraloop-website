"use client";

import React, { useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import { 
  Target, 
  ShieldCheck, 
  MessageSquare, 
  TrendingUp, 
  ArrowRight 
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
        canvas.width = canvas.parentElement.clientWidth || 1200;
        canvas.height = canvas.parentElement.clientHeight || 400;
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Organic neural network nodes setup
    const isMobile = window.innerWidth < 640;
    const nodeCount = isMobile ? 14 : 24;
    const maxDist = isMobile ? 120 : 160;

    const nodes = [];
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * (canvas.width - 40) + 20,
        y: Math.random() * (canvas.height - 40) + 20,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 2 + 2.5,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Smooth organic movement within strict boundaries
      if (!prefersReducedMotion) {
        for (let i = 0; i < nodes.length; i++) {
          const n = nodes[i];
          n.x += n.vx;
          n.y += n.vy;

          if (n.x <= 15 || n.x >= canvas.width - 15) n.vx *= -1;
          if (n.y <= 15 || n.y >= canvas.height - 15) n.vy *= -1;
        }
      }

      // Draw dynamic connecting lines following moving nodes
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const n1 = nodes[i];
          const n2 = nodes[j];
          const dx = n1.x - n2.x;
          const dy = n1.y - n2.y;
          const dist = Math.hypot(dx, dy);

          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.25;
            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.strokeStyle = `rgba(0, 87, 216, ${alpha})`;
            ctx.lineWidth = 1.2;
            ctx.stroke();
          }
        }
      }

      // Draw smooth moving dots / nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius * 2.2, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 87, 216, 0.12)';
        ctx.fill();

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#0057D8';
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
  const differentCards = [
    {
      icon: Target,
      title: "Practical Solutions",
      description: "We focus on solving real business challenges with useful and effective technology."
    },
    {
      icon: ShieldCheck,
      title: "Reliable Engineering",
      description: "We build clean, scalable, and maintainable digital products you can depend on."
    },
    {
      icon: MessageSquare,
      title: "Clear Communication",
      description: "We keep every stage of the project simple, transparent, and easy to understand."
    },
    {
      icon: TrendingUp,
      title: "Built for Growth",
      description: "We create flexible solutions that can evolve as your business grows."
    }
  ];

  return (
    <div className="page-home">
      {/* 1. HERO SECTION WITH 3D INTERACTIVE LOGO & TECHNICAL AMBIENCE */}
      <section className="hero-section relative overflow-hidden">
        {/* Slow-moving Technical Grid Background */}
        <div className="hero-tech-grid-bg" aria-hidden="true" />

        {/* Neural Network Animated Data-Flow Layer */}
        <div className="hero-nodes-layer" aria-hidden="true">
          <NeuralNetworkCanvas />
        </div>

        <div className="container hero-container relative z-10">
          <div className="hero-layout-grid">
            {/* Left Hero Content */}
            <div className="hero-content">
              <div className="hero-badge animate-fade-in-up">
                <span className="hero-badge-dot" />
                <span>Modern Digital Systems & Engineering</span>
              </div>

              <h1 className="hero-heading animate-fade-in-up delay-1">
                From Ideas to <br className="hidden-mobile" />
                <span className="text-accent-blue">Intelligent Solutions.</span>
              </h1>

              <p className="hero-subtext animate-fade-in-up delay-2">
                We build modern websites, business applications, AI integrations, and data-driven digital solutions for businesses ready to move forward.
              </p>

              <div className="hero-cta-group animate-fade-in-up delay-3">
                <Link href="/contact" className="btn btn-primary btn-lg">
                  Contact Us
                  <ArrowRight size={18} />
                </Link>

                <Link href="/work" className="btn btn-secondary btn-lg">
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

      {/* 3. WHAT MAKES SYNTRALOOP DIFFERENT (NO BUTTONS / NO LINKS) */}
      <section className="different-section section bg-secondary-section">
        <div className="container">
          <ScrollReveal delay={0}>
            <div className="different-header text-center">
              <h2 className="different-title">What Makes SyntraLoop Different</h2>
              <p className="different-description">
                We combine practical thinking, reliable engineering, and clear communication to create digital solutions that help businesses work better and grow with confidence.
              </p>
            </div>
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
