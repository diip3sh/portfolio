# Project Detail Page Design Notes (`/projects/:slug`)

Running source of truth captured from the Framer template. Record all variants
and original shared components here before final integration.

Follows the same capture rules as `docs/404.md` and `docs/home.md`:
- Node IDs, layout attrs, text content, component IDs, gaps, padding
- Mark replica MCP noise when Desktop capture repeats IDs
- Note `Pending original-component capture` where instance internals not yet inspected
- Record portfolio replacement content separately from template originals

**Framer page:** `cJLp6RxTk` → path `/projects/:slug`

## Breakpoints

| Variant | Range | Framer Width |
| --- | --- | --- |
| Phone | `0px-809px` | `390px` |
| Tablet | `810px-1199px` | `810px` |
| Desktop | `1200px+` | `1200px` |

## Phone

### Capture Note

- Verified via Framer MCP on 2026-06-15.
- User selected full Phone variant tree on `/projects/:slug`.
- Sample CMS project instance: **Pulse** (slug inferred from title).

### Root

- Node: `Phone`
- Node ID: `M5N4p96jd`
- Width: `390px`
- Height: `fit-content` (canvas frame; page scrolls beyond)
- Background: `/Black`
- Layout: vertical stack
- Overflow: visible
- Fixed overlays (outside Main flow):
  1. `Phone navigation` — `M5N4p96jdRbHFuYTFW`, fixed, `top: 12px`
- Utility overlays:
  - `Smooth Scroll` — `M5N4p96jdQpfUJ44rA`, relative, exclude from portfolio
- No `Get template - fixed button` instances on project phone root.

### Main

- Node ID: `M5N4p96jdF62ooAAPL`
- Width: `1fr`
- Height: `fit-content`
- Layout: vertical stack
- Gap: `60px`
- Padding: `0`
- Distribution: start
- Alignment: start
- Overflow: visible
- Child order:
  1. Left content column
  2. Right gallery column

### Left

- Node ID: `M5N4p96jdcTg_yypPh`
- Width: `1fr`
- Height: `fit-content`
- Background: `/Black`
- Layout: vertical stack
- Distribution: start
- Alignment: center
- Overflow: clip
- Z-index: `1`
- Child order:
  1. ScrollProgress (hidden)
  2. Content

### Left ScrollProgress

- Node ID: `M5N4p96jdZkSWBvO8l`
- Component name: `ScrollProgress`
- Width: `1fr`
- Height: `3px`
- Position: sticky
- Top: `0px`
- Visible: `false`

### Left Content

- Node ID: `M5N4p96jdSawgCaeaG`
- Width: `1fr`
- Height: `fit-content`
- Layout: vertical stack
- Gap: `50px`
- Padding: `80px 20px 20px 20px`
- Distribution: center
- Alignment: center
- Overflow: clip
- Child order:
  1. Intro
  2. Info
  3. Details
  4. Footer component

### Intro

- Node ID: `M5N4p96jdbyfY4wCoD`
- Width: `1fr`
- Height: `fit-content`
- Layout: vertical stack
- Gap: `40px`
- Padding: `0`
- Distribution: center
- Alignment: center
- Overflow: clip
- Child order:
  1. Title
  2. Button

### Title

- Node ID: `M5N4p96jdtLhz6M44T`
- Width: `1fr`
- Height: `fit-content`
- Layout: vertical stack
- Gap: `12px`
- Distribution: center
- Alignment: start
- Overflow: clip
- Child order:
  1. Back button
  2. Content (name group)

### Back Button

- Node ID: `M5N4p96jdbGl1RCncH`
- Width: `1fr`
- Height: `fit-content`
- Layout: horizontal stack
- Gap: `8px`
- Padding: `0 0 32px 0`
- Distribution: start
- Alignment: center
- Overflow: clip
- Child order:
  1. `Secondary` component — `M5N4p96jdbqGh6t1IR`
- Button label and icon direction: pending original `Secondary` component
  inspection (see `docs/home.md` Secondary section, `TKI2NIUQG`).
- Likely back-to-home or back-to-work navigation with icon-left arrow.

### Title Content (name group)

- Node ID: `M5N4p96jdTLtAutB1N`
- Layout: vertical stack
- Gap: `12px`
- Distribution: center
- Alignment: start
- Child order:
  1. Project name
  2. Project summary

### Project Name

