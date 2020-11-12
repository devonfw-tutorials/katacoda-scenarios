#!/bin/sh

SETUP_FILE="/root/setup/setup.txt"
echo "$SETUP_FILE"
while [ ! -f $SETUP_FILE ]
do 
	sleep 1
done
echo "Start"
STEPS=$(head $SETUP_FILE -n1)
echo "Steps: $STEPS"
for (( i=0; i<$STEPS; i++ ))
do 
	NAME_LINE=$((i * 4 + 2))
	FIN_LINE=$((i * 4 + 4))
	NAME=$(head $SETUP_FILE -n$NAME_LINE | tail -n1)
	echo "Executing step $((i + 1)): $NAME"
	TMP=$(head $SETUP_FILE -n$FIN_LINE | tail -n1)
  while [! test $TMP -eq "Finished"]
  do
    sleep 1
    TMP=$(head $SETUP_FILE -n$FIN_LINE | tail -n1)
  done
done
echo "Setup script finished!"