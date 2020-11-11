#!/bin/sh

cd /root/scripts/step1/

FILES=/root/scripts/step1/*
for f in $FILES
do
  bash $f
done

touch FINISHED
