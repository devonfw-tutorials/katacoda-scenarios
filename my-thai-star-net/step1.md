Okay let's start!

First you need to clone the My Thai Star repository. Run git clone `https://github.com/devonfw/my-thai-star.git`{{execute}}

First you need to install dotnet 2.1.

`wget https://packages.microsoft.com/config/ubuntu/20.04/packages-microsoft-prod.deb -O packages-microsoft-prod.deb`{{execute}}

`sudo dpkg -i packages-microsoft-prod.deb`{{execute}}

`sudo apt-get update; \ sudo apt-get install -y apt-transport-https && \ sudo apt-get update && \ sudo apt-get install -y dotnet-sdk-2.1`{{execute}}

`sudo apt-get update; \ sudo apt-get install -y apt-transport-https && \ sudo apt-get update && \ sudo apt-get install -y aspnetcore-runtime-2.1`{{execute}}
