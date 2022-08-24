//PROTOTYPES

function persona(nombre,edad,escuela,twiter){
    this.nombre=nombre;
    this.edad=edad;
    this.escuela=escuela;
    this.twiter=twiter;
};
const pedro = new persona("pedro",34,"san pedro","pepitopp");

console.log(pedro);

persona.prototype.saludar= function(){
    return `Hola ${this.nombre} como estas?`
};
console.log(pedro.saludar());

function alumnos(nombre,edad,aula){    //CONSTRUCTORA
    this.nombre=nombre;
    this.edad=edad;
    this.aula=aula;
};

const alumno01= new alumnos("juan",25,234);  //CREANDO ONBEJTOS CONSTRUCTORA
const alumno02= new alumnos("sofia",20,235);
const alumno03= new alumnos("fabian",23,236);

console.log(alumno01);
console.log(alumno02);
console.log(alumno03);

alumnos.prototype.saludar= function(){
    return `Bienvenido al añolectivo 2022 ${this.nombre}`   //CREANDO PROTOTYPE A CONST.
};

console.log(alumno01.saludar());
console.log(alumno02.saludar());
console.log(alumno03.saludar());