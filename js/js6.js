//Orden de las operaciones

let ejemplos;

ejemplos = 20 + 30 * 2;// primero resuelve la multiplicacion
ejemplos = (20 + 30) * 2;// primero resuelve el parentecis

//ejemplo 20% desc en el carrito:
carrito=( 1200 + 3000 + 500);
ejemplos = carrito * .2;
precioDescuento= carrito - ejemplos;


console.log(ejemplos);
console.log(precioDescuento);
// console.log(carrito);


//INCREMENTOS:
// ++ incrementa de a 1
let puntaje= 0;
puntaje++;//primero mantiene el numero y despues lo incrementa
++puntaje;//lo incrementa y devuelve el numero mas uno
// resta -1
puntaje--;//primero muestra el numero y despues lo 
--puntaje;//primero descuenta y despues envia el numero

puntaje += 10;// va a sumar de 10 en 10 o el valor del numero que pongamos
puntaje += 10;

console.log(puntaje);