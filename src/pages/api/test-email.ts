import { NextApiRequest, NextApiResponse } from 'next';
import { createTransport } from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const transporter = createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Verify SMTP connection
    await transporter.verify();

    const testEmail = {
      from: `"StratGen Test" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER, // Send test email to yourself
      subject: 'StratGen Email Test - PayPal IPN Setup Complete',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: #212322; color: #4ade80; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1>StratGen Email Test</h1>
          </div>
          <div style="background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px;">
            <h2>Email Configuration Successful!</h2>
            <p>This test email confirms that your PayPal IPN email system is properly configured.</p>
            <p><strong>SMTP Settings:</strong></p>
            <ul>
              <li>Host: ${process.env.SMTP_HOST}</li>
              <li>Port: ${process.env.SMTP_PORT}</li>
              <li>Secure: ${process.env.SMTP_SECURE}</li>
              <li>From: ${process.env.SMTP_FROM || process.env.SMTP_USER}</li>
            </ul>
            <p>When customers purchase StratGen through PayPal, they will automatically receive a welcome email with download instructions.</p>
          </div>
        </div>
      `,
      text: `
StratGen Email Test

Email Configuration Successful!

This test email confirms that your PayPal IPN email system is properly configured.

SMTP Settings:
- Host: ${process.env.SMTP_HOST}
- Port: ${process.env.SMTP_PORT}
- Secure: ${process.env.SMTP_SECURE}
- From: ${process.env.SMTP_FROM || process.env.SMTP_USER}

When customers purchase StratGen through PayPal, they will automatically receive a welcome email with download instructions.
      `
    };

    await transporter.sendMail(testEmail);

    res.status(200).json({ 
      success: true, 
      message: 'Test email sent successfully!',
      sentTo: process.env.SMTP_USER
    });

  } catch (error) {
    console.error('Email test failed:', error);
    res.status(500).json({ 
      error: 'Failed to send test email', 
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}