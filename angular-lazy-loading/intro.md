# Angular Lazy loading

When the development of an application starts, it just contains a small set of features so the app usually loads fast. However, as new features are added, the overall application size grows up and its loading speed decreases, is in this context where Lazy loading finds its place. Lazy loading is a dessign pattern that defers initialization of objects until it is needed so, for example, Users that just access to a website’s home page do not need to have other areas loaded. Angular handles lazy loading through the routing module which redirect to requested pages. Those pages can be loaded at start or on demand.

# An example with Angular

To explain how lazy loading is implemented using angular, a basic sample app is going to be developed. This app will consist in a window named "level 1" that contains two buttons that redirects to other windows in a "second level". It is a simple example, but useful to understand the relation between angular modules and lazy loading.

![Katacoda Logo](./assets/levels-app.png)

Figure 1. Levels app structure.
This graphic shows that modules acts as gates to access components "inside" them.

Because the objective of this guide is related mainly with logic, the html structure and scss styles are less relevant, but the complete code can be found as a sample here(https://github.com/devonfw/devon4ng/tree/master/samples/AngularLazyLoading).
