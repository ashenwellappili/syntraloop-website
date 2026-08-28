"use client";

import React from 'react';
import Link from 'next/link';
import SectionHeader from '@/components/SectionHeader';
import ScrollReveal from '@/components/ScrollReveal';
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
  LifeBuoy
} from 'lucide-react';

export default function ServicesPage() {
  const whyWorkWithUsItems = [
    {
      icon: Target,
      title: "Practical Solutions",
      description: "We focus on useful digital products that solve real business needs."
    },
    {
      icon: Sliders,
      title: "Built Around Your Needs",
      description: "We shape each solution around your goals, workflow, and users."
    },
    {
      icon: MessageSquare,
      title: "Clear Communication",
      description: "We keep the process understandable from planning through launch."
    },
    {
      icon: LifeBuoy,
      title: "Support After Launch",
      description: "We can help with updates, improvements, maintenance, and future development."
    }
  ];

  return (
    <div className="services-section-wrapper section">
      {/* Low-Contrast Diagonal Grid Background */}
      <div className="services-grid-bg" aria-hidden="true" />
      <div className="services-corner-glow-left" aria-hidden="true" />
      <div className="services-corner-glow-right" aria-hidden="true" />

      <div className="container relative z-10">
        {/* 1. Page Header with Large Title Size (Matches Work/About/Contact pages, NO buttons) */}
        <ScrollReveal delay={0}>
          <div className="services-page-header text-center">
            <h1 className="services-header-title">Services</h1>
            <p className="services-header-subtext">
              We design, build, integrate, and maintain reliable digital solutions for growing businesses.
            </p>
          </div>
        </ScrollReveal>

        {/* 2. Detailed Services Responsive Grid (4 Cards) */}
        <div className="services-detail-grid">
          {servicesData.map((svc, idx) => (
            <ScrollReveal key={svc.id} delay={100 + idx * 80}>
              <div className="studio-card service-detail-card">
                <div className="service-card-content">
                  <div className="service-header-row">
                    <div className="service-icon-box">
                      {svc.id === 'web-development' && <Globe size={26} />}
                      {svc.id === 'business-systems' && <LayoutDashboard size={26} />}
                      {svc.id === 'ai-integration' && <Cpu size={26} />}
                      {svc.id === 'website-maintenance' && <ShieldCheck size={26} />}
                    </div>

                    <div>
                      <h2 className="service-title">{svc.title}</h2>
                      <p className="service-full-desc">{svc.shortDescription}</p>
                    </div>
                  </div>

                  <div className="service-benefits-box">
                    <h3 className="col-heading">Our Capabilities</h3>
                    <ul className="service-check-list">
                      {svc.benefits.map((b, i) => (
                        <li key={i}>
                          <CheckCircle2 size={16} className="check-icon" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="service-footer-bar">
                  <Link href="/contact" className="btn btn-primary service-cta-btn">
                    <span>{svc.ctaText}</span>
                    <ArrowRight size={16} className="service-cta-arrow" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Subtle Visual Divider */}
        <div className="services-divider" aria-hidden="true" />

        {/* 3. Why Work With Us Section */}
        <div className="why-us-section">
          <ScrollReveal delay={0}>
            <SectionHeader
              title="Why Work With Us"
              subtitle="We combine practical thinking, modern technology, and clear communication to build solutions that work for your business."
              centered={true}
            />
          </ScrollReveal>

          <div className="why-us-grid">
            {whyWorkWithUsItems.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <ScrollReveal key={idx} delay={100 + idx * 80}>
                  <div className="studio-card why-us-card">
                    <div className="why-us-icon-box">
                      <IconComp size={24} />
                    </div>
                    <h3 className="why-us-card-title">{item.title}</h3>
                    <p className="why-us-card-desc">{item.description}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        {/* 4. Final Start a Project CTA */}
        <div className="services-cta-margin">
          <ScrollReveal delay={200}>
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
      </div>

      <style jsx>{`
        .services-page-header {
          max-width: 820px;
          margin: 0 auto 3.5rem auto;
          text-align: center;
        }

        .services-header-title {
          font-size: 2.8rem;
          line-height: 1.15;
          margin-bottom: 1.25rem;
          color: var(--text-navy);
          letter-spacing: -0.03em;
        }

        @media (min-width: 768px) {
          .services-header-title {
            font-size: 3.8rem;
          }
        }

        .services-header-subtext {
          font-size: 1.18rem;
          color: var(--text-slate);
          line-height: 1.7;
          max-width: 720px;
          margin: 0 auto;
        }

        .services-detail-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.75rem;
          margin-bottom: 2rem;
        }

        @media (min-width: 900px) {
          .services-detail-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .service-detail-card {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
          padding: 2.25rem;
          position: relative;
          background-color: #FFFFFF;
          text-align: left;
        }

        .service-card-content {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .service-header-row {
          display: flex;
          align-items: flex-start;
          gap: 1.25rem;
          margin-bottom: 1.5rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid var(--border-color);
          text-align: left;
        }

        .service-icon-box {
          width: 52px;
          height: 52px;
          border-radius: var(--radius-md);
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-blue);
          flex-shrink: 0;
        }

        .service-title {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
          color: var(--text-navy);
          text-align: left;
        }

        .service-full-desc {
          font-size: 0.975rem;
          color: var(--text-slate);
          line-height: 1.6;
          text-align: left;
        }

        .service-benefits-box {
          margin-bottom: 1.75rem;
          text-align: left;
          flex-grow: 1;
        }

        .col-heading {
          font-size: 0.95rem;
          margin-bottom: 0.85rem;
          color: var(--text-navy);
          font-weight: 700;
          text-align: left;
        }

        .service-check-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
          text-align: left;
        }

        .service-check-list li {
          font-size: 0.9rem;
          color: var(--text-slate);
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          line-height: 1.5;
          text-align: left;
        }

        .check-icon {
          color: var(--accent-blue);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .service-footer-bar {
          display: flex;
          justify-content: flex-end;
          padding-top: 1.25rem;
          border-top: 1px solid var(--border-color);
          margin-top: auto;
        }

        .services-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--border-color), transparent);
          margin: 3.5rem 0;
        }

        .why-us-section {
          margin-bottom: 4rem;
          padding: 3.5rem 2rem;
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
        }

        .why-us-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          margin-top: 2.5rem;
        }

        @media (min-width: 640px) {
          .why-us-grid {
            grid-template-columns: repeat(2, 1fr);
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
          align-items: center;
          text-align: center;
          padding: 2rem 1.5rem;
          height: 100%;
          background-color: #FFFFFF;
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
        }

        .why-us-card:hover {
          transform: translateY(-2px);
          border-color: #0057D8;
          box-shadow: 0 6px 20px rgba(0, 87, 216, 0.08);
        }

        .why-us-icon-box {
          width: 50px;
          height: 50px;
          border-radius: var(--radius-md);
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-blue);
          margin-bottom: 1.25rem;
          transition: color 0.25s ease, box-shadow 0.25s ease;
        }

        .why-us-card:hover .why-us-icon-box {
          box-shadow: 0 0 12px rgba(0, 87, 216, 0.25);
        }

        .why-us-card-title {
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
          color: var(--text-navy);
          font-weight: 700;
          text-align: center;
        }

        .why-us-card-desc {
          font-size: 0.9875rem;
          color: var(--text-slate);
          line-height: 1.6;
          text-align: center;
        }

        .services-cta-margin {
          margin-top: 2rem;
        }

        .final-cta-card {
          text-align: center;
          padding: 4rem 2rem;
          background-color: #FFFFFF;
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

        @media (prefers-reduced-motion: reduce) {
          .why-us-card:hover {
            transform: none !important;
          }
          .why-us-card:hover .why-us-icon-box {
            box-shadow: none !important;
          }
        }
      `}</style>
    </div>
  );
}
