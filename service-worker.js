// Service Worker da Casa Teles.
// Guarda uma cópia local (cache) dos arquivos do app, para que ele abra
// instantaneamente e continue funcionando mesmo sem internet no tablet.
// Sempre que você editar CSS/JS/HTML, suba a versão do CACHE_NAME abaixo
// para forçar os tablets a baixarem a versão nova.

const CACHE_NAME = 'casa-teles-v2';

const APP_SHELL = [
  './',
  './index.html',
  './manifest.json',
  './style.css',
  './app.js',
  './icon-192.png',
  './icon-512.png',
  './icon-maskable-512.png',
];

// Instala e guarda os arquivos essenciais em cache
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

// Remove caches de versões antigas
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Estratégia: cache primeiro, com atualização em segundo plano (stale-while-revalidate)
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((cached) => {
      const network = fetch(event.request)
        .then((response) => {
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          }
          return response;
        })
        .catch(() => cached); // sem internet: usa o que estiver em cache

      return cached || network;
    })
  );
});
