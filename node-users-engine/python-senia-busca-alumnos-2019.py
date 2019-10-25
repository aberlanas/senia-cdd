#!/usr/bin/env python3
 
import os
import sys
import xml.etree.ElementTree as ET
from datetime import datetime

from flask import Flask, request
from flask_restful import Resource, Api
from json import dumps
#from flask.ext.jsonpify import jsonify

class Profesor:

    nombre = ""
    apellido1 = ""
    apellido2 = ""
    documento =""

    def __init__(self,documento="",nombre="",apellido1="",apellido2=""):
        self.nombre = nombre
        self.apellido1 = apellido1
        self.apellido2 = apellido2
        self.documento = documento

    def getDni(self):
        return self.documento
    
    def getNombre(self):
        return (self.nombre)
    
    def getApellidos(self):
        return (self.apellido1+" "+self.apellido2)
    
    def getNombreCompleto(self):
        return (" [ PROFESOR ] : " + self.nombre + ", "+self.apellido1+" "+self.apellido2);
    
class Alumno:

    nombre = ""
    apellido1 = ""
    apellido2 = ""
    documento =""
    grupo = ""
    nia = ""
    
    def __init__(self,documento="",nombre="",apellido1="",apellido2="",grupo="",nia=""):
        self.nombre = nombre
        self.apellido1 = apellido1
        self.apellido2 = apellido2
        self.documento = documento
        self.grupo = grupo
        self.nia = nia
        
    def getDni(self):
        return self.documento
    
    def getNombre(self):
        return (self.nombre)
    
    def getApellidos(self):
        return (self.apellido1+" "+self.apellido2)
    
    def getNombreCompleto(self):
        return ( " [ ALUMNO ] : "+ self.nombre + ", "+self.apellido1+" "+self.apellido2);
    
    
def dow(dayNumber):
    days=["L","M","X","J","V","Saturday","Sunday"]
    return days[dayNumber]

if __name__ == "__main__":
    fileDb="imexalum.xml"
    plantilla="758772746"

    dia=dow(datetime.today().weekday())

    tree = ET.parse(fileDb)
    # En centro tenemos todo el IES
    centro = tree.getroot()
    
    ## Docentes
    
    centroDocentes = []
    centroAlumnos = []
    centroSesiones = []
    
    ## Replenish docentes
    for item in centro.iter('docente'):
        docAux = Profesor(item.get("documento"),item.get("nombre"),item.get("apellido1"),item.get("apellido2"))
        #print(docAux)
        centroDocentes.append(docAux)


    ## Replenish alumnos
    for item in centro.iter("alumnos"):
        for alumno in item.getchildren():
            aluAux = Alumno(alumno.get("documento"),alumno.get("nombre"),alumno.get("apellido1"),alumno.get("apellido2"),alumno.get("grupo"),alumno.get("NIA"))
            centroAlumnos.append(aluAux)
            #print(aluAux.getNombre())
            #print(alumno.attrib)
    
    
    
    
    
    
    # Buscar
    '''
    ejNombre = ""
    ejNia = "10689831"
    ejDia="X"
    ejSesion='3'
    docenteCurrent=""
    grupoAux = ""
    

    
    for alumnoAux in centroAlumnos:
        #print(alumnoAux.nombre)
        if alumnoAux.nia == ejNia:
            grupoAux = alumnoAux.grupo
            print(alumnoAux.getNombreCompleto())
       
    
    print(" [ GRUPO ] : " +grupoAux)
    # Horarios Grupos
    for item in centro.iter("horarios_grupo"):
        for horario in item.getchildren():
            if ((horario.get("plantilla") == plantilla) and (horario.get("grupo") == grupoAux) and (horario.get("dia_semana") == ejDia) and (horario.get("sesion_orden") == ejSesion)):
                docenteCurrent = horario.get("docente")
    
    for docAux in centroDocentes:
        if (docAux.getDni() == docenteCurrent):
            print(docAux.getNombreCompleto());
    
    '''
    '''
    # Grupos
    for item in centro.iter("grupos"):
        for grupo in item.getchildren():
            print(grupo.attrib)
    ''' 
    
    '''
    # Horarios ocupaciones
    for item in centro.iter("horarios_ocupaciones"):
        for horario in item.getchildren():
            print(horario.attrib)
    '''
    
    '''
    for prof in centroDocentes:
        print(prof.documento)
    '''
    
        
    ## Horarios
    
    
    
    
