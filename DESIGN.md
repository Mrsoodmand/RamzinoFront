---
name: Ramzino
description: The public-facing site for Ramzino, a crypto payment-gateway platform for Iranian merchants
colors:
  ramzino-mint: "#4EDFD4"
  deep-harbor-teal: "#2B758C"
  ink-title: "#0C0C0C"
  charcoal-body: "#383838"
  surface-white: "#FFFFFF"
  theme-tint: "#F5F5F5"
  border-neutral: "#DFE0E1"
  success-green: "#45BD54"
  danger-red: "#DC0000"
typography:
  headline:
    fontFamily: "var(--font-yekan), Tahoma, sans-serif"
    fontSize: "clamp(1.5625rem, 4vw, 1.875rem)"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "normal"
  body:
    fontFamily: "var(--font-yekan), Tahoma, sans-serif"
    fontSize: "clamp(0.9375rem, 2vw, 1.25rem)"
    fontWeight: 600
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "var(--font-yekan), Tahoma, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "normal"
rounded:
  xs: "4px"
  sm: "5px"
  md: "7px"
  lg: "10px"
  full: "9999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "40px"
components:
  button-primary:
    backgroundColor: "{colors.ramzino-mint}"
    textColor: "#404040"
    rounded: "{rounded.md}"
    padding: "16px 24px"
  button-primary-hover:
    backgroundColor: "{colors.deep-harbor-teal}"
  button-icon:
    backgroundColor: "transparent"
    textColor: "{colors.ink-title}"
    rounded: "{rounded.sm}"
    padding: "8px"
  card:
    backgroundColor: "{colors.surface-white}"
    textColor: "{colors.ink-title}"
    rounded: "{rounded.sm}"
    padding: "12px 16px"
  input:
    backgroundColor: "{colors.surface-white}"
    textColor: "{colors.charcoal-body}"
    rounded: "{rounded.xs}"
    padding: "12px 14px"
---

# Design System: Ramzino

## 1. Overview

**Creative North Star: "The Quiet Ledger"**

Ramzino's public site is where a merchant decides whether to trust the platform with their revenue, before they ever see a balance or a withdrawal button. The system reads like a well-kept ledger: precise, unhurried, legible at a glance. Every surface is quiet by default — flat, softly lit, no directional shadow pretending to be a physical object — and the one permitted flourish, a diagonal glass-shine sweep on the primary CTA, exists only to mark the single action that matters on a page.

This system explicitly rejects crypto-casino energy: no neon gradients beyond the single mint-to-aqua CTA treatment, no coin animations, no hype charts, no moon/rocket motion. Money software doesn't perform excitement; it earns trust through restraint. The palette stays cool and narrow — mint, teal, ink, charcoal — so that when the interface does move (a hover, a glass-shine, a search panel sliding open) it reads as considered rather than decorative.

The interface is Persian-first and RTL-native: layouts, icon direction, and search UI are built RTL and mirror — not translate — into English/LTR. Corner radii stay small (4–10px) and consistent; nothing here is playfully rounded or aggressively squared.

**Key Characteristics:**
- Flat surfaces lit only by soft, wide, near-invisible ambient shadows
- A narrow cool palette: mint accent, deep teal for depth, ink/charcoal for text, no warm hues
- Small, consistent corner radii (4–10px) across buttons, inputs, and cards
- One reserved moment of shine (the glass-sweep hover) on primary actions only
- RTL-native layout that mirrors faithfully into English/LTR

## 2. Colors

A narrow, cool palette: one mint accent carries all calls-to-action, a deeper teal grounds hover and dark-mode surfaces, and everything else is ink, charcoal, or near-white. No warm hues anywhere in the system.

