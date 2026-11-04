import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { CheckIcon, ArrowRightIcon } from "lucide-react";

const capabilityGroups = [
  {
    groupTitle: "Strategy Discovery & AI Studio",
    groupSummary:
      "Search across hundreds of parameterized indicators or build and compile strategies conversationally in plain English.",
    items: [
      {
        tag: "AI Copilot + Roslyn C#",
        title: "AI Copilot Conversational Studio",
        description:
          "Design, backtest, and walk-forward validate quantitative strategies in plain English with autonomous Roslyn C# verification and instant code export.",
      },
      {
        tag: "Offline LLM Engine",
        title: "StratGen Local Azores 1.0 & Cloud BYOK",
        description:
          "Execute zero-token local quantitative synthesis directly on your Windows machine, or connect OpenRouter, Claude, OpenAI, and Gemini via local API keys.",
      },
      {
        tag: "600+ Signals",
        title: "Advanced Signal Analysis",
        description:
          "Test over 600 technical and fundamental signals—including Moving Averages, RSI, MACD, Donchian, Elliott Wave, Z-Score, and Open Interest—to isolate repeatable market edges.",
      },
      {
        tag: "Custom OHLCV & Tick",
        title: "Import Your Own Market Data",
        description:
          "Import custom OHLCV, tick, or Open Interest CSV datasets to test futures, equities, forex, crypto, or proprietary series with automatic history caching.",
      },
    ],
  },
  {
    groupTitle: "v2 Tensor Validation & Risk Engineering",
    groupSummary:
      "Stress-test candidate systems against out-of-sample data, parameter sensitivity, and realistic execution frictions before risking capital.",
    items: [
      {
        tag: "v2 Tensor Engine",
        title: "v2 Tensor Backtest & Walk-Forward Engine",
        description:
          "Run high-speed backtests and multi-window walk-forward optimizations in seconds with realistic slippage, commissions, and session-close handling.",
      },
      {
        tag: "Out-of-Sample & Stress",
        title: "Comprehensive Backtesting & Optimization",
        description:
          "Evaluate strategies across strict In-Sample discovery and Out-of-Sample verification splits to filter out curve-fit parameter sets.",
      },
      {
        tag: "Monte Carlo",
        title: "Robustness Testing Suite",
        description:
          "Validate drawdown distributions and tail risk using single-strategy and portfolio-level Monte Carlo simulations, rolling walk-forward matrices, and stress testing.",
      },
      {
        tag: "Risk & Pyramiding",
        title: "Position Sizing & Portfolio Tracking",
        description:
          "Model fixed dollar risk, percentage equity, fixed notional sizing, and pyramiding scale-ins, then combine systems to inspect portfolio correlation and incubation performance.",
      },
    ],
  },
  {
    groupTitle: "Execution Code Export & Live Onboarding",
    groupSummary:
      "Move validated strategies directly into your brokerage execution platform with zero manual translation.",
    items: [
      {
        tag: "C# · EasyLanguage · Python",
        title: "Automatic Code Generation",
        description:
          "Export selected strategies or walk-forward parameter schedules as ready-to-compile code for NinjaTrader (NinjaScript C#), TradeStation (EasyLanguage), and Python.",
      },
      {
        tag: "MCP & Local HTTP Bridge",
        title: "External Agent & IDE Integration",
        description:
          "Connect Claude Desktop, Cursor, Windsurf, or custom Python scripts directly to StratGen's engine via the built-in Model Context Protocol (MCP) server and Local HTTP Bridge.",
      },
      {
        tag: "Included with Every Plan",
        title: "Live Training on Best Practices",
        description:
          "Every StratGen license includes live training on quantitative workflow best practices so you can master data setup, out-of-sample validation, and deployment faster.",
      },
    ],
  },
];

