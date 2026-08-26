"use client";

import React from 'react';
import Link from 'next/link';
import SectionHeader from '@/components/SectionHeader';
import { servicesData } from '@/data/servicesData';
import { 
  Globe, 
  LayoutDashboard, 
  Cpu, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight
} from 'lucide-react';

export default function ServicesPage() {
  return (
    <div className="page-services section">
      <div className="container">
        {/* Page Banner */}
        <SectionHeader
          title="Services"
          subtitle="We design, engineer, integrate, and maintain modern web applications, business systems, and AI tools."
        />

        {/* Detailed Services Stack */}
        <div className="services-detail-stack">
          {servicesData.map((svc) => (
            <div key={svc.id} className="studio-card service-detail-card">
              <div className="service-header-row">
                <div className="service-icon-box">
                  {svc.id === 'web-development' && <Globe size={26} />}
                  {svc.id === 'business-systems' && <LayoutDashboard size={26} />}
                  {svc.id === 'ai-integrations' && <Cpu size={26} />}
                  {svc.id === 'website-maintenance' && <ShieldCheck size={26} />}
                </div>

                <div>
                  <h2 className="service-title">{svc.title}</h2>
                  <p className="service-full-desc">{svc.fullDescription}</p>
                </div>
              </div>

              <div className="service-benefits-box">
                <h3 className="col-heading">Key Benefits</h3>
                <ul className="service-check-list">
                  {svc.benefits.map((b, i) => (
                    <li key={i}>
                      <CheckCircle2 size={16} className="check-icon" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="service-footer-bar">
                <Link href="/contact" className="btn btn-primary btn-sm">
                  Contact Us
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .services-detail-stack {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .service-detail-card {
          padding: 2.25rem;
        }

        .service-header-row {
          display: flex;
          align-items: flex-start;
          gap: 1.25rem;
          margin-bottom: 1.5rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid var(--border-color);
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
          font-size: 1.6rem;
          margin-bottom: 0.5rem;
          color: var(--text-navy);
        }

        .service-full-desc {
          font-size: 1rem;
          color: var(--text-slate);
          line-height: 1.6;
        }

        .service-benefits-box {
          margin-bottom: 1.75rem;
        }

        .col-heading {
          font-size: 1rem;
          margin-bottom: 1rem;
          color: var(--text-navy);
        }

        .service-check-list {
          list-style: none;
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.65rem;
        }

        @media (min-width: 640px) {
          .service-check-list {
            grid-template-columns: 1fr 1fr;
          }
        }

        .service-check-list li {
          font-size: 0.9rem;
          color: var(--text-slate);
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          line-height: 1.5;
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
        }
      `}</style>
    </div>
  );
}
