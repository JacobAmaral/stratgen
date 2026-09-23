import type { AppProps } from 'next/app'
import '../styles/globals.css';
import { Toaster } from "@/components/ui/toaster"
import { useEffect, useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Ensure dark theme class is present
    if (!document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Component {...pageProps} />
      <Toaster />
    </div>
  );
}