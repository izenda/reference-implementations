#!/bin/bash
RI=${1}
CORE_TYPE=${2}
CORE_TYPE=${CORE_TYPE:="latest"}

wget http://archives.izenda.us/core/${CORE_TYPE}/izenda.adhoc.zip
unzip izenda.adhoc.zip
rm izenda.adhoc.zip
mkdir -p Reports
touch Izenda.config
mkdir -p "${RI}"
npm update
npm install grunt-cli
grunt
find . \( -path "./.git" -o -path "./Forms/elrte/.git" -o -path "./${RI}" \) -prune -o -print | cpio -mpvd "${RI}"
zip -r ${RI}.zip ${RI}
