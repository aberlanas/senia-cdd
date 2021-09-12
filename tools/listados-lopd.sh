#!/bin/bash

FILE_OF_STUDENTS="INF_ALUMNOS_003.txt"

GREP_V_OPTIONS="2021|2022|Pàgina|Data|[0-9]{5}|Segon|Any|Cognoms|Grup"
GREP_V_OPTIONS="$GREP_V_OPTIONS|LLISTA|CENTRE|SÈNIA|CODI|ADREÇA|ESCULTOR|C.P|LOCALITAT|PAIPORTA|TELÈFON"
GREP_V_OPTIONS="$GREP_V_OPTIONS|Primer|PRIMER"
GREP_V_OPTIONS="$GREP_V_OPTIONS|Núm|^[0-9]{2}$|^[0-9]{1}$|^$"
echo " * LOPDizing "


cat  ${FILE_OF_STUDENTS} | grep -vE ${GREP_V_OPTIONS} | sed -e "s%Curs :%------\n\\n\\\newpage\nCurs:%g" > /tmp/onlystudents1.txt

cat /tmp/onlystudents1.txt| sed -e "s%Curs:%*Curs:*%g"|sed -e "s%.*[0-9].*%*&*%g"  >  /tmp/onlystudents.txt


cat /tmp/onlystudents.txt | while read line; do 

    rc=0
    echo $line | grep -q ',' || rc=1
    
    if  [ ${rc} -eq 0 ]; then
        #echo  " * ES UN ALUMNO : $line"
        NOMBRE=$(echo $line|cut -d "," -f2)
        APELLIDOS=$(echo $line|cut -d "," -f1)
        APELLIDOSLOPD=$(./python-lopdize-names.py "${APELLIDOS}")
        echo " | $NOMBRE | $APELLIDOSLOPD | "

    else 
        echo $line |sed -e "s%newpage%\\\newpage%g"
        echo ""
    fi


done

exit 0
