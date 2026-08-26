"use client";

import React from 'react';
import SectionHeader from '@/components/SectionHeader';

export default function TermsPage() {
  return (
    <div className="page-terms section">
      <div className="container">
        <SectionHeader
          badge="Legal Information"
          title="Terms of Service"
          subtitle="Effective Date: August 2026"
        />

        <div className="studio-card legal-card">
          <section className="legal-section">
            <h2>1. Services Overview</h2>
            <p>
              SyntraLoop is a technology studio offering modern web application development, custom business systems engineering, AI software integrations, and website maintenance services.
            </p>
          </section>

          <section className="legal-section">
            <h2>2. Project Proposals & Intellectual Property</h2>
            <p>
              Each custom software engagement is governed by an agreed statement of work (SOW). Upon completion of deliverables and settlement of milestone payments, full ownership of custom source code is transferred to the client.
            </p>
          </section>

          <section className="legal-section">
            <h2>3. Disclaimer & Warranties</h2>
            <p>
              Website content, showcase projects, and technical descriptions are provided for studio evaluation. Specific performance milestones, timelines, and deliverables are specified individually within custom client agreements.
            </p>
          </section>

          <section className="legal-section">
            <h2>4. Contact Information</h2>
            <p>
              For terms or project agreement questions, contact us at <strong>syntraloop.contact@gmail.com</strong>.
            </p>
          </section>
        </div>
      </div>

      <style jsx>{`
        .legal-card {
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .legal-section h2 {
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
          color: var(--text-navy);
        }

        .legal-section p {
          font-size: 0.95rem;
          color: var(--text-slate);
          line-height: 1.65;
        }
      `}</style>
    </div>
  );
}
