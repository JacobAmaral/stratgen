import React from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeftIcon, ArrowRightIcon, CalendarIcon, ClockIcon, BarChartIcon, CheckIcon, AlertTriangleIcon, TrendingUpIcon } from "lucide-react";

export default function BestPracticesBacktestingStratGen() {
  return (
    <>
      <Head>
        <title>Best Practices for Backtesting with StratGen | Professional Trading Strategy Validation</title>
        <meta name="description" content="Master professional backtesting methodologies with StratGen's institutional-grade engine. Learn best practices for validating algorithmic trading strategies, avoiding common pitfalls, and ensuring robust performance." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="backtesting best practices, stratgen backtesting, algorithmic trading validation, quantitative strategy testing, trading strategy backtesting, systematic trading validation, out-of-sample testing" />
        <meta property="og:title" content="Best Practices for Backtesting with StratGen | Professional Trading Strategy Validation" />
        <meta property="og:description" content="Learn professional backtesting methodologies and best practices for validating algorithmic trading strategies using StratGen's institutional-grade backtesting engine." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://stratgen.com/blog/best-practices-backtesting-stratgen" />
        <meta property="og:image" content="https://assets.co.dev/dc630d7c-c620-481b-9ee9-1959feae8edc/image-3a930e3.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Practices for Backtesting with StratGen" />
        <meta name="twitter:description" content="Master professional backtesting methodologies with StratGen's institutional-grade engine for algorithmic trading strategy validation." />
        <meta name="twitter:image" content="https://assets.co.dev/dc630d7c-c620-481b-9ee9-1959feae8edc/image-3a930e3.png" />
        <link rel="canonical" href="https://stratgen.com/blog/best-practices-backtesting-stratgen" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              "headline": "Best Practices for Backtesting with StratGen",
              "description": "Master professional backtesting methodologies with StratGen's institutional-grade engine. Learn best practices for validating algorithmic trading strategies, avoiding common pitfalls, and ensuring robust performance.",
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
              "datePublished": "2025-01-10",
              "dateModified": "2025-01-10",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://stratgen.com/blog/best-practices-backtesting-stratgen"
              },
              "image": "https://assets.co.dev/dc630d7c-c620-481b-9ee9-1959feae8edc/image-3a930e3.png",
              "articleSection": "Backtesting",
              "keywords": ["backtesting", "strategy validation", "quantitative trading", "algorithmic trading", "systematic trading", "stratgen"]
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
                <Link href="/blog">
                  <ArrowLeftIcon className="h-4 w-4 mr-2" />
                  Back to Blog
                </Link>
              </Button>
            </div>
            
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <Badge variant="outline">Backtesting</Badge>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CalendarIcon className="h-4 w-4" />
                  January 10, 2025
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <ClockIcon className="h-4 w-4" />
                  7 min read
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Best Practices for Backtesting with StratGen
              </h1>
              <p className="text-xl text-muted-foreground">
                Master professional backtesting methodologies with StratGen's institutional-grade engine. Learn how to validate algorithmic trading strategies, avoid common pitfalls, and ensure robust performance.
              </p>
            </div>
          </div>
        </section>
        
        {/* Article Content */}
        <section className="py-12 px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              
              {/* Introduction */}
              <Card className="border border-border/40 mb-8">
                <CardContent className="p-8">
                  <p className="text-muted-foreground mb-4">
                    Backtesting is the cornerstone of quantitative trading strategy development. It's the process that separates profitable strategies from costly mistakes, yet many traders approach it incorrectly, leading to overoptimized strategies that fail in live markets. StratGen's institutional-grade backtesting engine provides the tools you need for rigorous strategy validation, but knowing how to use them effectively is crucial.
                  </p>
                  <p className="text-muted-foreground">
                    This comprehensive guide covers professional backtesting methodologies, common pitfalls to avoid, and how to leverage StratGen's advanced features to build confidence in your trading strategies before risking real capital.
                  </p>
                </CardContent>
              </Card>

              {/* Why Proper Backtesting Matters */}
              <Card className="border border-border/40 mb-8">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                    <BarChartIcon className="h-6 w-6 text-primary" />
                    Why Proper Backtesting Matters
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    Professional backtesting serves multiple critical purposes in algorithmic trading strategy development:
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-primary">Risk Assessment</h3>
                      <p className="text-muted-foreground text-sm">
                        Understand the maximum drawdown, volatility, and risk-adjusted returns your strategy might experience before deploying real capital.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-primary">Performance Validation</h3>
                      <p className="text-muted-foreground text-sm">
                        Verify that your strategy generates consistent returns across different market conditions and time periods.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-primary">Parameter Optimization</h3>
                      <p className="text-muted-foreground text-sm">
                        Identify optimal parameter ranges while avoiding overfitting to historical data.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-primary">Capital Allocation</h3>
                      <p className="text-muted-foreground text-sm">
                        Determine appropriate position sizing and capital allocation based on historical performance metrics.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* StratGen's Backtesting Engine */}
              <Card className="border border-border/40 mb-8">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-4">StratGen's Institutional-Grade Backtesting Engine</h2>
                  <p className="text-muted-foreground mb-4">
                    StratGen's backtesting engine is designed to provide realistic, institutional-quality results that you can trust for live trading decisions. Key features include:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckIcon className="h-5 w-5 text-primary" />
                        <span className="font-medium">Realistic slippage modeling</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckIcon className="h-5 w-5 text-primary" />
                        <span className="font-medium">Commission and fee calculations</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckIcon className="h-5 w-5 text-primary" />
                        <span className="font-medium">Bid-ask spread simulation</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckIcon className="h-5 w-5 text-primary" />
                        <span className="font-medium">Market impact modeling</span>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckIcon className="h-5 w-5 text-primary" />
                        <span className="font-medium">Multiple timeframe analysis</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckIcon className="h-5 w-5 text-primary" />
                        <span className="font-medium">Comprehensive performance metrics</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckIcon className="h-5 w-5 text-primary" />
                        <span className="font-medium">Risk-adjusted return calculations</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckIcon className="h-5 w-5 text-primary" />
                        <span className="font-medium">Drawdown analysis</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Essential Backtesting Best Practices */}
              <Card className="border border-border/40 mb-8">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Essential Backtesting Best Practices</h2>
                  
                  <div className="space-y-6">
                    <div className="border-l-4 border-primary pl-4">
                      <h3 className="text-lg font-semibold mb-2">1. Use Sufficient Historical Data</h3>
                      <p className="text-muted-foreground text-sm mb-2">
                        Test your strategy across multiple market cycles, including bull markets, bear markets, and sideways periods. StratGen recommends:
                      </p>
                      <ul className="space-y-1 text-muted-foreground text-sm ml-4">
                        <li>• Minimum 3-5 years of data for daily strategies</li>
                        <li>• At least 1-2 years for intraday strategies</li>
                        <li>• Include major market events and volatility periods</li>
                        <li>• Test across different economic cycles</li>
                      </ul>
                    </div>
                    
                    <div className="border-l-4 border-primary pl-4">
                      <h3 className="text-lg font-semibold mb-2">2. Implement Realistic Trading Costs</h3>
                      <p className="text-muted-foreground text-sm mb-2">
                        Always include realistic trading costs in your backtests. StratGen automatically calculates:
                      </p>
                      <ul className="space-y-1 text-muted-foreground text-sm ml-4">
                        <li>• Broker commissions and fees</li>
                        <li>• Bid-ask spreads based on market conditions</li>
                        <li>• Slippage estimates for different order sizes</li>
                        <li>• Market impact for larger positions</li>
                      </ul>
                    </div>
                    
                    <div className="border-l-4 border-primary pl-4">
                      <h3 className="text-lg font-semibold mb-2">3. Avoid Look-Ahead Bias</h3>
                      <p className="text-muted-foreground text-sm mb-2">
                        Ensure your strategy only uses information available at the time of each trading decision:
                      </p>
                      <ul className="space-y-1 text-muted-foreground text-sm ml-4">
                        <li>• Use point-in-time data for all calculations</li>
                        <li>• Account for data delays and processing time</li>
                        <li>• Avoid using future price information</li>
                        <li>• Consider market hours and trading sessions</li>
                      </ul>
                    </div>
                    
                    <div className="border-l-4 border-primary pl-4">
                      <h3 className="text-lg font-semibold mb-2">4. Test Multiple Market Conditions</h3>
                      <p className="text-muted-foreground text-sm mb-2">
                        Validate your strategy across various market environments:
                      </p>
                      <ul className="space-y-1 text-muted-foreground text-sm ml-4">
                        <li>• High and low volatility periods</li>
                        <li>• Trending and ranging markets</li>
                        <li>• Different economic cycles</li>
                        <li>• Various market sectors and instruments</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Common Backtesting Pitfalls */}
              <Card className="border border-border/40 mb-8">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                    <AlertTriangleIcon className="h-6 w-6 text-destructive" />
                    Common Backtesting Pitfalls to Avoid
                  </h2>
                  
                  <div className="space-y-4">
                    <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
                      <h3 className="text-lg font-semibold mb-2 text-destructive">Overfitting and Curve Fitting</h3>
                      <p className="text-muted-foreground text-sm mb-2">
                        The most dangerous pitfall in backtesting is optimizing parameters too specifically to historical data.
                      </p>
                      <p className="text-muted-foreground text-sm">
                        <strong>Solution:</strong> Use StratGen's out-of-sample testing and walk-forward analysis to validate parameter stability.
                      </p>
                    </div>
                    
                    <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
                      <h3 className="text-lg font-semibold mb-2 text-destructive">Survivorship Bias</h3>
                      <p className="text-muted-foreground text-sm mb-2">
                        Testing only on instruments that survived the entire test period can inflate results.
                      </p>
                      <p className="text-muted-foreground text-sm">
                        <strong>Solution:</strong> Include delisted stocks and failed companies in your universe when possible.
                      </p>
                    </div>
                    
                    <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
                      <h3 className="text-lg font-semibold mb-2 text-destructive">Ignoring Market Microstructure</h3>
                      <p className="text-muted-foreground text-sm mb-2">
                        Assuming perfect liquidity and instant execution at mid-prices.
                      </p>
                      <p className="text-muted-foreground text-sm">
                        <strong>Solution:</strong> Use StratGen's realistic execution modeling with slippage and market impact.
                      </p>
                    </div>
                    
                    <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
                      <h3 className="text-lg font-semibold mb-2 text-destructive">Insufficient Sample Size</h3>
                      <p className="text-muted-foreground text-sm mb-2">
                        Drawing conclusions from too few trades or too short time periods.
                      </p>
                      <p className="text-muted-foreground text-sm">
                        <strong>Solution:</strong> Ensure at least 100+ trades and multiple years of data for statistical significance.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Key Performance Metrics */}
              <Card className="border border-border/40 mb-8">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                    <TrendingUpIcon className="h-6 w-6 text-primary" />
                    Key Performance Metrics to Monitor
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    StratGen provides comprehensive performance analytics. Focus on these critical metrics:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-primary">Return Metrics</h3>
                      <ul className="space-y-2 text-muted-foreground text-sm">
                        <li>• <strong>Total Return:</strong> Overall strategy performance</li>
                        <li>• <strong>Annualized Return:</strong> Yearly performance average</li>
                        <li>• <strong>Sharpe Ratio:</strong> Risk-adjusted returns</li>
                        <li>• <strong>Sortino Ratio:</strong> Downside risk-adjusted returns</li>
                        <li>• <strong>Calmar Ratio:</strong> Return vs. maximum drawdown</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-primary">Risk Metrics</h3>
                      <ul className="space-y-2 text-muted-foreground text-sm">
                        <li>• <strong>Maximum Drawdown:</strong> Largest peak-to-trough decline</li>
                        <li>• <strong>Volatility:</strong> Standard deviation of returns</li>
                        <li>• <strong>Value at Risk (VaR):</strong> Potential loss at confidence level</li>
                        <li>• <strong>Win Rate:</strong> Percentage of profitable trades</li>
                        <li>• <strong>Profit Factor:</strong> Gross profit vs. gross loss</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Advanced Validation Techniques */}
              <Card className="border border-border/40 mb-8">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-4">Advanced Validation Techniques in StratGen</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-primary">Out-of-Sample Testing</h3>
                      <p className="text-muted-foreground text-sm mb-2">
                        Reserve 20-30% of your data for final validation after strategy development and optimization.
                      </p>
                      <p className="text-muted-foreground text-sm">
                        StratGen automatically handles data splitting and ensures no look-ahead bias in out-of-sample periods.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-primary">Walk-Forward Analysis</h3>
                      <p className="text-muted-foreground text-sm mb-2">
                        Continuously re-optimize parameters using rolling windows to simulate real-world strategy adaptation.
                      </p>
                      <p className="text-muted-foreground text-sm">
                        This technique helps identify parameter stability and strategy degradation over time.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-primary">Monte Carlo Simulation</h3>
                      <p className="text-muted-foreground text-sm mb-2">
                        Generate thousands of possible return sequences to understand the range of potential outcomes.
                      </p>
                      <p className="text-muted-foreground text-sm">
                        StratGen's Monte Carlo engine helps assess the probability of achieving target returns and maximum drawdowns.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-primary">Stress Testing</h3>
                      <p className="text-muted-foreground text-sm mb-2">
                        Test your strategy under extreme market conditions and black swan events.
                      </p>
                      <p className="text-muted-foreground text-sm">
                        Include periods like 2008 financial crisis, COVID-19 crash, and other major market disruptions.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Implementation Checklist */}
              <Card className="border border-border/40 mb-8">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-4">StratGen Backtesting Checklist</h2>
                  <p className="text-muted-foreground mb-4">
                    Use this checklist to ensure your backtesting process meets professional standards:
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckIcon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Sufficient historical data (minimum 3-5 years for daily strategies)</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckIcon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Realistic trading costs and slippage included</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckIcon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">No look-ahead bias in strategy logic</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckIcon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Multiple market conditions tested</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckIcon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Out-of-sample validation performed</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckIcon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Walk-forward analysis completed</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckIcon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Monte Carlo simulation run</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckIcon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Risk metrics within acceptable ranges</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckIcon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Statistical significance verified (100+ trades)</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckIcon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Strategy logic documented and reviewed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* CTA */}
              <Card className="border-2 border-primary/20 bg-primary/5">
                <CardContent className="p-8 text-center">
                  <h2 className="text-2xl font-bold mb-4">Ready to Master Professional Backtesting?</h2>
                  <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    Start using StratGen's institutional-grade backtesting engine to validate your trading strategies with confidence. Build robust, profitable strategies that perform in live markets.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" asChild>
                      <Link href="/#pricing">
                        Start Backtesting <ArrowRightIcon className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <Link href="/user-manual">
                        View User Manual
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Related Articles */}
        <section className="py-12 px-4 md:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border border-border/40 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <Badge variant="outline" className="text-xs w-fit">Strategy Validation</Badge>
                  <CardTitle className="text-lg">
                    <Link href="/blog/robustness-testing-trading-strategies" className="hover:text-primary transition-colors">
                      Robustness Testing for Trading Strategies
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Master robustness testing with Monte Carlo simulations and out-of-sample analysis.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border border-border/40 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <Badge variant="outline" className="text-xs w-fit">Code Generation</Badge>
                  <CardTitle className="text-lg">
                    <Link href="/blog/how-stratgen-automates-strategy-coding" className="hover:text-primary transition-colors">
                      How StratGen Automates Your Strategy Coding
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Learn how StratGen automatically generates trading code for multiple platforms.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border border-border/40 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <Badge variant="outline" className="text-xs w-fit">Education</Badge>
                  <CardTitle className="text-lg">
                    <Link href="/blog/quantitative-trading-beginners-guide" className="hover:text-primary transition-colors">
                      Quantitative Trading: A Beginner's Guide
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Complete introduction to quantitative trading and systematic strategies.
                  </p>
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
                      <Link href="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        Blog
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