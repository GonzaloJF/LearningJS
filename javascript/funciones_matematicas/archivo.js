//redondea solo si el decimal es 5 o más.
var precio = Math.round(399.54);
document.write('El precio redondeado de 399.54 es: ' , ' ',precio);
document.write('<br>');
//redondea sin importar el decimal que esta delante.
var precio = Math.ceil(299.3);
document.write('El precio redondeado con la funcion ceil es: ', ' ', precio);
document.write('<br>');
//redondear hacia abajo.
var precio = Math.floor(544.9);
document.write('El precio redondeado con la funcion floor es: ', ' ', precio);
document.write('<br>');
//el seno de un angulo.
var seno = Math.sin(45); 
document.write('El seno del angulo de 45 grados es: ', seno);
document.write('<br>');
//calcular el exponencial de un numero.
var expo = Math.exp(2); 
document.write('El exponencial de 2 es: ', expo); 
document.write('<br>');
//calcular el logaritmo de un numero.
var logaritmo = Math.log(4); 
document.write('El logaritmo de 4 es: ', logaritmo);
document.write('<br>'); 
//calculo del valor absoluto. 
var absoluto = Math.abs(-10); 
document.write('El valor absoluto de -10: ', absoluto);
document.write('<br>'); 
//calcular el valor maximo de una secuencia. 
var maximo = Math.max(10,50,100,23,44);
document.write('El valor maximo es: ', maximo);
document.write('<br>');
//calcular el valor minimo de una secuencia.
var minimo = Math.min(10,50,100,23,44);
document.write('El valor minimo es: ', minimo);
document.write('<br>');
//traer a la pantalla un valor random.
var random = Math.random()*10; 
document.write('El valor random en pantalla es: ', random);
document.write('<br>');
//calcular la raiz .
var raiz = Math.sqrt(10); 
document.write('La raiz de 10 es: ', raiz);
document.write('<br>');
//calculo de una exponencial.
var exponente = Math.pow(4,2); 
document.write('La potenica de 4 elevado a 2 es: ', exponente);
document.write('<br>');