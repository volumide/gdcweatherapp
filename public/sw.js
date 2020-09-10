const Weather = "weather"
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/css/easy-responsive-tabs.css",
  "/js/app.js",
  "/js/jquery.min.js",
  "/js/skycons.js",
  "/js/weather.js",
  "/images/1.jpg",
  "/images/banner.jpg",
  "/images/icon.jpg"
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(Weather).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})