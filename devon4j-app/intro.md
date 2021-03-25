devon4j is the Java stack of devonfw. It allows you to build business applications (backends) using Java technology in a highly efficient and standardized way based on established best-practices.

More information about devon4j on https://devonfw.com/website/pages/docs/devon4j.asciidoc.html

== Project structure
The structure of a devon4j application is divided into the following modules:

api: module containing the API of your application. The API contains the required artifacts to interact with your application via remote services. This can be REST service interfaces, transfer-objects with their interfaces and datatypes but also OpenAPI or gRPC contracts.

core: maven module containing the core of the application with service implementation, as well as entire logic layer and dataaccess layer.

batch: optional module for batch layer

server: module that bundles the entire app (core with optional batch) typically as a bootified WAR file.




The definition of each step of this tutorial can be found at https://github.com/devonfw-tutorials/tutorials/tree/main/devon4j-app

Feel free to fix any errors you find yourself. You just need to create a pull request to the tutorials repository with your changes.
You can find a description of what to look for when creating a pull request at the devonfw contribution guide: https://devonfw.com/website/pages/docs/CONTRIBUTING.asciidoc.html#contributing.asciidoc_pull-requests
