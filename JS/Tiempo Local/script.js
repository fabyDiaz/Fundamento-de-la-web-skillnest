window.addEventListener("load", function () {
  this.alert("Cargando Reporte del Clima");
});

let ciudad = document.querySelectorAll(".enlace-nav");

ciudad.forEach((c) => {
  c.addEventListener("click", function () {
    document.getElementById("nombre-ciudad").textContent = c.innerText;
    mostrarImagenAleatoria();
    temperaturaAleatoria();
  });
});

btnCookies = document.querySelector(".boton-aceptar");
avisoCookies = document.querySelector(".pie-pagina");

btnCookies.addEventListener("click", function () {
  avisoCookies.style.display = "none";
});

const imagenes = [
  "img/nube.png",
  "img/lluvia.png",
  "img/trueno.png",
  "img/dia-nublado.png",
  "img/dom.png",
];

let imgClima = document.querySelectorAll(".icono-clima img");

function mostrarImagenAleatoria() {
  imgClima.forEach((imgElement) => {
    const indiceAleatorio = Math.floor(Math.random() * imagenes.length);
    const imagenSeleccionada = imagenes[indiceAleatorio];
    imgElement.src = imagenSeleccionada;
  });
}

selectTemp = document.getElementById("selectT");


let tempMin = document.querySelectorAll(".tempMin");
let tempMax = document.querySelectorAll(".tempMax");

function temperaturaAleatoria() {
  tempMin.forEach((t) => {
    const numAleatorio = Math.floor(Math.random() * (14 - 1 + 1)) + 1;
    cambiarTemperatura(numAleatorio,t);
  
  });
  tempMax.forEach((t) => {
    const numAleatorio = Math.floor(Math.random() * (30 - 14 + 1)) + 14;
     cambiarTemperatura(numAleatorio, t);
  });
}


function cambiarTemperatura(num,t) {
     if(selectTemp.value == 1){
         t.textContent = num+"°C";
    }else{
        const res = Math.round(num * (9 / 5) + 32)
        t.textContent = res +"°F" ;
    }
    selectTemp.addEventListener("change", function () {
      const valor = this.value;
      console.log("El nuevo valor seleccionado es: " + valor);

      if (valor == 1) {
        t.textContent =  num+"°C";
      } else {
        const res = Math.round(num * (9 / 5) + 32)
        t.textContent =  res +"°F" ;
      }
    });
  }


