#!/bin/sh
SETUP_FILE="/root/setup/setup.txt"
STATUS_FILE="/root/setup/status.txt"
BLA="/root/setup/test.txt"
#wait until setup.txt is loaded in katacoda
echo "Test" > $BLA
while [ ! -f $SETUP_FILE ]
do 
	sleep 1
done
echo "Bla" > "/root/setup/bla.txt"
#loop through setup.txt and execute the configured scripts
STEPS=$(head $SETUP_FILE -n1)
i=1
while [ "$i" -le $STEPS ]; do
	echo "Bla $i" > "/root/setup/bla.txt"
	NAME_LINE=$((i * 3))
	SCRIPT_LINE=$((i * 3 + 1))
	NAME=$(head $SETUP_FILE -n$NAME_LINE | tail -n1)
	echo "Bla $NAME" >> "/root/setup/bla.txt"
	COMMAND=$(head $SETUP_FILE -n$SCRIPT_LINE | tail -n1)
	#write name of the current step in status file and execute the script
	echo "$NAME" > $STATUS_FILE
	sh "/root/setup/$COMMAND"

	i=$(( i + 1 ))
done

#write 'Finished' in status file
#the setup script checks the status file for this string
echo "Finished" > $STATUS_FILE
