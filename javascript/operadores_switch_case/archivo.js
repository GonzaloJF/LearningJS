/*let valor;
valor = parseInt(prompt("Ingrese el numero entre 1,2,3"));

switch(valor){
    case 1: 
        document.write("se ingreso el valor 1");
        break;
    case 2: 
        document.write("se ingreso el valor 2");
        break;
    case 3: 
        document.write("se ingreso el valor 3");
        break; 

    default:
        document.write('es un numero no valido');
        break;
}
*/

//ejemplo para hacerlo con un string: 

let color; 
color = prompt("ingrese un color entre Rojo, Verde y Azul"); 

switch(color){
    case 'Rojo':
        document.write("El color que se ha elegido es rojo");
        break;
    case 'Verde': 
        document.write("El color que se ha elegido es el verde");
        break; 
    case 'Azul':
        document.write("El color que se ha elegido es el Azul");
        break; 

    default:
        document.write("No se ha elegido un color valido o no ha ingresado un color"); 
        break; 
        
}