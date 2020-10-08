Go back to the terminal window.

## Build the java project

`devon mvn package -Dmaven.test.skip=true`{{execute}}

`devon mvn clean install -Dmaven.test.skip=true`{{execute}}

We do not need to execute the test cases, so we can skip them by using the option '-Dmaven.test.skip=true'.

It is not necessary to write 'devon' before the commands when you are inside the devonfw IDE. In this case the correct maven installation, which was installed with the devonfw IDE, would be used without the 'devon', as well.

