#!/bin/sh

mkdir /root/devonfw-settings/
cd /root/devonfw-settings/

git clone https://github.com/devonfw/ide-settings.git settings

TOOLS="DEVON_IDE_TOOLS=(java mvn)"
echo $TOOLS > settings/devon.properties

mv /root/devonfw-settings/settings/ /root/devonfw-settings/settings.git

GIT=`which git`
${GIT} add --all . > /root/setup/echo.txt
${GIT} commit -m "$message" >> /root/setup/echo.txt
git config user.name "-"
git config user.email "-"
git commit -m "."