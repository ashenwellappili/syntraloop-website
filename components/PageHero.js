"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function PageHero({
  badge = "SyntraLoop Solutions",
  title,
  highlightText,
  subtitle,
  ctaText,
  ctaHref = "/contact",
  secondaryCtaText,
  secondaryCtaHref,
  children
}) {
  return (
    <section className="curved-page-hero">
      {/* Ambient Lighting Background */}
      <div className="curved-hero-glow" aria-hidden="true" />
      <div className="curved-hero-grid-pattern" aria-hidden="true" />

      <div className="container relative z-10">
        <div className="curved-hero-content text-center">
          {badge && (
            <div className="curved-hero-badge animate-fade-in-up">
              <span className="badge-pulse-dot" />
              <span>{badge}</span>
            </div>
          )}

          <h1 className="curved-hero-title animate-fade-in-up delay-1">
            {title}{' '}
            {highlightText && (
              <span className="text-cyan-gradient">{highlightText}</span>
            )}
          </h1>

          {subtitle && (
            <p className="curved-hero-subtitle animate-fade-in-up delay-2">
              {subtitle}
            </p>
          )}

          {(ctaText || secondaryCtaText) && (
            <div className="curved-hero-cta-group animate-fade-in-up delay-3">
              {ctaText && (
                <Link href={ctaHref} className="btn btn-cyan-pill">
                  <span>{ctaText}</span>
                  <ArrowRight size={16} />
                </Link>
              )}

              {secondaryCtaText && (
                <Link href={secondaryCtaHref || "/work"} className="btn btn-dark-glass">
                  {secondaryCtaText}
                </Link>
              )}
            </div>
          )}

          {children}
        </div>
      </div>

      {/* Smooth Organic Wave Divider Transition to White Page Body */}
      <div className="curved-hero-wave" aria-hidden="true">
        <svg 
          viewBox="0 0 1440 84" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="wave-svg"
        >
          <path 
            d="M0,32 C360,75 1080,-15 1440,38 L1440,84 L0,84 Z" 
            className="hero-wave-fill"
          />
        </svg>
      </div>
    </section>
  );
}
