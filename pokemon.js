fetchData();

async function fetchData(){

    try{
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const pokeApi = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
        const response = await fetch(pokeApi)

        if(!response.ok){
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();

        // get pokemon image, set image variable to 
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";

        // get pokedex number
        const pokedexNumber = data.id;
        const pokeNum = document.getElementById("pokedexNumber");

        pokeNum.textContent = pokedexNumber;
        pokeNum.style.display = "block";
    }
    catch(error){
        console.error(error)
    }
}