import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginAction } from '../../../../redux/slice/userSlice'
import './LoginPage.scss'

function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const handleSubmit = (e, value) => {
    e.preventDefault()
    dispatch(loginAction(value))
  }
  return (
    <div className="container">
      <h1>LOGIN</h1>
      <form action="" className="form-container">
        <div className="form-row">
          <label htmlFor="" className="form-label">
            Email
          </label>
          <input
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            type="text"
            placeholder="Email"
            name="title"
            className="form-input"
          />
        </div>
        <div className="form-row">
          <label htmlFor="" className="form-label">
            Password
          </label>
          <input
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            type="text"
            placeholder="Password"
            name="title"
            className="form-input"
          />
        </div>
        <button onClick={handleSubmit} className="btn-save">
          Submit
        </button>
      </form>
    </div>
  )
}

export default LoginPage
