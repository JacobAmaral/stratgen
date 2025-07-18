import React from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeftIcon, ArrowRightIcon, CalendarIcon, ClockIcon } from "lucide-react";

export default function BlogIndex() {
  const blogPosts = [
    {
      slug: "machine-learning-trading-strategies-2025",
      title: "Machine Learning Trading Strategies: 2025 Trends and Innovations",
      description: "Discover the latest machine learning innovations transforming algorithmic trading in 2025, from advanced neural networks to reinforcement learning systems that adapt to market conditions in real-time.",
      category: "Machine Learning",
      readTime: "20 min read",
      publishDate: "2025-07-01",
      tags: ["Machine Learning", "AI Trading", "Neural Networks", "Reinforcement Learning", "Deep Learning"]
    },
    {
      slug: "cryptocurrency-trading-algorithms-2025",
      title: "Cryptocurrency Trading Algorithms: Advanced Strategies for 2025",
      description: "Master cryptocurrency algorithmic trading in 2025. Learn about DeFi arbitrage, MEV strategies, cross-chain trading, and advanced crypto quantitative techniques.",
      category: "Cryptocurrency",
      readTime: "22 min read",
      publishDate: "2025-06-15",
      tags: ["Cryptocurrency", "DeFi", "MEV", "Cross-Chain", "Crypto Trading"]
    },
    {
      slug: "futures-trading-strategies-systematic-approach",
      title: "Futures Trading Strategies: A Systematic Approach to Derivatives",
      description: "Explore comprehensive systematic approaches to futures trading, from understanding market structure and roll yield to implementing advanced spread strategies and risk management techniques.",
      category: "Futures Trading",
      readTime: "25 min read",
      publishDate: "2025-05-20",
      tags: ["Futures Trading", "Derivatives", "Contango", "Backwardation", "Spread Trading"]
    },
    {
      slug: "how-stratgen-automates-strategy-coding",
      title: "How StratGen Automates Your Strategy Coding",
      description: "Learn how StratGen's no-code platform automatically generates ready-to-use code for NinjaTrader, TradeStation, and Python, eliminating the need for manual programming.",
      category: "Code Generation",
      readTime: "5 min read",
      publishDate: "2025-01-15",
      tags: ["Code Generation", "NinjaTrader", "TradeStation", "Python", "No-Code"]
    },
    {
      slug: "best-practices-backtesting-stratgen",
      title: "Best Practices for Backtesting with StratGen",
      description: "Discover professional backtesting methodologies and best practices for validating trading strategies using StratGen's institutional-grade backtesting engine.",
      category: "Backtesting",
      readTime: "7 min read",
      publishDate: "2025-01-10",
      tags: ["Backtesting", "Strategy Validation", "Best Practices", "Quantitative Trading"]
    },
    {
      slug: "advanced-risk-management-techniques",
      title: "Advanced Risk Management Techniques for Algorithmic Trading",
      description: "Master advanced risk management techniques for algorithmic trading. Learn portfolio optimization, VaR calculations, drawdown control, and position sizing strategies.",
      category: "Risk Management",
      readTime: "15 min read",
      publishDate: "2024-12-10",
      tags: ["Risk Management", "Portfolio Optimization", "VaR", "Position Sizing"]
    },
    {
      slug: "market-microstructure-algorithmic-trading",
      title: "Understanding Market Microstructure for Algorithmic Trading Success",
      description: "Master market microstructure concepts essential for algorithmic trading. Learn about order flow, market impact, liquidity, and execution strategies.",
      category: "Market Structure",
      readTime: "18 min read",
      publishDate: "2024-12-05",
      tags: ["Market Microstructure", "Order Flow", "Liquidity", "Execution"]
    },
    {
      slug: "quantitative-trading-strategies-beginners",
      title: "Quantitative Trading Strategies for Beginners: A Complete Guide",
      description: "Learn the fundamentals of quantitative trading strategies. Discover how beginners can start with algorithmic trading, backtesting, and automated strategy development.",
      category: "Education",
      readTime: "12 min read",
      publishDate: "2024-12-15",
      tags: ["Quantitative Trading", "Beginner Guide", "Algorithmic Trading", "Education"]
    }
  ];

  return (
    <>
      <Head>
        <title>StratGen Blog | Algorithmic Trading Insights & Tutorials</title>
        <meta name="description" content="Expert insights, tutorials, and best practices for algorithmic trading, backtesting, and quantitative strategy development with StratGen platform." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="algorithmic trading blog, quantitative trading tutorials, backtesting best practices, trading strategy development, stratgen tutorials, systematic trading guides" />
        <meta property="og:title" content="StratGen Blog | Algorithmic Trading Insights & Tutorials" />
        <meta property="og:description" content="Expert insights, tutorials, and best practices for algorithmic trading, backtesting, and quantitative strategy development." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://stratgen.com/blog" />
        <meta property="og:image" content="https://assets.co.dev/dc630d7c-c620-481b-9ee9-1959feae8edc/image-aefc7df.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="StratGen Blog | Algorithmic Trading Insights & Tutorials" />
        <meta name="twitter:description" content="Expert insights, tutorials, and best practices for algorithmic trading, backtesting, and quantitative strategy development." />
        <meta name="twitter:image" content="https://assets.co.dev/dc630d7c-c620-481b-9ee9-1959feae8edc/image-aefc7df.png" />
        <link rel="canonical" href="https://stratgen.com/blog" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Blog",
              "name": "StratGen Blog",
              "description": "Expert insights, tutorials, and best practices for algorithmic trading, backtesting, and quantitative strategy development with StratGen platform.",
              "url": "https://stratgen.com/blog",
              "publisher": {
                "@type": "Organization",
                "name": "WeTradeLabs",
                "email": "jacob@wetradelabs.com"
              },
              "blogPost": blogPosts.map(post => ({
                "@type": "BlogPosting",
                "headline": post.title,
                "description": post.description,
                "url": `https://stratgen.com/blog/${post.slug}`,
                "datePublished": post.publishDate,
                "author": {
                  "@type": "Organization",
                  "name": "WeTradeLabs"
                },
                "publisher": {
                  "@type": "Organization",
                  "name": "WeTradeLabs"
                }
              }))
            })
          }}
        />
      </Head>
      
      <div className="bg-background min-h-screen flex flex-col">
        <Header />
        
        {/* Hero Section */}
        <section className="relative py-12 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-primary/10 to-background">
          <div className="max-w-6xl mx-auto">
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
                StratGen <span className="text-primary">Blog</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Expert insights, tutorials, and best practices for algorithmic trading, backtesting, and quantitative strategy development with StratGen.
              </p>
            </div>
          </div>
        </section>
        
        {/* Blog Posts */}
        <section className="py-12 px-4 md:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Card key={index} className="border border-border/40 hover:border-primary/50 transition-colors group">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="outline" className="text-xs">
                        {post.category}
                      </Badge>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <CalendarIcon className="h-3 w-3" />
                        {new Date(post.publishDate).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </div>
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-4">
                      {post.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <ClockIcon className="h-3 w-3" />
                        {post.readTime}
                      </div>
                      <Button variant="ghost" size="sm" asChild>
                        <Link href={`/blog/${post.slug}`}>
                          Read More <ArrowRightIcon className="ml-1 h-3 w-3" />
                        </Link>
                      </Button>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mt-4">
                      {post.tags.slice(0, 3).map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Newsletter CTA */}
        <section className="py-12 px-4 md:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-primary/20 bg-primary/5">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">Stay Updated with StratGen</h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Get the latest insights on algorithmic trading, quantitative research, and StratGen platform updates delivered to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
                    <a href="mailto:jacob@wetradelabs.com?subject=StratGen%20Newsletter&body=Hi%2C%20I%20would%20like%20to%20subscribe%20to%20the%20StratGen%20newsletter%20for%20updates%20on%20algorithmic%20trading%20and%20platform%20news.">
                      Subscribe to Updates <ArrowRightIcon className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/#pricing">
                      Try StratGen
                    </Link>
                  </Button>
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