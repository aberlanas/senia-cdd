#!/usr/bin/env node

'use strict';

var fs = require('fs');
var parser = require('xml2json');

function initCentre(filename){

    var data = fs.readFileSync(filename);
    var dCentre = parser.toJson(data);
    var auxCentre = JSON.parse(dCentre);
    return auxCentre; 

}

function info (centre) {
   console.log(centre);
}

function alumnes (centre) {
  
    centre.centre.alumnes.alumne.forEach(function(alum){ 
        console.log(alum.nom+" - "+alum.nia);
    });  
    
}


function printAlumnes(alumnes,mode="simple"){
    alumnes.forEach(function(alumne){
        if (mode == "simple"){
            console.log(" * "+alumne.nom+","+alumne.cognoms+ " - "+alumne.nia);
        }
        if (mode == "csv"){
            
            console.log(alumne.nom+","+alumne.cognoms+ ","+alumne.nia);
        }
    });
}

function alumneRepetido(vAlum,alum){
    var esta = false;
    vAlum.forEach(function(aux){
        if (alum.nia == aux.nia){
            esta = true;
        }
    });
    return esta;
}

function trimAlumnes(centre){
    var alumnesAuxTrim = [];
    centre.centre.alumnes.alumne.forEach(function(cAlumne){
       if (!alumneRepetido(alumnesAuxTrim,cAlumne)){
            alumnesAuxTrim.push(cAlumne)
        }
       });
    console.log(" * Procesados :"+alumnesAuxTrim.length);
    return alumnesAuxTrim;
}
  
var program = require('commander');


program
  .version('0.1')
  .option('-f, --file [filename]',"File of Users and Groups")
  .option('-i, --info',"Engine CLI for Users and Groups")
  .option('-a, --alumnes',"Show Alumnes")
  .parse(process.argv);


var filename = "";
var centre = null;

if(program.file){

    filename = program.file;
    centre = initCentre(filename);

}

if (program.info){
    info(centre);
    process.exit(0);
}

if (program.alumnes) {

    alumnes(centre);
    var unicos = trimAlumnes(centre);
    console.log(centre.centre.alumnes.alumne.length);
    printAlumnes(unicos);
    printAlumnes(unicos,"csv");
    process.exit(0);

}
