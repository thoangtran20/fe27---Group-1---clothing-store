import React from 'react'
import { useNavigate } from 'react-router'
import { ROUTERS } from '../constants'

const HomeLayouHeader = () => {
  const navigate = useNavigate()

  const gotoLoginPage = () => {
    navigate(ROUTERS.login)
  }
  return (
    <div className="HomeLayouHeader">
      <dir>Header</dir>
      <button>GO TO LOGIN PAGE</button>
    </div>
  )
}

export default HomeLayouHeader
