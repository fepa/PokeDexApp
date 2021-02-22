let pokemonList = [
  {
    name: 'Bulbasaur',
    height: 2,
    types: ['grass', 'poision']
  },
  {
    name: 'Butterfree',
    height: 1.1,
    types: ['bug', 'flying']
  },
  {
    name: 'Pidgeot',
    height: 0.5,
    types: ['flying', 'normal']
  }
];

// Use a forEach() function instead of the for loop you have to iterate over the Pokémon in your pokemonList array in order to print the details of each one.

function myLoopFunction(pokemon) {
  document.write(pokemon.name + ' is ' + pokemon.height + 'm tall. <br/> <br/>');
}
pokemonList.forEach(myLoopFunction);

// A loop that iterates over each item in pokemonList
for (let i=0; i < pokemonList.length; i++){
  if (pokemonList[i].height === 2) {
    document.write(`${(pokemonList[i].name)} (height: ${pokemonList[i].height}m) - Wow! That is tall! <br/> <br/>`);
  } else if (pokemonList[i].height > 1 && pokemonList[i].height < 2) {
    document.write(`${(pokemonList[i].name)} (height: ${pokemonList[i].height}m) - That is an average size. <br/> <br/>`);
  } else {
    document.write(`${(pokemonList[i].name)} (height: ${pokemonList[i].height}m) - That is short. <br/> <br/>`);
  }
};
