import React from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, ArrowRightIcon, CheckIcon } from "lucide-react";

const userProfiles = [
  {
    role: "Quantitative Traders",
    detail:
      "Traders who require strict In-Sample / Out-of-Sample separation, multi-window walk-forward validation, and Monte Carlo stress testing across multiple asset classes.",
  },
  {
    role: "Systematic Retail & Prop Traders",
    detail:
      "Rule-based traders who want to discover, verify, and automate futures, equities, forex, or crypto strategies without curve-fitting.",
  },
  {
    role: "Algorithmic Strategy Developers",
    detail:
      "Developers who want to focus on trading hypotheses and risk logic while exporting ready-to-compile code to NinjaTrader, TradeStation, and Python.",
  },
  {
    role: "Quantitative Researchers",
    detail:
      "Researchers exploring 600+ parameterized technical and fundamental signals, custom C# MiniSignals, and portfolio correlation across custom OHLCV datasets.",
  },
  {
    role: "Discretionary-to-Systematic Traders",
    detail:
      "Experienced market participants transitioning from manual execution to tested, repeatable rule-based systems with live training included.",
  },
  {
    role: "Trading Desks & Small Funds",
    detail:
      "Teams that require local-first data sovereignty on Windows, fast tensor backtesting, and programmatic MCP / HTTP Bridge integration.",
  },
];

const coreCapabilities = [
  {
    title: "600+ Technical & Fundamental Signals",
    description:
      "Evaluate Moving Averages, RSI, MACD, Bollinger Bands, Donchian Channels, Elliott Wave, Z-Score, Open Interest, and custom C# MiniSignals across single instruments or multi-symbol lists.",
  },
  {
    title: "v2 Tensor Backtesting & Walk-Forward Engine",
    description:
      "Run high-speed parameter sweeps and multi-window walk-forward optimizations with realistic slippage, commission schedules, pyramiding, and session-close exits.",
  },
  {
    title: "Monte Carlo & Portfolio Robustness Suite",
    description:
      "Test strategy stability against trade-order randomization, out-of-sample degradation checks, and cross-strategy portfolio correlation analysis.",
  },
  {
    title: "Direct Code Export (NinjaTrader, TradeStation, Python)",
    description:
      "Generate ready-to-compile NinjaScript C#, TradeStation EasyLanguage, and Python strategy code directly from any validated result row without manual recoding.",
  },
  {
    title: "Live Training on Best Practices Included",
    description:
      "Every license includes live training covering data import, out-of-sample workflow design, walk-forward interpretation, and platform deployment.",
  },
];

const workflowSteps = [
  {
    step: "1",
    title: "Configure Signals & Risk Rules",
    description:
      "Select Required, Entry, and Exit indicators from the 600+ signal library or converse with the AI Copilot Studio. Set position sizing, profit targets, stop losses, and session bounds.",
  },
  {
    step: "2",
    title: "Import Market Data & Set OOS Split",
    description:
      "Load built-in or custom OHLCV, tick, and Open Interest CSV datasets for futures, equities, crypto, or forex, and reserve an Out-of-Sample percentage that discovery never sees.",
  },
  {
    step: "3",
    title: "Run v2 Tensor Backtest & Robustness Checks",
    description:
      "Filter candidate strategies by Return-to-Drawdown and Sharpe ratios, then verify survival through rolling Walk-Forward windows and Monte Carlo simulations.",
  },
  {
    step: "4",
    title: "Export Code & Deploy",
    description:
      "Export clean strategy code for NinjaTrader, TradeStation, or Python, verify in simulated trading on your execution platform, and use the included live training to refine your workflow.",
  },
];