- Text node ID: `M5N4p96jdSd2kHnLFg`
- Original text: `Pulse`
- Width: `1fr`
- Text style: `/Heading 1` (inferred from home/404 phone pattern)
- Known phone text style:
  - Size: `22px`
  - Weight: medium
  - Line height: `1.1em`
  - Letter spacing: `-0.05em`
  - Color: `/White`

### Project Summary

- Text node ID: `M5N4p96jdv6rI4_C4k`
- Original text:
  `Created a set of campaign visuals and social graphics to support multiple marketing initiatives.`
- Width: `1fr`
- Text maximum width: `520px`
- Text style: `/20 regular` (inferred)
- Known phone text style:
  - Size: `18px`
  - Weight: regular
  - Line height: `1.3em`
  - Letter spacing: `-0.03em`
  - Color: `/White`

### Intro CTA (Button)

- Node ID: `M5N4p96jdYedmu_Gel`
- Layout: horizontal stack
- Gap: `8px`
- Distribution: start
- Alignment: start
- Child order:
  1. `Primary` button — `M5N4p96jdmv9wPI9fl`
- Button label and link target: pending original `Primary` component inspection
  (see `docs/404.md` Primary Button, `WOfKF0MNK`).

### Info

- Node ID: `M5N4p96jdkcuZisQum`
- Width: `1fr`
- Height: `fit-content`
- Layout: vertical stack
- Gap: `60px`
- Padding: `0`
- Distribution: center
- Alignment: start
- Overflow: clip
- Child order:
  1. Line divider
  2. Container

### Info Line

- Node ID: `M5N4p96jdkrKuHzx4o`
- Width: `1fr`
- Height: `1px`
- Background: `/Dark Gray`
- Overflow: clip

### Info Container

- Node ID: `M5N4p96jdGtCpCGV7K`
- Layout: vertical stack
- Gap: `26px`
- Distribution: center
- Alignment: center
- Child order:
  1. Content (metadata list)

### Info Metadata List

- Node ID: `M5N4p96jdipIPbmFpy` → inner `M5N4p96jdndq0Jmw53`
- Layout: vertical stack
- Gap: `6px`
- Distribution: center
- Alignment: center
- Child order:
  1. Year row — `M5N4p96jdFmULPfpuE`
  2. Scope row — `M5N4p96jdmgBTNwDix`
  3. Client row — `M5N4p96jdwUnDjEceV`
  4. Duration row — `M5N4p96jdqd8UaEV33`

#### Metadata Row Anatomy (shared)

- Layout: horizontal stack
- Wrap: enabled
- Gap: `2px 6px` (row `2px`, column `6px`)
- Distribution: center
- Alignment: center
- Child order:
  1. Label text (white emphasis)
  2. Separator dot (`4px`, `/Dark Gray`, `50%` radius)
  3. Value text (gray body)

#### Year Row

- Label text ID: `M5N4p96jdvgepbHpAn` — `Year`
- Separator ID: `M5N4p96jdstqxbvosb`
- Value text ID: `M5N4p96jdYcN173kSh` — `2023`

#### Scope Row

- Label text ID: `M5N4p96jdsVpu2kqta` — `Scope`
- Separator ID: `M5N4p96jdbrbCgv7z1`
- Value text ID: `M5N4p96jds9WDOl36s` — `Graphic Design`
- Scope value maps to project **category** in codebase constants.

#### Client Row

- Label text ID: `M5N4p96jdqVu24D_8v` — `Client`
- Separator ID: `M5N4p96jdEdLFnVA57`
- Value text ID: `M5N4p96jdTkNeiRRfp` — `Pulse Agency`

#### Duration Row

- Label text ID: `M5N4p96jdvqBKAoZqW` — `Duration`
- Separator ID: `M5N4p96jdHF6ISij6h`
- Value text ID: `M5N4p96jdFSuyY0j2y` — `6 weeks`

### Details

- Node ID: `M5N4p96jdKGL8qRlyr`
- Width: `1fr`
- Height: `fit-content`
- Layout: vertical stack
- Gap: `60px`
- Padding: `0`
- Distribution: center
- Alignment: start
- Overflow: clip
- Child order:
  1. Line divider
  2. Container

### Details Line

- Node ID: `M5N4p96jdhAwVYr4FD`
- Width: `1fr`
- Height: `1px`
- Background: `/Dark Gray`

