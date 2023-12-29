import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search for Pokémon..."
      value={searchTerm}
      onChange={handleChange}
      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-purple-500 px-3"
    />
  );
};

export default SearchBar;
