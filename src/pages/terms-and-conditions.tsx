import React from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeftIcon, AlertTriangleIcon, ScaleIcon, ShieldCheckIcon, MailIcon } from "lucide-react";

export default function TermsAndConditions() {
  return (
    <>
      <Head>
        <title>Terms &amp; Conditions | StratGen by WeTradeLabs Inc.</title>
        <meta
          name="description"
          content="Official Terms and Conditions, End-User License Agreement (EULA), and Financial Risk Disclosures for StratGen algorithmic trading software by WeTradeLabs Inc."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="StratGen terms and conditions, WeTradeLabs Inc., EULA, software license agreement, algorithmic trading disclaimer, CFTC Rule 4.41 disclosure"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.stratgensoft.com/terms-and-conditions" />

        {/* Open Graph / Facebook */}
        <meta property="og:site_name" content="StratGen" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content="https://www.stratgensoft.com/terms-and-conditions" />
        <meta property="og:title" content="Terms & Conditions | StratGen by WeTradeLabs Inc." />
        <meta
          property="og:description"
          content="Official Terms and Conditions, End-User License Agreement (EULA), and Risk Disclosures for StratGen software by WeTradeLabs Inc."
        />
        <meta property="og:image" content="https://www.stratgensoft.com/stratgen_manual_images/homescreen.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Terms & Conditions | StratGen by WeTradeLabs Inc." />
        <meta
          name="twitter:description"
          content="Official Terms and Conditions, End-User License Agreement (EULA), and Risk Disclosures for StratGen software by WeTradeLabs Inc."
        />
        <meta name="twitter:image" content="https://www.stratgensoft.com/stratgen_manual_images/homescreen.jpg" />

        <link rel="icon" href="/stratgen_manual_images/newlogo2025.ico" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "StratGen Terms and Conditions",
              description: "Terms and Conditions and End-User License Agreement (EULA) for StratGen software operated by WeTradeLabs Inc.",
              url: "https://www.stratgensoft.com/terms-and-conditions",
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
                    name: "Terms & Conditions",
                    item: "https://www.stratgensoft.com/terms-and-conditions",
                  },
                ],
              },
            }),
          }}
        />
      </Head>

      <div className="bg-background min-h-screen flex flex-col">
        <Header />

        {/* Hero Section */}
        <section className="relative py-12 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-primary/10 to-background">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between gap-4 mb-8">
              <Button variant="outline" size="sm" asChild>
                <Link href="/">
                  <ArrowLeftIcon className="h-4 w-4 mr-2" />
                  Back to Home
                </Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/privacy-policy">
                  <ShieldCheckIcon className="h-4 w-4 mr-2" />
                  View Privacy Policy
                </Link>
              </Button>
            </div>

            <div className="text-center mb-8">
              <Badge variant="outline" className="mb-4 px-3 py-1 text-sm bg-primary/10 border-primary/20 text-primary">
                WeTradeLabs Inc. Legal Agreement &amp; EULA
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Terms &amp; <span className="text-primary">Conditions</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Terms of Service, End-User License Agreement (EULA), and Financial Risk Disclosures governing the use of StratGen software and services by WeTradeLabs Inc.
              </p>
              <p className="text-sm text-muted-foreground mt-4">
                <strong>Effective Date:</strong> January 1, 2025 &nbsp;|&nbsp; <strong>Last Updated:</strong> November 2, 2026
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 px-4 md:px-6 lg:px-8 flex-1">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Mandatory Risk Warning Box */}
            <Card className="border-2 border-primary/20 bg-primary/5">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <AlertTriangleIcon className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div className="space-y-2">
                    <h2 className="text-xl font-bold">Important Legal Notice &amp; Trading Risk Warning</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      <strong>PLEASE READ THESE TERMS AND CONDITIONS CAREFULLY BEFORE PURCHASING, DOWNLOADING, INSTALLING, OR USING STRATGEN.</strong> StratGen is a quantitative research, backtesting, and code-generation software tool developed and owned by <strong>WeTradeLabs Inc.</strong> Neither WeTradeLabs Inc. nor StratGen is a registered broker-dealer, investment advisor, commodity trading advisor (CTA), or financial planner. Nothing in the Software, Website, documentation, or live training constitutes investment, financial, legal, or tax advice. Trading futures, equities, options, foreign exchange (forex), and cryptocurrencies involves substantial risk of loss and is not suitable for every investor.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-border/40 shadow-sm">
              <CardContent className="p-6 md:p-10 space-y-8 text-sm md:text-base leading-relaxed">
                {/* 1. Acceptance of Terms */}
                <div className="space-y-3">
                  <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                    <ScaleIcon className="h-6 w-6 text-primary" />
                    1. Agreement to Terms &amp; Binding Contract
                  </h2>
                  <p className="text-muted-foreground">
                    These Terms and Conditions, together with our End-User License Agreement (&quot;EULA&quot;) and <Link href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link> (collectively, the &quot;Agreement&quot; or &quot;Terms&quot;), constitute a legally binding contract between you (&quot;User,&quot; &quot;Licensee,&quot; &quot;you,&quot; or &quot;your&quot;) and <strong>WeTradeLabs Inc.</strong> (&quot;WeTradeLabs,&quot; &quot;Company,&quot; &quot;Licensor,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) governing your access to and use of:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>The <strong>StratGen</strong> desktop software application, including its v2 Tensor Backtest &amp; Walk-Forward Engine, AI Copilot Studio, StratGen Local Azores 1.0 model, technical/fundamental signal libraries, code generators, executables, source templates, and updates (the &quot;Software&quot;);</li>
                    <li>The official website located at <a href="https://www.stratgensoft.com" className="text-primary hover:underline">https://www.stratgensoft.com</a> (the &quot;Website&quot;); and</li>
                    <li>Any accompanying user manuals, documentation, educational materials, customer support, and live training sessions provided by WeTradeLabs Inc. (collectively with the Software and Website, the &quot;Services&quot;).</li>
                  </ul>
                  <p className="text-muted-foreground">
                    By clicking &quot;Subscribe,&quot; &quot;Buy,&quot; &quot;Download,&quot; &quot;Install,&quot; or otherwise accessing or using any part of the Software or Services, you represent that you are at least eighteen (18) years of age (or the age of legal majority in your jurisdiction) and that you agree to be bound by all terms and conditions of this Agreement. If you are entering into this Agreement on behalf of a company, trading firm, hedge fund, or other legal entity, you represent that you have the authority to bind such entity to these Terms.
                  </p>
                </div>

                {/* 2. Software License Grant & Restrictions (EULA) */}
                <div className="space-y-3 border-t border-border/40 pt-8">
                  <h2 className="text-2xl font-bold text-foreground">2. Software License Grant &amp; Intellectual Property Protection</h2>
                  <h3 className="text-lg font-semibold text-foreground pt-2">2.1 Limited License Grant</h3>
                  <p className="text-muted-foreground">
                    Subject to your strict and continuous compliance with this Agreement and timely payment of all applicable subscription or license fees, WeTradeLabs Inc. grants you a limited, revocable, non-exclusive, non-transferable, and non-sublicensable license to install and execute the object-code version of the StratGen Software on a Windows computer owned or leased by you solely for your personal or internal quantitative research and strategy development purposes. <strong>The Software is licensed, not sold, to you.</strong>
                  </p>

                  <h3 className="text-lg font-semibold text-foreground pt-2">2.2 Ownership of Intellectual Property</h3>
                  <p className="text-muted-foreground">
                    WeTradeLabs Inc. retains all right, title, ownership, and interest—including all copyrights, patents, trade secrets, trademarks, service marks, and other intellectual property rights—in and to the StratGen Software, the Website, the v2 Tensor Engine, the StratGen Azores 1.0 quantitative engine, the 600+ built-in signal definitions and indicator implementations, the code-generation templates, the user interface design, and all documentation. &quot;StratGen&quot; and &quot;WeTradeLabs&quot; are trademarks of WeTradeLabs Inc. All rights not expressly granted herein are reserved by WeTradeLabs Inc.
                  </p>

                  <h3 className="text-lg font-semibold text-foreground pt-2">2.3 Strict License Restrictions</h3>
                  <p className="text-muted-foreground">
                    You shall not, and shall not permit, assist, or authorize any third party to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li><strong>No Reverse Engineering:</strong> Decompile, disassemble, reverse engineer, inspect intermediate IL/bytecode, extract weights or rules from the StratGen Azores 1.0 engine, or otherwise attempt to derive or reconstruct the source code, underlying algorithms, data structures, or trade secrets of the Software;</li>
                    <li><strong>No Tampering or License Bypass:</strong> Circumvent, disable, spoof, patch, or tamper with any license key verification, authentication mechanism, digital rights management (DRM), or security feature of the Software;</li>
                    <li><strong>No Unauthorized Distribution or Sharing:</strong> Sell, rent, lease, lend, sublicense, redistribute, broadcast, host on a shared server/virtual machine for multi-user access, or share your license credentials or Software binaries with any third party;</li>
                    <li><strong>No Competing Products:</strong> Use the Software, its user manual, its indicator library, or its code-generation templates to design, benchmark, train, or build a competing backtesting, quantitative research, or algorithmic code-generation software product; or</li>
                    <li><strong>No Removal of Notices:</strong> Remove, obscure, or alter any copyright, trademark, or proprietary rights notices affixed to or contained within the Software or documentation.</li>
                  </ul>
                </div>

                {/* 3. Ownership & Use of Exported Code */}
                <div className="space-y-3 border-t border-border/40 pt-8">
                  <h2 className="text-2xl font-bold text-foreground">3. Exported Strategy Code &amp; Third-Party Execution Platforms</h2>
                  <h3 className="text-lg font-semibold text-foreground pt-2">3.1 Your Strategy Output</h3>
                  <p className="text-muted-foreground">
                    StratGen enables you to generate and export algorithmic strategy code for third-party platforms, including NinjaTrader (C# NinjaScript), TradeStation (EasyLanguage), and Python (&quot;Exported Code&quot;). Subject to your valid license, you may use, modify, and deploy Exported Code generated from your strategy configurations for your own trading and research activities. However, you may not repackage or sell StratGen&apos;s underlying boilerplate code architecture as a standalone code-generation tool.
                  </p>

                  <h3 className="text-lg font-semibold text-foreground pt-2">3.2 Mandatory Verification &amp; &quot;AS-IS&quot; Nature of Exported Code</h3>
                  <p className="text-muted-foreground">
                    <strong>ALL EXPORTED CODE AND AI COPILOT OUTPUTS ARE PROVIDED STRICTLY &quot;AS IS&quot; WITHOUT WARRANTY OF ANY KIND.</strong> Automated code generation and cross-platform translation involve inherent complexities, including differences in how third-party platforms handle bar construction, intrabar tick replay, order fill assumptions, slippage, commissions, session boundaries, contract rollovers, pyramiding, and position sizing.
                  </p>
                  <p className="text-muted-foreground">
                    <strong>You are solely and exclusively responsible for:</strong>
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Thoroughly reviewing, inspecting, and compiling all Exported Code prior to use;</li>
                    <li>Testing all Exported Code extensively in a <strong>simulated / paper-trading environment</strong> on your target execution platform (e.g., NinjaTrader Sim101, TradeStation Simulated Trading, or Python paper brokerage) to verify execution parity, order handling, stop-loss placement, and risk limits before risking any real capital;</li>
                    <li>Monitoring any live automated trading system continuously and maintaining independent kill-switches, daily loss lockouts, and brokerage-level risk limits.</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-foreground pt-2">3.3 No Affiliation with Third-Party Platforms</h3>
                  <p className="text-muted-foreground">
                    NinjaTrader® is a registered trademark of NinjaTrader Group, LLC. TradeStation® and EasyLanguage® are registered trademarks of TradeStation Technologies, Inc. Python® is a registered trademark of the Python Software Foundation. WeTradeLabs Inc. is an independent software company and is not affiliated with, endorsed by, or sponsored by NinjaTrader Group, LLC, TradeStation Technologies, Inc., or any brokerage or data vendor.
                  </p>
                </div>

                {/* 4. Financial, Trading & CFTC Rule 4.41 Disclaimers */}
                <div className="space-y-3 border-t border-border/40 pt-8">
                  <h2 className="text-2xl font-bold text-foreground">4. Financial Disclaimers, No Investment Advice &amp; CFTC Rule 4.41 Disclosure</h2>
                  <h3 className="text-lg font-semibold text-foreground pt-2">4.1 Not Investment, Financial, or Trading Advice</h3>
                  <p className="text-muted-foreground">
                    WeTradeLabs Inc. provides software tools and technical software training only. Neither WeTradeLabs Inc. nor its founders, officers, employees, or contractors are registered as an Investment Advisor, Broker-Dealer, Commodity Trading Advisor (CTA), or Futures Commission Merchant (FCM) with the U.S. Securities and Exchange Commission (SEC), the Commodity Futures Trading Commission (CFTC), the National Futures Association (NFA), the Canadian Investment Regulatory Organization (CIRO), or any other regulatory authority.
                  </p>
                  <p className="text-muted-foreground">
                    No sample strategy, template, pre-configured AI Copilot prompt chip (such as &quot;Build Swing NQ Strategy,&quot; &quot;Intraday ES Strategy,&quot; or &quot;Energies Strategy&quot;), screenshot, user manual example, or statement made during live training sessions constitutes a recommendation or solicitation to buy, sell, or hold any security, futures contract, commodity, option, forex pair, cryptocurrency, or financial instrument, or to deploy any specific trading strategy with live capital.
                  </p>

                  <h3 className="text-lg font-semibold text-foreground pt-2">4.2 Substantial Risk of Loss in Financial Markets</h3>
                  <p className="text-muted-foreground">
                    Trading futures, options, equities, forex, and cryptocurrencies involves a high degree of leverage and substantial risk of financial loss. You can lose more than your initial margin or deposit. You should only trade with risk capital—money that you can afford to lose without affecting your financial security or lifestyle. Past performance of any trading system, indicator, or methodology is not indicative of future results.
                  </p>

                  <h3 className="text-lg font-semibold text-foreground pt-2">4.3 CFTC Rule 4.41 — Hypothetical &amp; Simulated Performance Disclosure</h3>
                  <div className="bg-muted/40 border border-border/60 rounded-lg p-5 font-mono text-xs md:text-sm text-foreground space-y-3">
                    <p>
                      <strong>HYPOTHETICAL OR SIMULATED PERFORMANCE RESULTS HAVE CERTAIN LIMITATIONS. UNLIKE AN ACTUAL PERFORMANCE RECORD, SIMULATED RESULTS DO NOT REPRESENT ACTUAL TRADING. ALSO, SINCE THE TRADES HAVE NOT BEEN EXECUTED, THE RESULTS MAY HAVE UNDER- OR OVER-COMPENSATED FOR THE IMPACT, IF ANY, OF CERTAIN MARKET FACTORS, SUCH AS LACK OF LIQUIDITY, SLIPPAGE, AND BID-ASK SPREADS.</strong>
                    </p>
                    <p>
                      <strong>SIMULATED TRADING PROGRAMS IN GENERAL ARE ALSO SUBJECT TO THE FACT THAT THEY ARE DESIGNED WITH THE BENEFIT OF HINDSIGHT. NO REPRESENTATION IS BEING MADE THAT ANY ACCOUNT WILL OR IS LIKELY TO ACHIEVE PROFIT OR LOSSES SIMILAR TO THOSE SHOWN IN ANY STRATGEN BACKTEST, WALK-FORWARD OPTIMIZATION, MONTE CARLO SIMULATION, OR PORTFOLIO REPORT.</strong>
                    </p>
                  </div>
                </div>

                {/* 5. AI Copilot & Autonomous Workflow Disclaimers */}
                <div className="space-y-3 border-t border-border/40 pt-8">
                  <h2 className="text-2xl font-bold text-foreground">5. AI Copilot Studio &amp; Automated Workflow Disclaimers</h2>
                  <p className="text-muted-foreground">
                    StratGen includes automated search features (&quot;AI Workflows&quot;) and conversational quantitative tools (&quot;AI Copilot&quot;), powered either by the local StratGen Azores 1.0 engine or by third-party cloud Large Language Models (LLMs) connected via your own API keys (Cloud BYOK). You acknowledge and agree that:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Artificial intelligence and automated optimization algorithms are probabilistic and statistical in nature and may generate strategies that are curve-fit, over-optimized, logically flawed, or unsuitable for live market conditions;</li>
                    <li>Passing automated thresholds (such as Return-to-Drawdown ratios, Walk-Forward Efficiency, or Monte Carlo simulations) does not guarantee that a strategy has a real market edge or will be profitable in future live trading;</li>
                    <li>When using Cloud BYOK providers (such as OpenRouter, OpenAI, Anthropic, or Google Gemini), you are solely responsible for all API token charges, rate limits, and compliance with the respective third-party provider&apos;s terms of service.</li>
                  </ul>
                </div>

                {/* 6. Subscriptions, Pricing, Billing & No-Refund Policy */}
                <div className="space-y-3 border-t border-border/40 pt-8">
                  <h2 className="text-2xl font-bold text-foreground">6. Pricing, Subscriptions, Cancellations &amp; Strict No-Refund Policy</h2>
                  <h3 className="text-lg font-semibold text-foreground pt-2">6.1 Subscription &amp; Lifetime Plans</h3>
                  <p className="text-muted-foreground">
                    StratGen is offered via recurring Monthly Subscriptions and one-time Lifetime Access licenses at the prices listed on our Website at the time of purchase. All prices are stated in U.S. Dollars (USD) unless otherwise specified, and you are responsible for any applicable sales, use, value-added (VAT), or goods and services taxes (GST/HST).
                  </p>

                  <h3 className="text-lg font-semibold text-foreground pt-2">6.2 Automatic Renewal &amp; Cancellation of Monthly Subscriptions</h3>
                  <p className="text-muted-foreground">
                    Monthly subscriptions automatically renew each billing cycle at the then-current subscription rate unless canceled prior to the renewal date. You may cancel your monthly subscription at any time through your payment provider (e.g., PayPal automatic payments dashboard) or by contacting <a href="mailto:jacob@wetradelabs.com" className="text-primary hover:underline">jacob@wetradelabs.com</a> at least forty-eight (48) hours before your next scheduled billing date. Upon cancellation, you will not be billed for subsequent billing cycles.
                  </p>

                  <h3 className="text-lg font-semibold text-foreground pt-2">6.3 Strict No-Refund Policy</h3>
                  <p className="text-muted-foreground">
                    <strong>ALL SALES ARE FINAL. WETRADELABS INC. DOES NOT OFFER REFUNDS, CREDITS, OR PRORATED REIMBURSEMENTS FOR ANY MONTHLY SUBSCRIPTION PAYMENTS OR LIFETIME ACCESS PURCHASES.</strong> Because StratGen grants immediate access to downloadable digital software, proprietary quantitative signal libraries, source-code generation capabilities, and live training resources, no refunds will be issued once a purchase is completed, regardless of how frequently you use the Software or the performance of any trading strategies you develop.
                  </p>

                  <h3 className="text-lg font-semibold text-foreground pt-2">6.4 Chargebacks &amp; Payment Disputes</h3>
                  <p className="text-muted-foreground">
                    You agree not to initiate unwarranted credit card or PayPal chargebacks in circumvention of this No-Refund Policy. Initiating a chargeback or payment dispute will result in the immediate and permanent revocation of your StratGen software license(s), termination of access to updates and training, and WeTradeLabs Inc. reserves the right to submit this Agreement and your access logs as evidence to contest fraudulent disputes.
                  </p>
                </div>

                {/* 7. Live Training & Educational Sessions */}
                <div className="space-y-3 border-t border-border/40 pt-8">
                  <h2 className="text-2xl font-bold text-foreground">7. Live Training &amp; Educational Services</h2>
                  <p className="text-muted-foreground">
                    StratGen plans include live training on quantitative workflow best practices (such as data importing, out-of-sample testing, walk-forward setup, and code export). All live training sessions are strictly educational and focused on software operation and general quantitative research methodology. Instructors will not provide personalized investment advice, manage your brokerage accounts, or tell you which financial instruments or strategies to trade with real money.
                  </p>
                </div>

                {/* 8. Disclaimer of Warranties */}
                <div className="space-y-3 border-t border-border/40 pt-8">
                  <h2 className="text-2xl font-bold text-foreground">8. Disclaimer of Warranties</h2>
                  <p className="text-muted-foreground uppercase text-xs md:text-sm leading-relaxed">
                    TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE STRATGEN SOFTWARE, WEBSITE, EXPORTED CODE, HISTORICAL DATA, INDICATORS, AI COPILOT, AND ALL RELATED SERVICES AND TRAINING ARE PROVIDED BY WETRADELABS INC. ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS, WITH ALL FAULTS AND WITHOUT WARRANTIES, REPRESENTATIONS, OR CONDITIONS OF ANY KIND, EITHER EXPRESS, IMPLIED, OR STATUTORY.
                  </p>
                  <p className="text-muted-foreground uppercase text-xs md:text-sm leading-relaxed">
                    WETRADELABS INC. EXPRESSLY DISCLAIMS ALL IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, NON-INFRINGEMENT, ACCURACY, RELIABILITY, QUIET ENJOYMENT, AND SYSTEM INTEGRATION. WETRADELABS INC. DOES NOT WARRANT THAT THE SOFTWARE OR EXPORTED CODE WILL BE UNINTERRUPTED, TIMELY, SECURE, OR FREE OF BUGS, CALCULATION ERRORS, DATA OMISSIONS, OR DEFECTS, OR THAT ANY DEFECTS WILL BE CORRECTED, OR THAT USE OF THE SOFTWARE WILL RESULT IN TRADING PROFITS.
                  </p>
                </div>

                {/* 9. Limitation of Liability */}
                <div className="space-y-3 border-t border-border/40 pt-8">
                  <h2 className="text-2xl font-bold text-foreground">9. Limitation of Liability</h2>
                  <p className="text-muted-foreground uppercase text-xs md:text-sm leading-relaxed">
                    TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL WETRADELABS INC., ITS FOUNDERS, OFFICERS, DIRECTORS, SHAREHOLDERS, EMPLOYEES, LICENSORS, CONTRACTORS, OR AFFILIATES BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground uppercase text-xs md:text-sm">
                    <li>TRADING LOSSES, LOST CAPITAL, MARGIN CALLS, LIQUIDATIONS, SLIPPAGE, COMMISSION COSTS, MISSED TRADES, DUPLICATE ORDERS, OR UNINTENDED ORDER EXECUTIONS IN ANY BROKERAGE OR TRADING ACCOUNT;</li>
                    <li>INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES; OR</li>
                    <li>LOSS OF PROFITS, LOSS OF REVENUE, LOSS OF DATA, BUSINESS INTERRUPTION, OR LOSS OF GOODWILL,</li>
                  </ul>
                  <p className="text-muted-foreground uppercase text-xs md:text-sm leading-relaxed">
                    ARISING OUT OF OR IN CONNECTION WITH THIS AGREEMENT, YOUR USE OF OR INABILITY TO USE THE STRATGEN SOFTWARE, ANY BUG OR INACCURACY IN BACKTESTING OR EXPORTED CODE (FOR NINJATRADER, TRADESTATION, PYTHON, OR ANY OTHER PLATFORM), OR ANY LIVE TRAINING, WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), STRICT PRODUCT LIABILITY, OR ANY OTHER LEGAL THEORY, EVEN IF WETRADELABS INC. HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
                  </p>
                  <p className="text-muted-foreground uppercase text-xs md:text-sm leading-relaxed">
                    IN NO EVENT SHALL WETRADELABS INC.&apos;S TOTAL CUMULATIVE LIABILITY TO YOU FOR ALL CLAIMS ARISING OUT OF OR RELATING TO THIS AGREEMENT OR THE SOFTWARE EXCEED THE LESSER OF: (A) THE TOTAL AMOUNT OF LICENSE OR SUBSCRIPTION FEES ACTUALLY PAID BY YOU TO WETRADELABS INC. IN THE THREE (3) MONTHS IMMEDIATELY PRECEDING THE EVENT GIVING RISE TO THE CLAIM, OR (B) ONE HUNDRED U.S. DOLLARS ($100.00 USD).
                  </p>
                </div>

                {/* 10. Indemnification */}
                <div className="space-y-3 border-t border-border/40 pt-8">
                  <h2 className="text-2xl font-bold text-foreground">10. Indemnification</h2>
                  <p className="text-muted-foreground">
                    You agree to defend, indemnify, and hold harmless <strong>WeTradeLabs Inc.</strong>, its founders, officers, directors, employees, agents, and affiliates from and against any and all claims, demands, actions, damages, trading losses, liabilities, fines, penalties, costs, and expenses (including reasonable attorneys&apos; fees and court costs) arising out of or relating to: (a) your access to or use of the StratGen Software, Exported Code, or Services; (b) any trading, investment, or brokerage activities conducted by you or third parties using strategies designed or exported with StratGen; (c) your breach or alleged breach of any provision of this Agreement; or (d) your violation of any applicable law, financial regulation, or third-party rights.
                  </p>
                </div>

                {/* 11. Term & Termination */}
                <div className="space-y-3 border-t border-border/40 pt-8">
                  <h2 className="text-2xl font-bold text-foreground">11. Term, Termination &amp; License Revocation</h2>
                  <p className="text-muted-foreground">
                    This Agreement is effective upon your first purchase, download, installation, or use of the Software and remains in effect until terminated. WeTradeLabs Inc. may suspend or terminate your license and access to the Software immediately, without prior notice or refund, if you breach any provision of this Agreement (including unauthorized license sharing, reverse engineering, or initiating a payment chargeback). Upon termination, your license to use the Software immediately ceases, and you must stop using and delete all copies of the StratGen Software in your possession. Sections 2.2, 2.3, 3.2, 4, 5, 6.3, 8, 9, 10, 12, and 13 shall survive any termination of this Agreement.
                  </p>
                </div>

                {/* 12. Governing Law & Dispute Resolution */}
                <div className="space-y-3 border-t border-border/40 pt-8">
                  <h2 className="text-2xl font-bold text-foreground">12. Governing Law, Dispute Resolution &amp; Class Action Waiver</h2>
                  <h3 className="text-lg font-semibold text-foreground pt-2">12.1 Governing Law &amp; Venue</h3>
                  <p className="text-muted-foreground">
                    This Agreement and any dispute, claim, or controversy arising out of or relating to the StratGen Software or WeTradeLabs Inc. shall be governed by and construed in accordance with the laws of the Province of Ontario and the federal laws of Canada applicable therein, without regard to conflict-of-law principles. Any legal action or proceeding not subject to arbitration shall be brought exclusively in the courts located in Ontario, Canada, and you irrevocably consent to the personal jurisdiction and venue thereof.
                  </p>

                  <h3 className="text-lg font-semibold text-foreground pt-2">12.2 Informal Resolution &amp; Binding Arbitration</h3>
                  <p className="text-muted-foreground">
                    Before filing any formal claim, you agree to first contact WeTradeLabs Inc. at <a href="mailto:jacob@wetradelabs.com" className="text-primary hover:underline">jacob@wetradelabs.com</a> and attempt to resolve the dispute informally for at least thirty (30) days. If the dispute is not resolved within thirty (30) days, either party may submit the dispute to final and binding individual arbitration, except that WeTradeLabs Inc. may seek injunctive or equitable relief in any court of competent jurisdiction to prevent infringement or misappropriation of its intellectual property or software piracy.
                  </p>

                  <h3 className="text-lg font-semibold text-foreground pt-2">12.3 Class Action &amp; Jury Trial Waiver</h3>
                  <p className="text-muted-foreground">
                    <strong>YOU AND WETRADELABS INC. AGREE THAT EACH MAY BRING CLAIMS AGAINST THE OTHER ONLY IN YOUR OR ITS INDIVIDUAL CAPACITY, AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS, COLLECTIVE, CONSOLIDATED, OR REPRESENTATIVE PROCEEDING.</strong> Both parties hereby waive any right to a trial by jury.
                  </p>
                </div>

                {/* 13. Miscellaneous Provisions */}
                <div className="space-y-3 border-t border-border/40 pt-8">
                  <h2 className="text-2xl font-bold text-foreground">13. General Legal Provisions</h2>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>
                      <strong>Modifications to Terms:</strong> WeTradeLabs Inc. reserves the right to modify or update these Terms at any time. Updated Terms will be posted on this page with a revised &quot;Last Updated&quot; date. Your continued use of the Software or Website after changes are posted constitutes your binding acceptance of the updated Terms.
                    </li>
                    <li>
                      <strong>Severability:</strong> If any provision of this Agreement is held to be invalid, illegal, or unenforceable by a court of competent jurisdiction, such provision shall be enforced to the maximum extent permissible and the remaining provisions of this Agreement shall remain in full force and effect.
                    </li>
                    <li>
                      <strong>No Waiver:</strong> No failure or delay by WeTradeLabs Inc. in exercising any right, power, or remedy under this Agreement shall operate as a waiver thereof.
                    </li>
                    <li>
                      <strong>Force Majeure:</strong> WeTradeLabs Inc. shall not be liable for any delay or failure to perform resulting from causes outside its reasonable control, including internet outages, cloud infrastructure failures, cyberattacks, market halts, acts of God, or governmental actions.
                    </li>
                    <li>
                      <strong>Entire Agreement:</strong> This Agreement (including the <Link href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link> and Risk Disclosures) constitutes the entire agreement between you and WeTradeLabs Inc. regarding the StratGen Software and supersedes all prior or contemporaneous oral or written understandings or communications.
                    </li>
                  </ul>
                </div>

                {/* 14. Contact Information */}
                <div className="space-y-3 border-t border-border/40 pt-8">
                  <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                    <MailIcon className="h-6 w-6 text-primary" />
                    14. Contact Information
                  </h2>
                  <p className="text-muted-foreground">
                    For any legal notices, licensing inquiries, or questions regarding these Terms &amp; Conditions, please contact:
                  </p>
                  <div className="bg-muted/30 border border-border/40 rounded-lg p-5 space-y-1 text-sm">
                    <p className="font-semibold text-foreground">WeTradeLabs Inc.</p>
                    <p className="text-muted-foreground">Attn: Legal Department — StratGen Software Licensing</p>
                    <p className="text-muted-foreground">
                      Email:{" "}
                      <a href="mailto:jacob@wetradelabs.com?subject=StratGen%20Legal%20%2F%20Terms%20Inquiry" className="text-primary hover:underline font-medium">
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
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 md:px-6 lg:px-8 border-t">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start">
              <div className="mb-8 md:mb-0">
                <h3 className="font-bold text-lg mb-4">StratGen</h3>
                <p className="text-muted-foreground mb-4 max-w-md">
                  Professional algorithmic trading platform by WeTradeLabs Inc. for quantitative research and trading with backtesting, robustness testing, no-code strategy development, and live training on best practices included.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 md:grid-cols-4">
                <div>
                  <h4 className="text-sm font-semibold mb-4">Platform</h4>
                  <ul className="space-y-3">
                    <li>
                      <Link href="/#features" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        Features
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
                  <h4 className="text-sm font-semibold mb-4">Resources</h4>
                  <ul className="space-y-3">
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
                  <h4 className="text-sm font-semibold mb-4">Legal</h4>
                  <ul className="space-y-3">
                    <li>
                      <Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link href="/terms-and-conditions" className="text-sm text-primary font-medium transition-colors">
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
                  <h4 className="text-sm font-semibold mb-4">Contact</h4>
                  <a href="mailto:jacob@wetradelabs.com?subject=StratGen&body=Hey%2C%20I%20am%20interested%20in%20StratGen%20and%20wanted%20to%20know%20more!" className="text-primary hover:text-primary/80 font-medium">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-border/40 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} WeTradeLabs Inc. All rights reserved. StratGen™ is a trademark of WeTradeLabs Inc.
              </p>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
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
