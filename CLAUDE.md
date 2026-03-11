# HabitCents – Website Design & Development

## Project Overview

**HabitCents** is a personal finance + habit-tracking web app that helps users build better money habits by linking daily micro-habits to savings goals. The website should feel modern, trustworthy, and motivating — think clean fintech aesthetics with a friendly, approachable tone.

**Brand Colors**
- Primary Green: `#2DBF6E`
- Deep Navy: `#0F1F3D`
- Soft White: `#F7F9FC`
- Accent Gold: `#F5A623`
- Text Gray: `#4A5568`

**Typography**
- Headings: `Inter` or `Plus Jakarta Sans` (via Google Fonts CDN)
- Body: `Inter`, 16px base
- Monospace (data/numbers): `JetBrains Mono`

---

## Workflow

When the user provides a reference image (screenshot) and optionally some CSS classes or style notes:

1. **Generate** a single `index.html` file using Tailwind CSS (via CDN). Include all content inline — no external files unless requested.
2. **Screenshot** the rendered page using Puppeteer (`npx puppeteer screenshot index.html --fullpage` or equivalent). If the page has distinct sections, capture those individually too.
3. **Compare** your screenshot against the reference image. Check for mismatches in:
   - Spacing and padding (measure in px)
   - Font sizes, weights, and line heights
   - Colors (exact hex values)
   - Alignment and positioning
   - Border radii, shadows, and effects
   - Responsive behavior
   - Image/icon sizing and placement
4. **Fix** every mismatch found. Edit the HTML/Tailwind code.
5. **Re-screenshot** and compare again.
6. **Repeat** steps 3–5 until the result is within ~2–3px of the reference everywhere.

Do NOT stop after one pass. Always do at least 2 comparison rounds. Only stop when the user says so or when no visible differences remain.

---

## Technical Defaults

- Use Tailwind CSS via CDN (`<script src="https://cdn.tailwindcss.com"></script>`)
- Use placeholder images from `https://placehold.co/` when source images aren't provided
- Use Heroicons or Lucide icons via CDN when icons are needed
- Mobile-first responsive design (always include `sm:`, `md:`, `lg:` breakpoints)
- Single `index.html` file unless the user requests otherwise
- Semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
- Google Fonts CDN for typography
- Smooth scroll behavior: `html { scroll-behavior: smooth; }`

---

## Page Structure

Every HabitCents page should follow this general layout unless instructed otherwise:

```
<header>        → Logo + Nav + CTA button
<hero>          → Headline, subheading, CTA, hero image/illustration
<features>      → 3–4 key features with icons
<how-it-works>  → Numbered steps section
<social-proof>  → Testimonials or trust badges
<pricing>       → Tiered pricing cards (if applicable)
<faq>           → Accordion-style FAQ
<cta-banner>    → Full-width conversion banner
<footer>        → Links, copyright, social icons
```

---

## Component Patterns

### Buttons
```html
<!-- Primary -->
<button class="bg-[#2DBF6E] hover:bg-[#25a85f] text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg">
  Get Started Free
</button>

<!-- Secondary / Outline -->
<button class="border-2 border-[#2DBF6E] text-[#2DBF6E] hover:bg-[#2DBF6E] hover:text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200">
  Learn More
</button>
```

### Cards
```html
<div class="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100">
  <!-- card content -->
</div>
```

### Section Headings
```html
<div class="text-center max-w-2xl mx-auto mb-12">
  <span class="text-[#2DBF6E] font-semibold text-sm uppercase tracking-widest">Section Label</span>
  <h2 class="text-3xl md:text-4xl font-bold text-[#0F1F3D] mt-2 mb-4">Main Heading</h2>
  <p class="text-[#4A5568] text-lg">Supporting subtext goes here.</p>
</div>
```

### Nav Bar
```html
<header class="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
  <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
    <!-- Logo + Links + CTA -->
  </nav>
</header>
```

---

## Tailwind Config Extension

