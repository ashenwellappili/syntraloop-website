"use client";

import React from 'react';
import Link from 'next/link';
import { Mail, MessageSquare, Linkedin, Facebook, Instagram, Share2, Twitter } from 'lucide-react';

export default function Footer() {
  /* ==========================================================================
     SOCIAL MEDIA & CONTACT URLS
     - Email: Real email (syntraloop.contact@gmail.com)
     - LinkedIn: Ready for official link swap
     - FB, IG, Reddit, X: Placeholders clearly marked for easy swap
     ========================================================================== */
  const contactEmail = "syntraloop.contact@gmail.com";
  const whatsappNumber = "+94 00 000 0000"; // Placeholder

  const socialLinks = {
    linkedin: "https://www.linkedin.com/company/syntraloop", // Official link ready
    facebook: "https://facebook.com/syntraloop",             // Placeholder - replace when account created
    instagram: "https://instagram.com/syntraloop",           // Placeholder - replace when account created
    reddit: "https://reddit.com/r/syntraloop",               // Placeholder - replace when account created
    twitter: "https://x.com/syntraloop",                     // Placeholder - replace when account created
  };

  return (
    <footer className="footer-root">
      <div className="container">
        <div className="footer-top-grid">
          {/* Brand Col */}
          <div className="footer-brand-col">
            <div className="footer-logo-row">
              <div className="footer-logo-box">
                <img src="/syntralooplogo.jpeg" alt="SyntraLoop Logo" className="footer-logo-img" />
              </div>
              <span className="footer-brand-name">SyntraLoop</span>
            </div>

            <p className="footer-tagline">"From Ideas to Intelligent Solutions."</p>
            <p className="footer-desc">
              SyntraLoop transforms business ideas into modern websites, web applications, business systems, AI integrations, and future data-driven digital solutions.
            </p>

            <div className="footer-placeholders-box">
              <div className="placeholder-item">
                <Mail size={14} className="placeholder-icon" />
                <a href={`mailto:${contactEmail}`} className="email-link">{contactEmail}</a>
              </div>
              <div className="placeholder-item">
                <MessageSquare size={14} className="placeholder-icon" />
                <span>WhatsApp: {whatsappNumber}</span>
              </div>
            </div>
          </div>

          {/* Nav Col */}
          <div className="footer-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/work">Work Showcase</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Capabilities Col */}
          <div className="footer-col">
            <h4 className="footer-col-title">Capabilities</h4>
            <ul className="footer-links-static">
              <li>Web Development</li>
              <li>Business Systems</li>
              <li>AI Integrations</li>
              <li>Website Maintenance</li>
            </ul>
          </div>

          {/* Social Channels Col */}
          <div className="footer-col">
            <h4 className="footer-col-title">Connect & Socials</h4>
            <p className="footer-cta-text">
              Reach out directly via email or follow our social channels.
            </p>

            <div className="social-links-row">
              <a 
                href={socialLinks.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-btn" 
                aria-label="LinkedIn"
                title="SyntraLoop LinkedIn"
              >
                <Linkedin size={16} />
              </a>

              <a 
                href={socialLinks.facebook} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-btn" 
                aria-label="Facebook"
                title="SyntraLoop Facebook"
              >
                <Facebook size={16} />
              </a>

              <a 
                href={socialLinks.instagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-btn" 
                aria-label="Instagram"
                title="SyntraLoop Instagram"
              >
                <Instagram size={16} />
              </a>

              <a 
                href={socialLinks.reddit} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-btn" 
                aria-label="Reddit"
                title="SyntraLoop Reddit"
              >
                <Share2 size={16} />
              </a>

              <a 
                href={socialLinks.twitter} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-btn" 
                aria-label="X Twitter"
                title="SyntraLoop X (Twitter)"
              >
                <Twitter size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div className="copyright-text">
            © 2026 SyntraLoop. All rights reserved.
          </div>

          <div className="legal-links">
            <Link href="/privacy">Privacy Policy</Link>
            <span className="dot-divider">•</span>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer-root {
          background-color: var(--bg-secondary);
          border-top: 1px solid var(--border-color);
          padding-top: 4.5rem;
          padding-bottom: 2.5rem;
        }

        .footer-top-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          margin-bottom: 3.5rem;
        }

        @media (min-width: 768px) {
          .footer-top-grid {
            grid-template-columns: 1.6fr 1fr 1fr 1.2fr;
          }
        }

        .footer-logo-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
        }

        .footer-logo-box {
          width: 34px;
          height: 34px;
          border-radius: var(--radius-sm);
          overflow: hidden;
          background-color: var(--bg-primary);
          border: 1px solid var(--border-color);
        }

        .footer-logo-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .footer-brand-name {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 1.2rem;
          color: var(--text-navy);
        }

        .footer-tagline {
          font-family: var(--font-display);
          font-size: 0.925rem;
          font-weight: 600;
          color: var(--accent-blue);
          margin-bottom: 0.75rem;
        }

        .footer-desc {
          font-size: 0.875rem;
          color: var(--text-slate);
          line-height: 1.6;
          margin-bottom: 1.25rem;
        }

        .footer-placeholders-box {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          font-family: var(--font-mono);
          font-size: 0.775rem;
          color: var(--text-muted);
        }

        .placeholder-item {
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .placeholder-icon {
          color: var(--accent-blue);
        }

        .email-link {
          color: var(--text-navy);
          font-weight: 500;
        }

        .footer-col-title {
          font-size: 0.95rem;
          margin-bottom: 1.25rem;
          color: var(--text-navy);
        }

        .footer-links, .footer-links-static {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }

        .footer-links :global(a) {
          color: var(--text-slate);
          font-size: 0.875rem;
          transition: color 0.15s ease;
        }

        .footer-links :global(a:hover) {
          color: var(--text-navy);
        }

        .footer-links-static li {
          font-size: 0.875rem;
          color: var(--text-muted);
        }

        .footer-cta-text {
          font-size: 0.875rem;
          color: var(--text-slate);
          margin-bottom: 1rem;
        }

        .social-links-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.65rem;
        }

        .social-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          background-color: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          color: var(--text-slate);
          transition: all 0.15s ease;
        }

        .social-btn:hover {
          border-color: var(--accent-blue);
          color: var(--accent-blue);
          background-color: #EBF3FF;
        }

        .footer-bottom-bar {
          padding-top: 2rem;
          border-top: 1px solid var(--border-color);
          display: flex;
          flex-direction: column;
          gap: 1rem;
          align-items: center;
          justify-content: space-between;
        }

        @media (min-width: 640px) {
          .footer-bottom-bar {
            flex-direction: row;
          }
        }

        .copyright-text {
          font-size: 0.8125rem;
          color: var(--text-muted);
        }

        .legal-links {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .legal-links :global(a) {
          color: var(--text-muted);
          font-size: 0.8125rem;
          transition: color 0.15s ease;
        }

        .legal-links :global(a:hover) {
          color: var(--text-navy);
        }

        .dot-divider {
          color: var(--text-muted);
        }
      `}</style>
    </footer>
  );
}
