#!/bin/sh

apt install libarchive-tools -y
bsdtar -xvf /root/setup/cobigen-0.0.1 - extension
mv extension /opt/.katacodacode/extension/cobigen 
