This step shows code interesting inside the sample app. The complete content can be found in devon4ng samples(https://github.com/devonfw/devon4ng/tree/master/samples/AngularBasicPWA).

index.html

To use the Montserrat font add the following link inside the tag header.

`<link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">`

styles.scss

`body { ... font-family: 'Montserrat', sans-serif; }`

app.component.ts

This file is also used to reload the app if there are any changes.

- SwUpdate: This object comes inside the @angular/pwa package and it is used to detect changes and reload the page if needed.

```
  ...
  import { SwUpdate } from '@angular/service-worker';

  export class AppComponent implements OnInit {

  ...
    constructor(updates: SwUpdate, private data: DataService) {
      updates.available.subscribe((event) => {
        updates.activateUpdate().then(() => document.location.reload());
      });
    }
    ...
  }
```
