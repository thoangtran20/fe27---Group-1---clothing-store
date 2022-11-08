import React from 'react'
// import Routers from '../../routes/Routers'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'

const CustomerLayout = (props) => {
  return (
    <>
      <Header />
      <div className="main">
        {props.content}
        {/* <Routers /> */}
      </div>
      <Footer />
    </>
  )
}

export default CustomerLayout
