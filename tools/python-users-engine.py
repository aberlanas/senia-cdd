#!/usr/bin/python3 

import argparse
import xml.etree.ElementTree as ET 
import sys
import os

# Custom parser for Users
parser = argparse.ArgumentParser(prog="python-users-engine")
parser.add_argument('--foo', help='foo help')
parser.add_argument('--source', nargs='+' ,help='Source Data Users')
parser.add_argument('--list-students',action="store_true", dest="list_students", default=False, help='List all students')
parser.add_argument('--list-teachers',action="store_true", dest="list_teachers", default=False, help='List all teachers')
parser.add_argument('--list-groups', help='List all Groups')
parser.add_argument('--list-especialitats', help='List all especialitats')
parser.add_argument('--list-asignatures', help='List all Asignatures')
parser.add_argument('--list-courses', help='List all Courses')
args = parser.parse_args()

# Some GLOBAL Variables
ROOT=""


class Teacher():
    # TODO
    nombre=""
    apellidos=""
    dni=""
    tutor=""
    grupos={}

def setup_engine():
    # SetUp engine
    if (os.path.exists(args.source[0])):
        tree = ET.parse(args.source[0])
    else:
        print(" * [ ERROR ] : Source File is not found or invalid")
        sys.exit(1)

    return tree.getroot()

def show_list_students(root):
    # Get the students
    alumnes = root[0]
    for alumno in alumnes :
        # alumno[5] parece ser el grupo
        print(alumno[2].text + "--" + alumno[5].text)


def show_list_teachers(root):
    # Get the Teachers
    teachers = root[1]
    for teacher in teachers:
        try:
            print(teacher[0].text + ","+teacher[1].text + ","+teacher[2].text+ ","+str(teacher[6].text.split('#')))

        except Exception as e:
            print(" AVISO  : " +teacher[0].text + ","+teacher[1].text + ","+teacher[2].text+ ", no tiene tutoria")

def show_list_groups(root):
    # Get the groups
    print("Groups")


root=setup_engine()

if(args.list_students):
    show_list_students(root)
if(args.list_teachers):
    show_list_teachers(root)
if(args.list_teachers):
    show_list_teachers(root)

else:
    sys.exit(0)

sys.exit(0)
"""
for child in ROOT:
    print(child.tag)
"""
    
alumnes = ROOT[0]
professors = ROOT[1]
grups = ROOT[2]
especialitats = ROOT[3]
assignatures  = ROOT[4]
cursos =  ROOT[5]


print(" #  * CURSOS ")
for curso in cursos:
    print(curso[0].text)

print(" # * ASIGNATURES ")
for asignatura in assignatures:
    print(asignatura[1].text)

print(" # * Especilitats ")
for especialitat in especialitats:
    print(especialitat[0].text)

print(" # * Grups ")
for grup in grups:
    print(grup[0].text)




print(" # Profesores ")
for profesor in professors:
    try:
        print(profesor[1].text+","+profesor[0].text+" : "+str(profesor[4].text.split('#')))
    except Exception as e:
        print(profesor[1].text+","+profesor[0].text+" : No tiene grupos asignados")


exit(0)