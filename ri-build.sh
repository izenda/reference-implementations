#!/bin/bash
RI=${1}
wget http://archives.izenda.us/core/latest/izenda.adhoc.zip
unzip izenda.adhoc.zip
rm izenda.adhoc.zip
mkdir -p Reports
touch Izenda.config
mkdir -p "${RI}"
find . \( -path "./.git" -o -path "./${RI}" \) -prune -o -print | cpio -mpvd "${RI}"
zip -r ${RI}.zip ${RI}
