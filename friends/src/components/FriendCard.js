import React from 'react'

const FriendCard = props => {
  return(
    <div className='friend-card'>
      <p>{props.name}</p>
      <p>{props.age}</p>
      <p>{props.email}</p>
    </div>
  )
}

export default FriendCard