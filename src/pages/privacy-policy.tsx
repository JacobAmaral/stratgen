import React from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, ShieldCheckIcon, FileTextIcon } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | StratGen by WeTradeLabs Inc.</title>
        <meta
          name="description"
          content="Official Privacy Policy for StratGen algorithmic trading and backtesting software and stratgensoft.com, operated by WeTradeLabs Inc."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="StratGen privacy policy, WeTradeLabs Inc., data privacy, algorithmic trading software privacy, local backtesting data security"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.stratgensoft.com/privacy-policy" />

        {/* Open Graph / Facebook */}
        <meta property="og:site_name" content="StratGen" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content="https://www.stratgensoft.com/privacy-policy" />
        <meta property="og:title" content="Privacy Policy | StratGen by WeTradeLabs Inc." />
        <meta
          property="og:description"
          content="Learn how WeTradeLabs Inc. protects your privacy, personal data, and local quantitative trading strategies when using StratGen."
        />
        <meta property="og:image" content="https://www.stratgensoft.com/stratgen_manual_images/homescreen.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Privacy Policy | StratGen by WeTradeLabs Inc." />
        <meta
          name="twitter:description"
          content="Learn how WeTradeLabs Inc. protects your privacy, personal data, and local quantitative trading strategies when using StratGen."
        />
        <meta name="twitter:image" content="https://www.stratgensoft.com/stratgen_manual_images/homescreen.jpg" />

        <link rel="icon" href="/stratgen_manual_images/newlogo2025.ico" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "StratGen Privacy Policy",
              description: "Privacy Policy for StratGen software and website operated by WeTradeLabs Inc.",
              url: "https://www.stratgensoft.com/privacy-policy",
              publisher: {
                "@type": "Organization",
                name: "WeTradeLabs Inc.",
                url: "https://www.stratgensoft.com/",
                email: "jacob@wetradelabs.com",
              },
              breadcrumb: {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://www.stratgensoft.com/",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Privacy Policy",
                    item: "https://www.stratgensoft.com/privacy-policy",
                  },
                ],
              },
            }),
          }}
        />
      </Head>

      <div className="bg-background min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          {/* Header Section */}
          <section className="py-14 md:py-16 px-4 sm:px-6 lg:px-8 border-b border-border/80">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-between gap-4 mb-8">
                <Button variant="ghost" size="sm" asChild className="-ml-3 text-muted-foreground hover:text-foreground">
                  <Link href="/">
                    <ArrowLeftIcon className="h-4 w-4 mr-2" />
                    Back to Home
                  </Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/terms-and-conditions">
                    <FileTextIcon className="h-4 w-4 mr-2" />
                    View Terms &amp; Conditions
                  </Link>
                </Button>
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-4">
                Privacy <span className="text-primary">Policy</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
                How WeTradeLabs Inc. collects, uses, safeguards, and respects your information across the StratGen desktop application, website, and services.
              </p>
              <p className="text-sm text-muted-foreground mt-4 tabular-nums">
                <strong className="text-foreground">Effective Date:</strong> January 1, 2025 &nbsp;·&nbsp; <strong className="text-foreground">Last Updated:</strong> November 2, 2026
              </p>
            </div>
          </section>

          {/* Main Content */}
          <article className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-10 text-sm sm:text-base leading-relaxed">
              {/* Key Privacy Highlights Banner */}
              <div className="rounded-md border border-primary/40 bg-card p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <ShieldCheckIcon className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div className="space-y-2">
                    <h2 className="text-xl font-bold text-foreground">Commitment to Quantitative Strategy &amp; Data Privacy</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      StratGen is engineered by <strong className="text-foreground">WeTradeLabs Inc.</strong> as a local-first Windows desktop application. Your proprietary trading strategies, custom indicator formulas, imported OHLCV historical market datasets, backtest results, walk-forward matrices, portfolios, and exported NinjaTrader, TradeStation, and Python code remain strictly on your local computer. WeTradeLabs Inc. does <strong className="text-foreground">not</strong> harvest, inspect, or transmit your proprietary trading logic or backtest data to our servers.
                    </p>
                  </div>
                </div>
              </div>

              {/* 1. Introduction */}
              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">1. Introduction &amp; Scope</h2>
                <p className="text-muted-foreground">
                  This Privacy Policy (&quot;Policy&quot;) describes how <strong className="text-foreground">WeTradeLabs Inc.</strong> (&quot;WeTradeLabs,&quot; &quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, uses, stores, discloses, and protects information in connection with your access to and use of:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>The <strong className="text-foreground">StratGen</strong> desktop software application, including all versions, updates, builds, engines (such as the v2 Tensor Engine and the local StratGen Azores 1.0 model), and associated tools (collectively, the &quot;Software&quot;);</li>
                  <li>Our official website located at <a href="https://www.stratgensoft.com" className="text-primary hover:underline">https://www.stratgensoft.com</a> and any related domains or subdomains (the &quot;Website&quot;); and</li>
                  <li>Our customer support, licensing infrastructure, documentation, and live best-practices training sessions (together with the Software and Website, the &quot;Services&quot;).</li>
                </ul>
                <p className="text-muted-foreground">
                  By accessing the Website, purchasing a subscription or license, downloading, installing, or using the Software, you acknowledge that you have read and understood this Privacy Policy. If you do not agree with our policies and practices, please do not use the Software or Services.
                </p>
              </section>

              {/* 2. Information We Collect */}
              <section className="space-y-3 border-t border-border pt-8">
                <h2 className="text-2xl font-bold text-foreground">2. Information We Collect</h2>
                <p className="text-muted-foreground">
                  We collect only the minimum information necessary to license, deliver, support, and improve StratGen:
                </p>

                <h3 className="text-lg font-semibold text-foreground pt-2">2.1 Information You Provide Directly</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>
                    <strong className="text-foreground">Account, Licensing &amp; Contact Information:</strong> When you purchase a StratGen subscription or lifetime license, register your Software, schedule live training, or contact us via email, we may collect your name, email address, billing address, account identifier, and communication preferences.
                  </li>
                  <li>
                    <strong className="text-foreground">Support &amp; Training Communications:</strong> When you reach out to <a href="mailto:jacob@wetradelabs.com" className="text-primary hover:underline">jacob@wetradelabs.com</a> or participate in live training sessions, we collect the contents of your messages, diagnostic logs or screenshots you voluntarily share, and scheduling details.
                  </li>
                </ul>

                <h3 className="text-lg font-semibold text-foreground pt-2">2.2 Payment &amp; Billing Information</h3>
                <p className="text-muted-foreground">
                  All purchases of StratGen monthly subscriptions and lifetime access plans are processed through secure third-party payment processors (including PayPal, Stripe, or designated checkout platforms). <strong className="text-foreground">WeTradeLabs Inc. does not collect, process, or store your full credit card numbers, bank account numbers, or payment credentials on our servers.</strong> We receive only transaction confirmation data (such as your name, email address, subscription plan status, transaction ID, and billing timestamps) necessary to provision and verify your software license.
                </p>

                <h3 className="text-lg font-semibold text-foreground pt-2">2.3 Software Licensing &amp; Technical Verification Data</h3>
                <p className="text-muted-foreground">
                  To protect the Software against unauthorized distribution, piracy, and license abuse, the Software may periodically communicate with our licensing servers to validate your license key or subscription status. This validation may transmit basic technical identifiers such as your license key, Software version number, operating system version, IP address, and a cryptographic machine/hardware fingerprint.
                </p>

                <h3 className="text-lg font-semibold text-foreground pt-2">2.4 Automatically Collected Website Data</h3>
                <p className="text-muted-foreground">
                  When you visit <a href="https://www.stratgensoft.com" className="text-primary hover:underline">https://www.stratgensoft.com</a>, standard web server logs and analytics tools may automatically collect technical metadata, including your IP address, browser type and version, operating system, referring URLs, pages viewed, time spent on pages, and access timestamps.
                </p>
              </section>

              {/* 3. Local Desktop Data & AI Copilot Privacy */}
              <section className="space-y-3 border-t border-border pt-8">
                <h2 className="text-2xl font-bold text-foreground">
                  3. Local Desktop Execution, Trading Data &amp; AI Copilot Privacy
                </h2>
                <p className="text-muted-foreground">
                  We understand that quantitative traders, systematic researchers, and proprietary trading firms require strict confidentiality over their intellectual property:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>
                    <strong className="text-foreground">Local Data Sovereignty:</strong> All OHLCV market data files you import, signal selections, custom C# MiniSignal scripts, backtest simulations, Monte Carlo runs, walk-forward optimization results, saved portfolios, and exported strategy code (for NinjaTrader, TradeStation, and Python) are stored and processed locally on your computer&apos;s storage drive and memory.
                  </li>
                  <li>
                    <strong className="text-foreground">StratGen Local Azores 1.0 Model:</strong> When using the built-in <strong className="text-foreground">StratGen Azores 1.0</strong> engine inside the AI Copilot Studio, all prompt parsing, C# Roslyn compilation, and quantitative rule synthesis execute 100% locally within the compiled desktop application on your Windows machine. Zero prompts or strategy data are sent to external cloud servers.
                  </li>
                  <li>
                    <strong className="text-foreground">Optional Third-Party Cloud BYOK (Bring Your Own Key) Providers:</strong> StratGen offers optional integration with third-party cloud artificial intelligence providers (such as OpenRouter, Anthropic Claude, OpenAI ChatGPT, and Google Gemini) using your own API keys. If you voluntarily configure and select a third-party Cloud BYOK provider:
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>Your API keys are stored locally on your machine using local encryption/KeyVault mechanisms and are never transmitted to WeTradeLabs Inc.</li>
                      <li>Your conversational prompts and tool context are transmitted directly from your machine to the third-party API endpoint you selected.</li>
                      <li>Such transmissions are governed by the respective privacy policies and terms of service of the third-party provider you selected (e.g., OpenAI, Anthropic, Google, or OpenRouter). WeTradeLabs Inc. is not responsible for the data handling practices of third-party AI providers.</li>
                    </ul>
                  </li>
                </ul>
              </section>

              {/* 4. How We Use Your Information */}
              <section className="space-y-3 border-t border-border pt-8">
                <h2 className="text-2xl font-bold text-foreground">4. How We Use Your Information</h2>
                <p className="text-muted-foreground">
                  WeTradeLabs Inc. uses the information we collect for the following legitimate business purposes:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>To provision, authenticate, and maintain your StratGen software license or subscription;</li>
                  <li>To deliver Software downloads, version updates, patches, and release notes;</li>
                  <li>To provide technical customer support, troubleshooting, and live training on best practices;</li>
                  <li>To process transactions, manage subscription renewals or cancellations, and send billing notices;</li>
                  <li>To detect, investigate, and prevent piracy, unauthorized license sharing, fraud, security breaches, or violations of our <Link href="/terms-and-conditions" className="text-primary hover:underline">Terms &amp; Conditions</Link>;</li>
                  <li>To monitor and improve the performance, usability, and reliability of our Website and Software; and</li>
                  <li>To comply with applicable legal, tax, accounting, and regulatory obligations.</li>
                </ul>
              </section>

              {/* 5. How We Share & Disclose Information */}
              <section className="space-y-3 border-t border-border pt-8">
                <h2 className="text-2xl font-bold text-foreground">5. Information Sharing &amp; Disclosure</h2>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">WeTradeLabs Inc. does not sell, rent, or trade your personal information or trading strategies to third parties.</strong> We may share limited information only in the following circumstances:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>
                    <strong className="text-foreground">Service Providers &amp; Processors:</strong> With trusted third-party vendors who assist us in operating our business—such as payment processors (e.g., PayPal), web hosting/CDN providers (e.g., Cloudflare), email delivery services, and licensing infrastructure—bound by confidentiality obligations.
                  </li>
                  <li>
                    <strong className="text-foreground">Legal Compliance &amp; Protection of Rights:</strong> When required to do so by law, subpoena, court order, or governmental regulation, or when we believe in good faith that disclosure is necessary to protect the property, intellectual property, safety, or legal rights of WeTradeLabs Inc., our users, or the public.
                  </li>
                  <li>
                    <strong className="text-foreground">Business Transfers:</strong> In connection with any merger, acquisition, corporate reorganization, financing, or sale of all or a portion of WeTradeLabs Inc.&apos;s assets, in which case personal information held by us may be among the transferred assets.
                  </li>
                </ul>
              </section>

              {/* 6. Cookies & Tracking Technologies */}
              <section className="space-y-3 border-t border-border pt-8">
                <h2 className="text-2xl font-bold text-foreground">6. Cookies &amp; Tracking Technologies</h2>
                <p className="text-muted-foreground">
                  Our Website may use essential cookies, local storage, and standard analytical tools to ensure proper site functionality, remember user preferences, and analyze aggregate traffic patterns. You can configure your web browser to refuse cookies or alert you when cookies are being sent. Disabling cookies does not affect the operation of the standalone StratGen Windows desktop application.
                </p>
              </section>

              {/* 7. Data Security & Retention */}
              <section className="space-y-3 border-t border-border pt-8">
                <h2 className="text-2xl font-bold text-foreground">7. Data Security &amp; Retention</h2>
                <p className="text-muted-foreground">
                  WeTradeLabs Inc. implements commercially reasonable administrative, technical, and physical safeguards—including HTTPS/TLS encryption in transit and restricted access controls—to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>
                <p className="text-muted-foreground">
                  We retain your account and licensing records for as long as your license or subscription remains active and thereafter as necessary to comply with our legal, tax, accounting, and anti-piracy obligations, resolve disputes, and enforce our agreements.
                </p>
              </section>

              {/* 8. Your Privacy Rights */}
              <section className="space-y-3 border-t border-border pt-8">
                <h2 className="text-2xl font-bold text-foreground">8. Your Privacy Rights (GDPR, CCPA/CPRA &amp; PIPEDA)</h2>
                <p className="text-muted-foreground">
                  Depending on your jurisdiction (including residents of Canada, the European Economic Area, the United Kingdom, California, and other US states), you may have specific statutory rights regarding your personal information:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong className="text-foreground">Right to Access &amp; Portability:</strong> Request confirmation of whether we process your personal data and obtain a copy of the personal data we hold about you.</li>
                  <li><strong className="text-foreground">Right to Correction:</strong> Request correction of inaccurate or incomplete personal information.</li>
                  <li><strong className="text-foreground">Right to Deletion / Erasure:</strong> Request deletion of your personal data, subject to legal retention exceptions (such as maintaining transaction records for tax laws or active license verification).</li>
                  <li><strong className="text-foreground">Right to Opt-Out of Marketing:</strong> Opt out of promotional communications at any time by contacting us or using the unsubscribe mechanism in any marketing email (transactional and licensing emails may still be sent).</li>
                  <li><strong className="text-foreground">No Sale of Personal Information:</strong> We do not &quot;sell&quot; or &quot;share&quot; personal information for cross-context behavioral advertising as defined under the California Consumer Privacy Act (CCPA/CPRA).</li>
                </ul>
                <p className="text-muted-foreground">
                  To exercise any of these rights, please contact us at <a href="mailto:jacob@wetradelabs.com" className="text-primary hover:underline">jacob@wetradelabs.com</a>. We may verify your identity before fulfilling your request.
                </p>
              </section>

              {/* 9. International Data Transfers */}
              <section className="space-y-3 border-t border-border pt-8">
                <h2 className="text-2xl font-bold text-foreground">9. International Data Transfers</h2>
                <p className="text-muted-foreground">
                  WeTradeLabs Inc. operates from North America (Canada and the United States). If you access our Website or Services from outside North America, please be aware that your information may be transferred to, stored, and processed in jurisdictions where our servers or third-party service providers are located. By using the Software or Services, you consent to such transfers in accordance with this Policy.
                </p>
              </section>

              {/* 10. Children's Privacy */}
              <section className="space-y-3 border-t border-border pt-8">
                <h2 className="text-2xl font-bold text-foreground">10. Children&apos;s Privacy</h2>
                <p className="text-muted-foreground">
                  StratGen and our Services are intended exclusively for adults aged eighteen (18) years or older (or the age of legal majority in your jurisdiction). We do not knowingly collect personal information from minors under the age of 18. If we learn that we have inadvertently collected personal information from a minor, we will promptly delete it.
                </p>
              </section>

              {/* 11. Third-Party Links */}
              <section className="space-y-3 border-t border-border pt-8">
                <h2 className="text-2xl font-bold text-foreground">11. Third-Party Websites &amp; Platforms</h2>
                <p className="text-muted-foreground">
                  Our Website and documentation may contain links to third-party websites, payment portals, data vendors, or trading platforms (such as NinjaTrader, TradeStation, Python repositories, or PayPal). This Privacy Policy applies solely to Services operated by WeTradeLabs Inc. We are not responsible for the privacy practices or content of third-party websites or software platforms.
                </p>
              </section>

              {/* 12. Changes to This Privacy Policy */}
              <section className="space-y-3 border-t border-border pt-8">
                <h2 className="text-2xl font-bold text-foreground">12. Changes to This Privacy Policy</h2>
                <p className="text-muted-foreground">
                  WeTradeLabs Inc. reserves the right to update or modify this Privacy Policy at any time to reflect changes in our Software, business practices, or legal requirements. When we make changes, we will revise the &quot;Last Updated&quot; date at the top of this page. Your continued use of StratGen or the Website following the posting of changes constitutes your acceptance of such changes.
                </p>
              </section>

              {/* 13. Contact Information */}
              <section className="space-y-3 border-t border-border pt-8">
                <h2 className="text-2xl font-bold text-foreground">
                  13. Contact Us
                </h2>
                <p className="text-muted-foreground">
                  If you have any questions, concerns, or requests regarding this Privacy Policy or how WeTradeLabs Inc. handles your data, please contact us:
                </p>
                <div className="rounded-md border border-border bg-card p-5 space-y-1 text-sm">
                  <p className="font-semibold text-foreground">WeTradeLabs Inc.</p>
                  <p className="text-muted-foreground">Attn: Legal &amp; Privacy Compliance Officer (StratGen)</p>
                  <p className="text-muted-foreground">
                    Email:{" "}
                    <a href="mailto:jacob@wetradelabs.com?subject=StratGen%20Privacy%20Inquiry" className="text-primary hover:underline font-medium">
                      jacob@wetradelabs.com
                    </a>
                  </p>
                  <p className="text-muted-foreground">
                    Website:{" "}
                    <a href="https://www.stratgensoft.com" className="text-primary hover:underline">
                      https://www.stratgensoft.com
                    </a>
                  </p>
                </div>
              </section>
            </div>
          </article>
        </main>

        {/* Footer */}
        <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start gap-10">
              <div className="max-w-sm">
                <p className="font-bold text-lg text-foreground mb-3">StratGen</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Professional algorithmic trading platform by WeTradeLabs Inc. for quantitative research, backtesting, robustness validation, and automated code export, with live training on best practices included.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
                <div>
                  <p className="text-xs font-semibold tracking-wider text-foreground mb-4">Platform</p>
                  <ul className="space-y-2.5">
                    <li>
                      <Link href="/#features" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        Capabilities
                      </Link>
                    </li>
                    <li>
                      <Link href="/#screenshots" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        Screenshots
                      </Link>
                    </li>
                    <li>
                      <Link href="/#faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        FAQ
                      </Link>
                    </li>
                    <li>
                      <Link href="/user-manual" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        User Manual
                      </Link>
                    </li>
                    <li>
                      <Link href="/#pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        Pricing
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="text-xs font-semibold tracking-wider text-foreground mb-4">Resources</p>
                  <ul className="space-y-2.5">
                    <li>
                      <Link href="/what-is-stratgen" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        What is StratGen?
                      </Link>
                    </li>
                    <li>
                      <Link href="/changelog" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        Changelog
                      </Link>
                    </li>
                    <li>
                      <Link href="/#disclaimer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        Risk Disclaimer
                      </Link>
                    </li>
                    <li>
                      <a href="mailto:jacob@wetradelabs.com?subject=StratGen&body=Hey%2C%20I%20am%20interested%20in%20StratGen%20and%20wanted%20to%20know%20more!" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        Contact Support
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="text-xs font-semibold tracking-wider text-foreground mb-4">Legal</p>
                  <ul className="space-y-2.5">
                    <li>
                      <Link href="/privacy-policy" className="text-sm text-primary font-medium transition-colors">
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link href="/terms-and-conditions" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        Terms &amp; Conditions
                      </Link>
                    </li>
                    <li>
                      <Link href="/#disclaimer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        Trading Risk Disclosure
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="text-xs font-semibold tracking-wider text-foreground mb-4">Contact</p>
                  <a href="mailto:jacob@wetradelabs.com?subject=StratGen&body=Hey%2C%20I%20am%20interested%20in%20StratGen%20and%20wanted%20to%20know%20more!" className="text-sm text-primary hover:text-primary/80 font-medium">
                    jacob@wetradelabs.com
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-border/60 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
              <p className="text-xs text-muted-foreground">
                © {new Date().getFullYear()} WeTradeLabs Inc. All rights reserved. StratGen™ is a trademark of WeTradeLabs Inc.
              </p>
              <div className="flex items-center gap-6 text-xs text-muted-foreground">
                <Link href="/privacy-policy" className="hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms-and-conditions" className="hover:text-primary transition-colors">
                  Terms &amp; Conditions
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
