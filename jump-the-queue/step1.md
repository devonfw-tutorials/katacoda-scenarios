Okay let's start!

First you need to clone the Jump The Queue repository.
Run `git clone https://github.com/devonfw/jump-the-queue.git`{{execute}}

Now you need to switch to the folder you just created.
`cd jump-the-queue/java/jtqj`{{execute}}

After that, you can install Maven.
Run `mvn install`{{execute}}

This will take some time. Wait until you see the message "BUILD SUCCESS".

In the next step you need to switch to the server folder.
`cd server`{{execute}}

Now you can start the server.
`mvn spring-boot:run`{{execute}}

You can't use this terminal anymore because it runs the server.
