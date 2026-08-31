"use client";

import React, { useState, useEffect } from 'react';
import { getContactEmail, getWhatsAppNumber, getMailtoUrl, getWhatsAppUrl } from '@/utils/contactInfo';

/**
 * Renders an anti-scraping obfuscated email link or text.
 */
export function ObfuscatedEmail({ subject, className = "", showAsLink = true }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <span className={className}>loading contact...</span>;
  }

  const email = getContactEmail();
  const mailto = getMailtoUrl(subject);

  if (!showAsLink) {
    return <span className={className}>{email}</span>;
  }

  return (
    <a href={mailto} className={className}>
      {email}
    </a>
  );
}

/**
 * Renders an anti-scraping obfuscated WhatsApp link or text.
 */
export function ObfuscatedPhone({ prefilledText, className = "", showAsLink = true }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <span className={className}>loading phone...</span>;
  }

  const phone = getWhatsAppNumber();
  const waUrl = getWhatsAppUrl(prefilledText);

  if (!showAsLink) {
    return <span className={className}>{phone}</span>;
  }

  return (
    <a href={waUrl} target="_blank" rel="noopener noreferrer" className={className}>
      {phone}
    </a>
  );
}
