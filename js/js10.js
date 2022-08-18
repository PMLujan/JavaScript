//Objetos
let producto = {
    nombreProducto:"Monitor de 20\"",
    precio:"$200",
    diponible:true,
}

//asignar a una variable el valor de una propiedad del objeto

let precioDelProducto= producto.precio;
let tipoDeProducto=producto.nombreProducto;

console.log(tipoDeProducto);
console.log(precioDelProducto);

//NUEVA FORMA DE HACERLO:

//
 let celular={
    marca:"samsung",
    precio:"$25000",
    color:"negro",
 }

 let {marca,color}=celular;// genere dos variables con los nombres y valores de las propiedades del objeto

 console.log(color);
 console.log(marca);