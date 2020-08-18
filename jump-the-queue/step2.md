Now you want to build the app in a second terminal. After all you can test the app.
To open a second terminal click on the plus sign. A drop-down list will open and you click on "Open New Terminal".  

The next step is to install globally Angular CLI. Don't worry a second terminal will open when you execute the command.
`npm install -g @angular/cli`{{execute T2}}

After a while you will be asked if you like to share anonymous usage data with the Angular Team at Google.
Either choose `y`{{execute T2}} or `n`{{execute T2}}
 
Now switch to the angular folder in jump-the-queue directory.
`cd jump-the-queue/angular`{{execute T2}}

 
After that install the dependencies in the local folder.
`npm install`{{execute T2}}

This will take some time.

In the next step build and start the app.
`ng serve --host 0.0.0.0 --disable-host-check`{{execute T2}}

 
Wait until you see the message "Compiled successfully".
 
Now you can open the following link to use Jump The Queue.
https://[[HOST_SUBDOMAIN]]-4200-[[KATACODA_HOST]].environments.katacoda.com/
