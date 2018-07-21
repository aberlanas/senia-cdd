#!/usr/bin/python3 

import xml.etree.ElementTree as ET
tree = ET.parse('llxgesc.dat')
root = tree.getroot()



print( " * Welcome to "+root.get('nom'))
print( "   -- CURS : "+root.get('any'))
print( "   -- Exported on "+root.get('dataExportacio'))
#professors = tree.findall('.//professors')

for node in root:
    print(" * Working with "+node.tag)
    professors = node.findall('.//professors')
    for professor in professors:
        print (professor.tag)
        print(type(professor.tag))
        if (professor.tag == "alumnes"):
            
            print(type(professor.attrib))


