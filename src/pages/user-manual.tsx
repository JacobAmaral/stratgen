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
                <title>StratGen User Manual v1.0.4 | Complete Guide to Algorithmic Trading Platform</title>
                <meta name="description" content="Complete user manual for StratGen v1.0.4 quantitative trading platform. Learn backtesting, walk-forward testing, portfolio Monte Carlo, signal generation, position sizing, NinjaTrader export, TradeStation export, Python export, and AI workflows." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="keywords" content="stratgen user manual, algorithmic trading guide, backtesting tutorial, quantitative trading manual, trading platform documentation, no-code trading, robustness testing, out-of-sample testing" />
                <meta property="og:title" content="StratGen User Manual v1.0.4 | Complete Guide to Algorithmic Trading Platform" />
                <meta property="og:description" content="Complete user manual for StratGen v1.0.4 quantitative trading platform covering backtesting, walk-forward testing, portfolio Monte Carlo, signal generation, position sizing, and automated code generation." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://stratgen.com/user-manual" />
                <meta property="og:image" content="https://assets.co.dev/dc630d7c-c620-481b-9ee9-1959feae8edc/stratgen_user_manualv0.9-01-1c9001e.png" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="StratGen User Manual v1.0.4 | Complete Guide to Algorithmic Trading Platform" />
                <meta name="twitter:description" content="Complete user manual for StratGen v1.0.4 quantitative trading platform covering backtesting, walk-forward testing, portfolio Monte Carlo, signal generation, position sizing, and automated code generation." />
                <meta name="twitter:image" content="https://assets.co.dev/dc630d7c-c620-481b-9ee9-1959feae8edc/stratgen_user_manualv0.9-01-1c9001e.png" />
                <link rel="canonical" href="https://stratgen.com/user-manual" />
                <link rel="icon" href="/stratgen_manual_images/newlogo2025.ico" />

                {/* JSON-LD Schema for Documentation */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify([
                            {
                                "@context": "https://schema.org",
                                "@type": "TechArticle",
                                "headline": "StratGen User Manual - Complete Guide for Quantitative Trading Platform",
                                "description": "Complete user manual for StratGen v1.0.4 quantitative trading platform covering backtesting, walk-forward testing, portfolio Monte Carlo, signal generation, position sizing, and automated code generation.",
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
                                "dateModified": "2026-05-02",
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
                                "description": "Step-by-step guide to using StratGen's algorithmic trading platform for backtesting, walk-forward testing, portfolio Monte Carlo, signal generation, position sizing, and code generation.",
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
                                Complete guide to mastering StratGen v1.0.4 for quantitative trading, backtesting, walk-forward validation,
                                portfolio Monte Carlo, position sizing, robustness testing, AI workflows, and automated code generation.
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
                                    <li><a href="#core-concepts" className="hover:underline">Core Concepts</a></li>
                                    <li><a href="#latest-features" className="hover:underline">Latest Features</a></li>
                                    <li><a href="#launch" className="hover:underline">Launch StratGen</a></li>
                                    <li><a href="#settings-window" className="hover:underline">Settings Window</a></li>
                                    <li><a href="#signals-tab" className="hover:underline">Signals</a></li>
                                    <li><a href="#strategy-settings" className="hover:underline">Strategy Settings</a></li>
                                    <li><a href="#position-sizing-pyramiding" className="hover:underline">Position Sizing & Pyramiding</a></li>
                                    <li><a href="#advanced-exits" className="hover:underline">Advanced Exits</a></li>
                                    <li><a href="#walk-forward" className="hover:underline">Walk-Forward Settings</a></li>
                                    <li><a href="#new-signal-types" className="hover:underline">New Signal Types</a></li>
                                    <li><a href="#import-data" className="hover:underline">Import Data</a></li>
                                    <li><a href="#server-symbols" className="hover:underline">Symbol Search & Data Cache</a></li>
                                    <li><a href="#run-sim" className="hover:underline">Run Simulation</a></li>
                                    <li><a href="#results-list" className="hover:underline">Strategy Results</a></li>
                                    <li><a href="#dashboard" className="hover:underline">Backtest Dashboard</a></li>
                                    <li><a href="#generated-code" className="hover:underline">Generated Code</a></li>
                                    <li><a href="#monte-carlo" className="hover:underline">Monte Carlo</a></li>
                                    <li><a href="#portfolio" className="hover:underline">Portfolio</a></li>
                                    <li><a href="#portfolio-monte-carlo" className="hover:underline">Portfolio Monte Carlo</a></li>
                                    <li><a href="#portfolio-equity" className="hover:underline">Portfolio Equity</a></li>
                                    <li><a href="#correlation" className="hover:underline">Correlation</a></li>
                                    <li><a href="#templates" className="hover:underline">Templates</a></li>
                                    <li><a href="#custom-signals" className="hover:underline">Custom Signals</a></li>
                                    <li><a href="#walk-forward-results" className="hover:underline">Walk-Forward Results</a></li>
                                    <li><a href="#ai-workflows" className="hover:underline">AI Workflow</a></li>
                                </ol>
                            </nav>


                            <hr />
                            <h2 id="core-concepts">Core Concepts (Read This First)</h2>

                            <div className="rounded-xl border border-border/40 bg-muted/20 p-6 my-8">
                                <h3 className="mt-0">In-Sample (IS) vs Out-of-Sample (OOS)</h3>
                                <p>
                                    StratGen is built around a simple rule: a strategy is only “real” if it works on data it did not learn from.
                                </p>

                                <ul>
                                    <li>
                                        <strong>IS (In-Sample)</strong> means the “training” part of your data. StratGen searches for a good rule and parameter
                                        set using this portion.
                                    </li>
                                    <li>
                                        <strong>OOS (Out-of-Sample)</strong> means the “test” part of your data. StratGen runs the same strategy logic on new,
                                        unseen data to verify it still performs.
                                    </li>
                                </ul>

                                <p className="mb-0">
                                    Simple interpretation: <strong>IS is where you find</strong> strategies. <strong>OOS is where you trust</strong> strategies.
                                    If IS looks great but OOS collapses, it is usually overfit.
                                </p>
                            </div>

                            <div className="rounded-xl border border-border/40 bg-muted/20 p-6 my-8">
                                <h3 className="mt-0">What P1 and P2 mean</h3>
                                <p>
                                    Many signals in StratGen are “parameterized.” That means the signal has one or two tunable numbers, shown as <strong>{`{P1}`}</strong> and{" "}
                                    <strong>{`{P2}`}</strong>.
                                </p>

                                <ul>
                                    <li>
                                        <strong>P1</strong> is parameter #1. Example: a moving average length like 20, 50, or 200.
                                    </li>
                                    <li>
                                        <strong>P2</strong> is parameter #2 (if the signal needs it). Example: a second length, a threshold, or a confirmation window.
                                    </li>
                                </ul>

                                <p className="mb-0">
                                    StratGen automatically tests multiple values of P1 and P2 to find what performs best. This is part of strategy discovery.
                                </p>
                            </div>

                            <div className="rounded-xl border border-border/40 bg-muted/20 p-6 my-8">
                                <h3 className="mt-0">What “min;max;step” means (example: <code>10;50;5</code>)</h3>
                                <p>
                                    In StratGen, many numeric inputs accept a special format:
                                    <strong> min;max;step</strong>.
                                </p>

                                <ul>
                                    <li><strong>min</strong>: smallest value to test</li>
                                    <li><strong>max</strong>: largest value to test</li>
                                    <li><strong>step</strong>: how much to increase each test</li>
                                </ul>

                                <p>
                                    Example: <code>10;50;5</code> means test: 10, 15, 20, 25, 30, 35, 40, 45, 50.
                                </p>

                                <p className="mb-0">
                                    Simple rule: smaller steps test more combinations (slower, more risk of overfitting). Bigger steps test fewer combinations
                                    (faster, more general).
                                </p>
                            </div>

                            <h2 id="latest-features">Latest Features in v1.0.4 (What Changed)</h2>
                            <p>
                                If you used an older StratGen build, this section explains the newer tools that are easy to miss.
                                These features matter because they change how you validate strategies, combine systems, and export code.
                            </p>

                            <div className="rounded-xl border border-border/40 bg-muted/20 p-6 my-8">
                                <h3 className="mt-0">Quick summary</h3>
                                <ul className="mb-0">
                                    <li><strong>Portfolio Monte Carlo</strong>: stress-tests the whole portfolio, not only one selected strategy.</li>
                                    <li><strong>Position sizing testing</strong>: lets you test fixed size, fixed dollar risk, percent equity risk, and notional sizing behavior.</li>
                                    <li><strong>Pyramiding controls</strong>: lets a strategy add to a winning or continuing position, then scale out correctly in NinjaTrader exports.</li>
                                    <li><strong>Donchian, Elliott Wave, Z-Score, and expanded signal support</strong>: gives you more entry and exit logic to test.</li>
                                    <li><strong>Reversal behavior</strong>: opposite signals can flip a position instead of forcing the system to wait until flat.</li>
                                    <li><strong>AI Workflow improvements</strong>: workflows can automatically search, filter, combine, export, and retry more reliably.</li>
                                    <li><strong>Server symbol search and history data caching</strong>: makes symbol setup and repeated data use faster.</li>
                                </ul>
                            </div>

                            <h3>How to think about new features</h3>
                            <p>
                                Do not turn every new feature on at once. Add one new feature at a time, run a test, and compare the result to your previous baseline.
                                If everything changes at once, you will not know which setting improved or damaged the strategy.
                            </p>

                            <div className="rounded-xl border border-border/40 bg-muted/20 p-6 my-8">
                                <h4 className="mt-0">Safe upgrade workflow</h4>
                                <ol className="mb-0">
                                    <li>Run an old-style simple strategy first: one entry rule, one exit rule, no pyramiding.</li>
                                    <li>Save or write down the OOS Ret/DD, Sharpe, trades, and drawdown.</li>
                                    <li>Enable one new feature, such as a Donchian signal or a different position sizing mode.</li>
                                    <li>Run again and compare OOS first, not IS.</li>
                                    <li>Only keep the new feature if it improves OOS or portfolio-level behavior.</li>
                                </ol>
                            </div>

                            {/* 1 */}
                            <h2 id="launch">1) Launch StratGen</h2>
                            <img src="/stratgen_manual_images/01-opening-stratgen.jpg" alt="Opening StratGen" className="mx-auto my-8 rounded-lg border border-border/40 shadow-lg" />
                            <p>When StratGen starts, wait for the loading bar to finish before interacting with the platform.</p>

                            {/* 2 */}
                            <h2 id="settings-window">2) Settings Window</h2>
                            <img src="/stratgen_manual_images/02-signals-tab-empty.jpg" alt="Settings window" className="mx-auto my-8 rounded-lg border border-border/40 shadow-lg" />
                            <p>The Settings window controls all strategy configuration including signals, risk, data, and portfolios.</p>

                            {/* 3 */}
                            <h2 id="signals-tab">Signals (Entry and Exit Rules)</h2>
                            <img
                                src="/stratgen_manual_images/06-signals-selected.jpg"
                                alt="Signals selected"
                                className="mx-auto my-8 rounded-lg border border-border/40 shadow-lg"
                            />

                            <p>
                                Signals are the building blocks of strategies. In StratGen, you choose which signals can be used for <strong>Entry</strong> (start a trade)
                                and which signals can be used for <strong>Exit</strong> (close a trade).
                            </p>

                            <h3>Entry vs Exit (simple)</h3>
                            <ul>
                                <li><strong>Entry</strong>: “When do we open a position?”</li>
                                <li><strong>Exit</strong>: “When do we close the position?”</li>
                            </ul>

                            <h3>Parameterized signals (P1, P2)</h3>
                            <p>
                                Many signals include <strong>{`{P1}`}</strong> or <strong>{`{P2}`}</strong>. These are not errors. They are placeholders for numbers
                                StratGen will test. You control the ranges using the P1 and P2 controls.
                            </p>

                            <div className="rounded-xl border border-border/40 bg-muted/20 p-6 my-8">
                                <h4 className="mt-0">Beginner workflow (recommended)</h4>
                                <ol className="mb-0">
                                    <li>Select one symbol (example: NQ).</li>
                                    <li>Select 1 to 3 Entry signals.</li>
                                    <li>Select 1 to 2 Exit signals.</li>
                                    <li>Set realistic slippage and commissions in Settings.</li>
                                    <li>Run, then evaluate OOS performance first.</li>
                                </ol>
                            </div>


                            {/* 4 */}
                            <h2 id="strategy-settings">4) Strategy Settings (Risk, Exits, OOS Split, Rule Count)</h2>
                            <img
                                src="/stratgen_manual_images/03-settings-top.jpg"
                                alt="Strategy settings"
                                className="mx-auto my-8 rounded-lg border border-border/40 shadow-lg"
                            />

                            <p>
                                This tab is where you control “realism” and “risk.” It affects how strategies are tested and how trustworthy results are.
                            </p>

                            <h3>Starting Cash</h3>
                            <p>
                                <strong>Starting Cash</strong> is your starting account size for the backtest (example: 100000). This impacts percent return,
                                and can impact position sizing (depending on your system rules).
                            </p>

                            <h3>Profit Target, Stop Loss, Trailing Stop</h3>
                            <p>
                                These settings define how a trade can exit. If a value is 0, that exit is effectively off.
                            </p>
                            <ul>
                                <li><strong>Profit Target</strong>: take profits once price moves in your favor.</li>
                                <li><strong>Stop Loss</strong>: cut losses when price moves against you.</li>
                                <li><strong>Trail Stop</strong>: a stop that moves up as the trade becomes profitable.</li>
                            </ul>

                            <h3>Exit after N bars</h3>
                            <p>
                                This forces trades to exit after a certain number of bars. It is useful to stop “forever trades” that never close.
                            </p>

                            <h3># Of Entry/Exit Rules (very important)</h3>
                            <p>
                                This tells StratGen how many signals must be used together to form an entry or exit condition.
                            </p>

                            <ul>
                                <li>
                                    If <strong># Of Entry Rules = 1</strong>, StratGen tests entries like: <strong>Rule1</strong>.
                                </li>
                                <li>
                                    If <strong># Of Entry Rules = 2</strong>, StratGen tests entries like: <strong>Rule1 AND Rule2</strong>.
                                    Both must be true on the same bar to enter.
                                </li>
                                <li>
                                    Same idea for exits: if you set <strong># Of Exit Rules = 2</strong>, then <strong>ExitRule1 AND ExitRule2</strong>
                                    must both be true to exit.
                                </li>
                            </ul>

                            <div className="rounded-xl border border-border/40 bg-muted/20 p-6 my-8">
                                <h4 className="mt-0">Beginner advice</h4>
                                <ul className="mb-0">
                                    <li>Start with 1 entry rule and 1 exit rule.</li>
                                    <li>More rules creates more combinations, slower runs, and higher risk of overfitting.</li>
                                </ul>
                            </div>

                            <h3>Out Of Sample % (OOS)</h3>
                            <p>
                                <strong>OOS</strong> means Out-of-Sample. This is the “test” period that the strategy did not train on.
                            </p>
                            <ul>
                                <li><strong>IS (In-Sample)</strong>: training period, where StratGen searches for good rules and parameters.</li>
                                <li><strong>OOS (Out-of-Sample)</strong>: validation period, where you confirm it still works.</li>
                            </ul>

                            <div className="rounded-xl border border-border/40 bg-muted/20 p-6 my-8">
                                <h4 className="mt-0">The two most important performance numbers: Ret/DD and Sharpe</h4>

                                <h5 className="mb-2">Ret/DD (Return divided by Drawdown)</h5>
                                <p>
                                    <strong>Ret/DD</strong> is a “profit per pain” metric:
                                    it compares how much money you made versus how deep the worst drawdown was.
                                </p>
                                <ul>
                                    <li><strong>Higher is better</strong> (it means you earned more for the risk taken).</li>
                                    <li>
                                        If two strategies have similar profit, pick the one with <strong>higher Ret/DD</strong> (usually lower drawdown).
                                    </li>
                                </ul>

                                <h5 className="mb-2 mt-6">Sharpe (risk-adjusted consistency)</h5>
                                <p>
                                    <strong>Sharpe</strong> is a “smoothness/consistency” score. It compares average return versus volatility of returns.
                                </p>
                                <ul className="mb-0">
                                    <li>Higher Sharpe usually means smoother equity and more consistent returns.</li>
                                    <li>Lower Sharpe usually means the returns were more erratic, even if the profit was high.</li>
                                </ul>
                            </div>

                            <div className="rounded-xl border border-border/40 bg-muted/20 p-6 my-8">
                                <h4 className="mt-0">Common mistake</h4>
                                <p className="mb-0">
                                    Do not pick strategies by In-Sample (IS) performance alone. That often selects overfit strategies.
                                    Use Out-of-Sample (OOS) and Walk-Forward as your real filter.
                                </p>
                            </div>



                            <h2 id="position-sizing-pyramiding">Position Sizing and Pyramiding</h2>
                            <p>
                                Position sizing answers this question: <strong>How big should each trade be?</strong> Pyramiding answers this question:
                                <strong> Can the strategy add another entry while it is already in a trade?</strong>
                            </p>

                            <h3>Position sizing modes</h3>
                            <p>
                                StratGen can test different ways of sizing trades. The exact controls available depend on your current build and selected instrument,
                                but the common modes are:
                            </p>
                            <ul>
                                <li><strong>Fixed Position Size</strong>: always trade the same quantity. Example: always trade 1 contract.</li>
                                <li><strong>Fixed Dollar Risk</strong>: size the trade so the dollar risk is near a target amount. Example: risk about $500 per trade.</li>
                                <li><strong>Percent Equity Risk</strong>: size the trade based on a percent of account equity. Example: risk 1% of the account.</li>
                                <li><strong>Fixed Notional</strong>: size by total market exposure. Example: keep each position near a fixed dollar value.</li>
                            </ul>

                            <div className="rounded-xl border border-border/40 bg-muted/20 p-6 my-8">
                                <h4 className="mt-0">Beginner explanation</h4>
                                <p className="mb-0">
                                    A strategy can look good with 1 contract and terrible with oversized trades. Position sizing is not decoration.
                                    It changes profit, drawdown, risk of ruin, and whether the strategy is realistic for your account.
                                </p>
                            </div>

                            <h3>How to choose a position sizing mode</h3>
                            <ul>
                                <li><strong>Use Fixed Position Size</strong> when you want the cleanest research comparison between strategies.</li>
                                <li><strong>Use Fixed Dollar Risk</strong> when you want each trade to risk roughly the same number of dollars.</li>
                                <li><strong>Use Percent Equity Risk</strong> when you want position size to grow or shrink with the account.</li>
                                <li><strong>Use Fixed Notional</strong> when you want exposure to stay similar across instruments with different prices.</li>
                            </ul>

                            <h3>Pyramiding</h3>
                            <p>
                                Pyramiding allows a strategy to add to an existing position. For example, if a long strategy is already long and another valid long
                                entry signal appears, the strategy may add another unit instead of ignoring the signal.
                            </p>
                            <ul>
                                <li><strong>Max Pyramid Entries</strong>: maximum number of entries allowed in the same direction.</li>
                                <li><strong>Pyramiding Exit Mode</strong>: controls how exits reduce or close pyramided entries.</li>
                                <li><strong>Scale-out behavior</strong>: newer NinjaTrader exports handle pyramiding exits so partial exits reduce the correct position size.</li>
                            </ul>

                            <div className="rounded-xl border border-border/40 bg-muted/20 p-6 my-8">
                                <h4 className="mt-0">Common pyramiding mistake</h4>
                                <p className="mb-0">
                                    Pyramiding usually increases both profit potential and drawdown. If you turn it on, watch MaxDD, margin usage,
                                    and the trade list. Do not assume more entries means a better strategy.
                                </p>
                            </div>

                            <h3>Reversal behavior</h3>
                            <p>
                                StratGen now supports reversal-style behavior where an opposite signal can flip the position instead of waiting for the strategy
                                to become flat first. Example: if the system is long and a short signal appears, the strategy can close the long and enter short.
                            </p>
                            <ul>
                                <li><strong>Good use case</strong>: trend-following or regime-switching systems where long and short signals are opposites.</li>
                                <li><strong>Risk</strong>: reversal systems can trade more often, which means slippage and commissions matter more.</li>
                                <li><strong>What to check</strong>: compare trade count, average trade, and drawdown before and after enabling reversal behavior.</li>
                            </ul>

                            <h2 id="advanced-exits">Advanced Exits, Monthly Limits, and Incubation</h2>
                            <p>
                                Exits are where many strategies succeed or fail. A good entry with a bad exit can still lose money. StratGen includes several
                                exit controls so you can test more realistic trade management.
                            </p>

                            <h3>N bars and N bars profit</h3>
                            <ul>
                                <li><strong>Exit after N bars</strong>: closes a trade after it has been open for a certain number of bars.</li>
                                <li><strong>N bars profit</strong>: can be used to force or test exits after the trade has had time to work.</li>
                                <li><strong>Why it matters</strong>: without a time-based exit, some strategies can sit in positions far longer than intended.</li>
                            </ul>

                            <h3>Monthly profit target and monthly stop loss</h3>
                            <p>
                                Monthly trade governor settings let you limit behavior by month. This is useful when you want a strategy to stop after it reaches
                                a monthly profit target or stop after a monthly loss limit.
                            </p>
                            <ul>
                                <li><strong>Monthly Profit Target</strong>: can stop or restrict trading after a target profit is reached for the month.</li>
                                <li><strong>Monthly Stop Loss</strong>: can stop or restrict trading after the month reaches a loss threshold.</li>
                                <li><strong>Why users use it</strong>: to avoid giving back gains after a good month or digging deeper after a bad month.</li>
                            </ul>

                            <h3>Incubation months</h3>
                            <p>
                                Incubation means waiting before trusting a strategy. In practice, it gives a strategy a period where it must prove itself
                                before it is treated as ready.
                            </p>
                            <ul>
                                <li><strong>Use incubation</strong> when you want a buffer between discovery and deployment.</li>
                                <li><strong>Do not use incubation</strong> as a magic fix for bad OOS performance. It is a filter, not a cure.</li>
                                <li><strong>Simple interpretation</strong>: if a strategy cannot survive a waiting period, it may not be stable enough.</li>
                            </ul>

                            <div className="rounded-xl border border-border/40 bg-muted/20 p-6 my-8">
                                <h4 className="mt-0">Exit testing checklist</h4>
                                <ol className="mb-0">
                                    <li>Start with simple exits: stop loss, profit target, or N bars.</li>
                                    <li>Add monthly limits only if they match how you would actually trade.</li>
                                    <li>Check OOS trade count. Too few trades makes the result less trustworthy.</li>
                                    <li>Check average trade after slippage and commissions. Tiny average trade can disappear live.</li>
                                </ol>
                            </div>


                            {/* 5 */}
                            {/* 5 */}
                            <h2 id="walk-forward">5) Walk-Forward & Realism (Recommended)</h2>
                            <img
                                src="/stratgen_manual_images/04-settings-walkforward.jpg"
                                alt="Walk-forward settings"
                                className="mx-auto my-8 rounded-lg border border-border/40 shadow-lg"
                            />

                            <p>
                                Walk-forward testing is strongly recommended for every strategy. It gives you the most Out-of-Sample (OOS) coverage,
                                and it is harder to “cheat” by accident.
                            </p>

                            <h3>What walk-forward means (simple)</h3>
                            <p>
                                Instead of doing one big IS/OOS split, walk-forward repeats many smaller splits:
                                train on one time window (IS), then test the next window (OOS), then slide forward and repeat.
                            </p>

                            <ul>
                                <li><strong>More OOS data</strong> means a tougher, more realistic test.</li>
                                <li><strong>More windows</strong> means you see if the strategy works in different market conditions.</li>
                            </ul>

                            <h3>Slippage and Commissions (make results realistic)</h3>
                            <ul>
                                <li><strong>Slippage %</strong>: a small penalty for imperfect fills.</li>
                                <li><strong>Commissions $ per side</strong>: cost per entry and per exit.</li>
                            </ul>

                            <div className="rounded-xl border border-border/40 bg-muted/20 p-6 my-8">
                                <h4 className="mt-0">Strong recommendation</h4>
                                <ul className="mb-0">
                                    <li>Walk-forward every strategy before exporting code.</li>
                                    <li>Walk-forward gives you the maximum amount of OOS validation.</li>
                                    <li>If walk-forward fails, treat it as a warning sign, even if IS looks amazing.</li>
                                </ul>
                            </div>

                            <div className="rounded-xl border border-border/40 bg-muted/20 p-6 my-8">
                                <h4 className="mt-0">Walk-Forward Monte Carlo (OOS-only)</h4>
                                <p className="mb-0">
                                    The Monte Carlo button on the Walk-Forward Results page uses <strong>only OOS trades</strong>.
                                    This is deliberate: it is the strictest robustness test because it avoids “training period trades.”
                                </p>
                            </div>


                            <h2 id="new-signal-types">New Signal Types: Donchian, Elliott Wave, Z-Score, and More</h2>
                            <p>
                                Newer StratGen versions added more signal families. Signals are still used the same way: you select them as possible entries
                                or exits, set parameter ranges if needed, and let StratGen test combinations.
                            </p>

                            <h3>Donchian signals</h3>
                            <p>
                                Donchian signals compare price to recent highs or lows. They are commonly used for breakout and channel strategies.
                            </p>
                            <ul>
                                <li><strong>Highest</strong>: looks at the highest value over a lookback period.</li>
                                <li><strong>Lowest</strong>: looks at the lowest value over a lookback period.</li>
                                <li><strong>Typical entry idea</strong>: price breaks above a recent high for long, or below a recent low for short.</li>
                                <li><strong>Typical exit idea</strong>: price crosses back through a channel level or fails to continue.</li>
                            </ul>
                            <p>
                                If a Donchian signal has a parameter such as P1, P1 is usually the lookback length. A larger lookback means a slower, wider channel.
                                A smaller lookback means a faster, more sensitive channel.
                            </p>

                            <h3>Elliott Wave signals</h3>
                            <p>
                                Elliott Wave signals try to describe market structure and wave-like movement. They are more interpretive than simple moving-average
                                rules, so you should validate them carefully.
                            </p>
                            <ul>
                                <li><strong>Use them for</strong>: trend structure, continuation attempts, and possible reversal context.</li>
                                <li><strong>Be careful</strong>: wave logic can look good in hindsight. Always check OOS and walk-forward.</li>
                                <li><strong>Best practice</strong>: test Elliott Wave signals with simple exits first, then add complexity later.</li>
                            </ul>

                            <h3>Z-Score signals</h3>
                            <p>
                                Z-Score measures how far a value is from its normal range. In simple terms, it asks:
                                <strong> Is this unusually high or unusually low compared with recent history?</strong>
                            </p>
                            <ul>
                                <li><strong>Positive Z-Score</strong>: value is above its recent average.</li>
                                <li><strong>Negative Z-Score</strong>: value is below its recent average.</li>
                                <li><strong>Near zero</strong>: value is close to normal.</li>
                            </ul>

                            <div className="rounded-xl border border-border/40 bg-muted/20 p-6 my-8">
                                <h4 className="mt-0">Signal selection checklist</h4>
                                <ol className="mb-0">
                                    <li>Pick signals that make logical sense for the market you are testing.</li>
                                    <li>Use a small number of signals first. More signals means more combinations and more overfit risk.</li>
                                    <li>Use parameter ranges that are realistic. Do not test every number just because you can.</li>
                                    <li>After StratGen finds a result, read the selected entry and exit names. Make sure the strategy idea is understandable.</li>
                                </ol>
                            </div>


                            {/* 6 */}
                            <h2 id="import-data">6) Import Data (CSV Requirements)</h2>
                            <img
                                src="/stratgen_manual_images/05-import-data.jpg"
                                alt="Import data"
                                className="mx-auto my-8 rounded-lg border border-border/40 shadow-lg"
                            />

                            <p>
                                StratGen loads historical price data from CSV files on your computer. Each symbol row points to one CSV file.
                                If the CSV format is wrong, the symbol will not load correctly.
                            </p>

                            <h3>What the table columns mean</h3>
                            <ul>
                                <li><strong>Symbol</strong>: market name (example: NQ, ES, CL, SPY, BTCUSD).</li>
                                <li><strong>PointValue</strong>: how much 1 point is worth (critical for futures).</li>
                                <li><strong>InitialMargin</strong>: margin required per contract (futures).</li>
                                <li><strong>Security Type</strong>: Future, Stock, Crypto.</li>
                                <li><strong>FilePath</strong>: full path to the CSV file on your PC.</li>
                            </ul>

                            <div className="rounded-xl border border-border/40 bg-muted/20 p-6 my-8">
                                <h4 className="mt-0">CSV format (simple)</h4>
                                <p>
                                    The CSV must contain OHLCV rows in this order:
                                    <strong> Time, Open, High, Low, Close, Volume</strong>
                                </p>

                                <p className="mb-2">
                                    Time format should be:
                                    <code className="ml-2">MM/dd/yyyy HH:mm</code>
                                </p>

                                <p className="mb-2">Example row (one bar):</p>
                                <pre className="whitespace-pre-wrap rounded-lg bg-black/30 p-4 text-sm">
                                    01/15/2026 09:30,21500.25,21510.75,21490.00,21505.50,12345
                                </pre>

                                <p className="mb-0">
                                    One row per bar. Keep the values numeric. Do not add extra columns.
                                </p>
                            </div>

                            <h3>How to create the CSV (recommended)</h3>
                            <p>
                                A helper strategy called <strong>StratGenDataPrinter.cs</strong> is included. It prints data in the correct format.
                                It outputs each bar like this:
                            </p>

                            <pre className="whitespace-pre-wrap rounded-lg bg-black/30 p-4 text-sm">
                                Time (MM/dd/yyyy HH:mm), Open, High, Low, Close, Volume
                            </pre>

                            <div className="rounded-xl border border-border/40 bg-muted/20 p-6 my-8">
                                <h4 className="mt-0">Beginner warnings</h4>
                                <ul className="mb-0">
                                    <li>If <strong>PointValue</strong> is wrong, PnL and drawdown can be wrong.</li>
                                    <li>If <strong>FilePath</strong> is wrong, StratGen cannot load that symbol.</li>
                                    <li>If <strong>Time format</strong> is wrong, bars may not parse correctly.</li>
                                </ul>
                            </div>


                            <h2 id="server-symbols">Symbol Search, Server Symbols, and History Data Cache</h2>
                            <p>
                                Newer StratGen builds make symbol setup easier. You can still import your own CSV files, but StratGen also includes symbol search
                                and server-supported symbol information so you spend less time hand-entering instrument details.
                            </p>

                            <h3>Symbol search</h3>
                            <p>
                                Symbol search helps you find a market without manually scrolling through a long symbol list. Search by the instrument name or ticker,
                                then select the matching row.
                            </p>
                            <ul>
                                <li><strong>Use search</strong> when you know the symbol, such as ES, NQ, CL, SPY, or BTCUSD.</li>
                                <li><strong>Check the selected row</strong> before running. Make sure the point value and security type look right.</li>
                                <li><strong>If two symbols look similar</strong>, confirm the exchange, asset class, and file path before testing.</li>
                            </ul>

                            <h3>Server-supported point values</h3>
                            <p>
                                Futures and other instruments need correct point values. If the point value is wrong, every PnL number can be wrong.
                                StratGen includes improved server-supported symbol point values, but you should still verify any market you trade.
                            </p>

                            <h3>History data caching</h3>
                            <p>
                                History data caching stores previously loaded data so repeated runs can start faster. This is especially useful when you test
                                the same symbol many times while changing signals or risk settings.
                            </p>
                            <ul>
                                <li><strong>First run</strong>: may be slower because data has to be loaded and prepared.</li>
                                <li><strong>Later runs</strong>: can be faster because cached history may be reused.</li>
                                <li><strong>If data looks wrong</strong>: verify the original CSV or selected symbol. Caching makes repeated work faster, but it does not fix bad source data.</li>
                            </ul>

                            <div className="rounded-xl border border-border/40 bg-muted/20 p-6 my-8">
                                <h4 className="mt-0">Data sanity checklist</h4>
                                <ol className="mb-0">
                                    <li>Confirm the symbol is the one you meant to test.</li>
                                    <li>Confirm point value and margin before trusting futures results.</li>
                                    <li>Confirm dates cover the full period you selected.</li>
                                    <li>Run a small test first. If the equity curve is flat or weird, fix data before running a huge optimization.</li>
                                </ol>
                            </div>


                            {/* 7 */}
                            <h2 id="run-sim">7) Run Simulation (Backtest Generation)</h2>
                            <img
                                src="/stratgen_manual_images/07-simulating.jpg"
                                alt="Simulation running"
                                className="mx-auto my-8 rounded-lg border border-border/40 shadow-lg"
                            />

                            <p>
                                When you click <strong>Run</strong>, StratGen generates and tests many strategies based on your selected signals, parameters,
                                and settings. This is where StratGen does the “heavy lifting.”
                            </p>

                            <h3>Important performance note</h3>
                            <p>
                                StratGen uses <strong>all available CPU cores</strong> to run backtests in parallel (simultaneously). This is why the system can test many
                                combinations quickly, but it also means your PC may run at high CPU usage during simulations.
                            </p>

                            <div className="rounded-xl border border-border/40 bg-muted/20 p-6 my-8">
                                <h4 className="mt-0">Recommended PC specs (for smooth performance)</h4>
                                <ul className="mb-0">
                                    <li><strong>RAM</strong>: 8 to 16+ GB DDR4 or DDR5 (minimum recommended).</li>
                                    <li><strong>CPU</strong>: 4 to 8+ core processor (more cores generally means faster results).</li>
                                </ul>
                            </div>

                            <h3>What to do</h3>
                            <ol>
                                <li>Click <strong>Run</strong> in the Signals tab.</li>
                                <li>Wait for the progress window to complete.</li>
                                <li>When finished, StratGen will show the Strategy Results list.</li>
                            </ol>


                            {/* 8 */}
                            <h2 id="results-list">8) Strategy Results (Select, Inspect, Export)</h2>
                            <img
                                src="/stratgen_manual_images/08-strategy-results-list.jpg"
                                alt="Strategy results list"
                                className="mx-auto my-8 rounded-lg border border-border/40 shadow-lg"
                            />

                            <p>
                                This table shows all strategies StratGen generated. You compare them by performance metrics like Net PnL, MaxDD (drawdown),
                                Sharpe, and Ret/DD.
                            </p>

                            <div className="rounded-xl border border-border/40 bg-muted/20 p-6 my-8">
                                <h4 className="mt-0">Important: you must select a strategy first</h4>
                                <p className="mb-0">
                                    Before you can use <strong>Chart</strong>, <strong>Generate Code</strong>, <strong>Add To Portfolio</strong>, or <strong>Monte Carlo</strong>,
                                    you must <strong>left-click a strategy row</strong> to select it.
                                </p>
                            </div>

                            <h3>What the Chart button does</h3>
                            <p>
                                Clicking <strong>Chart</strong> loads the selected strategy into the <strong>Backtest Dashboard</strong>.
                                This is where you inspect the equity curve, trade list, logs, and detailed metrics.
                            </p>

                            <h3>Buttons on the right (simple)</h3>
                            <ul>
                                <li><strong>Chart</strong>: opens the Backtest Dashboard for the selected strategy.</li>
                                <li><strong>NinjaTrader Code</strong>: generates a NinjaTrader strategy file.</li>
                                <li><strong>TradeStation Code</strong>: generates an EasyLanguage strategy.</li>
                                <li><strong>Python Code</strong>: generates a Python algorithm template.</li>
                                <li><strong>Monte Carlo</strong>: runs robustness testing (randomized equity paths).</li>
                                <li><strong>Add To Portfolio</strong>: saves this strategy for portfolio testing.</li>
                                <li><strong>Walk-Forward</strong>: runs walk-forward testing for deeper OOS validation.</li>
                            </ul>

                            <div className="rounded-xl border border-border/40 bg-muted/20 p-6 my-8">
                                <h4 className="mt-0">Beginner workflow (recommended)</h4>
                                <ol className="mb-0">
                                    <li>Select a strategy row (left-click).</li>
                                    <li>Click <strong>Chart</strong> and review drawdown and equity curve behavior.</li>
                                    <li>Run <strong>Monte Carlo</strong> to validate robustness.</li>
                                    <li>Run <strong>Walk-Forward</strong> for the strongest out-of-sample validation.</li>
                                    <li>Only then export code.</li>
                                </ol>
                            </div>


                            {/* 9 */}
                            <h2 id="dashboard">9) Backtest Dashboard</h2>
                            <img src="/stratgen_manual_images/09-backtest-dashboard.jpg" alt="Backtest dashboard" className="mx-auto my-8 rounded-lg border border-border/40 shadow-lg" />
                            <p>Review equity curves, trades, logs, and full performance metrics.</p>

                            {/* 10 */}
                            <h2 id="generated-code">10) Generated Code (NinjaTrader, TradeStation, Python)</h2>

                            <p>
                                StratGen can export your selected strategy into platform-specific code. This helps you go from research to execution without rewriting logic by hand.
                            </p>

                            <div className="rounded-xl border border-border/40 bg-muted/20 p-6 my-8">
                                <h4 className="mt-0">Important</h4>
                                <p className="mb-0">
                                    You must <strong>left-click</strong> a strategy in the results list to select it before generating code.
                                </p>
                            </div>

                            <h3>NinjaTrader code export</h3>
                            <img
                                src="/stratgen_manual_images/18-generated-code-ninjatrader.jpg"
                                alt="Generated NinjaTrader code"
                                className="mx-auto my-8 rounded-lg border border-border/40 shadow-lg"
                            />
                            <p>
                                The NinjaTrader export generates a full NinjaScript strategy class. It includes default strategy settings and the strategy logic that StratGen discovered.
                            </p>
                            <ul>
                                <li><strong>What it is</strong>: a ready-to-compile NinjaTrader strategy.</li>
                                <li><strong>Where it goes</strong>: paste into NinjaTrader’s Strategy Editor (or a new .cs file in NinjaTrader).</li>
                                <li><strong>What to do</strong>: copy all, paste into NinjaTrader, compile, then run in the Strategy Analyzer.</li>
                            </ul>

                            <h4>NinjaTrader export notes for newer builds</h4>
                            <ul>
                                <li><strong>Pyramiding exits</strong>: newer exports handle scale-out behavior more correctly when pyramiding is enabled.</li>
                                <li><strong>KAMA and newer indicators</strong>: generated code has been updated so newer signal types export more reliably.</li>
                                <li><strong>Fill logic</strong>: always compare NinjaTrader Strategy Analyzer results with StratGen. Small differences can happen from platform fill rules.</li>
                            </ul>

                            <h3>TradeStation code export (EasyLanguage)</h3>
                            <img
                                src="/stratgen_manual_images/19-generated-code-tradestation.jpg"
                                alt="Generated TradeStation EasyLanguage code"
                                className="mx-auto my-8 rounded-lg border border-border/40 shadow-lg"
                            />
                            <p>
                                The TradeStation export generates an EasyLanguage strategy. It includes Inputs (settings), Variables (state), and the Entry/Exit conditions.
                            </p>
                            <ul>
                                <li><strong>What it is</strong>: a TradeStation and MultiCharts compatible strategy script.</li>
                                <li><strong>How it works</strong>: StratGen turns your signals into boolean entry/exit conditions and writes the order statements for you.</li>
                                <li><strong>What to do</strong>: paste into a new EasyLanguage strategy, compile, and backtest inside TradeStation.</li>
                            </ul>

                            <h3>Python code export</h3>
                            <img
                                src="/stratgen_manual_images/20-generated-code-python.jpg"
                                alt="Generated Python algorithm code"
                                className="mx-auto my-8 rounded-lg border border-border/40 shadow-lg"
                            />
                            <p>
                                The Python export generates a Python algorithm template that contains your strategy logic. This is intended for users who want a programmable environment.
                            </p>
                            <ul>
                                <li><strong>What it is</strong>: a Python strategy scaffold with indicators and entry/exit logic.</li>
                                <li><strong>Use case</strong>: porting into your Python trading environment or research workflow.</li>
                                <li><strong>What to do</strong>: copy into your Python platform, verify data mappings, then run a backtest.</li>
                            </ul>

                            <div className="rounded-xl border border-border/40 bg-muted/20 p-6 my-8">
                                <h4 className="mt-0">Practical warning</h4>
                                <p className="mb-0">
                                    Exported code is only as good as your validation. Always run Out-of-Sample, Walk-Forward, and Monte Carlo before trading live.
                                </p>
                            </div>


                            <div className="rounded-xl border border-border/40 bg-muted/20 p-6 my-8">
                                <h4 className="mt-0">Walk-forward-aware export</h4>
                                <p>
                                    If you export from walk-forward results, StratGen can generate code that changes parameters by historical walk-forward window.
                                    This is different from a normal export, where one parameter set is used for the full backtest.
                                </p>
                                <p className="mb-0">
                                    Use normal export for a simple static strategy. Use walk-forward-aware export when you intentionally want the exported strategy
                                    to follow the parameter schedule discovered during walk-forward validation.
                                </p>
                            </div>


                            {/* 11 */}
                            <h2 id="monte-carlo">Monte Carlo Simulation (Robustness Test)</h2>
                            <img
                                src="/stratgen_manual_images/11-monte-carlo-simulation.jpg"
                                alt="Monte Carlo simulation"
                                className="mx-auto my-8 rounded-lg border border-border/40 shadow-lg"
                            />

                            <p>
                                Monte Carlo is a robustness test. It answers this question:
                                <strong>“If the same strategy had small randomness in trade order or outcomes, would it still look good?”</strong>
                            </p>

                            <h3>What StratGen is doing (plain language)</h3>
                            <ul>
                                <li>It takes the strategy’s trade results.</li>
                                <li>It generates many alternative “paths” where trade sequencing or outcomes are randomized.</li>
                                <li>It plots many possible equity curves (the thin lines) plus the reference curve (often highlighted).</li>
                            </ul>

                            <h3>How to read the chart</h3>
                            <ul>
                                <li>
                                    <strong>Tight bundle of lines</strong>: outcomes are consistent. That is usually good.
                                </li>
                                <li>
                                    <strong>Wide spread of lines</strong>: outcomes depend heavily on luck and sequencing. That is riskier.
                                </li>
                                <li>
                                    <strong>Many lines go negative or flat</strong>: strategy may be fragile.
                                </li>
                            </ul>

                            <h3>What the summary numbers mean</h3>
                            <ul>
                                <li><strong>Median Profit</strong>: the middle outcome across simulations (typical result).</li>
                                <li><strong>Median Drawdown</strong>: typical worst drawdown across simulations.</li>
                                <li><strong>Median Ret/DD</strong>: typical return-to-drawdown ratio.</li>
                                <li><strong>Variance</strong>: how spread out the outcomes are. Lower variance generally means more consistency.</li>
                            </ul>

                            <div className="rounded-xl border border-border/40 bg-muted/20 p-6 my-8">
                                <h4 className="mt-0">Simple pass/fail guidance</h4>
                                <ul className="mb-0">
                                    <li>If the median path is profitable and drawdowns stay reasonable, that is a good sign.</li>
                                    <li>If outcomes vary wildly, you probably have an overfit strategy.</li>
                                    <li>Do not export code until Monte Carlo looks acceptable.</li>
                                </ul>
                            </div>
                            <div className="rounded-xl border border-border/40 bg-muted/20 p-6 my-8">
                                <h4 className="mt-0">What you should be looking for</h4>
                                <ul className="mb-0">
                                    <li>
                                        A strong target is <strong>Median Ret/DD greater than 2</strong>.
                                        This generally indicates good performance relative to drawdown.
                                    </li>
                                    <li>
                                        If the lines spread wildly (very wide fan), the strategy may be fragile and dependent on luck or sequencing.
                                    </li>
                                </ul>
                            </div>


                            {/* 12 */}
                            <h2 id="portfolio">12) Portfolio</h2>
                            <img src="/stratgen_manual_images/12-portfolio-tab.jpg" alt="Portfolio tab" className="mx-auto my-8 rounded-lg border border-border/40 shadow-lg" />
                            <p>
                                The Portfolio tab lets you combine multiple strategies into one portfolio. This is important because a single strategy can look good
                                but still be too dependent on one market, one signal family, or one time period.
                            </p>

                            <h3>How to add strategies to a portfolio</h3>
                            <ol>
                                <li>Go to the Strategy Results list.</li>
                                <li>Left-click the strategy row you want to add.</li>
                                <li>Click <strong>Add To Portfolio</strong>.</li>
                                <li>Repeat for other strategies you want to combine.</li>
                                <li>Open the Portfolio tab and review the combined result.</li>
                            </ol>

                            <h3>What makes a good portfolio candidate</h3>
                            <ul>
                                <li><strong>Different symbols</strong>: examples include NQ plus CL, or ES plus GC.</li>
                                <li><strong>Different logic</strong>: trend-following plus mean-reversion can diversify better than two similar trend systems.</li>
                                <li><strong>Different drawdown timing</strong>: one strategy should not lose money at the exact same time as every other strategy.</li>
                                <li><strong>Acceptable standalone quality</strong>: do not add a bad strategy just because it is different.</li>
                            </ul>

                            <div className="rounded-xl border border-border/40 bg-muted/20 p-6 my-8">
                                <h4 className="mt-0">Portfolio warning</h4>
                                <p className="mb-0">
                                    A portfolio is not automatically safer. If you combine five strategies that all lose during the same market regime,
                                    you have multiplied the same risk five times.
                                </p>
                            </div>

                            <h2 id="portfolio-monte-carlo">Portfolio Monte Carlo</h2>
                            <p>
                                Portfolio Monte Carlo stress-tests the combined portfolio instead of one individual strategy. This is one of the most important
                                newer validation tools because it answers a portfolio-level question:
                                <strong> If trade order and outcomes vary, does the combined account still survive?</strong>
                            </p>

                            <h3>Single-strategy Monte Carlo vs Portfolio Monte Carlo</h3>
                            <ul>
                                <li><strong>Single-strategy Monte Carlo</strong>: tests one selected strategy.</li>
                                <li><strong>Portfolio Monte Carlo</strong>: tests the combined behavior of several strategies together.</li>
                                <li><strong>Why portfolio Monte Carlo matters</strong>: the portfolio can fail even when each individual strategy looks acceptable.</li>
                            </ul>

                            <h3>How to use Portfolio Monte Carlo</h3>
                            <ol>
                                <li>Add two or more strategies to the portfolio.</li>
                                <li>Open the Portfolio or Portfolio Equity view.</li>
                                <li>Run the portfolio Monte Carlo option.</li>
                                <li>Review the simulated equity paths, median profit, median drawdown, and median Ret/DD.</li>
                                <li>If the simulated paths spread too widely or many paths collapse, reduce exposure or replace weak portfolio members.</li>
                            </ol>

                            <div className="rounded-xl border border-border/40 bg-muted/20 p-6 my-8">
                                <h4 className="mt-0">Simple portfolio Monte Carlo interpretation</h4>
                                <ul className="mb-0">
                                    <li><strong>Good</strong>: most paths remain profitable, drawdowns stay controlled, and median Ret/DD remains strong.</li>
                                    <li><strong>Warning</strong>: a few paths survive but many paths are flat or deeply negative.</li>
                                    <li><strong>Bad</strong>: results depend on one lucky strategy or one lucky sequence of trades.</li>
                                </ul>
                            </div>

                            {/* 13 */}
                            <h2 id="portfolio-equity">13) Portfolio Equity</h2>
                            <img src="/stratgen_manual_images/13-portfolio-equity.jpg" alt="Portfolio equity" className="mx-auto my-8 rounded-lg border border-border/40 shadow-lg" />
                            <p>
                                Portfolio Equity shows the combined equity curve of all portfolio strategies. Use it to see whether the portfolio grows smoothly
                                or whether one strategy dominates all gains and losses.
                            </p>

                            <h3>What to look for</h3>
                            <ul>
                                <li><strong>Smoother curve</strong>: usually better than a curve with violent spikes and crashes.</li>
                                <li><strong>Lower combined drawdown</strong>: the portfolio should ideally reduce drawdown compared with trading everything separately.</li>
                                <li><strong>Realistic growth</strong>: avoid portfolios where one extreme winner hides several weak strategies.</li>
                                <li><strong>Buy and hold comparison</strong>: use it as context, not as the only decision rule.</li>
                            </ul>

                            {/* 14 */}
                            <h2 id="correlation">Correlation (Diversification Check)</h2>
                            <img
                                src="/stratgen_manual_images/14-correlation-matrix.jpg"
                                alt="Correlation matrix"
                                className="mx-auto my-8 rounded-lg border border-border/40 shadow-lg"
                            />

                            <p>
                                Correlation tells you whether two strategies tend to win and lose at the same time.
                                This matters because two strategies that both “go down together” do not diversify risk.
                            </p>

                            <h3>What correlation values mean (simple)</h3>
                            <ul>
                                <li><strong>+1.00</strong>: move together perfectly (not diversified)</li>
                                <li><strong>0.00</strong>: mostly unrelated (better diversification)</li>
                                <li><strong>-1.00</strong>: move opposite (often strong diversification, but not guaranteed)</li>
                            </ul>

                            <h3>How correlation is calculated (simple explanation)</h3>
                            <p>
                                StratGen compares two time series, usually returns per period (or equity changes). Correlation is basically:
                                <strong> “Do these two lines move up and down together?”</strong>
                            </p>
                            <p>
                                Under the hood, it uses a standard correlation coefficient (Pearson correlation). You do not need to do the math,
                                but the result will always be between -1 and +1.
                            </p>

                            <div className="rounded-xl border border-border/40 bg-muted/20 p-6 my-8">
                                <h4 className="mt-0">Portfolio rule of thumb</h4>
                                <ul className="mb-0">
                                    <li>Try to combine strategies with low correlation (closer to 0).</li>
                                    <li>High correlation means you may just be doubling the same risk.</li>
                                    <li>Correlation can change over time, so always check walk-forward or multiple periods if possible.</li>
                                </ul>
                            </div>


                            {/* 15 */}
                            <h2 id="templates">15) Templates</h2>
                            <img src="/stratgen_manual_images/15-templates.jpg" alt="Templates" className="mx-auto my-8 rounded-lg border border-border/40 shadow-lg" />
                            <p>Save and reuse strategy configurations.</p>

                            {/* 16 */}
                            <h2 id="custom-signals">16) Custom Signals</h2>
                            <img src="/stratgen_manual_images/16-custom-signals.jpg" alt="Custom signals" className="mx-auto my-8 rounded-lg border border-border/40 shadow-lg" />
                            <p>Create your own signals using C# MiniSignal templates.</p>

                            {/* 17 */}
                            <h2 id="walk-forward-results">Walk-Forward Results (Consistency Over Time)</h2>
                            <img
                                src="/stratgen_manual_images/17-walk-forward-results.jpg"
                                alt="Walk-forward results"
                                className="mx-auto my-8 rounded-lg border border-border/40 shadow-lg"
                            />

                            <p>
                                Walk-forward testing is a tougher validation method than a single IS/OOS split. Instead of one split, it repeats many splits.
                            </p>

                            <h3>What is happening in each row</h3>
                            <ul>
                                <li><strong>IS Start / IS End</strong>: the training window (In-Sample)</li>
                                <li><strong>OOS Start / OOS End</strong>: the validation window (Out-of-Sample)</li>
                                <li><strong>Best Params</strong>: the parameters found in that IS window</li>
                                <li><strong>IS metrics</strong>: performance inside the training window</li>
                                <li><strong>OOS metrics</strong>: performance inside the validation window</li>
                            </ul>

                            <h3>How to interpret results (simple)</h3>
                            <ul>
                                <li>If OOS metrics stay reasonably positive across many windows, the strategy is more reliable.</li>
                                <li>If OOS flips wildly, it may be regime-dependent or overfit.</li>
                                <li>A small drop from IS to OOS is normal. A large collapse is a warning sign.</li>
                            </ul>

                            <div className="rounded-xl border border-border/40 bg-muted/20 p-6 my-8">
                                <h4 className="mt-0">What “degradation” means</h4>
                                <p className="mb-0">
                                    Degradation is the drop from IS performance to OOS performance. Some degradation is expected.
                                    Extreme degradation usually means the strategy is tuned too specifically to the IS window.
                                </p>
                            </div>
                            <div className="rounded-xl border border-border/40 bg-muted/20 p-6 my-8">
                                <h4 className="mt-0">Walk-Forward code export (advanced, recommended)</h4>
                                <p>
                                    StratGen can generate <strong>walk-forward-aware code</strong> that changes parameters across walk-forward windows.
                                    This lets you backtest the realistic scenario where the “best parameters” evolve over time as the walk-forward process advances.
                                </p>
                                <p className="mb-0">
                                    Simple interpretation: instead of one static parameter set forever, the exported code can apply the right parameter set for each historical window.
                                </p>
                            </div>


                            {/* 18 */}
                            <h2 id="ai-workflows">AI Workflows (Settings Page)</h2>
                            <img
                                src="/stratgen_manual_images/ai-workflows-settings.png"
                                alt="AI Workflows settings page"
                                className="mx-auto my-8 rounded-lg border border-border/40 shadow-lg"
                            />

                            <p>
                                AI Workflows automates repeated strategy runs (backtests and walk-forward cycles), filtering results by quality thresholds and retry rules until it finds viable candidates.
                            </p>

                            <h3>Core Evaluation Filters</h3>
                            <ul>
                                <li><strong>Min Ret/DD</strong>: Minimum return-to-drawdown ratio required for a candidate to pass (global threshold).</li>
                                <li><strong>Evaluation mode</strong>: Decides how results are scored.</li>
                                <li><strong>Combined</strong>: Uses both long and short performance together.</li>
                                <li><strong>Other modes (if available)</strong>: Typically evaluate long and short independently.</li>
                                <li><strong>Long Min Ret/DD</strong>: Minimum Ret/DD required for the long side.</li>
                                <li><strong>Short Min Ret/DD</strong>: Minimum Ret/DD required for the short side.</li>
                                <li><strong>Combined Min Ret/DD</strong>: Minimum Ret/DD required when long+short are merged into one system view.</li>
                                <li><strong>Min Trades</strong>: Minimum number of trades required before a result is considered valid (prevents overfitting on tiny sample sizes).</li>
                                <li><strong>Top candidates / side</strong>: Number of highest-ranked strategies kept per side (long or short) after each evaluation pass.</li>
                            </ul>

                            <h3>Run Direction and Strategy Construction</h3>
                            <ul>
                                <li><strong>Start Side</strong>: Which direction workflow begins with (Long or Short).</li>
                                <li><strong>EntryExit policy</strong>: Rule set for how entries/exits are generated during search (example shown: RandomEntry).</li>
                                <li><strong>Code platform</strong>: Target execution/runtime format for generated strategy code (example shown: Ninja, likely NinjaTrader-compatible output).</li>
                            </ul>

                            <h3>Execution Limits and Throughput Control</h3>
                            <ul>
                                <li><strong>Max Attempts (0=unlimited)</strong>: Max number of strategy-generation/evaluation tries before stopping.</li>
                                <li><strong>Max Runtime Minutes (0=unlimited)</strong>: Hard time limit for the workflow.</li>
                                <li><strong>Cool-down Seconds (0=off)</strong>: Delay between attempts to reduce load, pacing API/simulation usage.</li>
                            </ul>

                            <h3>Retry Behavior</h3>
                            <ul>
                                <li><strong>Retry Policy</strong>: What happens after a failed/invalid attempt.</li>
                                <li><strong>Example shown</strong>: FlipSideAndRetry (switch side and try again).</li>
                            </ul>

                            <h3>Auto-combine behavior</h3>
                            <p>
                                AI Workflows can combine long and short candidates automatically when the workflow finds acceptable pieces.
                                This is useful when one side performs well by itself but the final goal is a combined long/short strategy.
                            </p>
                            <ul>
                                <li><strong>Long candidate</strong>: a strategy that passes the long-side filters.</li>
                                <li><strong>Short candidate</strong>: a strategy that passes the short-side filters.</li>
                                <li><strong>Combined candidate</strong>: long and short logic merged into one strategy view.</li>
                                <li><strong>What to check</strong>: combined Ret/DD, combined drawdown, trade count, and whether one side carries the other side.</li>
                            </ul>

                            <h3>Export behavior</h3>
                            <p>
                                AI Workflow export is designed to save the useful result after the workflow finds a valid candidate. Newer builds removed an avoidable
                                stall in this export path and normalized plain backtest portfolio export names so they use normal timestamped names.
                            </p>
                            <ul>
                                <li><strong>If export succeeds</strong>: review the exported file and make sure the strategy name, symbol, and parameters match the result you selected.</li>
                                <li><strong>If export seems slow</strong>: wait for the workflow status to finish before clicking repeatedly.</li>
                                <li><strong>If multiple exports exist</strong>: use the timestamp and strategy name to identify the newest file.</li>
                            </ul>

                            <h3>Controls and Status</h3>
                            <ul>
                                <li><strong>Start</strong>: Begins the automated workflow with current settings.</li>
                                <li><strong>Stop</strong>: Stops the active workflow.</li>
                                <li><strong>Status text (example: Idle)</strong>: Current workflow state (idle/running/stopped/error).</li>
                            </ul>

                            <h3>Practical Tuning Guidance</h3>
                            <ul>
                                <li>Use higher Min Ret/DD values for stricter quality; lower values for broader exploration.</li>
                                <li>Keep Min Trades high enough to avoid fragile results.</li>
                                <li>Use Max Attempts and Max Runtime Minutes together to cap cost/time.</li>
                                <li>If search stalls on one direction, FlipSideAndRetry helps maintain momentum.</li>
                            </ul>

                            <div className="rounded-xl border border-border/40 bg-muted/20 p-6 my-8">
                                <h4 className="mt-0">AI Workflow beginner setup</h4>
                                <ol className="mb-0">
                                    <li>Set a realistic Min Trades value first. Do not accept strategies with only a few trades.</li>
                                    <li>Set Min Ret/DD to a value you would actually accept.</li>
                                    <li>Use a Max Runtime Minutes limit so the workflow cannot run forever by accident.</li>
                                    <li>Start with Combined evaluation if your goal is a single long/short system.</li>
                                    <li>After a candidate is found, still run chart review, Monte Carlo, and walk-forward before trusting it.</li>
                                </ol>
                            </div>

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
                                                Donchian, Elliott Wave, Z-Score, and other newer signal families
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-primary mt-1">•</span>
                                                Advanced backtesting and robustness testing
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-primary mt-1">•</span>
                                                Position sizing, pyramiding, reversal behavior, monthly exits, and incubation settings
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
                                                Portfolio construction, portfolio equity, correlation checks, and portfolio Monte Carlo
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-primary mt-1">•</span>
                                                AI Workflows, auto-combine behavior, workflow export, retry rules, and runtime limits
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
