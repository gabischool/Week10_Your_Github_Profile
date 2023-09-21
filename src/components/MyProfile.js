// This is the main component where we setup our routing, and pass props to other components.
// Component-gaan waa meesha aan routing-ka soo gashaneyno, wixii props oo App.js nalooga soo dirayna aan component-ka kale u sii diri doono.

import React from 'react'
import { Route, Routes, Link, useLocation } from 'react-router-dom';

// Import "FollowingList" and "FollowersList" components
// Soo jiido "FollowingList" iyo "FollowersList" components-ka
import FollowingList from './following/FollowingList'
import FollowersList from './followers/FollowersList'
// Import "Route", "Routes", "Link", and "useLocation" from react-router-dom
// Ka soo jiido "Route", "Routes", "Link", iyo "useLocation" react-router-dom-ka


function MyProfile(props) {
  const { profile, followers, following } = props;
    // Destructure the props you passed from App.js
    // Kala bixi props-kii lagaaga soo diray App.js

    const location = useLocation();

  return (
    <div className="px-5 py-2 flex flex-col gap-3 pb-6">
    <div className="h-[90px] shadow-md w-[90px] rounded-full border-4 overflow-hidden -mt-14 border-white">
      <img
        src={profile.avatar_url} alt={profile.login}
        className="w-full h-full rounded-full object-center object-cover"
      />
    </div>
    <div className="">
      <h3 className="text-xl text-slate-900 relative font-bold leading-6">
        {profile.name}
      </h3>
      <p className="text-sm text-gray-600">@{profile.login}</p>
    </div>
    <h4 className="text-md font-medium leading-3">About</h4>
    <p className="text-sm text-stone-500">
     {profile.bio}
    </p>

    <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
        <ul className="flex flex-wrap -mb-px">
            <li className="mr-2">
            <Link to="/" className={`inline-block p-4 ${location.pathname === "/" ? "text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500" : "border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"}`}>Followers</Link>
            </li>
            <li className="mr-2">
            <Link to="/following" className={`inline-block p-4 ${location.pathname === "/following" ? "text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500" : "border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"}`}>Following</Link>
            </li>
        </ul>
    </div>

    <div className="flex flex-col gap-3">
      
    {/** Use Routes and Route to show "FollowingList" and "FollowersList" components and send them their props, Make sure they both have correct path */}
    {/** Adigoo isticmaalaayo Routes iyo Route, tus 
     * "FollowingList" iyo "FollowersList", una dir props-ka ay
     *  u baahanyihiin. Hubi in "FollowersList" ay Path="/" leedahay, 
     * "FollowingList"-na ay Path="/following" leedahay */}

<Routes>
          <Route path="/" element={<FollowersList followers={followers} />} />
          <Route path="/following" element={<FollowingList following={following} />} />
        </Routes>

    </div>
  </div>
  )
}



export default MyProfile

  