import React from 'react'
import './Header.scss'

import logo from './../../assets/logo.png'

function Header(props) {
  return (
    <header className="Header">
      <div className="wrapper">
        <div className="logo">
          <img src={logo} alt="ClothingStore Logo" />
        </div>
      </div>
    </header>
  )
}

export default Header
