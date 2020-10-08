You first have to install the devonfw ide. You will find more information about devonfw on https://devonfw.com/website/pages/welcome/welcome.html.

## devonfw setup

The devonfw installation directory already exists.

`cd devonfw`{{execute}}


To install devonfw execute the following commands. More information about setting up your ide on https://devonfw.com/website/pages/docs/devonfw-ide-introduction.asciidoc.html#setup.asciidoc
`wget -c https://bit.ly/2BCkFa9 -O - | tar -xz`{{execute}}

`bash setup`{{execute}}


The installation process may take a while.

The installation routine will ask you for a settings url. You can continue with the following url.
`https://github.com/devonfw/katacoda-scenarios-ide-settings.git`{{execute}}

Accept the license agreements.
`yes`{{execute}}

The devonfw ide is now installed. To use the new 'devon' commands inside this terminal use the following command (this is only necessary for the katacoda tutorials):

`. ~/.bashrc`{{execute}}
