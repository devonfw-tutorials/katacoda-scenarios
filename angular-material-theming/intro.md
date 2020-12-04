Angular Material library offers UI components for developers, those components follows Google Material desing baselines but characteristics like colors can be modified in order to adapt them to the needs of the client: corporative colors, corporative identity, dark themes, …​

# Theming basics

In Angular Material, a theme is created mixing multiple colors. Colors and its light and dark variants conform a palette. In general, a theme consists of the following palettes:

- primary: Most used across screens and components.

- accent: Floating action button and interactive elements.

- warn: Error state.

- foreground: Text and icons.

- background: Element background

![Katacoda Logo](./assets/palette.png)
Figure 1. Palettes and variants.

In angular material, a palette is represented as a scss map.

![Katacoda Logo](./assets/scss-map.png)
Figure 2. Scss map and palettes.

`Some components can be forced to use primary, accent or warn palettes using the attribute color, for example: <mat-toolbar color="primary">.`

# Prebuilt themes

Available prebuilt themes:

- deeppurple-amber.css

![Katacoda Logo](./assets/deeppurple-amber.png)
Figure 3. deeppurple-amber theme.

- indigo-pink.css

![Katacoda Logo](./assets/indigo-pink.png)
Figure 4. indigo-pink theme.

- purple-green.css
  ![Katacoda Logo](./assets/indigo-pink.png)
  Figure 6. purple-green theme.

The prebuilt themes can be added using @import:
`@import '@angular/material/prebuilt-themes/deeppurple-amber.css';`
