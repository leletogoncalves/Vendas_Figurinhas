# Site Conversao Hero Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Improve the first fold of the sales page so visitors understand the offer quickly and click through to checkout.

**Architecture:** Keep the current Vite/React single-page structure. Update only the landing content, hero asset import, copy blocks, and tests that protect the conversion message.

**Tech Stack:** React, Vite, CSS, Node test runner.

---

### Task 1: Protect Conversion Copy

**Files:**
- Modify: `tests/landing.test.mjs`

- [ ] **Step 1: Write the failing test**

Add assertions that require the new hero image import and buyer-facing copy:

```js
assert.match(app, /hero-promo-site\.png/);
assert.match(app, /Acesso imediato no email/);
assert.match(app, /PDF completo para imprimir hoje/);
assert.doesNotMatch(app, /Esta parte mostra/);
assert.doesNotMatch(app, /As fotos entram aqui/);
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test`

Expected: failure because `hero-promo-v2.png` and the new copy are not in the app yet.

### Task 2: Update Hero Asset and Copy

**Files:**
- Create: `src/assets/hero-promo-v2.png`
- Create: `src/assets/hero-promo-site.png`
- Modify: `src/App.jsx`
- Modify: `src/styles.css`

- [ ] **Step 1: Add the new hero asset**

Copy the image supplied by the user into `src/assets/hero-promo-v2.png`, then create a cropped site version as `src/assets/hero-promo-site.png` so the page does not show ad-only wording in the first fold.

- [ ] **Step 2: Update `src/App.jsx`**

Import `hero-promo-v2.png`, strengthen the top headline, add direct trust copy, and replace internal explanatory text with buyer-facing sections.

- [ ] **Step 3: Update `src/styles.css`**

Make the hero media slightly more prominent, add compact proof details near the CTA, and preserve responsive layout without text overlap.

- [ ] **Step 4: Run test to verify it passes**

Run: `npm test`

Expected: all landing tests pass.

### Task 3: Verify Production Build

**Files:**
- No source edits expected.

- [ ] **Step 1: Build the site**

Run: `npm run build`

Expected: Vite build exits with code 0 and emits `dist/`.

- [ ] **Step 2: Inspect git diff**

Run: `git diff -- src/App.jsx src/styles.css tests/landing.test.mjs docs/superpowers src/assets/hero-promo-v2.png`

Expected: diff contains only the planned site conversion updates.
