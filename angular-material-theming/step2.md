# Basic custom theme

To create a new custom theme, the .scss file containing it has to have imported the angular \_theming.scss file (angular/material/theming) file and mat-core included. \_theming.scss includes multiple color palettes and some functions that we are going to see below. The file for this basic theme is going to be named `styles-custom-dark.scss`.

First, declare new variables for primary, accent and warn palettes. Those variables are going to store the result of the function `mat-palette`.

`mat-palette` accepts four arguments: base color palette, main, lighter and darker variants (Explained in next steps) and returns a new palette including some additional map values: default, lighter and darker (Explained in next steps). Only the first argument is mandatory.

Listing 1. File styles-custom-dark.scss.

```
$custom-dark-theme-primary: mat-palette($mat-pink);
$custom-dark-theme-accent: mat-palette($mat-blue);
$custom-dark-theme-warn: mat-palette($mat-red);
);
```

In this example we are using colors available in \_theming.scss: mat-pink, mat-blue, mat-red. If you want to use a custom color you need to define a new map, for instance:

Listing 2. File styles-custom-dark.scss custom pink.

```
$my-pink: (
    50 : #fcf3f3,
    100 : #f9e0e0,
    200 : #f5cccc,
    300 : #f0b8b8,
    500 : #ea9999,
    900 : #db6b6b,
    A100 : #ffffff,
    A200 : #ffffff,
    A400 : #ffeaea,
    A700 : #ffd0d0,
    contrast: (
        50 : #000000,
        100 : #000000,
        200 : #000000,
        300 : #000000,
        900 : #000000,
        A100 : #000000,
        A200 : #000000,
        A400 : #000000,
        A700 : #000000,
    )
);

$custom-dark-theme-primary: mat-palette($my-pink);
...
```

`Some pages allows to create these palettes easily, for instance: http://mcg.mbitson.com`
