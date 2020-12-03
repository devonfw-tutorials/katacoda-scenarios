Let us finally create the sidenav. To implement the sidenav we need to use 3 Angular Material components: `mat-sidenav-container`, `mat-sidenav` and `mat-sidenav-content`. The `mat-sidenav-container`, as the name suggests, acts as a container for the sidenav and the associated content. So it is the parent element, and `mat-sidenav` and `mat-sidenav-content` are the children sibling elements. `mat-sidenav` represents the sidenav. We can put any content we want, though it is usually used to conatain a list of navigational links. The `mat-sidenav-content` element is for conataining our main page content. Since we need the sidenav application-wide, we will put it in the `app.component.html`.

Listing 15. app.component.html:

```
...
</mat-toolbar>

<mat-sidenav-container>
  <mat-sidenav mode="over" [disableClose]="false" #sidenav>
    Sidenav
  </mat-sidenav>
  <mat-sidenav-content>
    <router-outlet></router-outlet>
  </mat-sidenav-content>
</mat-sidenav-container>
```

The `mat-sidenav` has a `mode` property, which accepts one of the 3 values: `over`, `push` and `side`. It decides the behavior of the sidenav. `mat-sidenav` also has a `disableClose` property which accents a boolean value. It toggles the behavior where we click on the backdrop or press the Esc key to close the sidenav. There are other properties which we can use to customize the appearance, behavior and position of the sidenav. You can find the properties documented online at https://material.angular.io/components/sidenav/api We moved the `router-outlet` directive inside the `mat-sidenav-content` where it will render the routed component. But if you check the running application in the browser, we don’t see the sidenav yet. That is because it is closed. We want to have the sidenav opened/closed at the click of the menu icon button on the left side of the header we implemented earlier. Notice we have set a local reference `#sidenav` on the `mat-sidenav` element. We can access this element and call its `toggle()` function to toggle open or close the sidenav.

Listing 16. app.component.html:

```
...
  <button mat-icon-button aria-label="menu" class="menu" (click)="sidenav.toggle()">
    <mat-icon>menu</mat-icon>
  </button>
...
```

![Katacoda Logo](./assets/8-sidenav-started.png)
Figure 8. Sidenav is implemented

We can now open the sidenav by clicking the menu icon button. But it does not look right. The sidenav is only as wide as its content. Also the page does not stretch the entire viewport due to lack of content. Let’s add the following styles to make the page fill the viewport:

Listing 17. app.component.scss:

```
...
mat-sidenav-container {
    position: absolute;
    top: 64px;
    left: 0;
    right: 0;
    bottom: 0;
}
```

The sidenav’s width will be corrected when we add the navigational links to it. That is the only thing remaining to be done. Lets implement it now:

Listing 18. app.component.html:

```
...
  <mat-sidenav [disableClose]="false" mode="over" #sidenav>
	<mat-nav-list>
      <a
        id="home"
        mat-list-item
        [routerLink]="['./']"
        (click)="sidenav.close()"
        routerLinkActive="active"
        [routerLinkActiveOptions]="{exact: true}"
      >
        <mat-icon matListAvatar>home</mat-icon>
        <h3 matLine>Home</h3>
        <p matLine>sample home page</p>
      </a>
      <a
        id="sampleData"
        mat-list-item
        [routerLink]="['./data']"
        (click)="sidenav.close()"
        routerLinkActive="active"
      >
        <mat-icon matListAvatar>grid_on</mat-icon>
        <h3 matLine>Data</h3>
        <p matLine>sample data page</p>
      </a>
    </mat-nav-list>
  </mat-sidenav>
...
```

We use the `mat-nav-list` element to set a list of navigational links. We use the `a` tags with `mat-list-item` directive. We implement a `click` listener on each link to close the sidenav when it is clicked. The `routerLink` directive is used to provide the URLs to navigate to. The `routerLinkActive` directive is used to provide the class name which will be added to the link when it’s URL is visited. Here we name the class`active`. To stye it, let's modify the `app.component.scss` file:

Listing 19. app.component.scss:

```
...
mat-sidenav-container {
...
	a.active {
        background: #8e8d8d;
        color: #fff;

        p {
            color: #4a4a4a;
        }
    }
}
```

Now we have a working application with a basic layout: a header with some menu and a sidenav with some navigational links.

![Katacoda Logo](./assets/9-finished.png)
Figure 9. Finished application
