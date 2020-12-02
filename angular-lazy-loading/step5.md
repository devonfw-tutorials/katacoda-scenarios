# Changing to lazy loading

Modifying an angular application to load its modules lazily is easy, you have to change the routing configuration of the desired module (for example FirstModule).

Listing 6. File app-routing.module.ts.

```
const routes: Routes = [
  {
    path: 'first',
    loadChildren: () => import('./first/first.module').then(m => m.FirstModule),
  },
  {
    path: '',
    redirectTo: 'first',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
```

Notice that instead of loading a component, you dynamically import it in a loadChildren attribute because modules acts as gates to access components "inside" them. Updating the app to load lazily has four consecuences:

- 1. No component attribute.

- 2. No import of FirstComponent.

- 3. FirstModule import has to be removed from the imports array at app.module.ts.

- 4. Change of context.

If we check first-routing.module.ts again, the can see that the path for ContentLeft and ContentRight is set to 'first/second-left' and 'first/second-right' respectively, so writing 'http//localhost:4200/first/second-left' will redirect us to ContentLeft. However, after loading a module with loadChildren setting the path to 'second-left' and 'second-right' is enough because it adquires the context set by AppRoutingModule.

Listing 7. File first-routing.module.ts

```
const routes: Routes = [
  {
    path: '',
    component: FirstComponent
  },
  {
    path: 'second-left',
    component: ContentLeft
  },
  {
    path: 'second-right',
    component: ContentRight
  }
];
```

If we go to 'first' then FirstModule is situated in '/first' but also its children ContentLeft and ContentRight, so it is not necessary to write in their path 'first/second-left' and 'first/second-right', because that will situate the components on 'first/first/second-left' and 'first/first/second-right'.

![Katacoda Logo](./assets/first-lvl-wrong-path.png)
Figure 6. First level lazy wrong path.
When we compile an app with lazy loaded modules, files containing them will be generated
