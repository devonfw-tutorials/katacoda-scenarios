#!/bin/sh

sleep 10s
echo "Start"
cd /root/scripts/step1/

FILES=/root/scripts/step1/*
for f in $FILES
do
  echo "Processing $f file..."
  # take action on each file. $f store current file name
  cat $f
done
