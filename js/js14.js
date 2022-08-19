// Metodos de arrays

const carrito = [
    {nombre:"Monito ", precio:400},
    {nombre:"Celular", precio:700},
    {nombre:"Tablet", precio:800},
    {nombre:"Cocina ", precio:900},
    {nombre:"Plancha", precio:400},
];
console.log(carrito);

//metodo ForEach NO FUNCIONA CON OBJETOS

// const meses=["enero", "febrero", "marzo",]

// meses.forEach(function(mes){
//     if(mes === "enero"){
//         console.log("esta enero")
//     }
//     if( mes == "diciembre"){
//         console.log("esta diciembre");
//     }
// });

// INCLUDES
//  let  busqueda= meses.includes("diciembre");
//  let busqueda= meses.includes("enero");
//  console.log(busqueda);

//SOME :es el mejor para iterar en un array con objetos

// let resultado = carrito.some(function(producto){
//     return producto.nombre === "Celular"
// });

// console.log(resultado)

//REDUCE
//    const resultado= carrito.reduce(function(total,producto){
//                     return total + producto.precio
//                     }, 0);

//FILTER
//     const resultado= carrito.filter(function(producto){
//                       return producto.precio > 400
//                       });