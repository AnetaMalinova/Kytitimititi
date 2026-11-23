/* Kytitimiti service worker – offline cache.
   Při každém vydání zvyš CACHE_VERSION (shodně s APP_VERSION v index.html). */
const CACHE_VERSION = "0.2.1";
const CACHE = `kytitimiti-${CACHE_VERSION}`;
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icons/icon-180.png",
  "./icons/icon-192.png",
  "./icons/icon-512.png"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k.startsWith("kytitimiti-") && k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== location.origin) return;

  // Stránka: nejdřív síť (ať se dostanou novinky), bez signálu z cache.
  if (req.mode === "navigate") {
    e.respondWith(
      fetch(req)
        .then(res => { const copy = res.clone(); caches.open(CACHE).then(c => c.put("./index.html", copy)); return res; })
        .catch(() => caches.match("./index.html"))
    );
    return;
  }
  // Ostatní soubory: z cache, jinak ze sítě.
  e.respondWith(caches.match(req).then(hit => hit || fetch(req)));
});
