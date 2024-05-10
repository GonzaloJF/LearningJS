//declaracion de un array: 
let numeros = [10,80,783,2342,33,-3];
//mostrar todos los elementos: 
document.write('Los elementos del arreglo es: ', numeros);
document.write('<br>');
document.write('Primer elemento del arreglo es: ', numeros[0]);
document.write('<br>');
numero[0] = 14;
document.write('Elementos: ', numero);
document.write('<br>------------------------');

let frutas = ['manzana','peras','naranjas','mangos'];
document.write('<br>');
document.write('Frutas: ', frutas);
document.write('<br>');

//Metodos para los arrays.

//ver cantidad de elementos: 
document.write('Cantidad de elementos del array de frutas es: ', frutas.length);
document.write('<br>');

//ver el ultimo elementos del arreglo es: 
document.write('El ultimo elemento del arreglo: ', numeros[numeros.length-1]);
document.write('<br>');

//arrays en tipos de texto: 
document.write('En string: ', numeros.toString());
document.write('<br>');

//unir tipos de arrays: 
let letras = ['a','b','c','d'];
let numeros2 = [1,2,3,4];
document.write('Alfanumerico: ', letras.concat(numeros2));
document.write('<br>');

//borrar el ultimo elemento: 
numeros.pop();
document.write(numeros);
document.write('<br>');

//agregar un elemento al final: 
numeros.push(500); 
document.write(numeros);
document.write('<br>');

//eliminar el primer elemento: 
numeros.shift();
document.write('array sin el primer elemento: ', numeros);
document.write('<br>');

//insertar elemento al comienzo :
numeros.unshift(1000);
document.write('elemento nuevo al inicio: ', numeros);
document.write('<br>');

//eliminar un elemento a partir de un punto: 
numeros.splice(2,3);
document.write('Eliminar los elementos en las posiciones 2 y 3: ', numeros);
document.write('<br>');

//copiar elementos de un array: 
let cantidades = [500,100,300,200,400];
let copia = cantidades.slice(1,4);
document.write('Array copia: ', copia);
document.write('<br>');

//organizar arrays en orden alfabetico: 
let objetos = ['carros','botellas','planeta','zorro'];
document.write(objetos.sort());
document.write('<br>');

//organizar arrays en modo reversa: 
document.write(objeto.reverse());




