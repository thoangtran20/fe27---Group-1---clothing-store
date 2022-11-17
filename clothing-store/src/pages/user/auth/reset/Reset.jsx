import { sendPasswordResetEmail } from 'firebase/auth'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import './Reset.scss'
import Loader from '../../../../components/loader/Loader'
import { auth } from '../../../../firebase/firebaseConfig'
import Card from '../../../../components/card/Card'

const Reset = () => {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const resetPassword = (e) => {
    e.preventDefault()
    setIsLoading(true)

    sendPasswordResetEmail(auth, email)
      .then(() => {
        setIsLoading(false)
        toast.success('Check your email for a reset link')
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
        <div className="Reset">
          <div className="reset__form">
            <form className="form__reset" onSubmit={resetPassword}>
              <h1
                className="h3 mb-3 font-weight-normal"
                style={{ textAlign: 'center' }}
              >
                Reset Password
              </h1>
              <p style={{ textAlign: 'center' }}>OR</p>
              <input
                type="email"
                id="inputEmail"
                className="form-control"
                placeholder="Email Address"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button className="btn btn-secondary btn-block" type="submit">
                Submit
              </button>
              <div className="navigate">
                <p>
                  <Link to="/login">Login</Link>
                </p>
                <p>
                  <Link to="/register">Register</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </Card>
    </>
  )
}

export default Reset