### Details Container

- Node ID: `M5N4p96jdx2SzkKc6F`
- Layout: vertical stack
- Gap: `32px`
- Distribution: center
- Alignment: start
- Child order:
  1. Content body

### Details Content Body

- Text node ID: `M5N4p96jde1uPHyHdI`
- Template text: `Content`
- Width: `1fr`
- Maximum width: `480px`
- Framer font family on instance: `Inter` (CMS rich text)
- Text style: `/16 regular` (inferred for integration)
- Known style: `16px`, regular, `1.4em`, `-0.03em`, `/Gray`
- Integration maps to Commit Mono `type-body-small` per DESIGN.md.

### Footer Component

- Node ID: `M5N4p96jdiMIPtyyaS`
- Component name: `Footer`
- Same Footer component family as home and 404 (`ILxIIz0YQ`).
- Phone variant internals: see `docs/404.md` Phone Footer Variant section.

### Right

- Node ID: `M5N4p96jdDr3odpki5`
- Width: `1fr`
- Height: `fit-content`
- Background: `/Black`
- Layout: vertical stack
- Distribution: start
- Alignment: center
- Overflow: clip
- Z-index: `1`
- Child order:
  1. ScrollProgress (hidden)
  2. Content

### Right ScrollProgress

- Node ID: `M5N4p96jdqcmKSJq6P`
- Component name: `ScrollProgress`
- Width: `1fr`
- Height: `3px`
- Position: sticky
- Top: `0px`
- Visible: `false`

### Right Content

- Node ID: `M5N4p96jdr96rFxr4y`
- Width: `1fr`
- Height: `fit-content`
- Layout: vertical stack
- Gap: `8px`
- Padding: `17px 20px 40px 20px`
- Distribution: start
- Alignment: center
- Overflow: visible
- Child order:
  1. Gallery
  2. Buttons

### Gallery

- Node ID: `M5N4p96jdwPNGV1_IG`
- Width: `1fr`
- Height: `fit-content`
- Layout: vertical stack
- Gap: `8px` (row and column)
- Distribution: center
- Alignment: center
- Child order:
  1. Preview image — `M5N4p96jdswohfVUEP`
  2. Image — `M5N4p96jdt7zZoX0jP`
- Additional gallery images may exist per CMS item; phone exposes two frames.

#### Preview Image

- Node ID: `M5N4p96jdswohfVUEP`
- Width: `1fr`
- Height: `fit-image`
- Border radius: `12px`
- Overflow: clip

#### Gallery Image

- Node ID: `M5N4p96jdt7zZoX0jP`
- Width: `1fr`
- Height: `fit-image`
- Border radius: `12px`

### Gallery Buttons

- Node ID: `M5N4p96jdsIhf2qra0`
- Layout: horizontal stack
- Gap: `8px`
- Padding: `40px 0 0 0`
- Distribution: center
- Alignment: center
- Child order:
  1. Primary button — `M5N4p96jdtMThsiX39` (visible)
  2. Back to top — `M5N4p96jdkYRTuX00T` (hidden on phone)

### Phone Navigation

- Node ID: `M5N4p96jdRbHFuYTFW`
- Component name: `Phone navigation`
- Position: fixed
- Top: `12px`
- Same segmented Info/Work control as home page.
- Full anatomy: see `docs/home.md` Phone Navigation section (`Ku0ICcU9w`).
- On project page, `Info` likely maps to left column content; `Work` to right
  gallery (`#work` or equivalent anchor).

### Phone Content Provided For Integration

- Portfolio contact/footer: same as `docs/home.md` Phone Content section.
- Project fields are CMS-driven per slug:
  - `slug` (route param)
  - `title` (e.g. Pulse)
  - `summary` (short description under title)
  - `category` (Scope value, e.g. Graphic Design)
  - `year`, `client`, `duration`
  - `details` (long-form body)
  - `gallery` (ordered image list)
  - `introCta` (Primary label + href, e.g. live project link)
  - `galleryCta` (Primary label + href below gallery)

### Phone Integration Implications

