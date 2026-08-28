"use client";

import React from 'react';
import Link from 'next/link';
import SectionHeader from '@/components/SectionHeader';
import ProjectCard from '@/components/ProjectCard';
import FAQAccordion from '@/components/FAQAccordion';
import ScrollReveal from '@/components/ScrollReveal';
import { projectsData } from '@/data/projectsData';
import {
  ArrowRight,
  Target,
  Code,
  MessageSquare,
  LifeBuoy,
  Info
} from 'lucide-react';

export default function WorkPage() {
  /* ==========================================================================
     EXACT 6 FAQ ITEMS FOR WORK PAGE
     ========================================================================== */
  const workFaqItems = [
    {
      question: "What type of projects does SyntraLoop build?",
      answer: "We build websites, web applications, business management systems, AI integrations, and ongoing website maintenance solutions."
    },
    {
      question: "Are the projects in your portfolio real client projects?",
      answer: "The projects marked as Demo Project or Prototype are created by SyntraLoop to demonstrate our capabilities. They are not presented as paid client work."
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

  /* ==========================================================================
     WHY WORK WITH US (4 CARDS)
     ========================================================================== */
  const whyWorkWithUsCards = [
    {
      icon: Target,
      title: "Practical Solutions",
      desc: "We focus on useful digital solutions that solve real business problems."
    },
    {
      icon: Code,
      title: "Custom Development",
      desc: "We build around your workflow instead of forcing your business into a generic template."
    },
    {
      icon: MessageSquare,
      title: "Clear Communication",
      desc: "We keep the process simple, transparent, and easy to understand."
    },
    {
      icon: LifeBuoy,
      title: "Reliable Support",
      desc: "We can provide improvements, maintenance, and technical support after launch."
    }
  ];

  return (
    <div className="page-work-root">
      {/* 1. WORK HERO SECTION */}
      <section className="work-hero-section relative overflow-hidden">
        {/* Low-Contrast Technical Background */}
        <div className="services-grid-bg" aria-hidden="true" />
        <div className="services-corner-glow-left" aria-hidden="true" />
        <div className="services-corner-glow-right" aria-hidden="true" />

        <div className="container relative z-10 text-center">
          <div className="hero-content">
            <h1 className="hero-title animate-fade-in-up delay-1">
              Our Work & Approach
            </h1>

            <p className="hero-subtext animate-fade-in-up delay-2">
              Concept builds that showcase our approach to design, architecture, and technical execution
            </p>

            <div className="hero-cta-group animate-fade-in-up delay-3">
              <Link href="/contact" className="btn btn-primary btn-lg">
                Start a Project
                <ArrowRight size={18} />
              </Link>

              <a href="#projects-grid" className="btn btn-secondary btn-lg">
                Explore Projects
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SELECTED DEMO PROJECTS SECTION */}
      <section className="section bg-secondary-section" id="projects-grid">
        <div className="container">
          <SectionHeader
            title="Selected Projects"
            subtitle="Concept builds created to demonstrate layout architecture, system design, and technical capabilities."
          />

          {/* 3 Cards Responsive Grid */}
          <div className="work-projects-grid">
            {projectsData.map((project, idx) => (
              <ScrollReveal key={project.id} delay={idx * 100}>
                <ProjectCard project={project} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHY WORK WITH US SECTION */}
      <section className="section">
        <div className="container">
          <SectionHeader
            title="Why Work With Us"
            subtitle="Built on engineering discipline, practical outcomes, and transparent collaboration."
            centered
          />

          <div className="why-us-grid">
            {whyWorkWithUsCards.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <ScrollReveal key={idx} delay={idx * 90}>
                  <div className="studio-card why-us-card">
                    <div className="why-us-icon-box">
                      <IconComponent size={24} />
                    </div>
                    <h3 className="why-us-title">{item.title}</h3>
                    <p className="why-us-desc">{item.desc}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. FAQ SECTION */}
      <section className="section bg-secondary-section">
        <div className="container">
          <SectionHeader
            title="Frequently Asked Questions"
            subtitle="Answers regarding project scope, capabilities, demo work, and technical support."
            centered
          />

          <FAQAccordion items={workFaqItems} />
        </div>
      </section>

      {/* 5. FINAL START A PROJECT CTA */}
      <section className="section final-cta-section">
        <div className="container">
          <ScrollReveal>
            <div className="studio-card final-cta-card">
              <h2 className="cta-heading">Have an idea or a business challenge?</h2>
              <p className="cta-subtext">
                Tell us what you need, and let&apos;s explore how SyntraLoop can help.
              </p>
              <Link href="/contact" className="btn btn-primary btn-lg">
                Start a Project
                <ArrowRight size={18} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <style jsx>{`
        .work-hero-section {
          padding: 6.5rem 0 5.5rem 0;
          background-color: var(--bg-primary);
        }

        .hero-content {
          max-width: 820px;
          margin: 0 auto;
        }

        .hero-title {
          font-size: 3rem;
          line-height: 1.15;
          margin-bottom: 1.25rem;
          color: var(--text-navy);
          letter-spacing: -0.03em;
        }

        @media (min-width: 768px) {
          .hero-title {
            font-size: 4.2rem;
          }
        }

        .text-accent-blue {
          color: var(--accent-blue);
        }

        .hero-subtext {
          font-size: 1.18rem;
          color: var(--text-slate);
          line-height: 1.7;
          margin-bottom: 2.25rem;
          max-width: 680px;
          margin-left: auto;
          margin-right: auto;
        }

        .hero-cta-group {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 1rem;
        }

        .btn-lg {
          padding: 1rem 2.2rem;
          font-size: 1.025rem;
        }

        .work-projects-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.75rem;
          margin-bottom: 2.5rem;
        }

        @media (min-width: 768px) {
          .work-projects-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .demo-notice-note-box {
          display: flex;
          align-items: flex-start;
          gap: 0.85rem;
          padding: 1.25rem 1.75rem;
          background-color: #FFFFFF;
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          max-width: 900px;
          margin: 0 auto;
        }

        .notice-icon {
          color: var(--accent-blue);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .notice-text {
          font-size: 0.875rem;
          color: var(--text-slate);
          line-height: 1.6;
        }

        .why-us-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }

        @media (min-width: 640px) {
          .why-us-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (min-width: 1024px) {
          .why-us-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .why-us-card {
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .why-us-icon-box {
          width: 46px;
          height: 46px;
          border-radius: var(--radius-md);
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-blue);
          margin-bottom: 1.25rem;
        }

        .why-us-title {
          font-size: 1.15rem;
          margin-bottom: 0.5rem;
          color: var(--text-navy);
        }

        .why-us-desc {
          font-size: 0.9rem;
          color: var(--text-slate);
          line-height: 1.6;
        }

        .final-cta-card {
          text-align: center;
          padding: 4.5rem 2rem;
          background-color: var(--bg-secondary);
        }

        .cta-heading {
          font-size: 2.2rem;
          margin-bottom: 1rem;
          color: var(--text-navy);
        }

        .cta-subtext {
          font-size: 1.05rem;
          color: var(--text-slate);
          max-width: 600px;
          margin: 0 auto 2rem auto;
        }

        @media (max-width: 640px) {
          .hidden-mobile {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
