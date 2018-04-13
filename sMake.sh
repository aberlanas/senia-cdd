#!/bin/bash

# Simple make script for living under
# GitHub environment

GPG_TIC="0B6E1EE4"
GPG_ABERLANAS="CF82B86F"

GPG_KEY=""

if [ "$1" = "--tic" ]; then
	echo " * Using TIC key"
	GPG_KEY="$GPG_TIC"
else
	echo " * Using aberlanas"
	GPG_KEY="$GPG_ABERLANAS"
fi 

# Cleaning System
echo " * Cleaning env "
fakeroot debian/rules clean 2>/dev/null 1>/dev/null

git commit -a -m "Updated everything with sMake"

gbp buildpackage -k$GPG_KEY

exit 0
