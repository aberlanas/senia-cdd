#!/usr/bin/env node

'use strict';

var fs = require('fs');
var parser = require('xml2json');

const info = (filename) => {
    fs.readFile(filename.filename, function(err,data){
      var centre = parser.toJson(data);
      var JCentre = JSON.parse(centre);
      console.log(JCentre);
    });
}


const program = require('commander');
program
  .version('0.1')
  .command('info <filename>')
  .alias('i')
  .description('Engine CLI for Users and Groups')
  .action((filename) => {
    info({filename});
  });
program.parse(process.argv);

