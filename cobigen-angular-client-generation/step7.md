## Display the employee data

Open the 'app-routing.module.ts file in the IDE.
`src/app/app-routing.module.ts`{{open}}

This file configures which modules should be loaded when the user navigates to a specific URL inside the application.

To display the employee data inside the newly created section of the application we have to change the children object of home like it is shown in the following code snippet.

```
    children: [{
            path: 'initial',
            loadChildren: () =>
                import('./home/initial-page/initial-page.module').then(
                    m => m.InitialPageModule,
                )
        },
        {
            path: 'employee',
            loadChildren: () =>
                import('./employee/employee.module').then(
                    m => m.EmployeeModule,
                )
        }
    ]
```

The path attribute defines the URL the user navigates to. And the loadChildren method defines which module should be loaded when the user navigates to the URL.

The EmployeeModule is defined in the file 'src/app/employee/employee.module.ts'. This file contains the three new components created by cobigen.
`src/app/employee/employee.module.ts`{{open}}

The 'employee-routing.module.ts' file defines that the EmployeeGridComponent should be loaded when the module is loaded.
`src/app/employee/employee-routing.module.ts`{{open}}

So the EmployeeGridComponent is the component you will see when you click on the new section of the navigation bar.
`src/app/employee/employee-grid/employee-grid.component.ts`{{open}}

Check the application again.
https://[[HOST_SUBDOMAIN]]-4200-[[KATACODA_HOST]].environments.katacoda.com/
