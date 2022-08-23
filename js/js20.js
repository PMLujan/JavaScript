// iteradores
//foor loop

// for(let i=0; i<10 ; i++){
//     console.log(i)
// }

// for(let i=0; i<100 ; i++){
//     if(i % 2 === 0){
//         console.log(`Es par ${i}`);
//     }else{
//         console.log(`Es impar ${i}`);
//     }
// }

let carrito=[
    {nombre:" TV LED", precio:"200"},
    {nombre: "celular", precio:"300"},
    {nombre: "tablet", precio:"900"},
    {nombre: "microfono", precio:"800"}
]

// for (let i=0; i<carrito.length;i++){ //va imprimir todo el array
//     console.log(carrito[i])
// }
// for (let i=0; i<carrito.length;i++){// va imprimir solo la propiedad nombre der array
//     console.log(carrito[i].nombre)
// }


// // WHILE LOOP
// let i=0; // indice
// while(i<10){// condicio
//     console.log(i)
//     i++; //incremento
// }

// forEach

carrito.forEach(function(elemento){
    console.log(elemento);            //imprime en consola cada elemento de la matriz
});

// // MAP
carrito.map(function(elemento){
    console.log(elemento)
});
