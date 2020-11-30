Install Angular PWA package with ng add @angular/pwa --project <name>. As before substitute name with basic-ng-pwa.

The above command completes the following actions:

1.Adds the @angular/service-worker package to your project.

2.Enables service worker build support in the CLI.

3.Imports and registers the service worker in the app module.

4.Updates the index.html file:

    -Includes a link to add the manifest.json file.

    -Adds meta tags for theme-color.

    -Installs icon files to support the installed Progressive Web App (PWA).

    -Creates the service worker configuration file called ngsw-config.json, which specifies the caching behaviors and other settings.

# manifest.json

manifest.json is a file that allows to control how the app is displayed in places where native apps are displayed.

# Fields

name: Name of the web application.

short_name: Short version of name.

theme_color: Default theme color for an application context.

background_color: Expected background color of the web application.

display: Preferred display mode.

scope: Navigation scope of tghis web application’s application context.

start_url: URL loaded when the user launches the web application.

icons: Array of icons that serve as representations of the web app.

Additional information can be found here.

# ngsw-config.json

nsgw-config.json specifies which files and data URLs have to be cached and updated by the Angular service worker.

# Fields

-index: File that serves as index page to satisfy navigation requests.

-assetGroups: Resources that are part of the app version that update along with the app.

    -name: Identifies the group.

    -installMode: How the resources are cached (prefetch or lazy).

    -updateMode: Caching behaviour when a new version of the app is found (prefetch or lazy).

    -resources: Resources to cache. There are three groups.

      -files: Lists patterns that match files in the distribution directory.

      -urls: URL patterns matched at runtime.

-dataGroups: UsefulIdentifies the group. for API requests.

    -name: Identifies the group.

    -urls: URL patterns matched at runtime.

    -version: Indicates that the resources being cached have been updated in a backwards-incompatible way.

    -cacheConfig: Policy by which matching requests will be cached

      -maxSize: The maximum number of entries, or responses, in the cache.

      -maxAge: How long responses are allowed to remain in the cache.

        -d: days. (5d = 5 days).

        -h: hours

        -m: minutes

        -s: seconds. (5m20s = 5 minutes and 20 seconds).

        -u: milliseconds

      -timeout: How long the Angular service worker will wait for the network to respond before using a cached response. Same dataformat as maxAge.

      -strategy: Caching strategies (performance or freshness).

-navigationUrls: List of URLs that will be redirected to the index file.

Additional information can be found here(https://angular.io/guide/service-worker-config).
