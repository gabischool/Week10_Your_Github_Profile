import React from 'react'
import FollowingCard from "./FollowingCard"
const FollowingList = (props) => {
  console.log(props)
  const {fllow} = props
  console.log(fllow)
  return (
    <div>


      {
        fllow.map((user) => (
          <FollowingCard user ={user}/>
        ))
      }
   
      </div>
  )
}

export default FollowingList