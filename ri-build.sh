#!/bin/bash
RI=${1}
wget http://archives.izenda.us/core/latest/izenda.adhoc.zip
unzip izenda.adhoc.zip
rm izenda.adhoc.zip
mkdir -p Reports
touch Izenda.config
mkdir -p "${RI}"
find . \( -path "./.git" -path "${RI}" \) -prune -o -print
#find . ! -name "${RI}" | cpio -mpvd "${RI}"
#zip -r ${RI}.zip ${RI}
