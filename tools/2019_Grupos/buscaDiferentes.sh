#!/bin/bash


for f in $(ls *.txt); do

	echo " * PROBANDO CON  $(echo $f| cut -d "." -f1| sed -e "s%_% %g")"
	NUMLINES="$(cat $f|wc -l)"

	echo " * Cleaning tests"
	mkdir -p "/tmp/$f"
	rm -rf "/tmp/$f/*"


	for j in $(ls *.txt); do
		diff $f $j > "/tmp/$f/$j.diff"
		
		NUMLINESDIFF=$(cat /tmp/$f/$j.diff|wc -l)
		
		if [ $NUMLINES -eq $NUMLINESDIFF ]; then
			echo " MIRA QUE COSAS $NUMLINES"
			echo "/tmp/$f/$j.diff"
		fi
	
	done

done


exit 0
