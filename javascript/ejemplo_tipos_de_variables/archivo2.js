//declaracion de variable.
var nombre; 
nombre = 'Gonzalo';

//Otra forma de declarar la variable.
var nombre = 'Pedro'; 

/************************************************************************* 
*   El lenguaje de programacion javascript tiene keySensitive, es decir que las variables
*   que tienen el mismo nombre pero escrito de distinta forma se tomaran como variables
*   distintas.
**************************************************************************/
//var se utiliza para variables globales: 
var nombre = 'Pedro '; 
var Nombre = 'Anny '; 
var _nombre = 'Tomas '; 
var NOMBRE = 'Elizabeth '; 
var $_nombre = 'Antonio '; 

document.write(nombre);
document.write(Nombre);
document.write(_nombre);
document.write(NOMBRE);
document.write($_nombre);

//let se utiliza para variables locales: 
let saludo = 'Hola '; 
let Saludo = 'Que tal? '; 
let _saludo = 'Como te va? '; 
let SALUDO = 'Encantado '; 
let $_saludo = 'Buenos dias '; 

document.write(saludo);
document.write(Saludo);
document.write(_saludo);
document.write(SALUDO);
document.write($_saludo);