const platformModules = [
  {
    id: "dashboard",
    title: "Backtest & Portfolio Dashboard",
    spec: "Equity Curves · Drawdown · Trade Ledger",
    description:
      "Inspect In-Sample vs. Out-of-Sample equity progression, Return-to-Drawdown ratios, Sharpe metrics, and trade-by-trade execution logs across markets.",
    image: "/stratgen_manual_images/dashboard.jpg",
    alt: "StratGen algorithmic trading dashboard showing real-time market data, backtesting results, and quantitative analysis for futures and crypto trading",
  },
  {
    id: "signaltester",
    title: "Signal Tester & Parameter Sweep",
    spec: "600+ Built-In Signals · Min;Max;Step Grid",
    description:
      "Configure Required, Entry, and Exit signal rules with tunable P1/P2 parameter ranges across multi-symbol watchlists.",
    image: "/stratgen_manual_images/signaltester.jpg",
    alt: "StratGen signal tester interface for quantitative trading analysis with 600+ technical indicators for algorithmic trading strategies",
  },
  {
    id: "advbacktest",
    title: "Walk-Forward & Robustness Matrix",
    spec: "Rolling Windows · Monte Carlo · OOS Verification",
    description:
      "Verify parameter stability across rolling historical windows and run Monte Carlo simulations to measure worst-case drawdown probabilities.",
    image: "/stratgen_manual_images/advbacktest.jpg",
    alt: "StratGen advanced backtesting interface with robustness testing, Monte Carlo simulations, and out-of-sample analysis for algorithmic trading",
  },
  {
    id: "codinggen",
    title: "Multi-Platform Code Generator",
    spec: "NinjaTrader C# · TradeStation · Python",
    description:
      "Generate clean, ready-to-compile strategy scripts for NinjaTrader, TradeStation EasyLanguage, and Python directly from any validated backtest row.",
    image: "/stratgen_manual_images/codinggen.jpg",
    alt: "StratGen automatic code generator for NinjaTrader, TradeStation, and Python - no-code algorithmic trading strategy export",
  },
];

const faqs = [
  {
    question: "What is StratGen and how does it help with algorithmic trading?",
    answer:
      "StratGen is a professional no-code algorithmic trading platform designed for quantitative traders. It provides backtesting, walk-forward and Monte Carlo robustness testing, automatic code generation for NinjaTrader, TradeStation, and Python, and live training on best practices included. It lets you research and validate rule-based trading strategies without writing boilerplate platform code.",
  },
  {
    question: "Can I use StratGen for futures trading, equities trading, and crypto trading?",
    answer:
      "Yes. StratGen supports all major asset classes including futures, equities, crypto, and forex. You can import custom OHLCV or tick CSV data from any source to test strategies across different markets and instruments.",
  },
  {
    question: "How many technical indicators and signals does StratGen offer?",
    answer:
      "StratGen includes over 600 technical and fundamental signals—such as Moving Averages, RSI, MACD, Bollinger Bands, Donchian Channels, Elliott Wave, Z-Score, and Open Interest—plus a C# MiniSignal editor for compiling custom indicators.",
  },
  {
    question: "What platforms can I export my trading strategies to?",
    answer:
      "StratGen automatically generates ready-to-use strategy code for NinjaTrader (NinjaScript C#), TradeStation (EasyLanguage), and Python, including both static parameter exports and walk-forward-aware parameter schedules.",
  },
  {
    question: "What robustness testing tools are available?",
    answer:
      "StratGen includes Out-of-Sample (OOS) data splitting, multi-window Walk-Forward Optimization, single-strategy and portfolio Monte Carlo simulations, and cross-strategy correlation matrices to verify how systems perform across changing market regimes.",
  },
  {
    question: "Is StratGen suitable for quantitative traders and systematic researchers?",
    answer:
      "Yes. StratGen is built specifically for quantitative traders who require strict In-Sample / Out-of-Sample separation, realistic slippage and commission modeling, position sizing rules, and fast iteration via the v2 Tensor Engine.",
  },
  {
    question: "What operating systems does StratGen support?",
    answer:
      "StratGen is a native desktop application for Windows 10 and Windows 11, executing backtests and local AI Copilot workflows directly on your hardware for maximum speed and data privacy.",
  },
  {
    question: "How does the backtesting engine work?",
    answer:
      "The v2 Tensor Engine evaluates your entry, exit, and required signal rules against historical bar or tick data with configurable slippage, commissions, profit targets, stop losses, trailing stops, session close flattens, and pyramiding rules.",
  },
];

const includedFeatures = [
  "600+ technical and fundamental signals",
  "v2 Tensor Backtest & Walk-Forward Engine",
  "AI Copilot Studio (Local Azores 1.0 & Cloud BYOK)",
  "Import custom OHLCV, tick, and Open Interest CSV data",
  "Support for futures, equities, crypto, and forex",
  "Single-strategy & portfolio Monte Carlo robustness suite",
  "Code export for NinjaTrader, TradeStation, and Python",
  "Built-in MCP Server & Local HTTP Bridge for external agents",
  "Live training on best practices included",
  "Priority email support & continuous v1.x updates",
];

