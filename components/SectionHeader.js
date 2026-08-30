"use client";

import React from 'react';

export default function SectionHeader({ title, subtitle, centered = false }) {
  return (
    <div className={`section-header ${centered ? 'text-center' : ''}`}>
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}
