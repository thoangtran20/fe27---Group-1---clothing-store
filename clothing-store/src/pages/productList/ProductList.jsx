import React from 'react'
import ProductCard from '../productCart/ProductCardjsx'

const ProductList = ({ data }) => {
  return (
    <>
      {data?.map((item) => (
        <ProductCard item={item} />
      ))}
    </>
  )
}

export default ProductList
