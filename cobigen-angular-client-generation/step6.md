## Modify the navigation bar

To display a new section for the employee data inside the navigation bar, we have to modify the 'nav-bar.component.html' file. Open this file in the IDE.

`devonfw/workspaces/main/cobigen-angular/devon4ng-application-template/src/app/layout/nav-bar/nav-bar.component.html`{{open}}

To add a new section, create a new anchor tag below the tag for the home section (after line 15). You can copy the the following code snippet to this position.

```
<a id="employee" mat-list-item [routerLink]="['./employee']" (click)="close()"> 
 <mat-icon matListAvatar>
 grid_on
 </mat-icon> <h3 matLine>{{ 'employeemanagement.Employee.title' | transloco }}</h3> <p matLine class="desc">{{ 'description' | transloco }}</p> </a>
```

The routerLink-Attribute defines the url the user navigates to. In this case it is 'home/employee'.

CobiGen also has created some translations (or placeholder for translations) for Transloco. Transloco allows you to define translations in different languages and switch between them in runtime. This is used in the last of these lines.

You can find the configurations for the transloco service inside 'src/assets/i18n/' directory. If you want to modify the text for the navigation bar you can do this in the following file by editing the 'title'-attribute of the 'Employee'-section inside the 'employeemanagement'-section. Otherwise the default text CobiGen has created is used.
`devonfw/workspaces/main/cobigen-angular/devon4ng-application-template/src/assets/i18n/en.json`{{open}}



Take a look on the application again. After logging in you will see a new section in the navigation bar on the left. By clicking on it you will be redirected to the login page, because the application doesn't know the new route yet. We will do this in the next section.

Normally the server will recognize changes automatically and rebuild the application again. If the server has stopped start it again with the following commands.

`cd /root/devonfw/workspaces/main/cobigen-angular/devon4ng-application-template/`{{execute T4}}
`ng serve --host 0.0.0.0 --disable-host-check`{{execute T4}}

https://[[HOST_SUBDOMAIN]]-4200-[[KATACODA_HOST]].environments.katacoda.com/
