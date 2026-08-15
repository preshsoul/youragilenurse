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
