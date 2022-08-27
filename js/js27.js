//PROMESE: se utiliza para las api

const autentiicacion= new Promise(function(resolve,reject){
    const autch= true;
    if(autch){
        resolve(`Usuario autentificado`);
    }else{
        reject(`No puede iniciar sesión`);
    }
});

//PARA IMPRIMIR EN CONSOLA:

autentiicacion
         .then(function(resultado){
              console.log(resultado);
          })
          .catch(function(error){
          console.log(error)
          });