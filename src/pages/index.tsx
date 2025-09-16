import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { CheckIcon, ArrowRightIcon, LineChartIcon, BarChartIcon, BellIcon, ZapIcon, SettingsIcon, DownloadIcon } from "lucide-react";
import { 
  ChartContainer, 
  ChartTooltip, 
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent
} from "@/components/ui/chart";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ReferenceLine,
  ResponsiveContainer,
  Scatter
} from "recharts";

// Mock data for the demo chart
const mockPriceData = [
  { date: "2025-04-01", price: 50000, sma20: 49000, sma50: 48000 },
  { date: "2025-04-02", price: 51000, sma20: 49200, sma50: 48100 },
  { date: "2025-04-03", price: 52000, sma20: 49500, sma50: 48200 },
  { date: "2025-04-04", price: 51500, sma20: 49700, sma50: 48300 },
  { date: "2025-04-05", price: 51200, sma20: 49900, sma50: 48400 },
  { date: "2025-04-06", price: 52500, sma20: 50100, sma50: 48500 },
  { date: "2025-04-07", price: 53000, sma20: 50400, sma50: 48700 },
  { date: "2025-04-08", price: 54000, sma20: 50800, sma50: 48900 },
  { date: "2025-04-09", price: 53500, sma20: 51000, sma50: 49100 },
  { date: "2025-04-10", price: 53200, sma20: 51200, sma50: 49300 },
  { date: "2025-04-11", price: 54500, sma20: 51500, sma50: 49500 },
  { date: "2025-04-12", price: 55000, sma20: 51800, sma50: 49700 },
  { date: "2025-04-13", price: 56000, sma20: 52200, sma50: 49900 },
  { date: "2025-04-14", price: 55500, sma20: 52500, sma50: 50100 },
  { date: "2025-04-15", price: 55200, sma20: 52700, sma50: 50300 },
  { date: "2025-04-16", price: 56500, sma20: 53000, sma50: 50500 },
  { date: "2025-04-17", price: 57000, sma20: 53300, sma50: 50700 },
  { date: "2025-04-18", price: 58000, sma20: 53700, sma50: 50900 },
  { date: "2025-04-19", price: 57500, sma20: 54000, sma50: 51100 },
  { date: "2025-04-20", price: 57200, sma20: 54200, sma50: 51300 },
];

// Mock buy/sell signals
const buySignals = [
  { date: "2025-04-06", price: 52500 },
  { date: "2025-04-16", price: 56500 },
];

const sellSignals = [
  { date: "2025-04-09", price: 53500 },
  { date: "2025-04-19", price: 57500 },
];

// Chart configuration
const chartConfig = {
  price: { label: "Price", color: "#3b82f6" },
  sma20: { label: "SMA (20)", color: "#4ade80" },
  sma50: { label: "SMA (50)", color: "#f97316" },
  buy: { label: "Buy Signal", color: "#22c55e" },
  sell: { label: "Sell Signal", color: "#ef4444" },
};

// Pricing tier
const pricingTier = {
  name: "StratGen Premium",
  monthlyPrice: "$100",
  yearlyPrice: "$1000",
  description: "All-inclusive professional trading platform",
  features: [
    "600+ technical and fundamental signals",
    "Institutional-grade backtesting",
    "Import data from any source",
    "All market data sources",
    "Strategy optimization",
    "Robustness testing tools",
    "Code export for all platforms (NinjaTrader, TradeStation, Python)",
    "Strategy automation",
    "24/7 priority support"
  ],
  cta: "Get Started Today"
};

