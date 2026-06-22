import type {
  PortfolioProject,
  ProjectShowcaseComponent,
} from "@/constants/types"

export const portfolioProjects: PortfolioProject[] = [
  //code
  {
    type: "project",
    slug: "code",
    title: "Code",
    col: 2,
    order: 1,
    media: [
      {
        type: "image",
        src: "https://pub-17f1ae3c481641228230d1b2dcdc07ff.r2.dev/projects/code-1.png",
        alt: "Code overview screen",
      },
      {
        type: "image",
        src: "https://pub-17f1ae3c481641228230d1b2dcdc07ff.r2.dev/projects/code-2.png",
        alt: "Code overview screen",
      },
      {
        type: "image",
        src: "https://pub-17f1ae3c481641228230d1b2dcdc07ff.r2.dev/projects/code-3.png",
        alt: "Code overview screen",
      },
      {
        type: "image",
        src: "https://pub-17f1ae3c481641228230d1b2dcdc07ff.r2.dev/projects/code-4.png",
        alt: "Code overview screen",
      },
      {
        type: "image",
        src: "https://pub-17f1ae3c481641228230d1b2dcdc07ff.r2.dev/projects/code-5.png",
        alt: "Code overview screen",
      },
      {
        type: "image",
        src: "https://pub-17f1ae3c481641228230d1b2dcdc07ff.r2.dev/projects/code-6.png",
        alt: "Code overview screen",
      },
    ],
    stack: [
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "React Query",
      "Vite",
      "Bun",
      "xterm.js",
      "Electron",
    ],
    description:
      "Code (fork of T3 Code) is a local-first desktop application that unifies AI agent workflows by providing a centralized workspace for coding with multiple AI providers. It integrates parallel agent threads, terminals, browser previews, diffs, and version control operations—eliminating the need to juggle multiple windows. Users connect their existing AI subscriptions (Claude Code, Codex, Gemini, OpenCode, Cursor, etc.) and work across isolated Git worktrees while keeping all session history and projects local on their machine.",
    challenges: [
      "Balancing drawer-based `terminal UI` with chat threading and context switching without losing terminal or conversation state.",
      "Rendering large `code diffs` with syntax highlighting, wrapping controls, and file-level staging without hurting scroll performance.",
      "Making `token usage`, costs, and rate limits readable during active coding sessions without crowding the interface.",
      "Resizing `xterm.js` panes across split layouts while preserving addon behavior, focus, and hot-reload stability.",
    ],
    solutions: [
      "Used a centralized `Zustand` store for per-thread terminal lifecycle, layout presets, focus state, and activity tracking.",
      "Simplified diffs into staged/unstaged scopes with inline file staging and a floating `Stage All` action.",
      "Condensed session status into tabbed `rate-limit` summaries, a compact context meter, and grid-based field layouts.",
      "Refined the environment picker with compact worktree grids, animated chevrons, and collapsible rate-limit sections.",
    ],
  },
  //fund dashboard
  {
    type: "project",
    slug: "fund-dashboard",
    title: "Fund Dashboard",
    col: 1,
    order: 2,
    media: [
      {
        type: "image",
        src: "https://pub-17f1ae3c481641228230d1b2dcdc07ff.r2.dev/projects/fund-dashboard.png",
        alt: "Fund Dashboard main overview screen",
      },
      {
        type: "image",
        src: "https://pub-17f1ae3c481641228230d1b2dcdc07ff.r2.dev/projects/fund-dashboard-2.png",
        alt: "Fund Dashboard portfolio analytics screen",
      },
      {
        type: "image",
        src: "https://pub-17f1ae3c481641228230d1b2dcdc07ff.r2.dev/projects/fund-dashboard-3.png",
        alt: "Fund Dashboard fund performance screen",
      },
      {
        type: "image",
        src: "https://pub-17f1ae3c481641228230d1b2dcdc07ff.r2.dev/projects/fund-dashboard-4.png",
        alt: "Fund Dashboard detail screen",
      },
    ],
    stack: [
      "Next.js 16 (Turbopack)",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "React Query (TanStack Query 5)",
      "React Hook Form",
      "Zod",
      "shadcn/ui",
      "Zustand",
    ],
    description:
      "An enterprise fintech operations dashboard for fund managers and administrators. It provides centralized control over token lifecycle management—including investor subscriptions, redemptions, transfers, distributions, and compliance workflows. Built with Next.js 16, React 19, and TypeScript, the dashboard connects to a backend API, integrates role-based access control, and displays real-time operational data in a clean, scannable interface optimized for high-frequency trading and settlement operations.",
    challenges: [
      "Rendering large `transaction tables` for investors, subscriptions, redemptions, and transfers without visual noise or information overload.",
      "Supporting `fund manager` and admin views with different permissions while keeping one cohesive design system.",
      "Displaying live `compliance counts` with instant updates and drill-down actions without overloading the header UI.",
      "Creating scannable `status chips` across workflows with clear colors, icons, and restrained enterprise styling.",
    ],
    solutions: [
      "Used dense `14px tables`, wallet truncation, inline copy actions, tabular alignment, scoped row actions, and explicit empty/loading/error states.",
      "Built role-gated routes, conditional actions, and page-level authorization without permission-check shimmer or fragmented UI patterns.",
      "Created a unified `compliance panel` with Fund Health, count groups, dividers, muted headers, and API-driven status totals.",
      "Mapped API status strings to readable labels with discrete badge styles, icons, and restrained active/frozen/approved color states.",
    ],
  },
  //ulejra landing page
  {
    type: "project",
    slug: "ulejra-site",
    title: "Ulejra Landing Page",
    col: 2,
    order: 3,
    media: [
      {
        type: "image",
        src: "https://pub-17f1ae3c481641228230d1b2dcdc07ff.r2.dev/projects/ulejra.jpeg",
        alt: "Ulejra Site landing page screen",
      },
      {
        type: "image",
        src: "https://pub-17f1ae3c481641228230d1b2dcdc07ff.r2.dev/projects/ulejra-1.png",
        alt: "Ulejra Site landing page screen",
      },
    ],
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "Radix UI",
      "Lucide Icons",
      "Motion",
      "OpenNext + Cloudflare Workers",
      "Shadcn/ui",
    ],
    description:
      "Ulejra is an institutional financial workflow infrastructure and marketing platform that serves treasury, compliance, settlement, and operational governance teams. Built with Next.js 16 and deployed via Cloudflare, it provides a light-only bordered institutional interface for managing digital asset programs, treasury coordination, and governed AI-assisted operations—with product-led storytelling through workflow mockups, dashboard previews, and audit trail visuals.",
    challenges: [
      "Keeping `full-width bordered bands`, `side rails`, and `max-w-7xl` containers consistent across responsive landing sections.",
      "Embedding `dashboard mockups`, workflow previews, and ledger visuals as focal points without hurting performance or accessibility.",
      "Converting dense desktop splits into clean mobile stacks while preserving `institutional hierarchy` and visual structure.",
      "Using motion components like `SectionReveal`, `ShimmerText`, and grid effects without drifting into crypto-glow aesthetics.",
    ],
    solutions: [
      "Standardized a `w-full border-y` band with an inner `mx-auto max-w-7xl border-x` container and repeated `GridSeparator` rhythm.",
      "Placed product visuals inside controlled card containers using `bg-surface`, selective shadows, and minimal decorative layers.",
      "Used responsive Tailwind layouts: `md:hidden` mobile cards, desktop split views, and single-column benefit stacks.",
      "Kept motion restrained with short reveal transitions, `prefers-reduced-motion`, low-opacity grids, and limited shimmer usage.",
    ],
  },
  // mof
  {
    type: "project",
    slug: "mof",
    title: "MOF Dashboard",
    col: 1,
    order: 5,
    media: [
      {
        type: "image",
        src: "https://pub-17f1ae3c481641228230d1b2dcdc07ff.r2.dev/projects/mof-4.png",
        alt: "MOF main landing page screen",
      },
      {
        type: "image",
        src: "https://pub-17f1ae3c481641228230d1b2dcdc07ff.r2.dev/projects/mof-2.png",
        alt: "MOF detail section screen",
      },
      {
        type: "image",
        src: "https://pub-17f1ae3c481641228230d1b2dcdc07ff.r2.dev/projects/mof-3.png",
        alt: "MOF secondary page screen",
      },
      {
        type: "image",
        src: "https://pub-17f1ae3c481641228230d1b2dcdc07ff.r2.dev/projects/mof-1.png",
        alt: "MOF content section screen",
      },
    ],
    stack: [
      "Next.js 16",
      "React 19",
      "Tailwind CSS",
      "React Query (TanStack Query 5)",
      "React Hook Form",
      "Zod",
      "shadcn/ui + Radix UI",
      "Vercel AI SDK (Google Gemini)",
      "Drizzle ORM",
      "Neon Serverless DB",
      "AWS Amplify",
    ],
    description:
      "An enterprise Kubernetes pod management dashboard with real-time monitoring, AI-powered insights, and portfolio analytics. Built with Next.js 16 and Google Gemini integration, it provides fund managers with a unified control plane for managing distributed pod resources, viewing live operational metrics, and leveraging AI chat for portfolio analysis—all while maintaining secure multi-user authentication and role-based access.",
    challenges: [
      "Rendering live `SSE pod updates` with metrics, syntax highlighting, and consistent status badges without DOM bloat or re-render cascades.",
      "Managing a collapsible `AI chat drawer` with streaming, threads, form state, and focus safety across navigation and pod updates.",
      "Handling overlapping `pod dialogs` for creation, config edits, and status changes without breaking focus, scroll, or validation clarity.",
      "Displaying large `pod tables` with copyable IDs, status details, row actions, and keyboard-safe interactions at scale.",
    ],
    solutions: [
      "Used TanStack Query with a `5s refetch` cycle, scoped AbortSignals, semantic status badges, and redundant icon/text cues.",
      "Built a Zustand-backed `chat drawer` with persisted history, auto-scroll streaming, guarded close states, and Sonner mutation feedback.",
      "Structured dialogs with Radix focus traps, first-error focus, escape handling, auth-context inheritance, and confirm flows for destructive actions.",
      "Implemented virtualized `pod tables` with ID truncation, copy buttons, status-scoped actions, CLS-safe skeletons, and keyboard detail expansion.",
    ],
  },
  //internal organisation dashboard
  {
    type: "project",
    slug: "org",
    title: "Internal Organisation Dashboard",
    col: 1,
    order: 3,
    media: [
      {
        type: "image",
        src: "https://pub-17f1ae3c481641228230d1b2dcdc07ff.r2.dev/projects/org.png",
        alt: "ORG main product screen",
      },
      {
        type: "image",
        src: "https://pub-17f1ae3c481641228230d1b2dcdc07ff.r2.dev/projects/org-2.png",
        alt: "ORG workflow screen",
      },
      {
        type: "image",
        src: "https://pub-17f1ae3c481641228230d1b2dcdc07ff.r2.dev/projects/org-3.png",
        alt: "ORG detail screen",
      },
    ],
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "React Query (TanStack Query 5)",
      "React Hook Form",
      "Zod",
      "Motion",
    ],
    description:
      "An enterprise organization and team management interface that provides role-based visibility into operational structures, team hierarchies, and collaborative workflows. Built with Next.js 16 and dual AI backends (Google Gemini & DeepSeek), it enables administrators to manage departments, users, and organizational metadata while leveraging AI-powered insights for organizational optimization and team analytics.",
    challenges: [
      "Rendering expandable `org trees` with lazy-loaded subtrees and role-based visibility without DOM bloat or re-render cascades.",
      "Managing dual-model `AI streaming` inside a persistent drawer while preserving threads, form state, and focus across navigation.",
      "Building `permission matrices` with nested access states without unclear validation or accidental permission escalation.",
      "Displaying large `user/team tables` with badges, row actions, bulk controls, and keyboard-safe interactions at scale.",
    ],
    solutions: [
      "Used a virtualized `tree view` with Radix collapsibles, TanStack Query subtree loading, Zustand expansion state, and layout-stable skeletons.",
      "Built a Zustand-backed `AI drawer` with model-indexed history, auto-scroll, preserved prompts, model switching, and guarded close states.",
      "Structured permissions with Radix checkbox groups, explicit parent-child logic, Zod validation, confirmation dialogs, and read-only previews.",
      "Implemented virtualized tables with scoped row actions, accessible Radix dropdowns, select-all bulk states, ID truncation, and CLS-safe skeletons.",
    ],
  },
  //crypto token tracking software
  {
    type: "project",
    slug: "taas",
    title: "Crypto Token Tracking Software",
    col: 2,
    order: 5,
    media: [
      {
        type: "image",
        src: "https://pub-17f1ae3c481641228230d1b2dcdc07ff.r2.dev/projects/taas.png",
        alt: "TAAS main website screen",
      },
      {
        type: "image",
        src: "https://pub-17f1ae3c481641228230d1b2dcdc07ff.r2.dev/projects/taas-1.png",
        alt: "TAAS service section screen",
      },
      {
        type: "image",
        src: "https://pub-17f1ae3c481641228230d1b2dcdc07ff.r2.dev/projects/taas-2.png",
        alt: "TAAS content section screen",
      },
    ],
    stack: ["Next.js", "Tailwind CSS", "Landing Page", "UI Design"],
    description:
      "A service-led website concept with a direct visual system, focused messaging, and conversion-oriented sections for a technical audience.",
    challenges: [
      "Making `crypto tracking` and `ops workflows` credible for technical users without generic `Web3` visuals or vague claims.",
      "Keeping the page `conversion-focused` while clearly showing what is monitored and why it matters.",
    ],
    solutions: [
      "Used `dashboard-led` visuals, direct copy, and restrained UI to frame tracking as an operational workflow.",
      "Built modular `product`, `service`, and `CTA` sections with reusable `Tailwind` patterns for responsive scanning.",
    ],
  },
]

