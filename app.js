const { throws } = require('assert');
const { crearArchivo } = require('./helpers/multiplicacion');
const argv = require('./config/yargs');
const colors = require('colors');


//const [, , arg3 = 'base=5'] = process.argv;
//const [, base = 5] = arg3.split('=');



//const base = 5;

crearArchivo(argv.b, argv.l, argv.h).then(nombreArchivo => console.log(nombreArchivo.rainbow, "creado")).catch(err => console.log(err));