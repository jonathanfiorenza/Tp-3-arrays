/*
Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular
 su perímetro y mostrarlo por pantalla.

La fórmula del perímetro  es p = 2*(a +b)
ejemplo 
lado A = 24
lado B = 5

resultado: 58

D



*/

const calcularPerimetro = (ladoA, ladoB) => { //calcularPerimetro es el nombre de la funcion SIRVE PARA CALCULAR EL PERIMETRO DE UN RECTANGULO
    return 2 * (ladoA + ladoB); //formula del perimetro
}
const ladoA = parseFloat(prompt("Ingrese el valor del lado A del rectángulo:")); //parseFloat convierte el valor ingresado a un numero con decimales
const ladoB = parseFloat(prompt("Ingrese el valor del lado B del rectángulo:"));
const perimetro = calcularPerimetro(ladoA, ladoB);
document.writeln(ladoA)
document.writeln("<p>El perímetro del rectángulo es: " + perimetro + "</p>");   


