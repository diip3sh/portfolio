# Home Page Design Notes

Running source of truth captured from the Framer template. Record all variants
and original shared components here before final integration.

Follows the same capture rules as `docs/404.md`:
- Node IDs, layout attrs, text content, component IDs, gaps, padding
- Mark replica MCP noise when Desktop capture repeats IDs
- Note `Pending original-component capture` where internals not yet inspected
- Record portfolio replacement content separately from template originals

## Breakpoints

| Variant | Range | Framer Width |
| --- | --- | --- |
| Phone | `0px-809px` | `390px` |
| Tablet | `810px-1199px` | `810px` |
| Desktop | `1200px+` | `1200px` |

## Phone

### Root

- Node: `Phone`
- Node ID: `ZkgyP1Dbr`
- Width: `390px`
- Height: `800px` (canvas frame; page scrolls beyond)
- Background: `/Black`
- Layout: vertical stack
- Overflow: visible
- Fixed overlays (outside Main flow):
  1. `Phone navigation` — `ZkgyP1DbrGjRm5GZPe`, fixed, `top: 12px`
  2. `Get template - fixed button` ×2 — template chrome, exclude from portfolio
- Utility overlays:
  - `Smooth Scroll` — `ZkgyP1DbrRzvA33fE0`, absolute, exclude from portfolio

### Main

- Node ID: `ZkgyP1DbrqZJjsohK8`
- Width: `390px`
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

- Node ID: `ZkgyP1DbrZfKECRZGQ`
- Width: `1fr`
- Height: `fit-content`
- Background: `/Black`
- Layout: vertical stack
- Distribution: start
- Alignment: center
- Overflow: clip
- Z-index: `1`

### Left Content

- Node ID: `ZkgyP1Dbrkgs1ySCdD`
- Width: `1fr`
- Height: `fit-content`
- Layout: vertical stack
- Gap: `50px`
- Padding: `80px 20px 20px 20px`
- Distribution: center
- Alignment: center
- Overflow: visible
- Child order:
  1. Intro
  2. Clients
  3. About
  4. Services
  5. Tools
  6. Experience
  7. Awards
  8. Testimonials
  9. Footer component

### Intro

- Node ID: `ZkgyP1DbrzJxWivA8r`
- Width: `1fr`
- Height: `fit-content`
- Layout: vertical stack
- Gap: `32px`
- Padding: `0`
- Distribution: center
- Alignment: center
- Overflow: visible
- Child order:
  1. Title
  2. Description
  3. Available
  4. CTA

### Title

- Node ID: `ZkgyP1DbrtBNu6nc_I`
- Width: `1fr`
- Height: `fit-content`
- Layout: horizontal stack
- Gap: `12px`
- Distribution: center
- Alignment: center
- Overflow: visible
- Child order:
  1. Image
  2. Content (name group)

### Title Image

- Node ID: `ZkgyP1Dbrzs8wYcXlf`
- Width: `56px`
- Height: `56px`
- Aspect ratio: `1`
- Border radius: `10px`
- Overflow: clip

### Title Name Group

- Node ID: `ZkgyP1DbrBzTT52KE0`
- Width: `1fr`
- Height: `fit-content`
- Layout: vertical stack
- Gap: `0`
- Distribution: center
- Alignment: start
- Child order:
  1. Name
  2. Role

### Name

- Node ID: `ZkgyP1DbrhIihzx7d8`
- Layout: vertical stack
- Gap: `4px`
- Distribution: center
- Alignment: center
- Text node ID: `ZkgyP1DbrFNa7OBLG9`
- Original text: `Kima Davidson`
- Text style: `/Heading 1` (inferred from 404 phone pattern)
- Known phone text style:
  - Size: `22px`
  - Weight: medium
  - Line height: `1.1em`
  - Letter spacing: `-0.05em`
  - Color: `/White`

### Role

- Text node ID: `ZkgyP1DbrzPeKGn79_`
- Original text: `Digital Designer`
- Text style: `/Heading 3` (inferred)
- Known phone text style:
  - Size: `16px`
  - Weight: regular
  - Line height: `1.4em`
  - Letter spacing: `-0.03em`
  - Color: `/White`

### Description

- Node ID: `ZkgyP1DbrDU4ZFMGfZ`
- Width: `1fr`
- Height: `fit-content`
- Layout: horizontal stack
- Gap: `8px`
- Distribution: start
- Alignment: center
- Overflow: clip
- Text node ID: `ZkgyP1DbrsPonkdaaP`
- Text maximum width: `520px`
- Original text:
  `I design digital experiences — from modern websites and visual identities and graphic design — focused on clarity, usability, and strong visual storytelling.`
- Text style: `/20 regular`
- Known phone text style:
  - Size: `18px`
  - Weight: regular
  - Line height: `1.3em`
  - Letter spacing: `-0.03em`
  - Color: `/White`

### Available

- Node ID: `ZkgyP1DbrpiNSkODbz`
- Width: `1fr`
- Height: `fit-content`
- Layout: horizontal stack
- Gap: `4px`
- Distribution: center
- Alignment: center
- Overflow: visible
- Child order:
  1. Status dot
  2. Status text

### Status Dot

- Node ID: `ZkgyP1DbrVydF6gsTi`
- Width: `5px`
- Height: `5px`
- Aspect ratio: `1`
- Border radius: `50%`
- Background: `rgb(0, 255, 64)`

### Status Text

- Text node ID: `ZkgyP1DbrT5gDsBgce`
- Original text: `Available for work.`
- Text style: `/16 regular` (inferred)
- Known phone text style:
  - Size: `16px`
  - Weight: regular
  - Line height: `1.4em`
  - Letter spacing: `-0.03em`
  - Color: `/Gray`

### CTA

- Node ID: `ZkgyP1DbrmMoyTgLOr`
- Width: `1fr`
- Height: `fit-content`
- Layout: horizontal stack
- Gap: `8px`
- Distribution: start
- Alignment: start
- Overflow: visible
- Button component: `Primary` — `ZkgyP1DbrUWQ4aKe2o`
- Button label: pending original component inspection
- Exact button padding, background, radius, and states: see `docs/404.md`
  Primary Button section (`WOfKF0MNK`).

### Clients

- Node ID: `ZkgyP1DbrxhFMkf6Gg`
- Width: `1fr`
- Height: `fit-content`
- Layout: vertical stack
- Gap: `50px`
- Padding: `0`
- Distribution: center
- Alignment: start
- Overflow: clip
- Child order:
  1. Line divider
  2. Container

### Clients Line

- Node ID: `ZkgyP1DbrY0dZb0rDO`
- Width: `1fr`
- Height: `1px`
- Background: `/Dark Gray`
- Overflow: clip

### Clients Container

- Node ID: `ZkgyP1DbreE7nxVbB6`
- Width: `1fr`
- Height: `fit-content`
- Layout: vertical stack
- Gap: `26px`
- Distribution: center
- Alignment: center
- Overflow: clip
- Child order:
  1. Logos

### Clients Logos

- Node ID: `ZkgyP1DbrRKYetREE2`
- Contains `6` logo image frames
- Exact logo dimensions and marquee behavior require original component
  inspection.

### About

- Node ID: `ZkgyP1DbrzunhHObPb`
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

### About Line

- Node ID: `ZkgyP1Dbrz9jEwMPtv`
- Width: `1fr`
- Height: `1px`
- Background: `/Dark Gray`

### About Container

- Node ID: `ZkgyP1DbrUjtsfVqBs`
- Layout: vertical stack
- Gap: `26px`
- Child order:
  1. Intro
  2. Content (Stats)

### About Intro

- Node ID: `ZkgyP1DbrMQVP38W3m`
- Layout: vertical stack
- Gap: `12px`
- Distribution: center
- Alignment: start
- Child order:
  1. Heading
  2. Body

### About Heading

- Text node ID: `ZkgyP1DbrvpH4TSo6U`
- Text: `About me.`
- Text style: `/Heading 2`
- Known style: `18px`, medium, `1.3em`, `-0.03em`, `/White`

### About Body

- Text node ID: `ZkgyP1DbrSxXp8RkDd`
- Original text:
  `I'm Kima Davidson, a digital designer based in New York with over 11 years of experience crafting thoughtful, visually driven digital experiences.`
- Text style: `/16 regular`
- Known style: `16px`, regular, `1.4em`, `-0.03em`, `/Gray`

### About Stats

- Node ID: `ZkgyP1DbraTRx284vS`
- Child order:
  1. Stats component ×4 — `ZkgyP1Dbrjwe7rl8uF`, `ZkgyP1DbrHCYhLO7PS`,
     `ZkgyP1DbrJZga_g2PE`, `ZkgyP1DbrSznIqjd29`
- Exact stat card anatomy requires original `Stats` component inspection.

### Services

