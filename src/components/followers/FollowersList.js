// You don't need to change anything in this file.
// Uma baahnid inaa meeshaan wax ka badasho.

import React from 'react'
import FollowersCard from './FollowersCard'
function FollowersList(props) {
// console.log("folloers",props)
    const { followers } = props;
    console.log(props)
  return (
    <>
      <div>
        {/* {console.log("my Followers",followers)} */}
        {followers.map((user)=>{
          return <FollowersCard key={user.id} user={user} />
        })}
      
    </div>
    </>
  
  )
}

export default FollowersList