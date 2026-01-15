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
      url: "https://assets.co.dev/dc630d7c-c620-481b-9ee9-1959feae8edc/stratgen_user_manualv0.9-01-1c9001e.png",
      alt: "StratGen User Manual v0.9 Page 1 - Complete introduction and overview of the professional algorithmic trading platform for quantitative traders with no-code strategy development",
      title: "Introduction & Overview"
    },
    {
      url: "https://assets.co.dev/dc630d7c-c620-481b-9ee9-1959feae8edc/stratgen_user_manualv0.9-02-25dc147.png",
      alt: "StratGen User Manual v0.9 Page 2 - Step-by-step installation guide and initial setup instructions for Windows algorithmic trading software",
      title: "Installation & Setup"
    },
    {
      url: "https://assets.co.dev/dc630d7c-c620-481b-9ee9-1959feae8edc/stratgen_user_manualv0.9-03-1570ba8.png",
      alt: "StratGen User Manual v0.9 Page 3 - Comprehensive platform interface guide and navigation tutorial for quantitative trading dashboard and tools",
      title: "Platform Interface"
    },
    {
      url: "https://assets.co.dev/dc630d7c-c620-481b-9ee9-1959feae8edc/stratgen_user_manualv0.9-04-607f20d.png",
      alt: "StratGen User Manual v0.9 Page 4 - Creating algorithmic trading strategies and signal testing tutorial with 600+ technical indicators for quantitative analysis",
      title: "Strategy Creation"
    },
    {
      url: "https://assets.co.dev/dc630d7c-c620-481b-9ee9-1959feae8edc/stratgen_user_manualv0.9-05-b93be6c.png",
      alt: "StratGen User Manual v0.9 Page 5 - Advanced backtesting engine and robustness testing tools including Monte Carlo simulations and out-of-sample analysis",
      title: "Backtesting & Analysis"
    },
    {
      url: "https://assets.co.dev/dc630d7c-c620-481b-9ee9-1959feae8edc/stratgen_user_manualv0.9-06-3769cc7.png",
      alt: "StratGen User Manual v0.9 Page 6 - Data import tutorial for OHLCV data analysis covering futures, equities, crypto, and forex trading instruments",
      title: "Data Import & Analysis"
    },
    {
      url: "https://assets.co.dev/dc630d7c-c620-481b-9ee9-1959feae8edc/stratgen_user_manualv0.9-07-8e3c421.png",
      alt: "StratGen User Manual v0.9 Page 7 - Automated code generation guide for exporting trading strategies to NinjaTrader, TradeStation, and Python platforms",
      title: "Automated Code Generation"
    },
    {
      url: "https://assets.co.dev/dc630d7c-c620-481b-9ee9-1959feae8edc/stratgen_user_manualv0.9-08-45df199.png",
      alt: "StratGen User Manual v0.9 Page 8 - Advanced signal analysis tutorial covering technical indicators, fundamental analysis, and quantitative research methodologies",
      title: "Signal Analysis"
    },
    {
      url: "https://assets.co.dev/dc630d7c-c620-481b-9ee9-1959feae8edc/stratgen_user_manualv0.9-09-f309e20.png",
      alt: "StratGen User Manual v0.9 Page 9 - Strategy validation guide with out-of-sample testing, walk-forward analysis, and performance optimization for algorithmic trading",
      title: "Strategy Validation"
    },
    {
      url: "https://assets.co.dev/dc630d7c-c620-481b-9ee9-1959feae8edc/stratgen_user_manualv0.9-10-a570981.png",
      alt: "StratGen User Manual v0.9 Page 10 - Code exporting guide for generating trading strategies for NinjaTrader, TradeStation, and Python platforms",
      title: "Code Exporting"
    },
    {
      url: "https://assets.co.dev/dc630d7c-c620-481b-9ee9-1959feae8edc/stratgen_user_manualv0.9-11-1118413.png",
      alt: "StratGen User Manual v0.9 Page 11 - Portfolio management and analysis tools for professional algorithmic trading platform users",
      title: "Portfolio"
    },
    {
      url: "https://assets.co.dev/dc630d7c-c620-481b-9ee9-1959feae8edc/stratgen_user_manualv0.9-12-17f4fb3.png",
      alt: "StratGen User Manual v0.9 Page 12 - Advanced portfolio features and configuration options for professional quantitative trading and strategy development",
      title: "Advanced Portfolio Features"
    },
    {
      url: "https://assets.co.dev/dc630d7c-c620-481b-9ee9-1959feae8edc/stratgen_user_manualv0.9-13-061f586.png",
      alt: "StratGen User Manual v0.9 Page 13 - Summary with comprehensive overview and quick reference for all StratGen features and capabilities",
      title: "Summary"
    }
  ];

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
        {/* Table Content and Manual Text */}
        <section class="sg-manual" id="top">
                  <h1>StratGen User Manual</h1>

                  <p>
                      StratGen is a professional-grade no-code platform for quantitative research and trading, designed for quant traders who demand rigorous out-of-sample testing and robustness analysis.
                  </p>

                  <p><strong>Get Started Now</strong><br />Available for Windows</p>

                  <p>
                      StratGen professional algorithmic trading platform dashboard displaying advanced backtesting results, quantitative analysis charts, and trading signals for automated strategy development
                  </p>

                  <h2>Powerful Features for Quantitative and Algo Traders</h2>
                  <p>
                      StratGen combines advanced algorithmic trading tools with no-code simplicity to help you develop robust strategies for quantitative research and trading.
                  </p>

                  <hr />

                  <h2>Table of Contents</h2>
                  <ol>
                      <li><a href="#launch">Launch StratGen</a></li>
                      <li><a href="#settings-window">Open the Settings Window</a></li>
                      <li><a href="#signals-tab">Signals Tab (Build Entry and Exit Rules)</a></li>
                      <li><a href="#strategy-settings">Strategy Settings (Risk, Exits, OOS and Walk-Forward)</a></li>
                      <li><a href="#walk-forward">Walk-Forward and Realism Settings (Slippage, Commissions)</a></li>
                      <li><a href="#import-data">Import Data (Symbols and Point Values)</a></li>
                      <li><a href="#run-sim">Run a Simulation</a></li>
                      <li><a href="#results-list">Strategy Results List</a></li>
                      <li><a href="#dashboard">Backtest Dashboard (Equity Curve, Trades, Metrics)</a></li>
                      <li><a href="#generated-code">Generated Code (NinjaTrader Example)</a></li>
                  </ol>

                  <hr />

                  <h2 id="launch">1) Launch StratGen</h2>
                  <p>
                      When you open StratGen, you will see a loading screen while the app starts.
                  </p>

                  <figure>
                      <img src="images/01-opening-stratgen.png" alt="Opening StratGen loading screen showing version v0.9.93" loading="lazy" />
                      <figcaption>
                          StratGen loading screen. Wait until it finishes loading.
                      </figcaption>
                  </figure>

                  <p>
                      What to do:
                  </p>
                  <ol>
                      <li>Double-click StratGen to open it.</li>
                      <li>Wait until the loading bar finishes.</li>
                      <li>When loading completes, the main app windows will open.</li>
                  </ol>

                  <hr />

                  <h2 id="settings-window">2) Open the Settings Window</h2>
                  <p>
                      Most setup happens inside the <strong>Settings</strong> window. This window has tabs on the left side.
                      You click a tab to configure that part of StratGen.
                  </p>

                  <p>
                      Tabs you will see on the left:
                  </p>
                  <ul>
                      <li><strong>Signals</strong>: pick your entry and exit rules.</li>
                      <li><strong>Settings</strong>: starting cash, exits, out-of-sample split, walk-forward, slippage, commissions, goals.</li>
                      <li><strong>Import Data</strong>: choose symbols and define point value, margin, and where data files are.</li>
                      <li><strong>Portfolio</strong>, <strong>General</strong>, <strong>Templates</strong>, <strong>Custom Signals</strong>, <strong>Sounds</strong>: additional features you can configure later.</li>
                  </ul>

                  <hr />

                  <h2 id="signals-tab">3) Signals Tab (Build Entry and Exit Rules)</h2>
                  <p>
                      The <strong>Signals</strong> tab is where you choose trading rules. These rules become your strategy logic.
                      If you do nothing here, StratGen has nothing to trade.
                  </p>

                  <figure>
                      <img src="images/02-signals-tab-empty.png" alt="Settings window on Signals tab showing signal list and entry/exit checkboxes" loading="lazy" />
                      <figcaption>
                          Signals tab. Each row is a signal. You check Entry and or Exit to use it.
                      </figcaption>
                  </figure>

                  <h3>3.1 Choose direction (Long or Short)</h3>
                  <ol>
                      <li>At the top-left, find the direction dropdown (example shows <strong>Long</strong>).</li>
                      <li>Pick <strong>Long</strong> if you want buy-then-sell strategies.</li>
                      <li>Pick <strong>Short</strong> if you want sell-then-buy-back strategies (if supported by your market and broker).</li>
                  </ol>

                  <h3>3.2 Choose symbols (what market you are testing)</h3>
                  <ol>
                      <li>Click <strong>Choose symbols</strong>.</li>
                      <li>Select the markets you want (example later shows NQ).</li>
                      <li>Close the symbol picker when done.</li>
                  </ol>

                  <h3>3.3 Set date range</h3>
                  <ol>
                      <li>On the right side, set <strong>Start</strong> date.</li>
                      <li>Set <strong>End</strong> date.</li>
                      <li>This controls how much historical data is used for the test.</li>
                  </ol>

                  <h3>3.4 Understand P1 and P2 (parameters)</h3>
                  <p>
                      Many signals have parameters like <strong>P1</strong> or <strong>P2</strong>.
                      These are numbers StratGen can test. Example: a moving average length.
                  </p>
                  <p>
                      P1 and P2 fields usually let you set:
                  </p>
                  <ul>
                      <li><strong>Min</strong>: smallest value to test</li>
                      <li><strong>Max</strong>: largest value to test</li>
                      <li><strong>Step</strong>: how much to increase each test</li>
                  </ul>

                  <h3>3.5 Select Entry and Exit signals</h3>
                  <p>
                      Each signal row has two checkboxes:
                  </p>
                  <ul>
                      <li><strong>Entry</strong>: this rule can be used to enter a trade.</li>
                      <li><strong>Exit</strong>: this rule can be used to exit a trade.</li>
                  </ul>

                  <figure>
                      <img src="images/03-signals-selected.png" alt="Signals tab with several Bollinger Band signals checked for Entry and Exit" loading="lazy" />
                      <figcaption>
                          Example: several Bollinger Band signals are selected for Entry and Exit.
                      </figcaption>
                  </figure>

                  <p>
                      Buttons at the bottom:
                  </p>
                  <ul>
                      <li><strong>Clear</strong>: unchecks everything.</li>
                      <li><strong>RandomEntry</strong>: picks random entry rules (useful for exploration).</li>
                      <li><strong>RandomExit</strong>: picks random exit rules.</li>
                      <li><strong>Run</strong>: starts the simulation.</li>
                  </ul>

                  <p>
                      Beginner advice:
                  </p>
                  <ul>
                      <li>Start with only 1 to 3 Entry rules and 1 to 2 Exit rules.</li>
                      <li>If you check too many rules, you may overfit or create chaotic behavior.</li>
                  </ul>

                  <hr />

                  <h2 id="strategy-settings">4) Strategy Settings (Risk, Exits, OOS and Walk-Forward)</h2>
                  <p>
                      Click the <strong>Settings</strong> tab on the left (not the window title).
                      This is where you control money, exits, and testing methods like out-of-sample and walk-forward.
                  </p>

                  <figure>
                      <img src="images/04-settings-top.png" alt="Settings tab showing Starting Cash, profit target, stop loss, trail stop, time exits, number of rules, and out of sample percent" loading="lazy" />
                      <figcaption>
                          Settings tab (top portion): starting cash, exits, number of rules, and out-of-sample split.
                      </figcaption>
                  </figure>

                  <h3>4.1 Starting Cash</h3>
                  <ol>
                      <li>Find <strong>Starting Cash $</strong>.</li>
                      <li>Enter your account starting size (example shows 100000).</li>
                      <li>This changes position sizing and results.</li>
                  </ol>

                  <h3>4.2 Exit controls (basic)</h3>
                  <p>
                      These fields are optional. If you leave them at 0, they may be disabled.
                  </p>
                  <ul>
                      <li><strong>Profit Target</strong>: exit when profit reaches a target.</li>
                      <li><strong>Stop Loss</strong>: exit when loss reaches a limit.</li>
                      <li><strong>Trail Stop</strong>: stop that moves with profits.</li>
                      <li><strong>Exit after n bars</strong>: force exit after a time limit.</li>
                      <li><strong>Exit after n bars in profit</strong>: exit after the trade has been profitable for a certain number of bars.</li>
                  </ul>

                  <h3>4.3 Number of Entry/Exit rules</h3>
                  <p>
                      <strong># Of Entry/Exit Rules</strong> controls how many rules StratGen uses at once.
                  </p>
                  <p>
                      Beginner setting: keep this at <strong>1</strong> until you understand how combined logic behaves.
                  </p>

                  <h3>4.4 Out-of-Sample (OOS) percent</h3>
                  <p>
                      <strong>Out Of Sample %</strong> is one of the most important settings.
                  </p>
                  <ul>
                      <li>If OOS is 50%, StratGen tests on the first half (in-sample) and validates on the second half (out-of-sample).</li>
                      <li>This helps reduce overfitting. Good strategies should work in OOS too.</li>
                  </ul>

                  <hr />

                  <h2 id="walk-forward">5) Walk-Forward and Realism Settings (Slippage, Commissions)</h2>
                  <p>
                      Scroll down in the <strong>Settings</strong> tab to find Walk-Forward configuration and realism settings.
                  </p>

                  <figure>
                      <img src="images/05-settings-walkforward.png" alt="Settings tab showing walk-forward dates, in-sample and out-of-sample length, slippage, commissions, exit on session close, and goals" loading="lazy" />
                      <figcaption>
                          Settings tab (lower portion): walk-forward, slippage, commissions, and goal filters.
                      </figcaption>
                  </figure>

                  <h3>5.1 Walk-Forward configuration</h3>
                  <p>
                      Walk-forward means the system repeatedly trains on one period and tests on the next period.
                      This is stricter than a simple 50/50 split.
                  </p>
                  <ol>
                      <li>Set <strong>Start Date</strong> and <strong>End Date</strong> for the walk-forward run.</li>
                      <li>Set <strong>In-Sample Length (days)</strong> (example: 365).</li>
                      <li>Set <strong>Out-of-Sample Length (days)</strong> (example: 365).</li>
                  </ol>

                  <h3>5.2 Slippage and commissions</h3>
                  <p>
                      These settings make results more realistic.
                  </p>
                  <ul>
                      <li><strong>Slippage %</strong>: a small penalty for worse fills than ideal.</li>
                      <li><strong>Commissions $ Per Side</strong>: cost per entry and per exit.</li>
                  </ul>
                  <p>
                      Beginner advice: always set commissions. If you skip costs, results can look fake.
                  </p>

                  <h3>5.3 Exit on session close</h3>
                  <p>
                      If your market has a daily session, you may want to exit before close.
                  </p>
                  <ol>
                      <li>Check <strong>Exit On Session Close</strong> if you do not want overnight risk.</li>
                      <li>Set <strong>Session Close Time</strong> if needed.</li>
                  </ol>

                  <h3>5.4 Goal filters (quality gates)</h3>
                  <p>
                      These help you automatically reject weak strategies.
                  </p>
                  <ul>
                      <li><strong>Ret/DD Goal</strong>: targets return divided by drawdown.</li>
                      <li><strong>Sharpe Goal</strong>: targets risk-adjusted performance.</li>
                  </ul>

                  <hr />

                  <h2 id="import-data">6) Import Data (Symbols and Point Values)</h2>
                  <p>
                      Click <strong>Import Data</strong> on the left. This is where you define what you trade and how contracts are valued.
                  </p>

                  <figure>
                      <img src="images/06-import-data.png" alt="Import Data tab showing symbols like NQ, ES, CL, stocks and crypto with point value, margin, security type, and file paths" loading="lazy" />
                      <figcaption>
                          Import Data: symbol list with point value, margin, security type, and file paths.
                      </figcaption>
                  </figure>

                  <p>
                      What the columns mean (simple):
                  </p>
                  <ul>
                      <li><strong>Symbol</strong>: the market name (example: NQ, ES, CL, SPY, BTCUSD).</li>
                      <li><strong>PointValue</strong>: how much 1 point is worth (important for futures).</li>
                      <li><strong>InitialMargin</strong>: margin required per contract (for futures).</li>
                      <li><strong>Security Type</strong>: Future, Stock, Crypto.</li>
                      <li><strong>FilePath</strong>: where the historical data file lives on your PC.</li>
                  </ul>

                  <p>
                      Buttons:
                  </p>
                  <ul>
                      <li><strong>Add</strong>: add a new symbol row.</li>
                      <li><strong>Remove</strong>: remove the selected symbol.</li>
                  </ul>

                  <p>
                      Beginner warning:
                  </p>
                  <ul>
                      <li>If PointValue or Margin is wrong, your performance numbers can be wrong.</li>
                      <li>If FilePath is wrong, the symbol will not load data.</li>
                  </ul>

                  <hr />

                  <h2 id="run-sim">7) Run a Simulation</h2>
                  <p>
                      When you click <strong>Run</strong> on the Signals tab, StratGen starts testing strategies.
                      You may see a small progress window.
                  </p>

                  <figure>
                      <img src="images/07-simulating.png" alt="Simulating progress popup showing Simulating 0/27 and a Stop button" loading="lazy" />
                      <figcaption>
                          Simulation progress window. You can wait, or click Stop if you need to cancel.
                      </figcaption>
                  </figure>

                  <ol>
                      <li>Click <strong>Run</strong>.</li>
                      <li>Wait for the progress counter to complete.</li>
                      <li>When finished, StratGen shows a results list.</li>
                  </ol>

                  <hr />

                  <h2 id="results-list">8) Strategy Results List</h2>
                  <p>
                      After a run, StratGen shows a list of strategies it tested.
                      This list helps you quickly find the best candidates.
                  </p>

                  <figure>
                      <img src="images/08-long-strategies.png" alt="Long Strategies window with tabs In-Sample, Out-Of-Sample, Combined and a table of strategies with Net PnL, MaxDD, Ret/DD" loading="lazy" />
                      <figcaption>
                          Results list: compare strategies by Net PnL, MaxDD (drawdown), and Ret/DD.
                      </figcaption>
                  </figure>

                  <h3>8.1 Tabs: In-Sample, Out-Of-Sample, Combined</h3>
                  <ul>
                      <li><strong>In-Sample</strong>: performance during the training portion.</li>
                      <li><strong>Out-Of-Sample</strong>: performance during the validation portion. This is the critical test.</li>
                      <li><strong>Combined</strong>: full period combined view.</li>
                  </ul>

                  <h3>8.2 Columns (simple)</h3>
                  <ul>
                      <li><strong>Entry Params</strong> and <strong>Exit Params</strong>: what rules and parameter values were used.</li>
                      <li><strong>Net PnL</strong>: total profit after costs (depending on your settings).</li>
                      <li><strong>MaxDD</strong>: worst drawdown. Lower magnitude is better.</li>
                      <li><strong>Ret/DD</strong>: return relative to drawdown. Higher is usually better.</li>
                  </ul>

                  <h3>8.3 Buttons on the right</h3>
                  <ul>
                      <li><strong>Chart</strong>: opens the full performance dashboard for the selected strategy.</li>
                      <li><strong>NinjaTrader Code</strong>: generates NinjaTrader strategy code.</li>
                      <li><strong>TradeStation Code</strong>: generates TradeStation code.</li>
                      <li><strong>Python Code</strong>: generates Python code.</li>
                      <li><strong>Monte Carlo</strong>: runs robustness simulation to see stability under randomness.</li>
                      <li><strong>Add To Portfolio</strong>: save strategy into a portfolio set.</li>
                      <li><strong>Walk-Forward</strong>: run walk-forward testing for deeper validation.</li>
                  </ul>

                  <p>
                      Beginner workflow:
                  </p>
                  <ol>
                      <li>Click <strong>Out-Of-Sample</strong> tab.</li>
                      <li>Sort by <strong>Ret/DD</strong> or <strong>MaxDD</strong>.</li>
                      <li>Pick a strategy that still looks good in OOS.</li>
                      <li>Click <strong>Chart</strong> to inspect it.</li>
                      <li>Click <strong>Monte Carlo</strong> for robustness before exporting code.</li>
                  </ol>

                  <hr />

                  <h2 id="dashboard">9) Backtest Dashboard (Equity Curve, Trades, Metrics)</h2>
                  <p>
                      The dashboard shows the detailed backtest for one strategy.
                      This is where you decide if a strategy is real, or just lucky.
                  </p>

                  <figure>
                      <img src="images/09-dashboard.png" alt="StratGen dashboard showing strategy equity curve, metrics on left, log messages, and orders/trades grid at bottom" loading="lazy" />
                      <figcaption>
                          Backtest dashboard: equity curve at top, stats on left, logs in the middle, trades at bottom.
                      </figcaption>
                  </figure>

                  <h3>9.1 Left panel (key numbers)</h3>
                  <p>
                      The left panel lists summary stats. These are the ones beginners should care about first:
                  </p>
                  <ul>
                      <li><strong>Net Profit</strong>: total dollars made.</li>
                      <li><strong>Return</strong>: percent return (depends on starting cash).</li>
                      <li><strong>Drawdown</strong>: how deep the worst losing period was.</li>
                      <li><strong>Win Rate</strong>: percent of winning trades.</li>
                      <li><strong>Profit/Loss Ratio</strong>: average win size compared to average loss size.</li>
                  </ul>

                  <h3>9.2 Equity curve chart (top)</h3>
                  <ul>
                      <li>The rising line means the strategy made money over time.</li>
                      <li>Deep drops mean drawdowns. Big drawdowns can be hard to trade live.</li>
                      <li>Use the time buttons (1m, 5m, 1h, 1d, etc.) if available to change view granularity.</li>
                  </ul>

                  <h3>9.3 Trades and logs (bottom)</h3>
                  <ul>
                      <li><strong>Logs</strong> show what the system did and why.</li>
                      <li><strong>Orders/Trades grid</strong> shows individual fills, prices, and timestamps.</li>
                      <li>If something looks wrong, start here to debug.</li>
                  </ul>

                  <hr />

                  <h2 id="generated-code">10) Generated Code (NinjaTrader Example)</h2>
                  <p>
                      When you click a code export button (example: <strong>NinjaTrader Code</strong>), StratGen creates a strategy script for that platform.
                      You will see a code window.
                  </p>

                  <figure>
                      <img src="images/10-generated-code.png" alt="Generated Code window showing NinjaTrader strategy code for a strategy named SwimmingFalcon" loading="lazy" />
                      <figcaption>
                          Generated code example: NinjaTrader strategy for “SwimmingFalcon”.
                      </figcaption>
                  </figure>

                  <h3>10.1 What to do with this code (simple)</h3>
                  <ol>
                      <li>Click inside the code window.</li>
                      <li>Select all (Ctrl + A).</li>
                      <li>Copy (Ctrl + C).</li>
                      <li>Open NinjaTrader and paste it into a new strategy file.</li>
                      <li>Compile in NinjaTrader.</li>
                  </ol>

                  <h3>10.2 Beginner warning</h3>
                  <ul>
                      <li>Backtests are not live trading. Always test small first.</li>
                      <li>Use realistic slippage and commissions before exporting.</li>
                      <li>Prefer strategies that survive Out-Of-Sample and Monte Carlo tests.</li>
                  </ul>

                  <hr />

                  <h2>Next (when you send the next batch of screenshots)</h2>
                  <p>
                      In the next batch, the most helpful screens are:
                  </p>
                  <ul>
                      <li>Monte Carlo results window</li>
                      <li>Walk-forward results window</li>
                      <li>Portfolio window (if you use multi-strategy portfolios)</li>
                      <li>Templates and Custom Signals (how users add their own logic)</li>
                  </ul>

                  <p><a href="#top">Back to top</a></p>
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