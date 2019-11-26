const CACHE_NAME = "Smartphone5G";
var urlsToCache = [
  "/",
  "/nav.html",
  "/index.html",
  "/icon.png",
  "/service-worker.js",
  "/pages/home.html",
  "/pages/about.html",
  "/pages/smartphone5g.html",
  "/pages/teknologi5g.html",
  "/css/materialize.css",
  "/js/materialize.js",
  "/js/nav.js",
  "img/huawei-mate-20x-5g-.jpg",
  "img/huawei-mate30-pro-5g.jpg",
  "img/profile_photo.png",
  "img/samsung-galaxy-note10-plus-.jpg",
  "img/samsung-galaxy-s10-plus-new.jpg"
];
 
self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches
      .match(event.request, { cacheName: CACHE_NAME })
      .then(function(response) {
        if (response) {
          console.log("ServiceWorker: Gunakan aset dari cache: ", response.url);
          return response;
        }
 
        console.log(
          "ServiceWorker: Memuat aset dari server: ",
          event.request.url
        );
        return fetch(event.request);
      })
  );
});
