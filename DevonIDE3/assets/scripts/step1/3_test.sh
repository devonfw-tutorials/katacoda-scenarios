#!/bin/sh

sleep 2
touch /root/step13.txt
echo $(date +"%Y_%m_%d_%I_%M_%p_%S") > /root/step13.txt
