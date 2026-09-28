import { logger } from 'firebase-functions';
import { onDocumentCreated } from 'firebase-functions/v2/firestore';
import * as admin from 'firebase-admin';
import * as nodemailer from 'nodemailer';

admin.initializeApp();

interface ConsultationData {
  fullName: string;
  email: string;
  telephone: string;
  enquiry: string;
  createdAt: string;
  status: string;
}

const STUDIO_TIMEZONE = 'Africa/Addis_Ababa';

const config = {
  adminEmail: process.env.ADMIN_EMAIL || 'consultations@ashara-interiors.com',
  fromEmail: process.env.GMAIL_USER || 'Ashara Interiors <noreply@ashara-interiors.com>',
  adminPortalUrl: process.env.ADMIN_PORTAL_URL || 'https://ashara-interiors.web.app/admin',
  studio: {
    address: process.env.STUDIO_ADDRESS || 'Megenagna, Infront of Ethio Ceramics, Bete Sahlite-Mihret Building, 4th Floor, Addis Ababa, Ethiopia',
    phone: process.env.STUDIO_PHONE || '+251912195768',
    phoneDisplay: process.env.STUDIO_PHONE_DISPLAY || '+251 91 219 5768',
    email: process.env.STUDIO_EMAIL || 'studio@ashara-interiors.com',
  },
};

const HTML_ESCAPES: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
};

function escapeHtml(value: string | undefined | null): string {
  return String(value ?? '').replace(/[&<>"']/g, (char) => HTML_ESCAPES[char]);
}

function sanitizeSubject(value: string | undefined | null): string {
  return String(value ?? '').replace(/[\r\n]+/g, ' ').trim();
}

function formatSubmittedAt(createdAt: string): string {
  const date = new Date(createdAt);
  if (Number.isNaN(date.getTime())) {
    return 'Unknown';
  }
  return `${date.toLocaleString('en-GB', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZone: STUDIO_TIMEZONE,
  })} EAT`;
}

function createTransporter() {
  const gmailUser = process.env.GMAIL_USER;
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

  if (!gmailUser || !gmailAppPassword) {
    logger.warn('Gmail credentials not configured. Email sending disabled.');
    return null;
  }

  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: gmailUser,
      pass: gmailAppPassword,
    },
  });
}

