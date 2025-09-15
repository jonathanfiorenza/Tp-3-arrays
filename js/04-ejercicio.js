//funciones
/*Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una
 cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.*/


 const esParOImpar = (numero) => { //esParOImpar es el nombre de la funcion SIRVE PARA SABER SI UN NUMERO ES PAR O IMPAR
    if (numero % 2 === 0) {
        return "El número " + numero + " es par.";  
    } else {
        return "El número " + numero + " es impar.";
    }   
    };  
    const numeroUsuario = parseInt(prompt("Ingrese un número entero:"));
    const resultado = esParOImpar(numeroUsuario);
    document.writeln("<p>" + resultado + "</p>");
