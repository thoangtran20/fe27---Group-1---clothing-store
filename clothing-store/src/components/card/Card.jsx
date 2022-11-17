import React from 'react'
import styles from './Card.scss'

const Card = ({ children, cardClass }) => {
  return <div className={`${styles.Card} ${cardClass}`}>{children}</div>
}

export default Card
