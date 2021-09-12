#!/usr/bin/python3

import sys

apellidos=sys.argv[1]

apelFinal = ""

for auxp in apellidos.split(" "):
	auxf = auxp[0:2]

	sasteriscos = ""
	nasteriscos = len(auxp)-2
	for i in range(nasteriscos):
		sasteriscos += "*"

	#apelFinal+=auxf.capitalize()+sasteriscos+" "
	apelFinal+=auxf+sasteriscos+" "

print(apelFinal)
