/*hola a todos
soy un comentario
en multiples lineas*/

//hola soy un comentario de una unica linea//

//declarar una variable ( var[ya no se usa], let, const)

let anioActual = 2023;
const url = "https://universe.rollingcodeschool.com/";

//mostrar un mensaje

console.log(anioActual);
console.log("anioActual");
console.log("Año actual: " + anioActual + " hola mundo");

//modificar el valor de una variable

anioActual = 2023 + 1;
console.log("Año actual: " + anioActual);
console.log(url);

document.write("<h1 class='text-danger'>Hola mundo " + anioActual + "</h1>");
document.write("hola mundito </br>");
document.write("hola mundito");

//ventanas emergentes
alert("esto es un ejemplo de una alertita");

//solicitar un número al usuario y luego sumarle 5, por ultimo mostrar el resultado de la suma

const numeroSolicitado = parseInt(prompt("ingrese un numero del 1 al 100"));
console.log(numeroSolicitado);

console.log("resultado: " + numeroSolicitado + 5);
console.log(numeroSolicitado + 5);
