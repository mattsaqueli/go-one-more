import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  const logo = <img src={require('../GO ONE MORE.png')} alt='Go One More logo'/>

  return (
    <header className='header-container'>
      <Link to='/'>
        <img src={require('../GO ONE MORE.png')} alt='Go One More logo'/>
      </Link>
      <nav className='nav-section'>
      <Link to='/'>
          <button>Home</button>
        </Link>
        <Link to='/favorites'>
          <button>Favorites</button>
        </Link>
        <Link to='/about'>
          <button>About Us</button>
        </Link>
        <Link to='/resources'>
          <button>Resources</button>
        </Link>
      </nav>
    </header>
  )
}

export default Header 