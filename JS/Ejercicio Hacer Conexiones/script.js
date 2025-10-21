let xmark = document.querySelectorAll(".fa-circle-xmark");
let cantidadSolicitudes = document.querySelector("#cantidadSolicitudes");
let check = document.querySelectorAll(".fa-circle-check");
let cantidadConexiones = document.querySelector("#cantidadConexiones")
let contador = 2;
let contConexiones = 500;
xmark.forEach(function(x) {
    x.addEventListener("click", function() {
        let solicitud= x.closest(".solicitudes");
        solicitud.remove();
        contador--;
        cantidadSolicitudes.innerText=`Solicitudes de Conexión (${contador})`;
    });
});


check.forEach(function(c) {
    c.addEventListener("click", function() {
        let solicitud = c.closest(".solicitudes");
        let imagen = solicitud.querySelector("img");
        let nombre= solicitud.querySelector("p");
        solicitud.remove();
        contador--;
        contConexiones++;
        cantidadSolicitudes.innerText = `Solicitudes de Conexión (${contador})`;
        cantidadConexiones.innerText = `Tus Conexiones (${contConexiones})`;
        //outerHTML convierte el elemento a texto HTML
        document.querySelector("#conexionesCard").innerHTML += `<div class="conexiones">
                   ${imagen.outerHTML} 
                  ${nombre.outerHTML}
                </div>`
    });
});


document.getElementById("editarP").addEventListener("click", function(){
    let dato = prompt("Nuevo Nombre");
    document.getElementById("nombreP").innerHTML = dato;
})
