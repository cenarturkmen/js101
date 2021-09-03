// api url
const api_url = 
      "https://pokeapi.co/api/v2/pokemon?limit=100&offset=200";

responseUl = document.getElementById("responseUl");
// Defining async function
async function getapi(url) {
    // Storing response
    const response = await fetch(url);
    // Storing data in form of JSON
    let data = await response.json();
        
    return data;
}

function createLi(name){
    responseUl = document.getElementById("responseUl");
    let h2 = document.createElement("h2");
    h2.innerText = name;
    return h2;
}
function createImg(url){
    responseUl = document.getElementById("responseUl");
    let img = document.createElement("img");
    img.src = url;
    return img;
}

function addSkill(skill){
    responseUl = document.getElementById("responseUl");
    let p = document.createElement("p");
    p.innerText = skill;
    return p
}

async function main(){
    var pokemons = await getapi(api_url);

    console.log(pokemons);

    for(i=0; i<pokemons.results.length; i++){
        let div = document.createElement("div");
        div.appendChild(createLi(pokemons.results[i].name));
        let pokemonInfo = await getapi(pokemons.results[i].url);
        console.log(pokemonInfo)
        div.appendChild(createImg(pokemonInfo.sprites.front_default));
        for(j=0; j<pokemonInfo.abilities.length; j++){
            div.appendChild(addSkill(pokemonInfo.abilities[j].ability.name))
        }
        responseUl.appendChild(div);
    }
}   
main();