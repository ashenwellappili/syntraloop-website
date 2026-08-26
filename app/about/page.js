"use client";

import React from 'react';
import Link from 'next/link';
import SectionHeader from '@/components/SectionHeader';
import { Target, Compass, ShieldCheck, Code, Globe2, ArrowRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="page-about section">
      <div className="container">
        {/* Page Banner */}
        <SectionHeader
          title="Engineering Modern Digital Solutions"
          subtitle="SyntraLoop transforms business ideas into modern websites, web applications, business systems, AI integrations, and future data-driven digital solutions."
        />

        {/* Mission & Vision Split */}
        <div className="about-hero-grid">
          <div className="studio-card about-card">
            <div className="about-card-icon">
              <Target size={24} />
            </div>
            <h2 className="about-card-title">Positioning & Mission</h2>
            <p className="about-card-text">
              We empower startups, small and medium-sized businesses, founders, and international clients by building reliable, scalable software that solves practical operational challenges and generates qualified business outcomes.
            </p>
          </div>

          <div className="studio-card about-card">
            <div className="about-card-icon">
              <Compass size={24} />
            </div>
            <h2 className="about-card-title">Long-Term Direction</h2>
            <p className="about-card-text">
              Our long-term direction is centered on delivering engineering craft, clean software architecture, transparent communication, and long-term client value across international markets.
            </p>
          </div>
        </div>

        {/* Working Principles */}
        <div className="about-section-margin">
          <SectionHeader
            title="Our Principles"
            subtitle="The standards that guide every codebase we build, every API we integrate, and every project we deliver."
          />

          <div className="principles-grid">
            {[
              {
                icon: ShieldCheck,
                title: "Security & Privacy First",
                desc: "We enforce secure input validation, environment variable protection, and strict privacy controls on every build."
              },
              {
                icon: Code,
                title: "Maintainable Code",
                desc: "We write clean, modular React, Next.js, and Python code designed for long-term maintainability and smooth handover."
              },
              {
                icon: Globe2,
                title: "International Standards",
                desc: "Built for global startups and SMBs with fast load speeds, accessibility, high contrast, and clear communication."
              }
            ].map((p, idx) => (
              <div key={idx} className="studio-card principle-card">
                <p.icon size={28} className="principle-icon" />
                <h3 className="principle-title">{p.title}</h3>
                <p className="principle-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Capabilities Overview */}
        <div className="studio-card capabilities-summary-box">
          <h2 className="cap-summary-title">Current Capabilities</h2>
          <p className="cap-summary-sub">
            Only technologies our team can actually use, deploy, and maintain in production:
          </p>

          <div className="cap-list-grid">
            <div className="cap-col">
              <h4>Frontend Development</h4>
              <ul>
                <li>React & Next.js Frameworks</li>
                <li>JavaScript & TypeScript</li>
                <li>CSS & Tailwind CSS</li>
                <li>Responsive Design & Accessibility</li>
              </ul>
            </div>

            <div className="cap-col">
              <h4>Backend & Integrations</h4>
              <ul>
                <li>Python & Node.js Services</li>
                <li>RESTful APIs & Webhooks</li>
                <li>Databases & SQL Schema</li>
                <li>AI Integrations & Workflow Tools</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="studio-card about-cta">
          <h2 className="about-cta-title">Have an idea or a business challenge?</h2>
          <p className="about-cta-sub">
            Tell us what you need, and let's explore how SyntraLoop can help.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Contact Us
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      <style jsx>{`
        .about-hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          margin-bottom: 4rem;
        }

        @media (min-width: 768px) {
          .about-hero-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        .about-card-icon {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-md);
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-blue);
          margin-bottom: 1.25rem;
        }

        .about-card-title {
          font-size: 1.4rem;
          margin-bottom: 0.75rem;
          color: var(--text-navy);
        }

        .about-card-text {
          font-size: 0.95rem;
          color: var(--text-slate);
          line-height: 1.65;
        }

        .about-section-margin {
          margin-bottom: 4rem;
        }

        .principles-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }

        @media (min-width: 768px) {
          .principles-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .principle-icon {
          color: var(--accent-blue);
          margin-bottom: 1.25rem;
        }

        .principle-title {
          font-size: 1.15rem;
          margin-bottom: 0.5rem;
          color: var(--text-navy);
        }

        .principle-desc {
          font-size: 0.9rem;
          color: var(--text-slate);
          line-height: 1.6;
        }

        .capabilities-summary-box {
          padding: 2.5rem;
          margin-bottom: 4rem;
          background-color: var(--bg-secondary);
        }

        .cap-summary-title {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
          color: var(--text-navy);
        }

        .cap-summary-sub {
          font-size: 0.95rem;
          color: var(--text-slate);
          margin-bottom: 2rem;
        }

        .cap-list-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        @media (min-width: 768px) {
          .cap-list-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        .cap-col h4 {
          font-size: 1.05rem;
          margin-bottom: 1rem;
          color: var(--accent-blue);
        }

        .cap-col ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .cap-col li {
          font-size: 0.9rem;
          color: var(--text-slate);
          padding-left: 1.25rem;
          position: relative;
        }

        .cap-col li::before {
          content: "—";
          position: absolute;
          left: 0;
          color: var(--accent-blue);
        }

        .about-cta {
          text-align: center;
          padding: 3.5rem 2rem;
          background-color: var(--bg-secondary);
        }

        .about-cta-title {
          font-size: 1.75rem;
          margin-bottom: 0.75rem;
          color: var(--text-navy);
        }

        .about-cta-sub {
          font-size: 1rem;
          color: var(--text-slate);
          max-width: 600px;
          margin: 0 auto 1.75rem auto;
        }
      `}</style>
    </div>
  );
}
