#!/usr/bin/make -f

TEMPLATE_TEX="rsrc/templates/pd-nologo-tpl.latex"
PANDOC_OPTIONS="-V fontsize=14pt -V mainfont="Ubuntu" --pdf-engine=xelatex"

PDF_PATH:=$(shell readlink -f ListadosLOPD)

clean:
	@echo " * Clean workspace "
	rm -f /tmp/listGroups.txt
	rm -rf tempList/* 
	rm -rf $(PDF_PATH)/*.pdf

listados-lopd: clean
	@echo " [ Step : Listados LOPD ]"
	@mkdir -p tempList
	@./python-list-users-lopd.py > tempList/listadosTodos.md
	pandoc --template $(TEMPLATE_TEX) $(PANDOC_OPTIONS) -o $(PDF_PATH)/ListadosInicioCurso.pdf tempList/*.md 
	atril ListadosLOPD/ListadosInicioCurso.pdf
	@./separador.sh