- Phone is one vertical scrolling page, not a viewport-locked split layout.
- Main stacks Left then Right with a `60px` gap.
- Left Content uses `80px` top padding to clear fixed phone navigation.
- Left Content uses `50px` vertical rhythm between Intro, Info, Details, Footer.
- Info and Details sections use `60px` gap between divider line and container.
- Info container internal gap: `26px`; metadata rows gap: `6px`.
- Details container internal gap: `32px`.
- Intro uses `40px` internal gap (larger than home intro `32px`).
- Back navigation uses `Secondary` component with `32px` bottom padding on row.
- Right gallery is a vertical image stack (`8px` gap), not project cards.
- Gallery images use `12px` radius (`rounded-project` token).
- Gallery buttons: Primary visible; Back To Top hidden on phone.
- Both column ScrollProgress instances are hidden on phone.
- Footer lives inside scrollable Left Content.
- Exclude template-only chrome: Smooth Scroll.

## Tablet

### Capture Note

- Verified via Framer MCP on 2026-06-15.
- Tablet hierarchy mirrors Phone with prefixed IDs (`oqBv_zgxo…` maps to phone
  `M5N4p96jd…`).
- Inner section semantics (Intro, Info, Details, Gallery) match Phone; only
  page-level layout and a few spacing/visibility attrs differ.

### Root

- Node: `Tablet`
- Node ID: `oqBv_zgxo`
- Width: `810px`
- Height: `fit-content` (canvas frame; columns scroll beyond)
- Background: `/Black`
- Layout: vertical stack
- Horizontal alignment: center
- Overflow: visible
- Fixed overlays (outside Main flow):
  1. `Phone navigation` — `oqBv_zgxoRbHFuYTFW`, fixed, `top: 12px`, `visible: false`
- Utility overlays:
  - `Smooth Scroll` — `oqBv_zgxoQpfUJ44rA`, relative, exclude from portfolio
- No `Get template - fixed button` instances on project tablet root.

### Main

- Node ID: `oqBv_zgxoF62ooAAPL`
- Width: `1fr`
- Height: `100vh`
- Layout: horizontal stack
- Gap: `0`
- Padding: `0`
- Distribution: center
- Alignment: start
- Overflow: visible
- Child order:
  1. Left content column
  2. Right gallery column
- Columns are equal width because Left and Right both use `1fr`.

### Left

- Node ID: `oqBv_zgxocTg_yypPh`
- Width: `1fr`
- Height: `100vh`
- Background: `/Black`
- Layout: vertical stack
- Distribution: start
- Alignment: center
- Overflow: `auto` (independently scrollable)
- Z-index: `1`
- Child order:
  1. ScrollProgress
  2. Content

### Left ScrollProgress

- Node ID: `oqBv_zgxoZkSWBvO8l`
- Component name: `ScrollProgress`
- Width: `1fr`
- Height: `3px`
- Position: sticky
- Top: `0px`
- Visible: `true`

### Left Content

- Node ID: `oqBv_zgxoSawgCaeaG`
- Width: `1fr`
- Height: `fit-content`
- Layout: vertical stack
- Gap: `60px`
- Padding: `20px 40px 20px 20px`
- Distribution: center
- Alignment: center
- Overflow: clip
- Child order:
  1. Intro
  2. Info
  3. Details
  4. Footer component

### Intro

- Node ID: `oqBv_zgxobyfY4wCoD`
- Same child structure as Phone Intro (Title → Button).
- Gap: `40px` (unchanged from phone).

### Title

- Node ID: `oqBv_zgxotLhz6M44T`
- Same child structure as Phone Title (Back button → Content).

### Back Button

- Node ID: `oqBv_zgxobGl1RCncH`
- Padding: `0 0 32px 0` (unchanged).
- `Secondary` instance — `oqBv_zgxobqGh6t1IR`.

### Project Name

- Text node ID: `oqBv_zgxoSd2kHnLFg`
- Original text: `Pulse`
- Text style: `/Heading 1`
- Known tablet text style:
  - Size: `24px`
  - Weight: medium
  - Line height: `1.1em`
  - Letter spacing: `-0.05em`
  - Color: `/White`

### Project Summary

- Text node ID: `oqBv_zgxov6rI4_C4k`
- Original text:
  `Created a set of campaign visuals and social graphics to support multiple marketing initiatives.`
- Text maximum width: `520px`
- Text style: `/20 regular`
- Known tablet text style:
  - Size: `20px`
  - Weight: regular
  - Line height: `1.3em`
  - Letter spacing: `-0.03em`
  - Color: `/White`

### Intro CTA

