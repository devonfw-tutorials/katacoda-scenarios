#!/bin/sh

echo "Setup of step 1..."
while [ ! -f /root/scripts/step1/FINISHED ]
do
	sleep 2s
done

echo "Done. You can continue by following the constructions on the left."
