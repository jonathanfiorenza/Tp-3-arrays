/*
 Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo,
  cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

*/

const ciudades = [];

let ciudad = prompt("Ingrese el nombre de una ciudad (Cancelar para finalizar):");
while (ciudad !== null) { //whhile es para repetir mientras se cumpla la condicion 
    ciudades.push(ciudad); //push es para agregar un elemento al final del arreglo
    ciudad = prompt("Ingrese el nombre de una ciudad (Cancelar para finalizar):");
}   
document.writeln("<h3>Ciudades ingresadas:</h3>");
document.writeln("<ul>");
for (let i = 0; i < ciudades.length; i++) {
    document.writeln("<li>" + ciudades[i] + "</li>");
}   
document.writeln("</ul>");

// Mostrar la longitud del arreglo
document.writeln("<p>Longitud del arreglo: " + ciudades.length + "</p>");
