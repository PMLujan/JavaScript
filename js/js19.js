// switch:

const metodoDePago= "cheque";

switch (metodoDePago){
    case "tarjeta":
          console.log("Paga con tarjeta");
    break;
    case "efectivo":
          console.log("Paga con efectivo");
    break;
    case "paypal":
          console.log("pago con PayPal");
    break;
    case "bitcoin":
         console.log("paga con bitcoin");
    break;
    case "cheque":
         console.log("paga con cheque");
    break;                       
}