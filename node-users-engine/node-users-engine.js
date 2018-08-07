#!/usr/bin/env node

// This Script is licensed under
// GPL v3 or higher

// Author: Angel Berlanas Vicente
//         <angel.berlanas@gmail.com>
//

//
// Imports

'use strict';
var fs = require('fs');
var parser = require('xml2json');


// Init 

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

function trimAlumnes(alumnes){
    var alumnesAuxTrim = [];
    alumnes.forEach(function(cAlumne){
       if (!alumneRepetido(alumnesAuxTrim,cAlumne)){
            alumnesAuxTrim.push(cAlumne)
        }
       });
    console.log(" * Procesados :"+alumnesAuxTrim.length);
    return alumnesAuxTrim;
}
  

function filterAlumnesByGroup(alumnes,group){
    var alumnesAux = [];
    alumnes.forEach(function(cAlumne){
        //TODO
        if (cAlumne.
    }
}

function getAlumnes(centre){
    // For now this seems redundant buy I think 
    // will be usefull in the future
    return centre.centre.alumnes.alumne;
}

var program = require('commander');


program
  .version('0.1')
  .option('-f, --file [filename]',"File of Users and Groups")
  .option('-i, --info',"IES Info")
  .option('-G, --listgroups',"List all Groups")
  .option('-g, --group',"List all Groups")
  .option('-c, --csv',"CSV output")
  .option('-a, --alumnes',"Show Alumnes")
  .option('-R, --raw', "Show whitout filters") 
  .parse(process.argv);


var filename = "";
var centre = null;
var outputMode = "simple"

if(program.file){

    filename = program.file;
    centre = initCentre(filename);

}

if(program.csv) outputMode = "csv";

if (program.info){
    info(centre);
    process.exit(0);
}

if (program.alumnes) {

    var alumnes = getAlumnes(centre); 

    if (program.raw){

        printAlumnes(alumnes);
    }
    else{
       
        alumnes = trimAlumnes(alumnes);
        
        if (program.group){
                    alumnes = filterAlumnesByGroup(alumnes);
        }
        
        printAlumnes(alumnes,outputMode);
    }
    
    process.exit(0);
}
