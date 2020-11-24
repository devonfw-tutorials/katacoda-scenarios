#!/bin/sh

cd /root/setup/

curl -H "Accept: application/vnd.github.v3+json" https://api.github.com/repos/devonfw-forge/cobigen-vscode-plugin/releases/latest |
	grep '"browser_download_url":' |
    sed -E 's/.*"([^"]+)".*/\1/' >> url.txt
curl $(cat url.txt) -L --output cobigen-plugin.vsix

apt install libarchive-tools -y

bsdtar -xvf cobigen-plugin.vsix - extension
mv extension /opt/.katacodacode/extensions/cobigen
