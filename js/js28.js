// NOTIFICACION API


const boton=document.querySelector("#boton"); // pongo el selector del html en una varible

boton.addEventListener("click", function () {
    Notification.requestPermission()
    .then(function(resultado){
        console.log(`El resultado es ${resultado}`);
    })
    
})

if(Notification.permission == "granted"){
    new Notification ("Nueva notificacion", {
        icon:"img/flor.png",
        body: "Resibiste una nueva notificacion"
    })
}

