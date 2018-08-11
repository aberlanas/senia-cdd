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




// 
// TOOLS  
//
function getCleanedString(cadena){
   // Definimos los caracteres que queremos eliminar
   var specialChars = "!@#$^&%*()+=-[]\/{}|:<>?,.";

   // Los eliminamos todos
   for (var i = 0; i < specialChars.length; i++) {
       cadena= cadena.replace(new RegExp("\\" + specialChars[i], 'gi'), '');
   }   

   // Lo queremos devolver limpio en minusculas
   cadena = cadena.toLowerCase();

   // Quitamos espacios y los sustituimos por _ porque nos gusta mas asi
   cadena = cadena.replace(/ /g,"_");

   // Quitamos acentos y "ñ". Fijate en que va sin comillas el primer parametro
   cadena = cadena.replace(/á/gi,"a");
   cadena = cadena.replace(/à/gi,"a");
   cadena = cadena.replace(/é/gi,"e");
   cadena = cadena.replace(/è/gi,"e");
   cadena = cadena.replace(/í/gi,"i");
   cadena = cadena.replace(/ó/gi,"o");
   cadena = cadena.replace(/ò/gi,"o");
   cadena = cadena.replace(/ú/gi,"u");
   cadena = cadena.replace(/ñ/gi,"n");
   return cadena;
}

function capitalizeFirstLetter(string) {

    var aux  = string.toLowerCase();
    var finals = "";
    var vaux = aux.split(" ");
    
    if (vaux.length > 1){
        for (var x = 0; x<vaux.length ;x++){
            finals+=vaux[x].charAt(0).toUpperCase() + vaux[x].slice(1);
            if ( x<vaux.length-1){
                finals+=" ";
            }
        }
    }
    else{
        finals+=aux.charAt(0).toUpperCase() + aux.slice(1);
    }
    return finals;
}


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

// 
// GRUPS
//

function printGrups(grups,mode="simple"){
    
    grups.forEach(function(grup){
        if (mode == "simple"){
            console.log(" * " + grup.nom + " : " + grup.codi);
        }else if (mode == "csv"){
            console.log(grup.nom + ";" + grup.codi);
        }
    });

}

function getGroupNom(codi){
    var grups = getGrups(centre);
    var nom = "";

    grups.forEach(function(grup){
        if(grup.codi == codi) nom = grup.nom
    });

    return nom;
 
}

function getGroupCodi(nom){

    var grups = getGrups(centre);
    var codi = "";

    grups.forEach(function(grup){
        if(grup.nom == nom) codi = grup.codi
    });

    return codi;
   
}

//
// ASSIGNATURES 
//

//TODO categorias crearlas primero
function printAssignatures(assignatures,mode="simple"){

    if (mode == "moodle"){
        console.log("shortname, fullname,category");

    }
    assignatures.forEach(function(assignatura){
        if ( mode == "moodle"){
            var categoria="1";
            console.log(assignatura.codi+","+assignatura.nom+","+categoria);
        }else{
        console.log(" * "+assignatura.codi+" : "+assignatura.nom);
        }
    });

}

function getAssignaturaName(codi){
    
    var assignatures = getAssignatures(centre);
    var nom="";
    assignatures.forEach(function(assignatura){
        if (codi.endsWith(assignatura.codi)){
             nom = assignatura.nom;
        }
    });
    return nom;
}

//
// PROFESSORS
//



function printProfessors(professors,mode="simple"){
    professors.forEach(function(professor){
        if (mode == "simple"){
            console.log(" * "+professor.nom+","+professor.cognoms);
           
            if (JSON.stringify(professor.tutor) != "{}" ){
                console.log(" ---> Tutor : "+professor.tutor +" ( "+getGroupNom(professor.tutor)+" )");
            }
            console.log(" ---> Modulos ");
            if (professor.grupoassignatura != undefined ){
                
                var gruposSet = new Set();
                
                professor.grupoassignatura.forEach(function(grupo){

                   var aux = grupo.split("#")[1];
                   gruposSet.add(aux);

                });
                
                // Dejamos la logica anterior por si acaso
                //professor.grupoassignatura.forEach(function(grupo){
                gruposSet.forEach(function(grupo){
                   console.log(" - "+grupo+" - " +getAssignaturaName(grupo));
                });
            }else{
                console.log(" No hay modulos asignados ");
            }

            //console.log(JSON.stringify(professor));
            console.log(" \n===== XXXX ===== \n"); 
        }
        if (mode == "csv"){
            
            console.log(professor.nom+";"+professor.cognoms+ ";"+professor.document);
        }
    });
}


//
// ALUMNES
//

function alumnes (centre) {
  
    centre.centre.alumnes.alumne.forEach(function(alum){ 
        console.log(alum.nom+" - "+alum.nia);
    });  
    
}

