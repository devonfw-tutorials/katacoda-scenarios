First you need to clone the Jump The Queue repository.
Run `ggit clone https://github.com/devonfw/jump-the-queue.git`{{execute}}

Now you need to switch to the folder you just created.
`cd jump-the-queue/java/jtqj`{{execute}}

After that, you can install Maven.
Run `mvn install`{{execute}}

In the next step you need to swith to the server folder.
`cd server`{{execute}}

Now you can start the Maven server.
`mvn spring-boot:run`{{execute}}

This will take some time and you can't use this terminal any more because it runs the server.
