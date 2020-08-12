First you need to clone the Jump The Queue repository.
Run `git clone https://github.com/devonfw/jump-the-queue.git`{{execute HOST1}}

Now you need to switch to the folder you just created.
`cd jump-the-queue/java/jtqj`{{execute HOST1}}

After that, you can install Maven.
Run `mvn install`{{execute HOST1}}

This will take some time. Wait until you see the message "BUILD SUCCESS".

In the next step you need to switch to the server folder.
`cd server`{{execute HOST1}}

Now you can start the Maven server.
`mvn spring-boot:run`{{execute HOST1}}

You can't use this terminal any more because it runs the server.