// Features list
const features = [
  {
    icon: <LineChartIcon className="h-10 w-10 text-primary" />,
    title: "Advanced Signal Analysis",
    description: "Test over 600 fundamental and technical signals including Moving Averages, RSI, MACD, Bollinger Bands, and more to identify powerful trading opportunities."
  },
  {
    icon: <BarChartIcon className="h-10 w-10 text-primary" />,
    title: "Comprehensive Backtesting",
    description: "Test your trading strategies against historical data to validate performance before risking real capital."
  },
  {
    icon: <ZapIcon className="h-10 w-10 text-primary" />,
    title: "Strategy Optimization",
    description: "Fine-tune your trading strategies with our optimization engine that helps identify the most robust parameters."
  },
  {
    icon: <SettingsIcon className="h-10 w-10 text-primary" />,
    title: "Import your own data",
    description: "Import OHLCV data to test any instrument - stocks, forex, crypto, or custom datasets for comprehensive backtesting."
  },
  {
    icon: <DownloadIcon className="h-10 w-10 text-primary" />,
    title: "Robustness testing tools",
    description: "Validate your strategies with Monte Carlo simulations, walk-forward analysis, and stress testing to ensure they perform in various market conditions."
  },
  {
    icon: <svg className="h-10 w-10 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>,
    title: "Automatic Code Generation",
    description: "Export your strategies as ready-to-use code for NinjaTrader, TradeStation, and Python without writing a single line of code yourself."
  }
];

