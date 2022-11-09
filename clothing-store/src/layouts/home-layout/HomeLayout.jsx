import React from 'react'
import HomeLayouHeader from '../../components/HomeLayouHeader'

const HomeLayout = (props) => {
  return (
    <div className="HomeLayout">
      <HomeLayouHeader />
      <div className="home-content-wrapper">{props.content}</div>
    </div>
  )
}

export default HomeLayout
