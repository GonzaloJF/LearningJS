/*
Esto es una comparacion de datos
let a, b; 
a = 30;
b = 2;
document.write(a == b)
*/

//ahora lo que intentaremos es mandar una interrogante de dos variables: 

/*let continente, edad; 
continente = prompt('Ingrese su continente ...'); 
edad = prompt('Ingrese su edad ...');

if(continente == 'America' && edad >= 18){
    document.write('Eres un adulto americano');
}else{
    document.write('O no eres americano o no tienes más de 18 años');
}
*/

let dia, mes, año;

dia = prompt("Ingrese el día ...");
mes = prompt("Ingrese el mes ...");
año = prompt("Ingrese el año ...");

if(mes == 1 || mes == 2 || mes == 3){
    document.write("Está dentro del primer timestre!")
} else if(mes == 4 || mes == 5 || mes == 6){
    document.write("Está dentro del segundo trimestre");
} else if (mes == 7 || mes == 8 || mes == 9){
    document.write("Está dentro del tercer trimestre");
} else if (mes == 10 || mes == 11 || mes == 12){
    document.write("Está dentro del cuarto trimestre");
}