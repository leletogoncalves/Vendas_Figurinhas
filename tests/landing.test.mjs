import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";

import { CHECKOUT_PLACEHOLDER, OFFER_PRICE } from "../src/offer.mjs";

test("offer price is R$14,90", () => {
  assert.equal(OFFER_PRICE, "R$14,90");
});

test("checkout starts as an internal placeholder until the real link arrives", () => {
  assert.equal(CHECKOUT_PLACEHOLDER, "#checkout-pendente");
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
