import React, { useState, useEffect } from 'react';
import { fetchPokemonDetails } from '../services/pokeapi';
import { motion } from 'framer-motion';
import BorderedText from './BorderedText';

const Pokemon = ({ pokemonUrl }) => {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    fetchPokemonDetails(pokemonUrl).then(data => setDetails(data));
  }, [pokemonUrl]);

  if (!details) {
    return <div className="text-center p-4">Lädt...</div>;
  }

  // Animationsvarianten
  const variants = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 }
  };

  return (
    <motion.div
      key={pokemonUrl} // Wichtig, um die Animation bei Änderungen auszulösen
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ type: "spring", stiffness: 100 }}
      className="max-w-md mx-auto bg-blue-50 w-9/12	h-10/12"
    >
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden my-4">
      <div className="p-4">
        <div className="text-center mb-4"> 
          <img 
            src={details.imageUrl} 
            alt={details.name} 
            className="mx-auto h-60 w-60"
          />
          <h2 className="text-2xl font-semibold text-gray-800 capitalize">{details.name}</h2>
        </div>

        <div className="text-gray-700">
          <div className="mb-2">
            <h3 className="text-lg font-bold py-3"><BorderedText text="Eigenschaften"/></h3>
            <div className=' content-center items-center self-center'>
              <p><strong>Typ:</strong> {details.types.map(type => type.type.name).join(', ')}</p>
              <p><strong>Größe:</strong> {details.height / 10} m</p>
              <p><strong>Gewicht:</strong> {details.weight / 10} kg</p>
              <p><strong>Base Fähigkeiten:</strong> {details.abilities.map(ability => ability.ability.name).join(', ')}</p>
              <p><strong>Base EXP:</strong> {details.base_experience}</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold py-3"><BorderedText text="Stats"/></h3>
            <ul className="list-disc pl-5">
              {details.stats.map(stat => (
                
                <li key={stat.stat.name} className="capitalize">
                  {stat.stat.name}: {stat.base_stat}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
    </motion.div>
  );
};

export default Pokemon;
