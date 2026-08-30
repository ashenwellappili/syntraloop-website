"use client";

import React from 'react';

export default function SectionHeader({ badge, title, subtitle, centered = false, dark = false }) {
  return (
    <div className={`section-header ${centered ? 'text-center' : ''} ${dark ? 'section-header-dark' : ''}`}>
      {badge && (
        <div className={`section-badge ${dark ? 'section-badge-dark' : ''} animate-fade-in-up`}>
          <span className="section-badge-dot" />
          <span>{badge}</span>
        </div>
      )}
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}
