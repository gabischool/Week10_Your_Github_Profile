// You don't need to change anything in this file.
// Uma baahnid inaa meeshaan wax ka badasho.

import React from 'react'
import FollowingCard from './FollowingCard'
function FollowingList(props) {

    const {following} = props;

  return (
    <div>
        {following.map((user) => (
            <FollowingCard key={user.id} user={user} />
        ))}
    </div>
  )
}

export default FollowingList