function getUsername(alumne){
    
    var aux = "";
    aux = alumne.cognoms.split(" ")[0]+"."+alumne.nom.split(" ")[0];

    aux = getCleanedString(aux);

    if (uniqueV.includes(aux)){
        // Por ahora anyado el segundo apellido y ya
        // se podria hacer con un numerico pero no me queda
        // claro cual seria la mejor solucion.
        aux = alumne.cognoms.split(" ")[0]+"."+alumne.cognoms.split(" ")[1]+"."+alumne.nom.split(" ")[0];
        aux = getCleanedString(aux);
        }

    uniqueV.push(aux);
    return aux;

}

function printAlumnes(alumnes,mode="simple"){
    // Header for csv files
    if (mode == "moodle"){
        console.log("username;password;firstname;lastname;email;city;country");
    }



    alumnes.forEach(function(alumne){
        if (mode == "simple"){
            console.log(" * "+alumne.nom+","+alumne.cognoms+ " - "+alumne.nia);
        }
        if (mode == "csv"){
            
            console.log(alumne.nom+";"+alumne.cognoms+ ";"+alumne.nia);
        }
        if (mode == "moodle"){

            var username = getUsername(alumne);
            var correo = username+"@tucorreo.org";
            var nom = capitalizeFirstLetter(alumne.nom);
            var cognoms = capitalizeFirstLetter(alumne.cognoms);
            console.log(username+";"+"senia2018"+";"+nom+";"+cognoms+";"+correo+";"+"Paiporta"+";"+"ES");
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
    return alumnesAuxTrim;
}
  

function filterAlumnesByGroup(alumnes,grupCodi){
    var alumnesAux = [];

    alumnes.forEach(function(cAlumne){
         if (cAlumne.grup == grupCodi){
             alumnesAux.push(cAlumne)
         }
    }); 
    return alumnesAux;
}

function filterAlumnesByCurso(alumnes,cursCodi){
    var alumnesAux = [];

    alumnes.forEach(function(cAlumne){
         if (cAlumne.grup.startsWith(cursCodi)){
             alumnesAux.push(cAlumne)
         }
    }); 
    return alumnesAux;
}




//
// This part could be extracted as an API 
//


function getAlumnes(centre){
    // For now this seems redundant buy I think 
    // will be usefull in the future
    return centre.centre.alumnes.alumne;
}

function getGrups(centre){
    // For now this seems redundant
    return centre.centre.grups.grup;
}


function getProfessors(centre){
    return centre.centre.professors.professor;
}

function getAssignatures(centre){
    //console.log(JSON.stringify(centre.centre.assignatures.assignatura));
    return centre.centre.assignatures.assignatura;
}


// Start the CLI itself (MAIN)

var program = require('commander');


program
  .version('0.1')
  .option('-f, --file [filename]',"File of Users and Groups")
  .option('-i, --info',"IES Info")
  .option('-G, --listGroups',"List all Groups")
  .option('-A, --listAlumnes',"Show All Alumnes")
  .option('-P, --listProfessors'," Show All Professors")
  .option('-M, --listMateries'," Show All Assignatures")
  .option('-g, --group [group]',"List all teachers| materies | alumnes of this group")
  .option('-C, --curso [curso]',"List all teachers| materies | alumnes of this curso")
  .option('-u, --unique',"UniqueNames for alumnes and teachers")
  .option('-c, --csv',"CSV output")
  .option('-m, --moodle',"Moodle CSV output")
  .option('-R, --raw', "Show whitout filters") 
  .parse(process.argv);


// Some variables and configs (default values)
//
var filename = "";
var centre = null;
var outputMode = "simple"
var unique = false;
var uniqueV = [];

// Logic and options 
//
// Common values, options that could be enabled 
// or disabled and affect all the logic of the 
// program.
// 
if(program.file){

    filename = program.file;
    centre = initCentre(filename);

}

if(program.csv) outputMode = "csv";
if(program.moodle) outputMode = "moodle";


// Mutual Exclude Options


if (program.info){
    info(centre);
    process.exit(0);
}


if (program.listGroups){

    var grups  = getGrups(centre);
    printGrups(grups,outputMode);
    process.exit(0);
}


if (program.listAlumnes) {

    var alumnes = getAlumnes(centre); 

    if (program.unique){
        unique = true;
    }

    if (program.raw){

        printAlumnes(alumnes);
    }
    else{
       
        alumnes = trimAlumnes(alumnes);

        if (program.group){
            // Only using grups if needed 
            var grups = getGrups(centre);
            var grupCodi = getGroupCodi(program.group);

            alumnes = filterAlumnesByGroup(alumnes,grupCodi);
        }
        
        if (program.curso){
            var cursCodi = program.curso;
            alumnes = filterAlumnesByCurso(alumnes,cursCodi);
        }

        printAlumnes(alumnes,outputMode);
    }
    
    process.exit(0);
}

if (program.listProfessors){
    
    var professors = getProfessors(centre);
    printProfessors(professors,outputMode);
    process.exit(0);

}


if (program.listMateries){

    var assignatures = getAssignatures(centre);
    printAssignatures(assignatures,outputMode);
    process.exit(0);

}
