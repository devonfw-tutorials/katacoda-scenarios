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

In the next step you need to change the Base URL for the REST Services. Run
`vim src/environments/environment.ts`{{execute T2}}

Switch to the insert mode by typing `i`{{execute no-newline}}

Now change the baseUrlRestServices to `https://[[HOST_SUBDOMAIN]]-8081-[[KATACODA_HOST]].environments.katacoda.com/jumpthequeue/services/rest`{{copy}}

Once finished, press ESC `^ESC`{{execute ctrl-seq}} to switch back to normal mode.

To safe and quit, press `:wq`{{execute}} 

Last but not least you need to build and start the app.
`ng serve --host 0.0.0.0 --disable-host-check`{{execute T2}}

 
Wait until you see the message "Compiled successfully".
 
Now you can open the following link to use Jump The Queue.
https://[[HOST_SUBDOMAIN]]-4200-[[KATACODA_HOST]].environments.katacoda.com/
