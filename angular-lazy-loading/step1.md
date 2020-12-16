# Implementation

Install angular CLI executing `npm install @angular/cli -g`{{ execute }}.

Run `ng new level-app --routing`{{execute}}, to generate a new project called level-app including an app-routing.module.ts file (--routing flag).

In the file app.component.html delete all the content except the router-outlet tag.

Listing 1. File app.component.html
`<router-outlet></router-outlet>`

The next steps consists on creating features modules.

- run `ng generate module first --routing`{{execute}} to generate a module named first.

- run `ng generate module first/second-left --routing`{{execute}} to generate a module named second-left under first.

- run `ng generate module first/second-right --routing`{{execute}} to generate a module second-right under first.

- run `ng generate component first/first`{{execute}} to generate a component named first inside the module first.

- run `ng generate component first/second-left/content`{{execute}} to generate a component content inside the module second-left.

- run `ng generate component first/second-right/content`{{execute}} to generate a component content inside the module second-right.
