/* Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.
random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. 
Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma,
 repitiendo 50 veces esta operacion  */
 

 const dados = Array(11).fill(0); //array dados tiene 11 posiciones que van del 0 al 10 y se llenan con 0
 let resultado;

    for (let i = 0; i < 50; i++) { //bucle for que se repite 50 veces   
        const dado1 = Math.floor(Math.random() * 6) + 1; //Math.random() genera un numero aleatorio entre 0 y 1, se multiplica por 6 para que el rango sea de 0 a 5.9999, Math.floor() redondea hacia abajo y se le suma 1 para que el rango sea de 1 a 6   
        const dado2 = Math.floor(Math.random() * 6) + 1;
        resultado = dado1 + dado2;  //suma de los dos dados 
        console.log(resultado);
        dados[resultado - 2]++; //se resta 2 para que el resultado vaya del 0 al 10 y se incrementa en 1 la posicion correspondiente del array dados
    }   
    console.log(dados);
    document.writeln(`<h3>Resultados de lanzar dos dados 50 veces</h3>`);
    document.writeln(   
    `<table class="table table-striped-columns my-3 border border-dark">`
    );
    document.writeln(`<thead>`);    
    document.writeln(`<tr>`);
    document.writeln(`<th scope="col" class="text-center">Suma de los dados</th>`);
    document.writeln(`<th scope="col" class="text-center">Cantidad de apariciones</th>`);   
    document.writeln(`</tr>`);
    document.writeln(`</thead>`);
    document.writeln(`<tbody>`);    
    for (let i = 0; i < dados.length; i++) { //bucle for que recorre el array dados
        document.writeln(`<tr>`);
        document.writeln(`<td class="text-center">${i + 2}</td>`);  
        document.writeln(`<td class="text-center">${dados[i]}</td>`);
        document.writeln(`</tr>`);
    }       
    document.writeln(`</tbody>`);
    document.writeln(`</table>`);
    