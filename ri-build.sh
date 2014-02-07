#!/bin/bash

wget http://archives.izenda.us/core/latest/izenda.adhoc.zip
unzip izenda.adhoc.zip
rm izenda.adhoc.zip
mkdir -p Reports
touch Izenda.config
mkdir -p webforms-cs
find . ! -name "webforms-cs" | cpio -mpvd webforms-cs
zip -r webforms-cs.zip webforms-cs
