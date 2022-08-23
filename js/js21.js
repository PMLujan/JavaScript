// THIS

let reservacion={
    nombre:"Juan",
    apellido:"perez",
    reserva: 4000,
    informacion:function(){
        console.log(`El cliente ${this.nombre} entrego de reserva ${this.reserva}`);
    }
}
reservacion.informacion();


//Importante : no utilar arrow function en este tipo de funciones que contienen this porque estaria haciendo referencia a la ventana global windows y arrojaria undefined