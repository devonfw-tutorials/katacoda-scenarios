#!/bin/sh

sleep 2
touch /root/step12.txt
echo $(date +"%Y_%m_%d_%I_%M_%p") > /root/step12.txt
