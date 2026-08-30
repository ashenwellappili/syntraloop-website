"use client";

import React from 'react';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';

export default function TermsPage() {
  return (
    <div className="page-terms">
      <PageHero
        badge="Legal & Compliance"
        title="Terms of"
        highlightText="Service"
        subtitle="Effective Date: August 2026 — Key terms, client IP ownership, and engagement standards governing SyntraLoop digital engineering services."
      />

      <div className="section bg-primary pt-6">
        <div className="container">
          <ScrollReveal delay={100}>
            <div className="path-card max-w-4xl mx-auto p-8 space-y-6">
              <section>
                <h2 className="text-xl font-bold text-navy mb-2">1. Services Overview</h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  SyntraLoop is a digital engineering studio offering modern web application development, custom business systems engineering, AI integrations, and ongoing website maintenance services.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-navy mb-2">2. Project Proposals & Intellectual Property</h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Each custom software engagement is governed by an agreed statement of work (SOW). Upon completion of deliverables and settlement of milestone payments, full ownership of custom source code is transferred to the client.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-navy mb-2">3. Disclaimer & Warranties</h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Website content, showcase projects, and technical descriptions are provided for studio evaluation. Specific performance milestones, timelines, and deliverables are specified individually within custom client agreements.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-navy mb-2">4. Contact Information</h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  For terms or project agreement questions, contact us at <strong className="text-blue-600">syntraloop.contact@gmail.com</strong>.
                </p>
              </section>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
