#!/bin/bash

var=0
for f in "$(cat /tmp/listGroups.txt)"; do

    FGRUPO=$(echo "$f"| cut -d " " -f -2| sed -e "s% %%g")
    ((var++))
   
    pdftk  ListadosLOPD/ListadosInicioCurso.pdf cat 1 output ListadosLOPD/$FGRUPO.pdf

done
