import React, { useEffect, useState } from "react";


// Import the "useState" and "useEffect" hooks from React
// Soo jiido "useState" iyo "useEffect"
// import  MyProfile from  './component/MyProfile';
// Import the "MyProfile" component
// Soo jiido "MyProfile" component-ka

// Import the "axios" library
// Soo jiido "axios" hoos
import axios from 'axios'

import "./App.css";
import MyProfile from "./components/MyProfile";

function App() {
  const [profile,setProfile]  = useState([])
  const [follower,setFollower] =  useState([])
  const[following,setFollowing] =  useState([])
  // Create 3 states, "profile", "followers", and "following"
  // Samee 3 state, "profile", "followers", iyo "following"

  useEffect(()=>{
    axios.get("https://api.github.com/users/AmiirCloud")
    .then((resp)=>{
      setProfile(resp.data)
      // console.log(resp)
    })

    axios.get("https://api.github.com/users/AmiirCloud/followers")
    .then((resp)=>{
      // console.log(resp)
      setFollower(resp.data)
      
       
    })
    axios.get("https://api.github.com/users/AmiirCloud/following")
    .then((resp)=>{
      // setFollowing(resp)
      // console.log("following",resp)
        setFollowing(resp.data)
    })
  
  },[])
  
  // API for Followers = https://api.github.com/users/<your-github-username>/followers
  // API for Following = https://api.github.com/users/<your-github-username>/following

  // Use axios to fetch data from the API using the useEffect hook
  // Halkaan isticmaal axios adigoo kasoo jiidanaayo waxaa u baahantahay API, useEffect hook-na isticmaal
    
  return (<>
      {/* {console.log("following",following)} */}
    
    <div className="bg-white md:mx-auto rounded shadow-xl w-full md:w-1/2 overflow-hidden">
      <div className="h-[140px] bg-gradient-to-r from-cyan-500 to-blue-500"></div>
      {/* Show "MyProfile" component here and give it 3 props, "profile", "followers", and "following" */}
      {/* Halkaan soo gali "MyProfile", 3 props-na sii, "profile", "followers", iyo "following" */}
      <MyProfile profile={profile} followers = {follower}  following={following}/>
      {/* {console.log(following)} */}
      {/* <MyProfile profile={profile} setFollower={follower} following={following} /> */}
      {/* {console.log(follower?:"Loading")} */}
      
      {/* {console.log("follower",follower)} */}

      
    </div>
    </>
  );
}

export default App;
