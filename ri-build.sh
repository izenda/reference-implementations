#!/bin/bash
RI=${1}
CORE_TYPE=${2}
CORE_TYPE=${CORE_TYPE:="latest"}

case `uname -s` in
  Darwin)
    BUILD_TOOL=xbuild;
    FIND="/usr/bin/find";
    SED="gsed";
    ;;
  Linux)
    BUILD_TOOL=xbuild;
    FIND="/usr/bin/find";
    SED="sed";
    ;;
  CYGWIN_NT*)
    BUILD_TOOL=msbuild.exe;
    FIND="/bin/find";
    SED="sed";
    ;;
esac

exitOnFailure() {
  if [ "$?" -ne "0" ]
  then
    exit -1
  fi
}

wget http://archives.izenda.us/core/${CORE_TYPE}/izenda.adhoc.zip
exitOnFailure
unzip izenda.adhoc.zip
rm izenda.adhoc.zip
"/cygdrive/c/Program Files (x86)/MSBuild/12.0/Bin/amd64/MSBuild.exe" ri.csproj
exitOnFailure
mkdir -p Reports
touch Izenda.config
mkdir -p "${RI}"
${FIND} . \( -path "./.git" -o -path "./packages" -o -path "./Reporting/elrte/.git" -o -path "./${RI}" \) -prune -o -print | cpio -mpvd "${RI}"
zip -r ${RI}.zip ${RI}
exitOnFailure
