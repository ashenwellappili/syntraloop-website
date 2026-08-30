"use client";

import React from 'react';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';

export default function PrivacyPage() {
  return (
    <div className="page-privacy">
      <PageHero
        badge="Legal & Compliance"
        title="Privacy"
        highlightText="Policy"
        subtitle="Effective Date: August 2026 — Learn how SyntraLoop manages, protects, and handles your project data and confidential information."
      />

      <div className="section bg-primary pt-6">
        <div className="container">
          <ScrollReveal delay={100}>
            <div className="path-card max-w-4xl mx-auto p-8 space-y-6">
              <section>
                <h2 className="text-xl font-bold text-navy mb-2">1. Information We Collect</h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  SyntraLoop collects information directly provided to us via email communications, consultation forms, or project brief submissions. This typically includes your name, email address, company name, and technical project requirements.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-navy mb-2">2. How We Use Information</h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  We use collected information solely to respond to technical enquiries, evaluate project scope, issue tailored proposal specifications, and communicate regarding active software projects.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-navy mb-2">3. Data Protection & Confidentiality</h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  SyntraLoop does not sell, rent, or trade your personal or project data to third-party marketers. Technical information shared during project discovery is held in confidence and protected with industry-standard encryption protocols.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-navy mb-2">4. Contact Information</h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  For any privacy enquiries or requests, please contact our engineering team at <strong className="text-blue-600">syntraloop.contact@gmail.com</strong>.
                </p>
              </section>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
