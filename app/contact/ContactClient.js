"use client";

import React, { useState, useRef } from 'react';
import PageHero from '@/components/PageHero';
import SectionHeader from '@/components/SectionHeader';
import ScrollReveal from '@/components/ScrollReveal';
import FAQAccordion from '@/components/FAQAccordion';
import { 
  Mail, 
  MessageSquare, 
  Clock, 
  Linkedin, 
  Facebook, 
  Instagram, 
  ExternalLink, 
  ArrowRight, 
  AlertCircle, 
  CheckCircle2,
  UploadCloud,
  Send,
  ShieldCheck,
  Zap,
  Globe,
  FileText,
  X,
  Paperclip
} from 'lucide-react';
import { getContactEmail, getWhatsAppNumber, getWhatsAppUrl, getMailtoUrl } from '@/utils/contactInfo';
import { trackEvent } from '@/utils/analytics';
import LoadingButton from '@/components/LoadingButton';

export default function ContactClient() {
  const contactEmail = getContactEmail();
  const whatsappNumber = getWhatsAppNumber();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    businessName: '',
    service: '',
    timeline: '',
    message: ''
  });

  const [attachedFile, setAttachedFile] = useState(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  
  const errorSummaryRef = useRef(null);
  const formCardRef = useRef(null);
  const fileInputRef = useRef(null);

  const contactChannels = [
    {
      title: "Direct Email",
      value: contactEmail,
      meta: "24-48h Response",
      icon: Mail,
      link: `mailto:${contactEmail}`,
      actionText: "Send Email"
    },
    {
      title: "WhatsApp Chat",
      value: whatsappNumber,
      meta: "Instant Response",
      icon: MessageSquare,
      link: getWhatsAppUrl(),
      actionText: "Chat on WhatsApp"
    },
    {
      title: "LinkedIn Official",
      value: "SyntraLoop Profile",
      meta: "Company Network",
      icon: Linkedin,
      link: "https://www.linkedin.com/company/syntraloop",
      actionText: "View Profile"
    },
    {
      title: "Global Availability",
      value: "Remote & Worldwide",
      meta: "UTC+5:30 Core Hours",
      icon: Globe,
      link: "#assessment-form",
      actionText: "Request Meeting"
    }
  ];

  const contactFaqs = [
    {
      question: "How quickly will you respond to my inquiry?",
      answer: "We review every project request and respond within 24 to 48 business hours with clarifying questions or an initial consultation invitation."
    },
    {
      question: "What information should I prepare before contacting?",
      answer: "A brief summary of your business, the problem you're trying to solve, your target audience, any existing websites/systems, and your approximate timeline or budget."
    },
    {
      question: "Do you sign Non-Disclosure Agreements (NDAs)?",
      answer: "Yes. We regularly sign mutual NDAs before technical discovery to ensure your business logic, proprietary datasets, and intellectual property remain strictly confidential."
    },
    {
      question: "Can we schedule a live introductory call?",
      answer: "Absolutely. Once we review your initial assessment request, we will provide a direct calendar link to schedule a 30-minute discovery video call."
    },
    {
      question: "How do you handle payments and milestone billing?",
      answer: "We work with transparent, milestone-based invoicing (typically split across discovery, core development, and final launch approval) so you always retain full visibility."
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const formatFileSize = (bytes) => {
    if (!bytes) return '0 KB';
    if (bytes < 1024 * 1024) {
      return (bytes / 1024).toFixed(1) + ' KB';
    }
    return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
  };

  const ALLOWED_EXTENSIONS = ['.pdf', '.doc', '.docx', '.png', '.jpg', '.jpeg', '.zip', '.txt'];
  const MAX_FILE_SIZE_BYTES = 10 * 1024 * 1024; // 10MB limit

  const processSelectedFile = (file) => {
    if (!file) return;

    // 1. File Size Validation (Max 10MB)
    if (file.size > MAX_FILE_SIZE_BYTES) {
      setFormErrors((prev) => ({
        ...prev,
        file: "Attachment exceeds the 10 MB limit. Please select a smaller file."
      }));
      setAttachedFile(null);
      if (fileInputRef.current) fileInputRef.current.value = '';
      return;
    }

    // 2. File Type / Extension Validation
    const fileNameLower = file.name.toLowerCase();
    const hasValidExtension = ALLOWED_EXTENSIONS.some(ext => fileNameLower.endsWith(ext));
    if (!hasValidExtension) {
      setFormErrors((prev) => ({
        ...prev,
        file: "Unsupported file type. Please attach a PDF, DOCX, PNG, JPG, or ZIP archive."
      }));
      setAttachedFile(null);
      if (fileInputRef.current) fileInputRef.current.value = '';
      return;
    }

    // Valid file
    setFormErrors((prev) => ({ ...prev, file: null }));
    setAttachedFile({
      name: file.name,
      size: formatFileSize(file.size),
      raw: file
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    processSelectedFile(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    const file = e.dataTransfer.files?.[0];
    processSelectedFile(file);
  };

  const handleRemoveFile = (e) => {
    e.stopPropagation();
    setAttachedFile(null);
    setFormErrors((prev) => ({ ...prev, file: null }));
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.firstName.trim()) {
      errors.firstName = "Please enter your first name.";
    }
    if (!formData.email.trim()) {
      errors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = "Please enter a valid email address.";
    }
    if (!formData.service) {
      errors.service = "Please select a required service.";
    }
    if (!formData.message.trim()) {
      errors.message = "Please describe your project or business goals.";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setSubmitStatus('error');
      if (errorSummaryRef.current) {
        errorSummaryRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    // Format assessment inquiry to engineering team
    const clientName = `${formData.firstName.trim()} ${formData.lastName.trim()}`.trim();
    const clientEmail = formData.email.trim();
    const company = formData.businessName.trim() || 'Individual / Startup';
    const selectedService = formData.service;
    const requestedTimeline = formData.timeline || 'Flexible';
    const projectDetails = formData.message.trim();
    const fileAttachmentInfo = attachedFile ? `${attachedFile.name} (${attachedFile.size})` : 'None attached';

    const subject = `[Project Assessment] ${selectedService} - ${clientName} (${company})`;
    const body = 
      `Hello SyntraLoop Engineering Team,\n\n` +
      `I am requesting a project assessment with the following details:\n\n` +
      `=======================================\n` +
      `CLIENT DETAILS\n` +
      `=======================================\n` +
      `Name: ${clientName}\n` +
      `Email: ${clientEmail}\n` +
      `Business / Organization: ${company}\n\n` +
      `=======================================\n` +
      `PROJECT REQUIREMENTS\n` +
      `=======================================\n` +
      `Requested Track: ${selectedService}\n` +
      `Target Timeline: ${requestedTimeline}\n` +
      `Attached Specification: ${fileAttachmentInfo}\n\n` +
      `Project Scope & Goals:\n${projectDetails}\n\n` +
      `---------------------------------------\n` +
      `Sent via SyntraLoop Assessment Request Form`;

    const mailtoUrl = getMailtoUrl(subject, body);
    trackEvent('submit_assessment_form', {
      service: selectedService,
      timeline: requestedTimeline,
      has_attachment: !!attachedFile,
    });
    window.location.href = mailtoUrl;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        businessName: '',
        service: '',
        timeline: '',
        message: ''
      });
      setAttachedFile(null);
      if (fileInputRef.current) fileInputRef.current.value = '';
      setFormErrors({});

      if (formCardRef.current) {
        formCardRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 800);
  };

  return (
    <div className="page-contact-root">
      {/* 1. CURVED DEEP-NAVY HERO SECTION */}
      <PageHero
        badge="Contact & Inquiry"
        title="Request a Digital"
        highlightText="Project Assessment"
        subtitle="Complete the form below to receive practical insights, technical feasibility feedback, and next steps within 24-48 hours."
      />

      {/* 2. REQUEST AN ASSESSMENT FORM SECTION */}
      <section id="assessment-form" className="section bg-primary pt-6">
        <div className="container">
          <ScrollReveal delay={0}>
            <SectionHeader
              badge="Let's Build"
              title="Request a Project Assessment"
              subtitle="Tell us about your requirements, workflow, and goals so we can plan an effective solution."
              centered={true}
            />
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div ref={formCardRef} className="assessment-form-card mt-8">
              {submitStatus === 'success' && (
                <div className="mb-6 p-5 bg-emerald-50 border border-emerald-300 rounded-2xl flex items-start gap-3.5 shadow-sm animate-fade-in-up">
                  <CheckCircle2 size={26} className="text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-emerald-900 text-lg">Project Assessment Request Sent!</h3>
                    <p className="text-sm text-emerald-700 mt-1 leading-relaxed">
                      Thank you for submitting your project requirements. Your assessment inquiry has been routed to <span className="font-bold text-blue-700">{contactEmail}</span>. Our engineering team will review your specifications and respond to your email within 24–48 business hours.
                    </p>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div ref={errorSummaryRef} className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3">
                  <AlertCircle size={22} className="text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-red-900">Please Complete Required Fields</h3>
                    <p className="text-sm text-red-700 mt-1">
                      Please check the highlighted fields below and provide your contact information.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate>
                <div className="assessment-form-row">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="e.g. Sarah"
                      className={`still-input ${formErrors.firstName ? 'border-red-500' : ''}`}
                      required
                    />
                    {formErrors.firstName && (
                      <p className="text-xs text-red-600 mt-1">{formErrors.firstName}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="e.g. Jenkins"
                      className="still-input"
                    />
                  </div>
                </div>

                <div className="assessment-form-row">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@company.com"
                      className={`still-input ${formErrors.email ? 'border-red-500' : ''}`}
                      required
                    />
                    {formErrors.email && (
                      <p className="text-xs text-red-600 mt-1">{formErrors.email}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleChange}
                      placeholder="e.g. Acme Corp"
                      className="still-input"
                    />
                  </div>
                </div>

                <div className="assessment-form-row">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Primary Service *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={`still-input ${formErrors.service ? 'border-red-500' : ''}`}
                      required
                    >
                      <option value="">Select a service category</option>
                      <option value="Web Development (Website / Web App)">Web Development (Website / Web App)</option>
                      <option value="Business Management System">Business Management System</option>
                      <option value="AI Integration & Automation">AI Integration & Automation</option>
                      <option value="Website Maintenance & Support">Website Maintenance & Support</option>
                      <option value="Architecture Consulting & Other">Architecture Consulting & Other</option>
                    </select>
                    {formErrors.service && (
                      <p className="text-xs text-red-600 mt-1">{formErrors.service}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Preferred Timeline
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="still-input"
                    >
                      <option value="">Select expected timeline</option>
                      <option value="Immediate (Within 2 Weeks)">Immediate (Within 2 Weeks)</option>
                      <option value="1 Month">1 Month</option>
                      <option value="2 - 3 Months">2 - 3 Months</option>
                      <option value="Flexible / Planning Phase">Flexible / Planning Phase</option>
                    </select>
                  </div>
                </div>

                <div className="mb-5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Project Goals & Requirements *
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about the features, target users, and what success looks like for this build..."
                    className={`still-input ${formErrors.message ? 'border-red-500' : ''}`}
                    required
                  />
                  {formErrors.message && (
                    <p className="text-xs text-red-600 mt-1">{formErrors.message}</p>
                  )}
                </div>

                {/* Hidden File Input */}
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  className="hidden"
                  accept=".pdf,.doc,.docx,.png,.jpg,.jpeg,.zip,.txt"
                  aria-label="Upload project specification file"
                />

                {/* File Upload Dropzone / Attached File Visual Card */}
                {attachedFile ? (
                  <div className="file-attached-card animate-fade-in-up">
                    <div className="file-attached-left">
                      <div className="file-attached-icon-box">
                        <FileText size={22} />
                      </div>
                      <div className="file-attached-meta">
                        <p className="file-attached-name" title={attachedFile.name}>
                          {attachedFile.name}
                        </p>
                        <p className="file-attached-size">
                          <CheckCircle2 size={13} />
                          <span>File Attached ({attachedFile.size})</span>
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={handleRemoveFile}
                      className="file-remove-btn"
                      title="Remove file"
                      aria-label="Remove attached file"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ) : (
                  <div 
                    onClick={() => fileInputRef.current?.click()}
                    onDragOver={(e) => { e.preventDefault(); setIsDragOver(true); }}
                    onDragLeave={() => setIsDragOver(false)}
                    onDrop={handleDrop}
                    className={`assessment-dropzone ${isDragOver ? 'is-dragover' : ''}`}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') fileInputRef.current?.click(); }}
                  >
                    <UploadCloud size={28} className="text-blue-600 mx-auto mb-1.5" />
                    <p className="text-sm font-semibold text-navy">Attach Project Brief or Specs (Optional)</p>
                    <p className="text-xs text-slate-500 mt-0.5">Click or drag & drop PDF, DOCX, PNG, JPG, or ZIP (Max 10MB)</p>
                  </div>
                )}

                {formErrors.file && (
                  <p className="text-xs text-red-600 mt-2 font-medium flex items-center gap-1">
                    <AlertCircle size={13} />
                    <span>{formErrors.file}</span>
                  </p>
                )}

                <LoadingButton 
                  type="submit" 
                  isLoading={isSubmitting} 
                  loadingText="Preparing Assessment..."
                  className="assessment-submit-btn w-full"
                >
                  <span>Submit Project Assessment</span>
                  <Send size={18} />
                </LoadingButton>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. DIRECT CHANNELS GRID (WHITE PATH CARDS) */}
      <section className="section bg-secondary border-t border-slate-200">
        <div className="container">
          <ScrollReveal delay={0}>
            <SectionHeader
              badge="Reach Out Directly"
              title="Official Communication Channels"
              subtitle="Prefer direct messaging or company channels? Contact our team anytime."
              centered={true}
            />
          </ScrollReveal>

          <div className="contact-channels-grid">
            {contactChannels.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <ScrollReveal key={idx} delay={100 + idx * 80}>
                  <div className="contact-channel-card">
                    <div className="contact-channel-top">
                      <div className="path-icon-box">
                        <IconComp size={22} />
                      </div>
                      <span className="path-card-kicker">Channel</span>
                      <h3 className="path-card-title">{item.title}</h3>
                      <span className="contact-val-text" title={item.value}>
                        {item.value}
                      </span>
                    </div>

                    <div className="contact-channel-bottom">
                      <div className="path-meta-strip">
                        <div className="meta-item">
                          <span className="meta-label">Status</span>
                          <span className="meta-value">{item.meta}</span>
                        </div>
                      </div>

                      <a 
                        href={item.link} 
                        target={item.link.startsWith('http') ? '_blank' : undefined}
                        rel={item.link.startsWith('http') ? "noopener noreferrer" : undefined}
                        className="contact-channel-action"
                      >
                        <span>Connect</span>
                        <ExternalLink size={13} />
                      </a>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. CONTACT FAQ & STILL HAVE QUESTIONS */}
      <section className="section bg-primary">
        <div className="container">
          <ScrollReveal delay={0}>
            <SectionHeader
              badge="FAQ"
              title="Frequently Asked Questions"
              subtitle="Common questions about proposals, confidentiality, and timelines."
              centered={true}
            />
          </ScrollReveal>

          <div className="max-w-3xl mx-auto mt-8">
            <FAQAccordion items={contactFaqs} />
          </div>
        </div>
      </section>
    </div>
  );
}
