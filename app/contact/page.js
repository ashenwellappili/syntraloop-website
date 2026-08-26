"use client";

import React from 'react';
import SectionHeader from '@/components/SectionHeader';
import { Mail, MessageSquare, Linkedin, Facebook, Instagram, Share2, Twitter, ExternalLink, Clock } from 'lucide-react';

export default function ContactPage() {
  /* ==========================================================================
     SYNTRALOOP CONTACT & SOCIAL MEDIA CHANNELS
     - Email: syntraloop.contact@gmail.com
     - WhatsApp: +94 00 000 0000 (Placeholder)
     - LinkedIn: Ready for official account link
     - Facebook, Instagram, Reddit, X: Placeholders marked for easy swap
     ========================================================================== */
  const contactEmail = "syntraloop.contact@gmail.com";
  const whatsappNumber = "+94 00 000 0000";

  const socialChannels = [
    {
      platform: "LinkedIn",
      handle: "SyntraLoop Official",
      url: "https://www.linkedin.com/company/syntraloop",
      icon: Linkedin,
      note: "Official Company Page"
    },
    {
      platform: "Facebook",
      handle: "@SyntraLoop",
      url: "https://facebook.com/syntraloop",
      icon: Facebook,
      note: "Social Channel (Placeholder)"
    },
    {
      platform: "Instagram",
      handle: "@SyntraLoop",
      url: "https://instagram.com/syntraloop",
      icon: Instagram,
      note: "Social Channel (Placeholder)"
    },
    {
      platform: "Reddit",
      handle: "r/syntraloop",
      url: "https://reddit.com/r/syntraloop",
      icon: Share2,
      note: "Community Channel (Placeholder)"
    },
    {
      platform: "X (Twitter)",
      handle: "@SyntraLoop",
      url: "https://x.com/syntraloop",
      icon: Twitter,
      note: "Updates Channel (Placeholder)"
    }
  ];

  return (
    <div className="page-contact section">
      <div className="container">
        <SectionHeader
          title="Contact Us"
          subtitle="Reach out directly via official email, WhatsApp, or connect with us on our social media platforms."
        />

        <div className="contact-page-layout">
          {/* Main Direct Channels Grid */}
          <div className="direct-channels-grid">
            <div className="studio-card contact-channel-card">
              <div className="channel-icon-box">
                <Mail size={24} />
              </div>
              <div className="channel-body">
                <span className="channel-label">Official Email</span>
                <a href={`mailto:${contactEmail}`} className="channel-value email-value">
                  {contactEmail}
                </a>
                <p className="channel-note">Primary channel for project enquiries & proposals.</p>
              </div>
            </div>

            <div className="studio-card contact-channel-card">
              <div className="channel-icon-box">
                <MessageSquare size={24} />
              </div>
              <div className="channel-body">
                <span className="channel-label">WhatsApp Channel</span>
                <div className="channel-value">{whatsappNumber}</div>
                <p className="channel-note">Direct messaging channel for project consultations.</p>
              </div>
            </div>

            <div className="studio-card contact-channel-card">
              <div className="channel-icon-box">
                <Clock size={24} />
              </div>
              <div className="channel-body">
                <span className="channel-label">Response Commitment</span>
                <div className="channel-value">1 Business Day</div>
                <p className="channel-note">We usually respond to all email enquiries within 24 hours.</p>
              </div>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="social-section-margin">
            <h2 className="social-section-heading">Connect On Social Media</h2>
            <p className="social-section-sub">Follow SyntraLoop across our official social channels:</p>

            <div className="social-cards-grid">
              {socialChannels.map((ch, idx) => (
                <a
                  key={idx}
                  href={ch.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="studio-card social-channel-card"
                >
                  <div className="social-card-header">
                    <ch.icon size={22} className="social-card-icon" />
                    <ExternalLink size={16} className="external-link-icon" />
                  </div>
                  <h3 className="social-platform-name">{ch.platform}</h3>
                  <p className="social-handle">{ch.handle}</p>
                  <span className="social-note-badge">{ch.note}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-page-layout {
          max-width: 1000px;
          margin: 0 auto;
        }

        .direct-channels-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          margin-bottom: 4rem;
        }

        @media (min-width: 768px) {
          .direct-channels-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .contact-channel-card {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .channel-icon-box {
          width: 48px;
          height: 48px;
          border-radius: var(--radius-md);
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-blue);
          margin-bottom: 1.25rem;
        }

        .channel-label {
          font-family: var(--font-mono);
          font-size: 0.775rem;
          color: var(--text-muted);
          display: block;
          margin-bottom: 0.25rem;
        }

        .channel-value {
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-navy);
          margin-bottom: 0.5rem;
        }

        .email-value {
          color: var(--accent-blue);
          text-decoration: underline;
          white-space: nowrap;
          font-size: 0.875rem;
          display: block;
        }

        @media (min-width: 1100px) {
          .email-value {
            font-size: 0.95rem;
          }
        }

        .channel-note {
          font-size: 0.85rem;
          color: var(--text-slate);
          line-height: 1.5;
        }

        .social-section-margin {
          margin-top: 2rem;
        }

        .social-section-heading {
          font-size: 1.6rem;
          margin-bottom: 0.35rem;
          color: var(--text-navy);
        }

        .social-section-sub {
          font-size: 0.95rem;
          color: var(--text-slate);
          margin-bottom: 2rem;
        }

        .social-cards-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }

        @media (min-width: 640px) {
          .social-cards-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 992px) {
          .social-cards-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .social-channel-card {
          text-decoration: none;
          display: flex;
          flex-direction: column;
          transition: all 0.2s ease;
        }

        .social-channel-card:hover {
          border-color: var(--accent-blue);
          transform: translateY(-2px);
        }

        .social-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
        }

        .social-card-icon {
          color: var(--accent-blue);
        }

        .external-link-icon {
          color: var(--text-muted);
        }

        .social-platform-name {
          font-size: 1.15rem;
          margin-bottom: 0.2rem;
          color: var(--text-navy);
        }

        .social-handle {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          color: var(--text-slate);
          margin-bottom: 1rem;
        }

        .social-note-badge {
          font-size: 0.75rem;
          color: var(--text-muted);
          margin-top: auto;
        }
      `}</style>
    </div>
  );
}
