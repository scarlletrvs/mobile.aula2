var cacheName = 'pwateste+-v1.0';

self.addEventListener('install', event => {
    self.skipWaiting(); 
    event.waitUntil(
        caches.open(cacheName)
        .then(cache => cache .addAll ([
        './index.html',
        './assets/css/main.css',
        './assets/css/noscript.css',
        './assets/js/manifest.json',
        './assets/js/jquery.min.js',
        './assets/js/jquery.scrollex.min.js',
        './assets/js/browser.min.js',
        './assets/js/breakpoints.min.js',
        './assets/js/util.js',
        './assets/js/main.js',
        './assets/images/cay-port.jpg'
    


        ]))
    );
});

self.addEventListener('message', function (event) {
    if (event.data.action === 'skipWaiting'){
        self.skipWaiting(); 
    }
});

self.addEventListener('fetche', function (event){
    event.respondWith(
        caches.match(event.request)
        .then (function (response){
            if (response)
            {
                return response;
            }
            return fetch (event.request);
        })
    );
});