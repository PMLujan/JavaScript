// Objetos
let producto = {
    nombreProducto:"Monitor de 20\"",
    precio:"$200",
    diponible:true,
}

console.log(producto);

//acceder a las propiedades del objeto:

console.log(producto.precio);//opcion mas usada

console.log(producto["nombreProducto"]);

//agregar propiedades a los objetos

producto.imagen="imagen.jpg";

//eliminar propiedades de objetos

delete producto.precio;