- Node ID: `ZkgyP1DbrpDPcuIaRt`
- Layout: vertical stack
- Gap: `60px`
- Child order:
  1. Line — `ZkgyP1DbrcGh3yKlht`
  2. Container — `ZkgyP1DbrwaI8FEhfK`

### Services Container

- Layout: vertical stack
- Gap: `26px`
- Child order:
  1. Title — `Services.`
  2. Content — `3` Service component instances

### Services Title

- Text node ID: `ZkgyP1DbrMDzc_OiCX`
- Text: `Services.`
- Text style: `/Heading 2`

### Services List

- Node ID: `ZkgyP1DbrE_Fkdgy47`
- Child order:
  1. Service ×3 — `ZkgyP1DbrQaroQ5ItH`, `ZkgyP1DbrgysHsOCKN`,
     `ZkgyP1DbrveW_wg0T5`
- Exact service card anatomy requires original `Service` component inspection.

### Tools (Stack)

- Node ID: `ZkgyP1DbrrvleTxsIP`
- Layout: vertical stack
- Gap: `60px`
- Child order:
  1. Line — `ZkgyP1Dbryu_N_3rT1`
  2. Container — `ZkgyP1DbrgK2ghmQxw`

### Tools Container

- Layout: vertical stack
- Gap: `26px`
- Child order:
  1. Title — `Stack.`
  2. Content — `6` Cards/Stack component instances

### Tools Title

- Text node ID: `ZkgyP1Dbriwu8Yzhfp`
- Text: `Stack.`
- Text style: `/Heading 2`

### Tools Cards

- Node ID: `ZkgyP1DbrZSD7q_wcG`
- Child order: `6` × `Cards/Stack`
- Exact stack card anatomy requires original component inspection.

### Experience

- Node ID: `ZkgyP1DbrFcTqbQm8A`
- Layout: vertical stack
- Gap: `60px`
- Child order:
  1. Line — `ZkgyP1Dbrgm1Ip5qQ9`
  2. Container — `ZkgyP1Dbrbyo5QRDcH`

### Experience Container

- Layout: vertical stack
- Gap: `26px`
- Child order:
  1. Title — `Experience.`
  2. Content — `4` Experience component instances

### Experience Title

- Text node ID: `ZkgyP1Dbrcy5GEAmMs`
- Text: `Experience.`
- Text style: `/Heading 2`

### Experience List

- Node ID: `ZkgyP1DbrZUU2cQTDN`
- Child order: `4` × `Experience`
- Exact row anatomy requires original component inspection.

### Awards

- Node ID: `ZkgyP1DbrO96XRqzIv`
- Layout: vertical stack
- Gap: `60px`
- Child order:
  1. Line — `ZkgyP1DbrQacvmlEEQ`
  2. Container — `ZkgyP1DbreNzKGHqpl`

### Awards Container

- Layout: vertical stack
- Gap: `26px`
- Child order:
  1. Title — `Awards.`
  2. Content — `5` Award component instances

### Awards Title

- Text node ID: `ZkgyP1DbrIeiK6lIMi`
- Text: `Awards.`
- Text style: `/Heading 2`

### Awards List

- Node ID: `ZkgyP1DbrYJ8ANWcjA`
- Child order: `5` × `Award`
- Exact award row anatomy requires original component inspection.

### Testimonials

- Node ID: `ZkgyP1DbrJI5OeUU0O`
- Layout: vertical stack
- Gap: `60px`
- Child order:
  1. Line — `ZkgyP1Dbryz84CixFV`
  2. Container — `ZkgyP1Dbry2uXshjz0`

### Testimonials Container

- Layout: vertical stack
- Gap: `26px`
- Child order:
  1. Title — `Testimonials.`
  2. Content — `4` Testimonial component instances

### Testimonials Title

- Text node ID: `ZkgyP1DbrAAVa73RnT`
- Text: `Testimonials.`
- Text style: `/Heading 2`

### Testimonials List

- Node ID: `ZkgyP1DbrCukwmvGqK`
- Child order: `4` × `Testimonial`
- Exact testimonial card anatomy requires original component inspection.

### Footer Component

- Node ID: `ZkgyP1DbrskTeFKjRM`
- Component name: `Footer`
- Width: `1fr`
- Height: `fit-content`
- Same Footer component family as 404 page (`ILxIIz0YQ`).
- Phone variant ID and internals: see `docs/404.md` Phone Footer Variant
  section unless home-specific overrides are found.

### Right

- Node ID: `ZkgyP1DbrHY8AT6VMH`
- Width: `1fr`
- Height: `fit-content`
- Background: `/Black`
- Layout: vertical stack
- Distribution: start
- Alignment: center
- Overflow: clip
- Z-index: `1`

### Right Content

- Node ID: `ZkgyP1DbrvqkcP8B5p`
- Width: `1fr`
- Height: `fit-content`
- Layout: vertical stack
- Gap: `60px`
- Padding: `17px 20px 60px 20px`
- Distribution: start
- Alignment: center
- Overflow: visible
- Child order:
  1. Projects
  2. Buttons

### Projects

- Node ID: `ZkgyP1DbrAi76D78AO`
- Width: `1fr`
- Height: `fit-content`
- Layout: vertical stack
- Gap: `8px`
- Distribution: center
- Alignment: start
- Child order:
  1. Project component — `ZkgyP1DbrvwutuaKP2`
  2. Spinner component — `ZkgyP1DbrDt05q9TJX`

### Phone Project Instance

- Node ID: `ZkgyP1DbrvwutuaKP2`
- Component name: `Project`
- Width: `1fr`
- Height: `fit-content`
- Exact title, category, link, media, and variant: require original Project
  component inspection.
- Shared Project card rules: see `docs/404.md` Project Card section
  (`uyHIiXSLR`, variant `lD6oBgyg0` on phone/tablet).

### Gallery Buttons

- Node ID: `ZkgyP1DbrfVeWK_zSn`
- Layout: horizontal stack
- Gap: `8px`
- Distribution: center
- Alignment: center
- Child order:
  1. Primary button — `ZkgyP1DbrBtCXNLBDe` (visible)
  2. Back to top — `ZkgyP1DbrLyZXu_hjD` (hidden on phone)

### Phone Navigation

- Node ID: `ZkgyP1DbrGjRm5GZPe`
- Component name: `Phone navigation`
- Position: fixed
- Top: `12px`
- Exact menu anatomy, links, and open/close states require original component
  inspection.

### Phone Content Provided For Integration

- Portfolio name/role/description: TBD (replacing Kima Davidson template copy)
- Email: `pilladipesh.pd@gmail.com`
- Phone: `+91 7993097879`
- Twitter/X: `https://x.com/diip3sh`
- LinkedIn: `https://www.linkedin.com/in/diip3sh/`
- Telegram: URL not provided
- Credit: `Designed by diip3sh`
- Credit link: `https://x.com/diip3sh`
- Copyright: `© 2026 Open source, free to use`

### Phone Integration Implications

- Phone is one vertical scrolling page, not a viewport-locked split layout.
- Main stacks Left then Right with a `60px` gap.
- Left Content uses `80px` top padding to clear fixed phone navigation.
- Left Content uses `50px` vertical rhythm between major sections.
- Section blocks (Clients through Testimonials) share a pattern:
  - Optional `1px` `/Dark Gray` line
  - Container with `26px` internal gap
  - Section heading uses `/Heading 2`
  - Section body/list uses component instances below heading
- About, Services, Tools, Experience, Awards, and Testimonials use `60px`
  section gap.
- Clients uses `50px` section gap.
- Right gallery follows Left content in document flow.
- Right gallery has `20px` horizontal gutters and `60px` bottom padding.
- Project rail is vertical with `8px` gap between cards.
- Gallery Primary CTA and hidden Back To Top sit below projects.
- Footer lives inside Left Content, not Right gallery.
- Exclude template-only chrome: Smooth Scroll, Get template fixed buttons.

## Tablet

### Capture Note

- Verified via Framer MCP reconnect on 2026-06-15.
- Tablet hierarchy mirrors Phone with prefixed IDs (`eezvSM_7C…` maps to phone
  `ZkgyP1Dbr…`).

### Root

- Node: `Tablet`
- Node ID: `eezvSM_7C`
- Width: `810px`
- Height: `800px` (canvas frame; columns scroll beyond)
- Background: `/Black`
- Layout: vertical stack
- Horizontal alignment: center
- Overflow: visible
- Fixed overlays (outside Main flow):
  1. `Phone navigation` — `eezvSM_7CGjRm5GZPe`, fixed, `top: 12px`, `visible: false`
  2. `Get template - fixed button` ×2 — template chrome, exclude from portfolio
- Utility overlays:
  - `Smooth Scroll` — `eezvSM_7CRzvA33fE0`, absolute, exclude from portfolio

