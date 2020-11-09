#!/bin/sh

while [ ! -d /devonfw/settings/git/ ]
do
	sleep 2s

mv devonfw/settings/git/ devonfw/settings/.git/