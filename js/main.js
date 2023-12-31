const pokemonImage = document.getElementById("js--pokemon-image");
let randomNumber = Math.floor(Math.random() * 250 + 1); // Tussen 0 - en 250





let pokemon = fetch("https://pokeapi.co/api/v2/pokemon/" + randomNumber)
    .then(function (response) {
        return response.json();
    })
    .then(function (realData) {
        pokemonImage.src = realData.sprites.front_default;
    });

const catchButton = document.getElementById("js--catch-button");
const pokemonText = document.getElementById("js--pokemon-text");
let pokemonGamePlayed = false;

catchButton.onclick = function () {
    if (pokemonGamePlayed === false) {
        let catchNumber = Math.floor(Math.random() * 2);
        if (catchNumber === 0) {
            pokemonText.innerText = "Pokemon fled!"
        }
        else {
            pokemonText.innerText = "Pokemon Caught!"
        }
        pokemonGamePlayed = true;
    }
}


const nameText = document.getElementById("js--name"); 
const inputField = document.getElementById("js--input");
inputField.onkeyup = function (event) {
    if (event.keyCode === 13) {
        let name = inputField.value;
        /* Api call naar predictor */
        let age = fetch("https://api.agify.io?name=" + name) 
            .then(function (response) {
                return response.json();
            })
            .then(function (echteData) {
                inputField.style.display = "none";
                nameText.innerText = echteData.age;
            });

    }
}



const badsisterh2 = document.getElementById("js--badsister-h2")
const badsisterp = document.getElementById("js--badsister-p")

let badsister = fetch("https://api.tvmaze.com/search/shows?q=bad%20Sisters%22")

.then(function(response){
    console.log(response);
       return response.json();

    }

)

.then(function(realdata){
    console.log(realdata);
    badsisterh2.innerHTML =  realdata[0].show.name;
    badsisterp.innerHTML = realdata[0].show.summary;

});


