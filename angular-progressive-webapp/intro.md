In this scenario you will create an Angular progressive web application (PWAs). PWAs offer better user experience tan the traditional ones. In general, they solve problems related with reliability and speed:

Reliability: PWAs are stable. In this context stability means than even with slow connections or even with no network at all, the application still works. To achieve this, some basic resources like styles, fonts, requests, …​ are stored; due to this caching, it is not possible to assure that the content is always up-to-date.

Speed: When an users opens an application, he or she will expect it to load almost immediately (almost 53% of users abandon sites that take longer that 3 seconds, source: https://developers.google.com/web/progressive-web-apps/#fast).

PWAs uses a script called service worker(https://developers.google.com/web/fundamentals/primers/service-workers/), which runs in background and essentially act as proxy between web app and network, intercepting requests and acting depending on the network conditions.

# Sample application

![Katacoda Logo](./assets/mts-pwa-rec.png)
