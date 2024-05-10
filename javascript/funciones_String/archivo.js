let palabra = 'JavaScript'; 

document.write('La palabra que ocuparemos para el ejemplo es: '+ palabra);
document.write('<br>');

//ver el tamaño del texto: 
document.write('La cantidad de letras que tiene la palabra es de: ', palabra.length);
document.write('<br>');

//ver las cantidades especificas de un texto:
document.write('Las primeras 4 letras son: ', palabra.slice(0,4) );
document.write('<br>');

//ver los caracteres de las primeras 4 posiciones:
document.write('Los primeros 4 caracteres son: ', palabra.substring(0,5));
document.write('<br>');

//Cambiar valores de una variable: 
let saludo = 'Hola a todos'; 
saludo = saludo.replace('Hola','Adios');
document.write(saludo);
document.write('<br>');

//poner todo en mayusculas: 
document.write('En mayusculas: ', palabra.toUpperCase());
document.write('<br>');
//poner todo en minusculas: 
document.write('En minusculas: ', palabra.toLowerCase());
document.write('<br>');

//unir textos: 
let palabra2 = 'Curso de ';
document.write('unir palabras: ', palabra2.concat(palabra));
document.write('<br>');


//acortar espacios entre textos: 
let palabra3 = '      Hola       ';
documnet.write(palabra3);
document.write('<br>');
document.write(palabra3.trimStart());
document.write('<br>');
document.write(palabra3.trimEnd());
document.write('<br>');
document.write(palabra3.trim());
document.write('<br>');

//cortar cantidad de caracteres: 
document.write(palabra.split('Java'));




