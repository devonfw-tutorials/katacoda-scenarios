# Lazy compilation

When we compile an app with lazy loaded modules, files containing them will be generated

![Katacoda Logo](./assets/compile-first-lazy.png)
Figure 7. First level lazy compilation.

And if we go to developer tools → network, we can find those modules loaded (if they are needed).

![Katacoda Logo](./assets/first-lvl-lazy.png)
Figure 8. First level lazy.

To load the component ContentComponent of SecondLeftModule lazily, we have to load SecondLeftModule as a children of FirstModule:

- Change component to loadChildren and reference SecondLeftModule.

Listing 8. File first-routing.module.ts.

```
const routes: Routes = [
  {
    path: '',
    component: FirstComponent
  },
  {
    path: 'second-left',
    loadChildren: () => import('./second-left/second-left.module').then(m => m.SecondLeftModule),
  },
  {
    path: 'second-right',
    component: ContentRight
  }
];
```

- Remove SecondLeftModule at first.component.ts

- Route the components inside SecondLeftModule. Without this step nothing would be displayed.

Listing 9. File second-left-routing.module.ts.

```
...
import { ContentComponent } from './content/content.component';

const routes: Routes = [
  {
    path: '',
    component: ContentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecondLeftRoutingModule { }
```

- run ng serve to generate files containing the lazy modules.

![Katacoda Logo](./assets/second-lvl-lazy.png)
Figure 9. Second level lazy loading compilation.

Clicking on [Go to left module] triggers the load of SecondLeftModule.

![Katacoda Logo](./assets/second-lvl-left-lazy.png)
Figure 10. Second level lazy loading network.

# Conclusion

Lazy loading is a pattern useful when new features are added, these features are usually identified as modules which can be loaded only if needed as shown in this document, reducing the time spent loading an application.
