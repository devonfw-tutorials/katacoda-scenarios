# Background and foreground

Until now, we just have defined primary, accent and warn palettes but what about foreground and background? Angular material has two functions to change both:

- `mat-light-theme`: Receives as arguments primary, accent and warn palettes and return a theme whose foreground is basically black (texts, icons, …​), the background is white and the other palettes are the received ones.

![Katacoda Logo](./assets/custom-dark.png)
Figure 9. Custom dark theme.

For this example we are going to use mat-dark-theme and save its result in $custom-dark-theme.

Listing 3. File styles-custom-dark.scss updated with mat-dark-theme.

```
...

$custom-dark-theme: mat-dark-theme(
  $custom-dark-theme-primary,
  $custom-dark-theme-accent,
  $custom-dark-theme-warn
);
```

To apply the saved theme, we have to go to `styles.scss` and import our `styles-custom-dark.scss` and include a function called `angular-material-theme` using the theme variable as argument.

Listing 4. File styles.scss.

```
...
@import 'styles-custom-dark.scss';
@include angular-material-theme($custom-dark-theme);
```

If we have multiple themes it is necessary to add the include statement inside a css class and use it in `src/index.html → app-root component`.

Listing 5. File styles.scss updated with custom-dark-theme class.

```
...
@import 'styles-custom-dark.scss';

.custom-dark-theme {
  @include angular-material-theme($custom-dark-theme);
}
```

Listing 6. File src/index.html.

```
...
<app-root class="custom-dark-theme"></app-root>
...
```

This will apply `$custom-dark-theme` theme for the entire application.
