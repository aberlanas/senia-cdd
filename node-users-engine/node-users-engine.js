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
  
    centre.centre.alumnes.alumne.forEach(function(alum){ console.log(alum.nom+" - "+alum.nia)});  
    
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
    process.exit(0);

}
