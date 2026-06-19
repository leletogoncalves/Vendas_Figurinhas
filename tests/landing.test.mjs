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

  assert.match(app, /QUERO MEU KIT POR R\$14,90/);
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

test("landing includes stronger conversion triggers", async () => {
  const app = await readFile(new URL("../src/App.jsx", import.meta.url), "utf8");

  assert.match(app, /sem gastar uma fortuna/);
  assert.match(app, /Entrega na hora no email/);
  assert.match(app, /Cansado de gastar e o album nao fechar/);
  assert.match(app, /Por que comprar agora/);
  assert.match(app, /Imprima para sempre/);
});

test("hero uses the promotional offer image", async () => {
  const app = await readFile(new URL("../src/App.jsx", import.meta.url), "utf8");

  assert.match(app, /hero-promo\.jpg/);
  assert.doesNotMatch(app, /kit-hero\.png/);
});
