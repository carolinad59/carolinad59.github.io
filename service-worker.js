const cacheName = 'sudoku-pwa-v2';
const assetsToCache = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './statistics.html',
  './statistics.js',
  './manifest.json',
  './logo.svg',
  './icon-192.png',
  './icon-512.png'
];

// Instalación y cache
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll(assetsToCache))
  );
});

// Activación
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(k => k !== cacheName).map(k => caches.delete(k))
    )).then(() => self.clients.claim())
  );
});

// Intercepción de peticiones
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(resp => resp || fetch(event.request))
  );
});
