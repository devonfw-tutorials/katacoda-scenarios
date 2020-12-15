To check if an app is a PWA lets compare its normal behaviour against itself but built for production. Run in the project’s root folder the commands below:

`ng build --prod` to build the app using production settings.

`npm install http-server` to install an npm module that can serve your built application. Documentation here.

Go to the dist/basic-ng-pwa/ folder running `cd dist/basic-ng-pwa`.

`http-server -o` to serve your built app.

![Katacoda Logo](./assets/http-serve.png)

Figure 2. Http server running on localhost:8081.

In another console instance run `ng serve` to open the common app (not built).

![Katacoda Logo](./assets/ng-serve.png)

Figure 3. Angular server running on localhost:4200.

The first difference can be found on Developer tools → application, here it is seen that the PWA application (left) has a service worker and the common (right) one does not.

![Katacoda Logo](./assets/pwa-nopwa-app-ng.png)

Figure 4. Application service worker comparison.

If the "offline" box is checked, it will force a disconnection from network. In situations where users do not have connectivity or have a slow, one the PWA can still be accesed and used.

![Katacoda Logo](./assets/online-offline-ng.png)

Figure 5. Offline application.

Finally, browser extensions like Lighthouse(https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk) can be used to test whether an application is progressive or not.

![Katacoda Logo](./assets/lighthouse-ng.png)

Figure 6. Lighthouse report.
