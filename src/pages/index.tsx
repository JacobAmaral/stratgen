import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
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

// Pricing tiers
const pricingTiers = [
  {
    name: "Basic",
    price: "$49",
    description: "Perfect for beginners and casual traders",
    features: [
      "10 technical indicators",
      "Basic backtesting",
      "Daily signal alerts",
      "1 market data source",
      "Email support"
    ],
    cta: "Download Basic",
    popular: false
  },
  {
    name: "Pro",
    price: "$99",
    description: "For serious traders who need more power",
    features: [
      "30+ technical indicators",
      "Advanced backtesting",
      "Real-time signal alerts",
      "3 market data sources",
      "Strategy optimization",
      "Priority email support",
      "Trading journal"
    ],
    cta: "Download Pro",
    popular: true
  },
  {
    name: "Enterprise",
    price: "$199",
    description: "For professional traders and institutions",
    features: [
      "50+ technical indicators",
      "Institutional-grade backtesting",
      "Custom indicator development",
      "All market data sources",
      "API access",
      "Strategy automation",
      "24/7 priority support",
      "Multi-user license"
    ],
    cta: "Contact Sales",
    popular: false
  }
];

// Features list
const features = [
  {
    icon: <LineChartIcon className="h-10 w-10 text-primary" />,
    title: "Advanced Technical Analysis",
    description: "Access over 50 technical indicators including Moving Averages, RSI, MACD, Bollinger Bands, and more to identify powerful trading opportunities."
  },
  {
    icon: <BellIcon className="h-10 w-10 text-primary" />,
    title: "Real-time Signal Alerts",
    description: "Never miss a trading opportunity with customizable alerts that notify you when your strategies detect potential entry and exit points."
  },
  {
    icon: <BarChartIcon className="h-10 w-10 text-primary" />,
    title: "Comprehensive Backtesting",
    description: "Test your trading strategies against historical data to validate performance before risking real capital."
  },
  {
    icon: <ZapIcon className="h-10 w-10 text-primary" />,
    title: "Strategy Optimization",
    description: "Fine-tune your trading strategies with our optimization engine that helps identify the most profitable parameters."
  },
  {
    icon: <SettingsIcon className="h-10 w-10 text-primary" />,
    title: "Custom Indicator Builder",
    description: "Create your own proprietary indicators with our intuitive visual builder - no coding required."
  },
  {
    icon: <DownloadIcon className="h-10 w-10 text-primary" />,
    title: "Multi-Exchange Support",
    description: "Connect to all major exchanges and trade multiple asset classes including stocks, forex, crypto, and futures."
  }
];

