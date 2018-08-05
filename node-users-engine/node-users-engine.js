#!/usr/bin/env node

'use strict';

var fs = require('fs');
var parser = require('xml2json');

function info (filename) {
    fs.readFile(filename.filename, function(err,data){
      var centre = parser.toJson(data);
      var JCentre = JSON.parse(centre);
      console.log(JCentre);
    });
}

function alumnes = (filename) => {
  console.log("Patata");
}

var program = require('commander');

program
  .version('0.1')
  .option('-i, --info [filename]',"Engine CLI for Users and Groups")
  .option('-a, --alumnes <filename>',"Show Alumnes")
  .parse(process.argv);


if (program.info) info(program.filename);
