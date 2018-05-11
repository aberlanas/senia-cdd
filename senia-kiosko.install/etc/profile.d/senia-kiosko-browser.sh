#!/bin/bash


URLKIOSKO="http://forms.edu.gva.es/limesurvey/index.php/823645"

logger -t " Senia Kiosko " " Starting FirefoX  : $URLKIOSKO"
firefox -private "${URLKIOSKO}" & 

sleep 1
xdotool search --sync --onlyvisible --class "Firefox" windowactivate key F11