### Main

- Node ID: `eezvSM_7CqZJjsohK8`
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

- Node ID: `eezvSM_7CZfKECRZGQ`
- Width: `1fr`
- Height: `fit-content`
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

- Node ID: `eezvSM_7CiWTEq_yuZ`
- Component name: `ScrollProgress`
- Width: `1fr`
- Height: `3px`
- Position: sticky
- Top: `0px`
- Visible: `true`

### Left Content

- Node ID: `eezvSM_7Ckgs1ySCdD`
- Width: `1fr`
- Height: `fit-content`
- Layout: vertical stack
- Gap: `60px`
- Padding: `20px 40px 20px 20px`
- Distribution: center
- Alignment: center
- Overflow: visible
- Child order:
  1. Intro
  2. Clients
  3. About
  4. Services
  5. Tools
  6. Experience
  7. Awards
  8. Testimonials
  9. Footer component

### Intro

- Node ID: `eezvSM_7CzJxWivA8r`
- Width: `1fr`
- Height: `fit-content`
- Layout: vertical stack
- Gap: `32px`
- Padding: `0`
- Distribution: center
- Alignment: center
- Overflow: visible
- Child order:
  1. Title
  2. Description
  3. Available
  4. CTA
- Same child structure as Phone Intro.

### Title

- Node ID: `eezvSM_7CtBNu6nc_I`
- Layout: horizontal stack
- Gap: `12px`
- Distribution: center
- Alignment: center
- Child order:
  1. Image — `eezvSM_7Czs8wYcXlf`
  2. Content (name group) — `eezvSM_7CBzTT52KE0`

### Title Image

- Node ID: `eezvSM_7Czs8wYcXlf`
- Width: `56px`
- Height: `56px`
- Aspect ratio: `1`
- Border radius: `10px`
- Overflow: clip

### Title Name Group

- Node ID: `eezvSM_7CBzTT52KE0`
- Layout: vertical stack
- Gap: `0`
- Distribution: center
- Alignment: start
- Child order:
  1. Name — `eezvSM_7ChIihzx7d8`
  2. Role text — `eezvSM_7CzPeKGn79_`

### Name Stack

- Node ID: `eezvSM_7ChIihzx7d8`
- Layout: vertical stack
- Gap: `4px`
- Distribution: center
- Alignment: center

### Name

- Text node ID: `eezvSM_7CFNa7OBLG9`
- Original text: `Kima Davidson`
- Text style: `/Heading 1`
- Known tablet text style:
  - Size: `24px`
  - Weight: medium
  - Line height: `1.1em`
  - Letter spacing: `-0.05em`
  - Color: `/White`

### Role

- Text node ID: `eezvSM_7CzPeKGn79_`
- Original text: `Digital Designer`
- Text style: `/Heading 3` (inferred)
- Known tablet text style:
  - Size: `16px`
  - Weight: regular
  - Line height: `1.4em`
  - Letter spacing: `-0.03em`
  - Color: `/White`

### Description

- Node ID: `eezvSM_7CDU4ZFMGfZ`
- Layout: horizontal stack
- Gap: `8px`
- Distribution: start
- Alignment: center
- Overflow: clip
- Text node ID: `eezvSM_7CsPonkdaaP`
- Text maximum width: `520px`
- Original text:
  `I design digital experiences — from modern websites and visual identities and graphic design — focused on clarity, usability, and strong visual storytelling.`
- Text style: `/20 regular`
- Known tablet text style:
  - Size: `20px`
  - Weight: regular
  - Line height: `1.3em`
  - Letter spacing: `-0.03em`
  - Color: `/White`

### Available

- Node ID: `eezvSM_7CpiNSkODbz`
- Layout: horizontal stack
- Gap: `4px`
- Distribution: center
- Alignment: center
- Child order:
  1. Status dot — `eezvSM_7CVydF6gsTi`
  2. Status text — `eezvSM_7CT5gDsBgce`

### Status Dot

- Node ID: `eezvSM_7CVydF6gsTi`
- Width: `5px`
- Height: `5px`
- Aspect ratio: `1`
- Border radius: `50%`
- Background: `rgb(0, 255, 64)`

### Status Text

- Text node ID: `eezvSM_7CT5gDsBgce`
- Original text: `Available for work.`
- Text style: `/16 regular` (inferred)
- Known tablet text style:
  - Size: `16px`
  - Weight: regular
  - Line height: `1.4em`
  - Letter spacing: `-0.03em`
  - Color: `/Gray`

### CTA

- Node ID: `eezvSM_7CmMoyTgLOr`
- Layout: horizontal stack
- Gap: `8px`
- Distribution: start
- Alignment: start
- Button component: `Primary` — `eezvSM_7CUWQ4aKe2o`
- Exact button specs: see `docs/404.md` Primary Button (`WOfKF0MNK`).

### Clients

- Node ID: `eezvSM_7CxhFMkf6Gg`
- Layout: vertical stack
- Gap: `60px`
- Child order:
  1. Line — `eezvSM_7CY0dZb0rDO`
  2. Container — `eezvSM_7CeE7nxVbB6`

### Clients Line

- Node ID: `eezvSM_7CY0dZb0rDO`
- Width: `1fr`
- Height: `1px`
- Background: `/Dark Gray`

### Clients Container

- Layout: vertical stack
- Gap: `26px`
- Child order:
  1. Logos — `eezvSM_7CRKYetREE2` (`6` logo image frames)

### About

- Node ID: `eezvSM_7CzunhHObPb`
- Layout: vertical stack
- Gap: `60px`
- Child order:
  1. Line — `eezvSM_7Cz9jEwMPtv`
  2. Container — `eezvSM_7CUjtsfVqBs`

### About Container

- Layout: vertical stack
- Gap: `26px`
- Child order:
  1. Intro — `eezvSM_7CMQVP38W3m`
  2. Stats — `eezvSM_7CaTRx284vS` (`4` Stats instances)

### About Heading

- Text node ID: `eezvSM_7CvpH4TSo6U`
- Text: `About me.`
- Text style: `/Heading 2`

### About Body

- Text node ID: `eezvSM_7CSxXp8RkDd`
- Original text:
  `I'm Kima Davidson, a digital designer based in New York with over 11 years of experience crafting thoughtful, visually driven digital experiences.`
- Text style: `/16 regular`

### Services

- Node ID: `eezvSM_7CpDPcuIaRt`
- Layout: vertical stack
- Gap: `60px`
- Child order:
  1. Line — `eezvSM_7CcGh3yKlht`
  2. Container — `eezvSM_7CwaI8FEhfK`

### Services Container

- Layout: vertical stack
- Gap: `26px`
- Child order:
  1. Title — `Services.` (`eezvSM_7CMDzc_OiCX`)
  2. Content — `3` Service instances

### Tools (Stack)

- Node ID: `eezvSM_7CrvleTxsIP`
- Layout: vertical stack
- Gap: `60px`
- Child order:
  1. Line — `eezvSM_7Cyu_N_3rT1`
  2. Container — `eezvSM_7CgK2ghmQxw`

### Tools Container

- Layout: vertical stack
- Gap: `26px`
- Child order:
  1. Title — `Stack.` (`eezvSM_7Ciwu8Yzhfp`)
  2. Content — `6` Cards/Stack instances

### Experience

- Node ID: `eezvSM_7CFcTqbQm8A`
- Layout: vertical stack
- Gap: `60px`
- Child order:
  1. Line — `eezvSM_7Cgm1Ip5qQ9`
  2. Container — `eezvSM_7Cbyo5QRDcH`

### Experience Container

- Layout: vertical stack
- Gap: `26px`
- Child order:
  1. Title — `Experience.` (`eezvSM_7Ccy5GEAmMs`)
  2. Content — `4` Experience instances

### Awards

- Node ID: `eezvSM_7CO96XRqzIv`
- Layout: vertical stack
- Gap: `60px`
- Child order:
  1. Line — `eezvSM_7CQacvmlEEQ`
  2. Container — `eezvSM_7CeNzKGHqpl`

### Awards Container

- Layout: vertical stack
- Gap: `26px`
- Child order:
  1. Title — `Awards.` (`eezvSM_7CIeiK6lIMi`)
  2. Content — `5` Award instances

### Testimonials

- Node ID: `eezvSM_7CJI5OeUU0O`
- Layout: vertical stack
- Gap: `60px`
- Child order:
  1. Line — `eezvSM_7Cyz84CixFV`
  2. Container — `eezvSM_7Cy2uXshjz0`

### Testimonials Container

- Layout: vertical stack
- Gap: `26px`
- Child order:
  1. Title — `Testimonials.` (`eezvSM_7CAAVa73RnT`)
  2. Content — `4` Testimonial instances

### Footer Component

