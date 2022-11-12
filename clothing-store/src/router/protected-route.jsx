import { useSelector } from 'react-redux'
import React from 'react'
import PropTypes from 'prop-types'
import { Navigate } from 'react-router-dom'

export function ProtectedRoute(props) {
  const userInfo = useSelector((state) => state.user.userInfoState)

  if (!userInfo.data) return <Navigate to={'/'} />

  return <>{props.children}</>
}

ProtectedRoute.propTypes = {
  children: PropTypes.element.isRequired,
}
