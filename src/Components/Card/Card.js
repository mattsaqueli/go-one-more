import React from 'react'
import './Card.css'
import { Route } from 'react-router-dom'

const Card = ({ quote, displayQuote }) => {
  return (
    <div className='quote-card'>
      <div className='card-container'>
        <h1 className='quote-section'>{quote}</h1>
        <div className='button-section'>
          <button className='fav-btn'>Favorite Quote</button>
          <button onClick={displayQuote}>New Quote</button>
        </div>
      </div>
    </div>
  )
}

export default Card