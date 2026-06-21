import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";

import { CHECKOUT_URL, OFFER_PRICE } from "../src/offer.mjs";

test("offer price is R$14,90", () => {
  assert.equal(OFFER_PRICE, "R$14,90");
});

test("checkout points to the Cakto payment page", () => {
  assert.equal(CHECKOUT_URL, "https://pay.cakto.com.br/vsgnpgb_933334");
});

test("landing page renders the expected purchase CTA copy", async () => {
  const app = await readFile(new URL("../src/App.jsx", import.meta.url), "utf8");

  assert.match(app, /LIBERAR MEU KIT POR R\$14,90/);
  assert.match(app, /data-checkout-link/);
});

test("app imports React for the configured JSX transform", async () => {
  const app = await readFile(new URL("../src/App.jsx", import.meta.url), "utf8");

  assert.match(app, /import React from "react";/);
});

test("landing includes real proof photos and print guide sections", async () => {
  const app = await readFile(new URL("../src/App.jsx", import.meta.url), "utf8");

  assert.match(app, /compare-mbappe\.jpg/);
  assert.match(app, /compare-le-normand\.jpg/);
  assert.match(app, /compare-depay\.jpg/);
  assert.match(app, /print-guide\.jpg/);
  assert.match(app, /Resultado real/);
  assert.match(app, /Guia incluso/);
});

test("landing leads with buyer desire instead of file format", async () => {
  const app = await readFile(new URL("../src/App.jsx", import.meta.url), "utf8");

  assert.match(app, /Complete seu album 2026 hoje sem gastar com pacotinho repetido/);
  assert.match(app, /Liberar meu kit por R\$14,90/i);
  assert.match(app, /Monte a colecao sem depender de sorte/);
  assert.match(app, /Acesso imediato no email/);
  assert.doesNotMatch(app, /PDF/);
  assert.doesNotMatch(app, /PDF completo de figurinhas 2026 por/);
  assert.doesNotMatch(app, /PDF completo para imprimir hoje/);
});

test("hero uses the promotional offer image", async () => {
  const app = await readFile(new URL("../src/App.jsx", import.meta.url), "utf8");

  assert.match(app, /hero-promo-site\.png/);
  assert.doesNotMatch(app, /hero-promo\.jpg/);
  assert.doesNotMatch(app, /kit-hero\.png/);
});

test("mobile layout shows the promotional image early", async () => {
  const css = await readFile(new URL("../src/styles.css", import.meta.url), "utf8");

  assert.match(css, /@media \(max-width: 719px\)[\s\S]*\.hero-media\s*{[\s\S]*order: -1;/);
});

test("sticky CTA waits until the hero CTA has scrolled away", async () => {
  const app = await readFile(new URL("../src/App.jsx", import.meta.url), "utf8");
  const css = await readFile(new URL("../src/styles.css", import.meta.url), "utf8");

  assert.match(app, /data-hero-cta/);
  assert.match(app, /IntersectionObserver/);
  assert.match(app, /sticky-cta \$\{showSticky \? "is-visible" : ""\}/);
  assert.match(css, /\.sticky-cta\s*{[\s\S]*transform: translateY\(110%\);/);
  assert.match(css, /\.sticky-cta\.is-visible\s*{[\s\S]*transform: translateY\(0\);/);
});
