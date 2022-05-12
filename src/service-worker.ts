/// <reference lib="webworker" />
/* eslint-disable no-restricted-globals */
/* eslint-disable */

import { API_WEATHER_DOMAIN } from 'constants/domains';
import { clientsClaim } from 'workbox-core';
import { ExpirationPlugin } from 'workbox-expiration';
import { precacheAndRoute, createHandlerBoundToURL } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate, CacheFirst } from 'workbox-strategies';

declare const self: ServiceWorkerGlobalScope;

clientsClaim();
precacheAndRoute(self.__WB_MANIFEST);

const fileExtensionRegexp = new RegExp('/[^/?]+\\.[^/]+$');
registerRoute(
  ({ request, url }: { request: Request; url: URL }) => {

    if (request.mode !== 'navigate') {
      return false;
    }

    if (url.pathname.startsWith('/_')) {
      return false;
    }

    if (url.pathname.match(fileExtensionRegexp)) {
      return false;
    }

    return true;
  },
  createHandlerBoundToURL(process.env.PUBLIC_URL + '/index.html')
);


registerRoute(
  ({ url }) => url.origin === self.location.origin && /\.(png|jpg|jpeg|svg)$/i.test(url.pathname),
  new StaleWhileRevalidate({
    cacheName: 'images',
    plugins: [
      new ExpirationPlugin({ maxEntries: 50 }),
    ],
  })
);

registerRoute(
  ({ url }) => {
    return url.origin.includes(API_WEATHER_DOMAIN)
  },
  new CacheFirst({
    cacheName: 'api-openweathermap',
    plugins: [
      new ExpirationPlugin({
        maxAgeSeconds: 60 * 10 // 10 minutes
      })
    ]
  }),
  'GET'
)

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

