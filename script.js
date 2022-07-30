let poke_container = document.querySelector("#poke-container");
let pokemon_count = 150;
let colors = {
    fire: "#FDDFDF",
    grass: "#DEFDE0",
    electric: "#FCF7DE",
    water: "#DEF3FD",
    ground: "#f4e7da",
    rock: "#d5d5d4",
    fairy: "#fceaff",
    poison: "#98d7a5",
    bug: "#f8d5a3",
    dragon: "#97b3e6",
    psychic: "#eaeda1",
    flying: "#F5F5F5",
    fighting: "E6E0D4",
    normal: "#F5F5F5"
}

let main_types = Object.keys(colors)
console.log(main_types)

let fetchPokemons = async () => {
    for(let i = 1; i <= pokemon_count; i++) {
        await getPokemon(i);
    }
}

let getPokemon = async (id) => {
    let url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    let res = await fetch(url);
    let data = await res.json();
    createPokemonCard(data);
}

let createPokemonCard = (pokemon) => {
    let pokemonEl = document.createElement("div");
    pokemonEl.classList.add("pokemon");

    let name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
    let id = pokemon.id.toString().padStart(3, "0");
    // let poke_types = pokemon.poke_types.map(type => type.type.name)
    // let type = main_types.find(type => poke_types.indexOf (type) > -1)
    // let color = colors[type]
    // pokemonEl.style.backgrondColor = color

    let pokemonInnerHTML = `
    <div class="img-container">
        <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png" alt="">
    </div>
    <div class="info">
        <span class="number">#${id}</span>
        <h3 class="name">${name}</h3>
        <small class="type">Type: <span>Grass</span></small>
    </div>
    `

    pokemonEl.innerHTML = pokemonInnerHTML;
    poke_container.appendChild(pokemonEl);

}

fetchPokemons();

// ${pokemon.id}