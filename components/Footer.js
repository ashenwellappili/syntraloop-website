"use client";

import React from 'react';
import Link from 'next/link';
import { Mail, MessageSquare, Linkedin, Facebook, Instagram } from 'lucide-react';

const XIcon = ({ size = 16, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

import { ObfuscatedEmail, ObfuscatedPhone } from '@/components/ObfuscatedContact';

export default function Footer() {
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
                <ObfuscatedEmail className="email-link" />
              </div>
              <div className="placeholder-item">
                <MessageSquare size={14} className="placeholder-icon" />
                <span className="email-link flex items-center gap-1">
                  WhatsApp: <ObfuscatedPhone className="text-current hover:underline" />
                </span>
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
                aria-label="SyntraLoop on X"
                title="SyntraLoop on X"
              >
                <XIcon size={15} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div className="copyright-text">
            &copy; {new Date().getFullYear()} SyntraLoop. All rights reserved.
          </div>

          <div className="footer-legal-links">
            <Link href="/privacy" className="legal-link">Privacy Policy</Link>
            <span className="legal-sep">&bull;</span>
            <Link href="/terms" className="legal-link">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
