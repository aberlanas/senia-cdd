#!/usr/bin/env node

'use strict';

var fs = require('fs');
var parser = require('xml2json');

function info (filename) {
    fs.readFile(filename, function(err,data){
      var centre = parser.toJson(data);
      var JCentre = JSON.parse(centre);
      console.log(JCentre);
    });
}

function alumnes (filename) {
  fs.readFile(filename, function(err,data){
    var centre = parser.toJson(data);
    var JCentre = JSON.parse(centre);
    console.log(JCentre.alumnes);
  });
}

var program = require('commander');

program
  .version('0.1')
  .option('-i, --info [filename]',"Engine CLI for Users and Groups","llxgesc.dat")
  .option('-a, --alumnes [filename]',"Show Alumnes")
  .parse(process.argv);

if (program.info) info(program.info);
if (program.alumnes) alumnes(program.alumnes);
