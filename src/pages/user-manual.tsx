import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ArrowLeftIcon, DownloadIcon, BookOpenIcon } from "lucide-react";

export default function UserManual() {
  const manualPages = [
    {
      url: "https://assets.co.dev/dc630d7c-c620-481b-9ee9-1959feae8edc/stratgen_user_manual_page-0001-731014f.jpg",
      alt: "StratGen User Manual Page 1 - Introduction and Overview of Quantitative Trading Platform",
      title: "Introduction & Overview"
    },
    {
      url: "https://assets.co.dev/dc630d7c-c620-481b-9ee9-1959feae8edc/stratgen_user_manual_page-0002-043e258.jpg",
      alt: "StratGen User Manual Page 2 - Getting Started with Installation and Setup",
      title: "Installation & Setup"
    },
    {
      url: "https://assets.co.dev/dc630d7c-c620-481b-9ee9-1959feae8edc/stratgen_user_manual_page-0003-9318201.jpg",
      alt: "StratGen User Manual Page 3 - Platform Interface and Navigation Guide",
      title: "Platform Interface"
    },
    {
      url: "https://assets.co.dev/dc630d7c-c620-481b-9ee9-1959feae8edc/stratgen_user_manual_page-0004-3b9ed81.jpg",
      alt: "StratGen User Manual Page 4 - Creating Trading Strategies and Signal Testing",
      title: "Strategy Creation"
    },
    {
      url: "https://assets.co.dev/dc630d7c-c620-481b-9ee9-1959feae8edc/stratgen_user_manual_page-0005-b1bf529.jpg",
      alt: "StratGen User Manual Page 5 - Advanced Backtesting and Robustness Testing Tools",
      title: "Backtesting & Analysis"
    },
    {
      url: "https://assets.co.dev/dc630d7c-c620-481b-9ee9-1959feae8edc/stratgen_user_manual_page-0006-695e954.jpg",
      alt: "StratGen User Manual Page 6 - Data Import and OHLCV Analysis Features",
      title: "Data Import & Analysis"
    },
    {
      url: "https://assets.co.dev/dc630d7c-c620-481b-9ee9-1959feae8edc/stratgen_user_manual_page-0007-74bd88d.jpg",
      alt: "StratGen User Manual Page 7 - Code Generation for NinjaTrader, TradeStation, and Python",
      title: "Automated Code Generation"
    },
    {
      url: "https://assets.co.dev/dc630d7c-c620-481b-9ee9-1959feae8edc/stratgen_user_manual_page-0008-40f820a.jpg",
      alt: "StratGen User Manual Page 8 - Advanced Signal Analysis and Technical Indicators",
      title: "Signal Analysis"
    },
    {
      url: "https://assets.co.dev/dc630d7c-c620-481b-9ee9-1959feae8edc/stratgen_user_manual_page-0009-bcde2f5.jpg",
      alt: "StratGen User Manual Page 9 - Out-of-Sample Testing and Strategy Validation",
      title: "Strategy Validation"
    },
    {
      url: "https://assets.co.dev/dc630d7c-c620-481b-9ee9-1959feae8edc/stratgen_user_manual_page-0010-1ad42c7.jpg",
      alt: "StratGen User Manual Page 10 - Troubleshooting and Advanced Tips",
      title: "Troubleshooting & Tips"
    }
  ];

  return (
    <>
      <Head>
        <title>StratGen User Manual | Complete Guide to Algorithmic Trading Platform</title>
        <meta name="description" content="Complete 10-page user manual for StratGen quantitative trading platform. Learn backtesting, signal generation, code generation for NinjaTrader, TradeStation, Python, and robustness testing." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="stratgen user manual, algorithmic trading guide, backtesting tutorial, quantitative trading manual, trading platform documentation, no-code trading, robustness testing, out-of-sample testing" />
        <meta property="og:title" content="StratGen User Manual | Complete Guide to Algorithmic Trading Platform" />
        <meta property="og:description" content="Complete 10-page user manual for StratGen quantitative trading platform covering backtesting, signal generation, and automated code generation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://stratgen.com/user-manual" />
        <meta property="og:image" content="https://assets.co.dev/dc630d7c-c620-481b-9ee9-1959feae8edc/stratgen_user_manual_page-0001-731014f.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="StratGen User Manual | Complete Guide to Algorithmic Trading Platform" />
        <meta name="twitter:description" content="Complete 10-page user manual for StratGen quantitative trading platform covering backtesting, signal generation, and automated code generation." />
        <meta name="twitter:image" content="https://assets.co.dev/dc630d7c-c620-481b-9ee9-1959feae8edc/stratgen_user_manual_page-0001-731014f.jpg" />
        <link rel="canonical" href="https://stratgen.com/user-manual" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* JSON-LD Schema for Documentation */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TechArticle",
              "headline": "StratGen User Manual - Complete Guide for Quantitative Trading Platform",
              "description": "Complete 10-page user manual for StratGen quantitative trading platform covering backtesting, signal generation, and automated code generation.",
              "author": {
                "@type": "Organization",
                "name": "WeTradeLabs"
              },
              "publisher": {
                "@type": "Organization",
                "name": "WeTradeLabs"
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
                "applicationCategory": "Trading Software",
                "operatingSystem": "Windows"
              }
            })
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
                Complete 10-page guide to mastering StratGen for quantitative trading, backtesting, robustness testing, 
                and automated code generation. Perfect for quantitative researchers and algorithmic strategy developers.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 text-sm text-primary">
                <span className="bg-primary/10 px-3 py-1 rounded-full">✓ No-Code Platform</span>
                <span className="bg-primary/10 px-3 py-1 rounded-full">✓ Advanced Backtesting</span>
                <span className="bg-primary/10 px-3 py-1 rounded-full">✓ Code Generation</span>
                <span className="bg-primary/10 px-3 py-1 rounded-full">✓ Robustness Testing</span>
                <span className="bg-primary/10 px-3 py-1 rounded-full">✓ Out-of-Sample Testing</span>
              </div>
            </div>
          </div>
        </section>
        
        {/* Table of Contents */}
        <section className="py-12 px-4 md:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Table of Contents</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {manualPages.map((page, index) => (
                <Card key={index} className="border border-border/40 hover:border-primary/50 transition-colors">
                  <CardContent className="p-4">
                    <a href={`#page-${index + 1}`} className="block">
                      <div className="text-primary font-semibold mb-1">Page {index + 1}</div>
                      <div className="text-sm text-muted-foreground">{page.title}</div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Manual Pages Section */}
        <section className="py-12 px-4 md:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Complete User Manual</h2>
            
            <div className="space-y-16">
              {manualPages.map((page, index) => (
                <Card key={index} id={`page-${index + 1}`} className="border border-border/40 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl">
                      Page {index + 1}: {page.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="relative w-full bg-muted/20 flex items-center justify-center p-8">
                      <div className="w-full max-w-4xl">
                        <div className="relative w-full" style={{ aspectRatio: '8.5/11' }}>
                          <Image 
                            src={page.url}
                            alt={page.alt}
                            fill
                            style={{ objectFit: 'contain' }}
                            className="rounded-lg border border-border/20 shadow-md"
                            priority={index < 3}
                            quality={90}
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
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