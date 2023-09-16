

import React from 'react'
import FollowersCard from "./FollowersCard"

const FollowersList = (props) => {

  const {fllow} =  props
  console.log(fllow)

  return (

    <div>
  

  {fllow.map((user) => (
            <FollowersCard key={user.id} user={user} />
        ))}
    </div>
  )
}

export default FollowersList