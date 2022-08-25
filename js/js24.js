// CLASES

class Producto{
    constructor(nombre,precio){
        this.nombre=nombre;
        this.precio=precio;
    }
    felicitar(){
        return `Gracias, su compra fue ${this.nombre}`
    }
    precioProducto(){
        return `El precio de ${this.nombre} es $${this.precio}`
    }
};

const producto1= new Producto("TV 32", 2400);
const producto2= new Producto("Tablet", 400);
const producto3= new Producto("celular", 1400);

console.log(producto1);
console.log(producto2);
console.log(producto3);
console.log(producto1.felicitar());
console.log(producto2.felicitar());
console.log(producto3.felicitar());
console.log(producto1.precioProducto());
console.log(producto2.precioProducto());
console.log(producto3.precioProducto());