# Routes

In `first-routing.module.ts` add routes that direct to the content of SecondRightModule and SecondLeftModule. The content of both modules have the same name so, in order to avoid conflicts the name of the components are going to be changed using as ( original-name as new-name).

Listing 4. File first-routing.module.ts

```
...
import { ContentComponent as ContentLeft} from './second-left/content/content.component';
import { ContentComponent as ContentRight} from './second-right/content/content.component';
import { FirstComponent } from './first/first.component';

const routes: Routes = [
  {
    path: '',
    component: FirstComponent
  },
  {
    path: 'first/second-left',
    component: ContentLeft
  },
  {
    path: 'first/second-right',
    component: ContentRight
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirstRoutingModule { }
```

In first.module.ts import SecondLeftModule and SecondRightModule.

Listing 5. File first.module.ts

```
...
import { SecondLeftModule } from './second-left/second-left.module';
import { SecondRightModule } from './second-right/second-right.module';

@NgModule({
  ...
  imports: [
    ...
    SecondLeftModule,
    SecondRightModule,
  ]
})
export class FirstModule { }
```
