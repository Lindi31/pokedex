export const fetchPokemonList = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=900');
  const data = await response.json();
  const pokemonDetails = await Promise.all(
    data.results.map(async (pokemon) => {
      const pokemonResponse = await fetch(pokemon.url);
      const pokemonData = await pokemonResponse.json();

      // Abfrage der Pokémon-Art für den deutschen Namen
      const speciesResponse = await fetch(pokemonData.species.url);
      const speciesData = await speciesResponse.json();
      const germanName = speciesData.names.find(name => name.language.name === 'de').name;

      return {
        name: germanName,
        url: pokemon.url,
        imageUrl: pokemonData.sprites.front_default,
      };
    })
  );
  return pokemonDetails;
};

export const fetchPokemonDetails = async (url) => {
  const response = await fetch(url);
  const data = await response.json();

  // URL für das offizielle Artwork
  const artworkUrl = data.sprites.other['official-artwork'].front_default;

  // Abfrage der Pokémon-Art für den deutschen Namen
  const speciesResponse = await fetch(data.species.url);
  const speciesData = await speciesResponse.json();
  const germanName = speciesData.names.find(name => name.language.name === 'de').name;

  return { ...data, name: germanName, imageUrl: artworkUrl };
};
