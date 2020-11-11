#!/bin/sh

while [ ! -f /root/waitForInit.sh ] ; do sleep 1 ; done
sh waitForInit.sh