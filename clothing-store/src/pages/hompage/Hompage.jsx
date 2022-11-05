import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'
import counterImg from '../../assets/images/counter_skirt.jpeg'
import { motion } from 'framer-motion'
import heroImg from '../../assets/images/shopping_slide_ppt_258355.jpg'
import Helmet from '../../components/helmet/Helmet'
import './Homepage.scss'
import Services from '../services/Services'
import ProductList from '../productList/ProductList'
import products from '../../data/Product'
import Clock from '../../components/UI/Clock'

const Homepage = () => {
  // const [data, setData] = useState(products)
  const [trendingProducts, setTrendingProducts] = useState([])
  const [bestSalesProducts, setBestSalesProducts] = useState([])
  const [shortProducts, setShortProducts] = useState([])
  const [coatProducts, setCoatProducts] = useState([])
  const [popularProducts, setPopularProducts] = useState([])

  const year = new Date().getFullYear()

  useEffect(() => {
    const filterTrendingProducts = products.filter(
      (item) => item.category === 'skirt',
    )

    const filterBestSalesProducts = products.filter(
      (item) => item.category === 'shirt',
    )

    const filterShortProducts = products.filter(
      (item) => item.category === 'short',
    )

    const filterCoatProducts = products.filter(
      (item) => item.category === 'coat',
    )

    const filterPopularProducts = products.filter(
      (item) => item.category === 'jean',
    )
    setTrendingProducts(filterTrendingProducts)
    setBestSalesProducts(filterBestSalesProducts)
    setShortProducts(filterShortProducts)
    setCoatProducts(filterCoatProducts)
    setPopularProducts(filterPopularProducts)
  }, [])

  return (
    <Helmet title={'Home'}>
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <p className="hero__subtitle">Trending product in {year}</p>
                <h2>Make Your Interior More Clothing & Modern </h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book
                </p>
                <motion.button whileTap={{ scale: 1.2 }} className="buy__btn">
                  <Link to="/shop">SHOP NOW</Link>
                </motion.button>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Services />

      <section className="trending__product">
        <Container>
          <Row>
            <Col lg="12">
              <h2 className="section__title">Trending Products</h2>
            </Col>
            <ProductList data={trendingProducts} />
          </Row>
        </Container>
      </section>

      <section className="best__sales">
        <Container>
          <Row>
            <Col lg="12">
              <h2 className="section__title">Best sales</h2>
            </Col>
            <ProductList data={bestSalesProducts} />
          </Row>
        </Container>
      </section>

      <section className="timer__count">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="clock__top-content">
                <h4 className="text-white fs-6 mb-2">Limited Offer</h4>
                <h3 className="text-white fs-5 mb-3">Quality shirt</h3>
              </div>
              <Clock />
              <motion.button whileTap={{ scale: 0.9 }} className="store__btn">
                <Link to="/shop">Visit Store</Link>
              </motion.button>
            </Col>
            <Col lg="6" md="6" className="text-end">
              <img src={counterImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="new__arrivals">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="section__title">New Arrivals</h2>
            </Col>
            <ProductList data={shortProducts} />
            <ProductList data={coatProducts} />
          </Row>
        </Container>
      </section>

      <section className="popular__category">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="section__title">Popular in Category</h2>
            </Col>
            <ProductList data={popularProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Homepage
