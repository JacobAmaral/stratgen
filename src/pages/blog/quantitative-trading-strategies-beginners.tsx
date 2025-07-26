import React from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeftIcon, ArrowRightIcon, CalendarIcon, ClockIcon, BookOpenIcon, CheckIcon, TrendingUpIcon } from "lucide-react";

export default function QuantitativeTradingStrategiesBeginners() {
  return (
    <>
      <Head>
        <title>Quantitative Trading Strategies for Beginners: A Complete Guide | StratGen</title>
        <meta name="description" content="Learn the fundamentals of quantitative trading strategies. Discover how beginners can start with algorithmic trading, backtesting, and automated strategy development using StratGen." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="quantitative trading, algorithmic trading, trading strategies, backtesting, automated trading, quant trading, beginners guide, StratGen" />
        <meta property="og:title" content="Quantitative Trading Strategies for Beginners: A Complete Guide | StratGen" />
        <meta property="og:description" content="Learn the fundamentals of quantitative trading strategies. Discover how beginners can start with algorithmic trading, backtesting, and automated strategy development using StratGen." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://stratgen.com/blog/quantitative-trading-strategies-beginners" />
        <meta property="og:image" content="https://assets.co.dev/dc630d7c-c620-481b-9ee9-1959feae8edc/image-aefc7df.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Quantitative Trading Strategies for Beginners: A Complete Guide | StratGen" />
        <meta name="twitter:description" content="Learn the fundamentals of quantitative trading strategies. Discover how beginners can start with algorithmic trading, backtesting, and automated strategy development using StratGen." />
        <meta name="twitter:image" content="https://assets.co.dev/dc630d7c-c620-481b-9ee9-1959feae8edc/image-aefc7df.png" />
        <link rel="canonical" href="https://stratgen.com/blog/quantitative-trading-strategies-beginners" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              "headline": "Quantitative Trading Strategies for Beginners: A Complete Guide",
              "description": "Learn the fundamentals of quantitative trading strategies. Discover how beginners can start with algorithmic trading, backtesting, and automated strategy development using StratGen.",
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
              "datePublished": "2024-12-15",
              "dateModified": "2024-12-15",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://stratgen.com/blog/quantitative-trading-strategies-beginners"
              },
              "image": "https://assets.co.dev/dc630d7c-c620-481b-9ee9-1959feae8edc/image-aefc7df.png",
              "articleSection": "Education",
              "keywords": ["quantitative trading", "algorithmic trading", "trading strategies", "backtesting", "automated trading", "quant trading", "beginners guide"]
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
                <Badge variant="outline">Education</Badge>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CalendarIcon className="h-4 w-4" />
                  December 15, 2024
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <ClockIcon className="h-4 w-4" />
                  12 min read
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Quantitative Trading Strategies for Beginners: A Complete Guide
              </h1>
              <p className="text-xl text-muted-foreground">
                Learn the fundamentals of quantitative trading and discover how to build, test, and deploy algorithmic trading strategies without extensive programming knowledge.
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
                    Quantitative trading, often called "quant trading," represents a systematic approach to financial markets that uses mathematical models, statistical analysis, and algorithmic processes to identify and execute trading opportunities. Unlike traditional discretionary trading, which relies on human judgment and intuition, quantitative trading removes emotion from the equation and bases decisions purely on data and predefined rules.
                  </p>
                  <p className="text-muted-foreground">
                    This comprehensive guide will take you through the fundamentals of quantitative trading, common strategies, and how modern platforms like StratGen have made this sophisticated approach accessible to beginners without extensive programming knowledge.
                  </p>
                </CardContent>
              </Card>

              {/* What is Quantitative Trading */}
              <Card className="border border-border/40 mb-8">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                    <BookOpenIcon className="h-6 w-6 text-primary" />
                    What is Quantitative Trading?
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    At its core, quantitative trading involves three key components: data analysis, strategy development, and automated execution. Traders use historical market data to identify patterns, develop mathematical models that can predict future price movements, and create algorithms that can automatically execute trades based on these models.
                  </p>
                  
                  <h3 className="text-lg font-semibold mb-3 text-primary">Key Advantages of Quantitative Trading:</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckIcon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Emotion-free trading:</strong> Algorithms don't experience fear, greed, or other emotions that can lead to poor trading decisions.
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckIcon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Consistency:</strong> Systematic approaches ensure that trading rules are applied consistently across all market conditions.
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckIcon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Speed and efficiency:</strong> Computers can process vast amounts of data and execute trades much faster than humans.
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckIcon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Backtesting capabilities:</strong> Strategies can be tested on historical data to evaluate their potential performance before risking real capital.
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckIcon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Scalability:</strong> Once developed, quantitative strategies can be applied across multiple markets and timeframes simultaneously.
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Common Strategies */}
              <Card className="border border-border/40 mb-8">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                    <TrendingUpIcon className="h-6 w-6 text-primary" />
                    Common Quantitative Trading Strategies
                  </h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-primary">1. Mean Reversion Strategies</h3>
                      <p className="text-muted-foreground text-sm mb-2">
                        Mean reversion strategies are based on the statistical concept that prices tend to return to their average value over time. When a security's price deviates significantly from its historical mean, these strategies assume it will eventually revert back.
                      </p>
                      <p className="text-muted-foreground text-sm">
                        Common indicators include Bollinger Bands, RSI, and statistical measures like z-scores. These strategies work well in sideways markets but can struggle during strong trends.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-primary">2. Momentum Strategies</h3>
                      <p className="text-muted-foreground text-sm mb-2">
                        Momentum strategies capitalize on the tendency of securities that have performed well (or poorly) recently to continue performing well (or poorly) in the near future. These strategies buy assets showing strong upward momentum and sell assets showing downward momentum.
                      </p>
                      <p className="text-muted-foreground text-sm">
                        Popular indicators include moving average crossovers, MACD, and rate of change calculations. Momentum strategies perform well during trending markets.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-primary">3. Arbitrage Strategies</h3>
                      <p className="text-muted-foreground text-sm mb-2">
                        Arbitrage strategies seek to profit from price discrepancies of the same asset across different markets or related assets. These strategies are typically low-risk but require sophisticated technology and fast execution.
                      </p>
                      <p className="text-muted-foreground text-sm">
                        Examples include statistical arbitrage (pairs trading), merger arbitrage, and cross-market arbitrage.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-primary">4. Market Making Strategies</h3>
                      <p className="text-muted-foreground text-sm">
                        Market making strategies involve providing liquidity by simultaneously placing buy and sell orders. The goal is to profit from the bid-ask spread while managing inventory risk. These strategies require sophisticated risk management and advanced technology.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Getting Started */}
              <Card className="border border-border/40 mb-8">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-4">Getting Started with Quantitative Trading</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">1</div>
                      <div>
                        <h4 className="font-semibold mb-1">Learn the Fundamentals</h4>
                        <p className="text-muted-foreground text-sm mb-2">
                          Before diving into quantitative trading, understand basic financial concepts, statistical analysis, and market mechanics:
                        </p>
                        <ul className="text-muted-foreground text-sm space-y-1 ml-4">
                          <li>• Financial markets and instruments</li>
                          <li>• Statistical concepts (mean, variance, correlation, regression)</li>
                          <li>• Risk management principles</li>
                          <li>• Basic programming concepts (even if using no-code platforms)</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">2</div>
                      <div>
                        <h4 className="font-semibold mb-1">Choose Your Tools</h4>
                        <p className="text-muted-foreground text-sm mb-2">
                          Traditional quantitative trading required extensive programming knowledge. However, modern platforms like StratGen have democratized quantitative trading by providing no-code solutions.
                        </p>
                        <p className="text-muted-foreground text-sm">
                          StratGen offers visual strategy builders, advanced backtesting, 600+ indicators, automatic code generation, and out-of-sample testing capabilities.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">3</div>
                      <div>
                        <h4 className="font-semibold mb-1">Develop Your First Strategy</h4>
                        <p className="text-muted-foreground text-sm mb-2">
                          Start with simple strategies before moving to complex ones. A good beginner strategy might be a simple moving average crossover:
                        </p>
                        <ul className="text-muted-foreground text-sm space-y-1 ml-4">
                          <li>• Buy when short-term MA crosses above long-term MA</li>
                          <li>• Sell when short-term MA crosses below long-term MA</li>
                          <li>• Include basic risk management (stop losses, position sizing)</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">4</div>
                      <div>
                        <h4 className="font-semibold mb-1">Backtest Thoroughly</h4>
                        <p className="text-muted-foreground text-sm mb-2">
                          Backtesting is crucial for evaluating strategy performance before risking real capital:
                        </p>
                        <ul className="text-muted-foreground text-sm space-y-1 ml-4">
                          <li>• Use sufficient historical data (at least 2-3 years)</li>
                          <li>• Account for transaction costs and slippage</li>
                          <li>• Test across different market conditions</li>
                          <li>• Perform out-of-sample testing</li>
                          <li>• Conduct robustness testing with parameter variations</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Common Pitfalls */}
              <Card className="border border-border/40 mb-8">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-4">Common Pitfalls to Avoid</h2>
                  
                  <div className="space-y-4">
                    <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
                      <h3 className="text-lg font-semibold mb-2 text-destructive">1. Overfitting</h3>
                      <p className="text-muted-foreground text-sm mb-2">
                        Overfitting occurs when a strategy is too closely tailored to historical data and fails on new data.
                      </p>
                      <p className="text-muted-foreground text-sm">
                        <strong>Solution:</strong> Keep strategies simple, use out-of-sample testing, avoid excessive optimization, and test across different periods.
                      </p>
                    </div>
                    
                    <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
                      <h3 className="text-lg font-semibold mb-2 text-destructive">2. Survivorship Bias</h3>
                      <p className="text-muted-foreground text-sm mb-2">
                        Testing only on securities that survived the entire period, ignoring delisted companies.
                      </p>
                      <p className="text-muted-foreground text-sm">
                        <strong>Solution:</strong> Include delisted stocks and failed companies in your universe when possible.
                      </p>
                    </div>
                    
                    <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
                      <h3 className="text-lg font-semibold mb-2 text-destructive">3. Look-Ahead Bias</h3>
                      <p className="text-muted-foreground text-sm mb-2">
                        Using future information inadvertently in backtesting.
                      </p>
                      <p className="text-muted-foreground text-sm">
                        <strong>Solution:</strong> Ensure strategies only use information available at the time of each trade.
                      </p>
                    </div>
                    
                    <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
                      <h3 className="text-lg font-semibold mb-2 text-destructive">4. Ignoring Transaction Costs</h3>
                      <p className="text-muted-foreground text-sm mb-2">
                        Underestimating the impact of commissions, spreads, and market impact.
                      </p>
                      <p className="text-muted-foreground text-sm">
                        <strong>Solution:</strong> Always include realistic transaction costs in backtesting.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Risk Management */}
              <Card className="border border-border/40 mb-8">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-4">Risk Management in Quantitative Trading</h2>
                  <p className="text-muted-foreground mb-4">
                    Effective risk management is crucial for long-term success. Key techniques include:
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-primary">Position Sizing</h3>
                      <p className="text-muted-foreground text-sm mb-2">
                        Never risk too much capital on a single trade. Common methods:
                      </p>
                      <ul className="text-muted-foreground text-sm space-y-1 ml-4">
                        <li>• Fixed fractional method (risk fixed percentage per trade)</li>
                        <li>• Kelly criterion (optimal sizing based on win rate)</li>
                        <li>• Volatility-based sizing (adjust based on asset volatility)</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-primary">Stop Losses and Take Profits</h3>
                      <p className="text-muted-foreground text-sm">
                        Implement systematic rules for exiting losing positions and taking profits to limit downside risk and lock in gains.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-primary">Diversification</h3>
                      <p className="text-muted-foreground text-sm mb-2">
                        Diversify across multiple dimensions:
                      </p>
                      <ul className="text-muted-foreground text-sm space-y-1 ml-4">
                        <li>• Different asset classes (stocks, bonds, commodities, currencies)</li>
                        <li>• Multiple strategies and timeframes</li>
                        <li>• Various market conditions</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Building Your Journey */}
              <Card className="border border-border/40 mb-8">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-4">Building Your Quantitative Trading Journey</h2>
                  <p className="text-muted-foreground mb-4">
                    Success requires patience, continuous learning, and a systematic approach. Here's a roadmap:
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-primary">Phase 1: Education (Months 1-3)</h3>
                      <ul className="text-muted-foreground text-sm space-y-1 ml-4">
                        <li>• Learn market fundamentals and trading concepts</li>
                        <li>• Understand statistical concepts and their application</li>
                        <li>• Familiarize yourself with quantitative trading platforms</li>
                        <li>• Study successful quantitative strategies</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-primary">Phase 2: Development (Months 4-6)</h3>
                      <ul className="text-muted-foreground text-sm space-y-1 ml-4">
                        <li>• Develop your first simple strategies</li>
                        <li>• Learn proper backtesting techniques</li>
                        <li>• Understand out-of-sample testing importance</li>
                        <li>• Practice risk management implementation</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-primary">Phase 3: Testing (Months 7-12)</h3>
                      <ul className="text-muted-foreground text-sm space-y-1 ml-4">
                        <li>• Conduct extensive backtesting and robustness testing</li>
                        <li>• Refine strategies based on testing results</li>
                        <li>• Develop multiple strategies for diversification</li>
                        <li>• Prepare for live trading implementation</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-primary">Phase 4: Implementation (Ongoing)</h3>
                      <ul className="text-muted-foreground text-sm space-y-1 ml-4">
                        <li>• Start with small position sizes in live trading</li>
                        <li>• Monitor strategy performance closely</li>
                        <li>• Continuously refine and improve strategies</li>
                        <li>• Stay updated with market developments</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* CTA */}
              <Card className="border-2 border-primary/20 bg-primary/5">
                <CardContent className="p-8 text-center">
                  <h2 className="text-2xl font-bold mb-4">Ready to Start Your Quantitative Trading Journey?</h2>
                  <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    StratGen provides everything you need to develop, test, and deploy quantitative trading strategies without extensive programming knowledge. Start building robust, systematic trading strategies today.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" asChild>
                      <Link href="/#pricing">
                        Get Started Now <ArrowRightIcon className="ml-2 h-4 w-4" />
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
                  <Badge variant="outline" className="text-xs w-fit">Backtesting</Badge>
                  <CardTitle className="text-lg">
                    <Link href="/blog/best-practices-backtesting-stratgen" className="hover:text-primary transition-colors">
                      Best Practices for Backtesting with StratGen
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Master professional backtesting methodologies and best practices for validating trading strategies.
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
                    Learn how StratGen automatically generates trading code for multiple platforms without programming.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border border-border/40 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <Badge variant="outline" className="text-xs w-fit">Risk Management</Badge>
                  <CardTitle className="text-lg">
                    <Link href="/blog/advanced-risk-management-techniques" className="hover:text-primary transition-colors">
                      Advanced Risk Management Techniques
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Master advanced risk management techniques for algorithmic trading success.
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