### Primary
- **Ramzino Mint** (`#4EDFD4`): the only accent color in the system. Used exclusively for the primary CTA (solid fill, or as the top stop of the `180deg #4EDFD4 → #75FEF3` gradient) and for state indicators the user must notice immediately (active tab backgrounds in dark mode, selected states). Never used decoratively or as a background wash.
- **Deep Harbor Teal** (`#2B758C`): primary's grounded partner. Hover state for solid primary buttons, and the surface color dark mode swaps in for `themeColor` and active search-tab chips. Reads as "mint, but settled."

### Neutral
- **Ink Title** (`#0C0C0C` light / `#F5F5F5` dark): all headings and primary UI text. The token itself flips between modes rather than being recalculated — title text is always "the darkest thing on the surface, or the lightest, whichever is correct for the mode."
- **Charcoal Body** (`#383838` / `#404040`): body copy and descriptions. Never drops to a lighter gray for "elegance" — body text stays close to ink for contrast.
- **Surface White** (`#FFFFFF` light / `#001F28` dark): card and panel backgrounds. Like Ink Title, this token flips role between modes — "white" in dark mode is a near-black teal-tinted surface, not a literal color.
- **Theme Tint** (`#F5F5F5` light / `#003647` dark): the barely-there hover/active background for icon buttons, chips, and inactive tab groups.
- **Border Neutral** (`#DFE0E1` light / `#003E52` dark): the only border color in the system, used on icon buttons and search inputs. Cards never use a border; they use shadow instead (see Elevation).
- **Success Green** (`#45BD54`) / **Danger Red** (`#DC0000`): reserved strictly for signed values — price change percentages, payment-state indicators. Never decorative.

### Named Rules
**The One Accent Rule.** Ramzino Mint is the only saturated color in the interface. If a second saturated accent seems needed, the answer is more contrast or weight on existing ink/charcoal, not a second hue.

## 3. Typography

**Body/Display Font:** Yekan (`var(--font-yekan)`, with Tahoma / sans-serif fallback)

**Character:** One Persian sans-serif family carries the entire system at different weights and sizes — there is no separate display face. Headings differ from body only by size and weight (600 vs 500/600), never by a different typeface. This is deliberate: a second family would read as decoration on a system built around restraint.

### Hierarchy
- **Headline** (600, `clamp(1.5625rem, 4vw, 1.875rem)` / 25–30px, 1.3 line-height): page-level H1s ("کارمزد ها برای کاربران ما"). One per page, sets the topic.
- **Body** (600, `clamp(0.9375rem, 2vw, 1.25rem)` / 15–20px, 1.6 line-height): lead paragraphs and descriptive copy under a headline. Cap prose at 65–75ch even though most body blocks here are short.
- **Label** (500, 13px, 1.4 line-height): card meta, tab labels, list item text, price figures. The workhorse size — most of the interface's actual numbers render at this scale.

### Named Rules
**The One-Family Rule.** Every weight of hierarchy comes from Yekan. A second typeface anywhere in the product is a mistake, not a design decision.

## 4. Elevation

Flat by default. Ramzino has no card borders and no directional drop shadows — depth comes entirely from a soft, wide, near-invisible ambient glow (large blur radius, single-digit-percent opacity, effectively zero offset). It reads less like a raised physical object and more like the surface is very gently lit from behind. The one exception is dark-mode chip/tab active states, which use a flat fill (Deep Harbor Teal) rather than any shadow at all.

