import React from 'react'
import './Card.css'
import { Route } from 'react-router-dom'

const Card = ({ quote }) => {
  return (
    <div className='card-container'>
      <h1 className='quote-section'>{quote}</h1>
      <div className='button-section'>
        <button>Save Quote</button>
        <button>New Quote</button>
      </div>
    </div>
  )
}

export default Card