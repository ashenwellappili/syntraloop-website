"use client";

import React from 'react';
import Link from 'next/link';
import SectionHeader from '@/components/SectionHeader';
import ScrollReveal from '@/components/ScrollReveal';
import { 
  Target, 
  Compass, 
  Shield, 
  Code2, 
  Globe, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';

export default function AboutClient() {
  const principles = [
    {
      icon: Shield,
      title: "Security & Privacy First",
      text: "We prioritize secure input validation, protected environment variables, and responsible handling of sensitive data in every build."
    },
    {
      icon: Code2,
      title: "Maintainable Code",
      text: "We write clean, modular React, Next.js, and Python code that is easier to maintain, extend, and hand over."
    },
    {
      icon: Globe,
      title: "International Standards",
      text: "We follow practical standards for performance, accessibility, responsive design, and clear communication."
    }
  ];

  return (
    <div className="about-page-wrapper section">
      {/* Subtle Technical Grid Background */}
      <div className="services-grid-bg" aria-hidden="true" />
      <div className="services-corner-glow-left" aria-hidden="true" />
      <div className="services-corner-glow-right" aria-hidden="true" />

      <div className="container relative z-10">
        {/* SECTION 1 — ABOUT HERO / INTRO */}
        <section className="about-hero-section">
          <div className="about-hero-content text-center">
            <h1 className="hero-heading animate-fade-in-up delay-1">
              Engineering Modern Digital Solutions
            </h1>

            <p className="hero-subtext animate-fade-in-up delay-2">
              SyntraLoop transforms business ideas into modern websites, business systems, AI integrations, and data-driven digital solutions.
            </p>
          </div>

          {/* Equal Side-by-Side Cards */}
          <div className="about-mission-grid">
            <ScrollReveal delay={100}>
              <div className="studio-card about-mission-card">
                <div className="card-icon-box">
                  <Target size={24} />
                </div>
                <h2 className="card-title">Positioning & Mission</h2>
                <p className="card-text">
                  We help startups, small and medium-sized businesses, founders, and international clients turn practical business challenges into reliable, scalable software solutions.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={180}>
              <div className="studio-card about-mission-card">
                <div className="card-icon-box">
                  <Compass size={24} />
                </div>
                <h2 className="card-title">Long-Term Direction</h2>
                <p className="card-text">
                  Our long-term direction is centered on engineering craft, clean software architecture, transparent communication, and lasting value for every client.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* SECTION 2 — OUR PRINCIPLES */}
        <section className="about-principles-section">
          <ScrollReveal delay={0}>
            <SectionHeader
              title="Our Principles"
              subtitle="The standards that guide every codebase we build, every API we integrate, and every project we deliver."
              centered={true}
            />
          </ScrollReveal>

          <div className="principles-grid">
            {principles.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <ScrollReveal key={idx} delay={100 + idx * 80}>
                  <div className="studio-card principle-card">
                    <div className="principle-icon-box">
                      <IconComp size={24} />
                    </div>
                    <h3 className="principle-title">{item.title}</h3>
                    <p className="principle-text">{item.text}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </section>

        {/* SECTION 3 — CURRENT CAPABILITIES */}
        <section className="about-capabilities-section">
          <ScrollReveal delay={100}>
            <div className="studio-card capabilities-box">
              <div className="capabilities-header text-center">
                <h2 className="cap-heading">Current Capabilities</h2>
                <p className="cap-subtext">
                  Technologies and tools we can currently use, deploy, and maintain.
                </p>
              </div>

              <div className="capabilities-columns-grid">
                {/* Column 1: Frontend Development */}
                <ScrollReveal delay={150}>
                  <div className="cap-column">
                    <h3 className="cap-col-label">Frontend Development</h3>
                    <ul className="cap-bullet-list">
                      <li>
                        <CheckCircle2 size={16} className="bullet-check-icon" />
                        <span>React and Next.js</span>
                      </li>
                      <li>
                        <CheckCircle2 size={16} className="bullet-check-icon" />
                        <span>JavaScript and TypeScript</span>
                      </li>
                      <li>
                        <CheckCircle2 size={16} className="bullet-check-icon" />
                        <span>CSS and Tailwind CSS</span>
                      </li>
                      <li>
                        <CheckCircle2 size={16} className="bullet-check-icon" />
                        <span>Responsive design and accessibility</span>
                      </li>
                    </ul>
                  </div>
                </ScrollReveal>

                {/* Column 2: Backend & Integrations */}
                <ScrollReveal delay={230}>
                  <div className="cap-column">
                    <h3 className="cap-col-label">Backend & Integrations</h3>
                    <ul className="cap-bullet-list">
                      <li>
                        <CheckCircle2 size={16} className="bullet-check-icon" />
                        <span>Python and Node.js services</span>
                      </li>
                      <li>
                        <CheckCircle2 size={16} className="bullet-check-icon" />
                        <span>REST APIs and webhooks</span>
                      </li>
                      <li>
                        <CheckCircle2 size={16} className="bullet-check-icon" />
                        <span>Databases and SQL schemas</span>
                      </li>
                      <li>
                        <CheckCircle2 size={16} className="bullet-check-icon" />
                        <span>AI integrations and workflow tools</span>
                      </li>
                    </ul>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* SECTION 4 — FINAL CTA */}
        <section className="about-cta-section">
          <ScrollReveal delay={200}>
            <div className="studio-card final-cta-card">
              <h2 className="cta-heading">Have an idea or a business challenge?</h2>
              <p className="cta-subtext">
                Tell us what you need, and let&apos;s explore how SyntraLoop can help.
              </p>
              <Link href="/contact" className="btn btn-primary btn-lg cta-btn">
                <span>Contact Us</span>
                <ArrowRight size={18} className="cta-arrow-icon" />
              </Link>
            </div>
          </ScrollReveal>
        </section>
      </div>

      <style jsx>{`
        .about-page-wrapper {
          position: relative;
          padding-top: 5rem;
          padding-bottom: 5rem;
        }

        .about-hero-section {
          margin-bottom: 4.5rem;
        }

        .about-hero-content {
          max-width: 820px;
          margin: 0 auto 3rem auto;
        }

        .hero-heading {
          font-size: 2.8rem;
          line-height: 1.15;
          margin-bottom: 1.25rem;
          color: var(--text-navy);
          letter-spacing: -0.03em;
        }

        @media (min-width: 768px) {
          .hero-heading {
            font-size: 3.8rem;
          }
        }

        .hero-subtext {
          font-size: 1.18rem;
          color: var(--text-slate);
          line-height: 1.7;
          max-width: 720px;
          margin: 0 auto;
        }

        .about-mission-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.75rem;
        }

        @media (min-width: 768px) {
          .about-mission-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        .about-mission-card {
          display: flex;
          flex-direction: column;
          height: 100%;
          padding: 2.25rem;
          background-color: #FFFFFF;
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          text-align: left;
          transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
        }

        .about-mission-card:hover {
          transform: translateY(-2px);
          border-color: #0057D8;
          box-shadow: 0 8px 24px rgba(0, 87, 216, 0.08);
        }

        .card-icon-box {
          width: 48px;
          height: 48px;
          border-radius: var(--radius-md);
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-blue);
          margin-bottom: 1.5rem;
          flex-shrink: 0;
        }

        .card-title {
          font-size: 1.45rem;
          margin-bottom: 0.75rem;
          color: var(--text-navy);
          font-weight: 700;
        }

        .card-text {
          font-size: 0.975rem;
          color: var(--text-slate);
          line-height: 1.65;
        }

        .about-principles-section {
          margin-bottom: 4.5rem;
        }

        .principles-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          margin-top: 2.5rem;
        }

        @media (min-width: 640px) {
          .principles-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .principles-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .principle-card {
          display: flex;
          flex-direction: column;
          height: 100%;
          padding: 2rem 1.75rem;
          background-color: #FFFFFF;
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          text-align: left;
          transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
        }

        .principle-card:hover {
          transform: translateY(-2px);
          border-color: #0057D8;
          box-shadow: 0 6px 20px rgba(0, 87, 216, 0.08);
        }

        .principle-icon-box {
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
          transition: box-shadow 0.25s ease;
        }

        .principle-card:hover .principle-icon-box {
          box-shadow: 0 0 12px rgba(0, 87, 216, 0.25);
        }

        .principle-title {
          font-size: 1.2rem;
          margin-bottom: 0.6rem;
          color: var(--text-navy);
          font-weight: 700;
        }

        .principle-text {
          font-size: 0.925rem;
          color: var(--text-slate);
          line-height: 1.6;
        }

        .about-capabilities-section {
          margin-bottom: 4.5rem;
        }

        .capabilities-box {
          padding: 3.5rem 2.25rem;
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
        }

        .cap-heading {
          font-size: 2rem;
          margin-bottom: 0.5rem;
          color: var(--text-navy);
          font-weight: 700;
        }

        .cap-subtext {
          font-size: 1.025rem;
          color: var(--text-slate);
          margin-bottom: 2.75rem;
        }

        .capabilities-columns-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        @media (min-width: 768px) {
          .capabilities-columns-grid {
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
          }
        }

        .cap-column {
          background-color: #FFFFFF;
          padding: 2rem;
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          text-align: left;
          height: 100%;
        }

        .cap-col-label {
          font-size: 1.2rem;
          color: var(--accent-blue);
          font-weight: 700;
          margin-bottom: 1.25rem;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid var(--border-color);
        }

        .cap-bullet-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .cap-bullet-list li {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          font-size: 0.95rem;
          color: var(--text-slate);
          line-height: 1.5;
        }

        .bullet-check-icon {
          color: var(--accent-blue);
          flex-shrink: 0;
        }

        .about-cta-section {
          margin-top: 1rem;
        }

        .final-cta-card {
          text-align: center;
          padding: 4.5rem 2rem;
          background-color: #FFFFFF;
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
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

        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .cta-btn:hover .cta-arrow-icon {
          transform: translateX(4px);
        }

        .cta-arrow-icon {
          transition: transform 0.25s ease;
        }

        @media (prefers-reduced-motion: reduce) {
          .about-mission-card:hover,
          .principle-card:hover {
            transform: none !important;
          }
          .principle-card:hover .principle-icon-box {
            box-shadow: none !important;
          }
          .cta-btn:hover .cta-arrow-icon {
            transform: none !important;
          }
        }
      `}</style>
    </div>
  );
}
