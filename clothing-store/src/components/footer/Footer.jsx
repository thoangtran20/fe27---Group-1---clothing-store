import React from 'react'
import logo from '../../assets/images/eco-logo.png'
import { Col, Container, Row } from 'reactstrap'
import './Footer.scss'

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4">
            <div className="logo">
              <img src={logo} alt="logo" />
              <div></div>
            </div>
          </Col>
          <Col lg="3"></Col>
          <Col lg="2"></Col>
          <Col lg="3"></Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
