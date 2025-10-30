
//let pokemon = fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
//console.log(pokemon);
// Funcion para fetcheo de datos por url

let respuesta = document.querySelector("#respuesta")
async function getByURL(url) {
    let response = await fetch(url);
    let data = await response.json();
    return data;
}

window.onload = async ()=>{
    let types = await getByURL("https://pokeapi.co/api/v2/type/");
    let colors = await getByURL("https://pokeapi.co/api/v2/pokemon-color/")

    let selectType = document.getElementById("type");
    let selectColor = document.getElementById("color");

    console.log(types);
    console.log(colors);

    for(const type of types.results){
        selectType.innerHTML += "<option>" + type.name + "</option>";
    }

    for(const color of colors.results){
        selectColor.innerHTML += "<option>" + color.name + "</option>";
    }
};
// Funcion que nos vuelva al DOM un pokemon aleatorio
// "https://pokeapi.co/api/v2/pokemon/" + id
document.querySelector("#poke").onclick = async() => {
    let randomId = Math.floor(Math.random()*887);
    let pokemon = await getByURL("https://pokeapi.co/api/v2/pokemon/"+ randomId);
    console.log(pokemon);

    respuesta.innerHTML = `
        <div class="pokeInfo">
            <img src="${pokemon.sprites.front_default}">
            <h3>${pokemon.name.toUpperCase()}</h3>
        </div>
    `
}

// Funcion que nos devuelva unos 10 pokemons de acuerdo a su tipo
// "https://pokeapi.co/api/v2/type/" + tipo

document.querySelector("#type").onchange = async (event) =>{
    let value = event.target.value;

    let pokemons = await getByURL("https://pokeapi.co/api/v2/type/" + value);
    let arrayPokemon = pokemons.pokemon.slice(0,10);

    respuesta.innerHTML = "";

    for(const poke of arrayPokemon){
        let pokeInfo = await getByURL(poke.pokemon.url);

        console.log(pokeInfo);
         respuesta.innerHTML += `
        <div class=""pokeInfo>
            <img src="${pokeInfo.sprites.front_default}">
            <h3>${pokeInfo.name.toUpperCase()}</h3>
        </div>
    `
    }
}

// Funcion que nos devuelva unos 10 pokemons de acuerdo a su color
// "https://pokeapi.co/api/v2/pokemon-color/" + color
document.querySelector("#color").onchange = async (event) => {
  let value = event.target.value;

  let pokemons = await getByURL(
    "https://pokeapi.co/api/v2/pokemon-color/" + value
  );
  let arrayPokemons = pokemons.pokemon_species.slice(0, 10);

  respuesta.innerHTML = "";

  for (const poke of arrayPokemons) {
    let pokeInfo = await getByURL(
      "https://pokeapi.co/api/v2/pokemon/" + poke.name
    );

    respuesta.innerHTML += `
        <div class="pokeInfo">
            <img src="${pokeInfo.sprites.front_default}">
            <h3>${pokeInfo.name.toUpperCase()}</h3>
        </div>
        `;
  }
};


// Funcion que nos devuelva una berry (frutita) aleatoria
// "https://pokeapi.co/api/v2/berry/" + id
// id <= 65

document.querySelector("#berry").onclick = async (e) => {
  let randomId = Math.floor(Math.random() * 65);

  let berryURL = await getByURL("https://pokeapi.co/api/v2/berry/" + randomId);
  let berry = await getByURL(berryURL.item.url);

  respuesta.innerHTML = "";

  respuesta.innerHTML =
    '<div id="oneBerry"><img src="' +
    berry.sprites.default +
    '"><h3>¡' +
    berry.name.toUpperCase() +
    "!</h3></div>";
};

// async: la función es asincrona
// await

