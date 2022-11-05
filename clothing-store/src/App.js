// import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
// Components
// import { Footer, Header } from './components'
// import NotFound from './components/notfound/NotFound'
// Pages
// import { Home, Contact } from './pages'
// // import Homepage from './pages/hompage/Hompage'
// import './App.css'

import Layout from './components/layout/Layout'

function App() {
  return (
    <div className="App">
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
      <Layout />
    </div>
  )
}

export default App
