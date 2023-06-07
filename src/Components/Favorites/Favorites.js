import React from 'react';
import './Favorites.css'

const Favorites = ({ favorites }) => {
  const favoriteQuotes = favorites.map((favorite, index) => (
    <p key={index}>{favorite}</p>
  ));

  return (
  <div className='favorites-container'>{favoriteQuotes}</div>
  )
};

export default Favorites;