- Node ID: `eezvSM_7CskTeFKjRM`
- Component name: `Footer`
- Same component family as 404 (`ILxIIz0YQ`).
- Tablet/desktop footer variant: see `docs/404.md` Desktop/Tablet Footer
  (`esA4oGvJM`).

### Right

- Node ID: `eezvSM_7CHY8AT6VMH`
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

- Node ID: `eezvSM_7ChunuFqiAt`
- Component name: `ScrollProgress`
- Width: `1fr`
- Height: `3px`
- Position: sticky
- Top: `0px`
- Visible: `true`

### Right Content

- Node ID: `eezvSM_7CvqkcP8B5p`
- Width: `1fr`
- Height: `fit-content`
- Layout: vertical stack
- Gap: `60px`
- Padding: `17px 20px 20px 0px`
- Distribution: start
- Alignment: center
- Overflow: visible
- Child order:
  1. Projects
  2. Buttons

### Projects

- Node ID: `eezvSM_7CAi76D78AO`
- Width: `1fr`
- Height: `fit-content`
- Layout: vertical stack
- Gap: `8px`
- Distribution: center
- Alignment: start
- Child order:
  1. Project component — `eezvSM_7CvwutuaKP2`
  2. Spinner component — `eezvSM_7CDt05q9TJX`

### Tablet Project Instance

- Node ID: `eezvSM_7CvwutuaKP2`
- Component name: `Project`
- Width: `1fr`
- Height: `fit-content`
- Variant: `lD6oBgyg0` (inferred from 404 tablet usage)
- Shared Project card rules: see `docs/404.md` Project Card section.

### Gallery Buttons

- Node ID: `eezvSM_7CfVeWK_zSn`
- Layout: horizontal stack
- Gap: `8px`
- Distribution: `space-between`
- Alignment: center
- Child order:
  1. Primary button — `eezvSM_7CBtCXNLBDe` (visible)
  2. Back to top — `eezvSM_7CLyZXu_hjD` (visible)

### Tablet Content Provided For Integration

- Same portfolio replacement content as Phone section.

### Tablet Integration Implications

- Tablet is a viewport-locked horizontal split layout.
- Left and Right are equal `1fr` columns.
- Main uses `100vh`.
- Left column scrolls independently (`overflow: auto`).
- Right column is `100vh` and scrolls independently (`overflow: auto`).
- Both columns expose sticky `ScrollProgress` (`3px` height) at the top.
- `Phone navigation` is present in the variant tree but hidden on tablet.
- Unlike 404 tablet, home Left Content contains the full section stack (Intro
  through Footer), not just Intro + Footer with `space-between`.
- Left Content uses `60px` section rhythm and `20px 40px 20px 20px` padding.
- All major sections including Clients use `60px` section gap on tablet.
- Right gallery padding matches 404 tablet: `17px 20px 20px 0px` (no left
  gutter, `20px` right gutter).
- Project rail is vertical with `8px` gap; cards use `1fr` width.
- Gallery buttons use `space-between`; both Primary and Back To Top are visible.
- Section internals (Stats, Service, Cards/Stack, Experience, Award,
  Testimonial) match Phone semantics; only page-level layout differs.
- Footer lives inside scrollable Left Content, not pinned to viewport bottom.
- Exclude template-only chrome: Smooth Scroll, Get template fixed buttons.

## Desktop

### Capture Note

- Verified via Framer MCP on 2026-06-15.
- Desktop node IDs use short suffixes (no variant prefix), matching the 404
  desktop pattern.
- Home desktop gallery differs from 404 desktop: projects use a `2`-column grid,
  not dual vertical tickers.

### Root

- Node: `Desktop`
- Node ID: `mJ6wGoC_C`
- Width: `1200px`
- Height: `800px` (canvas frame; columns scroll beyond)
- Background: `/Black`
- Layout: vertical stack
- Horizontal alignment: center
- Overflow: visible
- Fixed overlays (outside Main flow):
  1. `Phone navigation` — `GjRm5GZPe`, fixed, `top: 12px`, `visible: false`
- Utility overlays:
  - `Smooth Scroll` — `RzvA33fE0`, absolute, exclude from portfolio
- No `Get template - fixed button` instances on desktop root.

### Main

- Node ID: `qZJjsohK8`
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

- Node ID: `ZfKECRZGQ`
- Width: `1fr`
- Height: `fit-content`
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

- Node ID: `iWTEq_yuZ`
- Component name: `ScrollProgress`
- Width: `1fr`
- Height: `3px`
- Position: sticky
- Top: `0px`
- Visible: `true`

### Left Content

- Node ID: `kgs1ySCdD`
- Width: `1fr`
- Height: `fit-content`
- Layout: vertical stack
- Gap: `60px`
- Padding: `20px 40px 20px 20px`
- Distribution: center
- Alignment: center
- Overflow: visible
- Child order:
  1. Intro
  2. Clients
  3. About
  4. Services
  5. Tools
  6. Experience
  7. Awards
  8. Testimonials
  9. Footer component

### Intro

- Node ID: `zJxWivA8r`
- Width: `1fr`
- Height: `fit-content`
- Layout: vertical stack
- Gap: `32px`
- Padding: `0`
- Distribution: center
- Alignment: center
- Overflow: visible
- Child order:
  1. Title
  2. Description
  3. Available
  4. CTA
- Same child structure as Phone and Tablet Intro.

### Title

- Node ID: `tBNu6nc_I`
- Layout: horizontal stack
- Gap: `12px`
- Distribution: center
- Alignment: center
- Child order:
  1. Image — `zs8wYcXlf`
  2. Content (name group) — `BzTT52KE0`

### Title Image

- Node ID: `zs8wYcXlf`
- Width: `56px`
- Height: `56px`
- Aspect ratio: `1`
- Border radius: `10px`
- Overflow: clip

### Title Name Group

- Node ID: `BzTT52KE0`
- Layout: vertical stack
- Gap: `0`
- Distribution: center
- Alignment: start
- Child order:
  1. Name — `hIihzx7d8`
  2. Role text — `zPeKGn79_`

### Name Stack

- Node ID: `hIihzx7d8`
- Layout: vertical stack
- Gap: `4px`
- Distribution: center
- Alignment: center

### Name

- Text node ID: `FNa7OBLG9`
- Original text: `Kima Davidson`
- Text style: `/Heading 1`
- Known desktop text style:
  - Size: `24px`
  - Weight: medium
  - Line height: `1.1em`
  - Letter spacing: `-0.05em`
  - Color: `/White`

### Role

- Text node ID: `zPeKGn79_`
- Original text: `Digital Designer`
- Text style: `/Heading 3` (inferred)
- Known desktop text style:
  - Size: `16px`
  - Weight: regular
  - Line height: `1.4em`
  - Letter spacing: `-0.03em`
  - Color: `/White`

### Description

- Node ID: `DU4ZFMGfZ`
- Layout: horizontal stack
- Gap: `8px`
- Distribution: start
- Alignment: center
- Overflow: clip
- Text node ID: `sPonkdaaP`
- Text maximum width: `520px`
- Original text:
  `I design digital experiences — from modern websites and visual identities and graphic design — focused on clarity, usability, and strong visual storytelling.`
- Text style: `/20 regular`
- Known desktop text style:
  - Size: `20px`
  - Weight: regular
  - Line height: `1.3em`
  - Letter spacing: `-0.03em`
  - Color: `/White`

### Available

- Node ID: `piNSkODbz`
- Layout: horizontal stack
- Gap: `4px`
- Distribution: center
- Alignment: center
- Child order:
  1. Status dot — `VydF6gsTi`
  2. Status text — `T5gDsBgce`

### Status Dot

- Node ID: `VydF6gsTi`
- Width: `5px`
- Height: `5px`
- Aspect ratio: `1`
- Border radius: `50%`
- Background: `rgb(0, 255, 64)`

### Status Text

- Text node ID: `T5gDsBgce`
- Original text: `Available for work.`
- Text style: `/16 regular` (inferred)
- Known desktop text style:
  - Size: `16px`
  - Weight: regular
  - Line height: `1.4em`
  - Letter spacing: `-0.03em`
  - Color: `/Gray`

### CTA

- Node ID: `mMoyTgLOr`
- Layout: horizontal stack
- Gap: `8px`
- Distribution: start
- Alignment: start
- Button component: `Primary` — `UWQ4aKe2o`
- Exact button specs: see `docs/404.md` Primary Button (`WOfKF0MNK`).

### Clients

- Node ID: `xhFMkf6Gg`
- Layout: vertical stack
- Gap: `60px`
- Child order:
  1. Line — `Y0dZb0rDO`
  2. Container — `eE7nxVbB6`

### Clients Line

- Node ID: `Y0dZb0rDO`
- Width: `1fr`
- Height: `1px`
- Background: `/Dark Gray`

### Clients Container