When using Tailwind via CDN, extend the config inline at the top of your `<script>` block:

```html
<script>
  tailwind.config = {
    theme: {
      extend: {
        colors: {
          primary: '#2DBF6E',
          navy: '#0F1F3D',
          gold: '#F5A623',
          surface: '#F7F9FC',
        },
        fontFamily: {
          sans: ['Inter', 'Plus Jakarta Sans', 'sans-serif'],
          mono: ['JetBrains Mono', 'monospace'],
        },
        borderRadius: {
          '2xl': '1rem',
          '3xl': '1.5rem',
        },
      }
    }
  }
</script>
```

---

## Animations & Effects

- Use `transition-all duration-200` on interactive elements
- Hero sections may use subtle entrance animations (Tailwind `animate-fade-in` or CSS keyframes)
- Prefer `hover:scale-[1.02]` over large scale jumps
- Glassmorphism for overlays: `bg-white/80 backdrop-blur-md`
- Soft drop shadows: `shadow-md` default, `shadow-xl` on hover

---

## Accessibility Requirements

- All images must have descriptive `alt` attributes
- Buttons must have visible focus rings (`focus:ring-2 focus:ring-[#2DBF6E] focus:outline-none`)
- Color contrast must meet WCAG AA (4.5:1 for body text)
- Semantic landmarks: `<main>`, `<nav>`, `<header>`, `<footer>`, `aria-label` on repeated nav regions
- Keyboard navigable interactive elements

---

## Responsive Breakpoints

| Breakpoint | Tailwind Prefix | Target Devices         |
|------------|-----------------|------------------------|
| < 640px    | (default)       | Mobile phones          |
| ≥ 640px    | `sm:`           | Large phones / small tablets |
| ≥ 768px    | `md:`           | Tablets                |
| ≥ 1024px   | `lg:`           | Laptops                |
| ≥ 1280px   | `xl:`           | Desktops               |
| ≥ 1536px   | `2xl:`          | Large monitors         |

Always stack columns vertically on mobile and expand to grid layouts on `md:` and above.

---

## Content & Copy Guidelines

- **Tone:** Friendly, clear, motivating — not overly corporate
- **CTA copy:** Action-oriented ("Start Saving Today", "Build Your First Habit", "See How It Works")
- **Avoid:** Jargon, passive voice, vague promises
- **Numbers:** Use social proof stats where possible (e.g., "Join 12,000+ savers")
- **Microcopy:** Add helpful hints under form fields and near CTAs

---

## File & Asset Conventions

```
/
├── index.html          ← Main page (single-file default)
├── /assets
│   ├── /images         ← All static images
│   ├── /icons          ← SVG icons
│   └── /fonts          ← Self-hosted fonts (if needed)
├── /pages              ← Additional pages (dashboard, pricing, etc.)
└── CLAUDE.md           ← This file
```

When multiple pages are needed, each gets its own `.html` file under `/pages/` with a shared nav/footer component pattern inlined.

---

## DO NOT

- Do NOT use Bootstrap or other CSS frameworks alongside Tailwind
- Do NOT use `<table>` for layout purposes
- Do NOT hardcode pixel values in `style=""` when a Tailwind class exists
- Do NOT include unused `<script>` or `<link>` tags
- Do NOT ship placeholder images to production (flag them with a `<!-- TODO: replace placeholder -->` comment)
- Do NOT use `!important` unless absolutely necessary

---

## Quality Checklist (Before Marking Complete)

- [ ] Renders correctly on mobile (375px), tablet (768px), and desktop (1440px)
- [ ] All interactive states (hover, focus, active) are styled
- [ ] No broken images or missing icons
- [ ] Passes basic accessibility scan (no missing `alt`, no contrast failures)
- [ ] Page loads without console errors
- [ ] CTA buttons are clearly visible above the fold
- [ ] Screenshot matches reference within ~2–3px
- [ ] All placeholder content is clearly marked as such
