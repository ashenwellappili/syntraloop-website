"use client";

import React from 'react';

export default function SectionHeader({ title, subtitle, centered = false }) {
  return (
    <div className={`section-header ${centered ? 'text-center' : ''}`}>
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}

      <style jsx>{`
        .section-header {
          margin-bottom: 2.5rem;
          max-width: 720px;
        }

        .section-header.text-center {
          margin-left: auto;
          margin-right: auto;
          text-align: center;
        }

        .section-title {
          font-size: 2.1rem;
          margin-bottom: 0.5rem;
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
        }
      `}</style>
    </div>
  );
}
