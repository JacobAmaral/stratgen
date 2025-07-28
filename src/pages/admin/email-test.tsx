import React, { useState } from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckIcon, MailIcon, AlertCircleIcon, CopyIcon } from 'lucide-react';

export default function EmailTest() {
  const [isLoading, setIsLoading] = useState(false);
  const [testResult, setTestResult] = useState<{
    success: boolean;
    message: string;
    sentTo?: string;
    error?: string;
  } | null>(null);
  const [copied, setCopied] = useState(false);

  const handleTestEmail = async () => {
    setIsLoading(true);
    setTestResult(null);

    try {
      const response = await fetch('/api/test-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const result = await response.json();
      setTestResult(result);
    } catch (error) {
      setTestResult({
        success: false,
        message: 'Failed to send test email',
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const ipnUrl = typeof window !== 'undefined' 
    ? `${window.location.origin}/api/paypal-ipn`
    : 'https://your-domain.com/api/paypal-ipn';

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(ipnUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  return (
    <>
      <Head>
        <title>Email Test - StratGen Admin</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="bg-background min-h-screen flex flex-col">
        <Header />
        
        <div className="flex-1 py-12 px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">PayPal IPN Email System</h1>
              <p className="text-muted-foreground">
                Test your email configuration and get your PayPal IPN endpoint URL.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Email Test Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MailIcon className="h-5 w-5" />
                    Email Configuration Test
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Send a test email to verify your SMTP configuration is working correctly.
                  </p>
                  
                  <Button 
                    onClick={handleTestEmail} 
                    disabled={isLoading}
                    className="w-full"
                  >
                    {isLoading ? 'Sending...' : 'Send Test Email'}
                  </Button>

                  {testResult && (
                    <div className={`p-4 rounded-lg border ${
                      testResult.success 
                        ? 'bg-green-50 border-green-200 text-green-800' 
                        : 'bg-red-50 border-red-200 text-red-800'
                    }`}>
                      <div className="flex items-center gap-2 mb-2">
                        {testResult.success ? (
                          <CheckIcon className="h-4 w-4" />
                        ) : (
                          <AlertCircleIcon className="h-4 w-4" />
                        )}
                        <span className="font-medium">
                          {testResult.success ? 'Success!' : 'Error'}
                        </span>
                      </div>
                      <p className="text-sm">{testResult.message}</p>
                      {testResult.sentTo && (
                        <p className="text-sm mt-1">Sent to: {testResult.sentTo}</p>
                      )}
                      {testResult.error && (
                        <p className="text-sm mt-1">Details: {testResult.error}</p>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* PayPal IPN Setup Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.26-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.9.9 0 0 0-.89.756l-1.195 7.583-.3 1.903a.704.704 0 0 0 .653.829h4.611c.469 0 .867-.34.939-.803l.048-.272.892-5.66.058-.32c.072-.464.47-.803.94-.803h.591c3.312 0 5.906-1.4 6.864-5.478.399-1.70.193-3.112-.842-4.155z"/>
                    </svg>
                    PayPal IPN Configuration
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-3">
                      Add this URL to your PayPal account's IPN settings:
                    </p>
                    
                    <div className="flex items-center gap-2 p-3 bg-muted rounded-lg">
                      <code className="flex-1 text-sm font-mono break-all">
                        {ipnUrl}
                      </code>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={copyToClipboard}
                        className="flex-shrink-0"
                      >
                        {copied ? (
                          <CheckIcon className="h-4 w-4" />
                        ) : (
                          <CopyIcon className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-medium">Setup Instructions:</h4>
                    <ol className="text-sm text-muted-foreground space-y-2 list-decimal list-inside">
                      <li>Log in to your PayPal account</li>
                      <li>Go to Account Settings → Notifications</li>
                      <li>Click "Update" next to Instant Payment Notifications</li>
                      <li>Enter the IPN URL above</li>
                      <li>Select "Receive IPN messages (Enabled)"</li>
                      <li>Click "Save"</li>
                    </ol>
                  </div>

                  <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>Note:</strong> After setup, customers will automatically receive welcome emails when they purchase StratGen through your PayPal subscription links.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* How It Works */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>How the PayPal IPN Email System Works</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-primary font-bold">1</span>
                    </div>
                    <h3 className="font-medium mb-2">Customer Purchases</h3>
                    <p className="text-sm text-muted-foreground">
                      Customer clicks PayPal subscription link and completes payment
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-primary font-bold">2</span>
                    </div>
                    <h3 className="font-medium mb-2">PayPal Sends IPN</h3>
                    <p className="text-sm text-muted-foreground">
                      PayPal automatically sends payment notification to your IPN endpoint
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-primary font-bold">3</span>
                    </div>
                    <h3 className="font-medium mb-2">Welcome Email Sent</h3>
                    <p className="text-sm text-muted-foreground">
                      System automatically sends welcome email with download instructions
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}