var cacheName = 'nata-mws';
var filesToCache = [
  '/',
  '/index.html',
  'project2/map.html',
  'images/profile.jpg',
  'https://unpkg.com/leaflet@1.3.4/dist/leaflet.css',
  'https://unpkg.com/leaflet@1.3.4/dist/leaflet.js',
  'project1/kalkulator.html',
  'project3/project.html',
  'https://truffle-assets.imgix.net/n0tuaih9ywav_2Vekit3Q884YCaYieskwuA_nasi-goreng-kampung_landscapeThumbnail_en-US.png',
  'https://igx.4sqi.net/img/general/600x600/P45PRXHGMH0PYDCNFGC4D0VUBBJLHUNEISN0I2DIWWJLJT0J.jpg',
  'https://quipper-video-wordpress.s3.amazonaws.com/images/2017/02/1.1-Universitas-udayana.jpg',
  'https://lh3.googleusercontent.com/-TTTPypkb2Fo/Wb4KT5P1CVI/AAAAAAAABDI/plHQYwxEeJcl0C7T4CDdN9br8-cpmQ8MwCLIBGAYYCw/w1440-h1080-k-no/',
  'www.laurentiadewi.com/uploads/P1240796.jpg',
];
self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});
self.addEventListener('activate',  event => {
  event.waitUntil(self.clients.claim());
});
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request, {ignoreSearch:true}).then(response => {
      return response || fetch(event.request);
    })
  );
});