- Layout: vertical stack
- Gap: `26px`
- Child order:
  1. Logos — `RKYetREE2` (`6` logo image frames)

### About

- Node ID: `zunhHObPb`
- Layout: vertical stack
- Gap: `60px`
- Child order:
  1. Line — `z9jEwMPtv`
  2. Container — `UjtsfVqBs`

### About Container

- Layout: vertical stack
- Gap: `26px`
- Child order:
  1. Intro — `MQVP38W3m`
  2. Stats — `aTRx284vS` (`4` Stats instances)

### About Heading

- Text node ID: `vpH4TSo6U`
- Text: `About me.`
- Text style: `/Heading 2`

### About Body

- Text node ID: `SxXp8RkDd`
- Original text:
  `I'm Kima Davidson, a digital designer based in New York with over 11 years of experience crafting thoughtful, visually driven digital experiences.`
- Text style: `/16 regular`

### Services

- Node ID: `pDPcuIaRt`
- Layout: vertical stack
- Gap: `60px`
- Child order:
  1. Line — `cGh3yKlht`
  2. Container — `waI8FEhfK`

### Services Container

- Layout: vertical stack
- Gap: `26px`
- Child order:
  1. Title — `Services.` (`MDzc_OiCX`)
  2. Content — `3` Service instances

### Tools (Stack)

- Node ID: `rvleTxsIP`
- Layout: vertical stack
- Gap: `60px`
- Child order:
  1. Line — `yu_N_3rT1`
  2. Container — `gK2ghmQxw`

### Tools Container

- Layout: vertical stack
- Gap: `26px`
- Child order:
  1. Title — `Stack.` (`iwu8Yzhfp`)
  2. Content — `6` Cards/Stack instances

### Experience

- Node ID: `FcTqbQm8A`
- Layout: vertical stack
- Gap: `60px`
- Child order:
  1. Line — `gm1Ip5qQ9`
  2. Container — `byo5QRDcH`

### Experience Container

- Layout: vertical stack
- Gap: `26px`
- Child order:
  1. Title — `Experience.` (`cy5GEAmMs`)
  2. Content — `4` Experience instances

### Awards

- Node ID: `O96XRqzIv`
- Layout: vertical stack
- Gap: `60px`
- Child order:
  1. Line — `QacvmlEEQ`
  2. Container — `eNzKGHqpl`

### Awards Container

- Layout: vertical stack
- Gap: `26px`
- Child order:
  1. Title — `Awards.` (`IeiK6lIMi`)
  2. Content — `5` Award instances

### Testimonials

- Node ID: `JI5OeUU0O`
- Layout: vertical stack
- Gap: `60px`
- Child order:
  1. Line — `yz84CixFV`
  2. Container — `y2uXshjz0`

### Testimonials Container

- Layout: vertical stack
- Gap: `26px`
- Child order:
  1. Title — `Testimonials.` (`AAVa73RnT`)
  2. Content — `4` Testimonial instances

### Footer Component

- Node ID: `skTeFKjRM`
- Component name: `Footer`
- Same component family as 404 (`ILxIIz0YQ`).
- Tablet/desktop footer variant: see `docs/404.md` Desktop/Tablet Footer
  (`esA4oGvJM`).

### Right

- Node ID: `HY8AT6VMH`
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

- Node ID: `hunuFqiAt`
- Component name: `ScrollProgress`
- Width: `1fr`
- Height: `3px`
- Position: sticky
- Top: `0px`
- Visible: `true`

### Right Content

- Node ID: `vqkcP8B5p`
- Width: `1fr`
- Height: `fit-content`
- Layout: vertical stack
- Gap: `60px`
- Padding: `17px 20px 20px 0px`
- Distribution: start
- Alignment: center
- Overflow: visible
- Child order:
  1. Projects
  2. Buttons

### Projects

- Node ID: `Ai76D78AO`
- Width: `1fr`
- Height: `fit-content`
- Layout: `grid`
- Grid columns: `2`
- Grid rows: `2` (canvas grid definition; content continues beyond)
- Gap: `8px`
- Distribution: center
- Alignment: start
- Child order:
  1. Project component — `vwutuaKP2`
  2. Spinner component — `Dt05q9TJX`

### Desktop Project Instance

- Node ID: `vwutuaKP2`
- Component name: `Project`
- Width: `1fr`
- Height: `fit-content`
- Variant: `UdgeVogri` (inferred from 404 desktop grayscale usage)
- Shared Project card rules: see `docs/404.md` Project Card section.
- Desktop grayscale variant hides info overlay at rest; reveal on hover/focus.

### Projects Spinner

- Node ID: `Dt05q9TJX`
- Component name: `Spinner`
- Position: absolute
- Bottom: `-40px`
- Loading indicator for additional project cards beyond exposed grid cells.

### Gallery Buttons

- Node ID: `fVeWK_zSn`
- Layout: horizontal stack
- Gap: `8px`
- Distribution: `space-between`
- Alignment: center
- Child order:
  1. Primary button — `BtCXNLBDe` (visible)
  2. Back to top — `LyZXu_hjD` (visible)

### Desktop Content Provided For Integration

- Same portfolio replacement content as Phone section.

### Desktop Integration Implications

- Desktop is a viewport-locked horizontal split layout.
- Left and Right use a `1fr / 2fr` ratio (matches 404 desktop column ratio).
- Main uses `100vh`.
- Left column scrolls independently (`overflow: auto`).
- Right column is `100vh` and scrolls independently (`overflow: auto`).
- Both columns expose sticky `ScrollProgress` (`3px` height) at the top.
- `Phone navigation` is present in the variant tree but hidden on desktop.
- Unlike 404 desktop, home Left Content contains the full section stack (Intro
  through Footer), not just Intro + Footer with `space-between`.
- Left Content uses `60px` section rhythm and `20px 40px 20px 20px` padding.
- All major sections including Clients use `60px` section gap on desktop.
- Right gallery padding matches 404 desktop: `17px 20px 20px 0px` (no left
  gutter, `20px` right gutter).
- **Home desktop gallery uses a 2-column project grid with `8px` gap**, not the
  dual vertical ticker rails used on 404 desktop.
- Project cards use `1fr` grid cell width; additional cards load via Spinner.
- Gallery buttons use `space-between`; both Primary and Back To Top are visible.
- Footer lives inside scrollable Left Content, not pinned to viewport bottom.
- Exclude template-only chrome: Smooth Scroll.
- No template fixed-button chrome on desktop root.

## Shared Components

Components already captured in `docs/404.md` (reuse without re-documenting unless
home usage differs):

- Footer — `ILxIIz0YQ`
- Primary Button — `WOfKF0MNK`
- Project Card — `uyHIiXSLR`
- Back To Top — `Ml0EsGoIm`

Home-specific components requiring original variant inspection:

| Component | Framer name | Used on phone home |
| --- | --- | --- |
| Stats | `Stats` | About section ×4 |
| Service | `Service` | Services section ×3 |
| Cards/Stack | `Cards/Stack` | Tools section ×6 |
| Experience | `Experience` | Experience section ×4 |
| Award | `Award` | Awards section ×5 |
| Testimonial | `Testimonial` | Testimonials section ×4 |
| Phone navigation | `Phone navigation` | Fixed top nav |
| Secondary | `Secondary` | Captured — not used on home page |
| ScrollProgress | `ScrollProgress` | Code component — see Shared Components |
| Spinner | `Spinner` | Instance placement captured — visuals TBD |

### Service

- Component name: `Service`
- Component ID: `noNyLT_X9`
- Captured variant: `Variant 1`
- Variant ID: `xybI94W8i`
- Used by home Services section (`3` instances per breakpoint).

#### Service Variant Root

- Node ID: `xybI94W8i`
- Width: `580px` (component canvas)
- Height: `fit-content`
- Layout: vertical stack
- Gap: `10px`
- Padding: `0`
- Distribution: center
- Alignment: start
- Overflow: clip
- Child order:
  1. Title
  2. Content

#### Service Title Row

- Node ID: `yFsfBiw0a`
- Width: `1fr`
- Height: `fit-content`
- Layout: horizontal stack
- Gap: `8px`
- Distribution: center
- Alignment: center
- Z-index: `1`
- Overflow: visible
- Child order:
  1. Index text — `fnuQ5YSm4`
  2. Service name — `NezxN81dJ`

#### Service Index

- Text node ID: `fnuQ5YSm4`
- Template text: `1.`
- Width: `fit-content`
- Text style: `/Heading 2` (inferred from section heading scale)
- Known style: `18px`, medium, `1.3em`, `-0.03em`, `/White`

#### Service Name

- Text node ID: `NezxN81dJ`
- Template text: `Service`
- Width: `1fr`
- Text style: `/Heading 2`
- Known style: `18px`, medium, `1.3em`, `-0.03em`, `/White`

