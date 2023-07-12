import React, { useState } from 'react';

function SearchForm({ onSearch }) {
  const [ingredient, setIngredient] = useState('');
  const [country, setCountry] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ ingredient, country });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ingredient"
        value={ingredient}
        onChange={(e) => setIngredient(e.target.value)}
      />
      <input
        type="text"
        placeholder="Country"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchForm;