export default function Home() {
  const [selectedPricingTier, setSelectedPricingTier] = useState<string>("monthly");
  
  return (
    <>
      <Head>
        <title>StratGen | Professional Algorithmic Trading & Backtesting Platform for Quant Traders</title>
        <meta name="description" content="Professional no-code algorithmic trading platform with backtesting, robustness testing, and automatic code generation for NinjaTrader, TradeStation & Python." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="quantitative trading, quantitative research, backtesting, no-code, coding generation, robustness testing, futures trading, equities trading, crypto trading, algo trading, algorithmic trading, quant trading, trading signals, trading strategy, ninjatrader, tradestation, python" />
        <meta property="og:title" content="StratGen | Professional Algorithmic Trading & Backtesting Platform" />
        <meta property="og:description" content="Professional-grade platform for quantitative traders with backtesting, robustness testing, and automatic code generation for NinjaTrader, TradeStation, and Python." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://stratgen.com" />
        <meta property="og:image" content="https://assets.co.dev/dc630d7c-c620-481b-9ee9-1959feae8edc/image-aefc7df.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="StratGen | Professional Algorithmic Trading & Backtesting Platform" />
        <meta name="twitter:description" content="Professional-grade platform for quantitative traders with backtesting, robustness testing, and automatic code generation for NinjaTrader, TradeStation, and Python." />
        <meta name="twitter:image" content="https://assets.co.dev/dc630d7c-c620-481b-9ee9-1959feae8edc/image-aefc7df.png" />
        <link rel="canonical" href="https://stratgen.com" />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "SoftwareApplication",
                "name": "StratGen",
                "url": "https://stratgensoft.com/",
                "applicationCategory": "FinancialApplication",
                "operatingSystem": "Windows",
                "offers": [
                  {
                    "@type": "Offer",
                    "name": "Monthly Subscription",
                    "price": "99.00",
                    "priceCurrency": "USD",
                    "billingIncrement": "P1M",
                    "availability": "https://schema.org/InStock",
                    "url": "https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-6G695380H8515921NNBFO5IQ"
                  },
                  {
                    "@type": "Offer",
                    "name": "Annual Subscription",
                    "price": "1000.00",
                    "priceCurrency": "USD",
                    "billingIncrement": "P1Y",
                    "availability": "https://schema.org/InStock",
                    "url": "https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-9LN24145W5037140NNBFO7DY"
                  }
                ],
                "description": "StratGen is a desktop app for designing, backtesting, and exporting algorithmic trading strategies for platforms like NinjaTrader and QuantConnect. Professional trading signal generator and backtesting platform for quantitative traders with automatic code generation.",
                "author": {
                  "@type": "Organization",
                  "name": "WeTradeLabs",
                  "email": "jacob@wetradelabs.com"
                },
                "featureList": [
                  "Advanced Signal Analysis with 600+ fundamental and technical signals",
                  "Signal Tester for strategy validation",
                  "Advanced Backtesting Engine",
                  "Robustness testing tools",
                  "Import your own data, OHLCV data to test any instrument",
                  "Coding Generator for NinjaTrader, TradeStation, and Python",
                  "Powerful Dashboard with analytics"
                ],
                "screenshot": "https://assets.co.dev/dc630d7c-c620-481b-9ee9-1959feae8edc/image-aefc7df.png"
              },
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "WeTradeLabs",
                "url": "https://stratgensoft.com/",
                "email": "jacob@wetradelabs.com",
                "description": "Developer of StratGen, professional trading software for quantitative traders and algorithmic strategy development.",
                "makesOffer": {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "SoftwareApplication",
                    "name": "StratGen"
                  }
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "Product",
                "name": "StratGen",
                "description": "Professional trading signal generator and backtesting platform for quantitative traders. Features automatic code generation for NinjaTrader, TradeStation, and Python with advanced robustness testing tools.",
                "brand": {
                  "@type": "Brand",
                  "name": "WeTradeLabs"
                },
                "category": "Financial Software",
                "offers": [
                  {
                    "@type": "Offer",
                    "name": "Monthly Subscription",
                    "price": "99.00",
                    "priceCurrency": "USD",
                    "availability": "https://schema.org/InStock"
                  },
                  {
                    "@type": "Offer",
                    "name": "Annual Subscription", 
                    "price": "1000.00",
                    "priceCurrency": "USD",
                    "availability": "https://schema.org/InStock"
                  }
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "What is StratGen and how does it help with algorithmic trading?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "StratGen is a professional no-code algorithmic trading platform designed for quantitative traders. It provides advanced backtesting, robustness testing, and automatic code generation for NinjaTrader, TradeStation, and Python. Our platform helps you develop and validate trading strategies without requiring programming knowledge."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can I use StratGen for futures trading, equities trading, and crypto trading?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, StratGen supports all major asset classes including futures trading, equities trading, crypto trading, and forex. You can import OHLCV data from any source to test strategies across different markets and instruments."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How many technical indicators and signals does StratGen offer?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "StratGen provides access to over 600 technical and fundamental signals including Moving Averages, RSI, MACD, Bollinger Bands, and many more. This comprehensive library allows for extensive quantitative analysis and strategy development."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What platforms can I export my trading strategies to?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "StratGen automatically generates ready-to-use code for NinjaTrader, TradeStation, and Python. This no-code approach means you can develop sophisticated algorithmic trading strategies and deploy them across multiple platforms without writing any code yourself."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What robustness testing tools are available?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "StratGen includes comprehensive robustness testing tools such as Monte Carlo simulations, walk-forward analysis, out-of-sample testing, and stress testing. These tools help ensure your strategies perform consistently across different market conditions."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Is StratGen suitable for quantitative traders and quant trading?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Absolutely. StratGen is specifically designed for quantitative traders who demand rigorous analysis and validation. Our platform provides institutional-grade backtesting, advanced statistical analysis, and comprehensive performance metrics essential for quant trading."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What operating systems does StratGen support?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "StratGen is available for Windows, providing a robust desktop platform for algorithmic trading and strategy development."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How does the backtesting engine work?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Our advanced backtesting engine allows you to test trading strategies against historical data with detailed performance metrics. It includes features like slippage modeling, commission calculations, and realistic market conditions to provide accurate strategy validation."
                    }
                  }
                ]
              }
            ])
          }}
        />
      </Head>
      
      <div className="bg-background min-h-screen flex flex-col">
        <Header />
        
        {/* Hero Section */}
        <section id="home" className="relative py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-primary/10 to-background">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Badge variant="outline" className="px-3 py-1 text-sm bg-primary/10 border-primary/20 text-primary">
                  Version 0.9.4 Now Available
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                  Algorithmic Trading & Backtesting with <span className="text-primary">StratGen</span>
                </h1>
                <p className="text-xl text-muted-foreground">
                  The professional-grade no-code platform for quantitative research and trading, designed for quant traders who demand rigorous out-of-sample testing and robustness analysis.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="font-medium" asChild>
                    <a href="#pricing">
                      Get Started Now <ArrowRightIcon className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckIcon className="h-4 w-4 text-primary" /> Available for Windows
                </div>
              </div>
              
              <div className="rounded-lg overflow-hidden border border-border/40 shadow-xl">
                {/* StratGen Application Image */}
                <div className="relative h-[400px] w-full overflow-hidden">
                  <Image 
                    src="https://assets.co.dev/dc630d7c-c620-481b-9ee9-1959feae8edc/image-aefc7df.png"
                    alt="StratGen professional algorithmic trading platform dashboard displaying advanced backtesting results, quantitative analysis charts, and trading signals for automated strategy development"
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section id="features" className="py-20 px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features for Quantitative & Algo Traders</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                StratGen combines advanced algorithmic trading tools with no-code simplicity to help you develop robust strategies for quantitative research and trading.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="border border-border/40">
                  <CardHeader>
                    <div className="mb-4">{feature.icon}</div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Screenshots Section */}
        <section id="screenshots" className="py-20 px-4 md:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">See StratGen's Algorithmic Trading Tools in Action</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Explore our no-code platform designed for quantitative traders and algorithmic strategy developers.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Screenshot 1 - Dashboard */}
              <div className="rounded-lg overflow-hidden border border-border/40 shadow-lg bg-card">
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Powerful Dashboard</h3>
                  <p className="text-muted-foreground mb-4">Monitor multiple markets and strategies at a glance.</p>
                </div>
                <div className="bg-gradient-to-br from-primary/5 to-primary/20 p-8 flex items-center justify-center h-[300px]">
                  <div className="w-full h-full bg-card rounded-md border border-border/40 shadow-md overflow-hidden">
                    <div className="relative w-full h-full">
                      <Image 
                        src="https://assets.co.dev/dc630d7c-c620-481b-9ee9-1959feae8edc/animation-faec11f.gif"
                        alt="StratGen algorithmic trading dashboard showing real-time market data, backtesting results, and quantitative analysis for futures and crypto trading"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Screenshot 2 - Signal Tester */}
              <div className="rounded-lg overflow-hidden border border-border/40 shadow-lg bg-card">
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Signal Tester</h3>
                  <p className="text-muted-foreground mb-4">Test and validate trading signals with comprehensive analysis tools.</p>
                </div>
                <div className="bg-gradient-to-br from-primary/5 to-primary/20 p-8 flex items-center justify-center h-[300px]">
                  <div className="w-full h-full bg-card rounded-md border border-border/40 shadow-md overflow-hidden">
                    <div className="relative w-full h-full">
                      <Image 
                        src="https://assets.co.dev/dc630d7c-c620-481b-9ee9-1959feae8edc/image-39a10ef.png"
                        alt="StratGen signal tester interface for quantitative trading analysis with 600+ technical indicators for algorithmic trading strategies"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Screenshot 3 - Backtesting */}
              <div className="rounded-lg overflow-hidden border border-border/40 shadow-lg bg-card">
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Advanced Backtesting</h3>
                  <p className="text-muted-foreground mb-4">Test your strategies against historical data with detailed performance metrics.</p>
                </div>
                <div className="bg-gradient-to-br from-primary/5 to-primary/20 p-8 flex items-center justify-center h-[300px]">
                  <div className="w-full h-full bg-card rounded-md border border-border/40 shadow-md overflow-hidden">
                    <div className="relative w-full h-full">
                      <Image 
                        src="https://assets.co.dev/dc630d7c-c620-481b-9ee9-1959feae8edc/image-3a930e3.png"
                        alt="StratGen advanced backtesting interface with robustness testing, Monte Carlo simulations, and out-of-sample analysis for algorithmic trading"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Screenshot 4 - Coding Generator */}
              <div className="rounded-lg overflow-hidden border border-border/40 shadow-lg bg-card">
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Coding Generator</h3>
                  <p className="text-muted-foreground mb-4">Automatically generate code for NinjaTrader, TradeStation and Python.</p>
                </div>
                <div className="bg-gradient-to-br from-primary/5 to-primary/20 p-8 flex items-center justify-center h-[300px]">
                  <div className="w-full h-full bg-card rounded-md border border-border/40 shadow-md overflow-hidden">
                    <div className="relative w-full h-full">
                      <Image 
                        src="https://assets.co.dev/dc630d7c-c620-481b-9ee9-1959feae8edc/image-9db68ff.png"
                        alt="StratGen automatic code generator for NinjaTrader, TradeStation, and Python - no-code algorithmic trading strategy export"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section id="faq" className="py-20 px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-muted-foreground">
                Common questions about StratGen's algorithmic trading and backtesting platform
              </p>
            </div>
            
            <div className="space-y-6">
              <Card className="border border-border/40">
                <CardHeader>
                  <CardTitle className="text-lg">What is StratGen and how does it help with algorithmic trading?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    StratGen is a professional no-code algorithmic trading platform designed for quantitative traders. It provides advanced backtesting, robustness testing, and automatic code generation for NinjaTrader, TradeStation, and Python. Our platform helps you develop and validate trading strategies without requiring programming knowledge.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-border/40">
                <CardHeader>
                  <CardTitle className="text-lg">Can I use StratGen for futures trading, equities trading, and crypto trading?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes, StratGen supports all major asset classes including futures trading, equities trading, crypto trading, and forex. You can import OHLCV data from any source to test strategies across different markets and instruments.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-border/40">
                <CardHeader>
                  <CardTitle className="text-lg">How many technical indicators and signals does StratGen offer?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    StratGen provides access to over 600 technical and fundamental signals including Moving Averages, RSI, MACD, Bollinger Bands, and many more. This comprehensive library allows for extensive quantitative analysis and strategy development.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-border/40">
                <CardHeader>
                  <CardTitle className="text-lg">What platforms can I export my trading strategies to?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    StratGen automatically generates ready-to-use code for NinjaTrader, TradeStation, and Python. This no-code approach means you can develop sophisticated algorithmic trading strategies and deploy them across multiple platforms without writing any code yourself.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-border/40">
                <CardHeader>
                  <CardTitle className="text-lg">What robustness testing tools are available?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    StratGen includes comprehensive robustness testing tools such as Monte Carlo simulations, walk-forward analysis, out-of-sample testing, and stress testing. These tools help ensure your strategies perform consistently across different market conditions.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-border/40">
                <CardHeader>
                  <CardTitle className="text-lg">Is StratGen suitable for quantitative traders and quant trading?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Absolutely. StratGen is specifically designed for quantitative traders who demand rigorous analysis and validation. Our platform provides institutional-grade backtesting, advanced statistical analysis, and comprehensive performance metrics essential for quant trading.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-border/40">
                <CardHeader>
                  <CardTitle className="text-lg">What operating systems does StratGen support?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    StratGen is available for Windows, providing a robust desktop platform for algorithmic trading and strategy development.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-border/40">
                <CardHeader>
                  <CardTitle className="text-lg">How does the backtesting engine work?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our advanced backtesting engine allows you to test trading strategies against historical data with detailed performance metrics. It includes features like slippage modeling, commission calculations, and realistic market conditions to provide accurate strategy validation.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 md:px-6 lg:px-8" id="pricing">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Choose Your StratGen Plan</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Join thousands of quantitative traders who use StratGen's no-code platform to develop robust strategies, perform backtesting, and generate trading signals with automatic code generation.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <Card className="border-2 border-primary/20 shadow-xl">
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold">StratGen Premium</CardTitle>
                  <CardDescription className="text-lg">
                    All-inclusive professional trading platform
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  {/* Pricing Options */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Monthly Plan */}
                    <div className="border border-border/40 rounded-lg p-6 text-center">
                      <h3 className="text-lg font-semibold mb-2">Monthly</h3>
                      <div className="text-3xl font-bold mb-4">$99<span className="text-lg font-normal text-muted-foreground">/month</span></div>
                      <Button size="lg" className="w-full font-medium" asChild>
                        <a href="https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-6G695380H8515921NNBFO5IQ" target="_blank" rel="noopener noreferrer">
                          Subscribe Monthly <ArrowRightIcon className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                    
                    {/* Yearly Plan */}
                    <div className="border-2 border-primary rounded-lg p-6 text-center relative">
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <Badge className="bg-primary text-primary-foreground px-3 py-1">Save $188</Badge>
                      </div>
                      <h3 className="text-lg font-semibold mb-2">Yearly</h3>
                      <div className="text-3xl font-bold mb-2">$1000<span className="text-lg font-normal text-muted-foreground">/year</span></div>
                      <div className="text-sm text-muted-foreground mb-4">$83.33/month when paid annually</div>
                      <Button size="lg" className="w-full font-medium" asChild>
                        <a href="https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-9LN24145W5037140NNBFO7DY" target="_blank" rel="noopener noreferrer">
                          Subscribe Yearly <ArrowRightIcon className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                  
                  {/* Features List */}
                  <div className="border-t border-border/40 pt-8">
                    <h4 className="text-lg font-semibold mb-6 text-center">Everything Included:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        "600+ technical and fundamental signals",
                        "Institutional-grade backtesting",
                        "Import data from any source",
                        "All market data sources",
                        "Strategy optimization",
                        "Robustness testing tools",
                        "Code export for all platforms (NinjaTrader, TradeStation, Python)",
                        "Strategy automation",
                        "24/7 priority support"
                      ].map((feature, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <CheckIcon className="h-5 w-5 text-primary flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Refund Policy */}
                  <div className="border-t border-border/40 pt-6">
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h5 className="font-semibold mb-2 text-center">Subscription Policy</h5>
                      <p className="text-sm text-muted-foreground text-center">
                        We do not offer refunds. However, you can cancel your monthly or yearly subscription at any time and will not be billed thereafter.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        

        
        {/* Risk Disclaimer Section */}
        <section id="disclaimer" className="py-12 px-4 md:px-6 lg:px-8 bg-muted/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">Risk Disclaimer</h2>
            </div>
            <div className="prose prose-sm max-w-4xl mx-auto text-muted-foreground">
              <div className="bg-card border border-border/40 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-medium mb-4">Trading Risk Disclosure</h3>
                <p className="mb-3">
                  <strong>Risk of Loss:</strong> Trading in financial markets involves substantial risk of loss and is not suitable for all investors. The value of investments can go down as well as up, and investors may lose all of their investment.
                </p>
                <p className="mb-3">
                  <strong>No Guarantees:</strong> StratGen is a tool designed to assist with trading decisions, but it does not guarantee profits or prevent losses. Past performance of any trading system or methodology is not necessarily indicative of future results.
                </p>
                <p className="mb-3">
                  <strong>Software Limitations:</strong> While StratGen is designed to be reliable and accurate, technical issues, data errors, or other factors may affect its performance. Users should not rely solely on the software for trading decisions.
                </p>
                <p className="mb-3">
                  <strong>Hypothetical Performance:</strong> Any backtesting results, simulations, or hypothetical performance shown are for illustrative purposes only. They do not represent actual trading and may not account for all market factors or risks.
                </p>
                <p className="mb-3">
                  <strong>Professional Advice:</strong> The information provided by StratGen is not intended to be a substitute for professional financial advice. We recommend consulting with a qualified financial advisor before making investment decisions.
                </p>
                <p className="mb-3">
                  <strong>User Responsibility:</strong> Users are solely responsible for their trading decisions and should conduct their own research and due diligence before placing trades based on signals generated by StratGen.
                </p>
                <p>
                  By using StratGen, you acknowledge that you have read and understood this risk disclaimer and agree to assume full responsibility for your trading decisions.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Footer */}
        <footer id="footer" className="py-12 px-4 md:px-6 lg:px-8 border-t">
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