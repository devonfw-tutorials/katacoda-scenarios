#!/bin/sh

echo "Setup Step 1"
while [ ! -f /root/scripts/step1/FINISH ]
do
	sleep 2s
done

echo "Done"
