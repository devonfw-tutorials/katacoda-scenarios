## CobiGen generation

Now you can use the CobiGen generator to create your angular components.

Navigate to the directory which contains the java and angular project. The second terminal is also blocked, so you have to open a new window. Again this is done automatically by clicking on the following command.
`cd /root/devonfw/workspaces/main/cobigen-angular/`{{execute T3}}

Cobigen cli will generate the files used by the angular application. Use the EmployeeEto.java file as input parameter.
`devon cobigen generate -o devon4ng-application-template/src/ devon4j-templateserver/api/src/main/java/com/devonfw/example/templateserver/employeemanagement/logic/api/to/EmployeeEto.java`{{execute T3}}

Cobigen cli will ask you which files should be generated. You can type the numbers separated by comma.
`13,14,15,16`{{execute T3}}

The generator will create some new files. Open the IDE and navigate into the angular project. Inside the 'src/app' folder the new folder 'employee' is created. It contains new components to display the employee data.

CobiGen will also change the 'environment.ts' file. You need to modify the paths again. To do this switch again to the IDE and copy the following code.
<pre class="file" data-target="replace" data-filename="devonfw/workspaces/main/cobigen-angular/devon4ng-application-template/src/environments/environment.ts">
export const environment = {
    production: false,
    restPathRoot: 'https://[[HOST_SUBDOMAIN]]-8081-[[KATACODA_HOST]].environments.katacoda.com/',
    restServiceRoot: 'https://[[HOST_SUBDOMAIN]]-8081-[[KATACODA_HOST]].environments.katacoda.com/services/rest/',
    security: 'jwt'
};
</pre>