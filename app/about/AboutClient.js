"use client";

import React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import SectionHeader from '@/components/SectionHeader';
import ScrollReveal from '@/components/ScrollReveal';

const InteractiveTechWheel = dynamic(() => import('@/components/InteractiveTechWheel'), {
  ssr: false,
});
import { 
  Target, 
  Compass, 
  Shield, 
  Code2, 
  Globe, 
  CheckCircle2, 
  ArrowRight,
  Cpu,
  Layers,
  Zap,
  Lock,
  Workflow,
  Sparkles
} from 'lucide-react';

export default function AboutClient() {
  const principles = [
    {
      icon: Shield,
      title: "Security & Privacy First",
      desc: "We prioritize secure input validation, protected environment variables, and responsible handling of sensitive data in every build.",
      tag: "Zero-Trust Focus"
    },
    {
      icon: Code2,
      title: "Maintainable Code",
      desc: "We write clean, modular React, Next.js, and Python code that is easy to maintain, scale, and extend.",
      tag: "Clean Architecture"
    },
    {
      icon: Globe,
      title: "International Standards",
      desc: "We follow practical standards for performance, accessibility, responsive design, and clear documentation.",
      tag: "Global Compliance"
    },
    {
      icon: Zap,
      title: "Performance Driven",
      desc: "Every asset, query, and animation is tuned for rapid interaction, smooth framerates, and minimal latency.",
      tag: "Sub-Second UX"
    }
  ];

  const techCategories = [
    {
      category: "Frontend & Interfaces",
      tools: ["React 18", "Next.js 14", "Tailwind CSS", "Three.js", "TypeScript", "HTML5/CSS3"]
    },
    {
      category: "Backend & Systems",
      tools: ["Node.js", "Python", "FastAPI", "Express", "PostgreSQL", "REST APIs"]
    },
    {
      category: "AI & Automation",
      tools: ["OpenAI API", "Claude API", "LangChain", "Vector DBs", "Prompt Pipelines", "Automations"]
    },
    {
      category: "Cloud & Reliability",
      tools: ["Vercel", "AWS Cloud", "Git / GitHub", "Docker", "Sentry", "CI/CD Pipelines"]
    }
  ];

  return (
    <div className="about-page-wrapper">
      {/* 1. CURVED DEEP-NAVY HERO SECTION */}
      <PageHero
        badge="Company & Purpose"
        title="Engineering Modern"
        highlightText="Digital Systems"
        subtitle="SyntraLoop transforms business ideas into modern websites, custom business systems, AI integrations, and reliable digital solutions."
        ctaText="Work With Us"
        ctaHref="/contact"
        secondaryCtaText="Explore Capabilities"
        secondaryCtaHref="/services"
      />

      {/* 2. MISSION & DIRECTION (WHITE CARDS GRID) */}
      <section className="section bg-primary pt-6">
        <div className="container">
          <ScrollReveal delay={0}>
            <SectionHeader
              badge="Our Foundation"
              title="Built for Sustainable Value"
              subtitle="We bridge business requirements and modern software engineering with clarity, craft, and dependability."
              centered={true}
            />
          </ScrollReveal>

          <div className="path-cards-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
            <ScrollReveal delay={100}>
              <div className="path-card path-card-lg path-card-centered">
                <div>
                  <div className="path-icon-box">
                    <Target size={26} />
                  </div>
                  <span className="path-card-kicker">Core Identity</span>
                  <h2 className="path-card-title text-2xl font-bold mb-2">Positioning & Mission</h2>
                  <p className="path-card-desc mb-6">
                    We help startups, small and medium-sized businesses, founders, and international clients turn practical business challenges into reliable, scalable software solutions.
                  </p>
                </div>

                <div className="w-full mt-auto">
                  <div className="path-meta-strip">
                    <div className="meta-item">
                      <span className="meta-label">Focus</span>
                      <span className="meta-value">Engineering Craft</span>
                    </div>
                    <div className="meta-item">
                      <span className="meta-label">Audience</span>
                      <span className="meta-value">Global SMBs & Startups</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={180}>
              <div className="path-card path-card-lg path-card-centered">
                <div>
                  <div className="path-icon-box">
                    <Compass size={26} />
                  </div>
                  <span className="path-card-kicker">Vision</span>
                  <h2 className="path-card-title text-2xl font-bold mb-2">Long-Term Direction</h2>
                  <p className="path-card-desc mb-6">
                    Our long-term direction is centered on engineering craft, clean software architecture, transparent communication, and lasting value for every client we collaborate with.
                  </p>
                </div>

                <div className="w-full mt-auto">
                  <div className="path-meta-strip">
                    <div className="meta-item">
                      <span className="meta-label">Approach</span>
                      <span className="meta-value">Transparent Sprints</span>
                    </div>
                    <div className="meta-item">
                      <span className="meta-label">Result</span>
                      <span className="meta-value">Production Quality</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 3. DARK FEATURE & PRINCIPLES SHOWCASE SECTION */}
      <section className="dark-feature-section">
        <div className="dark-feature-glow" aria-hidden="true" />
        <div className="container relative z-10 text-center">
          <div className="curved-hero-badge">
            <span className="badge-pulse-dot" />
            <span>Guiding Principles</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
            Standards Behind Every Codebase We Ship
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm md:text-base mb-6">
            The core engineering ethos that drives our architectural decisions, security practices, and system designs.
          </p>

          <div className="dark-glass-grid text-left">
            {principles.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <ScrollReveal key={idx} delay={80 * idx}>
                  <div className="dark-glass-card">
                    <div className="dark-glass-left">
                      <div className="dark-glass-icon">
                        <IconComp size={18} />
                      </div>
                      <div>
                        <h3 className="dark-glass-title">{item.title}</h3>
                        <p className="dark-glass-desc">{item.desc}</p>
                      </div>
                    </div>
                    <span className="dark-glass-tag">{item.tag}</span>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          <div className="mt-8">
            <Link href="/contact" className="btn btn-cyan-pill">
              <span>Start a Project With Us</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. MODERN TECH STACK MATRIX */}
      <section className="section bg-primary">
        <div className="container">
          <ScrollReveal delay={0}>
            <SectionHeader
              badge="Modern Tooling"
              title="Technology Stack & Tools"
              subtitle="We build with modern, battle-tested technologies that ensure performance, maintainability, and rapid development."
              centered={true}
            />
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <InteractiveTechWheel />
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
