let nombre, edad; 
nombre = prompt('Ingrese Su Nombre ...');
edad = prompt('Ingrese Su Edad ...'); 
edad = parseInt(edad);

if (edad >= 18) {
    document.write('Bienvenido! ', nombre,  '  Eres mayor de 18.');
}else{
    if(edad < 18){
        document.write('No puedes entrar ya que eres menor de 18 años');
    }else{
        document.write('No has ingresado datos');
    }
}