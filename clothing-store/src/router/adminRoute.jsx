import { useSelector } from 'react-redux'
import React from 'react'
import PropTypes from 'prop-types'
import { Navigate } from 'react-router-dom'

export function AdminRoute(props) {
  const userInfo = useSelector((state) => state.user.userInfoState)

  if (!userInfo.data) return <Navigate to={'/'} />

  if (userInfo.role !== 'ADMIN')
    return <div>Không thể truy cập vào trang Admin</div>

  return <>{props.children}</>
}

AdminRoute.propTypes = {
  children: PropTypes.element.isRequired,
}
