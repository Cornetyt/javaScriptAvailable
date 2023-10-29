/*
if (condicion logica){
    todo el codigo que quiero ejecutar si se cumple la condicion
}
*/

// Solicitar al usuario una edad, si el usuario es mayor a 16 años deberia votar
// De 16 años hasta los 18 es optativo, luego es obligatorio. y se puede votar hasta los 70 años.

const edad = parseInt(prompt("ingrese su edad"));

if ((edad >= 16 && edad < 18) || edad > 70) {
  alert("A tu edad es optativo votar");
} else {
  if (edad >= 18 && edad <= 70) {
    alert("Usted debería votar");
  } else {
    alert("Uups, debido a tu edad, no podes votar");
  }
}
