"use client";

import React from 'react';

export default function SectionHeader({ title, subtitle, centered = false }) {
  return (
    <div className={`section-header ${centered ? 'text-center' : ''}`}>
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}

      <style jsx>{`
        .section-header {
          margin-bottom: 2.75rem;
          max-width: 720px;
        }

        .section-header.text-center {
          margin-left: auto;
          margin-right: auto;
          text-align: center;
        }

        .section-title {
          font-size: 2.1rem;
          margin-bottom: 0.75rem;
          color: var(--text-navy);
          letter-spacing: -0.02em;
        }

        @media (min-width: 768px) {
          .section-title {
            font-size: 2.4rem;
          }
        }

        .section-subtitle {
          font-size: 1.05rem;
          color: var(--text-slate);
          line-height: 1.6;
          max-width: 680px;
        }

        .section-header.text-center .section-subtitle {
          margin-left: auto;
          margin-right: auto;
        }

        @media (max-width: 640px) {
          .section-subtitle {
            font-size: 0.95rem;
          }
        }
      `}</style>
    </div>
  );
}
