// This is the main component where we setup our routing, and pass props to other components.
// Component-gaan waa meesha aan routing-ka soo gashaneyno, wixii props oo App.js nalooga soo dirayna aan component-ka kale u sii diri doono.
import { useLocation, Routes, Link, Route } from "react-router-dom";
import FollowersList from "./followers/FollowersList";
import { useEffect, useState } from "react";
import axios from "axios";
import FollowingList from "./following/FollowingList";

function MyProfile({ loading, ProfileData }) {
  const location = useLocation();
  const [FollowersData, setFollowersData] = useState([]);
  const [FollowingData, setFollowingData] = useState([]);

  // TODO: fetching folowers and following from api
  useEffect(() => {
    const apiFolowers = `https://api.github.com/users/Cleverprogramer/followers`;
    const apiUrlFolowing = `https://api.github.com/users/Cleverprogramer/following`;
    const GetFollowers = axios.get(apiFolowers);
    const GetFollowing = axios.get(apiUrlFolowing);
    axios.all([GetFollowers, GetFollowing]).then(
      axios.spread((...responses) => {
        setFollowersData(responses[0].data);
        setFollowingData(responses[1].data);
      })
    )
  }, []);

  return (
    loading ? <h2>loading...</h2> : (
      <div className="px-5 py-2 flex flex-col gap-3 pb-6">
        <div className="h-[90px] shadow-md w-[90px] rounded-full border-4 overflow-hidden -mt-14 border-white">
          <img
            src={ProfileData.avatar_url} alt={ProfileData.login}
            className="w-full h-full rounded-full object-center object-cover"
          />
        </div>
        <div className="">
          <Link to={`${ProfileData.html_url}`}><p className="text-sm text-gray-600">@{ProfileData.login}</p></Link>
        </div>
        <h4 className="text-md font-medium leading-3">About</h4>
        <p className="text-sm text-stone-500">
          {ProfileData.bio}
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
          <Routes>
            <Route path="/" element={<FollowersList FollowersData={FollowersData} />} />
            <Route path="/following" element={<FollowingList FollowingData={FollowingData} />} />
          </Routes>
        </div>
      </div>
    )
  )
}



export default MyProfile
