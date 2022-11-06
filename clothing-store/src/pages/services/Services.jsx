import React from 'react'
import { RiTruckLine } from 'react-icons/ri'
import { motion } from 'framer-motion'
import { Col, Container, Row } from 'reactstrap'
import ServiceData from '../../data/ServiceData'

import './Services.scss'

const Services = () => {
  return (
    <section className="services">
      <Container>
        <Row>
          {ServiceData.map((item, index) => (
            <Col lg="3" md="4" kye={index}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="service__item"
                style={{ background: `${item.bg}` }}
              >
                <span>
                  <i>{item.icon}</i>
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.subtitle}</p>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Services
