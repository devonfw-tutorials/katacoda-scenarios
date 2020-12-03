# Development

Now that we have all the Angular Material related dependencies set up in our project, we can start coding. Let’s begin by adding a suitable `margin` and `font` to the `body` element of our single page application. We will add it in the `src/styles.scss` file to apply it globally:

Listing 5. In src/styles.scss:

```
body {
  margin: 0;
  font-family: "Segoe UI", Roboto, sans-serif;
}
```

At this point, if we run our application with `ng serve`, this is how it will look like:

![Katacoda Logo](./assets/3-material-added.png)
Figure 3. Application with Angular Material set up

We will clear the `app.component.html` file and setup a header with a menu button and some navigational links. We will use `mat-toolbar`, `mat-button`, `mat-menu`, `mat-icon` and `mat-icon-button` for this:

Listing 6. app.component.html:

```
<mat-toolbar color="primary">
  <button mat-icon-button aria-label="menu">
    <mat-icon>menu</mat-icon>
  </button>
  <button mat-button [matMenuTriggerFor]="submenu">Menu 1</button>
  <button mat-button>Menu 2</button>
  <button mat-button>Menu 3</button>

  <mat-menu #submenu="matMenu">
    <button mat-menu-item>Sub-menu 1</button>
    <button mat-menu-item [matMenuTriggerFor]="submenu2">Sub-menu 2</button>
  </mat-menu>

  <mat-menu #submenu2="matMenu">
    <button mat-menu-item>Menu Item 1</button>
    <button mat-menu-item>Menu Item 2</button>
    <button mat-menu-item>Menu Item 3</button>
  </mat-menu>

</mat-toolbar>
```

The color attribute on the `mat-toolbar` element will give it the primary (indigo) color as defined by our theme. The color attribute works with most Angular Material components; the possible values are 'primary', 'accent' and 'warn'. The mat-toolbar is a suitable component to represent a header. It serves as a placeholder for elements we want in our header. Inside the mat-toolbar, we start with a button having mat-icon-button attribute, which itself contains a mat-icon element having the value `menu`. This will serve as a menu button which we can use to toggle the sidenav. We follow it with some sample buttons having the mat-button attribute. Notice the first button has a property matMenuTriggerFor binded to a local reference `submenu`. As the property name suggests, the click of this button will display the `mat-menu` element with the specified local reference as a drop-down menu. The rest of the code is self explanatory.

![Katacoda Logo](./assets/4-header.png)
Figure 4. This is how our application looks with the first menu button (Menu 1) clicked.

We want to keep the sidenav toggling menu button on the left and move the rest to the right to make it look better. To do this we add a class to the menu icon button:

Listing 7. app.component.html:

```
...
  <button mat-icon-button aria-label="menu" class="menu">
    <mat-icon>menu</mat-icon>
  </button>
...
```

And in the `app.component.scss` file, we add the following style:

Listing 8. app.component.scss:

```
.menu {
    margin-right: auto;
}
```

The mat-toolbar element already has it’s display property set to `flex`. Setting the menu icon button’s `margin-right` property to `auto` keeps itself on the left and pushes the other elements to the right.

![Katacoda Logo](./assets/5-header-layout-final.png)
Figure 5. Final look of the header.
