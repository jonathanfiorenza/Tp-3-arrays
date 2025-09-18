/*Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.
 */

const multiplicacion= []; 
const numero = parseInt(prompt(`Ingrese un numero`));
let resultado;

for (let i = 1; i <= 10; i++) {
  resultado = numero * i;
  console.log(resultado);
  multiplicacion.push(resultado);
}
document.writeln(`<h3>Tabla de multiplicar del ${numero}</h3>`);
document.writeln(
  `<table class="table table-striped-columns my-3 border border-dark">`
);
document.writeln(`<thead>`);
document.writeln(`<tr>`);
document.writeln(`<th scope="col" class="text-center">Multiplos</th>`);
document.writeln(`<th scope="col" class="text-center">Resultados</th>`);
document.writeln(`</tr>`);
document.writeln(`</thead>`);
document.writeln(`<tbody>`);
for (let i = 1; i <= 10; i++) {
  document.writeln(`<tr>`);
  document.writeln(`<td class="text-center">${i}</td>`);
  document.writeln(`<td class="text-center">${multiplicacion[i-1]}</td>`);
  document.writeln(`</tr>`);
}
document.writeln(`</tbody>`);
document.writeln(`</table>`);