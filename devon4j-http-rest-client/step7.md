To create devon4j service Client. First, You need to create a sample devon4j project.



## Setting up your Java project

Please change the folder to &#39;..&#39;.

`cd ..`{{execute T1}}

Now you can use devonfw to setup a Java project for you by executing the following 'devon' command.

`devon java create com.sample.application.httprestclient`{{execute T1}}

Then, You need to add required dependency to your application.

Since in this tutorial you will build client on Synchronous call so, you have to add dependency for synchronous consuming REST services via Apache CXF (Java8+)

----
&lt;dependency&gt;
  &lt;groupId&gt;com.devonfw.java.starters&lt;/groupId&gt;
  &lt;artifactId&gt;devon4j-starter-cxf-client-rest&lt;/artifactId&gt;
&lt;/dependency&gt;

----
Note: With devon4j we have already added the required dependency in pom.xml
