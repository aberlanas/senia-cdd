#!/bin/bash


for f in $(ls *.sort); do

	echo " * PROBANDO CON  $f"
	NUMLINES="$(cat $f|wc -l)"

	echo " * Cleaning tests"
	mkdir -p "/tmp/$f"
	rm -rf "/tmp/$f/*"


	for j in $(ls *.sort); do
		diff $f $j > "/tmp/$f/$j.diff"
		
		NUMLINESDIFF=$(cat /tmp/$f/$j.diff|wc -l)
		
		if [ $NUMLINES -eq $NUMLINESDIFF ]; then
			echo " MIRA QUE COSAS $NUMLINES"
			echo "/tmp/$f/$j.diff"
		fi
	
	done

done


exit 0
