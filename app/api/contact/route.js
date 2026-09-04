import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';

export const runtime = 'nodejs';

/**
 * Escapes HTML characters to prevent HTML injection in email templates.
 */
function escapeHtml(text) {
  if (!text) return '';
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Normalizes service titles or enum keys to the required enum values.
 */
const SERVICE_LOOKUP = new Map([
  ['web development (website / web app)', 'web'],
  ['web development', 'web'],
  ['web', 'web'],
  ['business management system', 'dashboard'],
  ['dashboard', 'dashboard'],
  ['ai integration & automation', 'ai-bot'],
  ['ai-bot', 'ai-bot'],
  ['ai', 'ai-bot'],
  ['website maintenance & support', 'maintenance'],
  ['maintenance', 'maintenance'],
  ['architecture consulting & other', 'other'],
  ['security audit', 'other'],
  ['other', 'other']
]);

/**
 * Strict Zod Validation Schema for /api/contact
 */
const contactSchema = z.object({
  firstName: z
    .string({ required_error: 'First name is required.' })
    .trim()
    .min(2, { message: 'First name must be at least 2 characters.' })
    .max(50, { message: 'First name must not exceed 50 characters.' }),
  lastName: z
    .string()
    .trim()
    .max(50, { message: 'Last name must not exceed 50 characters.' })
    .optional()
    .default(''),
  email: z
    .string({ required_error: 'Email address is required.' })
    .trim()
    .max(100, { message: 'Email address must not exceed 100 characters.' })
    .email({ message: 'Please provide a valid email address.' })
    .toLowerCase(),
  businessName: z
    .string()
    .trim()
    .max(100, { message: 'Business name must not exceed 100 characters.' })
    .optional()
    .default(''),
  service: z.preprocess(
    (val) => {
      if (typeof val === 'string') {
        const key = val.trim().toLowerCase();
        return SERVICE_LOOKUP.get(key) || key;
      }
      return val;
    },
    z.enum(['web', 'dashboard', 'ai-bot', 'maintenance', 'other'], {
      errorMap: () => ({ message: "Service must be one of: 'web', 'dashboard', 'ai-bot', 'maintenance', 'other'." })
    })
  ),
  timeline: z
    .string()
    .trim()
    .max(50, { message: 'Timeline must not exceed 50 characters.' })
    .optional()
    .default(''),
  message: z
    .string({ required_error: 'Message content is required.' })
    .trim()
    .min(10, { message: 'Message content must be at least 10 characters.' })
    .max(3000, { message: 'Message content must not exceed 3000 characters.' }),
  formType: z
    .string()
    .optional()
    .default('assessment')
});

/**
 * Generates an executive-styled HTML email for SyntraLoop inquiries & assessments.
 */
function generateEmailHtml({
  formType,
  clientName,
  clientEmail,
  company,
  service,
  timeline,
  message,
  hasAttachment,
  attachmentName,
  attachmentSize,
  submittedAt
}) {
  const isAssessment = formType === 'assessment';
  const isQuickInquiry = formType === 'quick_inquiry';
  const badgeTitle = isAssessment 
    ? 'New Project Assessment Request' 
    : isQuickInquiry 
    ? 'New Question / FAQ Inquiry' 
    : 'New Direct Inquiry';

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(badgeTitle)}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #0b1120; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1e293b;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #0b1120; padding: 32px 16px;">
    <tr>
      <td align="center">
        <!-- Main Card Container -->
        <table role="presentation" width="100%" style="max-width: 620px; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 8px 10px -6px rgba(0, 0, 0, 0.3);">
          
          <!-- Header Bar -->
          <tr>
            <td style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #1e3a8a 100%); padding: 32px 36px; text-align: left; border-bottom: 2px solid #3b82f6;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td>
                    <span style="display: inline-block; background-color: rgba(59, 130, 246, 0.2); color: #93c5fd; border: 1px solid rgba(147, 197, 253, 0.3); font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; padding: 4px 12px; border-radius: 9999px; margin-bottom: 12px;">
                      ${escapeHtml(badgeTitle)}
                    </span>
                    <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 800; letter-spacing: -0.5px;">
                      Syntra<span style="color: #38bdf8;">Loop</span> Notification
                    </h1>
                    <p style="margin: 6px 0 0 0; color: #94a3b8; font-size: 13px;">
                      Received on ${escapeHtml(submittedAt)}
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Content Body -->
          <tr>
            <td style="padding: 32px 36px; background-color: #ffffff;">
              
              <!-- Client Information Section -->
              <table role="presentation" width="100%" style="margin-bottom: 24px; border-collapse: collapse;">
                <tr>
                  <td colspan="2" style="padding-bottom: 10px; border-bottom: 1px solid #e2e8f0;">
                    <span style="font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.8px; color: #64748b;">
                      Client & Contact Profile
                    </span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0 6px 0; font-size: 14px; color: #64748b; width: 140px; font-weight: 600;">Name:</td>
                  <td style="padding: 12px 0 6px 0; font-size: 15px; color: #0f172a; font-weight: 700;">
                    ${escapeHtml(clientName)}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; font-size: 14px; color: #64748b; font-weight: 600;">Email:</td>
                  <td style="padding: 6px 0; font-size: 15px; color: #2563eb; font-weight: 600;">
                    <a href="mailto:${escapeHtml(clientEmail)}" style="color: #2563eb; text-decoration: underline;">
                      ${escapeHtml(clientEmail)}
                    </a>
                  </td>
                </tr>
                ${company ? `
                <tr>
                  <td style="padding: 6px 0; font-size: 14px; color: #64748b; font-weight: 600;">Organization:</td>
                  <td style="padding: 6px 0; font-size: 15px; color: #334155; font-weight: 600;">
                    ${escapeHtml(company)}
                  </td>
                </tr>` : ''}
              </table>

              ${isAssessment ? `
              <!-- Project Requirements Section -->
              <table role="presentation" width="100%" style="margin-bottom: 24px; border-collapse: collapse;">
                <tr>
                  <td colspan="2" style="padding-bottom: 10px; border-bottom: 1px solid #e2e8f0;">
                    <span style="font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.8px; color: #64748b;">
                      Project Scope & Timing
                    </span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0 6px 0; font-size: 14px; color: #64748b; width: 140px; font-weight: 600;">Requested Track:</td>
                  <td style="padding: 12px 0 6px 0; font-size: 15px; color: #0f172a; font-weight: 700;">
                    <span style="background-color: #eff6ff; color: #1d4ed8; padding: 4px 10px; border-radius: 6px; border: 1px solid #bfdbfe; font-size: 13px; display: inline-block;">
                      ${escapeHtml(service)}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; font-size: 14px; color: #64748b; font-weight: 600;">Target Timeline:</td>
                  <td style="padding: 6px 0; font-size: 15px; color: #334155; font-weight: 600;">
                    ${escapeHtml(timeline || 'Flexible / Planning Phase')}
                  </td>
                </tr>
              </table>
              ` : ''}

              <!-- Project Description / Inquired Message -->
              <table role="presentation" width="100%" style="margin-bottom: 24px; border-collapse: collapse;">
                <tr>
                  <td style="padding-bottom: 10px; border-bottom: 1px solid #e2e8f0;">
                    <span style="font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.8px; color: #64748b;">
                      ${isAssessment ? 'Project Goals & Requirements' : 'Inquiry Message'}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 16px 0 0 0;">
                    <div style="background-color: #f8fafc; border-left: 4px solid #3b82f6; border-radius: 0 8px 8px 0; padding: 16px 20px; font-size: 14px; line-height: 1.6; color: #1e293b; white-space: pre-wrap; font-family: monospace, -apple-system, sans-serif;">${escapeHtml(message)}</div>
                  </td>
                </tr>
              </table>

              <!-- Attachment Notification Card -->
              ${hasAttachment ? `
              <table role="presentation" width="100%" style="margin-bottom: 24px; border-collapse: collapse; background-color: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 10px; padding: 14px 18px;">
                <tr>
                  <td>
                    <p style="margin: 0; font-size: 14px; font-weight: 700; color: #166534;">
                      📎 Attached Specification File
                    </p>
                    <p style="margin: 4px 0 0 0; font-size: 13px; color: #15803d;">
                      <strong>${escapeHtml(attachmentName)}</strong> (${escapeHtml(attachmentSize)}) &mdash; Attached directly to this email.
                    </p>
                  </td>
                </tr>
              </table>
              ` : ''}

              <!-- Action Prompt / Reply Button -->
              <table role="presentation" width="100%" style="margin-top: 10px; border-top: 1px solid #e2e8f0; padding-top: 20px;">
                <tr>
                  <td align="center">
                    <a href="mailto:${escapeHtml(clientEmail)}?subject=${encodeURIComponent(isAssessment ? `Re: Project Assessment - ${service}` : 'Re: SyntraLoop Inquiry')}" style="display: inline-block; background-color: #2563eb; color: #ffffff; text-decoration: none; font-size: 14px; font-weight: 600; padding: 12px 28px; border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(37, 99, 235, 0.2);">
                      Reply to ${escapeHtml(clientName)}
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f8fafc; padding: 20px 36px; text-align: center; border-top: 1px solid #e2e8f0;">
              <p style="margin: 0; font-size: 12px; color: #94a3b8; line-height: 1.5;">
                This transmission was sent automatically from the SyntraLoop website contact engine.<br/>
                &copy; ${new Date().getFullYear()} SyntraLoop. All rights reserved.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

// In-memory rate limiting map (IP -> timestamps[])
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const MAX_REQUESTS_PER_WINDOW = 8; // Max 8 requests per 15 min

const MAX_FILE_SIZE_BYTES = 10 * 1024 * 1024; // 10MB limit

const ALLOWED_MIME_TYPES = new Set([
  'application/pdf',
  'image/jpeg',
  'image/png',
  'image/webp',
  'text/plain'
]);

const BLOCKED_FILE_EXTENSIONS = [
  '.exe', '.bat', '.cmd', '.sh', '.php', '.phtml', '.js', '.vbs', 
  '.py', '.jar', '.bin', '.msi', '.scr', '.pif', '.dll', '.com', '.wsf'
];

/**
 * Sanitizes a filename to prevent path traversal, hidden files, and command injection.
 */
function sanitizeFilename(originalName) {
  if (!originalName || typeof originalName !== 'string') return 'attachment.bin';
  // Strip directory paths (both POSIX and Windows)
  let clean = originalName.replace(/^.*[\\\/]/, '');
  // Remove control characters, quotes, and dangerous symbols
  clean = clean.replace(/[\x00-\x1f\x7f<>:"/\\|?*]/g, '_');
  // Strip leading dots to prevent directory traversal or hidden files
  clean = clean.replace(/^\.+/, '');
  return clean.slice(0, 100) || 'attachment.bin';
}

/**
 * Validates uploaded file against size, extension blocklist, and MIME-type allowlist.
 */
function validateAttachment(fileField) {
  if (!fileField || typeof fileField !== 'object' || fileField.size === 0) {
    return { isValid: true, error: null };
  }

  // 1. Explicit Size Validation (<= 10MB)
  if (fileField.size > MAX_FILE_SIZE_BYTES) {
    return {
      isValid: false,
      error: {
        field: 'file',
        message: 'Attached file exceeds the maximum allowed limit of 10MB.'
      }
    };
  }

  // 2. Extension Blocklist
  const fileNameLower = (fileField.name || '').toLowerCase();
  const hasBlockedExt = BLOCKED_FILE_EXTENSIONS.some((ext) => fileNameLower.endsWith(ext));
  if (hasBlockedExt) {
    return {
      isValid: false,
      error: {
        field: 'file',
        message: 'Executable and script file attachments are blocked for security purposes. Please upload a PDF, document, or image.'
      }
    };
  }

  // 3. MIME-Type Allowlist
  const mimeType = (fileField.type || '').toLowerCase();
  if (mimeType && !ALLOWED_MIME_TYPES.has(mimeType)) {
    return {
      isValid: false,
      error: {
        field: 'file',
        message: 'Unsupported file MIME type. Allowed types are: PDF, JPEG, PNG, WebP, and Plain Text.'
      }
    };
  }

  return { isValid: true, error: null };
}

function isRateLimited(ip) {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];
  const validTimestamps = timestamps.filter(ts => now - ts < RATE_LIMIT_WINDOW_MS);

  if (validTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    rateLimitMap.set(ip, validTimestamps);
    return true;
  }

  validTimestamps.push(now);
  rateLimitMap.set(ip, validTimestamps);

  // Periodically cleanup expired entries
  if (rateLimitMap.size > 5000) {
    for (const [key, list] of rateLimitMap.entries()) {
      if (list.every(ts => now - ts >= RATE_LIMIT_WINDOW_MS)) {
        rateLimitMap.delete(key);
      }
    }
  }
  return false;
}

export async function POST(request) {
  try {
    // 1. IP extraction & rate limiting
    const forwardedHeader = request.headers.get('x-forwarded-for');
    const clientIp = forwardedHeader ? forwardedHeader.split(',')[0].trim() : (request.headers.get('x-real-ip') || '127.0.0.1');

    if (isRateLimited(clientIp)) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Too many requests submitted from your IP address. Please wait a few minutes before trying again.',
          errors: [{ field: 'rate_limit', message: 'Too many requests submitted from your IP address.' }]
        },
        { status: 429 }
      );
    }

    const contentType = request.headers.get('content-type') || '';
    const rawData = {};
    let attachedFile = null;

    if (contentType.includes('multipart/form-data')) {
      const formData = await request.formData();
      rawData.formType = (formData.get('formType') || 'assessment').toString();
      rawData.firstName = (formData.get('firstName') || formData.get('name') || '').toString();
      rawData.lastName = (formData.get('lastName') || '').toString();
      rawData.email = (formData.get('email') || '').toString();
      rawData.businessName = (formData.get('businessName') || formData.get('company') || '').toString();
      rawData.service = (formData.get('service') || '').toString();
      rawData.timeline = (formData.get('timeline') || '').toString();
      rawData.message = (formData.get('message') || formData.get('question') || '').toString();

      const fileField = formData.get('file');
      if (fileField && typeof fileField === 'object' && typeof fileField.arrayBuffer === 'function' && fileField.size > 0) {
        attachedFile = fileField;
      }
    } else {
      const json = await request.json().catch(() => ({}));
      rawData.formType = json.formType || 'quick_inquiry';
      rawData.firstName = json.firstName || json.name || '';
      rawData.lastName = json.lastName || '';
      rawData.email = json.email || '';
      rawData.businessName = json.businessName || json.company || '';
      rawData.service = json.service || '';
      rawData.timeline = json.timeline || '';
      rawData.message = json.message || json.question || '';
    }

    // Adapt quick inquiry submissions to satisfy strict schema
    if (rawData.formType === 'quick_inquiry') {
      if (!rawData.firstName || rawData.firstName.trim().length < 2) {
        const emailPrefix = (rawData.email || '').split('@')[0];
        rawData.firstName = emailPrefix && emailPrefix.length >= 2 ? emailPrefix.slice(0, 50) : 'Visitor';
      }
      if (!rawData.service) {
        rawData.service = 'other';
      }
    }

    // 2. Strict Zod Schema Validation
    const parseResult = contactSchema.safeParse(rawData);
    if (!parseResult.success) {
      const issues = parseResult.error.issues || parseResult.error.errors || [];
      const formattedErrors = issues.map((err) => ({
        field: err.path.join('.') || 'general',
        message: err.message
      }));

      return NextResponse.json(
        {
          success: false,
          error: formattedErrors[0]?.message || 'Validation failed.',
          errors: formattedErrors
        },
        { status: 400 }
      );
    }

    const {
      formType,
      firstName,
      lastName,
      email,
      businessName,
      service,
      timeline,
      message
    } = parseResult.data;

    // 3. File Attachment Hardening & Sanitization
    const mailAttachments = [];
    let attachmentDetails = {
      hasAttachment: false,
      attachmentName: '',
      attachmentSize: ''
    };

    if (attachedFile) {
      const fileCheck = validateAttachment(attachedFile);
      if (!fileCheck.isValid) {
        return NextResponse.json(
          {
            success: false,
            error: fileCheck.error.message,
            errors: [fileCheck.error]
          },
          { status: 400 }
        );
      }

      try {
        const sanitizedFileName = sanitizeFilename(attachedFile.name);
        const fileBuffer = Buffer.from(await attachedFile.arrayBuffer());

        mailAttachments.push({
          filename: sanitizedFileName,
          content: fileBuffer,
          contentType: attachedFile.type || 'application/octet-stream'
        });

        const sizeInKB = (attachedFile.size / 1024).toFixed(1);
        const sizeStr = attachedFile.size > 1024 * 1024 
          ? (attachedFile.size / (1024 * 1024)).toFixed(2) + ' MB'
          : sizeInKB + ' KB';

        attachmentDetails = {
          hasAttachment: true,
          attachmentName: sanitizedFileName,
          attachmentSize: sizeStr
        };
      } catch (fileErr) {
        console.error('[Attachment Processing Error]:', fileErr);
        return NextResponse.json(
          {
            success: false,
            error: 'Failed to process file attachment. Please try again.',
            errors: [{ field: 'file', message: 'Error reading attachment data.' }]
          },
          { status: 400 }
        );
      }
    }

    const clientFullName = [firstName, lastName].filter(Boolean).join(' ') || (email.split('@')[0] || 'Prospective Client');
    const submittedAt = new Date().toLocaleString('en-US', {
      timeZone: 'UTC',
      dateStyle: 'full',
      timeStyle: 'medium'
    }) + ' UTC';

    // 4. Prepare Subject & Email Content
    const emailSubject = formType === 'assessment'
      ? `[Project Assessment] ${service} - ${clientFullName}${businessName ? ` (${businessName})` : ''}`
      : formType === 'quick_inquiry'
      ? `[Quick Question] New FAQ Inquiry from ${email}`
      : `[SyntraLoop Inquiry] Question from ${clientFullName} (${email})`;

    const textBody = [
      `=======================================`,
      `SYNTRALOOP - ${formType === 'assessment' ? 'PROJECT ASSESSMENT REQUEST' : formType === 'quick_inquiry' ? 'QUICK QUESTION / FAQ INQUIRY' : 'DIRECT INQUIRY'}`,
      `=======================================`,
      `Date: ${submittedAt}`,
      `Client / Sender: ${clientFullName}`,
      `Email: ${email}`,
      businessName ? `Company: ${businessName}` : null,
      service ? `Service Track: ${service}` : null,
      timeline ? `Timeline: ${timeline}` : null,
      attachmentDetails.hasAttachment ? `Attachment: ${attachmentDetails.attachmentName} (${attachmentDetails.attachmentSize})` : null,
      ``,
      `QUESTION / MESSAGE:`,
      `---------------------------------------`,
      message,
      `---------------------------------------`,
      `Reply-To: ${email}`,
      `Sent via SyntraLoop Web Platform`
    ].filter(Boolean).join('\n');

    const htmlBody = generateEmailHtml({
      formType,
      clientName: clientFullName,
      clientEmail: email,
      company: businessName,
      service,
      timeline,
      message,
      hasAttachment: attachmentDetails.hasAttachment,
      attachmentName: attachmentDetails.attachmentName,
      attachmentSize: attachmentDetails.attachmentSize,
      submittedAt
    });

    // SMTP Configuration
    const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
    const smtpPort = parseInt(process.env.SMTP_PORT || '465', 10);
    const smtpSecure = process.env.SMTP_SECURE !== undefined ? process.env.SMTP_SECURE === 'true' : smtpPort === 465;
    const smtpUser = process.env.SMTP_USER || 'syntraloop.contact@gmail.com';
    const smtpPass = process.env.SMTP_PASS;
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || 'syntraloop.contact@gmail.com';

    // Check if SMTP password is provided
    if (!smtpPass) {
      console.warn(
        '[SyntraLoop Email Warning] SMTP_PASS environment variable is not set. ' +
        'Please generate a Google App Password in Google Account Settings > Security > 2-Step Verification > App Passwords ' +
        'and add it to .env.local or your production environment variables.'
      );

      // In local development without credentials configured yet, we simulate email dispatch
      if (process.env.NODE_ENV !== 'production') {
        console.log('--- [DEV SIMULATED EMAIL DISPATCH] ---');
        console.log(`To: ${receiverEmail}`);
        console.log(`From: "SyntraLoop Website" <${smtpUser}>`);
        console.log(`Reply-To: ${clientFullName} <${email}>`);
        console.log(`Subject: ${emailSubject}`);
        console.log(`Body:\n${textBody}`);
        if (mailAttachments.length > 0) {
          console.log(`Attachments: ${mailAttachments.map(a => a.filename).join(', ')}`);
        }
        console.log('--------------------------------------');

        return NextResponse.json({
          success: true,
          message: formType === 'assessment'
            ? 'Assessment submitted successfully (Simulated mode: Set SMTP_PASS in .env.local to dispatch live email)'
            : 'Question submitted successfully (Simulated mode: Set SMTP_PASS in .env.local to dispatch live email)',
          isDevSimulated: true
        });
      }

      return NextResponse.json(
        {
          success: false,
          error: 'Email service is currently being configured. Please reach out to syntraloop.contact@gmail.com directly or via WhatsApp.',
          errors: [{ field: 'smtp', message: 'Mail server service not configured.' }]
        },
        { status: 503 }
      );
    }

    // Create Transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    const mailOptions = {
      from: `"SyntraLoop Website" <${smtpUser}>`,
      to: receiverEmail,
      replyTo: `"${clientFullName}" <${email}>`,
      subject: emailSubject,
      text: textBody,
      html: htmlBody,
      attachments: mailAttachments
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('[SyntraLoop Email Sent] Message ID:', info.messageId);

    return NextResponse.json({
      success: true,
      message: formType === 'assessment' 
        ? 'Assessment submitted successfully' 
        : 'Question submitted successfully',
      messageId: info.messageId
    });

  } catch (error) {
    // Robust Error Handling: Never leak internal stack traces or connection details
    console.error('[SyntraLoop Email Server Error]:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'An internal server error occurred while processing your request. Please contact us directly.',
        errors: [{ field: 'server', message: 'Internal service error.' }]
      },
      { status: 500 }
    );
  }
}
