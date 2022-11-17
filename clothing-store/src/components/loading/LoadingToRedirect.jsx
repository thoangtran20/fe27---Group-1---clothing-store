import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router'

const LoadingToRedirect = () => {
  const [count, setCount] = useState(5)
  const navigate = useNavigate()

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((currentCount) => --currentCount)
    }, 1000)

    count === 0 && navigate.push('/login')
    return () => clearInterval(interval)
  }, [count, navigate])
  return (
    <div>
      <p>Redirecting you in {count} seconds</p>
    </div>
  )
}

export default LoadingToRedirect
