// Metodos de propiedad

const reproductor={
      reproducir: function(id) {
                  console.log(`Reproducir cancion : ${id}`);
      },
       pausar: function() {
              console.log(`Pausando..`);
      },
      crearLista: function(id) {
                  console.log(`Creando lista de reproduccion: ${id}`);
      },
      reproducirLista: function(id){
                    console.log(`Reproduciendo lista: ${id}`);
      },
}
reproductor.reproducir(3480);
reproductor.pausar();
reproductor.crearLista(3456);
reproductor.reproducirLista(5768);