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
        <title>StratGen User Manual | Complete Guide to Algorithmic Trading Platform</title>
        <meta name="description" content="Complete user manual for StratGen - Learn how to use our professional algorithmic trading platform with backtesting, robustness testing, and code generation features." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="stratgen user manual, algorithmic trading guide, backtesting tutorial, quantitative trading manual, trading platform documentation" />
        <meta property="og:title" content="StratGen User Manual | Complete Guide to Algorithmic Trading Platform" />
        <meta property="og:description" content="Complete user manual for StratGen - Learn how to use our professional algorithmic trading platform with backtesting, robustness testing, and code generation features." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://stratgen.com/user-manual" />
        <meta property="og:image" content="https://assets.co.dev/dc630d7c-c620-481b-9ee9-1959feae8edc/image-aefc7df.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="StratGen User Manual | Complete Guide to Algorithmic Trading Platform" />
        <meta name="twitter:description" content="Complete user manual for StratGen - Learn how to use our professional algorithmic trading platform with backtesting, robustness testing, and code generation features." />
        <meta name="twitter:image" content="https://assets.co.dev/dc630d7c-c620-481b-9ee9-1959feae8edc/image-aefc7df.png" />
        <link rel="canonical" href="https://stratgen.com/user-manual" />
        <link rel="icon" href="/favicon.ico" />
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
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Complete guide to using StratGen's professional algorithmic trading platform. Learn how to leverage our backtesting, robustness testing, and automatic code generation features.
              </p>
            </div>
          </div>
        </section>
        
        {/* Manual Content Section */}
        <section className="py-12 px-4 md:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <Card className="border border-border/40 shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl mb-4">StratGen User Manual</CardTitle>
                <p className="text-muted-foreground">
                  This comprehensive manual covers all aspects of using StratGen for quantitative trading and algorithmic strategy development.
                </p>
              </CardHeader>
              <CardContent className="p-0">
                {/* PDF Image Display */}
                <div className="relative w-full bg-muted/20 flex items-center justify-center p-8">
                  <div className="w-full max-w-4xl">
                    <div className="relative w-full" style={{ aspectRatio: '8.5/11' }}>
                      <Image 
                        src="https://assets.co.dev/dc630d7c-c620-481b-9ee9-1959feae8edc/stratgen_user_manual_page-0006-695e954.jpg"
                        alt="StratGen User Manual - Complete guide to algorithmic trading platform with backtesting, robustness testing, and code generation features"
                        fill
                        style={{ objectFit: 'contain' }}
                        className="rounded-lg border border-border/20 shadow-md"
                        priority
                      />
                    </div>
                  </div>
                </div>
                
                {/* Manual Information */}
                <div className="p-8 border-t border-border/40">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">What's Covered in This Manual</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          Getting started with StratGen platform
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          Setting up your first trading strategy
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
                          Importing custom OHLCV data
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
                          Monte Carlo simulations and walk-forward analysis
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Need Help?</h3>
                      <p className="text-muted-foreground mb-4">
                        If you have questions about using StratGen or need additional support, our team is here to help.
                      </p>
                      <Button asChild>
                        <a href="mailto:jacob@wetradelabs.com?subject=StratGen%20Support&body=Hi%2C%20I%20need%20help%20with%20StratGen.%20Please%20assist%20me%20with%3A%0A%0A">
                          <DownloadIcon className="h-4 w-4 mr-2" />
                          Contact Support
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        
        {/* Additional Resources Section */}
        <section className="py-12 px-4 md:px-6 lg:px-8 bg-muted/30">
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
                    Learn about all the powerful features available in StratGen for quantitative trading.
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