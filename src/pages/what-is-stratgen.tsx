import React from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ArrowLeftIcon, ArrowRightIcon, CheckIcon, TrendingUpIcon, CodeIcon, BarChartIcon, ZapIcon } from "lucide-react";

export default function WhatIsStratGen() {
  return (
    <>
      <Head>
        <title>What is StratGen? | Professional No-Code Algorithmic Trading Platform</title>
        <meta name="description" content="StratGen is a professional no-code algorithmic trading platform designed for quantitative traders, systematic traders, and algorithmic strategy developers. Learn about backtesting, robustness testing, and automatic code generation." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="what is stratgen, algorithmic trading platform, quantitative trading software, no-code trading, systematic trading, backtesting platform, robustness testing, code generation, ninjatrader, tradestation, python" />
        <meta property="og:title" content="What is StratGen? | Professional No-Code Algorithmic Trading Platform" />
        <meta property="og:description" content="Discover StratGen - the professional no-code platform for quantitative traders with advanced backtesting, robustness testing, and automatic code generation for NinjaTrader, TradeStation, and Python." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://stratgen.com/what-is-stratgen" />
        <meta property="og:image" content="https://assets.co.dev/dc630d7c-c620-481b-9ee9-1959feae8edc/image-aefc7df.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="What is StratGen? | Professional No-Code Algorithmic Trading Platform" />
        <meta name="twitter:description" content="Discover StratGen - the professional no-code platform for quantitative traders with advanced backtesting, robustness testing, and automatic code generation." />
        <meta name="twitter:image" content="https://assets.co.dev/dc630d7c-c620-481b-9ee9-1959feae8edc/image-aefc7df.png" />
        <link rel="canonical" href="https://stratgen.com/what-is-stratgen" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "What is StratGen? Complete Guide to Professional Algorithmic Trading Platform",
              "description": "Comprehensive guide explaining StratGen's no-code algorithmic trading platform for quantitative traders, systematic traders, and algorithmic strategy developers.",
              "author": {
                "@type": "Organization",
                "name": "WeTradeLabs",
                "email": "jacob@wetradelabs.com"
              },
              "publisher": {
                "@type": "Organization",
                "name": "WeTradeLabs",
                "email": "jacob@wetradelabs.com"
              },
              "datePublished": "2024-01-01",
              "dateModified": "2025-01-01",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://stratgen.com/what-is-stratgen"
              },
              "about": {
                "@type": "SoftwareApplication",
                "name": "StratGen",
                "applicationCategory": "FinancialApplication"
              }
            })
          }}
        />
      </Head>
      
      <div className="bg-background min-h-screen flex flex-col">
        <Header />
        
        {/* Hero Section */}
        <section className="relative py-12 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-primary/10 to-background">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <Button variant="outline" size="sm" asChild>
                <Link href="/">
                  <ArrowLeftIcon className="h-4 w-4 mr-2" />
                  Back to Home
                </Link>
              </Button>
            </div>
            
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                What is <span className="text-primary">StratGen</span>?
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                The complete guide to understanding StratGen's professional no-code algorithmic trading platform designed for quantitative traders and systematic strategy developers.
              </p>
            </div>
          </div>
        </section>
        
        {/* Main Content */}
        <section className="py-12 px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              
              {/* Introduction */}
              <Card className="border border-border/40 mb-8">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                    <TrendingUpIcon className="h-6 w-6 text-primary" />
                    Professional No-Code Algorithmic Trading Platform
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    StratGen is a comprehensive desktop application specifically designed for quantitative traders, systematic traders, and algorithmic strategy developers who demand institutional-grade tools without the complexity of traditional coding. Our platform bridges the gap between sophisticated quantitative analysis and user-friendly design, enabling traders to develop, test, and deploy robust trading strategies across multiple markets and platforms.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Built for Windows, StratGen empowers both experienced quantitative researchers and aspiring systematic traders to harness the power of algorithmic trading through an intuitive no-code interface. Whether you're testing strategies on futures, equities, crypto, or forex markets, StratGen provides the professional-grade tools you need to validate your trading ideas with rigorous statistical analysis.
                  </p>
                  <p className="text-muted-foreground">
                    What sets StratGen apart is its unique combination of advanced quantitative research capabilities, comprehensive backtesting engine, and automatic code generation for popular trading platforms like NinjaTrader, TradeStation, and Python. This means you can develop sophisticated algorithmic trading strategies without writing a single line of code, then seamlessly deploy them to your preferred trading platform.
                  </p>
                </CardContent>
              </Card>

              {/* Target Users */}
              <Card className="border border-border/40 mb-8">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Who Uses StratGen?</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-primary">Quantitative Traders</h3>
                      <p className="text-muted-foreground text-sm">
                        Professional quant traders who need sophisticated backtesting, robustness testing, and out-of-sample analysis to validate their systematic trading strategies across multiple asset classes.
                      </p>
                      
                      <h3 className="text-lg font-semibold text-primary">Systematic Traders</h3>
                      <p className="text-muted-foreground text-sm">
                        Traders who follow rule-based approaches and need tools to test, optimize, and automate their systematic trading methodologies with institutional-grade precision.
                      </p>
                      
                      <h3 className="text-lg font-semibold text-primary">Algorithmic Strategy Developers</h3>
                      <p className="text-muted-foreground text-sm">
                        Strategy developers who want to focus on trading logic rather than programming, using StratGen's no-code platform to build and export strategies to multiple platforms.
                      </p>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-primary">Quantitative Researchers</h3>
                      <p className="text-muted-foreground text-sm">
                        Researchers who need comprehensive tools for quantitative analysis, including access to 600+ technical and fundamental signals for extensive market research.
                      </p>
                      
                      <h3 className="text-lg font-semibold text-primary">Professional Traders</h3>
                      <p className="text-muted-foreground text-sm">
                        Experienced traders who want to transition from discretionary to systematic trading using professional-grade backtesting and strategy validation tools.
                      </p>
                      
                      <h3 className="text-lg font-semibold text-primary">Trading Firms & Hedge Funds</h3>
                      <p className="text-muted-foreground text-sm">
                        Institutional traders who need reliable, scalable tools for strategy development, backtesting, and deployment across their trading operations.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Core Features */}
              <Card className="border border-border/40 mb-8">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <ZapIcon className="h-6 w-6 text-primary" />
                    Core Capabilities
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <BarChartIcon className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Advanced Signal Analysis</h3>
                        <p className="text-muted-foreground">
                          Access over 600 technical and fundamental signals including Moving Averages, RSI, MACD, Bollinger Bands, and proprietary indicators. Our comprehensive signal library enables extensive quantitative research and strategy development across all market conditions.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <TrendingUpIcon className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Institutional-Grade Backtesting</h3>
                        <p className="text-muted-foreground">
                          Test your strategies against historical data with realistic market conditions, including slippage modeling, commission calculations, and bid-ask spread simulation. Our backtesting engine provides detailed performance metrics and statistical analysis.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <CheckIcon className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Robustness Testing Tools</h3>
                        <p className="text-muted-foreground">
                          Validate strategy performance with Monte Carlo simulations, walk-forward analysis, out-of-sample testing, and stress testing. These tools ensure your strategies perform consistently across different market conditions and time periods.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <CodeIcon className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Automatic Code Generation</h3>
                        <p className="text-muted-foreground">
                          Export your strategies as ready-to-use code for NinjaTrader, TradeStation, and Python without writing a single line of code. This unique feature allows you to seamlessly transition from strategy development to live trading deployment.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* How It Works */}
              <Card className="border border-border/40 mb-8">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">How StratGen Works</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">1</div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Strategy Design</h3>
                        <p className="text-muted-foreground">
                          Use our intuitive no-code interface to design trading strategies by combining technical indicators, fundamental signals, and custom logic. No programming knowledge required.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">2</div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Data Import & Testing</h3>
                        <p className="text-muted-foreground">
                          Import OHLCV data from any source to test your strategies across different markets and instruments. Our platform supports futures, equities, crypto, and forex data.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">3</div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Backtesting & Validation</h3>
                        <p className="text-muted-foreground">
                          Run comprehensive backtests with our advanced engine, then validate results using robustness testing tools including Monte Carlo analysis and out-of-sample testing.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">4</div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Code Export & Deployment</h3>
                        <p className="text-muted-foreground">
                          Generate ready-to-use code for your preferred trading platform (NinjaTrader, TradeStation, or Python) and deploy your validated strategies for live trading.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Why Choose StratGen */}
              <Card className="border border-border/40 mb-8">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Why Choose StratGen?</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <CheckIcon className="h-5 w-5 text-primary" />
                        <span className="font-medium">No Programming Required</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckIcon className="h-5 w-5 text-primary" />
                        <span className="font-medium">Institutional-Grade Tools</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckIcon className="h-5 w-5 text-primary" />
                        <span className="font-medium">600+ Technical Signals</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckIcon className="h-5 w-5 text-primary" />
                        <span className="font-medium">Multi-Platform Export</span>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <CheckIcon className="h-5 w-5 text-primary" />
                        <span className="font-medium">Advanced Backtesting</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckIcon className="h-5 w-5 text-primary" />
                        <span className="font-medium">Robustness Testing</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckIcon className="h-5 w-5 text-primary" />
                        <span className="font-medium">All Asset Classes</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckIcon className="h-5 w-5 text-primary" />
                        <span className="font-medium">Professional Support</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* CTA */}
              <Card className="border-2 border-primary/20 bg-primary/5">
                <CardContent className="p-8 text-center">
                  <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
                  <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    Join thousands of quantitative traders who use StratGen to develop, test, and deploy robust algorithmic trading strategies. Start your journey with professional-grade tools designed for serious traders.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" asChild>
                      <Link href="/#pricing">
                        View Pricing <ArrowRightIcon className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <Link href="/user-manual">
                        User Manual
                      </Link>
                    </Button>
                  </div>
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
                      <Link href="/what-is-stratgen" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        What is StratGen?
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