import React, { useEffect } from 'react'
import { Col, Container, Row } from 'reactstrap'
import Helmet from '../../components/helmet/Helmet'
import CommonSection from '../../components/UI/CommonSection'
import { motion } from 'framer-motion'
import './Cart.scss'
import { RiDeleteBinLine } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '../../redux/slice/cartSlice'
import { Link } from 'react-router-dom'

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItem)

  const cart = useSelector((state) => state.cart)

  const dispatch = useDispatch()

  // const totalAmount = useSelector((state) => state.cart.totalAmount)

  const handleClearCart = () => {
    dispatch(cartActions.clearCart())
  }

  useEffect(() => {
    dispatch(cartActions.getTotal())
  }, [cart])

  return (
    <Helmet title={'Cart'}>
      <CommonSection title="Shopping Cart" />
      <section>
        <Container>
          <Row>
            <Col lg="12">
              {cartItems.length === 0 ? (
                <h2 className="fs-4 text-center">No item added to the cart</h2>
              ) : (
                <table className="table bordered">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Title</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                      <th>Delete</th>
                    </tr>
                  </thead>

                  <tbody>
                    {cartItems?.map((item, index) => (
                      <Tr item={item} key={index} />
                    ))}
                  </tbody>
                </table>
              )}
            </Col>

            <Col lg="12" className=" ">
              <div className="cart__summary">
                <button
                  className="clear__btn"
                  onClick={() => handleClearCart()}
                >
                  Clear Cart
                </button>
                <div className="cart__checkout">
                  <h6 className="d-flex align-items-center justify-content-between">
                    Subtotal
                    <span className="fs-4 fw-bold">${cart.totalAmount}</span>
                  </h6>
                  <p className="fs-6 mt-2">
                    Taxes and shipping will calculate in checkout
                  </p>
                  <div>
                    <button className="buy__btn w-100">
                      <Link to="/checkout">Checkout</Link>
                    </button>

                    <button className="buy__btn w-100 mt-3">
                      <Link to="/shop">Continue Shopping</Link>
                    </button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

const Tr = ({ item }) => {
  const dispatch = useDispatch()

  const deleteProduct = () => {
    dispatch(cartActions.deleteItem(item.id))
  }

  const handleDecreaseCart = () => {
    dispatch(cartActions.decreaseCart(item))
  }

  const handleAddToCart = () => {
    dispatch(cartActions.addItem(item))
  }

  return (
    <tr>
      <td>
        <img src={item.imgUrl} alt="" />
      </td>
      <td>{item.productName}</td>
      <td>${item.price}</td>

      <td>
        <div className="cart-product-quantity">
          <button onClick={() => handleDecreaseCart(item)}>-</button>
          <div className="count">{item.quantity}</div>
          <button onClick={() => handleAddToCart(item)}>+</button>
        </div>{' '}
      </td>
      <td>
        <div className="cart-product-total-price">
          ${item.price * item.quantity}
        </div>
      </td>
      <td>
        <motion.i whileTap={{ scale: 1.2 }} onClick={deleteProduct}>
          <RiDeleteBinLine />
        </motion.i>
      </td>
    </tr>
  )
}

export default Cart
