import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import { ROUTERS } from './constants'
import FullLayout from './layouts/full-layout/FullLayout'
import HomeLayout from './layouts/home-layout/HomeLayout'
import LoginPage from './pages/user/auth/login/LoginPage'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Public Route */}
          <Route path={ROUTERS.home} element={<HomeLayout />}></Route>
          <Route
            path={ROUTERS.login}
            element={<FullLayout content={<LoginPage />} />}
          ></Route>
        </Routes>
      </BrowserRouter>
      {/* <LoginPage /> */}
    </div>
  )
}

export default App
