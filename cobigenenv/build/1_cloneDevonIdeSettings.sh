#!/bin/sh
cd /root/

git clone https://github.com/devonfw/ide-settings.git settings

TOOLS="DEVON_IDE_TOOLS=(java mvn)"
echo $TOOLS > settings/devon.properties