//este es un comentario de una linea 

/* este es un multilinea
si es 
*/
/*
alert ("Estoy vivo!!!!");

console.log("este es un mensaje para la consola");

var nombre = "Susana Carolina";
var apellidos = "Barajas Gómez";
var edad = "27";

console.log(nombre,apellidos,edad);

alert("Mi nombre es: " + nombre);
console.log("Mis apellidos son: " + apellidos);


//otro ejemplo de mostrar variables en consola 
var numero1 = 5;
var numero2 = 7;
var resultado = numero1 + numero2;

console.log ("El resultado de la suma es: " + resultado);

//sintaxis basica de una funcion

function nombrefuncion(parametros){}
*/


//Declaración de función 

/*
function Saludar (){
  alert ("Hola a todos");
}

Saludar();



//Expresión de una función 

var Cantar = function(){
  alert ("A mi me gusta cantar");
}
Cantar ();

//Función sin parametros
function sumar (){
  var numero1 = 5;
  var numero2 = 6;
  var suma = numero1 + numero2;
  alert ("La suma función sin parámetros es: " + suma);
}
sumar();


//Función con parametros 
function restar (num1, num2, resta){
  var num1 = 6;
  var num2 = 8;
  var resta = num1 - num2;
  alert ("La resta de la función con parametros es: " + resta);

}

restar();


//Otra función con parametros
function cuadrado (cuadrado){
  var rescuadrado = cuadrado * cuadrado;
  alert ("El cuadrado del número es: " + rescuadrado);
}

cuadrado(4);



//Función Prompter
function Prompter (){
  var respuesta = prompt ("Buenos días, ¿Cuál es tu nombre?" );
  alert ("Es un gusto saludarte " + respuesta);
}

Prompter ()
*/

function confirmacion (){
  var pregunta = confirm ("Deseas visitar Google.com y buscar fotos de perritos?")
  if (pregunta){
    alert("Te enviare")
    window.location = "https://www.google.com.mx/?hl=es-419"
  }
  else {
    alert ("No hay problema, nos vemos luego")
  }
}

//get elementByID 

function cambiarColor (nuevoColor){
  var elem = document.getElementById ("parrafo");
  elem.style.color = nuevoColor;
}


function Accion (Tipo){
  var elem = document.getElementById ("DivBotones");
  if (Tipo == "Ocultar")
  elem.style.display = 'none';
  else
  elem.style.display = '';
}

