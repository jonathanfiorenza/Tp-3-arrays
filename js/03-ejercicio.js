/* Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.
random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. 
Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma,
 repitiendo 50 veces esta operacion  */
 

 const sumas = [];

 for (let i = 0; i < 50; i++) {
     //math.random devuelve un numero entre 0 y 1, por eso se multiplica por 6 y se le suma 1    
    //math.floor redondea hacia abajo
    //math.ceil redondea hacia arriba
    //math.round redondea al numero mas cercano
    //math.max devuelve el numero mas grande de una lista de numeros        
   
    const dado1 = Math.ceil(Math.random() * 6) + 1;
    const dado2 = Math.ceil(Math.random() * 6) + 1;
   let suma = dado1 + dado2;
   sumas.push(suma);
 }
sumas.sort((a, b) => a - b); //sort ordena los numeros de menor a mayor
console.log(sumas);

if(sumas){
    let repiticiones = 1; 
    for (i= 0; i < sumas.length; i++) {
        if (sumas[i] === sumas[i + 1]) {
            repiticiones++;
        } else {
            document.writeln(`El numero ${sumas[i]} se repite ${repiticiones} veces <br>`);
            repiticiones = 1;
        }
}
}























