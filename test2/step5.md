Build the java project


Please change the folder to &#39;cobigenexample&#39;.

`cd cobigenexample`{{execute T1}}
 
Use the following devon command to build the java project.

`devon mvn clean install -Dmaven.test.skip=true`{{execute T1}}

The maven command 'clean' will clear the target directory beforehand. 

We do not need to execute the test cases, so we can skip them by using the option '-Dmaven.test.skip=true'.

