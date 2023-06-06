import React from 'react'
import './Header.css'
import { Route } from 'react-router-dom'

const Header = () => {

  return (
    <div>
      <button>Home</button>
      <button>Favorites</button>
      <button>About Us</button>
      <button>Resources</button>
    </div>
  )
}

export default Header 