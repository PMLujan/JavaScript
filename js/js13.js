//Arrays o arreglos
// se indican entre []

const numeros=[10,30,50,70,90];
console.table(numeros);

const arreglos= ["Hola",50,"si",true, {Nombre:"juan", apellido:"perez"}, [30,20,10]];
console.table(arreglos);

//como saber cuantos valores tiene un  arreglo (arranca en 1)
console.log(arreglos.length);

//como accecder a un valor del array (arranca en cero)
 console.log(arreglos[0]);

 //existe un metodo para conocer todosd los valores

 arreglos.forEach(function(arreglos){
    console.log(arreglos);
 })

 //modificar arreglos

 numeros.push(20);// se suma en la utima posicion
 numeros.unshift(8);// se suma en la primera posicion

 console.log(numeros);

 numeros.pop();//elimina la ultima posicion
 numeros.shift();//elimina la primera posicion

 numeros.splice(2,1);// elimina el indice que le indicamos y la cuantos desde el para atras

 // rest operator : se utiliza para mantener el array original

//  const nuevoArrray=[...numeros, 80];//va sumar el 80 en el final del array sin modificar el original

  const nuevoArrray=[40,...numeros];// va sumar en la posicion 1 el 40 sin modificar el array

 console.log(nuevoArrray);