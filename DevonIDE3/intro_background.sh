#!/bin/sh

cd /root/scripts/step3/

FILES=/root/scripts/step3/*
for f in $FILES
do
  bash $f
done

touch /root/scripts/step3/FINISHED
