#!/bin/sh

while [ ! -d /devonfw/settings/git/ ]
do
  sleep 2s
done;

echo "done"
mv devonfw/settings/git/ devonfw/settings/.git/