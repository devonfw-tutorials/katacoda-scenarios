#!/bin/sh

echo "Start cloneSettings"
cd /root/
mkdir devonfw-settings
cd devonfw-settings

git clone https://github.com/devonfw/ide-settings.git settings

TOOLS="DEVON_IDE_TOOLS=(mvn java)"
echo $TOOLS > settings/devon.properties