#### Service Content

- Node ID: `C3NuOkhNk`
- Width: `1fr`
- Height: `fit-content`
- Layout: vertical stack
- Gap: `16px`
- Distribution: start
- Alignment: start
- Overflow: visible
- Child order:
  1. Points
  2. Images

#### Service Points

- Node ID: `Jj84KHw2n`
- Width: `1fr`
- Height: `fit-content`
- Layout: vertical stack
- Gap: `2px`
- Padding: `0 0 0 20px`
- Distribution: center
- Alignment: center
- Overflow: clip
- Contains `6` point rows (`Point 1` through `Point 6`).

#### Service Point Row (shared anatomy)

- Layout: horizontal stack
- Gap: `8px`
- Distribution: center
- Alignment: center
- Z-index: `1`
- Child order:
  1. Bullet dot
  2. Point text

#### Service Bullet Dot

- Example node ID: `z4ZgwyRRA` (Point 1)
- Width: `4px`
- Height: `4px`
- Aspect ratio: `1`
- Border radius: `50%`
- Background: `/Gray`

#### Service Point Text

- Example node ID: `WXjfCPbEA` (Point 1)
- Template text: `Point 1`
- Width: `1fr`
- Text style: `/16 regular` (inferred)
- Known style: `16px`, regular, `1.4em`, `-0.03em`, `/Gray`

#### Service Images (hidden variant layer)

- Node ID: `rA556q2je`
- Width: `1fr`
- Height: `fit-content`
- Layout: horizontal stack
- Gap: `6px`
- Distribution: start
- Alignment: start
- Visible: `false`
- Z-index: `1`
- Contains `4` image columns.
- Each column is a vertical stack (`gap: 6px`) with:
  1. Image frame (`1fr`, `fit-image`, `8px` radius, overflow clip)
  2. Caption frame (`Point 1` label)
- Hidden at rest in captured variant; likely used for hover/variant state or
  alternate CMS-driven presentation.

#### Service Integration Implications

- Each service card is a numbered row: `1.` + service title on one line.
- Supporting points are a left-indented list (`20px`) with `2px` vertical rhythm.
- Bullet markers are `4px` `/Gray` circles, not typographic bullets.
- Point copy uses `/16 regular` gray text.
- Service title uses `/Heading 2` white text.
- Home page renders `3` Service instances inside the Services section container.
- Instance index/name/point copy are overridden per service in Framer CMS or
  instance properties during integration.
- Image strip exists in component but is hidden in default variant.

### Stats

- Component name: `Stats`
- Component ID: `gusNxGihh`
- Captured variant: `Variant 1`
- Variant ID: `w7LCgTb54`
- Used by home About section (`4` instances per breakpoint).

#### Stats Variant Root

- Node ID: `w7LCgTb54`
- Width: `340px` (component canvas)
- Height: `fit-content`
- Layout: horizontal stack
- Wrap: enabled
- Gap: `2px 6px` (row `2px`, column `6px`)
- Padding: `0`
- Distribution: center
- Alignment: center
- Overflow: visible
- Child order:
  1. Stat value
  2. Separator dot
  3. Stat label

#### Stat Value

- Text node ID: `NLr9dRO2a`
- Template text: `10+`
- Width: `fit-content`
- Text style: `/Heading 2` (inferred)
- Known style: `18px`, medium, `1.3em`, `-0.03em`, `/White`

#### Stat Separator

- Node ID: `MhotE6Kg3`
- Width: `4px`
- Height: `5px`
- Aspect ratio: `1`
- Border radius: `50%`
- Background: `/Dark Gray`

#### Stat Label

- Text node ID: `h84aFPO47`
- Template text: `Text`
- Width: `1fr`
- Text style: `/16 regular` (inferred)
- Known style: `16px`, regular, `1.4em`, `-0.03em`, `/Gray`

#### Stats Integration Implications

- Each stat is a compact inline row: value + dot + label.
- Horizontal wrapping is enabled so multiple stats can flow onto new lines.
- Row gap is `2px`; wrapped column gap is `6px`.
- Value uses white `/Heading 2` emphasis; label uses gray `/16 regular`.
- Separator is a `4px` `/Dark Gray` pill, not punctuation.
- Home About section renders `4` Stats instances in a parent Stats container.
- Value/label strings are overridden per instance during integration.

### Experience

- Component name: `Experience`
- Component ID: `MeRe_5G7W`
- Captured variant: `Variant 1`
- Variant ID: `AA0fTGBKN`
- Used by home Experience section (`4` instances per breakpoint).

#### Experience Variant Root

- Node ID: `AA0fTGBKN`
- Width: `580px` (component canvas)
- Height: `fit-content`
- Layout: vertical stack
- Gap: `6px`
- Padding: `0`
- Distribution: center
- Alignment: center
- Overflow: clip
- Child order:
  1. Title
  2. Description

#### Experience Title Row

- Node ID: `mHxcizJgA`
- Width: `1fr`
- Height: `fit-content`
- Layout: horizontal stack
- Wrap: enabled
- Gap: `2px 6px` (row `2px`, column `6px`)
- Distribution: start
- Alignment: center
- Z-index: `1`
- Overflow: visible
- Child order:
  1. Position — `nKhE4Cv_l`
  2. Separator — `L6s807AVr`
  3. Company — `RU_eKjjbc`
  4. Separator — `sNwrtprY9`
  5. Dates — `HbqTxkKLt`

#### Position

- Text node ID: `nKhE4Cv_l`
- Template text: `Position`
- Width: `fit-content`
- Text style: `/Heading 2` (inferred)
- Known style: `18px`, medium, `1.3em`, `-0.03em`, `/White`

#### Company

- Text node ID: `RU_eKjjbc`
- Template text: `Company`
- Width: `fit-content`
- Text style: `/Heading 2` (inferred)
- Known style: `18px`, medium, `1.3em`, `-0.03em`, `/White`

#### Dates

- Text node ID: `HbqTxkKLt`
- Template text: `Dates`
- Width: `fit-content`
- Text style: `/16 regular` (inferred)
- Known style: `16px`, regular, `1.4em`, `-0.03em`, `/Gray`

#### Experience Separators

- Node IDs: `L6s807AVr`, `sNwrtprY9`
- Width: `4px`
- Height: `5px`
- Aspect ratio: `1`
- Border radius: `50%`
- Background: `/Dark Gray`
- Same separator pattern as Stats component.

#### Experience Description Row

- Node ID: `Yu1x3MqyJ`
- Width: `1fr`
- Height: `fit-content`
- Layout: horizontal stack
- Gap: `8px`
- Distribution: start
- Alignment: center
- Z-index: `1`
- Overflow: visible

#### Experience Description Text

- Text node ID: `tj1VKasDQ`
- Template text: `Description`
- Width: `1fr`
- Maximum width: `480px`
- Text style: `/16 regular`
- Known style: `16px`, regular, `1.4em`, `-0.03em`, `/Gray`

#### Experience Integration Implications

- Each experience row is a vertical pair: metadata line + description.
- Metadata line uses inline wrapping: `Position · Company · Dates`.
- Separators are `4px` `/Dark Gray` dots, not punctuation characters.
- Position and company share `/Heading 2` white emphasis.
- Dates and description use gray `/16 regular`.
- Description is capped at `480px` width.
- Vertical gap between title row and description is `6px`.
- Home Experience section renders `4` instances inside its Content container.
- Position, company, dates, and description are overridden per instance.

### Cards/Stack

- Component name: `Cards/Stack`
- Component ID: `b5Fn37QqR`
- Captured variant: `Default`
- Variant ID: `S5bmGwolh`
- Used by home Tools section (`6` instances per breakpoint).

#### Stack Card Variant Root

- Node ID: `S5bmGwolh`
- Width: `355px` (component canvas)
- Height: `fit-content`
- Layout: horizontal stack
- Gap: `12px`
- Padding: `0`
- Distribution: start
- Alignment: center
- Overflow: visible
- Child order:
  1. Icon
  2. Title

#### Stack Icon Wrapper

- Node ID: `Q_JkWo6Df`
- Width: `fit-content`
- Height: `fit-content`
- Layout: horizontal stack
- Gap: `6px`
- Distribution: center
- Alignment: center
- Overflow: hidden

#### Stack Icon

- Node ID: `Gq7q2HyMj`
- Width: `34px`
- Height: `33px`
- Aspect ratio: `1`
- Overflow: hidden
- Tool/logo image layer.

#### Stack Title Group

- Node ID: `v0yiFEWN3`
- Width: `1fr`
- Height: `fit-content`
- Layout: vertical stack
- Gap: `1px`
- Distribution: start
- Alignment: center
- Overflow: hidden
- Child order:
  1. Name
  2. Description

#### Stack Name Row

