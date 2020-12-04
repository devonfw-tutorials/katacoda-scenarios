Using the current configuration, we have a project that loads all the modules in a eager way. Run ng serve to see what happens.

First, during the compilation we can see that just a main file is built.

![Katacoda Logo](./assets/compile-eager.png)

Figure 2. Compile eager.

If we go to http://localhost:4200/first and open developer options (F12 on Chrome), it is found that a document named "first" is loaded.

![Katacoda Logo](./assets/first-lvl-eager.png)

Figure 3. First level eager.

If we click on `[Go to right module]` a second level module opens, but there is no 'second-right' document.

![Katacoda Logo](./assets/second-lvl-right-eager.png)

Figure 4. Second level right eager.

But, typing the url directly will load 'second-right' but no 'first', even if we click on `[Go back]`

![Katacoda Logo](./assets/second-lvl-right-eager-d.png)

Figure 5. Second level right eager direct url.
