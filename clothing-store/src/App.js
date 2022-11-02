import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import LoginPage from './pages/user/auth/login/Login'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Public Route */}
          <Route path="/" element={<Navigate to="/login" />}></Route>
          <Route path={'login'} element={<LoginPage />}></Route>
        </Routes>
      </BrowserRouter>
      {/* <LoginPage /> */}
    </div>
  )
}

export default App
