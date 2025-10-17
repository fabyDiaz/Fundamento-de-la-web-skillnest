document.getElementById("defincion-boton").addEventListener("click", function() {
   const boton = this;
    boton.remove();
   
});


let botones = document.querySelectorAll(".likes-button");

botones.forEach(function(botonLike) {
    let contador = 0;
   botonLike.addEventListener("click", function() {
        // Buscar el título dentro de la misma tarjeta (pet-card)
        let titulo = botonLike.closest('.pet-card').querySelector('.pet-titulo');
        alert(titulo.textContent + " was liked");
        
        contador += 1;
        botonLike.textContent = contador + " me gusta";
    });
});