- `Primary` instance — `oqBv_zgxomv9wPI9fl`
- Exact label/link: pending `Primary` component inspection.

### Info

- Node ID: `oqBv_zgxokcuZisQum`
- Gap: `60px` (line → container)
- Metadata rows: Year, Scope, Client, Duration — same values and anatomy as
  Phone (`2023`, `Graphic Design`, `Pulse Agency`, `6 weeks`).
- Phone node map: `oqBv_zgxoFmULPfpuE` → `M5N4p96jdFmULPfpuE`, etc.

### Details

- Node ID: `oqBv_zgxoKGL8qRlyr`
- Gap: `60px` (line → container)
- Container gap: `32px`
- Content body node: `oqBv_zgxoe1uPHyHdI` (CMS placeholder `Content`)

### Footer Component

- Node ID: `oqBv_zgxoiMIPtyyaS`
- Component name: `Footer`
- Tablet/desktop footer variant: see `docs/404.md` Desktop/Tablet Footer
  (`esA4oGvJM`).

### Right

- Node ID: `oqBv_zgxoDr3odpki5`
- Width: `1fr`
- Height: `100vh`
- Background: `/Black`
- Layout: vertical stack
- Distribution: start
- Alignment: center
- Overflow: `auto` (independently scrollable)
- Z-index: `1`
- Child order:
  1. ScrollProgress
  2. Content

### Right ScrollProgress

- Node ID: `oqBv_zgxoqcmKSJq6P`
- Component name: `ScrollProgress`
- Width: `1fr`
- Height: `3px`
- Position: sticky
- Top: `0px`
- Visible: `true`

### Right Content

- Node ID: `oqBv_zgxor96rFxr4y`
- Width: `1fr`
- Height: `fit-content`
- Layout: vertical stack
- Gap: `8px`
- Padding: `17px 20px 20px 0px`
- Distribution: start
- Alignment: center
- Overflow: visible
- Child order:
  1. Gallery
  2. Buttons

### Gallery

- Node ID: `oqBv_zgxowPNGV1_IG`
- Layout: vertical stack
- Gap: `8px`
- Child order:
  1. Preview image — `oqBv_zgxoswohfVUEP`
  2. Image — `oqBv_zgxot7zZoX0jP`
- Image frames: `1fr` width, `fit-image`, `12px` radius (same as phone).

### Gallery Buttons

- Node ID: `oqBv_zgxosIhf2qra0`
- Layout: horizontal stack
- Gap: `8px`
- Padding: `60px 0 0 0`
- Distribution: `space-between`
- Alignment: center
- Child order:
  1. Primary button — `oqBv_zgxotMThsiX39` (visible)
  2. Back to top — `oqBv_zgxokYRTuX00T` (visible)

### Tablet Content Provided For Integration

- Same CMS project fields and portfolio contact/footer as Phone section.

### Tablet Integration Implications

- Tablet is a viewport-locked horizontal split layout.
- Left and Right are equal `1fr` columns.
- Main uses `100vh`.
- Left and Right columns scroll independently (`overflow: auto`).
- Both columns expose sticky `ScrollProgress` (`3px` height) at the top.
- `Phone navigation` is present in the variant tree but hidden on tablet.
- Left Content uses `60px` section rhythm and `20px 40px 20px 20px` padding
  (no `80px` top offset; nav hidden).
- Right gallery padding: `17px 20px 20px 0px` (no left gutter, `20px` right).
- Gallery remains a vertical image stack with `8px` gap (not project cards).
- Gallery buttons use `space-between`; both Primary and Back To Top are visible.
- Gallery button row top padding is `60px` (phone uses `40px`).
- Intro, Info, Details, and Footer semantics match Phone.
- Footer lives inside scrollable Left Content, not pinned to viewport bottom.
- Exclude template-only chrome: Smooth Scroll.

## Desktop

### Capture Note

- Verified via Framer MCP on 2026-06-15.
- Desktop node IDs use short suffixes (no variant prefix), matching the home and
  404 desktop pattern.
- **Desktop gallery differs from phone/tablet:** images use a `2`-column grid,
  not a single-column vertical stack.

### Root

- Node: `Desktop`
- Node ID: `AG9BSsdwq`
- Width: `1200px`
- Height: `fit-content` (canvas frame; columns scroll beyond)
- Background: `/Black`
- Layout: vertical stack
- Horizontal alignment: center
- Overflow: visible
- Fixed overlays (outside Main flow):
  1. `Phone navigation` — `RbHFuYTFW`, fixed, `top: 12px`, `visible: false`
