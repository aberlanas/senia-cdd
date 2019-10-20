#!/usr/bin/env python3
 
import os
import sys
import xml.etree.ElementTree as ET
from datetime import datetime

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
        return (" [PROFESOR] " + self.nombre + ", "+self.apellido1+" "+self.apellido2);
    
class Alumno:

    nombre = ""
    apellido1 = ""
    apellido2 = ""
    documento =""
    grupo = ""
    
    def __init__(self,documento="",nombre="",apellido1="",apellido2="",grupo=""):
        self.nombre = nombre
        self.apellido1 = apellido1
        self.apellido2 = apellido2
        self.documento = documento
        self.grupo = grupo
        
    def getDni(self):
        return self.documento
    
    def getNombre(self):
        return (self.nombre)
    
    def getApellidos(self):
        return (self.apellido1+" "+self.apellido2)
    
    def getNombreCompleto(self):
        return (self.nombre + ", "+self.apellido1+" "+self.apellido2);
    
    
def dow(dayNumber):
    days=["L","M","X","J","V","Saturday","Sunday"]
    return days[dayNumber]

if __name__ == "__main__":
    fileDb="imexalum.xml"
    plantilla="758772746"

    dia=dow(datetime.today().weekday())
    
    print(dia)
    sys.exit()
    tree = ET.parse(fileDb)
    # En centro tenemos todo el IES
    centro = tree.getroot()
    
    ## Docentes
    
    centroDocentes = []
    centroAlumnos = []
    
    
    ## Replenish docentes
    for item in centro.iter('docente'):
        docAux = Profesor(item.get("documento"),item.get("nombre"),item.get("apellido1"),item.get("apellido2"))
        #print(docAux)
        centroDocentes.append(docAux)


    ## Replenish alumnos
    for item in centro.iter("alumnos"):
        for alumno in item.getchildren():
            aluAux = Alumno(alumno.get("documento"),alumno.get("nombre"),alumno.get("apellido1"),alumno.get("apellido2"),alumno.get("grupo"))
            centroAlumnos.append(aluAux)
            #print(aluAux.getNombre())
            #print(alumno.attrib)
    
    ejNombre = ""
    ejDocumento = ""
    ejDia="L"
    ejSesion='5'
    docenteCurrent=""
    grupoAux = ""
    
    for alumnoAux in centroAlumnos:
        #print(alumnoAux.nombre)
        if alumnoAux.documento == ejDocumento:
            grupoAux = alumnoAux.grupo
            print(alumnoAux.getNombreCompleto())
            
    
    print(grupoAux)
    # Horarios Grupos
    for item in centro.iter("horarios_grupo"):
        for horario in item.getchildren():
            if ((horario.get("plantilla") == plantilla) and (horario.get("grupo") == grupoAux) and (horario.get("dia_semana") == ejDia) and (horario.get("sesion_orden") == ejSesion)):
                docenteCurrent = horario.get("docente")
    
    for docAux in centroDocentes:
        if (docAux.getDni() == docenteCurrent):
            print(docAux.nombre + " " + docAux.apellido1 + " " + docAux.apellido2);
    
    
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
    
    
    
    