- Node ID: `OxcFjPIe7`
- Width: `1fr`
- Height: `fit-content`
- Layout: horizontal stack
- Gap: `4px`
- Distribution: start
- Alignment: center
- Overflow: visible

#### Stack Tool Name

- Text node ID: `ys37DDMqb`
- Template text: `Framer`
- Width: `fit-content`
- Text style: `/Heading 3` (inferred)
- Known style: `16px`, regular, `1.4em`, `-0.03em`, `/White`

#### Stack Tool Description

- Text node ID: `FqYGonePU`
- Template text: `No-code web design.`
- Width: `1fr`
- Maximum width: `700px`
- Text style: `/16 regular` (inferred)
- Known style: `16px`, regular, `1.4em`, `-0.03em`, `/Gray`

#### Cards/Stack Integration Implications

- Each stack card is a horizontal icon + text pair.
- Icon slot is `34px` square with hidden overflow.
- Tool name and description stack vertically with `1px` gap.
- Card-level horizontal gap between icon and text is `12px`.
- Tool name uses white emphasis; description uses gray body text.
- Home Tools section renders `6` Cards/Stack instances.
- Icon image, tool name, and description are overridden per instance.

### Award

- Component name: `Award`
- Component ID: `gLQOu8P6n`
- Captured variants:
  - Default: `zqJFbjp9I`
  - Alternate state: `m3hOnUo1m` (duplicate `Variant 1` on canvas)
- Used by home Awards section (`5` instances per breakpoint).

#### Capture Note

- Framer MCP exposed two `Variant 1` frames with identical child IDs prefixed on
  the alternate copy (`m3hOnUo1m…`). Treat as default + interaction state, not
  duplicate visible rows.

#### Award Variant Root

- Node ID: `zqJFbjp9I`
- Width: `580px` (component canvas)
- Height: `fit-content`
- Layout: vertical stack
- Gap: `6px`
- Padding: `0`
- Distribution: center
- Alignment: center
- Overflow: clip
- Child order:
  1. Title

#### Award Title Row

- Node ID: `mSAQK2kAX`
- Width: `1fr`
- Height: `fit-content`
- Layout: horizontal stack
- Wrap: enabled
- Gap: `2px 6px` (row `2px`, column `6px`)
- Distribution: start
- Alignment: center
- Z-index: `1`
- Overflow: visible
- Child order:
  1. Award name — `dSbM1cgW7`
  2. Separator — `qqTZOYyPv`
  3. Description — `Aju5ptkEg`
  4. Separator — `T4EAg1ikX`
  5. Year — `Yd6VEFRBC`
  6. Separator — `V3ZwOMkXC`
  7. Arrow — `nmo5vZgrF`

#### Award Name

- Text node ID: `dSbM1cgW7`
- Template text: `Award`
- Width: `fit-content`
- Text style: `/Heading 2` (inferred)
- Known style: `18px`, medium, `1.3em`, `-0.03em`, `/White`

#### Award Description

- Text node ID: `Aju5ptkEg`
- Template text: `Description`
- Width: `fit-content`
- Text style: `/Heading 2` (inferred)
- Known style: `18px`, medium, `1.3em`, `-0.03em`, `/White`

#### Award Year

- Text node ID: `Yd6VEFRBC`
- Template text: `Year`
- Width: `fit-content`
- Text style: `/16 regular` (inferred)
- Known style: `16px`, regular, `1.4em`, `-0.03em`, `/Gray`

#### Award Separators

- Node IDs: `qqTZOYyPv`, `T4EAg1ikX`, `V3ZwOMkXC`
- Width: `4px`
- Height: `5px`
- Aspect ratio: `1`
- Border radius: `50%`
- Background: `/Dark Gray`
- Same separator pattern as Stats and Experience.

#### Award Arrow

- Wrapper node ID: `nmo5vZgrF`
- Width: `fit-content`
- Height: `fit-content`
- Layout: horizontal stack
- Gap: `8px`
- Padding: `0` (default variant)
- Child:
  - `Arrow Right` component — `Ft_imnx42`
  - Size: `14px × 14px`
  - Aspect ratio: `1`

#### Alternate Award State

- Variant ID: `m3hOnUo1m`
- Structure matches default variant.
- Arrow wrapper (`m3hOnUo1mnmo5vZgrF`) uses `padding-left: 4px`.
- Likely hover/focus/active presentation state.

#### Award Integration Implications

- Each award row is a single wrapped metadata line ending with an arrow icon.
- Inline order: `Award · Description · Year · Arrow`.
- Award name and description use `/Heading 2` white emphasis.
- Year uses gray `/16 regular`.
- Arrow is `14px` and likely indicates link/external navigation on interaction.
- Home Awards section renders `5` instances.
- Award, description, year, and link target are overridden per instance.

### Testimonial

- Component name: `Testimonial`
- Component ID: `PQOXHfNgx`
- Captured variant: `Variant 1`
- Variant ID: `Nkd8685Bj`
- Used by home Testimonials section (`4` instances per breakpoint).

#### Testimonial Variant Root

- Node ID: `Nkd8685Bj`
- Width: `433px` (component canvas)
- Height: `fit-content`
- Layout: vertical stack
- Gap: `24px`
- Padding: `0`
- Distribution: start
- Alignment: center
- Overflow: clip
- Child order:
  1. Title (card body)

#### Testimonial Card Row

- Node ID: `Hr9f76Tgi`
- Width: `1fr`
- Height: `fit-content`
- Layout: horizontal stack
- Gap: `16px`
- Distribution: center
- Alignment: start
- Overflow: clip
- Child order:
  1. Avatar image
  2. Content

#### Testimonial Avatar

- Node ID: `NGmr6wX6r`
- Width: `42px`
- Height: `41px`
- Aspect ratio: `1`
- Border radius: `10px`
- Overflow: clip

#### Testimonial Content

- Node ID: `QktZ_REtv`
- Width: `1fr`
- Height: `fit-content`
- Layout: vertical stack
- Gap: `6px`
- Distribution: center
- Alignment: start
- Overflow: clip
- Child order:
  1. Name row
  2. Review

#### Testimonial Name Row

- Node ID: `DTIlN7NAJ`
- Width: `1fr`
- Height: `fit-content`
- Layout: horizontal stack
- Gap: `4px`
- Distribution: center
- Alignment: center
- Overflow: visible
- Child order:
  1. Person name — `mu5FUT6f9`
  2. Separator — `eh0xT2r8Y`
  3. Company — `Pq3blSk2X`

#### Person Name

- Text node ID: `mu5FUT6f9`
- Template text: `Name`
- Width: `fit-content`
- Text style: `/Heading 2` (inferred)
- Known style: `18px`, medium, `1.3em`, `-0.03em`, `/White`

#### Company

- Text node ID: `Pq3blSk2X`
- Template text: `Company`
- Width: `1fr`
- Text style: `/16 regular` (inferred)
- Known style: `16px`, regular, `1.4em`, `-0.03em`, `/Gray`

#### Testimonial Separator

- Node ID: `eh0xT2r8Y`
- Width: `4px`
- Height: `5px`
- Aspect ratio: `1`
- Border radius: `50%`
- Background: `/Dark Gray`

#### Review Text

- Node ID: `MkyORJMyb`
- Wrapper layout: horizontal stack
- Gap: `16px`
- Distribution: start
- Alignment: start
- Z-index: `1`
- Text node ID: `iy57Q7Bct`
- Template text: `Review`
- Width: `1fr`
- Maximum width: `480px`
- Text style: `/16 regular`
- Known style: `16px`, regular, `1.4em`, `-0.03em`, `/Gray`

#### Testimonial Integration Implications

- Each testimonial is a horizontal avatar + text block.
- Avatar is `42px` with `10px` radius (matches intro avatar rounding).
- Card row gap between avatar and copy is `16px`.
- Name row uses `Name · Company` with `4px` dark-gray dot separator.
- Person name uses white `/Heading 2`; company and review use gray `/16 regular`.
- Review copy max width is `480px`.
- Content stack gap between name row and review is `6px`.
- Home Testimonials section renders `4` instances.
- Avatar image, name, company, and review are overridden per instance.

### Phone Navigation

- Component name: `Phone navigation`
- Component ID: `Ku0ICcU9w`
- Captured variants:
  - `Info` active: `y0KXVwxnJ` (variant name `1`)
  - `Work` active: `JA4JVtwmY` (variant name `2`)
- Used on phone home only (`visible: false` on tablet/desktop).
- Page placement: fixed, `top: 12px`.

#### Capture Note

- Alternate variant copies use prefixed node IDs on variant `2`
  (`JA4JVtwmY…`). Normalized anatomy below records each layer once.

#### Phone Nav Shell (shared)

