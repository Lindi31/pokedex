import React, { useState } from 'react';
import PokemonList from './components/PokemonList';
import Pokemon from './components/Pokemon';
import './App.css';

const App = () => {
  const [selectedPokemonUrl, setSelectedPokemonUrl] = useState(null);

  return (
    <div className='bg-blue-50 item-center'><h1 className="text-2xl font-bold text-center text-purple-700 mb-6 pb-2 fixed bg-blue-100 w-full top-0 z-10">PokéDex</h1>
    <div className="flex-container bg-blue-50 pt-10">
      <div className="left-panel">
        {selectedPokemonUrl && <Pokemon pokemonUrl={selectedPokemonUrl} />}
      </div>
      <div className="right-panel">
        <PokemonList onPokemonSelect={setSelectedPokemonUrl} />
      </div>
    </div></div>
  );
};

export default App;
