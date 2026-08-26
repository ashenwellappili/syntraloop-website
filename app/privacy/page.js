"use client";

import React from 'react';
import SectionHeader from '@/components/SectionHeader';

export default function PrivacyPage() {
  return (
    <div className="page-privacy section">
      <div className="container">
        <SectionHeader
          badge="Legal Information"
          title="Privacy Policy"
          subtitle="Effective Date: August 2026"
        />

        <div className="studio-card legal-card">
          <section className="legal-section">
            <h2>1. Information We Collect</h2>
            <p>
              SyntraLoop collects information directly provided to us via direct email communications or consultation requests. This typically includes your name, email address, company name, and project requirements.
            </p>
          </section>

          <section className="legal-section">
            <h2>2. How We Use Information</h2>
            <p>
              We use collected information solely to respond to technical enquiries, evaluate project scope, issue tailored proposal specifications, and communicate regarding active software projects.
            </p>
          </section>

          <section className="legal-section">
            <h2>3. Data Protection & Confidentiality</h2>
            <p>
              SyntraLoop does not sell, rent, or trade your personal or project data to third-party marketers. Technical information shared during project discovery is held in confidence.
            </p>
          </section>

          <section className="legal-section">
            <h2>4. Contact Information</h2>
            <p>
              For privacy enquiries, contact us at <strong>syntraloop.contact@gmail.com</strong>.
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
