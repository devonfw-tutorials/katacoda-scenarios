#!/bin/sh

while [ ! -d /devonfw/settings/git/ ]
do
	sleep 2s
done

mv devonfw/settings/git/ devonfw/settings/.git/