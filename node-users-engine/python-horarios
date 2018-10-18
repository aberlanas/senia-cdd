#!/usr/bin/python3


import os
import sys
from xml.etree import ElementTree

fileDb="/home/aberlanas/Descargas/imexalum.xml"


def sanity_checks():
    if (os.path.exists(fileDb)):
        print(" * File Exists!")
    else:
        print(" * Dame un ficherin ")
        sys.exit(1)


def read_all(f):
    with open(f,'rt') as f:
        tree = ElementTree.parse(f)

    for prof in tree.iter('docente');

    for node in tree.iter('horario_ocupacion'):
        print(node.attrib)
        for 
        print(node.attrib['plantilla'])


if __name__ == "__main__":

    sanity_checks()
    read_all(fileDb)



sys.exit(0)