### Shadow Vocabulary
- **Ambient card** (`box-shadow: 0px 0px 75px 0px rgba(0,0,0,0.04)`): the standard elevation for cards and dropdown panels (currency lists, search results).
- **Ambient nav** (`box-shadow: 0px 0px 74px 0px rgba(0,0,0,0.04)`): the fixed top navigation, slightly tuned but the same family.
- **Ambient medium** (`box-shadow: 0px 0px 30px 2px rgba(0,0,0,0.1)`, Tailwind's `shadow-medium`): a slightly stronger variant for elements that need to separate more clearly from busy backgrounds.

### Named Rules
**The No-Hard-Shadow Rule.** If a shadow has a visible offset or a hard edge, it doesn't belong in this system. Every shadow here is wide, soft, and nearly invisible until you look for it.

## 5. Components

Precise and understated: small, exact corner radii, quiet at rest, with the diagonal glass-shine hover reserved as the one moment of polish on primary actions.

### Buttons
- **Shape:** small, consistent radii — 7px on compact CTAs, 10px on the standard primary CTA. Never fully rounded except icon-only circular buttons.
- **Primary:** Ramzino Mint fill (or the `180deg #4EDFD4 → #75FEF3` gradient for hero CTAs), `#404040` text, semibold, wrapped in the `.glass` treatment — a diagonal white-shine sweep that travels across the button on hover.
- **Hover / Focus:** solid primary buttons darken to Deep Harbor Teal on hover; gradient CTAs run the glass-shine sweep. All transitions run on a blanket `all 0.5s ease` — deliberately unhurried, matching the "quiet ledger" pace.
- **Icon buttons:** square, 34–56px depending on breakpoint, `border-neutral` border, `rounded-md`/`rounded-lg`, theme-tint background on hover. The search trigger is the one circular (`rounded-full`) exception.

### Cards
- **Corner Style:** 5px radius — noticeably tighter than the button radius scale, keeping cards feeling like dense data surfaces rather than soft containers.
- **Background:** Surface White token (flips per mode).
- **Shadow Strategy:** Ambient card shadow (see Elevation). No border, ever.
- **Internal Padding:** compact — 12–16px, tighter on mobile.

### Inputs
- **Style:** 1px `#DBDBDB`/border-neutral border, 4px radius (the tightest radius in the system — inputs read as the most utilitarian surface), transparent-over-white background.
- **Focus:** currently relies on the browser default only (`outline-none` is set without a replacement indicator). Any new input must add a visible `:focus-visible` treatment (e.g. a Deep Harbor Teal border or ring) rather than repeating this gap.

### Navigation
- Fixed top bar, 65px mobile / 85px desktop, Ambient-nav shadow, white/dark-surface background. Logo swaps source image (not just a CSS filter) between light and dark logos. Nav links are plain ink-colored text with a semibold weight on hover-adjacent states; no underline, no pill background for the active route.
- Search expands into a dropdown panel (not a full-screen takeover) anchored to the trigger, with pill-shaped tab chips inside (`rounded-md`/`rounded-lg`) that fill Deep Harbor Teal only in dark mode when active — the light-mode active state should be defined explicitly rather than left implicit, since currently only the dark variant is styled.

## 6. Do's and Don'ts

### Do:
- **Do** keep Ramzino Mint as the only saturated accent in the system (The One Accent Rule); everything else is ink, charcoal, teal, or near-white.
- **Do** use wide, soft, near-zero-opacity ambient shadows for elevation (`0px 0px 75px rgba(0,0,0,0.04)` family); never a hard directional drop shadow.
- **Do** keep corner radii small and role-specific: ~4px inputs, ~5px cards, 7–10px buttons.
- **Do** build RTL-first and verify genuine mirroring into English/LTR — icon direction, number formatting, and directional affordances included.
- **Do** add a visible `:focus-visible` treatment to any new input or interactive element; don't repeat the current bare `outline-none` gap.

### Don't:
- **Don't** introduce crypto-casino flash: neon gradients beyond the single mint CTA treatment, coin animations, hype charts, or moon/rocket motion — this is the platform's stated anti-reference and it applies most on this public-facing surface.
- **Don't** add a second typeface. Yekan carries the entire hierarchy by weight and size alone (The One-Family Rule).
- **Don't** put a border on a card. Cards signal depth through the ambient shadow, never a stroke.
- **Don't** let body or label text drop to a lighter gray "for elegance" — Charcoal Body and Ink Title are already tuned for contrast; don't wash them out.
- **Don't** style the dark-mode active tab/chip state without also defining its light-mode equivalent; leaving one mode implicit breaks parity.
