//arrow function

const compra= function(precio1, percio2){
    return precio1 + percio2
};                                           //sin arrow

const totalApagar=compra(800,6000);
console.log(totalApagar);


const venta= (precio3,precio4) => precio3 + precio4; // con arrow

const totalVenta=venta(9000,7000);
console.log(totalVenta);

const pagosOnline={
      visa: (pagoTarjeta,PagoMD) => pagoTarjeta + PagoMD,  //con arrow
      mastercad:(ptm,pml) => ptm + pml , // con arrow
    }
const cierre =pagosOnline.visa(30000,50000) + pagosOnline.mastercad(90000,800000);

console.log(cierre);
