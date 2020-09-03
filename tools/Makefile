#!/usr/bin/make -f

TEMPLATE_TEX="rsrc/templates/pd-nologo-tpl.latex"
PANDOC_OPTIONS="-V fontsize=12pt -V mainfont="Ubuntu" --pdf-engine=xelatex"

PDF_PATH:=$(shell readlink -f ListadosLOPD)

clean:
	@echo " * Clean workspace "


listados-lopd:
	@echo " [ Step : Listados LOPD ]"
	@mkdir -p ListadosLOPD
	@mkdir -p 1ESO
	@./python-list-users-lopd.py > 1ESO/12.md
	pandoc --template $(TEMPLATE_TEX) $(PANDOC_OPTIONS) -o $(PDF_PATH)/Listados_1ESO.pdf 1ESO/*.md 
	atril ListadosLOPD/Listados_1ESO.pdf 
