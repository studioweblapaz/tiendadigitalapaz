// Service Worker básico para permitir la instalación de la PWA
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // Modo básico: solo pasa las solicitudes a la red
  event.respondWith(fetch(event.request));
});
