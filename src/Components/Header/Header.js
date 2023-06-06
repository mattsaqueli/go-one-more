import React from 'react'
import './Header.css'
import { Route, Link } from 'react-router-dom'

const Header = () => {
  const logo = <img src={require('../GO ONE MORE.png')} alt='Go One More logo'/>

  return (
    <header className='header-container'>
      <Link to='/'>
        <img src={require('../GO ONE MORE.png')} alt='Go One More logo'/>
      </Link>
      <nav className='nav-section'>
        <button>Home</button>
        <button>Favorites</button>
        <button>About Us</button>
        <button>Resources</button>
      </nav>
    </header>
  )
}

export default Header 