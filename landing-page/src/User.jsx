import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const params = useParams();
  return (
    <div>
      <h3>I am user {params.username}</h3>
    </div>
  )
}

export default User
