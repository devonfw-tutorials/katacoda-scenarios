Okay let's start!

First you need to clone the Jump The Queue repository. Run git clone https://github.com/devonfw/my-thai-star.git{{execute}}

Now you need to switch to the folder you just created. cd my-thai-star/java/mtsj{{execute}}

After that, you have to install Maven. Run mvn install -Dmaven.test.skip=true{{execute}}

This will take some time. Wait until you see the message "BUILD SUCCESS".

In the next step switch to the server folder. cd server{{execute}}

Now you can start the server. mvn spring-boot:run{{execute}}

Because this terminal runs the server you can't use ist anymore.

cd my-thai-star/net/netcore/OASP4Net.Application.WebApi{{execute}}

wget https://packages.microsoft.com/config/ubuntu/20.04/packages-microsoft-prod.deb -O packages-microsoft-prod.deb{{execute}}

sudo dpkg -i packages-microsoft-prod.deb{{execute}}

sudo apt-get update; \ sudo apt-get install -y apt-transport-https && \ sudo apt-get update && \ sudo apt-get install -y dotnet-sdk-2.1{{execute}}

sudo apt-get update; \ sudo apt-get install -y apt-transport-https && \ sudo apt-get update && \ sudo apt-get install -y aspnetcore-runtime-2.1{{execute}}

dotnet build{{execute}}

dotnet run{{execute}}