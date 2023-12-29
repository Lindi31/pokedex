import React, { useState, useEffect } from 'react';
import { fetchPokemonList } from '../services/pokeapi';
import SearchBar from './SearchBar';

const PokemonList = ({ onPokemonSelect }) => {
  const [pokemonList, setPokemonList] = useState([]);
  const [filteredPokemonList, setFilteredPokemonList] = useState([]);
  const [selectedPokemonUrl, setSelectedPokemonUrl] = useState(null);

  useEffect(() => {
    fetchPokemonList().then(pokemon => {
      setPokemonList(pokemon);
      setFilteredPokemonList(pokemon);
    });
  }, []);

  const handleSearch = (searchTerm) => {
    const filtered = pokemonList.filter(pokemon =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPokemonList(filtered);
  };

  const handlePokemonClick = (url) => {
    setSelectedPokemonUrl(url);
    onPokemonSelect(url);
  };

  return (
    <div>
      <SearchBar  className="pb-5" onSearch={handleSearch} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pb-5">
        {filteredPokemonList.map(pokemon => (
          <div 
            key={pokemon.name} 
            onClick={() => handlePokemonClick(pokemon.url)}
            className={`bg-white rounded-lg shadow-md p-4 hover:shadow-lg cursor-pointer transition duration-300 flex items-center space-x-4 ${selectedPokemonUrl === pokemon.url ? 'bg-blue-100' : ''}`}
          >
            <img src={pokemon.imageUrl} alt={pokemon.name} className="w-12 h-12 object-contain"/>
            <span className="capitalize">{pokemon.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonList;
