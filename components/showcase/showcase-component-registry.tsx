"use client"

import dynamic from "next/dynamic"
import type { ComponentType } from "react"

import { MediaPlaceholder } from "@/components/portfolio/media-placeholder"

export type ShowcaseComponentProps = {
  resetSignal?: number
}

const ComponentLoadingPlaceholder = () => (
  <div className="relative size-full min-h-[inherit] overflow-hidden bg-portfolio-media">
    <MediaPlaceholder variant="component" />
  </div>
)

const CardHoverShowcase = dynamic<ShowcaseComponentProps>(
  () =>
    import("@/components/showcase/card-hover-showcase").then((module) => {
      const CardHoverRegistryShowcase = () => <module.HolographicReferralCard />

      return CardHoverRegistryShowcase
    }),
  { loading: ComponentLoadingPlaceholder }
)

const EditTimeRegistryShowcase = dynamic<ShowcaseComponentProps>(
  () =>
    import("@/components/showcase/edit-time-showcase").then((module) => {
      const EditTimeShowcase = () => <module.EditTimeShowcase />

      return EditTimeShowcase
    }),
  { loading: ComponentLoadingPlaceholder }
)

const AnalogStickRegistryShowcase = dynamic<ShowcaseComponentProps>(
  () =>
    import("@/components/showcase/analog-stick-showcase").then((module) => {
      const AnalogStickShowcase = () => <module.AnalogStick />

      return AnalogStickShowcase
    }),
  { loading: ComponentLoadingPlaceholder }
)

const PolaroidStackRegistryShowcase = dynamic<ShowcaseComponentProps>(
  () =>
    import("@/components/showcase/polaroid-stack-showcase").then((module) => {
      const PolaroidStackShowcase = () => <module.PolaroidStack />

      return PolaroidStackShowcase
    }),
  { loading: ComponentLoadingPlaceholder }
)

const ThemeToggleRegistryShowcase = dynamic<ShowcaseComponentProps>(
  () =>
    import("@/components/showcase/theme-toggle-showcase").then((module) => {
      const ThemeToggleShowcase = () => <module.ThemeToggle />

      return ThemeToggleShowcase
    }),
  { loading: ComponentLoadingPlaceholder }
)

const SetTimerRegistryShowcase = dynamic<ShowcaseComponentProps>(
  () =>
    import("@/components/showcase/set-timer-showcase").then(
      (module) => module.SetTimer
    ),
  { loading: ComponentLoadingPlaceholder }
)

const PaperShredRegistryShowcase = dynamic<ShowcaseComponentProps>(
  () =>
    import("@/components/showcase/paper-shred-showcase").then(
      (module) => module.PaperShredButton
    ),
  { loading: ComponentLoadingPlaceholder }
)

const ScanDocumentRegistryShowcase = dynamic<ShowcaseComponentProps>(
  () =>
    import("@/components/showcase/scan-document-showcase").then(
      (module) => module.ScanDocumentButton
    ),
  { loading: ComponentLoadingPlaceholder }
)

const LiquidGlassBlobRegistryShowcase = dynamic<ShowcaseComponentProps>(
  () =>
    import("@/components/showcase/liquid-glass-blob-showcase").then(
      (module) => module.LiquidGlassBlob
    ),
  { loading: ComponentLoadingPlaceholder }
)

const SubscriptionRegistryShowcase = dynamic<ShowcaseComponentProps>(
  () =>
    import("@/components/showcase/subscription-showcase").then(
      (module) => module.SubscriptionShowcase
    ),
  { loading: ComponentLoadingPlaceholder }
)

const showcaseComponentPreloaders: Record<string, () => Promise<unknown>> = {
  "edit-time": () => import("@/components/showcase/edit-time-showcase"),
  "card-hover": () => import("@/components/showcase/card-hover-showcase"),
  "paper-shred": () => import("@/components/showcase/paper-shred-showcase"),
  "analog-stick": () => import("@/components/showcase/analog-stick-showcase"),
  "polaroid-stack": () => import("@/components/showcase/polaroid-stack-showcase"),
  "scan-document": () => import("@/components/showcase/scan-document-showcase"),
  "theme-toggle": () => import("@/components/showcase/theme-toggle-showcase"),
  "set-timer": () => import("@/components/showcase/set-timer-showcase"),
  "liquid-glass-blob": () =>
    import("@/components/showcase/liquid-glass-blob-showcase"),
  subscription: () => import("@/components/showcase/subscription-showcase"),
}

export const preloadShowcaseComponent = (componentKey: string) => {
  const preloadComponent = showcaseComponentPreloaders[componentKey]

  if (!preloadComponent) {
    return
  }

  void preloadComponent()
}

export const showcaseComponentRegistry: Record<
  string,
  ComponentType<ShowcaseComponentProps>
> = {
  "edit-time": EditTimeRegistryShowcase,
  "card-hover": CardHoverShowcase,
  "paper-shred": PaperShredRegistryShowcase,
  "analog-stick": AnalogStickRegistryShowcase,
  "polaroid-stack": PolaroidStackRegistryShowcase,
  "scan-document": ScanDocumentRegistryShowcase,
  "theme-toggle": ThemeToggleRegistryShowcase,
  "set-timer": SetTimerRegistryShowcase,
  "liquid-glass-blob": LiquidGlassBlobRegistryShowcase,
  subscription: SubscriptionRegistryShowcase,
}
