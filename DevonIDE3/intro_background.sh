#!/bin/sh
echo "background"
SETUP_FILE="/root/setup/setup.txt"
while [ ! -f $SETUP_FILE ]
do 
	sleep 1
done

STEPS=$(head $SETUP_FILE -n1)
echo "Start setup script ($STEPS steps)"
i=0
while [ "$i" -le $STEPS ]; do
	NAME_LINE=$((i * 4 + 2))
	SCRIPT_LINE=$((i * 4 + 3))
	FIN_LINE=$((i * 4 + 4))
	NAME=$(head $SETUP_FILE -n$NAME_LINE | tail -n1)
	COMMAND=$(head $SETUP_FILE -n$SCRIPT_LINE | tail -n1)
	sh $COMMAND
	WRITE_FILE="sed -i ""$(($FIN_LINE))s/^/Finished/"" $SETUP_FILE"
	$WRITE_FILE
done
