## Setting up the java backend

CobiGen uses the backend classes for generating your code used in the angular application.

Inside the devonfw directory navigate to the folder 'workspaces/main/cobigen-angular/'.
`cd workspaces/main/cobigen-angular/`{{execute}}

This folder contains a zipped java project. Unzip the project.
`unzip cobigen-angular.zip`{{execute}}

This java project contains an employee class with some attributes. This class is used to generate the frontend files later in this tutorial.

Naviagte into the java project and build it.
`cd devon4j-templateserver/`{{execute}}

`devon mvn package -Dmaven.test.skip=true`{{execute}}

`devon mvn clean install -Dmaven.test.skip=true`{{execute}}