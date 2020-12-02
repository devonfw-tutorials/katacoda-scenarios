# Routes

To move between components we have to configure the routes used:

In `app-routing.module.ts` add a path 'first' to FirstComponent and a redirection from '' to 'first'.

Listing 2. File app-routing.module.ts.

```
...
import { FirstComponent } from './first/first/first.component';

const routes: Routes = [
  {
    path: 'first',
    component: FirstComponent
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

In `app.module.ts` import the module which includes FirstComponent.

Listing 3. File app.module.ts

```
....
import { FirstModule } from './first/first.module';

@NgModule({
  ...
  imports: [
    ....
    FirstModule
  ],
  ...
})
export class AppModule { }
```
