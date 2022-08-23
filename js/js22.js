// Objeto constructor o clases

function Productos(nombre,precio,disponibilidad,color,){
           this.nombre=nombre;
           this.precio=precio;
           this.disponibilidad=disponibilidad;             //CONSTRUCTOR
           this.color=color;
}


// CREAR OBJETOS EN BASE AL CONSTRUCTOR


const tabletSamsung= new Productos("Tablet Samsung", "$2000", true, "Negro");// SE CREARON DOS OBJETOS CON LA FUNCION CONSTRUCTORA
const televisorHitachi= new Productos("TV 52pulg","$4000",true,"gris");

console.log(tabletSamsung);
console.log(televisorHitachi);


//EJEMPLO 2

function Reservaciones(Nombre,Apellido,Email,Fecha,Habitacion){
    this.nombre= Nombre;
    this.apellido= Apellido;                                     // CONSTRUCTOR
    this.Email=Email;
    this.Fecha=Fecha;
    this.Habitacion=Habitacion;
}


const cliente223= new Reservaciones("Juan","Fernandez","juanito@pepe.com","10/02/2023",345);
const cliente224= new Reservaciones("Pedro","Garcia","garci@juju.com","23/04/2023",346);

console.log(cliente223);
console.log(cliente224);