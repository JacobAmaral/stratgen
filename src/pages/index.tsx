import React, { useState, useEffect } from "react";
import Head from "next/head";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
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

// Types for our application
type PricePoint = {
  date: string;
  price: number;
  sma20?: number;
  sma50?: number;
  rsi?: number;
  signal?: 'buy' | 'sell' | null;
};

type TradingPair = 'BTC/USD' | 'ETH/USD' | 'XRP/USD' | 'ADA/USD' | 'SOL/USD';
type Indicator = 'SMA' | 'RSI' | 'MACD';
type TimeFrame = '1h' | '4h' | '1d' | '1w';

export default function Home() {
  // State for trading parameters
  const [tradingPair, setTradingPair] = useState<TradingPair>('BTC/USD');
  const [timeFrame, setTimeFrame] = useState<TimeFrame>('1d');
  const [indicators, setIndicators] = useState<{
    sma: boolean;
    rsi: boolean;
  }>({
    sma: true,
    rsi: false,
  });
  
  // State for indicator parameters
  const [smaShortPeriod, setSmaShortPeriod] = useState<number>(20);
  const [smaLongPeriod, setSmaLongPeriod] = useState<number>(50);
  const [rsiPeriod, setRsiPeriod] = useState<number>(14);
  const [rsiOverbought, setRsiOverbought] = useState<number>(70);
  const [rsiOversold, setRsiOversold] = useState<number>(30);
  
  // State for price data and signals
  const [priceData, setPriceData] = useState<PricePoint[]>([]);
  const [signals, setSignals] = useState<{
    buy: PricePoint[];
    sell: PricePoint[];
  }>({
    buy: [],
    sell: [],
  });
  
  // Generate mock price data
  const generateMockData = () => {
    const data: PricePoint[] = [];
    const startPrice = tradingPair === 'BTC/USD' ? 50000 : 
                       tradingPair === 'ETH/USD' ? 3000 :
                       tradingPair === 'XRP/USD' ? 0.5 :
                       tradingPair === 'ADA/USD' ? 1.2 : 100;
    
    const volatility = tradingPair === 'BTC/USD' ? 0.02 : 
                       tradingPair === 'ETH/USD' ? 0.025 :
                       tradingPair === 'XRP/USD' ? 0.03 :
                       tradingPair === 'ADA/USD' ? 0.035 : 0.04;
    
    let currentPrice = startPrice;
    const now = new Date();
    
    // Generate 100 data points
    for (let i = 0; i < 100; i++) {
      const date = new Date(now);
      
      // Adjust date based on timeframe
      if (timeFrame === '1h') {
        date.setHours(date.getHours() - (100 - i));
      } else if (timeFrame === '4h') {
        date.setHours(date.getHours() - (100 - i) * 4);
      } else if (timeFrame === '1d') {
        date.setDate(date.getDate() - (100 - i));
      } else if (timeFrame === '1w') {
        date.setDate(date.getDate() - (100 - i) * 7);
      }
      
      // Random price movement with trend
      const trend = Math.sin(i / 10) * 0.01;
      const change = (Math.random() - 0.5) * volatility + trend;
      currentPrice = currentPrice * (1 + change);
      
      if (currentPrice < 0) currentPrice = 0.01; // Prevent negative prices
      
      data.push({
        date: date.toISOString().split('T')[0],
        price: parseFloat(currentPrice.toFixed(2)),
        signal: null
      });
    }
    
    return data;
  };
  
  // Calculate Simple Moving Average
  const calculateSMA = (data: PricePoint[], period: number): number[] => {
    const sma: number[] = [];
    
    for (let i = 0; i < data.length; i++) {
      if (i < period - 1) {
        sma.push(NaN); // Not enough data for SMA calculation
      } else {
        let sum = 0;
        for (let j = 0; j < period; j++) {
          sum += data[i - j].price;
        }
        sma.push(parseFloat((sum / period).toFixed(2)));
      }
    }
    
    return sma;
  };
  
  // Calculate Relative Strength Index (RSI)
  const calculateRSI = (data: PricePoint[], period: number): number[] => {
    const rsi: number[] = [];
    const gains: number[] = [];
    const losses: number[] = [];
    
    // Calculate price changes
    for (let i = 1; i < data.length; i++) {
      const change = data[i].price - data[i - 1].price;
      gains.push(change > 0 ? change : 0);
      losses.push(change < 0 ? Math.abs(change) : 0);
      
      if (i < period) {
        rsi.push(NaN);
        continue;
      }
      
      // Calculate average gain and loss over the period
      let avgGain = 0;
      let avgLoss = 0;
      
      for (let j = 0; j < period; j++) {
        avgGain += gains[i - j - 1];
        avgLoss += losses[i - j - 1];
      }
      
      avgGain /= period;
      avgLoss /= period;
      
      // Calculate RSI
      if (avgLoss === 0) {
        rsi.push(100);
      } else {
        const rs = avgGain / avgLoss;
        rsi.push(parseFloat((100 - (100 / (1 + rs))).toFixed(2)));
      }
    }
    
    return rsi;
  };
  
  // Generate trading signals
  const generateSignals = (data: PricePoint[]): void => {
    const buySignals: PricePoint[] = [];
    const sellSignals: PricePoint[] = [];
    
    for (let i = 1; i < data.length; i++) {
      const current = data[i];
      const previous = data[i - 1];
      
      // SMA crossover strategy
      if (indicators.sma && current.sma20 && current.sma50 && previous.sma20 && previous.sma50) {
        // Buy signal: Short SMA crosses above Long SMA
        if (previous.sma20 <= previous.sma50 && current.sma20 > current.sma50) {
          buySignals.push(current);
          current.signal = 'buy';
        }
        
        // Sell signal: Short SMA crosses below Long SMA
        if (previous.sma20 >= previous.sma50 && current.sma20 < current.sma50) {
          sellSignals.push(current);
          current.signal = 'sell';
        }
      }
      
      // RSI strategy
      if (indicators.rsi && current.rsi !== undefined && previous.rsi !== undefined) {
        // Buy signal: RSI crosses above oversold level
        if (previous.rsi <= rsiOversold && current.rsi > rsiOversold) {
          buySignals.push(current);
          current.signal = 'buy';
        }
        
        // Sell signal: RSI crosses below overbought level
        if (previous.rsi >= rsiOverbought && current.rsi < rsiOverbought) {
          sellSignals.push(current);
          current.signal = 'sell';
        }
      }
    }
    
    setSignals({
      buy: buySignals,
      sell: sellSignals
    });
  };
  
  // Process data with indicators and signals
  const processData = (rawData: PricePoint[]) => {
    let processedData = [...rawData];
    
    // Calculate indicators
    if (indicators.sma) {
      const smaShort = calculateSMA(processedData, smaShortPeriod);
      const smaLong = calculateSMA(processedData, smaLongPeriod);
      
      processedData = processedData.map((point, index) => ({
        ...point,
        sma20: smaShort[index],
        sma50: smaLong[index]
      }));
    }
    
    if (indicators.rsi) {
      const rsiValues = calculateRSI(processedData, rsiPeriod);
      
      processedData = processedData.map((point, index) => ({
        ...point,
        rsi: rsiValues[index]
      }));
    }
    
    setPriceData(processedData);
    generateSignals(processedData);
  };
  
  // Generate data and signals
  const handleGenerateSignals = () => {
    const mockData = generateMockData();
    processData(mockData);
  };
  
  // Initialize with default data
  useEffect(() => {
    handleGenerateSignals();
  }, []);
  
  // Chart configuration
  const chartConfig = {
    price: { label: "Price" },
    sma20: { label: "SMA (Short)", color: "#4ade80" },
    sma50: { label: "SMA (Long)", color: "#f97316" },
    rsi: { label: "RSI", color: "#8b5cf6" },
    buy: { label: "Buy Signal", color: "#22c55e" },
    sell: { label: "Sell Signal", color: "#ef4444" },
  };
  
  return (
    <>
      <Head>
        <title>Trading Signal Generator</title>
        <meta name="description" content="Automated Trading Signal Generator and Backtester" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-background min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex flex-col p-4 md:p-6 gap-6">
          <h1 className="text-3xl font-bold">Trading Signal Generator</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Trading Parameters */}
            <Card className="lg:col-span-1">
              <CardHeader>
                <CardTitle>Trading Parameters</CardTitle>
                <CardDescription>Configure your trading strategy</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="trading-pair">Trading Pair</Label>
                  <Select 
                    value={tradingPair} 
                    onValueChange={(value) => setTradingPair(value as TradingPair)}
                  >
                    <SelectTrigger id="trading-pair">
                      <SelectValue placeholder="Select trading pair" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="BTC/USD">BTC/USD</SelectItem>
                      <SelectItem value="ETH/USD">ETH/USD</SelectItem>
                      <SelectItem value="XRP/USD">XRP/USD</SelectItem>
                      <SelectItem value="ADA/USD">ADA/USD</SelectItem>
                      <SelectItem value="SOL/USD">SOL/USD</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="timeframe">Timeframe</Label>
                  <Select 
                    value={timeFrame} 
                    onValueChange={(value) => setTimeFrame(value as TimeFrame)}
                  >
                    <SelectTrigger id="timeframe">
                      <SelectValue placeholder="Select timeframe" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1h">1 Hour</SelectItem>
                      <SelectItem value="4h">4 Hours</SelectItem>
                      <SelectItem value="1d">1 Day</SelectItem>
                      <SelectItem value="1w">1 Week</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label>Indicators</Label>
                  <div className="flex items-center space-x-2">
                    <Switch 
                      id="sma" 
                      checked={indicators.sma}
                      onCheckedChange={(checked) => setIndicators({...indicators, sma: checked})}
                    />
                    <Label htmlFor="sma">Moving Averages (SMA)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch 
                      id="rsi" 
                      checked={indicators.rsi}
                      onCheckedChange={(checked) => setIndicators({...indicators, rsi: checked})}
                    />
                    <Label htmlFor="rsi">Relative Strength Index (RSI)</Label>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" onClick={handleGenerateSignals}>
                  Generate Signals
                </Button>
              </CardFooter>
            </Card>
            
            {/* Chart and Indicator Settings */}
            <Card className="lg:col-span-3">
              <Tabs defaultValue="chart">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>Trading Analysis</CardTitle>
                    <TabsList>
                      <TabsTrigger value="chart">Chart</TabsTrigger>
                      <TabsTrigger value="settings">Indicator Settings</TabsTrigger>
                    </TabsList>
                  </div>
                  <CardDescription>
                    View price data and trading signals
                  </CardDescription>
                </CardHeader>
                
                <TabsContent value="chart" className="space-y-4">
                  <CardContent className="p-0">
                    <div className="h-[400px] w-full">
                      <ChartContainer config={chartConfig}>
                        <LineChart data={priceData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis 
                            dataKey="date" 
                            tick={{ fontSize: 12 }}
                            tickFormatter={(value) => {
                              // Show fewer x-axis labels for clarity
                              const date = new Date(value);
                              return date.getDate() + '/' + (date.getMonth() + 1);
                            }}
                          />
                          <YAxis 
                            yAxisId="price"
                            domain={['auto', 'auto']}
                            tick={{ fontSize: 12 }}
                          />
                          {indicators.rsi && (
                            <YAxis 
                              yAxisId="rsi"
                              orientation="right"
                              domain={[0, 100]}
                              tick={{ fontSize: 12 }}
                            />
                          )}
                          <ChartTooltip
                            content={<ChartTooltipContent />}
                          />
                          <ChartLegend content={<ChartLegendContent />} />
                          
                          {/* Price Line */}
                          <Line 
                            type="monotone" 
                            dataKey="price" 
                            stroke="#3b82f6" 
                            yAxisId="price"
                            dot={false}
                            strokeWidth={2}
                          />
                          
                          {/* SMA Lines */}
                          {indicators.sma && (
                            <>
                              <Line 
                                type="monotone" 
                                dataKey="sma20" 
                                stroke="#4ade80" 
                                yAxisId="price"
                                dot={false}
                                strokeWidth={1.5}
                              />
                              <Line 
                                type="monotone" 
                                dataKey="sma50" 
                                stroke="#f97316" 
                                yAxisId="price"
                                dot={false}
                                strokeWidth={1.5}
                              />
                            </>
                          )}
                          
                          {/* RSI Line */}
                          {indicators.rsi && (
                            <>
                              <Line 
                                type="monotone" 
                                dataKey="rsi" 
                                stroke="#8b5cf6" 
                                yAxisId="rsi"
                                dot={false}
                                strokeWidth={1.5}
                              />
                              <ReferenceLine y={rsiOverbought} yAxisId="rsi" stroke="#ef4444" strokeDasharray="3 3" />
                              <ReferenceLine y={rsiOversold} yAxisId="rsi" stroke="#22c55e" strokeDasharray="3 3" />
                            </>
                          )}
                          
                          {/* Buy Signals */}
                          <Scatter
                            data={signals.buy}
                            dataKey="price"
                            fill="#22c55e"
                            yAxisId="price"
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
                            data={signals.sell}
                            dataKey="price"
                            fill="#ef4444"
                            yAxisId="price"
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
                  </CardContent>
                  
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h3 className="text-lg font-medium">Buy Signals</h3>
                        <p className="text-sm text-muted-foreground">
                          {signals.buy.length} signals generated
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium">Sell Signals</h3>
                        <p className="text-sm text-muted-foreground">
                          {signals.sell.length} signals generated
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </TabsContent>
                
                <TabsContent value="settings">
                  <CardContent className="space-y-6">
                    {/* SMA Settings */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Moving Average Settings</h3>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <Label htmlFor="sma-short">Short Period (SMA)</Label>
                          <span className="text-sm text-muted-foreground">{smaShortPeriod}</span>
                        </div>
                        <Slider
                          id="sma-short"
                          min={5}
                          max={50}
                          step={1}
                          value={[smaShortPeriod]}
                          onValueChange={(value) => setSmaShortPeriod(value[0])}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <Label htmlFor="sma-long">Long Period (SMA)</Label>
                          <span className="text-sm text-muted-foreground">{smaLongPeriod}</span>
                        </div>
                        <Slider
                          id="sma-long"
                          min={20}
                          max={200}
                          step={1}
                          value={[smaLongPeriod]}
                          onValueChange={(value) => setSmaLongPeriod(value[0])}
                        />
                      </div>
                    </div>
                    
                    {/* RSI Settings */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">RSI Settings</h3>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <Label htmlFor="rsi-period">RSI Period</Label>
                          <span className="text-sm text-muted-foreground">{rsiPeriod}</span>
                        </div>
                        <Slider
                          id="rsi-period"
                          min={2}
                          max={30}
                          step={1}
                          value={[rsiPeriod]}
                          onValueChange={(value) => setRsiPeriod(value[0])}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <Label htmlFor="rsi-overbought">Overbought Level</Label>
                          <span className="text-sm text-muted-foreground">{rsiOverbought}</span>
                        </div>
                        <Slider
                          id="rsi-overbought"
                          min={50}
                          max={90}
                          step={1}
                          value={[rsiOverbought]}
                          onValueChange={(value) => setRsiOverbought(value[0])}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <Label htmlFor="rsi-oversold">Oversold Level</Label>
                          <span className="text-sm text-muted-foreground">{rsiOversold}</span>
                        </div>
                        <Slider
                          id="rsi-oversold"
                          min={10}
                          max={50}
                          step={1}
                          value={[rsiOversold]}
                          onValueChange={(value) => setRsiOversold(value[0])}
                        />
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button onClick={handleGenerateSignals} className="w-full">
                      Apply Settings & Generate Signals
                    </Button>
                  </CardFooter>
                </TabsContent>
              </Tabs>
            </Card>
          </div>
        </main>
      </div>
    </>
  );
}