- Utility overlays:
  - `Smooth Scroll` — `QpfUJ44rA`, relative, exclude from portfolio
- No `Get template - fixed button` instances on project desktop root.

### Main

- Node ID: `F62ooAAPL`
- Width: `1fr`
- Height: `100vh`
- Layout: horizontal stack
- Gap: `0`
- Padding: `0`
- Distribution: center
- Alignment: start
- Overflow: visible
- Child order:
  1. Left content column
  2. Right gallery column
- Column ratio:
  - Left: `1fr`
  - Right: `2fr`

### Left

- Node ID: `cTg_yypPh`
- Width: `1fr`
- Height: `100vh`
- Background: `/Black`
- Layout: vertical stack
- Distribution: start
- Alignment: center
- Overflow: `auto` (independently scrollable)
- Z-index: `1`
- Child order:
  1. ScrollProgress
  2. Content

### Left ScrollProgress

- Node ID: `ZkSWBvO8l`
- Component name: `ScrollProgress`
- Width: `1fr`
- Height: `3px`
- Position: sticky
- Top: `0px`
- Visible: `true`

### Left Content

- Node ID: `SawgCaeaG`
- Width: `1fr`
- Height: `fit-content`
- Layout: vertical stack
- Gap: `60px`
- Padding: `20px 40px 20px 20px`
- Distribution: center
- Alignment: center
- Overflow: clip
- Child order:
  1. Intro
  2. Info
  3. Details
  4. Footer component

### Intro

- Node ID: `byfY4wCoD`
- Same child structure as Phone and Tablet Intro.
- Gap: `40px`.

### Title

- Node ID: `tLhz6M44T`
- Same child structure (Back button → Content).

### Back Button

- Node ID: `bGl1RCncH`
- Padding: `0 0 32px 0`.
- `Secondary` instance — `bqGh6t1IR`.

### Project Name

- Text node ID: `Sd2kHnLFg`
- Original text: `Pulse`
- Text style: `/Heading 1`
- Known desktop text style:
  - Size: `24px`
  - Weight: medium
  - Line height: `1.1em`
  - Letter spacing: `-0.05em`
  - Color: `/White`

### Project Summary

- Text node ID: `v6rI4_C4k`
- Original text:
  `Created a set of campaign visuals and social graphics to support multiple marketing initiatives.`
- Text maximum width: `520px`
- Text style: `/20 regular`
- Known desktop text style:
  - Size: `20px`
  - Weight: regular
  - Line height: `1.3em`
  - Letter spacing: `-0.03em`
  - Color: `/White`

### Intro CTA

- `Primary` instance — `mv9wPI9fl`
- Exact label/link: pending `Primary` component inspection.

### Info

- Node ID: `kcuZisQum`
- Gap: `60px` (line → container)
- Metadata rows: same anatomy and sample values as Phone/Tablet.

### Details

- Node ID: `KGL8qRlyr`
- Gap: `60px` (line → container)
- Container gap: `32px`
- Content body node: `e1uPHyHdI` (CMS placeholder `Content`)

### Footer Component

- Node ID: `iMIPtyyaS`
- Component name: `Footer`
- Tablet/desktop footer variant: see `docs/404.md` Desktop/Tablet Footer
  (`esA4oGvJM`).

### Right

- Node ID: `Dr3odpki5`
- Width: `2fr`
- Height: `100vh`
- Background: `/Black`
- Layout: vertical stack
- Distribution: start
- Alignment: center
- Overflow: `auto` (independently scrollable)
- Z-index: `1`
- Child order:
  1. ScrollProgress
  2. Content

### Right ScrollProgress

- Node ID: `qcmKSJq6P`
- Component name: `ScrollProgress`
- Width: `1fr`
- Height: `3px`
- Position: sticky
- Top: `0px`
- Visible: `true`

### Right Content

- Node ID: `r96rFxr4y`
- Width: `1fr`
- Height: `fit-content`
- Layout: vertical stack
- Gap: `8px`
- Padding: `17px 20px 20px 0px`
- Distribution: start
- Alignment: center
- Overflow: visible
- Child order:
  1. Gallery
  2. Buttons

### Gallery

