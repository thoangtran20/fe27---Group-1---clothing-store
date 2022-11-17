import React, { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
import {
  FaFacebookF,
  FaGooglePlusG,
  FaSignInAlt,
  FaUserPlus,
} from 'react-icons/fa'
import './LoginPage.scss'
import { Link, useNavigate } from 'react-router-dom'
// import { useEffect } from 'react'
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth'
import { toast } from 'react-toastify'
import { auth } from '../../../../firebase/firebaseConfig'
import Loader from '../../../../components/loader/Loader'
import Card from '../../../../components/card/Card'

const LoginPage = () => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)

  // const { currentUser } = useSelector((state) => state.user)

  const [userState, setUserState] = useState({
    name: '',
    email: '',
    password: '',
  })

  // const { email, password } = userState()
  // const dispatch = useDispatch()

  const handleChange = (e) => {
    let { name, value } = e.target
    console.log(name)
    console.log(value)
    setUserState({ ...userState, [name]: value })
  }
  // Login with Google
  const provider = new GoogleAuthProvider()

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user
        console.log(user)
        toast.success('Login Successfully')
        navigate('/')
      })
      .catch((error) => {
        toast.error(error.message)
      })
  }

  // Login with Facebook
  const signInWithFacebook = () => {}

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)

    console.log(userState)
    signInWithEmailAndPassword(auth, userState.email, userState.password)
      .then((userCredential) => {
        const user = userCredential.user
        console.log(user)
        setIsLoading(false)
        toast.success('Login Successful...')
        navigate('/')
      })
      .catch((error) => {
        setIsLoading(false)
        toast.error(error.message)
      })
  }

  return (
    <>
      {isLoading && <Loader />}
      <Card>
        <div className="Login">
          <div className="login__form">
            <form className="form__signin" onSubmit={handleSubmit}>
              <h1
                className="h3 mb-3 font-weight-normal"
                style={{ textAlign: 'center' }}
              >
                Sign in
              </h1>
              <div className="social__login">
                <button
                  className="btn google-btn social-btn"
                  type="button"
                  onClick={signInWithGoogle}
                >
                  <span>
                    <i>
                      <FaGooglePlusG />
                    </i>
                    Sign in with Google+
                  </span>
                </button>
                <button
                  className="btn facebook-btn social-btn"
                  type="button"
                  onClick={signInWithFacebook}
                >
                  <span>
                    <i>
                      <FaFacebookF />
                    </i>
                    Sign in with Facebook
                  </span>
                </button>
              </div>
              <p style={{ textAlign: 'center' }}>OR</p>
              <input
                type="email"
                id="inputEmail"
                className="form-control"
                placeholder="Email Address"
                name="email"
                value={userState.email}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                id="inputPassword"
                className="form-control"
                placeholder="Password"
                name="password"
                value={useState.password}
                onChange={handleChange}
                required
              />
              <button className="btn btn-secondary btn-block" type="submit">
                <i>
                  <FaSignInAlt />
                </i>
                Sign In
              </button>
              <hr />
              <p>Don't have an account</p>
              <Link to="/register">
                <button
                  className="btn btn-primary btn-block btn-signup"
                  type="button"
                >
                  <i>
                    <FaUserPlus />
                  </i>
                  Sign up New Account
                </button>
              </Link>
            </form>
          </div>
        </div>
      </Card>
    </>
  )
}

export default LoginPage
