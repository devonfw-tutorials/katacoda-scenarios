## CobiGen generation

Now you can use the CobiGen generator to create your angular components.

Navigate to the directory which contains the java and angular project.
`cd /root/devonfw/workspaces/main/cobigen-angular/`{{execute T3}}

Cobigen cli will generate the files used by the angular application. Use the EmployeeEto.java file as input parameter.
`devon cobigen generate -o devon4ng-application-template/src/ devon4j-templateserver/api/src/main/java/com/devonfw/example/templateserver/employeemanagement/logic/api/to/EmployeeEto.java`{{execute T3}}

Cobigen cli will ask you which files should be generated. You can type the numbers seperated by comma.
`13,14,15,16`{{execute}}

The generator will create some new files. Open the IDE and navigate into the angular project. Inside the 'src/app' folder the new folder 'employee' is created. It contains new components to display the employee data.

CobiGen will also change the 'environment.ts' file. You need to modify the paths again.
<pre class="file" data-target="replace" data-filename="devonfw/workspaces/main/cobigen-angular/devon4ng-application-template/src/environments/environment.ts">
export const environment = {
    production: false,
    restPathRoot: 'https://[[HOST_SUBDOMAIN]]-8081-[[KATACODA_HOST]].environments.katacoda.com/',
    restServiceRoot: 'https://[[HOST_SUBDOMAIN]]-8081-[[KATACODA_HOST]].environments.katacoda.com/services/rest/',
    security: 'jwt'
};
</pre>