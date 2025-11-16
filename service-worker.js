{\rtf1\ansi\ansicpg1252\cocoartf2639
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 const cacheName = 'sudoku-pwa-v1';\
const assetsToCache = [\
  './sudoku-app.html',\
  './manifest.json',\
  './icon-192.png',\
  './icon-512.png'\
];\
\
// Instalaci\'f3n y cache\
self.addEventListener('install', event => \{\
  event.waitUntil(\
    caches.open(cacheName).then(cache => cache.addAll(assetsToCache))\
  );\
\});\
\
// Activaci\'f3n\
self.addEventListener('activate', event => \{\
  event.waitUntil(self.clients.claim());\
\});\
\
// Intercepci\'f3n de peticiones\
self.addEventListener('fetch', event => \{\
  event.respondWith(\
    caches.match(event.request).then(resp => resp || fetch(event.request))\
  );\
\});\
}