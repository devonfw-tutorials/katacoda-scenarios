#!/bin/sh

echo "Waiting to complete"
while [ ! -d "/root/devonfw/settings/git/" ]
  do sleep 2s
done

echo "Done"
sleep 2s
mv /root/devonfw/settings/git/ /root/devonfw/settings/.git/