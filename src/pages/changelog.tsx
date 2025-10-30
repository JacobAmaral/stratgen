import React from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "@/components/Header";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, CheckIcon, BugIcon, ZapIcon } from "lucide-react";

export default function Changelog() {
  return (
    <>
      <Head>
        <title>StratGen Changelog | Version History & Updates</title>
        <meta name="description" content="Stay updated with the latest StratGen releases, new features, bug fixes, and improvements to our algorithmic trading and backtesting platform." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="stratgen changelog, updates, version history, algorithmic trading updates, backtesting platform updates, trading software releases" />
        <meta property="og:title" content="StratGen Changelog | Version History & Updates" />
        <meta property="og:description" content="Stay updated with the latest StratGen releases, new features, bug fixes, and improvements to our algorithmic trading and backtesting platform." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://stratgen.com/changelog" />
        <link rel="canonical" href="https://stratgen.com/changelog" />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "StratGen Changelog",
              "description": "Version history and updates for StratGen algorithmic trading platform",
              "url": "https://stratgen.com/changelog",
              "mainEntity": {
                "@type": "SoftwareApplication",
                "name": "StratGen",
                "applicationCategory": "FinancialApplication",
                "operatingSystem": "Windows"
              },
              "breadcrumb": {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://stratgen.com"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Changelog",
                    "item": "https://stratgen.com/changelog"
                  }
                ]
              }
            })
          }}
        />
      </Head>
      
      <div className="bg-background min-h-screen flex flex-col">
        <Header />
        
        {/* Hero Section */}
        <section className="py-16 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-primary/10 to-background">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Button variant="ghost" size="sm" asChild className="mb-4">
                <Link href="/">
                  <ArrowLeftIcon className="mr-2 h-4 w-4" />
                  Back to Home
                </Link>
              </Button>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                StratGen Changelog
              </h1>
              <p className="text-xl text-muted-foreground">
                Stay updated with the latest features, improvements, and bug fixes in StratGen's algorithmic trading platform.
              </p>
            </div>
          </div>
        </section>

        {/* Changelog Content */}
        <section className="py-12 px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            
            {/* Version 0.9.7 */}
            <Card className="border-2 border-primary/20 shadow-lg">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <CardTitle className="text-2xl">Version 0.9.7</CardTitle>
                    <Badge className="bg-primary text-primary-foreground">Latest</Badge>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Released: October 27, 2025
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <ZapIcon className="h-5 w-5 text-primary" />
                    New Features
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Walk-Forward Optimization:</strong> Implemented comprehensive walk-forward optimization feature for robust out-of-sample testing. This advanced technique divides your data into multiple in-sample and out-of-sample periods, optimizing parameters on in-sample data and testing on out-of-sample data to validate strategy robustness and reduce overfitting risk.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Walk-Forward Export & Visualization:</strong> Added ability to export walk-forward optimization results to CSV format and view comprehensive equity charts showing performance across all walk-forward periods, making it easier to analyze strategy consistency over time.
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <BugIcon className="h-5 w-5 text-orange-500" />
                    Bug Fixes & Improvements
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Walk-Forward Trades Display Fix:</strong> Resolved issue where walk-forward trades were not showing properly in the results view, ensuring complete visibility of all trades across walk-forward periods.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>News Events Backtesting Fix:</strong> Fixed critical issue where news events (CPI, PPI, ISM, Jobs, Housing, Oil EIA Report, Natural Gas EIA Report) were not generating any trades during backtesting, ensuring proper fundamental signal integration.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Monte Carlo OOS Trade Selection Fix:</strong> Corrected issue where Monte Carlo simulations were not using the proper trades for out-of-sample (OOS) analysis, improving the accuracy of robustness testing and risk assessment.
                      </div>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Version 0.9.6 */}
            <Card className="border border-border/40">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <CardTitle className="text-2xl">Version 0.9.6</CardTitle>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Released: October 17, 2025
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <ZapIcon className="h-5 w-5 text-primary" />
                    Performance Improvements
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Multi-Core Backtesting Performance:</strong> Significantly increased individual backtest performance by efficiently utilizing multiple CPU cores, resulting in faster optimization runs and reduced testing time for complex strategies.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Optimized Backtest Code:</strong> Enhanced individual backtest code optimization for improved execution speed and memory efficiency during strategy testing.
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <BugIcon className="h-5 w-5 text-orange-500" />
                    Bug Fixes & Improvements
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Data Import Fix:</strong> Resolved issue where importing second or tick data was not working properly, ensuring accurate high-resolution data analysis for intraday strategies.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Startup Settings Fix:</strong> Fixed startup settings mismatch that could cause configuration inconsistencies when launching the application.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>NinjaTrader Code Generation Fix:</strong> Resolved issue with NinjaTrader code generation when using stops and indicator exits together, ensuring proper order management in exported strategies.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Custom Signals Performance Fix:</strong> Fixed performance lag issues that occurred with custom signals on some backtests, improving overall testing speed and responsiveness.
                      </div>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Version 0.9.5 */}
            <Card className="border border-border/40">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <CardTitle className="text-2xl">Version 0.9.5</CardTitle>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Released: October 1, 2025
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <ZapIcon className="h-5 w-5 text-primary" />
                    New Features
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Custom Signals with C# Code:</strong> Added the ability to write your own C# code to create proprietary signals for use with StratGen entries and exits. This powerful feature allows advanced users to implement custom trading logic and indicators that aren't available in the standard signal library.
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <BugIcon className="h-5 w-5 text-orange-500" />
                    Bug Fixes & Improvements
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Custom Signals Code Export Fix:</strong> Resolved issue where custom signals were not properly exporting into generated code, ensuring your proprietary signals are correctly included in NinjaTrader, TradeStation, and Python exports.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Custom Signals Template Saving Fix:</strong> Fixed issue where custom signals were not being saved properly in templates, allowing you to now save and reuse your custom signal configurations across different strategies.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Exit After N Bars Fix:</strong> Corrected issue where setting "Exit after n bars" to 1 would incorrectly exit after 2 bars instead, ensuring precise bar-count based exit timing.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Multi-Symbol Label Update Fix:</strong> Fixed issue where the multi-symbol label was not updating properly when switching between different symbol configurations in portfolio analysis.
                      </div>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Version 0.9.4 */}
            <Card className="border border-border/40">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl">Version 0.9.4</CardTitle>
                  <div className="text-sm text-muted-foreground">
                    Released: September 15, 2025
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <ZapIcon className="h-5 w-5 text-primary" />
                    New Features
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Economic Indicator Signals:</strong> Added comprehensive economic data signals including CPI (Consumer Price Index), PPI (Producer Price Index), ISM (Institute for Supply Management), Jobs reports, Housing data, Oil EIA Report, and Natural Gas EIA Report for fundamental analysis integration.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Advanced Chart Pattern Recognition:</strong> Implemented DoubleBottom and HeadAndShoulders pattern detection algorithms for enhanced technical analysis and automated pattern-based trading signals.
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <BugIcon className="h-5 w-5 text-orange-500" />
                    Improvements & Fixes
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Pattern Recognition Optimization:</strong> Optimized DoubleBottom and HeadAndShoulders pattern detection algorithms for improved accuracy and reduced false signals in volatile market conditions.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Stop Loss Order Management Fix:</strong> Resolved critical issue where stop losses were not properly cancelling when indicator-based exits were triggered, ensuring proper risk management and order execution.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Entry Delay Resolution:</strong> Fixed entry delay issues affecting certain signals, improving signal timing accuracy and reducing latency in strategy execution.
                      </div>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Version 0.9.3 */}
            <Card className="border border-border/40">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl">Version 0.9.3</CardTitle>
                  <div className="text-sm text-muted-foreground">
                    Released: September 5, 2025
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <ZapIcon className="h-5 w-5 text-primary" />
                    New Features
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Template Settings Management:</strong> Added ability to save and load template settings for faster strategy setup and configuration management.
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <BugIcon className="h-5 w-5 text-orange-500" />
                    Improvements & Fixes
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Logging Optimization:</strong> Removed unnecessary logging to improve application performance and reduce system resource usage.
                      </div>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Version 0.9.2 */}
            <Card className="border border-border/40">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl">Version 0.9.2</CardTitle>
                  <div className="text-sm text-muted-foreground">
                    Released: August 29, 2025
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <ZapIcon className="h-5 w-5 text-primary" />
                    New Features
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Signal Search and Filter:</strong> Added ability to search and filter signals for easier navigation and discovery of specific trading indicators and strategies.
                      </div>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Version 0.9.1 */}
            <Card className="border border-border/40">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl">Version 0.9.1</CardTitle>
                  <div className="text-sm text-muted-foreground">
                    Released: August 21, 2025
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <ZapIcon className="h-5 w-5 text-primary" />
                    New Features
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>High Order Fill Resolution:</strong> Added enhanced fill resolution for more accurate order execution simulation and backtesting precision.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Multiple Symbol Backtests:</strong> Implemented support for backtesting multiple symbols simultaneously for comprehensive portfolio analysis.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Consolidation, GapDown and GapUp Signals:</strong> Added new market pattern recognition signals for consolidation periods and gap trading strategies.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Cup and Handle Pattern Detection:</strong> Implemented advanced pattern recognition for cup and handle formations in price action analysis.
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <BugIcon className="h-5 w-5 text-orange-500" />
                    Bug Fixes & Improvements
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Fixed Incorrect Fills with TP, SL and NBars Profit:</strong> Resolved issue where incorrect fills occurred when Take Profit, Stop Loss, and NBars Profit were set together, ensuring proper order execution logic.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Fixed Incorrect Fills with TP and SL on Same Bar:</strong> Corrected fill logic when both Take Profit and Stop Loss orders hit on the same bar, improving backtesting accuracy.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Fixed Entries with Profit Target Timing:</strong> Resolved issue where entries would incorrectly trigger at the same time as a profit target, ensuring proper order sequencing.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Fixed History Bars Size:</strong> Corrected issue where history bars were not large enough for certain calculations, improving indicator accuracy.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Fixed Candlestick Pattern Detection:</strong> Improved candlestick pattern detection algorithms that were previously too strict, enhancing pattern recognition accuracy.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Fixed Portfolio Code Generation:</strong> Resolved issue with code generation on the portfolio side where parameterized variables were incorrectly handled.
                      </div>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Version 0.9 */}
            <Card className="border border-border/40">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl">Version 0.9</CardTitle>
                  <div className="text-sm text-muted-foreground">
                    Released: August 7, 2025
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <ZapIcon className="h-5 w-5 text-primary" />
                    New Features
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Volume and MTD Signals:</strong> Added new Volume-based and Month-to-Date (MTD) signals for enhanced market analysis and timing strategies.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Parameterized Variables for Indicators:</strong> Enhanced indicator flexibility by adding parameterized variables for some indicators, allowing for more customizable analysis.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Enhanced Error Logging:</strong> Added more in-depth error logs for better debugging and troubleshooting capabilities.
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <BugIcon className="h-5 w-5 text-orange-500" />
                    Improvements & Fixes
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>NinjaTrader-Compatible Fill Logic:</strong> Changed fill logic for stop losses to match NinjaTrader behavior, ensuring consistent results across platforms.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Bar Open Fill Logic:</strong> Updated fill logic to execute on bar open similar to NinjaTrader for improved accuracy in backtesting results.
                      </div>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Version 0.8 */}
            <Card className="border border-border/40">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl">Version 0.8</CardTitle>
                  <div className="text-sm text-muted-foreground">
                    Released: August 1, 2025
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <ZapIcon className="h-5 w-5 text-primary" />
                    New Features
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Enhanced Profit Target & Stop Loss Options:</strong> Added ticks and $ per contract profit target, stop loss and trail stop functionality for more precise risk management and position sizing.
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <BugIcon className="h-5 w-5 text-orange-500" />
                    Bug Fixes & Improvements
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Stop Loss Cancellation Fix:</strong> Fixed issue where stop loss orders would sometimes not cancel properly when profit target was hit, ensuring proper order management.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Return/Drawdown Sorting Fix:</strong> Resolved issue where return/drawdown values were not sorting numerically, improving results analysis and interpretation.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>NinjaTrader Backtest Matching:</strong> Fixed issue where some strategies were not matching properly in NinjaTrader backtests, ensuring consistent results across platforms.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>WMA Calculation Fix:</strong> Corrected Weighted Moving Average (WMA) calculation algorithm for more accurate technical analysis results.
                      </div>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Version 0.7 */}
            <Card className="border border-border/40">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl">Version 0.7</CardTitle>
                  <div className="text-sm text-muted-foreground">
                    Released: July 24, 2025
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <ZapIcon className="h-5 w-5 text-primary" />
                    New Features
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>PivotPoint & FibPivotPoints Entry/Exit Signals:</strong> Added new pivot point and Fibonacci pivot point indicators for enhanced entry and exit signal generation.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Quarter, QTD, YTD Entry/Exit Signals:</strong> Implemented quarterly, quarter-to-date, and year-to-date based entry and exit signals for seasonal trading strategies.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>WMA Entry/Exit Signals:</strong> Added Weighted Moving Average (WMA) based entry and exit signals for improved trend analysis.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>OHLC Entry/Exit Signals:</strong> Implemented Open, High, Low, Close (OHLC) based entry and exit signals for price action trading strategies.
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <BugIcon className="h-5 w-5 text-orange-500" />
                    Bug Fixes & Improvements
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>VWAP Period Fix:</strong> Resolved issues with VWAP period calculations for more accurate volume-weighted average price analysis.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Memory Leak Fix:</strong> Fixed potential memory leak during optimizations, improving system stability and performance during long optimization runs.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Portfolio Systems Display Fix:</strong> Resolved issue where portfolio systems would sometimes not show properly, ensuring consistent portfolio visibility.
                      </div>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Version 0.6 */}
            <Card className="border border-border/40">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl">Version 0.6</CardTitle>
                  <div className="text-sm text-muted-foreground">
                    Released: July 2025
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <ZapIcon className="h-5 w-5 text-primary" />
                    New Features
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Correlation Heatmap:</strong> Added comprehensive correlation analysis visualization to identify relationships between different trading instruments and strategies.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Optimized QuantConnect Backtest Framework:</strong> Enhanced integration with QuantConnect's backtesting framework for improved performance and reliability.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>NinjaTrader Code Integration:</strong> Added NinjaTrader code export functionality directly to the portfolio page for seamless strategy deployment.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Strategy Name Management:</strong> Implemented automatic saving of strategy names to portfolio for better organization and tracking.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Correlation Analysis Window:</strong> Added dedicated correlation analysis window for in-depth statistical analysis of trading relationships.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Portfolio Management:</strong> Enhanced portfolio functionality with ability to save backtests, remove saved backtests, and view combined portfolio equity curves with comprehensive statistics.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Data Appending System:</strong> Implemented data appending to ID system in portfolio for improved data management and tracking.
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <BugIcon className="h-5 w-5 text-orange-500" />
                    Bug Fixes & Improvements
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>VWAP Indicator Fix:</strong> Resolved issues with VWAP (Volume Weighted Average Price) indicator calculations for more accurate technical analysis.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Long/Short Strategy Portfolio Fix:</strong> Fixed issues with long and short strategies display and management in the portfolio section.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Simulation Finalization Fix:</strong> Resolved issue where simulations would sometimes get stuck at the finalizing stage, improving overall system reliability.
                      </div>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Version 0.5 */}
            <Card className="border border-border/40">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl">Version 0.5</CardTitle>
                  <div className="text-sm text-muted-foreground">
                    Released: January 2025
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <ZapIcon className="h-5 w-5 text-primary" />
                    New Features
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Enhanced Optimization Capabilities:</strong> Added ability to optimize PT (Profit Target), SL (Stop Loss), TR (Trailing Stop), Nbars (Number of Bars), and NbarsProfit parameters for more comprehensive strategy optimization.
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <BugIcon className="h-5 w-5 text-orange-500" />
                    Bug Fixes
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Exit by Indicators Fix:</strong> Fixed issue where exit by indicators was not properly testing all optimizations, ensuring comprehensive backtesting results across all parameter combinations.
                      </div>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Version 0.4 */}
            <Card className="border border-border/40">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl">Version 0.4</CardTitle>
                  <div className="text-sm text-muted-foreground">
                    Released: December 2024
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <ZapIcon className="h-5 w-5 text-primary" />
                    New Features
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Enhanced Signal Analysis:</strong> Improved signal detection algorithms for better accuracy in identifying trading opportunities.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Performance Optimizations:</strong> Faster backtesting engine with improved memory management for large datasets.
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <BugIcon className="h-5 w-5 text-orange-500" />
                    Bug Fixes
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Data Import Issues:</strong> Resolved issues with importing certain CSV formats and improved error handling.
                      </div>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Version 0.3 */}
            <Card className="border border-border/40">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl">Version 0.3</CardTitle>
                  <div className="text-sm text-muted-foreground">
                    Released: November 2024
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <ZapIcon className="h-5 w-5 text-primary" />
                    New Features
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Code Generation:</strong> Automatic code generation for NinjaTrader, TradeStation, and Python platforms.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Robustness Testing:</strong> Added Monte Carlo simulations and walk-forward analysis capabilities.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>600+ Signals:</strong> Expanded signal library with over 600 technical and fundamental indicators.
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <BugIcon className="h-5 w-5 text-orange-500" />
                    Bug Fixes
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>UI Improvements:</strong> Fixed various user interface issues and improved overall user experience.
                      </div>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 md:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Experience the Latest Features?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get started with StratGen today and access all the latest improvements and features.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/#pricing">
                  Get Started Now
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/user-manual">
                  View User Manual
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 md:px-6 lg:px-8 border-t">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start">
              <div className="mb-8 md:mb-0">
                <h3 className="font-bold text-lg mb-4">StratGen</h3>
                <p className="text-muted-foreground mb-4 max-w-md">
                  Professional algorithmic trading platform for quantitative research and trading with backtesting, robustness testing, and no-code strategy development.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-3">
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
                      <Link href="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        Blog
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
                  <h4 className="text-sm font-semibold mb-4">Contact</h4>
                  <a href="mailto:jacob@wetradelabs.com?subject=StratGen&body=Hey%2C%20I%20am%20interested%20in%20StratGen%20and%20wanted%20to%20know%20more!" className="text-primary hover:text-primary/80 font-medium">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-border/40 text-center">
              <p className="text-sm text-muted-foreground">
                © 2025 StratGen. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}