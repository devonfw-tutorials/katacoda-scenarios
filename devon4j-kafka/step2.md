## Set up the java project

Inside the devonfw directory navigate to the folder 'workspaces/main/devon4j-kafka/'.
`cd workspaces/main/devon4j-kafka/`{{execute}}

This folder contains a zipped java project. Unzip the project.
`unzip KafkaSampleApplication.zip`{{execute}}

This java project contains a simple application which can create and delete employees. You can find the source code in the GitHub repository https://github.com/devonfw-sample/devon4j-kafka-employeeapp.

To use devon4j-kafka you have to add required starter dependencies to the pom.xml file of the core module.

Open the IDE and wait until it is completely loaded. Then open the pom.xml file. You can simply do this by clicking on the following text.
`devonfw/workspaces/main/devon4j-kafka/core/pom.xml`{{open}}

Go to line 199, replace the `#TODO-insert` text with the following snippet and save the file.
```
<dependency>
	<groupId>com.devonfw.java.starters</groupId>
	<artifactId>devon4j-starter-kafka-receiver</artifactId>
	<version>2020.08.001</version>
</dependency>
```{{copy}}

The starter-kafka-receiver dependency includes the starter-kafka-sender dependency which is required for producing messages.


## Build the project

Now you can build the project. This will install the needed dependencies.

`devon mvn clean install -Dmaven.test.skip=true`{{execute}}

It is not necessary to write 'devon' before the command when you are inside the devonfw IDE. In this case the correct maven installation, which was installed with the devonfw IDE, would be used without the 'devon', as well.
