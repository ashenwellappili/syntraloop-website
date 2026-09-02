import React from 'react';
import Link from 'next/link';
import { Home, Compass, MessageSquare, ArrowRight, ArrowLeft, Search } from 'lucide-react';

export default function NotFound() {
  const quickLinks = [
    { title: "Core Services", desc: "Web Apps, Systems, AI Integrations", href: "/services" },
    { title: "Client Showcase", desc: "Explore our recent digital projects", href: "/work" },
    { title: "About Studio", desc: "Our engineering philosophy & standards", href: "/about" },
    { title: "Project Assessment", desc: "Request technical scoping & pricing", href: "/contact" },
  ];

  return (
    <div className="not-found-page">
      {/* Ambient Lighting Background */}
      <div className="not-found-glow" aria-hidden="true" />
      <div className="not-found-grid-pattern" aria-hidden="true" />

      <div className="container relative z-10 py-16 text-center">
        <div className="max-w-2xl mx-auto">
          {/* High-Tech Error Badge */}
          <div className="not-found-badge animate-fade-in-up">
            <span className="badge-pulse-dot bg-amber-400" />
            <span>404 &bull; Page Not Found</span>
          </div>

          {/* Large Gradient Heading */}
          <h1 className="not-found-title animate-fade-in-up delay-1">
            Lost in the <span className="text-cyan-gradient">Digital Loop?</span>
          </h1>

          <p className="not-found-desc animate-fade-in-up delay-2">
            The page you are looking for might have been relocated, updated, or is temporarily unreachable. Let’s get you back on track:
          </p>

          {/* Primary Action Buttons */}
          <div className="not-found-actions animate-fade-in-up delay-3">
            <Link href="/" className="btn btn-cyan-pill">
              <Home size={17} />
              <span>Return Home</span>
            </Link>

            <Link href="/services" className="btn btn-dark-glass">
              <Compass size={17} />
              <span>Explore Services</span>
            </Link>
          </div>

          {/* Quick Route Cards Grid */}
          <div className="not-found-links-card animate-fade-in-up delay-4">
            <h3 className="not-found-links-title">
              <Search size={15} className="text-blue-500" />
              <span>Popular Destinations</span>
            </h3>

            <div className="not-found-grid">
              {quickLinks.map((item, idx) => (
                <Link key={idx} href={item.href} className="not-found-card-link">
                  <div className="text-left">
                    <p className="not-found-card-title">{item.title}</p>
                    <p className="not-found-card-desc">{item.desc}</p>
                  </div>
                  <ArrowRight size={14} className="not-found-card-arrow" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
