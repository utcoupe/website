#!/bin/bash

function green_echo() {
	echo -e "\033[32m$1\033[0m"
}

function red_echo() {
	echo -e "\033[31m$1\033[0m"
}

# Verify that the script is launched from the right place
if [ ! "${PWD##*/}" = "website" ]; then
	red_echo "You have to launch this script from repo root folder"
	exit 1
fi

ln -s ./${PWD##*/}/index.html ../index.html

for D in `find . -maxdepth 1 -type d | grep -v "/\." | grep "./"`
do
    ln -s ./${PWD##*/}/$D ../$D
done
