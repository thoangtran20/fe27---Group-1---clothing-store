import React from 'react'
import Homepage from '../pages/hompage/Hompage'
import Shop from '../pages/shop/Shop'
import Cart from '../pages/cart/Cart'
import { Navigate, Route, Routes } from 'react-router-dom'
import ProductDetail from '../pages/productCart/ProductDetail'

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="home" />} />
      <Route path="home" element={<Homepage />} />
      <Route path="shop" element={<Shop />} />
      <Route path="shop/:id" element={<ProductDetail />} />
      <Route path="cart" element={<Cart />} />
    </Routes>
  )
}

export default Routers
