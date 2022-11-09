// import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
// Components
// import { Footer, Header } from './components'
// import NotFound from './components/notfound/NotFound'
// Pages
// import { Home, Contact } from './pages'
// // import Homepage from './pages/hompage/Hompage'
import { Navigate, Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
// import Layout from './components/layout/Layout'
import CustomerLayout from './layouts/customer-layout/CustomerLayout'
// import StaffLayout from './layouts/staff-layout/StaffLayout'
import Cart from './pages/cart/Cart'
import Homepage from './pages/hompage/Hompage'
import ProductCard from './pages/productCard/ProductCard'
import ProductDetail from './pages/productDetail/ProductDetail'
import ProductList from './pages/productList/ProductList'
import Shop from './pages/shop/Shop'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* 
          <Route path="/customer/login" element={<FullLayout content={<Login role={"CUSTOMER"}/>} />
           <Route path="/admin/login" element={<FullLayout content={<Login role={"ADMIN"}/>} />
           <Route path="/staff/login" element={<FullLayout content={<Login role={"STAFF"}/>} /> */}
          {/* Customer site  */}
          <Route path="/" element={<CustomerLayout content={<Homepage />} />} />
          <Route
            path="home"
            element={<CustomerLayout content={<Homepage />} />}
          />
          <Route path="/cart" element={<CustomerLayout content={<Cart />} />} />
          <Route path="/shop" element={<CustomerLayout content={<Shop />} />} />
          <Route
            path="/product-list"
            element={<CustomerLayout content={<ProductList />} />}
          />
          <Route
            path="/shop/:id"
            element={<CustomerLayout content={<ProductDetail />} />}
          />
          <Route
            path="/product-card"
            element={<CustomerLayout content={<ProductCard />} />}
          />
          {/* Staff layout */}

          {/* <Route
            path="/staff/product"
            element={<StaffLayout content={<ProductManagement />} />}
          />
          <Route
            path="/staff/order"
            element={<StaffLayout content={<OrderManagement />} />}
          /> */}

          {/* <Route path="home" element={<Homepage />} />
          <Route path="shop" element={<Shop />} />
          <Route path="shop/:id" element={<ProductCard />} />
          <Route path="cart" element={<Cart />} /> */}
        </Routes>
      </BrowserRouter>
      {/* <BrowserRouter>
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="/contact" element={<Contact />} />
          <Navigate to="/not-found" />
        </Routes>
        <Footer />
      </BrowserRouter> */}

      {/* // <Layout /> */}
    </div>
  )
}

export default App
