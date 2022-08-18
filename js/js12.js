// unir objetos con spead operator
//OBJETO 1
let producto = {                         
    nombreProducto:"Monitor de 20\"",
    precio:"$200",
    diponible:true,
}
//OBJETO 2
let medidas={
    alto :"12cm",
    ancho:"20cm",
    profundidad:"13cm",
}

// como los unimos

//nuev variable
let nuevoProducto= {...producto, ...medidas};

console.log(producto);//para ver que no se modifico
console.log(nuevoProducto);// para ver que se creo