export default function Home() {
  return (
    <>
      <Head>
        <title>StratGen | Professional Algorithmic Trading & Backtesting Platform for Quant Traders</title>
        <meta name="description" content="Professional no-code algorithmic trading platform with backtesting, robustness testing, automatic code generation for NinjaTrader, TradeStation & Python, and live training on best practices included." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="quantitative trading, quantitative research, backtesting, no-code, coding generation, robustness testing, futures trading, equities trading, crypto trading, algo trading, algorithmic trading, quant trading, trading signals, trading strategy, ninjatrader, tradestation, python" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href="https://www.stratgensoft.com/" />

        {/* Open Graph / Facebook */}
        <meta property="og:site_name" content="StratGen" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content="https://www.stratgensoft.com/" />
        <meta property="og:title" content="StratGen | Professional Algorithmic Trading & Backtesting Platform" />
        <meta property="og:description" content="Professional-grade platform for quantitative traders with backtesting, robustness testing, automatic code generation for NinjaTrader, TradeStation, and Python, plus live training on best practices included." />
        <meta property="og:image" content="https://www.stratgensoft.com/stratgen_manual_images/homescreen.jpg" />
        <meta property="og:image:secure_url" content="https://www.stratgensoft.com/stratgen_manual_images/homescreen.jpg" />
        <meta property="og:image:width" content="1920" />
        <meta property="og:image:height" content="1080" />
        <meta property="og:image:alt" content="StratGen Algorithmic Trading and Quantitative Backtesting Dashboard" />
        <meta property="og:image:type" content="image/jpeg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="StratGen | Professional Algorithmic Trading & Backtesting Platform" />
        <meta name="twitter:description" content="Professional-grade platform for quantitative traders with backtesting, robustness testing, automatic code generation for NinjaTrader, TradeStation, and Python, plus live training on best practices included." />
        <meta name="twitter:image" content="https://www.stratgensoft.com/stratgen_manual_images/homescreen.jpg" />
        <meta name="twitter:image:alt" content="StratGen Algorithmic Trading and Quantitative Backtesting Dashboard" />

        <link rel="icon" href="/stratgen_manual_images/newlogo2025.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "StratGen",
                "url": "https://www.stratgensoft.com/",
                "description": "Professional Algorithmic Trading & Backtesting Platform for Quant Traders"
              },
              {
                "@context": "https://schema.org",
                "@type": "SoftwareApplication",
                "name": "StratGen",
                "url": "https://www.stratgensoft.com/",
                "applicationCategory": "FinancialApplication",
                "operatingSystem": "Windows 10, Windows 11",
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
                    "name": "Lifetime Access",
                    "price": "1000.00",
                    "priceCurrency": "USD",
                    "availability": "https://schema.org/InStock",
                    "url": "https://codealgotrading.com/l/pdp/coding-great-trading-bots"
                  }
                ],
                "description": "StratGen is a desktop app for designing, backtesting, and exporting algorithmic trading strategies for platforms like NinjaTrader, TradeStation, and Python. Professional trading signal generator and backtesting platform for quantitative traders with automatic code generation and live training on best practices included.",
                "author": {
                  "@type": "Organization",
                  "name": "WeTradeLabs Inc.",
                  "url": "https://www.stratgensoft.com/",
                  "email": "jacob@wetradelabs.com"
                },
                "featureList": [
                  "Advanced Signal Analysis with 600+ fundamental and technical signals",
                  "Signal Tester for strategy validation",
                  "Advanced Backtesting Engine with tick and second data support",
                  "Robustness testing tools including Walk-Forward Analysis and Monte Carlo",
                  "Import your own data, OHLCV data to test any instrument",
                  "Coding Generator for NinjaTrader, TradeStation, and Python",
                  "Live training on best practices included",
                  "Powerful Dashboard with analytics and portfolio construction"
                ],
                "screenshot": "https://www.stratgensoft.com/stratgen_manual_images/homescreen.jpg"
              },
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "WeTradeLabs Inc.",
                "url": "https://www.stratgensoft.com/",
                "email": "jacob@wetradelabs.com",
                "description": "Developer of StratGen, professional trading software for quantitative traders and algorithmic strategy development with live training on best practices included.",
                "founder": {
                  "@type": "Person",
                  "name": "Jacob Amaral"
                },
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
                "description": "Professional trading signal generator and backtesting platform for quantitative traders. Features automatic code generation for NinjaTrader, TradeStation, and Python with advanced robustness testing tools and live training on best practices included.",
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
                    "name": "Lifetime Access",
                    "price": "1000.00",
                    "priceCurrency": "USD",
                    "availability": "https://schema.org/InStock"
                  }
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": faqs.map((faq) => ({
                  "@type": "Question",
                  "name": faq.question,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer
                  }
                }))
              }
            ])
          }}
        />
      </Head>

      <div className="bg-background min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          {/* Hero Section */}
          <section id="home" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-border/80">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                <div className="lg:col-span-5 space-y-6">
                  <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
                    Algorithmic Trading &amp; Backtesting with{" "}
                    <span className="text-primary">StratGen</span>
                  </h1>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    The Windows desktop platform for quantitative research and systematic strategy development. Run high-speed backtests on the v2 Tensor Engine, validate with multi-window walk-forward and Monte Carlo tests, export ready-to-compile code for NinjaTrader, TradeStation, and Python, and get up to speed with live training on best practices included.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <Button size="lg" className="font-semibold" asChild>
                      <a href="#pricing">
                        View Plans &amp; Pricing <ArrowRightIcon className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                    <Button size="lg" variant="outline" className="font-medium" asChild>
                      <Link href="/user-manual">Read v1.4 User Manual</Link>
                    </Button>
                  </div>

                  <dl className="grid grid-cols-2 gap-x-6 gap-y-4 pt-6 border-t border-border/80 text-sm">
                    <div>
                      <dt className="text-muted-foreground">Core Engine</dt>
                      <dd className="font-semibold text-foreground mt-0.5 tabular-nums">v2 Tensor &amp; Walk-Forward</dd>
                    </div>
                    <div>
                      <dt className="text-muted-foreground">Signal Library</dt>
                      <dd className="font-semibold text-foreground mt-0.5 tabular-nums">600+ Built-In &amp; C# Custom</dd>
                    </div>
                    <div>
                      <dt className="text-muted-foreground">Code Export</dt>
                      <dd className="font-semibold text-foreground mt-0.5">NinjaTrader · TradeStation · Python</dd>
                    </div>
                    <div>
                      <dt className="text-muted-foreground">Platform &amp; Onboarding</dt>
                      <dd className="font-semibold text-foreground mt-0.5">Windows 10/11 + Live Training</dd>
                    </div>
                  </dl>
                </div>

                <div className="lg:col-span-7">
                  <figure className="rounded-md overflow-hidden border border-border bg-card shadow-2xl">
                    <div className="flex items-center justify-between px-4 py-2.5 border-b border-border bg-secondary/60 text-xs text-muted-foreground font-mono">
                      <span>StratGen v1.4 — Quantitative Research &amp; Walk-Forward Studio</span>
                      <span className="tabular-nums text-primary">Windows x64</span>
                    </div>
                    <div className="relative aspect-video w-full bg-background">
                      <Image
                        src="/stratgen_manual_images/homescreen.jpg"
                        alt="StratGen professional algorithmic trading platform dashboard displaying advanced backtesting results, quantitative analysis charts, and trading signals for automated strategy development"
                        fill
                        sizes="(max-width: 1024px) 100vw, 58vw"
                        style={{ objectFit: "contain" }}
                        priority
                      />
                    </div>
                  </figure>
                </div>
              </div>
            </div>
          </section>

          {/* Capabilities Architecture Section */}
          <section id="features" className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-border/80">
            <div className="max-w-7xl mx-auto">
              <div className="max-w-3xl mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
                  Built for Rigorous Quantitative Validation
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  StratGen replaces fragile curve-fitting and manual coding with a structured engineering workflow: discover candidate edges across 600+ signals, stress-test them on unseen Out-of-Sample data, and export production strategy code.
                </p>
              </div>

              <div className="divide-y divide-border border-t border-b border-border">
                {capabilityGroups.map((group, groupIdx) => (
                  <div
                    key={group.groupTitle}
                    className="py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12"
                  >
                    <div className="lg:col-span-4 space-y-3">
                      <div className="font-mono text-xs text-primary tabular-nums">
                        0{groupIdx + 1} / 0{capabilityGroups.length}
                      </div>
                      <h3 className="text-2xl font-bold tracking-tight text-foreground">
                        {group.groupTitle}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {group.groupSummary}
                      </p>
                    </div>

                    <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
                      {group.items.map((item) => (
                        <div key={item.title} className="space-y-2 border-l border-border pl-5">
                          <div className="font-mono text-xs text-primary">
                            {item.tag}
                          </div>
                          <h4 className="text-base font-semibold text-foreground">
                            {item.title}
                          </h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Screenshots / Workbench Section */}
          <section id="screenshots" className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-card/40 border-b border-border/80">
            <div className="max-w-7xl mx-auto">
              <div className="max-w-3xl mb-14">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
                  Inside the StratGen Desktop Workbench
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Inspect the actual Windows interface used to configure signal rules, evaluate out-of-sample equity curves, run walk-forward matrices, and generate platform code.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {platformModules.map((mod) => (
                  <figure
                    key={mod.id}
                    className="rounded-md overflow-hidden border border-border bg-card flex flex-col justify-between"
                  >
                    <figcaption className="p-6 border-b border-border space-y-2">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3 className="text-lg font-semibold text-foreground">
                          {mod.title}
                        </h3>
                        <span className="font-mono text-xs text-primary">
                          {mod.spec}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {mod.description}
                      </p>
                    </figcaption>
                    <div className="relative aspect-video w-full bg-background">
                      <Image
                        src={mod.image}
                        alt={mod.alt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                  </figure>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section id="pricing" className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-border/80">
            <div className="max-w-7xl mx-auto">
              <div className="max-w-3xl mb-14">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
                  Straightforward Licensing with Live Training Included
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Every StratGen license unlocks the full desktop software—including the v2 Tensor Engine, AI Copilot, all 600+ signals, unlimited code exports, and live training on best practices.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Monthly Plan */}
                <div className="lg:col-span-4 rounded-md border border-border bg-card p-7 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-foreground">Monthly License</h3>
                    <p className="text-sm text-muted-foreground">
                      Flexible month-to-month access. Cancel anytime with no future billing.
                    </p>
                    <div className="pt-2 flex items-baseline gap-1.5 tabular-nums">
                      <span className="text-4xl font-bold text-foreground">$99</span>
                      <span className="text-sm text-muted-foreground">USD / month</span>
                    </div>
                  </div>

                  <Button size="lg" variant="outline" className="w-full font-semibold" asChild>
                    <a
                      href="https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-6G695380H8515921NNBFO5IQ"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Subscribe Monthly <ArrowRightIcon className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>

                {/* Lifetime Plan */}
                <div className="lg:col-span-4 rounded-md border-2 border-primary bg-card p-7 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-xl font-bold text-foreground">Lifetime License</h3>
                      <span className="font-mono text-xs font-semibold text-primary tabular-nums">
                        Save $188 vs. Year 1
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      One-time purchase for permanent desktop access and all future v1.x updates.
                    </p>
                    <div className="pt-2 flex items-baseline gap-1.5 tabular-nums">
                      <span className="text-4xl font-bold text-foreground">$1,000</span>
                      <span className="text-sm text-muted-foreground">USD one-time</span>
                    </div>
                  </div>

                  <Button size="lg" className="w-full font-semibold" asChild>
                    <a
                      href="https://codealgotrading.com/l/pdp/coding-great-trading-bots"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Buy Lifetime Access <ArrowRightIcon className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>

                {/* Included Checklist & Policy */}
                <div className="lg:col-span-4 rounded-md border border-border bg-background p-7 space-y-6">
                  <h3 className="text-base font-semibold text-foreground">
                    Included in Both Plans
                  </h3>
                  <ul className="space-y-3">
                    {includedFeatures.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <CheckIcon className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="border-t border-border pt-5 space-y-1.5">
                    <p className="text-xs font-semibold text-foreground">
                      Subscription &amp; Licensing Policy
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      All sales are final; we do not offer refunds. Monthly subscriptions can be canceled at any time and will not be billed thereafter. Lifetime access is a one-time purchase. By subscribing or purchasing, you agree to WeTradeLabs Inc.&apos;s{" "}
                      <Link href="/terms-and-conditions" className="text-primary hover:underline font-medium">
                        Terms &amp; Conditions
                      </Link>{" "}
                      and{" "}
                      <Link href="/privacy-policy" className="text-primary hover:underline font-medium">
                        Privacy Policy
                      </Link>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-border/80">
            <div className="max-w-7xl mx-auto">
              <div className="max-w-3xl mb-14">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-lg text-muted-foreground">
                  Technical answers regarding supported markets, signal libraries, validation workflows, and code export.
                </p>
              </div>

              <dl className="divide-y divide-border border-t border-b border-border">
                {faqs.map((faq) => (
                  <div
                    key={faq.question}
                    className="py-7 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8"
                  >
                    <dt className="md:col-span-5 text-base font-semibold text-foreground">
                      {faq.question}
                    </dt>
                    <dd className="md:col-span-7 text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>

          {/* Risk Disclaimer Section */}
          <section id="disclaimer" className="py-16 px-4 sm:px-6 lg:px-8 bg-card/30">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-4">
                  <h2 className="text-xl font-bold text-foreground mb-2">
                    Trading Risk Disclosure
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Mandatory financial and software disclaimers for quantitative research and automated trading.
                  </p>
                </div>
                <div className="lg:col-span-8 space-y-3 text-xs sm:text-sm text-muted-foreground leading-relaxed border-l border-border pl-6">
                  <p>
                    <strong className="text-foreground">Risk of Loss:</strong> Trading in financial markets involves substantial risk of loss and is not suitable for all investors. The value of investments can go down as well as up, and investors may lose all of their investment.
                  </p>
                  <p>
                    <strong className="text-foreground">No Guarantees:</strong> StratGen is a tool designed to assist with trading decisions, but it does not guarantee profits or prevent losses. Past performance of any trading system or methodology is not necessarily indicative of future results.
                  </p>
                  <p>
                    <strong className="text-foreground">Software Limitations:</strong> While StratGen is designed to be reliable and accurate, technical issues, data errors, or other factors may affect its performance. Users should not rely solely on the software for trading decisions.
                  </p>
                  <p>
                    <strong className="text-foreground">Hypothetical Performance:</strong> Any backtesting results, simulations, or hypothetical performance shown are for illustrative purposes only. They do not represent actual trading and may not account for all market factors or risks.
                  </p>
                  <p>
                    <strong className="text-foreground">Professional Advice:</strong> The information provided by StratGen is not intended to be a substitute for professional financial advice. We recommend consulting with a qualified financial advisor before making investment decisions.
                  </p>
                  <p>
                    <strong className="text-foreground">User Responsibility:</strong> Users are solely responsible for their trading decisions and should conduct their own research and due diligence before placing trades based on signals generated by StratGen.
                  </p>
                  <p>
                    By using StratGen, you acknowledge that you have read and understood this risk disclaimer, our{" "}
                    <Link href="/terms-and-conditions" className="text-primary hover:underline font-medium">
                      Terms &amp; Conditions
                    </Link>
                    , and our{" "}
                    <Link href="/privacy-policy" className="text-primary hover:underline font-medium">
                      Privacy Policy
                    </Link>
                    , and agree to assume full responsibility for your trading decisions.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer id="footer" className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start gap-10">
              <div className="max-w-sm">
                <p className="font-bold text-lg text-foreground mb-3">StratGen</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Professional algorithmic trading platform by WeTradeLabs Inc. for quantitative research, backtesting, robustness validation, and automated code export, with live training on best practices included.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
                <div>
                  <p className="text-xs font-semibold tracking-wider text-foreground mb-4">Platform</p>
                  <ul className="space-y-2.5">
                    <li>
                      <Link href="/#features" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        Capabilities
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
                  <p className="text-xs font-semibold tracking-wider text-foreground mb-4">Resources</p>
                  <ul className="space-y-2.5">
                    <li>
                      <Link href="/what-is-stratgen" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        What is StratGen?
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
                  <p className="text-xs font-semibold tracking-wider text-foreground mb-4">Legal</p>
                  <ul className="space-y-2.5">
                    <li>
                      <Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link href="/terms-and-conditions" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        Terms &amp; Conditions
                      </Link>
                    </li>
                    <li>
                      <Link href="/#disclaimer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        Trading Risk Disclosure
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="text-xs font-semibold tracking-wider text-foreground mb-4">Contact</p>
                  <a href="mailto:jacob@wetradelabs.com?subject=StratGen&body=Hey%2C%20I%20am%20interested%20in%20StratGen%20and%20wanted%20to%20know%20more!" className="text-sm text-primary hover:text-primary/80 font-medium">
                    jacob@wetradelabs.com
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-border/60 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
              <p className="text-xs text-muted-foreground">
                © {new Date().getFullYear()} WeTradeLabs Inc. All rights reserved. StratGen™ is a trademark of WeTradeLabs Inc.
              </p>
              <div className="flex items-center gap-6 text-xs text-muted-foreground">
                <Link href="/privacy-policy" className="hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms-and-conditions" className="hover:text-primary transition-colors">
                  Terms &amp; Conditions
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
