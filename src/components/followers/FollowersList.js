// You don't need to change anything in this file.
// Uma baahnid inaa meeshaan wax ka badasho.

import React from 'react'
import FollowersCard from './FollowersCard'
function FollowersList({followers}) {

    // const {followers} = props;

  return (
    <div>
        {followers.map((user) => (
            <FollowersCard key={user.id} user={user} />
        ))}
    </div>
  )
}

export default FollowersList