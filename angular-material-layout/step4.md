Next, we will create a sidenav. But before that lets create a couple of components to navgate between, the links of which we will add to the sidenav. We will use the `ng generate component` (or `ng g c` command for short) to create Home and Data components. We nest them in the `pages` sub-directory since they represent our pages.

- ng g c pages/home {{ execute}}

- ng g c pages/data' {{ execute}}

Let us set up the routing such that when we visit `http://localhost:4200/` root url we see the `HomeComponent` and when we visit `http://localhost:4200/data` url we see the `DataComponent`. We had opted for routing while creating the application, so we have the routing module `app-routing.module.ts` setup for us. In this file, we have the empty `routes` array where we set up our routes.

Listing 9. app-routing.module.ts:

```
...
import { HomeComponent } from './pages/home/home.component';
import { DataComponent } from './pages/data/data.component';

	const routes: Routes = [
	  { path: '', component: HomeComponent },
	  { path: 'data', component: DataComponent }
	];
...
```

We need to provide a hook where the components will be loaded when their respective URLs are loaded. We do that by using the `router-outlet` directive in the `app.component.html`.

Listing 10. app.component.html:

```
...
	</mat-toolbar>
	<router-outlet></router-outlet>
```

Now when we visit the defined URLs we see the appropriate components rendered on screen.

Lets change the contents of the components to have something better.

Listing 11. home.component.html:
`<h2>Home Page</h2>`

Listing 12. home.component.scss:

```
h2 {
    text-align: center;
    margin-top: 50px;
}
```

Listing 13. data.component.html:
`<h2>Data Page</h2>`

Listing 14. data.component.scss:

```
h2 {
    text-align: center;
    margin-top: 50px;
}
```

The pages look somewhat better now:

![Katacoda Logo](./assets/6-home-page.png)
Figure 6. Home page

![Katacoda Logo](./assets/7-data-page.png)
Figure 7. Data page
