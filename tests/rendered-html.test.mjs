import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the public portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Monisola Adejo \| UGC Creator in Ontario, Canada<\/title>/i);
  assert.match(html, /<meta name="robots" content="index, follow"/i);
  assert.match(html, /UGC Creator \| Nurse \| Mom/);
  assert.match(html, /Give people a clear reason to care about/);
  assert.match(html, /id="work"/);
  assert.match(html, /id="contact"/);
  assert.doesNotMatch(html, /Your site is taking shape|react-loading-skeleton|codex-preview/i);
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
