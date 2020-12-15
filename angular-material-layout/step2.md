# Adding Angular Material library to the project

Next we will add Angular Material to our application. In the integrated terminal, press `Ctrl + C` to terminate the running application and run the following command:

- `npm install --save @angular/material @angular/cdk @angular/animations`{{execute}}

Once the dependencies are installed, we need to import the `BrowserAnimationsModule` in our AppModule for animations support.

Listing 1. Importing BrowserAnimationsModule in AppModule

```
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  ...
  imports: [BrowserAnimationsModule],
  ...
})
export class AppModule { }
```

Angular Material provides a host of components for designing our application. All the components are well structured into NgModules. For each component from the Angular Material library that we want to use, we have to import the respective NgModule.

Listing 2. We will be using the following components in our application:

```
import { MatIconModule, MatButtonModule, MatMenuModule, MatListModule, MatToolbarModule, MatSidenavModule } from '@angular/material';

@NgModule({
  ...
  imports: [
	...
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatListModule,
    MatToolbarModule,
    MatSidenavModule,
	...
	],
  ...
})
export class AppModule { }
```

A better approach is to import and then export all the required components in a shared module. But for the sake of simplicity, we are importing all the required components in the AppModule itself.

Next, we include a theme in our application. Angular Material comes with four inbuilt themes: indigo-pink, deeppurple-amber, pink-bluegrey and purple-green. It is also possible to create our own custom theme, but that is beyond the scope of this guide. Including a theme is required to apply all of the core and theme styles to your application. We will include the indigo-pink theme in our application by importing the `indigo-pink.css` file in our `src/styles.scss`:

Listing 3. In src/styles.scss:
`@import "~@angular/material/prebuilt-themes/indigo-pink.css";`

Some Angular Material components depend on HammerJs for gestures. So it is a good idea to install HammerJs as a dependency in our application. To do so, run the following command in the terminal:

- `npm install --save hammerjs`{{execute}}

Then import it in the `src/main.ts` file

- `import 'hammerjs';`

To use Material Design Icons(https://material.io/resources/icons/?style=baseline) along with the `mat-icon` component, we will load the Material Icons library in our `src/index.html` file

Listing 4. In src/index.html:
`<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">`
