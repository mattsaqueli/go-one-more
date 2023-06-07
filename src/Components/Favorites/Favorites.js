import React from 'react';
import './Favorites.css'

const Favorites = ({ favorites }) => {
  const favoriteQuotes = favorites.map((favorite, index) => (
    <p key={index}>{favorite}</p>
  ));

  return (
    
  <div className='favorites-container'>
    {!favorites.length && <h2>No quotes have been favorited...yet.</h2>}
    {favoriteQuotes}
    </div>
  )
};

export default Favorites;
