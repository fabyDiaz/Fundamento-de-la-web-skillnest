document.getElementById("defincion-boton").addEventListener("click", function() {
   const boton = this;
    boton.remove();
   
});

document.getElementById("login-boton").addEventListener("click",function(){
    const boton = this;
    boton.innerText = "Cerrar Sesión";
})


let botones = document.querySelectorAll(".likes-button");

for (let botonLike  of botones){
     let contador = 0;
        botonLike.addEventListener("click", function() {
        // Buscar el título dentro de la misma tarjeta (pet-card)
        let titulo = botonLike.closest('.pet-card').querySelector('.pet-titulo');
        alert(titulo.textContent + " was liked");
        
        contador += 1;
        botonLike.textContent = contador + " me gusta";
    });
}