export const portfolioShowcaseComponents: ProjectShowcaseComponent[] = [
  //edit time
  {
    type: "showcase",
    title: "Edit Time",
    stack: ["motion", "typescript"],
    media: {
      type: "video",
      src: "https://pub-17f1ae3c481641228230d1b2dcdc07ff.r2.dev/craft/iIFMesf2PYlUOc28.mp4",
      width: 2338,
      height: 832,
      alt: "Edit Time interaction preview",
    },
    col: 1,
    order: 8,
    xLink: "https://x.com/diip3sh/status/2019428201592995956?s=20",
  },
  //card hover
  {
    type: "showcase",
    title: "Card Hover",
    stack: ["motion", "react"],
    media: {
      type: "component",
      componentKey: "card-hover",
      alt: "Interactive holographic card hover component",
    },
    col: 1,
    order: 4,
    xLink: "https://x.com/diip3sh",
    prompt: `Create a reusable **Holographic Referral Card** component for an existing React + TypeScript codebase.

Goal:
Build a premium interactive referral/invite card with a dark physical-card look, soft holographic glow, pointer-tracked 3D tilt, and a central invite artwork area. The component should feel like a polished design-engineering portfolio component: tactile, minimal, responsive, and easy to drop into another codebase.

Component behavior:

* The card should tilt in 3D based on pointer position.
* Pointer movement should update:

  * \`rotateX\`
  * \`rotateY\`
  * \`translateZ\`
  * a radial glow position
  * glow opacity
* On pointer enter, the card should lift slightly using \`translateZ\`.
* On pointer leave, the card should smoothly reset to its neutral state.
* Touch input should not trigger the pointer-following animation.
* Keyboard focus should reveal the glow subtly.
* Blur should reset the card state.
* The glow should follow the pointer using a radial gradient and \`mix-blend-overlay\`.

Visual design:

* Outer wrapper should have a fixed responsive max width around \`375px\`.
* Inner card should use:

  * dark charcoal background
  * rounded corners
  * deep stacked shadow
  * subtle desaturated/saturated card feel
  * generous padding
* Header area:

  * left logo/avatar
  * right optional secondary logo or link
* Main media area:

  * vertical \`3/4\` aspect ratio
  * rounded image container
  * background image fills the card using \`object-cover\`
  * central white discount/check-style icon overlay
* Footer area:

  * left title text
  * right muted description/handle text
  * both should truncate if long
* Final visual layer:

  * absolute radial glow overlay
  * hidden from screen readers
  * pointer-events disabled

Technical requirements:

* Use React + TypeScript.
* Use Motion for React from \`motion/react\`.
* Use:

  * \`motion\`
  * \`useMotionValue\`
  * \`useSpring\`
  * \`useMotionTemplate\`
  * \`useReducedMotion\`
* Use Tailwind CSS for styling.
* Use a \`cn()\` utility for class merging.
* The component must be a client component with \`"use client"\`.
* Do not use external 3D libraries.
* Do not use JavaScript animation loops.
* Keep the component fully reusable through props.

Expected props:

\`\`\`tsx
export type CardLogo =
  | React.ReactNode
  | {
      src: string
      alt: string
      className?: string
    }

export type HolographicReferralCardProps = {
  image?: string
  imageAlt?: string
  title?: string
  description?: string
  logo?: CardLogo
  logoAlt?: string
  secondLogo?: CardLogo
  secondLogoAlt?: string
  secondLogoHref?: string
  secondLogoAriaLabel?: string
  ariaLabel?: string
  className?: string
}
\`\`\`

Expected usage:

\`\`\`tsx
<HolographicReferralCard
  image="/logo.png"
  imageAlt="Invite background"
  title="Comet"
  description="#diip3sh"
  logo={{ src: "/logo.svg", alt: "Comet avatar" }}
  secondLogo="/x.svg"
  secondLogoAlt="X logo"
  secondLogoHref="https://x.com/diip3sh"
/>
\`\`\`

Motion details:

* Use spring options similar to:

\`\`\`ts
const springOptions = {
  stiffness: 260,
  damping: 28,
  mass: 0.7,
}
\`\`\`

* Calculate pointer progress from the card bounds:

\`\`\`ts
const xProgress = pointerX / bounds.width
const yProgress = pointerY / bounds.height
\`\`\`

* Use these formulas for tilt:

\`\`\`ts
rotateX.set((yProgress - 0.5) * 20)
rotateY.set((xProgress - 0.5) * -20)
translateZ.set(20)
\`\`\`

* Use a transform template like:

\`\`\`ts
perspective(1000px) rotateX(...) rotateY(...) translateZ(...)
\`\`\`

* Use a glow background like:

\`\`\`ts
radial-gradient(circle at X% Y%, rgba(255,255,255,0.9) 10%, rgba(255,255,255,0.75) 20%, rgba(255,255,255,0) 80%)
\`\`\`

Accessibility:

* Respect \`prefers-reduced-motion\`.
* If reduced motion is enabled, disable the 3D transform but keep the card usable.
* The decorative glow layer must use \`aria-hidden="true"\`.
* The central icon should be decorative unless it communicates meaningful status.
* If the secondary logo is clickable, render it as an accessible anchor with:

  * \`aria-label\`
  * visible focus ring
  * \`target="_blank"\`
  * \`rel="noreferrer"\`
* Use semantic HTML, preferably \`article\`, with an \`aria-label\`.

Implementation requirements:
Return the full code for:

1. \`HolographicReferralCard.tsx\`
2. Any helper types/functions inside the same file
3. The inline SVG discount/check icon
4. Example usage
5. A short customization note explaining how to change image, logos, title, description, shadows, tilt strength, and glow intensity

Do not simplify the interaction into a static card. The final result must include the pointer-tracked 3D tilt and holographic radial glow.`,
  },
  //glsl shader fragment
  {
    type: "showcase",
    title: "GLSL Shader Fragment",
    stack: ["glsl", "motion"],
    media: {
      type: "video",
      src: "https://pub-17f1ae3c481641228230d1b2dcdc07ff.r2.dev/craft/Shopify%20Transition.mp4",
      width: 1632,
      height: 1080,
      alt: "GLSL Shader Fragment",
    },
    col: 2,
    order: 4,
    xLink: "https://x.com/diip3sh/status/2018404162837578147?s=20",
  },
  //gradient slider toggle
  {
    type: "showcase",
    title: "Gradient Slider Toggle",
    stack: ["motion", "typescript"],
    media: {
      type: "video",
      src: "https://pub-17f1ae3c481641228230d1b2dcdc07ff.r2.dev/craft/slider-gradient-1769668815641.mp4",
      width: 1624,
      height: 1080,
      alt: "Gradient Slider Toggle",
    },
    col: 1,
    order: 11,
    xLink: "https://x.com/diip3sh/status/2016955164411023651?s=20",
  },
  //canvas masking
  {
    type: "showcase",
    title: "Canvas Masking",
    stack: ["canvas", "motion"],
    media: {
      type: "video",
      src: "https://pub-17f1ae3c481641228230d1b2dcdc07ff.r2.dev/craft/Draggable%20Mask%20(online-video-cutter.com).mp4",
      width: 1680,
      height: 1080,
      alt: "Canvas Masking",
    },
    col: 2,
    order: 4,
    xLink: "https://x.com/diip3sh/status/2013327530997211144?s=20",
  },
  //light bulb button
  // {
  //   type: "showcase",
  //   title: "Light Bulb Button",
  //   stack: ["motion", "typescript"],
  //   media: {
  //     type: "video",
  //     src: "https://pub-17f1ae3c481641228230d1b2dcdc07ff.r2.dev/craft/blub-button-1765180414006.mp4",
  //     width: 1632,
  //     height: 1080,
  //     alt: "Light Bulb Button",
  //   },
  //   col: 1,
  //   order: 14,
  //   xLink: "https://x.com/diip3sh/status/1997939885471346790?s=20",
  // },
  //threejs face masking shader
  {
    type: "showcase",
    title: "Threejs Face Masking shader",
    stack: ["three.js", "shader"],
    media: {
      type: "video",
      src: "https://pub-17f1ae3c481641228230d1b2dcdc07ff.r2.dev/craft/lando-norris.mp4",
      width: 1080,
      height: 1616,
      alt: "Threejs Face Masking shader",
    },
    col: 2,
    order: 10,
    xLink: "https://x.com/diip3sh/status/1981019861993365736?s=20",
  },
  //shadow button
  // {
  //   type: "showcase",
  //   title: "Shadow Button",
  //   stack: ["css", "motion"],
  //   media: {
  //     type: "video",
  //     src: "https://pub-17f1ae3c481641228230d1b2dcdc07ff.r2.dev/craft/twU0vE_GfLprjyGl.mp4",
  //     width: 746,
  //     height: 660,
  //     alt: "Shadow Button",
  //   },
  //   col: 2,
  //   order: 11,
  //   xLink: "https://x.com/diip3sh/status/1951916692029755612?s=20",
  // },
  //image slider
  {
    type: "showcase",
    title: "Image Slider",
    stack: ["motion", "typescript"],
    media: {
      type: "video",
      src: "https://pub-17f1ae3c481641228230d1b2dcdc07ff.r2.dev/craft/vertical-slider-1765799424856.mp4",
      width: 1856,
      height: 1080,
      alt: "image slider",
    },
    col: 1,
    order: 10,
    xLink: "https://x.com/diip3sh/status/2000535373404164483?s=20",
  },
  //subscriptions list
  {
    type: "showcase",
    title: "Subscriptions List",
    stack: ["motion", "typescript"],
    media: {
      type: "component",
      componentKey: "subscription",
      alt: "subscriptions list",
    },
    col: 2,
    order: 7,
    xLink: "https://x.com/diip3sh/status/2059165685067161605?s=20",
  },
  //text to bento cards
  {
    type: "showcase",
    title: "Text to Bento cards",
    stack: ["motion", "typescript"],
    media: {
      type: "video",
      src: "https://pub-17f1ae3c481641228230d1b2dcdc07ff.r2.dev/craft/Recording%20at%202026-05-26%2017.26.39-Edited.mp4",
      width: 1662,
      height: 1080,
      alt: "text to bento cards",
    },
    col: 1,
    order: 7,
    xLink: "https://x.com/diip3sh/status/2059627514654544352?s=20",
    prompt: `Create a reusable **Scroll Morph Bento Grid** component for an existing React + TypeScript codebase.

      Goal:
      Build a scroll-driven animation where large text fragments transform into a polished image bento grid. The component should feel like a premium landing-page interaction: cinematic, editorial, smooth, and portfolio-grade.

      The effect:

      * The section starts as oversized text fragments arranged across a large canvas.
      * Each important word has a matching bento card.
      * On scroll, each word/card transitions from its original inline text position into a final bento-grid layout.
      * During the transition:

        * the card moves from a source rectangle into its final bento rectangle
        * the card expands in width and height
        * border radius changes slightly
        * a clipped image-text layer appears
        * text scales up
        * the image fades in
        * the final overlay/title layer fades in
      * The final state should be a multi-card bento grid with image backgrounds and large typography.

      Stack:

      * React
      * TypeScript
      * Tailwind CSS
      * Motion for React from \`motion/react\`

      Use these Motion APIs:

      * \`motion\`
      * \`useScroll\`
      * \`useTransform\`
      * \`useReducedMotion\`
      * \`MotionValue\`

      Do not use:

      * GSAP
      * canvas
      * WebGL
      * external animation libraries other than Motion
      * JavaScript animation loops

      Component structure:
      Create these pieces:

      1. \`Rect\` type:

      \`\`\`ts
      type Rect = {
        x: number
        y: number
        width: number
        height: number
      }
      \`\`\`

      2. \`BentoItem\` type:

      \`\`\`ts
      type BentoItem = {
        index: number
        text: string
        agent?: string
        source: Rect
        bento: Rect
        imageSrc: string
        imagePosition: string
        isInitiallyClipped?: boolean
        variant?: "large" | "regular"
        foreground?: {
          text: string
          className: string
        }
        title: {
          text: string
          className: string
        }
        message?: string
      }
      \`\`\`

      3. \`BentoGridCard\` component:

      * Receives:

      \`\`\`ts
      {
        item: BentoItem
        progress: MotionValue<number>
      }
      \`\`\`

      * Uses \`useTransform\` to animate:

        * \`left\`
        * \`top\`
        * \`width\`
        * \`height\`
        * \`borderRadius\`
        * \`borderColor\`
        * white text opacity
        * clipped text opacity
        * text scale
        * image opacity
        * image scale
        * overlay opacity

      4. \`PlainText\` component:

      * Receives:

      \`\`\`ts
      {
        children: React.ReactNode
        progress: MotionValue<number>
        rect: Rect
      }
      \`\`\`

      * Renders large plain text at an absolute position.
      * Fades out as the bento transition begins.

      5. Main \`ScrollMorphBentoGrid\` component:

      * Uses a tall scroll section.
      * Uses a sticky viewport.
      * Uses \`useScroll\` with:

      \`\`\`ts
      offset: ["start start", "end end"]
      \`\`\`

      * Centers a large internal animation canvas.
      * Maps over the bento item data to render each animated card.
      * Renders additional plain text fragments between the cards.

      Animation constants:
      Use a transition range similar to:

      \`\`\`ts
      const BENTO_START = 0.76
      const BENTO_END = 1
      \`\`\`

      The scroll section should be tall enough to allow a slow cinematic transition:

      \`\`\`tsx
      <section className="relative h-[620vh] bg-white">
      \`\`\`

      The sticky viewport should fill the screen:

      \`\`\`tsx
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden bg-white p-6">
      \`\`\`

      Use a large internal canvas so the animation can be precisely positioned:

      \`\`\`tsx
      <div className="absolute left-1/2 top-1/2 h-[1120px] w-[1560px] -translate-x-1/2 -translate-y-[35%] scale-[min(1,calc((100vw-48px)/1560))]">
      \`\`\`

      Card animation behavior:

      * Each card should start from its \`source\` rectangle.
      * Each card should end at its \`bento\` rectangle.
      * \`source\` represents where the original word appears in the sentence.
      * \`bento\` represents the final card location in the grid.

      Use transforms like:

      \`\`\`ts
      const left = useTransform(progress, [BENTO_START, BENTO_END], [item.source.x, item.bento.x])
      const top = useTransform(progress, [BENTO_START, BENTO_END], [item.source.y, item.bento.y])
      const width = useTransform(progress, [BENTO_START, BENTO_END], [item.source.width, item.bento.width])
      const height = useTransform(progress, [BENTO_START, BENTO_END], [item.source.height, item.bento.height])
      \`\`\`

      Text/image reveal behavior:

      * Each card should have two text layers:

        1. a normal visible text layer
        2. a clipped image-text layer using \`bg-clip-text\` and \`text-transparent\`
      * The clipped text should use the same image as the card background.
      * The clipped text should appear before the image fully reveals.
      * The image should fade in after the text expansion begins.
      * The final title/overlay layer should fade in near the end of the scroll.

      Card visual style:

      * Absolute positioned cards.
      * White card base.
      * Rounded corners.
      * Overflow hidden.
      * Border around the card.
      * Image background uses \`backgroundImage\`, \`backgroundPosition\`, and \`backgroundSize: cover\`.
      * Add a subtle overlay gradient on top of the image in the final state.
      * Final card titles should use large expressive typography.

      Accessibility:

      * Respect \`prefers-reduced-motion\`.
      * If reduced motion is enabled:

        * render the final bento grid state
        * avoid scroll-linked morphing
        * avoid scaling/opacity choreography
      * Decorative image layers should be \`aria-hidden="true"\`.
      * Use a descriptive \`aria-label\` on the section.
      * The layout should remain visually understandable without animation.

      Data example:
      Use a data-driven array of bento items. Include at least 5 cards:

      * Notes
      * Memories
      * Vision
      * Contacts
      * Messages

      Each item should define:

      * source rectangle
      * final bento rectangle
      * text fragment
      * image source
      * image position
      * title styling
      * optional foreground label
      * optional message text

      Expected usage:

      \`\`\`tsx
      <ScrollMorphBentoGrid />
      \`\`\`

      Return:

      1. Full \`ScrollMorphBentoGrid.tsx\` code.
      2. The \`Rect\` and \`BentoItem\` types.
      3. The \`BentoGridCard\` component.
      4. The \`PlainText\` component.
      5. A sample \`bentoItems\` array.
      6. Example usage in a Next.js page.
      7. Short notes explaining how to customize:

         * card positions
         * source text positions
         * images
         * scroll duration
         * transition timing
         * typography
         * reduced-motion behavior

      Important:
      Do not turn this into a static grid. The key interaction is the scroll-linked morph from text fragments into final image bento cards.
    `,
  },
  //keys hero design
  // {
  //   type: "showcase",
  //   title: "Keys Hero Design",
  //   stack: [""],
  //   media: {
  //     type: "video",
  //     src: "https://pub-17f1ae3c481641228230d1b2dcdc07ff.r2.dev/craft/keyboard-hero-design.mp4",
  //     width: 1662,
  //     height: 1080,
  //     alt: "keyboard",
  //   },
  //   col: 1,
  //   order: 12,
  //   xLink: "https://x.com/diip3sh/status/2062238370236125331?s=20",
  // },
  //liquid glass blob
  {
    type: "showcase",
    title: "Liquid Glass Blob",
    stack: [""],
    media: {
      type: "component",
      // src: "https://pub-17f1ae3c481641228230d1b2dcdc07ff.r2.dev/craft/liquid-glass-blob.mp4",
      componentKey: "liquid-glass-blob",
      alt: "liquid glass blob",
    },
    col: 1,
    order: 13,
    xLink: "https://x.com/diip3sh/status/2064000879494386083?s=20",
  },
  //paper shred button
  {
    type: "showcase",
    title: "Paper shred Button",
    stack: [""],
    media: {
      type: "component",
      componentKey: "paper-shred",
      alt: "paper shred button",
    },
    col: 2,
    order: 8,
    xLink: "https://x.com/diip3sh/status/2060018690025001034?s=20",
    resettable: true,
    prompt:
      'Create a reusable **Paper Shred Delete Button** component for an existing React + TypeScript codebase.\n\nBefore writing any code, ask me this clarification question and wait for my answer:\n\n**How should reset functionality be handled after the shred animation completes?**\n\nOffer these options:\n\n1. Show a visible **Reset** button below the shred interaction.\n2. Auto-reset after a short delay, for example 2-3 seconds.\n3. Expose a controlled reset API through props, so the parent component controls when the button resets.\n4. Do not reset automatically; keep the component in the shredded state.\n5. Suggest the best reset behavior based on the use case.\n\nDo not start implementation until I choose one of these reset behaviors.\n\nGoal:\nBuild a polished destructive-action micro-interaction where hovering or focusing a red delete button previews a document above it, and clicking the button animates the document being shredded into paper strips.\n\nThe component should feel tactile, playful, precise, and production-ready.\n\nComponent concept:\n\n* A red “Delete” button sits inside a small relative-positioned stage.\n* On hover or keyboard focus:\n\n  * the button slightly scales up\n  * the button lifts upward\n  * the trash icon rotates and scales\n  * a white document appears above the button\n* On click:\n\n  * the document visually shreds\n  * the document disappears using `clip-path`\n  * SVG paper strips draw in below the button\n  * the button becomes disabled while shredding\n* After shredding completes:\n\n  * handle the reset behavior based on my answer to the reset question\n\nState machine:\nUse this state model:\n\n```ts\ntype ShredState = "idle" | "preview" | "shredding" | "shredded"\n```\n\nState behavior:\n\n* `idle`\n\n  * button is normal\n  * document is hidden\n  * shredded strips are hidden\n* `preview`\n\n  * document appears above the button\n  * button has hover/focus emphasis\n  * icon rotates and scales\n* `shredding`\n\n  * document clips away\n  * shredded SVG paths draw in\n  * delete button is disabled\n* `shredded`\n\n  * document is hidden\n  * shredded strips remain visible\n  * reset behavior depends on the option I choose\n\nStack:\n\n* React\n* TypeScript\n* Tailwind CSS\n* Motion for React from `motion/react`\n\nUse:\n\n```ts\nimport type { Transition, Variants } from "motion/react"\nimport { motion, useReducedMotion } from "motion/react"\n```\n\nTechnical requirements:\n\n* Make it a client component with `"use client"`.\n* Use Motion variants for the button, icon, document, and shredded SVG.\n* Use `useState` for the shred state.\n* Use `useRef` to store the shred completion timeout.\n* Use `useEffect` cleanup to clear the timeout on unmount.\n* Use `useCallback` for interaction handlers.\n* Use `useMemo` for generated variants/transitions that depend on reduced motion.\n* Use Tailwind CSS for styling.\n* Use a `cn()` utility for class merging.\n* Keep the component self-contained and easy to paste into a Next.js or React app.\n\nDo not use:\n\n* GSAP\n* canvas\n* WebGL\n* external animation libraries other than Motion\n* real delete/destructive business logic\n* global CSS unless required\n\nButton behavior:\n\n* Render a `motion.button`.\n* Button text should default to `Delete`.\n* Include a trash/delete icon as an inline SVG.\n* Button should respond to:\n\n  * `onHoverStart`\n  * `onHoverEnd`\n  * `onFocus`\n  * `onBlur`\n  * `onClick`\n* Hover/focus should only move from `idle` to `preview`.\n* Leaving hover/blur should only move from `preview` back to `idle`.\n* Click should only work when state is `idle` or `preview`.\n* Button should be disabled during `shredding`.\n* Whether it stays disabled in `shredded` depends on the chosen reset behavior.\n\nButton visual design:\n\n* Red destructive button.\n* Rounded-xl shape.\n* White text.\n* Thick tactile border treatment:\n\n  * left/right/top border around 2px\n  * bottom border around 4px\n* On active press, reduce bottom border thickness to feel pressed.\n* Add hover color shift from red to deeper red.\n* Add a subtle red shadow in preview state.\n* Include focus-visible ring styles.\n\nButton variants:\nUse variants similar to:\n\n```ts\nconst buttonVariants: Variants = {\n  idle: {\n    x: "-50%",\n    scale: 1,\n    y: 0,\n    boxShadow: "0px 0px 0px rgba(3,7,18,0)",\n  },\n  preview: {\n    x: "-50%",\n    scale: 1.03,\n    y: -2,\n    boxShadow: "0px 8px 18px rgba(153,27,27,.18)",\n  },\n  shredding: {\n    x: "-50%",\n    scale: 1,\n    y: 0,\n    boxShadow: "0px 0px 0px rgba(3,7,18,0)",\n  },\n  shredded: {\n    x: "-50%",\n    scale: 1,\n    y: 0,\n    boxShadow: "0px 0px 0px rgba(3,7,18,0)",\n  },\n}\n```\n\nIcon behavior:\n\n* The icon should be decorative with `aria-hidden="true"`.\n* In preview, rotate slightly and scale up.\n* In shredding, keep a smaller rotated/scaled state.\n* In idle/shredded, reset to normal.\n\nDocument behavior:\n\n* Render a white document rectangle above the button.\n* It should be non-interactive with `pointer-events-none`.\n* It should have:\n\n  * fixed width and height\n  * subtle border\n  * white background\n  * light drop shadow\n* In `idle`, it is hidden and slightly lower/smaller.\n* In `preview`, it becomes visible and moves into place.\n* In `shredding`, it disappears using:\n\n```ts\nclipPath: "inset(100% 0% 0% 0%)"\n```\n\n* In `shredded`, it stays hidden.\n\nShredded strips:\n\n* Render shredded paper as an SVG positioned below the button.\n* Use multiple `motion.path` elements.\n* Each path should animate with:\n\n  * `pathLength`\n  * `opacity`\n  * `y`\n* Paths should stagger slightly by index.\n* Use `custom={index}` to drive staggered variants.\n* Use thick rounded strokes to look like torn paper strips.\n* The strips should appear during `shredding` and remain visible in `shredded`.\n\nTiming:\n\n* Default shred completion delay should be around `1500ms`.\n* Reduced-motion completion delay should be around `120ms`.\n* Document shredding transition should be around `1.15s` with this easing:\n\n```ts\n{ duration: 1.15, ease: [0.65, 0, 0.35, 1] }\n```\n\nReduced motion:\nRespect `prefers-reduced-motion`.\n\nIf reduced motion is enabled:\n\n* use near-instant transitions\n* avoid long path drawing\n* shorten the shred completion delay\n* preserve the meaning of the state change\n\nAccessibility:\n\n* The section should have an accessible label:\n\n```tsx\n<section aria-label="Shred document button demo">\n```\n\n* The delete button should have:\n\n```tsx\naria-label="Shred document"\n```\n\n* Decorative SVGs should use:\n\n```tsx\naria-hidden="true"\nfocusable="false"\n```\n\n* Hover and focus states should match.\n* Disabled states should be visually clear.\n* The reset behavior must remain keyboard accessible.\n\nLayout:\n\n* Center the demo inside its parent container.\n* Use a fixed-size relative stage around `240px` wide and `368px` tall.\n* Position the document above the button.\n* Position the button in the center.\n* Position the shredded SVG below the button.\n* If I choose a visible reset button, place it below the stage.\n\nExpected usage:\n\n```tsx\n<PaperShredButton />\n```\n\nReturn only after I answer the reset clarification question:\n\n1. Full `PaperShredButton.tsx` code.\n2. The `ShredState` type.\n3. Motion variants for button, icon, document, and shredded SVG.\n4. The shredded path data array.\n5. Helper functions for transitions and path variants.\n6. The selected reset implementation.\n7. Reduced-motion support.\n8. Short customization notes for:\n\n   * button label\n   * colors\n   * shred duration\n   * document size\n   * reset behavior\n   * disabled behavior\n\nImportant:\nDo not make this a normal delete button. The key interaction is the hover/focus document preview followed by a click-triggered shredding animation.',
  },
  //analog stick
  {
    type: "showcase",
    title: "Analog Stick",
    stack: [""],
    media: {
      type: "component",
      componentKey: "analog-stick",
      alt: "analog stick",
    },
    col: 1,
    order: 6,
    xLink: "https://x.com/diip3sh/status/2060384765774287014?s=20",
    prompt:
      'Create a reusable **Analog Stick Directional Pressure Button** component for an existing React + TypeScript codebase.\n\nGoal:\nBuild a polished analog-stick style directional button interaction using layered circular surfaces, metallic gradients, deep tactile shadows, directional arrow icons, and invisible hover zones. The component should feel like a physical joystick/D-pad hybrid: dimensional, responsive, mechanical, and portfolio-grade.\n\nComponent concept:\n\n* A circular analog stick sits in the center of a 300px interaction stage.\n* Four invisible hover zones sit above the analog stick:\n\n  * top\n  * right\n  * bottom\n  * left\n* When the user hovers a zone:\n\n  * the central button tilts toward that direction\n  * the button slightly translates in that direction\n  * the shadow changes to match the perceived physical pressure\n  * the matching directional arrow icon highlights with a warm amber fill and subtle glow\n* The interaction should be CSS-driven using Tailwind arbitrary selectors and `:has()`.\n* Do not use React state for the hover behavior unless required by the project.\n\nImportant implementation question:\nBefore writing the code, ask me this question and wait for my answer:\n\n**Should this component stay pure CSS using `:has()` hover zones, or should it also include pointer/touch support using React state for mobile devices?**\n\nOffer these options:\n\n1. Keep it pure CSS with `:has()` and hover-only behavior.\n2. Add React pointer tracking so it works with touch and drag.\n3. Keep the CSS version as default, but add an optional prop for enhanced pointer tracking.\n4. Suggest the best approach based on browser support and use case.\n\nDo not start implementation until I choose one option.\n\nStack:\n\n* React\n* TypeScript\n* Tailwind CSS\n* `cn()` utility for class merging\n\nDo not use:\n\n* Motion/Framer Motion\n* GSAP\n* Canvas\n* WebGL\n* external joystick libraries\n* JavaScript animation loops\n\nComponent name:\n\n```tsx\nexport const AnalogStick = () => {\n  return (...)\n}\n```\n\nExpected usage:\n\n```tsx\n<AnalogStick />\n```\n\nLayout:\n\n* Render a section with an accessible label:\n\n```tsx\n<section aria-label="Directional pressure button demo">\n```\n\n* The main stage should be:\n\n  * relative\n  * 320px tall\n  * full width\n  * centered content\n  * overflow hidden\n* Inside the stage, render:\n\n  1. invisible hover/touch-zone layer\n  2. visible analog-stick body\n  3. four directional icons\n\nInteraction layer:\n\n* Add an invisible absolute layer above the joystick.\n* Size should be around `300px x 300px`.\n* Rotate it by `45deg`.\n* Split it into four equal zones using flex-wrap.\n* Each zone should be around `150px x 150px`.\n* Use classes like:\n\n```tsx\n"t t1 size-[150px]"\n"t t2 size-[150px]"\n"t t3 size-[150px]"\n"t t4 size-[150px]"\n```\n\nHover mapping:\n\n* `t1:hover` should represent top pressure.\n* `t2:hover` should represent right pressure.\n* `t3:hover` should represent left pressure.\n* `t4:hover` should represent bottom pressure.\n\nDirectional behavior:\nWhen top zone is hovered:\n\n* Move button upward.\n* Rotate on the X axis.\n* Highlight the top arrow.\n\nUse a transform like:\n\n```css\ntranslate(0, -5px) rotateX(8deg)\n```\n\nWhen right zone is hovered:\n\n* Move button right.\n* Rotate on the Y axis.\n\nUse:\n\n```css\ntranslate(5px, 0) rotateY(8deg)\n```\n\nWhen left zone is hovered:\n\n* Move button left.\n* Rotate on the Y axis in the opposite direction.\n\nUse:\n\n```css\ntranslate(-5px, 0) rotateY(-8deg)\n```\n\nWhen bottom zone is hovered:\n\n* Move button downward.\n* Rotate on the X axis in the opposite direction.\n\nUse:\n\n```css\ntranslate(0, 5px) rotateX(-8deg)\n```\n\nUse Tailwind arbitrary `:has()` selectors:\n\n```tsx\n"[&:has(.t1:hover)_.button-wrapper]:[transform:translate(0,-5px)_rotateX(8deg)]"\n"[&:has(.t2:hover)_.button-wrapper]:[transform:translate(5px,0)_rotateY(8deg)]"\n"[&:has(.t3:hover)_.button-wrapper]:[transform:translate(-5px,0)_rotateY(-8deg)]"\n"[&:has(.t4:hover)_.button-wrapper]:[transform:translate(0,5px)_rotateX(-8deg)]"\n```\n\nAlso apply:\n\n```tsx\n"[&:has(.t1:hover)_.button-wrapper]:[transform-style:preserve-3d]"\n```\n\nRepeat the same `transform-style: preserve-3d` logic for all four hover zones.\n\nVisual design:\nCreate the analog stick using layered circles:\n\n1. Outer stage wrapper:\n\n* relative\n* 300px square\n* centered\n\n2. Outer ring:\n\n* circular\n* around `size-50`\n* gradient from light silver to darker gray\n* use:\n\n```css\nlinear-gradient(0deg, #f5f8fa, #9da4a8)\n```\n\n3. Inner handle bowl:\n\n* circular\n* around `155px`\n* blue-gray surface\n* heavy inset shadows\n* deep outer shadow\n* should feel recessed\n\n4. Central button wrapper:\n\n* circular\n* around `102px`\n* metallic gradient\n* deep stacked shadow\n* transition all around `250ms`\n* ease-out\n* this is the element that tilts/moves\n\n5. Inner button face:\n\n* circular\n* around `85px`\n* lighter gradient\n* subtle inset highlights\n* contains four small dots\n\nCentral button default shadow:\nUse a multi-layer shadow similar to:\n\n```css\n0 9px 14px rgba(0,0,0,0.5),\n0 19px 8px -2px rgba(0,0,0,0.2),\n0 33px 8px rgba(0,0,0,0.4),\n0 -12px 10px rgba(255,255,255,0.5),\ninset 0 3px 3px rgba(255,255,255,0.6),\ninset 0 -3px 3px rgba(89,91,92,0.6)\n```\n\nEach direction should have a slightly different shadow so the lighting feels physically correct.\n\nTop press shadow:\n\n* stronger shadow below\n* stronger highlight above\n* button appears tilted upward\n\nRight press shadow:\n\n* shadow shifts toward the right side\n* highlight shifts toward upper-left\n\nLeft press shadow:\n\n* shadow shifts toward the left side\n* highlight shifts toward upper-right\n\nBottom press shadow:\n\n* shadow becomes heavier and lower\n* top highlight becomes stronger\n\nDots:\n\n* Add four small circular dots inside the central face.\n* Position them at:\n\n  * top center\n  * right center\n  * bottom center\n  * left center\n* Dot size around `8px`.\n* Use a light surface color and inset shadow.\n\nExample dot class:\n\n```tsx\nconst dotClassName = cn(\n  "absolute size-[8px] -translate-x-1/2 -translate-y-1/2 rounded-[50%]",\n  "bg-[#e7ecef]",\n  "shadow-[0_2px_2px_rgba(0,0,0,0.3),inset_0_-2px_2px_rgba(0,0,0,0.2)]"\n)\n```\n\nDirectional icons:\n\n* Render four SVG arrow icons:\n\n  * top\n  * right\n  * bottom\n  * left\n* Icons should be decorative:\n\n```tsx\naria-hidden="true"\nfocusable="false"\n```\n\n* Default icon style:\n\n  * absolute positioned\n  * width around `30px`\n  * fill `#b4b9bd`\n  * subtle white drop shadow\n* On matching zone hover:\n\n  * fill changes to warm amber\n  * add brightness and glow filter\n\nExample active icon effect:\n\n```css\nfill: #e3a560;\nfilter: brightness(0.9)\n  drop-shadow(0 0 2px #e3a15b)\n  drop-shadow(0 0 1px #fff);\n```\n\nUse a typed direction icon array:\n\n```ts\ntype DirectionIcon = {\n  className: string\n  path: string\n  viewBox: string\n}\n```\n\nThen map over:\n\n```tsx\nconst directionIcons: DirectionIcon[] = [...]\n```\n\nAccessibility:\n\n* The hover zones should be hidden from screen readers with `aria-hidden="true"`.\n* Direction icons should also be decorative and hidden from assistive tech.\n* The section should have a clear `aria-label`.\n* Since this is a visual demo and not a real form control, do not fake button semantics unless keyboard interaction is implemented.\n* If implementing pointer/touch support, make sure keyboard users get an equivalent interaction.\n\nBrowser support:\n\n* The pure CSS version depends on `:has()`.\n* Keep the selectors readable and grouped by direction.\n* Mention that older browsers without `:has()` may not get the hover-driven tilt.\n* If I choose enhanced pointer tracking, provide a fallback that does not depend fully on `:has()`.\n\nCode organization:\nReturn:\n\n1. Full `AnalogStick.tsx` component.\n2. `DirectionIcon` type.\n3. `rowClassName`.\n4. `dotClassName`.\n5. `iconClassName`.\n6. `touchZoneClassNames`.\n7. `dotClassNames`.\n8. `directionIcons` data array.\n9. Final JSX.\n10. Short customization notes.\n\nCustomization notes should explain how to adjust:\n\n* component size\n* press distance\n* tilt angle\n* icon color\n* active glow\n* metallic gradients\n* shadow intensity\n* hover-zone size\n* pure CSS vs pointer-tracked behavior\n\nImportant:\nDo not simplify this into a normal D-pad. The main value is the physical analog-stick illusion created through layered circles, directional hover zones, `:has()` selectors, transforms, changing shadows, and highlighted direction icons.',
  },
  //polaroid stack
  {
    type: "showcase",
    title: "Polaroid stack",
    stack: [""],
    media: {
      type: "component",
      componentKey: "polaroid-stack",
      alt: "polaroid stack",
    },
    col: 2,
    order: 2,
    xLink: "https://x.com/diip3sh/status/2060767406562398324?s=20",
    prompt: `Create a reusable **Polaroid Fan Stack** component for an existing React + TypeScript codebase.

Goal:
Build a polished photo-card stack where multiple Polaroid-style cards sit stacked in the center, then fan outward into a wide arc when the user hovers the component. The interaction should feel simple, tactile, editorial, and portfolio-grade.

Component concept:

* Render 7 portrait photo cards.
* In the idle state, all cards are stacked in the center.
* Each card has the same base size, border, rounded corners, and Polaroid-style white frame.
* On hover over the parent container:

  * the cards rotate outward from left to right
  * the stack opens like a hand of cards
  * the middle card stays close to \`0deg\`
  * side cards rotate progressively outward
* Each individual card should slightly scale up on hover.

Stack:

* React
* TypeScript
* Tailwind CSS
* \`cn()\` utility for class merging

Do not use:

* Motion/Framer Motion
* GSAP
* Canvas
* WebGL
* JavaScript animation state
* external carousel/card libraries

Component name:

\`\`\`tsx
export const PolaroidStack = () => {
  return (...)
}
\`\`\`

Expected usage:

\`\`\`tsx
<PolaroidStack />
\`\`\`

Data structure:
Create a typed photo-card data array:

\`\`\`ts
type FanCard = {
  src: string
  alt: string
  hoverClassName: string
}
\`\`\`

Use a \`fanCards\` array with 7 cards.

Each card should include:

* \`src\`
* \`alt\`
* \`hoverClassName\`

The \`hoverClassName\` should define each card’s final rotation on parent hover.

Example hover rotations:

\`\`\`ts
-54deg
-36deg
-18deg
0deg
18deg
36deg
54deg
\`\`\`

Layout:

* The section should be full width.
* Height should be around \`560px\`.
* Center the stack horizontally and vertically.
* Hide overflow so the fanned cards stay clean inside the section.
* Use an accessible section label:

\`\`\`tsx
<section aria-label="Fanned photo cards">
\`\`\`

Parent wrapper:

* Use a \`group\` class on the parent wrapper.
* The parent should fill the section.
* The hover state should be driven by \`group-hover\`.

Card base styling:
Each card should be absolutely positioned in the center:

\`\`\`tsx
"absolute top-1/2 left-1/2"
"-translate-x-1/2 -translate-y-1/2"
\`\`\`

Card size:

* height around \`226px\`
* width around \`152px\`

Polaroid frame:

* rounded corners around \`8%\`
* white border around \`5px\`
* larger bottom border around \`40px\`
* light gray card background

Transform origin:
Use bottom-left transform origin so the fan motion feels like the cards are pivoting from one shared hand-held point:

\`\`\`tsx
"origin-bottom-left"
\`\`\`

Idle transform:
Cards should start stacked with a slight upward translation:

\`\`\`css
rotate(0deg) translate(0px, -8px)
\`\`\`

Hover transforms:
Each card should receive a different \`group-hover\` transform.

Examples:

\`\`\`tsx
"group-hover:[transform:rotate(-54deg)_translate(0px,-8px)]"
"group-hover:[transform:rotate(-36deg)_translate(0px,-8px)]"
"group-hover:[transform:rotate(-18deg)_translate(0px,-8px)]"
"group-hover:[transform:rotate(0deg)_translate(0px,-8px)]"
"group-hover:[transform:rotate(18deg)_translate(0px,-8px)]"
"group-hover:[transform:rotate(36deg)_translate(0px,-8px)]"
"group-hover:[transform:rotate(54deg)_translate(0px,-8px)]"
\`\`\`

Card hover:
Each individual card should scale up slightly on hover:

\`\`\`tsx
"hover:[scale:1.1]"
\`\`\`

Animation:

* Use Tailwind transition classes.
* Duration should be around \`200ms\`.
* Keep the interaction quick and snappy.
* Do not use JavaScript state for the animation.

Image behavior:

* Each image should fill the card.
* Use \`object-cover\`.
* Use \`loading="lazy"\`.
* Use \`draggable={false}\` so the images do not accidentally drag during interaction.
* Each image must have a meaningful \`alt\`.

Example image element:

\`\`\`tsx
<img
  className="h-full w-full object-cover"
  draggable={false}
  loading="lazy"
  src={src}
  alt={alt}
/>
\`\`\`

Accessibility:

* Use a semantic \`section\`.
* Add \`aria-label="Fanned photo cards"\`.
* Every image should have descriptive alt text.
* Do not make cards keyboard-focusable unless they are clickable.
* If cards become links later, use real anchor tags and visible focus states.
* The hover fan effect should be decorative, not required to understand the content.

Implementation requirements:
Return:

1. Full \`PolaroidStack.tsx\` component.
2. \`FanCard\` type.
3. Shared \`cardClassName\`.
4. \`fanCards\` data array.
5. Final JSX mapping over the card data.
6. Short customization notes explaining how to change:

   * number of cards
   * card size
   * fan angle
   * transition duration
   * image sources
   * border thickness
   * Polaroid frame size
   * scale-on-hover amount

Important:
Do not turn this into a carousel. The key interaction is a centered stack that fans outward on parent hover using CSS transforms and Tailwind \`group-hover\`.`,
  },
  //scan document interaction
  {
    type: "showcase",
    title: "Scan document interaction",
    stack: [""],
    media: {
      type: "component",
      componentKey: "scan-document",
      alt: "scan document button",
    },
    col: 2,
    order: 6,
    xLink: "",
    resettable: true,
    prompt: `Create a reusable **Scan Document Button** component for an existing React + TypeScript codebase.

Before writing any code, ask me this clarification question and wait for my answer:

**How should the component behave after the scan reaches the “Done” state?**

Offer these options:

1. Keep it in the \`Done\` state and keep the button disabled.
2. Auto-reset back to \`Scan\` after a short delay.
3. Show a visible **Reset** button after scanning completes.
4. Expose an \`onComplete\` callback so the parent component decides what happens next.
5. Make it controlled with \`status\` and \`onStatusChange\` props.
6. Suggest the best behavior based on whether this is a demo component or a real product action.

Do not start implementation until I choose one of these completion/reset behaviors.

Goal:
Build a polished document-scanning micro-interaction where clicking a button starts a scanner animation. A document appears above the button, unfolds into view, rotates around the Y axis like a physical paper flip, and a glowing scan bar travels down and back across the document.

The component should feel precise, tactile, and portfolio-grade.

Component concept:

* Initial state shows a button labeled \`Scan\`.
* Clicking the button starts the scanning animation.
* While scanning:

  * button label changes to \`Scanning\`
  * button becomes disabled
  * document appears above the button
  * document scales open from the bottom
  * document rotates in 3D around the Y axis
  * scan bar travels vertically across the document
* When the scan completes:

  * button label changes to \`Done\`
  * post-scan behavior depends on my answer to the clarification question

State model:
Use this status model:

\`\`\`ts
type Status = "idle" | "scanning" | "done"
\`\`\`

Status labels:

\`\`\`ts
const LABELS: Record<Status, string> = {
  idle: "Scan",
  scanning: "Scanning",
  done: "Done",
}
\`\`\`

Stack:

* React
* TypeScript
* Tailwind CSS
* Motion for React from \`motion/react\`

Use:

\`\`\`ts
import type { TargetAndTransition, Transition } from "motion/react"
import { AnimatePresence, motion, useReducedMotion } from "motion/react"
\`\`\`

Technical requirements:

* Make it a client component with \`"use client"\`.
* Use \`useState\` for scan status.
* Use \`useRef\` to store the scan completion timeout.
* Use \`useEffect\` cleanup to clear the timeout on unmount.
* Use \`useCallback\` for event handlers.
* Use \`useMemo\` for scan transitions.
* Use \`AnimatePresence\` to mount/unmount the scanning document.
* Use Motion keyframe arrays for document rotation and scan-bar movement.
* Use Tailwind CSS for styling.
* Keep the component self-contained and easy to paste into a Next.js or React app.

Do not use:

* GSAP
* canvas
* WebGL
* external animation libraries other than Motion
* JavaScript animation loops
* real OCR/scanning logic

Timing:
Use timing constants similar to:

\`\`\`ts
const SCAN_DURATION_MS = 5000
const SCAN_EXIT_DURATION_SECONDS = 0.4
const SCAN_ANIMATION_DURATION_SECONDS =
  SCAN_DURATION_MS / 1000 - SCAN_EXIT_DURATION_SECONDS
const SCAN_BAR_TRAVEL = 132
\`\`\`

Scan movement:
Use keyframe timing similar to:

\`\`\`ts
const SCAN_MOVE_TIMES = [0, 0.1, 0.45, 0.55, 0.9, 1]
const SCAN_CONTAINER_TIMES = [0, 0.55, 1]
\`\`\`

Document rotation:
The document should rotate around the Y axis in a full 360-degree cycle:

\`\`\`ts
const DOCUMENT_ROTATE_Y = [0, 0, 180, 180, 360, 360]
\`\`\`

Scan bar movement:
The scan bar should move from top to bottom, pause, then return:

\`\`\`ts
const SCAN_BAR_Y = [0, 0, 1, 1, 0, 0].map(
  (progress) => progress * SCAN_BAR_TRAVEL
)
\`\`\`

Component structure:
Create these components:

1. \`ScanDocumentButton\`

* Owns the status state.
* Handles the scan click.
* Starts the timeout.
* Shows the scanning document only during the \`scanning\` state.
* Renders the button.
* Handles the selected reset/completion behavior.

2. \`ScanningDocument\`

* Renders the animated document.
* Uses \`motion.div\` for the entrance and exit.
* Uses a 3D perspective container.
* Rotates the document around the Y axis.
* Contains front and back faces.
* Contains two scan bars so the light stays visible during the 3D flip.

3. \`ScanBar\`

* Receives:

\`\`\`ts
type ScanBarProps = {
  transition: Transition
  z: number
}
\`\`\`

* Renders a glowing horizontal scan bar.
* Animates its vertical \`y\` position using the scan cycle transition.
* Uses orange gradients, glow shadows, and small blurred end caps.

4. \`Icon\`

* Inline scanner/crop-style SVG icon.
* Accepts:

\`\`\`ts
{
  size?: number
  color?: string
}
\`\`\`

Scanning document visual:

* Document size around \`110px x 150px\`.
* Parent should use:

\`\`\`tsx
<div className="h-[150px] w-[110px] [perspective:900px]">
\`\`\`

* Inner document should use:

\`\`\`tsx
"[transform-style:preserve-3d]"
\`\`\`

* Front face:

  * white
  * rounded
  * subtle shadow
  * fake document lines
  * small circle/avatar mark
  * signature-like mark near bottom
  * \`backface-visibility: hidden\`
* Back face:

  * zinc/gray
  * rotated with \`rotateY(180deg)\`
  * \`backface-visibility: hidden\`
* Add a thin spine-like vertical strip at the center to make the 3D flip feel more physical.

Scan bar visual:

* Width around \`124px\`.
* Height around \`7px\`.
* Rounded full.
* Orange gradient:

  * darker orange top/bottom
  * lighter orange center
* Add glow using box shadows.
* Add a thin white highlight line.
* Add blurred glowing dots on the left and right ends.

Button behavior:

* Button starts enabled in \`idle\`.
* Clicking only works when status is \`idle\`.
* During \`scanning\`, disable the button.
* During \`done\`, behavior depends on my selected completion/reset option.
* Button label and \`aria-label\` should use the current status label.

Button visual:

* Rounded-md button.
* Border with thicker bottom border.
* Scanner icon on the left.
* Label on the right.
* Use a tactile pressed-button style.
* Keep the styling easy to customize.

Layout:

* Render a section with:

\`\`\`tsx
<section aria-label="Document scanner">
\`\`\`

* Height around \`320px\`.
* Center content vertically and horizontally.
* Use a top visual area around \`170px\` tall for the scanning document.
* Place the button below the scan animation.
* Use \`AnimatePresence\` so the document exits cleanly.

Reduced motion:
Respect \`prefers-reduced-motion\`.

If reduced motion is enabled:

* avoid the full 3D rotateY cycle
* shorten the scan duration
* keep the status changes clear
* show a simpler scan indication or instantly transition to done after a short delay
* preserve the meaning of the interaction without long motion

Accessibility:

* Use a semantic \`button\`.
* Button should have an \`aria-label\` based on current status.
* Decorative scanning document should use \`aria-hidden="true"\`.
* Decorative icon paths should not create extra screen-reader noise.
* Disabled states should be visually clear.
* If a reset button is used, it must be keyboard accessible.
* Do not rely on animation alone to communicate completion; the button text should change to \`Done\`.

Expected usage:

\`\`\`tsx
<ScanDocumentButton />
\`\`\`

Return only after I answer the completion/reset clarification question:

1. Full \`ScanDocumentButton.tsx\` code.
2. The \`Status\` type.
3. \`ScanBar\` component.
4. \`ScanningDocument\` component.
5. \`Icon\` component.
6. Timing constants.
7. Motion transitions.
8. Timeout cleanup logic.
9. The selected completion/reset behavior.
10. Reduced-motion support.
11. Short customization notes for:

* scan duration
* scan bar color
* document size
* button styling
* done/reset behavior
* icon replacement
* 3D rotation intensity

Important:
Do not simplify this into a normal loading button. The key interaction is the physical document scan illusion: unfolding document, 3D rotateY flip, glowing scan bar travel, and final done state.`,
  },
  //theme toggle
  {
    type: "showcase",
    title: "Theme Toggle",
    stack: [""],
    media: {
      type: "component",
      componentKey: "theme-toggle",
      alt: "theme toggle",
    },
    col: 1,
    order: 1,
    xLink: "https://x.com/diip3sh/status/2061849773871862146?s=20",
  },
  //set timer interaction
  {
    type: "showcase",
    title: "Set timer interaction",
    stack: [""],
    media: {
      type: "component",
      componentKey: "set-timer",
      alt: "set timer interaction",
    },
    col: 1,
    order: 9,
    resettable: true,
    xLink: "https://x.com/diip3sh/status/2062596358243250393?s=20",
    prompt: `Create a reusable **Morphing Timer Picker** component for an existing React + TypeScript codebase.

Before writing any code, ask me which package manager I use and wait for my answer.

Then install the required wheel picker dependency using the matching command:

\`\`\`bash
bunx --bun shadcn@latest add @ncdai/wheel-picker
\`\`\`

\`\`\`bash
npx shadcn@latest add @ncdai/wheel-picker
\`\`\`

\`\`\`bash
yarn dlx shadcn@latest add @ncdai/wheel-picker
\`\`\`

\`\`\`bash
pnpm dlx shadcn@latest add @ncdai/wheel-picker
\`\`\`

Use the command that matches my package manager:

* Bun → \`bunx --bun shadcn@latest add @ncdai/wheel-picker\`
* npm → \`npx shadcn@latest add @ncdai/wheel-picker\`
* Yarn → \`yarn dlx shadcn@latest add @ncdai/wheel-picker\`
* pnpm → \`pnpm dlx shadcn@latest add @ncdai/wheel-picker\`

Do not start implementation until the wheel picker setup is confirmed.

Goal:
Build a polished morphing timer component that starts as a compact “Set timer” pill, expands into a minute wheel picker, and then morphs into a running timer surface with pause/resume, cancel, and a rounded-rectangle border progress indicator.

The component should feel like a high-quality native timer interaction: soft, dimensional, smooth, tactile, and portfolio-grade.

Component concept:

* Initial compact mode:

  * dark rounded pill
  * timer icon
  * label: \`Set timer\`
* Picker mode:

  * surface expands vertically and horizontally
  * wheel picker appears on the left
  * selected minute value is shown in a large iOS-style wheel
  * \`mins\` label appears beside the selected number
  * \`Start\` button appears on the right
* Running mode:

  * surface morphs into a wider timer panel
  * rounded-rectangle progress border traces the full container perimeter
  * remaining time is shown with tabular numbers
  * \`Pause\` button appears
  * \`Cancel\` button appears
* Paused mode:

  * timer stops counting down
  * \`Pause\` button label animates to \`Resume\`
  * progress border and remaining time stay frozen
* Cancel:

  * returns to compact mode
  * avoids flashing the progress border back to full during the exit transition

State model:
Use this mode model:

\`\`\`ts
type TimerMode = "compact" | "picker" | "running" | "paused"
\`\`\`

Stack:

* React
* TypeScript
* Tailwind CSS
* Motion for React from \`motion/react\`
* \`@ncdai/react-wheel-picker\`
* \`cn()\` utility for class merging

Required imports:

\`\`\`ts
"use client"

import "@ncdai/react-wheel-picker/style.css"

import { useEffect, useRef, useState, type ComponentProps } from "react"
import { AnimatePresence, motion, useReducedMotion } from "motion/react"
import * as WheelPickerPrimitive from "@ncdai/react-wheel-picker"
import { cn } from "@/lib/utils"
\`\`\`

Do not use:

* GSAP
* canvas
* WebGL
* date/time libraries
* external animation libraries other than Motion
* native \`<select>\`
* custom scroll physics from scratch

Main component name:

\`\`\`tsx
export const SetTimer = () => {
  return (...)
}
\`\`\`

Expected usage:

\`\`\`tsx
<SetTimer />
\`\`\`

Timer dimensions:
Define per-mode surface dimensions:

\`\`\`ts
const SURFACE_DIMENSIONS: Record<
  TimerMode,
  { width: number; height: number; borderRadius: number }
> = {
  compact: { width: 300, height: 84, borderRadius: 42 },
  picker: { width: 342, height: 286, borderRadius: 48 },
  running: { width: 390, height: 180, borderRadius: 48 },
  paused: { width: 390, height: 180, borderRadius: 48 },
}
\`\`\`

The main timer surface should animate:

* width
* height
* borderRadius
* opacity on entry

Use Motion spring transition:

\`\`\`ts
{ type: "spring", stiffness: 400, damping: 30, mass: 1.5 }
\`\`\`

Respect \`prefers-reduced-motion\`:

* use short duration transitions
* avoid excessive scaling
* preserve all state changes clearly

Minute options:
Create minute options from 1 to 60:

\`\`\`ts
const MIN_MINUTES = 1
const MAX_MINUTES = 60
\`\`\`

Each wheel picker option should contain:

* \`label\`
* \`value\`
* \`textValue\`

Use the wheel picker primitive types:

\`\`\`ts
type WheelPickerValue = WheelPickerPrimitive.WheelPickerValue
type WheelPickerOption<T extends WheelPickerValue = string> =
  WheelPickerPrimitive.WheelPickerOption<T>
\`\`\`

Wheel picker setup:
Create local wrappers around the primitive components:

1. \`WheelPickerWrapper\`

* wraps \`WheelPickerPrimitive.WheelPickerWrapper\`
* adds border, background, dark-mode styles, and rounded highlight edges

2. \`WheelPicker\`

* wraps \`WheelPickerPrimitive.WheelPicker\`
* customizes:

  * \`optionItem\`
  * \`highlightWrapper\`
  * \`highlightItem\`

Minute picker behavior:
Create a \`MinutePicker\` component with props:

\`\`\`ts
type MinutePickerProps = {
  selectedMinutes: number
  onChange: (minutes: number) => void
}
\`\`\`

Wheel picker configuration:

* \`infinite\`
* \`visibleCount={20}\`
* \`optionItemHeight={44}\`
* \`dragSensitivity={4}\`
* \`scrollSensitivity={10}\`

The selected item should be large, white, and tabular:

\`\`\`tsx
"text-[40px] font-normal leading-none text-white tabular-nums"
\`\`\`

Progressive blur:
Add progressive blur overlays above and below the picker center row.

Create a \`BlurLayer\` component with:

\`\`\`ts
{
  blur: number
  maskFrom: number
  maskTo: number
  side: "top" | "bottom"
}
\`\`\`

Use stacked \`backdrop-filter\` layers with masked bands:

* top blur layers:

  * blur 2px, mask 0–35
  * blur 4px, mask 30–65
  * blur 7px, mask 60–95
* bottom blur layers:

  * blur 2px, mask 0–35
  * blur 4px, mask 30–65
  * blur 7px, mask 60–95

Also add a vertical fade overlay at the extremes so the picker feels like a native wheel.

Content layers:
Create a reusable \`ContentLayer\` component:

\`\`\`ts
type ContentLayerProps = {
  children: React.ReactNode
  isVisible: boolean
  className?: string
}
\`\`\`

Behavior:

* All content layers are absolutely positioned.
* Visible layer:

  * opacity 1
  * scale 1
  * pointer events enabled
* Hidden layer:

  * opacity 0
  * scale 0.95
  * pointer events disabled
  * \`aria-hidden\`
  * \`inert\`

Use Motion transitions:

* visible enter: around 0.22s with slight delay
* exit: around 0.15s
* reduced motion: around 0.1s

Timer countdown logic:

* Store selected minutes in state.
* Store remaining seconds in state.
* Store deadline timestamp in a ref.
* Store total seconds in a ref.
* When running:

  * calculate remaining time from \`deadlineRef.current - Date.now()\`
  * update every 250ms
  * use \`Math.ceil\`
  * when remaining reaches 0:

    * clear deadline
    * return to picker mode

Use this formatter:

\`\`\`ts
const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = seconds % 60

  return \`\${minutes}:\${remainingSeconds.toString().padStart(2, "0")}\`
}
\`\`\`

Handlers:
Implement:

* \`handleOpenPicker\`
* \`handleStart\`
* \`handlePauseResume\`
* \`handleCancel\`
* \`handleMinutesChange\`

Behavior details:

* \`handleOpenPicker\`

  * reset remaining seconds to selected minutes
  * switch to picker mode
* \`handleStart\`

  * set total seconds
  * set remaining seconds
  * set deadline
  * switch to running mode
* \`handlePauseResume\`

  * if running: clear deadline and switch to paused
  * if paused: create a new deadline from current remaining seconds and switch to running
* \`handleCancel\`

  * clear deadline
  * switch to compact
  * keep \`remainingSeconds\` unchanged during exit so progress border does not flash back to full
* \`handleMinutesChange\`

  * update selected minutes
  * update remaining seconds

Timer border:
Create a \`TimerBorder\` component with props:

\`\`\`ts
type TimerBorderProps = {
  remainingSeconds: number
  totalSeconds: number
  width: number
  height: number
  borderRadius: number
}
\`\`\`

The border should:

* trace the full rounded-rectangle perimeter
* start and end at the top center
* draw clockwise
* use a dark background stroke
* use a primary-colored animated progress stroke
* use \`pathLength={1}\`
* use \`strokeDasharray={1}\`
* animate \`strokeDashoffset\` to \`1 - progress\`

Progress formula:

\`\`\`ts
const progress = totalSeconds === 0 ? 0 : remainingSeconds / totalSeconds
\`\`\`

Use an explicit SVG path instead of \`<rect>\` so the dash origin starts at top center.

Button/content visual details:
Compact mode:

* dark surface
* full-size button
* timer icon on left
* large \`Set timer\` text
* focus-visible ring

Picker mode:

* wheel picker on left
* green \`Start\` button on right
* Start button has \`whileTap={{ scale: 0.96 }}\`

Running/paused mode:

* progress border behind content
* Pause/Resume button on left
* time in the middle/right with tabular numbers
* Cancel button on right
* Pause/Resume label should animate vertically using \`AnimatePresence\`

Pause/Resume label animation:
Use:

\`\`\`tsx
<AnimatePresence initial={false} mode="popLayout">
\`\`\`

The label should slide:

* initial: \`y: "100%", opacity: 0\`
* animate: \`y: "0%", opacity: 1\`
* exit: \`y: "-100%", opacity: 0\`

Timer icon:
Create an inline \`TimerIcon\` SVG.

* size around \`40px\`
* white fill
* partially transparent background circle
* no external icon dependency

Accessibility:

* Main surface should have:

\`\`\`tsx
aria-label="Timer"
\`\`\`

* Use real buttons for all interactions.
* Use focus-visible rings.
* Hidden content layers should use:

  * \`aria-hidden\`
  * \`inert\`
  * pointer-events disabled
* The wheel picker should remain keyboard/focus accessible through the primitive.
* Timer text should be readable and not rely only on the border progress.
* Do not trap focus.
* Reduced motion should preserve usability.

Layout:

* Outer container:

  * height around \`500px\`
  * full width
  * centered content
  * overflow hidden
  * light gray background \`#e9e9e9\`
* Timer surface:

  * relative
  * minimum width around \`250px\`
  * overflow hidden
  * background \`#2c2c2c\`
  * shadow-sm

Return:

1. Full \`SetTimer.tsx\` component.
2. Wheel picker setup/import instructions.
3. The package installation command for my package manager.
4. \`WheelPickerWrapper\`.
5. \`WheelPicker\`.
6. \`TimerMode\` type.
7. Minute options.
8. \`TimerIcon\`.
9. \`ContentLayer\`.
10. \`MinutePicker\`.
11. \`BlurLayer\`.
12. \`TimerBorder\`.
13. Timer countdown logic.
14. Pause/resume/cancel behavior.
15. Reduced-motion support.
16. Short customization notes for:

* default selected minutes
* min/max minutes
* wheel picker height
* surface dimensions
* border progress color
* timer duration behavior
* compact/picker/running labels
* dark/light theme styling

Important:
Do not simplify this into a normal timer form. The key interaction is the morphing surface: compact timer button → wheel picker → running timer with rounded-rectangle progress border.`,
  },
]
