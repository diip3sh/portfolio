---
name: New Portfolio
description: A precise monochrome portfolio built around a living gallery of design and engineering work. Structural chrome stays monochrome; controlled accent color appears only inside interactive showcase artifacts, destructive/success feedback, and focus/action states.
colors:
  gallery-white: "#ffffff"
  structural-gray: "#ababab"
  media-charcoal: "#2f2f2f"
  page-black: "#121212"
  absolute-black: "#000000"
typography:
  body-font: "Commit Mono, monospace"
  editorial-font: "Instrument Serif, serif"
  roles:
    technical-headings: "Commit Mono — body, labels, controls, and technical headings (type-heading-1, type-heading-3)"
    editorial-headings: "Instrument Serif — selected editorial and project headings (type-heading-2)"
  headline:
    fontFamily: "Commit Mono, monospace"
    fontSize: "24px"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "-0.05em"
  headline-mobile:
    fontFamily: "Commit Mono, monospace"
    fontSize: "22px"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "-0.05em"
  body:
    fontFamily: "Commit Mono, monospace"
    fontSize: "20px"
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: "-0.03em"
  body-mobile:
    fontFamily: "Commit Mono, monospace"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: "-0.03em"
  label:
    fontFamily: "Commit Mono, monospace"
    fontSize: "14px"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  editorial:
    fontFamily: "Instrument Serif, serif"
    fontSize: "24px"
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: "-0.01em"
accent:
  primary: "Semantic primary token (green-tinted OKLCH) — used in shadcn component layer for CTAs and active states"
  destructive: "Semantic destructive token (red-tinted OKLCH) — error and destructive feedback"
  focus-ring: "Semantic ring token — visible keyboard focus outlines"
rounded:
  none: "0px"
  project: "12px"
  pill: "25px"
  circle: "9999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "20px"
  lg: "32px"
  xl: "60px"
components:
  button-primary:
    backgroundColor: "{colors.gallery-white}"
    textColor: "{colors.absolute-black}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "10px 16px"
  button-primary-hover:
    backgroundColor: "{colors.absolute-black}"
    textColor: "{colors.gallery-white}"
    rounded: "{rounded.pill}"
    padding: "10px 16px"
  project-media:
    backgroundColor: "{colors.media-charcoal}"
    rounded: "{rounded.project}"
    width: "100%"
---

# Design System: New Portfolio

## Overview

**Creative North Star: "The Living Project Gallery"**

This portfolio is a precise monochrome frame for design, frontend, and creative
engineering work. Its gallery can hold images, video, and interactive components;
the interface stays quiet enough for each project to establish its own visual
character.

Composition carries the identity through strong proportions, full-height layouts,
sharp edges, and deliberate negative space. The system rejects familiar developer
dashboard chrome, generic card grids, copied layout formulas, and the common
chanhdai.com-inspired portfolio style.

**Key Characteristics:**

- Monochrome interface with project media as the main source of visual variety.
- Restrained rounding: pill CTAs and `12px` project media, with structural surfaces kept square.
- Asymmetric desktop compositions that become clear stacked flows on smaller screens.
- Sparse, direct copy with visible navigation and contact paths.
- WCAG AA contrast, keyboard access, and reduced-motion support.

## Colors

Structural portfolio surfaces use a monochrome neutral scale. Supplied hex
values remain asset references; canonical code integration uses OKLCH.

### Structural

- **Gallery White** (`#ffffff`, `oklch(100% 0 0)`): Primary text, project-card text, and primary-button background.
- **Absolute Black** (`#000000`, `oklch(0% 0 0)`): Gallery background and primary-button text.
- **Structural Gray** (`#ababab`, `oklch(73.5% 0 0)`): Secondary text and subdued metadata.
- **Media Charcoal** (`#2f2f2f`, `oklch(30.9% 0 0)`): Neutral media placeholder and inactive visual surface.
- **Page Black** (`#121212`, `oklch(18.2% 0 0)`): Alternate dark surface when separation from absolute black is required.

### Semantic Accent Tokens

The shadcn component layer defines semantic color tokens (primary, destructive,
accent, ring) using chromatic OKLCH values. These are not part of the structural
palette. They appear only in:

- Interactive controls and CTA states
- Destructive/success feedback
- Keyboard focus outlines

**The Media Leads Rule.** Portfolio chrome stays monochrome so project images,
videos, and interactive work provide the dominant visual variety.

## Typography

**Primary Font:** Commit Mono, monospace — body, labels, controls, and technical headings.
**Editorial Font:** Instrument Serif, serif — selected editorial and project headings (`type-heading-2`).

**Character:** Commit Mono provides technical credibility across body copy,
metadata, and controls. Instrument Serif introduces editorial contrast for
project headings where the work calls for it. Hierarchy within each role comes
from weight, size, line height, and composition.

### Hierarchy

- **Headline** (Commit Mono 500, `24px`, `1.1`, `-0.05em`): Primary page headings on desktop and tablet (`type-heading-1`).
- **Headline Mobile** (Commit Mono 500, `22px`, `1.1`, `-0.05em`): Primary headings below `810px`.
- **Editorial Heading** (Instrument Serif 400, `24px`, `1.3`, `-0.01em`): Selected editorial and project headings (`type-heading-2`).
- **Body** (Commit Mono 400, `20px`, `1.3`, `-0.03em`): Main descriptive copy; keep lines below `75ch`.
- **Body Mobile** (Commit Mono 400, `18px`, `1.3`, `-0.03em`): Main descriptive copy below `810px`.
- **Label** (Commit Mono 500, `14px`, `1.1`, `-0.03em`): Project metadata, footer links, and compact controls.
- **Button** (Commit Mono 600, `16px`, `1.1`, `-0.03em`): Direct action labels.

## Elevation

System is flat. It uses no decorative shadows, glass effects, or floating cards.
Depth comes from contrast, media, borders, spacing, and layout proportions.

**The Flat Frame Rule.** Portfolio chrome stays flat; only project content may
introduce dimensional effects when they belong to the work itself.

## Components

### Buttons

- **Shape:** Compact pill (`25px` radius).
- **Primary:** Gallery White background, Absolute Black text, `10px 16px` padding, `16px` semibold label.
- **Hover / Focus:** Invert to Absolute Black with Gallery White text; use a visible offset focus outline.
- **Motion:** State feedback stays at or below `150ms`; reduced-motion mode removes nonessential transitions.

### Cards / Containers

- **Corner Style:** Structural containers stay square; project cards use `12px`.
- **Background:** Gallery uses Absolute Black; neutral placeholders use Media Charcoal.
- **Shadow Strategy:** None.
- **Border:** Use thin monochrome dividers only when they clarify structure.
- **Internal Padding:** Prefer open gallery rails over padded card shells.

### Navigation

- Use Label typography and clear standalone link text.
- Default links may use Structural Gray; hover and focus shift to Gallery White.
- Keep navigation sparse and avoid app-shell or dashboard treatment.

### Project Gallery Item

- Accept image, video, or interactive component media.
- Media fills available width and remains visually dominant.
- Metadata sits in an absolute bottom overlay using project-name and Label typography.
- Maintain stable aspect ratios to prevent layout shift.
- Do not force all work into identical content behavior; preserve each project's character.

## Do's and Don'ts

### Do:

- **Do** use supplied monochrome values: `#ffffff`, `#ababab`, `#2f2f2f`, `#121212`, and `#000000`.
- **Do** use OKLCH equivalents in implementation while preserving supplied hex references.
- **Do** let project images, video, and interactive components carry visual variety.
- **Do** use sharp edges, deliberate negative space, and strong layout proportions.
- **Do** preserve WCAG AA contrast, visible focus states, keyboard access, and reduced-motion support.
- **Do** adapt desktop gallery rails into readable tablet and phone flows.

### Don't:

- **Don't** imitate the common chanhdai.com-inspired developer portfolio style or its minor variations.
- **Don't** use familiar developer dashboard chrome, generic card grids, copied layout formulas, or interchangeable engineering-portfolio patterns.
- **Don't** add decorative gradients, glassmorphism, glows, or wide soft shadows.
- **Don't** add rounding beyond the defined `25px` CTA pill and `12px` project-card radius.
- **Don't** use interface color as decoration; project media owns color.
- **Don't** hide project work behind excessive copy or ornamental UI.
