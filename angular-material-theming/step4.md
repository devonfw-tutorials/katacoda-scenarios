# Full custom theme

Sometimes it is needed to custom different elementsw from background and foreground, in those situations we have to create a new function similar to mat-light-theme and mat-dark-theme. Let’s focus con mat-light-theme:

Listing 7. Source code of mat-light-theme

```
@function mat-light-theme($primary, $accent, $warn: mat-palette($mat-red)) {
  @return (
    primary: $primary,
    accent: $accent,
    warn: $warn,
    is-dark: false,
    foreground: $mat-light-theme-foreground,
    background: $mat-light-theme-background,
  );
}
```

As we can se, mat-light-theme takes three arguments and returs a map including them as primary, accent and warn color; but there are three more keys in that map: is-dark, foreground and background.

- `is-dark`: Boolean true if it is a dark theme, false otherwise.

- `background`: Map that stores the color for multiple background elements.

- `foreground`: Map that stores the color for multiple foreground elements.

To show which elements can be colored lets create a new theme in a file styles-custom-cap.scss:

Listing 8. File styles-custom-cap.scss: Background and foreground variables.

```
@import '~@angular/material/theming';

// custom background and foreground palettes
$my-cap-theme-background: (
  status-bar: #0070ad,
  app-bar: map_get($mat-blue, 900),
  background: #12abdb,
  hover: rgba(white, 0.04),
  card: map_get($mat-red, 800),
  dialog: map_get($mat-grey, 800),
  disabled-button: $white-12-opacity,
  raised-button: map-get($mat-grey, 800),
  focused-button: $white-6-opacity,
  selected-button: map_get($mat-grey, 900),
  selected-disabled-button: map_get($mat-grey, 800),
  disabled-button-toggle: black,
  unselected-chip: map_get($mat-grey, 700),
  disabled-list-option: black,
);

$my-cap-theme-foreground: (
  base: yellow,
  divider: $white-12-opacity,
  dividers: $white-12-opacity,
  disabled: rgba(white, 0.3),
  disabled-button: rgba(white, 0.3),
  disabled-text: rgba(white, 0.3),
  hint-text: rgba(white, 0.3),
  secondary-text: rgba(white, 0.7),
  icon: white,
  icons: white,
  text: white,
  slider-min: white,
  slider-off: rgba(white, 0.3),
  slider-off-active: rgba(white, 0.3),
);
```

Function which uses the variables defined before to create a new theme:

Listing 9. File styles-custom-cap.scss: Creating a new theme function.

```
// instead of creating a theme with mat-light-theme or mat-dark-theme,
// we will create our own theme-creating function that lets us apply our own foreground and background palettes.
@function create-my-cap-theme($primary, $accent, $warn: mat-palette($mat-red)) {
  @return (
    primary: $primary,
    accent: $accent,
    warn: $warn,
    is-dark: false,
    foreground: $my-cap-theme-foreground,
    background: $my-cap-theme-background
  );
}
```

Calling the new function and storing its value in $custom-cap-theme.

Listing 10. File styles-custom-cap.scss: Storing the new theme.

```
// We use create-my-cap-theme instead of mat-light-theme or mat-dark-theme
$custom-cap-theme-primary: mat-palette($mat-green);
$custom-cap-theme-accent: mat-palette($mat-blue);
$custom-cap-theme-warn: mat-palette($mat-red);

$custom-cap-theme: create-my-cap-theme(
  $custom-cap-theme-primary,
  $custom-cap-theme-accent,
  $custom-cap-theme-warn
);
```

After defining our new theme, we can import it from styles.scss.

Listing 11. File styles.scss updated with custom-cap-theme class.

```
...
@import 'styles-custom-cap.scss';
.custom-cap-theme {
  @include angular-material-theme($custom-cap-theme);
}
```
