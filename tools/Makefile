#!/usr/bin/make -f

TEMPLATE_TEX="rsrc/templates/pd-nologo-tpl.latex"
PANDOC_OPTIONS="-V fontsize=14pt -V mainfont="Ubuntu" --pdf-engine=xelatex"

PDF_PATH=~/temp/ListadosLOPD
TEMP_LOPD_PATH=~/temp/tempListLOPD
TEMP_PATH=~/temp/tempList

configure:
	@echo " * Configuring "
	mkdir -p $(PDF_PATH)
	mkdir -p $(TEMP_LOPD_PATH)
	mkdir -p $(TEMP_PATH)

clean:
	@echo " * Clean workspace "
	rm -rf $(PDF_PATH)/*
	rm -rf $(TEMP_LOPD_PATH)/* 
	rm -rf $(TEMP_PATH)/*.pdf


listados-lopd: clean configure
	@echo " [ Step : Listados LOPD ]"
	@./python-list-users-lopd.py > $(TEMP_LOPD_PATH)/listadosTodos.md
	pandoc --template $(TEMPLATE_TEX) $(PANDOC_OPTIONS) -o $(PDF_PATH)/ListadosInicioCursoLOPD.pdf $(TEMP_LOPD_PATH)/*.md
	atril $(PDF_PATH)/ListadosInicioCursoLOPD.pdf


listados-trocitos: listados-lopd
	@echo " [ Split the world ]"
	@echo " 1 ESO "
	pdftk $(PDF_PATH)/ListadosInicioCursoLOPD.pdf cat 1-6 output  $(PDF_PATH)/1ESO.pdf
	@echo " 2 ESO "
	pdftk $(PDF_PATH)/ListadosInicioCursoLOPD.pdf cat 7-16 output  $(PDF_PATH)/2ESO.pdf
	@echo " 3 ESO "
	pdftk $(PDF_PATH)/ListadosInicioCursoLOPD.pdf cat 17-21 output  $(PDF_PATH)/3ESO.pdf
	@echo " 4 ESO "
	pdftk $(PDF_PATH)/ListadosInicioCursoLOPD.pdf cat 22-30 output  $(PDF_PATH)/4ESO.pdf

	@echo " 1 BATX "
	pdftk $(PDF_PATH)/ListadosInicioCursoLOPD.pdf cat 31-34 output  $(PDF_PATH)/1BATX.pdf

	@echo " 2 BATX "
	pdftk $(PDF_PATH)/ListadosInicioCursoLOPD.pdf cat 35-36 output  $(PDF_PATH)/2BATX.pdf


listados-plain: clean configure

	@echo " [ Step : Listados Plain ] "
	@mkdir -p tempList
	@./python-list-users-plain.py > ~/temp/tempList/listadosTodos.md
	pandoc --template $(TEMPLATE_TEX) $(PANDOC_OPTIONS) -o  $(PDF_PATH)/ListadosInicioCurso.pdf  ~/temp/tempList/*.md
	atril  ~/temp/ListadosLOPD/ListadosInicioCurso.pdf


all-listados: listados-lopd listados-plain
