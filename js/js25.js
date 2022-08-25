//HERENCI POO

class electrodomesticos{
    constructor(nombre,precio){
        this.nombre=nombre;
        this.precio=precio;
    }
    saludoFinal(){
        return `Gracias, usted compro ${this.nombre} por un valor de ${this.precio}`;
    }
};

class libros extends electrodomesticos{
    constructor(nombre,precio,sku){
        super(nombre,precio);
        this.sku=sku;
    }
    saludoFinal(){
        return `${super.saludoFinal()}, su codigo de retiro es ${this.sku}`;
    }
};

const electro1= new electrodomesticos("Celular samsung", 36000);
const electro2= new electrodomesticos("Secarropas", 39000);
const libro1= new libros("Cincuenta Sobras", 6000, 558585595959);
const libro2= new libros("Rampunsel", 4000, 58775758585959);

console.log(electro1);
console.log(electro2);
console.log(libro1);
console.log(libro2);
console.log(electro1.saludoFinal());
console.log(electro2.saludoFinal());
console.log(libro1.saludoFinal());
console.log(libro2.saludoFinal());