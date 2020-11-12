#!/bin/sh

SETUP_FILE="/root/setup/setup.txt"
STATUS_FILE="/root/setup/status.txt"
while [ ! -f $SETUP_FILE ]
do 
	sleep 1
done

STEPS=$(head $SETUP_FILE -n1)
i=1
while [ "$i" -le $STEPS ]; do
	NAME_LINE=$((i * 3))
	SCRIPT_LINE=$((i * 3 + 1))
	NAME=$(head $SETUP_FILE -n$NAME_LINE | tail -n1)
	COMMAND=$(head $SETUP_FILE -n$SCRIPT_LINE | tail -n1)
	echo "$NAME" > $STATUS_FILE
	sh "/root/setup/$COMMAND"
	i=$(( i + 1 ))
done
echo "Finished" > $STATUS_FILE
