// TRY CATCH
//cuando una linea de codigo da error las siguiente no se ejecutan

const n1=20;
const n3=30;

// console.log (n1);
// console.log(n2);// error no esta definido
// console.log(n3);


//para que se  sigan ejecuten las lineas de codigo siguiente:

console.log (n1);
try {
    console.log(n2); // el codigo que esta dando error
} catch (error) {
    console.log(error);// el error
}
console.log(n3);