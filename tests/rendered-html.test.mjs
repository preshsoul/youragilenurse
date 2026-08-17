import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("keeps the public portfolio route and launch copy in place", async () => {
  const [page, layout] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
  ]);

  assert.match(layout, /Monisola Adejo \| UGC Creator in Ontario, Canada/);
  assert.match(layout, /index:\s*true/);
  assert.match(layout, /follow:\s*true/);
  assert.match(page, /UGC Creator \| Nurse \| Mom/);
  assert.match(page, /Give people a clear reason to care about/);
  assert.match(page, /id="work"/);
  assert.match(page, /id="contact"/);
  assert.doesNotMatch(page, /Your site is taking shape|react-loading-skeleton|codex-preview/i);
});

test("keeps launch metadata and media controls aligned with the portfolio", async () => {
  const [page, layout, autoplayVideo, mediaRegister] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/autoplay-video.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/media-register.ts", import.meta.url), "utf8"),
  ]);

  assert.match(page, /UGC Creator \| Nurse \| Mom/);
  assert.match(layout, /index:\s*true/);
  assert.match(layout, /follow:\s*true/);
  assert.doesNotMatch(layout, /Your Agile Nurse/);
  assert.match(autoplayVideo, /controls=\{controls\}/);
  assert.match(autoplayVideo, /prefers-reduced-motion/);
  assert.match(autoplayVideo, /shouldAvoidAutoplayOnCurrentConnection/);
  assert.match(autoplayVideo, /rootMargin: "80px 0px"/);
  assert.match(mediaRegister, /-v2\.mp4/);
});

test("keeps the single introduction, the stills strip and the full service range", async () => {
  const [page, stillStrip, mediaRegister] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/still-strip.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/media-register.ts", import.meta.url), "utf8"),
  ]);

  // One true introduction, in About, not in the hero or the pitch card.
  assert.equal((page.match(/I’m <em>Monisola/g) ?? []).length, 1);
  assert.match(page, /Hello, I’m <em>Monisola\.<\/em>/);
  assert.doesNotMatch(page, /Hi, I’m/);
  assert.doesNotMatch(page, /I’m Monisola Adejo/);

  // The pitch stays featured with tightened copy.
  assert.match(page, /Watch My Pitch/);
  assert.match(page, /A quick hello, on <em>camera\.<\/em>/);
  assert.match(page, /On-camera creator pitch/);

  // Every playable video lives in the Work grid; More to explore is stills only.
  assert.doesNotMatch(page, /VideoRail|video-rail/);
  assert.match(page, /<StillStrip items=\{exploreStills\} \/>/);
  assert.match(page, /More to explore/);
  assert.doesNotMatch(stillStrip, /<video|AutoplayVideo/);
  assert.match(stillStrip, /next\/image/);

  // Sections and ranges the brief preserves.
  assert.match(page, /Your customer can recognize themselves/);
  assert.match(page, /Skincare, haircare, body care, fragrance, cosmetics, grooming tools and beauty devices\./);
  assert.match(page, /Hotels, experiences, luggage, travel accessories, clothing, footwear, jewellery, eyewear and bags\./);
  assert.match(mediaRegister, /A slower look at the details\./);
});
