#!/usr/bin/make -f

TEMPLATE_TEX="rsrc/templates/pd-nologo-tpl.latex"
PANDOC_OPTIONS="-V fontsize=14pt -V mainfont="Ubuntu" --pdf-engine=xelatex"

PDF_PATH:=$(shell readlink -f ListadosLOPD)

configure:
	@echo " * Configuring "
	mkdir -p ListadosLOPD

clean:
	@echo " * Clean workspace "
	rm -f /tmp/listGroupsLOPD.txt
	rm -f /tmp/listGroups.txt
	rm -rf tempList/*
	rm -rf tempListLOPD/* 
	rm -rf $(PDF_PATH)/*.pdf

listados-lopd: clean configure
	@echo " [ Step : Listados LOPD ]"
	@mkdir -p tempListLOPD
	@./python-list-users-lopd.py > tempListLOPD/listadosTodos.md
	pandoc --template $(TEMPLATE_TEX) $(PANDOC_OPTIONS) -o $(PDF_PATH)/ListadosInicioCursoLOPD.pdf tempListLOPD/*.md
	atril ListadosLOPD/ListadosInicioCursoLOPD.pdf

	@echo " [ Step : Listados Plain ] "
	@mkdir -p tempList
	@./python-list-users-plain.py > tempList/listadosTodos.md
	pandoc --template $(TEMPLATE_TEX) $(PANDOC_OPTIONS) -o $(PDF_PATH)/ListadosInicioCurso.pdf tempList/*.md
	atril ListadosLOPD/ListadosInicioCurso.pdf
