# Custom themes

Somethimes prebuild themes do not meet the needs of a project, because color schemas are too specific or do not incorporate branding colors, in those situations custom themes can be built to offer a better solution to the client.

For this topic, we are going to use a basic layout project that can be found in devon4ng repository(https://github.com/devonfw/devon4ng/tree/master/samples/AngularMaterialBasicLayout).

So you can clone the repository and go into `AngularMaterialBasicLayout` folder:

- `git clone https://github.com/devonfw/devon4ng.git` {{ execute }}

- `cd devon4ng/samples/AngularMaterialTheming/` {{ execute }}

# Basics

Before starting writing custom themes, there are some necessary things that have to be mentioned:

- Add a default theme: The project mentioned before has just one global scss stylesheet styles.scss that includes indigo-pink.scss which will be the default theme.

- Add @import '~@angular/material/theming'; at the begining of the every stylesheet to be able to use angular material prebuilt color palettes and functions.

- Add @include mat-core(); once per project, so if you are writing multiple themes in multiple files you could import those files from a 'central' one (for example styles.scss). This includes all common styles that are used by multiple components.

![Katacoda Logo](./assets/theme-files-structure.png)
Figure 7. Theme files structure.
