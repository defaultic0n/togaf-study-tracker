const CACHE = "togaf-v8";
const ASSETS = [
  "/",
  "/index.html",
  "/manifest.json",
  "/togaf-day1.html","/togaf-day1-slides.html",
  "/togaf-day2.html","/togaf-day2-slides.html",
  "/togaf-day3.html","/togaf-day3-slides.html",
  "/togaf-day4.html","/togaf-day4-slides.html",
  "/togaf-day5.html","/togaf-day5-slides.html",
  "/togaf-day6.html","/togaf-day6-slides.html",
  "/togaf-day7.html","/togaf-day7-slides.html",
  "/togaf-day8.html","/togaf-day8-slides.html",
  "/togaf-day9.html","/togaf-day9-slides.html",
  "/togaf-day10.html","/togaf-day10-slides.html",
  "/togaf-day11.html","/togaf-day11-slides.html",
  "/togaf-day12.html","/togaf-day12-slides.html",
  "/togaf-day13.html","/togaf-day13-slides.html",
  "/togaf-day14.html","/togaf-day14-slides.html",
  "/togaf-day15.html","/togaf-day15-slides.html",
  "/togaf-day16.html","/togaf-day16-slides.html",
  "/togaf-day17.html","/togaf-day17-slides.html",
  "/togaf-day18.html","/togaf-day18-slides.html",
  "/togaf-day19.html","/togaf-day19-slides.html",
  "/togaf-day20.html","/togaf-day20-slides.html",
  "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=DM+Sans:wght@300;400;500;600&display=swap",
  "https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,600;1,400&family=Source+Sans+3:wght@300;400;500;600&display=swap"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(res => {
        if (!res || res.status !== 200 || res.type === "opaque") return res;
        const clone = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, clone));
        return res;
      }).catch(() => caches.match("/index.html"));
    })
  );
});
