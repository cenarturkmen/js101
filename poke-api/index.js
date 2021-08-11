// api url
const api_url = 
      "https://pokeapi.co/api/v2/pokemon?limit=100&offset=200";
  
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
    let li = document.createElement("li");
    li.innerText = name;
    responseUl.appendChild(li);
}
function createImg(url){
    responseUl = document.getElementById("responseUl");
    let img = document.createElement("img");
    img.src = url;
    responseUl.appendChild(img);
}

function addSkill(skill){
    responseUl = document.getElementById("responseUl");
    let p = document.createElement("p");
    p.innerText = skill;
    responseUl.appendChild(p);
}

async function main(){
    var pokemons = await getapi(api_url);
    console.log(pokemons);
    for(i=0; i<pokemons.results.length; i++){
        createLi(pokemons.results[i].name);
        let pokemonInfo = await getapi(pokemons.results[i].url);
        createImg(pokemonInfo.sprites.front_default);
        for(j=0; j<pokemonInfo.abilities.length; j++){
            addSkill(pokemonInfo.abilities[j].ability.name)
        }
    }
}
main();