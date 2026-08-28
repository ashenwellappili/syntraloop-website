"use client";

import React, { useState, useRef } from 'react';
import SectionHeader from '@/components/SectionHeader';
import ScrollReveal from '@/components/ScrollReveal';
import { 
  Mail, 
  MessageSquare, 
  Clock, 
  Linkedin, 
  Facebook, 
  Instagram, 
  Twitter, 
  ExternalLink, 
  ArrowRight, 
  AlertCircle, 
  CheckCircle2 
} from 'lucide-react';

export default function ContactClient() {
  const contactEmail = "syntraloop.contact@gmail.com";
  const whatsappNumber = "+94 00 000 0000";

  // Social Channels - Exactly 4 platforms (LinkedIn, Facebook, Instagram, X/Twitter)
  const socialChannels = [
    {
      platform: "LinkedIn",
      handle: "@SyntraLoop",
      url: "https://www.linkedin.com/company/syntraloop",
      icon: Linkedin,
      status: "Official Company Page",
      isActive: true
    },
    {
      platform: "Facebook",
      handle: "@SyntraLoop",
      url: "#",
      icon: Facebook,
      status: "Social Channel (Placeholder)",
      isActive: false
    },
    {
      platform: "Instagram",
      handle: "@SyntraLoop",
      url: "#",
      icon: Instagram,
      status: "Social Channel (Placeholder)",
      isActive: false
    },
    {
      platform: "X (Twitter)",
      handle: "@SyntraLoop",
      url: "#",
      icon: Twitter,
      status: "Social Channel (Placeholder)",
      isActive: false
    }
  ];

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessName: '',
    service: '',
    description: '',
    timeline: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const errorSummaryRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = "Please enter your name.";
    }

    if (!formData.email.trim()) {
      errors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = "Please enter a valid email address.";
    }

    if (!formData.service) {
      errors.service = "Please select a required service.";
    }

    if (!formData.description.trim()) {
      errors.description = "Please describe your project or business goals.";
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus(null);

    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setSubmitStatus('validation-error');
      setTimeout(() => {
        if (errorSummaryRef.current) {
          errorSummaryRef.current.focus();
        }
      }, 50);
      return;
    }

    setFormErrors({});
    setIsSubmitting(true);

    try {
      // Simulate secure submission timeout
      await new Promise((resolve) => setTimeout(resolve, 800));
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        businessName: '',
        service: '',
        description: '',
        timeline: ''
      });
    } catch (err) {
      setIsSubmitting(false);
      setSubmitStatus('error');
    }
  };

  return (
    <div className="contact-page-wrapper section relative overflow-hidden">
      {/* Low-Contrast Diagonal Grid Background & Floating Corner Glows */}
      <div className="services-grid-bg" aria-hidden="true" />
      <div className="services-corner-glow-left" aria-hidden="true" />
      <div className="services-corner-glow-right" aria-hidden="true" />

      <div className="container relative z-10">
        {/* SECTION 1 — PAGE HEADER */}
        <section className="contact-hero-section">
          <div className="contact-hero-content text-center">
            <h1 className="contact-title animate-fade-in-up delay-1">
              Contact Us
            </h1>
            <p className="contact-subtext animate-fade-in-up delay-2">
              Reach out directly via official email, WhatsApp, or connect with us on our social media platforms.
            </p>
          </div>
        </section>

        {/* SECTION 2 — CONTACT INFORMATION CARDS */}
        <section className="contact-info-section">
          <div className="info-cards-grid">
            {/* Card 1: Official Email */}
            <ScrollReveal delay={100}>
              <div className="studio-card contact-info-card">
                <div className="info-icon-box">
                  <Mail size={24} />
                </div>
                <div className="info-card-content">
                  <span className="info-card-label">Official Email</span>
                  <a 
                    href={`mailto:${contactEmail}`} 
                    className="info-card-link"
                    title={`Email ${contactEmail}`}
                  >
                    {contactEmail}
                  </a>
                  <p className="info-card-desc">
                    Primary channel for project enquiries and proposals.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 2: WhatsApp Channel */}
            <ScrollReveal delay={180}>
              <div className="studio-card contact-info-card">
                <div className="info-icon-box">
                  <MessageSquare size={24} />
                </div>
                <div className="info-card-content">
                  <div className="info-label-row">
                    <span className="info-card-label">WhatsApp Channel</span>
                    <span className="placeholder-badge">Placeholder</span>
                  </div>
                  <div className="info-card-value-inactive">{whatsappNumber}</div>
                  <p className="info-card-desc">
                    Direct messaging channel for project consultations.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 3: Response Commitment */}
            <ScrollReveal delay={260}>
              <div className="studio-card contact-info-card">
                <div className="info-icon-box">
                  <Clock size={24} />
                </div>
                <div className="info-card-content">
                  <span className="info-card-label">Response Commitment</span>
                  <div className="info-card-value">1 Business Day</div>
                  <p className="info-card-desc">
                    We aim to respond to email enquiries within one business day.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* SECTION 3 — CONNECT ON SOCIAL MEDIA */}
        <section className="social-connect-section">
          <ScrollReveal delay={0}>
            <div className="social-section-header">
              <h2 className="social-heading">Connect On Social Media</h2>
              <p className="social-subtext">Follow SyntraLoop across our official social channels.</p>
            </div>
          </ScrollReveal>

          <div className="social-cards-grid">
            {socialChannels.map((ch, idx) => {
              const IconComp = ch.icon;

              if (ch.isActive) {
                return (
                  <ScrollReveal key={idx} delay={100 + idx * 80}>
                    <a
                      href={ch.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="studio-card social-card social-card-active"
                    >
                      <div className="social-card-top">
                        <IconComp size={22} className="social-icon" />
                        <ExternalLink size={16} className="ext-link-icon" />
                      </div>
                      <h3 className="social-name">{ch.platform}</h3>
                      <span className="social-handle">{ch.handle}</span>
                      <span className="social-status-active">{ch.status}</span>
                    </a>
                  </ScrollReveal>
                );
              }

              return (
                <ScrollReveal key={idx} delay={100 + idx * 80}>
                  <div className="studio-card social-card social-card-placeholder">
                    <div className="social-card-top">
                      <IconComp size={22} className="social-icon muted" />
                    </div>
                    <h3 className="social-name muted">{ch.platform}</h3>
                    <span className="social-handle muted">{ch.handle}</span>
                    <span className="social-status-placeholder">{ch.status}</span>
                    <span className="tooltip-hint">Link will be added when available.</span>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </section>

        {/* SECTION 4 — CONTACT / ENQUIRY FORM */}
        <section className="form-section">
          <ScrollReveal delay={100}>
            <div className="studio-card form-card-container">
              <div className="form-header text-center">
                <h2 className="form-heading">Start a Project</h2>
                <p className="form-subtext">
                  Tell us a little about your project, and we’ll review your enquiry and get back to you.
                </p>
                <p className="required-fields-note">
                  Fields marked <span className="req-asterisk">* Required</span> must be completed.
                </p>
              </div>

              {/* Status Alert Messages */}
              {submitStatus === 'validation-error' && (
                <div 
                  ref={errorSummaryRef}
                  tabIndex="-1"
                  className="alert-box error-summary-box"
                  role="alert"
                  aria-live="assertive"
                >
                  <AlertCircle size={20} className="alert-icon" />
                  <div>
                    <h4 className="alert-title">Please correct the following errors:</h4>
                    <ul className="error-list">
                      {Object.values(formErrors).map((err, i) => (
                        <li key={i}>{err}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {submitStatus === 'success' && (
                <div 
                  className="alert-box success-box" 
                  role="status" 
                  aria-live="polite"
                >
                  <CheckCircle2 size={20} className="alert-icon" />
                  <p className="alert-text">
                    We have received your enquiry. We usually respond within one business day.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div 
                  className="alert-box error-box" 
                  role="alert" 
                  aria-live="assertive"
                >
                  <AlertCircle size={20} className="alert-icon" />
                  <p className="alert-text">
                    We could not send your enquiry right now. Please try again or email us directly at{' '}
                    <a href={`mailto:${contactEmail}`} className="alert-email-link">{contactEmail}</a>.
                  </p>
                </div>
              )}

              {/* Enquiry Form */}
              <form onSubmit={handleSubmit} className="enquiry-form" noValidate>
                <div className="form-grid">
                  {/* Field 1: Name */}
                  <div className="form-group">
                    <label htmlFor="input-name" className="form-label">
                      Name <span className="req-asterisk" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="input-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      aria-required="true"
                      aria-invalid={formErrors.name ? "true" : "false"}
                      aria-describedby={formErrors.name ? "err-name" : undefined}
                      className={`form-input ${formErrors.name ? 'input-error' : ''}`}
                      placeholder="Your full name"
                    />
                    {formErrors.name && (
                      <span id="err-name" className="field-error-text">{formErrors.name}</span>
                    )}
                  </div>

                  {/* Field 2: Email */}
                  <div className="form-group">
                    <label htmlFor="input-email" className="form-label">
                      Email Address <span className="req-asterisk" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="input-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      aria-required="true"
                      aria-invalid={formErrors.email ? "true" : "false"}
                      aria-describedby={formErrors.email ? "err-email" : undefined}
                      className={`form-input ${formErrors.email ? 'input-error' : ''}`}
                      placeholder="name@company.com"
                    />
                    {formErrors.email && (
                      <span id="err-email" className="field-error-text">{formErrors.email}</span>
                    )}
                  </div>

                  {/* Field 3: Business Name (Optional) */}
                  <div className="form-group">
                    <label htmlFor="input-business" className="form-label">
                      Business Name <span className="opt-label">(Optional)</span>
                    </label>
                    <input
                      id="input-business"
                      type="text"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="Company or startup name"
                    />
                  </div>

                  {/* Field 4: Required Service */}
                  <div className="form-group">
                    <label htmlFor="input-service" className="form-label">
                      Required Service <span className="req-asterisk" aria-hidden="true">*</span>
                    </label>
                    <select
                      id="input-service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      aria-required="true"
                      aria-invalid={formErrors.service ? "true" : "false"}
                      aria-describedby={formErrors.service ? "err-service" : undefined}
                      className={`form-select ${formErrors.service ? 'input-error' : ''}`}
                    >
                      <option value="">Select a service...</option>
                      <option value="Web Development">Web Development</option>
                      <option value="Business Systems">Business Systems</option>
                      <option value="AI Integrations">AI Integrations</option>
                      <option value="Website Maintenance">Website Maintenance</option>
                    </select>
                    {formErrors.service && (
                      <span id="err-service" className="field-error-text">{formErrors.service}</span>
                    )}
                  </div>

                  {/* Field 5: Project Description */}
                  <div className="form-group full-width">
                    <label htmlFor="input-description" className="form-label">
                      Project Description <span className="req-asterisk" aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="input-description"
                      name="description"
                      rows={5}
                      value={formData.description}
                      onChange={handleChange}
                      required
                      aria-required="true"
                      aria-invalid={formErrors.description ? "true" : "false"}
                      aria-describedby={formErrors.description ? "err-desc" : undefined}
                      className={`form-textarea ${formErrors.description ? 'input-error' : ''}`}
                      placeholder="Tell us about your goals, required features, or business challenge."
                    />
                    {formErrors.description && (
                      <span id="err-desc" className="field-error-text">{formErrors.description}</span>
                    )}
                  </div>

                  {/* Field 6: Expected Timeline (Optional) */}
                  <div className="form-group full-width">
                    <label htmlFor="input-timeline" className="form-label">
                      Expected Timeline <span className="opt-label">(Optional)</span>
                    </label>
                    <input
                      id="input-timeline"
                      type="text"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="For example: within one month, flexible, or not sure yet."
                    />
                  </div>
                </div>

                {/* Submit Action */}
                <div className="form-submit-row">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary btn-lg submit-btn"
                  >
                    <span>{isSubmitting ? "Sending..." : "Send Enquiry"}</span>
                    <ArrowRight size={18} className="btn-arrow" />
                  </button>
                </div>
              </form>

              {/* SECTION 5 — OPTIONAL CONTACT GUIDANCE */}
              <div className="contact-guidance-box">
                <p className="guidance-text">
                  Not sure where to begin? Just tell us what you are trying to build or improve. We can help clarify the next step.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </section>
      </div>

      <style jsx>{`
        .contact-page-wrapper {
          position: relative;
          padding-top: 5rem;
          padding-bottom: 5rem;
        }

        .contact-hero-section {
          margin-bottom: 3.5rem;
        }

        .contact-hero-content {
          max-width: 820px;
          margin: 0 auto;
        }

        .contact-title {
          font-size: 2.8rem;
          line-height: 1.15;
          margin-bottom: 1.25rem;
          color: var(--text-navy);
          letter-spacing: -0.03em;
        }

        @media (min-width: 768px) {
          .contact-title {
            font-size: 3.8rem;
          }
        }

        .contact-subtext {
          font-size: 1.18rem;
          color: var(--text-slate);
          line-height: 1.7;
          max-width: 720px;
          margin: 0 auto;
        }

        .contact-info-section {
          margin-bottom: 4.5rem;
        }

        .info-cards-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }

        @media (min-width: 640px) {
          .info-cards-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .info-cards-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .contact-info-card {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          height: 100%;
          padding: 2.25rem 1.75rem;
          background-color: #FFFFFF;
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
        }

        .contact-info-card:hover {
          transform: translateY(-3px);
          border-color: #0057D8;
          box-shadow: 0 8px 24px rgba(0, 87, 216, 0.08);
        }

        .info-icon-box {
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

        .info-card-content {
          text-align: left;
          width: 100%;
        }

        .info-label-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.25rem;
        }

        .info-card-label {
          font-family: var(--font-mono);
          font-size: 0.775rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.04em;
          display: block;
          margin-bottom: 0.25rem;
        }

        .placeholder-badge {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-color);
          color: var(--text-muted);
          padding: 0.15rem 0.45rem;
          border-radius: 9999px;
        }

        .info-card-link {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--accent-blue);
          text-decoration: underline;
          display: inline-block;
          margin-bottom: 0.5rem;
          word-break: break-all;
        }

        .info-card-value {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--text-navy);
          margin-bottom: 0.5rem;
        }

        .info-card-value-inactive {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--text-slate);
          margin-bottom: 0.5rem;
        }

        .info-card-desc {
          font-size: 0.8875rem;
          color: var(--text-slate);
          line-height: 1.55;
        }

        .social-connect-section {
          margin-bottom: 4.5rem;
        }

        .social-section-header {
          text-align: center;
          margin-bottom: 2.25rem;
        }

        .social-heading {
          font-size: 2rem;
          margin-bottom: 0.5rem;
          color: var(--text-navy);
        }

        .social-subtext {
          font-size: 1.025rem;
          color: var(--text-slate);
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

        @media (min-width: 1024px) {
          .social-cards-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .social-card {
          display: flex;
          flex-direction: column;
          padding: 1.75rem 1.5rem;
          background-color: #FFFFFF;
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          text-align: left;
        }

        .social-card-active {
          text-decoration: none;
          transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
        }

        .social-card-active:hover {
          transform: translateY(-3px);
          border-color: #0057D8;
          box-shadow: 0 6px 20px rgba(0, 87, 216, 0.08);
        }

        .social-card-placeholder {
          opacity: 0.85;
          background-color: var(--bg-secondary);
          border-style: dashed;
        }

        .social-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.25rem;
        }

        .social-icon {
          color: var(--accent-blue);
        }

        .social-icon.muted {
          color: var(--text-muted);
        }

        .ext-link-icon {
          color: var(--text-muted);
        }

        .social-name {
          font-size: 1.15rem;
          margin-bottom: 0.25rem;
          color: var(--text-navy);
          font-weight: 700;
        }

        .social-name.muted {
          color: var(--text-slate);
        }

        .social-handle {
          font-family: var(--font-mono);
          font-size: 0.8125rem;
          color: var(--text-slate);
          margin-bottom: 1rem;
          display: block;
        }

        .social-handle.muted {
          color: var(--text-muted);
        }

        .social-status-active {
          font-size: 0.775rem;
          font-weight: 600;
          color: var(--accent-blue);
          margin-top: auto;
        }

        .social-status-placeholder {
          font-size: 0.75rem;
          color: var(--text-muted);
          margin-top: auto;
          margin-bottom: 0.25rem;
        }

        .tooltip-hint {
          font-size: 0.725rem;
          color: var(--text-muted);
          font-style: italic;
        }

        .form-section {
          max-width: 820px;
          margin: 0 auto;
        }

        .form-card-container {
          padding: 3.5rem 2.5rem;
          background-color: #FFFFFF;
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
        }

        .form-header {
          margin-bottom: 2.5rem;
        }

        .form-heading {
          font-size: 2.2rem;
          margin-bottom: 0.6rem;
          color: var(--text-navy);
        }

        .form-subtext {
          font-size: 1.05rem;
          color: var(--text-slate);
          margin-bottom: 1rem;
        }

        .required-fields-note {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .req-asterisk {
          color: #DC2626;
          font-weight: 700;
        }

        .opt-label {
          font-size: 0.8rem;
          color: var(--text-muted);
          font-weight: 400;
        }

        .alert-box {
          display: flex;
          align-items: flex-start;
          gap: 0.85rem;
          padding: 1.25rem 1.5rem;
          border-radius: var(--radius-md);
          margin-bottom: 2rem;
          text-align: left;
        }

        .error-summary-box,
        .error-box {
          background-color: #FEF2F2;
          border: 1px solid #FCA5A5;
          color: #991B1B;
        }

        .success-box {
          background-color: #F0FDF4;
          border: 1px solid #86EFAC;
          color: #166534;
        }

        .alert-icon {
          flex-shrink: 0;
          margin-top: 2px;
        }

        .alert-title {
          font-size: 0.95rem;
          font-weight: 700;
          margin-bottom: 0.35rem;
        }

        .error-list {
          font-size: 0.875rem;
          padding-left: 1.25rem;
          line-height: 1.5;
        }

        .alert-text {
          font-size: 0.95rem;
          line-height: 1.5;
        }

        .alert-email-link {
          color: #991B1B;
          text-decoration: underline;
          font-weight: 600;
        }

        .enquiry-form {
          text-align: left;
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        @media (min-width: 640px) {
          .form-grid {
            grid-template-columns: 1fr 1fr;
          }
          .full-width {
            grid-column: span 2;
          }
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-label {
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--text-navy);
          margin-bottom: 0.5rem;
        }

        .form-input,
        .form-select,
        .form-textarea {
          width: 100%;
          padding: 0.85rem 1rem;
          font-family: var(--font-body);
          font-size: 0.95rem;
          color: var(--text-navy);
          background-color: #FFFFFF;
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          outline: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .form-input:focus,
        .form-select:focus,
        .form-textarea:focus {
          border-color: #0057D8;
          box-shadow: 0 0 0 3px rgba(0, 87, 216, 0.15);
        }

        .input-error {
          border-color: #DC2626 !important;
          background-color: #FFF5F5;
        }

        .field-error-text {
          font-size: 0.8rem;
          color: #DC2626;
          margin-top: 0.35rem;
          font-weight: 600;
        }

        .form-submit-row {
          text-align: center;
          margin-top: 1rem;
        }

        .submit-btn {
          width: 100%;
          padding: 1rem 2.5rem;
          font-size: 1.05rem;
        }

        @media (min-width: 640px) {
          .submit-btn {
            width: auto;
          }
        }

        .btn-arrow {
          transition: transform 0.25s ease;
        }

        .submit-btn:hover .btn-arrow {
          transform: translateX(4px);
        }

        .contact-guidance-box {
          margin-top: 2.5rem;
          padding-top: 2rem;
          border-top: 1px solid var(--border-color);
          text-align: center;
        }

        .guidance-text {
          font-size: 0.925rem;
          color: var(--text-slate);
          line-height: 1.6;
          max-width: 620px;
          margin: 0 auto;
        }

        @media (prefers-reduced-motion: reduce) {
          .contact-info-card:hover,
          .social-card-active:hover {
            transform: none !important;
          }
          .submit-btn:hover .btn-arrow {
            transform: none !important;
          }
        }
      `}</style>
    </div>
  );
}
