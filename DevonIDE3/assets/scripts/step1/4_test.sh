#!/bin/sh

sleep 2
touch /root/step14.txt
echo $(date +"%Y_%m_%d_%I_%M_%p_%S") + "%T.%N Time" > /root/step14.txt