- Layout: horizontal stack
- Gap: `0`
- Padding: `3px`
- Distribution: center
- Alignment: center
- Overflow: clip
- Border radius: `25px`
- Width/height: `fit-content`

#### Phone Nav Background

- Example node ID: `Tf9O94vqx`
- Position: absolute fill
- Top/right/bottom/left: `0`
- Background: `/Dark Gray`
- Opacity: `0.4`
- Border radius: `30px`
- Z-index: `1`

#### Phone Nav Segments

Two pill segments in horizontal order:
1. `Info`
2. `Work`

Each segment wrapper (`Info` frame):
- Width: `fit-content`
- Height: `fit-content`
- Layout: horizontal stack
- Gap: `8px`
- Padding: `8px 20px`
- Border radius: `30px`
- Z-index: `2`

#### Info Segment Text

- Text node ID: `dTqi38jXI`
- Label: `Info`
- Text style: `/Buttons/14 medium` (inferred)
- Known style: `14px`, medium, `1.1em`, `-0.03em`, `/White`

#### Work Segment Text

- Text node ID: `ZK8lxIEj8`
- Label: `Work`
- Inactive state opacity: `0.65`
- Text style: `/Buttons/14 medium` (inferred)

#### Variant `1` — Info Active

- Variant ID: `y0KXVwxnJ`
- `Info` segment uses `/Black` background fill.
- `Work` segment has no background; text opacity `0.65`.

#### Variant `2` — Work Active

- Variant ID: `JA4JVtwmY`
- `Info` segment has no background; text at full opacity.
- `Work` segment uses `/Black` background fill.

#### Phone Navigation Integration Implications

- Phone nav is a two-state segmented pill control, not a hamburger menu.
- Outer shell radius `25px`; inner segment radius `30px`.
- Active segment gets solid `/Black` fill; inactive label fades to `65%` opacity.
- Background track is `/Dark Gray` at `40%` opacity behind both segments.
- Segment padding is `8px 20px`; shell padding is `3px`.
- Toggles between `Info` (left/home content) and `Work` (projects/gallery) views.
- Fixed at `top: 12px` on phone home; hidden on tablet and desktop.
- Implement as accessible tab/segmented control with keyboard support.

### ScrollProgress

- Component name: `ScrollProgress`
- Type: Framer code component (not in Assets component list)
- Source: user-provided Framer code component
- Tracks scroll of **immediate scrollable parent Stack**, not `window`.

#### ScrollProgress Props

| Prop | Control | Default in code | Home instance (MCP) |
| --- | --- | --- | --- |
| `color` | Color | `#0099FF` | Match Framer instance on canvas |
| `backgroundColor` | Color | `#EEEEEE` | Match Framer instance on canvas |
| `height` | Number (`2–40px`) | `8px` | `3px` |
| `borderRadius` | Number (`0–24`) | `8` | Verify on canvas |

#### ScrollProgress Behavior

- Finds nearest ancestor with `overflow-y: auto` or `scroll`.
- Progress = `scrollTop / (scrollHeight - clientHeight)`.
- Inner fill width animates `0% → 100%` with `0.45s cubic-bezier(0.33, 1, 0.68, 1)`.
- Static/canvas preview renders `0%` progress.
- Root is `aria-hidden={true}` (decorative only).
- Intrinsic size hints: width `360`, height `8` (overridden per instance).

#### ScrollProgress Page Placement

**Tablet + Desktop (both columns):**
- Left instance example ID: `eezvSM_7CiWTEq_yuZ` / `iWTEq_yuZ`
- Right instance example ID: `eezvSM_7ChunuFqiAt` / `hunuFqiAt`
- Width: `1fr`
- Height: `3px`
- Position: `sticky`
- Top: `0`
- Visible: `true`
- Sits as first child inside each scrollable `Left` / `Right` column.

**Phone:**
- Left instance: `visible: false`
- Right column uses vertical page flow; confirm whether right instance is used
  on phone before integrating.

#### ScrollProgress Integration Implications

- Implement as a reusable client component bound to a scroll-container `ref`.
- Parent columns must use `overflow: auto` (tablet/desktop home already do).
- Do not attach to `window` scroll on split layouts.
- Use `3px` bar height to match Framer home instances, not code default `8px`.
- Map `color` / `backgroundColor` to design tokens once instance colors are
  confirmed on canvas.
- Keep `sticky; top: 0; z-index` above column content so bar stays visible while
  scrolling.
- Decorative only — do not rely on it for accessibility progress semantics.

### Spinner

- Component name: `Spinner`
- Type: page component instance (not in Assets `components_list`, not in project
  `codeFiles_list`)
- Role: loading indicator for additional project cards in the right gallery
  `Projects` container.

#### Capture Note

- MCP can read instance placement attrs only; instance children return `[]`.
- No `Spinner` `ComponentNode` or code file exists in this project copy.
- Visual anatomy (diameter, stroke, color, animation) must be confirmed from
  Framer canvas preview or by opening the instance source in Framer.

#### Spinner Instance (shared across breakpoints)

- Width: `fit-content`
- Height: `fit-content`
- Position: `absolute`
- Bottom: `-40px`
- Visible: `true`
- Opacity: `1`

#### Spinner Instance IDs

| Variant | Projects parent | Spinner instance |
| --- | --- | --- |
| Phone | `ZkgyP1DbrAi76D78AO` | `ZkgyP1DbrDt05q9TJX` |
| Tablet | `eezvSM_7CAi76D78AO` | `eezvSM_7CDt05q9TJX` |
| Desktop | `Ai76D78AO` | `Dt05q9TJX` |

#### Spinner Parent Context

- Lives inside `Projects` frame as sibling to the first exposed `Project`
  instance.
- Phone/tablet `Projects` layout: vertical stack, `8px` gap.
- Desktop `Projects` layout: `2`-column grid, `8px` gap.
- Spinner is absolutely positioned `40px` below the Projects container bottom
  edge (`bottom: -40px`), suggesting infinite-scroll / lazy-load affordance.

#### Spinner Integration Implications

- Show spinner while fetching/rendering more project cards into the gallery rail
  or grid.
- Position loader absolutely below the project list, not inside a grid cell.
- Use `bottom: -40px` offset relative to the `Projects` container.
- Match spinner size/color to Framer preview during implementation.
- Provide accessible loading state (`aria-busy` on Projects region or
  `aria-label="Loading projects"` on spinner wrapper).
- If Framer uses a built-in spinner, replicate with the project loader pattern
  (CSS spinner or icon) at roughly the same visual weight.

### Secondary

- Component name: `Secondary`
- Component ID: `TKI2NIUQG`
- Captured variants:
  - `Icon left` default: `UXYRzUArs`
  - `Icon left` alternate: `lFbtTsMqK`
  - `Icon right` default: `aRPHhyOew`
  - `Icon right` alternate: `ZQ_pOVWBy`
- Not exposed on captured home page selections; likely used on project/detail
  flows or secondary CTAs elsewhere in template.

#### Capture Note

- Duplicate variant frames use prefixed node IDs on alternates (`lFbtTsMqK…`,
  `ZQ_pOVWBy…`, `aRPHhyOew…`). Normalized anatomy below records each layer once.
- Both `Icon left` and `Icon right` variants expose an `Arrow Left` instance in
  MCP XML; confirm arrow direction visually on canvas during integration.

#### Secondary Button Container

- Example node ID: `VTVC_NsL9`
- Width: `fit-content`
- Height: `fit-content`
- Layout: horizontal stack
- Gap: `6px`
- Padding: `8px 14px`
- Border radius: `25px`
- Overflow: clip
- Child order:
  1. Arrow icon (when `Icon left` variant)
  2. Label text
  3. Background fill

#### Secondary Label

- Example text node ID: `wAjZN07Ch`
- Template text: `Text`
- Width: `fit-content`
- Z-index: `1`
- Text style: `/Buttons/14 medium` (inferred)
- Known style: `14px`, medium, `1.1em`, `-0.03em`, `/White`

#### Secondary Background

- Example node ID: `Arg00TUDf`
- Position: absolute fill
- Background: `/Dark Gray`
- Default opacity: `0.8`
- Alternate opacity: `1`
- Z-index: `0`

#### Secondary Arrow Icon

- Example instance ID: `MTR1Hm6UQ`
- Component name: `Arrow Left`
- Size: `13px × 14px`
- Aspect ratio: `1`

#### Secondary Integration Implications

- Secondary is a pill button like Primary, but uses `/Dark Gray` fill instead of
  `/White`.
- Padding `8px 14px` (slightly tighter than Primary `10px 16px`).
- Supports icon-left and icon-right presentations.
- Default/rest background opacity is `0.8`; alternate captured state uses `1`.
- Use for low-emphasis actions (back links, secondary navigation).
- Not required for initial home page integration unless project pages need it.

Pending original-component capture:

- None for home page component inventory.