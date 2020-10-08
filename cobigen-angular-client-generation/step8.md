The EmployeeGridComponent uses the other components the cobigen generator has created.

When you click on the plus sign above the filter section you can add a new employee. For this case the EmployeeDialogComponent is used.
`src/app/employee/employee-dialog/employee-dialog.component.ts`{{open}}

The EmployeeAlertComponent is used when you delete am employee. The application will show a dialog whether you really want to delete the employee.
`src/app/employee/employee-alert/employee-alert.component.ts`{{open}}

The dialogues use the transloco service for displaying the text. To have a nice dialog you have to modify these texts first.
