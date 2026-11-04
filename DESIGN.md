---
name: StratGen
description: Precision dark quantitative research and algorithmic trading platform design system
colors:
  primary: "#8EEDC7"
  primary-foreground: "#13201D"
  background: "#202322"
  foreground: "#F3F7F6"
  card: "#272B29"
  secondary: "#303634"
  muted: "#2E3331"
  muted-foreground: "#B0BFBC"
  accent: "#353B39"
  accent-foreground: "#F3F7F6"
  border: "#39403E"
  destructive: "#E03E3E"
  status-green: "#22C55E"
  status-emerald: "#4ADE80"
  status-blue: "#60A5FA"
typography:
  display:
    fontFamily: "ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'"
    fontSize: "3rem"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'"
    fontSize: "2.25rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  title-lg:
    fontFamily: "ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "-0.015em"
  title:
    fontFamily: "ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.35
    letterSpacing: "-0.01em"
  subtitle:
    fontFamily: "ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'"
    fontSize: "1.125rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "-0.01em"
  body:
    fontFamily: "ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "0em"
  body-sm:
    fontFamily: "ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0em"
  caption:
    fontFamily: "ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'"
    fontSize: "0.8rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0em"
  label:
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.02em"
rounded:
  xs: "2px"
  sm: "4px"
  md: "6px"
  lg: "8px"
  xl: "12px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "64px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.primary-foreground}"
    rounded: "{rounded.md}"
    padding: "12px 24px"
  card-surface:
    backgroundColor: "{colors.card}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.md}"
    padding: "24px"
---

## Overview

StratGen's visual language reflects an institutional Windows desktop workstation for quantitative researchers and systematic traders. The interface pairs a low-glare obsidian ground (`#202322`) with high-legibility mint (`#8EEDC7`) for primary actions, technical identifiers, and key metrics. Structure comes from hairline borders (`1px solid #39403E`), architectural 12-column grids, and uncropped 16:9 desktop workbench captures rather than decorative gradients or nested card stacks.

## Colors

- **Ground & Surface Hierarchy:** Primary canvas uses `#202322` (`--background: 165 5% 13%`), elevated panels use `#272B29` (`--card: 165 6% 16%`), interactive chrome uses `#303634` (`--secondary: 165 6% 20%`), and hover states use `#353B39` (`--accent: 165 6% 22%`).
- **Accent Discipline:** `#8EEDC7` (`--primary: 160 70% 74%`) is reserved for primary CTA fills, active navigation states, technical specification tags, and inline links.
- **Contrast:** Primary foreground (`#F3F7F6`) and tinted secondary text (`#B0BFBC`, `--muted-foreground: 160 8% 72%`) maintain WCAG AA+ contrast across both canvas and card surfaces.

## Typography

- **Primary UI & Editorial Stack:** System UI sans-serif with `cv02`, `cv03`, `cv04`, `cv11` OpenType features and balanced heading wraps (`text-wrap: balance`).
- **Technical & Tabular Data:** Monospace (`font-mono`) is used strictly for version tags, engine specs, and code references. All prices, dates, and performance metrics enforce `tabular-nums`.
- **Hierarchy:** Strict sequential heading outline (`h1` -> `h2` -> `h3` -> `h4`) across all marketing, changelog, manual, and legal pages.

## Layout

- **Max Container Widths:** `max-w-7xl` (`1280px`) for multi-column workbench and capability matrices; `max-w-4xl` (`896px`) for long-form documentation, changelog, and legal articles.
- **Section Architecture:** Capabilities, FAQs, and specifications use divided 12-column specification rows (`divide-y divide-border`) and left-border callouts (`border-l border-border pl-5`) instead of repetitive 3-column card grids.

## Elevation & Depth

- Tonal surface separation (`--background` vs. `--card`) paired with crisp `1px` borders (`#39403E`) carries almost all hierarchy.
- Heavy drop shadows (`shadow-2xl`) are reserved exclusively for the hero desktop application window frame.

## Shapes

- Base radius is `6px` (`0.375rem`), giving buttons, workbench frames, and callouts a crisp, technical edge appropriate for desktop financial software.

## Components

- **Header:** Sticky top bar (`h-16`) with keyboard-accessible logo link, desktop section links, mobile drawer toggle, and high-contrast `Get StratGen` CTA.
- **Workbench Frames:** `<figure>` containers with a top metadata bar (`figcaption` or window header) and an uncropped `aspect-video` (`object-contain`) screenshot viewport.
- **Pricing Comparison:** Flat 3-column grid (Monthly License, Lifetime License with `2px` primary border, and Included Capabilities checklist) with zero nested card containers.

## Do's and Don'ts

- **Do** show full-aspect desktop screenshots (`aspect-video` with `object-contain`) so traders can read actual StratGen charts, tables, and parameters.
- **Do** use divided definition lists (`<dl>`) and specification rows for dense technical capabilities and FAQs.
- **Don't** place pill badges or eyebrow kickers above `<h1>` or `<h2>` headings.
- **Don't** nest cards inside cards or wrap every paragraph and FAQ item in its own bordered box.
- **Don't** set multi-sentence legal disclosures in `uppercase`; use sentence case with `<strong>` emphasis for readability.
