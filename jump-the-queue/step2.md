The next step ist to install globally Angular CLI:
`npm install -g @angular/cli`{{execute T2}}

After a while you will be asked if you liek to share anonymous usage data with the Angular Team at Google.
You can answer `y`{{execute T2}} or `n`{{execute T2}}
 
Now you need to switch to the angular folder in jump-the-queue folder.
`cd jump-the-queue/angular`{{execute T2}}

 
After that you need to install the dependencies in the local folder.
`npm install`{{execute T2}}

This will take some time.

In the next step you need to build the app.
`ng serve --host 0.0.0.0 --disable-host-check`{{execute T2}}

 
Wait until "Compiled successfully".
 
Now you can open the following link to use Jump The Queue.
https://[[HOST_SUBDOMAIN]]-4200-[[KATACODA_HOST]].environments.katacoda.com/
