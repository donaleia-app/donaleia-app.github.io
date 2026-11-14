/* Service worker mínimo: só existe para o Chrome aceitar instalar como app. Não guarda nada. */
self.addEventListener("install", function () { self.skipWaiting(); });
self.addEventListener("activate", function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener("fetch", function () { /* tudo vai direto para a internet */ });
