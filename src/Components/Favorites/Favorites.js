import React from 'react';
import './Favorites.css'
import PropTypes from 'prop-types'

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
}

Favorites.propTypes = {
  favorites: PropTypes.array
};

export default Favorites;
