let getPokemon = (pokemon) => {
  fetch(`http://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then(response => response.json())
    .then(body => {
    	let name = (body.name).capitalize();
    	let image = body.sprites.front_default;
    	let id = body.id;
    	let types = body.types;
    	let stats = body.stats;

    	renderPokemon(name, image, id, types, stats);
    });
};

let renderPokemon = (name, image, id, types, stats) => {
	document.getElementById("name").innerHTML = `${name}`;
    document.getElementById("sprite").innerHTML = `<img src="${image}">`;
    document.getElementById("id").innerHTML = `${id}`;
    
    types.forEach(function(type){
    	let typeName = (type.type.name).capitalize();
    	if (types.length > 1) { typeName += "/" };
    	document.getElementById("type").innerText += `${typeName}`
    });
      
    stats.forEach(function(stat){
    	let statName = (stat.stat.name).capitalize();
    	document.getElementById("stats").innerHTML += `<li>${statName}: ${stat.base_stat}</li>`
    });
};

let pokemon = document.getElementById("input");

document.getElementById("find").addEventListener("click",  function(event){
	event.preventDefault();
	getPokemon(`${pokemon.value}`); 
});


String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}
