import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

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
  const badgeColor = isAssessment ? '#2563eb' : isQuickInquiry ? '#059669' : '#0284c7';

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
const BLOCKED_FILE_EXTENSIONS = [
  '.exe', '.bat', '.cmd', '.sh', '.php', '.phtml', '.js', '.vbs', 
  '.msi', '.scr', '.pif', '.dll', '.com', '.jar', '.apk', '.bin', '.wsf'
];

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
          error: 'Too many requests submitted from your IP address. Please wait a few minutes before trying again.' 
        },
        { status: 429 }
      );
    }

    const contentType = request.headers.get('content-type') || '';
    let formType = 'assessment';
    let firstName = '';
    let lastName = '';
    let email = '';
    let businessName = '';
    let service = '';
    let timeline = '';
    let message = '';
    let attachedFile = null;

    if (contentType.includes('multipart/form-data')) {
      const formData = await request.formData();
      formType = (formData.get('formType') || 'assessment').toString().slice(0, 50);
      firstName = (formData.get('firstName') || formData.get('name') || '').toString().trim().slice(0, 100);
      lastName = (formData.get('lastName') || '').toString().trim().slice(0, 100);
      email = (formData.get('email') || '').toString().trim().slice(0, 120);
      businessName = (formData.get('businessName') || formData.get('company') || '').toString().trim().slice(0, 150);
      service = (formData.get('service') || '').toString().trim().slice(0, 100);
      timeline = (formData.get('timeline') || '').toString().trim().slice(0, 100);
      message = (formData.get('message') || formData.get('question') || '').toString().trim().slice(0, 8000);

      const fileField = formData.get('file');
      if (fileField && typeof fileField === 'object' && typeof fileField.arrayBuffer === 'function' && fileField.size > 0) {
        if (fileField.size > MAX_FILE_SIZE_BYTES) {
          return NextResponse.json(
            { success: false, error: 'Attached file exceeds the maximum allowed limit of 10MB.' },
            { status: 400 }
          );
        }

        const fileName = (fileField.name || '').toLowerCase();
        const hasBlockedExtension = BLOCKED_FILE_EXTENSIONS.some(ext => fileName.endsWith(ext));
        if (hasBlockedExtension) {
          return NextResponse.json(
            { success: false, error: 'Executable and script file attachments are blocked for security purposes. Please upload a PDF, document, or image.' },
            { status: 400 }
          );
        }

        attachedFile = fileField;
      }
    } else {
      const json = await request.json();
      formType = (json.formType || 'quick_inquiry').slice(0, 50);
      firstName = (json.firstName || json.name || '').trim().slice(0, 100);
      lastName = (json.lastName || '').trim().slice(0, 100);
      email = (json.email || '').trim().slice(0, 120);
      businessName = (json.businessName || json.company || '').trim().slice(0, 150);
      service = (json.service || '').trim().slice(0, 100);
      timeline = (json.timeline || '').trim().slice(0, 100);
      message = (json.message || json.question || '').trim().slice(0, 8000);
    }

    // Validation
    if (!email) {
      return NextResponse.json(
        { success: false, error: 'Email address is required.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    if (!message) {
      return NextResponse.json(
        { success: false, error: 'Message content is required.' },
        { status: 400 }
      );
    }

    if (formType === 'assessment' && !service) {
      return NextResponse.json(
        { success: false, error: 'Please select a primary service.' },
        { status: 400 }
      );
    }

    const clientFullName = [firstName, lastName].filter(Boolean).join(' ') || (email.split('@')[0] || 'Prospective Client');
    const submittedAt = new Date().toLocaleString('en-US', {
      timeZone: 'UTC',
      dateStyle: 'full',
      timeStyle: 'medium'
    }) + ' UTC';

    // Build attachments
    const mailAttachments = [];
    let attachmentDetails = {
      hasAttachment: false,
      attachmentName: '',
      attachmentSize: ''
    };

    if (attachedFile) {
      try {
        const fileBuffer = Buffer.from(await attachedFile.arrayBuffer());
        mailAttachments.push({
          filename: attachedFile.name,
          content: fileBuffer,
          contentType: attachedFile.type || 'application/octet-stream'
        });
        const sizeInKB = (attachedFile.size / 1024).toFixed(1);
        const sizeStr = attachedFile.size > 1024 * 1024 
          ? (attachedFile.size / (1024 * 1024)).toFixed(2) + ' MB'
          : sizeInKB + ' KB';

        attachmentDetails = {
          hasAttachment: true,
          attachmentName: attachedFile.name,
          attachmentSize: sizeStr
        };
      } catch (fileErr) {
        console.error('Error processing attachment buffer:', fileErr);
      }
    }

    // Prepare Subject & Content
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

      // In local development without credentials configured yet, we simulate or log the email so development doesn't block
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
          error: 'Email service is currently being configured. Please reach out to syntraloop.contact@gmail.com directly or via WhatsApp.'
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
    console.error('[SyntraLoop Email Error]:', error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Failed to dispatch email. Please try again or contact us directly.'
      },
      { status: 500 }
    );
  }
}
