import React, { useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { RiShoppingBagLine, RiHeartLine, RiMenuLine } from 'react-icons/ri'
import { Container, Row } from 'reactstrap'
import { motion } from 'framer-motion'
import logo from '../../assets/images/shop_logo.jpg'
import userIcon from '../../assets/images/user-icon.png'
import './Header.scss'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

const Header = () => {
  const nav__links = [
    {
      path: 'home',
      display: 'Home',
    },
    {
      path: 'shop',
      display: 'Shop',
    },
    {
      path: 'cart',
      display: 'Cart',
    },
  ]

  const headerRef = useRef(null)
  const menuRef = useRef(null)

  const totalQuantity = useSelector(state => state.cart.totalQuantity)

  const stickyHeaderFunction = () => {
    window.addEventListener('scroll', () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add('sticky__header')
      } else {
        headerRef.current.classList.remove('sticky__header')
      }
    })
  }

  const menuToggle = () => {
    menuRef.current.classList.toggle('active__menu')
  }

  useEffect(() => {
    stickyHeaderFunction()

    return () => window.removeEventListener('scroll', stickyHeaderFunction)
  })
  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper">
            <div className="logo">
              <img src={logo} alt="" />
              <div>
                <h1>ClothingStore</h1>
              </div>
            </div>
            <div className="navigation" ref={menuRef} onClick={menuToggle}>
              <ul className="menu">
                {nav__links.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? 'nav__active' : ''
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav__icons">
              <span className="fav__icon">
                <i>
                  <RiHeartLine />
                </i>
                <span className="badge">1</span>
              </span>
              <span className="cart__icon">
                <i>
                  <RiShoppingBagLine />
                </i>
                <span className="badge">{totalQuantity}</span>
              </span>
              <span>
                <motion.img whileTap={{ scale: 1.2 }} src={userIcon} alt="" />
              </span>

              <div className="mobile__menu">
                <span onClick={menuToggle}>
                  <i>
                    <RiMenuLine />
                  </i>
                </span>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  )
}

export default Header