export default function Home() {
  const [selectedPricingTier, setSelectedPricingTier] = useState<string>("monthly");
  
  return (
    <>
      <Head>
        <title>StratGen - Professional Trading Signal Generator</title>
        <meta name="description" content="StratGen is a powerful desktop application for generating trading signals and backtesting strategies across multiple markets." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="bg-background min-h-screen flex flex-col">
        <Header />
        
        {/* Hero Section */}
        <section className="relative py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-primary/10 to-background">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Badge variant="outline" className="px-3 py-1 text-sm bg-primary/10 border-primary/20 text-primary">
                  Version 2.5 Now Available
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                  Generate Profitable Trading Signals with <span className="text-primary">StratGen</span>
                </h1>
                <p className="text-xl text-muted-foreground">
                  The professional-grade desktop application for traders who demand precision, reliability, and performance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="font-medium">
                    Download Free Trial <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="font-medium">
                    Watch Demo
                  </Button>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckIcon className="h-4 w-4 text-primary" /> Available for Windows, macOS, and Linux
                </div>
              </div>
              
              <div className="rounded-lg overflow-hidden border border-border/40 shadow-xl bg-card">
                {/* Demo Chart */}
                <div className="h-[400px] w-full p-4">
                  <ChartContainer config={chartConfig}>
                    <LineChart data={mockPriceData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis 
                        dataKey="date" 
                        tick={{ fontSize: 12 }}
                        tickFormatter={(value) => {
                          const date = new Date(value);
                          return date.getDate() + '/' + (date.getMonth() + 1);
                        }}
                      />
                      <YAxis 
                        domain={['auto', 'auto']}
                        tick={{ fontSize: 12 }}
                      />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <ChartLegend content={<ChartLegendContent />} />
                      
                      {/* Price Line */}
                      <Line 
                        type="monotone" 
                        dataKey="price" 
                        stroke="#3b82f6" 
                        dot={false}
                        strokeWidth={2}
                      />
                      
                      {/* SMA Lines */}
                      <Line 
                        type="monotone" 
                        dataKey="sma20" 
                        stroke="#4ade80" 
                        dot={false}
                        strokeWidth={1.5}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="sma50" 
                        stroke="#f97316" 
                        dot={false}
                        strokeWidth={1.5}
                      />
                      
                      {/* Buy Signals */}
                      <Scatter
                        data={buySignals}
                        dataKey="price"
                        fill="#22c55e"
                        shape={(props) => {
                          const { cx, cy } = props;
                          return (
                            <svg x={cx - 8} y={cy - 8} width={16} height={16} viewBox="0 0 16 16">
                              <circle cx="8" cy="8" r="6" fill="#22c55e" stroke="#fff" strokeWidth="2" />
                              <path d="M5 8L7 10L11 6" stroke="#fff" strokeWidth="2" fill="none" />
                            </svg>
                          );
                        }}
                      />
                      
                      {/* Sell Signals */}
                      <Scatter
                        data={sellSignals}
                        dataKey="price"
                        fill="#ef4444"
                        shape={(props) => {
                          const { cx, cy } = props;
                          return (
                            <svg x={cx - 8} y={cy - 8} width={16} height={16} viewBox="0 0 16 16">
                              <circle cx="8" cy="8" r="6" fill="#ef4444" stroke="#fff" strokeWidth="2" />
                              <path d="M5 8L11 8" stroke="#fff" strokeWidth="2" fill="none" />
                            </svg>
                          );
                        }}
                      />
                    </LineChart>
                  </ChartContainer>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-20 px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features for Serious Traders</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                StratGen combines advanced technical analysis with intuitive design to help you make better trading decisions.
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
        <section className="py-20 px-4 md:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">See StratGen in Action</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Explore the intuitive interface designed for both novice and professional traders.
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
                  <div className="w-full h-full bg-card rounded-md border border-border/40 shadow-md flex items-center justify-center">
                    <div className="text-center p-4">
                      <LineChartIcon className="h-16 w-16 text-primary/40 mx-auto mb-4" />
                      <p className="text-muted-foreground">Dashboard Screenshot</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Screenshot 2 - Strategy Builder */}
              <div className="rounded-lg overflow-hidden border border-border/40 shadow-lg bg-card">
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Visual Strategy Builder</h3>
                  <p className="text-muted-foreground mb-4">Create complex strategies with our drag-and-drop interface.</p>
                </div>
                <div className="bg-gradient-to-br from-primary/5 to-primary/20 p-8 flex items-center justify-center h-[300px]">
                  <div className="w-full h-full bg-card rounded-md border border-border/40 shadow-md flex items-center justify-center">
                    <div className="text-center p-4">
                      <SettingsIcon className="h-16 w-16 text-primary/40 mx-auto mb-4" />
                      <p className="text-muted-foreground">Strategy Builder Screenshot</p>
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
                  <div className="w-full h-full bg-card rounded-md border border-border/40 shadow-md flex items-center justify-center">
                    <div className="text-center p-4">
                      <BarChartIcon className="h-16 w-16 text-primary/40 mx-auto mb-4" />
                      <p className="text-muted-foreground">Backtesting Screenshot</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Screenshot 4 - Alerts */}
              <div className="rounded-lg overflow-hidden border border-border/40 shadow-lg bg-card">
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Real-time Alerts</h3>
                  <p className="text-muted-foreground mb-4">Get notified instantly when your strategies detect trading opportunities.</p>
                </div>
                <div className="bg-gradient-to-br from-primary/5 to-primary/20 p-8 flex items-center justify-center h-[300px]">
                  <div className="w-full h-full bg-card rounded-md border border-border/40 shadow-md flex items-center justify-center">
                    <div className="text-center p-4">
                      <BellIcon className="h-16 w-16 text-primary/40 mx-auto mb-4" />
                      <p className="text-muted-foreground">Alerts Screenshot</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Pricing Section */}
        <section className="py-20 px-4 md:px-6 lg:px-8" id="pricing">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Plan</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Select the perfect plan for your trading needs. All plans include a 14-day free trial.
              </p>
              
              <div className="flex justify-center mt-8">
                <Tabs defaultValue="monthly" className="w-[300px]" onValueChange={setSelectedPricingTier}>
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="monthly">Monthly</TabsTrigger>
                    <TabsTrigger value="annual">Annual (20% off)</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <Card key={index} className={`border ${tier.popular ? 'border-primary shadow-lg' : 'border-border/40'} relative`}>
                  {tier.popular && (
                    <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                      <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle>{tier.name}</CardTitle>
                    <CardDescription>{tier.description}</CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">{tier.price}</span>
                      {selectedPricingTier === "monthly" ? (
                        <span className="text-muted-foreground ml-2">/month</span>
                      ) : (
                        <span className="text-muted-foreground ml-2">/year</span>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <CheckIcon className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      className={`w-full ${tier.popular ? 'bg-primary hover:bg-primary/90' : ''}`}
                      variant={tier.popular ? "default" : "outline"}
                    >
                      {tier.cta}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-muted-foreground">
                Need a custom solution? <a href="#" className="text-primary hover:underline">Contact our sales team</a>
              </p>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-20 px-4 md:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Join thousands of traders who have improved their trading results with StratGen.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border border-border/40">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                  <p className="mb-4 italic">"StratGen has completely transformed my trading. The backtesting capabilities alone have saved me thousands in potential losses."</p>
                  <div>
                    <p className="font-semibold">Michael T.</p>
                    <p className="text-sm text-muted-foreground">Day Trader, 3 years with StratGen</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border border-border/40">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                  <p className="mb-4 italic">"The custom indicator builder is incredible. I've created strategies that would be impossible with other software. Worth every penny."</p>
                  <div>
                    <p className="font-semibold">Sarah K.</p>
                    <p className="text-sm text-muted-foreground">Swing Trader, 2 years with StratGen</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border border-border/40">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                  <p className="mb-4 italic">"As a fund manager, I need reliable tools. StratGen's institutional-grade features and support have exceeded my expectations."</p>
                  <div>
                    <p className="font-semibold">David R.</p>
                    <p className="text-sm text-muted-foreground">Hedge Fund Manager, 4 years with StratGen</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 px-4 md:px-6 lg:px-8 bg-primary/10">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Trading?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Join thousands of successful traders who use StratGen to identify profitable opportunities and manage risk effectively.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="font-medium">
                Download Free Trial <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="font-medium">
                Schedule Demo
              </Button>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              No credit card required. 14-day free trial with all features.
            </p>
          </div>
        </section>
        
        {/* Footer */}
        <footer className="py-12 px-4 md:px-6 lg:px-8 border-t">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-bold text-lg mb-4">StratGen</h3>
                <p className="text-muted-foreground">
                  Professional trading signal generator and backtesting platform.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-lg mb-4">Product</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-muted-foreground hover:text-foreground">Features</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-foreground">Pricing</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-foreground">Download</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-foreground">Updates</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-bold text-lg mb-4">Resources</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-muted-foreground hover:text-foreground">Documentation</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-foreground">Tutorials</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-foreground">Blog</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-foreground">Community</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-bold text-lg mb-4">Company</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-muted-foreground hover:text-foreground">About</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-foreground">Contact</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-foreground">Careers</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-foreground">Legal</a></li>
                </ul>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-muted-foreground">
                © 2025 StratGen. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  <span className="sr-only">GitHub</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
