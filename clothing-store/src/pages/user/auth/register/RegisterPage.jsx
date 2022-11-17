import React from 'react'
import { useState } from 'react'
import { FaAngleLeft, FaUserPlus } from 'react-icons/fa'
import './RegisterPage.scss'
import { Link, useNavigate } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux'
// import { useEffect } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../../../firebase/firebaseConfig'
import Loader from '../../../../components/loader/Loader'
import Card from '../../../../components/card/Card'
// import { registerInitiate } from '../../../../redux/action'

const RegisterPage = () => {
  const [userState, setUserState] = useState({
    displayName: '',
    email: '',
    password: '',
    passwordConfirm: '',
  })

  const [isLoading, setIsLoading] = useState(false)

  // const { currentUser } = useSelector((state) => state.user)

  const navigate = useNavigate()
  // const dispatch = useDispatch()

  const { email, password, displayName, passwordConfirm } = userState

  const registerUser = (e) => {
    e.preventDefault()
    if (password !== passwordConfirm) {
      toast.error('Password does not match!!!')
    }
    setIsLoading(true)

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user
        console.log(user)
        setIsLoading(false)
        toast.success('Register Successful...')
        navigate('/login')
      })
      .catch((error) => {
        console.log(error)
        toast.error(error.message)
        setIsLoading(false)
      })
  }
  const handleChange = (e) => {
    let { name, value } = e.target
    console.log(name)
    console.log(value)
    setUserState({ ...userState, [name]: value })
  }
  return (
    <>
      <ToastContainer />
      {isLoading && <Loader />}
      <Card>
        <div className="register__form">
          <form action="" className="form__signup" onSubmit={registerUser}>
            <h1
              className="h3 mb-3 font-weight-nornal"
              style={{ textAlign: 'center' }}
            >
              Sign up
            </h1>
            <input
              type="text"
              id="displayName"
              placeholder="Full Name"
              className="form-control"
              name="displayName"
              onChange={handleChange}
              value={displayName}
              required
            />
            <input
              type="email"
              name="email"
              id="userEmail"
              className="form-control"
              placeholder="Email Address"
              onChange={handleChange}
              value={email}
              required
            />
            <input
              type="password"
              name="password"
              id="inputPassword"
              className="form-control"
              placeholder="Password"
              onChange={handleChange}
              value={password}
              required
            />
            <input
              type="password"
              name="passwordConfirm"
              id="passwordConfirm"
              className="form-control"
              placeholder="Confirm Password"
              onChange={handleChange}
              value={passwordConfirm}
              required
            />
            <button className="btn btn-primary btn-clock" type="submit">
              <i>
                <FaUserPlus />
              </i>
              Sign Up
            </button>
            <span className="navigate">
              <p>Already an account? </p>
              <Link to="/login" className="navLink">
                <i>
                  <FaAngleLeft />
                </i>
                Login
              </Link>
            </span>
          </form>
        </div>
      </Card>
    </>
  )
}

export default RegisterPage
