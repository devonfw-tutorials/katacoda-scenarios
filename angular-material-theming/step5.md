# Multiple themes and overlay-based components

Certain components (e.g. menu, select, dialog, etc.) that are inside of a global overlay container,require an additional step to be affected by the theme’s css class selector.

Listing 12. File app.module.ts

```
import {OverlayContainer} from '@angular/cdk/overlay';

@NgModule({
  // ...
})
export class AppModule {
  constructor(overlayContainer: OverlayContainer) {
    overlayContainer.getContainerElement().classList.add('custom-cap-theme');
  }
}
```

# Useful resources

- Angular Material’s oficial theming guide (https://material.angular.io/guide/theming)

- Material Desing: Color theme creation (https://material.io/design/color/#color-theme-creation)

- Palette generator (http://mcg.mbitson.com/#!?mcgpalette0=%233f51b5)

- SCSS tutorial (https://sass-lang.com/guide)
