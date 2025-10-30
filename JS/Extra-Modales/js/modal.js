async function abrirModal(card){

   //console.dir(card.children[1].innerText);
   let name = card.children[1].innerText.toLowerCase();
   let info = await getByURL("https://pokeapi.co/api/v2/pokemon/"+name);

   document.getElementById("modal-content").innerHTML = `
   <img src="${info.sprites.front_default}" alt="imagen del pokemon">
        <div id="modal-text">
            <h2>${info.name.toUpperCase()}</h2>
            <h4>Types:</h4>
              <ul>
                ${info.types.map((type)=> `<li>${type.type.name}</li>`).join("")}
            </ul>
            <h4>States:</h4>
            <ul>
                ${info.stats.map((stat)=> `<li><b>${stat.stat.name}:</b> ${stat.base_stat}</li>`).join("")}
            </ul>
        </div>
        <span onclick="cerrarModal()">X</span>
   `

    document.getElementById("modal").style.display = "flex";
}

function cerrarModal(){
    document.getElementById("modal").style.display = "none";
}