- Node ID: `wPNGV1_IG`
- Width: `1fr`
- Height: `fit-content`
- Layout: `grid`
- Grid columns: `2`
- Grid column width: `200px` (canvas grid definition)
- Grid row height: `200px` (canvas grid definition)
- Gap: `8px`
- Child order:
  1. Preview image — `swohfVUEP`
  2. Image — `t7zZoX0jP`
- Additional gallery images may continue in grid cells per CMS item.

#### Preview Image (desktop instance)

- Node ID: `swohfVUEP`
- Width: `386px` (fixed on desktop grid cell)
- Height: `fit-image`
- Border radius: `12px`
- Overflow: clip

#### Gallery Image (desktop instance)

- Node ID: `t7zZoX0jP`
- Width: `1fr` (fills grid cell)
- Height: `fit-image`
- Border radius: `12px`

### Gallery Buttons

- Node ID: `sIhf2qra0`
- Layout: horizontal stack
- Gap: `8px`
- Padding: `60px 0 0 0`
- Distribution: `space-between`
- Alignment: center
- Child order:
  1. Primary button — `tMThsiX39` (visible)
  2. Back to top — `kYRTuX00T` (visible)

### Desktop Content Provided For Integration

- Same CMS project fields and portfolio contact/footer as Phone section.

### Desktop Integration Implications

- Desktop is a viewport-locked horizontal split layout.
- Left and Right use a `1fr / 2fr` ratio (matches home and 404 desktop).
- Main uses `100vh`.
- Left and Right columns scroll independently (`overflow: auto`).
- Both columns expose sticky `ScrollProgress` (`3px` height) at the top.
- `Phone navigation` is hidden on desktop.
- Left Content uses `60px` section rhythm and `20px 40px 20px 20px` padding.
- Right gallery padding: `17px 20px 20px 0px`.
- **Desktop gallery uses a 2-column image grid with `8px` gap**, not the
  single-column stack used on phone and tablet.
- Gallery images use `12px` radius (`rounded-project` token).
- Gallery buttons use `space-between`; both Primary and Back To Top are visible.
- Footer lives inside scrollable Left Content, not pinned to viewport bottom.
- Exclude template-only chrome: Smooth Scroll.

## Shared Components

Components already captured elsewhere (reuse without re-documenting unless
project-page usage differs):

| Component | Framer name | ID / doc reference | Project page usage |
| --- | --- | --- | --- |
| Footer | `Footer` | `ILxIIz0YQ` — `docs/404.md` | Left column bottom |
| Primary Button | `Primary` | `WOfKF0MNK` — `docs/404.md` | Intro CTA + gallery CTA |
| Secondary Button | `Secondary` | `TKI2NIUQG` — `docs/home.md` | Intro back button |
| Back To Top | `Back to top` | `Ml0EsGoIm` — `docs/404.md` | Gallery row (hidden phone) |
| Phone navigation | `Phone navigation` | `Ku0ICcU9w` — `docs/home.md` | Fixed top nav (phone) |
| ScrollProgress | `ScrollProgress` | code component — `docs/home.md` | Column scroll (tablet/desktop) |

Home-specific components **not** used on project detail page:

- Service, Stats, Experience, Cards/Stack, Award, Testimonial
- Project Card gallery rails (detail page uses full-width image gallery instead)

Pending original-component capture for project page:

- `Secondary` instance label on back button (open Assets → Secondary source)
- `Primary` instance labels and hrefs on intro and gallery buttons
- CMS collection field mapping (if managed collection drives `/projects/:slug`)

## Codebase Integration Preview

When implementing `/projects/[slug]/page.tsx`:

- Extend `constants/portfolio/projects.ts` (or add `constants/projects/detail.ts`)
  with per-slug detail fields matching Info + Details + Gallery data above.
- Reuse `PortfolioFooter`, `PhoneNavigation`, `ScrollProgress`, `PrimaryLink`.
- Add new components: `ProjectBackButton` (Secondary), `ProjectMetadata`,
  `ProjectGallery` (vertical stack phone/tablet; `grid-cols-2` on desktop),
  `ProjectIntro`.
- Layout pattern mirrors home: split columns on tablet/desktop, stacked on phone.
- Desktop right gallery is a 2-column image grid (distinct from phone/tablet
  single-column stack).
- Route: `app/projects/[slug]/page.tsx` with `generateStaticParams` from
  project slugs.