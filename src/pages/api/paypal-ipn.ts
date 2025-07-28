import { NextApiRequest, NextApiResponse } from 'next';
import { createTransport } from 'nodemailer';

// PayPal IPN verification endpoint
const PAYPAL_IPN_URL = process.env.NODE_ENV === 'production' 
  ? 'https://ipnpb.paypal.com/cgi-bin/webscr'
  : 'https://ipnpb.sandbox.paypal.com/cgi-bin/webscr';

interface PayPalIPNData {
  payment_status?: string;
  txn_type?: string;
  payer_email?: string;
  first_name?: string;
  last_name?: string;
  item_name?: string;
  mc_gross?: string;
  mc_currency?: string;
  txn_id?: string;
  subscr_id?: string;
  recurring_payment_id?: string;
  [key: string]: any;
}

// Email templates
const getWelcomeEmailTemplate = (customerName: string, planType: string) => {
  return {
    subject: 'Welcome to StratGen - Your Premium Trading Platform Access',
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome to StratGen</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #212322; color: #4ade80; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
          .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
          .button { display: inline-block; background: #4ade80; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; margin: 20px 0; }
          .feature-list { background: white; padding: 20px; border-radius: 6px; margin: 20px 0; }
          .feature-item { margin: 10px 0; padding-left: 20px; position: relative; }
          .feature-item:before { content: "✓"; position: absolute; left: 0; color: #4ade80; font-weight: bold; }
          .footer { text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Welcome to StratGen!</h1>
            <p>Your Premium Trading Platform is Ready</p>
          </div>
          
          <div class="content">
            <h2>Hi ${customerName},</h2>
            
            <p>Thank you for subscribing to <strong>StratGen Premium (${planType})</strong>! Your payment has been processed successfully, and you now have access to the most advanced no-code algorithmic trading platform.</p>
            
            <div style="text-align: center;">
              <a href="mailto:jacob@wetradelabs.com?subject=StratGen%20Download%20Request&body=Hi%2C%20I%20just%20subscribed%20to%20StratGen%20and%20would%20like%20to%20download%20the%20software.%20My%20PayPal%20email%20is%3A%20${encodeURIComponent(customerName)}" class="button">
                Request Download Link
              </a>
            </div>
            
            <div class="feature-list">
              <h3>What You Get with StratGen Premium:</h3>
              <div class="feature-item">600+ technical and fundamental signals</div>
              <div class="feature-item">Institutional-grade backtesting engine</div>
              <div class="feature-item">Import data from any source (OHLCV)</div>
              <div class="feature-item">Advanced robustness testing tools</div>
              <div class="feature-item">Automatic code generation for NinjaTrader, TradeStation & Python</div>
              <div class="feature-item">Strategy optimization and automation</div>
              <div class="feature-item">24/7 priority support</div>
            </div>
            
            <h3>Next Steps:</h3>
            <ol>
              <li><strong>Download StratGen:</strong> Click the button above to request your download link</li>
              <li><strong>Install & Setup:</strong> Follow the installation guide we'll send you</li>
              <li><strong>Explore Features:</strong> Check out our <a href="https://stratgensoft.com/user-manual">User Manual</a></li>
              <li><strong>Get Support:</strong> Email us at <a href="mailto:jacob@wetradelabs.com">jacob@wetradelabs.com</a> for any questions</li>
            </ol>
            
            <p><strong>Important:</strong> StratGen is available for Windows. Make sure your system meets the requirements before installation.</p>
            
            <div style="background: #fff3cd; border: 1px solid #ffeaa7; padding: 15px; border-radius: 6px; margin: 20px 0;">
              <h4 style="margin-top: 0; color: #856404;">Risk Disclaimer</h4>
              <p style="margin-bottom: 0; font-size: 14px; color: #856404;">
                Trading involves substantial risk of loss. StratGen is a tool to assist with trading decisions but does not guarantee profits. Past performance is not indicative of future results. Please trade responsibly.
              </p>
            </div>
          </div>
          
          <div class="footer">
            <p>Questions? Reply to this email or contact us at <a href="mailto:jacob@wetradelabs.com">jacob@wetradelabs.com</a></p>
            <p>© 2025 StratGen. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `,
    text: `
Welcome to StratGen Premium!

Hi ${customerName},

Thank you for subscribing to StratGen Premium (${planType})! Your payment has been processed successfully.

What You Get:
• 600+ technical and fundamental signals
• Institutional-grade backtesting engine
• Import data from any source (OHLCV)
• Advanced robustness testing tools
• Automatic code generation for NinjaTrader, TradeStation & Python
• Strategy optimization and automation
• 24/7 priority support

Next Steps:
1. Email jacob@wetradelabs.com to request your download link
2. Install & setup StratGen on your Windows system
3. Explore features using our User Manual
4. Contact support for any questions

Important: Trading involves substantial risk of loss. Please trade responsibly.

Questions? Contact us at jacob@wetradelabs.com

© 2025 StratGen. All rights reserved.
    `
  };
};

// Verify PayPal IPN
async function verifyPayPalIPN(body: string): Promise<boolean> {
  try {
    const verificationBody = 'cmd=_notify-validate&' + body;
    
    const response = await fetch(PAYPAL_IPN_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': verificationBody.length.toString(),
      },
      body: verificationBody,
    });
    
    const verification = await response.text();
    return verification === 'VERIFIED';
  } catch (error) {
    console.error('PayPal IPN verification error:', error);
    return false;
  }
}

// Send email using nodemailer
async function sendWelcomeEmail(customerEmail: string, customerName: string, planType: string) {
  const transporter = createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const emailTemplate = getWelcomeEmailTemplate(customerName, planType);

  const mailOptions = {
    from: `"StratGen" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
    to: customerEmail,
    subject: emailTemplate.subject,
    html: emailTemplate.html,
    text: emailTemplate.text,
  };

  await transporter.sendMail(mailOptions);
}

// Parse PayPal IPN data
function parseIPNData(body: string): PayPalIPNData {
  const params = new URLSearchParams(body);
  const data: PayPalIPNData = {};
  
  params.forEach((value, key) => {
    data[key] = value;
  });
  
  return data;
}

// Determine plan type from PayPal data
function getPlanType(data: PayPalIPNData): string {
  const itemName = data.item_name || '';
  const amount = parseFloat(data.mc_gross || '0');
  
  if (itemName.toLowerCase().includes('yearly') || amount >= 1000) {
    return 'Yearly Plan';
  } else if (itemName.toLowerCase().includes('monthly') || amount >= 99) {
    return 'Monthly Plan';
  }
  
  return 'Premium Plan';
}

// Log transaction for debugging
function logTransaction(data: PayPalIPNData) {
  console.log('PayPal IPN received:', {
    txn_id: data.txn_id,
    payment_status: data.payment_status,
    txn_type: data.txn_type,
    payer_email: data.payer_email,
    amount: data.mc_gross,
    currency: data.mc_currency,
    timestamp: new Date().toISOString(),
  });
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Get raw body as string
    const body = JSON.stringify(req.body);
    const bodyString = Object.keys(req.body).map(key => `${key}=${encodeURIComponent(req.body[key])}`).join('&');
    
    // Verify the IPN with PayPal
    const isVerified = await verifyPayPalIPN(bodyString);
    
    if (!isVerified) {
      console.error('PayPal IPN verification failed');
      return res.status(400).json({ error: 'IPN verification failed' });
    }

    // Parse IPN data
    const ipnData = parseIPNData(bodyString);
    
    // Log the transaction
    logTransaction(ipnData);

    // Check if this is a successful payment
    const isSuccessfulPayment = 
      ipnData.payment_status === 'Completed' || 
      ipnData.payment_status === 'Processed' ||
      (ipnData.txn_type === 'subscr_payment' && ipnData.payment_status === 'Completed');

    if (isSuccessfulPayment && ipnData.payer_email) {
      const customerName = `${ipnData.first_name || ''} ${ipnData.last_name || ''}`.trim() || ipnData.payer_email;
      const planType = getPlanType(ipnData);

      try {
        await sendWelcomeEmail(ipnData.payer_email, customerName, planType);
        console.log(`Welcome email sent to ${ipnData.payer_email} for ${planType}`);
      } catch (emailError) {
        console.error('Failed to send welcome email:', emailError);
        // Don't fail the IPN response if email fails
      }
    }

    // Always respond with 200 OK to acknowledge receipt
    res.status(200).json({ status: 'success' });

  } catch (error) {
    console.error('PayPal IPN handler error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

// Disable body parsing to get raw body
export const config = {
  api: {
    bodyParser: {
      sizeLimit: '1mb',
    },
  },
};