#!/bin/sh

echo "Start setup script..."
STATUS_FILE="/root/setup/status.txt"
while [ ! -f $STATUS_FILE ]
do 
	sleep 1
done

CURRENT_STEP=$(head $STATUS_FILE -n1)
OLD_STEP=""
while [ "$CURRENT_STEP" != "Finished" ]; do
	if ["$OLD_STEP" != "$CURRENT_STEP"]
	then
		echo "Executing step:  $CURRENT_STEP"
		OLD_STEP="$CURRENT_STEP"
	fi
    sleep 1
	CURRENT_STEP=$(head $STATUS_FILE -n1)
done
echo "Setup script finished!"
