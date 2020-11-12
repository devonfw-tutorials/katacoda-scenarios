#!/bin/sh

sleep 4
mkdir /root/devonfw-settings/
cd /root/devonfw-settings/

git clone https://github.com/devonfw/ide-settings.git settings

TOOLS="DEVON_IDE_TOOLS=(java mvn)"
echo $TOOLS > settings/devon.properties
