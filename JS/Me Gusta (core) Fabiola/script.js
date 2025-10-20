let botones = document.querySelectorAll(".boton-like");

botones.forEach(function(botonLike) {
    let contador = 0;
    botonLike.addEventListener("click", function() {
        // Encuentra la publicación y luego el contador dentro de ella
        let publicacion = botonLike.closest('.publicacion');
        let meGusta = publicacion.querySelector('.contador-likes');
        
        contador += 1;
        meGusta.innerText = contador + " like(s)";
        console.log(contador);
    });
});