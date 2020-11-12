#!/bin/sh

STATUS_FILE="/root/setup/status.txt"
while [ ! -f $STATUS_FILE ]
do 
	sleep 1
done

echo "Start setup script..."
CURRENT_STEP=$(head $STATUS_FILE -n1)
while [ "$CURRENT_STEP" != "Finished" ]; do
	echo "Executing step $CURRENT_STEP"
    sleep 1
	CURRENT_STEP=$(head $STATUS_FILE -n1)
done
echo "Setup script finished!"
