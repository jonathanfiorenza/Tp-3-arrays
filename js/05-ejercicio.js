/*
Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. 
A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, 
sólo por minúsculas o por una mezcla de ambas.
*/
const analizarCadena = (cadena) => { //analizarCadena es el nombre de la funcion sireve para analizar una cadena de texto
    if (cadena === cadena.toUpperCase()) { //cadena.toUpperCase() convierte toda la cadena a mayusculas

        return "La cadena está formada sólo por mayúsculas.";   
    } else if (cadena === cadena.toLowerCase()) { //cadena.toLowerCase() convierte toda la cadena a minusculas
        return "La cadena está formada sólo por minúsculas.";
    } else {
        return "La cadena está formada por una mezcla de mayúsculas y minúsculas.";
    }       
};

const cadenaUsuario = prompt("Ingrese una cadena de texto:");
const resultadoAnalisis = analizarCadena(cadenaUsuario);
document.writeln("<p>" + resultadoAnalisis + "</p>");

