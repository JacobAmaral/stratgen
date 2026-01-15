import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ArrowLeftIcon, DownloadIcon, BookOpenIcon } from "lucide-react";

export default function UserManual() {

  return (
    <>
      <Head>
        <title>StratGen User Manual v0.9.9 | Complete Guide to Algorithmic Trading Platform</title>
        <meta name="description" content="Complete 13-page user manual for StratGen v0.9.9 quantitative trading platform. Learn backtesting, signal generation, code generation for NinjaTrader, TradeStation, Python, and robustness testing." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="stratgen user manual, algorithmic trading guide, backtesting tutorial, quantitative trading manual, trading platform documentation, no-code trading, robustness testing, out-of-sample testing" />
        <meta property="og:title" content="StratGen User Manual v0.9.9 | Complete Guide to Algorithmic Trading Platform" />
        <meta property="og:description" content="Complete 13-page user manual for StratGen v0.9 quantitative trading platform covering backtesting, signal generation, and automated code generation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://stratgen.com/user-manual" />
        <meta property="og:image" content="https://assets.co.dev/dc630d7c-c620-481b-9ee9-1959feae8edc/stratgen_user_manualv0.9-01-1c9001e.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="StratGen User Manual v0.9.9 | Complete Guide to Algorithmic Trading Platform" />
        <meta name="twitter:description" content="Complete 13-page user manual for StratGen v0.9 quantitative trading platform covering backtesting, signal generation, and automated code generation." />
        <meta name="twitter:image" content="https://assets.co.dev/dc630d7c-c620-481b-9ee9-1959feae8edc/stratgen_user_manualv0.9-01-1c9001e.png" />
        <link rel="canonical" href="https://stratgen.com/user-manual" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* JSON-LD Schema for Documentation */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "TechArticle",
                "headline": "StratGen User Manual - Complete Guide for Quantitative Trading Platform",
                "description": "Complete 13-page user manual for StratGen v0.9.9 quantitative trading platform covering backtesting, signal generation, and automated code generation.",
                "author": {
                  "@type": "Organization",
                  "name": "WeTradeLabs",
                  "email": "jacob@wetradelabs.com",
                  "url": "https://stratgensoft.com/"
                },
                "publisher": {
                  "@type": "Organization",
                  "name": "WeTradeLabs",
                  "email": "jacob@wetradelabs.com",
                  "url": "https://stratgensoft.com/"
                },
                "datePublished": "2024-01-01",
                "dateModified": "2024-12-01",
                "mainEntityOfPage": {
                  "@type": "WebPage",
                  "@id": "https://stratgen.com/user-manual"
                },
                "about": {
                  "@type": "SoftwareApplication",
                  "name": "StratGen",
                  "applicationCategory": "FinancialApplication",
                  "operatingSystem": "Windows"
                },
                "keywords": [
                  "stratgen user manual",
                  "algorithmic trading guide", 
                  "backtesting tutorial",
                  "quantitative trading manual",
                  "trading platform documentation",
                  "no-code trading",
                  "robustness testing",
                  "out-of-sample testing"
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "HowTo",
                "name": "How to Use StratGen for Quantitative Trading",
                "description": "Step-by-step guide to using StratGen's algorithmic trading platform for backtesting, signal generation, and code generation.",
                "image": "https://assets.co.dev/dc630d7c-c620-481b-9ee9-1959feae8edc/stratgen_user_manualv0.9-01-1c9001e.png",
                "totalTime": "PT2H",
                "estimatedCost": {
                  "@type": "MonetaryAmount",
                  "currency": "USD",
                  "value": "99"
                },
                "supply": [
                  {
                    "@type": "HowToSupply",
                    "name": "StratGen Software"
                  },
                  {
                    "@type": "HowToSupply", 
                    "name": "Windows Computer"
                  }
                ],
                "tool": [
                  {
                    "@type": "HowToTool",
                    "name": "StratGen Platform"
                  }
                ],
                "step": [
                  {
                    "@type": "HowToStep",
                    "name": "Installation & Setup",
                    "text": "Install StratGen on your Windows computer and complete initial setup."
                  },
                  {
                    "@type": "HowToStep",
                    "name": "Platform Interface",
                    "text": "Learn to navigate the StratGen interface and understand key features."
                  },
                  {
                    "@type": "HowToStep",
                    "name": "Strategy Creation",
                    "text": "Create trading strategies using the no-code platform."
                  },
                  {
                    "@type": "HowToStep",
                    "name": "Backtesting & Analysis",
                    "text": "Test your strategies with advanced backtesting and robustness testing tools."
                  },
                  {
                    "@type": "HowToStep",
                    "name": "Code Generation",
                    "text": "Generate code for NinjaTrader, TradeStation, and Python platforms."
                  }
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "CreativeWork",
                "name": "StratGen User Manual",
                "description": "Comprehensive documentation for StratGen algorithmic trading platform",
                "creator": {
                  "@type": "Organization",
                  "name": "WeTradeLabs"
                },
                "about": {
                  "@type": "SoftwareApplication",
                  "name": "StratGen"
                },
                "inLanguage": "en-US",
                "learningResourceType": "User Manual",
                "educationalLevel": "Intermediate to Advanced",
                "audience": {
                  "@type": "Audience",
                  "audienceType": "Quantitative Traders"
                }
              }
            ])
          }}
        />
      </Head>
      
      <div className="bg-background min-h-screen flex flex-col">
        <Header />
        
        {/* Hero Section */}
        <section className="relative py-12 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-primary/10 to-background">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <Button variant="outline" size="sm" asChild>
                <Link href="/">
                  <ArrowLeftIcon className="h-4 w-4 mr-2" />
                  Back to Home
                </Link>
              </Button>
            </div>
            
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <BookOpenIcon className="h-8 w-8 text-primary" />
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                  StratGen User Manual
                </h1>
              </div>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-6">
                Complete 13-page guide to mastering StratGen v0.9.9 for quantitative trading, backtesting, robustness testing, 
                and automated code generation. Perfect for quantitative researchers and algorithmic strategy developers.
              </p>
            </div>
          </div>
        </section>
              {/* Table Content and Manual Text */}
              <section className="py-16 px-4 md:px-6 lg:px-8">
                  <div className="max-w-4xl mx-auto">
                      <article className="sg-manual prose prose-invert max-w-none" id="top">
                  <h1>StratGen User Manual</h1>

                  <p>
                      StratGen is a professional-grade no-code platform for quantitative research and trading,
                      designed for quant traders who demand rigorous out-of-sample testing and robustness analysis.
                  </p>

                  <p><strong>Get Started Now</strong><br />Available for Windows</p>

                <h2 className="mt-12 mb-4 text-center">Table of Contents</h2>

                <nav
                    aria-label="Table of contents"
                    className="my-8 rounded-xl border border-border/40 bg-muted/20 p-6"
                >
                    <ol className="grid grid-cols-1 gap-x-8 gap-y-2 md:grid-cols-2 list-decimal list-inside text-sm">
                        <li><a href="#launch" className="hover:underline">Launch StratGen</a></li>
                        <li><a href="#settings-window" className="hover:underline">Settings Window</a></li>
                        <li><a href="#signals-tab" className="hover:underline">Signals</a></li>
                        <li><a href="#strategy-settings" className="hover:underline">Strategy Settings</a></li>
                        <li><a href="#walk-forward" className="hover:underline">Walk-Forward Settings</a></li>
                        <li><a href="#import-data" className="hover:underline">Import Data</a></li>
                        <li><a href="#run-sim" className="hover:underline">Run Simulation</a></li>
                        <li><a href="#results-list" className="hover:underline">Strategy Results</a></li>
                        <li><a href="#dashboard" className="hover:underline">Backtest Dashboard</a></li>
                        <li><a href="#generated-code" className="hover:underline">Generated Code</a></li>
                        <li><a href="#monte-carlo" className="hover:underline">Monte Carlo</a></li>
                        <li><a href="#portfolio" className="hover:underline">Portfolio</a></li>
                        <li><a href="#portfolio-equity" className="hover:underline">Portfolio Equity</a></li>
                        <li><a href="#correlation" className="hover:underline">Correlation</a></li>
                        <li><a href="#templates" className="hover:underline">Templates</a></li>
                        <li><a href="#custom-signals" className="hover:underline">Custom Signals</a></li>
                        <li><a href="#walk-forward-results" className="hover:underline">Walk-Forward Results</a></li>
                    </ol>
                </nav>


                  <hr />

                  {/* 1 */}
                  <h2 id="launch">1) Launch StratGen</h2>
                          <img src="/stratgen_manual_images/01-opening-stratgen.jpg" alt="Opening StratGen" className="mx-auto my-8 rounded-lg border border-border/40 shadow-lg" />
                  <p>When StratGen starts, wait for the loading bar to finish before interacting with the platform.</p>

                  {/* 2 */}
                  <h2 id="settings-window">2) Settings Window</h2>
                          <img src="/stratgen_manual_images/02-signals-tab-empty.jpg" alt="Settings window" className="mx-auto my-8 rounded-lg border border-border/40 shadow-lg" />
                  <p>The Settings window controls all strategy configuration including signals, risk, data, and portfolios.</p>

                  {/* 3 */}
                  <h2 id="signals-tab">3) Signals</h2>
                          <img src="/stratgen_manual_images/06-signals-selected.jpg" alt="Signals selected" className="mx-auto my-8 rounded-lg border border-border/40 shadow-lg" />
                  <p>Select Entry and Exit rules. These define exactly when trades are opened and closed.</p>

                  {/* 4 */}
                  <h2 id="strategy-settings">4) Strategy Settings</h2>
                          <img src="/stratgen_manual_images/03-settings-top.jpg" alt="Strategy settings" className="mx-auto my-8 rounded-lg border border-border/40 shadow-lg" />
                  <p>Configure starting capital, exits, out-of-sample percentage, and rule count.</p>

                  {/* 5 */}
                  <h2 id="walk-forward">5) Walk-Forward & Realism</h2>
                          <img src="/stratgen_manual_images/04-settings-walkforward.jpg" alt="Walk-forward settings" className="mx-auto my-8 rounded-lg border border-border/40 shadow-lg" />
                  <p>Enable walk-forward testing, slippage, commissions, and performance filters.</p>

                  {/* 6 */}
                  <h2 id="import-data">6) Import Data</h2>
                          <img src="/stratgen_manual_images/05-import-data.jpg" alt="Import data" className="mx-auto my-8 rounded-lg border border-border/40 shadow-lg" />
                  <p>Define symbols, point values, margins, and file paths for futures, stocks, and crypto.</p>

                  {/* 7 */}
                  <h2 id="run-sim">7) Run Simulation</h2>
                          <img src="/stratgen_manual_images/07-simulating.jpg" alt="Simulation running" className="mx-auto my-8 rounded-lg border border-border/40 shadow-lg" />
                  <p>Click Run to test strategies. StratGen evaluates every valid rule combination.</p>

                  {/* 8 */}
                  <h2 id="results-list">8) Strategy Results</h2>
                          <img src="/stratgen_manual_images/08-strategy-results-list.jpg" alt="Strategy results" className="mx-auto my-8 rounded-lg border border-border/40 shadow-lg" />
                  <p>Compare strategies by Net PnL, Drawdown, Sharpe, and Ret/DD.</p>

                  {/* 9 */}
                  <h2 id="dashboard">9) Backtest Dashboard</h2>
                          <img src="/stratgen_manual_images/09-backtest-dashboard.jpg" alt="Backtest dashboard" className="mx-auto my-8 rounded-lg border border-border/40 shadow-lg" />
                  <p>Review equity curves, trades, logs, and full performance metrics.</p>

                  {/* 10 */}
                  <h2 id="generated-code">10) Generated Code</h2>
                          <img src="/stratgen_manual_images/10-generated-code.jpg" alt="Generated code" className="mx-auto my-8 rounded-lg border border-border/40 shadow-lg" />
                  <p>Export strategies to NinjaTrader, TradeStation, or Python.</p>

                  {/* 11 */}
                  <h2 id="monte-carlo">11) Monte Carlo Simulation</h2>
                          <img src="/stratgen_manual_images/11-monte-carlo-simulation.jpg" alt="Monte Carlo simulation" className="mx-auto my-8 rounded-lg border border-border/40 shadow-lg" />
                  <p>Tests strategy robustness by randomizing trade order and outcomes.</p>

                  {/* 12 */}
                  <h2 id="portfolio">12) Portfolio</h2>
                          <img src="/stratgen_manual_images/12-portfolio-tab.jpg" alt="Portfolio tab" className="mx-auto my-8 rounded-lg border border-border/40 shadow-lg" />
                  <p>Combine multiple strategies into a single portfolio.</p>

                  {/* 13 */}
                  <h2 id="portfolio-equity">13) Portfolio Equity</h2>
                          <img src="/stratgen_manual_images/13-portfolio-equity.jpg" alt="Portfolio equity" className="mx-auto my-8 rounded-lg border border-border/40 shadow-lg" />
                  <p>View the combined equity curve of all portfolio strategies.</p>

                  {/* 14 */}
                  <h2 id="correlation">14) Correlation</h2>
                          <img src="/stratgen_manual_images/14-correlation-matrix.jpg" alt="Correlation matrix" className="mx-auto my-8 rounded-lg border border-border/40 shadow-lg" />
                  <p>Identify diversification benefits by measuring correlation between strategies.</p>

                  {/* 15 */}
                  <h2 id="templates">15) Templates</h2>
                          <img src="/stratgen_manual_images/15-templates.jpg" alt="Templates" className="mx-auto my-8 rounded-lg border border-border/40 shadow-lg" />
                  <p>Save and reuse strategy configurations.</p>

                  {/* 16 */}
                  <h2 id="custom-signals">16) Custom Signals</h2>
                          <img src="/stratgen_manual_images/16-custom-signals.jpg" alt="Custom signals" className="mx-auto my-8 rounded-lg border border-border/40 shadow-lg" />
                  <p>Create your own signals using C# MiniSignal templates.</p>

                  {/* 17 */}
                  <h2 id="walk-forward-results">17) Walk-Forward Results</h2>
                          <img src="/stratgen_manual_images/17-walk-forward-results.jpg" alt="Walk-forward results" className="mx-auto my-8 rounded-lg border border-border/40 shadow-lg" />
                  <p>Analyze performance consistency across rolling in-sample and out-of-sample windows.</p>

                  <p><a href="#top">Back to top</a></p>
                      </article>
                  </div>
              </section>



        
        {/* Manual Information */}
        <section className="py-12 px-4 md:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <Card className="border border-border/40 shadow-lg">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">What's Covered in This Manual</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        Getting started with StratGen platform setup
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        Creating and testing quantitative trading strategies
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        Using the 600+ technical and fundamental signals
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        Advanced backtesting and robustness testing
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        Importing custom OHLCV data for any instrument
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        Automatic code generation for NinjaTrader, TradeStation, and Python
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        Strategy optimization and performance analysis
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        Out-of-sample testing and Monte Carlo simulations
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        Quantitative research methodologies and best practices
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        Troubleshooting and advanced tips for optimal performance
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Need Help?</h3>
                    <p className="text-muted-foreground mb-4">
                      If you have questions about using StratGen or need additional support with quantitative research, 
                      our team is here to help you maximize your trading strategy development.
                    </p>
                    <Button asChild>
                      <a href="mailto:jacob@wetradelabs.com?subject=StratGen%20Support&body=Hi%2C%20I%20need%20help%20with%20StratGen.%20Please%20assist%20me%20with%3A%0A%0A">
                        <DownloadIcon className="h-4 w-4 mr-2" />
                        Contact Support
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        
        {/* Additional Resources Section */}
        <section className="py-12 px-4 md:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Additional Resources</h2>
              <p className="text-xl text-muted-foreground">
                Explore more resources to get the most out of StratGen
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border border-border/40">
                <CardHeader>
                  <CardTitle className="text-lg">Platform Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Learn about all the powerful features available in StratGen for quantitative trading and research.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/#features">
                      View Features
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="border border-border/40">
                <CardHeader>
                  <CardTitle className="text-lg">Screenshots</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    See StratGen's interface in action with detailed screenshots of key features.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/#screenshots">
                      View Screenshots
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="border border-border/40">
                <CardHeader>
                  <CardTitle className="text-lg">FAQ</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Find answers to common questions about StratGen's algorithmic trading platform.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/#faq">
                      View FAQ
                    </Link>
                  </Button>
                </CardContent>
              </Card>
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
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold mb-4">Resources</h4>
                  <ul className="space-y-3">
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