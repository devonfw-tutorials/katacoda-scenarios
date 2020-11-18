#!/bin/sh

apt install libarchive-tools -y
cd /root/setup/
bsdtar -xvf cobigen-0.0.1.vsix - extension
mv extension /opt/.katacodacode/extensions/cobigen
