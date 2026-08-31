/**
 * Utility functions for contact information with anti-scraping obfuscation.
 * This prevents simple web crawlers and scraper bots from harvesting
 * plaintext emails and phone numbers from raw static HTML.
 */

// Encoded contact components
const EMAIL_PARTS = ['syntraloop', 'contact', 'gmail.com'];
const PHONE_PARTS = ['+94', '74', '226', '6041'];
const PHONE_RAW_PARTS = ['94742266041'];

/**
 * Returns the primary company contact email.
 * @returns {string}
 */
export function getContactEmail() {
  return `${EMAIL_PARTS[0]}.${EMAIL_PARTS[1]}@${EMAIL_PARTS[2]}`;
}

/**
 * Returns formatted WhatsApp display number.
 * @returns {string}
 */
export function getWhatsAppNumber() {
  return `${PHONE_PARTS[0]} ${PHONE_PARTS[1]} ${PHONE_PARTS[2]} ${PHONE_PARTS[3]}`;
}

/**
 * Returns numeric phone number for WhatsApp links.
 * @returns {string}
 */
export function getWhatsAppRaw() {
  return PHONE_RAW_PARTS[0];
}

/**
 * Constructs a secure WhatsApp chat URL.
 * @param {string} [prefilledText]
 * @returns {string}
 */
export function getWhatsAppUrl(prefilledText = '') {
  const base = `https://wa.me/${getWhatsAppRaw()}`;
  if (!prefilledText) return base;
  return `${base}?text=${encodeURIComponent(prefilledText)}`;
}

/**
 * Constructs a mailto link with encoded subject and body.
 * @param {string} [subject]
 * @param {string} [body]
 * @returns {string}
 */
export function getMailtoUrl(subject = '', body = '') {
  const email = getContactEmail();
  const params = [];
  if (subject) params.push(`subject=${encodeURIComponent(subject)}`);
  if (body) params.push(`body=${encodeURIComponent(body)}`);
  return `mailto:${email}${params.length ? `?${params.join('&')}` : ''}`;
}