export default function WhatIsStratGen() {
  return (
    <>
      <Head>
        <title>What is StratGen? | Professional No-Code Algorithmic Trading Platform</title>
        <meta name="description" content="StratGen is a professional no-code algorithmic trading platform designed for quantitative traders, systematic traders, and algorithmic strategy developers. Learn about backtesting, robustness testing, automatic code generation, and live training on best practices included." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="what is stratgen, algorithmic trading platform, quantitative trading software, no-code trading, systematic trading, backtesting platform, robustness testing, code generation, ninjatrader, tradestation, python" />
        <meta property="og:title" content="What is StratGen? | Professional No-Code Algorithmic Trading Platform" />
        <meta property="og:description" content="Discover StratGen - the professional no-code platform for quantitative traders with advanced backtesting, robustness testing, automatic code generation for NinjaTrader, TradeStation, and Python, and live training on best practices included." />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href="https://www.stratgensoft.com/what-is-stratgen" />

        {/* Open Graph / Facebook */}
        <meta property="og:site_name" content="StratGen" />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content="https://www.stratgensoft.com/what-is-stratgen" />
        <meta property="og:title" content="What is StratGen? | Professional No-Code Algorithmic Trading Platform" />
        <meta property="og:description" content="Discover StratGen - the professional no-code platform for quantitative traders with advanced backtesting, robustness testing, automatic code generation for NinjaTrader, TradeStation, and Python, and live training on best practices included." />
        <meta property="og:image" content="https://assets.co.dev/dc630d7c-c620-481b-9ee9-1959feae8edc/image-aefc7df.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="What is StratGen? | Professional No-Code Algorithmic Trading Platform" />
        <meta name="twitter:description" content="Discover StratGen - the professional no-code platform for quantitative traders with advanced backtesting, robustness testing, automatic code generation, and live training on best practices included." />
        <meta name="twitter:image" content="https://assets.co.dev/dc630d7c-c620-481b-9ee9-1959feae8edc/image-aefc7df.png" />

        <link rel="icon" href="/stratgen_manual_images/newlogo2025.ico" />

        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Article",
                "headline": "What is StratGen? Complete Guide to Professional Algorithmic Trading Platform",
                "description": "Comprehensive guide explaining StratGen's no-code algorithmic trading platform for quantitative traders, systematic traders, and algorithmic strategy developers, including live training on best practices.",
                "author": {
                  "@type": "Organization",
                  "name": "WeTradeLabs",
                  "url": "https://www.stratgensoft.com/",
                  "email": "jacob@wetradelabs.com"
                },
                "publisher": {
                  "@type": "Organization",
                  "name": "WeTradeLabs",
                  "url": "https://www.stratgensoft.com/",
                  "email": "jacob@wetradelabs.com"
                },
                "datePublished": "2024-01-01",
                "dateModified": "2026-10-29",
                "mainEntityOfPage": {
                  "@type": "WebPage",
                  "@id": "https://www.stratgensoft.com/what-is-stratgen"
                },
                "about": {
                  "@type": "SoftwareApplication",
                  "name": "StratGen",
                  "url": "https://www.stratgensoft.com/",
                  "applicationCategory": "FinancialApplication",
                  "operatingSystem": "Windows 10, Windows 11"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://www.stratgensoft.com/"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "What is StratGen?",
                    "item": "https://www.stratgensoft.com/what-is-stratgen"
                  }
                ]
              }
            ])
          }}
        />
      </Head>

      <div className="bg-background min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          {/* Page Header */}
          <section className="py-14 md:py-20 px-4 sm:px-6 lg:px-8 border-b border-border/80">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <Button variant="ghost" size="sm" asChild className="-ml-3 text-muted-foreground hover:text-foreground">
                  <Link href="/">
                    <ArrowLeftIcon className="h-4 w-4 mr-2" />
                    Back to Home
                  </Link>
                </Button>
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-6">
                What is <span className="text-primary">StratGen</span>?
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                A technical overview of StratGen&apos;s Windows desktop platform for quantitative strategy discovery, out-of-sample validation, and multi-platform code generation.
              </p>
            </div>
          </section>

          {/* Editorial Content */}
          <article className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-16">
              {/* Overview */}
              <section className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                  No-Code Quantitative Research &amp; Code Generation
                </h2>
                <div className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                  <p>
                    StratGen is a Windows desktop application built for quantitative traders, systematic traders, and strategy developers who want institutional-grade validation tools without writing boilerplate platform code. It connects high-speed historical indicator testing directly to out-of-sample verification and automated code export.
                  </p>
                  <p>
                    Built for Windows 10 and Windows 11, StratGen gives both experienced quantitative researchers and systematic traders a direct, no-code workflow for building and validating rule-based trading strategies. Whether you test on futures, equities, crypto, or forex datasets, StratGen evaluates candidate rules with realistic frictions and includes live training on best practices with every license.
                  </p>
                  <p>
                    Once a strategy passes In-Sample, Out-of-Sample, Walk-Forward, and Monte Carlo checks, StratGen exports clean, ready-to-compile code for NinjaTrader (NinjaScript C#), TradeStation (EasyLanguage), and Python.
                  </p>
                </div>
              </section>

              {/* Who Uses StratGen */}
              <section className="pt-12 border-t border-border space-y-8">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                  Who Uses StratGen?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
                  {userProfiles.map((profile) => (
                    <div key={profile.role} className="space-y-1.5 border-l border-border pl-5">
                      <h3 className="text-base font-semibold text-primary">
                        {profile.role}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {profile.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Core Capabilities */}
              <section className="pt-12 border-t border-border space-y-8">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                  Core Capabilities
                </h2>
                <div className="divide-y divide-border border-t border-b border-border">
                  {coreCapabilities.map((cap) => (
                    <div key={cap.title} className="py-6 grid grid-cols-1 md:grid-cols-12 gap-4">
                      <h3 className="md:col-span-4 text-base font-semibold text-foreground">
                        {cap.title}
                      </h3>
                      <p className="md:col-span-8 text-sm sm:text-base text-muted-foreground leading-relaxed">
                        {cap.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* How It Works */}
              <section className="pt-12 border-t border-border space-y-8">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                  How the StratGen Workflow Operates
                </h2>
                <ol className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {workflowSteps.map((item) => (
                    <li key={item.step} className="rounded-md border border-border bg-card p-6 space-y-3">
                      <div className="flex items-center gap-3">
                        <span className="inline-flex h-7 w-7 items-center justify-center rounded-sm bg-primary text-primary-foreground font-mono text-xs font-bold tabular-nums">
                          {item.step}
                        </span>
                        <h3 className="text-lg font-semibold text-foreground">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </li>
                  ))}
                </ol>
              </section>

              {/* Key Summary Checklist */}
              <section className="pt-12 border-t border-border space-y-6">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                  Platform Summary
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {[
                    "No manual programming required",
                    "v2 Tensor Backtest & Walk-Forward Engine",
                    "600+ technical and fundamental signals",
                    "NinjaTrader, TradeStation, and Python export",
                    "Single-strategy & portfolio Monte Carlo testing",
                    "Local Azores 1.0 AI Copilot + Cloud BYOK",
                    "Supports futures, equities, crypto, and forex",
                    "Live training on best practices included",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm sm:text-base text-foreground">
                      <CheckIcon className="h-4 w-4 text-primary flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* CTA */}
              <section className="rounded-md border border-primary/40 bg-card p-8 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="space-y-2 max-w-xl">
                  <h2 className="text-2xl font-bold text-foreground">
                    Ready to Evaluate StratGen?
                  </h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Review licensing options or explore the complete v1.4 User Manual to see every module in detail.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                  <Button size="lg" className="font-semibold" asChild>
                    <Link href="/#pricing">
                      View Pricing <ArrowRightIcon className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/user-manual">User Manual</Link>
                  </Button>
                </div>
              </section>
            </div>
          </article>
        </main>

        {/* Footer */}
        <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border">
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
                      <Link href="/what-is-stratgen" className="text-sm text-primary font-medium transition-colors">
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
