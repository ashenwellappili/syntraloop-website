"use client";

import React from 'react';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import SectionHeader from '@/components/SectionHeader';
import ScrollReveal from '@/components/ScrollReveal';
import FAQAccordion from '@/components/FAQAccordion';
import StillHaveQuestions from '@/components/StillHaveQuestions';
import { servicesData } from '@/data/servicesData';
import { 
  Globe, 
  LayoutDashboard, 
  Cpu, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Target,
  Sliders,
  MessageSquare,
  LifeBuoy,
  Layers,
  Database,
  Cloud,
  Lock,
  Workflow,
  Sparkles
} from 'lucide-react';

export default function ServicesPage() {
  const serviceMeta = {
    'web-development': { category: 'Web & Mobile' },
    'business-systems': { category: 'Custom Software' },
    'ai-integration': { category: 'Intelligent Systems' },
    'website-maintenance': { category: 'Continuous Care' },
  };

  const techReadinessItems = [
    {
      icon: Layers,
      title: "Frontend & Web Architecture",
      desc: "Fast, responsive web applications built on modern component frameworks.",
      tag: "Next.js / React"
    },
    {
      icon: Workflow,
      title: "AI Workflows & LLM APIs",
      desc: "Intelligent assistants, automated extraction, and prompt pipelines.",
      tag: "OpenAI / Claude"
    },
    {
      icon: Database,
      title: "Secure Database Pipelines",
      desc: "Optimized schemas, relational storage, and fast query indexing.",
      tag: "PostgreSQL / Prisma"
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure & CI/CD",
      desc: "Automated test suites, rapid deployments, and scalable cloud hosting.",
      tag: "AWS / Vercel"
    },
    {
      icon: Lock,
      title: "Security & Role-Based Auth",
      desc: "Encrypted credentials, multi-tenant permissions, and session protection.",
      tag: "OAuth / JWT"
    },
    {
      icon: ShieldCheck,
      title: "Uptime & Health Monitoring",
      desc: "Continuous error tracking, automated backups, and 99.9% uptime targets.",
      tag: "24/7 SLA Target"
    }
  ];

  const servicesFaqItems = [
    {
      question: "How do we choose the right technology for our project?",
      answer: "We assess your goals, expected traffic, security requirements, and budget to recommend the most reliable and maintainable tech stack."
    },
    {
      question: "Can you take over and modernize an existing codebase?",
      answer: "Yes. We perform a technical audit of your existing system, document the architecture, and systematically upgrade it without disrupting your current operations."
    },
    {
      question: "How does the AI integration process work?",
      answer: "We identify areas in your workflow where AI can save time—such as customer inquiry handling, data extraction, or content classification—and connect secure AI APIs."
    },
    {
      question: "Do you offer ongoing retainer agreements?",
      answer: "Yes, we provide flexible monthly maintenance packages covering regular security updates, uptime monitoring, bug fixes, and continuous improvements."
    }
  ];

  return (
    <div className="page-services-root">
      {/* 1. CURVED DEEP-NAVY HERO SECTION */}
      <PageHero
        badge="Engineering & Capabilities"
        title="From Ideas to"
        highlightText="Intelligent Solutions."
        subtitle="We design, engineer, integrate, and scale robust software solutions tailored to your business needs."
        ctaText="Request Technical Assessment"
        ctaHref="/contact"
        secondaryCtaText="Explore Case Studies"
        secondaryCtaHref="/work"
      />

      {/* 2. CHOOSE YOUR SOLUTION (WHITE CARDS GRID) */}
      <section className="section bg-primary pt-6">
        <div className="container">
          <ScrollReveal delay={0}>
            <SectionHeader
              badge="Our Core Capabilities"
              title="Choose Your Solution"
              subtitle="Proven digital engineering tracks built for businesses seeking speed, reliability, and growth."
              centered={true}
            />
          </ScrollReveal>

          <div className="services-solutions-grid">
            {servicesData.map((svc, idx) => {
              const meta = serviceMeta[svc.id] || { category: 'Solution' };
              return (
                <ScrollReveal key={svc.id} delay={100 + idx * 80}>
                  <div className="path-card path-card-lg path-card-centered">
                    <div>
                      <div className="path-icon-box">
                        {svc.id === 'web-development' && <Globe size={26} />}
                        {svc.id === 'business-systems' && <LayoutDashboard size={26} />}
                        {svc.id === 'ai-integration' && <Cpu size={26} />}
                        {svc.id === 'website-maintenance' && <ShieldCheck size={26} />}
                      </div>

                      <span className="path-card-kicker">{meta.category}</span>
                      <h2 className="path-card-title text-2xl font-bold mb-2">{svc.title}</h2>
                      <p className="path-card-desc mb-6">{svc.shortDescription}</p>

                      <div className="mb-6 bg-slate-100/70 dark:bg-slate-800/60 p-4 rounded-xl border border-slate-200/80 dark:border-slate-700/60 text-left transition-colors">
                        <p className="text-xs font-bold text-blue-600 dark:text-cyan-400 uppercase tracking-wider mb-2.5 text-center">Key Capabilities</p>
                        <ul className="space-y-2">
                          {svc.benefits.map((b, i) => (
                            <li key={i} className="flex items-start gap-2.5 text-xs md:text-sm text-slate-700 dark:text-slate-300">
                              <CheckCircle2 size={16} className="text-blue-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="w-full mt-auto">
                      <Link 
                        href="/contact" 
                        className="contact-channel-action"
                      >
                        <span>{svc.ctaText}</span>
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. DARK FEATURE & ARCHITECTURE SHOWCASE SECTION */}
      <section className="dark-feature-section">
        <div className="dark-feature-glow" aria-hidden="true" />
        <div className="container relative z-10 text-center">
          <div className="curved-hero-badge">
            <span className="badge-pulse-dot" />
            <span>Technical Architecture</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
            Is Your Infrastructure Ready for Modern AI & Cloud?
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm md:text-base mb-6">
            Review the 6 core pillars SyntraLoop builds into every custom software solution to ensure high speed, security, and scalability.
          </p>

          <div className="dark-glass-grid text-left">
            {techReadinessItems.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <ScrollReveal key={idx} delay={80 * idx} className="h-full">
                  <div className="dark-glass-card">
                    <div className="dark-glass-left">
                      <div className="dark-glass-icon">
                        <IconComp size={20} />
                      </div>
                      <div className="dark-glass-text">
                        <h3 className="dark-glass-title">{item.title}</h3>
                        <p className="dark-glass-desc">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. FAQ & STILL HAVE QUESTIONS SECTION */}
      <section className="section bg-secondary border-t border-slate-200">
        <div className="container">
          <ScrollReveal delay={0}>
            <SectionHeader
              badge="Common Inquiries"
              title="Frequently Asked Questions"
              subtitle="Everything you need to know about our engineering process, pricing models, and ongoing support."
              centered={true}
            />
          </ScrollReveal>

          <div className="max-w-3xl mx-auto mt-8">
            <FAQAccordion items={servicesFaqItems} />
          </div>

          {/* Reference "Still Have Questions?" Box */}
          <ScrollReveal delay={200}>
            <StillHaveQuestions />
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
