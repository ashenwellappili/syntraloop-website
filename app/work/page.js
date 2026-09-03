"use client";

import React from 'react';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import SectionHeader from '@/components/SectionHeader';
import ProjectCard from '@/components/ProjectCard';
import FAQAccordion from '@/components/FAQAccordion';
import StillHaveQuestions from '@/components/StillHaveQuestions';
import ScrollReveal from '@/components/ScrollReveal';
import { projectsData } from '@/data/projectsData';
import {
  ArrowRight,
  Target,
  Code,
  MessageSquare,
  LifeBuoy,
  Cpu,
  ShieldCheck,
  Zap,
  Layers,
  Sparkles
} from 'lucide-react';

export default function WorkPage() {
  const workFaqItems = [
    {
      question: "What type of projects does SyntraLoop build?",
      answer: "We build websites, web applications, business management systems, AI integrations, and ongoing website maintenance solutions."
    },
    {
      question: "Are the projects in your portfolio real client projects?",
      answer: "The projects marked as Demo Project or Prototype are created by SyntraLoop to demonstrate our technical capabilities, code quality, and architecture patterns."
    },
    {
      question: "Can you customize a solution for my business?",
      answer: "Yes. We first understand your requirements and workflow, then plan a solution around your specific needs."
    },
    {
      question: "Can you integrate AI into an existing website or system?",
      answer: "Yes. We can integrate suitable AI tools and APIs into existing websites, business systems, and workflows."
    },
    {
      question: "Do you provide support after launch?",
      answer: "Yes. We can provide maintenance, bug fixes, updates, performance improvements, and future feature development."
    },
    {
      question: "How do I start a project?",
      answer: "Use the Start a Project button and send us a short description of your goals, required features, and preferred timeline. We will review the request and discuss the next steps."
    }
  ];

  const standardsItems = [
    {
      icon: Zap,
      title: "Sub-Second Performance",
      desc: "Optimized bundle sizes, server-rendered components, and lightning-fast TTFB.",
      tag: "100/100 Lighthouse Target"
    },
    {
      icon: ShieldCheck,
      title: "Enterprise-Grade Security",
      desc: "Sanitized inputs, isolated credentials, strict CORS, and protected data routes.",
      tag: "Zero-Trust Architecture"
    },
    {
      icon: Layers,
      title: "Clean Modular Codebase",
      desc: "Documented component hierarchy, typed contracts, and maintainable patterns.",
      tag: "Maintainable & Extensible"
    },
    {
      icon: Cpu,
      title: "Intelligent API Automation",
      desc: "Resilient error handling, asynchronous queue processing, and retry mechanisms.",
      tag: "Resilient System Design"
    }
  ];

  return (
    <div className="page-work-root">
      {/* 1. CURVED DEEP-NAVY HERO SECTION */}
      <PageHero
        badge="Portfolio & Architecture"
        title="Our Work &"
        highlightText="Engineering Approach"
        subtitle="Concept builds, production architectures, and intelligent workflows that showcase our focus on reliability, performance, and clean design."
      />

      {/* 2. FEATURED PROJECTS GRID */}
      <section className="section bg-primary pt-6">
        <div className="container">
          <ScrollReveal delay={0}>
            <SectionHeader
              badge="Selected Concept Builds"
              title="Featured Implementations"
              subtitle="Explore working prototypes and architecture designs highlighting our front-end, back-end, and AI development standards."
              centered={true}
            />
          </ScrollReveal>

          <div className="work-preview-grid mt-8">
            {projectsData.map((project, idx) => (
              <ScrollReveal key={project.id} delay={100 + idx * 80}>
                <ProjectCard project={project} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. DARK ENGINEERING METHODOLOGY SHOWCASE */}
      <section className="dark-feature-section">
        <div className="dark-feature-glow" aria-hidden="true" />
        <div className="container relative z-10 text-center">
          <div className="curved-hero-badge">
            <span className="badge-pulse-dot" />
            <span>Engineering Principles</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
            Standards Engineered for Longevity
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm md:text-base mb-6">
            Every digital product we construct is anchored by rigorous coding practices, predictable state management, and reliable deployment workflows.
          </p>

          <div className="dark-glass-grid text-left">
            {standardsItems.map((item, idx) => {
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
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. WORK FAQ & STILL HAVE QUESTIONS */}
      <section className="section bg-secondary">
        <div className="container">
          <ScrollReveal delay={0}>
            <SectionHeader
              badge="Portfolio Inquiries"
              title="Frequently Asked Questions"
              subtitle="Questions about our demo builds, ownership of code, and project kickoffs."
              centered={true}
            />
          </ScrollReveal>

          <div className="max-w-3xl mx-auto mt-8">
            <FAQAccordion items={workFaqItems} />
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
