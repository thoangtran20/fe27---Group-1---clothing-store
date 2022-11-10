import React, { useState } from 'react'
import { RiSearchLine } from 'react-icons/ri'
import { Col, Container, Row } from 'reactstrap'
import Helmet from '../../components/helmet/Helmet'
import './Shop.scss'
import CommonSection from '../../components/UI/CommonSection'
import products from '../../data/Product'
// import { orderBy } from 'lodash'
import ProductList from '../productList/ProductList'

const Shop = () => {
  const [productsData, setProductsData] = useState(products)

  console.log(productsData)
  // const [sortItem, setSortItem] = useState('select')

  const handleFilter = (e) => {
    const filterValue = e.target.value
    console.log(filterValue)
    if (filterValue === 'all') {
      setProductsData(products)
    }
    if (filterValue === 'skirt') {
      const filteredProducts = products.filter(
        (item) => item.category === 'skirt',
      )
      setProductsData(filteredProducts)
    }
    if (filterValue === 'shirt') {
      const filteredProducts = products.filter(
        (item) => item.category === 'shirt',
      )
      setProductsData(filteredProducts)
    }
    if (filterValue === 'coat') {
      const filteredProducts = products.filter(
        (item) => item.category === 'coat',
      )
      setProductsData(filteredProducts)
    }
    if (filterValue === 'short') {
      const filteredProducts = products.filter(
        (item) => item.category === 'short',
      )
      setProductsData(filteredProducts)
    }
    if (filterValue === 'jean') {
      const filteredProducts = products.filter(
        (item) => item.category === 'jean',
      )
      setProductsData(filteredProducts)
    }
  }

  // const filterProducts = handleFilter()

  const handleSearch = (e) => {
    const searchValue = e.target.value
    const searchProducts = products.filter((item) =>
      item.productName.toLowerCase().includes(searchValue.toLowerCase()),
    )
    setProductsData(searchProducts)
  }

  const handleSort = (e) => {
    const sortValue = e.target.value
    console.log(sortValue)
    if (sortValue === 'no-sort') {
      setProductsData(products)
    }
    if (sortValue === 'asc') {
      const sortedProducts = products.sort((a, b) => a.price - b.price)
      console.log(sortedProducts)
      setProductsData(sortedProducts)
    } else if (sortValue === 'desc') {
      const sortedProducts = products.sort((a, b) => b.price - a.price)
      console.log(sortedProducts)
      setProductsData(sortedProducts)
    }

    if (sortValue === 'nameAZ') {
      const sortedProducts = products.sort((a, b) =>
        a.productName > b.productName ? 1 : -1,
      )
      console.log(sortedProducts)
      setProductsData(sortedProducts)
    }

    if (sortValue === 'nameZA') {
      const sortedProducts = products.sort((a, b) =>
        a.productName > b.productName ? -1 : 1,
      )
      console.log(sortedProducts)
      setProductsData(sortedProducts)
    }
    // sortValue === 'asc'
    //   ? productsData.sort((a, b) => a.price - b.price)
    //   : sortValue === 'desc'
    //   ? productsData.sort((a, b) => b.price - a.price)
    //   : productsData.sort((a, b) => (a.productName > b.productName ? 1 : -1))

    // console.log(sortItem)
  }
  return (
    <Helmet title="Shop">
      <CommonSection title="Products" />

      <section>
        <Container>
          <Row>
            <Col lg="3" md="6">
              <div className="filter__widget">
                <select onChange={handleFilter}>
                  <option value="all">Filter By Category</option>
                  <option value="skirt">Skirt</option>
                  <option value="shirt">Shirt</option>
                  <option value="coat">Coat</option>
                  <option value="short">Short</option>
                  <option value="jean">Jean</option>
                </select>
              </div>
            </Col>
            <Col lg="3" md="6" className="text-end">
              <div className="filter__widget">
                <select onChange={handleSort}>
                  <option value="no-sort">Sort By</option>
                  <option
                    value="asc"
                    id="low"
                    // onChange={(e) => {
                    //   setSortItem(e.target.id)
                    // }}
                  >
                    Ascending
                  </option>
                  <option
                    value="desc"
                    id="high"
                    // onChange={(e) => {
                    //   setSortItem(e.target.id)
                    // }}
                  >
                    Descending
                  </option>
                  <option
                    value="nameAZ"
                    // onChange={(e) => {
                    //   setSortItem(e.target.id)
                    // }}
                  >
                    A - Z
                  </option>
                  <option
                    value="nameZA"
                    // onChange={(e) => {
                    //   setSortItem(e.target.id)
                    // }}
                  >
                    Z - A
                  </option>
                </select>
              </div>
            </Col>

            <Col lg="6" md="12">
              <div className="search__box">
                <input
                  type="text"
                  placeholder="Search....... "
                  className="search__input"
                  onChange={handleSearch}
                />
                <span>
                  <i>
                    <RiSearchLine />
                  </i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>

        <section className='text-center'>
          <Container>
            <Row>
              {productsData.length === 0 ? (
                <h1>No products are found!</h1>
              ) : (
                <ProductList data={productsData} />
              )}
            </Row>
          </Container>
        </section>
      </section>
    </Helmet>
  )
}

export default Shop
