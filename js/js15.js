// funciones

let total=0;

function agregarAcarrito(precio){
    return total += precio;
}
function sumarImpuestos(total){
    return total * 1.15;
}
function sumarEnvio(subTotal){
    return subTotal + 200;
}

total=agregarAcarrito(2000);
total=agregarAcarrito(3000);
total=agregarAcarrito(1000);
total=agregarAcarrito(500);

let subTotal=sumarImpuestos(total);
let totalApagar= sumarEnvio(subTotal);
console.log(total);
console.log(`El total a pagar es:$${Math.round(totalApagar)}`);