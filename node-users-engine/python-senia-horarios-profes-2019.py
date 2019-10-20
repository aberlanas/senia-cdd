#!/usr/bin/env python3

# 

import os
import sys
    

import xml.etree.ElementTree as ET


class Profesor:

    nombre = ""
    apellido1 = ""
    apellido2 = ""
    dni =""

    def __init__(self,dni="",nombre="",apellido1="",apellido2=""):
        self.nombre = nombre
        self.apellido1 = apellido1
        self.apellido2 = apellido2
        self.dni = dni

if __name__ == "__main__":
    fileDb="imexalum.xml"
    tree = ET.parse(fileDb)
    # En centro tenemos todo el IES
    centro = tree.getroot()
    
    ## Docentes
    for item in centro.iter('docente'):
        print(item.get("nombre")+" "+item.get("apellido1")+" "+item.get("apellido2"))

    ## 