function generateAdminEmailHtml(data: ConsultationData): string {
  const fullName = escapeHtml(data.fullName);
  const email = escapeHtml(data.email);
  const telephone = escapeHtml(data.telephone);
  const enquiry = escapeHtml(data.enquiry);

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Consultation Enquiry - Ashara Interiors</title>
    </head>
    <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #1a1a2e; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background: linear-gradient(135deg, #1E4E4E 0%, #2a6b6b 100%); padding: 30px; border-radius: 8px 8px 0 0;">
        <h1 style="color: #D4A843; margin: 0; font-size: 24px; font-weight: 600;">Ashara Interiors</h1>
        <p style="color: rgba(255,255,255,0.9); margin: 8px 0 0 0; font-size: 14px;">New Consultation Enquiry Received</p>
      </div>
      
      <div style="background: #faf9f5; border: 1px solid #e8e4dc; border-top: none; border-radius: 0 0 8px 8px; padding: 30px;">
        <div style="background: white; border: 1px solid #e8e4dc; border-radius: 6px; padding: 24px; margin-bottom: 20px;">
          <h2 style="color: #1E4E4E; margin: 0 0 20px 0; font-size: 18px; font-weight: 600; border-bottom: 1px solid #e8e4dc; padding-bottom: 12px;">Client Details</h2>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; font-weight: 600; color: #4a4a5a; width: 140px;">Full Name:</td>
              <td style="padding: 10px 0; color: #1a1a2e;">${fullName}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: 600; color: #4a4a5a;">Email:</td>
              <td style="padding: 10px 0; color: #1a1a2e;"><a href="mailto:${email}" style="color: #1E4E4E; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: 600; color: #4a4a5a;">Phone:</td>
              <td style="padding: 10px 0; color: #1a1a2e;"><a href="tel:${telephone}" style="color: #1E4E4E; text-decoration: none;">${telephone}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: 600; color: #4a4a5a; vertical-align: top;">Enquiry:</td>
              <td style="padding: 10px 0; color: #1a1a2e; white-space: pre-wrap;">${enquiry}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: 600; color: #4a4a5a;">Submitted:</td>
              <td style="padding: 10px 0; color: #1a1a2e;">${escapeHtml(formatSubmittedAt(data.createdAt))}</td>
            </tr>
          </table>
        </div>

        <div style="background: #fff8e7; border: 1px solid #D4A843; border-radius: 6px; padding: 16px; text-align: center;">
          <p style="margin: 0; color: #1E4E4E; font-size: 14px;">
            <strong>Action Required:</strong> Log in to the <a href="${escapeHtml(config.adminPortalUrl)}" style="color: #1E4E4E; text-decoration: underline;">Admin Portal</a> to review and update the lead status.
          </p>
        </div>

        <hr style="border: none; border-top: 1px solid #e8e4dc; margin: 24px 0;">
        
        <p style="color: #888; font-size: 12px; margin: 0; text-align: center;">
          This is an automated notification from Ashara Interiors Studio Management System.<br>
          Please do not reply directly to this email.
        </p>
      </div>
    </body>
    </html>
  `;
}

function generateClientConfirmationHtml(data: ConsultationData): string {
  const fullName = escapeHtml(data.fullName);
  const enquiry = escapeHtml(data.enquiry);
  const { address, phone, phoneDisplay, email } = config.studio;

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Enquiry Received - Ashara Interiors</title>
    </head>
    <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #1a1a2e; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background: linear-gradient(135deg, #1E4E4E 0%, #2a6b6b 100%); padding: 30px; border-radius: 8px 8px 0 0; text-align: center;">
        <h1 style="color: #D4A843; margin: 0; font-size: 28px; font-weight: 600;">Ashara Interiors</h1>
        <p style="color: rgba(255,255,255,0.9); margin: 8px 0 0 0; font-size: 14px;">Thank You for Your Enquiry</p>
      </div>
      
      <div style="background: #faf9f5; border: 1px solid #e8e4dc; border-top: none; border-radius: 0 0 8px 8px; padding: 30px;">
        <p style="font-size: 16px; color: #1a1a2e; margin-bottom: 16px;">Dear <strong>${fullName}</strong>,</p>
        
        <p style="color: #4a4a5a; margin-bottom: 20px;">Thank you for reaching out to Ashara Interiors. We have received your consultation enquiry and our studio team in Addis Ababa will review your requirements shortly.</p>
        
        <div style="background: white; border: 1px solid #e8e4dc; border-radius: 6px; padding: 20px; margin-bottom: 20px;">
          <h3 style="color: #1E4E4E; margin: 0 0 16px 0; font-size: 16px; font-weight: 600;">Your Enquiry Summary</h3>
          <p style="margin: 0; color: #1a1a2e; white-space: pre-wrap;">${enquiry}</p>
        </div>

        <p style="color: #4a4a5a; margin-bottom: 8px;">Our team will contact you within <strong>24 hours</strong> during business days to discuss your project in detail.</p>
        
        <div style="background: #fff8e7; border: 1px solid #D4A843; border-radius: 6px; padding: 16px; margin-top: 24px;">
          <p style="margin: 0 0 12px 0; color: #1E4E4E; font-weight: 600; font-size: 14px;">Our Studio Details</p>
          <p style="margin: 0; color: #4a4a5a; font-size: 13px; line-height: 1.8;">
            Ashara Interiors<br>
            ${escapeHtml(address)}<br>
            <a href="tel:${escapeHtml(phone)}" style="color: #1E4E4E;">${escapeHtml(phoneDisplay)}</a> | 
            <a href="mailto:${escapeHtml(email)}" style="color: #1E4E4E;">${escapeHtml(email)}</a>
          </p>
        </div>

        <hr style="border: none; border-top: 1px solid #e8e4dc; margin: 24px 0;">
        
        <p style="color: #888; font-size: 12px; margin: 0; text-align: center;">
          This is an automated confirmation. Please do not reply directly to this email.
        </p>
      </div>
    </body>
    </html>
  `;
}

export const onConsultationCreated = onDocumentCreated(
  'consultations/{consultationId}',
  async (event) => {
    const snap = event.data;
    if (!snap) {
      logger.warn('Consultation document has no data. Skipping notifications.');
      return;
    }

    const data = snap.data() as ConsultationData;
    const consultationId = event.params.consultationId;

    logger.info(`New consultation received: ${consultationId}`, { 
      fullName: data.fullName, 
      email: data.email 
    });

    if (!data.email) {
      logger.warn(`Consultation ${consultationId} has no email. Skipping notifications.`);
      return;
    }

    const transporter = createTransporter();
    
    if (!transporter) {
      logger.warn('Email transporter not available. Skipping email notifications.');
      return;
    }

    const { adminEmail, fromEmail } = config;

    try {
      // Send notification to admin
      await transporter.sendMail({
        from: fromEmail,
        to: adminEmail,
        subject: sanitizeSubject(`🔔 New Consultation: ${data.fullName} - Ashara Interiors`),
        html: generateAdminEmailHtml(data),
      });

      logger.info(`Admin notification sent to ${adminEmail}`);

      // Send confirmation to client
      await transporter.sendMail({
        from: fromEmail,
        to: data.email,
        subject: `✅ Enquiry Received - Ashara Interiors`,
        html: generateClientConfirmationHtml(data),
      });

      logger.info(`Client confirmation sent to ${data.email}`);

    } catch (error) {
      logger.error('Failed to send email notifications:', error);
      // Don't throw - we don't want to block the Firestore write
    }
  }
);
