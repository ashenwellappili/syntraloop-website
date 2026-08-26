"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="page-home">
      {/* HERO SECTION */}
      <section className="hero-section text-center">
        <div className="container hero-container">
          <div className="hero-content">
            <h1 className="hero-heading">
              From Ideas to <br className="hidden-mobile" />
              <span className="text-accent-blue">Intelligent Solutions.</span>
            </h1>

            <p className="hero-subtext">
              We build modern websites, business applications, AI integrations, and data-driven digital solutions for businesses ready to move forward.
            </p>

            <div className="hero-cta-group">
              <Link href="/contact" className="btn btn-primary btn-lg">
                Contact Us
                <ArrowRight size={18} />
              </Link>

              <Link href="/work" className="btn btn-secondary btn-lg">
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE STRIP */}
      <section className="value-strip-section">
        <div className="container">
          <div className="value-strip-grid">
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
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="section final-cta-section bg-secondary-section">
        <div className="container">
          <div className="studio-card final-cta-card">
            <h2 className="cta-heading">Have an idea or a business challenge?</h2>
            <p className="cta-subtext">
              Tell us what you need, and let's explore how SyntraLoop can help.
            </p>
            <Link href="/contact" className="btn btn-primary btn-lg">
              Contact Us
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        .hero-section {
          padding: 7rem 0 6rem 0;
        }

        .hero-content {
          max-width: 840px;
          margin: 0 auto;
        }

        .hero-heading {
          font-size: 3rem;
          line-height: 1.12;
          margin-bottom: 1.5rem;
          letter-spacing: -0.03em;
          color: var(--text-navy);
        }

        @media (min-width: 768px) {
          .hero-heading {
            font-size: 4.2rem;
          }
        }

        .text-accent-blue {
          color: var(--accent-blue);
        }

        .hero-subtext {
          font-size: 1.2rem;
          color: var(--text-slate);
          line-height: 1.7;
          margin-bottom: 2.5rem;
          max-width: 700px;
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
          font-size: 1.05rem;
        }

        .value-strip-section {
          background-color: var(--bg-secondary);
          border-top: 1px solid var(--border-color);
          border-bottom: 1px solid var(--border-color);
          padding: 1.75rem 0;
        }

        .value-strip-grid {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-around;
          gap: 1.5rem;
        }

        .value-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-display);
          font-weight: 600;
          font-size: 1rem;
          color: var(--text-navy);
        }

        .value-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: var(--accent-blue);
        }

        .bg-secondary-section {
          background-color: var(--bg-secondary);
        }

        .final-cta-card {
          text-align: center;
          padding: 4.5rem 2rem;
          background-color: var(--bg-primary);
        }

        .cta-heading {
          font-size: 2.4rem;
          margin-bottom: 1rem;
          color: var(--text-navy);
        }

        .cta-subtext {
          font-size: 1.1rem;
          color: var(--text-slate);
          max-width: 620px;
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
