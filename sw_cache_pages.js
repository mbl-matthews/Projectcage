const cacheName = 'v1';

const cacheAssets = [
  'index.html',
  './style/index.css',
  './style/all.css',
  './style/create_project.css',
  './style/project.css',
  './style/projects.css',
  './video/projectcage.mp4',
  './sites/Datenschutzerklaerung.html',
  './sites/Haftungsausschluss.html',
  './sites/Impressum.html',
  './sites/Neues_Projekt.html',
  './sites/Projekt1.html',
  './sites/Projekt2.html',
  './sites/Projekte.html',
  './sites/registrieren.html',
  './images/320.png',
  './images/640.png',
  './images/1280.png',
  './images/1920.png',
  './images/home.svg',
  './fonts/bahnschrift.ttf',
  './fonts/coolvetica.ttf',
  //scripte.....
];


self.addEventListener('install', e => {
  console.log('Service Worker: Installed');

  e.waitUntil(
    caches
      .open(cacheName)
      .then(cache => {
        console.log('Service Worker: Caching Files');
        cache.addAll(cacheAssets);
      })
      .then(() => self.skipWaiting())
  );
});


self.addEventListener('fetch', e => {
  console.log('Service Worker: Fetching');
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
