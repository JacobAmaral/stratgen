import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en" className="dark">
      <Head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#181a20" />
        <link rel="icon" href="/stratgen_manual_images/newlogo2025.ico" />
        <link rel="apple-touch-icon" href="/stratgen_manual_images/newlogo2025.ico" />
      </Head>
      <body>
        <Script src="https://assets.co.dev/files/codevscript.js" strategy="afterInteractive" />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}