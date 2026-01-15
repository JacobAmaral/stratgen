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
                <title>StratGen User Manual v0.9.9 | Complete Guide to Algorithmic Trading Platform</title>
                <meta name="description" content="Complete 13-page user manual for StratGen v0.9.9 quantitative trading platform. Learn backtesting, signal generation, code generation for NinjaTrader, TradeStation, Python, and robustness testing." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="keywords" content="stratgen user manual, algorithmic trading guide, backtesting tutorial, quantitative trading manual, trading platform documentation, no-code trading, robustness testing, out-of-sample testing" />
                <meta property="og:title" content="StratGen User Manual v0.9.9 | Complete Guide to Algorithmic Trading Platform" />
                <meta property="og:description" content="Complete 13-page user manual for StratGen v0.9 quantitative trading platform covering backtesting, signal generation, and automated code generation." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://stratgen.com/user-manual" />
                <meta property="og:image" content="https://assets.co.dev/dc630d7c-c620-481b-9ee9-1959feae8edc/stratgen_user_manualv0.9-01-1c9001e.png" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="StratGen User Manual v0.9.9 | Complete Guide to Algorithmic Trading Platform" />
                <meta name="twitter:description" content="Complete 13-page user manual for StratGen v0.9 quantitative trading platform covering backtesting, signal generation, and automated code generation." />
                <meta name="twitter:image" content="https://assets.co.dev/dc630d7c-c620-481b-9ee9-1959feae8edc/stratgen_user_manualv0.9-01-1c9001e.png" />
                <link rel="canonical" href="https://stratgen.com/user-manual" />
                <link rel="icon" href="/favicon.ico" />

                {/* JSON-LD Schema for Documentation */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify([
                            {
                                "@context": "https://schema.org",
                                "@type": "TechArticle",
                                "headline": "StratGen User Manual - Complete Guide for Quantitative Trading Platform",
                                "description": "Complete 13-page user manual for StratGen v0.9.9 quantitative trading platform covering backtesting, signal generation, and automated code generation.",
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
                                "dateModified": "2024-12-01",
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
                                "description": "Step-by-step guide to using StratGen's algorithmic trading platform for backtesting, signal generation, and code generation.",
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
                                Complete 13-page guide to mastering StratGen v0.9.9 for quantitative trading, backtesting, robustness testing,
                                and automated code generation. Perfect for quantitative researchers and algorithmic strategy developers.
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
                                    <li><a href="#launch" className="hover:underline">Launch StratGen</a></li>
                                    <li><a href="#settings-window" className="hover:underline">Settings Window</a></li>
                                    <li><a href="#signals-tab" className="hover:underline">Signals</a></li>
                                    <li><a href="#strategy-settings" className="hover:underline">Strategy Settings</a></li>
                                    <li><a href="#walk-forward" className="hover:underline">Walk-Forward Settings</a></li>
                                    <li><a href="#import-data" className="hover:underline">Import Data</a></li>
                                    <li><a href="#run-sim" className="hover:underline">Run Simulation</a></li>
                                    <li><a href="#results-list" className="hover:underline">Strategy Results</a></li>
                                    <li><a href="#dashboard" className="hover:underline">Backtest Dashboard</a></li>
                                    <li><a href="#generated-code" className="hover:underline">Generated Code</a></li>
                                    <li><a href="#monte-carlo" className="hover:underline">Monte Carlo</a></li>
                                    <li><a href="#portfolio" className="hover:underline">Portfolio</a></li>
                                    <li><a href="#portfolio-equity" className="hover:underline">Portfolio Equity</a></li>
                                    <li><a href="#correlation" className="hover:underline">Correlation</a></li>
                                    <li><a href="#templates" className="hover:underline">Templates</a></li>
                                    <li><a href="#custom-signals" className="hover:underline">Custom Signals</a></li>
                                    <li><a href="#walk-forward-results" className="hover:underline">Walk-Forward Results</a></li>
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
                            <h2 id="strategy-settings">Strategy Settings (Capital, Exits, OOS Split)</h2>
                            <img
                                src="/stratgen_manual_images/03-settings-top.jpg"
                                alt="Strategy settings"
                                className="mx-auto my-8 rounded-lg border border-border/40 shadow-lg"
                            />

                            <h3>Starting Cash</h3>
                            <p>
                                <strong>Starting Cash</strong> sets the starting account size for the backtest. This affects position sizing and percent returns.
                            </p>

                            <h3>Exit Settings (Profit Target, Stop Loss, Trailing Stop)</h3>
                            <p>
                                These settings control risk and trade duration. If you leave a field at 0, it may be effectively disabled depending on the setting.
                            </p>

                            <h3>Out-of-Sample % (OOS)</h3>
                            <p>
                                <strong>Out Of Sample %</strong> splits your historical data into two parts:
                            </p>
                            <ul>
                                <li><strong>In-Sample (IS)</strong>: used to find the best strategy and parameters</li>
                                <li><strong>Out-of-Sample (OOS)</strong>: used to confirm it still works on unseen data</li>
                            </ul>

                            <p>
                                Example: OOS = 50% means half the data is used for IS and half for OOS.
                                If IS is strong and OOS is also strong, the strategy is more likely robust.
                            </p>

                            <div className="rounded-xl border border-border/40 bg-muted/20 p-6 my-8">
                                <h4 className="mt-0">Common mistake</h4>
                                <p className="mb-0">
                                    Users often sort the results by IS performance and pick the top one. This usually selects overfit strategies.
                                    Better approach: sort by OOS stability or use Combined only after OOS passes.
                                </p>
                            </div>


                            {/* 5 */}
                            <h2 id="walk-forward">5) Walk-Forward & Realism</h2>
                            <img src="/stratgen_manual_images/04-settings-walkforward.jpg" alt="Walk-forward settings" className="mx-auto my-8 rounded-lg border border-border/40 shadow-lg" />
                            <p>Enable walk-forward testing, slippage, commissions, and performance filters.</p>

                            {/* 6 */}
                            <h2 id="import-data">6) Import Data</h2>
                            <img src="/stratgen_manual_images/05-import-data.jpg" alt="Import data" className="mx-auto my-8 rounded-lg border border-border/40 shadow-lg" />
                            <p>Define symbols, point values, margins, and file paths for futures, stocks, and crypto.</p>

                            {/* 7 */}
                            <h2 id="run-sim">7) Run Simulation</h2>
                            <img src="/stratgen_manual_images/07-simulating.jpg" alt="Simulation running" className="mx-auto my-8 rounded-lg border border-border/40 shadow-lg" />
                            <p>Click Run to test strategies. StratGen evaluates every valid rule combination.</p>

                            {/* 8 */}
                            <h2 id="results-list">8) Strategy Results</h2>
                            <img src="/stratgen_manual_images/08-strategy-results-list.jpg" alt="Strategy results" className="mx-auto my-8 rounded-lg border border-border/40 shadow-lg" />
                            <p>Compare strategies by Net PnL, Drawdown, Sharpe, and Ret/DD.</p>

                            {/* 9 */}
                            <h2 id="dashboard">9) Backtest Dashboard</h2>
                            <img src="/stratgen_manual_images/09-backtest-dashboard.jpg" alt="Backtest dashboard" className="mx-auto my-8 rounded-lg border border-border/40 shadow-lg" />
                            <p>Review equity curves, trades, logs, and full performance metrics.</p>

                            {/* 10 */}
                            <h2 id="generated-code">10) Generated Code</h2>
                            <img src="/stratgen_manual_images/10-generated-code.jpg" alt="Generated code" className="mx-auto my-8 rounded-lg border border-border/40 shadow-lg" />
                            <p>Export strategies to NinjaTrader, TradeStation, or Python.</p>

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


                            {/* 12 */}
                            <h2 id="portfolio">12) Portfolio</h2>
                            <img src="/stratgen_manual_images/12-portfolio-tab.jpg" alt="Portfolio tab" className="mx-auto my-8 rounded-lg border border-border/40 shadow-lg" />
                            <p>Combine multiple strategies into a single portfolio.</p>

                            {/* 13 */}
                            <h2 id="portfolio-equity">13) Portfolio Equity</h2>
                            <img src="/stratgen_manual_images/13-portfolio-equity.jpg" alt="Portfolio equity" className="mx-auto my-8 rounded-lg border border-border/40 shadow-lg" />
                            <p>View the combined equity curve of all portfolio strategies.</p>

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