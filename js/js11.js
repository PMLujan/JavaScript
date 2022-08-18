// "use strict" //: de esta manera le indicamos que se use de modo estricto JS

let producto = {
    nombreProducto:"Monitor de 20\"",
    precio:"$200",
    diponible:true,
}

// Object.freeze(producto);// no me va permitir modificarlo, eliminarlo y no se puede agregar

Object.seal(producto);// podemos modificar las propiedades pero no agregar y eliminar;

producto.precio= "$300"; //modifica
// producto.hora="horarios";// no agrega

console.log(producto);