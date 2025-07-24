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
            
            {/* Version 0.7 */}
            <Card className="border-2 border-primary/20 shadow-lg">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <CardTitle className="text-2xl">Version 0.7</CardTitle>
                    <Badge className="bg-primary text-primary-foreground">Latest</Badge>
                  </div>
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