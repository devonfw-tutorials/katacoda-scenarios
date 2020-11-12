#!/bin/sh

STATUS_FILE="/root/setup/status.txt"
while [ ! -f $STATUS_FILE ]
do 
	sleep 1
done

CURRENT_STEP=$(head $SETUP_FILE -n1)
while [ "$CURRENT_STEP" != "Finished" ]; do
    sleep 1
	CURRENT_STEP=$(head $SETUP_FILE -n1)
done
