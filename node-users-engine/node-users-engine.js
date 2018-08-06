#!/usr/bin/env node

'use strict';

var fs = require('fs');
var parser = require('xml2json');

function info (filename) {
    var data = fs.readFileSync(filename);
    var centre = parser.toJson(data);
    var JCentre = JSON.parse(centre);
    console.log(JCentre);
    
}

function alumnes (filename) {
  
    var data = fs.readFileSync(filename);
    var centre = parser.toJson(data);
    var JCentre = JSON.parse(centre);
    JCentre.centre.alumnes.forEach(alumne => {
      console.log(alumne.nom);  
    });
    
}
  
}

var program = require('commander');


program
  .version('0.1')
  .option('-f, --file [filename]',"File of Users and Groups")
  .option('-i, --info',"Engine CLI for Users and Groups")
  .option('-a, --alumnes',"Show Alumnes")
  .parse(process.argv);


  var filename = "";
  
  if(program.file){
    filename = program.file;
  }

if (program.info){

  info(filename);
  process.exit(0);

}

if (program.alumnes) {

  alumnes(filename);
  process.exit(0);

}
