"use client";

import React from 'react';
import Link from 'next/link';
import { Mail, MessageSquare, Linkedin, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  const contactEmail = "syntraloop.contact@gmail.com";
  const whatsappNumber = "+94 00 000 0000"; // Placeholder number - easy to replace

  const socialLinks = {
    linkedin: "https://www.linkedin.com/company/syntraloop",
    facebook: "https://facebook.com/syntraloop",
    instagram: "https://instagram.com/syntraloop",
    twitter: "https://x.com/syntraloop",
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

            <p className="footer-tagline">&ldquo;From Ideas to Intelligent Solutions.&rdquo;</p>
            <p className="footer-desc">
              SyntraLoop builds modern digital solutions for growing businesses.
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

          {/* Navigation Col */}
          <div className="footer-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/work">Work</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Capabilities Col */}
          <div className="footer-col">
            <h4 className="footer-col-title">Capabilities</h4>
            <ul className="footer-links-static">
              <li>Web Development</li>
              <li>Business Systems</li>
              <li>AI Integration</li>
              <li>Website Maintenance</li>
            </ul>
          </div>

          {/* Connect & Socials Col */}
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
                aria-label="SyntraLoop LinkedIn"
                title="SyntraLoop LinkedIn"
              >
                <Linkedin size={16} />
              </a>

              <a 
                href={socialLinks.facebook} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-btn" 
                aria-label="SyntraLoop Facebook"
                title="SyntraLoop Facebook"
              >
                <Facebook size={16} />
              </a>

              <a 
                href={socialLinks.instagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-btn" 
                aria-label="SyntraLoop Instagram"
                title="SyntraLoop Instagram"
              >
                <Instagram size={16} />
              </a>

              <a 
                href={socialLinks.twitter} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-btn" 
                aria-label="SyntraLoop X Twitter"
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
          transition: color 0.2s ease;
        }

        .email-link:hover {
          color: var(--accent-blue);
        }

        .footer-col-title {
          font-size: 0.95rem;
          margin-bottom: 1.25rem;
          color: var(--text-navy);
          font-weight: 700;
        }

        .footer-links,
        .footer-links-static {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          font-size: 0.875rem;
        }

        .footer-links a {
          color: var(--text-slate);
          transition: color 0.2s ease, transform 0.2s ease;
          display: inline-block;
        }

        .footer-links a:hover {
          color: var(--accent-blue);
          transform: translateX(2px);
        }

        .footer-links-static li {
          color: var(--text-slate);
        }

        .footer-cta-text {
          font-size: 0.875rem;
          color: var(--text-slate);
          line-height: 1.5;
          margin-bottom: 1.25rem;
        }

        .social-links-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .social-btn {
          width: 36px;
          height: 36px;
          border-radius: var(--radius-md);
          background-color: var(--bg-primary);
          border: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-slate);
          transition: color 0.2s ease, border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
        }

        .social-btn:hover {
          color: var(--accent-blue);
          border-color: var(--accent-blue);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 87, 216, 0.12);
        }

        .footer-bottom-bar {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding-top: 2rem;
          border-top: 1px solid var(--border-color);
          font-size: 0.825rem;
          color: var(--text-muted);
        }

        @media (min-width: 640px) {
          .footer-bottom-bar {
            flex-direction: row;
          }
        }

        .legal-links {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .legal-links a {
          color: var(--text-muted);
          transition: color 0.2s ease;
        }

        .legal-links a:hover {
          color: var(--accent-blue);
        }

        .dot-divider {
          color: var(--border-color);
        }
      `}</style>
    </footer>
  );
}
